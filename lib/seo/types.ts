export type Locale = "fr" | "en";

export type Category = "idees" | "ideas" | "guides" | "blog";

export type SeoPoll = {
  q: string;
  options: string[];
};

export type SeoFaq = {
  q: string;
  a: string;
};

export type SeoSection = {
  h: string;
  body: string;
};

export type SeoPage = {
  slug: string;
  locale: Locale;
  category: Category;
  title: string;
  h1: string;
  description: string;
  emoji?: string;
  intro: string;
  sections: SeoSection[];
  polls: SeoPoll[];
  faq: SeoFaq[];
  related?: string[];
  updatedAt: string;
};

export function pageUrl(p: SeoPage): string {
  const base = p.category;
  return `/${base}/${p.slug}`;
}

export function pollLaunchUrl(poll: SeoPoll): string {
  const q = encodeURIComponent(poll.q);
  const o = poll.options.map((s) => encodeURIComponent(s)).join("|");
  return `/?q=${q}&o=${o}`;
}
