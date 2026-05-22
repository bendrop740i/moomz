import type { Metadata } from "next";
import Link from "next/link";
import {
  HEURE_CITIES,
  HEURE_REGIONS,
  findCity,
  flagEmoji,
  formatOffset,
  tzOffsetMinutes,
} from "@/lib/tools/heure";
import { getLocale, canonicalUrl } from "@/lib/i18n-server";
import type { Locale } from "@/lib/i18n";
import { jsonLdHtml } from "@/lib/json-ld";

// The hub displays the *current* hour for each city, so we revalidate at the
// edge every minute. City info itself is static.
export const dynamic = "force-dynamic";
export const revalidate = 60;

const HEURE_HUB_META: Record<Locale, { title: string; description: string; ogTitle: string; ogDesc: string }> = {
  fr: {
    title: "Heure dans le monde — horloges live de 50 villes · moomz",
    description: "Quelle heure est-il à Paris, New York, Tokyo, Sydney ? 50+ villes avec horloge live, fuseau horaire et décalage UTC. Pas d'app, pas de pub.",
    ogTitle: "Heure dans le monde — moomz",
    ogDesc: "50 villes, horloges en direct, fuseaux horaires. Tokyo, Paris, NYC, Sydney et plus.",
  },
  en: {
    title: "World clock — live time for 50 cities · moomz",
    description: "What time is it in Paris, New York, Tokyo, Sydney? 50+ cities with live clock, timezone and UTC offset. No app, no ads.",
    ogTitle: "World clock — moomz",
    ogDesc: "50 cities, live clocks, timezones. Tokyo, Paris, NYC, Sydney and more.",
  },
  es: {
    title: "Hora mundial — relojes en vivo de 50 ciudades · moomz",
    description: "¿Qué hora es en París, Nueva York, Tokio, Sídney? 50+ ciudades con reloj en vivo, zona horaria y desfase UTC. Sin app, sin anuncios.",
    ogTitle: "Hora mundial — moomz",
    ogDesc: "50 ciudades, relojes en directo, zonas horarias. Tokio, París, NYC, Sídney y más.",
  },
  it: {
    title: "Ora nel mondo — orologi live di 50 città · moomz",
    description: "Che ore sono a Parigi, New York, Tokyo, Sydney? 50+ città con orologio live, fuso orario e offset UTC. Senza app, senza pubblicità.",
    ogTitle: "Ora nel mondo — moomz",
    ogDesc: "50 città, orologi in diretta, fusi orari. Tokyo, Parigi, NYC, Sydney e altro.",
  },
  pt: {
    title: "Hora no mundo — relógios ao vivo de 50 cidades · moomz",
    description: "Que horas são em Paris, Nova York, Tóquio, Sydney? 50+ cidades com relógio ao vivo, fuso horário e offset UTC. Sem app, sem anúncios.",
    ogTitle: "Hora no mundo — moomz",
    ogDesc: "50 cidades, relógios ao vivo, fusos horários. Tóquio, Paris, NYC, Sydney e mais.",
  },
  de: {
    title: "Weltzeit — Live-Uhren für 50 Städte · moomz",
    description: "Wie spät ist es in Paris, New York, Tokio, Sydney? 50+ Städte mit Live-Uhr, Zeitzone und UTC-Versatz. Keine App, keine Werbung.",
    ogTitle: "Weltzeit — moomz",
    ogDesc: "50 Städte, Live-Uhren, Zeitzonen. Tokio, Paris, NYC, Sydney und mehr.",
  },
  ja: {
    title: "世界時計 — 50都市のライブ時計 · moomz",
    description: "パリ、ニューヨーク、東京、シドニーの今の時刻は？50以上の都市のライブ時計・タイムゾーン・UTC差。アプリ不要・広告なし。",
    ogTitle: "世界時計 — moomz",
    ogDesc: "50都市、ライブ時計、タイムゾーン。東京・パリ・NYC・シドニーなど。",
  },
  zh: {
    title: "世界时钟 — 50个城市实时时间 · moomz",
    description: "巴黎、纽约、东京、悉尼现在几点？50多个城市的实时时钟、时区和UTC偏移。无需应用，无广告。",
    ogTitle: "世界时钟 — moomz",
    ogDesc: "50个城市，实时时钟，时区。东京、巴黎、纽约、悉尼等。",
  },
};

export function generateMetadata(): Metadata {
  const locale = getLocale() as Locale;
  const m = HEURE_HUB_META[locale] ?? HEURE_HUB_META.en;
  return {
    title: m.title,
    description: m.description,
    alternates: { canonical: canonicalUrl() },
    openGraph: {
      title: m.ogTitle,
      description: m.ogDesc,
      type: "website",
      url: canonicalUrl(),
      siteName: "moomz",
    },
    twitter: { card: "summary_large_image" },
  };
}

