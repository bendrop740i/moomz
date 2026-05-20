export type CompareLocale = "fr" | "en";

export type CompareWinner = "a" | "b" | "tie";

export type ComparePage = {
  slug: string;
  locale: CompareLocale;

  a: { name: string; emoji: string; tagline: string };
  b: { name: string; emoji: string; tagline: string };

  title: string;
  h1: string;
  description: string;
  intro: string;

  highlights: {
    winner: CompareWinner;
    label: string;
    a: string;
    b: string;
  }[];

  verdict: string;
  pickA: string;
  pickB: string;

  faq: { q: string; a: string }[];
  related: string[];

  topic: string;
  updatedAt: string;
};

export function compareUrl(p: { slug: string }) {
  return `/compare/${p.slug}`;
}
