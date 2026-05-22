// Localized URL segments for the SEO routes whose folder name is French.
// The route folder (canonical key) stays in French; the public URL segment is
// localized per visitor language — moomz.com/en/courses, /es/cursos, etc.
// middleware.ts maps the localized segment back to the canonical folder.

// canonical folder name → { locale: public URL segment }
export const ROUTE_NAMES: Record<string, Record<string, string>> = {
  formation: { fr: "formation", en: "courses", es: "cursos", it: "corsi", pt: "cursos", de: "kurse", ja: "courses", zh: "courses" },
  outils: { fr: "outils", en: "tools", es: "herramientas", it: "strumenti", pt: "ferramentas", de: "werkzeuge", ja: "tools", zh: "tools" },
  convertisseur: { fr: "convertisseur", en: "converter", es: "conversor", it: "convertitore", pt: "conversor", de: "rechner", ja: "converter", zh: "converter" },
  meteo: { fr: "meteo", en: "weather", es: "clima", it: "meteo", pt: "clima", de: "wetter", ja: "weather", zh: "weather" },
  heure: { fr: "heure", en: "time", es: "hora", it: "ora", pt: "hora", de: "zeit", ja: "time", zh: "time" },
  "jours-feries": { fr: "jours-feries", en: "holidays", es: "festivos", it: "festivita", pt: "feriados", de: "feiertage", ja: "holidays", zh: "holidays" },
  recettes: { fr: "recettes", en: "recipes", es: "recetas", it: "ricette", pt: "receitas", de: "rezepte", ja: "recipes", zh: "recipes" },
};

// Reverse: any localized segment → its canonical folder. All localized names
// are globally unique, so a flat map is safe.
export const SEGMENT_TO_CANONICAL: Record<string, string> = (() => {
  const m: Record<string, string> = {};
  for (const [canonical, byLocale] of Object.entries(ROUTE_NAMES)) {
    for (const seg of Object.values(byLocale)) m[seg] = canonical;
  }
  return m;
})();

// Public URL segment for (canonical folder, locale). Routes with no localized
// table (quiz, blog, …) pass through unchanged.
export function routeSeg(canonical: string, locale: string): string {
  return ROUTE_NAMES[canonical]?.[locale] ?? canonical;
}

// Every localized segment, flat — for RESERVED_USERNAMES.
export const ALL_LOCALIZED_SEGMENTS: string[] = Object.keys(SEGMENT_TO_CANONICAL);
