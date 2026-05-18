type Palette = { c1: string; c2: string; c3: string };

const PALETTES: Palette[] = [
  { c1: "#ff3d8b", c2: "#7c3aed", c3: "#f59e0b" }, // pink / purple / amber (default)
  { c1: "#06b6d4", c2: "#a855f7", c3: "#f472b6" }, // cyan / violet / pink
  { c1: "#10b981", c2: "#3b82f6", c3: "#fbbf24" }, // emerald / blue / yellow
  { c1: "#ef4444", c2: "#f97316", c3: "#facc15" }, // red / orange / yellow (sunset)
  { c1: "#8b5cf6", c2: "#ec4899", c3: "#06b6d4" }, // violet / pink / cyan
  { c1: "#f59e0b", c2: "#ec4899", c3: "#8b5cf6" }, // amber / pink / violet
  { c1: "#22d3ee", c2: "#a3e635", c3: "#f0abfc" }, // cyan / lime / fuchsia
  { c1: "#fb7185", c2: "#facc15", c3: "#34d399" }, // rose / yellow / emerald
];

export function paletteFor(slug: string): Palette {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = (hash * 31 + slug.charCodeAt(i)) >>> 0;
  }
  return PALETTES[hash % PALETTES.length];
}
