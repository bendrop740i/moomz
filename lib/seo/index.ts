import type { Category, Locale, SeoPage } from "./types";
import { idees1 } from "./idees-1";
import { idees2 } from "./idees-2";
import { ideasEn } from "./ideas-en";
import { guides } from "./guides";
import { blog } from "./blog";
import { extras } from "./extras";
import { read } from "./read";

export const allPages: SeoPage[] = [
  ...idees1,
  ...idees2,
  ...ideasEn,
  ...guides,
  ...blog,
  ...extras,
  ...read,
];

export function pagesByCategory(category: Category): SeoPage[] {
  return allPages.filter((p) => p.category === category);
}

export function pagesByLocale(locale: Locale): SeoPage[] {
  return allPages.filter((p) => p.locale === locale);
}

export function findPage(category: Category, slug: string): SeoPage | null {
  return allPages.find((p) => p.category === category && p.slug === slug) ?? null;
}

export function relatedPages(page: SeoPage): SeoPage[] {
  if (!page.related?.length) return [];
  return page.related
    .map((slug) => {
      // search across all categories — related slug is usually in the same category but not always
      return (
        allPages.find((p) => p.slug === slug && p.locale === page.locale) ??
        allPages.find((p) => p.slug === slug)
      );
    })
    .filter((p): p is SeoPage => Boolean(p));
}

export { allPages as default };
