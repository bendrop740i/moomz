import { cookies } from "next/headers";

export function readSlugHistory(cookieName: string): string[] {
  const raw = cookies().get(cookieName)?.value;
  if (!raw) return [];
  return raw.split(",").filter(Boolean);
}

const HISTORY_LIMIT = 50;

/**
 * Shared cookie security defaults — keeps every `cookies().set()` lined up on
 * `sameSite: "lax"` and `secure` in production.
 */
export function defaultCookieOptions(
  extra: { httpOnly?: boolean; maxAge?: number; path?: string } = {},
) {
  return {
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
    path: extra.path ?? "/",
    maxAge: extra.maxAge ?? 60 * 60 * 24 * 365,
    httpOnly: extra.httpOnly ?? false,
  };
}

export function pushSlugToHistoryCookie(cookieName: string, slug: string) {
  const jar = cookies();
  const raw = jar.get(cookieName)?.value ?? "";
  const list = raw ? raw.split(",").filter(Boolean) : [];
  const filtered = list.filter((s) => s !== slug);
  filtered.unshift(slug);
  const trimmed = filtered.slice(0, HISTORY_LIMIT);
  jar.set(cookieName, trimmed.join(","), defaultCookieOptions());
}
