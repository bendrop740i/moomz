import type { Metadata } from "next";
import { pagesByCategory } from "@/lib/seo";
import SeoHubView from "@/app/_seo/seo-hub";
import { getLocale } from "@/lib/i18n-server";
import type { Locale } from "@/lib/seo/types";

export const metadata: Metadata = {
  title: "Blog moomz : sondage, vibe-check, culture Gen Z",
  description:
    "Analyses et tendances : pourquoi les sondages cartonnent, vibe-check, culture Gen Z, dating poll, sondage anonyme.",
  alternates: { canonical: "https://moomz.com/blog" },
};

// Hub chrome (title + intro) localized for every supported visitor locale.
// NOTE: the posts themselves only exist in FR/EN — this only translates the
// surrounding UI so non-FR/EN visitors aren't shown a French heading.
const BLOG_HUB_COPY: Record<Locale, { title: string; description: string }> = {
  fr: {
    title: "Blog moomz",
    description: "Vibe-check, culture du sondage, comparatifs et viral case studies.",
  },
  en: {
    title: "moomz blog",
    description: "Vibe-check, poll culture, comparisons and viral case studies.",
  },
  es: {
    title: "Blog moomz",
    description: "Vibe-check, cultura de las encuestas, comparativas y casos virales.",
  },
  it: {
    title: "Blog moomz",
    description: "Vibe-check, cultura dei sondaggi, confronti e casi virali.",
  },
  pt: {
    title: "Blog moomz",
    description: "Vibe-check, cultura das enquetes, comparativos e casos virais.",
  },
  de: {
    title: "moomz-Blog",
    description: "Vibe-Check, Umfrage-Kultur, Vergleiche und virale Fallstudien.",
  },
  ja: {
    title: "moomz ブログ",
    description: "バイブチェック、投票カルチャー、比較、バズった事例研究。",
  },
  zh: {
    title: "moomz 博客",
    description: "氛围测试、投票文化、横向对比与爆款案例研究。",
  },
};

export default function BlogHub() {
  const locale = getLocale();
  const all = pagesByCategory("blog");
  // Locale-pure: only the visitor's-language posts. Blog exists in FR/EN
  // only, so non-FR/EN visitors fall back to EN, then to the full pool.
  const pages =
    all.filter((p) => p.locale === locale).length > 0
      ? all.filter((p) => p.locale === locale)
      : all.filter((p) => p.locale === "en").length > 0
        ? all.filter((p) => p.locale === "en")
        : all;
  // Chrome follows the visitor's locale (not the page-content locale) so the
  // heading reads naturally even when the listed posts fall back to EN.
  const copy = BLOG_HUB_COPY[locale] ?? BLOG_HUB_COPY.en;
  return (
    <SeoHubView
      title={copy.title}
      description={copy.description}
      pages={pages}
      locale={locale}
    />
  );
}
