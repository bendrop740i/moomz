export type TemplateLocale =
  | "fr"
  | "en"
  | "es"
  | "it"
  | "pt"
  | "de"
  | "ja"
  | "zh";

export type TemplatePage = {
  slug: string;
  locale: TemplateLocale;

  emoji: string;
  title: string;
  h1: string;
  description: string;
  intro: string;

  category: string;
  audience: string;

  question: string;
  options: string[];

  whyItWorks: string;
  tips: string[];

  variations: { question: string; options: string[] }[];

  faq: { q: string; a: string }[];
  related: string[];

  updatedAt: string;
};

export function templateUrl(p: { slug: string }) {
  return `/template/${p.slug}`;
}

export function templateLaunchUrl(p: TemplatePage) {
  const q = encodeURIComponent(p.question);
  const o = encodeURIComponent(p.options.join("|"));
  return `/?q=${q}&o=${o}`;
}
