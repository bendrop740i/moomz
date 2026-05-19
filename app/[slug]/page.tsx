import type { Metadata } from "next";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { getSupabase, type Poll } from "@/lib/supabase";
import { getProfileByUsername, getMyProfile } from "@/lib/profile";
import VoteClient from "./vote-client";
import MarkSeenIfOwner from "../mark-seen-if-owner";
import ProfileView from "./profile-view";
import PollExplainer from "./poll-explainer";
import type { AskItem } from "./ask-section";

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
    .select("question,explainer,lang,options")
    .eq("slug", handle)
    .maybeSingle<{ question: string; explainer: Record<string, string> | null; lang: string | null; options: string[] }>();

  const title = poll ? `${poll.question} — moomz` : "moomz";

  // Use the first explainer paragraph as the description when available — much
  // richer + keyword-dense vs the generic "Vote en 1 clic" fallback. Google /
  // social previews love unique meta descriptions.
  let description: string;
  if (poll) {
    const firstExplainer =
      poll.explainer && typeof poll.explainer === "object"
        ? Object.values(poll.explainer).filter(Boolean)[0]
        : null;
    if (firstExplainer) {
      description = String(firstExplainer).slice(0, 200);
    } else {
      description = `Vote sur "${poll.question}" — découvre ce que les gens pensent vraiment, et compare ton choix.`.slice(0, 200);
    }
  } else {
    description = "Crée ton sondage en 10 secondes.";
  }

  const canonical = `https://moomz.com/${handle}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: { title, description, type: "website", url: canonical },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const supabase = getSupabase();
  const handle = params.slug;

  if (/^[a-z0-9_]{3,20}$/.test(handle)) {
    const profile = await getProfileByUsername(handle);
    if (profile) {
      const [pollsRes, statsRes, askAnsweredRes, viewerProfile] = await Promise.all([
        supabase
          .from("polls_with_stats")
          .select("slug,question,options,vote_count,created_at,last_vote_at")
          .eq("profile_id", profile.id)
          .order("created_at", { ascending: false })
          .limit(30),
        supabase
          .from("profiles_public")
          .select("total_points,top_streak,achievements")
          .eq("id", profile.id)
          .maybeSingle(),
        supabase
          .from("ask_questions_public")
          .select("id,text,answer,status,created_at,answered_at")
          .eq("recipient_id", profile.id)
          .eq("status", "answered")
          .order("answered_at", { ascending: false })
          .limit(50),
        getMyProfile(),
      ]);
      const isOwner = !!viewerProfile && viewerProfile.id === profile.id;
      let pending: AskItem[] = [];
      if (isOwner) {
        const { data: pendingRows } = await supabase
          .from("ask_questions_public")
          .select("id,text,answer,status,created_at,answered_at")
          .eq("recipient_id", profile.id)
          .eq("status", "pending")
          .order("created_at", { ascending: false })
          .limit(50);
        pending = (pendingRows as AskItem[]) ?? [];
      }
      const stats = statsRes.data as
        | { total_points?: number; top_streak?: number; achievements?: string[] }
        | null;
      const profileWithStats = {
        ...profile,
        total_points: stats?.total_points ?? 0,
        top_streak: stats?.top_streak ?? 0,
        achievements: stats?.achievements ?? [],
      };
      return (
        <ProfileView
          profile={profileWithStats}
          polls={pollsRes.data ?? []}
          ask={{
            isOwner,
            answered: (askAnsweredRes.data as AskItem[]) ?? [],
            pending,
          }}
        />
      );
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

  // Schema.org JSON-LD — helps Google parse poll as a Q&A page.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "QAPage",
    mainEntity: {
      "@type": "Question",
      name: poll.question,
      text: poll.question,
      dateCreated: poll.created_at,
      answerCount: poll.options.length,
      suggestedAnswer: poll.options.map((opt, i) => ({
        "@type": "Answer",
        text: opt,
        ...(poll.explainer && typeof poll.explainer === "object" && poll.explainer[String(i)]
          ? { description: poll.explainer[String(i)] }
          : {}),
        upvoteCount: counts[i] ?? 0,
      })),
    },
    inLanguage: poll.lang ?? "fr",
    url: `https://moomz.com/${poll.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
      <PollExplainer slug={poll.slug} options={poll.options} explainer={poll.explainer} />
    </>
  );
}
