import type { Metadata } from "next";
import { cookies } from "next/headers";
import Link from "next/link";
import { getSupabase } from "@/lib/supabase";
import { readSlugHistory } from "@/lib/history";
import { emojisFor } from "@/lib/emojis";
import { getLocale } from "@/lib/i18n-server";
import { t, type Locale } from "@/lib/i18n";
import { getMyProfile } from "@/lib/profile";

export const dynamic = "force-dynamic";

type PollsMeta = { title: string };
const POLLS_META: Record<Locale, PollsMeta> = {
  fr: { title: "Mes sondages — moomz" },
  en: { title: "My polls — moomz" },
  es: { title: "Mis encuestas — moomz" },
  it: { title: "I miei sondaggi — moomz" },
  pt: { title: "As minhas enquetes — moomz" },
  de: { title: "Meine Umfragen — moomz" },
  ja: { title: "私の投票 — moomz" },
  zh: { title: "我的投票 — moomz" },
};

// Inline copy for strings with no shared key
type SondagesCopy = { editProfile: string; noUsernameHint: string; firstPollCta: string };
const SONDAGES_COPY: Record<Locale, SondagesCopy> = {
  fr: { editProfile: "Édite ton profil · moomz.com/", noUsernameHint: "Mini Linktree + tes polls sous moomz.com/toi", firstPollCta: "Créer mon premier moomz →" },
  en: { editProfile: "Edit your profile · moomz.com/", noUsernameHint: "Mini Linktree + your polls at moomz.com/you", firstPollCta: "Create my first moomz →" },
  es: { editProfile: "Edita tu perfil · moomz.com/", noUsernameHint: "Mini Linktree + tus encuestas en moomz.com/tú", firstPollCta: "Crear mi primera moomz →" },
  it: { editProfile: "Modifica il tuo profilo · moomz.com/", noUsernameHint: "Mini Linktree + i tuoi sondaggi su moomz.com/tu", firstPollCta: "Crea il mio primo moomz →" },
  pt: { editProfile: "Edita o teu perfil · moomz.com/", noUsernameHint: "Mini Linktree + as tuas enquetes em moomz.com/você", firstPollCta: "Criar a minha primeira moomz →" },
  de: { editProfile: "Profil bearbeiten · moomz.com/", noUsernameHint: "Mini-Linktree + deine Umfragen unter moomz.com/du", firstPollCta: "Mein erstes moomz erstellen →" },
  ja: { editProfile: "プロフィールを編集 · moomz.com/", noUsernameHint: "ミニLinktree + moomz.com/あなた に投票一覧", firstPollCta: "最初の moomz を作る →" },
  zh: { editProfile: "编辑你的资料 · moomz.com/", noUsernameHint: "迷你Linktree + 你的投票在 moomz.com/你", firstPollCta: "创建我的第一个 moomz →" },
};

export function generateMetadata(): Metadata {
  const locale = getLocale() as Locale;
  const m = POLLS_META[locale] ?? POLLS_META.en;
  return { title: m.title, robots: { index: false, follow: false } };
}

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
  const locale = getLocale() as Locale;
  const tx = (k: string) => t(k, locale);
  const sc = SONDAGES_COPY[locale] ?? SONDAGES_COPY.en;
  const slugs = readSlugHistory("moomz_created_slugs");
  const jar = cookies();

  // Parallelize profile fetch with the slug-bounded polls list. The polls query
  // only depends on `slugs` (read sync from cookies), not on profile.
  const pollsPromise =
    slugs.length > 0
      ? getSupabase()
          .from("polls_with_stats")
          .select("slug,question,options,vote_count,created_at,last_vote_at")
          .in("slug", slugs)
          .limit(50)
      : Promise.resolve({ data: [] as Row[] | null });

  const [myProfile, pollsRes] = await Promise.all([getMyProfile(), pollsPromise]);

  let polls: Row[] = [];
  if (slugs.length > 0) {
    const ordered = slugs
      .map((s) => (pollsRes.data ?? []).find((p) => p.slug === s))
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

      <Link
        href="/me"
        className="glass block rounded-2xl px-3 py-3 hover:bg-white/[0.08] hover:border-pink-400/30 transition min-h-[64px]"
      >
        <div className="flex items-center gap-3">
          <div className="text-2xl sm:text-3xl shrink-0 leading-none">
            {myProfile?.avatar_emoji ?? "✨"}
          </div>
          <div className="flex-1 min-w-0">
            {myProfile ? (
              <>
                <div className="font-semibold text-white truncate">
                  @{myProfile.username}
                </div>
                <div className="text-xs text-white/40 truncate">
                  {sc.editProfile}{myProfile.username}
                </div>
              </>
            ) : (
              <>
                <div className="font-semibold text-white truncate">
                  {tx("misc.reserveUsernameCta")}
                </div>
                <div className="text-xs text-white/40 truncate">
                  {sc.noUsernameHint}
                </div>
              </>
            )}
          </div>
          <div className="text-pink-300 text-lg shrink-0">→</div>
        </div>
      </Link>

      {polls.length === 0 ? (
        <div className="glass rounded-2xl p-6 sm:p-8 text-center space-y-4">
          <div className="text-5xl sm:text-6xl">📊</div>
          <p className="text-white/70 text-sm sm:text-base max-w-xs mx-auto">
            {tx("polls.emptyBody")}
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center min-h-[48px] rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-3 px-6 sm:px-7 text-base hover:scale-[1.02] active:scale-[0.98] transition shadow-xl shadow-pink-500/40"
          >
            {sc.firstPollCta}
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
                className="glass block rounded-xl px-3 py-2.5 min-h-[60px] hover:bg-white/[0.08] hover:border-pink-400/30 transition group card-in"
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
