import type { Metadata } from "next";
import { pagesByCategory } from "@/lib/seo";
import SeoHubView from "@/app/_seo/seo-hub";
import { getLocale } from "@/lib/i18n-server";
import type { Locale } from "@/lib/seo/types";

const BLOG_META: Record<Locale, { title: string; description: string }> = {
  fr: {
    title: "Blog moomz : sondage, vibe-check, culture Gen Z",
    description: "Analyses et tendances : pourquoi les sondages cartonnent, vibe-check, culture Gen Z, dating poll, sondage anonyme.",
  },
  en: {
    title: "moomz blog: polls, vibe-check, Gen Z culture",
    description: "Trends and analysis: why polls go viral, vibe-checks, Gen Z culture, dating polls, anonymous polls.",
  },
  es: {
    title: "Blog moomz: encuestas, vibe-check, cultura Gen Z",
    description: "Tendencias y análisis: por qué las encuestas se viralizan, vibe-check, cultura Gen Z, encuestas de citas, encuestas anónimas.",
  },
  it: {
    title: "Blog moomz: sondaggi, vibe-check, cultura Gen Z",
    description: "Tendenze e analisi: perché i sondaggi diventano virali, vibe-check, cultura Gen Z, sondaggi di appuntamenti, sondaggi anonimi.",
  },
  pt: {
    title: "Blog moomz: enquetes, vibe-check, cultura Gen Z",
    description: "Tendências e análises: por que enquetes viralizam, vibe-check, cultura Gen Z, enquetes de relacionamento, enquetes anônimas.",
  },
  de: {
    title: "moomz-Blog: Umfragen, Vibe-Check, Gen-Z-Kultur",
    description: "Trends und Analysen: Warum Umfragen viral gehen, Vibe-Checks, Gen-Z-Kultur, Dating-Umfragen, anonyme Umfragen.",
  },
  ja: {
    title: "moomz ブログ：投票、バイブチェック、Z世代カルチャー",
    description: "トレンドと分析：投票がバズる理由、バイブチェック、Z世代カルチャー、匿名投票。",
  },
  zh: {
    title: "moomz 博客：投票、氛围测试、Z世代文化",
    description: "趋势与分析：投票为何走红、氛围测试、Z世代文化、匿名投票。",
  },
};

export function generateMetadata(): Metadata {
  const locale = getLocale();
  const m = BLOG_META[locale] ?? BLOG_META.en;
  return {
    title: m.title,
    description: m.description,
    alternates: { canonical: "https://moomz.com/blog" },
  };
}

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
