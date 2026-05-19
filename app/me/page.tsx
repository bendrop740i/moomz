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
  const profile = await getMyProfile();
  const supabase = getServerSupabase();
  const { data: auth } = await supabase.auth.getUser();
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
          {profile ? "Mon profil" : "Réserve ton nom"}
        </h1>
        <p className="text-white/50 text-xs sm:text-sm">
          {profile
            ? `Ton URL publique : moomz.com/${profile.username}`
            : "Choisis un username pour avoir ta page publique moomz.com/toi"}
        </p>
      </header>

      {auth.user ? (
        <div className="glass rounded-2xl p-3 flex items-center justify-between gap-2 text-xs">
          <div className="text-white/60 truncate">📩 {auth.user.email}</div>
          <form action={signOut}>
            <button className="text-white/70 hover:text-white underline shrink-0">
              {tx("auth.logout")}
            </button>
          </form>
        </div>
      ) : (
        <Link
          href="/login"
          className="glass block rounded-2xl p-3 text-sm text-center hover:bg-white/[0.08] hover:border-pink-400/30 transition"
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
            className="glass rounded-2xl p-3 text-center hover:bg-white/[0.08] transition"
          >
            <div className="text-lg">{profile.avatar_emoji}</div>
            <div className="text-xs text-white/60 mt-0.5">@{profile.username}</div>
          </Link>
          <Link
            href="/mes-sondages"
            className="glass rounded-2xl p-3 text-center hover:bg-white/[0.08] transition"
          >
            <div className="text-lg">📊</div>
            <div className="text-xs text-white/60 mt-0.5">{tx("polls.title")}</div>
          </Link>
        </div>
      )}

      <ProfileForm initialProfile={profile} />
    </div>
  );
}
