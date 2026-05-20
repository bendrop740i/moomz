import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSupabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Vote — moomz",
  robots: { index: false },
};

type PollRow = {
  id: string;
  slug: string;
  question: string;
  options: Array<{ text: string; emoji?: string } | string>;
  vote_count: number;
};

export default async function EmbedPollPage({
  params,
}: {
  params: { slug: string };
}) {
  const supabase = getSupabase();
  const { data, error } = await supabase
    .from("polls_with_stats")
    .select("id, slug, question, options, vote_count")
    .eq("slug", params.slug)
    .maybeSingle();

  if (error || !data) {
    notFound();
  }

  const poll = data as PollRow;
  const options = Array.isArray(poll.options) ? poll.options : [];
  const fullUrl = `https://moomz.com/${poll.slug}`;

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `nav[class*="fixed"][class*="bottom-0"], .music-mini-player, .streak-hud { display: none !important; } main { padding: 0 !important; max-width: none !important; }`,
        }}
      />
      <div className="min-h-screen bg-[#0b0613] text-white px-4 py-6 flex items-center justify-center">
        <div className="max-w-md w-full rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md p-5 space-y-4">
          <h1 className="font-display text-xl text-white text-balance">
            {poll.question}
          </h1>
          <div className="text-xs text-white/40">
            {poll.vote_count} {poll.vote_count === 1 ? "vote" : "votes"}
          </div>
          <div className="space-y-2">
            {options.map((opt, i) => {
              const text = typeof opt === "string" ? opt : opt.text;
              const emoji = typeof opt === "string" ? null : opt.emoji;
              return (
                <a
                  key={i}
                  href={fullUrl}
                  target="_blank"
                  rel="noopener"
                  className="block rounded-xl bg-white/5 hover:bg-white/10 px-4 py-3 text-sm text-white border border-white/10 transition-colors"
                >
                  {emoji ? <span className="mr-2">{emoji}</span> : null}
                  {text}
                </a>
              );
            })}
          </div>
          <div className="pt-2 text-center">
            <a
              href={`https://moomz.com/?ref=embed&from=${poll.slug}`}
              target="_blank"
              rel="noopener"
              className="text-[11px] text-white/30 hover:text-white/60 transition-colors"
            >
              powered by moomz →
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
