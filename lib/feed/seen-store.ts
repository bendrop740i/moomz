// Persistent "already seen" memory for the immersive feed.
//
// The old feed only knew the last ~50 voted/skipped slugs (a cookie) — so polls
// kept coming back and the app felt like "always the same moomz". This keeps a
// much larger memory in localStorage: every poll the viewer actually reached is
// remembered, so the feed can keep serving genuinely new content for a long
// time. localStorage (not a cookie) means zero bytes on every request and ample
// room; it's per-device, which matches moomz's anonymous-by-default model.

const KEY = "moomz_seen_v1";
const CAP = 1200;
const EVICT = 200;

type SeenMap = Record<string, number>;

function read(): SeenMap {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(KEY);
    const parsed = raw ? JSON.parse(raw) : {};
    return parsed && typeof parsed === "object" ? (parsed as SeenMap) : {};
  } catch {
    return {};
  }
}

function write(map: SeenMap) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(map));
  } catch {
    // quota / private mode — feed still works, just without long memory
  }
}

/** Slugs the viewer has already seen on this device. */
export function getSeenSet(): Set<string> {
  return new Set(Object.keys(read()));
}

/** Remember a poll as seen (idempotent, refreshes its recency). */
export function markSeen(slug: string) {
  if (typeof window === "undefined" || !slug) return;
  const map = read();
  map[slug] = Date.now();
  const keys = Object.keys(map);
  if (keys.length > CAP) {
    // Drop the least-recently-seen so the store can't grow without bound.
    keys.sort((a, b) => (map[a] ?? 0) - (map[b] ?? 0));
    for (let i = 0; i < keys.length - (CAP - EVICT); i++) delete map[keys[i]];
  }
  write(map);
}
