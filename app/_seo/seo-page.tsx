import Link from "next/link";
import HubNav, { type HubKey } from "@/app/_seo/hub-nav";
import AdSlot from "@/app/ad-slot";
import type { SeoPage, Locale } from "@/lib/seo/types";
import { pageUrl, pollLaunchUrl } from "@/lib/seo/types";
import { relatedPages } from "@/lib/seo";
import { BreadcrumbJsonLd, buildBreadcrumbs } from "./json-ld";
import {
  Breadcrumb,
  CrossLinkGrid,
  ExploreThemes,
  SameCategoryPills,
  getFooterLabels,
} from "./related-grid";

type Props = {
  page: SeoPage;
};

const CTA_LABELS: Record<Locale, { create: string; createSub: string; ideas: string; back: string; faq: string; tryNow: string; related: string; qPrefix: string }> = {
  fr: {
    create: "Crée ton sondage moomz",
    createSub: "moomz.com — 10 secondes, anonyme, gratuit",
    ideas: "Idées de sondage prêtes à lancer",
    back: "← Toutes les idées",
    faq: "Questions fréquentes",
    tryNow: "Lancer ce sondage",
    related: "À lire aussi",
    qPrefix: "Q.",
  },
  en: {
    create: "Create your moomz poll",
    createSub: "moomz.com — 10 seconds, anonymous, free",
    ideas: "Ready-to-launch poll prompts",
    back: "← All ideas",
    faq: "Frequently asked",
    tryNow: "Launch this poll",
    related: "Related reads",
    qPrefix: "Q.",
  },
  es: {
    create: "Crea tu encuesta moomz",
    createSub: "moomz.com — 10 segundos, anónimo, gratis",
    ideas: "Ideas de encuesta listas para lanzar",
    back: "← Todas las historias",
    faq: "Preguntas frecuentes",
    tryNow: "Lanzar esta encuesta",
    related: "También para leer",
    qPrefix: "P.",
  },
  it: {
    create: "Crea il tuo sondaggio moomz",
    createSub: "moomz.com — 10 secondi, anonimo, gratis",
    ideas: "Idee di sondaggio pronte da lanciare",
    back: "← Tutte le storie",
    faq: "Domande frequenti",
    tryNow: "Lancia questo sondaggio",
    related: "Da leggere anche",
    qPrefix: "D.",
  },
  pt: {
    create: "Crie sua enquete moomz",
    createSub: "moomz.com — 10 segundos, anônimo, grátis",
    ideas: "Ideias de enquete prontas",
    back: "← Todas as histórias",
    faq: "Perguntas frequentes",
    tryNow: "Lançar esta enquete",
    related: "Leia também",
    qPrefix: "P.",
  },
  de: {
    create: "Erstelle deine moomz-Umfrage",
    createSub: "moomz.com — 10 Sekunden, anonym, gratis",
    ideas: "Sofort startbare Umfrage-Ideen",
    back: "← Alle Geschichten",
    faq: "Häufige Fragen",
    tryNow: "Diese Umfrage starten",
    related: "Weiterlesen",
    qPrefix: "F.",
  },
  ja: {
    create: "moomzで投票を作る",
    createSub: "moomz.com — 10秒、匿名、無料",
    ideas: "すぐ使える投票アイデア",
    back: "← すべてのストーリー",
    faq: "よくある質問",
    tryNow: "この投票をはじめる",
    related: "あわせて読む",
    qPrefix: "Q.",
  },
  zh: {
    create: "创建你的 moomz 投票",
    createSub: "moomz.com — 10 秒，匿名，免费",
    ideas: "现成可用的投票灵感",
    back: "← 所有故事",
    faq: "常见问题",
    tryNow: "发起这个投票",
    related: "延伸阅读",
    qPrefix: "问",
  },
};

