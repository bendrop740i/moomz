import type { Metadata } from "next";
import Link from "next/link";
import { RECIPE_CATEGORIES, RECETTES_SLUGS } from "@/lib/tools/recettes";
import { getLocale } from "@/lib/i18n-server";
import { localizedName, pickString, type ToolLocale } from "./_strings";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Recettes — idées par ingrédient et catégorie · moomz",
  description:
    "Trouve une recette par ingrédient (poulet, bœuf, saumon, riz, pâtes…) ou par catégorie (fruits de mer, végétarien, dessert, petit-déj). 20 catégories, gratuit, sans inscription.",
  alternates: { canonical: "https://moomz.com/recettes" },
  openGraph: {
    title: "Recettes — moomz",
    description:
      "Idées recettes par ingrédient et par catégorie. Poulet, bœuf, saumon, végétarien, dessert et plus.",
    type: "website",
    url: "https://moomz.com/recettes",
  },
  twitter: { card: "summary_large_image" },
};

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
            🥕 {locale === "fr" ? "Par ingrédient" : "By ingredient"}{" "}
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
            🍽️ {locale === "fr" ? "Par catégorie" : "By category"}{" "}
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
