import Link from "next/link";
import { cookies } from "next/headers";
import { getMyProfile } from "@/lib/profile";
import { getSupabase } from "@/lib/supabase";
import { getServerSupabase } from "@/lib/supabase-server";
import { getLocale } from "@/lib/i18n-server";
import { t, type Locale } from "@/lib/i18n";
import { ALL_ACHIEVEMENTS, ACHIEVEMENT_COUNT } from "@/lib/achievements/engine";
import { signOut } from "../actions";
import ProfileForm from "./profile-form";
import type { AskItem } from "../[slug]/ask-section";
import AskInbox from "./ask-inbox";

export const dynamic = "force-dynamic";

// Inline dashboard chrome — these labels have no shared i18n key (the page
// already mixes t() keys with an inline table; we extend that table here).
const DASH: Record<
  Locale,
  { achievements: string; coins: string; stats: string; viewProfile: string; urlPublic: string; noUsername: string }
> = {
  fr: { achievements: "Haut faits", coins: "Coins", stats: "Ton tableau de bord", viewProfile: "Voir ma page publique", urlPublic: "Ton URL publique : moomz.com/", noUsername: "Choisis un username pour avoir ta page publique moomz.com/toi" },
  en: { achievements: "Achievements", coins: "Coins", stats: "Your dashboard", viewProfile: "View my public page", urlPublic: "Your public URL: moomz.com/", noUsername: "Pick a username to get your public page moomz.com/you" },
  es: { achievements: "Logros", coins: "Coins", stats: "Tu panel", viewProfile: "Ver mi página pública", urlPublic: "Tu URL pública: moomz.com/", noUsername: "Elige un nombre de usuario para tener tu página pública moomz.com/tú" },
  it: { achievements: "Imprese", coins: "Coins", stats: "La tua dashboard", viewProfile: "Vedi la mia pagina pubblica", urlPublic: "La tua URL pubblica: moomz.com/", noUsername: "Scegli un username per avere la tua pagina pubblica moomz.com/tu" },
  pt: { achievements: "Conquistas", coins: "Coins", stats: "Seu painel", viewProfile: "Ver minha página pública", urlPublic: "Sua URL pública: moomz.com/", noUsername: "Escolha um nome de utilizador para ter a sua página pública moomz.com/você" },
  de: { achievements: "Erfolge", coins: "Coins", stats: "Dein Dashboard", viewProfile: "Meine öffentliche Seite ansehen", urlPublic: "Deine öffentliche URL: moomz.com/", noUsername: "Wähle einen Benutzernamen für deine öffentliche Seite moomz.com/du" },
  ja: { achievements: "実績", coins: "コイン", stats: "ダッシュボード", viewProfile: "公開ページを見る", urlPublic: "あなたの公開URL: moomz.com/", noUsername: "ユーザー名を選んで公開ページ moomz.com/あなた を取得しよう" },
  zh: { achievements: "成就", coins: "金币", stats: "你的面板", viewProfile: "查看我的公开页面", urlPublic: "你的公开链接：moomz.com/", noUsername: "选择一个用户名来获取你的公开页面 moomz.com/你" },
};

type Stat = {
  emoji: string;
  label: string;
  value: number | null;
  href: string;
  from: string;
  to: string;
  text: string;
};

