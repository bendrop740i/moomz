// Inline i18n strings for the /recettes surface. Kept here (not in lib/i18n.ts)
// per task constraints — this surface is self-contained.

export type ToolLocale = "fr" | "en" | "es" | "it" | "pt" | "de" | "ja" | "zh";

export type ToolStrings = {
  // Hub
  hubTitle: string;
  hubIntro: string;
  hubSubline: string; // "{n} ingredients & categories"
  viewRecipes: string;

  // Shared
  poweredBy: string;
  viewOnMealDb: string;
  recipesFound: string; // "{n} recipes found"
  noRecipes: string;
  apiDown: string;
  backToHub: string;
  allRecipes: string;
  otherCategories: string;
  cooking: string; // "Cooking {name}" headline
  pollHeadline: string;
  pollBody: string;
  pollButton: string;
};

const fr: ToolStrings = {
  hubTitle: "Recettes",
  hubIntro: "Trouve une idée recette par ingrédient ou par catégorie. Gratuit, sans inscription.",
  hubSubline: "{n} ingrédients & catégories · mis à jour quotidiennement",
  viewRecipes: "Voir les recettes",
  poweredBy: "Propulsé par moomz",
  viewOnMealDb: "Voir sur TheMealDB",
  recipesFound: "{n} recettes trouvées",
  noRecipes: "Aucune recette trouvée pour le moment — reviens plus tard.",
  apiDown: "Service de recettes momentanément indisponible — réessaie dans quelques minutes.",
  backToHub: "← Toutes les recettes",
  allRecipes: "Toutes les recettes",
  otherCategories: "Autres catégories",
  cooking: "Cuisiner {name}",
  pollHeadline: "Lance un sondage là-dessus",
  pollBody: "Pose la question à ta communauté, vois la vibe en live.",
  pollButton: "Créer le sondage",
};

const en: ToolStrings = {
  hubTitle: "Recipes",
  hubIntro: "Find a recipe idea by ingredient or category. Free, no signup.",
  hubSubline: "{n} ingredients & categories · updated daily",
  viewRecipes: "View recipes",
  poweredBy: "Powered by moomz",
  viewOnMealDb: "View on TheMealDB",
  recipesFound: "{n} recipes found",
  noRecipes: "No recipes found right now — check back later.",
  apiDown: "Recipe service temporarily unavailable — try again in a few minutes.",
  backToHub: "← All recipes",
  allRecipes: "All recipes",
  otherCategories: "Other categories",
  cooking: "Cooking with {name}",
  pollHeadline: "Run a poll about it",
  pollBody: "Ask your community, watch the vibe live.",
  pollButton: "Create the poll",
};

const es: ToolStrings = {
  hubTitle: "Recetas",
  hubIntro: "Encuentra una idea de receta por ingrediente o categoría. Gratis, sin registro.",
  hubSubline: "{n} ingredientes y categorías · actualizado a diario",
  viewRecipes: "Ver recetas",
  poweredBy: "Impulsado por moomz",
  viewOnMealDb: "Ver en TheMealDB",
  recipesFound: "{n} recetas encontradas",
  noRecipes: "Ninguna receta disponible por ahora — vuelve más tarde.",
  apiDown: "Servicio de recetas no disponible — inténtalo de nuevo en unos minutos.",
  backToHub: "← Todas las recetas",
  allRecipes: "Todas las recetas",
  otherCategories: "Otras categorías",
  cooking: "Cocinar con {name}",
  pollHeadline: "Lanza una encuesta",
  pollBody: "Pregunta a tu comunidad, mira el vibe en vivo.",
  pollButton: "Crear la encuesta",
};

const it: ToolStrings = {
  hubTitle: "Ricette",
  hubIntro: "Trova un'idea di ricetta per ingrediente o categoria. Gratis, senza registrazione.",
  hubSubline: "{n} ingredienti e categorie · aggiornato ogni giorno",
  viewRecipes: "Vedi ricette",
  poweredBy: "Powered by moomz",
  viewOnMealDb: "Vedi su TheMealDB",
  recipesFound: "{n} ricette trovate",
  noRecipes: "Nessuna ricetta disponibile per ora — riprova più tardi.",
  apiDown: "Servizio ricette temporaneamente non disponibile — riprova tra qualche minuto.",
  backToHub: "← Tutte le ricette",
  allRecipes: "Tutte le ricette",
  otherCategories: "Altre categorie",
  cooking: "Cucinare con {name}",
  pollHeadline: "Lancia un sondaggio",
  pollBody: "Chiedi alla tua community, guarda la vibe in diretta.",
  pollButton: "Crea il sondaggio",
};

