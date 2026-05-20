import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  JOURS_FERIES_SLUGS,
  YEARS,
  blurbFor,
  computeStats,
  countryLabel,
  fetchHolidays,
  formatLongDate,
  formatShortDate,
  formatWeekday,
  holidaySlug,
  parseSlug,
  relatedCountries,
  stringsFor,
} from "@/lib/tools/jours-feries";
import { getLocale } from "@/lib/i18n-server";

export const dynamic = "force-static";
export const revalidate = 86400;

export function generateStaticParams(): { slug: string }[] {
  return JOURS_FERIES_SLUGS.map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const parsed = parseSlug(params.slug);
  if (!parsed) return {};
  const { country, year } = parsed;
  const url = `https://moomz.com/jours-feries/${params.slug}`;
  const titleFr = `Jours fériés ${country.name_fr} ${year} — calendrier complet · moomz`;
  const titleEn = `Public holidays ${country.name_en} ${year} — full calendar · moomz`;
  const descFr = `Tous les jours fériés ${country.name_fr} en ${year} : dates exactes, jour de la semaine, ponts possibles, contexte historique pour chaque date.`;
  const descEn = `Every public holiday in ${country.name_en} for ${year}: exact dates, day of the week, possible long weekends, historical context for each date.`;
  return {
    title: titleFr,
    description: descFr,
    alternates: { canonical: url },
    openGraph: {
      title: titleFr,
      description: descFr,
      url,
      type: "article",
      siteName: "moomz",
      locale: "fr_FR",
      alternateLocale: ["en_US"],
    },
    twitter: {
      card: "summary_large_image",
      title: titleEn,
      description: descEn,
    },
  };
}

const TYPE_BADGE: Record<string, string> = {
  Public: "bg-pink-500/20 text-pink-200 border-pink-400/30",
  Bank: "bg-amber-400/20 text-amber-200 border-amber-300/30",
  School: "bg-sky-400/20 text-sky-200 border-sky-300/30",
  Authorities: "bg-violet-400/20 text-violet-200 border-violet-300/30",
  Optional: "bg-white/10 text-white/70 border-white/20",
  Observance: "bg-white/10 text-white/70 border-white/20",
};

