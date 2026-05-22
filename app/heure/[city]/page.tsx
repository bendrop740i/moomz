import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  findCity,
  HEURE_SLUGS,
  HEURE_REFERENCE_SLUGS,
  flagEmoji,
  formatOffset,
  tzOffsetMinutes,
  sunTimes,
  relatedByTz,
} from "@/lib/tools/heure";
import { getLocale, canonicalUrl } from "@/lib/i18n-server";
import type { Locale } from "@/lib/i18n";
import { jsonLdHtml } from "@/lib/json-ld";
import { seoHref } from "@/lib/seo/seo-href";
import LiveClock from "./live-clock";

export const dynamic = "force-dynamic";
export const revalidate = 86400;

export function generateStaticParams() {
  return HEURE_SLUGS.map((city) => ({ city }));
}

// ────────────────────────────────────────────────────────────────────────────
// i18n — inline so this tool stays self-contained and doesn't touch
// lib/i18n.ts (the brief explicitly forbids modifying it).
// ────────────────────────────────────────────────────────────────────────────

type Strings = {
  hero: (city: string) => string;
  intro: (city: string, country: string) => string;
  localTime: string;
  today: string;
  details: string;
  day: string;
  fullDate: string;
  timezoneName: string;
  utcOffset: string;
  diffTitle: (city: string) => string;
  diffAhead: (h: string, city: string) => string;
  diffBehind: (h: string, city: string) => string;
  diffSame: (city: string) => string;
  keyHours: string;
  sunrise: string;
  sunset: string;
  businessHours: string;
  businessHoursValue: string;
  about: string;
  pollCtaTitle: string;
  pollCtaText: string;
  pollCtaButton: string;
  related: string;
  back: string;
  hub: string;
  poweredBy: string;
  /** Accessible label for a city link, e.g. "Time in {city}". */
  clockOf: (city: string) => string;
};

const T_FR: Strings = {
  hero: (city) => `🕐 Heure à ${city}`,
  intro: (city, country) =>
    `Quelle heure est-il à ${city}, ${country} ? Horloge live, fuseau horaire, décalage avec Paris, New York, Londres et Tokyo. Tout en un coup d'œil, sans pub, sans app.`,
  localTime: "Heure locale",
  today: "Aujourd'hui",
  details: "Détails",
  day: "Jour",
  fullDate: "Date complète",
  timezoneName: "Fuseau IANA",
  utcOffset: "Décalage UTC",
  diffTitle: (city) => `Décalage avec ${city}`,
  diffAhead: (h, city) => `${h} en avance sur ${city}`,
  diffBehind: (h, city) => `${h} en retard sur ${city}`,
  diffSame: (city) => `Même heure qu'à ${city}`,
  keyHours: "Heures clés",
  sunrise: "Lever du soleil",
  sunset: "Coucher du soleil",
  businessHours: "Horaires de bureau",
  businessHoursValue: "09:00 → 18:00 (local)",
  about: "À propos de ce fuseau",
  pollCtaTitle: "T'es plutôt matin ou soir ?",
  pollCtaText:
    "Lance un mini sondage pour savoir ce que pense ta team — moomz t'aide à créer un vibe check en 10 secondes.",
  pollCtaButton: "Créer le sondage →",
  related: "Autres villes dans le même fuseau",
  back: "← Toutes les villes",
  hub: "/heure",
  poweredBy: "Propulsé par moomz",
  clockOf: (city) => `Heure à ${city}`,
};

const T_EN: Strings = {
  hero: (city) => `🕐 Time in ${city}`,
  intro: (city, country) =>
    `What time is it in ${city}, ${country}? Live clock, timezone, offset from Paris, New York, London and Tokyo. Everything at a glance, no ads, no app.`,
  localTime: "Local time",
  today: "Today",
  details: "Details",
  day: "Day",
  fullDate: "Full date",
  timezoneName: "IANA timezone",
  utcOffset: "UTC offset",
  diffTitle: (city) => `Time difference from ${city}`,
  diffAhead: (h, city) => `${h} ahead of ${city}`,
  diffBehind: (h, city) => `${h} behind ${city}`,
  diffSame: (city) => `Same time as ${city}`,
  keyHours: "Key hours",
  sunrise: "Sunrise",
  sunset: "Sunset",
  businessHours: "Business hours",
  businessHoursValue: "09:00 → 18:00 (local)",
  about: "About this timezone",
  pollCtaTitle: "Are you a morning or night person?",
  pollCtaText:
    "Run a quick poll to see what your friends think — moomz lets you create a vibe check in 10 seconds.",
  pollCtaButton: "Create the poll →",
  related: "Other cities in the same timezone",
  back: "← All cities",
  hub: "/heure",
  poweredBy: "Powered by moomz",
  clockOf: (city) => `Time in ${city}`,
};

