import type { Metadata } from "next";
import { pagesByCategory } from "@/lib/seo";
import SeoHubView from "@/app/_seo/seo-hub";
import { getLocale, canonicalUrl } from "@/lib/i18n-server";
import type { Locale } from "@/lib/seo/types";

// /ideas serves the poll-ideas content for every locale except French
// (French lives at /idees, category "idees"). Non-FR translations carry
// category "ideas" with slug "<en-slug>-<locale>" — see lib/seo/ideas-*.ts.
const IDEAS_META: Record<Locale, { title: string; description: string }> = {
  fr: {
    title: "Idées de sondage : 80+ niches pour story, soirée, couple, classe",
    description: "80+ idées de sondage rangées par niche : Insta, TikTok, couple, soirée, mariage, classe, débats.",
  },
  en: {
    title: "Poll Ideas: 80+ Niches for Story, Party, Couples, Class",
    description: "80+ poll ideas sorted by niche: Instagram, TikTok, couples, parties, weddings, classroom, debates. Launch your moomz in 10 seconds.",
  },
  es: {
    title: "Ideas de encuestas: 80+ nichos para story, fiesta, pareja, clase",
    description: "80+ ideas de encuestas por nicho: Instagram, TikTok, pareja, fiestas, bodas, clase, debates. Lanza tu moomz en 10 segundos.",
  },
  it: {
    title: "Idee per sondaggi: 80+ nicchie per story, festa, coppia, classe",
    description: "80+ idee per sondaggi divise per nicchia: Instagram, TikTok, coppia, feste, matrimoni, classe, dibattiti. Lancia il tuo moomz in 10 secondi.",
  },
  pt: {
    title: "Ideias de enquetes: 80+ nichos para story, festa, casal, sala de aula",
    description: "80+ ideias de enquetes por nicho: Instagram, TikTok, casal, festas, casamentos, sala de aula, debates. Crie seu moomz em 10 segundos.",
  },
  de: {
    title: "Umfrage-Ideen: 80+ Nischen für Story, Party, Paar, Klasse",
    description: "80+ Umfrage-Ideen nach Nische: Instagram, TikTok, Paar, Partys, Hochzeiten, Klasse, Debatten. Starte dein moomz in 10 Sekunden.",
  },
  ja: {
    title: "投票のアイデア：ストーリー・パーティー・カップル・クラス向け80以上",
    description: "ジャンル別の投票アイデア80以上：Instagram、TikTok、カップル、パーティー、結婚式、教室、ディベート。10秒で moomz を作成。",
  },
  zh: {
    title: "投票创意：故事、派对、情侣、班级等 80+ 主题",
    description: "按主题分类的 80+ 投票创意：Instagram、TikTok、情侣、派对、婚礼、课堂、辩论。10 秒创建你的 moomz。",
  },
};

const IDEAS_HUB_COPY: Record<Locale, { title: string; description: string }> = {
  fr: { title: "Idées de sondage", description: "Idées rangées par niche. Story, soirée, couple, classe, débats — tout est prêt à lancer." },
  en: { title: "Poll Ideas", description: "Ideas by niche. Story, party, couples, classroom, debates — ready to launch." },
  es: { title: "Ideas de encuestas", description: "Ideas por nicho. Story, fiesta, pareja, clase, debates — listas para lanzar." },
  it: { title: "Idee per sondaggi", description: "Idee per nicchia. Story, festa, coppia, classe, dibattiti — pronte da lanciare." },
  pt: { title: "Ideias de enquetes", description: "Ideias por nicho. Story, festa, casal, sala de aula, debates — prontas para usar." },
  de: { title: "Umfrage-Ideen", description: "Ideen nach Nische. Story, Party, Paar, Klasse, Debatten — startklar." },
  ja: { title: "投票のアイデア", description: "ジャンル別のアイデア。ストーリー、パーティー、カップル、教室、ディベート — すぐに作れます。" },
  zh: { title: "投票创意", description: "按主题分类的创意。故事、派对、情侣、课堂、辩论 — 拿来即用。" },
};

export function generateMetadata(): Metadata {
  const locale = getLocale();
  const m = IDEAS_META[locale] ?? IDEAS_META.en;
  return {
    title: m.title,
    description: m.description,
    alternates: { canonical: canonicalUrl() },
  };
}

export default function IdeasHub() {
  const locale = getLocale();
  // French content lives under category "idees"; every other locale under
  // "ideas". Pull the visitor's-language pages, falling back to EN.
  const all = locale === "fr" ? pagesByCategory("idees") : pagesByCategory("ideas");
  const pages =
    all.filter((p) => p.locale === locale).length > 0
      ? all.filter((p) => p.locale === locale)
      : pagesByCategory("ideas").filter((p) => p.locale === "en");
  const copy = IDEAS_HUB_COPY[locale] ?? IDEAS_HUB_COPY.en;
  return (
    <SeoHubView
      title={copy.title}
      description={copy.description}
      pages={pages}
      locale={locale}
    />
  );
}
