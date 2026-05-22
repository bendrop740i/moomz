import { routeSeg } from "./route-names";

export type Locale = "fr" | "en" | "es" | "it" | "pt" | "de" | "ja" | "zh";

export type Category = "idees" | "ideas" | "guides" | "blog" | "read";

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

// The SEO surface lives at /{locale}/<segment> (see middleware.ts). Linking
// straight to that final URL skips the bare-route → locale-prefix 301 that
// otherwise causes a visible double page-load. routeSeg() applies any
// per-locale route name (none of the page categories have one — idees / ideas
// / guides / blog / read all pass through unchanged), and the result hits the
// middleware rewrite branch with zero redirect.
export function pageUrl(p: SeoPage): string {
  return `/${p.locale}/${routeSeg(p.category, p.locale)}/${p.slug}`;
}

export function pollLaunchUrl(poll: SeoPoll): string {
  const q = encodeURIComponent(poll.q);
  const o = poll.options.map((s) => encodeURIComponent(s)).join("|");
  // /create directly — the app's create form. The old "/?q=&o=" form is
  // 307-redirected by middleware.ts, so link straight to the target.
  return `/create?q=${q}&o=${o}`;
}
