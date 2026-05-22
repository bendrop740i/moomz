import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import HubNav, { type HubLocale } from "@/app/_seo/hub-nav";
import { keywordsByLocale, isKeywordLocale } from "@/lib/seo/keywords/loader";
import { keywordUrl } from "@/lib/seo/keywords/types";

export const dynamic = "force-dynamic";
export const revalidate = 3600;

const LANG_LABEL: Record<string, string> = {
  es: "Palabras clave",
  it: "Parole chiave",
  pt: "Palavras-chave",
  de: "Stichwörter",
  ja: "キーワード",
  zh: "关键词",
};

const LANG_TAGLINE: Record<string, string> = {
  es: "Todos los temas de los que se habla en moomz. Una página por palabra con sus encuestas.",
  it: "Tutti i temi su moomz. Una pagina per parola con i suoi sondaggi.",
  pt: "Todos os temas no moomz. Uma página por palavra com seus enquetes.",
  de: "Alle Themen auf moomz. Eine Seite pro Stichwort mit seinen Umfragen.",
  ja: "moomzで話題のテーマ。各キーワードに専用ページと関連投票。",
  zh: "moomz上的所有话题。每个关键词都有专属页面和相关投票。",
};

export function generateStaticParams() {
  return ["es", "it", "pt", "de", "ja", "zh"].map((locale) => ({ locale }));
}

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  if (!isKeywordLocale(params.locale)) return {};
  if (params.locale === "fr" || params.locale === "en") return {};
  const label = LANG_LABEL[params.locale] ?? "Keywords";
  return {
    title: `${label} — moomz`,
    description: LANG_TAGLINE[params.locale] ?? "Keyword pages on moomz.",
    alternates: { canonical: `https://moomz.com/topic/${params.locale}` },
  };
}

export default function TopicLocaleHub({ params }: { params: { locale: string } }) {
  if (!isKeywordLocale(params.locale)) notFound();
  if (params.locale === "fr" || params.locale === "en") notFound();
  const pages = keywordsByLocale(params.locale);
  if (pages.length === 0) notFound();
  const groups = new Map<string, typeof pages>();
  for (const p of pages) {
    const key = p.topic ?? "other";
    const arr = groups.get(key) ?? [];
    arr.push(p);
    groups.set(key, arr);
  }
  const sorted = [...groups.entries()].sort((a, b) => a[0].localeCompare(b[0]));
  return (
    <article className="space-y-8 fade-up">
      <HubNav locale={params.locale as HubLocale} current="keywords" showLanguages />
      <header className="space-y-3">
        <h1 className="font-display text-4xl sm:text-5xl tracking-tight bg-gradient-to-br from-white via-pink-200 to-pink-400 bg-clip-text text-transparent">
          {LANG_LABEL[params.locale]}
        </h1>
        <p className="text-white/70">{LANG_TAGLINE[params.locale]}</p>
      </header>
      {sorted.map(([topic, list]) => (
        <section key={topic} className="space-y-3">
          <h2 className="font-semibold text-xl capitalize">{topic}</h2>
          <div className="flex flex-wrap gap-2">
            {list.map((p) => (
              <Link
                key={p.slug}
                href={keywordUrl(p)}
                className="glass rounded-full px-3 py-1.5 text-sm hover:bg-white/10 transition"
              >
                {p.emoji ? <span className="mr-1">{p.emoji}</span> : null}
                {p.keyword}
              </Link>
            ))}
          </div>
        </section>
      ))}
    </article>
  );
}
