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
import { ideasEs1 } from "./ideas-es-1";
import { ideasEs2 } from "./ideas-es-2";
import { ideasEs3 } from "./ideas-es-3";
import { ideasEs4 } from "./ideas-es-4";
import { ideasEs5 } from "./ideas-es-5";
import { ideasEs6 } from "./ideas-es-6";
import { ideasIt1 } from "./ideas-it-1";
import { ideasIt2 } from "./ideas-it-2";
import { ideasIt3 } from "./ideas-it-3";
import { ideasIt4 } from "./ideas-it-4";
import { ideasIt5 } from "./ideas-it-5";
import { ideasIt6 } from "./ideas-it-6";
import { ideasPt1 } from "./ideas-pt-1";
import { ideasPt2 } from "./ideas-pt-2";
import { ideasPt3 } from "./ideas-pt-3";
import { ideasPt4 } from "./ideas-pt-4";
import { ideasPt5 } from "./ideas-pt-5";
import { ideasPt6 } from "./ideas-pt-6";
import { ideasDe1 } from "./ideas-de-1";
import { ideasDe2 } from "./ideas-de-2";
import { ideasDe3 } from "./ideas-de-3";
import { ideasDe4 } from "./ideas-de-4";
import { ideasDe5 } from "./ideas-de-5";
import { ideasDe6 } from "./ideas-de-6";
import { ideasJa1 } from "./ideas-ja-1";
import { ideasJa2 } from "./ideas-ja-2";
import { ideasJa3 } from "./ideas-ja-3";
import { ideasJa4 } from "./ideas-ja-4";
import { ideasJa5 } from "./ideas-ja-5";
import { ideasJa6 } from "./ideas-ja-6";
import { ideasZh1 } from "./ideas-zh-1";
import { ideasZh2 } from "./ideas-zh-2";
import { ideasZh3 } from "./ideas-zh-3";
import { ideasZh4 } from "./ideas-zh-4";
import { ideasZh5 } from "./ideas-zh-5";
import { ideasZh6 } from "./ideas-zh-6";

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
  ...ideasEs1, ...ideasEs2, ...ideasEs3, ...ideasEs4, ...ideasEs5, ...ideasEs6,
  ...ideasIt1, ...ideasIt2, ...ideasIt3, ...ideasIt4, ...ideasIt5, ...ideasIt6,
  ...ideasPt1, ...ideasPt2, ...ideasPt3, ...ideasPt4, ...ideasPt5, ...ideasPt6,
  ...ideasDe1, ...ideasDe2, ...ideasDe3, ...ideasDe4, ...ideasDe5, ...ideasDe6,
  ...ideasJa1, ...ideasJa2, ...ideasJa3, ...ideasJa4, ...ideasJa5, ...ideasJa6,
  ...ideasZh1, ...ideasZh2, ...ideasZh3, ...ideasZh4, ...ideasZh5, ...ideasZh6,
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
