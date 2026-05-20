// Public holidays tool — country / year metadata + helpers + free API fetch.
//
// API: date.nager.at (https://date.nager.at/api/v3/PublicHolidays/{year}/{cc})
// Returns: Array of { date, localName, name, countryCode, types, ... }
// We cache at the Next data-fetch layer (revalidate=86400 = 24h) so each
// country/year combination hits the upstream at most once a day.

import type { Locale } from "@/lib/i18n";

export type Country = {
  cc: string;        // ISO 3166-1 alpha-2 (uppercase)
  slug: string;      // URL-safe French label, lowercase
  name_fr: string;
  name_en: string;
  flag: string;      // Emoji flag
  /** Optional bcp47 locale to use for local date formatting. */
  intl?: string;
};

export const COUNTRIES: Country[] = [
  { cc: "FR", slug: "france",        name_fr: "France",          name_en: "France",          flag: "🇫🇷", intl: "fr-FR" },
  { cc: "US", slug: "etats-unis",    name_fr: "États-Unis",      name_en: "United States",   flag: "🇺🇸", intl: "en-US" },
  { cc: "GB", slug: "royaume-uni",   name_fr: "Royaume-Uni",     name_en: "United Kingdom",  flag: "🇬🇧", intl: "en-GB" },
  { cc: "DE", slug: "allemagne",     name_fr: "Allemagne",       name_en: "Germany",         flag: "🇩🇪", intl: "de-DE" },
  { cc: "ES", slug: "espagne",       name_fr: "Espagne",         name_en: "Spain",           flag: "🇪🇸", intl: "es-ES" },
  { cc: "IT", slug: "italie",        name_fr: "Italie",          name_en: "Italy",           flag: "🇮🇹", intl: "it-IT" },
  { cc: "JP", slug: "japon",         name_fr: "Japon",           name_en: "Japan",           flag: "🇯🇵", intl: "ja-JP" },
  { cc: "CA", slug: "canada",        name_fr: "Canada",          name_en: "Canada",          flag: "🇨🇦", intl: "en-CA" },
  { cc: "AU", slug: "australie",     name_fr: "Australie",       name_en: "Australia",       flag: "🇦🇺", intl: "en-AU" },
  { cc: "BR", slug: "bresil",        name_fr: "Brésil",          name_en: "Brazil",          flag: "🇧🇷", intl: "pt-BR" },
  { cc: "MX", slug: "mexique",       name_fr: "Mexique",         name_en: "Mexico",          flag: "🇲🇽", intl: "es-MX" },
  { cc: "PT", slug: "portugal",      name_fr: "Portugal",        name_en: "Portugal",        flag: "🇵🇹", intl: "pt-PT" },
  { cc: "NL", slug: "pays-bas",      name_fr: "Pays-Bas",        name_en: "Netherlands",     flag: "🇳🇱", intl: "nl-NL" },
  { cc: "BE", slug: "belgique",      name_fr: "Belgique",        name_en: "Belgium",         flag: "🇧🇪", intl: "fr-BE" },
  { cc: "CH", slug: "suisse",        name_fr: "Suisse",          name_en: "Switzerland",     flag: "🇨🇭", intl: "fr-CH" },
  { cc: "AT", slug: "autriche",      name_fr: "Autriche",        name_en: "Austria",         flag: "🇦🇹", intl: "de-AT" },
  { cc: "IE", slug: "irlande",       name_fr: "Irlande",         name_en: "Ireland",         flag: "🇮🇪", intl: "en-IE" },
  { cc: "SE", slug: "suede",         name_fr: "Suède",           name_en: "Sweden",          flag: "🇸🇪", intl: "sv-SE" },
  { cc: "NO", slug: "norvege",       name_fr: "Norvège",         name_en: "Norway",          flag: "🇳🇴", intl: "nb-NO" },
  { cc: "DK", slug: "danemark",      name_fr: "Danemark",        name_en: "Denmark",         flag: "🇩🇰", intl: "da-DK" },
  { cc: "FI", slug: "finlande",      name_fr: "Finlande",        name_en: "Finland",         flag: "🇫🇮", intl: "fi-FI" },
  { cc: "PL", slug: "pologne",       name_fr: "Pologne",         name_en: "Poland",          flag: "🇵🇱", intl: "pl-PL" },
  { cc: "GR", slug: "grece",         name_fr: "Grèce",           name_en: "Greece",          flag: "🇬🇷", intl: "el-GR" },
  { cc: "HU", slug: "hongrie",       name_fr: "Hongrie",         name_en: "Hungary",         flag: "🇭🇺", intl: "hu-HU" },
  { cc: "CZ", slug: "republique-tcheque", name_fr: "République tchèque", name_en: "Czech Republic", flag: "🇨🇿", intl: "cs-CZ" },
  { cc: "RO", slug: "roumanie",      name_fr: "Roumanie",        name_en: "Romania",         flag: "🇷🇴", intl: "ro-RO" },
  { cc: "TR", slug: "turquie",       name_fr: "Turquie",         name_en: "Turkey",          flag: "🇹🇷", intl: "tr-TR" },
  { cc: "NZ", slug: "nouvelle-zelande", name_fr: "Nouvelle-Zélande", name_en: "New Zealand",  flag: "🇳🇿", intl: "en-NZ" },
  { cc: "ZA", slug: "afrique-du-sud", name_fr: "Afrique du Sud", name_en: "South Africa",    flag: "🇿🇦", intl: "en-ZA" },
  { cc: "AR", slug: "argentine",     name_fr: "Argentine",       name_en: "Argentina",       flag: "🇦🇷", intl: "es-AR" },
];

export const YEARS: number[] = [2026, 2027];

export const JOURS_FERIES_SLUGS: string[] = COUNTRIES.flatMap((c) =>
  YEARS.map((y) => `${c.slug}-${y}`)
);

export function countryBySlug(slug: string): Country | null {
  return COUNTRIES.find((c) => c.slug === slug) ?? null;
}

export function countryByCc(cc: string): Country | null {
  const upper = cc.toUpperCase();
  return COUNTRIES.find((c) => c.cc === upper) ?? null;
}

export function parseSlug(slug: string): { country: Country; year: number } | null {
  if (typeof slug !== "string" || !slug) return null;
  const lower = slug.toLowerCase();
  // The slug pattern is "<country-slug>-<year>" where country-slug may itself
  // contain hyphens. Match the trailing 4-digit year explicitly.
  const m = lower.match(/^([a-z][a-z0-9-]*?)-(\d{4})$/);
  if (!m) return null;
  const countrySlug = m[1];
  const year = Number(m[2]);
  if (!YEARS.includes(year)) return null;
  const country = countryBySlug(countrySlug);
  if (!country) return null;
  return { country, year };
}

export function holidaySlug(country: Country, year: number): string {
  return `${country.slug}-${year}`;
}

// ------------------------------------------------------------------
// API fetch — date.nager.at (free, no API key)
// ------------------------------------------------------------------

