// Pre-baked city catalogue for the /meteo tool.
// 50 well-known cities — no live geocoding so the hub is instant.

export type City = {
  slug: string;
  name: string;
  country: string;
  cc: string; // ISO-2 country code
  lat: number;
  lon: number;
  tz: string; // IANA timezone
  region: "Europe" | "Asia" | "Americas" | "Oceania" | "Africa";
};

export const METEO_CITIES: City[] = [
  // France
  { slug: "paris",        name: "Paris",        country: "France",         cc: "FR", lat: 48.8566, lon: 2.3522,   tz: "Europe/Paris",   region: "Europe" },
  { slug: "lyon",         name: "Lyon",         country: "France",         cc: "FR", lat: 45.7640, lon: 4.8357,   tz: "Europe/Paris",   region: "Europe" },
  { slug: "marseille",    name: "Marseille",    country: "France",         cc: "FR", lat: 43.2965, lon: 5.3698,   tz: "Europe/Paris",   region: "Europe" },
  { slug: "toulouse",     name: "Toulouse",     country: "France",         cc: "FR", lat: 43.6047, lon: 1.4442,   tz: "Europe/Paris",   region: "Europe" },
  { slug: "nice",         name: "Nice",         country: "France",         cc: "FR", lat: 43.7102, lon: 7.2620,   tz: "Europe/Paris",   region: "Europe" },
  { slug: "nantes",       name: "Nantes",       country: "France",         cc: "FR", lat: 47.2184, lon: -1.5536,  tz: "Europe/Paris",   region: "Europe" },
  { slug: "bordeaux",     name: "Bordeaux",     country: "France",         cc: "FR", lat: 44.8378, lon: -0.5792,  tz: "Europe/Paris",   region: "Europe" },
  { slug: "lille",        name: "Lille",        country: "France",         cc: "FR", lat: 50.6292, lon: 3.0573,   tz: "Europe/Paris",   region: "Europe" },
  { slug: "strasbourg",   name: "Strasbourg",   country: "France",         cc: "FR", lat: 48.5734, lon: 7.7521,   tz: "Europe/Paris",   region: "Europe" },
  { slug: "montpellier",  name: "Montpellier",  country: "France",         cc: "FR", lat: 43.6109, lon: 3.8772,   tz: "Europe/Paris",   region: "Europe" },

  // UK / Ireland
  { slug: "london",       name: "London",       country: "United Kingdom", cc: "GB", lat: 51.5074, lon: -0.1278,  tz: "Europe/London",  region: "Europe" },
  { slug: "manchester",   name: "Manchester",   country: "United Kingdom", cc: "GB", lat: 53.4808, lon: -2.2426,  tz: "Europe/London",  region: "Europe" },
  { slug: "edinburgh",    name: "Edinburgh",    country: "United Kingdom", cc: "GB", lat: 55.9533, lon: -3.1883,  tz: "Europe/London",  region: "Europe" },
  { slug: "dublin",       name: "Dublin",       country: "Ireland",        cc: "IE", lat: 53.3498, lon: -6.2603,  tz: "Europe/Dublin",  region: "Europe" },

  // USA
  { slug: "new-york",      name: "New York",      country: "United States", cc: "US", lat: 40.7128, lon: -74.0060,  tz: "America/New_York",    region: "Americas" },
  { slug: "los-angeles",   name: "Los Angeles",   country: "United States", cc: "US", lat: 34.0522, lon: -118.2437, tz: "America/Los_Angeles", region: "Americas" },
  { slug: "chicago",       name: "Chicago",       country: "United States", cc: "US", lat: 41.8781, lon: -87.6298,  tz: "America/Chicago",     region: "Americas" },
  { slug: "miami",         name: "Miami",         country: "United States", cc: "US", lat: 25.7617, lon: -80.1918,  tz: "America/New_York",    region: "Americas" },
  { slug: "san-francisco", name: "San Francisco", country: "United States", cc: "US", lat: 37.7749, lon: -122.4194, tz: "America/Los_Angeles", region: "Americas" },
  { slug: "washington-dc", name: "Washington DC", country: "United States", cc: "US", lat: 38.9072, lon: -77.0369,  tz: "America/New_York",    region: "Americas" },
  { slug: "las-vegas",     name: "Las Vegas",     country: "United States", cc: "US", lat: 36.1699, lon: -115.1398, tz: "America/Los_Angeles", region: "Americas" },

  // Canada
  { slug: "montreal",  name: "Montréal",  country: "Canada", cc: "CA", lat: 45.5017, lon: -73.5673,  tz: "America/Toronto",   region: "Americas" },
  { slug: "toronto",   name: "Toronto",   country: "Canada", cc: "CA", lat: 43.6532, lon: -79.3832,  tz: "America/Toronto",   region: "Americas" },
  { slug: "vancouver", name: "Vancouver", country: "Canada", cc: "CA", lat: 49.2827, lon: -123.1207, tz: "America/Vancouver", region: "Americas" },

  // Asia
  { slug: "tokyo",     name: "Tokyo",     country: "Japan",         cc: "JP", lat: 35.6762, lon: 139.6503, tz: "Asia/Tokyo",      region: "Asia" },
  { slug: "osaka",     name: "Osaka",     country: "Japan",         cc: "JP", lat: 34.6937, lon: 135.5023, tz: "Asia/Tokyo",      region: "Asia" },
  { slug: "kyoto",     name: "Kyoto",     country: "Japan",         cc: "JP", lat: 35.0116, lon: 135.7681, tz: "Asia/Tokyo",      region: "Asia" },
  { slug: "seoul",     name: "Seoul",     country: "South Korea",   cc: "KR", lat: 37.5665, lon: 126.9780, tz: "Asia/Seoul",      region: "Asia" },
  { slug: "beijing",   name: "Beijing",   country: "China",         cc: "CN", lat: 39.9042, lon: 116.4074, tz: "Asia/Shanghai",   region: "Asia" },
  { slug: "shanghai",  name: "Shanghai",  country: "China",         cc: "CN", lat: 31.2304, lon: 121.4737, tz: "Asia/Shanghai",   region: "Asia" },
  { slug: "hong-kong", name: "Hong Kong", country: "Hong Kong",     cc: "HK", lat: 22.3193, lon: 114.1694, tz: "Asia/Hong_Kong",  region: "Asia" },
  { slug: "singapore", name: "Singapore", country: "Singapore",     cc: "SG", lat: 1.3521,  lon: 103.8198, tz: "Asia/Singapore",  region: "Asia" },
  { slug: "bangkok",   name: "Bangkok",   country: "Thailand",      cc: "TH", lat: 13.7563, lon: 100.5018, tz: "Asia/Bangkok",    region: "Asia" },
  { slug: "mumbai",    name: "Mumbai",    country: "India",         cc: "IN", lat: 19.0760, lon: 72.8777,  tz: "Asia/Kolkata",    region: "Asia" },
  { slug: "delhi",     name: "Delhi",     country: "India",         cc: "IN", lat: 28.7041, lon: 77.1025,  tz: "Asia/Kolkata",    region: "Asia" },
  { slug: "dubai",     name: "Dubai",     country: "United Arab Emirates", cc: "AE", lat: 25.2048, lon: 55.2708, tz: "Asia/Dubai", region: "Asia" },

  // Europe (rest)
  { slug: "madrid",    name: "Madrid",    country: "Spain",       cc: "ES", lat: 40.4168, lon: -3.7038, tz: "Europe/Madrid",    region: "Europe" },
  { slug: "barcelona", name: "Barcelona", country: "Spain",       cc: "ES", lat: 41.3851, lon: 2.1734,  tz: "Europe/Madrid",    region: "Europe" },
  { slug: "lisbon",    name: "Lisbon",    country: "Portugal",    cc: "PT", lat: 38.7223, lon: -9.1393, tz: "Europe/Lisbon",    region: "Europe" },
  { slug: "rome",      name: "Rome",      country: "Italy",       cc: "IT", lat: 41.9028, lon: 12.4964, tz: "Europe/Rome",      region: "Europe" },
  { slug: "milan",     name: "Milan",     country: "Italy",       cc: "IT", lat: 45.4642, lon: 9.1900,  tz: "Europe/Rome",      region: "Europe" },
  { slug: "berlin",    name: "Berlin",    country: "Germany",     cc: "DE", lat: 52.5200, lon: 13.4050, tz: "Europe/Berlin",    region: "Europe" },
  { slug: "munich",    name: "Munich",    country: "Germany",     cc: "DE", lat: 48.1351, lon: 11.5820, tz: "Europe/Berlin",    region: "Europe" },
  { slug: "amsterdam", name: "Amsterdam", country: "Netherlands", cc: "NL", lat: 52.3676, lon: 4.9041,  tz: "Europe/Amsterdam", region: "Europe" },
  { slug: "brussels",  name: "Brussels",  country: "Belgium",     cc: "BE", lat: 50.8503, lon: 4.3517,  tz: "Europe/Brussels",  region: "Europe" },
  { slug: "zurich",    name: "Zurich",    country: "Switzerland", cc: "CH", lat: 47.3769, lon: 8.5417,  tz: "Europe/Zurich",    region: "Europe" },
  { slug: "vienna",    name: "Vienna",    country: "Austria",     cc: "AT", lat: 48.2082, lon: 16.3738, tz: "Europe/Vienna",    region: "Europe" },

  // Oceania
  { slug: "sydney",    name: "Sydney",    country: "Australia", cc: "AU", lat: -33.8688, lon: 151.2093, tz: "Australia/Sydney",    region: "Oceania" },
  { slug: "melbourne", name: "Melbourne", country: "Australia", cc: "AU", lat: -37.8136, lon: 144.9631, tz: "Australia/Melbourne", region: "Oceania" },

  // Latin America
  { slug: "sao-paulo",     name: "São Paulo",     country: "Brazil",    cc: "BR", lat: -23.5505, lon: -46.6333, tz: "America/Sao_Paulo",        region: "Americas" },
  { slug: "rio-de-janeiro", name: "Rio de Janeiro", country: "Brazil",  cc: "BR", lat: -22.9068, lon: -43.1729, tz: "America/Sao_Paulo",        region: "Americas" },
  { slug: "mexico-city",   name: "Mexico City",   country: "Mexico",    cc: "MX", lat: 19.4326,  lon: -99.1332, tz: "America/Mexico_City",      region: "Americas" },
  { slug: "buenos-aires",  name: "Buenos Aires",  country: "Argentina", cc: "AR", lat: -34.6037, lon: -58.3816, tz: "America/Argentina/Buenos_Aires", region: "Americas" },

  // Africa / Middle East
  { slug: "istanbul",  name: "Istanbul",  country: "Turkey",       cc: "TR", lat: 41.0082, lon: 28.9784, tz: "Europe/Istanbul",   region: "Europe" },
  { slug: "cairo",     name: "Cairo",     country: "Egypt",        cc: "EG", lat: 30.0444, lon: 31.2357, tz: "Africa/Cairo",      region: "Africa" },
  { slug: "cape-town", name: "Cape Town", country: "South Africa", cc: "ZA", lat: -33.9249, lon: 18.4241, tz: "Africa/Johannesburg", region: "Africa" },
];

