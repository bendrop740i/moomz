import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import HubNav from "@/app/_seo/hub-nav";
import { findCompare } from "@/lib/seo/compare/loader";
import type { CompareLocale } from "@/lib/seo/compare/types";
import { getLocale, canonicalUrl } from "@/lib/i18n-server";

// Comparisons exist in 8 languages keyed by visitor locale — render dynamically
// so the middleware-set locale picks the right translation per request.
export const dynamic = "force-dynamic";

const OG_LOCALE: Record<CompareLocale, string> = {
  fr: "fr_FR",
  en: "en_US",
  es: "es_ES",
  it: "it_IT",
  pt: "pt_BR",
  de: "de_DE",
  ja: "ja_JP",
  zh: "zh_CN",
};

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const page = findCompare(params.slug, getLocale() as CompareLocale);
  if (!page) return {};
  const url = canonicalUrl();
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: url },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      type: "article",
      siteName: "moomz",
      locale: OG_LOCALE[page.locale] ?? "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
    },
  };
}

// UI chrome localized for all 8 visitor locales. The comparison data itself
// (intro / verdict / highlights / faq) is translated in the JSON per locale.
const DETAIL_T: Record<
  CompareLocale,
  {
    back: string;
    wins: string;
    tie: string;
    headToHead: string;
    verdict: string;
    pick: string;
    faq: string;
    cta: string;
    related: string;
    updated: string;
    feature: string;
    ctaCardTitle: string;
    ctaCardSub: string;
  }
> = {
  fr: { back: "← toutes les comparaisons", wins: " gagne", tie: "égalité", headToHead: "Face à face :", verdict: "Verdict", pick: "Choisis", faq: "FAQ", cta: "Lance ton sondage moomz gratuit →", related: "À comparer aussi", updated: "Mis à jour le", feature: "Critère", ctaCardTitle: "Lance ton sondage moomz", ctaCardSub: "10 secondes, anonyme, gratuit" },
  en: { back: "← all comparisons", wins: " wins", tie: "tie", headToHead: "Head-to-head:", verdict: "Verdict", pick: "Pick", faq: "Frequently asked", cta: "Create your free moomz poll →", related: "Compare also", updated: "Last updated", feature: "Feature", ctaCardTitle: "Create your free moomz poll", ctaCardSub: "10 seconds, anonymous, free" },
  es: { back: "← todas las comparativas", wins: " gana", tie: "empate", headToHead: "Cara a cara:", verdict: "Veredicto", pick: "Elige", faq: "Preguntas frecuentes", cta: "Crea tu encuesta moomz gratis →", related: "Comparar también", updated: "Última actualización", feature: "Criterio", ctaCardTitle: "Crea tu encuesta moomz gratis", ctaCardSub: "10 segundos, anónima, gratis" },
  it: { back: "← tutti i confronti", wins: " vince", tie: "pareggio", headToHead: "Testa a testa:", verdict: "Verdetto", pick: "Scegli", faq: "Domande frequenti", cta: "Crea il tuo sondaggio moomz gratis →", related: "Da confrontare anche", updated: "Ultimo aggiornamento", feature: "Criterio", ctaCardTitle: "Crea il tuo sondaggio moomz", ctaCardSub: "10 secondi, anonimo, gratis" },
  pt: { back: "← todas as comparações", wins: " vence", tie: "empate", headToHead: "Frente a frente:", verdict: "Veredito", pick: "Escolhe", faq: "Perguntas frequentes", cta: "Cria a tua sondagem moomz grátis →", related: "Comparar também", updated: "Última atualização", feature: "Critério", ctaCardTitle: "Cria a tua sondagem moomz", ctaCardSub: "10 segundos, anónima, grátis" },
  de: { back: "← alle Vergleiche", wins: " gewinnt", tie: "Unentschieden", headToHead: "Direktvergleich:", verdict: "Fazit", pick: "Wähle", faq: "Häufige Fragen", cta: "Erstelle deine kostenlose moomz-Umfrage →", related: "Auch vergleichen", updated: "Zuletzt aktualisiert", feature: "Kriterium", ctaCardTitle: "Erstelle deine moomz-Umfrage", ctaCardSub: "10 Sekunden, anonym, kostenlos" },
  ja: { back: "← すべての比較", wins: " の勝ち", tie: "引き分け", headToHead: "直接対決：", verdict: "結論", pick: "選ぶなら", faq: "よくある質問", cta: "無料で moomz 投票を作成 →", related: "こちらも比較", updated: "最終更新", feature: "項目", ctaCardTitle: "無料で moomz 投票を作成", ctaCardSub: "10秒、匿名、無料" },
  zh: { back: "← 所有对比", wins: " 胜出", tie: "平局", headToHead: "正面对决：", verdict: "结论", pick: "选择", faq: "常见问题", cta: "免费创建你的 moomz 投票 →", related: "也来对比", updated: "最后更新", feature: "对比项", ctaCardTitle: "免费创建你的 moomz 投票", ctaCardSub: "10 秒、匿名、免费" },
};

