// Shared feed types — kept server-import-free so client components can pull the
// `FeedPoll` shape without dragging `next/headers` into the browser bundle.

export type FeedPoll = {
  id: string;
  slug: string;
  question: string;
  options: string[];
  created_at: string;
  vote_count: number;
  recent_votes: number;
  last_vote_at: string | null;
  profile_id: string | null;
  /** Option index this browser already voted for, or null. */
  alreadyVoted: number | null;
  /** Equipped cosmetic palette id of the poll's author, if any. */
  authorCosmeticId: string | null;
};
