// /vs/[locale]/[slug] — programmatic comparison hub. Each pair has content
// in one or more locales; the loader merges all files by slug so multiple
// agents can write the same pair in different languages without conflict.

export type VsLocale = "en" | "fr" | "es" | "it" | "pt" | "de" | "ja" | "zh";

export const VS_LOCALES: VsLocale[] = ["en", "fr", "es", "it", "pt", "de", "ja", "zh"];

export type VsCategoryId =
  | "tools"
  | "tech"
  | "cloud"
  | "food"
  | "travel"
  | "science"
  | "chemistry"
  | "animals"
  | "lifestyle"
  | "culture";

export type VsContent = {
  title: string;        // ≤60 chars
  h1: string;           // ≤80 chars
  description: string;  // 130-160 chars
  intro: string;        // 2-3 sentence hook
  pros_a: string[] | string;  // wins for side A (array, or a sentence the UI splits)
  pros_b: string[] | string;  // wins for side B
  verdict: string;      // 2-3 sentences honest take
  faq: Array<{ q: string; a: string }>; // 3-4 items
};

export type VsPair = {
  slug: string;        // kebab-case "notion-vs-obsidian"
  a: string;           // "Notion"
  b: string;           // "Obsidian"
  category: VsCategoryId;
  emoji_a?: string;
  emoji_b?: string;
  content: Partial<Record<VsLocale, VsContent>>;
  updatedAt: string;   // "2026-05-20"
};

export function vsUrl(locale: VsLocale, slug: string): string {
  return `/vs/${locale}/${slug}`;
}

export function slugFromNames(a: string, b: string): string {
  const norm = (s: string) =>
    s
      .toLowerCase()
      .normalize("NFKD")
      .replace(/[̀-ͯ]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  return `${norm(a)}-vs-${norm(b)}`;
}
