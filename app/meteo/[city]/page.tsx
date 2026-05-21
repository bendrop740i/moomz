import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  METEO_SLUGS,
  findCity,
  flagOf,
  relatedCities,
  wxEmoji,
  wxKind,
  type City,
  type WxKind,
} from "@/lib/tools/meteo";
import { getLocale } from "@/lib/i18n-server";
import type { Locale } from "@/lib/i18n";

export const dynamic = "force-static";
export const revalidate = 1800;

export function generateStaticParams() {
  return METEO_SLUGS.map((city) => ({ city }));
}

// ---------- i18n strings ----------

type Strings = {
  pageTitle: (city: string) => string;
  pageDesc: (city: string, country: string) => string;
  metaTitle: (city: string, temp: string) => string;
  hero: (city: string) => string;
  back: string;
  now: string;
  feels: string;
  humidity: string;
  wind: string;
  forecast: string;
  sunrise: string;
  sunset: string;
  sunCard: string;
  climateHeading: (city: string) => string;
  pollHeading: string;
  pollIntro: string;
  pollA: string;
  pollB: string;
  pollCta: string;
  related: string;
  fallback: string;
  updated: string;
  units: { temp: string; wind: string; humidity: string };
  days: string[]; // 7 short weekday labels Sun..Sat
  wxLabel: Record<WxKind, string>;
};

