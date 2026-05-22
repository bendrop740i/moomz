import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { isQuoteLocale, quotesByLocale } from "@/lib/seo/quotes/loader";
import QuoteHub from "@/app/_seo/quote-hub";

export const dynamic = "force-dynamic";
export const revalidate = 3600;

const META: Record<string, { title: string; description: string }> = {
  es: {
    title: "Frases y citas célebres por tema — moomz",
    description:
      "Las mejores frases bien atribuidas, por tema: amor, amistad, motivación, vida, felicidad, sabiduría… Léelas, compártelas y conviértelas en encuesta.",
  },
  it: {
    title: "Frasi e citazioni celebri per tema — moomz",
    description:
      "Le migliori citazioni ben attribuite, per tema: amore, amicizia, motivazione, vita, felicità, saggezza… Leggile, condividile e trasformale in sondaggio.",
  },
  pt: {
    title: "Frases e citações célebres por tema — moomz",
    description:
      "As melhores frases bem atribuídas, por tema: amor, amizade, motivação, vida, felicidade, sabedoria… Leia, compartilhe e transforme em enquete.",
  },
  de: {
    title: "Zitate & berühmte Sprüche nach Thema — moomz",
    description:
      "Die besten sorgfältig zugeordneten Zitate, nach Thema: Liebe, Freundschaft, Motivation, Leben, Glück, Weisheit… Lies, teile und mach eine Umfrage daraus.",
  },
  ja: {
    title: "名言・名句をテーマ別に — moomz",
    description:
      "出典付きで正確な名言をテーマ別に。愛、友情、人生、幸福、勇気、夢… 読んで、シェアして、投票にしよう。",
  },
  zh: {
    title: "名言名句大全（按主题）— moomz",
    description:
      "准确标注出处的名言，按主题分类：爱情、友谊、励志、人生、幸福、智慧… 阅读、分享，并变成投票。",
  },
};

export function generateStaticParams() {
  return ["es", "it", "pt", "de", "ja", "zh"].map((locale) => ({ locale }));
}

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const m = META[params.locale];
  if (!m) return {};
  return {
    title: m.title,
    description: m.description,
    alternates: { canonical: `https://moomz.com/citation/${params.locale}` },
  };
}

export default function CitationLocaleHub({ params }: { params: { locale: string } }) {
  if (!isQuoteLocale(params.locale)) notFound();
  if (params.locale === "fr" || params.locale === "en") notFound();
  if (quotesByLocale(params.locale).length === 0) notFound();
  return <QuoteHub locale={params.locale} />;
}
