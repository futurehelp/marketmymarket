export async function GET() {
  const response = await fetch('https://www.marketmymarket.com/', { cache: 'no-store' });
  const html = await response.text();
  return new Response(html, {
    status: response.status,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
}
