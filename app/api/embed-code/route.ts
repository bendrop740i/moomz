export const dynamic = "force-dynamic";

const SLUG_RE = /^[a-zA-Z0-9-]{1,32}$/;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug") ?? "";

  if (!SLUG_RE.test(slug)) {
    return Response.json({ error: "invalid_slug" }, { status: 400 });
  }

  const snippet = `<iframe src="https://moomz.com/embed/${slug}" width="100%" height="380" frameborder="0" loading="lazy" style="border-radius:16px;max-width:480px;"></iframe>`;

  return Response.json({ snippet });
}