const STRINGS: Record<Locale, Strings> = {
  fr: {
    pageTitle: (city) => `Météo ${city} — prévisions 7 jours en direct`,
    pageDesc: (city, country) => `Météo en direct à ${city} (${country}) : température, ressenti, vent, humidité, prévisions sur 7 jours. Données Open-Meteo, actualisées toutes les 30 minutes.`,
    metaTitle: (city, temp) => `Météo ${city} (${temp}) — prévisions 7 jours · moomz`,
    hero: (city) => `Météo ${city}`,
    back: "← toutes les villes",
    now: "Maintenant",
    feels: "Ressenti",
    humidity: "Humidité",
    wind: "Vent",
    forecast: "7 prochains jours",
    sunrise: "Lever du soleil",
    sunset: "Coucher du soleil",
    sunCard: "Soleil",
    climateHeading: (city) => `Climat à ${city}`,
    pollHeading: "À toi de voter",
    pollIntro: "Tu préfères quel temps ?",
    pollA: "🌧️ Pluie cosy",
    pollB: "☀️ Soleil & chaleur",
    pollCta: "Crée ce sondage sur moomz →",
    related: "Autres villes",
    fallback: "Données météo indisponibles pour l'instant — réessaie dans quelques minutes.",
    updated: "Mis à jour automatiquement toutes les 30 minutes",
    units: { temp: "°C", wind: "km/h", humidity: "%" },
    days: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
    wxLabel: {
      clear: "Ciel dégagé",
      partly: "Partiellement nuageux",
      fog: "Brouillard",
      rain: "Pluie",
      snow: "Neige",
      showers: "Averses",
      thunder: "Orage",
    },
  },
  en: {
    pageTitle: (city) => `${city} weather — live 7-day forecast`,
    pageDesc: (city, country) => `Live weather in ${city} (${country}): temperature, feels-like, wind, humidity, 7-day forecast. Open-Meteo data, refreshed every 30 minutes.`,
    metaTitle: (city, temp) => `${city} weather (${temp}) — 7-day forecast · moomz`,
    hero: (city) => `${city} weather`,
    back: "← all cities",
    now: "Now",
    feels: "Feels like",
    humidity: "Humidity",
    wind: "Wind",
    forecast: "Next 7 days",
    sunrise: "Sunrise",
    sunset: "Sunset",
    sunCard: "Sun",
    climateHeading: (city) => `Climate in ${city}`,
    pollHeading: "Your turn",
    pollIntro: "Which weather do you prefer?",
    pollA: "🌧️ Cozy rain",
    pollB: "☀️ Sun & heat",
    pollCta: "Create this poll on moomz →",
    related: "Other cities",
    fallback: "Weather data is unavailable right now — try again in a few minutes.",
    updated: "Auto-refreshed every 30 minutes",
    units: { temp: "°C", wind: "km/h", humidity: "%" },
    days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    wxLabel: {
      clear: "Clear sky",
      partly: "Partly cloudy",
      fog: "Fog",
      rain: "Rain",
      snow: "Snow",
      showers: "Showers",
      thunder: "Thunderstorm",
    },
  },
  es: {
    pageTitle: (city) => `El tiempo en ${city} — pronóstico 7 días en vivo`,
    pageDesc: (city, country) => `Tiempo en vivo en ${city} (${country}): temperatura, sensación térmica, viento, humedad, pronóstico a 7 días. Datos Open-Meteo, actualizados cada 30 min.`,
    metaTitle: (city, temp) => `Tiempo ${city} (${temp}) — 7 días · moomz`,
    hero: (city) => `Tiempo en ${city}`,
    back: "← todas las ciudades",
    now: "Ahora",
    feels: "Sensación",
    humidity: "Humedad",
    wind: "Viento",
    forecast: "Próximos 7 días",
    sunrise: "Amanecer",
    sunset: "Atardecer",
    sunCard: "Sol",
    climateHeading: (city) => `Clima en ${city}`,
    pollHeading: "Tu turno",
    pollIntro: "¿Qué tiempo prefieres?",
    pollA: "🌧️ Lluvia cosy",
    pollB: "☀️ Sol y calor",
    pollCta: "Crea esta encuesta en moomz →",
    related: "Otras ciudades",
    fallback: "Datos meteorológicos no disponibles ahora — vuelve a intentarlo en unos minutos.",
    updated: "Actualizado automáticamente cada 30 minutos",
    units: { temp: "°C", wind: "km/h", humidity: "%" },
    days: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
    wxLabel: {
      clear: "Cielo despejado",
      partly: "Parcialmente nublado",
      fog: "Niebla",
      rain: "Lluvia",
      snow: "Nieve",
      showers: "Chubascos",
      thunder: "Tormenta",
    },
  },
  it: {
    pageTitle: (city) => `Meteo ${city} — previsioni 7 giorni in diretta`,
    pageDesc: (city, country) => `Meteo in tempo reale a ${city} (${country}): temperatura, percepita, vento, umidità, previsioni a 7 giorni. Dati Open-Meteo, aggiornati ogni 30 min.`,
    metaTitle: (city, temp) => `Meteo ${city} (${temp}) — 7 giorni · moomz`,
    hero: (city) => `Meteo ${city}`,
    back: "← tutte le città",
    now: "Adesso",
    feels: "Percepita",
    humidity: "Umidità",
    wind: "Vento",
    forecast: "Prossimi 7 giorni",
    sunrise: "Alba",
    sunset: "Tramonto",
    sunCard: "Sole",
    climateHeading: (city) => `Clima a ${city}`,
    pollHeading: "Tocca a te",
    pollIntro: "Che tempo preferisci?",
    pollA: "🌧️ Pioggia cosy",
    pollB: "☀️ Sole e caldo",
    pollCta: "Crea questo sondaggio su moomz →",
    related: "Altre città",
    fallback: "Dati meteo non disponibili ora — riprova tra qualche minuto.",
    updated: "Aggiornato automaticamente ogni 30 minuti",
    units: { temp: "°C", wind: "km/h", humidity: "%" },
    days: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"],
    wxLabel: {
      clear: "Cielo sereno",
      partly: "Parzialmente nuvoloso",
      fog: "Nebbia",
      rain: "Pioggia",
      snow: "Neve",
      showers: "Rovesci",
      thunder: "Temporale",
    },
  },
  pt: {
    pageTitle: (city) => `Tempo ${city} — previsão 7 dias ao vivo`,
    pageDesc: (city, country) => `Tempo ao vivo em ${city} (${country}): temperatura, sensação, vento, humidade, previsão a 7 dias. Dados Open-Meteo, atualizados a cada 30 min.`,
    metaTitle: (city, temp) => `Tempo ${city} (${temp}) — 7 dias · moomz`,
    hero: (city) => `Tempo em ${city}`,
    back: "← todas as cidades",
    now: "Agora",
    feels: "Sensação",
    humidity: "Humidade",
    wind: "Vento",
    forecast: "Próximos 7 dias",
    sunrise: "Nascer do sol",
    sunset: "Pôr do sol",
    sunCard: "Sol",
    climateHeading: (city) => `Clima em ${city}`,
    pollHeading: "A tua vez",
    pollIntro: "Que tempo preferes?",
    pollA: "🌧️ Chuva cosy",
    pollB: "☀️ Sol e calor",
    pollCta: "Cria esta sondagem na moomz →",
    related: "Outras cidades",
    fallback: "Dados meteorológicos indisponíveis agora — tenta novamente em alguns minutos.",
    updated: "Atualizado automaticamente a cada 30 minutos",
    units: { temp: "°C", wind: "km/h", humidity: "%" },
    days: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
    wxLabel: {
      clear: "Céu limpo",
      partly: "Parcialmente nublado",
      fog: "Nevoeiro",
      rain: "Chuva",
      snow: "Neve",
      showers: "Aguaceiros",
      thunder: "Trovoada",
    },
  },
  de: {
    pageTitle: (city) => `Wetter ${city} — 7-Tage-Vorhersage live`,
    pageDesc: (city, country) => `Live-Wetter in ${city} (${country}): Temperatur, gefühlt, Wind, Luftfeuchte, 7-Tage-Vorhersage. Open-Meteo-Daten, alle 30 Min aktualisiert.`,
    metaTitle: (city, temp) => `Wetter ${city} (${temp}) — 7 Tage · moomz`,
    hero: (city) => `Wetter ${city}`,
    back: "← alle Städte",
    now: "Jetzt",
    feels: "Gefühlt",
    humidity: "Luftfeuchte",
    wind: "Wind",
    forecast: "Nächste 7 Tage",
    sunrise: "Sonnenaufgang",
    sunset: "Sonnenuntergang",
    sunCard: "Sonne",
    climateHeading: (city) => `Klima in ${city}`,
    pollHeading: "Du bist dran",
    pollIntro: "Welches Wetter magst du lieber?",
    pollA: "🌧️ Gemütlicher Regen",
    pollB: "☀️ Sonne und Wärme",
    pollCta: "Erstelle diese Umfrage auf moomz →",
    related: "Weitere Städte",
    fallback: "Wetterdaten gerade nicht verfügbar — bitte in einigen Minuten erneut versuchen.",
    updated: "Alle 30 Minuten automatisch aktualisiert",
    units: { temp: "°C", wind: "km/h", humidity: "%" },
    days: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
    wxLabel: {
      clear: "Klar",
      partly: "Teilweise bewölkt",
      fog: "Nebel",
      rain: "Regen",
      snow: "Schnee",
      showers: "Schauer",
      thunder: "Gewitter",
    },
  },
  ja: {
    pageTitle: (city) => `${city}の天気 — 7日間予報`,
    pageDesc: (city, country) => `${city}(${country})のリアルタイム天気:気温、体感、風、湿度、7日間予報。Open-Meteoデータ、30分ごとに更新。`,
    metaTitle: (city, temp) => `${city}の天気 (${temp}) — 7日間 · moomz`,
    hero: (city) => `${city}の天気`,
    back: "← すべての都市",
    now: "現在",
    feels: "体感温度",
    humidity: "湿度",
    wind: "風",
    forecast: "今後7日間",
    sunrise: "日の出",
    sunset: "日の入",
    sunCard: "太陽",
    climateHeading: (city) => `${city}の気候`,
    pollHeading: "あなたの番",
    pollIntro: "どっちの天気が好き?",
    pollA: "🌧️ ほっとする雨",
    pollB: "☀️ 太陽と暑さ",
    pollCta: "この投票をmoomzで作る →",
    related: "他の都市",
    fallback: "現在、天気データを取得できません。数分後にもう一度お試しください。",
    updated: "30分ごとに自動更新",
    units: { temp: "°C", wind: "km/h", humidity: "%" },
    days: ["日", "月", "火", "水", "木", "金", "土"],
    wxLabel: {
      clear: "快晴",
      partly: "晴れ時々曇り",
      fog: "霧",
      rain: "雨",
      snow: "雪",
      showers: "にわか雨",
      thunder: "雷雨",
    },
  },
  zh: {
    pageTitle: (city) => `${city}天气 — 7天预报`,
    pageDesc: (city, country) => `${city}(${country})实时天气:温度、体感、风速、湿度、7天预报。Open-Meteo数据,每30分钟更新。`,
    metaTitle: (city, temp) => `${city}天气 (${temp}) — 7天预报 · moomz`,
    hero: (city) => `${city}天气`,
    back: "← 所有城市",
    now: "现在",
    feels: "体感",
    humidity: "湿度",
    wind: "风速",
    forecast: "未来7天",
    sunrise: "日出",
    sunset: "日落",
    sunCard: "太阳",
    climateHeading: (city) => `${city}的气候`,
    pollHeading: "轮到你了",
    pollIntro: "你更喜欢哪种天气?",
    pollA: "🌧️ 舒适的雨天",
    pollB: "☀️ 阳光和炎热",
    pollCta: "在moomz创建这个投票 →",
    related: "其他城市",
    fallback: "当前天气数据不可用,请稍后再试。",
    updated: "每30分钟自动更新",
    units: { temp: "°C", wind: "km/h", humidity: "%" },
    days: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
    wxLabel: {
      clear: "晴",
      partly: "局部多云",
      fog: "雾",
      rain: "雨",
      snow: "雪",
      showers: "阵雨",
      thunder: "雷暴",
    },
  },
};

