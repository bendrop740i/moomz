import type { Metadata } from "next";
import Link from "next/link";
import {
  COUNTRIES,
  JOURS_FERIES_SLUGS,
  YEARS,
  countryLabel,
  groupCountriesAlphabetically,
  holidaySlug,
  stringsFor,
} from "@/lib/tools/jours-feries";
import { getLocale } from "@/lib/i18n-server";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Jours fériés 2026 et 2027 — calendrier 30 pays · moomz",
  description:
    "Calendrier complet des jours fériés 2026 et 2027 dans 30 pays : France, États-Unis, Royaume-Uni, Allemagne, Japon, Canada et plus. Dates, ponts possibles, contexte.",
  alternates: { canonical: "https://moomz.com/jours-feries" },
  openGraph: {
    title: "Jours fériés 2026 et 2027 — moomz",
    description:
      "Calendrier complet des jours fériés dans 30 pays. Prochain férié, ponts possibles, contexte historique pour chaque date.",
    type: "website",
    url: "https://moomz.com/jours-feries",
    siteName: "moomz",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jours fériés 2026 et 2027 — moomz",
    description:
      "Calendrier complet des jours fériés dans 30 pays. Prochain férié, ponts possibles, contexte historique.",
  },
};

export default function JoursFeriesHub() {
  const locale = getLocale();
  const S = stringsFor(locale);
  const grouped = groupCountriesAlphabetically(COUNTRIES, locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: S.hubTitle,
    description: S.hubIntro,
    url: "https://moomz.com/jours-feries",
    inLanguage: locale,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: JOURS_FERIES_SLUGS.length,
      itemListElement: JOURS_FERIES_SLUGS.slice(0, 60).map((slug, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: slug.replace(/-/g, " ").toUpperCase(),
        url: `https://moomz.com/jours-feries/${slug}`,
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
            {S.hubSubline
              .replace("{n}", String(COUNTRIES.length))
              .replace("{y}", String(YEARS.length))}
          </p>
        </header>

        <section aria-labelledby="countries" className="space-y-5">
          <h2 id="countries" className="text-lg font-bold tracking-tight">
            {S.countriesLabel}
          </h2>
          <div className="space-y-6">
            {grouped.map(({ letter, countries }) => (
              <div key={letter} className="space-y-2">
                <div className="text-xs uppercase tracking-[0.2em] text-white/40 font-semibold">
                  {letter}
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {countries.map((c) => (
                    <li key={c.cc} className="glass rounded-2xl p-3">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl shrink-0" aria-hidden>
                          {c.flag}
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="font-bold text-sm sm:text-base truncate">
                            {countryLabel(c, locale)}
                          </div>
                          <div className="mt-1.5 flex flex-wrap gap-1.5">
                            {YEARS.map((y) => (
                              <Link
                                key={y}
                                href={`/jours-feries/${holidaySlug(c, y)}`}
                                className="rounded-full bg-white/10 hover:bg-white/20 transition px-2.5 py-0.5 text-xs font-semibold"
                              >
                                {y}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <aside className="glass rounded-3xl p-5 sm:p-6 text-center space-y-2">
          <div className="text-xs uppercase tracking-[0.2em] text-white/40 font-semibold">
            ✨ moomz
          </div>
          <h2 className="text-xl sm:text-2xl font-bold">{S.pollHeadline}</h2>
          <p className="text-sm text-white/60 max-w-sm mx-auto">{S.pollBody}</p>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-2 text-sm font-bold mt-1"
          >
            {S.pollCta}
          </Link>
        </aside>
      </div>
    </>
  );
}
