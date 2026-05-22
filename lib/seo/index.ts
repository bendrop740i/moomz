import type { Category, Locale, SeoPage } from "./types";
import { idees1 } from "./idees-1";
import { idees2 } from "./idees-2";
import { idees3 } from "./idees-3";
import { ideasEn } from "./ideas-en";
import { ideasEn2 } from "./ideas-en-2";
import { ideasEn3 } from "./ideas-en-3";
import { guides } from "./guides";
import { guides2 } from "./guides-2";
import { guidesEs } from "./guides-es";
import { guidesIt } from "./guides-it";
import { guidesPt } from "./guides-pt";
import { guidesDe } from "./guides-de";
import { guidesJa } from "./guides-ja";
import { guidesZh } from "./guides-zh";
import { blog } from "./blog";
import { blog2 } from "./blog-2";
import { blog3 } from "./blog-3";
import { blogEs1 } from "./blog-es-1";
import { blogEs2 } from "./blog-es-2";
import { blogIt1 } from "./blog-it-1";
import { blogIt2 } from "./blog-it-2";
import { blogPt1 } from "./blog-pt-1";
import { blogPt2 } from "./blog-pt-2";
import { blogDe1 } from "./blog-de-1";
import { blogDe2 } from "./blog-de-2";
import { blogJa1 } from "./blog-ja-1";
import { blogJa2 } from "./blog-ja-2";
import { blogZh1 } from "./blog-zh-1";
import { blogZh2 } from "./blog-zh-2";
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
  ...ideasEn3,
  ...guides,
  ...guides2,
  ...guidesEs,
  ...guidesIt,
  ...guidesPt,
  ...guidesDe,
  ...guidesJa,
  ...guidesZh,
  ...blog,
  ...blog2,
  ...blog3,
  ...blogEs1,
  ...blogEs2,
  ...blogIt1,
  ...blogIt2,
  ...blogPt1,
  ...blogPt2,
  ...blogDe1,
  ...blogDe2,
  ...blogJa1,
  ...blogJa2,
  ...blogZh1,
  ...blogZh2,
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
