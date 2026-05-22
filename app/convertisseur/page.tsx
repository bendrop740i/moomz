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
import { getLocale, canonicalUrl } from "@/lib/i18n-server";
import { STRINGS, pickString, type ToolLocale } from "./_strings";

export const dynamic = "force-dynamic";
export const revalidate = 3600;

const META_HUB: Record<ToolLocale, { title: string; description: string; ogTitle: string; ogDesc: string }> = {
  fr: {
    title: "Convertisseur de devises — taux en direct EUR USD GBP JPY · moomz",
    description: "Convertisseur de devises gratuit : EUR, USD, GBP, JPY, CHF et 10 autres. Taux mis à jour toutes les heures, historique 30 jours, conversion instantanée.",
    ogTitle: "Convertisseur de devises — moomz",
    ogDesc: "Taux de change en direct pour les principales devises. Convertis EUR, USD, GBP, JPY et plus en quelques secondes.",
  },
  en: {
    title: "Currency converter — live EUR USD GBP JPY rates · moomz",
    description: "Free currency converter: EUR, USD, GBP, JPY, CHF and 10 more. Rates updated hourly, 30-day history, instant conversion.",
    ogTitle: "Currency converter — moomz",
    ogDesc: "Live exchange rates for major currencies. Convert EUR, USD, GBP, JPY and more in seconds.",
  },
  es: {
    title: "Conversor de divisas — tasas en directo EUR USD GBP JPY · moomz",
    description: "Conversor de divisas gratuito: EUR, USD, GBP, JPY, CHF y 10 más. Tasas actualizadas cada hora, historial 30 días, conversión instantánea.",
    ogTitle: "Conversor de divisas — moomz",
    ogDesc: "Tasas de cambio en directo para las principales divisas. Convierte EUR, USD, GBP, JPY y más en segundos.",
  },
  it: {
    title: "Convertitore di valute — tassi live EUR USD GBP JPY · moomz",
    description: "Convertitore di valute gratuito: EUR, USD, GBP, JPY, CHF e altri 10. Tassi aggiornati ogni ora, storico 30 giorni, conversione istantanea.",
    ogTitle: "Convertitore di valute — moomz",
    ogDesc: "Tassi di cambio in tempo reale per le principali valute. Converti EUR, USD, GBP, JPY e altro in secondi.",
  },
  pt: {
    title: "Conversor de moedas — taxas ao vivo EUR USD GBP JPY · moomz",
    description: "Conversor de moedas gratuito: EUR, USD, GBP, JPY, CHF e mais 10. Taxas atualizadas a cada hora, histórico 30 dias, conversão instantânea.",
    ogTitle: "Conversor de moedas — moomz",
    ogDesc: "Taxas de câmbio ao vivo para as principais moedas. Converta EUR, USD, GBP, JPY e mais em segundos.",
  },
  de: {
    title: "Währungsrechner — Live-Kurse EUR USD GBP JPY · moomz",
    description: "Kostenloser Währungsrechner: EUR, USD, GBP, JPY, CHF und 10 weitere. Stündlich aktualisierte Kurse, 30-Tage-Verlauf, Sofortumrechnung.",
    ogTitle: "Währungsrechner — moomz",
    ogDesc: "Live-Wechselkurse für die wichtigsten Währungen. Rechne EUR, USD, GBP, JPY und mehr in Sekunden um.",
  },
  ja: {
    title: "通貨換算ツール — EUR USD GBP JPYリアルタイムレート · moomz",
    description: "無料の通貨換算ツール：EUR、USD、GBP、JPY、CHFなど15通貨。毎時更新、30日間履歴、即時換算。",
    ogTitle: "通貨換算ツール — moomz",
    ogDesc: "主要通貨のリアルタイム為替レート。EUR、USD、GBP、JPYなどを数秒で換算。",
  },
  zh: {
    title: "货币换算器 — 实时汇率 EUR USD GBP JPY · moomz",
    description: "免费货币换算器：EUR、USD、GBP、JPY、CHF 等15种货币。每小时更新，30天历史，即时换算。",
    ogTitle: "货币换算器 — moomz",
    ogDesc: "主要货币实时汇率。几秒内换算 EUR、USD、GBP、JPY 等。",
  },
};

export function generateMetadata(): Metadata {
  const locale = (getLocale() as ToolLocale) ?? "fr";
  const m = META_HUB[locale] ?? META_HUB.en;
  return {
    title: m.title,
    description: m.description,
    alternates: { canonical: canonicalUrl() },
    openGraph: {
      title: m.ogTitle,
      description: m.ogDesc,
      type: "website",
      url: canonicalUrl(),
    },
    twitter: { card: "summary_large_image" },
  };
}

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
      itemListElement: CONVERTISSEUR_SLUGS.map((slug, i) => ({
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
