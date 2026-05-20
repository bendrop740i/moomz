// Serves /ads.txt for Google AdSense — required for the account to be paid.
// Generated from NEXT_PUBLIC_ADSENSE_CLIENT (ca-pub-XXXX → pub-XXXX). Serves
// an empty 200 body until AdSense is configured — a 204 with a body throws at
// prerender ("Invalid response status code 204") and broke every deploy.

export const dynamic = "force-static";

export function GET() {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
  const body = client
    ? `google.com, ${client.replace(/^ca-/, "")}, DIRECT, f08c47fec0942fa0\n`
    : "";
  return new Response(body, {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
