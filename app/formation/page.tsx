import type { Metadata } from "next";
import Link from "next/link";
import { getFormationByLocale } from "@/lib/formation/loader";
import { FORMATION_THEMES, themeMetaFor } from "@/lib/formation/types";
import { getLocale } from "@/lib/i18n-server";
import type { Locale } from "@/lib/i18n";

export const revalidate = 3600;

type FormationHubCopy = {
  metaTitle: string;
  metaDesc: string;
  ogTitle: string;
  ogDesc: string;
  tagline: string;
  count: (n: number) => string;
  soon: string;
  ctaBody: string;
  ctaBtn: string;
};

const COPY: Record<Locale, FormationHubCopy> = {
  fr: {
    metaTitle: "Formation — guides pratiques pour les 17-34 ans | moomz",
    metaDesc:
      "Lookmaxxing, forme, argent, confiance, études, style, vie pratique… des centaines de modules courts et concrets pour devenir la meilleure version de toi.",
    ogTitle: "Formation moomz — progresse pour de vrai",
    ogDesc: "Des modules courts et utiles : soin de soi, forme, argent, mental, études, style.",
    tagline:
      "Des modules courts et concrets pour progresser — soin de soi, forme, argent, mental, études, style. Pensé pour les 17-34 ans.",
    count: (n) => `${n} modules · gratuit`,
    soon: "Modules bientôt disponibles.",
    ctaBody: "Une question, un débat en tête ? Lance ton propre moomz.",
    ctaBtn: "Créer un moomz",
  },
  en: {
    metaTitle: "Formation — practical guides for 17-34 year olds | moomz",
    metaDesc:
      "Self-care, fitness, money, confidence, studies, style, everyday life… hundreds of short, actionable modules to become the best version of yourself.",
    ogTitle: "moomz Formation — level up for real",
    ogDesc: "Short, useful modules: self-care, fitness, money, mindset, studies, style.",
    tagline:
      "Short, actionable modules to improve — self-care, fitness, money, mindset, studies, style. Built for 17-34 year olds.",
    count: (n) => `${n} modules · free`,
    soon: "Modules coming soon.",
    ctaBody: "Got a question or debate on your mind? Start your own moomz.",
    ctaBtn: "Create a moomz",
  },
  es: {
    metaTitle: "Formación — guías prácticas para 17-34 años | moomz",
    metaDesc:
      "Lookmaxxing, forma física, dinero, confianza, estudios, estilo, vida cotidiana… cientos de módulos cortos y concretos para ser la mejor versión de ti.",
    ogTitle: "Formación moomz — mejora de verdad",
    ogDesc: "Módulos cortos y útiles: autocuidado, fitness, dinero, mentalidad, estudios, estilo.",
    tagline:
      "Módulos cortos y concretos para progresar — autocuidado, fitness, dinero, mentalidad, estudios, estilo. Para 17-34 años.",
    count: (n) => `${n} módulos · gratis`,
    soon: "Módulos disponibles pronto.",
    ctaBody: "¿Tienes una pregunta o debate en mente? Lanza tu propio moomz.",
    ctaBtn: "Crear un moomz",
  },
  it: {
    metaTitle: "Formazione — guide pratiche per 17-34 anni | moomz",
    metaDesc:
      "Lookmaxxing, forma fisica, soldi, fiducia, studi, stile, vita quotidiana… centinaia di moduli brevi e concreti per diventare la migliore versione di te.",
    ogTitle: "Formazione moomz — migliora davvero",
    ogDesc: "Moduli brevi e utili: cura di sé, fitness, soldi, mentalità, studi, stile.",
    tagline:
      "Moduli brevi e concreti per migliorare — cura di sé, fitness, soldi, mentalità, studi, stile. Pensato per i 17-34 anni.",
    count: (n) => `${n} moduli · gratis`,
    soon: "Moduli disponibili a breve.",
    ctaBody: "Hai una domanda o un dibattito in testa? Lancia il tuo moomz.",
    ctaBtn: "Crea un moomz",
  },
  pt: {
    metaTitle: "Formação — guias práticos para 17-34 anos | moomz",
    metaDesc:
      "Lookmaxxing, forma física, dinheiro, confiança, estudos, estilo, vida cotidiana… centenas de módulos curtos e concretos para se tornar a melhor versão de si.",
    ogTitle: "Formação moomz — evolua de verdade",
    ogDesc: "Módulos curtos e úteis: autocuidado, fitness, dinheiro, mentalidade, estudos, estilo.",
    tagline:
      "Módulos curtos e concretos para progredir — autocuidado, fitness, dinheiro, mentalidade, estudos, estilo. Pensado para 17-34 anos.",
    count: (n) => `${n} módulos · grátis`,
    soon: "Módulos em breve.",
    ctaBody: "Tem uma pergunta ou debate em mente? Lance seu próprio moomz.",
    ctaBtn: "Criar um moomz",
  },
  de: {
    metaTitle: "Formation — praktische Guides für 17-34-Jährige | moomz",
    metaDesc:
      "Lookmaxxing, Fitness, Geld, Selbstvertrauen, Studium, Stil, Alltag… Hunderte kurze, praxisnahe Module, um die beste Version von dir zu werden.",
    ogTitle: "moomz Formation — wirklich weiterkommen",
    ogDesc: "Kurze, nützliche Module: Selbstpflege, Fitness, Geld, Mindset, Studium, Stil.",
    tagline:
      "Kurze, praxisnahe Module zum Vorankommen — Selbstpflege, Fitness, Geld, Mindset, Studium, Stil. Für 17-34-Jährige.",
    count: (n) => `${n} Module · kostenlos`,
    soon: "Module bald verfügbar.",
    ctaBody: "Hast du eine Frage oder Debatte im Kopf? Starte dein eigenes moomz.",
    ctaBtn: "moomz erstellen",
  },
  ja: {
    metaTitle: "フォーメーション — 17〜34歳向け実践ガイド | moomz",
    metaDesc:
      "ルックスマキシング・フィットネス・お金・自信・勉強・スタイル・日常生活… 自分の最高バージョンになるための短くて実践的なモジュールが揃っています。",
    ogTitle: "moomzフォーメーション — 本当に成長しよう",
    ogDesc: "短くて役立つモジュール：セルフケア・フィットネス・お金・マインドセット・勉強・スタイル。",
    tagline:
      "成長のための短くて実践的なモジュール — セルフケア・フィットネス・お金・マインドセット・勉強・スタイル。17〜34歳向け。",
    count: (n) => `${n} モジュール · 無料`,
    soon: "モジュールは近日公開予定。",
    ctaBody: "質問やディベートが頭に浮かんだら？自分のmoomzを始めよう。",
    ctaBtn: "moomzを作る",
  },
  zh: {
    metaTitle: "训练营 — 17-34岁实用指南 | moomz",
    metaDesc:
      "外貌管理、健身、理财、自信、学业、穿搭、日常生活… 数百个简短实用的模块，帮你成为最好的自己。",
    ogTitle: "moomz训练营 — 真正进步",
    ogDesc: "简短实用的模块：自我护理、健身、理财、心态、学业、穿搭。",
    tagline:
      "简短实用的进步模块 — 自我护理、健身、理财、心态、学业、穿搭。专为17-34岁设计。",
    count: (n) => `${n} 个模块 · 免费`,
    soon: "模块即将推出。",
    ctaBody: "脑海中有问题或想讨论？发起你自己的moomz。",
    ctaBtn: "创建 moomz",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = getLocale();
  const c = COPY[locale] ?? COPY.en;
  return {
    title: c.metaTitle,
    description: c.metaDesc,
    alternates: { canonical: "https://moomz.com/formation" },
    openGraph: {
      title: c.ogTitle,
      description: c.ogDesc,
      type: "website",
      url: "https://moomz.com/formation",
    },
  };
}

export default async function FormationHub() {
  const locale = getLocale();
  const c = COPY[locale] ?? COPY.en;
  // Content follows the visitor locale (FR → French modules, every other
  // locale → English). The whole formation surface is localized this way.
  const all = getFormationByLocale(locale);
  const themeMeta = themeMetaFor(locale);
  const themes = FORMATION_THEMES.map((theme) => ({
    theme,
    meta: themeMeta[theme],
    items: all.filter((i) => i.theme === theme),
  })).filter((t) => t.items.length > 0);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Formation moomz",
    numberOfItems: all.length,
    itemListElement: all.slice(0, 100).map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.title,
      url: `https://moomz.com/formation/${it.slug}`,
    })),
  };

  return (
    <div className="space-y-9 fade-up pb-12">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="space-y-2 pt-2 text-center">
        <h1 className="font-display text-4xl sm:text-5xl tracking-tight bg-gradient-to-br from-white via-pink-200 to-pink-400 bg-clip-text text-transparent">
          Formation
        </h1>
        <p className="mx-auto max-w-md text-sm text-white/60">
          {c.tagline}
        </p>
        {all.length > 0 && (
          <p className="text-xs text-white/35">{c.count(all.length)}</p>
        )}
      </header>

      {themes.length === 0 && (
        <p className="text-center text-sm text-white/40">{c.soon}</p>
      )}

      {themes.map(({ theme, meta, items }) => (
        <section key={theme} className="space-y-3">
          <div className="space-y-1">
            <div className="flex items-baseline gap-2">
              <h2 className="text-xl font-bold text-white">
                <span aria-hidden>{meta.emoji}</span> {meta.label}
              </h2>
              <span className="text-xs tabular-nums text-white/35">{items.length}</span>
            </div>
            <p className="text-sm text-white/50">{meta.tagline}</p>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            {items.map((it) => (
              <Link
                key={it.slug}
                href={`/formation/${it.slug}`}
                className="glass flex items-center gap-2.5 rounded-xl px-3 py-2.5 transition hover:bg-white/10 active:scale-[0.98]"
              >
                <span aria-hidden className="text-lg shrink-0">
                  {it.emoji}
                </span>
                <span className="min-w-0 text-sm font-medium text-white/85">
                  {it.title}
                </span>
              </Link>
            ))}
          </div>
        </section>
      ))}

      <div className="glass rounded-2xl p-5 text-center space-y-2">
        <p className="text-sm text-white/70">
          {c.ctaBody}
        </p>
        <Link
          href="/create"
          className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 px-6 font-semibold text-white shadow-lg shadow-pink-500/30 transition hover:scale-[1.02] active:scale-[0.98]"
        >
          {c.ctaBtn}
        </Link>
      </div>
    </div>
  );
}
