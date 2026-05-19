import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { findPage, pagesByCategory } from "@/lib/seo";
import SeoPageView from "@/app/_seo/seo-page";
import { ArticleJsonLd, FaqJsonLd } from "@/app/_seo/json-ld";

export function generateStaticParams() {
  return pagesByCategory("blog").map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const page = findPage("blog", params.slug);
  if (!page) return {};
  const url = `https://moomz.com/blog/${page.slug}`;
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
      locale: page.locale === "fr" ? "fr_FR" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
    },
  };
}

export default function BlogPage({ params }: { params: { slug: string } }) {
  const page = findPage("blog", params.slug);
  if (!page) notFound();
  return (
    <>
      <ArticleJsonLd page={page} />
      <FaqJsonLd page={page} />
      <SeoPageView page={page} />
    </>
  );
}