type HubStrings = {
  title: string;
  tagline: string;
  subtitle: string;
  ctaTitle: string;
  ctaBody: string;
  ctaButton: string;
  poweredBy: string;
  /** Region section headings keyed by HEURE_REGIONS id. */
  regions: Record<string, string>;
  /** Accessible label for a city tile, e.g. "Time in {city} ({country})". */
  clockOf: (city: string, country: string) => string;
};

const HUB_STRINGS: Record<Locale, HubStrings> = {
  fr: {
    title: "Heure dans le monde",
    tagline: "50 villes · horloges live · fuseaux IANA",
    subtitle: "🌍 Clique sur une ville pour son horloge en direct + décalage.",
    ctaTitle: "Crée ton vibe check moomz",
    ctaBody: "Sondage instantané, partage en 1 clic, résultats en live.",
    ctaButton: "Lancer un moomz →",
    poweredBy: "Propulsé par moomz",
    regions: {
      "europe-fr": "France",
      europe: "Europe",
      "north-america": "Amérique du Nord",
      asia: "Asie",
      oceania: "Océanie",
      "south-america": "Amérique du Sud / Centrale",
      africa: "Afrique",
    },
    clockOf: (city, country) => `Heure à ${city} (${country})`,
  },
  en: {
    title: "Time around the world",
    tagline: "50 cities · live clocks · IANA timezones",
    subtitle: "🌍 Tap a city for the live clock and timezone diff.",
    ctaTitle: "Create your moomz vibe check",
    ctaBody: "Instant poll, one-tap share, live results.",
    ctaButton: "Start a moomz →",
    poweredBy: "Powered by moomz",
    regions: {
      "europe-fr": "France",
      europe: "Europe",
      "north-america": "North America",
      asia: "Asia",
      oceania: "Oceania",
      "south-america": "South & Central America",
      africa: "Africa",
    },
    clockOf: (city, country) => `Time in ${city} (${country})`,
  },
  es: {
    title: "Hora en el mundo",
    tagline: "50 ciudades · relojes en vivo · zonas IANA",
    subtitle: "🌍 Toca una ciudad para ver su reloj en vivo.",
    ctaTitle: "Crea tu encuesta moomz",
    ctaBody: "Encuesta instantánea, compartir con 1 toque, resultados en vivo.",
    ctaButton: "Lanzar moomz →",
    poweredBy: "Impulsado por moomz",
    regions: {
      "europe-fr": "Francia",
      europe: "Europa",
      "north-america": "América del Norte",
      asia: "Asia",
      oceania: "Oceanía",
      "south-america": "América del Sur y Central",
      africa: "África",
    },
    clockOf: (city, country) => `Hora en ${city} (${country})`,
  },
  it: {
    title: "Ora nel mondo",
    tagline: "50 città · orologi live · fusi IANA",
    subtitle: "🌍 Tocca una città per l'orologio live.",
    ctaTitle: "Crea il tuo vibe check moomz",
    ctaBody: "Sondaggio istantaneo, condivisione facile, risultati live.",
    ctaButton: "Lancia moomz →",
    poweredBy: "Powered by moomz",
    regions: {
      "europe-fr": "Francia",
      europe: "Europa",
      "north-america": "America del Nord",
      asia: "Asia",
      oceania: "Oceania",
      "south-america": "America del Sud / Centrale",
      africa: "Africa",
    },
    clockOf: (city, country) => `Ora a ${city} (${country})`,
  },
  pt: {
    title: "Hora no mundo",
    tagline: "50 cidades · relógios ao vivo · fusos IANA",
    subtitle: "🌍 Toque numa cidade para ver o relógio ao vivo.",
    ctaTitle: "Crie sua enquete moomz",
    ctaBody: "Enquete instantânea, compartilhamento fácil, resultados ao vivo.",
    ctaButton: "Lançar moomz →",
    poweredBy: "Powered by moomz",
    regions: {
      "europe-fr": "França",
      europe: "Europa",
      "north-america": "América do Norte",
      asia: "Ásia",
      oceania: "Oceania",
      "south-america": "América do Sul / Central",
      africa: "África",
    },
    clockOf: (city, country) => `Horário em ${city} (${country})`,
  },
  de: {
    title: "Zeit weltweit",
    tagline: "50 Städte · Live-Uhren · IANA-Zeitzonen",
    subtitle: "🌍 Tippe auf eine Stadt für die Live-Uhr.",
    ctaTitle: "Erstelle deinen moomz-Vibe-Check",
    ctaBody: "Sofortige Umfrage, Teilen mit einem Tipp, Live-Ergebnisse.",
    ctaButton: "moomz starten →",
    poweredBy: "Powered by moomz",
    regions: {
      "europe-fr": "Frankreich",
      europe: "Europa",
      "north-america": "Nordamerika",
      asia: "Asien",
      oceania: "Ozeanien",
      "south-america": "Süd- & Mittelamerika",
      africa: "Afrika",
    },
    clockOf: (city, country) => `Uhrzeit in ${city} (${country})`,
  },
  ja: {
    title: "世界の時刻",
    tagline: "50都市・ライブ時計・IANAタイムゾーン",
    subtitle: "🌍 都市をタップしてライブ時計を見よう。",
    ctaTitle: "moomzで投票を作る",
    ctaBody: "瞬時に投票、ワンタップ共有、ライブ結果。",
    ctaButton: "moomzを始める →",
    poweredBy: "moomz提供",
    regions: {
      "europe-fr": "フランス",
      europe: "ヨーロッパ",
      "north-america": "北アメリカ",
      asia: "アジア",
      oceania: "オセアニア",
      "south-america": "南・中央アメリカ",
      africa: "アフリカ",
    },
    clockOf: (city, country) => `${city}（${country}）の時刻`,
  },
  zh: {
    title: "世界时间",
    tagline: "50个城市・实时时钟・IANA时区",
    subtitle: "🌍 点击城市查看实时时钟。",
    ctaTitle: "创建你的moomz投票",
    ctaBody: "即时投票，一键分享，实时结果。",
    ctaButton: "开始moomz →",
    poweredBy: "moomz 提供",
    regions: {
      "europe-fr": "法国",
      europe: "欧洲",
      "north-america": "北美洲",
      asia: "亚洲",
      oceania: "大洋洲",
      "south-america": "南美洲 / 中美洲",
      africa: "非洲",
    },
    clockOf: (city, country) => `${city}（${country}）时间`,
  },
};

