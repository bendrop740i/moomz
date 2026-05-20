// Static city + IANA timezone catalogue for the /heure world clock tool.
// No external API: everything is rendered with Intl.DateTimeFormat at the
// edge / in the browser. Coordinates are approximate (city centroids) and
// only used for sunrise/sunset hints.

export type TzCity = {
  slug: string;
  /** Display name in the page's primary language (FR for moomz). */
  name: string;
  /** Country name (FR). */
  country: string;
  /** ISO-3166 alpha-2 country code, lowercased. Used for flag emoji. */
  cc: string;
  /** IANA timezone identifier. */
  tz: string;
  /** Optional centroid coordinates. */
  lat?: number;
  lon?: number;
};

export const HEURE_CITIES: TzCity[] = [
  // France
  { slug: "paris", name: "Paris", country: "France", cc: "fr", tz: "Europe/Paris", lat: 48.8566, lon: 2.3522 },
  { slug: "lyon", name: "Lyon", country: "France", cc: "fr", tz: "Europe/Paris", lat: 45.764, lon: 4.8357 },
  { slug: "marseille", name: "Marseille", country: "France", cc: "fr", tz: "Europe/Paris", lat: 43.2965, lon: 5.3698 },
  { slug: "toulouse", name: "Toulouse", country: "France", cc: "fr", tz: "Europe/Paris", lat: 43.6047, lon: 1.4442 },
  { slug: "nice", name: "Nice", country: "France", cc: "fr", tz: "Europe/Paris", lat: 43.7102, lon: 7.262 },
  { slug: "nantes", name: "Nantes", country: "France", cc: "fr", tz: "Europe/Paris", lat: 47.2184, lon: -1.5536 },
  { slug: "bordeaux", name: "Bordeaux", country: "France", cc: "fr", tz: "Europe/Paris", lat: 44.8378, lon: -0.5792 },
  { slug: "lille", name: "Lille", country: "France", cc: "fr", tz: "Europe/Paris", lat: 50.6292, lon: 3.0573 },
  { slug: "strasbourg", name: "Strasbourg", country: "France", cc: "fr", tz: "Europe/Paris", lat: 48.5734, lon: 7.7521 },
  { slug: "montpellier", name: "Montpellier", country: "France", cc: "fr", tz: "Europe/Paris", lat: 43.6108, lon: 3.8767 },

  // UK + Ireland
  { slug: "london", name: "Londres", country: "Royaume-Uni", cc: "gb", tz: "Europe/London", lat: 51.5074, lon: -0.1278 },
  { slug: "manchester", name: "Manchester", country: "Royaume-Uni", cc: "gb", tz: "Europe/London", lat: 53.4808, lon: -2.2426 },
  { slug: "edinburgh", name: "Édimbourg", country: "Royaume-Uni", cc: "gb", tz: "Europe/London", lat: 55.9533, lon: -3.1883 },
  { slug: "dublin", name: "Dublin", country: "Irlande", cc: "ie", tz: "Europe/Dublin", lat: 53.3498, lon: -6.2603 },

  // North America (US)
  { slug: "new-york", name: "New York", country: "États-Unis", cc: "us", tz: "America/New_York", lat: 40.7128, lon: -74.006 },
  { slug: "los-angeles", name: "Los Angeles", country: "États-Unis", cc: "us", tz: "America/Los_Angeles", lat: 34.0522, lon: -118.2437 },
  { slug: "chicago", name: "Chicago", country: "États-Unis", cc: "us", tz: "America/Chicago", lat: 41.8781, lon: -87.6298 },
  { slug: "miami", name: "Miami", country: "États-Unis", cc: "us", tz: "America/New_York", lat: 25.7617, lon: -80.1918 },
  { slug: "san-francisco", name: "San Francisco", country: "États-Unis", cc: "us", tz: "America/Los_Angeles", lat: 37.7749, lon: -122.4194 },
  { slug: "washington-dc", name: "Washington DC", country: "États-Unis", cc: "us", tz: "America/New_York", lat: 38.9072, lon: -77.0369 },
  { slug: "las-vegas", name: "Las Vegas", country: "États-Unis", cc: "us", tz: "America/Los_Angeles", lat: 36.1699, lon: -115.1398 },

  // Canada
  { slug: "montreal", name: "Montréal", country: "Canada", cc: "ca", tz: "America/Toronto", lat: 45.5017, lon: -73.5673 },
  { slug: "toronto", name: "Toronto", country: "Canada", cc: "ca", tz: "America/Toronto", lat: 43.6532, lon: -79.3832 },
  { slug: "vancouver", name: "Vancouver", country: "Canada", cc: "ca", tz: "America/Vancouver", lat: 49.2827, lon: -123.1207 },

  // Asia
  { slug: "tokyo", name: "Tokyo", country: "Japon", cc: "jp", tz: "Asia/Tokyo", lat: 35.6762, lon: 139.6503 },
  { slug: "osaka", name: "Osaka", country: "Japon", cc: "jp", tz: "Asia/Tokyo", lat: 34.6937, lon: 135.5023 },
  { slug: "kyoto", name: "Kyoto", country: "Japon", cc: "jp", tz: "Asia/Tokyo", lat: 35.0116, lon: 135.7681 },
  { slug: "seoul", name: "Séoul", country: "Corée du Sud", cc: "kr", tz: "Asia/Seoul", lat: 37.5665, lon: 126.978 },
  { slug: "beijing", name: "Pékin", country: "Chine", cc: "cn", tz: "Asia/Shanghai", lat: 39.9042, lon: 116.4074 },
  { slug: "shanghai", name: "Shanghai", country: "Chine", cc: "cn", tz: "Asia/Shanghai", lat: 31.2304, lon: 121.4737 },
  { slug: "hong-kong", name: "Hong Kong", country: "Hong Kong", cc: "hk", tz: "Asia/Hong_Kong", lat: 22.3193, lon: 114.1694 },
  { slug: "singapore", name: "Singapour", country: "Singapour", cc: "sg", tz: "Asia/Singapore", lat: 1.3521, lon: 103.8198 },
  { slug: "bangkok", name: "Bangkok", country: "Thaïlande", cc: "th", tz: "Asia/Bangkok", lat: 13.7563, lon: 100.5018 },
  { slug: "mumbai", name: "Mumbai", country: "Inde", cc: "in", tz: "Asia/Kolkata", lat: 19.076, lon: 72.8777 },
  { slug: "delhi", name: "Delhi", country: "Inde", cc: "in", tz: "Asia/Kolkata", lat: 28.7041, lon: 77.1025 },
  { slug: "dubai", name: "Dubaï", country: "Émirats arabes unis", cc: "ae", tz: "Asia/Dubai", lat: 25.2048, lon: 55.2708 },

  // Europe (other)
  { slug: "madrid", name: "Madrid", country: "Espagne", cc: "es", tz: "Europe/Madrid", lat: 40.4168, lon: -3.7038 },
  { slug: "barcelona", name: "Barcelone", country: "Espagne", cc: "es", tz: "Europe/Madrid", lat: 41.3851, lon: 2.1734 },
  { slug: "lisbon", name: "Lisbonne", country: "Portugal", cc: "pt", tz: "Europe/Lisbon", lat: 38.7223, lon: -9.1393 },
  { slug: "rome", name: "Rome", country: "Italie", cc: "it", tz: "Europe/Rome", lat: 41.9028, lon: 12.4964 },
  { slug: "milan", name: "Milan", country: "Italie", cc: "it", tz: "Europe/Rome", lat: 45.4642, lon: 9.19 },
  { slug: "berlin", name: "Berlin", country: "Allemagne", cc: "de", tz: "Europe/Berlin", lat: 52.52, lon: 13.405 },
  { slug: "munich", name: "Munich", country: "Allemagne", cc: "de", tz: "Europe/Berlin", lat: 48.1351, lon: 11.582 },
  { slug: "amsterdam", name: "Amsterdam", country: "Pays-Bas", cc: "nl", tz: "Europe/Amsterdam", lat: 52.3676, lon: 4.9041 },
  { slug: "brussels", name: "Bruxelles", country: "Belgique", cc: "be", tz: "Europe/Brussels", lat: 50.8503, lon: 4.3517 },
  { slug: "zurich", name: "Zurich", country: "Suisse", cc: "ch", tz: "Europe/Zurich", lat: 47.3769, lon: 8.5417 },
  { slug: "vienna", name: "Vienne", country: "Autriche", cc: "at", tz: "Europe/Vienna", lat: 48.2082, lon: 16.3738 },

  // Oceania
  { slug: "sydney", name: "Sydney", country: "Australie", cc: "au", tz: "Australia/Sydney", lat: -33.8688, lon: 151.2093 },
  { slug: "melbourne", name: "Melbourne", country: "Australie", cc: "au", tz: "Australia/Sydney", lat: -37.8136, lon: 144.9631 },

  // South + Central America
  { slug: "sao-paulo", name: "São Paulo", country: "Brésil", cc: "br", tz: "America/Sao_Paulo", lat: -23.5505, lon: -46.6333 },
  { slug: "rio-de-janeiro", name: "Rio de Janeiro", country: "Brésil", cc: "br", tz: "America/Sao_Paulo", lat: -22.9068, lon: -43.1729 },
  { slug: "mexico-city", name: "Mexico", country: "Mexique", cc: "mx", tz: "America/Mexico_City", lat: 19.4326, lon: -99.1332 },
  { slug: "buenos-aires", name: "Buenos Aires", country: "Argentine", cc: "ar", tz: "America/Argentina/Buenos_Aires", lat: -34.6037, lon: -58.3816 },

  // Middle East + Africa
  { slug: "istanbul", name: "Istanbul", country: "Turquie", cc: "tr", tz: "Europe/Istanbul", lat: 41.0082, lon: 28.9784 },
  { slug: "cairo", name: "Le Caire", country: "Égypte", cc: "eg", tz: "Africa/Cairo", lat: 30.0444, lon: 31.2357 },
  { slug: "cape-town", name: "Le Cap", country: "Afrique du Sud", cc: "za", tz: "Africa/Johannesburg", lat: -33.9249, lon: 18.4241 },
];