const WINNER_STYLES: Record<
  "a" | "b" | "tie",
  { row: string; badge: string; labelKey: "a" | "b" | "tie" }
> = {
  a: {
    row: "bg-pink-500/10 border-pink-400/30",
    badge: "bg-pink-500/30 text-pink-100 border-pink-400/40",
    labelKey: "a",
  },
  b: {
    row: "bg-violet-500/10 border-violet-400/30",
    badge: "bg-violet-500/30 text-violet-100 border-violet-400/40",
    labelKey: "b",
  },
  tie: {
    row: "bg-white/[0.03] border-white/10",
    badge: "bg-white/10 text-white/70 border-white/20",
    labelKey: "tie",
  },
};

export default function ComparePage({
  params,
}: {
  params: { slug: string };
}) {
  const page = findCompare(params.slug, getLocale() as CompareLocale);
  if (!page) notFound();

  const t = DETAIL_T[page.locale] ?? DETAIL_T.en;

  const aWins = page.highlights.filter((h) => h.winner === "a").length;
  const bWins = page.highlights.filter((h) => h.winner === "b").length;
  const ties = page.highlights.filter((h) => h.winner === "tie").length;

  const winnerLabel = (w: "a" | "b" | "tie") =>
    w === "a"
      ? `${page.a.name}${t.wins}`
      : w === "b"
      ? `${page.b.name}${t.wins}`
      : t.tie;

  return (
    <article className="space-y-10 fade-up">
      <HubNav locale={page.locale} current="compare" />
      <header className="space-y-3">
        <div className="text-xs uppercase tracking-widest text-white/40 flex items-center gap-2">
          <Link
            href={`/${page.locale}/compare`}
            className="hover:text-white transition"
          >
            {t.back}
          </Link>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl tracking-tight bg-gradient-to-br from-white via-pink-200 to-pink-400 bg-clip-text text-transparent leading-tight">
          <span className="mr-2">
            {page.a.emoji}
            <span className="text-white/30 mx-1">vs</span>
            {page.b.emoji}
          </span>
          {page.h1}
        </h1>
        <p className="text-white/60 text-base sm:text-lg text-balance">
          {page.intro}
        </p>
        <div className="flex flex-wrap gap-2 pt-2">
          <span className="rounded-full bg-pink-500/20 border border-pink-400/30 px-3 py-1 text-xs text-pink-200">
            {page.a.name}: {aWins}
          </span>
          <span className="rounded-full bg-violet-500/20 border border-violet-400/30 px-3 py-1 text-xs text-violet-200">
            {page.b.name}: {bWins}
          </span>
          {ties > 0 && (
            <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-white/60">
              {t.tie}: {ties}
            </span>
          )}
        </div>
      </header>

      <Link
        href="/"
        className="block rounded-2xl bg-gradient-to-r from-pink-500/20 to-purple-600/20 border border-pink-400/30 px-5 py-4 hover:from-pink-500/30 hover:to-purple-600/30 transition"
      >
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="font-display text-xl">{t.ctaCardTitle}</div>
            <div className="text-xs text-white/50">
              moomz.com — {t.ctaCardSub}
            </div>
          </div>
          <span className="text-2xl">→</span>
        </div>
      </Link>

      <section className="space-y-3">
        <h2 className="font-display text-2xl text-white">
          {t.headToHead} {page.a.name} <span className="text-white/40">vs</span>{" "}
          {page.b.name}
        </h2>
        <div className="space-y-2">
          <div className="hidden sm:grid grid-cols-12 gap-3 px-4 py-2 text-[10px] uppercase tracking-widest text-white/40">
            <div className="col-span-4">{t.feature}</div>
            <div className="col-span-4">{page.a.name}</div>
            <div className="col-span-4">{page.b.name}</div>
          </div>
          {page.highlights.map((h, i) => {
            const style = WINNER_STYLES[h.winner];
            return (
              <div
                key={i}
                className={`glass rounded-2xl border ${style.row} px-4 py-3`}
              >
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-3">
                  <div className="sm:col-span-4">
                    <div className="text-[10px] uppercase tracking-widest text-white/40 mb-1 sm:hidden">
                      {t.feature}
                    </div>
                    <div className="text-sm font-semibold text-white">
                      {h.label}
                    </div>
                    <span
                      className={`inline-block mt-1.5 rounded-full border px-2 py-0.5 text-[10px] uppercase tracking-wider ${style.badge}`}
                    >
                      {winnerLabel(h.winner)}
                    </span>
                  </div>
                  <div className="sm:col-span-4">
                    <div className="text-[10px] uppercase tracking-widest text-white/40 mb-1 sm:hidden">
                      {page.a.name}
                    </div>
                    <div className="text-sm text-white/80 leading-relaxed">
                      {h.a}
                    </div>
                  </div>
                  <div className="sm:col-span-4">
                    <div className="text-[10px] uppercase tracking-widest text-white/40 mb-1 sm:hidden">
                      {page.b.name}
                    </div>
                    <div className="text-sm text-white/70 leading-relaxed">
                      {h.b}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-2xl text-white">{t.verdict}</h2>
        <p className="text-white/70 leading-relaxed">{page.verdict}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="glass rounded-2xl border border-pink-400/20 p-4">
            <div className="text-xs uppercase tracking-widest text-pink-200 mb-2">
              {t.pick} {page.a.name}
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
              {page.pickA}
            </p>
          </div>
          <div className="glass rounded-2xl border border-violet-400/20 p-4">
            <div className="text-xs uppercase tracking-widest text-violet-200 mb-2">
              {t.pick} {page.b.name}
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
              {page.pickB}
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-2xl text-white">{t.faq}</h2>
        <div className="space-y-2">
          {page.faq.map((f, i) => (
            <details key={i} className="glass rounded-xl px-4 py-3 group">
              <summary className="font-medium text-white cursor-pointer list-none flex items-center justify-between gap-3">
                <span>{f.q}</span>
                <span className="text-white/40 group-open:rotate-45 transition shrink-0">
                  +
                </span>
              </summary>
              <p className="text-white/70 mt-2 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {page.related.length > 0 && (
        <section className="space-y-3">
          <h3 className="font-display text-lg text-white/80">{t.related}</h3>
          <ul className="flex flex-wrap gap-2">
            {page.related.map((slug) => (
              <li key={slug}>
                <Link
                  href={`/${page.locale}/compare/${slug}`}
                  className="rounded-full bg-white/5 border border-white/10 px-3 py-1.5 text-xs text-white/70 hover:bg-white/10 transition"
                >
                  {slug.replace(/-vs-/g, " vs ").replace(/-/g, " ")}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <Link
        href="/"
        className="block rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 px-5 py-4 text-center font-display text-xl hover:scale-[1.02] transition shadow-lg shadow-pink-500/30"
      >
        {t.cta}
      </Link>

      <p className="text-center text-xs text-white/30">
        {t.updated} {page.updatedAt}
      </p>
    </article>
  );
}
