// Approximate country centroids (ISO-3166 alpha-2) for the home WorldVibes
// map. Curated to ~70 countries with meaningful global coverage — each row is
// a single dot, so we keep the list compact instead of trying to render every
// territory on Earth. Coordinates are roughly the populated center of each
// country (not the geographic centroid), so dots land on the eye rather than
// in the middle of the desert.

export type CountryPin = {
  cc: string; // ISO-3166 alpha-2, uppercase
  name: string;
  lat: number;
  lon: number;
};

export const COUNTRY_PINS: CountryPin[] = [
  // Europe
  { cc: "FR", name: "France", lat: 46.6, lon: 2.6 },
  { cc: "GB", name: "United Kingdom", lat: 53.0, lon: -2.0 },
  { cc: "IE", name: "Ireland", lat: 53.4, lon: -8.0 },
  { cc: "ES", name: "España", lat: 40.4, lon: -3.7 },
  { cc: "PT", name: "Portugal", lat: 39.5, lon: -8.0 },
  { cc: "IT", name: "Italia", lat: 42.5, lon: 12.5 },
  { cc: "DE", name: "Deutschland", lat: 51.0, lon: 10.3 },
  { cc: "NL", name: "Nederland", lat: 52.2, lon: 5.3 },
  { cc: "BE", name: "Belgique", lat: 50.6, lon: 4.6 },
  { cc: "CH", name: "Schweiz", lat: 46.8, lon: 8.2 },
  { cc: "AT", name: "Österreich", lat: 47.5, lon: 14.5 },
  { cc: "PL", name: "Polska", lat: 52.1, lon: 19.4 },
  { cc: "SE", name: "Sverige", lat: 60.0, lon: 16.0 },
  { cc: "NO", name: "Norge", lat: 61.0, lon: 9.0 },
  { cc: "FI", name: "Suomi", lat: 64.0, lon: 26.0 },
  { cc: "DK", name: "Danmark", lat: 56.0, lon: 10.0 },
  { cc: "CZ", name: "Česko", lat: 49.8, lon: 15.5 },
  { cc: "GR", name: "Ελλάδα", lat: 39.0, lon: 22.0 },
  { cc: "RO", name: "România", lat: 45.9, lon: 25.0 },
  { cc: "HU", name: "Magyarország", lat: 47.2, lon: 19.5 },
  { cc: "UA", name: "Україна", lat: 49.0, lon: 32.0 },
  { cc: "RU", name: "Россия", lat: 60.0, lon: 60.0 },
  { cc: "TR", name: "Türkiye", lat: 39.0, lon: 35.5 },

  // Middle East
  { cc: "IL", name: "Israel", lat: 31.5, lon: 35.0 },
  { cc: "SA", name: "العربية السعودية", lat: 24.0, lon: 45.0 },
  { cc: "AE", name: "الإمارات", lat: 24.5, lon: 54.5 },
  { cc: "IR", name: "ایران", lat: 32.0, lon: 53.5 },

  // Africa
  { cc: "MA", name: "Maroc", lat: 32.0, lon: -6.0 },
  { cc: "DZ", name: "Algérie", lat: 28.0, lon: 2.5 },
  { cc: "TN", name: "Tunisie", lat: 34.0, lon: 9.5 },
  { cc: "EG", name: "مصر", lat: 26.5, lon: 30.0 },
  { cc: "NG", name: "Nigeria", lat: 9.0, lon: 8.0 },
  { cc: "SN", name: "Sénégal", lat: 14.5, lon: -14.5 },
  { cc: "CI", name: "Côte d'Ivoire", lat: 7.5, lon: -5.5 },
  { cc: "KE", name: "Kenya", lat: -0.5, lon: 37.5 },
  { cc: "ZA", name: "South Africa", lat: -29.0, lon: 24.0 },
  { cc: "ET", name: "Ethiopia", lat: 9.0, lon: 39.0 },

  // Asia
  { cc: "IN", name: "भारत", lat: 22.0, lon: 79.0 },
  { cc: "PK", name: "Pakistan", lat: 30.5, lon: 69.0 },
  { cc: "BD", name: "Bangladesh", lat: 23.5, lon: 90.0 },
  { cc: "CN", name: "中国", lat: 35.0, lon: 105.0 },
  { cc: "JP", name: "日本", lat: 36.0, lon: 138.0 },
  { cc: "KR", name: "한국", lat: 36.5, lon: 127.5 },
  { cc: "TH", name: "ประเทศไทย", lat: 15.5, lon: 101.0 },
  { cc: "VN", name: "Việt Nam", lat: 16.0, lon: 107.5 },
  { cc: "PH", name: "Philippines", lat: 13.0, lon: 122.0 },
  { cc: "ID", name: "Indonesia", lat: -2.5, lon: 118.0 },
  { cc: "MY", name: "Malaysia", lat: 4.0, lon: 109.5 },
  { cc: "SG", name: "Singapore", lat: 1.4, lon: 103.8 },
  { cc: "HK", name: "Hong Kong", lat: 22.3, lon: 114.2 },
  { cc: "TW", name: "Taiwan", lat: 23.7, lon: 121.0 },

  // Oceania
  { cc: "AU", name: "Australia", lat: -25.5, lon: 134.0 },
  { cc: "NZ", name: "New Zealand", lat: -41.0, lon: 173.0 },

  // North America
  { cc: "US", name: "USA", lat: 39.0, lon: -98.0 },
  { cc: "CA", name: "Canada", lat: 56.0, lon: -106.0 },
  { cc: "MX", name: "México", lat: 23.5, lon: -102.0 },

  // Central America & Caribbean
  { cc: "CU", name: "Cuba", lat: 22.0, lon: -79.5 },
  { cc: "DO", name: "Rep. Dominicana", lat: 19.0, lon: -70.5 },
  { cc: "GT", name: "Guatemala", lat: 15.5, lon: -90.0 },
  { cc: "CR", name: "Costa Rica", lat: 9.7, lon: -84.0 },
  { cc: "PA", name: "Panamá", lat: 9.0, lon: -80.0 },

  // South America
  { cc: "BR", name: "Brasil", lat: -10.0, lon: -53.0 },
  { cc: "AR", name: "Argentina", lat: -34.0, lon: -64.0 },
  { cc: "CL", name: "Chile", lat: -35.0, lon: -71.0 },
  { cc: "CO", name: "Colombia", lat: 4.0, lon: -73.5 },
  { cc: "PE", name: "Perú", lat: -10.0, lon: -76.0 },
  { cc: "VE", name: "Venezuela", lat: 7.0, lon: -66.0 },
  { cc: "UY", name: "Uruguay", lat: -33.0, lon: -56.0 },
  { cc: "EC", name: "Ecuador", lat: -1.5, lon: -78.5 },
];

export const COUNTRY_PINS_BY_CC: Record<string, CountryPin> = Object.fromEntries(
  COUNTRY_PINS.map((p) => [p.cc, p]),
);
