import type { Metadata } from "next";
import Link from "next/link";
import { getAllFormation } from "@/lib/formation/loader";
import { FORMATION_THEMES, THEME_META } from "@/lib/formation/types";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Formation — guides pratiques pour les 17-34 ans | moomz",
  description:
    "Lookmaxxing, forme, argent, confiance, études, style, vie pratique… des centaines de modules courts et concrets pour devenir la meilleure version de toi.",
  alternates: { canonical: "https://moomz.com/formation" },
  openGraph: {
    title: "Formation moomz — progresse pour de vrai",
    description:
      "Des modules courts et utiles : soin de soi, forme, argent, mental, études, style.",
    type: "website",
    url: "https://moomz.com/formation",
  },
};

export default function FormationHub() {
  const all = getAllFormation();
  const themes = FORMATION_THEMES.map((theme) => ({
    theme,
    meta: THEME_META[theme],
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
          Des modules courts et concrets pour progresser — soin de soi, forme, argent,
          mental, études, style. Pensé pour les 17-34 ans.
        </p>
        {all.length > 0 && (
          <p className="text-xs text-white/35">{all.length} modules · gratuit</p>
        )}
      </header>

      {themes.length === 0 && (
        <p className="text-center text-sm text-white/40">Modules bientôt disponibles.</p>
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
          Une question, un débat en tête ? Lance ton propre moomz.
        </p>
        <Link
          href="/create"
          className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 px-6 font-semibold text-white shadow-lg shadow-pink-500/30 transition hover:scale-[1.02] active:scale-[0.98]"
        >
          Créer un moomz
        </Link>
      </div>
    </div>
  );
}
