import type { Metadata } from "next";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { getSupabase, type Poll } from "@/lib/supabase";
import VoteClient from "./vote-client";
import MarkSeenIfOwner from "../mark-seen-if-owner";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const supabase = getSupabase();
  const { data: poll } = await supabase
    .from("polls")
    .select("question")
    .eq("slug", params.slug)
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

export default async function PollPage({ params }: { params: { slug: string } }) {
  const supabase = getSupabase();
  const { data: poll } = await supabase
    .from("polls")
    .select("*")
    .eq("slug", params.slug)
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