// ---------- Per-city climate blurbs (FR/EN) ----------
// Used by the "Climat à <city>" text block. Generic fallback otherwise.

type ClimateBlurb = { fr: string; en: string };

const CLIMATE: Record<string, ClimateBlurb> = {
  paris: {
    fr: "Paris vit sous un climat océanique tempéré, doux et changeant. Les étés sont relativement chauds, autour de 25°C en moyenne, avec quelques vagues de chaleur sèches en juillet et août. L'hiver oscille entre 3 et 8°C, gris et humide, la neige reste rare. Le printemps et l'automne sont parfaits pour visiter, mais la pluie peut surprendre n'importe quand — un parapluie pliable dans le sac reste la règle d'or des Parisiens.",
    en: "Paris has a mild oceanic climate — gentle but unpredictable. Summers average around 25°C with occasional dry heatwaves in July and August. Winters stay between 3 and 8°C: grey, damp, and rarely snowy. Spring and autumn are perfect for visiting, but rain can hit any day — a packable umbrella is the unwritten Parisian rule.",
  },
  london: {
    fr: "Londres bénéficie d'un climat océanique tempéré, célèbre pour sa pluie fine et son ciel gris persistant. Les étés sont doux (20-23°C), les hivers cléments (3-8°C) mais humides. La neige est rare et fond vite. Le brouillard légendaire a quasi disparu depuis le Clean Air Act de 1956, mais la bruine peut tomber à n'importe quel moment — d'où l'expression « il fait toujours moche à Londres ». Mai et septembre sont les mois les plus agréables.",
    en: "London has a temperate oceanic climate famous for fine drizzle and persistent grey skies. Summers are mild (20-23°C), winters cool (3-8°C) but rarely freezing. Snow falls a few days a year and melts fast. The legendary fog mostly vanished after the 1956 Clean Air Act, but drizzle can hit anytime — hence the cliché 'always grey in London'. May and September are the most pleasant months.",
  },
  "new-york": {
    fr: "New York connaît un climat continental humide aux saisons très marquées. Les étés sont chauds et lourds (28-32°C avec humidité élevée), les hivers froids et neigeux (-2 à 5°C) avec des blizzards en janvier. L'automne offre un feuillage spectaculaire dans Central Park en octobre, et le printemps est court mais lumineux. La ville reste vivante par tous les temps, mais septembre-octobre est la meilleure saison pour la visiter.",
    en: "New York has a humid continental climate with sharply defined seasons. Summers are hot and muggy (28-32°C with high humidity), winters cold and snowy (-2 to 5°C) with January blizzards. Autumn brings spectacular foliage in Central Park around October, and spring is short but bright. The city is alive in any weather, but September-October is the best time to visit.",
  },
  tokyo: {
    fr: "Tokyo possède un climat subtropical humide. Les étés sont étouffants (30-35°C, 80% d'humidité) avec la saison des pluies en juin-juillet (tsuyu) et des typhons en septembre. Les hivers sont doux et secs (5-12°C), souvent ensoleillés. Le printemps est légendaire pour les cerisiers en fleur fin mars-début avril, l'automne pour les érables rouges en novembre. Évite août, choisis avril ou novembre.",
    en: "Tokyo has a humid subtropical climate. Summers are sweltering (30-35°C, 80% humidity) with the rainy season in June-July (tsuyu) and typhoons in September. Winters are mild and dry (5-12°C), often sunny. Spring is legendary for cherry blossoms in late March-early April, and autumn for fiery maple leaves in November. Skip August, pick April or November.",
  },
  sydney: {
    fr: "Sydney profite d'un climat océanique subtropical, ensoleillé toute l'année. L'été (décembre-février) atteint 25-30°C avec une mer chaude, l'hiver (juin-août) reste doux à 13-18°C. Les pluies tombent surtout en mars-juin, en averses brèves. Attention : les saisons sont inversées par rapport à l'hémisphère nord. Noël se fête à la plage à Bondi, et juillet est le mois idéal pour les randos sans transpirer.",
    en: "Sydney enjoys a sunny subtropical oceanic climate year-round. Summer (December-February) hits 25-30°C with warm ocean swims; winter (June-August) stays mild at 13-18°C. Rain falls mostly between March and June in short bursts. Note: seasons are flipped vs the northern hemisphere. Christmas is celebrated on Bondi Beach, and July is perfect for sweat-free hikes.",
  },
  dubai: {
    fr: "Dubaï est en plein désert : été torride (40-45°C, parfois 48°C en août, humidité côtière étouffante), hiver doux et idéal (20-25°C en journée, 14°C la nuit). Il ne pleut quasiment jamais (moins de 100 mm/an, concentrés en hiver). La meilleure période pour visiter va de novembre à mars. L'été, tout se passe à l'intérieur ou la nuit — les centres commerciaux sont climatisés à 18°C.",
    en: "Dubai sits in a desert: scorching summers (40-45°C, sometimes 48°C in August, with stifling coastal humidity), mild winters (20-25°C daytime, 14°C at night). It barely ever rains (<100 mm/year, mostly in winter). Best visiting window is November to March. In summer, everything happens indoors or at night — malls are kept at a chilly 18°C.",
  },
  singapore: {
    fr: "Singapour vit à un degré de l'équateur : climat équatorial constant, 27-32°C toute l'année, 80-90% d'humidité. Il pleut presque tous les jours, par averses tropicales courtes et violentes, surtout l'après-midi entre novembre et janvier (mousson nord-est). Pas de saisons — la météo de mardi ressemble à celle de juillet. La climatisation est partout, du métro aux passages couverts.",
    en: "Singapore sits one degree off the equator: constant equatorial climate, 27-32°C year-round, 80-90% humidity. Rain falls almost daily as short violent tropical bursts, mostly afternoons between November and January (northeast monsoon). No real seasons — Tuesday's weather looks like July's. AC runs everywhere, from the metro to covered walkways.",
  },
};

