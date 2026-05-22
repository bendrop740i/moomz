import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { findKeyword, keywordsByLocale } from "@/lib/seo/keywords/loader";
import KeywordPageView from "@/app/_seo/keyword-page-view";
import { canonicalUrl } from "@/lib/i18n-server";

export const revalidate = 3600;

export function generateStaticParams() {
  return keywordsByLocale("fr").map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const page = findKeyword("fr", params.slug);
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
      locale: "fr_FR",
    },
    twitter: { card: "summary_large_image", title: page.title, description: page.description },
  };
}

export default function MotPage({ params }: { params: { slug: string } }) {
  const page = findKeyword("fr", params.slug);
  if (!page) notFound();
  return <KeywordPageView page={page} />;
}
