import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { supabase, type Poll } from "@/lib/supabase";
import VoteClient from "./vote-client";

export const dynamic = "force-dynamic";

export default async function PollPage({ params }: { params: { slug: string } }) {
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
    <VoteClient
      pollId={poll.id}
      slug={poll.slug}
      question={poll.question}
      options={poll.options}
      counts={counts}
      total={total}
      alreadyVoted={alreadyVoted}
    />
  );
}
