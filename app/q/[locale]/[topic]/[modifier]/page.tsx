import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import {
  TOPICS,
  AUDIENCES,
  THEMES,
  generatePage,
  type ProgLocale,
  type Topic,
} from "@/lib/seo/programmatic";
import { seoHref } from "@/lib/seo/seo-href";
import { getLocale } from "@/lib/i18n-server";

type Params = { locale: string; topic: string; modifier: string };

// Dynamic on-demand: the root layout reads cookies() for locale, which
// rules out static/ISR rendering. Each page renders per-request and is
// CDN-cached by Vercel. Avoids build-time render of 1100 pages.
export const dynamic = "force-dynamic";

function pollLaunchHref(q: string, options: string[]) {
  const qx = encodeURIComponent(q);
  const ox = options.map((s) => encodeURIComponent(s)).join("|");
  return `/create?q=${qx}&o=${ox}`;
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  if (params.locale !== "en" && params.locale !== "fr") return {};
  const page = generatePage(
    params.locale as ProgLocale,
    params.topic as Topic,
    params.modifier,
  );
  if (!page) return {};
  const url = `https://moomz.com/q/${params.locale}/${params.topic}/${params.modifier}`;
  const altUrl = (alt: ProgLocale) =>
    `https://moomz.com/q/${alt}/${params.topic}/${params.modifier}`;
  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: url,
      languages: {
        en: altUrl("en"),
        fr: altUrl("fr"),
        "x-default": altUrl("en"),
      },
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      type: "article",
      siteName: "moomz",
      locale: page.locale === "fr" ? "fr_FR" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
    },
  };
}

export default function ProgPage({ params }: { params: Params }) {
  if (params.locale !== "en" && params.locale !== "fr") notFound();
  const page = generatePage(
    params.locale as ProgLocale,
    params.topic as Topic,
    params.modifier,
  );
  if (!page) notFound();

  const cta = page.locale === "fr" ? "Lancer ce sondage" : "Launch this poll";
  const create = page.locale === "fr" ? "Crée le tien en 10s →" : "Create yours in 10s →";
  const moreTopic =
    page.locale === "fr" ? "Plus de sujets" : "More topics";
  const moreLabel = page.locale === "fr" ? "Voir tout" : "See all";

  // The /q route 301s the bare /q/... path to /{visitorLocale}/q/... — build
  // every internal link with that prefix so there is no redirect. `page.locale`
  // is the content locale (en/fr); the URL prefix needs the visitor's locale.
  const qBase = `${seoHref("q", getLocale())}/${page.locale}`; // /{visitorLocale}/q/{contentLocale}

  // Suggested cross-links: same topic, different audience or theme
  const related: Array<{ href: string; label: string }> = [];
  for (const a of AUDIENCES) {
    if (a.id === page.audience) continue;
    related.push({
      href: `${qBase}/${page.topic}/for-${a.id}-${page.theme}`,
      label: `${page.topicLabel} · ${a.label[page.locale]}`,
    });
    if (related.length >= 4) break;
  }
  for (const th of THEMES) {
    if (th.id === page.theme) continue;
    related.push({
      href: `${qBase}/${page.topic}/for-${page.audience}-${th.id}`,
      label: `${page.topicLabel} · ${th.label[page.locale]}`,
    });
    if (related.length >= 8) break;
  }

  return (
    <article className="space-y-8 fade-up">
      <header className="space-y-3">
        <div className="text-xs uppercase tracking-widest text-white/40 flex items-center gap-2">
          <Link href={seoHref("q", getLocale())} className="hover:text-white transition">
            /q
          </Link>
          <span>·</span>
          <Link href={`${qBase}/${page.topic}`} className="hover:text-white transition">
            {page.topicLabel.toLowerCase()}
          </Link>
          <span>·</span>
          <span>{page.locale}</span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl tracking-tight bg-gradient-to-br from-white via-pink-200 to-pink-400 bg-clip-text text-transparent leading-tight">
          <span className="mr-2">{page.emoji}</span>
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
            <div className="font-display text-xl">{create}</div>
            <div className="text-xs text-white/50">
              moomz.com — {page.locale === "fr" ? "anonyme, gratuit, 10 secondes" : "anonymous, free, 10 seconds"}
            </div>
          </div>
          <span className="text-2xl">→</span>
        </div>
      </Link>

      <section className="space-y-3">
        <h2 className="font-semibold text-xl text-white">
          {page.locale === "fr" ? "Sondages prêts à lancer" : "Ready-to-launch prompts"}
        </h2>
        <ul className="space-y-2">
          {page.prompts.map((p, i) => (
            <li key={i} className="glass rounded-xl px-4 py-3">
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1 min-w-0">
                  <div className="font-medium text-white">{p.q}</div>
                  <div className="text-xs text-white/50 truncate">{p.options.join(" · ")}</div>
                </div>
                <Link
                  href={pollLaunchHref(p.q, p.options)}
                  className="shrink-0 rounded-lg bg-pink-500/20 border border-pink-400/30 px-3 py-1.5 text-xs font-medium text-pink-200 hover:bg-pink-500/30 transition whitespace-nowrap"
                >
                  {cta}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="font-semibold text-xl text-white">
          {page.locale === "fr" ? "Questions fréquentes" : "Frequently asked"}
        </h2>
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

      <section className="space-y-3">
        <div className="flex items-baseline justify-between">
          <h2 className="font-semibold text-xl text-white">{moreTopic}</h2>
          <Link href={seoHref("q", getLocale())} className="text-xs text-white/40 hover:text-white">
            {moreLabel} →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {related.map((r) => (
            <Link
              key={r.href}
              href={r.href}
              className="glass rounded-xl px-4 py-3 hover:bg-white/10 transition text-sm text-white/80 truncate"
            >
              {r.label}
            </Link>
          ))}
        </div>
      </section>

      <Link
        href="/"
        className="block rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 px-5 py-4 text-center font-display text-xl hover:scale-[1.02] transition shadow-lg shadow-pink-500/30"
      >
        {create}
      </Link>
    </article>
  );
}
