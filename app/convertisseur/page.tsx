import type { Metadata } from "next";
import Link from "next/link";
import {
  CONVERTISSEUR_SLUGS,
  CURRENCIES,
  fetchLatestRate,
  formatRate,
  pairSlug,
  pairsByBase,
  parsePair,
  type CurrencyCode,
} from "@/lib/tools/convertisseur";
import { getLocale } from "@/lib/i18n-server";
import { STRINGS, pickString, type ToolLocale } from "./_strings";

export const dynamic = "force-static";
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Convertisseur de devises — taux en direct EUR USD GBP JPY · moomz",
  description:
    "Convertisseur de devises gratuit : EUR, USD, GBP, JPY, CHF et 10 autres. Taux mis à jour toutes les heures, historique 30 jours, conversion instantanée.",
  alternates: { canonical: "https://moomz.com/convertisseur" },
  openGraph: {
    title: "Convertisseur de devises — moomz",
    description:
      "Taux de change en direct pour les principales devises. Convertis EUR, USD, GBP, JPY et plus en quelques secondes.",
    type: "website",
    url: "https://moomz.com/convertisseur",
  },
  twitter: { card: "summary_large_image" },
};

// We fetch live rates for the first FEATURED slugs only — keeps the hub fast
// and stays well within the Frankfurter rate limits.
const FEATURED_SLUGS = [
  "eur-usd",
  "usd-eur",
  "eur-gbp",
  "gbp-eur",
  "eur-jpy",
  "usd-jpy",
  "usd-gbp",
  "eur-chf",
];

export default async function ConvertisseurHub() {
  const locale = (getLocale() as ToolLocale) ?? "fr";
  const S = pickString(locale);

  const featured = await Promise.all(
    FEATURED_SLUGS.map(async (slug) => {
      const p = parsePair(slug);
      if (!p) return null;
      const rate = await fetchLatestRate(p.from, p.to);
      return { slug, pair: p, rate };
    })
  );

  const groups = pairsByBase();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: S.hubTitle,
    description: S.hubIntro,
    url: "https://moomz.com/convertisseur",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: CONVERTISSEUR_SLUGS.length,
      itemListElement: CONVERTISSEUR_SLUGS.slice(0, 50).map((slug, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: slug.toUpperCase().replace("-", " → "),
        url: `https://moomz.com/convertisseur/${slug}`,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="space-y-8 fade-up">
        <header className="text-center space-y-2">
          <h1 className="font-display text-4xl sm:text-5xl tracking-tight bg-gradient-to-br from-white via-pink-200 to-pink-400 bg-clip-text text-transparent">
            {S.hubTitle}
          </h1>
          <p className="text-white/65 text-base sm:text-lg max-w-md mx-auto text-balance">
            {S.hubIntro}
          </p>
          <p className="text-white/40 text-sm">
            {S.hubSubline.replace("{n}", String(CONVERTISSEUR_SLUGS.length))}
          </p>
        </header>

        <section aria-labelledby="featured" className="space-y-3">
          <h2 id="featured" className="text-lg font-bold tracking-tight">
            {S.popular}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {featured.map((item) => {
              if (!item) return null;
              const { slug, pair, rate } = item;
              const fromInfo = CURRENCIES[pair.from];
              const toInfo = CURRENCIES[pair.to];
              return (
                <Link
                  key={slug}
                  href={`/convertisseur/${slug}`}
                  className="glass rounded-2xl p-4 hover:scale-[1.01] active:scale-[0.99] transition group"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-2xl shrink-0" aria-hidden>
                      {fromInfo.flag}
                      <span className="mx-0.5 text-white/40 text-base">→</span>
                      {toInfo.flag}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-bold text-sm sm:text-base">
                        {pair.from} → {pair.to}
                      </div>
                      <div className="text-xs text-white/55">
                        {rate
                          ? `1 ${pair.from} = ${formatRate(rate.rate, pair.to)} ${pair.to}`
                          : S.rateUnavailable}
                      </div>
                    </div>
                    <span className="text-white/30 group-hover:text-white/70 transition" aria-hidden>
                      →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {groups.map(({ base, slugs }) => (
          <section key={base} className="space-y-3" aria-labelledby={`base-${base}`}>
            <h2
              id={`base-${base}`}
              className="text-lg font-bold tracking-tight flex items-center gap-2"
            >
              <span aria-hidden>{CURRENCIES[base].flag}</span>
              <span>{S.fromCurrency.replace("{c}", labelFor(base, locale))}</span>
              <span className="text-xs text-white/40 font-normal">({slugs.length})</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {slugs.map((slug) => {
                const p = parsePair(slug);
                if (!p) return null;
                return (
                  <Link
                    key={slug}
                    href={`/convertisseur/${slug}`}
                    className="glass rounded-xl px-3 py-2.5 text-sm hover:scale-[1.01] active:scale-[0.99] transition flex items-center gap-2"
                  >
                    <span aria-hidden>{CURRENCIES[p.to].flag}</span>
                    <span className="font-semibold">{p.from} → {p.to}</span>
                  </Link>
                );
              })}
            </div>
          </section>
        ))}

        <aside className="glass rounded-3xl p-5 sm:p-6 text-center space-y-2">
          <div className="text-xs uppercase tracking-[0.2em] text-white/40 font-semibold">
            ✨ {S.poweredBy}
          </div>
          <h2 className="text-xl sm:text-2xl font-bold">{S.ctaHeadline}</h2>
          <p className="text-sm text-white/60 max-w-sm mx-auto">{S.ctaBody}</p>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-2 text-sm font-bold mt-1"
          >
            {S.ctaButton} <span aria-hidden>→</span>
          </Link>
        </aside>
      </div>
    </>
  );
}

function labelFor(code: CurrencyCode, locale: ToolLocale): string {
  const info = CURRENCIES[code];
  if (locale === "fr" || locale === "es" || locale === "it" || locale === "pt") {
    return info.name_fr;
  }
  return info.name_en;
}

// Force pair generation list to be used (and surface compile errors early
// if the lib changes).
export function generateStaticParams() {
  return [] as { slug: string }[];
}

// Touch a reference so a future tree-shake doesn't strip the helper.
void pairSlug;
