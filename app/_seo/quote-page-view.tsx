import Link from "next/link";
import { getSupabase } from "@/lib/supabase";
import type { QuotePage, QuoteLocale } from "@/lib/seo/quotes/types";
import { quoteUrl, quoteHubUrl } from "@/lib/seo/quotes/types";
import { findQuotePage, quotesByLocale } from "@/lib/seo/quotes/loader";

type MatchedPoll = {
  slug: string;
  question: string;
  options: string[];
  vote_count: number | null;
};

async function fetchMatchingPolls(page: QuotePage, limit = 8): Promise<MatchedPoll[]> {
  const supabase = getSupabase();
  const patterns = page.matchPatterns
    .filter((p) => p && p.length >= 3 && !/[,()]/.test(p))
    .slice(0, 6);
  if (patterns.length === 0) return [];
  const orExpr = patterns.map((p) => `question.ilike.%${p}%`).join(",");
  const { data: strict } = await supabase
    .from("polls_with_stats")
    .select("slug,question,options,vote_count")
    .or(orExpr)
    .eq("is_dead", false)
    .gte("vote_count", 10)
    .order("vote_count", { ascending: false })
    .limit(limit);
  if (strict && strict.length >= 3) return strict as MatchedPoll[];
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

type QuoteLabels = {
  crumb: string;
  quotesHeading: string;
  pollsHeading: string;
  pollsEmpty: string;
  related: string;
  more: string;
  faq: string;
  create: string;
  createSub: string;
  ctaQuestion: (label: string) => string;
};

const LABELS: Record<QuoteLocale, QuoteLabels> = {
  fr: {
    crumb: "Citations",
    quotesHeading: "Les citations",
    pollsHeading: "Sondages sur ce thème",
    pollsEmpty: "Aucun sondage moomz sur ce thème pour l'instant — lance le premier.",
    related: "Thèmes liés",
    more: "Plus de citations",
    faq: "Questions fréquentes",
    create: "Crée ton sondage moomz",
    createSub: "10 secondes, anonyme, gratuit",
    ctaQuestion: (l) => `Quelle citation sur ${l.toLowerCase()} te parle le plus ?`,
  },
  en: {
    crumb: "Quotes",
    quotesHeading: "The quotes",
    pollsHeading: "Polls on this theme",
    pollsEmpty: "No moomz poll on this theme yet — start the first one.",
    related: "Related themes",
    more: "More quotes",
    faq: "Frequently asked",
    create: "Create your moomz poll",
    createSub: "10 seconds, anonymous, free",
    ctaQuestion: (l) => `Which ${l.toLowerCase()} quote speaks to you most?`,
  },
  es: {
    crumb: "Frases",
    quotesHeading: "Las frases",
    pollsHeading: "Encuestas sobre este tema",
    pollsEmpty: "Aún no hay encuestas moomz sobre este tema — crea la primera.",
    related: "Temas relacionados",
    more: "Más frases",
    faq: "Preguntas frecuentes",
    create: "Crea tu encuesta moomz",
    createSub: "10 segundos, anónimo, gratis",
    ctaQuestion: (l) => `¿Qué frase sobre ${l.toLowerCase()} te llega más?`,
  },
  it: {
    crumb: "Frasi",
    quotesHeading: "Le frasi",
    pollsHeading: "Sondaggi su questo tema",
    pollsEmpty: "Ancora nessun sondaggio moomz su questo tema — crea il primo.",
    related: "Temi correlati",
    more: "Altre frasi",
    faq: "Domande frequenti",
    create: "Crea il tuo sondaggio moomz",
    createSub: "10 secondi, anonimo, gratis",
    ctaQuestion: (l) => `Quale frase su ${l.toLowerCase()} ti colpisce di più?`,
  },
  pt: {
    crumb: "Frases",
    quotesHeading: "As frases",
    pollsHeading: "Enquetes sobre este tema",
    pollsEmpty: "Ainda não há enquetes moomz sobre este tema — crie a primeira.",
    related: "Temas relacionados",
    more: "Mais frases",
    faq: "Perguntas frequentes",
    create: "Crie sua enquete moomz",
    createSub: "10 segundos, anônimo, grátis",
    ctaQuestion: (l) => `Qual frase sobre ${l.toLowerCase()} mais fala com você?`,
  },
  de: {
    crumb: "Zitate",
    quotesHeading: "Die Zitate",
    pollsHeading: "Umfragen zu diesem Thema",
    pollsEmpty: "Noch keine moomz-Umfrage zu diesem Thema — starte die erste.",
    related: "Verwandte Themen",
    more: "Mehr Zitate",
    faq: "Häufige Fragen",
    create: "Erstelle deine moomz-Umfrage",
    createSub: "10 Sekunden, anonym, kostenlos",
    ctaQuestion: (l) => `Welches Zitat über ${l} spricht dich am meisten an?`,
  },
  ja: {
    crumb: "名言",
    quotesHeading: "名言集",
    pollsHeading: "このテーマの投票",
    pollsEmpty: "このテーマのmoomz投票はまだなし — 最初の一人になろう。",
    related: "関連テーマ",
    more: "もっと名言",
    faq: "よくある質問",
    create: "moomz投票を作成",
    createSub: "10秒・匿名・無料",
    ctaQuestion: (l) => `${l}の名言、どれが一番刺さる？`,
  },
  zh: {
    crumb: "名言",
    quotesHeading: "名言名句",
    pollsHeading: "这个主题的投票",
    pollsEmpty: "还没有关于这个主题的moomz投票 — 来当第一个。",
    related: "相关主题",
    more: "更多名言",
    faq: "常见问题",
    create: "创建你的moomz投票",
    createSub: "10秒、匿名、免费",
    ctaQuestion: (l) => `关于${l}的名言，哪句最打动你？`,
  },
};

function pickMoreThemes(page: QuotePage, limit = 10): QuotePage[] {
  const all = quotesByLocale(page.locale).filter((q) => q.slug !== page.slug);
  const explicit = new Set(page.related);
  const fresh = all.filter((q) => !explicit.has(q.slug));
  return fresh.slice(0, limit);
}

export default async function QuotePageView({ page }: { page: QuotePage }) {
  const labels = LABELS[page.locale] ?? LABELS.en;
  const polls = await fetchMatchingPolls(page);
  const related = page.related
    .map((s) => findQuotePage(page.locale, s))
    .filter((p): p is QuotePage => Boolean(p));
  const more = pickMoreThemes(page, 10);

  // JSON-LD: a collection of correctly-attributed Quotation entries.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: page.h1,
    description: page.description,
    inLanguage: page.locale,
    hasPart: page.quotes.map((q) => ({
      "@type": "Quotation",
      text: q.text,
      ...(q.author ? { creator: { "@type": "Person", name: q.author } } : {}),
      ...(q.source ? { isPartOf: q.source } : {}),
    })),
  };

  const ctaHref = `/?q=${encodeURIComponent(labels.ctaQuestion(page.label))}`;

  return (
    <article className="space-y-8 fade-up">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="space-y-3">
        <div className="text-xs uppercase tracking-widest text-white/40 flex items-center gap-2">
          <Link href={quoteHubUrl(page.locale)} className="hover:text-white transition">
            {labels.crumb}
          </Link>
          <span>·</span>
          <span>{page.locale}</span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl tracking-tight bg-gradient-to-br from-white via-pink-200 to-pink-400 bg-clip-text text-transparent leading-tight">
          <span className="mr-2">{page.emoji}</span>
          {page.h1}
        </h1>
        <p className="text-white/70 leading-relaxed text-balance">{page.intro}</p>
      </header>

      <section className="space-y-3" aria-label={labels.quotesHeading}>
        <h2 className="font-semibold text-xl text-white">{labels.quotesHeading}</h2>
        <ul className="space-y-3">
          {page.quotes.map((q, i) => (
            <li key={i} className="glass rounded-2xl px-5 py-4">
              <blockquote className="text-white/90 text-lg leading-relaxed">
                <span className="text-pink-300/70 mr-1 font-display text-2xl align-[-0.15em]">“</span>
                {q.text}
                <span className="text-pink-300/70 ml-1 font-display text-2xl align-[-0.15em]">”</span>
              </blockquote>
              <div className="mt-2 text-sm text-white/50">
                — <span className="text-white/75 font-medium">{q.author}</span>
                {q.source ? <span className="text-white/40">, {q.source}</span> : null}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <Link
        href={ctaHref}
        className="block rounded-2xl bg-gradient-to-r from-pink-500/20 to-purple-600/20 border border-pink-400/30 px-5 py-4 hover:from-pink-500/30 hover:to-purple-600/30 transition"
      >
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="font-display text-xl">{labels.create}</div>
            <div className="text-xs text-white/50">{labels.createSub}</div>
          </div>
          <span className="text-2xl">→</span>
        </div>
      </Link>

      <section className="space-y-3">
        <h2 className="font-semibold text-xl text-white">{labels.pollsHeading}</h2>
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
                href={quoteUrl(r)}
                className="glass rounded-full px-3 py-1.5 text-sm hover:bg-white/10 transition"
              >
                <span className="mr-1">{r.emoji}</span>
                {r.label}
              </Link>
            ))}
          </div>
        </section>
      )}

      {more.length > 0 && (
        <section className="space-y-3">
          <h2 className="font-semibold text-xl text-white">{labels.more}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {more.map((r) => (
              <Link
                key={r.slug}
                href={quoteUrl(r)}
                className="glass rounded-xl px-3 py-2 hover:bg-white/10 transition flex items-center gap-2"
              >
                <span className="text-xl">{r.emoji}</span>
                <span className="text-sm text-white/80 truncate">{r.label}</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <Link
        href={ctaHref}
        className="block rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 px-5 py-4 text-center font-display text-xl hover:scale-[1.02] transition shadow-lg shadow-pink-500/30"
      >
        {labels.create}
      </Link>
    </article>
  );
}
