import Link from "next/link";
import HubNav from "@/app/_seo/hub-nav";
import AdSlot from "@/app/ad-slot";
import { getSupabase } from "@/lib/supabase";
import type { KeywordPage } from "@/lib/seo/keywords/types";
import { keywordUrl } from "@/lib/seo/keywords/types";
import { findKeyword, keywordsByLocale } from "@/lib/seo/keywords/loader";
import { keywordHubHref } from "@/lib/seo/seo-href";

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
  createSub: string;
  faq: string;
  qPrefix: string;
};

const LABELS: Record<string, KeywordLabels> = {
  fr: {
    crumb: "mots-clés",
    polls: "Sondages avec ce mot",
    pollsEmpty: "Aucun moomz n'utilise encore ce mot — sois le premier.",
    related: "À explorer aussi",
    similar: "Mots similaires",
    create: "Crée ton sondage moomz",
    createSub: "moomz.com — 10 secondes, anonyme, gratuit",
    faq: "Questions fréquentes",
    qPrefix: "Q.",
  },
  en: {
    crumb: "keywords",
    polls: "Polls with this word",
    pollsEmpty: "No moomz uses this word yet — be the first.",
    related: "Explore more",
    similar: "Similar words",
    create: "Create your moomz poll",
    createSub: "moomz.com — 10 seconds, anonymous, free",
    faq: "Frequently asked",
    qPrefix: "Q.",
  },
  es: {
    crumb: "palabras clave",
    polls: "Encuestas con esta palabra",
    pollsEmpty: "Aún ningún moomz usa esta palabra — sé el primero.",
    related: "Explora también",
    similar: "Palabras similares",
    create: "Crea tu encuesta moomz",
    createSub: "moomz.com — 10 segundos, anónimo, gratis",
    faq: "Preguntas frecuentes",
    qPrefix: "P.",
  },
  it: {
    crumb: "parole chiave",
    polls: "Sondaggi con questa parola",
    pollsEmpty: "Nessun moomz usa ancora questa parola — sii il primo.",
    related: "Esplora anche",
    similar: "Parole simili",
    create: "Crea il tuo sondaggio moomz",
    createSub: "moomz.com — 10 secondi, anonimo, gratis",
    faq: "Domande frequenti",
    qPrefix: "D.",
  },
  pt: {
    crumb: "palavras-chave",
    polls: "Enquetes com esta palavra",
    pollsEmpty: "Nenhum moomz usa essa palavra ainda — seja o primeiro.",
    related: "Explorar mais",
    similar: "Palavras similares",
    create: "Crie sua enquete moomz",
    createSub: "moomz.com — 10 segundos, anônimo, grátis",
    faq: "Perguntas frequentes",
    qPrefix: "P.",
  },
  de: {
    crumb: "stichwörter",
    polls: "Umfragen mit diesem Wort",
    pollsEmpty: "Noch kein moomz mit diesem Wort — sei der Erste.",
    related: "Weitere Themen",
    similar: "Ähnliche Wörter",
    create: "Erstelle deine moomz-Umfrage",
    createSub: "moomz.com — 10 Sekunden, anonym, kostenlos",
    faq: "Häufige Fragen",
    qPrefix: "F.",
  },
  ja: {
    crumb: "キーワード",
    polls: "このワードの投票",
    pollsEmpty: "このワードを使ったmoomzはまだなし — 最初の一人になろう。",
    related: "もっと見る",
    similar: "似た単語",
    create: "moomz投票を作成",
    createSub: "moomz.com — 10秒、匿名、無料",
    faq: "よくある質問",
    qPrefix: "Q.",
  },
  zh: {
    crumb: "关键词",
    polls: "含此词的投票",
    pollsEmpty: "还没有moomz用这个词 — 来当第一个吧。",
    related: "更多探索",
    similar: "相关词",
    create: "创建你的moomz投票",
    createSub: "moomz.com — 10秒、匿名、免费",
    faq: "常见问题",
    qPrefix: "问",
  },
};

