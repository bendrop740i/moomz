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
//   1. drop polls already seen on this device,
//   2. shuffle — so every app-open is a different order.
// The server already random-sampled the lake (get_feed_polls), so a plain
// shuffle here is enough to kill the "same order every time" feeling.
export function mixFeed(polls: FeedPoll[], seen: Set<string>): FeedPoll[] {
  if (polls.length === 0) return polls;
  const first = polls[0];
  const unseen = polls.filter((p) => !seen.has(p.slug));
  // Never starve the feed — if the seen filter wiped almost everything, keep
  // the whole list (a re-watch beats a blank screen).
  const pool = unseen.length >= 6 ? unseen : polls.slice();
  const mixed = shuffle(pool);
  // Pin the server's lead card when it survived the filter — it carries the
  // warm first paint, so reshuffling it would cause a visible flash on mount.
  if (!seen.has(first.slug)) {
    const idx = mixed.indexOf(first);
    if (idx > 0) {
      mixed.splice(idx, 1);
      mixed.unshift(first);
    }
  }
  return mixed;
}
