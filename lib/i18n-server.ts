import { cookies, headers } from "next/headers";
import { LOCALES, t as translate, type Locale, pickLocaleFromAcceptLanguage } from "./i18n";

export function getLocale(): Locale {
  const cookieValue = cookies().get("moomz_locale")?.value as Locale | undefined;
  if (cookieValue && (LOCALES as string[]).includes(cookieValue)) return cookieValue;
  return pickLocaleFromAcceptLanguage(headers().get("accept-language"));
}

// Server-side translator factory — mirror of the `useT()` client hook. Pass
// an explicit locale (typically from `getLocale()`) and call the returned
// function with `i18n.ts` keys. Useful for server components that need to
// render locale-aware strings (e.g. topic labels via `getTopicLabel`).
export function getT(locale: Locale): (key: string) => string {
  return (key: string) => translate(key, locale);
}