function fmtHour(date: Date, tz: string): string {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: tz,
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(date);
}

export default function HeureHubPage() {
  const locale = getLocale();
  const S = HUB_STRINGS[locale] ?? HUB_STRINGS.fr;
  const now = new Date();

  // JSON-LD: CollectionPage with a flat ItemList of all cities.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: S.title,
    description: S.tagline,
    url: "https://moomz.com/heure",
    inLanguage: locale,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: HEURE_CITIES.length,
      itemListElement: HEURE_CITIES.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.name,
        url: `https://moomz.com/heure/${c.slug}`,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: jsonLdHtml(jsonLd) }}
      />
      <div className="space-y-8 fade-up">
        <header className="text-center space-y-2">
          <h1 className="font-display text-4xl sm:text-5xl tracking-tight bg-gradient-to-br from-white via-pink-200 to-pink-400 bg-clip-text text-transparent">
            🕐 {S.title}
          </h1>
          <p className="text-white/65 text-base sm:text-lg max-w-md mx-auto text-balance">
            {S.tagline}
          </p>
          <p className="text-white/40 text-sm">{S.subtitle}</p>
        </header>

        {HEURE_REGIONS.map((region) => {
          const cities = region.slugs
            .map((s) => findCity(s))
            .filter((c): c is NonNullable<typeof c> => c != null);
          if (cities.length === 0) return null;
          return (
            <section key={region.id} className="space-y-3" aria-labelledby={`region-${region.id}`}>
              <h2
                id={`region-${region.id}`}
                className="text-lg font-bold tracking-tight flex items-center gap-2"
              >
                <span aria-hidden>{region.emoji}</span>
                <span>{S.regions[region.id] ?? region.label}</span>
                <span className="text-xs text-white/40 font-normal">({cities.length})</span>
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                {cities.map((c) => {
                  const hour = fmtHour(now, c.tz);
                  const offset = formatOffset(tzOffsetMinutes(c.tz, now));
                  return (
                    <Link
                      key={c.slug}
                      href={`/heure/${c.slug}`}
                      aria-label={S.clockOf(c.name, c.country)}
                      className="glass block rounded-2xl p-3 hover:scale-[1.02] active:scale-[0.99] transition group"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-2xl shrink-0" aria-hidden>
                          {flagEmoji(c.cc)}
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="font-bold text-sm leading-tight truncate group-hover:text-white">
                            {c.name}
                          </div>
                          <div className="text-[11px] text-white/40 truncate">
                            UTC{offset}
                          </div>
                        </div>
                      </div>
                      <div className="font-display text-2xl tabular-nums bg-gradient-to-br from-white via-pink-200 to-pink-400 bg-clip-text text-transparent mt-2 text-right">
                        {hour}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>
          );
        })}

        <aside className="glass rounded-3xl p-5 sm:p-6 text-center space-y-2">
          <div className="text-xs uppercase tracking-[0.2em] text-white/40 font-semibold">
            ✨ {S.poweredBy}
          </div>
          <h2 className="text-xl sm:text-2xl font-bold">{S.ctaTitle}</h2>
          <p className="text-sm text-white/60 max-w-sm mx-auto">{S.ctaBody}</p>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-2 text-sm font-bold mt-1"
          >
            {S.ctaButton}
          </Link>
        </aside>
      </div>
    </>
  );
}
