import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { findPage, pagesByCategory } from "@/lib/seo";
import { canonicalUrl } from "@/lib/i18n-server";
import type { Locale } from "@/lib/seo/types";
import { seoHref } from "@/lib/seo/seo-href";
import SeoPageView from "@/app/_seo/seo-page";
import { ArticleJsonLd, FaqJsonLd } from "@/app/_seo/json-ld";

const OG_LOCALE: Record<Locale, string> = {
  fr: "fr_FR",
  en: "en_US",
  es: "es_ES",
  it: "it_IT",
  pt: "pt_BR",
  de: "de_DE",
  ja: "ja_JP",
  zh: "zh_CN",
};

// UI chrome — the "back to all stories" link. Keyed off the story's locale,
// since the detail page is per-content-locale (not per-visitor).
const BACK_TO_HUB: Record<Locale, string> = {
  fr: "← Toutes les histoires",
  en: "← All stories",
  es: "← Todas las historias",
  it: "← Tutte le storie",
  pt: "← Todas as histórias",
  de: "← Alle Geschichten",
  ja: "← すべてのストーリー",
  zh: "← 所有故事",
};

export function generateStaticParams() {
  return pagesByCategory("read").map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const page = findPage("read", params.slug);
  if (!page) return {};
  const url = canonicalUrl();
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: url },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      type: "article",
      siteName: "moomz",
      locale: OG_LOCALE[page.locale] ?? "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
    },
  };
}

export default function ReadPage({ params }: { params: { slug: string } }) {
  const page = findPage("read", params.slug);
  if (!page) notFound();
  const backLabel = BACK_TO_HUB[page.locale] ?? BACK_TO_HUB.en;
  return (
    <>
      <ArticleJsonLd page={page} />
      <FaqJsonLd page={page} />
      <SeoPageView page={page} />
      {/* Explicit back-link to the /read hub so the detail page is never a dead-end. */}
      <div className="mt-10">
        <Link
          href={seoHref("read", page.locale)}
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm text-white/70 hover:bg-white/10 hover:text-white transition"
        >
          {backLabel}
        </Link>
      </div>
    </>
  );
}
