import { cookies, headers } from "next/headers";
import { LOCALES, type Locale, pickLocaleFromAcceptLanguage } from "./i18n";

export function getLocale(): Locale {
  const cookieValue = cookies().get("moomz_locale")?.value as Locale | undefined;
  if (cookieValue && (LOCALES as string[]).includes(cookieValue)) return cookieValue;
  return pickLocaleFromAcceptLanguage(headers().get("accept-language"));
}
