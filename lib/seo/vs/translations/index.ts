import type { VsPair } from "../types";

// Translation files are added by wave-2 agents (es/it/pt/de/ja/zh). Each
// exports `pairs: VsPair[]` keyed by the same slugs as the content files,
// carrying only the extra-locale content. Until they land, this list is
// empty and the loader simply serves EN+FR.

export const translations: VsPair[][] = [];