export default async function HolidayDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const parsed = parseSlug(params.slug);
  if (!parsed) notFound();
  const { country, year } = parsed;
  const locale = getLocale();
  const S = stringsFor(locale);

  const holidays = await fetchHolidays(year, country.cc);
  const stats = computeStats(holidays, new Date());
  const otherYearList = YEARS.filter((y) => y !== year);
  const others = relatedCountries(country, 6);
  const blurb = blurbFor(country.cc, locale);
  const cName = countryLabel(country, locale);
  const apiFailed = holidays.length === 0;

  // Poll deeplink — prefills the create form on /
  const pollQ = encodeURIComponent(
    locale === "fr"
      ? `Ton jour férié préféré en ${cName} ?`
      : `Your favourite holiday in ${cName}?`
  );
  const pollOpts = (() => {
    if (apiFailed) return "";
    const labels = holidays.slice(0, 4).map((h) => h.localName).filter(Boolean);
    if (labels.length < 2) return "";
    return `&o=${labels.map((l) => encodeURIComponent(l)).join("|")}`;
  })();

  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: `${S.detailTitle
          .replace("{country}", cName)
          .replace("{year}", String(year))}`,
        url: `https://moomz.com/jours-feries/${params.slug}`,
        inLanguage: locale,
        about: {
          "@type": "Country",
          name: cName,
          identifier: country.cc,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "moomz", item: "https://moomz.com" },
          { "@type": "ListItem", position: 2, name: S.hubTitle, item: "https://moomz.com/jours-feries" },
          {
            "@type": "ListItem",
            position: 3,
            name: `${cName} ${year}`,
            item: `https://moomz.com/jours-feries/${params.slug}`,
          },
        ],
      },
      {
        "@type": "ItemList",
        name: S.detailTitle
          .replace("{country}", cName)
          .replace("{year}", String(year)),
        numberOfItems: holidays.length,
        itemListElement: holidays.slice(0, 30).map((h, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "Event",
            name: h.localName,
            startDate: h.date,
            endDate: h.date,
            eventStatus: "https://schema.org/EventScheduled",
            eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
            location: {
              "@type": "Country",
              name: cName,
              identifier: country.cc,
            },
            description: h.name,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="space-y-8 fade-up">
        <header className="space-y-3">
          <div className="text-xs uppercase tracking-[0.2em] text-white/40">
            <Link href="/jours-feries" className="hover:text-white transition">
              {S.back}
            </Link>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl tracking-tight bg-gradient-to-br from-white via-pink-200 to-pink-400 bg-clip-text text-transparent leading-tight">
            <span className="mr-2" aria-hidden>
              {country.flag}
            </span>
            {S.detailTitle
              .replace("{country}", cName)
              .replace("{year}", String(year))}
          </h1>
          <p className="text-white/60 text-base sm:text-lg">
            {apiFailed
              ? S.apiUnavailable
              : S.detailCount.replace("{n}", String(stats.total))}
          </p>
        </header>

        {!apiFailed && stats.next && (
          <section
            className="glass rounded-2xl p-5 sm:p-6 border border-pink-400/20"
            aria-labelledby="next-holiday"
          >
            <div className="flex items-start gap-4">
              <div className="shrink-0 flex flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500/25 to-purple-600/25 border border-pink-400/30 w-20 h-20">
                <div className="text-3xl font-display leading-none">
                  {nextDateDay(stats.next.date)}
                </div>
                <div className="text-[10px] uppercase tracking-widest text-white/60 mt-0.5">
                  {nextDateMonth(stats.next.date, locale)}
                </div>
              </div>
              <div className="min-w-0 flex-1 space-y-1">
                <h2
                  id="next-holiday"
                  className="text-xs uppercase tracking-[0.2em] text-white/50 font-semibold"
                >
                  {S.nextHoliday}
                </h2>
                <div className="font-display text-xl sm:text-2xl text-white">
                  {stats.next.localName}
                </div>
                <div className="text-sm text-white/65 capitalize">
                  {formatWeekday(stats.next.date, locale)} ·{" "}
                  {formatLongDate(stats.next.date, locale)}
                </div>
                <div className="text-sm text-pink-200 font-semibold">
                  {daysRemainingLabel(stats.daysUntilNext, S)}
                </div>
              </div>
            </div>
          </section>
        )}

        {!apiFailed && (
          <section className="space-y-3" aria-labelledby="calendar">
            <h2 id="calendar" className="text-lg font-bold tracking-tight">
              {S.fullCalendar}
            </h2>
            <ol className="glass rounded-2xl divide-y divide-white/10 overflow-hidden">
              {holidays.map((h, i) => {
                const types = Array.isArray(h.types) ? h.types : [];
                return (
                  <li key={`${h.date}-${i}`} className="p-4 sm:p-5">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="shrink-0 w-16 text-center">
                        <div className="font-display text-2xl leading-none">
                          {nextDateDay(h.date)}
                        </div>
                        <div className="text-[10px] uppercase tracking-widest text-white/50 mt-1">
                          {nextDateMonth(h.date, locale)}
                        </div>
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="font-semibold text-sm sm:text-base">
                          {h.localName}
                        </div>
                        {h.name && h.name !== h.localName && (
                          <div className="text-xs text-white/45 mt-0.5">
                            {h.name}
                          </div>
                        )}
                        <div className="text-xs text-white/55 mt-1 capitalize">
                          {formatWeekday(h.date, locale)} ·{" "}
                          {formatShortDate(h.date, locale)}
                        </div>
                        {types.length > 0 && (
                          <div className="mt-2 flex flex-wrap gap-1.5">
                            {types.map((t) => (
                              <span
                                key={t}
                                className={`inline-block rounded-full border px-2 py-0.5 text-[10px] uppercase tracking-wider font-semibold ${
                                  TYPE_BADGE[t] ?? TYPE_BADGE.Observance
                                }`}
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </section>
        )}

        {!apiFailed && (
          <section
            className="grid grid-cols-1 sm:grid-cols-3 gap-2"
            aria-labelledby="stats"
          >
            <h2 id="stats" className="sr-only">
              {S.stats}
            </h2>
            <StatCard label={S.total} value={stats.total} />
            <StatCard label={S.ponts} value={stats.ponts} />
            <StatCard label={S.weekend} value={stats.weekend} />
          </section>
        )}

        {blurb && (
          <section
            className="glass rounded-2xl p-5 space-y-2"
            aria-labelledby="about"
          >
            <h2 id="about" className="text-lg font-bold tracking-tight">
              {S.about}
            </h2>
            <p className="text-white/75 leading-relaxed text-sm sm:text-base">
              {blurb}
            </p>
          </section>
        )}

        <aside className="glass rounded-3xl p-5 sm:p-6 text-center space-y-2">
          <div className="text-xs uppercase tracking-[0.2em] text-white/40 font-semibold">
            ✨ moomz
          </div>
          <h2 className="text-xl sm:text-2xl font-bold">{S.pollHeadline}</h2>
          <p className="text-sm text-white/60 max-w-sm mx-auto">{S.pollBody}</p>
          <Link
            href={`/?q=${pollQ}${pollOpts}`}
            className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-2 text-sm font-bold mt-1"
          >
            {S.pollCta}
          </Link>
        </aside>

        <section className="space-y-3" aria-labelledby="other-years">
          <h2
            id="other-years"
            className="text-lg font-bold tracking-tight"
          >
            {S.otherYears}
          </h2>
          <div className="flex flex-wrap gap-2">
            {otherYearList.map((y) => (
              <Link
                key={y}
                href={`/jours-feries/${holidaySlug(country, y)}`}
                className="glass rounded-full px-4 py-2 text-sm font-semibold hover:scale-[1.02] transition"
              >
                {country.flag} {cName} {y}
              </Link>
            ))}
          </div>
        </section>

        <section className="space-y-3" aria-labelledby="other-countries">
          <h2
            id="other-countries"
            className="text-lg font-bold tracking-tight"
          >
            {S.otherCountries}
          </h2>
          <div className="grid grid-cols-2 gap-2">
            {others.map((c) => (
              <Link
                key={c.cc}
                href={`/jours-feries/${holidaySlug(c, year)}`}
                className="glass rounded-xl px-3 py-2.5 text-sm hover:scale-[1.01] active:scale-[0.99] transition flex items-center gap-2"
              >
                <span aria-hidden>{c.flag}</span>
                <span className="font-semibold truncate">
                  {countryLabel(c, locale)} {year}
                </span>
              </Link>
            ))}
          </div>
        </section>

        <div className="text-center">
          <Link
            href="/jours-feries"
            className="inline-block text-sm text-white/50 hover:text-white transition"
          >
            {S.back}
          </Link>
        </div>
      </div>
    </>
  );
}

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="glass rounded-2xl p-4 text-center">
      <div className="font-display text-3xl text-white">{value}</div>
      <div className="text-[11px] uppercase tracking-wider text-white/55 mt-1">
        {label}
      </div>
    </div>
  );
}

function nextDateDay(iso: string): string {
  const m = iso.match(/^\d{4}-\d{2}-(\d{2})$/);
  return m ? String(Number(m[1])) : "";
}

function nextDateMonth(
  iso: string,
  locale: ReturnType<typeof getLocale>
): string {
  const m = iso.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!m) return "";
  const dt = new Date(
    Date.UTC(Number(m[1]), Number(m[2]) - 1, Number(m[3]))
  );
  try {
    return new Intl.DateTimeFormat(intlTagFor(locale), {
      month: "short",
      timeZone: "UTC",
    })
      .format(dt)
      .replace(".", "");
  } catch {
    return m[2];
  }
}

function intlTagFor(locale: ReturnType<typeof getLocale>): string {
  switch (locale) {
    case "fr": return "fr-FR";
    case "en": return "en-US";
    case "es": return "es-ES";
    case "it": return "it-IT";
    case "pt": return "pt-PT";
    case "de": return "de-DE";
    case "ja": return "ja-JP";
    case "zh": return "zh-CN";
    default:   return "en-US";
  }
}

function daysRemainingLabel(
  days: number | null,
  S: ReturnType<typeof stringsFor>
): string {
  if (days === null) return S.noNext;
  if (days <= 0) return S.daysToday;
  if (days === 1) return S.daysTomorrow;
  return S.daysRemaining.replace("{n}", String(days));
}