export const HEURE_SLUGS: string[] = HEURE_CITIES.map((c) => c.slug);

const BY_SLUG: Map<string, TzCity> = new Map(
  HEURE_CITIES.map((c) => [c.slug, c]),
);

export function findCity(slug: string): TzCity | null {
  return BY_SLUG.get(slug) ?? null;
}

/** Continent grouping for the hub. Order matters for the rendered sections. */
export const HEURE_REGIONS: { id: string; label: string; emoji: string; slugs: string[] }[] = [
  {
    id: "europe-fr",
    label: "France",
    emoji: "🇫🇷",
    slugs: ["paris", "lyon", "marseille", "toulouse", "nice", "nantes", "bordeaux", "lille", "strasbourg", "montpellier"],
  },
  {
    id: "europe",
    label: "Europe",
    emoji: "🇪🇺",
    slugs: [
      "london", "manchester", "edinburgh", "dublin",
      "madrid", "barcelona", "lisbon", "rome", "milan",
      "berlin", "munich", "amsterdam", "brussels", "zurich", "vienna",
      "istanbul",
    ],
  },
  {
    id: "north-america",
    label: "Amérique du Nord",
    emoji: "🌎",
    slugs: [
      "new-york", "washington-dc", "miami", "chicago",
      "los-angeles", "san-francisco", "las-vegas",
      "montreal", "toronto", "vancouver",
    ],
  },
  {
    id: "asia",
    label: "Asie",
    emoji: "🌏",
    slugs: [
      "tokyo", "osaka", "kyoto",
      "seoul", "beijing", "shanghai", "hong-kong",
      "singapore", "bangkok", "mumbai", "delhi", "dubai",
    ],
  },
  {
    id: "oceania",
    label: "Océanie",
    emoji: "🦘",
    slugs: ["sydney", "melbourne"],
  },
  {
    id: "south-america",
    label: "Amérique du Sud / Centrale",
    emoji: "🌎",
    slugs: ["sao-paulo", "rio-de-janeiro", "mexico-city", "buenos-aires"],
  },
  {
    id: "africa",
    label: "Afrique",
    emoji: "🌍",
    slugs: ["cairo", "cape-town"],
  },
];

