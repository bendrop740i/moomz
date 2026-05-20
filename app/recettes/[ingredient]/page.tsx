import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  fetchMealsFor,
  findCategory,
  mealDbUrl,
  relatedCategories,
  RECETTES_SLUGS,
} from "@/lib/tools/recettes";
import { getLocale } from "@/lib/i18n-server";
import {
  localizedIntro,
  localizedName,
  localizedPoll,
  pickString,
  type ToolLocale,
} from "../_strings";

export const dynamic = "force-static";
export const revalidate = 86400;

export function generateStaticParams() {
  return RECETTES_SLUGS.map((ingredient) => ({ ingredient }));
}

export function generateMetadata({
  params,
}: {
  params: { ingredient: string };
}): Metadata {
  const cat = findCategory(params.ingredient);
  if (!cat) return {};
  const name = cat.name_fr;
  const url = `https://moomz.com/recettes/${cat.slug}`;
  const title = `Recettes au ${name.toLowerCase()} ${cat.emoji} — idées et inspirations · moomz`;
  const description = `Toutes les meilleures recettes au ${name.toLowerCase()} : classiques, plats du quotidien, idées d'inspiration. Sélection actualisée tous les jours.`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      siteName: "moomz",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

function buildPollHref(question: string, options: string[]): string {
  const q = encodeURIComponent(question);
  const o = encodeURIComponent(options.join("|"));
  return `/?q=${q}&o=${o}`;
}

export default async function RecetteDetailPage({
  params,
}: {
  params: { ingredient: string };
}) {
  const cat = findCategory(params.ingredient);
  if (!cat) notFound();

  const locale = (getLocale() as ToolLocale) ?? "fr";
  const S = pickString(locale);
  const name = localizedName(cat, locale);
  const intro = localizedIntro(cat, locale);
  const poll = localizedPoll(cat, locale);

  const meals = await fetchMealsFor(cat);
  const related = relatedCategories(cat, 6);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: S.cooking.replace("{name}", name),
    description: intro.slice(0, 200),
    url: `https://moomz.com/recettes/${cat.slug}`,
    numberOfItems: meals.length,
    itemListElement: meals.slice(0, 50).map((meal, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Recipe",
        name: meal.strMeal,
        image: meal.strMealThumb,
        url: mealDbUrl(meal.idMeal),
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="space-y-8 fade-up">
        <nav className="text-sm text-white/50">
          <Link href="/recettes" className="hover:text-white transition">
            {S.allRecipes}
          </Link>
          <span className="mx-2 text-white/30">/</span>
          <span className="text-white/80">{name}</span>
        </nav>

        <header className="text-center space-y-3">
          <div className="text-5xl sm:text-6xl" aria-hidden>
            {cat.emoji}
          </div>
          <h1 className="font-display text-4xl sm:text-5xl tracking-tight bg-gradient-to-br from-white via-pink-200 to-pink-400 bg-clip-text text-transparent">
            {locale === "fr" ? `Recettes — ${name}` : `${name} recipes`}
          </h1>
          {meals.length > 0 ? (
            <p className="text-white/50 text-sm">
              {S.recipesFound.replace("{n}", String(meals.length))}
            </p>
          ) : (
            <p className="text-white/50 text-sm">{S.apiDown}</p>
          )}
        </header>

        {meals.length > 0 ? (
          <section aria-labelledby="recipe-grid" className="space-y-3">
            <h2 id="recipe-grid" className="sr-only">
              {S.recipesFound.replace("{n}", String(meals.length))}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {meals.map((meal) => (
                <article
                  key={meal.idMeal}
                  className="glass rounded-2xl p-3 flex flex-col gap-2 hover:scale-[1.01] transition"
                >
                  {/* TheMealDB thumbnails — plain <img> to avoid Next/Image remote pattern config. */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    loading="lazy"
                    className="w-full aspect-square object-cover rounded-xl"
                  />
                  <h3 className="font-bold text-sm leading-tight line-clamp-2">
                    {meal.strMeal}
                  </h3>
                  <a
                    href={mealDbUrl(meal.idMeal)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-pink-300/80 hover:text-pink-200 transition mt-auto"
                  >
                    {S.viewOnMealDb} →
                  </a>
                </article>
              ))}
            </div>
          </section>
        ) : (
          <section className="glass rounded-2xl p-6 text-center text-white/60 text-sm">
            {S.noRecipes}
          </section>
        )}

        <section
          aria-labelledby="cooking-text"
          className="glass rounded-2xl p-5 sm:p-6 space-y-3"
        >
          <h2
            id="cooking-text"
            className="text-xl sm:text-2xl font-bold tracking-tight"
          >
            {S.cooking.replace("{name}", name)}
          </h2>
          <p className="text-white/75 text-sm sm:text-base leading-relaxed whitespace-pre-line">
            {intro}
          </p>
        </section>

        <aside className="glass rounded-3xl p-5 sm:p-6 text-center space-y-2">
          <div className="text-xs uppercase tracking-[0.2em] text-white/40 font-semibold">
            ✨ {S.poweredBy}
          </div>
          <h2 className="text-xl sm:text-2xl font-bold">{poll.question}</h2>
          <p className="text-sm text-white/60 max-w-sm mx-auto">{S.pollBody}</p>
          <Link
            href={buildPollHref(poll.question, poll.options)}
            className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-2 text-sm font-bold mt-1"
          >
            {S.pollButton} <span aria-hidden>→</span>
          </Link>
        </aside>

        {related.length > 0 && (
          <section aria-labelledby="related-categories" className="space-y-3">
            <h2
              id="related-categories"
              className="text-lg font-bold tracking-tight"
            >
              {S.otherCategories}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {related.map((c) => (
                <Link
                  key={c.slug}
                  href={`/recettes/${c.slug}`}
                  className="glass rounded-xl px-3 py-2.5 text-sm hover:scale-[1.01] active:scale-[0.99] transition flex items-center gap-2"
                >
                  <span aria-hidden className="text-lg">
                    {c.emoji}
                  </span>
                  <span className="font-semibold truncate">
                    {localizedName(c, locale)}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        <div className="text-center pt-2">
          <Link
            href="/recettes"
            className="inline-block text-sm text-white/50 hover:text-white transition"
          >
            {S.backToHub}
          </Link>
        </div>
      </div>
    </>
  );
}
