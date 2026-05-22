import type { Locale } from "@/lib/i18n";
import { routeSeg } from "./route-names";

// Locale-correct internal URLs for the SEO surface. The SEO routes live at
// /{locale}/<segment> (see middleware.ts); linking straight to that form lets
// internal nav land on the right page instead of taking a 301 through the bare
// route. Use these helpers in nav components instead of hardcoding "/quiz" etc.

// Uniform SEO hubs & tools — quiz, template, compare, guides, blog, read, vs,
// explore, outils + the localized tool routes — resolve to /{loc}/<segment>.
// routeSeg() applies the per-locale segment name (courses/cursos, …) when one
// exists, otherwise the route passes through unchanged.
export function seoHref(route: string, locale: Locale): string {
  return `/${locale}/${routeSeg(route, locale)}`;
}

// Keyword section: dedicated twin routes for en/fr, /topic/<loc> for the rest.
export function keywordHubHref(locale: Locale): string {
  if (locale === "en") return "/en/word";
  if (locale === "fr") return "/fr/mot";
  return `/topic/${locale}`;
}

// Quote section: dedicated twin routes for en/fr, /citation/<loc> for the rest.
export function quoteHubHref(locale: Locale): string {
  if (locale === "en") return "/en/quotes";
  if (locale === "fr") return "/fr/citations";
  return `/citation/${locale}`;
}

// Poll-ideas section: /idees and /ideas are fixed fr/en twin routes; every
// other locale falls back to the English hub until per-locale ideas ship.
export function ideasHubHref(locale: Locale): string {
  return locale === "fr" ? "/fr/idees" : "/en/ideas";
}

// Dictionary is EN + FR only (define / definition twin).
export function dictHubHref(locale: Locale): string {
  return locale === "fr" ? "/fr/definition" : "/en/define";
}
