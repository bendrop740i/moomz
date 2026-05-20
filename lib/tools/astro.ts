// Western zodiac data (12 signs) + helpers. Pure JS, no API.
//
// Slugs are FR (belier, taureau, ...). Names are i18n'd inline so the detail
// page can render the right localized title without crossing into lib/i18n.

export type Element = "Feu" | "Terre" | "Air" | "Eau";
export type Modality = "Cardinal" | "Fixe" | "Mutable";

export type Sign = {
  slug: string; // FR slug
  name_fr: string;
  name_en: string;
  name_es: string;
  name_it: string;
  name_pt: string;
  name_de: string;
  name_ja: string;
  name_zh: string;
  emoji: string;
  /** [month, day] inclusive — month is 1..12, day is 1..31 */
  dateStart: [number, number];
  /** [month, day] inclusive */
  dateEnd: [number, number];
  element: Element;
  modality: Modality;
  /** Ruling planet (FR) */
  planet: string;
  /** Hex lucky color */
  color: string;
  /** ~6 dominant traits, FR */
  traits_fr: string[];
  /** ~6 dominant traits, EN */
  traits_en: string[];
  /** Most compatible signs (slugs) */
  compatible: string[];
  /** Challenging match-ups (slugs) */
  challenging: string[];
};

export const SIGNS: Sign[] = [
  {
    slug: "belier",
    name_fr: "Bélier",
    name_en: "Aries",
    name_es: "Aries",
    name_it: "Ariete",
    name_pt: "Áries",
    name_de: "Widder",
    name_ja: "牡羊座",
    name_zh: "白羊座",
    emoji: "♈",
    dateStart: [3, 21],
    dateEnd: [4, 19],
    element: "Feu",
    modality: "Cardinal",
    planet: "Mars",
    color: "#ef4444",
    traits_fr: ["passionné", "courageux", "impulsif", "leader", "compétitif", "direct"],
    traits_en: ["passionate", "courageous", "impulsive", "leader", "competitive", "direct"],
    compatible: ["lion", "sagittaire", "gemeaux"],
    challenging: ["cancer", "capricorne"],
  },
  {
    slug: "taureau",
    name_fr: "Taureau",
    name_en: "Taurus",
    name_es: "Tauro",
    name_it: "Toro",
    name_pt: "Touro",
    name_de: "Stier",
    name_ja: "牡牛座",
    name_zh: "金牛座",
    emoji: "♉",
    dateStart: [4, 20],
    dateEnd: [5, 20],
    element: "Terre",
    modality: "Fixe",
    planet: "Vénus",
    color: "#16a34a",
    traits_fr: ["fiable", "sensuel", "patient", "têtu", "loyal", "matérialiste"],
    traits_en: ["reliable", "sensual", "patient", "stubborn", "loyal", "grounded"],
    compatible: ["vierge", "capricorne", "cancer"],
    challenging: ["scorpion", "verseau"],
  },
  {
    slug: "gemeaux",
    name_fr: "Gémeaux",
    name_en: "Gemini",
    name_es: "Géminis",
    name_it: "Gemelli",
    name_pt: "Gêmeos",
    name_de: "Zwillinge",
    name_ja: "双子座",
    name_zh: "双子座",
    emoji: "♊",
    dateStart: [5, 21],
    dateEnd: [6, 20],
    element: "Air",
    modality: "Mutable",
    planet: "Mercure",
    color: "#eab308",
    traits_fr: ["curieux", "communicatif", "adaptable", "vif", "inconstant", "spirituel"],
    traits_en: ["curious", "communicative", "adaptable", "witty", "inconsistent", "playful"],
    compatible: ["balance", "verseau", "belier"],
    challenging: ["vierge", "poissons"],
  },
  {
    slug: "cancer",
    name_fr: "Cancer",
    name_en: "Cancer",
    name_es: "Cáncer",
    name_it: "Cancro",
    name_pt: "Câncer",
    name_de: "Krebs",
    name_ja: "蟹座",
    name_zh: "巨蟹座",
    emoji: "♋",
    dateStart: [6, 21],
    dateEnd: [7, 22],
    element: "Eau",
    modality: "Cardinal",
    planet: "Lune",
    color: "#c0c0c0",
    traits_fr: ["sensible", "protecteur", "intuitif", "nostalgique", "lunaire", "loyal"],
    traits_en: ["sensitive", "protective", "intuitive", "nostalgic", "moody", "loyal"],
    compatible: ["scorpion", "poissons", "taureau"],
    challenging: ["belier", "balance"],
  },
  {
    slug: "lion",
    name_fr: "Lion",
    name_en: "Leo",
    name_es: "Leo",
    name_it: "Leone",
    name_pt: "Leão",
    name_de: "Löwe",
    name_ja: "獅子座",
    name_zh: "狮子座",
    emoji: "♌",
    dateStart: [7, 23],
    dateEnd: [8, 22],
    element: "Feu",
    modality: "Fixe",
    planet: "Soleil",
    color: "#f59e0b",
    traits_fr: ["charismatique", "généreux", "fier", "créatif", "dramatique", "loyal"],
    traits_en: ["charismatic", "generous", "proud", "creative", "dramatic", "loyal"],
    compatible: ["belier", "sagittaire", "balance"],
    challenging: ["scorpion", "taureau"],
  },
  {
    slug: "vierge",
    name_fr: "Vierge",
    name_en: "Virgo",
    name_es: "Virgo",
    name_it: "Vergine",
    name_pt: "Virgem",
    name_de: "Jungfrau",
    name_ja: "乙女座",
    name_zh: "处女座",
    emoji: "♍",
    dateStart: [8, 23],
    dateEnd: [9, 22],
    element: "Terre",
    modality: "Mutable",
    planet: "Mercure",
    color: "#84cc16",
    traits_fr: ["analytique", "méthodique", "perfectionniste", "humble", "critique", "serviable"],
    traits_en: ["analytical", "methodical", "perfectionist", "humble", "critical", "helpful"],
    compatible: ["taureau", "capricorne", "cancer"],
    challenging: ["gemeaux", "sagittaire"],
  },
  {
    slug: "balance",
    name_fr: "Balance",
    name_en: "Libra",
    name_es: "Libra",
    name_it: "Bilancia",
    name_pt: "Libra",
    name_de: "Waage",
    name_ja: "天秤座",
    name_zh: "天秤座",
    emoji: "♎",
    dateStart: [9, 23],
    dateEnd: [10, 22],
    element: "Air",
    modality: "Cardinal",
    planet: "Vénus",
    color: "#ec4899",
    traits_fr: ["diplomate", "esthète", "charmeur", "indécis", "social", "juste"],
    traits_en: ["diplomatic", "aesthetic", "charming", "indecisive", "social", "fair"],
    compatible: ["gemeaux", "verseau", "lion"],
    challenging: ["cancer", "capricorne"],
  },
  {
    slug: "scorpion",
    name_fr: "Scorpion",
    name_en: "Scorpio",
    name_es: "Escorpio",
    name_it: "Scorpione",
    name_pt: "Escorpião",
    name_de: "Skorpion",
    name_ja: "蠍座",
    name_zh: "天蝎座",
    emoji: "♏",
    dateStart: [10, 23],
    dateEnd: [11, 21],
    element: "Eau",
    modality: "Fixe",
    planet: "Pluton",
    color: "#7f1d1d",
    traits_fr: ["intense", "mystérieux", "passionné", "loyal", "jaloux", "magnétique"],
    traits_en: ["intense", "mysterious", "passionate", "loyal", "jealous", "magnetic"],
    compatible: ["cancer", "poissons", "vierge"],
    challenging: ["taureau", "lion"],
  },
  {
    slug: "sagittaire",
    name_fr: "Sagittaire",
    name_en: "Sagittarius",
    name_es: "Sagitario",
    name_it: "Sagittario",
    name_pt: "Sagitário",
    name_de: "Schütze",
    name_ja: "射手座",
    name_zh: "射手座",
    emoji: "♐",
    dateStart: [11, 22],
    dateEnd: [12, 21],
    element: "Feu",
    modality: "Mutable",
    planet: "Jupiter",
    color: "#a855f7",
    traits_fr: ["aventurier", "optimiste", "franc", "philosophe", "imprudent", "libre"],
    traits_en: ["adventurous", "optimistic", "blunt", "philosophical", "reckless", "free-spirited"],
    compatible: ["belier", "lion", "balance"],
    challenging: ["vierge", "poissons"],
  },
  {
    slug: "capricorne",
    name_fr: "Capricorne",
    name_en: "Capricorn",
    name_es: "Capricornio",
    name_it: "Capricorno",
    name_pt: "Capricórnio",
    name_de: "Steinbock",
    name_ja: "山羊座",
    name_zh: "摩羯座",
    emoji: "♑",
    dateStart: [12, 22],
    dateEnd: [1, 19],
    element: "Terre",
    modality: "Cardinal",
    planet: "Saturne",
    color: "#1f2937",
    traits_fr: ["ambitieux", "discipliné", "sérieux", "responsable", "pessimiste", "résilient"],
    traits_en: ["ambitious", "disciplined", "serious", "responsible", "pessimistic", "resilient"],
    compatible: ["taureau", "vierge", "scorpion"],
    challenging: ["belier", "balance"],
  },
  {
    slug: "verseau",
    name_fr: "Verseau",
    name_en: "Aquarius",
    name_es: "Acuario",
    name_it: "Acquario",
    name_pt: "Aquário",
    name_de: "Wassermann",
    name_ja: "水瓶座",
    name_zh: "水瓶座",
    emoji: "♒",
    dateStart: [1, 20],
    dateEnd: [2, 18],
    element: "Air",
    modality: "Fixe",
    planet: "Uranus",
    color: "#06b6d4",
    traits_fr: ["original", "indépendant", "visionnaire", "humanitaire", "détaché", "rebelle"],
    traits_en: ["original", "independent", "visionary", "humanitarian", "detached", "rebellious"],
    compatible: ["gemeaux", "balance", "sagittaire"],
    challenging: ["taureau", "scorpion"],
  },
  {
    slug: "poissons",
    name_fr: "Poissons",
    name_en: "Pisces",
    name_es: "Piscis",
    name_it: "Pesci",
    name_pt: "Peixes",
    name_de: "Fische",
    name_ja: "魚座",
    name_zh: "双鱼座",
    emoji: "♓",
    dateStart: [2, 19],
    dateEnd: [3, 20],
    element: "Eau",
    modality: "Mutable",
    planet: "Neptune",
    color: "#8b5cf6",
    traits_fr: ["rêveur", "empathique", "artistique", "intuitif", "fuyant", "compassionné"],
    traits_en: ["dreamy", "empathic", "artistic", "intuitive", "escapist", "compassionate"],
    compatible: ["cancer", "scorpion", "capricorne"],
    challenging: ["gemeaux", "sagittaire"],
  },
];