const T_ES: Strings = {
  hero: (city) => `🕐 Hora en ${city}`,
  intro: (city, country) =>
    `¿Qué hora es en ${city}, ${country}? Reloj en vivo, zona horaria, diferencia con París, Nueva York, Londres y Tokio.`,
  localTime: "Hora local",
  today: "Hoy",
  details: "Detalles",
  day: "Día",
  fullDate: "Fecha completa",
  timezoneName: "Zona IANA",
  utcOffset: "Desfase UTC",
  diffTitle: (city) => `Diferencia con ${city}`,
  diffAhead: (h, city) => `${h} por delante de ${city}`,
  diffBehind: (h, city) => `${h} por detrás de ${city}`,
  diffSame: (city) => `Misma hora que ${city}`,
  keyHours: "Horas clave",
  sunrise: "Amanecer",
  sunset: "Atardecer",
  businessHours: "Horario laboral",
  businessHoursValue: "09:00 → 18:00 (local)",
  about: "Sobre esta zona horaria",
  pollCtaTitle: "¿Eres más de día o de noche?",
  pollCtaText: "Lanza una encuesta rápida con moomz, en 10 segundos.",
  pollCtaButton: "Crear encuesta →",
  related: "Otras ciudades en la misma zona",
  back: "← Todas las ciudades",
  hub: "/heure",
  poweredBy: "Impulsado por moomz",
  clockOf: (city) => `Hora en ${city}`,
};

const T_IT: Strings = {
  hero: (city) => `🕐 Ora a ${city}`,
  intro: (city, country) =>
    `Che ore sono a ${city}, ${country}? Orologio live, fuso orario, differenza con Parigi, New York, Londra e Tokyo.`,
  localTime: "Ora locale",
  today: "Oggi",
  details: "Dettagli",
  day: "Giorno",
  fullDate: "Data completa",
  timezoneName: "Fuso IANA",
  utcOffset: "Offset UTC",
  diffTitle: (city) => `Differenza con ${city}`,
  diffAhead: (h, city) => `${h} in anticipo su ${city}`,
  diffBehind: (h, city) => `${h} in ritardo su ${city}`,
  diffSame: (city) => `Stessa ora di ${city}`,
  keyHours: "Orari chiave",
  sunrise: "Alba",
  sunset: "Tramonto",
  businessHours: "Orario d'ufficio",
  businessHoursValue: "09:00 → 18:00 (locale)",
  about: "Su questo fuso",
  pollCtaTitle: "Sei più mattiniero o nottambulo?",
  pollCtaText: "Lancia un sondaggio con moomz in 10 secondi.",
  pollCtaButton: "Crea il sondaggio →",
  related: "Altre città nello stesso fuso",
  back: "← Tutte le città",
  hub: "/heure",
  poweredBy: "Powered by moomz",
  clockOf: (city) => `Ora a ${city}`,
};

const T_PT: Strings = {
  hero: (city) => `🕐 Horário em ${city}`,
  intro: (city, country) =>
    `Que horas são em ${city}, ${country}? Relógio ao vivo, fuso horário, diferença com Paris, Nova York, Londres e Tóquio.`,
  localTime: "Hora local",
  today: "Hoje",
  details: "Detalhes",
  day: "Dia",
  fullDate: "Data completa",
  timezoneName: "Fuso IANA",
  utcOffset: "Offset UTC",
  diffTitle: (city) => `Diferença com ${city}`,
  diffAhead: (h, city) => `${h} adiantado em relação a ${city}`,
  diffBehind: (h, city) => `${h} atrasado em relação a ${city}`,
  diffSame: (city) => `Mesma hora que ${city}`,
  keyHours: "Horários chave",
  sunrise: "Nascer do sol",
  sunset: "Pôr do sol",
  businessHours: "Horário comercial",
  businessHoursValue: "09:00 → 18:00 (local)",
  about: "Sobre este fuso",
  pollCtaTitle: "Você é mais manhã ou noite?",
  pollCtaText: "Crie uma enquete no moomz em 10 segundos.",
  pollCtaButton: "Criar enquete →",
  related: "Outras cidades no mesmo fuso",
  back: "← Todas as cidades",
  hub: "/heure",
  poweredBy: "Powered by moomz",
  clockOf: (city) => `Horário em ${city}`,
};