export type NagerHoliday = {
  date: string;          // "2026-01-01"
  localName: string;
  name: string;
  countryCode: string;
  fixed?: boolean;
  global?: boolean;
  counties?: string[] | null;
  launchYear?: number | null;
  types?: string[];      // ["Public"], ["Bank"], etc.
};

export async function fetchHolidays(
  year: number,
  cc: string
): Promise<NagerHoliday[]> {
  try {
    const url = `https://date.nager.at/api/v3/PublicHolidays/${year}/${cc.toUpperCase()}`;
    const res = await fetch(url, { next: { revalidate: 86400 } });
    if (!res.ok) return [];
    const data = (await res.json()) as unknown;
    if (!Array.isArray(data)) return [];
    return data
      .filter((h): h is NagerHoliday => {
        if (!h || typeof h !== "object") return false;
        const rec = h as Record<string, unknown>;
        return typeof rec.date === "string" && typeof rec.localName === "string";
      })
      .sort((a, b) => a.date.localeCompare(b.date));
  } catch {
    return [];
  }
}

// ------------------------------------------------------------------
// Stats + relations
// ------------------------------------------------------------------

export type HolidayStats = {
  total: number;
  ponts: number;          // Holidays falling on Tuesday or Thursday
  weekend: number;        // Holidays on Saturday or Sunday
  next: NagerHoliday | null;
  daysUntilNext: number | null;
};

export function computeStats(holidays: NagerHoliday[], today: Date): HolidayStats {
  let ponts = 0;
  let weekend = 0;
  for (const h of holidays) {
    const d = parseIsoDate(h.date);
    if (!d) continue;
    const dow = d.getUTCDay(); // 0=Sun, 6=Sat
    if (dow === 2 || dow === 4) ponts += 1; // Tuesday / Thursday
    if (dow === 0 || dow === 6) weekend += 1;
  }
  const todayUtc = Date.UTC(
    today.getUTCFullYear(),
    today.getUTCMonth(),
    today.getUTCDate()
  );
  let next: NagerHoliday | null = null;
  let daysUntilNext: number | null = null;
  for (const h of holidays) {
    const d = parseIsoDate(h.date);
    if (!d) continue;
    const ts = d.getTime();
    if (ts >= todayUtc) {
      next = h;
      daysUntilNext = Math.round((ts - todayUtc) / 86400000);
      break;
    }
  }
  return { total: holidays.length, ponts, weekend, next, daysUntilNext };
}

function parseIsoDate(s: string): Date | null {
  // "YYYY-MM-DD" → Date at UTC midnight, robust to timezone drift.
  const m = s.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!m) return null;
  const y = Number(m[1]);
  const mo = Number(m[2]) - 1;
  const d = Number(m[3]);
  const dt = new Date(Date.UTC(y, mo, d));
  if (Number.isNaN(dt.getTime())) return null;
  return dt;
}

/**
 * Pick `n` related countries (excluding the current one) for the same year.
 */
export function relatedCountries(current: Country, n = 5): Country[] {
  const others = COUNTRIES.filter((c) => c.cc !== current.cc);
  // Deterministic: alphabetical by slug, rotated by current cc hash so it
  // varies between detail pages.
  const seed = current.cc.charCodeAt(0) + current.cc.charCodeAt(1);
  const rotated = [...others.slice(seed % others.length), ...others.slice(0, seed % others.length)];
  return rotated.slice(0, n);
}

// ------------------------------------------------------------------
// Per-country editorial blurbs (FR + EN). ~80-150 words each.
// Keep these stable + factual.
// ------------------------------------------------------------------

type Blurb = { fr: string; en: string };

