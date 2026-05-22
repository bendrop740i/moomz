import type { VsPair } from "../types";

// Translation packs — each carries one extra locale keyed by the same slugs
// as the content files. The loader merges them in by slug. All six non-source
// locales (es/it/pt/de/ja/zh) now cover every /vs comparison (980 pairs).

// es — all 10 categories
import { pairs as esTf } from "./es-tf";
import { pairs as esTc } from "./es-tc";
import { pairs as esTechCloud } from "./es-tech-cloud";
import { pairs as esSciChem } from "./es-science-chemistry";
import { pairs as esAnimLife } from "./es-animals-lifestyle";

// it — all 10 categories
import { pairs as itTf } from "./it-tf";
import { pairs as itTc } from "./it-tc";
import { pairs as itTechCloud } from "./it-tech-cloud";
import { pairs as itSciChem } from "./it-science-chemistry";
import { pairs as itAnimLife } from "./it-animals-lifestyle";

// de — all 10 categories
import { pairs as deTf } from "./de-tf";
import { pairs as deTl } from "./de-tl";
import { pairs as deAnimCult } from "./de-animals-culture";
import { pairs as deCloudTravel } from "./de-cloud-travel";
import { pairs as deSciChem } from "./de-science-chemistry";

// pt — all 10 categories
import { pairs as ptTf } from "./pt-tf";
import { pairs as ptSa } from "./pt-sa";
import { pairs as ptTechCloud } from "./pt-tech-cloud";
import { pairs as ptChemistry } from "./pt-chemistry";
import { pairs as ptCulture } from "./pt-culture";
import { pairs as ptLifestyle } from "./pt-lifestyle";
import { pairs as ptTravel } from "./pt-travel";

// ja — all 10 categories (culture split across 4 files)
import { pairs as jaTf } from "./ja-tf";
import { pairs as jaTech } from "./ja-tech";
import { pairs as jaCloud } from "./ja-cloud";
import { pairs as jaChemistry } from "./ja-chemistry";
import { pairs as jaAnimals } from "./ja-animals";
import { pairs as jaTravel } from "./ja-travel";
import { pairs as jaScience } from "./ja-science";
import { pairs as jaLifestyle } from "./ja-lifestyle";
import { pairs as jaCulture } from "./ja-culture";
import { pairs as jaCultureB } from "./ja-culture-b";
import { pairs as jaCultureC } from "./ja-culture-c";
import { pairs as jaCultureExtra } from "./ja-culture-extra";

// zh — all 10 categories (science split across 3 files)
import { pairs as zhTf } from "./zh-tf";
import { pairs as zhTech } from "./zh-tech";
import { pairs as zhCloud } from "./zh-cloud";
import { pairs as zhTravel } from "./zh-travel";
import { pairs as zhScience } from "./zh-science";
import { pairs as zhScienceB } from "./zh-science-b";
import { pairs as zhScienceExtra } from "./zh-science-extra";
import { pairs as zhChemistry } from "./zh-chemistry";
import { pairs as zhAnimals } from "./zh-animals";
import { pairs as zhLifestyle } from "./zh-lifestyle";
import { pairs as zhCulture } from "./zh-culture";

export const translations: VsPair[][] = [
  esTf, esTc, esTechCloud, esSciChem, esAnimLife,
  itTf, itTc, itTechCloud, itSciChem, itAnimLife,
  deTf, deTl, deAnimCult, deCloudTravel, deSciChem,
  ptTf, ptSa, ptTechCloud, ptChemistry, ptCulture, ptLifestyle, ptTravel,
  jaTf, jaTech, jaCloud, jaChemistry, jaAnimals, jaTravel, jaScience,
  jaLifestyle, jaCulture, jaCultureB, jaCultureC, jaCultureExtra,
  zhTf, zhTech, zhCloud, zhTravel, zhScience, zhScienceB, zhScienceExtra,
  zhChemistry, zhAnimals, zhLifestyle, zhCulture,
];
