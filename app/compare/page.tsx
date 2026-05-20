import type { Metadata } from "next";
import Link from "next/link";
import HubNav, { type HubLocale } from "@/app/_seo/hub-nav";
import { getAllCompares } from "@/lib/seo/compare/loader";
import { getLocale } from "@/lib/i18n-server";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Compare poll & quiz tools: head-to-head reviews · moomz",
  description:
    "Head-to-head comparisons of poll and quiz tools — moomz vs Strawpoll, Mentimeter, Slido, Typeform, Google Forms, plus cross-competitor matchups. Pick the right tool.",
  alternates: { canonical: "https://moomz.com/compare" },
  openGraph: {
    title: "Compare poll & quiz tools: head-to-head reviews · moomz",
    description:
      "Honest 2x2 comparisons between the major poll, survey and audience tools.",
    url: "https://moomz.com/compare",
    type: "website",
    siteName: "moomz",
  },
  twitter: {
    card: "summary_large_image",
    title: "Compare poll & quiz tools",
    description: "Head-to-head reviews of the major poll & survey tools.",
  },
};

const HUB_LOCALES: HubLocale[] = [
  "fr",
  "en",
  "es",
  "it",
  "pt",
  "de",
  "ja",
  "zh",
];

function toHubLocale(loc: string): HubLocale {
  return (HUB_LOCALES as string[]).includes(loc)
    ? (loc as HubLocale)
    : "en";
}

// UI chrome localized for all 8 visitor locales. Comparison data (intro /
// verdict / highlights / etc.) stays in its authored language by design.
const T: Record<HubLocale, {
  eyebrow: string;
  h1: string;
  blurb: string;
  blankTitle: string;
  blankSub: string;
  cta: string;
}> = {
  fr: {
    eyebrow: "comparatifs · moomz",
    h1: "les outils de sondage, face à face",
    blurb:
      "comparaisons honnêtes deux par deux entre moomz, Strawpoll, Mentimeter, Slido, Typeform, Google Forms, Doodle, Kahoot et le reste. Prix, design, anonymat, partage. Choisis le bon outil pour ta question.",
    blankTitle: "moomz.com",
    blankSub: "Sondages gratuits, anonymes, en 10 secondes — essaie d'abord",
    cta: "Crée ton sondage moomz gratuit →",
  },
  en: {
    eyebrow: "compare · moomz",
    h1: "poll tools, head to head",
    blurb:
      "honest 2-by-2 comparisons between moomz, Strawpoll, Mentimeter, Slido, Typeform, Google Forms, Doodle, Kahoot and the rest. Pricing, design, anonymity, share flow. Pick the right tool for your question.",
    blankTitle: "moomz.com",
    blankSub: "Free, anonymous, 10-second polls — try it first",
    cta: "Create your free moomz poll →",
  },
  es: {
    eyebrow: "comparativas · moomz",
    h1: "herramientas de encuestas, cara a cara",
    blurb:
      "comparaciones honestas dos a dos entre moomz, Strawpoll, Mentimeter, Slido, Typeform, Google Forms, Doodle, Kahoot y el resto. Precio, diseño, anonimato, compartir. Elige la herramienta adecuada para tu pregunta.",
    blankTitle: "moomz.com",
    blankSub: "Encuestas gratis, anónimas, en 10 segundos — pruébalo primero",
    cta: "Crea tu encuesta moomz gratis →",
  },
  it: {
    eyebrow: "confronti · moomz",
    h1: "gli strumenti per sondaggi, a confronto",
    blurb:
      "confronti onesti a due a due tra moomz, Strawpoll, Mentimeter, Slido, Typeform, Google Forms, Doodle, Kahoot e il resto. Prezzo, design, anonimato, condivisione. Scegli lo strumento giusto per la tua domanda.",
    blankTitle: "moomz.com",
    blankSub: "Sondaggi gratis, anonimi, in 10 secondi — prova prima",
    cta: "Crea il tuo sondaggio moomz gratis →",
  },
  pt: {
    eyebrow: "comparações · moomz",
    h1: "ferramentas de sondagem, frente a frente",
    blurb:
      "comparações honestas dois a dois entre moomz, Strawpoll, Mentimeter, Slido, Typeform, Google Forms, Doodle, Kahoot e o resto. Preço, design, anonimato, partilha. Escolhe a ferramenta certa para a tua pergunta.",
    blankTitle: "moomz.com",
    blankSub: "Sondagens grátis, anónimas, em 10 segundos — experimenta primeiro",
    cta: "Cria a tua sondagem moomz grátis →",
  },
  de: {
    eyebrow: "vergleiche · moomz",
    h1: "Umfrage-Tools im direkten Vergleich",
    blurb:
      "ehrliche Zwei-zu-zwei-Vergleiche zwischen moomz, Strawpoll, Mentimeter, Slido, Typeform, Google Forms, Doodle, Kahoot und dem Rest. Preis, Design, Anonymität, Teilen. Wähl das richtige Tool für deine Frage.",
    blankTitle: "moomz.com",
    blankSub: "Kostenlose, anonyme Umfragen in 10 Sekunden — probier es zuerst",
    cta: "Erstelle deine kostenlose moomz-Umfrage →",
  },
  ja: {
    eyebrow: "比較 · moomz",
    h1: "投票ツールを徹底比較",
    blurb:
      "moomz、Strawpoll、Mentimeter、Slido、Typeform、Google Forms、Doodle、Kahoot などを正直に2対2で比較。料金、デザイン、匿名性、共有のしやすさ。あなたの質問に最適なツールを選びましょう。",
    blankTitle: "moomz.com",
    blankSub: "無料・匿名・10秒で作れる投票 — まず試してみて",
    cta: "無料でmoomz投票を作成 →",
  },
  zh: {
    eyebrow: "对比 · moomz",
    h1: "投票工具，正面对决",
    blurb:
      "对 moomz、Strawpoll、Mentimeter、Slido、Typeform、Google Forms、Doodle、Kahoot 等进行诚实的二对二对比。价格、设计、匿名性、分享体验。为你的问题挑选合适的工具。",
    blankTitle: "moomz.com",
    blankSub: "免费、匿名、10 秒搞定的投票 — 先试试看",
    cta: "免费创建你的 moomz 投票 →",
  },
};

