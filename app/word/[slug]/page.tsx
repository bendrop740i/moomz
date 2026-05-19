import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { findKeyword, keywordsByLocale } from "@/lib/seo/keywords/loader";
import KeywordPageView from "@/app/_seo/keyword-page-view";

export const revalidate = 3600;

export function generateStaticParams() {
  return keywordsByLocale("en").map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const page = findKeyword("en", params.slug);
  if (!page) return {};
  const url = `https://moomz.com/word/${page.slug}`;
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
      locale: "en_US",
    },
    twitter: { card: "summary_large_image", title: page.title, description: page.description },
  };
}

export default function WordPage({ params }: { params: { slug: string } }) {
  const page = findKeyword("en", params.slug);
  if (!page) notFound();
  return <KeywordPageView page={page} />;
}
