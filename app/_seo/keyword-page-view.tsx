import Link from "next/link";
import { getSupabase } from "@/lib/supabase";
import type { KeywordPage } from "@/lib/seo/keywords/types";
import { keywordUrl } from "@/lib/seo/keywords/types";
import { findKeyword, keywordsByLocale } from "@/lib/seo/keywords/loader";

type MatchedPoll = {
  slug: string;
  question: string;
  options: string[];
  vote_count: number | null;
};

async function fetchMatchingPolls(page: KeywordPage, limit = 8): Promise<MatchedPoll[]> {
  const supabase = getSupabase();
  const patterns = page.matchPatterns
    .filter((p) => p && p.length >= 3 && !/[,()]/.test(p))
    .slice(0, 6);
  if (patterns.length === 0) return [];
  const orExpr = patterns.map((p) => `question.ilike.%${p}%`).join(",");
  // Quality gate: only surface polls with ≥10 votes. Empty/abandoned polls
  // would make the SEO page look low-quality to Google (and to humans).
  // Fall back to a lower threshold if too few polls match the strict gate.
  const { data: strict } = await supabase
    .from("polls_with_stats")
    .select("slug,question,options,vote_count")
    .or(orExpr)
    .eq("is_dead", false)
    .gte("vote_count", 10)
    .order("vote_count", { ascending: false })
    .limit(limit);
  if (strict && strict.length >= 3) return strict as MatchedPoll[];
  // Fallback: relax to ≥1 vote so the page is never empty when matching polls
  // exist. Better than showing 0 polls; still avoids the "0 vote / abandoned"
  // look.
  const { data: relaxed } = await supabase
    .from("polls_with_stats")
    .select("slug,question,options,vote_count")
    .or(orExpr)
    .eq("is_dead", false)
    .gte("vote_count", 1)
    .order("vote_count", { ascending: false })
    .limit(limit);
  return (relaxed as MatchedPoll[]) ?? [];
}

type KeywordLabels = {
  crumb: string;
  polls: string;
  pollsEmpty: string;
  related: string;
  similar: string;
  create: string;
  faq: string;
};

const LABELS: Record<string, KeywordLabels> = {
  fr: {
    crumb: "mots-clés",
    polls: "Sondages avec ce mot",
    pollsEmpty: "Aucun moomz n'utilise encore ce mot — sois le premier.",
    related: "À explorer aussi",
    similar: "Mots similaires",
    create: "Crée ton sondage moomz",
    faq: "Questions fréquentes",
  },
  en: {
    crumb: "keywords",
    polls: "Polls with this word",
    pollsEmpty: "No moomz uses this word yet — be the first.",
    related: "Explore more",
    similar: "Similar words",
    create: "Create your moomz poll",
    faq: "Frequently asked",
  },
  es: {
    crumb: "palabras clave",
    polls: "Encuestas con esta palabra",
    pollsEmpty: "Aún ningún moomz usa esta palabra — sé el primero.",
    related: "Explora también",
    similar: "Palabras similares",
    create: "Crea tu encuesta moomz",
    faq: "Preguntas frecuentes",
  },
  it: {
    crumb: "parole chiave",
    polls: "Sondaggi con questa parola",
    pollsEmpty: "Nessun moomz usa ancora questa parola — sii il primo.",
    related: "Esplora anche",
    similar: "Parole simili",
    create: "Crea il tuo sondaggio moomz",
    faq: "Domande frequenti",
  },
  pt: {
    crumb: "palavras-chave",
    polls: "Enquetes com esta palavra",
    pollsEmpty: "Nenhum moomz usa essa palavra ainda — seja o primeiro.",
    related: "Explorar mais",
    similar: "Palavras similares",
    create: "Crie sua enquete moomz",
    faq: "Perguntas frequentes",
  },
  de: {
    crumb: "stichwörter",
    polls: "Umfragen mit diesem Wort",
    pollsEmpty: "Noch kein moomz mit diesem Wort — sei der Erste.",
    related: "Weitere Themen",
    similar: "Ähnliche Wörter",
    create: "Erstelle deine moomz-Umfrage",
    faq: "Häufige Fragen",
  },
  ja: {
    crumb: "キーワード",
    polls: "このワードの投票",
    pollsEmpty: "このワードを使ったmoomzはまだなし — 最初の一人になろう。",
    related: "もっと見る",
    similar: "似た単語",
    create: "moomz投票を作成",
    faq: "よくある質問",
  },
  zh: {
    crumb: "关键词",
    polls: "含此词的投票",
    pollsEmpty: "还没有moomz用这个词 — 来当第一个吧。",
    related: "更多探索",
    similar: "相关词",
    create: "创建你的moomz投票",
    faq: "常见问题",
  },
};

function pickSimilarKeywords(page: KeywordPage, limit = 12): KeywordPage[] {
  const all = keywordsByLocale(page.locale).filter(
    (k) => !(k.slug === page.slug),
  );
  if (page.topic) {
    const sameTopic = all.filter((k) => k.topic === page.topic);
    // De-prioritize ones already in the explicit `related` list so we surface
    // fresh links instead of repeating them.
    const explicitSet = new Set(page.related);
    const fresh = sameTopic.filter((k) => !explicitSet.has(k.slug));
    const dupes = sameTopic.filter((k) => explicitSet.has(k.slug));
    const combined = [...fresh, ...dupes];
    if (combined.length >= limit) return combined.slice(0, limit);
    // Pad with other-topic keywords if we still need more.
    const seen = new Set(combined.map((c) => c.slug));
    const others = all.filter((k) => !seen.has(k.slug)).slice(0, limit - combined.length);
    return [...combined, ...others];
  }
  return all.slice(0, limit);
}

export default async function KeywordPageView({ page }: { page: KeywordPage }) {
  const labels = LABELS[page.locale] ?? LABELS.en;
  const polls = await fetchMatchingPolls(page);
  const related = page.related
    .map((s) => findKeyword(page.locale, s))
    .filter((p): p is KeywordPage => Boolean(p));
  const similar = pickSimilarKeywords(page, 12);
  const hubHref =
    page.locale === "fr" ? "/mot" : page.locale === "en" ? "/word" : `/topic/${page.locale}`;

  return (
    <article className="space-y-8 fade-up">
      <header className="space-y-3">
        <div className="text-xs uppercase tracking-widest text-white/40 flex items-center gap-2">
          <Link href={hubHref} className="hover:text-white transition">
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

      {similar.length > 0 && (
        <section className="space-y-3">
          <h2 className="font-semibold text-xl text-white">{labels.similar}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {similar.map((r) => (
              <Link
                key={r.slug}
                href={keywordUrl(r)}
                className="glass rounded-xl px-3 py-2 hover:bg-white/10 transition flex items-center gap-2"
              >
                {r.emoji ? <span className="text-xl">{r.emoji}</span> : null}
                <span className="text-sm text-white/80 truncate">{r.keyword}</span>
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
