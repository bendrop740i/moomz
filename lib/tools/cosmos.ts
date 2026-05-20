// NASA Astronomy Picture of the Day (APOD) helpers.
// API: https://api.nasa.gov/planetary/apod
// We use DEMO_KEY which is rate-limited but free and key-less.

export type ApodMediaType = "image" | "video" | "other";

export type Apod = {
  date: string; // YYYY-MM-DD
  title: string;
  explanation: string;
  url: string;
  hdurl?: string;
  media_type: ApodMediaType;
  copyright?: string;
  service_version?: string;
  thumbnail_url?: string;
};

// First APOD ever was 1995-06-16.
const APOD_EPOCH = "1995-06-16";

// Generate the last 60 days as pre-rendered slugs.
export const COSMOS_SLUGS: string[] = (() => {
  const out: string[] = [];
  const today = new Date();
  for (let i = 0; i < 60; i++) {
    const d = new Date(today);
    d.setUTCDate(d.getUTCDate() - i);
    out.push(d.toISOString().slice(0, 10));
  }
  return out;
})();

export function isValidCosmosDate(s: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(s)) return false;
  const d = new Date(s + "T00:00:00Z");
  if (Number.isNaN(d.getTime())) return false;
  const epoch = new Date(APOD_EPOCH + "T00:00:00Z");
  const now = new Date();
  // Allow up to "today" UTC inclusive (APOD updates around 05:00 UTC).
  const todayUtc = new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()),
  );
  return d >= epoch && d <= todayUtc;
}

export function todayCosmosDate(): string {
  const now = new Date();
  return new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()),
  )
    .toISOString()
    .slice(0, 10);
}

export function prevCosmosDate(date: string): string | null {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return null;
  const d = new Date(date + "T00:00:00Z");
  d.setUTCDate(d.getUTCDate() - 1);
  const out = d.toISOString().slice(0, 10);
  return isValidCosmosDate(out) ? out : null;
}

export function nextCosmosDate(date: string): string | null {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return null;
  const d = new Date(date + "T00:00:00Z");
  d.setUTCDate(d.getUTCDate() + 1);
  const out = d.toISOString().slice(0, 10);
  return isValidCosmosDate(out) ? out : null;
}

export function recentCosmosDates(count: number, fromDate?: string): string[] {
  const start = fromDate && isValidCosmosDate(fromDate) ? fromDate : todayCosmosDate();
  const out: string[] = [];
  const d = new Date(start + "T00:00:00Z");
  for (let i = 0; i < count; i++) {
    const iso = d.toISOString().slice(0, 10);
    if (isValidCosmosDate(iso)) out.push(iso);
    d.setUTCDate(d.getUTCDate() - 1);
  }
  return out;
}

function normalizeMediaType(raw: string | undefined): ApodMediaType {
  if (raw === "image" || raw === "video") return raw;
  return "other";
}

export async function fetchApod(date?: string): Promise<Apod | null> {
  const base = "https://api.nasa.gov/planetary/apod";
  const params = new URLSearchParams({ api_key: "DEMO_KEY", thumbs: "true" });
  if (date) params.set("date", date);
  const url = `${base}?${params.toString()}`;
  try {
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) return null;
    const data = (await res.json()) as Partial<Apod> & { media_type?: string };
    if (!data || typeof data !== "object") return null;
    if (!data.date || !data.title || !data.url) return null;
    return {
      date: data.date,
      title: data.title,
      explanation: data.explanation ?? "",
      url: data.url,
      hdurl: data.hdurl,
      media_type: normalizeMediaType(data.media_type),
      copyright: data.copyright?.trim() || undefined,
      service_version: data.service_version,
      thumbnail_url: data.thumbnail_url,
    };
  } catch {
    return null;
  }
}

export function formatDateForLocale(
  date: string,
  locale: string,
): string {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return date;
  try {
    return new Date(date + "T00:00:00Z").toLocaleDateString(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    });
  } catch {
    return date;
  }
}

// Pick an image preview URL — APOD videos expose `thumbnail_url` when
// `thumbs=true` is passed; fall back to a generic placeholder string the
// page layer can swap for a CSS-only tile.
export function previewImageFor(apod: Apod): string | null {
  if (apod.media_type === "image") return apod.url;
  if (apod.thumbnail_url) return apod.thumbnail_url;
  return null;
}