export const METEO_SLUGS: string[] = METEO_CITIES.map((c) => c.slug);

const CITY_INDEX: Map<string, City> = new Map(
  METEO_CITIES.map((c) => [c.slug, c]),
);

export function findCity(slug: string): City | null {
  return CITY_INDEX.get(slug) ?? null;
}

// ISO-2 → flag emoji (regional indicator symbols).
export function flagOf(cc: string): string {
  if (cc.length !== 2) return "🏳️";
  const base = 0x1f1e6;
  const upper = cc.toUpperCase();
  const a = upper.charCodeAt(0) - 65;
  const b = upper.charCodeAt(1) - 65;
  if (a < 0 || a > 25 || b < 0 || b > 25) return "🏳️";
  return String.fromCodePoint(base + a) + String.fromCodePoint(base + b);
}

// Open-Meteo weather code → emoji + multi-lang description.
// Codes follow WMO 4677 mapping used by Open-Meteo.
export type WxKind =
  | "clear"
  | "partly"
  | "fog"
  | "rain"
  | "snow"
  | "showers"
  | "thunder";

export function wxKind(code: number): WxKind {
  if (code === 0) return "clear";
  if (code >= 1 && code <= 3) return "partly";
  if (code === 45 || code === 48) return "fog";
  if (code >= 51 && code <= 67) return "rain";
  if (code >= 71 && code <= 77) return "snow";
  if (code >= 80 && code <= 86) return "showers";
  if (code >= 95 && code <= 99) return "thunder";
  return "partly";
}

