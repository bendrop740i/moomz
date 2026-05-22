import type { FeedPoll } from "./types";

function shuffle<T>(arr: T[]): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Client-side feed mix, run once on mount:
//   1. keep the server's lead poll pinned as card 1,
//   2. drop already-seen polls from the rest,
//   3. shuffle the rest — so every app-open is a different order.
// The server already random-sampled the lake (get_feed_polls), so a plain
// shuffle of the tail is enough to kill the "same order every time" feeling.
//
// ⚠️ Card 1 is pinned UNCONDITIONALLY — even when it's already "seen". It is
// the exact card SSR painted on screen; if mixFeed moved a different poll into
// slot 0, the on-screen card would swap and replay its entrance animation on
// mount, which reads as the home "loading twice". The seen-filter + shuffle
// therefore only ever touch cards 2..N, which are off-screen — reordering
// those is free and invisible.
export function mixFeed(polls: FeedPoll[], seen: Set<string>): FeedPoll[] {
  if (polls.length <= 1) return polls;
  const [first, ...rest] = polls;
  const unseen = rest.filter((p) => !seen.has(p.slug));
  // Never starve the feed — if the seen filter wiped almost everything, keep
  // the whole tail (a re-watch beats a blank screen).
  const pool = unseen.length >= 6 ? unseen : rest.slice();
  return [first, ...shuffle(pool)];
}
