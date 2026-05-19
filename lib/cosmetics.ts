export type PaletteId =
  | "auto"
  | "default"
  | "ocean"
  | "sunset"
  | "neon"
  | "candy"
  | "matrix"
  | "fire"
  | "galaxy"
  | "gold";

export type UnlockReq =
  | { kind: "free" }
  | { kind: "points"; value: number }
  | { kind: "streak"; value: number };

export type CosmeticPalette = {
  id: PaletteId;
  name: string;
  c1: string;
  c2: string;
  c3: string;
  unlock: UnlockReq;
};

// "auto" = per-slug hashed palette (current default behavior). Cannot be equipped explicitly.
export const COSMETIC_PALETTES: CosmeticPalette[] = [
  { id: "auto",    name: "Auto",    c1: "#ff3d8b", c2: "#7c3aed", c3: "#f59e0b", unlock: { kind: "free" } },
  { id: "default", name: "Pink",    c1: "#ff3d8b", c2: "#7c3aed", c3: "#f59e0b", unlock: { kind: "free" } },
  { id: "ocean",   name: "Ocean",   c1: "#06b6d4", c2: "#3b82f6", c3: "#a855f7", unlock: { kind: "free" } },
  { id: "candy",   name: "Candy",   c1: "#f472b6", c2: "#a78bfa", c3: "#22d3ee", unlock: { kind: "points", value: 50 } },
  { id: "sunset",  name: "Sunset",  c1: "#ef4444", c2: "#f97316", c3: "#facc15", unlock: { kind: "points", value: 150 } },
  { id: "neon",    name: "Neon",    c1: "#22d3ee", c2: "#a3e635", c3: "#f0abfc", unlock: { kind: "points", value: 400 } },
  { id: "matrix",  name: "Matrix",  c1: "#10b981", c2: "#22c55e", c3: "#84cc16", unlock: { kind: "points", value: 1000 } },
  { id: "fire",    name: "Fire",    c1: "#dc2626", c2: "#f59e0b", c3: "#fde047", unlock: { kind: "streak", value: 12 } },
  { id: "galaxy",  name: "Galaxy",  c1: "#7c3aed", c2: "#ec4899", c3: "#0ea5e9", unlock: { kind: "streak", value: 18 } },
  { id: "gold",    name: "Gold",    c1: "#fbbf24", c2: "#f59e0b", c3: "#fde047", unlock: { kind: "points", value: 2500 } },
];

export function paletteById(id: string | null | undefined): CosmeticPalette | null {
  if (!id) return null;
  return COSMETIC_PALETTES.find((p) => p.id === id) ?? null;
}

export function isUnlocked(p: CosmeticPalette, stats: { points: number; topStreak: number }): boolean {
  if (p.unlock.kind === "free") return true;
  if (p.unlock.kind === "points") return stats.points >= p.unlock.value;
  if (p.unlock.kind === "streak") return stats.topStreak >= p.unlock.value;
  return false;
}

export function unlockLabel(p: CosmeticPalette): string {
  if (p.unlock.kind === "free") return "Libre";
  if (p.unlock.kind === "points") return `${p.unlock.value} pts`;
  if (p.unlock.kind === "streak") return `Streak ${p.unlock.value}`;
  return "";
}