export const COUNTRY_BLURBS: Record<string, Blurb> = {
  FR: {
    fr: "En France, le calendrier des jours fériés mêle racines catholiques et acquis sociaux. Le 1er mai célèbre la fête du travail et reste l'un des rares jours férié obligatoirement chômé et payé. Le 8 mai marque la victoire de 1945, le 14 juillet la prise de la Bastille en 1789. Pâques, l'Ascension, le lundi de Pentecôte, l'Assomption (15 août), la Toussaint (1er novembre) et Noël ponctuent l'année. Quand un jour férié tombe un mardi ou un jeudi, beaucoup d'entreprises accordent un \"pont\" — un long week-end de quatre jours qui rythme les départs en vacances et les soldes locales.",
    en: "France's holiday calendar mixes Catholic tradition with hard-won labour rights. May 1st (Labour Day) is one of the few mandatory paid days off. May 8th commemorates the 1945 Allied victory, July 14th the storming of the Bastille in 1789. Easter Monday, Ascension, Pentecost Monday, Assumption (August 15), All Saints' (November 1) and Christmas round out the year. When a holiday falls on a Tuesday or Thursday many employers grant a \"pont\" — bridging the gap into a four-day weekend that drives travel bookings and local sales.",
  },
  US: {
    fr: "Aux États-Unis, les jours fériés fédéraux ferment les administrations, les banques et la poste mais sont souvent travaillés dans le privé. Memorial Day (dernier lundi de mai) ouvre la saison estivale, Independence Day (4 juillet) célèbre 1776 avec feux d'artifice et barbecues, Labor Day (1er lundi de septembre) la ferme. Thanksgiving (4e jeudi de novembre) reste le jour le plus voyagé de l'année — dinde, famille, football. Martin Luther King Jr. Day en janvier et Juneteenth (19 juin) ajoutent des dates récentes liées à l'histoire afro-américaine.",
    en: "US federal holidays close banks, government offices and the post but are often regular workdays in private companies. Memorial Day (last Monday of May) kicks off summer, Independence Day (July 4th) marks 1776 with fireworks and cookouts, Labor Day (first Monday of September) closes the season. Thanksgiving (4th Thursday of November) is the year's most-travelled day — turkey, family, football. Martin Luther King Jr. Day in January and Juneteenth (June 19) are newer additions tied to African-American history.",
  },
  GB: {
    fr: "Au Royaume-Uni les jours fériés s'appellent \"bank holidays\" — héritage du Bank Holidays Act de 1871. L'Angleterre et le Pays de Galles en comptent huit, l'Écosse neuf, l'Irlande du Nord dix. Mai en concentre deux (Early May et Spring Bank), août un autre. Pâques (vendredi saint + lundi de Pâques) ferme presque tout. Noël et le Boxing Day (26 décembre) marquent la trêve hivernale. Quand un jour férié tombe un week-end, il est reporté au lundi suivant (\"substitute day\").",
    en: "UK public holidays are called \"bank holidays\" — a legacy of the 1871 Bank Holidays Act. England and Wales have eight, Scotland nine, Northern Ireland ten. May packs two (Early May and Spring Bank), August another. Easter (Good Friday + Easter Monday) shuts almost everything. Christmas and Boxing Day (December 26) form the winter break. When a bank holiday lands on a weekend, it is moved to the next Monday as a \"substitute day\".",
  },
  DE: {
    fr: "En Allemagne, les jours fériés varient selon les Länder. Neuf fériés nationaux (Nouvel An, Vendredi saint, lundi de Pâques, 1er mai, Ascension, lundi de Pentecôte, Unité allemande le 3 octobre, Noël et le lendemain) sont partout. Mais la Bavière et la Sarre ajoutent l'Épiphanie (6 janvier), la Fête-Dieu, la Toussaint et l'Assomption ; le sud catholique compte donc jusqu'à treize fériés. Le 3 octobre célèbre la réunification de 1990. Les commerces ferment strictement les dimanches et fériés (Ladenschlussgesetz).",
    en: "Germany's holidays vary by federal state (Bundesland). Nine are nationwide (New Year, Good Friday, Easter Monday, May 1st, Ascension, Whit Monday, German Unity Day on October 3rd, Christmas and the day after). Bavaria and Saarland add Epiphany (Jan 6), Corpus Christi, All Saints' and Assumption — the Catholic south reaches thirteen public holidays. October 3rd marks the 1990 reunification. Shops close strictly on Sundays and holidays under the Ladenschlussgesetz.",
  },
  ES: {
    fr: "L'Espagne combine fériés nationaux, régionaux et locaux : un même jour peut être chômé à Madrid mais ouvré à Barcelone. Les grands rendez-vous nationaux : le Jour de l'an, l'Épiphanie (6 janvier, jour des Rois où les enfants reçoivent les cadeaux), le Vendredi saint, la Fête du travail, l'Assomption, la Fête nationale (12 octobre, jour de la Hispanidad), la Toussaint, la Constitution (6 décembre), l'Immaculée Conception et Noël. Chaque communauté ajoute la Fête du saint patron — Saint-Jean en Catalogne, Sant Jordi le 23 avril, etc.",
    en: "Spain combines national, regional and local holidays — a given day may be off in Madrid but a working day in Barcelona. Main national dates: New Year, Epiphany (Jan 6, when children receive gifts), Good Friday, Labour Day, Assumption, National Day (Oct 12, Hispanic Day), All Saints', Constitution Day (Dec 6), Immaculate Conception and Christmas. Each autonomous community adds patron-saint days — Sant Jordi (Apr 23) in Catalonia, Saint John in many regions.",
  },
  IT: {
    fr: "En Italie, douze jours fériés rythment l'année. Le 25 avril célèbre la Libération de 1945, le 1er mai la fête du travail, le 2 juin la République (référendum de 1946). Ferragosto (15 août, Assomption) vide les villes : presque tous les Italiens partent à la mer ou à la montagne. Toussaint, Immaculée Conception, Noël, Santo Stefano (26 décembre) et l'Épiphanie (6 janvier, la Befana apporte ses bonbons aux enfants sages) closent l'année. Chaque ville fête son saint patron — Saint-Marc à Venise, Saint-Ambroise à Milan.",
    en: "Italy observes twelve public holidays. April 25 marks Liberation Day (1945), May 1 Labour Day, June 2 Republic Day (the 1946 referendum). Ferragosto (Aug 15, Assumption) empties the cities — almost everyone heads to the sea or mountains. All Saints', Immaculate Conception, Christmas, Santo Stefano (Dec 26) and Epiphany (Jan 6, the Befana brings sweets to good children) close the year. Each city celebrates its patron saint — St Mark in Venice, St Ambrose in Milan.",
  },
  JP: {
    fr: "Le Japon compte seize jours fériés, le record parmi les pays du G7. La Golden Week (29 avril → 5 mai) enchaîne quatre fériés et provoque les pires bouchons de l'année. Obon en août, sans être férié officiel, vide les bureaux. La loi du \"Happy Monday\" déplace plusieurs fériés au lundi pour créer des week-ends prolongés. Mention spéciale au 23 février, anniversaire de l'empereur Naruhito, et au 11 février, fête nationale qui célèbre la fondation mythique du Japon en 660 av. J.-C.",
    en: "Japan has sixteen public holidays — the most of any G7 country. Golden Week (April 29 → May 5) chains four holidays together and creates the year's worst traffic. Obon in August, while not official, empties offices. The \"Happy Monday\" law shifts several holidays to Mondays to create long weekends. Notable dates: February 23 (Emperor Naruhito's birthday) and February 11 (National Foundation Day, marking Japan's mythical founding in 660 BC).",
  },
  CA: {
    fr: "Au Canada, les jours fériés sont partagés entre le fédéral et les provinces. Cinq sont nationaux : Jour de l'an, Vendredi saint, Fête du Canada (1er juillet), Fête du travail, Noël. Le Québec ajoute la Saint-Jean-Baptiste (24 juin), fête nationale québécoise, et la Journée nationale des patriotes en mai. Thanksgiving canadien tombe le 2e lundi d'octobre (plus tôt qu'aux États-Unis car les récoltes finissent plus tôt). Le 30 septembre, Journée de la vérité et de la réconciliation, honore depuis 2021 les peuples autochtones et les pensionnats.",
    en: "Canadian holidays are split between federal and provincial. Five are nationwide: New Year, Good Friday, Canada Day (July 1st), Labour Day, Christmas. Quebec adds Saint-Jean-Baptiste (June 24, the Québécois national day) and Patriots' Day in May. Canadian Thanksgiving falls on the 2nd Monday of October — earlier than the US because harvests end sooner. September 30 (National Day for Truth and Reconciliation) has honoured Indigenous peoples and residential-school survivors since 2021.",
  },
  AU: {
    fr: "L'Australie observe sept fériés nationaux et plusieurs jours d'État. Australia Day (26 janvier) marque l'arrivée de la First Fleet en 1788 — date contestée par les Aborigènes qui la qualifient d'Invasion Day. ANZAC Day (25 avril) honore les soldats tombés à Gallipoli en 1915. L'anniversaire officiel du roi est célébré en juin (sauf en Australie-Occidentale, fin septembre). Noël tombe en plein été austral : barbecues sur la plage et bûche pavlova plutôt que feu de cheminée.",
    en: "Australia observes seven national holidays plus state-specific days. Australia Day (Jan 26) marks the First Fleet's 1788 arrival — a contested date Indigenous Australians call Invasion Day. ANZAC Day (Apr 25) honours soldiers fallen at Gallipoli in 1915. The King's official birthday is celebrated in June (except Western Australia, late September). Christmas falls in mid-summer down under — beach barbecues and pavlova replace the fireplace.",
  },
  BR: {
    fr: "Au Brésil, douze fériés nationaux sont fixes (un seul mobile, Carnaval, qui dure officieusement quatre jours). L'Indépendance se fête le 7 septembre (1822), la Proclamation de la République le 15 novembre (1889), et Tiradentes le 21 avril honore le héros de l'Inconfidência Mineira. Le 12 octobre célèbre Nossa Senhora Aparecida, sainte patronne. Carnaval, sans être férié fédéral, vide les bureaux : Rio, Salvador et Recife déploient leurs blocos. Noël et Réveillon (Saint-Sylvestre) closent l'année en blanc à Copacabana.",
    en: "Brazil has twelve fixed federal holidays plus the movable Carnival, which unofficially lasts four days. Independence Day is September 7 (1822), Proclamation of the Republic November 15 (1889), and Tiradentes (April 21) honours the Inconfidência Mineira hero. October 12 celebrates Nossa Senhora Aparecida, the patron saint. Carnival, while not an official federal holiday, empties offices — Rio, Salvador and Recife unleash their blocos. Christmas and New Year's Eve close the year in white on Copacabana beach.",
  },
  MX: {
    fr: "Le Mexique distingue jours fériés officiels (días feriados oficiales) et jours civils. La Independencia se célèbre la nuit du 15 au 16 septembre avec le Grito de Dolores. La Revolución (20 novembre) honore le soulèvement de 1910 contre Porfirio Díaz. Le Día de los Muertos (1-2 novembre) n'est pas férié fédéral mais ferme tout dans les faits : autels, cempasúchil, pan de muerto. Cinco de Mayo (bataille de Puebla 1862) est davantage fêté aux États-Unis qu'au Mexique. Noël et Día de Reyes (6 janvier) ferment l'année.",
    en: "Mexico distinguishes between official holidays (días feriados) and civic days. Independence is celebrated on the night of Sept 15-16 with the Grito de Dolores. Revolution Day (Nov 20) honours the 1910 uprising against Porfirio Díaz. Día de los Muertos (Nov 1-2) is not a federal holiday but effectively closes everything — altars, cempasúchil flowers, pan de muerto. Cinco de Mayo (1862 Battle of Puebla) is bigger in the US than in Mexico. Christmas and Día de Reyes (Jan 6) close out the year.",
  },
  PT: {
    fr: "Le Portugal observe treize jours fériés nationaux. Le 25 avril célèbre la Révolution des Œillets de 1974 — la fin de l'Estado Novo. Le 10 juin honore Camões et les communautés portugaises dans le monde. Le 1er décembre marque la Restauration de l'indépendance face à l'Espagne en 1640. La fête de la République (5 octobre, abolition de la monarchie en 1910) complète le calendrier civique. Pâques, Corpus Christi, l'Assomption, la Toussaint et Noël couvrent le versant religieux. Chaque ville fête son saint patron — Saint Antoine à Lisbonne, Saint Jean à Porto.",
    en: "Portugal observes thirteen public holidays. April 25 celebrates the 1974 Carnation Revolution — the end of the Estado Novo dictatorship. June 10 honours Camões and Portuguese communities worldwide. December 1 marks the 1640 Restoration of independence from Spain. Republic Day (Oct 5, the 1910 abolition of the monarchy) rounds out the civic calendar. Easter, Corpus Christi, Assumption, All Saints' and Christmas cover the religious side. Each city celebrates its patron — St Anthony in Lisbon, St John in Porto.",
  },
  NL: {
    fr: "Les Pays-Bas comptent peu de jours fériés officiels (Algemeen erkende feestdagen), mais le Roi accorde des congés supplémentaires de fait. Koningsdag (27 avril, anniversaire du roi Willem-Alexander) inonde Amsterdam et le pays entier d'orange. Bevrijdingsdag (5 mai) célèbre la libération de 1945 et n'est férié officiel que tous les cinq ans. Pâques, Pentecôte et Ascension sont chômés ; Sinterklaas (5 décembre) n'est pas férié mais ferme les bureaux tôt. Noël et le 2e jour de Noël (26 décembre) closent l'année.",
    en: "The Netherlands has few official holidays (Algemeen erkende feestdagen) but the King grants extra days in practice. Koningsdag (April 27, King Willem-Alexander's birthday) drowns Amsterdam and the country in orange. Bevrijdingsdag (May 5) marks the 1945 liberation but is only an official holiday every five years. Easter, Pentecost and Ascension are off; Sinterklaas (Dec 5) isn't a holiday but offices close early. Christmas and Second Christmas Day (Dec 26) close the year.",
  },
  BE: {
    fr: "La Belgique compte dix jours fériés légaux. La Fête nationale (21 juillet) commémore le serment constitutionnel de Léopold Ier en 1831. Les trois Communautés ajoutent leur propre fête : Communauté française (27 septembre, bataille de Bruxelles 1830), Communauté flamande (11 juillet, bataille des Éperons d'or 1302), Communauté germanophone (15 novembre). Pâques, Ascension, Pentecôte, 1er mai, Toussaint, Armistice (11 novembre) et Noël complètent. Quand un férié tombe un week-end, il n'est pas reporté — à la différence du Royaume-Uni.",
    en: "Belgium has ten legal public holidays. The National Day (July 21) commemorates Leopold I's 1831 constitutional oath. The three Communities each add their own day: French (Sept 27, 1830 Battle of Brussels), Flemish (July 11, 1302 Battle of the Golden Spurs), German-speaking (Nov 15). Easter, Ascension, Pentecost, May 1, All Saints', Armistice (Nov 11) and Christmas round it out. When a holiday falls on a weekend it is NOT moved — unlike in the UK.",
  },
  CH: {
    fr: "En Suisse, seul le 1er août (Fête nationale, pacte fédéral de 1291) est férié au niveau fédéral. Tout le reste est cantonal : Genève fête la Restauration le 31 décembre, Zurich Sechseläuten en avril, le Tessin compte plusieurs fêtes catholiques que Bâle-Ville ignore. La plupart des cantons reconnaissent Nouvel An, Vendredi saint, lundi de Pâques, Ascension, lundi de Pentecôte, Noël et le 26 décembre (Saint-Étienne). Le Jeûne fédéral (3e dimanche de septembre) est observé partout sauf à Genève.",
    en: "In Switzerland only August 1st (National Day, the 1291 Federal Charter) is a federal holiday. Everything else is cantonal: Geneva celebrates the Restoration on Dec 31, Zurich the Sechseläuten in April, Ticino observes Catholic feasts that Basel-City ignores. Most cantons recognise New Year, Good Friday, Easter Monday, Ascension, Whit Monday, Christmas and St Stephen's Day (Dec 26). The Federal Day of Thanksgiving (3rd Sunday of September) is observed everywhere except Geneva.",
  },
  AT: {
    fr: "L'Autriche compte treize jours fériés légaux, parmi les plus généreux d'Europe. La Fête nationale (26 octobre) commémore la loi de neutralité de 1955. Le 8 décembre (Immaculée Conception) est l'un des rares jours où les commerces ouvrent légalement un dimanche ou férié religieux — héritage d'un compromis catholique-syndical de 1995. Pâques, Ascension, lundi de Pentecôte, Fête-Dieu, Assomption, Toussaint, Noël et Saint-Étienne (26 décembre) ancrent le versant religieux. Le Wiener Heuriger et les marchés de Noël ponctuent l'année.",
    en: "Austria has thirteen legal public holidays — among the most generous in Europe. National Day (Oct 26) marks the 1955 Declaration of Neutrality. December 8 (Immaculate Conception) is one of the few days when shops may legally open on a religious Sunday/holiday — a 1995 Catholic-union compromise. Easter, Ascension, Whit Monday, Corpus Christi, Assumption, All Saints', Christmas and St Stephen's Day (Dec 26) anchor the religious side. Vienna's Heuriger taverns and Christmas markets punctuate the year.",
  },
  IE: {
    fr: "L'Irlande observe dix jours fériés publics. La Saint-Patrick (17 mars) est la fête nationale : défilés à Dublin, monuments verts dans le monde entier. Depuis 2023, le premier lundi de février est férié sous le nom de Saint Brigid's Day — premier férié irlandais nommé d'après une femme. Les \"June Bank Holiday\" (1er lundi de juin) et \"August Bank Holiday\" (1er lundi d'août) créent des longs week-ends d'été. Pâques, Noël et le St Stephen's Day (26 décembre) closent le calendrier.",
    en: "Ireland observes ten public holidays. St Patrick's Day (March 17) is the national feast — parades in Dublin, monuments lit green worldwide. Since 2023 the first Monday of February is a public holiday named after St Brigid — the first Irish public holiday named for a woman. June Bank Holiday (1st Monday of June) and August Bank Holiday (1st Monday of August) create summer long weekends. Easter, Christmas and St Stephen's Day (Dec 26) close the calendar.",
  },
  SE: {
    fr: "La Suède observe treize jours fériés (helgdagar). Midsommarafton (vendredi le plus proche du 21 juin) n'est pas officiel mais ferme tout le pays : feux de joie, danses autour du mât, hareng mariné. Walpurgisnacht (30 avril) annonce l'arrivée du printemps. La Fête nationale (6 juin) est récente — férié depuis 2005 seulement. Lucia (13 décembre) reste un \"de facto\" férié avec sa procession en blanc et ses bougies. Les Suédois cumulent en plus 25 jours de congés payés par an.",
    en: "Sweden observes thirteen public holidays (helgdagar). Midsommarafton (Friday nearest June 21) isn't official but closes the country — bonfires, maypole dances, pickled herring. Walpurgis Night (April 30) heralds spring. National Day (June 6) is recent — only a public holiday since 2005. Lucia (Dec 13) is a de facto holiday with its white-robed procession and candles. Swedes also get 25 days of paid annual leave on top.",
  },
  NO: {
    fr: "La Norvège observe douze jours fériés. La Fête nationale (17 mai) commémore la Constitution d'Eidsvoll de 1814 : enfants en bunad qui défilent, le roi salue depuis le balcon du Palais. Le Vendredi saint, le lundi de Pâques, l'Ascension, le lundi de Pentecôte rappellent l'héritage luthérien (l'Église de Norvège fut Église d'État jusqu'en 2012). Noël et le 2e jour de Noël (Andre juledag) ferment décembre. La plupart des Norvégiens prennent en plus toute la semaine entre Noël et le Nouvel An (\"romjul\").",
    en: "Norway observes twelve public holidays. National Day (May 17) marks the 1814 Eidsvoll Constitution — children parade in bunad, the King waves from the Palace balcony. Good Friday, Easter Monday, Ascension and Whit Monday reflect the Lutheran heritage (the Church of Norway was a state church until 2012). Christmas and Second Christmas Day (Andre juledag) close December. Most Norwegians also take the whole week between Christmas and New Year (\"romjul\").",
  },
  DK: {
    fr: "Le Danemark compte neuf jours fériés officiels. Le Store Bededag (\"grand jour de prière\", 4e vendredi après Pâques) a été supprimé en 2024 par le gouvernement pour financer la défense — décision controversée. La Fête de la Constitution (5 juin) n'est pas férié officiel mais beaucoup d'entreprises ferment l'après-midi. La Saint-Jean (Sankt Hans) le 23 juin se fête avec des feux de joie. Noël (Juleaften le 24 au soir, principal repas familial) et son 2e jour ferment l'année.",
    en: "Denmark observes nine public holidays. Store Bededag (\"Great Prayer Day,\" 4th Friday after Easter) was abolished in 2024 by the government to fund defence — a controversial move. Constitution Day (June 5) isn't an official holiday but many businesses close in the afternoon. Sankt Hans on June 23 is celebrated with bonfires. Christmas (Juleaften, Dec 24 evening — the main family meal) and Boxing Day close the year.",
  },
  FI: {
    fr: "La Finlande observe environ quinze jours fériés (juhlapyhät), parmi les plus nombreux d'Europe. La Fête de l'indépendance (6 décembre) commémore la déclaration de 1917 face à la Russie : bougies aux fenêtres, réception solennelle au Palais présidentiel. Juhannus (samedi proche du 21 juin) vide les villes : tout le monde part au mökki (chalet) au bord d'un lac. Vappu (1er mai) est la fête étudiante, casquettes blanches et pique-niques au parc. Noël reste familial et fortement ritualisé (sauna, bouillie de riz).",
    en: "Finland observes around fifteen public holidays (juhlapyhät), among the most in Europe. Independence Day (Dec 6) marks the 1917 declaration from Russia — candles in windows, a solemn reception at the Presidential Palace. Juhannus (Saturday nearest June 21) empties cities — everyone heads to a lakeside mökki (cabin). Vappu (May 1) is the student festival — white caps, picnics in the park. Christmas remains family-focused and highly ritualised (sauna, rice porridge).",
  },
  PL: {
    fr: "La Pologne observe treize jours fériés légaux. Le 11 novembre célèbre l'indépendance de 1918, le 3 mai la Constitution de 1791 — la plus ancienne d'Europe et la 2e au monde après celle des États-Unis. La Toussaint (1er novembre) reste une fête majeure : les cimetières s'illuminent de bougies (znicze). Pâques se fête avec le święconka — bénédiction des paniers de victuailles le Samedi saint. La Fête-Dieu, l'Assomption, l'Épiphanie et l'Immaculée Conception rappellent l'ancrage catholique du pays.",
    en: "Poland observes thirteen legal public holidays. November 11 celebrates the 1918 independence, May 3 the 1791 Constitution — the oldest in Europe and the second worldwide after the US. All Saints' Day (Nov 1) is a major feast — cemeteries glow with candles (znicze). Easter features the święconka — blessing of food baskets on Holy Saturday. Corpus Christi, Assumption, Epiphany and the Immaculate Conception underscore Poland's Catholic identity.",
  },
  GR: {
    fr: "La Grèce mêle fêtes orthodoxes et nationales. La Pâque orthodoxe (généralement quelques semaines après la Pâque catholique) reste la fête la plus importante : agneau à la broche, œufs rouges. Le 25 mars commémore l'insurrection de 1821 contre l'Empire ottoman, le 28 octobre le \"Όχι\" — le refus grec à l'ultimatum italien de 1940. La Dormition de la Vierge (15 août) vide Athènes : tout le monde part dans les îles. L'Épiphanie (6 janvier) est célébrée par la bénédiction des eaux et la course aux croix plongées dans la mer.",
    en: "Greece blends Orthodox and national holidays. Orthodox Easter (usually a few weeks after Catholic Easter) is the biggest feast — spit-roasted lamb, red eggs. March 25 commemorates the 1821 uprising against the Ottoman Empire, October 28 \"Όχι Day\" — Greece's refusal of the 1940 Italian ultimatum. The Dormition of the Virgin (August 15) empties Athens — everyone heads to the islands. Epiphany (Jan 6) features the blessing of waters and divers racing for crosses thrown into the sea.",
  },
  HU: {
    fr: "La Hongrie observe onze jours fériés officiels. Le 15 mars commémore la révolution de 1848 contre les Habsbourg, le 20 août la Saint-Étienne — fondateur du royaume hongrois en l'an 1000, première fête nationale du pays. Le 23 octobre rappelle l'insurrection de 1956 contre l'occupation soviétique. Pâques, lundi de Pâques, lundi de Pentecôte, Toussaint et Noël (deux jours) ancrent le côté chrétien. Quand un férié tombe un mardi ou jeudi, la loi déplace souvent le travail à un samedi voisin pour créer un long week-end.",
    en: "Hungary observes eleven public holidays. March 15 commemorates the 1848 revolution against the Habsburgs, August 20 St Stephen — founder of the Hungarian kingdom in the year 1000, the country's primary national feast. October 23 marks the 1956 uprising against Soviet occupation. Easter, Easter Monday, Whit Monday, All Saints' and Christmas (two days) anchor the Christian side. When a holiday falls on a Tuesday or Thursday, the law often shifts the workday to a nearby Saturday to create a long weekend.",
  },
  CZ: {
    fr: "La République tchèque compte treize jours fériés. La Saint-Venceslas (28 septembre) honore le patron du pays, le 28 octobre célèbre la fondation de la Tchécoslovaquie en 1918, le 17 novembre commémore la Révolution de velours de 1989 et les manifestations étudiantes de 1939. Le 5 juillet (Cyrille et Méthode) rappelle l'évangélisation des Slaves au IXe siècle, le 6 juillet (Jan Hus) le réformateur brûlé à Constance en 1415. Pâques, Noël et la Saint-Étienne ferment le calendrier.",
    en: "The Czech Republic observes thirteen public holidays. St Wenceslas Day (Sept 28) honours the country's patron, October 28 marks the 1918 founding of Czechoslovakia, November 17 commemorates the 1989 Velvet Revolution and the 1939 student protests. July 5 (Cyril and Methodius) recalls the 9th-century Slavic evangelisation, July 6 (Jan Hus) the reformer burned at Constance in 1415. Easter, Christmas and St Stephen's Day close the calendar.",
  },
  RO: {
    fr: "La Roumanie observe environ quinze jours fériés légaux. Le 1er décembre commémore l'Union de 1918 — réunification de la Transylvanie au royaume. La Pâque orthodoxe (deux jours fériés) reste la fête centrale du pays. La Saint-André (30 novembre, patron de la Roumanie) et l'Assomption (15 août, Sainte-Marie) sont également chômées. Une réforme récente a ajouté l'Épiphanie et la Saint-Jean (6-7 janvier), un troisième jour de Pâques (lundi de Pâques de juin) et le Vendredi saint pour aligner sur les pratiques européennes.",
    en: "Romania observes around fifteen legal public holidays. December 1 marks the 1918 Union — Transylvania joining the kingdom. Orthodox Easter (two days off) is the country's central feast. St Andrew's Day (Nov 30, Romania's patron) and the Assumption (Aug 15, Saint Mary) are also off. A recent reform added Epiphany and St John (Jan 6-7), a third Easter day (Whit Monday in June) and Good Friday to align with European practice.",
  },
  TR: {
    fr: "La Turquie combine fêtes nationales laïques et religieuses musulmanes. Le 23 avril (Souveraineté nationale et fête des enfants) commémore l'ouverture de la Grande Assemblée nationale en 1920 ; c'est la seule fête mondiale dédiée aux enfants. Le 29 octobre célèbre la proclamation de la République par Atatürk en 1923. Le 19 mai (Mémoire d'Atatürk, fête de la jeunesse) rappelle son débarquement à Samsun en 1919. Şeker Bayramı (fin du Ramadan) et Kurban Bayramı (fête du Sacrifice) sont mobiles et durent 3-4 jours chacun.",
    en: "Turkey blends secular national holidays with Muslim religious feasts. April 23 (National Sovereignty and Children's Day) commemorates the 1920 opening of the Grand National Assembly — the world's only holiday dedicated to children. October 29 marks Atatürk's 1923 proclamation of the Republic. May 19 (Atatürk Memorial / Youth Day) recalls his 1919 landing at Samsun. Şeker Bayramı (end of Ramadan) and Kurban Bayramı (Sacrifice Feast) are movable and each lasts 3-4 days.",
  },
  NZ: {
    fr: "La Nouvelle-Zélande observe onze jours fériés nationaux plus l'anniversaire de chaque province (Wellington le 22 janvier, Auckland le 29, etc.). Waitangi Day (6 février) commémore le traité de 1840 entre la Couronne et 540 chefs maoris. ANZAC Day (25 avril) honore les soldats de Gallipoli, partagé avec l'Australie. Matariki, célébration du Nouvel An maori (lever des Pléiades en juin-juillet), est férié depuis 2022 — premier férié néo-zélandais ancré dans la culture autochtone Tāngata Whenua.",
    en: "New Zealand observes eleven national public holidays plus each province's anniversary (Wellington on Jan 22, Auckland on Jan 29, etc.). Waitangi Day (Feb 6) commemorates the 1840 treaty between the Crown and 540 Māori chiefs. ANZAC Day (Apr 25) honours the Gallipoli soldiers, shared with Australia. Matariki, the Māori New Year (Pleiades rising in June-July), has been a holiday since 2022 — NZ's first public holiday rooted in Tāngata Whenua culture.",
  },
  ZA: {
    fr: "L'Afrique du Sud observe douze jours fériés. Plusieurs commémorent la fin de l'apartheid : Human Rights Day (21 mars, massacre de Sharpeville 1960), Freedom Day (27 avril, premières élections multiraciales 1994), Workers' Day (1er mai), Youth Day (16 juin, soulèvement de Soweto 1976), Heritage Day (24 septembre), Day of Reconciliation (16 décembre). Noël et le Day of Goodwill (26 décembre) closent l'année. Quand un férié tombe un dimanche, le lundi suivant est chômé.",
    en: "South Africa observes twelve public holidays. Several commemorate the end of apartheid: Human Rights Day (March 21, 1960 Sharpeville Massacre), Freedom Day (April 27, 1994 first multiracial elections), Workers' Day (May 1), Youth Day (June 16, 1976 Soweto uprising), Heritage Day (Sept 24), Day of Reconciliation (Dec 16). Christmas and Day of Goodwill (Dec 26) close the year. When a holiday falls on a Sunday, the following Monday is off.",
  },
  AR: {
    fr: "L'Argentine compte quinze à dix-huit jours fériés selon les années (dont des \"jours feriados puentes\" décrétés ad hoc pour créer des longs week-ends). Le 25 mai commémore la Révolution de Mai 1810, le 9 juillet la Déclaration d'indépendance de 1816 à Tucumán. Le Jour du Drapeau (20 juin) honore Manuel Belgrano. La Pâque catholique, l'Immaculée Conception, la Vierge de Luján et Noël ancrent le calendrier religieux. Le Carnaval (lundi et mardi gras) est férié depuis 2011, ressuscité après des décennies d'oubli.",
    en: "Argentina has fifteen to eighteen public holidays a year (including \"feriados puentes\" decreed ad hoc to create long weekends). May 25 marks the May Revolution of 1810, July 9 the 1816 Independence Declaration at Tucumán. Flag Day (June 20) honours Manuel Belgrano. Catholic Easter, Immaculate Conception, the Virgin of Luján and Christmas anchor the religious calendar. Carnival (Monday and Tuesday) has been a public holiday since 2011, revived after decades of neglect.",
  },
};

