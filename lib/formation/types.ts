// Formation — short, genuinely useful self-improvement modules for 17-34 year
// olds. File-based content (lib/formation/data/<theme>.json), loaded at build.

export const FORMATION_THEMES = [
  "lookmaxxing",
  "fitness",
  "money",
  "productivite",
  "mindset",
  "social",
  "etudes",
  "digital",
  "style",
  "vie-pratique",
] as const;

export type FormationTheme = (typeof FORMATION_THEMES)[number];

export type FormationSection = { heading: string; body: string };

export type FormationItem = {
  slug: string;
  theme: FormationTheme;
  title: string;
  emoji: string;
  intro: string;
  sections: FormationSection[];
  steps: string[];
  faq?: { q: string; a: string }[];
  updatedAt: string;
};

export type ThemeMeta = {
  label: string;
  emoji: string;
  tagline: string;
};

export const THEME_META: Record<FormationTheme, ThemeMeta> = {
  lookmaxxing: {
    label: "Lookmaxxing & soin de soi",
    emoji: "💎",
    tagline: "Peau, cheveux, posture, hygiène — devenir la meilleure version de toi, sainement.",
  },
  fitness: {
    label: "Forme & perte de poids",
    emoji: "🏋️",
    tagline: "Sport, nutrition, sommeil — des habitudes durables, jamais extrêmes.",
  },
  money: {
    label: "Argent & revenus",
    emoji: "💸",
    tagline: "Budget, épargne, compétences qui rapportent, premiers revenus en ligne.",
  },
  productivite: {
    label: "Productivité",
    emoji: "⚡",
    tagline: "Gérer son temps, vaincre la procrastination, tenir ses objectifs.",
  },
  mindset: {
    label: "Confiance & mental",
    emoji: "🧠",
    tagline: "Estime de soi, gestion du stress, état d'esprit solide.",
  },
  social: {
    label: "Relations & social",
    emoji: "💬",
    tagline: "Communiquer, se faire des amis, charisme, dating sain.",
  },
  etudes: {
    label: "Études & carrière",
    emoji: "🎓",
    tagline: "Réussir ses études, choisir sa voie, CV, entretiens, premier job.",
  },
  digital: {
    label: "Compétences digitales",
    emoji: "💻",
    tagline: "Coder, utiliser l'IA, créer du contenu, personal branding.",
  },
  style: {
    label: "Style & image",
    emoji: "👕",
    tagline: "S'habiller bien, garde-robe, morphologie, soigner son image.",
  },
  "vie-pratique": {
    label: "Vie pratique & autonomie",
    emoji: "🏠",
    tagline: "Cuisine, logement, démarches, santé de base — bien démarrer sa vie d'adulte.",
  },
};