export default function SeoPageView({ page }: Props) {
  const labels = CTA_LABELS[page.locale] ?? CTA_LABELS.en;
  const footerLabels = getFooterLabels(page.locale);
  const related = relatedPages(page);
  // Pick the first 1-2 polls for the prominent "similar poll" CTA at the very
  // bottom — they double-duty as a final conversion handle.
  const ctaPolls = page.polls.slice(0, 2);

  const breadcrumbItems = buildBreadcrumbs(page);

  const hubKey: HubKey =
    page.category === "guides"
      ? "guides"
      : page.category === "blog"
      ? "blog"
      : "ideas";

  return (
    <article className="space-y-12 fade-up">
      <HubNav locale={page.locale} current={hubKey} />
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <Breadcrumb page={page} />

      {/* Hero — glass panel with gradient orbs behind the title */}
      <header className="relative overflow-hidden glass rounded-[2rem] p-6 sm:p-10">
        <div className="pointer-events-none absolute -top-16 -right-10 h-48 w-48 rounded-full bg-pink-500/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-12 h-52 w-52 rounded-full bg-purple-600/25 blur-3xl" />
        <div className="relative space-y-4">
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em]">
            <Link
              href={page.category === "idees" || page.category === "guides" || page.category === "ideas" || page.category === "blog" ? `/${page.category}` : "/"}
              className="rounded-full bg-white/10 border border-white/15 px-3 py-1 text-white/70 hover:bg-white/20 hover:text-white transition"
            >
              {page.category}
            </Link>
            <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-white/40">
              {page.locale}
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl tracking-tight leading-[1.05]">
            {page.emoji ? (
              <span className="mr-2 inline-block drop-shadow-[0_4px_12px_rgba(236,72,153,0.5)]">
                {page.emoji}
              </span>
            ) : null}
            <span className="bg-gradient-to-br from-white via-pink-200 to-orange-300 bg-clip-text text-transparent">
              {page.h1}
            </span>
          </h1>
          <p className="text-white/70 text-base sm:text-xl leading-relaxed text-balance max-w-2xl">
            {page.intro}
          </p>
        </div>
      </header>

      {/* Primary CTA */}
      <Link
        href="/"
        className="group block rounded-2xl bg-gradient-to-r from-pink-500/25 via-purple-600/20 to-orange-500/20 border border-pink-400/30 px-5 py-4 hover:border-pink-400/60 hover:from-pink-500/35 hover:to-orange-500/30 transition"
      >
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="font-display text-xl text-white">{labels.create}</div>
            <div className="text-xs text-white/50">{labels.createSub}</div>
          </div>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/10 text-xl text-white group-hover:translate-x-1 group-hover:bg-white/20 transition">
            →
          </span>
        </div>
      </Link>

      {/* Article body — accent bar + drop-cap rhythm */}
      <div className="space-y-10">
        {page.sections.map((s, i) => (
          <section key={i} className="space-y-3">
            <h2 className="font-display text-2xl sm:text-3xl text-white flex items-center gap-3">
              <span className="h-7 w-1.5 shrink-0 rounded-full bg-gradient-to-b from-pink-400 to-purple-500" />
              {s.h}
            </h2>
            <p className="text-white/75 text-[15px] sm:text-base leading-[1.8] whitespace-pre-line pl-[18px]">
              {s.body}
            </p>
          </section>
        ))}
      </div>

      <AdSlot />

      {page.polls.length > 0 && (
        <section className="space-y-4">
          <h2 className="font-display text-2xl sm:text-3xl text-white flex items-center gap-3">
            <span className="h-7 w-1.5 shrink-0 rounded-full bg-gradient-to-b from-pink-400 to-purple-500" />
            {labels.ideas}
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {page.polls.map((p, i) => (
              <li
                key={i}
                className="glass rounded-2xl p-4 flex flex-col gap-3 hover:bg-white/[0.08] transition group"
              >
                <div className="flex items-start gap-2.5">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-pink-500/20 border border-pink-400/30 text-xs font-display text-pink-200">
                    {i + 1}
                  </span>
                  <div className="font-semibold text-white leading-snug">{p.q}</div>
                </div>
                <div className="flex flex-wrap gap-1.5 pl-[38px]">
                  {p.options.map((o, oi) => (
                    <span
                      key={oi}
                      className="rounded-lg bg-white/5 border border-white/10 px-2.5 py-1 text-xs text-white/60"
                    >
                      {o}
                    </span>
                  ))}
                </div>
                <Link
                  href={pollLaunchUrl(p)}
                  className="mt-auto inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-pink-500/25 to-purple-600/25 border border-pink-400/30 px-3 py-2 text-sm font-medium text-pink-100 hover:from-pink-500/40 hover:to-purple-600/40 transition"
                >
                  {labels.tryNow}
                  <span aria-hidden="true" className="group-hover:translate-x-0.5 transition">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {page.faq.length > 0 && (
        <section className="space-y-4">
          <h2 className="font-display text-2xl sm:text-3xl text-white flex items-center gap-3">
            <span className="h-7 w-1.5 shrink-0 rounded-full bg-gradient-to-b from-orange-400 to-pink-500" />
            {labels.faq}
          </h2>
          <div className="space-y-2.5">
            {page.faq.map((f, i) => (
              <details
                key={i}
                className="glass rounded-2xl px-5 py-4 group open:bg-white/[0.07] open:ring-1 open:ring-pink-400/20 transition"
              >
                <summary className="font-semibold text-white cursor-pointer list-none flex items-center justify-between gap-3">
                  <span className="flex items-center gap-2.5">
                    <span className="text-pink-300/70">{labels.qPrefix}</span>
                    {f.q}
                  </span>
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white/10 text-white/50 group-open:rotate-45 group-open:bg-pink-500/30 group-open:text-pink-200 transition">
                    +
                  </span>
                </summary>
                <p className="text-white/70 mt-3 leading-relaxed border-t border-white/10 pt-3">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </section>
      )}

      {/*
        Legacy "related" grid (from page.related). Kept for backward compat —
        the new rich CrossLinkGrid below replaces it semantically but we
        preserve this section to avoid breaking pages that hand-curated their
        related list.
      */}
      {related.length > 0 && (
        <section className="space-y-4">
          <h2 className="font-display text-2xl sm:text-3xl text-white flex items-center gap-3">
            <span className="h-7 w-1.5 shrink-0 rounded-full bg-gradient-to-b from-purple-400 to-pink-500" />
            {labels.related}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {related.map((r) => (
              <Link
                key={r.slug + r.category}
                href={pageUrl(r)}
                className="glass rounded-2xl p-4 hover:bg-white/[0.08] transition flex items-center gap-3 group"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-600/20 border border-white/10 text-2xl">
                  {r.emoji || "✨"}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-semibold text-white truncate group-hover:text-pink-200 transition">
                    {r.h1}
                  </div>
                  <div className="text-xs text-white/40 line-clamp-1">{r.description}</div>
                </div>
                <span className="text-white/30 group-hover:text-white/70 group-hover:translate-x-0.5 transition" aria-hidden="true">
                  →
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* New rich cross-link grid */}
      <CrossLinkGrid page={page} max={18} />

      {/* Same-category pill row */}
      <SameCategoryPills page={page} max={30} />

      {/* Top-level hubs in this locale */}
      <ExploreThemes locale={page.locale} />

      {/* Similar-poll prominent CTA — visually loud, non-sticky */}
      {ctaPolls.length > 0 && (
        <section>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-pink-500/20 via-purple-600/15 to-orange-500/20 border border-pink-400/30 p-6 sm:p-8 space-y-5">
            <div className="pointer-events-none absolute -top-12 right-0 h-40 w-40 rounded-full bg-pink-500/30 blur-3xl" />
            <div className="relative space-y-1.5">
              <div className="font-display text-2xl sm:text-3xl text-white">
                {footerLabels.similarPoll}
              </div>
              <p className="text-sm text-white/65">{footerLabels.similarPollSub}</p>
            </div>
            <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-3">
              {ctaPolls.map((p, i) => (
                <Link
                  key={i}
                  href={pollLaunchUrl(p)}
                  className="flex flex-col rounded-2xl bg-white/[0.06] border border-white/10 hover:bg-white/[0.12] hover:border-pink-400/40 transition p-4 group"
                >
                  <div className="text-sm font-semibold text-white line-clamp-2">
                    {p.q}
                  </div>
                  <div className="text-xs text-white/40 mt-1.5 line-clamp-1">
                    {p.options.join(" · ")}
                  </div>
                  <div className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-pink-500/25 border border-pink-400/30 px-3.5 py-1.5 text-xs font-medium text-pink-100 group-hover:bg-pink-500/40 transition">
                    {footerLabels.launchPoll}
                    <span aria-hidden="true" className="group-hover:translate-x-0.5 transition">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Link
        href="/"
        className="group block rounded-2xl bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 px-5 py-5 text-center font-display text-xl text-white hover:scale-[1.02] transition shadow-lg shadow-pink-500/30"
      >
        <span className="inline-flex items-center gap-2">
          {labels.create}
          <span aria-hidden="true" className="group-hover:translate-x-1 transition">→</span>
        </span>
      </Link>
    </article>
  );
}
