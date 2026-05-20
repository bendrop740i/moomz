// Serves /ads.txt for Google AdSense — required for the account to be paid.
// Generated from NEXT_PUBLIC_ADSENSE_CLIENT (ca-pub-XXXX → pub-XXXX). Returns
// 204 (empty) until AdSense is configured.

export const dynamic = "force-static";

export function GET() {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
  if (!client) return new Response("", { status: 204 });
  const pub = client.replace(/^ca-/, "");
  return new Response(`google.com, ${pub}, DIRECT, f08c47fec0942fa0\n`, {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
