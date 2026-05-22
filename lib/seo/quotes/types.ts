// Per-theme SEO quote page. Each page collects ~8 hand-picked, correctly
// attributed quotes around one universal theme (love, motivation, life…),
// in one locale. It ships substantive editorial copy + a server-side dynamic
// list of moomz polls whose question/options match the theme's patterns —
// so every poll about love links out to the love-quotes page, and back.

export type QuoteLocale =
  | "fr"
  | "en"
  | "es"
  | "it"
  | "pt"
  | "de"
  | "ja"
  | "zh";

// One quote. `author` is mandatory and must be a real, correctly-attributed
// person ("Anonyme" / "Proverbe" allowed for genuine proverbs). `source` is
// the optional work / context.
export type Quote = {
  text: string;
  author: string;
  source?: string;
};

export type QuoteFaq = { q: string; a: string };

export type QuotePage = {
  // Unique slug within the locale, kebab-case, ASCII-only.
  // URL: /citations/<slug> (fr), /quotes/<slug> (en),
  // /citation/<locale>/<slug> for the other 6 locales.
  slug: string;
  locale: QuoteLocale;
  // Stable English theme id shared across all 8 locales (love, motivation…),
  // used only for hub grouping.
  theme: string;
  // Short chip label rendered below polls + in hubs (e.g. "Amour", "Love").
  label: string;
  emoji: string;
  // Lowercased substrings used as ilike filters on polls.question / options
  // AND to surface this page below matching polls.
  matchPatterns: string[];
  // <title> tag + meta description.
  title: string;
  h1: string;
  description: string;
  // 150-280 word lead paragraph rendered above the quotes.
  intro: string;
  // 6-10 hand-picked, correctly attributed quotes — the core of the page.
  quotes: Quote[];
  faq: QuoteFaq[];
  // Slugs of related quote pages in the SAME locale. Renders as chips.
  related: string[];
  updatedAt: string;
};

export function quoteUrl(p: QuotePage): string {
  // Locale-prefixed so the link hits the middleware rewrite, never a 301.
  if (p.locale === "fr") return `/fr/citations/${p.slug}`;
  if (p.locale === "en") return `/en/quotes/${p.slug}`;
  return `/citation/${p.locale}/${p.slug}`;
}

export function quoteHubUrl(locale: QuoteLocale): string {
  if (locale === "fr") return "/fr/citations";
  if (locale === "en") return "/en/quotes";
  return `/citation/${locale}`;
}
