import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { findQuotePage, quotesByLocale } from "@/lib/seo/quotes/loader";
import QuotePageView from "@/app/_seo/quote-page-view";
import { canonicalUrl } from "@/lib/i18n-server";

export const dynamic = "force-dynamic";
export const revalidate = 3600;

export function generateStaticParams() {
  return quotesByLocale("fr").map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const page = findQuotePage("fr", params.slug);
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

export default function CitationPage({ params }: { params: { slug: string } }) {
  const page = findQuotePage("fr", params.slug);
  if (!page) notFound();
  return <QuotePageView page={page} />;
}
