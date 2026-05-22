import { cookies, headers } from "next/headers";
import { LOCALES, t as translate, type Locale, pickLocaleFromAcceptLanguage } from "./i18n";

export function getLocale(): Locale {
  // 1) URL-based locale — set by middleware.ts when the request came in on a
  //    /{locale}/... SEO URL. This is authoritative: the language is in the URL.
  const headerValue = headers().get("x-moomz-locale") as Locale | null;
  if (headerValue && (LOCALES as string[]).includes(headerValue)) return headerValue;
  // 2) Cookie — the visitor's chosen language (app surface, homepage).
  const cookieValue = cookies().get("moomz_locale")?.value as Locale | undefined;
  if (cookieValue && (LOCALES as string[]).includes(cookieValue)) return cookieValue;
  // 3) Browser Accept-Language.
  return pickLocaleFromAcceptLanguage(headers().get("accept-language"));
}

// Canonical URL for the current request — `https://moomz.com` + the original
// public path (set by middleware as `x-moomz-path`). Correct on locale-prefixed
// SEO routes even though middleware internally rewrites them.
export function canonicalUrl(): string {
  const path = headers().get("x-moomz-path") || "/";
  return `https://moomz.com${path === "/" ? "" : path}`;
}

// Server-side translator factory — mirror of the `useT()` client hook. Pass
// an explicit locale (typically from `getLocale()`) and call the returned
// function with `i18n.ts` keys. Useful for server components that need to
// render locale-aware strings (e.g. topic labels via `getTopicLabel`).
export function getT(locale: Locale): (key: string) => string {
  return (key: string) => translate(key, locale);
}
