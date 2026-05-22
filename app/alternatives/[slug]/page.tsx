import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { alternatives } from "@/lib/seo/alternatives";
import { canonicalUrl } from "@/lib/i18n-server";

export function generateStaticParams() {
  return alternatives.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const page = alternatives.find((a) => a.slug === params.slug);
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
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
    },
  };
}

const WINNER_STYLES: Record<
  "moomz" | "competitor" | "tie",
  { row: string; badge: string; label: string }
> = {
  moomz: {
    row: "bg-pink-500/10 border-pink-400/30",
    badge: "bg-pink-500/30 text-pink-100 border-pink-400/40",
    label: "moomz wins",
  },
  competitor: {
    row: "bg-white/[0.03] border-white/10",
    badge: "bg-white/10 text-white/70 border-white/20",
    label: "they win",
  },
  tie: {
    row: "bg-white/[0.03] border-white/10",
    badge: "bg-white/10 text-white/70 border-white/20",
    label: "tie",
  },
};

export default function AlternativePage({
  params,
}: {
  params: { slug: string };
}) {
  const page = alternatives.find((a) => a.slug === params.slug);
  if (!page) notFound();

  const moomzWins = page.highlights.filter((h) => h.winner === "moomz").length;
  const compWins = page.highlights.filter(
    (h) => h.winner === "competitor"
  ).length;
  const ties = page.highlights.filter((h) => h.winner === "tie").length;

  return (
    <article className="space-y-10 fade-up">
      <header className="space-y-3">
        <div className="text-xs uppercase tracking-widest text-white/40 flex items-center gap-2">
          <Link href="/alternatives" className="hover:text-white transition">
            ← all alternatives
          </Link>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl tracking-tight bg-gradient-to-br from-white via-pink-200 to-pink-400 bg-clip-text text-transparent leading-tight">
          <span className="mr-2">{page.emoji}</span>
          {page.h1}
        </h1>
        <p className="text-white/60 text-base sm:text-lg text-balance">
          {page.intro}
        </p>
        <div className="flex flex-wrap gap-2 pt-2">
          <span className="rounded-full bg-pink-500/20 border border-pink-400/30 px-3 py-1 text-xs text-pink-200">
            moomz: {moomzWins}
          </span>
          <span className="rounded-full bg-white/10 border border-white/20 px-3 py-1 text-xs text-white/70">
            {page.competitor}: {compWins}
          </span>
          {ties > 0 && (
            <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-white/60">
              tie: {ties}
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
            <div className="font-display text-xl">
              Create your free moomz poll
            </div>
            <div className="text-xs text-white/50">
              moomz.com — 10 seconds, anonymous, free
            </div>
          </div>
          <span className="text-2xl">→</span>
        </div>
      </Link>

      <section className="space-y-3">
        <h2 className="font-display text-2xl text-white">
          Head-to-head: moomz vs {page.competitor}
        </h2>
        <div className="space-y-2">
          <div className="hidden sm:grid grid-cols-12 gap-3 px-4 py-2 text-[10px] uppercase tracking-widest text-white/40">
            <div className="col-span-4">Feature</div>
            <div className="col-span-4">moomz</div>
            <div className="col-span-4">{page.competitor}</div>
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
                      Feature
                    </div>
                    <div className="text-sm font-semibold text-white">
                      {h.label}
                    </div>
                    <span
                      className={`inline-block mt-1.5 rounded-full border px-2 py-0.5 text-[10px] uppercase tracking-wider ${style.badge}`}
                    >
                      {style.label}
                    </span>
                  </div>
                  <div className="sm:col-span-4">
                    <div className="text-[10px] uppercase tracking-widest text-white/40 mb-1 sm:hidden">
                      moomz
                    </div>
                    <div className="text-sm text-white/80 leading-relaxed">
                      {h.moomz}
                    </div>
                  </div>
                  <div className="sm:col-span-4">
                    <div className="text-[10px] uppercase tracking-widest text-white/40 mb-1 sm:hidden">
                      {page.competitor}
                    </div>
                    <div className="text-sm text-white/70 leading-relaxed">
                      {h.comp}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-2xl text-white">Frequently asked</h2>
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

      <Link
        href="/"
        className="block rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 px-5 py-4 text-center font-display text-xl hover:scale-[1.02] transition shadow-lg shadow-pink-500/30"
      >
        Create your free moomz poll →
      </Link>

      <p className="text-center text-xs text-white/30">
        Last updated {page.updatedAt}
      </p>
    </article>
  );
}
