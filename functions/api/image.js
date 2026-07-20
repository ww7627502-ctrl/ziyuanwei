export async function onRequestPost({ request, env }) {
  const body = await request.json();
  const prompt = body.prompt;

  if (!prompt) {
    return Response.json({ error: "缺少 prompt" }, { status: 400 });
  }

  const image = await env.AI.run("@cf/stabilityai/stable-diffusion-xl-base-1.0", {
    prompt
  });

  return new Response(image, {
    headers: {
      "content-type": "image/png"
    }
  });
}