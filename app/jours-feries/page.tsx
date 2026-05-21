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
import type { Locale } from "@/lib/i18n";

export const dynamic = "force-dynamic";
export const revalidate = 86400;

const HOLIDAYS_META: Record<Locale, { title: string; description: string; ogTitle: string; ogDesc: string }> = {
  fr: {
    title: "Jours fériés 2026 et 2027 — calendrier 30 pays · moomz",
    description: "Calendrier complet des jours fériés 2026 et 2027 dans 30 pays : France, États-Unis, Royaume-Uni, Allemagne, Japon, Canada et plus. Dates, ponts possibles, contexte.",
    ogTitle: "Jours fériés 2026 et 2027 — moomz",
    ogDesc: "Calendrier complet des jours fériés dans 30 pays. Prochain férié, ponts possibles, contexte historique pour chaque date.",
  },
  en: {
    title: "Public holidays 2026 and 2027 — calendar for 30 countries · moomz",
    description: "Full public holiday calendar for 2026 and 2027 across 30 countries: France, USA, UK, Germany, Japan, Canada and more. Dates, long weekends, context.",
    ogTitle: "Public holidays 2026 and 2027 — moomz",
    ogDesc: "Full public holiday calendar for 30 countries. Next holiday, long weekends, historical context for each date.",
  },
  es: {
    title: "Días festivos 2026 y 2027 — calendario de 30 países · moomz",
    description: "Calendario completo de días festivos 2026 y 2027 en 30 países: Francia, EE.UU., Reino Unido, Alemania, Japón, Canadá y más. Fechas, puentes posibles, contexto.",
    ogTitle: "Días festivos 2026 y 2027 — moomz",
    ogDesc: "Calendario completo de días festivos en 30 países. Próximo festivo, puentes posibles, contexto histórico.",
  },
  it: {
    title: "Giorni festivi 2026 e 2027 — calendario di 30 paesi · moomz",
    description: "Calendario completo dei giorni festivi 2026 e 2027 in 30 paesi: Francia, USA, Regno Unito, Germania, Giappone, Canada e altri. Date, ponti possibili, contesto.",
    ogTitle: "Giorni festivi 2026 e 2027 — moomz",
    ogDesc: "Calendario completo dei giorni festivi in 30 paesi. Prossima festività, ponti possibili, contesto storico.",
  },
  pt: {
    title: "Feriados 2026 e 2027 — calendário de 30 países · moomz",
    description: "Calendário completo de feriados 2026 e 2027 em 30 países: França, EUA, Reino Unido, Alemanha, Japão, Canadá e mais. Datas, pontes possíveis, contexto.",
    ogTitle: "Feriados 2026 e 2027 — moomz",
    ogDesc: "Calendário completo de feriados em 30 países. Próximo feriado, pontes possíveis, contexto histórico.",
  },
  de: {
    title: "Feiertage 2026 und 2027 — Kalender für 30 Länder · moomz",
    description: "Vollständiger Feiertagskalender 2026 und 2027 für 30 Länder: Frankreich, USA, Großbritannien, Deutschland, Japan, Kanada und mehr. Termine, Brückentage, Kontext.",
    ogTitle: "Feiertage 2026 und 2027 — moomz",
    ogDesc: "Vollständiger Feiertagskalender für 30 Länder. Nächster Feiertag, Brückentage, historischer Kontext.",
  },
  ja: {
    title: "2026年・2027年の祝日 — 30カ国のカレンダー · moomz",
    description: "フランス、アメリカ、イギリス、ドイツ、日本、カナダなど30カ国の2026年・2027年祝日カレンダー。日付、連休、背景情報。",
    ogTitle: "2026年・2027年の祝日 — moomz",
    ogDesc: "30カ国の祝日カレンダー。次の祝日、連休の可能性、歴史的な背景。",
  },
  zh: {
    title: "2026年和2027年公共假期 — 30个国家日历 · moomz",
    description: "法国、美国、英国、德国、日本、加拿大等30个国家2026年和2027年的完整假期日历。日期、连休、背景信息。",
    ogTitle: "2026年和2027年公共假期 — moomz",
    ogDesc: "30个国家的完整假期日历。下一个假期、连休可能性、历史背景。",
  },
};

export function generateMetadata(): Metadata {
  const locale = getLocale() as Locale;
  const m = HOLIDAYS_META[locale] ?? HOLIDAYS_META.en;
  return {
    title: m.title,
    description: m.description,
    alternates: { canonical: "https://moomz.com/jours-feries" },
    openGraph: {
      title: m.ogTitle,
      description: m.ogDesc,
      type: "website",
      url: "https://moomz.com/jours-feries",
      siteName: "moomz",
    },
    twitter: {
      card: "summary_large_image",
      title: m.ogTitle,
      description: m.ogDesc,
    },
  };
}

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
      itemListElement: JOURS_FERIES_SLUGS.map((slug, i) => ({
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