const T_DE: Strings = {
  hero: (city) => `🕐 Uhrzeit in ${city}`,
  intro: (city, country) =>
    `Wie spät ist es in ${city}, ${country}? Live-Uhr, Zeitzone, Zeitunterschied zu Paris, New York, London und Tokio.`,
  localTime: "Ortszeit",
  today: "Heute",
  details: "Details",
  day: "Tag",
  fullDate: "Vollständiges Datum",
  timezoneName: "IANA-Zeitzone",
  utcOffset: "UTC-Versatz",
  diffTitle: (city) => `Zeitunterschied zu ${city}`,
  diffAhead: (h, city) => `${h} vor ${city}`,
  diffBehind: (h, city) => `${h} hinter ${city}`,
  diffSame: (city) => `Gleiche Zeit wie in ${city}`,
  keyHours: "Wichtige Uhrzeiten",
  sunrise: "Sonnenaufgang",
  sunset: "Sonnenuntergang",
  businessHours: "Geschäftszeiten",
  businessHoursValue: "09:00 → 18:00 (Ortszeit)",
  about: "Über diese Zeitzone",
  pollCtaTitle: "Eher Morgen- oder Nachtmensch?",
  pollCtaText: "Starte eine Umfrage in 10 Sekunden mit moomz.",
  pollCtaButton: "Umfrage erstellen →",
  related: "Andere Städte in derselben Zeitzone",
  back: "← Alle Städte",
  hub: "/heure",
  poweredBy: "Powered by moomz",
  clockOf: (city) => `Uhrzeit in ${city}`,
};

const T_JA: Strings = {
  hero: (city) => `🕐 ${city}の時刻`,
  intro: (city, country) =>
    `${city}（${country}）は今何時？ライブ時計、タイムゾーン、パリ・ニューヨーク・ロンドン・東京との時差を一目で。`,
  localTime: "現地時刻",
  today: "今日",
  details: "詳細",
  day: "曜日",
  fullDate: "日付",
  timezoneName: "IANAタイムゾーン",
  utcOffset: "UTCオフセット",
  diffTitle: (city) => `${city}との時差`,
  diffAhead: (h, city) => `${city}より${h}進んでいる`,
  diffBehind: (h, city) => `${city}より${h}遅れている`,
  diffSame: (city) => `${city}と同じ時刻`,
  keyHours: "主要な時間",
  sunrise: "日の出",
  sunset: "日の入り",
  businessHours: "営業時間",
  businessHoursValue: "09:00 → 18:00（現地）",
  about: "このタイムゾーンについて",
  pollCtaTitle: "朝型？夜型？",
  pollCtaText: "moomzで10秒の投票を作ろう。",
  pollCtaButton: "投票を作る →",
  related: "同じタイムゾーンの他の都市",
  back: "← すべての都市",
  hub: "/heure",
  poweredBy: "moomz提供",
  clockOf: (city) => `${city}の時刻`,
};

const T_ZH: Strings = {
  hero: (city) => `🕐 ${city}时间`,
  intro: (city, country) =>
    `${city}（${country}）现在几点？实时时钟、时区、与巴黎、纽约、伦敦、东京的时差。`,
  localTime: "当地时间",
  today: "今天",
  details: "详情",
  day: "星期",
  fullDate: "完整日期",
  timezoneName: "IANA时区",
  utcOffset: "UTC偏移",
  diffTitle: (city) => `与${city}的时差`,
  diffAhead: (h, city) => `比${city}快${h}`,
  diffBehind: (h, city) => `比${city}慢${h}`,
  diffSame: (city) => `与${city}时间相同`,
  keyHours: "关键时间",
  sunrise: "日出",
  sunset: "日落",
  businessHours: "营业时间",
  businessHoursValue: "09:00 → 18:00（当地）",
  about: "关于此时区",
  pollCtaTitle: "你是早起型还是夜猫子？",
  pollCtaText: "用moomz在10秒内创建投票。",
  pollCtaButton: "创建投票 →",
  related: "同时区的其他城市",
  back: "← 所有城市",
  hub: "/heure",
  poweredBy: "moomz 提供",
  clockOf: (city) => `${city}时间`,
};

