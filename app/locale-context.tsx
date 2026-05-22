"use client";

import { createContext, useContext, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { t as translate, LOCALES, type Locale } from "@/lib/i18n";

const LocaleContext = createContext<Locale>("fr");

const LOC = new Set<string>(LOCALES);

// Twin SEO routes carry a FIXED authored language in their (un-prefixed) name.
// Middleware 301s them to /{loc}/<route>, but a render can still see the bare
// path mid-redirect — map it so the chrome never flashes the wrong language.
const TWIN_LOCALE: Record<string, Locale> = {
  word: "en", ideas: "en", quotes: "en", define: "en",
  mot: "fr", idees: "fr", citations: "fr", definition: "fr",
};

// Locale encoded in the current URL, or null for the cookie-based app surface
// (homepage, /[slug] poll links, /me /play /create /discover …).
function localeFromPath(pathname: string | null): Locale | null {
  if (!pathname) return null;
  const seg = pathname.split("/").filter(Boolean);
  if (seg.length === 0) return null;
  // /{locale}/...  — the standard locale-prefixed SEO surface.
  if (LOC.has(seg[0])) return seg[0] as Locale;
  // /topic/{loc}/... and /citation/{loc}/... — locale is the 2nd segment.
  if ((seg[0] === "topic" || seg[0] === "citation") && LOC.has(seg[1] ?? "")) {
    return seg[1] as Locale;
  }
  // Bare twin routes (pre-redirect) — fixed authored language.
  if (TWIN_LOCALE[seg[0]]) return TWIN_LOCALE[seg[0]];
  return null;
}

function cookieLocale(): Locale | null {
  if (typeof document === "undefined") return null;
  const m = document.cookie.match(/(?:^|;\s*)moomz_locale=([^;]+)/);
  const v = m?.[1];
  return v && LOC.has(v) ? (v as Locale) : null;
}

export function LocaleProvider({
  value,
  children,
}: {
  value: Locale;
  children: ReactNode;
}) {
  const pathname = usePathname();
  // The root layout is rendered ONCE and is never re-rendered on client-side
  // navigation, so the server-provided `value` (a frozen getLocale() result)
  // goes stale the instant the visitor moves to a URL in another language —
  // via the language switcher or any cross-locale link. That left the
  // persistent chrome (header, bottom nav, footer, the switcher itself) stuck
  // in the previous language: the long-standing "navigation language bug".
  //
  // Fix: re-derive the live locale on every render. On the SEO surface the
  // language lives in the URL, so `usePathname()` (which DOES update on client
  // nav) is authoritative; on the cookie-based app surface we read the cookie
  // synchronously — it matches `value` at hydration, and stays correct after a
  // setLocale()+refresh because this component re-renders.
  const resolved: Locale = localeFromPath(pathname) ?? cookieLocale() ?? value;
  return (
    <LocaleContext.Provider value={resolved}>{children}</LocaleContext.Provider>
  );
}

export function useLocale(): Locale {
  return useContext(LocaleContext);
}

export function useT() {
  const locale = useLocale();
  return (key: string) => translate(key, locale);
}
