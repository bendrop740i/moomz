import type { SeoPage } from "@/lib/seo/types";

export function ArticleJsonLd({ page }: { page: SeoPage }) {
  const json = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.h1,
    description: page.description,
    inLanguage: page.locale,
    datePublished: page.updatedAt,
    dateModified: page.updatedAt,
    author: { "@type": "Organization", name: "moomz" },
    publisher: {
      "@type": "Organization",
      name: "moomz",
      url: "https://moomz.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://moomz.com/${page.category}/${page.slug}`,
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

export function FaqJsonLd({ page }: { page: SeoPage }) {
  if (!page.faq.length) return null;
  const json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
