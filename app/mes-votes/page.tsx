import Link from "next/link";
import { cookies } from "next/headers";
import { getSupabase } from "@/lib/supabase";
import { readSlugHistory } from "@/lib/history";
import { emojisFor } from "@/lib/emojis";
import { getLocale } from "@/lib/i18n-server";
import { t } from "@/lib/i18n";
import { getMyProfile } from "@/lib/profile";
import { getServerSupabase } from "@/lib/supabase-server";

export const dynamic = "force-dynamic";

type StreakCookie = { pts: number; cur: number; top: number; ts: number };

function readStreakCookie(): StreakCookie | null {
  const raw = cookies().get("moomz_streak")?.value;
  if (!raw) return null;
  try {
    return JSON.parse(raw) as StreakCookie;
  } catch {
    return null;
  }
}

type Row = {
  slug: string;
  question: string;
  options: string[];
  vote_count: number;
};

export default async function MesVotesPage() {
  const locale = getLocale();
  const tx = (k: string) => t(k, locale);
  const myProfile = await getMyProfile();
  const { data: auth } = await getServerSupabase().auth.getUser();
  const streak = readStreakCookie();
  const totalPts = myProfile?.total_points ?? streak?.pts ?? 0;
  const topStreak = Math.max(myProfile?.top_streak ?? 0, streak?.top ?? 0);

  const slugs = readSlugHistory("moomz_voted_slugs");

  let polls: Row[] = [];
  if (slugs.length > 0) {
    const supabase = getSupabase();
    const { data } = await supabase
      .from("polls_with_stats")
      .select("slug,question,options,vote_count")
      .in("slug", slugs);
    const ordered = slugs
      .map((s) => (data ?? []).find((p) => p.slug === s))
      .filter(Boolean) as Row[];
    polls = ordered;
  }

  return (
    <div className="space-y-6 fade-up">
      <header className="space-y-1">
        <h1 className="text-3xl font-bold tracking-tight">{tx("votes.title")}</h1>
        <p className="text-white/50 text-xs sm:text-sm">
          {polls.length > 0
            ? `${polls.length} ${polls.length > 1 ? tx("votes.subtitlePlural") : tx("votes.subtitleSingle")}`
            : tx("votes.empty")}
        </p>
      </header>

      <div className="glass rounded-2xl p-4 grid grid-cols-3 gap-2 text-center">
        <div>
          <div className="text-2xl font-display tabular-nums bg-gradient-to-br from-yellow-300 via-pink-400 to-purple-500 bg-clip-text text-transparent">
            {totalPts.toLocaleString()}
          </div>
          <div className="text-[10px] uppercase tracking-widest text-white/40">pts</div>
        </div>
        <div>
          <div className="text-2xl font-display tabular-nums bg-gradient-to-br from-orange-300 via-pink-400 to-red-500 bg-clip-text text-transparent">
            🔥 {topStreak}
          </div>
          <div className="text-[10px] uppercase tracking-widest text-white/40">top streak</div>
        </div>
        <div>
          <div className="text-2xl font-display tabular-nums bg-gradient-to-br from-cyan-300 via-purple-400 to-pink-500 bg-clip-text text-transparent">
            {polls.length}
          </div>
          <div className="text-[10px] uppercase tracking-widest text-white/40">votes</div>
        </div>
      </div>

      <Link
        href={myProfile ? "/me" : "/login"}
        className="glass block rounded-2xl p-3 hover:bg-white/[0.08] hover:border-pink-400/30 transition"
      >
        <div className="flex items-center gap-3 text-sm">
          <div className="text-2xl">{myProfile?.avatar_emoji ?? "✨"}</div>
          <div className="flex-1 min-w-0">
            {myProfile ? (
              <>
                <div className="font-semibold text-white">@{myProfile.username}</div>
                <div className="text-white/40 text-xs">
                  {auth.user
                    ? "Compte sauvegardé via email"
                    : "Sécurise ton compte avec ton email →"}
                </div>
              </>
            ) : (
              <>
                <div className="font-semibold text-white">{tx("auth.cta.connect")}</div>
                <div className="text-white/40 text-xs">
                  Garde tes points, ton pseudo et tes sondages.
                </div>
              </>
            )}
          </div>
          <div className="text-pink-300 text-lg shrink-0">→</div>
        </div>
      </Link>

      {polls.length === 0 ? (
        <div className="glass rounded-2xl p-6 text-center space-y-3">
          <div className="text-4xl">🗳️</div>
          <p className="text-white/60 text-sm">{tx("votes.emptyBody")}</p>
          <Link
            href="/discover"
            className="inline-block rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-2.5 px-5 text-sm hover:scale-[1.02] active:scale-[0.98] transition shadow-lg shadow-pink-500/30"
          >
            {tx("votes.emptyCta")}
          </Link>
        </div>
      ) : (
        <div className="space-y-2">
          {polls.map((p, idx) => {
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
                    <p className="font-semibold text-sm sm:text-base leading-snug line-clamp-2 group-hover:text-white">
                      {p.question}
                    </p>
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