export function blurbFor(cc: string, locale: Locale): string {
  const b = COUNTRY_BLURBS[cc.toUpperCase()];
  if (!b) return "";
  if (locale === "fr" || locale === "es" || locale === "it" || locale === "pt") {
    return b.fr;
  }
  return b.en;
}

// ------------------------------------------------------------------
// i18n strings (inline, all 8 languages)
// ------------------------------------------------------------------

export type ToolStrings = {
  hubTitle: string;
  hubIntro: string;
  hubSubline: string;       // "{n} countries × {y} years"
  countriesLabel: string;
  detailTitle: string;      // "Public holidays in {country} {year}"
  detailCount: string;      // "{n} holidays this year"
  nextHoliday: string;
  noNext: string;
  daysRemaining: string;    // "in {n} days"
  daysToday: string;        // "today"
  daysTomorrow: string;     // "tomorrow"
  fullCalendar: string;
  stats: string;
  ponts: string;            // "Long weekends (Tue/Thu)"
  weekend: string;          // "Holidays on weekend"
  total: string;
  pollCta: string;
  pollHeadline: string;
  pollBody: string;
  otherYears: string;
  otherCountries: string;
  back: string;
  apiUnavailable: string;
  about: string;            // "About local holidays"
};

export const STRINGS: Record<Locale, ToolStrings> = {
  fr: {
    hubTitle: "Jours fériés",
    hubIntro: "Calendrier complet des jours fériés dans 30 pays. Date du prochain férié, nombre de ponts possibles, contexte historique.",
    hubSubline: "{n} pays × {y} années",
    countriesLabel: "Tous les pays",
    detailTitle: "Jours fériés {country} {year}",
    detailCount: "{n} jours fériés cette année",
    nextHoliday: "Le prochain jour férié",
    noNext: "Aucun jour férié à venir cette année.",
    daysRemaining: "dans {n} jours",
    daysToday: "aujourd'hui",
    daysTomorrow: "demain",
    fullCalendar: "Calendrier complet",
    stats: "Stats",
    ponts: "Ponts possibles (mardi/jeudi)",
    weekend: "Jours fériés tombant un week-end",
    total: "Total de jours fériés",
    pollCta: "Lancer ce sondage →",
    pollHeadline: "Et toi, ton jour férié préféré ?",
    pollBody: "Lance un mini sondage moomz et vois ce que ton groupe en pense en 10 secondes.",
    otherYears: "Autres années",
    otherCountries: "Autres pays",
    back: "← Tous les pays",
    apiUnavailable: "Données indisponibles pour le moment — réessaie dans un instant.",
    about: "À propos des jours fériés",
  },
  en: {
    hubTitle: "Public holidays",
    hubIntro: "Complete public holiday calendars for 30 countries. Next upcoming holiday, possible long weekends, local context.",
    hubSubline: "{n} countries × {y} years",
    countriesLabel: "All countries",
    detailTitle: "Public holidays in {country} {year}",
    detailCount: "{n} public holidays this year",
    nextHoliday: "Next public holiday",
    noNext: "No upcoming holiday left this year.",
    daysRemaining: "in {n} days",
    daysToday: "today",
    daysTomorrow: "tomorrow",
    fullCalendar: "Full calendar",
    stats: "Stats",
    ponts: "Possible long weekends (Tue/Thu)",
    weekend: "Holidays falling on a weekend",
    total: "Total holidays",
    pollCta: "Launch this poll →",
    pollHeadline: "What's your favourite holiday?",
    pollBody: "Spin up a moomz mini-poll and see what your crew thinks in 10 seconds.",
    otherYears: "Other years",
    otherCountries: "Other countries",
    back: "← All countries",
    apiUnavailable: "Data unavailable right now — try again in a moment.",
    about: "About local holidays",
  },
  es: {
    hubTitle: "Días festivos",
    hubIntro: "Calendarios completos de días festivos para 30 países. Próximo festivo, posibles puentes, contexto local.",
    hubSubline: "{n} países × {y} años",
    countriesLabel: "Todos los países",
    detailTitle: "Días festivos en {country} {year}",
    detailCount: "{n} días festivos este año",
    nextHoliday: "Próximo día festivo",
    noNext: "No quedan festivos este año.",
    daysRemaining: "en {n} días",
    daysToday: "hoy",
    daysTomorrow: "mañana",
    fullCalendar: "Calendario completo",
    stats: "Estadísticas",
    ponts: "Posibles puentes (martes/jueves)",
    weekend: "Festivos en fin de semana",
    total: "Total de festivos",
    pollCta: "Lanzar esta encuesta →",
    pollHeadline: "¿Tu día festivo favorito?",
    pollBody: "Lanza una mini-encuesta moomz y mira lo que opina tu grupo en 10 segundos.",
    otherYears: "Otros años",
    otherCountries: "Otros países",
    back: "← Todos los países",
    apiUnavailable: "Datos no disponibles ahora — vuelve a intentarlo en un momento.",
    about: "Sobre los festivos locales",
  },
  it: {
    hubTitle: "Giorni festivi",
    hubIntro: "Calendari completi dei giorni festivi per 30 paesi. Prossima festa, possibili ponti, contesto locale.",
    hubSubline: "{n} paesi × {y} anni",
    countriesLabel: "Tutti i paesi",
    detailTitle: "Giorni festivi {country} {year}",
    detailCount: "{n} giorni festivi quest'anno",
    nextHoliday: "Prossima festività",
    noNext: "Nessuna festività rimanente quest'anno.",
    daysRemaining: "tra {n} giorni",
    daysToday: "oggi",
    daysTomorrow: "domani",
    fullCalendar: "Calendario completo",
    stats: "Statistiche",
    ponts: "Possibili ponti (martedì/giovedì)",
    weekend: "Festività nel weekend",
    total: "Totale festività",
    pollCta: "Lancia questo sondaggio →",
    pollHeadline: "La tua festività preferita?",
    pollBody: "Lancia un mini-sondaggio moomz e scopri cosa pensa il tuo gruppo in 10 secondi.",
    otherYears: "Altri anni",
    otherCountries: "Altri paesi",
    back: "← Tutti i paesi",
    apiUnavailable: "Dati non disponibili al momento — riprova tra un istante.",
    about: "Sulle festività locali",
  },
  pt: {
    hubTitle: "Feriados",
    hubIntro: "Calendários completos de feriados para 30 países. Próximo feriado, possíveis pontes, contexto local.",
    hubSubline: "{n} países × {y} anos",
    countriesLabel: "Todos os países",
    detailTitle: "Feriados em {country} {year}",
    detailCount: "{n} feriados este ano",
    nextHoliday: "Próximo feriado",
    noNext: "Sem feriados restantes este ano.",
    daysRemaining: "em {n} dias",
    daysToday: "hoje",
    daysTomorrow: "amanhã",
    fullCalendar: "Calendário completo",
    stats: "Estatísticas",
    ponts: "Possíveis pontes (terça/quinta)",
    weekend: "Feriados ao fim de semana",
    total: "Total de feriados",
    pollCta: "Lançar esta sondagem →",
    pollHeadline: "Qual é o teu feriado preferido?",
    pollBody: "Lança uma mini-sondagem moomz e descobre o que o teu grupo acha em 10 segundos.",
    otherYears: "Outros anos",
    otherCountries: "Outros países",
    back: "← Todos os países",
    apiUnavailable: "Dados indisponíveis no momento — tenta novamente daqui a pouco.",
    about: "Sobre os feriados locais",
  },
  de: {
    hubTitle: "Feiertage",
    hubIntro: "Vollständige Feiertagskalender für 30 Länder. Nächster Feiertag, mögliche Brückentage, lokaler Kontext.",
    hubSubline: "{n} Länder × {y} Jahre",
    countriesLabel: "Alle Länder",
    detailTitle: "Feiertage {country} {year}",
    detailCount: "{n} Feiertage in diesem Jahr",
    nextHoliday: "Nächster Feiertag",
    noNext: "Keine weiteren Feiertage in diesem Jahr.",
    daysRemaining: "in {n} Tagen",
    daysToday: "heute",
    daysTomorrow: "morgen",
    fullCalendar: "Vollständiger Kalender",
    stats: "Statistiken",
    ponts: "Mögliche Brückentage (Di/Do)",
    weekend: "Feiertage am Wochenende",
    total: "Feiertage gesamt",
    pollCta: "Diese Umfrage starten →",
    pollHeadline: "Dein Lieblings-Feiertag?",
    pollBody: "Starte eine moomz-Mini-Umfrage und sieh in 10 Sekunden, was deine Crew denkt.",
    otherYears: "Andere Jahre",
    otherCountries: "Andere Länder",
    back: "← Alle Länder",
    apiUnavailable: "Daten gerade nicht verfügbar — bitte gleich nochmal versuchen.",
    about: "Über lokale Feiertage",
  },
  ja: {
    hubTitle: "祝日カレンダー",
    hubIntro: "世界30か国の祝日を完全網羅。次の祝日、連休になりそうな日、各国の背景もまとめて。",
    hubSubline: "{n}か国 × {y}年分",
    countriesLabel: "すべての国",
    detailTitle: "{country}の祝日 {year}年",
    detailCount: "今年は{n}日の祝日",
    nextHoliday: "次の祝日",
    noNext: "今年残りの祝日はありません。",
    daysRemaining: "あと{n}日",
    daysToday: "今日",
    daysTomorrow: "明日",
    fullCalendar: "祝日カレンダー",
    stats: "統計",
    ponts: "連休になりそう（火・木）",
    weekend: "週末と重なる祝日",
    total: "祝日の合計",
    pollCta: "このアンケートを作る →",
    pollHeadline: "あなたの好きな祝日は？",
    pollBody: "moomzでミニアンケートを作って、10秒で仲間の答えをチェック。",
    otherYears: "他の年",
    otherCountries: "他の国",
    back: "← すべての国",
    apiUnavailable: "現在データを取得できません。少し待って再試行してください。",
    about: "現地の祝日について",
  },
  zh: {
    hubTitle: "公共假日",
    hubIntro: "30个国家完整公共假日日历。下一个假日、可能的连休、当地背景一次看清。",
    hubSubline: "{n}个国家 × {y}年",
    countriesLabel: "所有国家",
    detailTitle: "{country} {year}年公共假日",
    detailCount: "今年共{n}个公共假日",
    nextHoliday: "下一个假日",
    noNext: "今年没有剩余假日。",
    daysRemaining: "还有{n}天",
    daysToday: "今天",
    daysTomorrow: "明天",
    fullCalendar: "完整日历",
    stats: "统计",
    ponts: "可能的连休（周二/周四）",
    weekend: "落在周末的假日",
    total: "假日总数",
    pollCta: "发起这个投票 →",
    pollHeadline: "你最喜欢的假日是？",
    pollBody: "用 moomz 发起小投票，10秒看看朋友们的选择。",
    otherYears: "其他年份",
    otherCountries: "其他国家",
    back: "← 所有国家",
    apiUnavailable: "暂时无法加载数据，请稍后重试。",
    about: "关于当地假日",
  },
};