const pt: ToolStrings = {
  hubTitle: "Receitas",
  hubIntro: "Encontre uma ideia de receita por ingrediente ou categoria. Grátis, sem registro.",
  hubSubline: "{n} ingredientes e categorias · atualizado diariamente",
  viewRecipes: "Ver receitas",
  poweredBy: "Powered by moomz",
  viewOnMealDb: "Ver no TheMealDB",
  recipesFound: "{n} receitas encontradas",
  noRecipes: "Nenhuma receita disponível por enquanto — volte mais tarde.",
  apiDown: "Serviço de receitas indisponível — tente novamente em alguns minutos.",
  backToHub: "← Todas as receitas",
  allRecipes: "Todas as receitas",
  otherCategories: "Outras categorias",
  cooking: "Cozinhar com {name}",
  pollHeadline: "Lance uma enquete sobre isso",
  pollBody: "Pergunte à sua comunidade, veja a vibe ao vivo.",
  pollButton: "Criar a enquete",
};

const de: ToolStrings = {
  hubTitle: "Rezepte",
  hubIntro: "Finde eine Rezeptidee nach Zutat oder Kategorie. Kostenlos, ohne Anmeldung.",
  hubSubline: "{n} Zutaten & Kategorien · täglich aktualisiert",
  viewRecipes: "Rezepte ansehen",
  poweredBy: "Powered by moomz",
  viewOnMealDb: "Auf TheMealDB ansehen",
  recipesFound: "{n} Rezepte gefunden",
  noRecipes: "Aktuell keine Rezepte verfügbar — schau später wieder vorbei.",
  apiDown: "Rezeptdienst vorübergehend nicht verfügbar — bitte später erneut versuchen.",
  backToHub: "← Alle Rezepte",
  allRecipes: "Alle Rezepte",
  otherCategories: "Andere Kategorien",
  cooking: "Kochen mit {name}",
  pollHeadline: "Starte eine Umfrage",
  pollBody: "Frag deine Community, sieh die Vibes live.",
  pollButton: "Umfrage erstellen",
};

const ja: ToolStrings = {
  hubTitle: "レシピ",
  hubIntro: "食材やカテゴリーからレシピのアイデアを見つけよう。無料・登録不要。",
  hubSubline: "{n}個の食材とカテゴリー · 毎日更新",
  viewRecipes: "レシピを見る",
  poweredBy: "moomz提供",
  viewOnMealDb: "TheMealDBで見る",
  recipesFound: "{n}件のレシピが見つかりました",
  noRecipes: "現在レシピは見つかりません — 後でもう一度確認してください。",
  apiDown: "レシピサービスが一時的に利用できません — 数分後に再度お試しください。",
  backToHub: "← すべてのレシピ",
  allRecipes: "すべてのレシピ",
  otherCategories: "その他のカテゴリー",
  cooking: "{name}を使った料理",
  pollHeadline: "このテーマでアンケートを実施",
  pollBody: "コミュニティに質問して、リアルタイムでvibeを確認。",
  pollButton: "アンケートを作成",
};

const zh: ToolStrings = {
  hubTitle: "食谱",
  hubIntro: "按食材或类别查找食谱灵感。免费，无需注册。",
  hubSubline: "{n}个食材和类别 · 每日更新",
  viewRecipes: "查看食谱",
  poweredBy: "moomz提供",
  viewOnMealDb: "在TheMealDB查看",
  recipesFound: "找到{n}个食谱",
  noRecipes: "目前没有可用的食谱 — 稍后再试。",
  apiDown: "食谱服务暂时不可用 — 请几分钟后重试。",
  backToHub: "← 所有食谱",
  allRecipes: "所有食谱",
  otherCategories: "其他类别",
  cooking: "用{name}做菜",
  pollHeadline: "发起一个相关投票",
  pollBody: "向你的社区提问，实时查看反响。",
  pollButton: "创建投票",
};

export const STRINGS: Record<ToolLocale, ToolStrings> = {
  fr, en, es, it, pt, de, ja, zh,
};

export function pickString(locale: string | undefined): ToolStrings {
  const l = (locale ?? "fr") as ToolLocale;
  return STRINGS[l] ?? STRINGS.fr;
}

/** Pick the display name in the right language for a category. */
export function localizedName(
  cat: { name_fr: string; name_en: string },
  locale: ToolLocale,
): string {
  // FR-leaning Romance languages get the FR name; others fall back to EN.
  if (locale === "fr") return cat.name_fr;
  return cat.name_en;
}

/** Pick the intro paragraph in the right language. */
export function localizedIntro(
  cat: { intro_fr: string; intro_en: string },
  locale: ToolLocale,
): string {
  if (locale === "fr") return cat.intro_fr;
  return cat.intro_en;
}

/** Pick the poll question + options in the right language. */
export function localizedPoll(
  cat: {
    pollQuestion_fr: string;
    pollQuestion_en: string;
    pollOptions_fr: string[];
    pollOptions_en: string[];
  },
  locale: ToolLocale,
): { question: string; options: string[] } {
  if (locale === "fr") {
    return { question: cat.pollQuestion_fr, options: cat.pollOptions_fr };
  }
  return { question: cat.pollQuestion_en, options: cat.pollOptions_en };
}
