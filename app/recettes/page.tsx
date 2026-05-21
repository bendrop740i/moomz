import type { Metadata } from "next";
import Link from "next/link";
import { RECIPE_CATEGORIES, RECETTES_SLUGS } from "@/lib/tools/recettes";
import { getLocale } from "@/lib/i18n-server";
import { localizedName, pickString, type ToolLocale } from "./_strings";

export const dynamic = "force-dynamic";
export const revalidate = 86400;

const RECETTES_HUB_META: Record<ToolLocale, { title: string; description: string; ogTitle: string; ogDesc: string }> = {
  fr: {
    title: "Recettes — idées par ingrédient et catégorie · moomz",
    description: "Trouve une recette par ingrédient (poulet, bœuf, saumon, riz, pâtes…) ou par catégorie (fruits de mer, végétarien, dessert, petit-déj). 20 catégories, gratuit, sans inscription.",
    ogTitle: "Recettes — moomz",
    ogDesc: "Idées recettes par ingrédient et par catégorie. Poulet, bœuf, saumon, végétarien, dessert et plus.",
  },
  en: {
    title: "Recipes — ideas by ingredient and category · moomz",
    description: "Find a recipe by ingredient (chicken, beef, salmon, rice, pasta…) or by category (seafood, vegetarian, dessert, breakfast). 20 categories, free, no signup.",
    ogTitle: "Recipes — moomz",
    ogDesc: "Recipe ideas by ingredient and category. Chicken, beef, salmon, vegetarian, dessert and more.",
  },
  es: {
    title: "Recetas — ideas por ingrediente y categoría · moomz",
    description: "Encuentra una receta por ingrediente (pollo, ternera, salmón, arroz, pasta…) o por categoría (mariscos, vegetariano, postre, desayuno). 20 categorías, gratis, sin registro.",
    ogTitle: "Recetas — moomz",
    ogDesc: "Ideas de recetas por ingrediente y categoría. Pollo, ternera, salmón, vegetariano, postre y más.",
  },
  it: {
    title: "Ricette — idee per ingrediente e categoria · moomz",
    description: "Trova una ricetta per ingrediente (pollo, manzo, salmone, riso, pasta…) o per categoria (frutti di mare, vegetariano, dessert, colazione). 20 categorie, gratis, senza registrazione.",
    ogTitle: "Ricette — moomz",
    ogDesc: "Idee di ricette per ingrediente e categoria. Pollo, manzo, salmone, vegetariano, dessert e altro.",
  },
  pt: {
    title: "Receitas — ideias por ingrediente e categoria · moomz",
    description: "Encontre uma receita por ingrediente (frango, carne, salmão, arroz, massa…) ou por categoria (frutos do mar, vegetariano, sobremesa, café da manhã). 20 categorias, grátis, sem cadastro.",
    ogTitle: "Receitas — moomz",
    ogDesc: "Ideias de receitas por ingrediente e categoria. Frango, carne, salmão, vegetariano, sobremesa e mais.",
  },
  de: {
    title: "Rezepte — Ideen nach Zutat und Kategorie · moomz",
    description: "Finde ein Rezept nach Zutat (Hähnchen, Rind, Lachs, Reis, Nudeln…) oder Kategorie (Meeresfrüchte, vegetarisch, Dessert, Frühstück). 20 Kategorien, kostenlos, ohne Anmeldung.",
    ogTitle: "Rezepte — moomz",
    ogDesc: "Rezeptideen nach Zutat und Kategorie. Hähnchen, Rind, Lachs, vegetarisch, Dessert und mehr.",
  },
  ja: {
    title: "レシピ — 食材とカテゴリーから探す · moomz",
    description: "食材（鶏肉、牛肉、サーモン、米、パスタ…）またはカテゴリー（シーフード、ベジタリアン、デザート、朝食）でレシピを検索。20カテゴリー、無料・登録不要。",
    ogTitle: "レシピ — moomz",
    ogDesc: "食材とカテゴリーからレシピのアイデア。鶏肉、牛肉、サーモン、ベジタリアン、デザートなど。",
  },
  zh: {
    title: "食谱 — 按食材和类别查找 · moomz",
    description: "按食材（鸡肉、牛肉、三文鱼、大米、意面…）或类别（海鲜、素食、甜点、早餐）查找食谱。20个类别，免费，无需注册。",
    ogTitle: "食谱 — moomz",
    ogDesc: "按食材和类别查找食谱灵感。鸡肉、牛肉、三文鱼、素食、甜点等。",
  },
};

