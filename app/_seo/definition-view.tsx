import Link from "next/link";
import { getLabels, type WordEntry } from "@/lib/tools/definition";
import { getLocale } from "@/lib/i18n-server";
import { jsonLdHtml } from "@/lib/json-ld";

type Lang = "fr" | "en";

function basePath(lang: Lang): string {
  return lang === "fr" ? "/definition" : "/define";
}

function pollHref(entry: WordEntry): string | null {
  if (!entry.poll) return null;
  const q = encodeURIComponent(entry.poll.q);
  const o = encodeURIComponent(entry.poll.o.join("|"));
  return `/?q=${q}&o=${o}`;
}

function usageBlurb(entry: WordEntry, lang: Lang): string {
  // Short generic usage guide; written here once instead of in the data file
  // because it can be derived from the entry's part of speech + first sense.
  const pos = entry.partOfSpeech;
  const sense = entry.definitions[0]?.text ?? "";
  if (lang === "fr") {
    return `On emploie « ${entry.word} » comme ${pos} dans un registre familier ou parlé. ${sense} Tu le retrouveras dans des conversations entre amis, des messages courts, des stories ou des sons rap. C'est un mot que beaucoup connaissent mais que tout le monde n'utilise pas pareil — d'où l'intérêt de lancer un sondage pour voir comment ta communauté le perçoit. Sur moomz, n'hésite pas à créer un vibe check en partant de ce mot : tu vas vite voir s'il fait l'unanimité ou s'il divise.`;
  }
  return `Use "${entry.word}" as a ${pos} in casual or spoken contexts. ${sense} You'll spot it in DMs, group chats, comment sections and pop tracks. Like most slang, the way people read it depends on their generation and crowd — that's why running a quick poll about it can be fun. Open a moomz vibe check around this word and see how your community feels: love it, kinda over it, or never heard it.`;
}

export default function DefinitionView({
  entry,
  lang,
  allSiblingSlugs,
}: {
  entry: WordEntry;
  lang: Lang;
  allSiblingSlugs: string[];
}) {
  const locale = getLocale();
  const labels = getLabels(locale);
  const base = basePath(lang);
  const poll = pollHref(entry);

  const related = (entry.related ?? [])
    .filter((s) => allSiblingSlugs.includes(s))
    .slice(0, 6);

  const url = `https://moomz.com${base}/${entry.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: entry.word,
    description: entry.definitions[0]?.text ?? "",
    inDefinedTermSet: lang === "fr" ? "Dictionnaire moomz" : "moomz Dictionary",
    url,
    inLanguage: lang,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdHtml(jsonLd) }}
      />
      <div className="space-y-8 fade-up">
        <header className="space-y-3 text-center">
          <h1 className="font-display text-6xl sm:text-7xl tracking-tight bg-gradient-to-br from-white via-pink-200 to-pink-400 bg-clip-text text-transparent">
            {entry.word}
          </h1>
          <div className="flex items-center justify-center gap-3 flex-wrap text-sm">
            <span className="glass rounded-full px-3 py-1 text-white/85 italic">
              {entry.partOfSpeech}
            </span>
            {entry.pronunciation ? (
              <span className="glass rounded-full px-3 py-1 text-white/75 font-mono">
                {entry.pronunciation}
              </span>
            ) : null}
          </div>
        </header>

        <section className="glass rounded-2xl p-5 space-y-3">
          <h2 className="text-xs uppercase tracking-[0.2em] text-white/50 font-semibold">
            {labels.definition}
          </h2>
          <ol className="space-y-3 list-decimal list-inside marker:text-pink-400 marker:font-bold">
            {entry.definitions.map((d, i) => (
              <li key={i} className="text-white/90 leading-relaxed">
                <span>{d.text}</span>
                {d.example ? (
                  <div className="mt-1 pl-1 text-white/60 italic">
                    « {d.example} »
                  </div>
                ) : null}
              </li>
            ))}
          </ol>
        </section>

        {entry.etymology ? (
          <section className="glass rounded-2xl p-5 space-y-2">
            <h2 className="text-xs uppercase tracking-[0.2em] text-white/50 font-semibold">
              {labels.etymology}
            </h2>
            <p className="text-white/80 leading-relaxed">{entry.etymology}</p>
          </section>
        ) : null}

        {entry.synonyms && entry.synonyms.length > 0 ? (
          <section className="glass rounded-2xl p-5 space-y-3">
            <h2 className="text-xs uppercase tracking-[0.2em] text-white/50 font-semibold">
              {labels.synonyms}
            </h2>
            <div className="flex flex-wrap gap-2">
              {entry.synonyms.map((s) => {
                const isInternal = allSiblingSlugs.includes(s);
                if (isInternal) {
                  return (
                    <Link
                      key={s}
                      href={`${base}/${s}`}
                      className="glass rounded-full px-3 py-1.5 text-sm hover:bg-white/10 transition"
                    >
                      {s}
                    </Link>
                  );
                }
                return (
                  <span
                    key={s}
                    className="rounded-full px-3 py-1.5 text-sm bg-white/5 text-white/70"
                  >
                    {s}
                  </span>
                );
              })}
            </div>
          </section>
        ) : null}

        <section className="space-y-3">
          <h2 className="text-lg font-bold tracking-tight">
            {labels.howToUse} « {entry.word} »
          </h2>
          <p className="text-white/80 leading-relaxed">
            {usageBlurb(entry, lang)}
          </p>
        </section>

        <section className="glass rounded-2xl p-5 sm:p-6 text-center space-y-3 bg-gradient-to-br from-pink-500/15 via-fuchsia-500/10 to-purple-500/15">
          <div className="text-xs uppercase tracking-[0.2em] text-white/55 font-semibold">
            ✨ {labels.createPoll}
          </div>
          {poll ? (
            <>
              <h3 className="text-xl sm:text-2xl font-bold">
                « {entry.poll!.q} »
              </h3>
              <Link
                href={poll}
                className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-2 text-sm font-bold mt-1"
              >
                {labels.createPoll} <span aria-hidden>→</span>
              </Link>
            </>
          ) : (
            <>
              <p className="text-sm text-white/65">{labels.noPoll}</p>
              <Link
                href={`/?q=${encodeURIComponent(entry.word)}`}
                className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-2 text-sm font-bold mt-1"
              >
                {labels.createPoll} <span aria-hidden>→</span>
              </Link>
            </>
          )}
        </section>

        {related.length > 0 ? (
          <section className="space-y-3">
            <h2 className="text-lg font-bold tracking-tight">
              {labels.relatedWords}
            </h2>
            <div className="flex flex-wrap gap-2">
              {related.map((s) => (
                <Link
                  key={s}
                  href={`${base}/${s}`}
                  className="glass rounded-full px-3 py-1.5 text-sm hover:bg-white/10 transition"
                >
                  {s}
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        <div className="pt-2">
          <Link
            href={base}
            className="text-sm text-white/60 hover:text-white transition"
          >
            {labels.back}
          </Link>
        </div>
      </div>
    </>
  );
}
