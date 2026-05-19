import type { SeoPage, Locale } from "@/lib/seo/types";

const HOME_LABEL: Record<Locale, string> = {
  fr: "Accueil",
  en: "Home",
  es: "Inicio",
  it: "Home",
  pt: "Início",
  de: "Start",
  ja: "ホーム",
  zh: "首页",
};

const CATEGORY_LABEL: Record<Locale, Record<SeoPage["category"], string>> = {
  fr: { idees: "Idées", ideas: "Ideas", guides: "Guides", blog: "Blog", read: "À lire" },
  en: { idees: "Ideas", ideas: "Ideas", guides: "Guides", blog: "Blog", read: "Read" },
  es: { idees: "Ideas", ideas: "Ideas", guides: "Guías", blog: "Blog", read: "Leer" },
  it: { idees: "Idee", ideas: "Idee", guides: "Guide", blog: "Blog", read: "Letture" },
  pt: { idees: "Ideias", ideas: "Ideias", guides: "Guias", blog: "Blog", read: "Ler" },
  de: { idees: "Ideen", ideas: "Ideen", guides: "Guides", blog: "Blog", read: "Lesen" },
  ja: { idees: "アイデア", ideas: "アイデア", guides: "ガイド", blog: "ブログ", read: "読む" },
  zh: { idees: "灵感", ideas: "灵感", guides: "指南", blog: "博客", read: "阅读" },
};

export type BreadcrumbItem = { name: string; url: string };

export function buildBreadcrumbs(page: SeoPage): BreadcrumbItem[] {
  const locale = page.locale;
  const homeLabel = HOME_LABEL[locale] ?? HOME_LABEL.en;
  const catLabel = CATEGORY_LABEL[locale]?.[page.category] ?? page.category;
  return [
    { name: homeLabel, url: "https://moomz.com" },
    { name: catLabel, url: `https://moomz.com/${page.category}` },
    { name: page.h1, url: `https://moomz.com/${page.category}/${page.slug}` },
  ];
}

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  if (!items.length) return null;
  const json = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

/**
 * Combined JSON-LD emitter for SEO pages — emits Article + FAQPage +
 * BreadcrumbList in a single graph, so Google sees the page as one rich
 * document instead of three scattered scripts.
 */
export function SeoPageJsonLd({ page }: { page: SeoPage }) {
  const breadcrumbs = buildBreadcrumbs(page);
  const graph: Record<string, unknown>[] = [
    {
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
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((it, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: it.name,
        item: it.url,
      })),
    },
  ];
  if (page.faq.length) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: page.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }
  const json = {
    "@context": "https://schema.org",
    "@graph": graph,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

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
