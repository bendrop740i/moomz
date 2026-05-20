import type { VsPair } from "../types";

import { pairs as esTf } from "./es-tf";
import { pairs as esTc } from "./es-tc";
import { pairs as itTf } from "./it-tf";
import { pairs as itTc } from "./it-tc";
import { pairs as ptTf } from "./pt-tf";
import { pairs as ptSa } from "./pt-sa";
import { pairs as deTf } from "./de-tf";
import { pairs as deTl } from "./de-tl";
import { pairs as jaTf } from "./ja-tf";
import { pairs as zhTf } from "./zh-tf";

// Translation packs — each carries one extra locale keyed by the same slugs
// as the content files. The loader merges them in by slug.
export const translations: VsPair[][] = [
  esTf, esTc,
  itTf, itTc,
  ptTf, ptSa,
  deTf, deTl,
  jaTf,
  zhTf,
];
