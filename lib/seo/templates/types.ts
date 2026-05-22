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

export function templateUrl(p: { slug: string; locale: TemplateLocale }) {
  // Locale-prefixed so the link hits the middleware rewrite, never a 301.
  return `/${p.locale}/template/${p.slug}`;
}

export function templateLaunchUrl(p: TemplatePage) {
  const q = encodeURIComponent(p.question);
  const o = encodeURIComponent(p.options.join("|"));
  // /create directly — the old "/?q=" form is 307-redirected by middleware.
  return `/create?q=${q}&o=${o}`;
}
