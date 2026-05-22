import { cookies } from "next/headers";
import { getSupabase } from "@/lib/supabase";
import type { Locale } from "@/lib/i18n";
import type { FeedPoll } from "./types";

export type { FeedPoll } from "./types";

type RpcRow = {
  id: string;
  slug: string;
  question: string;
  options: string[] | null;
  created_at: string;
  vote_count: number;
  recent_votes: number;
  last_vote_at: string | null;
  profile_id: string | null;
  lang: string | null;
};

// Builds the immersive feed's poll list. Calls the `get_feed_polls` RPC, which
// returns a random, vote-weighted sample across the WHOLE poll lake (5.5k+ rows,
// no 14-day cap) — so the feed is never just "the top 40 trending" on repeat.
export async function buildFeed(locale: Locale, limit = 80): Promise<FeedPoll[]> {
  const supabase = getSupabase();

  let rows: RpcRow[] = [];
  try {
    const { data } = await supabase.rpc("get_feed_polls", {
      p_lang: locale,
      p_limit: limit,
    });
    rows = (data as RpcRow[]) ?? [];
  } catch {
    rows = [];
  }

  // Locale lake too thin → widen to every language so the feed never starves.
  if (rows.length < 8) {
    try {
      const { data: dataAll } = await supabase.rpc("get_feed_polls", {
        p_lang: null,
        p_limit: limit,
      });
      const seen = new Set(rows.map((r) => r.id));
      rows = [...rows, ...((dataAll as RpcRow[]) ?? []).filter((r) => !seen.has(r.id))];
    } catch {
      // keep whatever we have
    }
  }

  // Batch lookup of the authors' equipped cosmetic palettes. Tolerates the
  // column not existing on older DBs — falls back to no override.
  const authorIds = Array.from(
    new Set(rows.map((r) => r.profile_id).filter((x): x is string => !!x)),
  );
  const cosmeticByAuthor = new Map<string, string>();
  if (authorIds.length > 0) {
    try {
      const { data: cosmetics } = await supabase
        .from("profiles_public")
        .select("id,cosmetic_id")
        .in("id", authorIds);
      for (const c of (cosmetics as { id: string; cosmetic_id?: string | null }[]) ?? []) {
        if (c.cosmetic_id) cosmeticByAuthor.set(c.id, c.cosmetic_id);
      }
    } catch {
      // ignore — cosmetic_id column may not exist yet
    }
  }

  const jar = cookies();
  return rows.map((r) => {
    const votedRaw = jar.get(`moomz_voted_${r.slug}`)?.value;
    return {
      id: r.id,
      slug: r.slug,
      question: r.question,
      options: Array.isArray(r.options) ? r.options : [],
      created_at: r.created_at,
      vote_count: r.vote_count ?? 0,
      recent_votes: r.recent_votes ?? 0,
      last_vote_at: r.last_vote_at,
      profile_id: r.profile_id,
      alreadyVoted: votedRaw !== undefined ? Number(votedRaw) : null,
      authorCosmeticId: r.profile_id ? cosmeticByAuthor.get(r.profile_id) ?? null : null,
    };
  });
}