function getStrings(locale: Locale): Strings {
  switch (locale) {
    case "en":
      return T_EN;
    case "es":
      return T_ES;
    case "it":
      return T_IT;
    case "pt":
      return T_PT;
    case "de":
      return T_DE;
    case "ja":
      return T_JA;
    case "zh":
      return T_ZH;
    case "fr":
    default:
      return T_FR;
  }
}

// ────────────────────────────────────────────────────────────────────────────
// Metadata
// ────────────────────────────────────────────────────────────────────────────

type CityMetaFn = { title: (name: string, country: string, tz: string) => string; desc: (name: string, tz: string) => string };
const CITY_META: Record<Locale, CityMetaFn> = {
  fr: {
    title: (n, c) => `Heure à ${n} (${c}) — horloge live · moomz`,
    desc: (n, tz) => `Quelle heure est-il à ${n} ? Horloge en direct, fuseau ${tz}, décalage avec Paris, New York, Londres, Tokyo. Mis à jour à la seconde.`,
  },
  en: {
    title: (n, c) => `Time in ${n} (${c}) — live clock · moomz`,
    desc: (n, tz) => `What time is it in ${n}? Live clock, ${tz} timezone, offset from Paris, New York, London, Tokyo. Updated every second.`,
  },
  es: {
    title: (n, c) => `Hora en ${n} (${c}) — reloj en vivo · moomz`,
    desc: (n, tz) => `¿Qué hora es en ${n}? Reloj en vivo, zona ${tz}, diferencia con París, Nueva York, Londres, Tokio. Actualizado al segundo.`,
  },
  it: {
    title: (n, c) => `Ora a ${n} (${c}) — orologio live · moomz`,
    desc: (n, tz) => `Che ore sono a ${n}? Orologio live, fuso ${tz}, differenza con Parigi, New York, Londra, Tokyo. Aggiornato al secondo.`,
  },
  pt: {
    title: (n, c) => `Horário em ${n} (${c}) — relógio ao vivo · moomz`,
    desc: (n, tz) => `Que horas são em ${n}? Relógio ao vivo, fuso ${tz}, diferença com Paris, Nova York, Londres, Tóquio. Atualizado a cada segundo.`,
  },
  de: {
    title: (n, c) => `Uhrzeit in ${n} (${c}) — Live-Uhr · moomz`,
    desc: (n, tz) => `Wie spät ist es in ${n}? Live-Uhr, Zeitzone ${tz}, Unterschied zu Paris, New York, London, Tokio. Sekundengenau aktualisiert.`,
  },
  ja: {
    title: (n, c) => `${n}（${c}）の時刻 — ライブ時計 · moomz`,
    desc: (n, tz) => `${n}は今何時？ライブ時計、タイムゾーン${tz}、パリ・ニューヨーク・ロンドン・東京との時差。毎秒更新。`,
  },
  zh: {
    title: (n, c) => `${n}（${c}）时间 — 实时时钟 · moomz`,
    desc: (n, tz) => `${n}现在几点？实时时钟，时区${tz}，与巴黎、纽约、伦敦、东京的时差。每秒更新。`,
  },
};

