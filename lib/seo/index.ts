import type { Category, Locale, SeoPage } from "./types";
import { idees1 } from "./idees-1";
import { idees2 } from "./idees-2";
import { idees3 } from "./idees-3";
import { ideasEn } from "./ideas-en";
import { ideasEn2 } from "./ideas-en-2";
import { guides } from "./guides";
import { guides2 } from "./guides-2";
import { blog } from "./blog";
import { blog2 } from "./blog-2";
import { blog3 } from "./blog-3";
import { extras } from "./extras";
import { read } from "./read";
import { seoVs } from "./seo-vs";
import { seoFormats } from "./seo-formats";

export const allPages: SeoPage[] = [
  ...idees1,
  ...idees2,
  ...idees3,
  ...ideasEn,
  ...ideasEn2,
  ...guides,
  ...guides2,
  ...blog,
  ...blog2,
  ...blog3,
  ...extras,
  ...read,
  ...seoVs,
  ...seoFormats,
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
