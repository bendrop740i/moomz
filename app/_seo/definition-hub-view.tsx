import Link from "next/link";
import { getLabels, type WordEntry } from "@/lib/tools/definition";
import { getLocale } from "@/lib/i18n-server";

type Lang = "fr" | "en";

function basePath(lang: Lang): string {
  return lang === "fr" ? "/definition" : "/define";
}

function groupByInitial(words: WordEntry[]): Map<string, WordEntry[]> {
  const groups = new Map<string, WordEntry[]>();
  for (const w of words) {
    const ch = w.slug.charAt(0).toUpperCase();
    const key = /[A-Z]/.test(ch) ? ch : "#";
    const arr = groups.get(key) ?? [];
    arr.push(w);
    groups.set(key, arr);
  }
  for (const arr of groups.values()) {
    arr.sort((a, b) => a.slug.localeCompare(b.slug));
  }
  return groups;
}

export default function DefinitionHubView({
  words,
  lang,
}: {
  words: WordEntry[];
  lang: Lang;
}) {
  const locale = getLocale();
  const labels = getLabels(locale);
  const base = basePath(lang);
  const groups = groupByInitial(words);
  const letters = [...groups.keys()].sort();

  const title = lang === "fr" ? labels.hubTitleFr : labels.hubTitleEn;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: title,
    description: labels.hubSubtitle,
    url: `https://moomz.com${base}`,
    inLanguage: lang,
    hasDefinedTerm: words.slice(0, 50).map((w) => ({
      "@type": "DefinedTerm",
      name: w.word,
      url: `https://moomz.com${base}/${w.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="space-y-8 fade-up">
        <header className="space-y-3 text-center">
          <h1 className="font-display text-5xl sm:text-6xl tracking-tight bg-gradient-to-br from-white via-pink-200 to-pink-400 bg-clip-text text-transparent">
            {title}
          </h1>
          <p className="text-white/65 text-base sm:text-lg max-w-md mx-auto text-balance">
            {labels.hubSubtitle}
          </p>
          <p className="text-white/40 text-sm">
            {words.length} {labels.allWords.toLowerCase()}
          </p>
        </header>

        <nav className="flex flex-wrap gap-1.5 justify-center" aria-label={labels.letterFilter}>
          {letters.map((l) => (
            <a
              key={l}
              href={`#letter-${l}`}
              className="glass rounded-md px-2.5 py-1 text-xs uppercase tracking-wider text-white/80 hover:bg-white/10 transition"
            >
              {l}
            </a>
          ))}
        </nav>

        {letters.map((letter) => {
          const items = groups.get(letter)!;
          return (
            <section
              key={letter}
              id={`letter-${letter}`}
              className="space-y-3 scroll-mt-20"
              aria-labelledby={`heading-${letter}`}
            >
              <h2
                id={`heading-${letter}`}
                className="text-sm uppercase tracking-[0.25em] text-white/45 font-bold"
              >
                {letter}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {items.map((w) => (
                  <Link
                    key={w.slug}
                    href={`${base}/${w.slug}`}
                    aria-label={`${w.word} — ${w.partOfSpeech}`}
                    className="glass block rounded-2xl p-3 sm:p-4 hover:scale-[1.01] active:scale-[0.99] transition group"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-display text-xl sm:text-2xl text-white group-hover:text-pink-200 transition">
                        {w.word}
                      </h3>
                      <span className="shrink-0 text-[10px] uppercase tracking-wider text-white/45 bg-white/5 rounded-md px-1.5 py-0.5 mt-1">
                        {w.partOfSpeech}
                      </span>
                    </div>
                    <p className="text-white/60 text-xs sm:text-sm leading-snug line-clamp-2 mt-1">
                      {w.definitions[0]?.text}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}

        <aside className="glass rounded-3xl p-5 sm:p-6 text-center space-y-2">
          <div className="text-xs uppercase tracking-[0.2em] text-white/40 font-semibold">
            ✨ moomz
          </div>
          <h2 className="text-xl sm:text-2xl font-bold">
            {labels.createPoll}
          </h2>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-2 text-sm font-bold mt-1"
          >
            {labels.createPoll} <span aria-hidden>→</span>
          </Link>
        </aside>
      </div>
    </>
  );
}