function climateText(city: City, locale: Locale): string {
  const blurb = CLIMATE[city.slug];
  if (blurb) return locale === "fr" ? blurb.fr : blurb.en;
  // Generic fallback if we didn't hand-write one.
  if (locale === "fr") {
    return `${city.name}, située en ${city.country}, possède un climat marqué par les saisons typiques de sa région. Les températures, les précipitations et l'ensoleillement varient au fil de l'année — consulte les prévisions ci-dessus pour planifier ta journée. Pour un séjour confortable, vise les mois intermédiaires (printemps et automne) qui offrent généralement le meilleur compromis entre douceur, faible humidité et journées lumineuses. Les prévisions sont mises à jour automatiquement toutes les 30 minutes.`;
  }
  return `${city.name}, located in ${city.country}, has a climate shaped by the typical seasons of its region. Temperatures, rainfall and sunshine shift through the year — check the forecast above to plan your day. For a comfortable stay, aim for the shoulder seasons (spring and autumn) which usually offer the best balance of mild temperatures, low humidity and bright days. Forecasts are auto-refreshed every 30 minutes.`;
}

// ---------- Open-Meteo fetch ----------

type ForecastData = {
  current: {
    temperature: number;
    apparent: number;
    humidity: number;
    wind: number;
    code: number;
  };
  daily: {
    time: string[];
    tmax: number[];
    tmin: number[];
    pop: number[];
    codes: number[];
    sunrise: string[];
    sunset: string[];
  };
} | null;