export const ASTRO_SLUGS: string[] = SIGNS.map((s) => s.slug);

export function findSign(slug: string): Sign | null {
  if (typeof slug !== "string") return null;
  const found = SIGNS.find((s) => s.slug === slug.toLowerCase());
  return found ?? null;
}

/**
 * Resolve a zodiac sign from a calendar date. month is 1..12, day is 1..31.
 * Handles the Capricorn cusp that wraps from Dec 22 → Jan 19.
 */
export function signFromDate(month: number, day: number): Sign {
  // Encode month/day as a single integer (mmdd) so range checks are trivial.
  const md = month * 100 + day;
  for (const sign of SIGNS) {
    const startMd = sign.dateStart[0] * 100 + sign.dateStart[1];
    const endMd = sign.dateEnd[0] * 100 + sign.dateEnd[1];
    if (startMd <= endMd) {
      if (md >= startMd && md <= endMd) return sign;
    } else {
      // Wrap-around range (Capricorn: Dec 22 → Jan 19)
      if (md >= startMd || md <= endMd) return sign;
    }
  }
  // Shouldn't happen with valid input — default to Capricorn (year-end wrap).
  return SIGNS.find((s) => s.slug === "capricorne")!;
}

/** Format a date range like "21 mars - 19 avril" in the given locale. */
const MONTH_NAMES: Record<string, string[]> = {
  fr: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
  en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  es: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
  it: ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"],
  pt: ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"],
  de: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
  ja: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
  zh: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
};

