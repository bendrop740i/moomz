import type { VsPair } from "../types";

import { pairs as esTf } from "./es-tf";
import { pairs as jaTf } from "./ja-tf";

// Translation packs — each carries one extra locale keyed by the same slugs
// as the content files. The loader merges them in by slug.
export const translations: VsPair[][] = [esTf, jaTf];
