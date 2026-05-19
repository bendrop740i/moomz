import Link from "next/link";
import { getSupabase } from "@/lib/supabase";
import type { KeywordPage } from "@/lib/seo/keywords/types";
import { keywordUrl } from "@/lib/seo/keywords/types";
import { findKeyword } from "@/lib/seo/keywords/loader";

type MatchedPoll = {
  slug: string;
  question: string;
  options: string[];
  vote_count: number | null;
};

async function fetchMatchingPolls(page: KeywordPage, limit = 24): Promise<MatchedPoll[]> {
  const supabase = getSupabase();
  const patterns = page.matchPatterns
    .filter((p) => p && p.length >= 3 && !/[,()]/.test(p))
    .slice(0, 6);
  if (patterns.length === 0) return [];
  const orExpr = patterns.map((p) => `question.ilike.%${p}%`).join(",");
  const { data } = await supabase
    .from("polls_with_stats")
    .select("slug,question,options,vote_count")
    .or(orExpr)
    .eq("is_dead", false)
    .order("vote_count", { ascending: false })
    .limit(limit);
  return (data as MatchedPoll[]) ?? [];
}

const LABELS = {
  fr: {
    crumb: "mots-clés",
    polls: "Sondages moomz qui en parlent",
    pollsEmpty: "Aucun moomz n'utilise encore ce mot — sois le premier.",
    related: "À explorer aussi",
    create: "Crée ton sondage moomz",
    faq: "Questions fréquentes",
  },
  en: {
    crumb: "keywords",
    polls: "moomz polls about this",
    pollsEmpty: "No moomz uses this word yet — be the first.",
    related: "Explore more",
    create: "Create your moomz poll",
    faq: "Frequently asked",
  },
};

export default async function KeywordPageView({ page }: { page: KeywordPage }) {
  const labels = LABELS[page.locale];
  const polls = await fetchMatchingPolls(page);
  const related = page.related
    .map((s) => findKeyword(page.locale, s))
    .filter((p): p is KeywordPage => Boolean(p));

  return (
    <article className="space-y-8 fade-up">
      <header className="space-y-3">
        <div className="text-xs uppercase tracking-widest text-white/40 flex items-center gap-2">
          <Link
            href={page.locale === "fr" ? "/mot" : "/word"}
            className="hover:text-white transition"
          >
            {labels.crumb}
          </Link>
          <span>·</span>
          <span>{page.locale}</span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl tracking-tight bg-gradient-to-br from-white via-pink-200 to-pink-400 bg-clip-text text-transparent leading-tight">
          {page.emoji ? <span className="mr-2">{page.emoji}</span> : null}
          {page.keyword}
        </h1>
        <p className="text-white/70 leading-relaxed text-balance">{page.intro}</p>
      </header>

      <Link
        href="/"
        className="block rounded-2xl bg-gradient-to-r from-pink-500/20 to-purple-600/20 border border-pink-400/30 px-5 py-4 hover:from-pink-500/30 hover:to-purple-600/30 transition"
      >
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="font-display text-xl">{labels.create}</div>
            <div className="text-xs text-white/50">moomz.com — 10 secondes, anonyme, gratuit</div>
          </div>
          <span className="text-2xl">→</span>
        </div>
      </Link>

      {page.sections.map((s, i) => (
        <section key={i} className="space-y-2">
          <h2 className="font-semibold text-xl text-white">{s.h}</h2>
          <p className="text-white/70 leading-relaxed whitespace-pre-line">{s.body}</p>
        </section>
      ))}

      <section className="space-y-3">
        <h2 className="font-semibold text-xl text-white">{labels.polls}</h2>
        {polls.length > 0 ? (
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {polls.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/${p.slug}`}
                  className="glass rounded-xl px-4 py-3 block hover:bg-white/10 transition h-full"
                >
                  <div className="text-sm font-medium text-white line-clamp-2">{p.question}</div>
                  <div className="text-xs text-white/50 mt-1 line-clamp-1">
                    {p.options.slice(0, 3).join(" · ")}
                    {p.vote_count && p.vote_count > 0 ? ` · ${p.vote_count} votes` : ""}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-white/50 text-sm">{labels.pollsEmpty}</p>
        )}
      </section>

      {page.faq.length > 0 && (
        <section className="space-y-3">
          <h2 className="font-semibold text-xl text-white">{labels.faq}</h2>
          <div className="space-y-2">
            {page.faq.map((f, i) => (
              <details key={i} className="glass rounded-xl px-4 py-3 group">
                <summary className="font-medium text-white cursor-pointer list-none flex items-center justify-between">
                  <span>{f.q}</span>
                  <span className="text-white/40 group-open:rotate-45 transition">+</span>
                </summary>
                <p className="text-white/70 mt-2 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="space-y-3">
          <h2 className="font-semibold text-xl text-white">{labels.related}</h2>
          <div className="flex flex-wrap gap-2">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={keywordUrl(r)}
                className="glass rounded-full px-3 py-1.5 text-sm hover:bg-white/10 transition"
              >
                {r.emoji ? <span className="mr-1">{r.emoji}</span> : null}
                {r.keyword}
              </Link>
            ))}
          </div>
        </section>
      )}

      <Link
        href="/"
        className="block rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 px-5 py-4 text-center font-display text-xl hover:scale-[1.02] transition shadow-lg shadow-pink-500/30"
      >
        {labels.create}
      </Link>
    </article>
  );
}
