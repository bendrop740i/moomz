import Link from "next/link";
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

const CTA_LABELS: Record<Locale, { create: string; ideas: string; back: string; faq: string; tryNow: string; related: string }> = {
  fr: {
    create: "Crée ton sondage moomz",
    ideas: "Idées de sondage prêtes à lancer",
    back: "← Toutes les idées",
    faq: "Questions fréquentes",
    tryNow: "Lancer ce sondage",
    related: "À lire aussi",
  },
  en: {
    create: "Create your moomz poll",
    ideas: "Ready-to-launch poll prompts",
    back: "← All ideas",
    faq: "Frequently asked",
    tryNow: "Launch this poll",
    related: "Related reads",
  },
  es: {
    create: "Crea tu encuesta moomz",
    ideas: "Ideas de encuesta listas para lanzar",
    back: "← Todas las historias",
    faq: "Preguntas frecuentes",
    tryNow: "Lanzar esta encuesta",
    related: "También para leer",
  },
  it: {
    create: "Crea il tuo sondaggio moomz",
    ideas: "Idee di sondaggio pronte da lanciare",
    back: "← Tutte le storie",
    faq: "Domande frequenti",
    tryNow: "Lancia questo sondaggio",
    related: "Da leggere anche",
  },
  pt: {
    create: "Crie sua enquete moomz",
    ideas: "Ideias de enquete prontas",
    back: "← Todas as histórias",
    faq: "Perguntas frequentes",
    tryNow: "Lançar esta enquete",
    related: "Leia também",
  },
  de: {
    create: "Erstelle deine moomz-Umfrage",
    ideas: "Sofort startbare Umfrage-Ideen",
    back: "← Alle Geschichten",
    faq: "Häufige Fragen",
    tryNow: "Diese Umfrage starten",
    related: "Weiterlesen",
  },
  ja: {
    create: "moomzで投票を作る",
    ideas: "すぐ使える投票アイデア",
    back: "← すべてのストーリー",
    faq: "よくある質問",
    tryNow: "この投票をはじめる",
    related: "あわせて読む",
  },
  zh: {
    create: "创建你的 moomz 投票",
    ideas: "现成可用的投票灵感",
    back: "← 所有故事",
    faq: "常见问题",
    tryNow: "发起这个投票",
    related: "延伸阅读",
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

  return (
    <article className="space-y-8 fade-up">
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <Breadcrumb page={page} />

      <header className="space-y-3">
        <div className="text-xs uppercase tracking-widest text-white/40 flex items-center gap-2">
          <Link
            href={page.category === "idees" || page.category === "guides" || page.category === "ideas" || page.category === "blog" ? `/${page.category}` : "/"}
            className="hover:text-white transition"
          >
            {page.category}
          </Link>
          <span>·</span>
          <span>{page.locale}</span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl tracking-tight bg-gradient-to-br from-white via-pink-200 to-pink-400 bg-clip-text text-transparent leading-tight">
          {page.emoji ? <span className="mr-2">{page.emoji}</span> : null}
          {page.h1}
        </h1>
        <p className="text-white/60 text-base sm:text-lg text-balance">{page.intro}</p>
      </header>

      <Link
        href="/"
        className="block rounded-2xl bg-gradient-to-r from-pink-500/20 to-purple-600/20 border border-pink-400/30 px-5 py-4 hover:from-pink-500/30 hover:to-purple-600/30 transition"
      >
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="font-display text-xl">{labels.create}</div>
            <div className="text-xs text-white/50">moomz.com — 10 secondes, anonyme, gratuit</div>
          </div>
          <span className="text-2xl">→</span>
        </div>
      </Link>

      {page.sections.map((s, i) => (
        <section key={i} className="space-y-2">
          <h2 className="font-semibold text-xl text-white">{s.h}</h2>
          <p className="text-white/70 leading-relaxed whitespace-pre-line">{s.body}</p>
        </section>
      ))}

      {page.polls.length > 0 && (
        <section className="space-y-3">
          <h2 className="font-semibold text-xl text-white">{labels.ideas}</h2>
          <ul className="space-y-2">
            {page.polls.map((p, i) => (
              <li key={i} className="glass rounded-xl px-4 py-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <div className="font-medium text-white">{p.q}</div>
                    <div className="text-xs text-white/50">{p.options.join(" · ")}</div>
                  </div>
                  <Link
                    href={pollLaunchUrl(p)}
                    className="shrink-0 rounded-lg bg-pink-500/20 border border-pink-400/30 px-3 py-1.5 text-xs font-medium text-pink-200 hover:bg-pink-500/30 transition whitespace-nowrap"
                  >
                    {labels.tryNow}
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}

      {page.faq.length > 0 && (
        <section className="space-y-3">
          <h2 className="font-semibold text-xl text-white">{labels.faq}</h2>
          <div className="space-y-2">
            {page.faq.map((f, i) => (
              <details key={i} className="glass rounded-xl px-4 py-3 group">
                <summary className="font-medium text-white cursor-pointer list-none flex items-center justify-between">
                  <span>{f.q}</span>
                  <span className="text-white/40 group-open:rotate-45 transition">+</span>
                </summary>
                <p className="text-white/70 mt-2 leading-relaxed">{f.a}</p>
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
        <section className="space-y-3">
          <h2 className="font-semibold text-xl text-white">{labels.related}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {related.map((r) => (
              <Link
                key={r.slug + r.category}
                href={pageUrl(r)}
                className="glass rounded-xl px-4 py-3 hover:bg-white/10 transition flex items-center gap-3"
              >
                {r.emoji && <span className="text-2xl">{r.emoji}</span>}
                <div className="min-w-0">
                  <div className="text-sm font-medium text-white truncate">{r.h1}</div>
                  <div className="text-xs text-white/40 truncate">{r.description}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* New rich cross-link grid */}
      <CrossLinkGrid page={page} max={8} />

      {/* Same-category pill row */}
      <SameCategoryPills page={page} max={12} />

      {/* Top-level hubs in this locale */}
      <ExploreThemes locale={page.locale} />

      {/* Similar-poll prominent CTA — visually loud, non-sticky */}
      {ctaPolls.length > 0 && (
        <section className="space-y-3">
          <div className="rounded-2xl bg-gradient-to-br from-pink-500/15 via-purple-600/10 to-pink-500/15 border border-pink-400/30 p-5 sm:p-6 space-y-4">
            <div className="space-y-1">
              <div className="font-display text-2xl text-white">
                {footerLabels.similarPoll}
              </div>
              <p className="text-sm text-white/60">{footerLabels.similarPollSub}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {ctaPolls.map((p, i) => (
                <Link
                  key={i}
                  href={pollLaunchUrl(p)}
                  className="block rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition p-3 group"
                >
                  <div className="text-sm font-medium text-white line-clamp-2">
                    {p.q}
                  </div>
                  <div className="text-xs text-white/40 mt-1 line-clamp-1">
                    {p.options.join(" · ")}
                  </div>
                  <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-pink-500/20 border border-pink-400/30 px-3 py-1 text-xs font-medium text-pink-200 group-hover:bg-pink-500/30 transition">
                    {footerLabels.launchPoll}
                    <span aria-hidden="true">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Link
        href="/"
        className="block rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 px-5 py-4 text-center font-display text-xl hover:scale-[1.02] transition shadow-lg shadow-pink-500/30"
      >
        {labels.create}
      </Link>
    </article>
  );
}