export function generateMetadata({ params }: { params: { city: string } }): Metadata {
  const city = findCity(params.city);
  if (!city) return { title: "City not found — moomz" };
  const locale = getLocale();
  const m = CITY_META[locale] ?? CITY_META.en;
  const canonical = canonicalUrl();
  const title = m.title(city.name, city.country, city.tz);
  const description = m.desc(city.name, city.tz);
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
      siteName: "moomz",
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

// ────────────────────────────────────────────────────────────────────────────
// Helpers (server-side render only)
// ────────────────────────────────────────────────────────────────────────────

function fmtTime(date: Date, tz: string): string {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: tz,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(date);
}

function intlTagFor(locale: Locale): string {
  switch (locale) {
    case "zh": return "zh-CN";
    case "ja": return "ja-JP";
    case "fr": return "fr-FR";
    case "en": return "en-US";
    case "es": return "es-ES";
    case "it": return "it-IT";
    case "pt": return "pt-PT";
    case "de": return "de-DE";
    default:   return "en-US";
  }
}

function fmtDate(date: Date, tz: string, locale: Locale): string {
  const intlLocale = intlTagFor(locale);
  return new Intl.DateTimeFormat(intlLocale, {
    timeZone: tz,
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

function fmtWeekday(date: Date, tz: string, locale: Locale): string {
  const intlLocale = locale === "zh" ? "zh-CN" : locale === "ja" ? "ja-JP" : locale;
  return new Intl.DateTimeFormat(intlLocale, {
    timeZone: tz,
    weekday: "long",
  }).format(date);
}

function fmtDiff(minutes: number, S: Strings, refName: string): string {
  if (minutes === 0) return S.diffSame(refName);
  const abs = Math.abs(minutes);
  const h = Math.floor(abs / 60);
  const m = abs % 60;
  const label = m === 0 ? `${h}h` : `${h}h${m.toString().padStart(2, "0")}`;
  return minutes > 0 ? S.diffAhead(label, refName) : S.diffBehind(label, refName);
}

function dstNote(tz: string, locale: Locale): string {
  const isAsiaNoDst = ["Asia/Tokyo", "Asia/Shanghai", "Asia/Hong_Kong", "Asia/Singapore", "Asia/Seoul", "Asia/Bangkok", "Asia/Kolkata", "Asia/Dubai"].includes(tz);
  const notes: Record<Locale, { europe: string; asiaNoDst: string; america: string; australia: string; fallback: string }> = {
    fr: { europe: "qui observe l'heure d'été (CEST) entre fin mars et fin octobre", asiaNoDst: "sans changement d'heure été/hiver", america: "qui suit l'heure d'été nord-américaine (DST) entre mars et novembre", australia: "avec DST de l'hémisphère sud (octobre à avril)", fallback: "selon les règles locales" },
    en: { europe: "and observes summer time (CEST) from late March to late October", asiaNoDst: "and does not observe daylight saving time", america: "and follows North American daylight saving time (March to November)", australia: "with southern-hemisphere DST (October to April)", fallback: "per local rules" },
    es: { europe: "que observa el horario de verano (CEST) de finales de marzo a finales de octubre", asiaNoDst: "sin cambio de horario verano/invierno", america: "que sigue el horario de verano norteamericano (DST) de marzo a noviembre", australia: "con DST del hemisferio sur (octubre a abril)", fallback: "según las reglas locales" },
    it: { europe: "che osserva l'ora legale (CEST) da fine marzo a fine ottobre", asiaNoDst: "senza cambio di orario estate/inverno", america: "che segue l'ora legale nordamericana (DST) da marzo a novembre", australia: "con DST dell'emisfero sud (ottobre-aprile)", fallback: "secondo le regole locali" },
    pt: { europe: "que observa o horário de verão (CEST) de fins de março a fins de outubro", asiaNoDst: "sem mudança de horário verão/inverno", america: "que segue o horário de verão norte-americano (DST) de março a novembro", australia: "com DST do hemisfério sul (outubro a abril)", fallback: "conforme as regras locais" },
    de: { europe: "und Sommerzeit (CEST) von Ende März bis Ende Oktober beobachtet", asiaNoDst: "ohne Sommer-/Winterzeitwechsel", america: "und nordamerikanische Sommerzeit (DST) von März bis November folgt", australia: "mit DST der südlichen Hemisphäre (Oktober bis April)", fallback: "gemäß lokalen Regeln" },
    ja: { europe: "3月末から10月末まで夏時間（CEST）を採用", asiaNoDst: "サマータイムなし", america: "3月から11月まで北米夏時間（DST）を採用", australia: "南半球DST（10月〜4月）採用", fallback: "現地のルールに従う" },
    zh: { europe: "3月底至10月底实行夏令时（CEST）", asiaNoDst: "不实行夏令时", america: "3月至11月实行北美夏令时（DST）", australia: "实行南半球夏令时（10月至4月）", fallback: "按当地规则" },
  };
  const n = notes[locale] ?? notes.en;
  if (tz.startsWith("Europe/")) return n.europe;
  if (isAsiaNoDst) return n.asiaNoDst;
  if (tz.startsWith("America/")) return n.america;
  if (tz.startsWith("Australia/")) return n.australia;
  return n.fallback;
}

function buildAboutText(cityName: string, tz: string, offsetLabel: string, locale: Locale): string {
  const dst = dstNote(tz, locale);
  const texts: Record<Locale, string> = {
    fr: `${cityName} se trouve dans le fuseau horaire ${tz} (UTC${offsetLabel}), ${dst}. Pratique pour planifier un appel international, regarder un live, ou simplement savoir si tu peux encore envoyer un message sans réveiller quelqu'un. Cette horloge est synchronisée sur l'heure de ton appareil et se met à jour à la seconde — aucun appel réseau, aucun pistage.`,
    en: `${cityName} is in the ${tz} timezone (UTC${offsetLabel}) ${dst}. Handy for scheduling international calls, watching a livestream, or just knowing whether it's still polite to text someone. This clock syncs to your device time and refreshes every second — no network calls, no tracking.`,
    es: `${cityName} está en la zona horaria ${tz} (UTC${offsetLabel}), ${dst}. Perfecto para planificar llamadas internacionales, ver un directo o simplemente saber si aún puedes enviar un mensaje sin despertar a alguien. Este reloj se sincroniza con la hora de tu dispositivo y se actualiza cada segundo — sin llamadas de red, sin rastreo.`,
    it: `${cityName} si trova nel fuso orario ${tz} (UTC${offsetLabel}), ${dst}. Pratico per pianificare chiamate internazionali, guardare un live o semplicemente sapere se puoi ancora inviare un messaggio senza svegliare qualcuno. Questo orologio è sincronizzato con l'ora del dispositivo e si aggiorna ogni secondo — nessuna chiamata di rete, nessun tracciamento.`,
    pt: `${cityName} está no fuso horário ${tz} (UTC${offsetLabel}), ${dst}. Prático para agendar chamadas internacionais, assistir a uma live ou simplesmente saber se ainda dá para enviar uma mensagem sem acordar alguém. Este relógio sincroniza com a hora do seu dispositivo e atualiza a cada segundo — sem chamadas de rede, sem rastreamento.`,
    de: `${cityName} liegt in der Zeitzone ${tz} (UTC${offsetLabel}), ${dst}. Praktisch für internationale Anrufe, das Verfolgen eines Livestreams oder um zu wissen, ob man noch jemanden anschreiben kann, ohne ihn zu wecken. Diese Uhr synchronisiert sich mit der Gerätezeit und aktualisiert sich sekündlich — keine Netzwerkaufrufe, kein Tracking.`,
    ja: `${cityName}はタイムゾーン${tz}（UTC${offsetLabel}）、${dst}。国際電話のスケジュール調整、ライブ視聴、または相手を起こさずにメッセージできるか確認するのに便利。この時計はデバイスの時刻と同期し、毎秒更新 — ネット通信なし、トラッキングなし。`,
    zh: `${cityName}位于${tz}时区（UTC${offsetLabel}），${dst}。方便规划国际通话、观看直播，或判断发消息是否会打扰对方。此时钟与设备时间同步，每秒刷新——无网络请求，无追踪。`,
  };
  return texts[locale] ?? texts.en;
}

// ────────────────────────────────────────────────────────────────────────────
// Page
// ────────────────────────────────────────────────────────────────────────────

export default function HeureCityPage({ params }: { params: { city: string } }) {
  const city = findCity(params.city);
  if (!city) notFound();

  const locale = getLocale();
  const S = getStrings(locale);
  // /heure 301s the bare path to its locale-prefixed (localized) URL — link
  // straight to the final form so there is no redirect hop.
  const heureBase = seoHref("heure", locale); // /{loc}/<localized heure>

  // Snapshot the moment of the request — the LiveClock client component will
  // tick from there. Using a fresh Date keeps the static cache fresh for the
  // 24-hour revalidate window and acts as the SSR fallback.
  const now = new Date();
  const fallbackTime = fmtTime(now, city.tz);
  const fallbackDate = fmtDate(now, city.tz, locale);
  const weekday = fmtWeekday(now, city.tz, locale);
  const offsetMin = tzOffsetMinutes(city.tz, now);
  const offsetLabel = formatOffset(offsetMin);
  const sun = sunTimes(city, now);

  // Diff table: skip the city itself.
  const diffs = HEURE_REFERENCE_SLUGS.filter((s) => s !== city.slug)
    .map((slug) => findCity(slug))
    .filter((c): c is NonNullable<typeof c> => c != null)
    .map((ref) => {
      const refOffset = tzOffsetMinutes(ref.tz, now);
      const delta = offsetMin - refOffset; // positive = city is ahead of ref
      return {
        city: ref,
        delta,
        label: fmtDiff(delta, S, ref.name),
      };
    });

  const related = relatedByTz(city, 6);
  const flag = flagEmoji(city.cc);
  const aboutText = buildAboutText(city.name, city.tz, offsetLabel, locale);

  // Pre-filled poll deeplink — /create?q=&o=opt1|opt2 (the create form parses these).
  const pollQ = S.pollCtaTitle;
  const pollO: Record<Locale, string> = {
    fr: "Lève-tôt|Couche-tard|Les deux",
    en: "Early bird|Night owl|Both",
    es: "Madrugador|Noctámbulo|Los dos",
    it: "Mattiniero|Nottambulo|Entrambi",
    pt: "Matutino|Noturno|Os dois",
    de: "Frühaufsteher|Nachtmensch|Beides",
    ja: "朝型|夜型|どちらも",
    zh: "早起型|夜猫子|两者都有",
  };
  const pollHref = `/create?q=${encodeURIComponent(pollQ)}&o=${encodeURIComponent(pollO[locale] ?? pollO.en)}`;

  // JSON-LD: WebPage with a Place mainEntity carrying the IANA tz.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: S.hero(city.name),
    description: S.intro(city.name, city.country),
    url: `https://moomz.com/heure/${city.slug}`,
    inLanguage: locale,
    mainEntity: {
      "@type": "Place",
      name: city.name,
      address: {
        "@type": "PostalAddress",
        addressCountry: city.cc.toUpperCase(),
        addressLocality: city.name,
      },
      ...(city.lat != null && city.lon != null
        ? {
            geo: {
              "@type": "GeoCoordinates",
              latitude: city.lat,
              longitude: city.lon,
            },
          }
        : {}),
      additionalProperty: [
        {
          "@type": "PropertyValue",
          name: "timezone",
          value: city.tz,
        },
        {
          "@type": "PropertyValue",
          name: "utcOffset",
          value: offsetLabel,
        },
      ],
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "moomz", item: "https://moomz.com" },
        { "@type": "ListItem", position: 2, name: S.back.replace("← ", ""), item: "https://moomz.com/heure" },
        { "@type": "ListItem", position: 3, name: city.name, item: `https://moomz.com/heure/${city.slug}` },
      ],
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
        {/* Hero */}
        <header className="text-center space-y-3">
          <div className="text-5xl sm:text-6xl" aria-hidden>
            {flag}
          </div>
          <h1 className="font-display text-4xl sm:text-5xl tracking-tight bg-gradient-to-br from-white via-pink-200 to-pink-400 bg-clip-text text-transparent">
            {S.hero(city.name)}
          </h1>
          <p className="text-white/65 text-sm sm:text-base max-w-xl mx-auto text-balance">
            {S.intro(city.name, city.country)}
          </p>
        </header>

        {/* Live clock */}
        <LiveClock
          tz={city.tz}
          dateLocale={intlTagFor(locale)}
          fallbackTime={fallbackTime}
          fallbackDate={fallbackDate}
          labels={{ localTime: S.localTime, today: S.today }}
        />

        {/* Details */}
        <section aria-labelledby="details-h" className="glass rounded-3xl p-5 sm:p-6 space-y-3">
          <h2 id="details-h" className="text-sm uppercase tracking-widest text-white/40 font-semibold">
            {S.details}
          </h2>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
            <div className="flex justify-between gap-3 border-b border-white/5 py-1.5">
              <dt className="text-white/55">{S.day}</dt>
              <dd className="font-semibold capitalize text-right">{weekday}</dd>
            </div>
            <div className="flex justify-between gap-3 border-b border-white/5 py-1.5">
              <dt className="text-white/55">{S.fullDate}</dt>
              <dd className="font-semibold capitalize text-right">{fallbackDate}</dd>
            </div>
            <div className="flex justify-between gap-3 border-b border-white/5 py-1.5">
              <dt className="text-white/55">{S.timezoneName}</dt>
              <dd className="font-mono text-right">{city.tz}</dd>
            </div>
            <div className="flex justify-between gap-3 border-b border-white/5 py-1.5">
              <dt className="text-white/55">{S.utcOffset}</dt>
              <dd className="font-mono text-right">UTC{offsetLabel}</dd>
            </div>
          </dl>
        </section>

        {/* Diff table */}
        {diffs.length > 0 && (
          <section aria-labelledby="diff-h" className="glass rounded-3xl p-5 sm:p-6 space-y-3">
            <h2 id="diff-h" className="text-sm uppercase tracking-widest text-white/40 font-semibold">
              {S.diffTitle(city.name)}
            </h2>
            <ul className="space-y-1.5 text-sm">
              {diffs.map(({ city: ref, delta, label }) => (
                <li
                  key={ref.slug}
                  className="flex items-center justify-between gap-3 py-1.5 border-b border-white/5"
                >
                  <span className="flex items-center gap-2 min-w-0">
                    <span aria-hidden className="text-base">
                      {flagEmoji(ref.cc)}
                    </span>
                    <Link
                      href={`${heureBase}/${ref.slug}`}
                      className="font-semibold hover:text-pink-200 transition-colors truncate"
                    >
                      {ref.name}
                    </Link>
                  </span>
                  <span
                    className={
                      delta === 0
                        ? "text-white/55"
                        : delta > 0
                          ? "text-emerald-300"
                          : "text-amber-300"
                    }
                  >
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Key hours */}
        <section aria-labelledby="hours-h" className="glass rounded-3xl p-5 sm:p-6 space-y-3">
          <h2 id="hours-h" className="text-sm uppercase tracking-widest text-white/40 font-semibold">
            {S.keyHours}
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
            {sun && (
              <>
                <li className="rounded-2xl bg-white/5 p-3 text-center space-y-1">
                  <div className="text-2xl" aria-hidden>🌅</div>
                  <div className="text-white/55 text-xs">{S.sunrise}</div>
                  <div className="font-mono font-bold tabular-nums">{sun.sunrise}</div>
                </li>
                <li className="rounded-2xl bg-white/5 p-3 text-center space-y-1">
                  <div className="text-2xl" aria-hidden>🌇</div>
                  <div className="text-white/55 text-xs">{S.sunset}</div>
                  <div className="font-mono font-bold tabular-nums">{sun.sunset}</div>
                </li>
              </>
            )}
            <li
              className={`rounded-2xl bg-white/5 p-3 text-center space-y-1 ${sun ? "" : "sm:col-span-3"}`}
            >
              <div className="text-2xl" aria-hidden>💼</div>
              <div className="text-white/55 text-xs">{S.businessHours}</div>
              <div className="font-mono font-bold tabular-nums">{S.businessHoursValue}</div>
            </li>
          </ul>
        </section>

        {/* About / SEO text */}
        <section aria-labelledby="about-h" className="space-y-2">
          <h2 id="about-h" className="text-base font-bold tracking-tight">
            {S.about}
          </h2>
          <p className="text-white/65 text-sm sm:text-base leading-relaxed">
            {aboutText}
          </p>
        </section>

        {/* Poll CTA */}
        <aside className="glass rounded-3xl p-5 sm:p-6 text-center space-y-2">
          <div className="text-xs uppercase tracking-[0.2em] text-white/40 font-semibold">
            ✨ {S.poweredBy}
          </div>
          <h2 className="text-xl sm:text-2xl font-bold">{S.pollCtaTitle}</h2>
          <p className="text-sm text-white/60 max-w-sm mx-auto">{S.pollCtaText}</p>
          <Link
            href={pollHref}
            className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-2 text-sm font-bold mt-1"
          >
            {S.pollCtaButton}
          </Link>
        </aside>

        {/* Related */}
        {related.length > 0 && (
          <section aria-labelledby="related-h" className="space-y-2">
            <h2 id="related-h" className="text-sm uppercase tracking-widest text-white/40 font-semibold">
              {S.related}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`${heureBase}/${r.slug}`}
                  className="glass block rounded-xl p-3 hover:scale-[1.01] transition"
                  aria-label={S.clockOf(r.name)}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-xl shrink-0" aria-hidden>
                      {flagEmoji(r.cc)}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="font-bold text-sm truncate">{r.name}</div>
                      <div className="text-[11px] text-white/40 mt-0.5 truncate">{r.country}</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        <div className="text-center pt-2">
          <Link
            href={heureBase}
            className="inline-flex items-center gap-1.5 rounded-full bg-white/10 hover:bg-white/15 transition px-4 py-2 text-sm font-semibold"
          >
            {S.back}
          </Link>
        </div>
      </div>
    </>
  );
}
