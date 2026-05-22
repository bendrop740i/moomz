/**
 * Tiny wrapper over the Web Vibration API for vote-flow haptics.
 *
 * No-ops wherever the API is missing — notably iOS Safari, which has never
 * implemented `navigator.vibrate` — so callers can fire it unconditionally
 * without feature-checking. Synchronous and dependency-free to keep the vote
 * tap path cheap.
 */
type HapticKind = "tap" | "vote" | "majority" | "rebel";

// Durations / patterns in ms. A bare number is a single buzz; an array
// alternates vibrate/pause. The reveal patterns are deliberately distinct so
// landing with the crowd vs. going rebel *feels* different in the hand.
const PATTERNS: Record<HapticKind, number | number[]> = {
  tap: 10,
  vote: 18,
  majority: [0, 26, 60, 18],
  rebel: [0, 34, 45, 22, 45, 64],
};

export function haptic(kind: HapticKind = "tap"): void {
  if (typeof navigator === "undefined") return;
  const vibrate = navigator.vibrate?.bind(navigator);
  if (!vibrate) return;
  try {
    vibrate(PATTERNS[kind]);
  } catch {
    // Some engines throw if called outside a user gesture — ignore.
  }
}
