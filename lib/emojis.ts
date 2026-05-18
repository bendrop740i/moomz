const POOL = [
  "🔥", "💖", "✨", "👀", "🌶️", "😭",
  "🎉", "🤡", "💀", "🥶", "😎", "🤔",
  "🤯", "😈", "👻", "🐸", "🦄", "🍕",
  "🍔", "🍩", "🥑", "☕", "🌚", "🌞",
  "⭐", "⚡", "💥", "💫", "🚀", "🎯",
  "💎", "🎮", "🏆", "❤️", "🫦", "🥺",
  "😤", "🤤", "🤪", "😏", "💯", "🥵",
  "🍑", "🍒", "🍓", "🍿", "🎸", "📸",
];

export function emojisFor(slug: string, count: number): string[] {
  let seed = 0;
  for (let i = 0; i < slug.length; i++) {
    seed = (seed * 31 + slug.charCodeAt(i)) >>> 0;
  }
  const arr = POOL.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    const j = seed % (i + 1);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.slice(0, Math.max(count, 2));
}
