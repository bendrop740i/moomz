import type { Metadata } from "next";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { getSupabase, type Poll } from "@/lib/supabase";
import { getProfileByUsername } from "@/lib/profile";
import VoteClient from "./vote-client";
import MarkSeenIfOwner from "../mark-seen-if-owner";
import ProfileView from "./profile-view";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const supabase = getSupabase();
  const handle = params.slug;

  if (/^[a-z0-9_]{3,20}$/.test(handle)) {
    const profile = await getProfileByUsername(handle);
    if (profile) {
      const title = `@${profile.username}${profile.display_name ? ` (${profile.display_name})` : ""} — moomz`;
      const description = profile.bio ?? `Découvre les sondages de @${profile.username}`;
      return {
        title,
        description,
        openGraph: { title, description, type: "profile" },
        twitter: { card: "summary_large_image", title, description },
      };
    }
  }

  const { data: poll } = await supabase
    .from("polls")
    .select("question")
    .eq("slug", handle)
    .maybeSingle<{ question: string }>();

  const title = poll ? `${poll.question} — moomz` : "moomz";
  const description = poll
    ? "Vote en 1 clic. Vois les résultats en live."
    : "Crée ton sondage en 10 secondes.";

  return {
    title,
    description,
    openGraph: { title, description, type: "website" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const supabase = getSupabase();
  const handle = params.slug;

  if (/^[a-z0-9_]{3,20}$/.test(handle)) {
    const profile = await getProfileByUsername(handle);
    if (profile) {
      const [pollsRes, statsRes] = await Promise.all([
        supabase
          .from("polls_with_stats")
          .select("slug,question,options,vote_count,created_at,last_vote_at")
          .eq("profile_id", profile.id)
          .order("created_at", { ascending: false })
          .limit(30),
        supabase
          .from("profiles_public")
          .select("total_points,top_streak")
          .eq("id", profile.id)
          .maybeSingle(),
      ]);
      const profileWithStats = {
        ...profile,
        total_points: (statsRes.data as { total_points?: number } | null)?.total_points ?? 0,
        top_streak: (statsRes.data as { top_streak?: number } | null)?.top_streak ?? 0,
      };
      return <ProfileView profile={profileWithStats} polls={pollsRes.data ?? []} />;
    }
  }

  const { data: poll } = await supabase
    .from("polls")
    .select("*")
    .eq("slug", handle)
    .maybeSingle<Poll>();

  if (!poll) notFound();

  const { data: votes } = await supabase
    .from("votes")
    .select("option_index")
    .eq("poll_id", poll.id);

  const counts = poll.options.map((_, i) => votes?.filter((v) => v.option_index === i).length ?? 0);
  const total = counts.reduce((a, b) => a + b, 0);

  const votedRaw = cookies().get(`moomz_voted_${poll.slug}`)?.value;
  const alreadyVoted = votedRaw !== undefined ? Number(votedRaw) : null;

  return (
    <>
      <MarkSeenIfOwner slug={poll.slug} voteCount={total} />
      <VoteClient
        pollId={poll.id}
        slug={poll.slug}
        question={poll.question}
        options={poll.options}
        counts={counts}
        total={total}
        alreadyVoted={alreadyVoted}
      />
    </>
  );
}
