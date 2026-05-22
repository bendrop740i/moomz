// Per-keyword SEO landing page. Each keyword lives in one locale and ships
// substantive editorial copy + a server-side dynamic list of moomz polls
// whose question or options match the keyword's patterns.

export type KeywordSection = { h: string; body: string };
export type KeywordFaq = { q: string; a: string };

export type KeywordLocale =
  | "fr"
  | "en"
  | "es"
  | "it"
  | "pt"
  | "de"
  | "ja"
  | "zh";

export type KeywordPage = {
  // Unique slug, kebab-case. URL: /mot/<slug> (fr), /word/<slug> (en),
  // /topic/<locale>/<slug> for the other 6 locales.
  slug: string;
  locale: KeywordLocale;
  // Short display label rendered as the H1 (e.g. "Pizza", "Le soleil").
  keyword: string;
  // Lowercased substrings used as ilike filters on polls.question / options.
  matchPatterns: string[];
  // Optional canonical topic group, mostly for grouping in the hub.
  topic?: string;
  // <title> tag, meta description, optional emoji.
  title: string;
  description: string;
  emoji?: string;
  // 200-400 word lead paragraph rendered above the sections.
  intro: string;
  sections: KeywordSection[];
  faq: KeywordFaq[];
  // Slugs of related keyword pages in the SAME locale. Renders as chips.
  related: string[];
  updatedAt: string;
};

export function keywordUrl(p: KeywordPage): string {
  // Locale-prefixed so the link hits the middleware rewrite, never a 301.
  if (p.locale === "fr") return `/fr/mot/${p.slug}`;
  if (p.locale === "en") return `/en/word/${p.slug}`;
  return `/topic/${p.locale}/${p.slug}`;
}
