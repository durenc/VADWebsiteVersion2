export async function onRequest(context) {
  return new Response('Hello from Cloudflare Pages Function', {
    status: 200,
    headers: { 'Content-Type': 'text/plain; charset=utf-8' }
  })
}
