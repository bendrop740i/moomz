import type { VsPair } from "../types";

// Translation packs — each carries one extra locale keyed by the same slugs
// as the content files. The loader merges them in by slug.

// es — complete (all 10 categories, 1000 pairs)
import { pairs as esTf } from "./es-tf";
import { pairs as esTc } from "./es-tc";
import { pairs as esTechCloud } from "./es-tech-cloud";
import { pairs as esSciChem } from "./es-science-chemistry";
import { pairs as esAnimLife } from "./es-animals-lifestyle";

// it — complete (all 10 categories, 1000 pairs)
import { pairs as itTf } from "./it-tf";
import { pairs as itTc } from "./it-tc";
import { pairs as itTechCloud } from "./it-tech-cloud";
import { pairs as itSciChem } from "./it-science-chemistry";
import { pairs as itAnimLife } from "./it-animals-lifestyle";

// de — complete (all 10 categories, 1000 pairs)
import { pairs as deTf } from "./de-tf";
import { pairs as deTl } from "./de-tl";
import { pairs as deAnimCult } from "./de-animals-culture";
import { pairs as deCloudTravel } from "./de-cloud-travel";
import { pairs as deSciChem } from "./de-science-chemistry";

// pt — tools/food/animals/science/tech/cloud done; travel/chemistry/lifestyle/culture WIP
import { pairs as ptTf } from "./pt-tf";
import { pairs as ptSa } from "./pt-sa";
import { pairs as ptTechCloud } from "./pt-tech-cloud";

// ja — tools/food done; rest WIP
import { pairs as jaTf } from "./ja-tf";

// zh — tools/food done; rest WIP
import { pairs as zhTf } from "./zh-tf";

export const translations: VsPair[][] = [
  esTf, esTc, esTechCloud, esSciChem, esAnimLife,
  itTf, itTc, itTechCloud, itSciChem, itAnimLife,
  deTf, deTl, deAnimCult, deCloudTravel, deSciChem,
  ptTf, ptSa, ptTechCloud,
  jaTf,
  zhTf,
];
