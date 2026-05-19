import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { findPage, pagesByCategory } from "@/lib/seo";
import type { Locale } from "@/lib/seo/types";
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

export function generateStaticParams() {
  return pagesByCategory("read").map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const page = findPage("read", params.slug);
  if (!page) return {};
  const url = `https://moomz.com/read/${page.slug}`;
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
  return (
    <>
      <ArticleJsonLd page={page} />
      <FaqJsonLd page={page} />
      <SeoPageView page={page} />
    </>
  );
}
