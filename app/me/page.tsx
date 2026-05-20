import Link from "next/link";
import { getMyProfile } from "@/lib/profile";
import { getSupabase } from "@/lib/supabase";
import { getServerSupabase } from "@/lib/supabase-server";
import { getLocale } from "@/lib/i18n-server";
import { t } from "@/lib/i18n";
import { signOut } from "../actions";
import ProfileForm from "./profile-form";
import type { AskItem } from "../[slug]/ask-section";
import AskInbox from "./ask-inbox";

export const dynamic = "force-dynamic";

export default async function MePage() {
  const supabase = getServerSupabase();
  // getMyProfile() and auth.getUser() are independent (getMyProfile reads its own
  // auth/session inside but only returns the profile row) — run in parallel.
  const [profile, authRes] = await Promise.all([
    getMyProfile(),
    supabase.auth.getUser(),
  ]);
  const auth = authRes.data;
  const locale = getLocale();
  const tx = (k: string) => t(k, locale);

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
            ? `Ton URL publique : moomz.com/${profile.username}`
            : "Choisis un username pour avoir ta page publique moomz.com/toi"}
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

      {profile && pending.length > 0 && (
        <AskInbox username={profile.username} pending={pending} />
      )}

      {profile && (
        <div className="grid grid-cols-2 gap-2">
          <Link
            href={`/${profile.username}`}
            className="glass rounded-2xl px-3 py-3 text-center hover:bg-white/[0.08] transition min-h-[64px] flex flex-col items-center justify-center"
          >
            <div className="text-xl leading-none">{profile.avatar_emoji}</div>
            <div className="text-[11px] sm:text-xs text-white/60 mt-1 truncate max-w-full">
              @{profile.username}
            </div>
          </Link>
          <Link
            href="/mes-sondages"
            className="glass rounded-2xl px-3 py-3 text-center hover:bg-white/[0.08] transition min-h-[64px] flex flex-col items-center justify-center"
          >
            <div className="text-xl leading-none">📊</div>
            <div className="text-[11px] sm:text-xs text-white/60 mt-1 truncate max-w-full">
              {tx("polls.title")}
            </div>
          </Link>
        </div>
      )}

      <ProfileForm initialProfile={profile} />
    </div>
  );
}