// Topic section labels per visitor locale (UI chrome — not comparison data).
const TOPIC_LABEL: Record<string, Record<HubLocale, string>> = {
  "vs-moomz": {
    fr: "moomz face aux autres",
    en: "moomz vs the rest",
    es: "moomz frente al resto",
    it: "moomz contro gli altri",
    pt: "moomz contra os outros",
    de: "moomz gegen den Rest",
    ja: "moomz と他ツールの比較",
    zh: "moomz 对比其他工具",
  },
  cross: {
    fr: "Comparatifs entre concurrents",
    en: "Cross-competitor matchups",
    es: "Comparativas entre competidores",
    it: "Confronti tra concorrenti",
    pt: "Comparações entre concorrentes",
    de: "Vergleiche zwischen Wettbewerbern",
    ja: "他社同士の比較",
    zh: "其他竞品之间的对比",
  },
};

export default function CompareHub() {
  const locale = toHubLocale(getLocale());
  const t = T[locale];
  const all = getAllCompares();
  const byTopic = new Map<string, typeof all>();
  for (const p of all) {
    const list = byTopic.get(p.topic) ?? [];
    list.push(p);
    byTopic.set(p.topic, list);
  }

  return (
    <div className="space-y-10 fade-up">
      <HubNav locale={locale} current="compare" />
      <header className="space-y-3 text-center">
        <div className="text-xs uppercase tracking-widest text-white/40">
          {t.eyebrow}
        </div>
        <h1 className="font-display text-5xl sm:text-6xl tracking-tight bg-gradient-to-br from-white via-pink-200 to-pink-400 bg-clip-text text-transparent">
          {t.h1}
        </h1>
        <p className="text-white/60 text-balance max-w-2xl mx-auto">
          {all.length} {t.blurb}
        </p>
      </header>

      <Link
        href="/"
        className="block rounded-2xl bg-gradient-to-r from-pink-500/20 to-purple-600/20 border border-pink-400/30 px-5 py-4 hover:from-pink-500/30 hover:to-purple-600/30 transition text-center"
      >
        <div className="font-display text-xl">{t.blankTitle}</div>
        <div className="text-xs text-white/50">{t.blankSub}</div>
      </Link>

      {[...byTopic.entries()].map(([topic, list]) => (
        <section key={topic} className="space-y-3">
          <h2 className="font-display text-2xl text-white">
            {TOPIC_LABEL[topic]?.[locale] ?? topic}
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {list.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/compare/${p.slug}`}
                  className="glass rounded-2xl px-5 py-4 hover:bg-white/10 transition flex items-start gap-3 h-full"
                >
                  <span className="text-3xl shrink-0">
                    {p.a.emoji}
                    <span className="text-white/30 mx-1">vs</span>
                    {p.b.emoji}
                  </span>
                  <div className="min-w-0">
                    <div className="font-display text-base text-white leading-tight">
                      {p.a.name} <span className="text-white/40">vs</span>{" "}
                      {p.b.name}
                    </div>
                    <div className="text-xs text-white/50 line-clamp-2 mt-1">
                      {p.description}
                    </div>
                    <div className="mt-2 text-[10px] uppercase tracking-widest text-white/30">
                      {p.locale === "fr" ? "FR" : "EN"}
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <Link
        href="/"
        className="block rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 px-5 py-4 text-center font-display text-xl hover:scale-[1.02] transition shadow-lg shadow-pink-500/30"
      >
        {t.cta}
      </Link>
    </div>
  );
}
