import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { findQuotePage, getAllQuotes, isQuoteLocale } from "@/lib/seo/quotes/loader";
import QuotePageView from "@/app/_seo/quote-page-view";

export const revalidate = 3600;

const OG_LOCALE: Record<string, string> = {
  es: "es_ES",
  it: "it_IT",
  pt: "pt_BR",
  de: "de_DE",
  ja: "ja_JP",
  zh: "zh_CN",
};

export function generateStaticParams() {
  return getAllQuotes()
    .filter((q) => q.locale !== "fr" && q.locale !== "en")
    .map((q) => ({ locale: q.locale, slug: q.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string };
}): Metadata {
  if (!isQuoteLocale(params.locale)) return {};
  if (params.locale === "fr" || params.locale === "en") return {};
  const page = findQuotePage(params.locale, params.slug);
  if (!page) return {};
  const url = `https://moomz.com/citation/${page.locale}/${page.slug}`;
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

export default function CitationLocalePage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  if (!isQuoteLocale(params.locale)) notFound();
  if (params.locale === "fr" || params.locale === "en") notFound();
  const page = findQuotePage(params.locale, params.slug);
  if (!page) notFound();
  return <QuotePageView page={page} />;
}
