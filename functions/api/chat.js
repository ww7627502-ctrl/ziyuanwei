export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const body = await request.json();

    const messages = Array.isArray(body.messages)
      ? body.messages
      : [{ role: 'user', content: body.message || '' }];

    const contextInfo = body.context || {};

    const promptMessages = [
      {
        role: 'system',
        content:
          '你是一个中文运营配置助手。回答要直接、简洁、可复制。优先根据当前资源位和用户输入生成可用文案。'
      },
      {
        role: 'user',
        content:
          `当前页面标题：${contextInfo.pageTitle || ''}\n` +
          `当前资源位：${contextInfo.activeResource || '未选择'}\n` +
          `当前地址：${contextInfo.url || ''}`
      },
      ...messages
        .filter(item => item && item.content)
        .map(item => ({
          role: item.role === 'assistant' ? 'assistant' : 'user',
          content: String(item.content)
        }))
    ];

    const aiResult = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
      messages: promptMessages
    });

    const reply =
      aiResult.response ||
      aiResult.result ||
      aiResult.text ||
      JSON.stringify(aiResult);

    return Response.json({
      reply
    });
  } catch (error) {
    return Response.json(
      {
        reply: 'AI 接口调用失败：' + error.message
      },
      {
        status: 500
      }
    );
  }
}

export async function onRequestGet() {
  return Response.json({
    ok: true,
    message: 'AI chat API is running.'
  });
}