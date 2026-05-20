import Link from "next/link";
import { pagesByCategory } from "@/lib/seo";

const DEFAULT_TITLES: Record<string, string> = {
  fr: "📖 À lire",
  en: "📖 Read",
  es: "📖 Para leer",
  it: "📖 Da leggere",
  pt: "📖 Para ler",
  de: "📖 Zum Lesen",
  ja: "📖 読みもの",
  zh: "📖 阅读",
};

const SEE_ALL_LABELS: Record<string, string> = {
  fr: "tout voir →",
  en: "see all →",
  es: "ver todo →",
  it: "vedi tutto →",
  pt: "ver tudo →",
  de: "alle ansehen →",
  ja: "すべて見る →",
  zh: "查看全部 →",
};

const READ_CTA_LABELS: Record<string, string> = {
  fr: "lire l'histoire →",
  en: "read the story →",
  es: "leer la historia →",
  it: "leggi la storia →",
  pt: "ler a história →",
  de: "Geschichte lesen →",
  ja: "ストーリーを読む →",
  zh: "阅读故事 →",
};

// Mulberry32 deterministic PRNG
function mulberry32(a: number): () => number {
  return function () {
    let t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffleDeterministic<T>(arr: T[], seed: number): T[] {
  const rand = mulberry32(seed);
  const out = arr.slice();
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

export default function FeaturedRead({
  locale,
  title,
}: {
  locale: string;
  title?: string;
}) {
  const allRead = pagesByCategory("read");
  const localized = allRead.filter((p) => p.locale === locale);

  const seed = Math.floor(Date.now() / (1000 * 60 * 60 * 24));

  // Locale-pure: only show the visitor's-language stories. If the current
  // locale genuinely has fewer than 6, show fewer — never pad with other
  // languages. Only fall back to other locales when there are ZERO stories.
  const pool = localized.length > 0 ? localized : allRead;

  const picked = shuffleDeterministic(pool, seed).slice(0, 6);

  if (picked.length === 0) return null;

  const heading = title ?? DEFAULT_TITLES[locale] ?? DEFAULT_TITLES.en;
  const seeAll = SEE_ALL_LABELS[locale] ?? SEE_ALL_LABELS.en;
  const readCta = READ_CTA_LABELS[locale] ?? READ_CTA_LABELS.en;

  return (
    <section className="mt-8">
      <div className="flex items-baseline justify-between mb-3 px-1">
        <h2 className="font-display text-2xl tracking-tight">{heading}</h2>
        <Link
          href="/read"
          className="text-xs text-white/50 hover:text-white"
        >
          {seeAll}
        </Link>
      </div>
      <div
        className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-1 -mx-4 px-4 sm:-mx-6 sm:px-6 [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: "none" }}
      >
        {picked.map((page, i) => (
          <Link
            key={`${page.category}-${page.slug}-${page.locale}`}
            href={`/read/${page.slug}`}
            className="card-in w-[260px] shrink-0 snap-start rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md p-4 hover:bg-white/[0.07] transition"
            style={{ ["--i" as string]: i } as React.CSSProperties}
          >
            <div className="flex items-start justify-between">
              <span className="text-2xl">{page.emoji ?? "📖"}</span>
              <span className="uppercase text-[10px] text-white/40">
                {page.locale}
              </span>
            </div>
            <h3 className="line-clamp-3 text-sm font-semibold text-white leading-snug mt-2">
              {page.h1}
            </h3>
            <p className="line-clamp-2 text-xs text-white/50 mt-2">
              {page.description}
            </p>
            <div className="mt-3 text-xs text-pink-300">{readCta}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
