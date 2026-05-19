// Cloudflare R2 helpers.
//
// We serve music tracks from R2 via a PUBLIC bucket fronted by a custom
// domain (e.g. music.moomz.com) so the browser hits R2's edge CDN directly
// — the /api/track/[id] route only does a 302 redirect, no proxying, no
// per-play Vercel function bandwidth. R2 egress to the public internet is
// free, which is the whole point of the migration off Vercel Blob.
//
// Environment:
//   R2_PUBLIC_BASE_URL  - required at runtime. Public domain serving the
//                         bucket. e.g. https://music.moomz.com or
//                         https://pub-<hash>.r2.dev for the default
//                         Cloudflare-provided URL.
//
//   (Upload scripts use additional creds — see scripts/upload-music.mjs.)

const TRAILING_SLASH = /\/+$/;

export function getR2PublicBase(): string | null {
  const raw = process.env.R2_PUBLIC_BASE_URL?.trim();
  if (!raw) return null;
  return raw.replace(TRAILING_SLASH, "");
}

/**
 * Build the public URL for a given R2 object key.
 *
 * `key` is the object path inside the bucket — same value we store in
 * `tracks.blob_url` (legacy column name, kept during the migration window).
 * Returns null when R2_PUBLIC_BASE_URL is not configured, so callers can
 * fall back to the legacy Vercel Blob path.
 */
export function r2PublicUrl(key: string): string | null {
  const base = getR2PublicBase();
  if (!base) return null;
  // Allow keys with or without a leading slash; never double up.
  const clean = key.replace(/^\/+/, "");
  return `${base}/${clean}`;
}
