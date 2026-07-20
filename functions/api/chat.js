export async function onRequestPost({ request, env }) {
  const { message } = await request.json();

  if (!message) {
    return Response.json({ error: "缺少 message" }, { status: 400 });
  }

  const result = await env.AI.run("@cf/meta/llama-3.1-8b-instruct", {
    messages: [
      {
        role: "system",
        content: "你是一个有帮助的中文助手。"
      },
      {
        role: "user",
        content: message
      }
    ]
  });

  return Response.json({
    reply: result.response || "AI 没有返回内容"
  });
}