export const WX_EMOJI: Record<WxKind, string> = {
  clear: "☀️",
  partly: "🌤️",
  fog: "🌫️",
  rain: "🌧️",
  snow: "❄️",
  showers: "🌦️",
  thunder: "⛈️",
};

export function wxEmoji(code: number): string {
  return WX_EMOJI[wxKind(code)];
}

// Sibling-city picker — 3 from same country if possible, fill with cross-region neighbors.
export function relatedCities(city: City, count = 6): City[] {
  const sameCountry = METEO_CITIES.filter(
    (c) => c.slug !== city.slug && c.cc === city.cc,
  );
  const sameRegion = METEO_CITIES.filter(
    (c) =>
      c.slug !== city.slug &&
      c.cc !== city.cc &&
      c.region === city.region,
  );
  const others = METEO_CITIES.filter(
    (c) => c.slug !== city.slug && c.region !== city.region,
  );

  const seed = city.slug
    .split("")
    .reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  const shuffle = <T,>(arr: T[]): T[] => {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = (seed * (i + 7)) % (i + 1);
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  const pool = [
    ...shuffle(sameCountry).slice(0, 3),
    ...shuffle(sameRegion).slice(0, 4),
    ...shuffle(others).slice(0, 4),
  ];
  const seen = new Set<string>();
  const out: City[] = [];
  for (const c of pool) {
    if (seen.has(c.slug)) continue;
    seen.add(c.slug);
    out.push(c);
    if (out.length >= count) break;
  }
  return out;
}
