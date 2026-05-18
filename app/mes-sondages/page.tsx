import { cookies } from "next/headers";
import Link from "next/link";
import { getSupabase } from "@/lib/supabase";
import { readSlugHistory } from "@/lib/history";
import { emojisFor } from "@/lib/emojis";
import { getLocale } from "@/lib/i18n-server";
import { t } from "@/lib/i18n";

export const dynamic = "force-dynamic";

type Row = {
  slug: string;
  question: string;
  options: string[];
  vote_count: number;
  created_at: string;
  last_vote_at: string | null;
};

function timeAgo(iso: string): string {
  const s = Math.floor((Date.now() - new Date(iso).getTime()) / 1000);
  if (s < 60) return `${s}s`;
  if (s < 3600) return `${Math.floor(s / 60)}min`;
  if (s < 86400) return `${Math.floor(s / 3600)}h`;
  return `${Math.floor(s / 86400)}j`;
}

export default async function MesSondagesPage() {
  const locale = getLocale();
  const tx = (k: string) => t(k, locale);
  const slugs = readSlugHistory("moomz_created_slugs");
  const jar = cookies();

  let polls: Row[] = [];
  if (slugs.length > 0) {
    const supabase = getSupabase();
    const { data } = await supabase
      .from("polls_with_stats")
      .select("slug,question,options,vote_count,created_at,last_vote_at")
      .in("slug", slugs);
    const ordered = slugs
      .map((s) => (data ?? []).find((p) => p.slug === s))
      .filter(Boolean) as Row[];
    polls = ordered;
  }

  const totalVotes = polls.reduce((s, p) => s + p.vote_count, 0);
  const totalNew = polls.reduce((acc, p) => {
    const seen = Number(jar.get(`moomz_seen_${p.slug}`)?.value ?? 0);
    return acc + Math.max(0, p.vote_count - seen);
  }, 0);

  return (
    <div className="space-y-6 fade-up">
      <header className="space-y-1">
        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">{tx("polls.title")}</h1>
          {totalNew > 0 && (
            <span className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full bg-pink-500/20 border border-pink-400/40 text-pink-200">
              +{totalNew} {tx("polls.newBadge")}
            </span>
          )}
        </div>
        <p className="text-white/50 text-xs sm:text-sm">
          {polls.length > 0
            ? `${polls.length} · ${totalVotes} ${totalVotes > 1 ? tx("card.votes") : tx("card.vote")}`
            : tx("polls.empty")}
        </p>
      </header>

      {polls.length === 0 ? (
        <div className="glass rounded-2xl p-6 text-center space-y-3">
          <div className="text-4xl">📊</div>
          <p className="text-white/60 text-sm">{tx("polls.emptyBody")}</p>
          <Link
            href="/"
            className="inline-block rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-2.5 px-5 text-sm hover:scale-[1.02] active:scale-[0.98] transition shadow-lg shadow-pink-500/30"
          >
            {tx("polls.emptyCta")}
          </Link>
        </div>
      ) : (
        <div className="space-y-2">
          {polls.map((p, idx) => {
            const seen = Number(jar.get(`moomz_seen_${p.slug}`)?.value ?? 0);
            const newVotes = Math.max(0, p.vote_count - seen);
            const E = emojisFor(p.slug, p.options.length);
            return (
              <Link
                key={p.slug}
                href={`/${p.slug}`}
                className="glass block rounded-xl p-3 hover:bg-white/[0.08] hover:border-pink-400/30 transition group card-in"
                style={{ ["--i" as string]: idx }}
              >
                <div className="flex items-start justify-between gap-2.5">
                  <div className="min-w-0 flex-1 space-y-1">
                    <div className="flex items-center gap-1.5">
                      <p className="font-semibold text-sm sm:text-base leading-snug line-clamp-2 group-hover:text-white flex-1">
                        {p.question}
                      </p>
                      {newVotes > 0 && (
                        <span className="shrink-0 inline-flex items-center text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-pink-500 text-white">
                          +{newVotes}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-[10px] sm:text-xs text-white/40 flex-wrap">
                      {p.options.slice(0, 4).map((opt, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-0.5 bg-white/5 rounded-full px-1.5 py-0.5"
                        >
                          <span>{E[i]}</span>
                          <span className="truncate max-w-[60px] sm:max-w-[80px]">{opt}</span>
                        </span>
                      ))}
                      {p.options.length > 4 && (
                        <span className="text-white/30">+{p.options.length - 4}</span>
                      )}
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-pink-300 font-semibold tabular-nums text-sm">
                      {p.vote_count}
                    </div>
                    <div className="text-[9px] uppercase tracking-wide text-white/30">
                      {p.vote_count > 1 ? tx("card.votes") : tx("card.vote")}
                    </div>
                    <div className="text-[9px] text-white/30 mt-0.5">
                      {timeAgo(p.created_at)}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