export function formatDateRange(sign: Sign, locale: string): string {
  const months = MONTH_NAMES[locale] ?? MONTH_NAMES.en;
  const startMonth = months[sign.dateStart[0] - 1];
  const endMonth = months[sign.dateEnd[0] - 1];
  if (locale === "ja" || locale === "zh") {
    return `${startMonth}${sign.dateStart[1]}日 - ${endMonth}${sign.dateEnd[1]}日`;
  }
  if (locale === "en") {
    return `${startMonth} ${sign.dateStart[1]} - ${endMonth} ${sign.dateEnd[1]}`;
  }
  return `${sign.dateStart[1]} ${startMonth} - ${sign.dateEnd[1]} ${endMonth}`;
}

/** Localised name accessor. */
export function signName(sign: Sign, locale: string): string {
  switch (locale) {
    case "en":
      return sign.name_en;
    case "es":
      return sign.name_es;
    case "it":
      return sign.name_it;
    case "pt":
      return sign.name_pt;
    case "de":
      return sign.name_de;
    case "ja":
      return sign.name_ja;
    case "zh":
      return sign.name_zh;
    case "fr":
    default:
      return sign.name_fr;
  }
}

/** Localised traits accessor. Only FR and EN are stored; non-English locales fall back to EN. */
export function signTraits(sign: Sign, locale: string): string[] {
  if (locale === "fr") return sign.traits_fr;
  return sign.traits_en;
}

/** Group all 12 signs by element. */
export function signsByElement(): Record<Element, Sign[]> {
  const out: Record<Element, Sign[]> = { Feu: [], Terre: [], Air: [], Eau: [] };
  for (const s of SIGNS) out[s.element].push(s);
  return out;
}

/** Resolve the opposite sign (180° on the zodiac wheel). */
export function oppositeSign(sign: Sign): Sign {
  const i = SIGNS.findIndex((s) => s.slug === sign.slug);
  const opp = SIGNS[(i + 6) % 12];
  return opp;
}