export function generateMetadata(): Metadata {
  const locale = (getLocale() as ToolLocale) ?? "fr";
  const m = RECETTES_HUB_META[locale] ?? RECETTES_HUB_META.en;
  return {
    title: m.title,
    description: m.description,
    alternates: { canonical: "https://moomz.com/recettes" },
    openGraph: {
      title: m.ogTitle,
      description: m.ogDesc,
      type: "website",
      url: "https://moomz.com/recettes",
    },
    twitter: { card: "summary_large_image" },
  };
}

export default function RecettesHub() {
  const locale = (getLocale() as ToolLocale) ?? "fr";
  const S = pickString(locale);

  const ingredients = RECIPE_CATEGORIES.filter((c) => c.apiType === "ingredient");
  const categories = RECIPE_CATEGORIES.filter((c) => c.apiType === "category");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: S.hubTitle,
    description: S.hubIntro,
    url: "https://moomz.com/recettes",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: RECETTES_SLUGS.length,
      itemListElement: RECIPE_CATEGORIES.map((cat, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: localizedName(cat, locale),
        url: `https://moomz.com/recettes/${cat.slug}`,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="space-y-8 fade-up">
        <header className="text-center space-y-2">
          <h1 className="font-display text-4xl sm:text-5xl tracking-tight bg-gradient-to-br from-white via-pink-200 to-pink-400 bg-clip-text text-transparent">
            {S.hubTitle}
          </h1>
          <p className="text-white/65 text-base sm:text-lg max-w-md mx-auto text-balance">
            {S.hubIntro}
          </p>
          <p className="text-white/40 text-sm">
            {S.hubSubline.replace("{n}", String(RECETTES_SLUGS.length))}
          </p>
        </header>

        <section aria-labelledby="ingredients-section" className="space-y-3">
          <h2 id="ingredients-section" className="text-lg font-bold tracking-tight">
            🥕 {S.byIngredient}{" "}
            <span className="text-xs text-white/40 font-normal">({ingredients.length})</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {ingredients.map((cat) => (
              <Link
                key={cat.slug}
                href={`/recettes/${cat.slug}`}
                className="glass rounded-2xl p-4 hover:scale-[1.01] active:scale-[0.99] transition group flex flex-col gap-1"
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl shrink-0" aria-hidden>
                    {cat.emoji}
                  </span>
                  <span className="font-bold text-sm sm:text-base truncate">
                    {localizedName(cat, locale)}
                  </span>
                </div>
                <span className="text-xs text-white/45 group-hover:text-white/70 transition">
                  {S.viewRecipes} →
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section aria-labelledby="categories-section" className="space-y-3">
          <h2 id="categories-section" className="text-lg font-bold tracking-tight">
            🍽️ {S.byCategory}{" "}
            <span className="text-xs text-white/40 font-normal">({categories.length})</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/recettes/${cat.slug}`}
                className="glass rounded-2xl p-4 hover:scale-[1.01] active:scale-[0.99] transition group flex flex-col gap-1"
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl shrink-0" aria-hidden>
                    {cat.emoji}
                  </span>
                  <span className="font-bold text-sm sm:text-base truncate">
                    {localizedName(cat, locale)}
                  </span>
                </div>
                <span className="text-xs text-white/45 group-hover:text-white/70 transition">
                  {S.viewRecipes} →
                </span>
              </Link>
            ))}
          </div>
        </section>

        <aside className="glass rounded-3xl p-5 sm:p-6 text-center space-y-2">
          <div className="text-xs uppercase tracking-[0.2em] text-white/40 font-semibold">
            ✨ {S.poweredBy}
          </div>
          <h2 className="text-xl sm:text-2xl font-bold">{S.pollHeadline}</h2>
          <p className="text-sm text-white/60 max-w-sm mx-auto">{S.pollBody}</p>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-2 text-sm font-bold mt-1"
          >
            {S.pollButton} <span aria-hidden>→</span>
          </Link>
        </aside>
      </div>
    </>
  );
}