export default async function MePage() {
  const supabase = getServerSupabase();
  // getMyProfile() and auth.getUser() are independent (getMyProfile reads its own
  // auth/session inside but only returns the profile row) — run in parallel.
  const [profile, authRes] = await Promise.all([
    getMyProfile(),
    supabase.auth.getUser(),
  ]);
  const auth = authRes.data;
  const locale = getLocale() as Locale;
  const tx = (k: string) => t(k, locale);
  const dash = DASH[locale] ?? DASH.en;

  // --- Real dashboard numbers --------------------------------------------
  // Pull the profile's metric snapshot + coin balance the same way
  // /haut-faits does: the SECURITY DEFINER get_achievement_stats RPC,
  // identity-resolved by session user_id first then claim_token cookie.
  // Never let a failed stat fetch break the page — degrade to null tiles.
  let votesCast: number | null = null;
  let pollsCreated: number | null = null;
  let achievementsDone: number | null = null;
  let coinBalance: number | null = null;
  if (profile) {
    try {
      const claimToken = cookies().get("moomz_profile_token")?.value ?? null;
      const anon = getSupabase();
      const { data } = await anon.rpc("get_achievement_stats", {
        p_user_id: auth.user?.id ?? null,
        p_claim_token: claimToken,
      });
      const st = (data ?? {}) as {
        metrics?: Record<string, number>;
        coin_balance?: number;
      };
      const metrics = st.metrics ?? {};
      votesCast = metrics.votesCast ?? 0;
      pollsCreated = metrics.pollsCreated ?? 0;
      coinBalance = st.coin_balance ?? 0;
      achievementsDone = ALL_ACHIEVEMENTS.reduce(
        (n, a) => n + ((metrics[a.metric] ?? 0) >= a.threshold ? 1 : 0),
        0,
      );
    } catch {
      // leave stats null — tiles render without a number
    }
  }

  const stats: Stat[] = [
    {
      emoji: "🗳️",
      label: tx("votes.title"),
      value: votesCast,
      href: "/mes-votes",
      from: "from-pink-500/25",
      to: "to-rose-600/15",
      text: "text-pink-200",
    },
    {
      emoji: "📊",
      label: tx("polls.title"),
      value: pollsCreated,
      href: "/mes-sondages",
      from: "from-purple-500/25",
      to: "to-fuchsia-600/15",
      text: "text-purple-200",
    },
    {
      emoji: "🏅",
      label: dash.achievements,
      value: achievementsDone,
      href: "/haut-faits",
      from: "from-amber-500/25",
      to: "to-orange-600/15",
      text: "text-amber-200",
    },
    {
      emoji: "🪙",
      label: dash.coins,
      value: coinBalance,
      href: "/boutique",
      from: "from-yellow-400/25",
      to: "to-amber-600/15",
      text: "text-yellow-200",
    },
  ];

  let pending: AskItem[] = [];
  if (profile) {
    const anon = getSupabase();
    const { data } = await anon
      .from("ask_questions_public")
      .select("id,text,answer,status,created_at,answered_at")
      .eq("recipient_id", profile.id)
      .eq("status", "pending")
      .order("created_at", { ascending: false })
      .limit(50);
    pending = (data as AskItem[]) ?? [];
  }

  return (
    <div className="space-y-6 fade-up">
      <header className="space-y-1">
        <h1 className="text-3xl font-bold tracking-tight">
          {profile ? tx("misc.meTitleOwn") : tx("misc.meTitleClaim")}
        </h1>
        <p className="text-white/50 text-xs sm:text-sm">
          {profile
            ? `${dash.urlPublic}${profile.username}`
            : dash.noUsername}
        </p>
      </header>

      {auth.user ? (
        <div className="glass rounded-2xl px-3 py-2.5 flex items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-1.5 min-w-0 flex-1">
            <span className="shrink-0" aria-hidden="true">📩</span>
            <span className="text-white/60 truncate" title={auth.user.email ?? ""}>
              {auth.user.email}
            </span>
          </div>
          <form action={signOut} className="shrink-0">
            <button className="rounded-full px-3 py-1.5 bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition text-[11px] font-medium">
              {tx("auth.logout")}
            </button>
          </form>
        </div>
      ) : (
        <Link
          href="/login"
          className="glass block rounded-2xl px-3 py-3 text-sm text-center hover:bg-white/[0.08] hover:border-pink-400/30 transition min-h-[44px] flex items-center justify-center"
        >
          {tx("auth.cta.secure")}
        </Link>
      )}

      {/* Profile hero + dashboard — real stat tiles replace the old bare
          "Navigation" link grid. Each tile shows a live number and deep-links
          to its existing route. */}
      {profile && (
        <section className="space-y-3">
          <Link
            href={`/${profile.username}`}
            className="group block rounded-2xl bg-gradient-to-br from-pink-500/20 via-purple-600/15 to-fuchsia-600/20 border border-pink-400/25 px-4 py-4 hover:border-pink-400/50 transition"
          >
            <div className="flex items-center gap-3.5">
              <div className="shrink-0 w-14 h-14 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-3xl leading-none shadow-lg shadow-pink-500/20">
                {profile.avatar_url ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={profile.avatar_url}
                    alt=""
                    width={56}
                    height={56}
                    className="w-14 h-14 rounded-2xl object-cover"
                  />
                ) : (
                  <span aria-hidden="true">{profile.avatar_emoji}</span>
                )}
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-display text-xl sm:text-2xl tracking-tight bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent truncate">
                  {profile.display_name || `@${profile.username}`}
                </div>
                <div className="text-white/50 text-xs truncate">
                  {dash.viewProfile} →
                </div>
              </div>
            </div>
          </Link>

          <h2 className="text-sm uppercase tracking-widest text-pink-300 font-semibold flex items-center gap-2 pt-1">
            <span aria-hidden="true">📈</span>
            {dash.stats}
          </h2>
          <div className="grid grid-cols-2 gap-2.5">
            {stats.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className={`group rounded-2xl bg-gradient-to-br ${s.from} ${s.to} border border-white/10 px-3.5 py-3.5 flex flex-col gap-1 hover:border-white/25 hover:scale-[1.02] active:scale-[0.98] transition min-h-[92px]`}
              >
                <span
                  className="text-2xl leading-none group-hover:scale-110 transition-transform origin-left"
                  aria-hidden="true"
                >
                  {s.emoji}
                </span>
                <span className={`font-display text-2xl sm:text-3xl tabular-nums leading-none ${s.text}`}>
                  {s.value === null ? "—" : s.value.toLocaleString()}
                </span>
                <span className="text-[11px] sm:text-xs text-white/55 font-medium truncate">
                  {s.label}
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {profile && pending.length > 0 && (
        <AskInbox username={profile.username} pending={pending} />
      )}

      <ProfileForm initialProfile={profile} />
    </div>
  );
}
