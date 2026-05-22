// Locale-aware URL rewriting for the language switcher.
//
// The SEO surface uses URL-based locale routing (see middleware.ts): the
// language lives in the path — /en/quiz, /es/cursos, /topic/de/<slug>, …
// `getLocale()` reads it from the URL, NOT the cookie. So switching language
// must NAVIGATE to the equivalent URL in the new locale — just setting the
// cookie + refreshing keeps the old `/en/` URL and changes nothing.
//
// `switchLocalePath()` maps the current pathname onto its target-locale twin.
// Returns null when the page is cookie-based (homepage, poll short-links, the
// app surface) and only needs a refresh.

import { LOCALES } from "./i18n";
import { SEGMENT_TO_CANONICAL, routeSeg } from "./seo/route-names";

const LOC = new Set<string>(LOCALES);

// Keyword & quote sections have a per-locale URL shape (twin routes for en/fr,
// a /topic/<loc> & /citation/<loc> segment route for the other six). Their
// detail-page slugs are authored per language and never match across locales,
// so switching a detail page lands on the hub of the target locale.
function keywordHub(loc: string): string {
  if (loc === "en") return "/en/word";
  if (loc === "fr") return "/fr/mot";
  return `/topic/${loc}`;
}
function quoteHub(loc: string): string {
  if (loc === "en") return "/en/quotes";
  if (loc === "fr") return "/fr/citations";
  return `/citation/${loc}`;
}

const KEYWORD_NAMES = new Set(["word", "mot"]); // + segment route "topic"
const QUOTE_NAMES = new Set(["quotes", "citations"]); // + segment route "citation"
const DICT_NAMES = new Set(["define", "definition"]); // en/fr only

/**
 * Equivalent pathname for `pathname` in `target` locale, or null if the page
 * is cookie-based and only needs a refresh.
 */
export function switchLocalePath(pathname: string, target: string): string | null {
  const segs = pathname.split("/").filter(Boolean);
  if (segs.length === 0) return null; // homepage — cookie locale

  // /topic/<loc>/...  — keyword segment route (es..zh)
  if (segs[0] === "topic" && LOC.has(segs[1] ?? "")) return keywordHub(target);
  // /citation/<loc>/... — quote segment route (es..zh)
  if (segs[0] === "citation" && LOC.has(segs[1] ?? "")) return quoteHub(target);
  // /vs/<loc>/<slug> — vs detail (locale is the 2nd segment)
  if (segs[0] === "vs" && LOC.has(segs[1] ?? "")) {
    return segs[2] ? `/vs/${target}/${segs[2]}` : `/${target}/vs`;
  }

  // /<loc>/...  — the standard locale-prefixed SEO surface
  if (LOC.has(segs[0])) {
    const rest = segs.slice(1);
    if (rest.length === 0) return "/"; // bare locale → homepage

    // /<loc>/vs/<loc2>/<slug> — vs detail after the middleware redirect
    if (rest[0] === "vs" && LOC.has(rest[1] ?? "") && rest[2]) {
      return `/${target}/vs/${target}/${rest[2]}`;
    }

    const seg0 = rest[0];
    const tail = rest.slice(1); // [] for a hub, [slug,…] for a detail page

    // Keyword / quote twin → target-locale hub (per-locale slugs don't map).
    if (KEYWORD_NAMES.has(seg0)) return keywordHub(target);
    if (QUOTE_NAMES.has(seg0)) return quoteHub(target);
    // Dictionary is en/fr only; other locales have no dictionary surface.
    if (DICT_NAMES.has(seg0)) {
      if (target === "en") return tail.length ? `/en/define/${tail.join("/")}` : "/en/define";
      if (target === "fr")
        return tail.length ? `/fr/definition/${tail.join("/")}` : "/fr/definition";
      return "/";
    }

    // Generic: swap the locale, re-localize the route-name segment
    // (courses↔cursos, converter↔conversor, …), keep the slug — every
    // hub/detail page renders under any locale prefix.
    const canon = SEGMENT_TO_CANONICAL[seg0] ?? seg0;
    return "/" + [target, routeSeg(canon, target), ...tail].join("/");
  }

  // Poll short-links, /me, /discover, the rest of the app — cookie-based.
  return null;
}