// Each locale has ~120-130 keyword pages. A small cap (the old 12) left ~90%
// of siblings unreachable from any given detail page — Google would only walk
// to them via the hub. Raise the cap high enough that one detail page links
// the whole topic cluster plus a generous spillover, so the keyword surface is
// a dense graph, not a star with the hub at the center.
function pickSimilarKeywords(page: KeywordPage, limit = 48): KeywordPage[] {
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
  const similar = pickSimilarKeywords(page, 48);
  const hubHref = keywordHubHref(page.locale);

  return (
    <article className="space-y-12 fade-up">
      <HubNav locale={page.locale} current="keywords" showLanguages />
      {/* Hero */}
      <header className="relative overflow-hidden glass rounded-[2rem] p-6 sm:p-10">
        <div className="pointer-events-none absolute -top-16 -right-10 h-48 w-48 rounded-full bg-purple-600/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-12 h-52 w-52 rounded-full bg-pink-500/25 blur-3xl" />
        <div className="relative space-y-4">
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em]">
            <Link
              href={hubHref}
              className="rounded-full bg-white/10 border border-white/15 px-3 py-1 text-white/70 hover:bg-white/20 hover:text-white transition"
            >
              {labels.crumb}
            </Link>
            <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-white/40">
              {page.locale}
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl tracking-tight leading-[1.05]">
            {page.emoji ? (
              <span className="mr-2 inline-block drop-shadow-[0_4px_12px_rgba(168,85,247,0.5)]">
                {page.emoji}
              </span>
            ) : null}
            <span className="bg-gradient-to-br from-white via-pink-200 to-orange-300 bg-clip-text text-transparent">
              {page.keyword}
            </span>
          </h1>
          <p className="text-white/70 text-base sm:text-xl leading-relaxed text-balance max-w-2xl">
            {page.intro}
          </p>
        </div>
      </header>

      {/* Primary CTA */}
      <Link
        href="/"
        className="group block rounded-2xl bg-gradient-to-r from-pink-500/25 via-purple-600/20 to-orange-500/20 border border-pink-400/30 px-5 py-4 hover:border-pink-400/60 hover:from-pink-500/35 hover:to-orange-500/30 transition"
      >
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="font-display text-xl text-white">{labels.create}</div>
            <div className="text-xs text-white/50">{labels.createSub}</div>
          </div>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/10 text-xl text-white group-hover:translate-x-1 group-hover:bg-white/20 transition">
            →
          </span>
        </div>
      </Link>

      {/* Article body */}
      <div className="space-y-10">
        {page.sections.map((s, i) => (
          <section key={i} className="space-y-3">
            <h2 className="font-display text-2xl sm:text-3xl text-white flex items-center gap-3">
              <span className="h-7 w-1.5 shrink-0 rounded-full bg-gradient-to-b from-pink-400 to-purple-500" />
              {s.h}
            </h2>
            <p className="text-white/75 text-[15px] sm:text-base leading-[1.8] whitespace-pre-line pl-[18px]">
              {s.body}
            </p>
          </section>
        ))}
      </div>

      <AdSlot />

      {/* Matching polls */}
      <section className="space-y-4">
        <h2 className="font-display text-2xl sm:text-3xl text-white flex items-center gap-3">
          <span className="h-7 w-1.5 shrink-0 rounded-full bg-gradient-to-b from-orange-400 to-pink-500" />
          {labels.polls}
        </h2>
        {polls.length > 0 ? (
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {polls.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/${p.slug}`}
                  className="glass rounded-2xl p-4 flex flex-col gap-2.5 hover:bg-white/[0.08] transition h-full group"
                >
                  <div className="text-sm font-semibold text-white line-clamp-2 group-hover:text-pink-100 transition">
                    {p.question}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {p.options.slice(0, 3).map((o, oi) => (
                      <span
                        key={oi}
                        className="rounded-lg bg-white/5 border border-white/10 px-2.5 py-1 text-xs text-white/60"
                      >
                        {o}
                      </span>
                    ))}
                  </div>
                  {p.vote_count && p.vote_count > 0 ? (
                    <div className="mt-auto pt-1 text-xs font-medium text-pink-300/80 inline-flex items-center gap-1">
                      <span aria-hidden="true">🔥</span>
                      {p.vote_count} votes
                    </div>
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div className="glass rounded-2xl p-6 text-center">
            <div className="text-3xl mb-2">👀</div>
            <p className="text-white/55 text-sm">{labels.pollsEmpty}</p>
          </div>
        )}
      </section>

      {page.faq.length > 0 && (
        <section className="space-y-4">
          <h2 className="font-display text-2xl sm:text-3xl text-white flex items-center gap-3">
            <span className="h-7 w-1.5 shrink-0 rounded-full bg-gradient-to-b from-purple-400 to-pink-500" />
            {labels.faq}
          </h2>
          <div className="space-y-2.5">
            {page.faq.map((f, i) => (
              <details
                key={i}
                className="glass rounded-2xl px-5 py-4 group open:bg-white/[0.07] open:ring-1 open:ring-pink-400/20 transition"
              >
                <summary className="font-semibold text-white cursor-pointer list-none flex items-center justify-between gap-3">
                  <span className="flex items-center gap-2.5">
                    <span className="text-pink-300/70">{labels.qPrefix}</span>
                    {f.q}
                  </span>
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white/10 text-white/50 group-open:rotate-45 group-open:bg-pink-500/30 group-open:text-pink-200 transition">
                    +
                  </span>
                </summary>
                <p className="text-white/70 mt-3 leading-relaxed border-t border-white/10 pt-3">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="space-y-4">
          <h2 className="font-display text-2xl sm:text-3xl text-white flex items-center gap-3">
            <span className="h-7 w-1.5 shrink-0 rounded-full bg-gradient-to-b from-pink-400 to-orange-500" />
            {labels.related}
          </h2>
          <div className="flex flex-wrap gap-2">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={keywordUrl(r)}
                className="rounded-full bg-white/5 border border-white/10 px-3.5 py-1.5 text-sm text-white/75 hover:bg-pink-500/15 hover:border-pink-400/30 hover:text-white transition"
              >
                {r.emoji ? <span className="mr-1">{r.emoji}</span> : null}
                {r.keyword}
              </Link>
            ))}
          </div>
        </section>
      )}

      {similar.length > 0 && (
        <section className="space-y-4">
          <h2 className="font-display text-2xl sm:text-3xl text-white flex items-center gap-3">
            <span className="h-7 w-1.5 shrink-0 rounded-full bg-gradient-to-b from-purple-400 to-pink-500" />
            {labels.similar}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {similar.map((r) => (
              <Link
                key={r.slug}
                href={keywordUrl(r)}
                className="glass rounded-2xl px-3.5 py-3 hover:bg-white/[0.08] transition flex items-center gap-3 group"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-pink-500/15 to-purple-600/15 border border-white/10 text-xl">
                  {r.emoji || "✨"}
                </span>
                <span className="text-sm font-medium text-white/80 truncate group-hover:text-pink-200 transition">
                  {r.keyword}
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <Link
        href="/"
        className="group block rounded-2xl bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 px-5 py-5 text-center font-display text-xl text-white hover:scale-[1.02] transition shadow-lg shadow-pink-500/30"
      >
        <span className="inline-flex items-center gap-2">
          {labels.create}
          <span aria-hidden="true" className="group-hover:translate-x-1 transition">→</span>
        </span>
      </Link>
    </article>
  );
}