async function fetchForecast(city: City): Promise<ForecastData> {
  const url =
    `https://api.open-meteo.com/v1/forecast` +
    `?latitude=${city.lat}&longitude=${city.lon}` +
    `&current=temperature_2m,weathercode,wind_speed_10m,relative_humidity_2m,apparent_temperature` +
    `&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max,weathercode,sunrise,sunset` +
    `&timezone=auto&forecast_days=7`;
  try {
    const res = await fetch(url, { next: { revalidate: 1800 } });
    if (!res.ok) return null;
    const j: {
      current?: {
        temperature_2m?: number;
        apparent_temperature?: number;
        relative_humidity_2m?: number;
        wind_speed_10m?: number;
        weathercode?: number;
      };
      daily?: {
        time?: string[];
        temperature_2m_max?: number[];
        temperature_2m_min?: number[];
        precipitation_probability_max?: (number | null)[];
        weathercode?: number[];
        sunrise?: string[];
        sunset?: string[];
      };
    } = await res.json();
    if (!j.current || !j.daily) return null;
    return {
      current: {
        temperature: Math.round(j.current.temperature_2m ?? 0),
        apparent: Math.round(j.current.apparent_temperature ?? 0),
        humidity: Math.round(j.current.relative_humidity_2m ?? 0),
        wind: Math.round(j.current.wind_speed_10m ?? 0),
        code: j.current.weathercode ?? 0,
      },
      daily: {
        time: j.daily.time ?? [],
        tmax: (j.daily.temperature_2m_max ?? []).map((n) => Math.round(n)),
        tmin: (j.daily.temperature_2m_min ?? []).map((n) => Math.round(n)),
        pop: (j.daily.precipitation_probability_max ?? []).map((n) => n ?? 0),
        codes: j.daily.weathercode ?? [],
        sunrise: j.daily.sunrise ?? [],
        sunset: j.daily.sunset ?? [],
      },
    };
  } catch {
    return null;
  }
}