/**
 * Convert an ISO-3166 alpha-2 code into the flag emoji (regional indicator
 * symbols). Returns "🏳️" for unknown / malformed input.
 */
export function flagEmoji(cc: string): string {
  if (!cc || cc.length !== 2) return "🏳️";
  const codePoints = cc
    .toUpperCase()
    .split("")
    .map((c) => 127397 + c.charCodeAt(0));
  try {
    return String.fromCodePoint(...codePoints);
  } catch {
    return "🏳️";
  }
}

/**
 * Returns the current UTC offset (in minutes) for an IANA timezone at a given
 * instant. Uses Intl.DateTimeFormat to parse the offset string (e.g. "GMT+9").
 * Falls back to 0 if parsing fails (shouldn't happen for IANA names).
 */
export function tzOffsetMinutes(tz: string, at: Date = new Date()): number {
  try {
    const dtf = new Intl.DateTimeFormat("en-US", {
      timeZone: tz,
      timeZoneName: "shortOffset",
      hour: "2-digit",
    });
    const parts = dtf.formatToParts(at);
    const name = parts.find((p) => p.type === "timeZoneName")?.value ?? "";
    // Expected forms: "GMT+9", "GMT-05:30", "GMT" (== UTC).
    const m = name.match(/GMT([+-])(\d{1,2})(?::(\d{2}))?/);
    if (!m) return 0; // raw "GMT"
    const sign = m[1] === "-" ? -1 : 1;
    const hours = parseInt(m[2], 10);
    const minutes = m[3] ? parseInt(m[3], 10) : 0;
    return sign * (hours * 60 + minutes);
  } catch {
    return 0;
  }
}

