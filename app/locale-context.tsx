"use client";

import { createContext, useContext, type ReactNode } from "react";
import { t as translate, type Locale } from "@/lib/i18n";

const LocaleContext = createContext<Locale>("fr");

export function LocaleProvider({
  value,
  children,
}: {
  value: Locale;
  children: ReactNode;
}) {
  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale(): Locale {
  return useContext(LocaleContext);
}

export function useT() {
  const locale = useLocale();
  return (key: string) => translate(key, locale);
}
