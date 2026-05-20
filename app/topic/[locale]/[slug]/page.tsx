import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { findKeyword, isKeywordLocale } from "@/lib/seo/keywords/loader";
import KeywordPageView from "@/app/_seo/keyword-page-view";

export const revalidate = 3600;

const OG_LOCALE: Record<string, string> = {
  es: "es_ES",
  it: "it_IT",
  pt: "pt_PT",
  de: "de_DE",
  ja: "ja_JP",
  zh: "zh_CN",
};

// On-demand ISR — keyword pages render on first visit then cache (revalidate
// above), instead of pre-rendering ~600 at build time.
export function generateStaticParams(): { locale: string; slug: string }[] {
  return [];
}

export function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string };
}): Metadata {
  if (!isKeywordLocale(params.locale)) return {};
  if (params.locale === "fr" || params.locale === "en") return {};
  const page = findKeyword(params.locale, params.slug);
  if (!page) return {};
  const url = `https://moomz.com/topic/${page.locale}/${page.slug}`;
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
      locale: OG_LOCALE[page.locale],
    },
    twitter: { card: "summary_large_image", title: page.title, description: page.description },
  };
}

export default function TopicPage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  if (!isKeywordLocale(params.locale)) notFound();
  if (params.locale === "fr" || params.locale === "en") notFound();
  const page = findKeyword(params.locale, params.slug);
  if (!page) notFound();
  return <KeywordPageView page={page} />;
}