/** "+09:00" / "-05:30" / "+00:00" */
export function formatOffset(minutes: number): string {
  const sign = minutes >= 0 ? "+" : "-";
  const abs = Math.abs(minutes);
  const h = Math.floor(abs / 60).toString().padStart(2, "0");
  const m = (abs % 60).toString().padStart(2, "0");
  return `${sign}${h}:${m}`;
}

/**
 * Compute a sunrise/sunset hint (in the city's local timezone) using the NOAA
 * sunrise-equation approximation. Returns "HH:MM" strings or null when the
 * city has no coordinates or the sun never rises/sets (polar cases).
 */
export function sunTimes(
  city: TzCity,
  at: Date = new Date(),
): { sunrise: string; sunset: string } | null {
  if (city.lat == null || city.lon == null) return null;
  const lat = city.lat;
  const lon = city.lon;

  // Day-of-year in UTC.
  const start = Date.UTC(at.getUTCFullYear(), 0, 0);
  const n = Math.floor((at.getTime() - start) / 86400000);

  const toRad = Math.PI / 180;
  const toDeg = 180 / Math.PI;

  // Julian cycle.
  const lngHour = lon / 15;
  const computeUTC = (rising: boolean): number | null => {
    const t = n + ((rising ? 6 : 18) - lngHour) / 24;
    // Mean anomaly.
    const M = 0.9856 * t - 3.289;
    // True longitude.
    let L =
      M +
      1.916 * Math.sin(M * toRad) +
      0.02 * Math.sin(2 * M * toRad) +
      282.634;
    L = ((L % 360) + 360) % 360;
    // Right ascension.
    let RA = toDeg * Math.atan(0.91764 * Math.tan(L * toRad));
    RA = ((RA % 360) + 360) % 360;
    const Lquadrant = Math.floor(L / 90) * 90;
    const RAquadrant = Math.floor(RA / 90) * 90;
    RA = RA + (Lquadrant - RAquadrant);
    RA = RA / 15;
    // Declination.
    const sinDec = 0.39782 * Math.sin(L * toRad);
    const cosDec = Math.cos(Math.asin(sinDec));
    // Local hour angle (zenith 90.833° for the official sunrise).
    const cosZenith = Math.cos(90.833 * toRad);
    const cosH = (cosZenith - sinDec * Math.sin(lat * toRad)) / (cosDec * Math.cos(lat * toRad));
    if (cosH > 1 || cosH < -1) return null;
    let H = rising
      ? 360 - toDeg * Math.acos(cosH)
      : toDeg * Math.acos(cosH);
    H = H / 15;
    const T = H + RA - 0.06571 * t - 6.622;
    let UT = T - lngHour;
    UT = ((UT % 24) + 24) % 24;
    return UT;
  };

  const sunriseUTC = computeUTC(true);
  const sunsetUTC = computeUTC(false);
  if (sunriseUTC == null || sunsetUTC == null) return null;

  const toHHMM = (utcHours: number): string => {
    const todayUTC = new Date(
      Date.UTC(at.getUTCFullYear(), at.getUTCMonth(), at.getUTCDate()),
    );
    const localMs = todayUTC.getTime() + utcHours * 3600 * 1000;
    const local = new Date(localMs);
    return new Intl.DateTimeFormat("en-GB", {
      timeZone: city.tz,
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(local);
  };

  return { sunrise: toHHMM(sunriseUTC), sunset: toHHMM(sunsetUTC) };
}

/** Find cities sharing the same IANA tz (excluding the source). */
export function relatedByTz(city: TzCity, limit = 6): TzCity[] {
  const same = HEURE_CITIES.filter((c) => c.tz === city.tz && c.slug !== city.slug);
  if (same.length >= limit) return same.slice(0, limit);
  // Pad with neighbouring offsets (±1h) at the time of the call.
  const target = tzOffsetMinutes(city.tz);
  const neighbours = HEURE_CITIES.filter(
    (c) =>
      c.slug !== city.slug &&
      c.tz !== city.tz &&
      Math.abs(tzOffsetMinutes(c.tz) - target) <= 60,
  );
  return [...same, ...neighbours].slice(0, limit);
}

/** Reference cities used in the "Décalage avec…" table. */
export const HEURE_REFERENCE_SLUGS = ["paris", "new-york", "london", "tokyo"];