export function stringsFor(locale: Locale): ToolStrings {
  return STRINGS[locale] ?? STRINGS.en;
}

// ------------------------------------------------------------------
// Date / weekday formatting helpers
// ------------------------------------------------------------------

/** "15 août 2026" (fr) / "August 15, 2026" (en) */
export function formatLongDate(iso: string, locale: Locale): string {
  const d = parseIsoDate(iso);
  if (!d) return iso;
  try {
    return new Intl.DateTimeFormat(intlTagFor(locale), {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    }).format(d);
  } catch {
    return iso;
  }
}

/** "vendredi" / "Friday" */
export function formatWeekday(iso: string, locale: Locale): string {
  const d = parseIsoDate(iso);
  if (!d) return "";
  try {
    return new Intl.DateTimeFormat(intlTagFor(locale), {
      weekday: "long",
      timeZone: "UTC",
    }).format(d);
  } catch {
    return "";
  }
}

/** "15 août" — short, no year */
export function formatShortDate(iso: string, locale: Locale): string {
  const d = parseIsoDate(iso);
  if (!d) return iso;
  try {
    return new Intl.DateTimeFormat(intlTagFor(locale), {
      day: "numeric",
      month: "long",
      timeZone: "UTC",
    }).format(d);
  } catch {
    return iso;
  }
}

function intlTagFor(locale: Locale): string {
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

/** Country label localised for the current UI locale. */
export function countryLabel(country: Country, locale: Locale): string {
  if (locale === "fr" || locale === "es" || locale === "it" || locale === "pt") {
    return country.name_fr;
  }
  return country.name_en;
}

/** Group countries by first letter for the hub. */
export function groupCountriesAlphabetically(
  list: Country[],
  locale: Locale
): { letter: string; countries: Country[] }[] {
  const map = new Map<string, Country[]>();
  for (const c of list) {
    const label = countryLabel(c, locale);
    const letter = label.charAt(0).toUpperCase();
    const arr = map.get(letter) ?? [];
    arr.push(c);
    map.set(letter, arr);
  }
  return Array.from(map.entries())
    .sort(([a], [b]) => a.localeCompare(b, intlTagFor(locale)))
    .map(([letter, countries]) => ({
      letter,
      countries: countries.sort((a, b) =>
        countryLabel(a, locale).localeCompare(countryLabel(b, locale), intlTagFor(locale))
      ),
    }));
}
