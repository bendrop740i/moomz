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

// Display name of the /formation section per visitor language. The URL stays
// /formation; only the label changes ("Formation" is a French word — English
// speakers should see "Courses", etc.).
export const FORMATION_NAME: Record<string, string> = {
  fr: "Formation",
  en: "Courses",
  es: "Cursos",
  it: "Corsi",
  pt: "Cursos",
  de: "Kurse",
  ja: "コース",
  zh: "课程",
};

export type FormationSection = { heading: string; body: string };

export type FormationItem = {
  slug: string;
  theme: FormationTheme;
  /** Content language. Absent on legacy data → treated as "fr". */
  locale?: string;
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

// English theme labels — formation content exists in FR + EN; non-FR locales
// fall back to the English theme meta.
export const THEME_META_EN: Record<FormationTheme, ThemeMeta> = {
  lookmaxxing: {
    label: "Lookmaxxing & self-care",
    emoji: "💎",
    tagline: "Skin, hair, posture, hygiene — become your best self, the healthy way.",
  },
  fitness: {
    label: "Fitness & weight",
    emoji: "🏋️",
    tagline: "Training, nutrition, sleep — sustainable habits, never extreme.",
  },
  money: {
    label: "Money & income",
    emoji: "💸",
    tagline: "Budgeting, saving, skills that pay, your first online income.",
  },
  productivite: {
    label: "Productivity",
    emoji: "⚡",
    tagline: "Manage your time, beat procrastination, hit your goals.",
  },
  mindset: {
    label: "Confidence & mindset",
    emoji: "🧠",
    tagline: "Self-esteem, stress management, a solid mindset.",
  },
  social: {
    label: "Relationships & social",
    emoji: "💬",
    tagline: "Communicate, make friends, charisma, healthy dating.",
  },
  etudes: {
    label: "Studies & career",
    emoji: "🎓",
    tagline: "Ace your studies, pick your path, CV, interviews, first job.",
  },
  digital: {
    label: "Digital skills",
    emoji: "💻",
    tagline: "Coding, using AI, creating content, personal branding.",
  },
  style: {
    label: "Style & image",
    emoji: "👕",
    tagline: "Dress well, build a wardrobe, body type, polish your image.",
  },
  "vie-pratique": {
    label: "Practical life & autonomy",
    emoji: "🏠",
    tagline: "Cooking, housing, admin, basic health — start adult life right.",
  },
};

export const THEME_META_ES: Record<FormationTheme, ThemeMeta> = {
  lookmaxxing: { label: "Lookmaxxing y cuidado personal", emoji: "💎", tagline: "Piel, cabello, postura, higiene — conviértete en tu mejor versión, de forma sana." },
  fitness: { label: "Forma física y peso", emoji: "🏋️", tagline: "Entrenamiento, nutrición, sueño — hábitos sostenibles, nunca extremos." },
  money: { label: "Dinero e ingresos", emoji: "💸", tagline: "Presupuesto, ahorro, habilidades que pagan, tus primeros ingresos online." },
  productivite: { label: "Productividad", emoji: "⚡", tagline: "Gestiona tu tiempo, vence la procrastinación, cumple tus objetivos." },
  mindset: { label: "Confianza y mentalidad", emoji: "🧠", tagline: "Autoestima, gestión del estrés, una mentalidad sólida." },
  social: { label: "Relaciones y vida social", emoji: "💬", tagline: "Comunicar, hacer amigos, carisma, citas sanas." },
  etudes: { label: "Estudios y carrera", emoji: "🎓", tagline: "Triunfa en tus estudios, elige tu camino, CV, entrevistas, primer empleo." },
  digital: { label: "Habilidades digitales", emoji: "💻", tagline: "Programar, usar la IA, crear contenido, marca personal." },
  style: { label: "Estilo e imagen", emoji: "👕", tagline: "Vístete bien, crea un armario, tu morfología, cuida tu imagen." },
  "vie-pratique": { label: "Vida práctica y autonomía", emoji: "🏠", tagline: "Cocina, vivienda, trámites, salud básica — empieza bien tu vida adulta." },
};

export const THEME_META_IT: Record<FormationTheme, ThemeMeta> = {
  lookmaxxing: { label: "Lookmaxxing e cura di sé", emoji: "💎", tagline: "Pelle, capelli, postura, igiene — diventa la tua versione migliore, in modo sano." },
  fitness: { label: "Forma fisica e peso", emoji: "🏋️", tagline: "Allenamento, nutrizione, sonno — abitudini sostenibili, mai estreme." },
  money: { label: "Soldi e guadagni", emoji: "💸", tagline: "Budget, risparmio, competenze che pagano, i tuoi primi guadagni online." },
  productivite: { label: "Produttività", emoji: "⚡", tagline: "Gestisci il tempo, batti la procrastinazione, raggiungi i tuoi obiettivi." },
  mindset: { label: "Fiducia e mentalità", emoji: "🧠", tagline: "Autostima, gestione dello stress, una mentalità solida." },
  social: { label: "Relazioni e vita sociale", emoji: "💬", tagline: "Comunicare, fare amicizia, carisma, dating sano." },
  etudes: { label: "Studi e carriera", emoji: "🎓", tagline: "Riesci negli studi, scegli la tua strada, CV, colloqui, primo lavoro." },
  digital: { label: "Competenze digitali", emoji: "💻", tagline: "Programmare, usare l'IA, creare contenuti, personal branding." },
  style: { label: "Stile e immagine", emoji: "👕", tagline: "Vestirsi bene, costruire un guardaroba, la morfologia, curare l'immagine." },
  "vie-pratique": { label: "Vita pratica e autonomia", emoji: "🏠", tagline: "Cucina, casa, burocrazia, salute di base — inizia bene la vita adulta." },
};

export const THEME_META_PT: Record<FormationTheme, ThemeMeta> = {
  lookmaxxing: { label: "Lookmaxxing e autocuidado", emoji: "💎", tagline: "Pele, cabelo, postura, higiene — torne-se a sua melhor versão, de forma saudável." },
  fitness: { label: "Forma física e peso", emoji: "🏋️", tagline: "Treino, nutrição, sono — hábitos sustentáveis, nunca extremos." },
  money: { label: "Dinheiro e renda", emoji: "💸", tagline: "Orçamento, poupança, habilidades que pagam, sua primeira renda online." },
  productivite: { label: "Produtividade", emoji: "⚡", tagline: "Gerencie seu tempo, vença a procrastinação, alcance seus objetivos." },
  mindset: { label: "Confiança e mentalidade", emoji: "🧠", tagline: "Autoestima, gestão do estresse, uma mentalidade sólida." },
  social: { label: "Relações e vida social", emoji: "💬", tagline: "Comunicar, fazer amigos, carisma, encontros saudáveis." },
  etudes: { label: "Estudos e carreira", emoji: "🎓", tagline: "Tenha sucesso nos estudos, escolha o seu caminho, CV, entrevistas, primeiro emprego." },
  digital: { label: "Competências digitais", emoji: "💻", tagline: "Programar, usar IA, criar conteúdo, marca pessoal." },
  style: { label: "Estilo e imagem", emoji: "👕", tagline: "Vista-se bem, monte um guarda-roupa, seu tipo de corpo, cuide da sua imagem." },
  "vie-pratique": { label: "Vida prática e autonomia", emoji: "🏠", tagline: "Cozinha, moradia, burocracia, saúde básica — comece bem a vida adulta." },
};

export const THEME_META_DE: Record<FormationTheme, ThemeMeta> = {
  lookmaxxing: { label: "Lookmaxxing & Selbstpflege", emoji: "💎", tagline: "Haut, Haare, Haltung, Hygiene — werde deine beste Version, auf gesunde Weise." },
  fitness: { label: "Fitness & Gewicht", emoji: "🏋️", tagline: "Training, Ernährung, Schlaf — nachhaltige Gewohnheiten, nie extrem." },
  money: { label: "Geld & Einkommen", emoji: "💸", tagline: "Budget, Sparen, Skills die sich lohnen, dein erstes Online-Einkommen." },
  productivite: { label: "Produktivität", emoji: "⚡", tagline: "Verwalte deine Zeit, besiege die Prokrastination, erreiche deine Ziele." },
  mindset: { label: "Selbstvertrauen & Mindset", emoji: "🧠", tagline: "Selbstwert, Stressbewältigung, ein starkes Mindset." },
  social: { label: "Beziehungen & Soziales", emoji: "💬", tagline: "Kommunizieren, Freunde finden, Charisma, gesundes Dating." },
  etudes: { label: "Studium & Karriere", emoji: "🎓", tagline: "Im Studium glänzen, deinen Weg finden, Lebenslauf, Vorstellungsgespräche, erster Job." },
  digital: { label: "Digitale Skills", emoji: "💻", tagline: "Programmieren, KI nutzen, Content erstellen, Personal Branding." },
  style: { label: "Stil & Image", emoji: "👕", tagline: "Gut anziehen, Garderobe aufbauen, dein Körpertyp, dein Image pflegen." },
  "vie-pratique": { label: "Praktisches Leben & Selbstständigkeit", emoji: "🏠", tagline: "Kochen, Wohnen, Behördenkram, Basis-Gesundheit — starte gut ins Erwachsenenleben." },
};

export const THEME_META_JA: Record<FormationTheme, ThemeMeta> = {
  lookmaxxing: { label: "ルックスマキシング＆セルフケア", emoji: "💎", tagline: "肌・髪・姿勢・衛生 — 健康的に最高の自分になろう。" },
  fitness: { label: "フィットネス＆体重", emoji: "🏋️", tagline: "トレーニング・栄養・睡眠 — 無理のない、続く習慣。" },
  money: { label: "お金＆収入", emoji: "💸", tagline: "予算管理、貯金、稼げるスキル、初めてのオンライン収入。" },
  productivite: { label: "生産性", emoji: "⚡", tagline: "時間を管理し、先延ばしを克服し、目標を達成しよう。" },
  mindset: { label: "自信＆マインドセット", emoji: "🧠", tagline: "自己肯定感、ストレス管理、揺るがないマインドセット。" },
  social: { label: "人間関係＆ソーシャル", emoji: "💬", tagline: "コミュニケーション、友達づくり、カリスマ性、健全な恋愛。" },
  etudes: { label: "勉強＆キャリア", emoji: "🎓", tagline: "勉強で成功し、進路を選び、履歴書、面接、初めての仕事。" },
  digital: { label: "デジタルスキル", emoji: "💻", tagline: "コーディング、AI活用、コンテンツ制作、パーソナルブランディング。" },
  style: { label: "スタイル＆イメージ", emoji: "👕", tagline: "上手に着こなし、ワードローブを作り、体型を知り、印象を磨こう。" },
  "vie-pratique": { label: "実生活＆自立", emoji: "🏠", tagline: "料理、住まい、手続き、基本の健康 — 大人の生活を上手にスタート。" },
};

export const THEME_META_ZH: Record<FormationTheme, ThemeMeta> = {
  lookmaxxing: { label: "外貌管理与自我护理", emoji: "💎", tagline: "皮肤、头发、体态、卫生 — 用健康的方式成为更好的自己。" },
  fitness: { label: "健身与体重", emoji: "🏋️", tagline: "训练、营养、睡眠 — 可持续的习惯，绝不极端。" },
  money: { label: "金钱与收入", emoji: "💸", tagline: "预算、储蓄、能赚钱的技能、你的第一笔线上收入。" },
  productivite: { label: "效率提升", emoji: "⚡", tagline: "管理时间、战胜拖延、达成目标。" },
  mindset: { label: "自信与心态", emoji: "🧠", tagline: "自尊、压力管理、稳固的心态。" },
  social: { label: "人际关系与社交", emoji: "💬", tagline: "沟通、交朋友、魅力、健康的恋爱。" },
  etudes: { label: "学业与职业", emoji: "🎓", tagline: "学业出色、选择方向、简历、面试、第一份工作。" },
  digital: { label: "数字技能", emoji: "💻", tagline: "编程、使用AI、创作内容、个人品牌。" },
  style: { label: "风格与形象", emoji: "👕", tagline: "穿得好、打造衣橱、了解体型、提升形象。" },
  "vie-pratique": { label: "实用生活与独立", emoji: "🏠", tagline: "做饭、住房、手续、基础健康 — 顺利开启成年生活。" },
};

const THEME_META_BY_LOCALE: Record<string, Record<FormationTheme, ThemeMeta>> = {
  fr: THEME_META,
  en: THEME_META_EN,
  es: THEME_META_ES,
  it: THEME_META_IT,
  pt: THEME_META_PT,
  de: THEME_META_DE,
  ja: THEME_META_JA,
  zh: THEME_META_ZH,
};

/** Theme meta for a content locale; falls back to English for unknown locales. */
export function themeMetaFor(locale: string | undefined): Record<FormationTheme, ThemeMeta> {
  return THEME_META_BY_LOCALE[locale ?? "fr"] ?? THEME_META_EN;
}