// ---------- formatting helpers ----------

function formatTime(iso: string): string {
  // Open-Meteo returns local-time strings like "2026-05-20T05:42".
  // Just lift the HH:MM substring.
  const m = iso.match(/T(\d{2}:\d{2})/);
  return m ? m[1] : "—";
}

function weekdayLabel(iso: string, labels: string[]): string {
  // ISO date "YYYY-MM-DD" — UTC noon to avoid TZ off-by-one.
  const d = new Date(`${iso}T12:00:00Z`);
  return labels[d.getUTCDay()] ?? "—";
}

// ---------- metadata ----------

export async function generateMetadata({
  params,
}: {
  params: { city: string };
}): Promise<Metadata> {
  const city = findCity(params.city);
  if (!city) return {};
  const locale = getLocale();
  const s = STRINGS[locale] ?? STRINGS.en;
  const data = await fetchForecast(city);
  const tempLabel = data ? `${data.current.temperature}°C` : "—";
  const title = s.metaTitle(city.name, tempLabel);
  const description = s.pageDesc(city.name, city.country);
  const url = `https://moomz.com/meteo/${city.slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: "moomz",
      locale,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

// ---------- the page ----------

export default async function MeteoCityPage({
  params,
}: {
  params: { city: string };
}) {
  const city = findCity(params.city);
  if (!city) notFound();

  const locale = getLocale();
  const s = STRINGS[locale] ?? STRINGS.en;
  const data = await fetchForecast(city);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: s.metaTitle(city.name, data ? `${data.current.temperature}°C` : ""),
    description: s.pageDesc(city.name, city.country),
    url: `https://moomz.com/meteo/${city.slug}`,
    inLanguage: locale,
    about: {
      "@type": "City",
      name: city.name,
      address: { "@type": "PostalAddress", addressCountry: city.cc },
      geo: { "@type": "GeoCoordinates", latitude: city.lat, longitude: city.lon },
    },
  };

  const related = relatedCities(city, 6);

  // Poll deep-link prefill for /?q=&o=
  const POLL_Q_TEMPLATES: Record<string, (n: string) => string> = {
    fr: (n) => `Tu préfères la pluie cosy ou le soleil & chaleur à ${n} ?`,
    en: (n) => `Cozy rain or sun & heat in ${n}?`,
    es: (n) => `¿Prefieres la lluvia acogedora o el sol y calor en ${n}?`,
    it: (n) => `Preferisci la pioggia accogliente o il sole e il caldo a ${n}?`,
    pt: (n) => `Você prefere chuva aconchegante ou sol e calor em ${n}?`,
    de: (n) => `Gemütlicher Regen oder Sonne & Wärme in ${n}?`,
    ja: (n) => `${n}、心地よい雨派？それとも太陽と暑さ派？`,
    zh: (n) => `你喜欢${n}的温馨雨天还是阳光炎热？`,
  };
  const pollQ = encodeURIComponent(
    (POLL_Q_TEMPLATES[locale] ?? POLL_Q_TEMPLATES.en)(city.name),
  );
  const pollO = encodeURIComponent(`${s.pollA}|${s.pollB}`);
  const pollHref = `/?q=${pollQ}&o=${pollO}`;

  return (
    <article className="space-y-8 fade-up">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <header className="space-y-3">
        <div className="text-xs uppercase tracking-widest text-white/40 flex items-center gap-2">
          <Link href="/meteo" className="hover:text-white transition">
            {s.back}
          </Link>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div className="min-w-0">
            <h1 className="font-display text-4xl sm:text-5xl tracking-tight bg-gradient-to-br from-white via-pink-200 to-pink-400 bg-clip-text text-transparent leading-tight">
              {wxEmoji(data?.current.code ?? 0)} {s.hero(city.name)}
            </h1>
            <div className="mt-2 text-white/60 text-sm">
              {city.country} {flagOf(city.cc)}
            </div>
          </div>
          {data && (
            <div className="text-right shrink-0">
              <div className="font-display text-6xl sm:text-7xl leading-none text-white">
                {data.current.temperature}
                <span className="text-3xl text-white/60 align-top">°C</span>
              </div>
              <div className="text-xs text-white/50 mt-1">
                {s.wxLabel[wxKind(data.current.code)]}
              </div>
            </div>
          )}
        </div>
      </header>

      {!data && (
        <div className="glass rounded-2xl p-5 border border-amber-400/30 text-amber-100/90 text-sm">
          {s.fallback}
        </div>
      )}

      {/* NOW */}
      {data && (
        <section className="glass rounded-2xl p-5 space-y-3">
          <h2 className="font-display text-2xl text-white">{s.now}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div>
              <div className="text-[10px] uppercase tracking-widest text-white/40">
                {s.feels}
              </div>
              <div className="text-2xl font-semibold text-white">
                {data.current.apparent}
                <span className="text-sm text-white/60 ml-0.5">{s.units.temp}</span>
              </div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-white/40">
                {s.humidity}
              </div>
              <div className="text-2xl font-semibold text-white">
                {data.current.humidity}
                <span className="text-sm text-white/60 ml-0.5">{s.units.humidity}</span>
              </div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-white/40">
                {s.wind}
              </div>
              <div className="text-2xl font-semibold text-white">
                {data.current.wind}
                <span className="text-sm text-white/60 ml-1">{s.units.wind}</span>
              </div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-white/40">
                {s.now}
              </div>
              <div className="text-2xl font-semibold text-white flex items-center gap-2">
                <span className="text-3xl">{wxEmoji(data.current.code)}</span>
                <span className="text-sm text-white/60">
                  {s.wxLabel[wxKind(data.current.code)]}
                </span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 7-DAY */}
      {data && data.daily.time.length > 0 && (
        <section className="glass rounded-2xl p-5 space-y-3">
          <h2 className="font-display text-2xl text-white">{s.forecast}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
            {data.daily.time.map((iso, i) => {
              const code = data.daily.codes[i] ?? 0;
              return (
                <div
                  key={iso}
                  className="rounded-xl bg-white/5 border border-white/10 px-3 py-3 text-center"
                >
                  <div className="text-[11px] uppercase tracking-widest text-white/50">
                    {weekdayLabel(iso, s.days)}
                  </div>
                  <div className="text-3xl my-1">{wxEmoji(code)}</div>
                  <div className="text-sm text-white font-semibold">
                    {data.daily.tmax[i]}°
                    <span className="text-white/40 ml-1">
                      {data.daily.tmin[i]}°
                    </span>
                  </div>
                  <div className="text-[11px] text-sky-300/80 mt-1">
                    💧 {data.daily.pop[i] ?? 0}%
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* SUN */}
      {data && data.daily.sunrise[0] && (
        <section className="glass rounded-2xl p-5 space-y-3">
          <h2 className="font-display text-2xl text-white">{s.sunCard}</h2>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-gradient-to-br from-amber-500/10 to-pink-500/10 border border-amber-300/20 px-4 py-3">
              <div className="text-[10px] uppercase tracking-widest text-amber-200/70">
                🌅 {s.sunrise}
              </div>
              <div className="text-2xl font-semibold text-white mt-1">
                {formatTime(data.daily.sunrise[0])}
              </div>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-violet-500/10 to-indigo-500/10 border border-violet-300/20 px-4 py-3">
              <div className="text-[10px] uppercase tracking-widest text-violet-200/70">
                🌇 {s.sunset}
              </div>
              <div className="text-2xl font-semibold text-white mt-1">
                {formatTime(data.daily.sunset[0])}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CLIMATE TEXT */}
      <section className="space-y-3">
        <h2 className="font-display text-2xl text-white">
          {s.climateHeading(city.name)}
        </h2>
        <p className="text-white/70 leading-relaxed">{climateText(city, locale)}</p>
      </section>

      {/* POLL CTA */}
      <section className="space-y-3">
        <h2 className="font-display text-2xl text-white">{s.pollHeading}</h2>
        <Link
          href={pollHref}
          className="block rounded-2xl bg-gradient-to-r from-pink-500/20 to-purple-600/20 border border-pink-400/30 px-5 py-4 hover:from-pink-500/30 hover:to-purple-600/30 transition"
        >
          <div className="font-display text-xl text-white">{s.pollIntro}</div>
          <div className="mt-2 flex flex-wrap gap-2">
            <span className="rounded-full bg-white/10 border border-white/15 px-3 py-1 text-sm">
              {s.pollA}
            </span>
            <span className="rounded-full bg-white/10 border border-white/15 px-3 py-1 text-sm">
              {s.pollB}
            </span>
          </div>
          <div className="text-xs text-white/60 mt-2">{s.pollCta}</div>
        </Link>
      </section>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="space-y-3">
          <h3 className="font-display text-lg text-white/80">{s.related}</h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {related.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/meteo/${c.slug}`}
                  className="glass rounded-xl px-3 py-2 flex items-center gap-2 hover:bg-white/10 transition"
                >
                  <span className="text-xl shrink-0">{flagOf(c.cc)}</span>
                  <div className="min-w-0">
                    <div className="text-sm text-white truncate">{c.name}</div>
                    <div className="text-[10px] text-white/40 truncate">
                      {c.country}
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <p className="text-center text-xs text-white/30">{s.updated}</p>

      <Link
        href="/meteo"
        className="block text-center text-sm text-white/60 hover:text-white transition"
      >
        {s.back}
      </Link>
    </article>
  );
}
