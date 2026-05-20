// Server-only module: getAllKeywords()/allPages touch `fs`. Imported only from
// server components (trending-feed.tsx, discover/page.tsx) — never the client.
import { getAllKeywords, isKeywordLocale } from "@/lib/seo/keywords/loader";
import { keywordUrl } from "@/lib/seo/keywords/types";
import type { KeywordLocale } from "@/lib/seo/keywords/types";
import { allPages } from "@/lib/seo";
import { pageUrl } from "@/lib/seo/types";
import type { Locale } from "@/lib/seo/types";

// A serializable link the poll-card (client component) can render. Computed
// SERVER-SIDE here because keyword/SeoPage loading touches `fs`.
export type RelatedPage = {
  label: string;
  href: string;
  emoji?: string;
  // Exactly one entry (the strongest match) is flagged primary → rendered as
  // the bold "source"-style badge. The rest render as small chips.
  primary?: boolean;
};

const MAX_RESULTS = 6;

// Score a candidate against the poll haystack: a longer matched pattern that
// the poll text contains is a stronger signal. Returns 0 = no match.
function patternScore(haystack: string, patterns: string[]): number {
  let best = 0;
  for (const raw of patterns) {
    const p = (raw ?? "").toLowerCase().trim();
    if (p.length < 3) continue;
    if (haystack.includes(p)) best = Math.max(best, p.length);
  }
  return best;
}

// Match a poll's text against keyword landing pages + SEO landing pages and
// return up to ~6 internal links, the single strongest flagged `primary`.
// Mirrors the matching in app/[slug]/keyword-chips.tsx but locale-aware across
// both content surfaces and ranked so the best result becomes the badge.
export function relatedPagesForPoll(
  question: string,
  options: string[],
  lang: string | null | undefined,
): RelatedPage[] {
  const target: KeywordLocale =
    lang && isKeywordLocale(lang) ? lang : "en";
  const haystack = `${question} ${options.join(" ")}`.toLowerCase();
  if (haystack.trim().length === 0) return [];

  type Scored = RelatedPage & { score: number };
  const scored: Scored[] = [];
  const seenHref = new Set<string>();

  // 1) Keyword landing pages (/mot, /word, /topic/<locale>) — locale-scoped.
  for (const k of getAllKeywords()) {
    if (k.locale !== target) continue;
    const score = patternScore(haystack, k.matchPatterns);
    if (score === 0) continue;
    const href = keywordUrl(k);
    if (seenHref.has(href)) continue;
    seenHref.add(href);
    scored.push({
      label: k.keyword,
      href,
      emoji: k.emoji,
      score: score + 1, // tiny edge: keyword pages are tightly topical
    });
  }

  // 2) SEO landing pages (/idees, /ideas, /guides, /blog, /read) — locale-scoped.
  // Match the poll text against the page's h1/title keywords.
  for (const p of allPages) {
    if (p.locale !== (target as Locale)) continue;
    const tokens = `${p.h1} ${p.title}`
      .toLowerCase()
      .split(/[^\p{L}\p{N}]+/u)
      .filter((w) => w.length >= 4);
    const score = patternScore(haystack, tokens);
    if (score === 0) continue;
    const href = pageUrl(p);
    if (seenHref.has(href)) continue;
    seenHref.add(href);
    scored.push({
      label: p.h1,
      href,
      emoji: p.emoji,
      score,
    });
  }

  if (scored.length === 0) return [];

  scored.sort((a, b) => b.score - a.score);
  const top = scored.slice(0, MAX_RESULTS);
  return top.map((s, i) => ({
    label: s.label,
    href: s.href,
    emoji: s.emoji,
    primary: i === 0,
  }));
}
