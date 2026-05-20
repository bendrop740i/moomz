import type { VsPair } from "../types";

export const pairs: VsPair[] = [
  {
    slug: "acid-vs-base",
    a: "Acid",
    b: "Base",
    category: "chemistry",
    emoji_a: "🧪",
    emoji_b: "🧪",
    content: {
      en: {
        title: "Acid vs Base: pH, Properties, Examples",
        h1: "Acid vs Base: How to Tell Them Apart",
        description:
          "Acids donate protons and taste sour; bases accept protons and feel slippery. Compare pH, reactions and everyday examples side by side.",
        intro:
          "Acids and bases sit at opposite ends of the pH scale, yet both are essential to chemistry and life. Knowing how each behaves helps you predict reactions and read litmus tests.",
        pros_a: [
          "Donates H+ ions in water",
          "pH below 7",
          "Tastes sour, turns litmus red",
          "Reacts with metals to release hydrogen",
          "Examples: HCl, vinegar, citric acid",
        ],
        pros_b: [
          "Accepts H+ or donates OH- ions",
          "pH above 7",
          "Feels slippery, turns litmus blue",
          "Reacts with acids to form salt and water",
          "Examples: NaOH, ammonia, baking soda",
        ],
        verdict:
          "Acids and bases are chemical opposites that neutralize each other. Use pH to classify them: below 7 is acidic, above 7 is basic, and exactly 7 is neutral.",
        faq: [
          {
            q: "What happens when an acid meets a base?",
            a: "They undergo a neutralization reaction, producing a salt and water and moving the pH toward 7.",
          },
          {
            q: "How do you test for an acid or base?",
            a: "Litmus paper is the simplest test: acids turn it red, bases turn it blue. A pH meter gives a precise number.",
          },
          {
            q: "Is water an acid or a base?",
            a: "Pure water is neutral with a pH of 7; it can act as both a weak acid and a weak base, which is called amphoteric.",
          },
        ],
      },
      fr: {
        title: "Acide vs Base : pH, propriétés, exemples",
        h1: "Acide vs Base : comment les distinguer",
        description:
          "Les acides cèdent des protons et ont un goût aigre ; les bases captent des protons et sont glissantes. Comparez pH et réactions.",
        intro:
          "Les acides et les bases occupent les extrémités opposées de l'échelle de pH, mais tous deux sont essentiels à la chimie et à la vie. Comprendre leur comportement aide à prévoir les réactions.",
        pros_a: [
          "Cède des ions H+ dans l'eau",
          "pH inférieur à 7",
          "Goût aigre, rougit le tournesol",
          "Réagit avec les métaux en libérant de l'hydrogène",
          "Exemples : HCl, vinaigre, acide citrique",
        ],
        pros_b: [
          "Capte des H+ ou cède des ions OH-",
          "pH supérieur à 7",
          "Toucher glissant, bleuit le tournesol",
          "Réagit avec les acides en formant sel et eau",
          "Exemples : NaOH, ammoniac, bicarbonate",
        ],
        verdict:
          "Les acides et les bases sont des opposés chimiques qui se neutralisent. Le pH les classe : sous 7 acide, au-dessus 7 basique, exactement 7 neutre.",
        faq: [
          {
            q: "Que se passe-t-il quand un acide rencontre une base ?",
            a: "Ils subissent une réaction de neutralisation, produisant un sel et de l'eau, et le pH se rapproche de 7.",
          },
          {
            q: "Comment tester un acide ou une base ?",
            a: "Le papier tournesol est le test le plus simple : les acides le rougissent, les bases le bleuissent. Un pH-mètre donne une valeur précise.",
          },
          {
            q: "L'eau est-elle un acide ou une base ?",
            a: "L'eau pure est neutre avec un pH de 7 ; elle peut agir comme acide faible et base faible, on dit qu'elle est amphotère.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "strong-acid-vs-weak-acid",
    a: "Strong acid",
    b: "Weak acid",
    category: "chemistry",
    emoji_a: "🧪",
    emoji_b: "🧪",
    content: {
      en: {
        title: "Strong Acid vs Weak Acid: Key Differences",
        h1: "Strong Acid vs Weak Acid Explained",
        description:
          "Strong acids ionize completely in water; weak acids only partially. Compare dissociation, pH and examples for chemistry study.",
        intro:
          "The strength of an acid is about how fully it ionizes, not how concentrated it is. This distinction shapes pH, conductivity and reaction speed.",
        pros_a: [
          "Ionizes 100% in water",
          "Very low pH at same concentration",
          "High electrical conductivity",
          "Reaction essentially irreversible",
          "Examples: HCl, HNO3, H2SO4",
        ],
        pros_b: [
          "Ionizes only partially in water",
          "Higher pH than strong acid at same concentration",
          "Lower conductivity",
          "Establishes an equilibrium (reversible)",
          "Examples: acetic acid, carbonic acid, HF",
        ],
        verdict:
          "Strong acids dissociate fully and weak acids set up an equilibrium. Strength differs from concentration: a dilute strong acid can be weaker in effect than a concentrated weak one.",
        faq: [
          {
            q: "Does strong mean concentrated?",
            a: "No. Strength refers to degree of ionization; concentration refers to amount per volume. They are independent properties.",
          },
          {
            q: "Why do weak acids have a Ka value?",
            a: "Because they only partially ionize, an equilibrium constant Ka quantifies how far the dissociation proceeds.",
          },
          {
            q: "Which conducts electricity better?",
            a: "A strong acid, because full ionization provides far more free ions to carry current.",
          },
        ],
      },
      fr: {
        title: "Acide fort vs Acide faible : différences",
        h1: "Acide fort vs Acide faible expliqués",
        description:
          "Les acides forts s'ionisent totalement dans l'eau ; les faibles partiellement. Comparez dissociation, pH et exemples.",
        intro:
          "La force d'un acide concerne son degré d'ionisation, pas sa concentration. Cette distinction influence le pH, la conductivité et la vitesse de réaction.",
        pros_a: [
          "S'ionise à 100 % dans l'eau",
          "pH très bas à concentration égale",
          "Conductivité électrique élevée",
          "Réaction quasi irréversible",
          "Exemples : HCl, HNO3, H2SO4",
        ],
        pros_b: [
          "Ne s'ionise que partiellement dans l'eau",
          "pH plus élevé qu'un acide fort à concentration égale",
          "Conductivité plus faible",
          "Établit un équilibre (réversible)",
          "Exemples : acide acétique, acide carbonique, HF",
        ],
        verdict:
          "Les acides forts se dissocient totalement, les faibles établissent un équilibre. La force diffère de la concentration : un acide fort dilué peut agir moins qu'un acide faible concentré.",
        faq: [
          {
            q: "Fort signifie-t-il concentré ?",
            a: "Non. La force désigne le degré d'ionisation ; la concentration la quantité par volume. Ce sont des propriétés indépendantes.",
          },
          {
            q: "Pourquoi les acides faibles ont-ils une valeur Ka ?",
            a: "Comme ils s'ionisent partiellement, la constante d'équilibre Ka quantifie l'avancement de la dissociation.",
          },
          {
            q: "Lequel conduit mieux l'électricité ?",
            a: "Un acide fort, car l'ionisation totale fournit beaucoup plus d'ions libres pour transporter le courant.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "ph-vs-poh",
    a: "pH",
    b: "pOH",
    category: "chemistry",
    emoji_a: "🧪",
    emoji_b: "🧪",
    content: {
      en: {
        title: "pH vs pOH: Measuring Acidity and Basicity",
        h1: "pH vs pOH: Two Sides of the Same Scale",
        description:
          "pH tracks hydrogen ions, pOH tracks hydroxide ions, and the two always add to 14. Compare formulas and uses for chemistry.",
        intro:
          "pH and pOH are complementary scales describing the same solution. Understanding their link makes acid-base calculations far quicker.",
        pros_a: [
          "Measures H+ ion concentration",
          "pH = -log[H+]",
          "Lower value means more acidic",
          "Most commonly reported scale",
          "Range 0-14 in water at 25°C",
        ],
        pros_b: [
          "Measures OH- ion concentration",
          "pOH = -log[OH-]",
          "Lower value means more basic",
          "Useful for base calculations",
          "Always equals 14 minus pH at 25°C",
        ],
        verdict:
          "pH and pOH describe the same equilibrium from opposite directions. Because pH + pOH = 14 in water at 25°C, knowing one instantly gives the other.",
        faq: [
          {
            q: "Why do pH and pOH add to 14?",
            a: "Because water's ion product Kw is 1×10⁻¹⁴ at 25°C, so the logs of [H+] and [OH-] sum to 14.",
          },
          {
            q: "Which is used more often?",
            a: "pH is far more common in labs and everyday use, but pOH simplifies many base-strength calculations.",
          },
          {
            q: "Does the sum stay 14 at all temperatures?",
            a: "No. Kw changes with temperature, so the pH + pOH sum is only exactly 14 at 25°C.",
          },
        ],
      },
      fr: {
        title: "pH vs pOH : mesurer acidité et basicité",
        h1: "pH vs pOH : deux faces de la même échelle",
        description:
          "Le pH suit les ions hydrogène, le pOH les ions hydroxyde, et leur somme vaut toujours 14. Comparez formules et usages.",
        intro:
          "Le pH et le pOH sont des échelles complémentaires décrivant la même solution. Comprendre leur lien accélère les calculs acido-basiques.",
        pros_a: [
          "Mesure la concentration en ions H+",
          "pH = -log[H+]",
          "Une valeur basse signifie plus acide",
          "Échelle la plus couramment utilisée",
          "Plage 0-14 dans l'eau à 25°C",
        ],
        pros_b: [
          "Mesure la concentration en ions OH-",
          "pOH = -log[OH-]",
          "Une valeur basse signifie plus basique",
          "Utile pour les calculs sur les bases",
          "Vaut toujours 14 moins le pH à 25°C",
        ],
        verdict:
          "Le pH et le pOH décrivent le même équilibre en sens opposés. Comme pH + pOH = 14 dans l'eau à 25°C, connaître l'un donne aussitôt l'autre.",
        faq: [
          {
            q: "Pourquoi pH et pOH font-ils 14 ?",
            a: "Parce que le produit ionique de l'eau Kw vaut 1×10⁻¹⁴ à 25°C, donc les logs de [H+] et [OH-] s'additionnent à 14.",
          },
          {
            q: "Lequel est le plus utilisé ?",
            a: "Le pH est bien plus courant en laboratoire et au quotidien, mais le pOH simplifie de nombreux calculs sur les bases.",
          },
          {
            q: "La somme reste-t-elle 14 à toute température ?",
            a: "Non. Kw varie avec la température, donc la somme pH + pOH ne vaut exactement 14 qu'à 25°C.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "ionic-bond-vs-covalent-bond",
    a: "Ionic bond",
    b: "Covalent bond",
    category: "chemistry",
    emoji_a: "⚛️",
    emoji_b: "🔗",
    content: {
      en: {
        title: "Ionic Bond vs Covalent Bond: Compared",
        h1: "Ionic Bond vs Covalent Bond Explained",
        description:
          "Ionic bonds transfer electrons; covalent bonds share them. Compare formation, melting points and examples for chemistry study.",
        intro:
          "Chemical bonds hold matter together, and the two main types differ in how electrons are handled. This shapes whether a substance is brittle salt or a soft gas.",
        pros_a: [
          "Electrons transferred from metal to nonmetal",
          "Forms charged ions held by attraction",
          "High melting and boiling points",
          "Conducts electricity when molten or dissolved",
          "Examples: NaCl, MgO, CaF2",
        ],
        pros_b: [
          "Electrons shared between nonmetals",
          "Forms discrete neutral molecules",
          "Generally lower melting points",
          "Usually does not conduct electricity",
          "Examples: H2O, CO2, CH4",
        ],
        verdict:
          "Ionic bonds appear between metals and nonmetals through electron transfer; covalent bonds appear between nonmetals through sharing. Electronegativity difference predicts which forms.",
        faq: [
          {
            q: "How do I predict the bond type?",
            a: "Compare electronegativities: a large difference favors ionic bonding, a small one favors covalent bonding.",
          },
          {
            q: "Why are ionic compounds brittle?",
            a: "Shifting the lattice aligns like charges, which repel and crack the crystal.",
          },
          {
            q: "Can a bond be partly both?",
            a: "Yes. Polar covalent bonds share electrons unequally, sitting between purely ionic and purely covalent.",
          },
        ],
      },
      fr: {
        title: "Liaison ionique vs covalente : comparées",
        h1: "Liaison ionique vs Liaison covalente",
        description:
          "Les liaisons ioniques transfèrent des électrons ; les covalentes les partagent. Comparez formation, points de fusion et exemples.",
        intro:
          "Les liaisons chimiques maintiennent la matière, et les deux types principaux diffèrent par la gestion des électrons. Cela détermine sel cassant ou gaz mou.",
        pros_a: [
          "Électrons transférés d'un métal vers un non-métal",
          "Forme des ions chargés liés par attraction",
          "Points de fusion et d'ébullition élevés",
          "Conduit le courant fondue ou dissoute",
          "Exemples : NaCl, MgO, CaF2",
        ],
        pros_b: [
          "Électrons partagés entre non-métaux",
          "Forme des molécules neutres distinctes",
          "Points de fusion généralement plus bas",
          "Ne conduit généralement pas le courant",
          "Exemples : H2O, CO2, CH4",
        ],
        verdict:
          "Les liaisons ioniques apparaissent entre métaux et non-métaux par transfert d'électrons ; les covalentes entre non-métaux par partage. La différence d'électronégativité prédit laquelle se forme.",
        faq: [
          {
            q: "Comment prédire le type de liaison ?",
            a: "Comparez les électronégativités : une grande différence favorise l'ionique, une petite la covalente.",
          },
          {
            q: "Pourquoi les composés ioniques sont-ils cassants ?",
            a: "Décaler le réseau aligne des charges identiques qui se repoussent et fissurent le cristal.",
          },
          {
            q: "Une liaison peut-elle être un peu des deux ?",
            a: "Oui. Les liaisons covalentes polaires partagent les électrons inégalement, entre l'ionique pur et le covalent pur.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "covalent-bond-vs-metallic-bond",
    a: "Covalent bond",
    b: "Metallic bond",
    category: "chemistry",
    emoji_a: "🔗",
    emoji_b: "🪙",
    content: {
      en: {
        title: "Covalent Bond vs Metallic Bond: Compared",
        h1: "Covalent vs Metallic Bonding Explained",
        description:
          "Covalent bonds share electron pairs between atoms; metallic bonds pool electrons across a lattice. Compare properties side by side.",
        intro:
          "Both bonds involve shared electrons, but the way electrons move sets them apart. One gives insulating molecules, the other gives shiny conductors.",
        pros_a: [
          "Electrons shared in fixed localized pairs",
          "Forms molecules or covalent networks",
          "Usually poor electrical conductor",
          "Found between nonmetal atoms",
          "Examples: O2, diamond, SiO2",
        ],
        pros_b: [
          "Electrons delocalized in a shared sea",
          "Holds a lattice of positive metal ions",
          "Excellent conductor of heat and electricity",
          "Malleable and ductile",
          "Examples: iron, copper, aluminium",
        ],
        verdict:
          "Covalent bonds lock electrons between specific atoms, while metallic bonds let electrons roam freely. That mobility explains why metals conduct and bend without breaking.",
        faq: [
          {
            q: "Why are metals malleable but covalent solids brittle?",
            a: "The electron sea lets metal layers slide, while fixed covalent bonds snap when atoms shift.",
          },
          {
            q: "Which conducts electricity?",
            a: "Metallic bonding conducts well because delocalized electrons move freely; most covalent substances do not.",
          },
          {
            q: "Are covalent network solids strong?",
            a: "Yes. Giant covalent structures like diamond are extremely hard and have very high melting points.",
          },
        ],
      },
      fr: {
        title: "Liaison covalente vs métallique : comparées",
        h1: "Liaison covalente vs Liaison métallique",
        description:
          "Les liaisons covalentes partagent des paires d'électrons ; les métalliques mettent en commun des électrons. Comparez leurs propriétés.",
        intro:
          "Les deux liaisons impliquent des électrons partagés, mais leur mobilité diffère. L'une donne des molécules isolantes, l'autre des conducteurs brillants.",
        pros_a: [
          "Électrons partagés en paires localisées fixes",
          "Forme des molécules ou réseaux covalents",
          "Mauvais conducteur électrique en général",
          "Présente entre atomes non métalliques",
          "Exemples : O2, diamant, SiO2",
        ],
        pros_b: [
          "Électrons délocalisés en une mer commune",
          "Maintient un réseau d'ions métalliques positifs",
          "Excellent conducteur de chaleur et d'électricité",
          "Malléable et ductile",
          "Exemples : fer, cuivre, aluminium",
        ],
        verdict:
          "Les liaisons covalentes fixent les électrons entre atomes précis, les métalliques les laissent libres. Cette mobilité explique la conduction et la déformation des métaux.",
        faq: [
          {
            q: "Pourquoi les métaux sont-ils malléables et les solides covalents cassants ?",
            a: "La mer d'électrons laisse glisser les couches métalliques, tandis que les liaisons covalentes fixes se brisent.",
          },
          {
            q: "Lequel conduit l'électricité ?",
            a: "La liaison métallique conduit bien grâce aux électrons délocalisés mobiles ; la plupart des composés covalents non.",
          },
          {
            q: "Les solides covalents réticulés sont-ils solides ?",
            a: "Oui. Les structures covalentes géantes comme le diamant sont très dures avec des points de fusion élevés.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "polar-vs-nonpolar",
    a: "Polar",
    b: "Nonpolar",
    category: "chemistry",
    emoji_a: "🧲",
    emoji_b: "⚪",
    content: {
      en: {
        title: "Polar vs Nonpolar Molecules: Compared",
        h1: "Polar vs Nonpolar Molecules Explained",
        description:
          "Polar molecules have uneven charge and dissolve in water; nonpolar molecules are symmetric. Compare bonding and solubility.",
        intro:
          "Polarity decides whether a molecule mixes with water or oil. It comes from electronegativity differences and the shape of the molecule.",
        pros_a: [
          "Uneven electron distribution, has a dipole",
          "Asymmetric molecular shape",
          "Dissolves in water and polar solvents",
          "Higher boiling points from dipole forces",
          "Examples: H2O, NH3, HCl",
        ],
        pros_b: [
          "Even electron distribution, no net dipole",
          "Symmetric molecular shape",
          "Dissolves in oils and nonpolar solvents",
          "Lower boiling points, weak dispersion forces",
          "Examples: O2, CO2, CH4",
        ],
        verdict:
          "Polar molecules carry partial charges and follow 'like dissolves like' with water; nonpolar molecules stay symmetric and mix with oils. Shape matters as much as bond type.",
        faq: [
          {
            q: "Can a molecule have polar bonds but be nonpolar?",
            a: "Yes. CO2 has polar bonds, but its linear symmetry cancels the dipoles, making the molecule nonpolar.",
          },
          {
            q: "Why does oil not mix with water?",
            a: "Oil is nonpolar and water is polar; their different intermolecular forces prevent mixing.",
          },
          {
            q: "How do I judge polarity?",
            a: "Check bond electronegativity differences and whether the molecular geometry is symmetric.",
          },
        ],
      },
      fr: {
        title: "Polaire vs Apolaire : molécules comparées",
        h1: "Molécules polaires vs apolaires expliquées",
        description:
          "Les molécules polaires ont une charge inégale et se dissolvent dans l'eau ; les apolaires sont symétriques. Comparez liaisons et solubilité.",
        intro:
          "La polarité décide si une molécule se mélange à l'eau ou à l'huile. Elle vient des différences d'électronégativité et de la forme de la molécule.",
        pros_a: [
          "Distribution inégale des électrons, possède un dipôle",
          "Forme moléculaire asymétrique",
          "Se dissout dans l'eau et les solvants polaires",
          "Points d'ébullition plus élevés (forces dipolaires)",
          "Exemples : H2O, NH3, HCl",
        ],
        pros_b: [
          "Distribution égale des électrons, pas de dipôle net",
          "Forme moléculaire symétrique",
          "Se dissout dans les huiles et solvants apolaires",
          "Points d'ébullition bas, forces de dispersion faibles",
          "Exemples : O2, CO2, CH4",
        ],
        verdict:
          "Les molécules polaires portent des charges partielles et suivent « semblable dissout semblable » avec l'eau ; les apolaires restent symétriques et se mélangent aux huiles.",
        faq: [
          {
            q: "Une molécule peut-elle avoir des liaisons polaires et être apolaire ?",
            a: "Oui. Le CO2 a des liaisons polaires, mais sa symétrie linéaire annule les dipôles, rendant la molécule apolaire.",
          },
          {
            q: "Pourquoi l'huile ne se mélange-t-elle pas à l'eau ?",
            a: "L'huile est apolaire et l'eau polaire ; leurs forces intermoléculaires différentes empêchent le mélange.",
          },
          {
            q: "Comment juger la polarité ?",
            a: "Vérifiez les différences d'électronégativité des liaisons et si la géométrie moléculaire est symétrique.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "hydrogen-bond-vs-dipole-dipole",
    a: "Hydrogen bond",
    b: "Dipole-dipole",
    category: "chemistry",
    emoji_a: "💧",
    emoji_b: "🧲",
    content: {
      en: {
        title: "Hydrogen Bond vs Dipole-Dipole Forces",
        h1: "Hydrogen Bond vs Dipole-Dipole Explained",
        description:
          "Hydrogen bonds are an especially strong dipole force with N, O or F. Compare strength and effects with ordinary dipole-dipole.",
        intro:
          "Both are intermolecular attractions between polar molecules, but hydrogen bonding is a stronger special case. It explains water's unusual properties.",
        pros_a: [
          "Strongest intermolecular attraction (non-ionic)",
          "Requires H bonded to N, O or F",
          "Raises boiling points dramatically",
          "Explains water's high boiling point and ice density",
          "Examples: water, DNA base pairing, NH3",
        ],
        pros_b: [
          "Weaker than hydrogen bonding",
          "Occurs between any polar molecules",
          "Aligns partial positive and negative ends",
          "Moderately raises boiling points",
          "Examples: HCl, acetone, SO2",
        ],
        verdict:
          "Hydrogen bonding is just a powerful subtype of dipole-dipole interaction restricted to N-H, O-H and F-H. Both pull polar molecules together, but hydrogen bonds win on strength.",
        faq: [
          {
            q: "Is a hydrogen bond a real chemical bond?",
            a: "No. It is a strong intermolecular force, weaker than covalent or ionic bonds within molecules.",
          },
          {
            q: "Why does water float as ice?",
            a: "Hydrogen bonds lock water molecules into an open hexagonal lattice that is less dense than liquid water.",
          },
          {
            q: "Which is stronger?",
            a: "Hydrogen bonds are stronger because of the highly concentrated charge on small N, O and F atoms.",
          },
        ],
      },
      fr: {
        title: "Liaison hydrogène vs Dipôle-dipôle",
        h1: "Liaison hydrogène vs Dipôle-dipôle",
        description:
          "La liaison hydrogène est une force dipolaire forte avec N, O ou F. Comparez force et effets avec le dipôle-dipôle ordinaire.",
        intro:
          "Les deux sont des attractions intermoléculaires entre molécules polaires, mais la liaison hydrogène est un cas particulier plus fort. Elle explique les propriétés de l'eau.",
        pros_a: [
          "Attraction intermoléculaire la plus forte (non ionique)",
          "Nécessite un H lié à N, O ou F",
          "Augmente fortement les points d'ébullition",
          "Explique l'ébullition élevée de l'eau et la glace",
          "Exemples : eau, appariement de l'ADN, NH3",
        ],
        pros_b: [
          "Plus faible que la liaison hydrogène",
          "Se produit entre toutes molécules polaires",
          "Aligne les extrémités partielles + et -",
          "Augmente modérément les points d'ébullition",
          "Exemples : HCl, acétone, SO2",
        ],
        verdict:
          "La liaison hydrogène est un sous-type puissant de l'interaction dipôle-dipôle limité à N-H, O-H et F-H. Les deux rapprochent les molécules polaires, mais la liaison hydrogène gagne en force.",
        faq: [
          {
            q: "Une liaison hydrogène est-elle une vraie liaison chimique ?",
            a: "Non. C'est une force intermoléculaire forte, plus faible que les liaisons covalentes ou ioniques.",
          },
          {
            q: "Pourquoi la glace flotte-t-elle ?",
            a: "Les liaisons hydrogène figent les molécules d'eau en un réseau hexagonal ouvert moins dense que l'eau liquide.",
          },
          {
            q: "Laquelle est la plus forte ?",
            a: "La liaison hydrogène, à cause de la charge très concentrée sur les petits atomes N, O et F.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "soluble-vs-insoluble",
    a: "Soluble",
    b: "Insoluble",
    category: "chemistry",
    emoji_a: "💧",
    emoji_b: "🪨",
    content: {
      en: {
        title: "Soluble vs Insoluble: Solubility Explained",
        h1: "Soluble vs Insoluble Substances",
        description:
          "Soluble substances dissolve into a solvent; insoluble ones do not. Compare solubility rules and examples for chemistry study.",
        intro:
          "Solubility describes whether a substance can dissolve in a given solvent. It depends on intermolecular forces, temperature and chemical nature.",
        pros_a: [
          "Dissolves to form a homogeneous solution",
          "Particles disperse evenly through the solvent",
          "Often follows 'like dissolves like'",
          "Solubility usually rises with temperature",
          "Examples: salt and sugar in water",
        ],
        pros_b: [
          "Does not dissolve appreciably in the solvent",
          "Stays as a separate solid or layer",
          "Can be separated by filtration",
          "Forms suspensions, not true solutions",
          "Examples: sand and chalk in water",
        ],
        verdict:
          "Soluble substances vanish into solution while insoluble ones remain visibly separate. The result depends on matching polarity between solute and solvent.",
        faq: [
          {
            q: "Is solubility all-or-nothing?",
            a: "No. Substances range from very soluble to slightly soluble to practically insoluble.",
          },
          {
            q: "How does temperature affect solubility?",
            a: "Most solids dissolve better when hot, while gases generally dissolve better when cold.",
          },
          {
            q: "How do I separate an insoluble solid?",
            a: "Filtration traps the insoluble solid while the solvent passes through.",
          },
        ],
      },
      fr: {
        title: "Soluble vs Insoluble : la solubilité",
        h1: "Substances solubles vs insolubles",
        description:
          "Les substances solubles se dissolvent dans un solvant ; les insolubles non. Comparez règles de solubilité et exemples.",
        intro:
          "La solubilité indique si une substance peut se dissoudre dans un solvant donné. Elle dépend des forces intermoléculaires, de la température et de la nature chimique.",
        pros_a: [
          "Se dissout en une solution homogène",
          "Les particules se dispersent uniformément",
          "Suit souvent « semblable dissout semblable »",
          "La solubilité augmente souvent avec la température",
          "Exemples : sel et sucre dans l'eau",
        ],
        pros_b: [
          "Ne se dissout pas notablement dans le solvant",
          "Reste un solide ou une couche séparée",
          "Peut être séparé par filtration",
          "Forme des suspensions, pas de vraies solutions",
          "Exemples : sable et craie dans l'eau",
        ],
        verdict:
          "Les substances solubles disparaissent en solution tandis que les insolubles restent visiblement séparées. Le résultat dépend de la compatibilité de polarité entre soluté et solvant.",
        faq: [
          {
            q: "La solubilité est-elle tout ou rien ?",
            a: "Non. Les substances vont de très solubles à peu solubles à pratiquement insolubles.",
          },
          {
            q: "Comment la température influence-t-elle la solubilité ?",
            a: "La plupart des solides se dissolvent mieux à chaud, alors que les gaz se dissolvent mieux à froid.",
          },
          {
            q: "Comment séparer un solide insoluble ?",
            a: "La filtration retient le solide insoluble pendant que le solvant passe.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "alkane-vs-alkene",
    a: "Alkane",
    b: "Alkene",
    category: "chemistry",
    emoji_a: "🛢️",
    emoji_b: "🔥",
    content: {
      en: {
        title: "Alkane vs Alkene: Hydrocarbon Differences",
        h1: "Alkane vs Alkene Explained",
        description:
          "Alkanes have only single C-C bonds; alkenes contain a C=C double bond. Compare formulas, reactivity and examples.",
        intro:
          "Alkanes and alkenes are both hydrocarbons but differ in saturation. That single double bond changes their reactivity completely.",
        pros_a: [
          "Only single carbon-carbon bonds (saturated)",
          "General formula CnH2n+2",
          "Relatively unreactive, undergoes substitution",
          "Burns cleanly as fuel",
          "Examples: methane, ethane, propane",
        ],
        pros_b: [
          "Contains at least one C=C double bond (unsaturated)",
          "General formula CnH2n",
          "Reactive, undergoes addition reactions",
          "Decolorizes bromine water",
          "Examples: ethene, propene, butene",
        ],
        verdict:
          "Alkanes are saturated and sluggish; alkenes are unsaturated and far more reactive thanks to the double bond. The bromine water test tells them apart instantly.",
        faq: [
          {
            q: "How can I tell an alkane from an alkene?",
            a: "Add bromine water: an alkene decolorizes it quickly while an alkane does not.",
          },
          {
            q: "Why are alkenes more reactive?",
            a: "The C=C double bond has an exposed pi electron cloud that readily attacks reagents.",
          },
          {
            q: "What reaction do alkenes undergo?",
            a: "Addition reactions, where atoms add across the double bond and convert it to a single bond.",
          },
        ],
      },
      fr: {
        title: "Alcane vs Alcène : différences hydrocarbures",
        h1: "Alcane vs Alcène expliqués",
        description:
          "Les alcanes n'ont que des liaisons C-C simples ; les alcènes ont une double liaison C=C. Comparez formules, réactivité et exemples.",
        intro:
          "Les alcanes et les alcènes sont des hydrocarbures mais diffèrent par la saturation. Cette double liaison change totalement leur réactivité.",
        pros_a: [
          "Uniquement des liaisons carbone-carbone simples (saturé)",
          "Formule générale CnH2n+2",
          "Peu réactif, subit des substitutions",
          "Brûle proprement comme carburant",
          "Exemples : méthane, éthane, propane",
        ],
        pros_b: [
          "Contient au moins une double liaison C=C (insaturé)",
          "Formule générale CnH2n",
          "Réactif, subit des additions",
          "Décolore l'eau de brome",
          "Exemples : éthène, propène, butène",
        ],
        verdict:
          "Les alcanes sont saturés et peu réactifs ; les alcènes insaturés et bien plus réactifs grâce à la double liaison. Le test à l'eau de brome les distingue aussitôt.",
        faq: [
          {
            q: "Comment distinguer un alcane d'un alcène ?",
            a: "Ajoutez de l'eau de brome : un alcène la décolore vite, un alcane non.",
          },
          {
            q: "Pourquoi les alcènes sont-ils plus réactifs ?",
            a: "La double liaison C=C possède un nuage d'électrons pi exposé qui attaque facilement les réactifs.",
          },
          {
            q: "Quelle réaction subissent les alcènes ?",
            a: "Des réactions d'addition, où des atomes s'ajoutent sur la double liaison et la convertissent en simple liaison.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "alkene-vs-alkyne",
    a: "Alkene",
    b: "Alkyne",
    category: "chemistry",
    emoji_a: "🔥",
    emoji_b: "⚡",
    content: {
      en: {
        title: "Alkene vs Alkyne: Double vs Triple Bond",
        h1: "Alkene vs Alkyne Explained",
        description:
          "Alkenes have a C=C double bond; alkynes have a C≡C triple bond. Compare formulas, bond strength and reactivity.",
        intro:
          "Alkenes and alkynes are both unsaturated hydrocarbons. The number of bonds between carbons changes geometry and reactivity.",
        pros_a: [
          "Contains a C=C double bond",
          "General formula CnH2n",
          "Planar geometry around the double bond",
          "Undergoes addition reactions",
          "Examples: ethene, propene",
        ],
        pros_b: [
          "Contains a C≡C triple bond",
          "General formula CnH2n-2",
          "Linear geometry around the triple bond",
          "More unsaturated, adds twice",
          "Examples: ethyne (acetylene), propyne",
        ],
        verdict:
          "Alkenes carry one degree of unsaturation per double bond; alkynes carry two per triple bond. Alkynes are more linear and can undergo two successive additions.",
        faq: [
          {
            q: "Which has the higher degree of unsaturation?",
            a: "An alkyne, because a triple bond counts as two degrees of unsaturation versus one for a double bond.",
          },
          {
            q: "What shape does an alkyne have?",
            a: "The triple-bonded carbons are linear with 180° bond angles.",
          },
          {
            q: "Can an alkyne become an alkane?",
            a: "Yes. Adding hydrogen twice converts a triple bond to a double bond and then to a single bond.",
          },
        ],
      },
      fr: {
        title: "Alcène vs Alcyne : double vs triple liaison",
        h1: "Alcène vs Alcyne expliqués",
        description:
          "Les alcènes ont une double liaison C=C ; les alcynes une triple liaison C≡C. Comparez formules, force de liaison et réactivité.",
        intro:
          "Les alcènes et les alcynes sont des hydrocarbures insaturés. Le nombre de liaisons entre carbones change la géométrie et la réactivité.",
        pros_a: [
          "Contient une double liaison C=C",
          "Formule générale CnH2n",
          "Géométrie plane autour de la double liaison",
          "Subit des réactions d'addition",
          "Exemples : éthène, propène",
        ],
        pros_b: [
          "Contient une triple liaison C≡C",
          "Formule générale CnH2n-2",
          "Géométrie linéaire autour de la triple liaison",
          "Plus insaturé, additionne deux fois",
          "Exemples : éthyne (acétylène), propyne",
        ],
        verdict:
          "Les alcènes portent un degré d'insaturation par double liaison ; les alcynes deux par triple liaison. Les alcynes sont plus linéaires et peuvent subir deux additions successives.",
        faq: [
          {
            q: "Lequel a le plus haut degré d'insaturation ?",
            a: "Un alcyne, car une triple liaison compte deux degrés d'insaturation contre un pour une double liaison.",
          },
          {
            q: "Quelle forme a un alcyne ?",
            a: "Les carbones de la triple liaison sont linéaires avec des angles de 180°.",
          },
          {
            q: "Un alcyne peut-il devenir un alcane ?",
            a: "Oui. Ajouter de l'hydrogène deux fois convertit la triple liaison en double puis en simple.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "aromatic-vs-aliphatic",
    a: "Aromatic",
    b: "Aliphatic",
    category: "chemistry",
    emoji_a: "🔵",
    emoji_b: "📏",
    content: {
      en: {
        title: "Aromatic vs Aliphatic Compounds Compared",
        h1: "Aromatic vs Aliphatic Compounds Explained",
        description:
          "Aromatic compounds contain stable ring systems like benzene; aliphatic ones have open or non-aromatic chains. Compare both.",
        intro:
          "Organic compounds split into aromatic and aliphatic families. The defining feature is whether a special delocalized ring is present.",
        pros_a: [
          "Contains a benzene-like delocalized ring",
          "Extra stability from electron delocalization",
          "Undergoes substitution to preserve the ring",
          "Often has a distinctive odor",
          "Examples: benzene, toluene, naphthalene",
        ],
        pros_b: [
          "Open chains or non-aromatic rings",
          "No special ring stabilization",
          "Includes alkanes, alkenes and alkynes",
          "Undergoes addition or substitution",
          "Examples: hexane, ethene, cyclohexane",
        ],
        verdict:
          "Aromatic compounds owe their stability to a delocalized ring of pi electrons; aliphatic compounds lack it. That stability makes aromatics resist addition reactions.",
        faq: [
          {
            q: "What makes a ring aromatic?",
            a: "It must be cyclic, planar, fully conjugated and follow Hückel's rule (4n+2 pi electrons).",
          },
          {
            q: "Is cyclohexane aromatic?",
            a: "No. It is a saturated ring with no delocalized pi system, so it is aliphatic.",
          },
          {
            q: "Why do aromatics prefer substitution?",
            a: "Substitution keeps the stable aromatic ring intact, while addition would destroy it.",
          },
        ],
      },
      fr: {
        title: "Aromatique vs Aliphatique : comparés",
        h1: "Composés aromatiques vs aliphatiques",
        description:
          "Les composés aromatiques contiennent des cycles stables comme le benzène ; les aliphatiques des chaînes ouvertes. Comparez les deux.",
        intro:
          "Les composés organiques se divisent en familles aromatiques et aliphatiques. Le critère est la présence d'un cycle délocalisé particulier.",
        pros_a: [
          "Contient un cycle délocalisé de type benzène",
          "Stabilité supplémentaire par délocalisation",
          "Subit la substitution pour préserver le cycle",
          "Possède souvent une odeur caractéristique",
          "Exemples : benzène, toluène, naphtalène",
        ],
        pros_b: [
          "Chaînes ouvertes ou cycles non aromatiques",
          "Pas de stabilisation cyclique particulière",
          "Inclut alcanes, alcènes et alcynes",
          "Subit addition ou substitution",
          "Exemples : hexane, éthène, cyclohexane",
        ],
        verdict:
          "Les composés aromatiques doivent leur stabilité à un cycle délocalisé d'électrons pi ; les aliphatiques en sont dépourvus. Cette stabilité fait résister les aromatiques aux additions.",
        faq: [
          {
            q: "Qu'est-ce qui rend un cycle aromatique ?",
            a: "Il doit être cyclique, plan, totalement conjugué et suivre la règle de Hückel (4n+2 électrons pi).",
          },
          {
            q: "Le cyclohexane est-il aromatique ?",
            a: "Non. C'est un cycle saturé sans système pi délocalisé, donc il est aliphatique.",
          },
          {
            q: "Pourquoi les aromatiques préfèrent-ils la substitution ?",
            a: "La substitution conserve le cycle aromatique stable, alors que l'addition le détruirait.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "cis-isomer-vs-trans-isomer",
    a: "Cis isomer",
    b: "Trans isomer",
    category: "chemistry",
    emoji_a: "🔀",
    emoji_b: "↔️",
    content: {
      en: {
        title: "Cis vs Trans Isomer: Geometric Isomerism",
        h1: "Cis vs Trans Isomer Explained",
        description:
          "Cis isomers have groups on the same side of a double bond; trans isomers on opposite sides. Compare properties side by side.",
        intro:
          "Cis and trans isomers are geometric isomers with the same formula but different 3D arrangement. The double bond locks them in place.",
        pros_a: [
          "Identical groups on the same side of the bond",
          "Often polar with a net dipole",
          "Usually lower melting point",
          "Less symmetric packing",
          "Example: cis-2-butene",
        ],
        pros_b: [
          "Identical groups on opposite sides",
          "Often nonpolar, dipoles can cancel",
          "Usually higher melting point",
          "More symmetric, packs efficiently",
          "Example: trans-2-butene",
        ],
        verdict:
          "Cis and trans isomers differ only in geometry around a rigid double bond, yet that changes polarity and melting point. Trans usually packs better and melts higher.",
        faq: [
          {
            q: "Why can't cis and trans interconvert freely?",
            a: "The double bond cannot rotate, so the two arrangements are locked unless the bond breaks.",
          },
          {
            q: "Which has the higher melting point?",
            a: "The trans isomer usually does, because its symmetric shape packs more tightly in a solid.",
          },
          {
            q: "Do they have the same molecular formula?",
            a: "Yes. They are isomers, so the formula is identical and only the spatial arrangement differs.",
          },
        ],
      },
      fr: {
        title: "Isomère cis vs trans : isomérie géométrique",
        h1: "Isomère cis vs trans expliqué",
        description:
          "Les isomères cis ont les groupes du même côté d'une double liaison ; les trans de côtés opposés. Comparez leurs propriétés.",
        intro:
          "Les isomères cis et trans sont des isomères géométriques de même formule mais d'arrangement 3D différent. La double liaison les fige.",
        pros_a: [
          "Groupes identiques du même côté de la liaison",
          "Souvent polaire avec un dipôle net",
          "Point de fusion généralement plus bas",
          "Empilement moins symétrique",
          "Exemple : cis-2-butène",
        ],
        pros_b: [
          "Groupes identiques de côtés opposés",
          "Souvent apolaire, dipôles pouvant s'annuler",
          "Point de fusion généralement plus élevé",
          "Plus symétrique, s'empile efficacement",
          "Exemple : trans-2-butène",
        ],
        verdict:
          "Les isomères cis et trans ne diffèrent que par la géométrie autour d'une double liaison rigide, ce qui change polarité et fusion. Le trans s'empile mieux et fond plus haut.",
        faq: [
          {
            q: "Pourquoi cis et trans ne s'interconvertissent-ils pas librement ?",
            a: "La double liaison ne peut pas tourner, donc les deux arrangements sont figés sauf si la liaison se brise.",
          },
          {
            q: "Lequel a le point de fusion le plus élevé ?",
            a: "L'isomère trans en général, car sa forme symétrique s'empile plus serré dans un solide.",
          },
          {
            q: "Ont-ils la même formule moléculaire ?",
            a: "Oui. Ce sont des isomères, donc la formule est identique et seul l'arrangement spatial diffère.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "enantiomer-vs-diastereomer",
    a: "Enantiomer",
    b: "Diastereomer",
    category: "chemistry",
    emoji_a: "🪞",
    emoji_b: "🧩",
    content: {
      en: {
        title: "Enantiomer vs Diastereomer: Stereoisomers",
        h1: "Enantiomer vs Diastereomer Explained",
        description:
          "Enantiomers are non-superimposable mirror images; diastereomers are stereoisomers that are not mirror images. Compare both.",
        intro:
          "Stereoisomers share connectivity but differ in 3D arrangement. Enantiomers and diastereomers are the two main categories.",
        pros_a: [
          "Non-superimposable mirror images of each other",
          "Identical physical properties (except optical rotation)",
          "Rotate plane-polarized light oppositely",
          "Differ at every stereocenter",
          "Example: D- and L-alanine",
        ],
        pros_b: [
          "Stereoisomers that are not mirror images",
          "Different physical properties (mp, bp, solubility)",
          "Can be separated by ordinary methods",
          "Differ at some but not all stereocenters",
          "Example: cis/trans isomers, sugars",
        ],
        verdict:
          "Enantiomers are perfect mirror images with identical properties; diastereomers differ at only some stereocenters and behave differently. The distinction matters for drug design.",
        faq: [
          {
            q: "How do enantiomers and diastereomers differ?",
            a: "Enantiomers are mirror images differing at all stereocenters; diastereomers differ at only some.",
          },
          {
            q: "Can you separate enantiomers easily?",
            a: "Not by ordinary methods, since their physical properties are identical; chiral techniques are needed.",
          },
          {
            q: "Why do enantiomers matter in medicine?",
            a: "One enantiomer of a drug can be active while its mirror image is inactive or harmful.",
          },
        ],
      },
      fr: {
        title: "Énantiomère vs Diastéréoisomère : stéréoisomères",
        h1: "Énantiomère vs Diastéréoisomère expliqués",
        description:
          "Les énantiomères sont des images miroir non superposables ; les diastéréoisomères des stéréoisomères qui ne sont pas miroir. Comparez.",
        intro:
          "Les stéréoisomères partagent la connectivité mais diffèrent en 3D. Énantiomères et diastéréoisomères en sont les deux grandes catégories.",
        pros_a: [
          "Images miroir non superposables l'une de l'autre",
          "Propriétés physiques identiques (sauf rotation optique)",
          "Font tourner la lumière polarisée en sens opposés",
          "Diffèrent à chaque stéréocentre",
          "Exemple : D- et L-alanine",
        ],
        pros_b: [
          "Stéréoisomères qui ne sont pas des images miroir",
          "Propriétés physiques différentes (pf, peb, solubilité)",
          "Séparables par des méthodes ordinaires",
          "Diffèrent à certains stéréocentres seulement",
          "Exemple : isomères cis/trans, sucres",
        ],
        verdict:
          "Les énantiomères sont des images miroir parfaites aux propriétés identiques ; les diastéréoisomères diffèrent à certains stéréocentres et se comportent autrement.",
        faq: [
          {
            q: "Comment énantiomères et diastéréoisomères diffèrent-ils ?",
            a: "Les énantiomères sont des images miroir différant à tous les stéréocentres ; les diastéréoisomères à certains seulement.",
          },
          {
            q: "Peut-on séparer facilement des énantiomères ?",
            a: "Pas par des méthodes ordinaires, leurs propriétés physiques étant identiques ; il faut des techniques chirales.",
          },
          {
            q: "Pourquoi les énantiomères importent-ils en médecine ?",
            a: "Un énantiomère d'un médicament peut être actif tandis que son image miroir est inactive ou nocive.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "sn1-vs-sn2",
    a: "SN1",
    b: "SN2",
    category: "chemistry",
    emoji_a: "1️⃣",
    emoji_b: "2️⃣",
    content: {
      en: {
        title: "SN1 vs SN2: Nucleophilic Substitution",
        h1: "SN1 vs SN2 Reaction Mechanisms",
        description:
          "SN1 is a two-step reaction via a carbocation; SN2 is a one-step backside attack. Compare rate, stereochemistry and substrates.",
        intro:
          "SN1 and SN2 are the two key nucleophilic substitution mechanisms. Choosing between them depends on substrate, nucleophile and solvent.",
        pros_a: [
          "Two-step mechanism via a carbocation",
          "Rate depends only on the substrate",
          "Favored by tertiary substrates",
          "Produces a racemic mixture",
          "Prefers polar protic solvents",
        ],
        pros_b: [
          "One-step concerted backside attack",
          "Rate depends on substrate and nucleophile",
          "Favored by primary substrates",
          "Causes inversion of configuration",
          "Prefers polar aprotic solvents",
        ],
        verdict:
          "SN1 runs through a carbocation and gives racemization, while SN2 is concerted and inverts the stereocenter. Substrate type is the strongest predictor of which dominates.",
        faq: [
          {
            q: "Which mechanism do tertiary halides favor?",
            a: "SN1, because tertiary carbocations are stabilized while steric bulk blocks SN2 backside attack.",
          },
          {
            q: "What happens to stereochemistry in SN2?",
            a: "The configuration inverts, like an umbrella flipping in the wind.",
          },
          {
            q: "How does solvent affect the choice?",
            a: "Polar protic solvents favor SN1, while polar aprotic solvents favor SN2.",
          },
        ],
      },
      fr: {
        title: "SN1 vs SN2 : substitution nucléophile",
        h1: "Mécanismes SN1 vs SN2",
        description:
          "SN1 est une réaction en deux étapes via un carbocation ; SN2 une attaque par l'arrière en une étape. Comparez vitesse et stéréochimie.",
        intro:
          "SN1 et SN2 sont les deux mécanismes clés de substitution nucléophile. Le choix dépend du substrat, du nucléophile et du solvant.",
        pros_a: [
          "Mécanisme en deux étapes via un carbocation",
          "Vitesse dépendant uniquement du substrat",
          "Favorisé par les substrats tertiaires",
          "Produit un mélange racémique",
          "Préfère les solvants polaires protiques",
        ],
        pros_b: [
          "Attaque concertée par l'arrière en une étape",
          "Vitesse dépendant du substrat et du nucléophile",
          "Favorisé par les substrats primaires",
          "Provoque une inversion de configuration",
          "Préfère les solvants polaires aprotiques",
        ],
        verdict:
          "SN1 passe par un carbocation et donne une racémisation, tandis que SN2 est concerté et inverse le stéréocentre. Le type de substrat prédit le mieux lequel domine.",
        faq: [
          {
            q: "Quel mécanisme les halogénures tertiaires favorisent-ils ?",
            a: "SN1, car les carbocations tertiaires sont stabilisés et l'encombrement bloque l'attaque SN2.",
          },
          {
            q: "Qu'arrive-t-il à la stéréochimie en SN2 ?",
            a: "La configuration s'inverse, comme un parapluie qui se retourne au vent.",
          },
          {
            q: "Comment le solvant influence-t-il le choix ?",
            a: "Les solvants polaires protiques favorisent SN1, les polaires aprotiques favorisent SN2.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "e1-vs-e2",
    a: "E1",
    b: "E2",
    category: "chemistry",
    emoji_a: "1️⃣",
    emoji_b: "2️⃣",
    content: {
      en: {
        title: "E1 vs E2: Elimination Reaction Mechanisms",
        h1: "E1 vs E2 Reaction Mechanisms Explained",
        description:
          "E1 eliminations go through a carbocation in two steps; E2 eliminations are concerted in one step. Compare rate and conditions.",
        intro:
          "E1 and E2 are the two main elimination mechanisms that form alkenes by removing atoms. Conditions decide which pathway wins.",
        pros_a: [
          "Two-step mechanism via a carbocation",
          "Rate depends only on the substrate",
          "Favored by tertiary substrates",
          "Uses weak bases and heat",
          "Can give rearranged products",
        ],
        pros_b: [
          "One-step concerted elimination",
          "Rate depends on substrate and base",
          "Works on primary and secondary substrates",
          "Requires a strong, often bulky base",
          "Anti-periplanar geometry required",
        ],
        verdict:
          "E1 proceeds via a carbocation with a weak base, while E2 is a concerted one-step process needing a strong base. Both make alkenes but differ in rate law and stereochemistry.",
        faq: [
          {
            q: "What base does E2 need?",
            a: "A strong base such as hydroxide or alkoxide that can pull off a proton in the concerted step.",
          },
          {
            q: "Why can E1 give rearranged products?",
            a: "Its carbocation intermediate can shift to a more stable position before elimination.",
          },
          {
            q: "What geometry does E2 require?",
            a: "The leaving group and the proton must be anti-periplanar, on opposite sides of the bond.",
          },
        ],
      },
      fr: {
        title: "E1 vs E2 : mécanismes d'élimination",
        h1: "Mécanismes E1 vs E2 expliqués",
        description:
          "Les éliminations E1 passent par un carbocation en deux étapes ; les E2 sont concertées en une étape. Comparez vitesse et conditions.",
        intro:
          "E1 et E2 sont les deux mécanismes d'élimination qui forment des alcènes en retirant des atomes. Les conditions décident du chemin.",
        pros_a: [
          "Mécanisme en deux étapes via un carbocation",
          "Vitesse dépendant uniquement du substrat",
          "Favorisé par les substrats tertiaires",
          "Utilise des bases faibles et la chaleur",
          "Peut donner des produits réarrangés",
        ],
        pros_b: [
          "Élimination concertée en une étape",
          "Vitesse dépendant du substrat et de la base",
          "Fonctionne sur substrats primaires et secondaires",
          "Nécessite une base forte, souvent encombrée",
          "Géométrie anti-périplanaire requise",
        ],
        verdict:
          "E1 passe par un carbocation avec une base faible, tandis que E2 est un processus concerté en une étape nécessitant une base forte. Les deux forment des alcènes.",
        faq: [
          {
            q: "Quelle base nécessite E2 ?",
            a: "Une base forte comme l'hydroxyde ou un alcoolate capable d'arracher un proton dans l'étape concertée.",
          },
          {
            q: "Pourquoi E1 peut-il donner des produits réarrangés ?",
            a: "Son carbocation intermédiaire peut se déplacer vers une position plus stable avant élimination.",
          },
          {
            q: "Quelle géométrie nécessite E2 ?",
            a: "Le groupe partant et le proton doivent être anti-périplanaires, de côtés opposés de la liaison.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "oxidation-vs-reduction",
    a: "Oxidation",
    b: "Reduction",
    category: "chemistry",
    emoji_a: "🔥",
    emoji_b: "❄️",
    content: {
      en: {
        title: "Oxidation vs Reduction: Redox Explained",
        h1: "Oxidation vs Reduction in Redox Reactions",
        description:
          "Oxidation is loss of electrons; reduction is gain of electrons. Compare the two halves of every redox reaction side by side.",
        intro:
          "Oxidation and reduction always happen together in a redox reaction. The mnemonic OIL RIG keeps the direction of electron flow clear.",
        pros_a: [
          "Loss of electrons by a species",
          "Oxidation number increases",
          "Often involves gain of oxygen",
          "The oxidized species is the reducing agent",
          "Example: metal rusting",
        ],
        pros_b: [
          "Gain of electrons by a species",
          "Oxidation number decreases",
          "Often involves loss of oxygen",
          "The reduced species is the oxidizing agent",
          "Example: metal ore being smelted",
        ],
        verdict:
          "Oxidation and reduction are two halves of the same electron transfer. Whenever one species loses electrons another must gain them, so they are inseparable.",
        faq: [
          {
            q: "What does OIL RIG mean?",
            a: "Oxidation Is Loss, Reduction Is Gain of electrons, an easy way to remember redox direction.",
          },
          {
            q: "Can oxidation happen without reduction?",
            a: "No. Electrons lost by one species are always gained by another, so the two occur together.",
          },
          {
            q: "What is an oxidizing agent?",
            a: "A substance that causes oxidation in another by accepting electrons, getting reduced itself.",
          },
        ],
      },
      fr: {
        title: "Oxydation vs Réduction : la rédox expliquée",
        h1: "Oxydation vs Réduction dans les réactions rédox",
        description:
          "L'oxydation est une perte d'électrons ; la réduction un gain d'électrons. Comparez les deux moitiés de toute réaction rédox.",
        intro:
          "L'oxydation et la réduction se produisent toujours ensemble dans une réaction rédox. Le sens du transfert d'électrons doit rester clair.",
        pros_a: [
          "Perte d'électrons par une espèce",
          "Le nombre d'oxydation augmente",
          "Implique souvent un gain d'oxygène",
          "L'espèce oxydée est le réducteur",
          "Exemple : la rouille d'un métal",
        ],
        pros_b: [
          "Gain d'électrons par une espèce",
          "Le nombre d'oxydation diminue",
          "Implique souvent une perte d'oxygène",
          "L'espèce réduite est l'oxydant",
          "Exemple : un minerai métallique fondu",
        ],
        verdict:
          "L'oxydation et la réduction sont deux moitiés du même transfert d'électrons. Quand une espèce perd des électrons, une autre doit les gagner : elles sont inséparables.",
        faq: [
          {
            q: "Que signifie « la réduction gagne » ?",
            a: "L'oxydation est une perte et la réduction un gain d'électrons : un moyen simple de retenir le sens rédox.",
          },
          {
            q: "L'oxydation peut-elle avoir lieu sans réduction ?",
            a: "Non. Les électrons perdus par une espèce sont toujours gagnés par une autre, les deux vont ensemble.",
          },
          {
            q: "Qu'est-ce qu'un oxydant ?",
            a: "Une substance qui provoque l'oxydation d'une autre en acceptant des électrons, en se réduisant elle-même.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "anode-vs-cathode",
    a: "Anode",
    b: "Cathode",
    category: "chemistry",
    emoji_a: "➕",
    emoji_b: "➖",
    content: {
      en: {
        title: "Anode vs Cathode: Electrodes Explained",
        h1: "Anode vs Cathode in Electrochemistry",
        description:
          "Oxidation happens at the anode; reduction happens at the cathode. Compare polarity in galvanic and electrolytic cells.",
        intro:
          "Every electrochemical cell has two electrodes. Knowing which is which depends on the reaction, not just a fixed sign.",
        pros_a: [
          "Electrode where oxidation occurs",
          "Negative in a galvanic cell",
          "Positive in an electrolytic cell",
          "Releases electrons into the circuit",
          "Anions migrate toward it",
        ],
        pros_b: [
          "Electrode where reduction occurs",
          "Positive in a galvanic cell",
          "Negative in an electrolytic cell",
          "Receives electrons from the circuit",
          "Cations migrate toward it",
        ],
        verdict:
          "The anode always hosts oxidation and the cathode always hosts reduction. Their charge signs flip between galvanic and electrolytic cells, so use the reaction to identify them.",
        faq: [
          {
            q: "Is the anode always negative?",
            a: "No. It is negative in a galvanic cell but positive in an electrolytic cell.",
          },
          {
            q: "How do I remember the reactions?",
            a: "AN OX and RED CAT: oxidation at the anode, reduction at the cathode.",
          },
          {
            q: "Which way do cations move?",
            a: "Cations always move toward the cathode, where reduction takes place.",
          },
        ],
      },
      fr: {
        title: "Anode vs Cathode : les électrodes expliquées",
        h1: "Anode vs Cathode en électrochimie",
        description:
          "L'oxydation a lieu à l'anode ; la réduction à la cathode. Comparez la polarité dans les piles et les cellules d'électrolyse.",
        intro:
          "Chaque cellule électrochimique a deux électrodes. Savoir laquelle est laquelle dépend de la réaction, pas d'un signe fixe.",
        pros_a: [
          "Électrode où se produit l'oxydation",
          "Négative dans une pile galvanique",
          "Positive dans une cellule d'électrolyse",
          "Libère des électrons dans le circuit",
          "Les anions migrent vers elle",
        ],
        pros_b: [
          "Électrode où se produit la réduction",
          "Positive dans une pile galvanique",
          "Négative dans une cellule d'électrolyse",
          "Reçoit des électrons du circuit",
          "Les cations migrent vers elle",
        ],
        verdict:
          "L'anode accueille toujours l'oxydation et la cathode toujours la réduction. Leurs signes s'inversent entre pile et électrolyse, alors utilisez la réaction pour les identifier.",
        faq: [
          {
            q: "L'anode est-elle toujours négative ?",
            a: "Non. Elle est négative dans une pile galvanique mais positive dans une cellule d'électrolyse.",
          },
          {
            q: "Comment retenir les réactions ?",
            a: "Oxydation à l'anode, réduction à la cathode.",
          },
          {
            q: "Dans quel sens vont les cations ?",
            a: "Les cations vont toujours vers la cathode, où se produit la réduction.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "endothermic-vs-exothermic",
    a: "Endothermic",
    b: "Exothermic",
    category: "chemistry",
    emoji_a: "🥶",
    emoji_b: "🔥",
    content: {
      en: {
        title: "Endothermic vs Exothermic Reactions",
        h1: "Endothermic vs Exothermic Reactions Explained",
        description:
          "Endothermic reactions absorb heat; exothermic reactions release heat. Compare energy diagrams and examples side by side.",
        intro:
          "Reactions either take in or give out energy. The sign of the enthalpy change tells you which, and energy diagrams make it visual.",
        pros_a: [
          "Absorbs heat from the surroundings",
          "Enthalpy change is positive",
          "Products have more energy than reactants",
          "Surroundings get colder",
          "Examples: photosynthesis, ice melting",
        ],
        pros_b: [
          "Releases heat to the surroundings",
          "Enthalpy change is negative",
          "Products have less energy than reactants",
          "Surroundings get warmer",
          "Examples: combustion, neutralization",
        ],
        verdict:
          "Endothermic reactions absorb energy and feel cold; exothermic reactions release energy and feel hot. The sign of ΔH tells you instantly which category applies.",
        faq: [
          {
            q: "How does the sign of ΔH help?",
            a: "A positive ΔH means endothermic (heat absorbed); a negative ΔH means exothermic (heat released).",
          },
          {
            q: "Why does an instant cold pack feel cold?",
            a: "It uses an endothermic dissolving process that absorbs heat from your skin.",
          },
          {
            q: "Is combustion endo or exothermic?",
            a: "Combustion is strongly exothermic, releasing large amounts of heat and light.",
          },
        ],
      },
      fr: {
        title: "Endothermique vs Exothermique : réactions",
        h1: "Réactions endothermiques vs exothermiques",
        description:
          "Les réactions endothermiques absorbent la chaleur ; les exothermiques la libèrent. Comparez diagrammes d'énergie et exemples.",
        intro:
          "Les réactions absorbent ou dégagent de l'énergie. Le signe de la variation d'enthalpie indique laquelle, et les diagrammes l'illustrent.",
        pros_a: [
          "Absorbe de la chaleur du milieu",
          "Variation d'enthalpie positive",
          "Les produits ont plus d'énergie que les réactifs",
          "Le milieu se refroidit",
          "Exemples : photosynthèse, fonte de la glace",
        ],
        pros_b: [
          "Libère de la chaleur vers le milieu",
          "Variation d'enthalpie négative",
          "Les produits ont moins d'énergie que les réactifs",
          "Le milieu se réchauffe",
          "Exemples : combustion, neutralisation",
        ],
        verdict:
          "Les réactions endothermiques absorbent l'énergie et sont froides ; les exothermiques la libèrent et sont chaudes. Le signe de ΔH indique aussitôt la catégorie.",
        faq: [
          {
            q: "En quoi le signe de ΔH aide-t-il ?",
            a: "Un ΔH positif signifie endothermique (chaleur absorbée) ; un ΔH négatif exothermique (chaleur libérée).",
          },
          {
            q: "Pourquoi une poche de froid instantané est-elle froide ?",
            a: "Elle utilise une dissolution endothermique qui absorbe la chaleur de votre peau.",
          },
          {
            q: "La combustion est-elle endo ou exothermique ?",
            a: "La combustion est fortement exothermique, libérant beaucoup de chaleur et de lumière.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "enthalpy-vs-entropy",
    a: "Enthalpy",
    b: "Entropy",
    category: "chemistry",
    emoji_a: "🌡️",
    emoji_b: "🌀",
    content: {
      en: {
        title: "Enthalpy vs Entropy: Thermodynamics",
        h1: "Enthalpy vs Entropy Explained",
        description:
          "Enthalpy measures heat content; entropy measures disorder. Compare these two pillars of thermodynamics for chemistry study.",
        intro:
          "Enthalpy and entropy together decide whether a reaction is spontaneous. Gibbs free energy combines both into one prediction.",
        pros_a: [
          "Measures total heat content (H)",
          "Change ΔH shows heat absorbed or released",
          "Negative ΔH favors spontaneity",
          "Measured in joules or kJ/mol",
          "Drives exothermic reactions",
        ],
        pros_b: [
          "Measures disorder or randomness (S)",
          "Change ΔS shows increase or decrease in disorder",
          "Positive ΔS favors spontaneity",
          "Measured in J/(mol·K)",
          "Tends to increase in the universe",
        ],
        verdict:
          "Enthalpy tracks heat while entropy tracks disorder. Neither alone predicts spontaneity; Gibbs free energy, ΔG = ΔH − TΔS, combines them for the final verdict.",
        faq: [
          {
            q: "Which one predicts spontaneity?",
            a: "Neither alone. Gibbs free energy combines enthalpy and entropy: a negative ΔG means spontaneous.",
          },
          {
            q: "Does entropy always increase?",
            a: "The total entropy of the universe increases, though a local system can decrease in entropy.",
          },
          {
            q: "What units does each use?",
            a: "Enthalpy uses kJ/mol; entropy uses J/(mol·K) because it includes temperature.",
          },
        ],
      },
      fr: {
        title: "Enthalpie vs Entropie : thermodynamique",
        h1: "Enthalpie vs Entropie expliquées",
        description:
          "L'enthalpie mesure le contenu thermique ; l'entropie le désordre. Comparez ces deux piliers de la thermodynamique.",
        intro:
          "L'enthalpie et l'entropie déterminent ensemble si une réaction est spontanée. L'énergie libre de Gibbs combine les deux.",
        pros_a: [
          "Mesure le contenu thermique total (H)",
          "La variation ΔH montre la chaleur absorbée ou libérée",
          "Un ΔH négatif favorise la spontanéité",
          "Mesurée en joules ou kJ/mol",
          "Pilote les réactions exothermiques",
        ],
        pros_b: [
          "Mesure le désordre ou l'aléatoire (S)",
          "La variation ΔS montre l'augmentation du désordre",
          "Un ΔS positif favorise la spontanéité",
          "Mesurée en J/(mol·K)",
          "Tend à augmenter dans l'univers",
        ],
        verdict:
          "L'enthalpie suit la chaleur, l'entropie le désordre. Aucune seule ne prédit la spontanéité ; l'énergie libre de Gibbs, ΔG = ΔH − TΔS, les combine.",
        faq: [
          {
            q: "Laquelle prédit la spontanéité ?",
            a: "Aucune seule. L'énergie libre de Gibbs combine enthalpie et entropie : un ΔG négatif signifie spontané.",
          },
          {
            q: "L'entropie augmente-t-elle toujours ?",
            a: "L'entropie totale de l'univers augmente, même si un système local peut voir son entropie diminuer.",
          },
          {
            q: "Quelles unités utilise chacune ?",
            a: "L'enthalpie utilise kJ/mol ; l'entropie J/(mol·K) car elle inclut la température.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "catalyst-vs-inhibitor",
    a: "Catalyst",
    b: "Inhibitor",
    category: "chemistry",
    emoji_a: "⚡",
    emoji_b: "🛑",
    content: {
      en: {
        title: "Catalyst vs Inhibitor: Reaction Rate",
        h1: "Catalyst vs Inhibitor Explained",
        description:
          "Catalysts speed reactions up; inhibitors slow them down. Compare how each changes activation energy and reaction rate.",
        intro:
          "Both catalysts and inhibitors influence reaction rate without being consumed in the overall equation. They act in opposite directions.",
        pros_a: [
          "Speeds up the reaction rate",
          "Lowers the activation energy",
          "Not consumed in the overall reaction",
          "Provides an alternative pathway",
          "Examples: enzymes, platinum, iron",
        ],
        pros_b: [
          "Slows down the reaction rate",
          "Effectively raises the energy barrier",
          "Used to control or stop reactions",
          "Can block active sites or intermediates",
          "Examples: preservatives, antioxidants",
        ],
        verdict:
          "Catalysts and inhibitors are mirror tools for reaction speed. Catalysts open a faster route by lowering activation energy; inhibitors slow or stop a reaction.",
        faq: [
          {
            q: "Is a catalyst used up?",
            a: "No. It is regenerated, so it does not appear in the overall balanced equation.",
          },
          {
            q: "How does a catalyst speed a reaction?",
            a: "It offers an alternative pathway with a lower activation energy, so more collisions succeed.",
          },
          {
            q: "Where are inhibitors useful?",
            a: "In food preservation, drug design and any process where reactions must be slowed or stopped.",
          },
        ],
      },
      fr: {
        title: "Catalyseur vs Inhibiteur : vitesse de réaction",
        h1: "Catalyseur vs Inhibiteur expliqués",
        description:
          "Les catalyseurs accélèrent les réactions ; les inhibiteurs les ralentissent. Comparez leur effet sur l'énergie d'activation.",
        intro:
          "Catalyseurs et inhibiteurs influencent la vitesse de réaction sans être consommés dans le bilan. Ils agissent en sens opposés.",
        pros_a: [
          "Accélère la vitesse de réaction",
          "Abaisse l'énergie d'activation",
          "N'est pas consommé dans le bilan",
          "Fournit un chemin réactionnel alternatif",
          "Exemples : enzymes, platine, fer",
        ],
        pros_b: [
          "Ralentit la vitesse de réaction",
          "Augmente en pratique la barrière énergétique",
          "Sert à contrôler ou arrêter les réactions",
          "Peut bloquer sites actifs ou intermédiaires",
          "Exemples : conservateurs, antioxydants",
        ],
        verdict:
          "Catalyseurs et inhibiteurs sont des outils opposés pour la vitesse. Le catalyseur ouvre une route plus rapide en abaissant l'énergie d'activation ; l'inhibiteur ralentit.",
        faq: [
          {
            q: "Un catalyseur est-il consommé ?",
            a: "Non. Il est régénéré, donc il n'apparaît pas dans le bilan équilibré global.",
          },
          {
            q: "Comment un catalyseur accélère-t-il une réaction ?",
            a: "Il offre un chemin alternatif à plus faible énergie d'activation, donc plus de collisions réussissent.",
          },
          {
            q: "Où les inhibiteurs sont-ils utiles ?",
            a: "Dans la conservation des aliments, la conception de médicaments et tout procédé à ralentir ou arrêter.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "galvanic-cell-vs-electrolytic-cell",
    a: "Galvanic cell",
    b: "Electrolytic cell",
    category: "chemistry",
    emoji_a: "🔋",
    emoji_b: "🔌",
    content: {
      en: {
        title: "Galvanic vs Electrolytic Cell Compared",
        h1: "Galvanic Cell vs Electrolytic Cell Explained",
        description:
          "A galvanic cell makes electricity from a spontaneous reaction; an electrolytic cell uses electricity to drive one. Compare both.",
        intro:
          "Both electrochemical cells link redox chemistry to electric current, but they run in opposite directions of energy flow.",
        pros_a: [
          "Converts chemical energy into electricity",
          "Runs a spontaneous redox reaction",
          "Anode is negative, cathode is positive",
          "Powers batteries and devices",
          "Example: a standard battery",
        ],
        pros_b: [
          "Uses electricity to drive a reaction",
          "Forces a non-spontaneous redox reaction",
          "Anode is positive, cathode is negative",
          "Used for electroplating and refining",
          "Example: electrolysis of water",
        ],
        verdict:
          "A galvanic cell releases energy from a spontaneous reaction, while an electrolytic cell consumes energy to force a non-spontaneous one. They are reverse processes.",
        faq: [
          {
            q: "Which cell produces electricity?",
            a: "The galvanic cell, since its spontaneous reaction releases energy as electric current.",
          },
          {
            q: "Why are the electrode signs reversed?",
            a: "Energy flows the opposite way, so anode and cathode swap polarity between the two cell types.",
          },
          {
            q: "What is electrolysis used for?",
            a: "Electroplating, metal refining and splitting compounds like water into elements.",
          },
        ],
      },
      fr: {
        title: "Pile galvanique vs Cellule d'électrolyse",
        h1: "Pile galvanique vs Cellule d'électrolyse",
        description:
          "Une pile galvanique produit de l'électricité par réaction spontanée ; une cellule d'électrolyse utilise l'électricité. Comparez les deux.",
        intro:
          "Les deux cellules relient la chimie rédox au courant électrique, mais elles fonctionnent en sens opposés du flux d'énergie.",
        pros_a: [
          "Convertit l'énergie chimique en électricité",
          "Réalise une réaction rédox spontanée",
          "Anode négative, cathode positive",
          "Alimente piles et appareils",
          "Exemple : une pile standard",
        ],
        pros_b: [
          "Utilise l'électricité pour piloter une réaction",
          "Force une réaction rédox non spontanée",
          "Anode positive, cathode négative",
          "Sert à la galvanoplastie et au raffinage",
          "Exemple : électrolyse de l'eau",
        ],
        verdict:
          "Une pile galvanique libère l'énergie d'une réaction spontanée, une cellule d'électrolyse en consomme pour en forcer une non spontanée. Ce sont des procédés inverses.",
        faq: [
          {
            q: "Quelle cellule produit de l'électricité ?",
            a: "La pile galvanique, car sa réaction spontanée libère de l'énergie sous forme de courant.",
          },
          {
            q: "Pourquoi les signes des électrodes sont-ils inversés ?",
            a: "L'énergie circule en sens inverse, donc anode et cathode échangent leur polarité entre les deux types.",
          },
          {
            q: "À quoi sert l'électrolyse ?",
            a: "À la galvanoplastie, au raffinage des métaux et à séparer des composés comme l'eau en éléments.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "hydrogen-vs-helium",
    a: "Hydrogen",
    b: "Helium",
    category: "chemistry",
    emoji_a: "🎈",
    emoji_b: "🪅",
    content: {
      en: {
        title: "Hydrogen vs Helium: Element Comparison",
        h1: "Hydrogen vs Helium Explained",
        description:
          "Hydrogen is a reactive nonmetal; helium is an inert noble gas. Compare the two lightest elements side by side for study.",
        intro:
          "Hydrogen and helium are the first two elements and the most abundant in the universe, yet their chemistry could not be more different.",
        pros_a: [
          "Atomic number 1, one electron",
          "Highly reactive and flammable",
          "Forms compounds like water and acids",
          "Used as fuel and in ammonia synthesis",
          "Most abundant element in the universe",
        ],
        pros_b: [
          "Atomic number 2, full outer shell",
          "Inert and non-flammable",
          "Forms essentially no compounds",
          "Used in balloons and cryogenics",
          "Second most abundant element",
        ],
        verdict:
          "Hydrogen is light and reactive while helium is light and inert. Their one-electron difference makes one a fuel and the other a safe lifting gas.",
        faq: [
          {
            q: "Why is helium safer in balloons?",
            a: "Helium is inert and non-flammable, while hydrogen can ignite explosively.",
          },
          {
            q: "Which is more abundant?",
            a: "Hydrogen is the most abundant element in the universe, followed by helium.",
          },
          {
            q: "Why is helium unreactive?",
            a: "Its outer electron shell is full, so it has no tendency to gain, lose or share electrons.",
          },
        ],
      },
      fr: {
        title: "Hydrogène vs Hélium : comparaison d'éléments",
        h1: "Hydrogène vs Hélium expliqués",
        description:
          "L'hydrogène est un non-métal réactif ; l'hélium un gaz noble inerte. Comparez les deux éléments les plus légers.",
        intro:
          "L'hydrogène et l'hélium sont les deux premiers éléments et les plus abondants de l'univers, pourtant leur chimie est très différente.",
        pros_a: [
          "Numéro atomique 1, un électron",
          "Très réactif et inflammable",
          "Forme des composés comme l'eau et les acides",
          "Utilisé comme carburant et pour l'ammoniac",
          "Élément le plus abondant de l'univers",
        ],
        pros_b: [
          "Numéro atomique 2, couche externe pleine",
          "Inerte et non inflammable",
          "Ne forme quasiment aucun composé",
          "Utilisé dans les ballons et la cryogénie",
          "Deuxième élément le plus abondant",
        ],
        verdict:
          "L'hydrogène est léger et réactif tandis que l'hélium est léger et inerte. Leur différence d'un électron fait de l'un un carburant et de l'autre un gaz porteur sûr.",
        faq: [
          {
            q: "Pourquoi l'hélium est-il plus sûr dans les ballons ?",
            a: "L'hélium est inerte et non inflammable, alors que l'hydrogène peut s'enflammer violemment.",
          },
          {
            q: "Lequel est le plus abondant ?",
            a: "L'hydrogène est l'élément le plus abondant de l'univers, suivi de l'hélium.",
          },
          {
            q: "Pourquoi l'hélium est-il non réactif ?",
            a: "Sa couche externe d'électrons est pleine, il n'a donc aucune tendance à gagner, perdre ou partager des électrons.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "carbon-vs-silicon",
    a: "Carbon",
    b: "Silicon",
    category: "chemistry",
    emoji_a: "💎",
    emoji_b: "🔋",
    content: {
      en: {
        title: "Carbon vs Silicon: Group 14 Compared",
        h1: "Carbon vs Silicon Explained",
        description:
          "Carbon forms the basis of life; silicon underpins rocks and electronics. Compare these two Group 14 elements side by side.",
        intro:
          "Carbon and silicon sit in the same group and share four valence electrons, yet they build vastly different worlds.",
        pros_a: [
          "Atomic number 6, basis of organic chemistry",
          "Forms strong, stable carbon-carbon chains",
          "Makes diverse compounds including life molecules",
          "Allotropes: diamond, graphite, fullerenes",
          "Forms stable double and triple bonds",
        ],
        pros_b: [
          "Atomic number 14, basis of mineral chemistry",
          "Forms weaker silicon-silicon bonds",
          "Bonds readily with oxygen as silicates",
          "Key semiconductor for electronics",
          "Rarely forms stable double bonds",
        ],
        verdict:
          "Carbon's strong, versatile bonds enable life's complexity; silicon prefers oxygen and powers rocks and chips. Same group, very different chemistry.",
        faq: [
          {
            q: "Why is carbon better for life?",
            a: "Carbon forms strong, stable chains and multiple bonds, allowing the huge variety of molecules life needs.",
          },
          {
            q: "Why is silicon used in chips?",
            a: "Silicon is a semiconductor whose conductivity can be precisely tuned by doping.",
          },
          {
            q: "Are they in the same group?",
            a: "Yes. Both are in Group 14 and have four valence electrons.",
          },
        ],
      },
      fr: {
        title: "Carbone vs Silicium : groupe 14 comparé",
        h1: "Carbone vs Silicium expliqués",
        description:
          "Le carbone est la base de la vie ; le silicium celle des roches et de l'électronique. Comparez ces deux éléments du groupe 14.",
        intro:
          "Le carbone et le silicium sont dans le même groupe et partagent quatre électrons de valence, pourtant ils bâtissent des mondes très différents.",
        pros_a: [
          "Numéro atomique 6, base de la chimie organique",
          "Forme des chaînes carbone-carbone fortes et stables",
          "Crée des composés divers dont les molécules du vivant",
          "Allotropes : diamant, graphite, fullerènes",
          "Forme des doubles et triples liaisons stables",
        ],
        pros_b: [
          "Numéro atomique 14, base de la chimie minérale",
          "Forme des liaisons silicium-silicium plus faibles",
          "Se lie facilement à l'oxygène en silicates",
          "Semi-conducteur clé pour l'électronique",
          "Forme rarement des doubles liaisons stables",
        ],
        verdict:
          "Les liaisons fortes et polyvalentes du carbone permettent la complexité du vivant ; le silicium préfère l'oxygène et alimente roches et puces. Même groupe, chimie très différente.",
        faq: [
          {
            q: "Pourquoi le carbone convient-il mieux à la vie ?",
            a: "Le carbone forme des chaînes fortes et stables et plusieurs liaisons, permettant la grande variété de molécules du vivant.",
          },
          {
            q: "Pourquoi le silicium est-il utilisé dans les puces ?",
            a: "Le silicium est un semi-conducteur dont la conductivité se règle précisément par dopage.",
          },
          {
            q: "Sont-ils dans le même groupe ?",
            a: "Oui. Tous deux sont dans le groupe 14 et ont quatre électrons de valence.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "metal-vs-nonmetal",
    a: "Metal",
    b: "Nonmetal",
    category: "chemistry",
    emoji_a: "🪙",
    emoji_b: "💨",
    content: {
      en: {
        title: "Metal vs Nonmetal: Element Properties",
        h1: "Metal vs Nonmetal Explained",
        description:
          "Metals are shiny conductors that lose electrons; nonmetals are dull insulators that gain them. Compare physical and chemical traits.",
        intro:
          "The periodic table splits into metals and nonmetals with a few metalloids between. Their contrasting properties shape all chemistry.",
        pros_a: [
          "Shiny, malleable and ductile",
          "Good conductor of heat and electricity",
          "Tends to lose electrons, forms cations",
          "Mostly solid at room temperature",
          "Examples: iron, copper, sodium",
        ],
        pros_b: [
          "Dull and brittle as solids",
          "Poor conductor, usually an insulator",
          "Tends to gain electrons, forms anions",
          "Can be solid, liquid or gas",
          "Examples: oxygen, sulfur, chlorine",
        ],
        verdict:
          "Metals conduct, shine and shed electrons; nonmetals insulate, look dull and grab electrons. Together they form the ionic and covalent compounds of everyday life.",
        faq: [
          {
            q: "Where are metals on the periodic table?",
            a: "Metals occupy the left and center, while nonmetals cluster in the upper right.",
          },
          {
            q: "Do metals gain or lose electrons?",
            a: "Metals lose electrons to form positive cations, while nonmetals gain them to form anions.",
          },
          {
            q: "What is a metalloid?",
            a: "An element with intermediate properties, like silicon, sitting along the metal-nonmetal border.",
          },
        ],
      },
      fr: {
        title: "Métal vs Non-métal : propriétés des éléments",
        h1: "Métal vs Non-métal expliqués",
        description:
          "Les métaux sont des conducteurs brillants qui perdent des électrons ; les non-métaux des isolants ternes qui en gagnent. Comparez.",
        intro:
          "Le tableau périodique se divise en métaux et non-métaux avec quelques métalloïdes entre eux. Leurs propriétés opposées façonnent la chimie.",
        pros_a: [
          "Brillant, malléable et ductile",
          "Bon conducteur de chaleur et d'électricité",
          "Tend à perdre des électrons, forme des cations",
          "Surtout solide à température ambiante",
          "Exemples : fer, cuivre, sodium",
        ],
        pros_b: [
          "Terne et cassant à l'état solide",
          "Mauvais conducteur, généralement isolant",
          "Tend à gagner des électrons, forme des anions",
          "Peut être solide, liquide ou gazeux",
          "Exemples : oxygène, soufre, chlore",
        ],
        verdict:
          "Les métaux conduisent, brillent et cèdent des électrons ; les non-métaux isolent, sont ternes et captent des électrons. Ensemble ils forment les composés ioniques et covalents.",
        faq: [
          {
            q: "Où sont les métaux dans le tableau périodique ?",
            a: "Les métaux occupent la gauche et le centre, les non-métaux se regroupent en haut à droite.",
          },
          {
            q: "Les métaux gagnent-ils ou perdent-ils des électrons ?",
            a: "Les métaux perdent des électrons pour former des cations, les non-métaux en gagnent pour former des anions.",
          },
          {
            q: "Qu'est-ce qu'un métalloïde ?",
            a: "Un élément aux propriétés intermédiaires, comme le silicium, situé à la frontière métal-non-métal.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "alkali-metal-vs-alkaline-earth-metal",
    a: "Alkali metal",
    b: "Alkaline earth metal",
    category: "chemistry",
    emoji_a: "1️⃣",
    emoji_b: "2️⃣",
    content: {
      en: {
        title: "Alkali vs Alkaline Earth Metal Compared",
        h1: "Alkali Metals vs Alkaline Earth Metals",
        description:
          "Alkali metals are Group 1 with one valence electron; alkaline earth metals are Group 2 with two. Compare reactivity and ions.",
        intro:
          "Groups 1 and 2 sit side by side on the periodic table, both reactive metals, but their valence electron count sets them apart.",
        pros_a: [
          "Group 1, one valence electron",
          "Forms +1 ions",
          "Extremely reactive, soft, low density",
          "Reacts violently with water",
          "Examples: sodium, potassium, lithium",
        ],
        pros_b: [
          "Group 2, two valence electrons",
          "Forms +2 ions",
          "Reactive but harder and denser than Group 1",
          "Reacts with water more slowly",
          "Examples: magnesium, calcium, barium",
        ],
        verdict:
          "Alkali metals lose one electron and react violently; alkaline earth metals lose two and are a bit tamer. Both grow more reactive down their group.",
        faq: [
          {
            q: "Which group is more reactive?",
            a: "Alkali metals are generally more reactive because losing a single electron is easier.",
          },
          {
            q: "What charge do their ions carry?",
            a: "Alkali metals form +1 ions; alkaline earth metals form +2 ions.",
          },
          {
            q: "Why store alkali metals in oil?",
            a: "They react so fast with air and water that oil keeps them isolated from moisture.",
          },
        ],
      },
      fr: {
        title: "Métal alcalin vs alcalino-terreux comparés",
        h1: "Métaux alcalins vs alcalino-terreux",
        description:
          "Les métaux alcalins sont du groupe 1 avec un électron de valence ; les alcalino-terreux du groupe 2 avec deux. Comparez.",
        intro:
          "Les groupes 1 et 2 sont côte à côte dans le tableau périodique, tous deux des métaux réactifs, mais leur nombre d'électrons de valence diffère.",
        pros_a: [
          "Groupe 1, un électron de valence",
          "Forme des ions +1",
          "Très réactif, mou, faible densité",
          "Réagit violemment avec l'eau",
          "Exemples : sodium, potassium, lithium",
        ],
        pros_b: [
          "Groupe 2, deux électrons de valence",
          "Forme des ions +2",
          "Réactif mais plus dur et dense que le groupe 1",
          "Réagit plus lentement avec l'eau",
          "Exemples : magnésium, calcium, baryum",
        ],
        verdict:
          "Les métaux alcalins perdent un électron et réagissent violemment ; les alcalino-terreux en perdent deux et sont un peu plus doux. Tous deviennent plus réactifs vers le bas.",
        faq: [
          {
            q: "Quel groupe est le plus réactif ?",
            a: "Les métaux alcalins sont généralement plus réactifs car perdre un seul électron est plus facile.",
          },
          {
            q: "Quelle charge portent leurs ions ?",
            a: "Les métaux alcalins forment des ions +1 ; les alcalino-terreux des ions +2.",
          },
          {
            q: "Pourquoi conserver les métaux alcalins dans l'huile ?",
            a: "Ils réagissent si vite avec l'air et l'eau que l'huile les isole de l'humidité.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "halogen-vs-noble-gas",
    a: "Halogen",
    b: "Noble gas",
    category: "chemistry",
    emoji_a: "🧪",
    emoji_b: "💡",
    content: {
      en: {
        title: "Halogen vs Noble Gas: Group 17 vs 18",
        h1: "Halogens vs Noble Gases Explained",
        description:
          "Halogens are reactive Group 17 nonmetals; noble gases are inert Group 18 elements. Compare reactivity and electron shells.",
        intro:
          "Groups 17 and 18 are neighbors with opposite chemistry. One craves an electron, the other already has a full shell.",
        pros_a: [
          "Group 17, seven valence electrons",
          "Highly reactive nonmetals",
          "Gains one electron to form -1 ions",
          "Forms salts with metals (halides)",
          "Examples: fluorine, chlorine, iodine",
        ],
        pros_b: [
          "Group 18, full valence shell",
          "Inert and almost unreactive",
          "Does not normally form ions",
          "Exists as single, stable atoms",
          "Examples: helium, neon, argon",
        ],
        verdict:
          "Halogens are one electron short of stability and so are very reactive; noble gases are already complete and almost inert. They sit one column apart for that reason.",
        faq: [
          {
            q: "Why are noble gases unreactive?",
            a: "Their outer electron shell is already full, so they have no drive to gain, lose or share electrons.",
          },
          {
            q: "Why are halogens so reactive?",
            a: "They need just one more electron to fill their shell, making them eager to react.",
          },
          {
            q: "What ion do halogens form?",
            a: "Halogens gain one electron to form -1 anions called halides.",
          },
        ],
      },
      fr: {
        title: "Halogène vs Gaz noble : groupe 17 vs 18",
        h1: "Halogènes vs Gaz nobles expliqués",
        description:
          "Les halogènes sont des non-métaux réactifs du groupe 17 ; les gaz nobles des éléments inertes du groupe 18. Comparez réactivité.",
        intro:
          "Les groupes 17 et 18 sont voisins avec une chimie opposée. L'un convoite un électron, l'autre a déjà une couche pleine.",
        pros_a: [
          "Groupe 17, sept électrons de valence",
          "Non-métaux très réactifs",
          "Gagne un électron pour former des ions -1",
          "Forme des sels avec les métaux (halogénures)",
          "Exemples : fluor, chlore, iode",
        ],
        pros_b: [
          "Groupe 18, couche de valence pleine",
          "Inerte et presque non réactif",
          "Ne forme normalement pas d'ions",
          "Existe en atomes uniques et stables",
          "Exemples : hélium, néon, argon",
        ],
        verdict:
          "Les halogènes manquent d'un électron pour être stables et sont donc très réactifs ; les gaz nobles sont déjà complets et presque inertes. D'où leur position adjacente.",
        faq: [
          {
            q: "Pourquoi les gaz nobles sont-ils non réactifs ?",
            a: "Leur couche externe d'électrons est déjà pleine, ils n'ont aucune raison de gagner ou partager des électrons.",
          },
          {
            q: "Pourquoi les halogènes sont-ils si réactifs ?",
            a: "Il leur manque un seul électron pour remplir leur couche, ce qui les rend avides de réagir.",
          },
          {
            q: "Quel ion forment les halogènes ?",
            a: "Les halogènes gagnent un électron pour former des anions -1 appelés halogénures.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "iron-vs-copper",
    a: "Iron",
    b: "Copper",
    category: "chemistry",
    emoji_a: "🔩",
    emoji_b: "🟤",
    content: {
      en: {
        title: "Iron vs Copper: Transition Metals Compared",
        h1: "Iron vs Copper Explained",
        description:
          "Iron is strong and magnetic but rusts; copper is an excellent conductor that resists corrosion. Compare both transition metals.",
        intro:
          "Iron and copper are workhorse transition metals. Their different strengths suit them to construction versus electrical wiring.",
        pros_a: [
          "Symbol Fe, atomic number 26",
          "Strong and ferromagnetic",
          "Used in steel for construction",
          "Corrodes to rust when exposed to moisture",
          "Essential in hemoglobin",
        ],
        pros_b: [
          "Symbol Cu, atomic number 29",
          "Excellent electrical and heat conductor",
          "Resists corrosion, forms green patina",
          "Used in wiring, pipes and alloys",
          "Naturally antimicrobial surface",
        ],
        verdict:
          "Iron provides strength and magnetism for structures, while copper provides top-tier conductivity for wiring. Copper resists corrosion better; iron must be protected from rust.",
        faq: [
          {
            q: "Which conducts electricity better?",
            a: "Copper is a far better conductor, which is why it dominates electrical wiring.",
          },
          {
            q: "Why does iron rust but copper does not?",
            a: "Iron forms flaky iron oxide, while copper forms a protective green patina that shields the metal.",
          },
          {
            q: "Is either magnetic?",
            a: "Iron is strongly ferromagnetic; copper is essentially non-magnetic.",
          },
        ],
      },
      fr: {
        title: "Fer vs Cuivre : métaux de transition comparés",
        h1: "Fer vs Cuivre expliqués",
        description:
          "Le fer est solide et magnétique mais rouille ; le cuivre est un excellent conducteur résistant à la corrosion. Comparez les deux.",
        intro:
          "Le fer et le cuivre sont des métaux de transition de référence. Leurs forces différentes les destinent à la construction ou au câblage.",
        pros_a: [
          "Symbole Fe, numéro atomique 26",
          "Solide et ferromagnétique",
          "Utilisé dans l'acier pour la construction",
          "Se corrode en rouille avec l'humidité",
          "Essentiel dans l'hémoglobine",
        ],
        pros_b: [
          "Symbole Cu, numéro atomique 29",
          "Excellent conducteur électrique et thermique",
          "Résiste à la corrosion, forme une patine verte",
          "Utilisé dans le câblage, les tuyaux et alliages",
          "Surface naturellement antimicrobienne",
        ],
        verdict:
          "Le fer apporte solidité et magnétisme pour les structures, le cuivre une conductivité de premier ordre pour le câblage. Le cuivre résiste mieux à la corrosion.",
        faq: [
          {
            q: "Lequel conduit mieux l'électricité ?",
            a: "Le cuivre est un bien meilleur conducteur, d'où sa domination dans le câblage électrique.",
          },
          {
            q: "Pourquoi le fer rouille-t-il et pas le cuivre ?",
            a: "Le fer forme un oxyde friable, tandis que le cuivre forme une patine verte protectrice.",
          },
          {
            q: "L'un est-il magnétique ?",
            a: "Le fer est fortement ferromagnétique ; le cuivre est essentiellement non magnétique.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "gold-vs-silver",
    a: "Gold",
    b: "Silver",
    category: "chemistry",
    emoji_a: "🥇",
    emoji_b: "🥈",
    content: {
      en: {
        title: "Gold vs Silver: Precious Metals Compared",
        h1: "Gold vs Silver Explained",
        description:
          "Gold is highly unreactive and dense; silver is the best electrical conductor but tarnishes. Compare both precious metals.",
        intro:
          "Gold and silver are classic precious metals prized for beauty and rarity, but their chemical behavior differs in key ways.",
        pros_a: [
          "Symbol Au, atomic number 79",
          "Extremely unreactive, does not tarnish",
          "Very dense and highly malleable",
          "Used in jewelry, electronics and currency",
          "Resists acids except aqua regia",
        ],
        pros_b: [
          "Symbol Ag, atomic number 47",
          "Best electrical and thermal conductor",
          "Tarnishes black with sulfur in air",
          "Cheaper and more abundant than gold",
          "Used in jewelry, mirrors and contacts",
        ],
        verdict:
          "Gold is the more inert and valuable metal, never tarnishing, while silver conducts best but darkens over time. Each excels in different chemical and practical roles.",
        faq: [
          {
            q: "Why does silver tarnish but gold does not?",
            a: "Silver reacts with sulfur compounds in air to form black silver sulfide; gold is too unreactive.",
          },
          {
            q: "Which conducts electricity better?",
            a: "Silver is the single best conductor of any metal, slightly ahead of copper and gold.",
          },
          {
            q: "What dissolves gold?",
            a: "Aqua regia, a mix of nitric and hydrochloric acid, is one of the few things that dissolves gold.",
          },
        ],
      },
      fr: {
        title: "Or vs Argent : métaux précieux comparés",
        h1: "Or vs Argent expliqués",
        description:
          "L'or est très peu réactif et dense ; l'argent est le meilleur conducteur électrique mais ternit. Comparez les deux métaux précieux.",
        intro:
          "L'or et l'argent sont des métaux précieux classiques appréciés pour leur beauté et leur rareté, mais leur comportement chimique diffère.",
        pros_a: [
          "Symbole Au, numéro atomique 79",
          "Extrêmement peu réactif, ne ternit pas",
          "Très dense et hautement malléable",
          "Utilisé en bijouterie, électronique et monnaie",
          "Résiste aux acides sauf l'eau régale",
        ],
        pros_b: [
          "Symbole Ag, numéro atomique 47",
          "Meilleur conducteur électrique et thermique",
          "Ternit en noir avec le soufre de l'air",
          "Moins cher et plus abondant que l'or",
          "Utilisé en bijouterie, miroirs et contacts",
        ],
        verdict:
          "L'or est le métal le plus inerte et le plus précieux, ne ternissant jamais, tandis que l'argent conduit le mieux mais noircit avec le temps.",
        faq: [
          {
            q: "Pourquoi l'argent ternit-il et pas l'or ?",
            a: "L'argent réagit avec les composés soufrés de l'air en sulfure d'argent noir ; l'or est trop peu réactif.",
          },
          {
            q: "Lequel conduit mieux l'électricité ?",
            a: "L'argent est le meilleur conducteur de tous les métaux, légèrement devant le cuivre et l'or.",
          },
          {
            q: "Qu'est-ce qui dissout l'or ?",
            a: "L'eau régale, un mélange d'acide nitrique et chlorhydrique, est l'une des rares choses qui dissout l'or.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "sodium-vs-potassium",
    a: "Sodium",
    b: "Potassium",
    category: "chemistry",
    emoji_a: "🧂",
    emoji_b: "🍌",
    content: {
      en: {
        title: "Sodium vs Potassium: Alkali Metals",
        h1: "Sodium vs Potassium Explained",
        description:
          "Sodium and potassium are both Group 1 alkali metals, but potassium is more reactive. Compare reactivity and biology.",
        intro:
          "Sodium and potassium sit in the same group, both soft and reactive, but going down the group changes their behavior.",
        pros_a: [
          "Symbol Na, atomic number 11",
          "Reactive Group 1 alkali metal",
          "Reacts vigorously with water",
          "Major ion in blood and extracellular fluid",
          "Forms common table salt, NaCl",
        ],
        pros_b: [
          "Symbol K, atomic number 19",
          "More reactive than sodium",
          "Reacts even more violently with water",
          "Major ion inside body cells",
          "Found in bananas and fertilizers",
        ],
        verdict:
          "Potassium is more reactive than sodium because its outer electron is further from the nucleus and easier to lose. Both are vital electrolytes balancing each other in the body.",
        faq: [
          {
            q: "Why is potassium more reactive than sodium?",
            a: "Its valence electron is farther from the nucleus and more loosely held, so it is lost more easily.",
          },
          {
            q: "How do they differ in the body?",
            a: "Sodium dominates outside cells while potassium dominates inside, and the balance drives nerve signals.",
          },
          {
            q: "What happens when each meets water?",
            a: "Both react to release hydrogen, but potassium reacts more violently, often with flame.",
          },
        ],
      },
      fr: {
        title: "Sodium vs Potassium : métaux alcalins",
        h1: "Sodium vs Potassium expliqués",
        description:
          "Le sodium et le potassium sont des métaux alcalins du groupe 1, mais le potassium est plus réactif. Comparez réactivité et biologie.",
        intro:
          "Le sodium et le potassium sont dans le même groupe, mous et réactifs, mais descendre dans le groupe change leur comportement.",
        pros_a: [
          "Symbole Na, numéro atomique 11",
          "Métal alcalin réactif du groupe 1",
          "Réagit vigoureusement avec l'eau",
          "Ion majeur du sang et du liquide extracellulaire",
          "Forme le sel de table courant, NaCl",
        ],
        pros_b: [
          "Symbole K, numéro atomique 19",
          "Plus réactif que le sodium",
          "Réagit encore plus violemment avec l'eau",
          "Ion majeur à l'intérieur des cellules",
          "Présent dans les bananes et les engrais",
        ],
        verdict:
          "Le potassium est plus réactif que le sodium car son électron externe est plus éloigné du noyau et plus facile à perdre. Les deux sont des électrolytes vitaux qui s'équilibrent.",
        faq: [
          {
            q: "Pourquoi le potassium est-il plus réactif que le sodium ?",
            a: "Son électron de valence est plus éloigné du noyau et moins retenu, donc perdu plus facilement.",
          },
          {
            q: "En quoi diffèrent-ils dans le corps ?",
            a: "Le sodium domine hors des cellules, le potassium à l'intérieur, et l'équilibre pilote les signaux nerveux.",
          },
          {
            q: "Que se passe-t-il au contact de l'eau ?",
            a: "Les deux réagissent en libérant de l'hydrogène, mais le potassium réagit plus violemment, souvent avec flamme.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "chlorine-vs-fluorine",
    a: "Chlorine",
    b: "Fluorine",
    category: "chemistry",
    emoji_a: "🟢",
    emoji_b: "🦷",
    content: {
      en: {
        title: "Chlorine vs Fluorine: Halogens Compared",
        h1: "Chlorine vs Fluorine Explained",
        description:
          "Fluorine is the most reactive halogen; chlorine is a strong but less aggressive one. Compare reactivity and uses side by side.",
        intro:
          "Chlorine and fluorine are both Group 17 halogens, but fluorine sits above chlorine and is even more reactive.",
        pros_a: [
          "Symbol Cl, atomic number 17",
          "Yellow-green reactive gas",
          "Strong oxidizer, less reactive than fluorine",
          "Used to disinfect water and make plastics",
          "Forms chloride ions in salts",
        ],
        pros_b: [
          "Symbol F, atomic number 9",
          "Pale yellow, most reactive of all elements",
          "Strongest oxidizing halogen",
          "Used in toothpaste and Teflon",
          "Most electronegative element",
        ],
        verdict:
          "Fluorine is the most reactive and electronegative element, edging out chlorine. Chlorine is still a powerful oxidizer and far more practical to handle for water treatment.",
        faq: [
          {
            q: "Which halogen is more reactive?",
            a: "Fluorine is the most reactive of all elements, more so than chlorine, which sits below it.",
          },
          {
            q: "Why is fluorine in toothpaste?",
            a: "Fluoride ions strengthen tooth enamel and help prevent cavities.",
          },
          {
            q: "Why does chlorine clean water?",
            a: "Chlorine is a strong oxidizer that kills bacteria and other pathogens.",
          },
        ],
      },
      fr: {
        title: "Chlore vs Fluor : halogènes comparés",
        h1: "Chlore vs Fluor expliqués",
        description:
          "Le fluor est l'halogène le plus réactif ; le chlore est puissant mais moins agressif. Comparez réactivité et usages.",
        intro:
          "Le chlore et le fluor sont des halogènes du groupe 17, mais le fluor est au-dessus du chlore et encore plus réactif.",
        pros_a: [
          "Symbole Cl, numéro atomique 17",
          "Gaz réactif jaune-vert",
          "Oxydant fort, moins réactif que le fluor",
          "Sert à désinfecter l'eau et fabriquer des plastiques",
          "Forme des ions chlorure dans les sels",
        ],
        pros_b: [
          "Symbole F, numéro atomique 9",
          "Jaune pâle, le plus réactif de tous les éléments",
          "Halogène le plus oxydant",
          "Utilisé dans le dentifrice et le Téflon",
          "Élément le plus électronégatif",
        ],
        verdict:
          "Le fluor est l'élément le plus réactif et le plus électronégatif, devant le chlore. Le chlore reste un oxydant puissant et bien plus pratique pour le traitement de l'eau.",
        faq: [
          {
            q: "Quel halogène est le plus réactif ?",
            a: "Le fluor est le plus réactif de tous les éléments, davantage que le chlore situé en dessous.",
          },
          {
            q: "Pourquoi du fluor dans le dentifrice ?",
            a: "Les ions fluorure renforcent l'émail dentaire et aident à prévenir les caries.",
          },
          {
            q: "Pourquoi le chlore désinfecte-t-il l'eau ?",
            a: "Le chlore est un oxydant fort qui tue les bactéries et autres agents pathogènes.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "hydrochloric-acid-vs-sulfuric-acid",
    a: "Hydrochloric acid",
    b: "Sulfuric acid",
    category: "chemistry",
    emoji_a: "🧪",
    emoji_b: "⚗️",
    content: {
      en: {
        title: "Hydrochloric vs Sulfuric Acid Compared",
        h1: "Hydrochloric Acid vs Sulfuric Acid",
        description:
          "HCl is a monoprotic strong acid; H2SO4 is a diprotic strong acid and dehydrating agent. Compare both lab acids side by side.",
        intro:
          "Hydrochloric and sulfuric acid are two of the most common strong acids. They are both strong, but their proton count and behavior differ.",
        pros_a: [
          "Formula HCl, monoprotic acid",
          "Donates one H+ per molecule",
          "Found in stomach acid",
          "Volatile, fumes in moist air",
          "Used for cleaning and pickling metals",
        ],
        pros_b: [
          "Formula H2SO4, diprotic acid",
          "Donates two H+ per molecule",
          "Powerful dehydrating agent",
          "Non-volatile, oily liquid",
          "Used in fertilizers and car batteries",
        ],
        verdict:
          "Both are strong acids, but sulfuric acid is diprotic and a fierce dehydrator, while hydrochloric acid is monoprotic and volatile. Sulfuric acid is the industrial heavyweight.",
        faq: [
          {
            q: "Which acid releases more protons?",
            a: "Sulfuric acid is diprotic and releases two protons; hydrochloric acid is monoprotic with one.",
          },
          {
            q: "Why is sulfuric acid called dehydrating?",
            a: "It strongly attracts water and can pull hydrogen and oxygen out of compounds like sugar.",
          },
          {
            q: "Where is hydrochloric acid found naturally?",
            a: "In your stomach, where it aids digestion and kills ingested microbes.",
          },
        ],
      },
      fr: {
        title: "Acide chlorhydrique vs sulfurique comparés",
        h1: "Acide chlorhydrique vs Acide sulfurique",
        description:
          "Le HCl est un acide fort monoprotique ; le H2SO4 un acide fort diprotique et déshydratant. Comparez ces deux acides de laboratoire.",
        intro:
          "L'acide chlorhydrique et l'acide sulfurique sont parmi les acides forts les plus courants. Tous deux forts, mais leur nombre de protons diffère.",
        pros_a: [
          "Formule HCl, acide monoprotique",
          "Cède un H+ par molécule",
          "Présent dans l'acide gastrique",
          "Volatil, fume à l'air humide",
          "Utilisé pour nettoyer et décaper les métaux",
        ],
        pros_b: [
          "Formule H2SO4, acide diprotique",
          "Cède deux H+ par molécule",
          "Agent déshydratant puissant",
          "Non volatil, liquide huileux",
          "Utilisé dans les engrais et les batteries",
        ],
        verdict:
          "Les deux sont des acides forts, mais l'acide sulfurique est diprotique et un déshydratant féroce, tandis que l'acide chlorhydrique est monoprotique et volatil.",
        faq: [
          {
            q: "Quel acide libère le plus de protons ?",
            a: "L'acide sulfurique est diprotique et libère deux protons ; l'acide chlorhydrique est monoprotique avec un.",
          },
          {
            q: "Pourquoi l'acide sulfurique est-il déshydratant ?",
            a: "Il attire fortement l'eau et peut arracher hydrogène et oxygène à des composés comme le sucre.",
          },
          {
            q: "Où trouve-t-on l'acide chlorhydrique naturellement ?",
            a: "Dans votre estomac, où il favorise la digestion et tue les microbes ingérés.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "acetic-acid-vs-citric-acid",
    a: "Acetic acid",
    b: "Citric acid",
    category: "chemistry",
    emoji_a: "🍶",
    emoji_b: "🍋",
    content: {
      en: {
        title: "Acetic Acid vs Citric Acid Compared",
        h1: "Acetic Acid vs Citric Acid Explained",
        description:
          "Acetic acid is a monoprotic acid in vinegar; citric acid is a triprotic acid in citrus fruit. Compare these weak acids.",
        intro:
          "Acetic and citric acid are familiar weak organic acids found in everyday food. Their structures and proton counts differ.",
        pros_a: [
          "Formula CH3COOH, monoprotic",
          "Has one carboxylic acid group",
          "Main component of vinegar",
          "Sharp sour smell and taste",
          "Used in food and as a solvent",
        ],
        pros_b: [
          "Formula C6H8O7, triprotic",
          "Has three carboxylic acid groups",
          "Found naturally in lemons and limes",
          "Solid white crystalline powder",
          "Used as a flavoring and preservative",
        ],
        verdict:
          "Both are weak organic acids, but citric acid is triprotic with three acid groups while acetic acid is monoprotic with one. Citric acid is solid; acetic acid is liquid.",
        faq: [
          {
            q: "Which acid donates more protons?",
            a: "Citric acid is triprotic and can donate three protons; acetic acid is monoprotic with one.",
          },
          {
            q: "Are they strong or weak acids?",
            a: "Both are weak acids that only partially ionize in water.",
          },
          {
            q: "Where are they found?",
            a: "Acetic acid is the acid in vinegar; citric acid occurs naturally in citrus fruit.",
          },
        ],
      },
      fr: {
        title: "Acide acétique vs Acide citrique comparés",
        h1: "Acide acétique vs Acide citrique",
        description:
          "L'acide acétique est un acide monoprotique du vinaigre ; l'acide citrique un acide triprotique des agrumes. Comparez ces acides faibles.",
        intro:
          "L'acide acétique et l'acide citrique sont des acides organiques faibles courants dans l'alimentation. Leurs structures diffèrent.",
        pros_a: [
          "Formule CH3COOH, monoprotique",
          "Possède un groupe acide carboxylique",
          "Composant principal du vinaigre",
          "Odeur et goût aigres et piquants",
          "Utilisé en alimentation et comme solvant",
        ],
        pros_b: [
          "Formule C6H8O7, triprotique",
          "Possède trois groupes acide carboxylique",
          "Présent naturellement dans les citrons",
          "Poudre cristalline blanche solide",
          "Utilisé comme arôme et conservateur",
        ],
        verdict:
          "Les deux sont des acides organiques faibles, mais l'acide citrique est triprotique avec trois groupes acides tandis que l'acide acétique est monoprotique avec un.",
        faq: [
          {
            q: "Quel acide cède le plus de protons ?",
            a: "L'acide citrique est triprotique et peut céder trois protons ; l'acide acétique est monoprotique avec un.",
          },
          {
            q: "Sont-ils des acides forts ou faibles ?",
            a: "Les deux sont des acides faibles qui ne s'ionisent que partiellement dans l'eau.",
          },
          {
            q: "Où les trouve-t-on ?",
            a: "L'acide acétique est l'acide du vinaigre ; l'acide citrique se trouve naturellement dans les agrumes.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "glucose-vs-fructose",
    a: "Glucose",
    b: "Fructose",
    category: "chemistry",
    emoji_a: "🍬",
    emoji_b: "🍯",
    content: {
      en: {
        title: "Glucose vs Fructose: Sugars Compared",
        h1: "Glucose vs Fructose Explained",
        description:
          "Glucose and fructose share formula C6H12O6 but differ in structure. Compare these two simple sugars side by side.",
        intro:
          "Glucose and fructose are both monosaccharides with the same molecular formula. They are structural isomers with different ring shapes.",
        pros_a: [
          "Formula C6H12O6, an aldohexose",
          "Forms a six-membered ring",
          "Contains an aldehyde functional group",
          "Primary blood sugar and energy source",
          "Less sweet than fructose",
        ],
        pros_b: [
          "Formula C6H12O6, a ketohexose",
          "Forms a five-membered ring",
          "Contains a ketone functional group",
          "Found in fruit and honey",
          "Sweetest natural sugar",
        ],
        verdict:
          "Glucose and fructose are structural isomers: same formula, different functional groups. Glucose is an aldose ring sugar, fructose a ketose, and fructose tastes sweeter.",
        faq: [
          {
            q: "Do they have the same formula?",
            a: "Yes, both are C6H12O6, making them structural isomers with different arrangements.",
          },
          {
            q: "Which is sweeter?",
            a: "Fructose is the sweetest of the common natural sugars.",
          },
          {
            q: "What functional group does each have?",
            a: "Glucose has an aldehyde group (aldose); fructose has a ketone group (ketose).",
          },
        ],
      },
      fr: {
        title: "Glucose vs Fructose : sucres comparés",
        h1: "Glucose vs Fructose expliqués",
        description:
          "Le glucose et le fructose partagent la formule C6H12O6 mais diffèrent par leur structure. Comparez ces deux sucres simples.",
        intro:
          "Le glucose et le fructose sont des monosaccharides de même formule moléculaire. Ce sont des isomères de structure aux formes cycliques différentes.",
        pros_a: [
          "Formule C6H12O6, un aldohexose",
          "Forme un cycle à six membres",
          "Contient un groupe fonctionnel aldéhyde",
          "Principal sucre sanguin et source d'énergie",
          "Moins sucré que le fructose",
        ],
        pros_b: [
          "Formule C6H12O6, un cétohexose",
          "Forme un cycle à cinq membres",
          "Contient un groupe fonctionnel cétone",
          "Présent dans les fruits et le miel",
          "Sucre naturel le plus sucré",
        ],
        verdict:
          "Le glucose et le fructose sont des isomères de structure : même formule, groupes fonctionnels différents. Le glucose est un aldose, le fructose un cétose plus sucré.",
        faq: [
          {
            q: "Ont-ils la même formule ?",
            a: "Oui, tous deux sont C6H12O6, ce qui en fait des isomères de structure aux arrangements différents.",
          },
          {
            q: "Lequel est le plus sucré ?",
            a: "Le fructose est le plus sucré des sucres naturels courants.",
          },
          {
            q: "Quel groupe fonctionnel a chacun ?",
            a: "Le glucose a un groupe aldéhyde (aldose) ; le fructose un groupe cétone (cétose).",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "fructose-vs-sucrose",
    a: "Fructose",
    b: "Sucrose",
    category: "chemistry",
    emoji_a: "🍯",
    emoji_b: "🍚",
    content: {
      en: {
        title: "Fructose vs Sucrose: Sugar Comparison",
        h1: "Fructose vs Sucrose Explained",
        description:
          "Fructose is a single monosaccharide; sucrose is a disaccharide of glucose plus fructose. Compare these sugars side by side.",
        intro:
          "Fructose and sucrose differ in size: one is a simple sugar, the other is built from two joined units.",
        pros_a: [
          "A monosaccharide (single sugar unit)",
          "Formula C6H12O6",
          "Found in fruit and honey",
          "Absorbed directly without breakdown",
          "Very sweet taste",
        ],
        pros_b: [
          "A disaccharide (two sugar units)",
          "Formula C12H22O11",
          "Made of glucose plus fructose joined",
          "Common table sugar from cane or beet",
          "Must be hydrolyzed before absorption",
        ],
        verdict:
          "Fructose is a single sugar unit while sucrose is two units bonded together. Sucrose must be split into glucose and fructose by enzymes before the body can use it.",
        faq: [
          {
            q: "Is sucrose made of fructose?",
            a: "Partly. Sucrose is a disaccharide of one glucose unit joined to one fructose unit.",
          },
          {
            q: "Which is absorbed faster?",
            a: "Fructose is absorbed directly, while sucrose must first be hydrolyzed into its two parts.",
          },
          {
            q: "What enzyme breaks down sucrose?",
            a: "Sucrase splits sucrose into glucose and fructose in the small intestine.",
          },
        ],
      },
      fr: {
        title: "Fructose vs Saccharose : comparaison",
        h1: "Fructose vs Saccharose expliqués",
        description:
          "Le fructose est un monosaccharide ; le saccharose un disaccharide de glucose et fructose. Comparez ces sucres.",
        intro:
          "Le fructose et le saccharose diffèrent par leur taille : l'un est un sucre simple, l'autre est formé de deux unités liées.",
        pros_a: [
          "Un monosaccharide (une seule unité de sucre)",
          "Formule C6H12O6",
          "Présent dans les fruits et le miel",
          "Absorbé directement sans dégradation",
          "Goût très sucré",
        ],
        pros_b: [
          "Un disaccharide (deux unités de sucre)",
          "Formule C12H22O11",
          "Formé de glucose et fructose liés",
          "Sucre de table courant de canne ou betterave",
          "Doit être hydrolysé avant absorption",
        ],
        verdict:
          "Le fructose est une seule unité de sucre tandis que le saccharose en est deux liées. Le saccharose doit être scindé en glucose et fructose par des enzymes avant usage.",
        faq: [
          {
            q: "Le saccharose contient-il du fructose ?",
            a: "En partie. Le saccharose est un disaccharide d'une unité de glucose liée à une de fructose.",
          },
          {
            q: "Lequel est absorbé le plus vite ?",
            a: "Le fructose est absorbé directement, alors que le saccharose doit d'abord être hydrolysé en ses deux parties.",
          },
          {
            q: "Quelle enzyme dégrade le saccharose ?",
            a: "La sucrase scinde le saccharose en glucose et fructose dans l'intestin grêle.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "starch-vs-cellulose",
    a: "Starch",
    b: "Cellulose",
    category: "chemistry",
    emoji_a: "🥔",
    emoji_b: "🌿",
    content: {
      en: {
        title: "Starch vs Cellulose: Polysaccharides",
        h1: "Starch vs Cellulose Explained",
        description:
          "Starch and cellulose are both glucose polymers, but differ in bond type. Compare these two key polysaccharides.",
        intro:
          "Starch and cellulose are both built from glucose, yet one is digestible food storage and the other is structural fiber.",
        pros_a: [
          "Glucose polymer with alpha bonds",
          "Energy storage in plants",
          "Digestible by human enzymes",
          "Branched (amylopectin) and coiled (amylose) forms",
          "Found in potatoes, rice and bread",
        ],
        pros_b: [
          "Glucose polymer with beta bonds",
          "Structural support in plant cell walls",
          "Indigestible by humans (dietary fiber)",
          "Long, straight, strong chains",
          "Found in wood, cotton and paper",
        ],
        verdict:
          "Starch and cellulose are both glucose chains, but the alpha versus beta linkage decides everything. Alpha bonds make digestible energy storage; beta bonds make tough fiber.",
        faq: [
          {
            q: "Why can't humans digest cellulose?",
            a: "Humans lack the enzyme to break its beta-glucose bonds, so cellulose passes through as fiber.",
          },
          {
            q: "What is the key structural difference?",
            a: "Starch uses alpha glycosidic bonds; cellulose uses beta bonds, which makes straighter, stronger chains.",
          },
          {
            q: "Are they made from the same monomer?",
            a: "Yes, both are polymers of glucose, but linked differently.",
          },
        ],
      },
      fr: {
        title: "Amidon vs Cellulose : polysaccharides",
        h1: "Amidon vs Cellulose expliqués",
        description:
          "L'amidon et la cellulose sont des polymères de glucose, mais diffèrent par le type de liaison. Comparez ces deux polysaccharides.",
        intro:
          "L'amidon et la cellulose sont tous deux faits de glucose, pourtant l'un est une réserve digestible et l'autre une fibre structurale.",
        pros_a: [
          "Polymère de glucose à liaisons alpha",
          "Réserve d'énergie chez les plantes",
          "Digestible par les enzymes humaines",
          "Formes ramifiée (amylopectine) et enroulée (amylose)",
          "Présent dans pommes de terre, riz et pain",
        ],
        pros_b: [
          "Polymère de glucose à liaisons bêta",
          "Soutien structural des parois cellulaires",
          "Indigeste pour l'humain (fibre alimentaire)",
          "Chaînes longues, droites et solides",
          "Présente dans le bois, le coton et le papier",
        ],
        verdict:
          "L'amidon et la cellulose sont des chaînes de glucose, mais la liaison alpha ou bêta décide tout. Les liaisons alpha donnent une réserve digestible ; les bêta une fibre résistante.",
        faq: [
          {
            q: "Pourquoi l'humain ne digère-t-il pas la cellulose ?",
            a: "L'humain manque de l'enzyme pour rompre ses liaisons bêta-glucose, la cellulose passe donc comme fibre.",
          },
          {
            q: "Quelle est la différence structurale clé ?",
            a: "L'amidon utilise des liaisons glycosidiques alpha ; la cellulose des bêta, donnant des chaînes plus droites et solides.",
          },
          {
            q: "Sont-ils faits du même monomère ?",
            a: "Oui, tous deux sont des polymères de glucose, mais liés différemment.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "amino-acid-vs-peptide",
    a: "Amino acid",
    b: "Peptide",
    category: "chemistry",
    emoji_a: "🔤",
    emoji_b: "🔗",
    content: {
      en: {
        title: "Amino Acid vs Peptide: Building Proteins",
        h1: "Amino Acid vs Peptide Explained",
        description:
          "Amino acids are single monomers; peptides are short chains of amino acids joined by peptide bonds. Compare both.",
        intro:
          "Amino acids are the alphabet of proteins, and peptides are short words spelled from them. Size and bonding set them apart.",
        pros_a: [
          "A single monomer unit",
          "Has an amino and a carboxyl group",
          "20 standard types build all proteins",
          "Distinct R side chain per amino acid",
          "Examples: glycine, alanine, lysine",
        ],
        pros_b: [
          "A short chain of amino acids",
          "Units joined by peptide bonds",
          "Formed by condensation, releasing water",
          "Shorter than a full protein",
          "Examples: dipeptides, oligopeptides",
        ],
        verdict:
          "An amino acid is one building block; a peptide is several joined by peptide bonds. Link enough peptides and you get a polypeptide, then a functional protein.",
        faq: [
          {
            q: "How are peptides formed?",
            a: "Amino acids join by condensation reactions that form peptide bonds and release water.",
          },
          {
            q: "When does a peptide become a protein?",
            a: "Once a polypeptide chain is long enough and folds into a functional 3D shape.",
          },
          {
            q: "How many standard amino acids are there?",
            a: "There are 20 standard amino acids that combine to build all proteins.",
          },
        ],
      },
      fr: {
        title: "Acide aminé vs Peptide : bâtir des protéines",
        h1: "Acide aminé vs Peptide expliqués",
        description:
          "Les acides aminés sont des monomères uniques ; les peptides de courtes chaînes liées par des liaisons peptidiques. Comparez.",
        intro:
          "Les acides aminés sont l'alphabet des protéines, et les peptides de courts mots formés à partir d'eux. Taille et liaison les distinguent.",
        pros_a: [
          "Une seule unité monomère",
          "Possède un groupe amine et un carboxyle",
          "20 types standards bâtissent toutes les protéines",
          "Chaîne latérale R distincte par acide aminé",
          "Exemples : glycine, alanine, lysine",
        ],
        pros_b: [
          "Une courte chaîne d'acides aminés",
          "Unités liées par des liaisons peptidiques",
          "Formé par condensation, libérant de l'eau",
          "Plus court qu'une protéine complète",
          "Exemples : dipeptides, oligopeptides",
        ],
        verdict:
          "Un acide aminé est un bloc de base ; un peptide en est plusieurs liés par des liaisons peptidiques. Assez de peptides liés donnent un polypeptide, puis une protéine fonctionnelle.",
        faq: [
          {
            q: "Comment les peptides se forment-ils ?",
            a: "Les acides aminés se lient par des réactions de condensation formant des liaisons peptidiques et libérant de l'eau.",
          },
          {
            q: "Quand un peptide devient-il une protéine ?",
            a: "Lorsqu'une chaîne polypeptidique est assez longue et se replie en une forme 3D fonctionnelle.",
          },
          {
            q: "Combien d'acides aminés standards existe-t-il ?",
            a: "Il existe 20 acides aminés standards qui se combinent pour bâtir toutes les protéines.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "protein-vs-enzyme",
    a: "Protein",
    b: "Enzyme",
    category: "chemistry",
    emoji_a: "🥩",
    emoji_b: "✂️",
    content: {
      en: {
        title: "Protein vs Enzyme: What's the Difference",
        h1: "Protein vs Enzyme Explained",
        description:
          "All enzymes are proteins, but not all proteins are enzymes. Compare the broad protein class with catalytic enzymes.",
        intro:
          "Protein is a broad category; enzyme is a specialized subset. Understanding the relationship clarifies biology and biochemistry.",
        pros_a: [
          "Polymer of amino acids",
          "Serves many roles: structure, transport, defense",
          "Folds into a specific 3D shape",
          "Includes structural and storage types",
          "Examples: collagen, hemoglobin, antibodies",
        ],
        pros_b: [
          "A protein that acts as a biological catalyst",
          "Speeds up reactions without being used up",
          "Has an active site that binds substrate",
          "Highly specific for its reaction",
          "Examples: amylase, lipase, catalase",
        ],
        verdict:
          "Every enzyme is a protein, but proteins do far more than catalysis. Enzymes are the catalytic specialists; the protein class also covers structure, transport and defense.",
        faq: [
          {
            q: "Are all proteins enzymes?",
            a: "No. All enzymes are proteins, but many proteins serve structural, transport or defensive roles instead.",
          },
          {
            q: "What makes enzymes special?",
            a: "Their active site lets them catalyze a specific reaction while remaining unchanged.",
          },
          {
            q: "Can an enzyme be reused?",
            a: "Yes. An enzyme is not consumed, so it can catalyze the same reaction many times.",
          },
        ],
      },
      fr: {
        title: "Protéine vs Enzyme : quelle différence",
        h1: "Protéine vs Enzyme expliquées",
        description:
          "Toutes les enzymes sont des protéines, mais pas l'inverse. Comparez la classe large des protéines aux enzymes catalytiques.",
        intro:
          "Protéine est une catégorie large ; enzyme un sous-ensemble spécialisé. Comprendre le lien clarifie la biologie et la biochimie.",
        pros_a: [
          "Polymère d'acides aminés",
          "Joue de nombreux rôles : structure, transport, défense",
          "Se replie en une forme 3D précise",
          "Inclut les types structuraux et de réserve",
          "Exemples : collagène, hémoglobine, anticorps",
        ],
        pros_b: [
          "Une protéine agissant comme catalyseur biologique",
          "Accélère les réactions sans être consommée",
          "Possède un site actif qui lie le substrat",
          "Très spécifique de sa réaction",
          "Exemples : amylase, lipase, catalase",
        ],
        verdict:
          "Toute enzyme est une protéine, mais les protéines font bien plus que catalyser. Les enzymes sont les spécialistes catalytiques ; la classe protéine couvre aussi structure et transport.",
        faq: [
          {
            q: "Toutes les protéines sont-elles des enzymes ?",
            a: "Non. Toutes les enzymes sont des protéines, mais beaucoup de protéines ont des rôles structuraux ou de transport.",
          },
          {
            q: "Qu'est-ce qui rend les enzymes spéciales ?",
            a: "Leur site actif leur permet de catalyser une réaction précise tout en restant inchangées.",
          },
          {
            q: "Une enzyme peut-elle être réutilisée ?",
            a: "Oui. Une enzyme n'est pas consommée, elle peut donc catalyser la même réaction de nombreuses fois.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "saturated-fat-vs-unsaturated-fat",
    a: "Saturated fat",
    b: "Unsaturated fat",
    category: "chemistry",
    emoji_a: "🧈",
    emoji_b: "🫒",
    content: {
      en: {
        title: "Saturated vs Unsaturated Fat Compared",
        h1: "Saturated Fat vs Unsaturated Fat",
        description:
          "Saturated fats have no C=C double bonds; unsaturated fats have one or more. Compare structure and physical state.",
        intro:
          "Fats differ by the bonds in their fatty acid chains. That single chemical feature decides whether a fat is solid or liquid.",
        pros_a: [
          "No carbon-carbon double bonds",
          "Straight, tightly packing chains",
          "Solid at room temperature",
          "Higher melting point",
          "Found in butter and animal fat",
        ],
        pros_b: [
          "One or more C=C double bonds",
          "Kinked chains that pack loosely",
          "Liquid at room temperature",
          "Lower melting point",
          "Found in olive and sunflower oils",
        ],
        verdict:
          "Saturated fats are double-bond free, straight and solid; unsaturated fats have kinks from double bonds and stay liquid. The double bond is the whole difference.",
        faq: [
          {
            q: "Why are unsaturated fats liquid?",
            a: "Double bonds put kinks in the chains, so molecules cannot pack tightly and the fat stays liquid.",
          },
          {
            q: "What does saturated mean here?",
            a: "It means the carbon chain is saturated with hydrogen, holding the maximum possible, so no double bonds remain.",
          },
          {
            q: "What is a polyunsaturated fat?",
            a: "An unsaturated fat with more than one carbon-carbon double bond in its chain.",
          },
        ],
      },
      fr: {
        title: "Graisse saturée vs insaturée comparées",
        h1: "Graisse saturée vs Graisse insaturée",
        description:
          "Les graisses saturées n'ont pas de double liaison C=C ; les insaturées en ont une ou plus. Comparez structure et état physique.",
        intro:
          "Les graisses diffèrent par les liaisons de leurs chaînes d'acides gras. Ce seul trait chimique décide si une graisse est solide ou liquide.",
        pros_a: [
          "Aucune double liaison carbone-carbone",
          "Chaînes droites s'empilant serré",
          "Solide à température ambiante",
          "Point de fusion plus élevé",
          "Présente dans le beurre et la graisse animale",
        ],
        pros_b: [
          "Une ou plusieurs doubles liaisons C=C",
          "Chaînes coudées s'empilant lâchement",
          "Liquide à température ambiante",
          "Point de fusion plus bas",
          "Présente dans les huiles d'olive et tournesol",
        ],
        verdict:
          "Les graisses saturées sont sans double liaison, droites et solides ; les insaturées sont coudées par des doubles liaisons et restent liquides. La double liaison fait toute la différence.",
        faq: [
          {
            q: "Pourquoi les graisses insaturées sont-elles liquides ?",
            a: "Les doubles liaisons coudent les chaînes, les molécules ne s'empilent pas serré et la graisse reste liquide.",
          },
          {
            q: "Que signifie saturée ici ?",
            a: "Que la chaîne carbonée est saturée d'hydrogène, en contenant le maximum, donc sans double liaison.",
          },
          {
            q: "Qu'est-ce qu'une graisse polyinsaturée ?",
            a: "Une graisse insaturée avec plus d'une double liaison carbone-carbone dans sa chaîne.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "ester-vs-ether",
    a: "Ester",
    b: "Ether",
    category: "chemistry",
    emoji_a: "🍓",
    emoji_b: "💤",
    content: {
      en: {
        title: "Ester vs Ether: Functional Groups",
        h1: "Ester vs Ether Explained",
        description:
          "Esters have a carbonyl next to an oxygen; ethers have a simple oxygen bridge. Compare these two functional groups.",
        intro:
          "Esters and ethers both contain an oxygen atom bonded to carbon, but the surrounding structure makes them behave very differently.",
        pros_a: [
          "Functional group RCOOR'",
          "Has a carbonyl C=O next to an oxygen",
          "Often has sweet, fruity smells",
          "Formed from acid plus alcohol",
          "Examples: ethyl acetate, fats, fragrances",
        ],
        pros_b: [
          "Functional group R-O-R'",
          "Just an oxygen bridging two carbons",
          "Relatively unreactive and stable",
          "Often used as solvents",
          "Examples: diethyl ether, anisole",
        ],
        verdict:
          "Esters carry a carbonyl beside the oxygen and smell fruity; ethers are a plain oxygen bridge and act as inert solvents. The carbonyl is the deciding feature.",
        faq: [
          {
            q: "How do I tell an ester from an ether?",
            a: "An ester has a carbonyl C=O next to its oxygen; an ether has no carbonyl at all.",
          },
          {
            q: "Why do esters smell fruity?",
            a: "Many volatile esters have pleasant fruity aromas and are used in flavorings and perfumes.",
          },
          {
            q: "Why are ethers good solvents?",
            a: "Ethers are fairly unreactive and dissolve many organic compounds without interfering.",
          },
        ],
      },
      fr: {
        title: "Ester vs Éther : groupes fonctionnels",
        h1: "Ester vs Éther expliqués",
        description:
          "Les esters ont un carbonyle voisin d'un oxygène ; les éthers un simple pont oxygène. Comparez ces deux groupes fonctionnels.",
        intro:
          "Les esters et les éthers contiennent tous deux un oxygène lié au carbone, mais la structure environnante les rend très différents.",
        pros_a: [
          "Groupe fonctionnel RCOOR'",
          "Possède un carbonyle C=O voisin d'un oxygène",
          "Odeurs souvent douces et fruitées",
          "Formé d'un acide et d'un alcool",
          "Exemples : acétate d'éthyle, graisses, parfums",
        ],
        pros_b: [
          "Groupe fonctionnel R-O-R'",
          "Un simple oxygène pontant deux carbones",
          "Relativement peu réactif et stable",
          "Souvent utilisé comme solvant",
          "Exemples : éther diéthylique, anisole",
        ],
        verdict:
          "Les esters portent un carbonyle près de l'oxygène et sentent le fruité ; les éthers sont un simple pont oxygène et servent de solvants inertes.",
        faq: [
          {
            q: "Comment distinguer un ester d'un éther ?",
            a: "Un ester a un carbonyle C=O voisin de son oxygène ; un éther n'a aucun carbonyle.",
          },
          {
            q: "Pourquoi les esters sentent-ils le fruité ?",
            a: "Beaucoup d'esters volatils ont des arômes fruités agréables et servent dans les arômes et parfums.",
          },
          {
            q: "Pourquoi les éthers sont-ils de bons solvants ?",
            a: "Les éthers sont assez peu réactifs et dissolvent de nombreux composés organiques sans interférer.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "aldehyde-vs-ketone",
    a: "Aldehyde",
    b: "Ketone",
    category: "chemistry",
    emoji_a: "🧴",
    emoji_b: "💅",
    content: {
      en: {
        title: "Aldehyde vs Ketone: Carbonyl Compounds",
        h1: "Aldehyde vs Ketone Explained",
        description:
          "Aldehydes have a carbonyl at the chain end; ketones have it within the chain. Compare these carbonyl groups for study.",
        intro:
          "Aldehydes and ketones both feature the carbonyl group, but the carbonyl's position changes their reactivity.",
        pros_a: [
          "Carbonyl group at the end of the carbon chain",
          "Has at least one hydrogen on the carbonyl carbon",
          "Easily oxidized to carboxylic acids",
          "Positive Tollens and Fehling's tests",
          "Examples: formaldehyde, acetaldehyde",
        ],
        pros_b: [
          "Carbonyl group within the carbon chain",
          "Two carbon groups on the carbonyl carbon",
          "Resistant to mild oxidation",
          "Negative Tollens and Fehling's tests",
          "Examples: acetone, butanone",
        ],
        verdict:
          "Aldehydes carry the carbonyl at the chain end and oxidize easily; ketones bury it mid-chain and resist oxidation. Tollens' test tells them apart with a silver mirror.",
        faq: [
          {
            q: "How do I distinguish them in the lab?",
            a: "Tollens' reagent gives a silver mirror with aldehydes but not with ketones.",
          },
          {
            q: "Why are aldehydes easier to oxidize?",
            a: "The hydrogen on their carbonyl carbon can be removed during oxidation to a carboxylic acid.",
          },
          {
            q: "What do they have in common?",
            a: "Both contain the carbonyl group, a carbon double bonded to oxygen.",
          },
        ],
      },
      fr: {
        title: "Aldéhyde vs Cétone : composés carbonylés",
        h1: "Aldéhyde vs Cétone expliqués",
        description:
          "Les aldéhydes ont un carbonyle en bout de chaîne ; les cétones au sein de la chaîne. Comparez ces groupes carbonylés.",
        intro:
          "Les aldéhydes et les cétones possèdent tous deux le groupe carbonyle, mais sa position change leur réactivité.",
        pros_a: [
          "Groupe carbonyle en bout de chaîne carbonée",
          "Au moins un hydrogène sur le carbone carbonyle",
          "Facilement oxydé en acides carboxyliques",
          "Tests de Tollens et Fehling positifs",
          "Exemples : formaldéhyde, acétaldéhyde",
        ],
        pros_b: [
          "Groupe carbonyle au sein de la chaîne carbonée",
          "Deux groupes carbonés sur le carbone carbonyle",
          "Résistant à l'oxydation douce",
          "Tests de Tollens et Fehling négatifs",
          "Exemples : acétone, butanone",
        ],
        verdict:
          "Les aldéhydes portent le carbonyle en bout de chaîne et s'oxydent facilement ; les cétones l'enfouissent au milieu et résistent à l'oxydation. Le test de Tollens les distingue.",
        faq: [
          {
            q: "Comment les distinguer au laboratoire ?",
            a: "Le réactif de Tollens donne un miroir d'argent avec les aldéhydes mais pas avec les cétones.",
          },
          {
            q: "Pourquoi les aldéhydes s'oxydent-ils plus facilement ?",
            a: "L'hydrogène de leur carbone carbonyle peut être retiré lors de l'oxydation en acide carboxylique.",
          },
          {
            q: "Qu'ont-ils en commun ?",
            a: "Tous deux contiennent le groupe carbonyle, un carbone doublement lié à l'oxygène.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "alcohol-vs-phenol",
    a: "Alcohol",
    b: "Phenol",
    category: "chemistry",
    emoji_a: "🍷",
    emoji_b: "🧫",
    content: {
      en: {
        title: "Alcohol vs Phenol: Hydroxyl Compounds",
        h1: "Alcohol vs Phenol Explained",
        description:
          "Alcohols have an OH on a saturated carbon; phenols have an OH directly on a benzene ring. Compare acidity and reactions.",
        intro:
          "Alcohols and phenols both carry a hydroxyl group, but where that OH attaches changes their acidity dramatically.",
        pros_a: [
          "Hydroxyl OH on an sp3 carbon",
          "Very weakly acidic, nearly neutral",
          "Does not react with NaOH",
          "Can be oxidized to aldehydes or acids",
          "Examples: ethanol, methanol, propanol",
        ],
        pros_b: [
          "Hydroxyl OH bonded to a benzene ring",
          "Significantly more acidic than alcohols",
          "Reacts with NaOH to form salts",
          "Ring stabilizes the negative charge",
          "Examples: phenol, cresol, catechol",
        ],
        verdict:
          "Both have an OH group, but phenols are far more acidic because the benzene ring stabilizes the resulting anion. Only phenols react with sodium hydroxide.",
        faq: [
          {
            q: "Why are phenols more acidic than alcohols?",
            a: "The aromatic ring delocalizes the negative charge of the phenoxide anion, stabilizing it.",
          },
          {
            q: "Do alcohols react with NaOH?",
            a: "No. Alcohols are too weakly acidic, while phenols do react with sodium hydroxide.",
          },
          {
            q: "What do they have in common?",
            a: "Both contain a hydroxyl OH functional group attached to carbon.",
          },
        ],
      },
      fr: {
        title: "Alcool vs Phénol : composés hydroxylés",
        h1: "Alcool vs Phénol expliqués",
        description:
          "Les alcools ont un OH sur un carbone saturé ; les phénols un OH directement sur un cycle benzénique. Comparez acidité et réactions.",
        intro:
          "Les alcools et les phénols portent tous deux un groupe hydroxyle, mais l'emplacement de ce OH change fortement leur acidité.",
        pros_a: [
          "Hydroxyle OH sur un carbone sp3",
          "Très faiblement acide, presque neutre",
          "Ne réagit pas avec NaOH",
          "Peut être oxydé en aldéhydes ou acides",
          "Exemples : éthanol, méthanol, propanol",
        ],
        pros_b: [
          "Hydroxyle OH lié à un cycle benzénique",
          "Nettement plus acide que les alcools",
          "Réagit avec NaOH pour former des sels",
          "Le cycle stabilise la charge négative",
          "Exemples : phénol, crésol, catéchol",
        ],
        verdict:
          "Les deux ont un groupe OH, mais les phénols sont bien plus acides car le cycle benzénique stabilise l'anion formé. Seuls les phénols réagissent avec l'hydroxyde de sodium.",
        faq: [
          {
            q: "Pourquoi les phénols sont-ils plus acides que les alcools ?",
            a: "Le cycle aromatique délocalise la charge négative de l'anion phénolate, le stabilisant.",
          },
          {
            q: "Les alcools réagissent-ils avec NaOH ?",
            a: "Non. Les alcools sont trop faiblement acides, tandis que les phénols réagissent avec l'hydroxyde de sodium.",
          },
          {
            q: "Qu'ont-ils en commun ?",
            a: "Tous deux contiennent un groupe fonctionnel hydroxyle OH lié au carbone.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "amine-vs-amide",
    a: "Amine",
    b: "Amide",
    category: "chemistry",
    emoji_a: "🐟",
    emoji_b: "🧵",
    content: {
      en: {
        title: "Amine vs Amide: Nitrogen Functional Groups",
        h1: "Amine vs Amide Explained",
        description:
          "Amines have nitrogen on a carbon chain; amides have nitrogen next to a carbonyl. Compare basicity and reactivity.",
        intro:
          "Amines and amides both contain nitrogen, but a single neighboring carbonyl group changes their behavior completely.",
        pros_a: [
          "Nitrogen bonded only to carbon and hydrogen",
          "Basic, accepts protons readily",
          "Often has a fishy smell",
          "Derived from ammonia",
          "Examples: methylamine, aniline",
        ],
        pros_b: [
          "Nitrogen bonded next to a carbonyl C=O",
          "Almost neutral, very weakly basic",
          "Stable and unreactive",
          "Forms the peptide bond in proteins",
          "Examples: acetamide, nylon, urea",
        ],
        verdict:
          "Amines are basic nitrogen compounds, while amides have an adjacent carbonyl that drains the nitrogen's basicity. The amide group also builds proteins and nylon.",
        faq: [
          {
            q: "Why are amides less basic than amines?",
            a: "The neighboring carbonyl pulls the nitrogen's lone pair into resonance, so it cannot accept protons easily.",
          },
          {
            q: "Where does the amide group appear in biology?",
            a: "It forms the peptide bonds that link amino acids into proteins.",
          },
          {
            q: "How can I spot an amide?",
            a: "Look for a carbonyl C=O directly bonded to a nitrogen atom.",
          },
        ],
      },
      fr: {
        title: "Amine vs Amide : groupes azotés",
        h1: "Amine vs Amide expliqués",
        description:
          "Les amines ont un azote sur une chaîne carbonée ; les amides un azote voisin d'un carbonyle. Comparez basicité et réactivité.",
        intro:
          "Les amines et les amides contiennent tous deux de l'azote, mais un seul carbonyle voisin change totalement leur comportement.",
        pros_a: [
          "Azote lié uniquement à carbone et hydrogène",
          "Basique, accepte facilement des protons",
          "A souvent une odeur de poisson",
          "Dérivée de l'ammoniac",
          "Exemples : méthylamine, aniline",
        ],
        pros_b: [
          "Azote lié à côté d'un carbonyle C=O",
          "Presque neutre, très faiblement basique",
          "Stable et peu réactif",
          "Forme la liaison peptidique des protéines",
          "Exemples : acétamide, nylon, urée",
        ],
        verdict:
          "Les amines sont des composés azotés basiques, tandis que les amides ont un carbonyle voisin qui draine la basicité de l'azote. Le groupe amide bâtit aussi protéines et nylon.",
        faq: [
          {
            q: "Pourquoi les amides sont-ils moins basiques que les amines ?",
            a: "Le carbonyle voisin attire le doublet de l'azote en résonance, il ne peut donc plus accepter de protons.",
          },
          {
            q: "Où le groupe amide apparaît-il en biologie ?",
            a: "Il forme les liaisons peptidiques qui relient les acides aminés en protéines.",
          },
          {
            q: "Comment repérer un amide ?",
            a: "Cherchez un carbonyle C=O directement lié à un atome d'azote.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "distillation-vs-sublimation",
    a: "Distillation",
    b: "Sublimation",
    category: "chemistry",
    emoji_a: "⚗️",
    emoji_b: "🌫️",
    content: {
      en: {
        title: "Distillation vs Sublimation: Separation",
        h1: "Distillation vs Sublimation Explained",
        description:
          "Distillation separates liquids by boiling point; sublimation separates a solid that turns straight to vapor. Compare both.",
        intro:
          "Both are separation and purification techniques, but they exploit different phase changes to isolate a substance.",
        pros_a: [
          "Separates liquids using boiling point",
          "Liquid is vaporized then condensed",
          "Goes liquid to gas to liquid",
          "Used to purify or split mixtures",
          "Examples: separating ethanol from water",
        ],
        pros_b: [
          "Separates a solid that vaporizes directly",
          "Solid goes straight to gas, skipping liquid",
          "Vapor then deposits back to solid",
          "Used when a solid sublimes cleanly",
          "Examples: purifying iodine or dry ice",
        ],
        verdict:
          "Distillation cycles a substance through the liquid phase, while sublimation skips the liquid entirely. Choose sublimation only when a component goes straight from solid to gas.",
        faq: [
          {
            q: "What phase change does sublimation use?",
            a: "Solid turns directly into gas without ever becoming liquid.",
          },
          {
            q: "When is distillation the better choice?",
            a: "When separating liquids or a dissolved solute from a liquid by exploiting boiling points.",
          },
          {
            q: "Give an example of sublimation.",
            a: "Dry ice (solid carbon dioxide) sublimes directly into gas at room temperature.",
          },
        ],
      },
      fr: {
        title: "Distillation vs Sublimation : séparation",
        h1: "Distillation vs Sublimation expliquées",
        description:
          "La distillation sépare les liquides par point d'ébullition ; la sublimation un solide qui passe direct en vapeur. Comparez.",
        intro:
          "Ce sont deux techniques de séparation et de purification, mais elles exploitent des changements d'état différents.",
        pros_a: [
          "Sépare les liquides selon le point d'ébullition",
          "Le liquide est vaporisé puis condensé",
          "Passe liquide à gaz à liquide",
          "Sert à purifier ou séparer des mélanges",
          "Exemples : séparer l'éthanol de l'eau",
        ],
        pros_b: [
          "Sépare un solide qui se vaporise directement",
          "Le solide passe direct en gaz, sans liquide",
          "La vapeur se redépose ensuite en solide",
          "Utilisée quand un solide se sublime proprement",
          "Exemples : purifier l'iode ou la glace sèche",
        ],
        verdict:
          "La distillation fait passer une substance par la phase liquide, tandis que la sublimation saute le liquide. Choisissez la sublimation quand un composant passe direct solide-gaz.",
        faq: [
          {
            q: "Quel changement d'état utilise la sublimation ?",
            a: "Le solide se transforme directement en gaz sans jamais devenir liquide.",
          },
          {
            q: "Quand la distillation est-elle préférable ?",
            a: "Pour séparer des liquides ou un soluté dissous d'un liquide en exploitant les points d'ébullition.",
          },
          {
            q: "Donnez un exemple de sublimation.",
            a: "La glace sèche (dioxyde de carbone solide) se sublime directement en gaz à température ambiante.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "evaporation-vs-condensation",
    a: "Evaporation",
    b: "Condensation",
    category: "chemistry",
    emoji_a: "☀️",
    emoji_b: "💧",
    content: {
      en: {
        title: "Evaporation vs Condensation: Phase Changes",
        h1: "Evaporation vs Condensation Explained",
        description:
          "Evaporation turns liquid into vapor; condensation turns vapor back into liquid. Compare these opposite phase changes.",
        intro:
          "Evaporation and condensation are reverse processes that move matter between liquid and gas. Together they drive the water cycle.",
        pros_a: [
          "Liquid changes into gas",
          "Absorbs heat (endothermic)",
          "Occurs at the liquid surface",
          "Sped up by heat and surface area",
          "Example: a puddle drying in the sun",
        ],
        pros_b: [
          "Gas changes back into liquid",
          "Releases heat (exothermic)",
          "Occurs when vapor cools",
          "Sped up by cooling and surfaces",
          "Example: dew forming on grass",
        ],
        verdict:
          "Evaporation absorbs heat to turn liquid into vapor; condensation releases heat to turn vapor back to liquid. They are exact opposites and power the water cycle.",
        faq: [
          {
            q: "Which process absorbs heat?",
            a: "Evaporation is endothermic, absorbing heat, while condensation is exothermic, releasing it.",
          },
          {
            q: "Why does sweating cool you down?",
            a: "Sweat evaporating absorbs heat from your skin, lowering your body temperature.",
          },
          {
            q: "How do they relate to the water cycle?",
            a: "Evaporation lifts water into the air and condensation forms clouds and rain.",
          },
        ],
      },
      fr: {
        title: "Évaporation vs Condensation : changements d'état",
        h1: "Évaporation vs Condensation expliquées",
        description:
          "L'évaporation transforme le liquide en vapeur ; la condensation la vapeur en liquide. Comparez ces changements d'état opposés.",
        intro:
          "L'évaporation et la condensation sont des processus inverses qui font passer la matière entre liquide et gaz. Ensemble, ils animent le cycle de l'eau.",
        pros_a: [
          "Le liquide se transforme en gaz",
          "Absorbe de la chaleur (endothermique)",
          "Se produit à la surface du liquide",
          "Accélérée par la chaleur et la surface",
          "Exemple : une flaque qui sèche au soleil",
        ],
        pros_b: [
          "Le gaz se retransforme en liquide",
          "Libère de la chaleur (exothermique)",
          "Se produit quand la vapeur refroidit",
          "Accélérée par le refroidissement et les surfaces",
          "Exemple : la rosée sur l'herbe",
        ],
        verdict:
          "L'évaporation absorbe de la chaleur pour passer du liquide à la vapeur ; la condensation en libère pour l'inverse. Ce sont des opposées qui animent le cycle de l'eau.",
        faq: [
          {
            q: "Quel processus absorbe de la chaleur ?",
            a: "L'évaporation est endothermique, absorbant la chaleur, tandis que la condensation est exothermique.",
          },
          {
            q: "Pourquoi transpirer rafraîchit-il ?",
            a: "La sueur qui s'évapore absorbe la chaleur de votre peau, abaissant la température du corps.",
          },
          {
            q: "Quel lien avec le cycle de l'eau ?",
            a: "L'évaporation élève l'eau dans l'air et la condensation forme nuages et pluie.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "filtration-vs-centrifugation",
    a: "Filtration",
    b: "Centrifugation",
    category: "chemistry",
    emoji_a: "☕",
    emoji_b: "🌀",
    content: {
      en: {
        title: "Filtration vs Centrifugation Compared",
        h1: "Filtration vs Centrifugation Explained",
        description:
          "Filtration separates by particle size through a barrier; centrifugation separates by density using spin. Compare both methods.",
        intro:
          "Both separate mixtures, especially solids from liquids, but they rely on different physical principles.",
        pros_a: [
          "Separates particles by size",
          "Uses a porous barrier or filter",
          "Solid is trapped, liquid passes through",
          "Simple, cheap and widely used",
          "Example: filtering sand from water",
        ],
        pros_b: [
          "Separates components by density",
          "Uses rapid spinning to create force",
          "Denser material moves outward",
          "Effective for fine or microscopic particles",
          "Example: spinning down blood cells",
        ],
        verdict:
          "Filtration sieves a mixture by particle size, while centrifugation spins it to sort by density. Centrifugation handles fine particles that simple filtration cannot.",
        faq: [
          {
            q: "When is centrifugation better than filtration?",
            a: "For very fine or microscopic particles that pass through ordinary filters.",
          },
          {
            q: "What does a filter rely on?",
            a: "Pore size: particles larger than the pores stay behind while smaller ones and liquids pass.",
          },
          {
            q: "What property does centrifugation use?",
            a: "Density differences, since spinning pushes denser material outward faster.",
          },
        ],
      },
      fr: {
        title: "Filtration vs Centrifugation comparées",
        h1: "Filtration vs Centrifugation expliquées",
        description:
          "La filtration sépare par taille de particule à travers une barrière ; la centrifugation par densité grâce à la rotation. Comparez.",
        intro:
          "Les deux séparent des mélanges, surtout solides et liquides, mais elles reposent sur des principes physiques différents.",
        pros_a: [
          "Sépare les particules par taille",
          "Utilise une barrière poreuse ou un filtre",
          "Le solide est retenu, le liquide passe",
          "Simple, peu coûteuse et très répandue",
          "Exemple : filtrer le sable de l'eau",
        ],
        pros_b: [
          "Sépare les composants par densité",
          "Utilise une rotation rapide créant une force",
          "Le matériau plus dense se déplace vers l'extérieur",
          "Efficace pour les particules fines ou microscopiques",
          "Exemple : sédimenter les cellules sanguines",
        ],
        verdict:
          "La filtration tamise un mélange par taille de particule, tandis que la centrifugation le fait tourner pour trier par densité. La centrifugation gère les particules fines.",
        faq: [
          {
            q: "Quand la centrifugation vaut-elle mieux que la filtration ?",
            a: "Pour les particules très fines ou microscopiques qui traversent les filtres ordinaires.",
          },
          {
            q: "Sur quoi repose un filtre ?",
            a: "La taille des pores : les particules plus grandes restent, les plus petites et liquides passent.",
          },
          {
            q: "Quelle propriété utilise la centrifugation ?",
            a: "Les différences de densité, la rotation poussant le matériau plus dense vers l'extérieur.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "mole-vs-atom",
    a: "Mole",
    b: "Atom",
    category: "chemistry",
    emoji_a: "🔢",
    emoji_b: "⚛️",
    content: {
      en: {
        title: "Mole vs Atom: Counting in Chemistry",
        h1: "Mole vs Atom Explained",
        description:
          "An atom is a single particle; a mole is a huge fixed count of particles. Compare these two scales for chemistry study.",
        intro:
          "An atom is the smallest unit of an element, and a mole is the chemist's way to count atoms in usable amounts.",
        pros_a: [
          "A counting unit, like a dozen",
          "Equals 6.022×10²³ particles",
          "Links atomic mass to grams",
          "Used in all stoichiometry calculations",
          "Defined by Avogadro's number",
        ],
        pros_b: [
          "The smallest unit of an element",
          "A single, individual particle",
          "Has a nucleus and electrons",
          "Far too small to weigh alone",
          "Building block of all matter",
        ],
        verdict:
          "An atom is one particle; a mole is 6.022×10²³ of them. The mole bridges the invisible atomic world with measurable grams in the lab.",
        faq: [
          {
            q: "How many atoms are in a mole?",
            a: "One mole contains Avogadro's number of particles, about 6.022×10²³.",
          },
          {
            q: "Why do chemists use moles?",
            a: "Atoms are too tiny to count individually, so the mole groups them into weighable amounts.",
          },
          {
            q: "Is a mole always atoms?",
            a: "No. A mole can count any particles, including molecules, ions or electrons.",
          },
        ],
      },
      fr: {
        title: "Mole vs Atome : compter en chimie",
        h1: "Mole vs Atome expliqués",
        description:
          "Un atome est une particule unique ; une mole un nombre fixe énorme de particules. Comparez ces deux échelles de la chimie.",
        intro:
          "Un atome est la plus petite unité d'un élément, et la mole est la façon dont le chimiste compte les atomes en quantités utilisables.",
        pros_a: [
          "Une unité de comptage, comme une douzaine",
          "Vaut 6,022×10²³ particules",
          "Relie la masse atomique aux grammes",
          "Utilisée dans tous les calculs de stœchiométrie",
          "Définie par le nombre d'Avogadro",
        ],
        pros_b: [
          "La plus petite unité d'un élément",
          "Une particule unique et individuelle",
          "Possède un noyau et des électrons",
          "Bien trop petit pour être pesé seul",
          "Brique de base de toute la matière",
        ],
        verdict:
          "Un atome est une particule ; une mole en est 6,022×10²³. La mole relie le monde atomique invisible aux grammes mesurables du laboratoire.",
        faq: [
          {
            q: "Combien d'atomes dans une mole ?",
            a: "Une mole contient le nombre d'Avogadro de particules, environ 6,022×10²³.",
          },
          {
            q: "Pourquoi les chimistes utilisent-ils les moles ?",
            a: "Les atomes sont trop petits pour être comptés un à un, la mole les regroupe en quantités pesables.",
          },
          {
            q: "Une mole compte-t-elle toujours des atomes ?",
            a: "Non. Une mole peut compter toute particule, y compris molécules, ions ou électrons.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "molarity-vs-molality",
    a: "Molarity",
    b: "Molality",
    category: "chemistry",
    emoji_a: "🧪",
    emoji_b: "⚖️",
    content: {
      en: {
        title: "Molarity vs Molality: Concentration Units",
        h1: "Molarity vs Molality Explained",
        description:
          "Molarity uses solution volume; molality uses solvent mass. Compare these concentration units for chemistry study.",
        intro:
          "Molarity and molality both measure concentration, but one depends on volume and the other on mass.",
        pros_a: [
          "Moles of solute per liter of solution",
          "Symbol M, unit mol/L",
          "Easy to measure with volumetric glassware",
          "Changes with temperature",
          "Most common concentration unit",
        ],
        pros_b: [
          "Moles of solute per kilogram of solvent",
          "Symbol m, unit mol/kg",
          "Based on mass, not volume",
          "Independent of temperature",
          "Used for colligative property calculations",
        ],
        verdict:
          "Molarity is convenient and volume-based but shifts with temperature; molality is mass-based and temperature-stable. Use molality for precise colligative property work.",
        faq: [
          {
            q: "Why does molarity change with temperature?",
            a: "Volume expands or contracts with temperature, so the moles-per-liter ratio shifts.",
          },
          {
            q: "When should I use molality?",
            a: "For colligative properties like boiling point elevation, where temperature stability matters.",
          },
          {
            q: "What is the difference in the denominator?",
            a: "Molarity divides by liters of solution; molality divides by kilograms of solvent.",
          },
        ],
      },
      fr: {
        title: "Molarité vs Molalité : unités de concentration",
        h1: "Molarité vs Molalité expliquées",
        description:
          "La molarité utilise le volume de solution ; la molalité la masse de solvant. Comparez ces unités de concentration.",
        intro:
          "La molarité et la molalité mesurent toutes deux la concentration, mais l'une dépend du volume et l'autre de la masse.",
        pros_a: [
          "Moles de soluté par litre de solution",
          "Symbole M, unité mol/L",
          "Facile à mesurer avec la verrerie volumétrique",
          "Varie avec la température",
          "Unité de concentration la plus courante",
        ],
        pros_b: [
          "Moles de soluté par kilogramme de solvant",
          "Symbole m, unité mol/kg",
          "Basée sur la masse, pas le volume",
          "Indépendante de la température",
          "Utilisée pour les propriétés colligatives",
        ],
        verdict:
          "La molarité est pratique et basée sur le volume mais varie avec la température ; la molalité est basée sur la masse et stable. Utilisez la molalité pour les propriétés colligatives.",
        faq: [
          {
            q: "Pourquoi la molarité varie-t-elle avec la température ?",
            a: "Le volume se dilate ou se contracte avec la température, donc le rapport moles par litre change.",
          },
          {
            q: "Quand utiliser la molalité ?",
            a: "Pour les propriétés colligatives comme l'élévation du point d'ébullition, où la stabilité compte.",
          },
          {
            q: "Quelle est la différence au dénominateur ?",
            a: "La molarité divise par les litres de solution ; la molalité par les kilogrammes de solvant.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "isotope-vs-isomer",
    a: "Isotope",
    b: "Isomer",
    category: "chemistry",
    emoji_a: "⚛️",
    emoji_b: "🧩",
    content: {
      en: {
        title: "Isotope vs Isomer: Common Confusion",
        h1: "Isotope vs Isomer Explained",
        description:
          "Isotopes are atoms of one element with different neutron counts; isomers are compounds with the same formula. Compare both.",
        intro:
          "Isotope and isomer sound alike but describe different things: one is about atoms, the other about molecules.",
        pros_a: [
          "Atoms of the same element",
          "Same protons, different neutrons",
          "Different mass numbers",
          "Identical chemical behavior",
          "Examples: carbon-12 and carbon-14",
        ],
        pros_b: [
          "Compounds with the same molecular formula",
          "Different arrangement of atoms",
          "Different chemical or physical properties",
          "Includes structural and stereoisomers",
          "Examples: butane and isobutane",
        ],
        verdict:
          "Isotopes are variants of a single atom differing in neutrons; isomers are different molecules sharing one formula. Don't confuse the atomic and molecular concepts.",
        faq: [
          {
            q: "What do isotopes have in common?",
            a: "They are atoms of the same element with identical proton count but different neutron numbers.",
          },
          {
            q: "Do isomers behave the same?",
            a: "No. Isomers share a formula but differ in structure, so their properties usually differ.",
          },
          {
            q: "Is the difference atomic or molecular?",
            a: "Isotopes are an atomic-level concept; isomers are a molecular-level concept.",
          },
        ],
      },
      fr: {
        title: "Isotope vs Isomère : confusion fréquente",
        h1: "Isotope vs Isomère expliqués",
        description:
          "Les isotopes sont des atomes d'un élément aux neutrons différents ; les isomères des composés de même formule. Comparez.",
        intro:
          "Isotope et isomère se ressemblent mais désignent des choses différentes : l'un concerne les atomes, l'autre les molécules.",
        pros_a: [
          "Atomes du même élément",
          "Mêmes protons, neutrons différents",
          "Nombres de masse différents",
          "Comportement chimique identique",
          "Exemples : carbone 12 et carbone 14",
        ],
        pros_b: [
          "Composés de même formule moléculaire",
          "Arrangement différent des atomes",
          "Propriétés chimiques ou physiques différentes",
          "Inclut isomères de structure et stéréoisomères",
          "Exemples : butane et isobutane",
        ],
        verdict:
          "Les isotopes sont des variantes d'un même atome différant par les neutrons ; les isomères des molécules différentes partageant une formule. Ne confondez pas atomique et moléculaire.",
        faq: [
          {
            q: "Qu'ont en commun les isotopes ?",
            a: "Ce sont des atomes du même élément avec le même nombre de protons mais des neutrons différents.",
          },
          {
            q: "Les isomères se comportent-ils pareil ?",
            a: "Non. Les isomères partagent une formule mais diffèrent en structure, donc leurs propriétés diffèrent.",
          },
          {
            q: "La différence est-elle atomique ou moléculaire ?",
            a: "Les isotopes sont un concept atomique ; les isomères un concept moléculaire.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "allotrope-vs-isotope",
    a: "Allotrope",
    b: "Isotope",
    category: "chemistry",
    emoji_a: "💎",
    emoji_b: "⚛️",
    content: {
      en: {
        title: "Allotrope vs Isotope: Element Variants",
        h1: "Allotrope vs Isotope Explained",
        description:
          "Allotropes are structural forms of one element; isotopes are atoms differing in neutron count. Compare these element variants.",
        intro:
          "Both terms describe forms of a single element, but allotropes vary in structure while isotopes vary inside the nucleus.",
        pros_a: [
          "Different structural forms of one element",
          "Same atoms arranged differently",
          "Different physical properties",
          "A bonding and structure concept",
          "Examples: diamond and graphite",
        ],
        pros_b: [
          "Atoms of one element with different neutrons",
          "Same protons, different mass numbers",
          "Nearly identical chemical behavior",
          "A nuclear concept",
          "Examples: carbon-12 and carbon-14",
        ],
        verdict:
          "Allotropes differ in how atoms are bonded and arranged; isotopes differ in their nuclei. One is about structure, the other about neutron count.",
        faq: [
          {
            q: "Are diamond and graphite isotopes?",
            a: "No, they are allotropes of carbon, differing in atomic arrangement, not nuclei.",
          },
          {
            q: "What changes between isotopes?",
            a: "Only the number of neutrons, and therefore the mass, while protons stay the same.",
          },
          {
            q: "Do allotropes have different properties?",
            a: "Yes. Diamond is hard and clear while graphite is soft and dark, despite both being carbon.",
          },
        ],
      },
      fr: {
        title: "Allotrope vs Isotope : variantes d'éléments",
        h1: "Allotrope vs Isotope expliqués",
        description:
          "Les allotropes sont des formes structurales d'un élément ; les isotopes des atomes aux neutrons différents. Comparez ces variantes.",
        intro:
          "Les deux termes décrivent des formes d'un même élément, mais les allotropes varient en structure et les isotopes dans le noyau.",
        pros_a: [
          "Différentes formes structurales d'un élément",
          "Mêmes atomes arrangés différemment",
          "Propriétés physiques différentes",
          "Un concept de liaison et de structure",
          "Exemples : diamant et graphite",
        ],
        pros_b: [
          "Atomes d'un élément aux neutrons différents",
          "Mêmes protons, nombres de masse différents",
          "Comportement chimique quasi identique",
          "Un concept nucléaire",
          "Exemples : carbone 12 et carbone 14",
        ],
        verdict:
          "Les allotropes diffèrent par la manière dont les atomes sont liés et arrangés ; les isotopes par leur noyau. L'un concerne la structure, l'autre le nombre de neutrons.",
        faq: [
          {
            q: "Le diamant et le graphite sont-ils des isotopes ?",
            a: "Non, ce sont des allotropes du carbone, différant par l'arrangement atomique, pas le noyau.",
          },
          {
            q: "Qu'est-ce qui change entre isotopes ?",
            a: "Seulement le nombre de neutrons, et donc la masse, les protons restant identiques.",
          },
          {
            q: "Les allotropes ont-ils des propriétés différentes ?",
            a: "Oui. Le diamant est dur et transparent, le graphite mou et sombre, bien que tous deux soient du carbone.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "diamond-vs-graphite",
    a: "Diamond",
    b: "Graphite",
    category: "chemistry",
    emoji_a: "💎",
    emoji_b: "✏️",
    content: {
      en: {
        title: "Diamond vs Graphite: Carbon Allotropes",
        h1: "Diamond vs Graphite Explained",
        description:
          "Diamond and graphite are both pure carbon, but their structure makes one hard and one soft. Compare these allotropes.",
        intro:
          "Diamond and graphite are allotropes of carbon, made of the same atoms but arranged completely differently.",
        pros_a: [
          "Each carbon bonded to four others",
          "Rigid 3D tetrahedral network",
          "Hardest known natural material",
          "Electrical insulator",
          "Transparent and high refractive index",
        ],
        pros_b: [
          "Each carbon bonded to three others",
          "Stacked layers of hexagonal sheets",
          "Soft and slippery, layers slide apart",
          "Conducts electricity",
          "Opaque, dark grey and used in pencils",
        ],
        verdict:
          "Diamond and graphite are the same element with opposite properties. Diamond's 3D bonding makes it hard and insulating; graphite's layered bonding makes it soft and conductive.",
        faq: [
          {
            q: "How can both be pure carbon?",
            a: "They are allotropes: identical carbon atoms bonded in different geometric arrangements.",
          },
          {
            q: "Why does graphite conduct electricity?",
            a: "Each carbon has a spare delocalized electron free to move within the layers.",
          },
          {
            q: "Why is graphite slippery?",
            a: "Weak forces between its layers let them slide over each other easily.",
          },
        ],
      },
      fr: {
        title: "Diamant vs Graphite : allotropes du carbone",
        h1: "Diamant vs Graphite expliqués",
        description:
          "Le diamant et le graphite sont du carbone pur, mais leur structure rend l'un dur et l'autre mou. Comparez ces allotropes.",
        intro:
          "Le diamant et le graphite sont des allotropes du carbone, faits des mêmes atomes mais arrangés très différemment.",
        pros_a: [
          "Chaque carbone lié à quatre autres",
          "Réseau 3D tétraédrique rigide",
          "Matériau naturel le plus dur connu",
          "Isolant électrique",
          "Transparent et indice de réfraction élevé",
        ],
        pros_b: [
          "Chaque carbone lié à trois autres",
          "Couches empilées de feuillets hexagonaux",
          "Mou et glissant, les couches glissent",
          "Conduit l'électricité",
          "Opaque, gris foncé, utilisé dans les crayons",
        ],
        verdict:
          "Le diamant et le graphite sont le même élément aux propriétés opposées. La liaison 3D du diamant le rend dur et isolant ; la liaison en couches du graphite le rend mou et conducteur.",
        faq: [
          {
            q: "Comment les deux peuvent-ils être du carbone pur ?",
            a: "Ce sont des allotropes : des atomes de carbone identiques liés selon des géométries différentes.",
          },
          {
            q: "Pourquoi le graphite conduit-il l'électricité ?",
            a: "Chaque carbone a un électron délocalisé en plus, libre de se déplacer dans les couches.",
          },
          {
            q: "Pourquoi le graphite est-il glissant ?",
            a: "Les forces faibles entre ses couches leur permettent de glisser facilement l'une sur l'autre.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "methane-vs-ethane",
    a: "Methane",
    b: "Ethane",
    category: "chemistry",
    emoji_a: "🔥",
    emoji_b: "🛢️",
    content: {
      en: {
        title: "Methane vs Ethane: Smallest Alkanes",
        h1: "Methane vs Ethane Explained",
        description:
          "Methane has one carbon; ethane has two. Compare the two smallest alkanes in formula, boiling point and uses.",
        intro:
          "Methane and ethane are the first two members of the alkane series, differing by a single carbon atom.",
        pros_a: [
          "Formula CH4, one carbon atom",
          "Simplest alkane and hydrocarbon",
          "Main component of natural gas",
          "Lowest boiling point of alkanes",
          "Potent greenhouse gas",
        ],
        pros_b: [
          "Formula C2H6, two carbon atoms",
          "Second member of the alkane series",
          "Found in natural gas as a minor component",
          "Slightly higher boiling point than methane",
          "Used to make ethylene by cracking",
        ],
        verdict:
          "Methane and ethane differ by one carbon, the smallest possible step in a homologous series. Adding that carbon raises the boiling point and the molecule's mass.",
        faq: [
          {
            q: "Why does ethane boil at a higher temperature?",
            a: "Its larger molecule has stronger dispersion forces, needing more energy to vaporize.",
          },
          {
            q: "Are they in the same series?",
            a: "Yes. Both are alkanes, consecutive members of the same homologous series.",
          },
          {
            q: "Where do they come from?",
            a: "Both occur in natural gas, with methane as the dominant component.",
          },
        ],
      },
      fr: {
        title: "Méthane vs Éthane : les plus petits alcanes",
        h1: "Méthane vs Éthane expliqués",
        description:
          "Le méthane a un carbone ; l'éthane deux. Comparez les deux plus petits alcanes en formule, point d'ébullition et usages.",
        intro:
          "Le méthane et l'éthane sont les deux premiers membres de la série des alcanes, différant d'un seul atome de carbone.",
        pros_a: [
          "Formule CH4, un atome de carbone",
          "Alcane et hydrocarbure le plus simple",
          "Composant principal du gaz naturel",
          "Point d'ébullition le plus bas des alcanes",
          "Puissant gaz à effet de serre",
        ],
        pros_b: [
          "Formule C2H6, deux atomes de carbone",
          "Deuxième membre de la série des alcanes",
          "Présent dans le gaz naturel comme composant mineur",
          "Point d'ébullition un peu plus haut que le méthane",
          "Utilisé pour produire l'éthylène par craquage",
        ],
        verdict:
          "Le méthane et l'éthane diffèrent d'un carbone, le plus petit pas possible dans une série homologue. Ajouter ce carbone augmente le point d'ébullition et la masse.",
        faq: [
          {
            q: "Pourquoi l'éthane bout-il à plus haute température ?",
            a: "Sa molécule plus grande a des forces de dispersion plus fortes, nécessitant plus d'énergie pour s'évaporer.",
          },
          {
            q: "Sont-ils dans la même série ?",
            a: "Oui. Tous deux sont des alcanes, membres consécutifs de la même série homologue.",
          },
          {
            q: "D'où viennent-ils ?",
            a: "Tous deux sont présents dans le gaz naturel, le méthane en étant le composant dominant.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "benzene-vs-toluene",
    a: "Benzene",
    b: "Toluene",
    category: "chemistry",
    emoji_a: "🔵",
    emoji_b: "🎨",
    content: {
      en: {
        title: "Benzene vs Toluene: Aromatic Compounds",
        h1: "Benzene vs Toluene Explained",
        description:
          "Benzene is the parent aromatic ring; toluene is benzene with a methyl group. Compare these two aromatic solvents.",
        intro:
          "Benzene and toluene are both aromatic hydrocarbons. Toluene is simply benzene with one methyl group attached.",
        pros_a: [
          "Formula C6H6, the simplest aromatic ring",
          "Pure six-carbon delocalized ring",
          "Known human carcinogen",
          "High symmetry, planar molecule",
          "Used as an industrial precursor",
        ],
        pros_b: [
          "Formula C7H8, benzene plus a methyl group",
          "Methyl group makes the ring more reactive",
          "Less toxic than benzene",
          "Common, widely used solvent",
          "Used to make TNT and other chemicals",
        ],
        verdict:
          "Toluene is benzene with a methyl substituent, which makes it less toxic and a more practical solvent. Benzene remains the foundational aromatic ring but is a carcinogen.",
        faq: [
          {
            q: "How does toluene differ from benzene?",
            a: "Toluene is benzene with one hydrogen replaced by a methyl group, giving formula C7H8.",
          },
          {
            q: "Which is safer to use?",
            a: "Toluene is considerably less toxic than benzene, which is a known carcinogen.",
          },
          {
            q: "Why is the methyl group important?",
            a: "It activates the ring, making toluene more reactive toward electrophilic substitution.",
          },
        ],
      },
      fr: {
        title: "Benzène vs Toluène : composés aromatiques",
        h1: "Benzène vs Toluène expliqués",
        description:
          "Le benzène est le cycle aromatique parent ; le toluène un benzène avec un groupe méthyle. Comparez ces deux solvants aromatiques.",
        intro:
          "Le benzène et le toluène sont des hydrocarbures aromatiques. Le toluène est simplement un benzène avec un groupe méthyle attaché.",
        pros_a: [
          "Formule C6H6, le cycle aromatique le plus simple",
          "Cycle pur délocalisé à six carbones",
          "Cancérogène connu pour l'humain",
          "Molécule plane à haute symétrie",
          "Utilisé comme précurseur industriel",
        ],
        pros_b: [
          "Formule C7H8, benzène plus un groupe méthyle",
          "Le méthyle rend le cycle plus réactif",
          "Moins toxique que le benzène",
          "Solvant courant et très utilisé",
          "Sert à produire le TNT et d'autres produits",
        ],
        verdict:
          "Le toluène est un benzène avec un substituant méthyle, ce qui le rend moins toxique et solvant plus pratique. Le benzène reste le cycle aromatique fondamental mais est cancérogène.",
        faq: [
          {
            q: "En quoi le toluène diffère-t-il du benzène ?",
            a: "Le toluène est un benzène dont un hydrogène est remplacé par un groupe méthyle, formule C7H8.",
          },
          {
            q: "Lequel est plus sûr à utiliser ?",
            a: "Le toluène est nettement moins toxique que le benzène, un cancérogène connu.",
          },
          {
            q: "Pourquoi le groupe méthyle est-il important ?",
            a: "Il active le cycle, rendant le toluène plus réactif en substitution électrophile.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "solute-vs-solvent",
    a: "Solute",
    b: "Solvent",
    category: "chemistry",
    emoji_a: "🧂",
    emoji_b: "💧",
    content: {
      en: {
        title: "Solute vs Solvent: Parts of a Solution",
        h1: "Solute vs Solvent Explained",
        description:
          "The solute is what dissolves; the solvent is what does the dissolving. Compare the two parts of every solution.",
        intro:
          "Every solution has two parts: a solute and a solvent. Knowing which is which is the start of solution chemistry.",
        pros_a: [
          "The substance being dissolved",
          "Usually present in the smaller amount",
          "Can be a solid, liquid or gas",
          "Disperses evenly into the solvent",
          "Example: salt in salt water",
        ],
        pros_b: [
          "The substance doing the dissolving",
          "Usually present in the larger amount",
          "Most often a liquid such as water",
          "Determines the state of the solution",
          "Example: water in salt water",
        ],
        verdict:
          "The solute dissolves and the solvent does the dissolving. Together they form a homogeneous solution, with the solvent usually being the larger component.",
        faq: [
          {
            q: "Which one is usually larger?",
            a: "The solvent is normally the component present in the greater amount.",
          },
          {
            q: "Can the solute be a gas?",
            a: "Yes. In carbonated drinks, carbon dioxide gas is a solute dissolved in liquid water.",
          },
          {
            q: "What is the universal solvent?",
            a: "Water is called the universal solvent because it dissolves so many substances.",
          },
        ],
      },
      fr: {
        title: "Soluté vs Solvant : parties d'une solution",
        h1: "Soluté vs Solvant expliqués",
        description:
          "Le soluté est ce qui se dissout ; le solvant ce qui dissout. Comparez les deux parties de toute solution.",
        intro:
          "Toute solution a deux parties : un soluté et un solvant. Savoir lequel est lequel est le début de la chimie des solutions.",
        pros_a: [
          "La substance qui est dissoute",
          "Généralement présente en plus petite quantité",
          "Peut être un solide, un liquide ou un gaz",
          "Se disperse uniformément dans le solvant",
          "Exemple : le sel dans l'eau salée",
        ],
        pros_b: [
          "La substance qui dissout",
          "Généralement présente en plus grande quantité",
          "Le plus souvent un liquide comme l'eau",
          "Détermine l'état de la solution",
          "Exemple : l'eau dans l'eau salée",
        ],
        verdict:
          "Le soluté se dissout et le solvant dissout. Ensemble ils forment une solution homogène, le solvant étant généralement le composant majoritaire.",
        faq: [
          {
            q: "Lequel est généralement le plus abondant ?",
            a: "Le solvant est normalement le composant présent en plus grande quantité.",
          },
          {
            q: "Le soluté peut-il être un gaz ?",
            a: "Oui. Dans les boissons gazeuses, le dioxyde de carbone est un soluté dissous dans l'eau liquide.",
          },
          {
            q: "Quel est le solvant universel ?",
            a: "L'eau est appelée solvant universel car elle dissout tant de substances.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "element-vs-compound",
    a: "Element",
    b: "Compound",
    category: "chemistry",
    emoji_a: "🔶",
    emoji_b: "🔷",
    content: {
      en: {
        title: "Element vs Compound: Pure Substances",
        h1: "Element vs Compound Explained",
        description:
          "An element is one type of atom; a compound is two or more elements chemically bonded. Compare these pure substances.",
        intro:
          "Elements and compounds are both pure substances, but only one can be broken down into something simpler.",
        pros_a: [
          "Made of only one type of atom",
          "Cannot be broken down chemically",
          "Listed on the periodic table",
          "Examples: oxygen, gold, carbon",
          "About 118 known elements",
        ],
        pros_b: [
          "Two or more elements chemically bonded",
          "Can be broken down into elements",
          "Has properties different from its elements",
          "Fixed ratio of atoms by formula",
          "Examples: water, carbon dioxide, salt",
        ],
        verdict:
          "An element is the simplest pure substance and cannot be split chemically; a compound is elements bonded in a fixed ratio that can be broken down again.",
        faq: [
          {
            q: "Can a compound be split into elements?",
            a: "Yes. A compound can be chemically decomposed into the elements that make it.",
          },
          {
            q: "Do compounds keep their elements' properties?",
            a: "No. A compound usually has properties quite different from the elements it contains.",
          },
          {
            q: "How many elements exist?",
            a: "About 118 elements are currently recognized on the periodic table.",
          },
        ],
      },
      fr: {
        title: "Élément vs Composé : substances pures",
        h1: "Élément vs Composé expliqués",
        description:
          "Un élément est un seul type d'atome ; un composé deux éléments ou plus liés chimiquement. Comparez ces substances pures.",
        intro:
          "Les éléments et les composés sont des substances pures, mais seul l'un peut être décomposé en plus simple.",
        pros_a: [
          "Constitué d'un seul type d'atome",
          "Ne peut pas être décomposé chimiquement",
          "Listé dans le tableau périodique",
          "Exemples : oxygène, or, carbone",
          "Environ 118 éléments connus",
        ],
        pros_b: [
          "Deux éléments ou plus liés chimiquement",
          "Peut être décomposé en éléments",
          "Propriétés différentes de ses éléments",
          "Rapport fixe d'atomes selon la formule",
          "Exemples : eau, dioxyde de carbone, sel",
        ],
        verdict:
          "Un élément est la substance pure la plus simple et ne peut pas être divisé chimiquement ; un composé est des éléments liés en rapport fixe, décomposable à nouveau.",
        faq: [
          {
            q: "Un composé peut-il être divisé en éléments ?",
            a: "Oui. Un composé peut être décomposé chimiquement en les éléments qui le constituent.",
          },
          {
            q: "Les composés gardent-ils les propriétés de leurs éléments ?",
            a: "Non. Un composé a généralement des propriétés bien différentes des éléments qu'il contient.",
          },
          {
            q: "Combien d'éléments existent ?",
            a: "Environ 118 éléments sont actuellement reconnus dans le tableau périodique.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "mixture-vs-compound",
    a: "Mixture",
    b: "Compound",
    category: "chemistry",
    emoji_a: "🥣",
    emoji_b: "🔷",
    content: {
      en: {
        title: "Mixture vs Compound: Key Differences",
        h1: "Mixture vs Compound Explained",
        description:
          "Mixtures combine substances physically; compounds bond them chemically. Compare composition and how each is separated.",
        intro:
          "Both contain more than one substance, but a mixture is a physical blend while a compound is a chemical union.",
        pros_a: [
          "Substances combined physically, not bonded",
          "Variable proportions",
          "Components keep their own properties",
          "Separated by physical methods",
          "Examples: air, salad, salt water",
        ],
        pros_b: [
          "Elements chemically bonded together",
          "Fixed proportions by formula",
          "New properties unlike the components",
          "Separated only by chemical reaction",
          "Examples: water, salt, carbon dioxide",
        ],
        verdict:
          "A mixture is a physical combination with variable ratios that can be separated easily; a compound is a chemical bond with a fixed ratio needing a reaction to break.",
        faq: [
          {
            q: "How do I separate a mixture?",
            a: "By physical methods such as filtering, distilling or evaporating, no chemical reaction needed.",
          },
          {
            q: "Does a compound have fixed proportions?",
            a: "Yes. A compound always has elements in a fixed ratio set by its chemical formula.",
          },
          {
            q: "Is air a mixture or a compound?",
            a: "Air is a mixture of gases that keep their own properties and can vary in proportion.",
          },
        ],
      },
      fr: {
        title: "Mélange vs Composé : différences clés",
        h1: "Mélange vs Composé expliqués",
        description:
          "Les mélanges combinent des substances physiquement ; les composés les lient chimiquement. Comparez composition et séparation.",
        intro:
          "Les deux contiennent plus d'une substance, mais un mélange est un assemblage physique et un composé une union chimique.",
        pros_a: [
          "Substances combinées physiquement, non liées",
          "Proportions variables",
          "Les composants gardent leurs propriétés",
          "Séparé par des méthodes physiques",
          "Exemples : air, salade, eau salée",
        ],
        pros_b: [
          "Éléments liés chimiquement ensemble",
          "Proportions fixes selon la formule",
          "Nouvelles propriétés différentes des composants",
          "Séparé seulement par réaction chimique",
          "Exemples : eau, sel, dioxyde de carbone",
        ],
        verdict:
          "Un mélange est une combinaison physique à proportions variables, facilement séparable ; un composé est une liaison chimique à rapport fixe nécessitant une réaction.",
        faq: [
          {
            q: "Comment séparer un mélange ?",
            a: "Par des méthodes physiques comme la filtration, la distillation ou l'évaporation, sans réaction chimique.",
          },
          {
            q: "Un composé a-t-il des proportions fixes ?",
            a: "Oui. Un composé a toujours des éléments dans un rapport fixe défini par sa formule chimique.",
          },
          {
            q: "L'air est-il un mélange ou un composé ?",
            a: "L'air est un mélange de gaz qui gardent leurs propres propriétés et dont la proportion peut varier.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "atom-vs-ion",
    a: "Atom",
    b: "Ion",
    category: "chemistry",
    emoji_a: "⚛️",
    emoji_b: "⚡",
    content: {
      en: {
        title: "Atom vs Ion: Charge and Structure",
        h1: "Atom vs Ion Explained",
        description:
          "An atom is electrically neutral; an ion carries a charge from gaining or losing electrons. Compare these two particles.",
        intro:
          "An atom becomes an ion when it gains or loses electrons. The change in electron count is the entire difference.",
        pros_a: [
          "Electrically neutral overall",
          "Equal numbers of protons and electrons",
          "The basic unit of an element",
          "Stable in its ground state",
          "Example: a neutral sodium atom",
        ],
        pros_b: [
          "Carries a net electric charge",
          "Unequal protons and electrons",
          "Formed by gaining or losing electrons",
          "Cation is positive, anion is negative",
          "Example: the sodium ion Na+",
        ],
        verdict:
          "An atom is neutral with balanced charges; an ion is charged because it has lost or gained electrons. The proton count never changes, only the electrons.",
        faq: [
          {
            q: "How does an atom become an ion?",
            a: "By gaining electrons to become negative or losing them to become positive.",
          },
          {
            q: "Does the proton number change?",
            a: "No. Only electrons are gained or lost; the proton count stays the same.",
          },
          {
            q: "What is a cation versus an anion?",
            a: "A cation is a positively charged ion; an anion is a negatively charged ion.",
          },
        ],
      },
      fr: {
        title: "Atome vs Ion : charge et structure",
        h1: "Atome vs Ion expliqués",
        description:
          "Un atome est électriquement neutre ; un ion porte une charge par gain ou perte d'électrons. Comparez ces deux particules.",
        intro:
          "Un atome devient un ion en gagnant ou perdant des électrons. Le changement du nombre d'électrons fait toute la différence.",
        pros_a: [
          "Électriquement neutre dans l'ensemble",
          "Nombre égal de protons et d'électrons",
          "L'unité de base d'un élément",
          "Stable dans son état fondamental",
          "Exemple : un atome de sodium neutre",
        ],
        pros_b: [
          "Porte une charge électrique nette",
          "Protons et électrons en nombre inégal",
          "Formé en gagnant ou perdant des électrons",
          "Le cation est positif, l'anion négatif",
          "Exemple : l'ion sodium Na+",
        ],
        verdict:
          "Un atome est neutre avec des charges équilibrées ; un ion est chargé car il a perdu ou gagné des électrons. Le nombre de protons ne change jamais, seuls les électrons.",
        faq: [
          {
            q: "Comment un atome devient-il un ion ?",
            a: "En gagnant des électrons pour devenir négatif ou en en perdant pour devenir positif.",
          },
          {
            q: "Le nombre de protons change-t-il ?",
            a: "Non. Seuls les électrons sont gagnés ou perdus ; le nombre de protons reste identique.",
          },
          {
            q: "Quelle différence entre cation et anion ?",
            a: "Un cation est un ion chargé positivement ; un anion un ion chargé négativement.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "cation-vs-anion",
    a: "Cation",
    b: "Anion",
    category: "chemistry",
    emoji_a: "➕",
    emoji_b: "➖",
    content: {
      en: {
        title: "Cation vs Anion: Positive vs Negative Ions",
        h1: "Cation vs Anion Explained",
        description:
          "A cation is a positive ion that lost electrons; an anion is a negative ion that gained them. Compare these charged particles.",
        intro:
          "Ions come in two charges. Whether an atom loses or gains electrons decides if it becomes a cation or an anion.",
        pros_a: [
          "Positively charged ion",
          "Formed by losing electrons",
          "More protons than electrons",
          "Usually formed by metals",
          "Examples: Na+, Ca2+, Al3+",
        ],
        pros_b: [
          "Negatively charged ion",
          "Formed by gaining electrons",
          "More electrons than protons",
          "Usually formed by nonmetals",
          "Examples: Cl-, O2-, S2-",
        ],
        verdict:
          "Cations are positive ions from losing electrons, typically metals; anions are negative ions from gaining electrons, typically nonmetals. Opposite charges attract to form ionic compounds.",
        faq: [
          {
            q: "How do I remember the difference?",
            a: "A cation is positive, and anions are negative; metals form cations, nonmetals form anions.",
          },
          {
            q: "Which way do ions move in a field?",
            a: "Cations move toward the cathode; anions move toward the anode.",
          },
          {
            q: "What holds an ionic compound together?",
            a: "The electrostatic attraction between oppositely charged cations and anions.",
          },
        ],
      },
      fr: {
        title: "Cation vs Anion : ions positifs vs négatifs",
        h1: "Cation vs Anion expliqués",
        description:
          "Un cation est un ion positif ayant perdu des électrons ; un anion un ion négatif en ayant gagné. Comparez ces particules chargées.",
        intro:
          "Les ions ont deux charges. Qu'un atome perde ou gagne des électrons décide s'il devient un cation ou un anion.",
        pros_a: [
          "Ion chargé positivement",
          "Formé en perdant des électrons",
          "Plus de protons que d'électrons",
          "Généralement formé par les métaux",
          "Exemples : Na+, Ca2+, Al3+",
        ],
        pros_b: [
          "Ion chargé négativement",
          "Formé en gagnant des électrons",
          "Plus d'électrons que de protons",
          "Généralement formé par les non-métaux",
          "Exemples : Cl-, O2-, S2-",
        ],
        verdict:
          "Les cations sont des ions positifs par perte d'électrons, typiquement des métaux ; les anions des ions négatifs par gain, typiquement des non-métaux. Les charges opposées s'attirent.",
        faq: [
          {
            q: "Comment retenir la différence ?",
            a: "Un cation est positif et les anions sont négatifs ; les métaux forment des cations, les non-métaux des anions.",
          },
          {
            q: "Dans quel sens les ions se déplacent-ils dans un champ ?",
            a: "Les cations vont vers la cathode ; les anions vers l'anode.",
          },
          {
            q: "Qu'est-ce qui maintient un composé ionique ?",
            a: "L'attraction électrostatique entre cations et anions de charges opposées.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "reversible-vs-irreversible-reaction",
    a: "Reversible reaction",
    b: "Irreversible reaction",
    category: "chemistry",
    emoji_a: "🔄",
    emoji_b: "➡️",
    content: {
      en: {
        title: "Reversible vs Irreversible Reaction",
        h1: "Reversible vs Irreversible Reactions Explained",
        description:
          "Reversible reactions can run both ways to equilibrium; irreversible ones go to completion. Compare these reaction types.",
        intro:
          "Reactions differ in direction. Some can run backward and reach equilibrium, while others proceed only one way.",
        pros_a: [
          "Can proceed in both directions",
          "Reaches a dynamic equilibrium",
          "Products can re-form reactants",
          "Shown with a double arrow",
          "Examples: Haber process, esterification",
        ],
        pros_b: [
          "Proceeds in one direction only",
          "Goes essentially to completion",
          "Products do not re-form reactants",
          "Shown with a single arrow",
          "Examples: combustion, neutralization",
        ],
        verdict:
          "Reversible reactions settle at an equilibrium where both directions occur; irreversible reactions run to completion. The arrow notation, double or single, signals which is which.",
        faq: [
          {
            q: "What is equilibrium?",
            a: "A state in a reversible reaction where forward and reverse rates are equal and concentrations stay constant.",
          },
          {
            q: "How is each shown in an equation?",
            a: "A reversible reaction uses a double arrow; an irreversible one uses a single arrow.",
          },
          {
            q: "Is combustion reversible?",
            a: "No. Combustion goes to completion and is treated as an irreversible reaction.",
          },
        ],
      },
      fr: {
        title: "Réaction réversible vs irréversible",
        h1: "Réactions réversibles vs irréversibles",
        description:
          "Les réactions réversibles vont dans les deux sens vers l'équilibre ; les irréversibles jusqu'au bout. Comparez ces types.",
        intro:
          "Les réactions diffèrent par leur sens. Certaines peuvent revenir en arrière et atteindre un équilibre, d'autres ne vont que dans un sens.",
        pros_a: [
          "Peut se dérouler dans les deux sens",
          "Atteint un équilibre dynamique",
          "Les produits peuvent reformer les réactifs",
          "Représentée par une double flèche",
          "Exemples : procédé Haber, estérification",
        ],
        pros_b: [
          "Ne se déroule que dans un seul sens",
          "Va essentiellement jusqu'au bout",
          "Les produits ne reforment pas les réactifs",
          "Représentée par une simple flèche",
          "Exemples : combustion, neutralisation",
        ],
        verdict:
          "Les réactions réversibles se stabilisent à un équilibre où les deux sens ont lieu ; les irréversibles vont jusqu'au bout. La notation de flèche signale laquelle est laquelle.",
        faq: [
          {
            q: "Qu'est-ce que l'équilibre ?",
            a: "Un état d'une réaction réversible où les vitesses directe et inverse sont égales et les concentrations constantes.",
          },
          {
            q: "Comment chacune est-elle notée dans une équation ?",
            a: "Une réaction réversible utilise une double flèche ; une irréversible une simple flèche.",
          },
          {
            q: "La combustion est-elle réversible ?",
            a: "Non. La combustion va jusqu'au bout et est traitée comme une réaction irréversible.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "crystalline-vs-amorphous-solid",
    a: "Crystalline solid",
    b: "Amorphous solid",
    category: "chemistry",
    emoji_a: "🧊",
    emoji_b: "🪟",
    content: {
      en: {
        title: "Crystalline vs Amorphous Solid Compared",
        h1: "Crystalline vs Amorphous Solid Explained",
        description:
          "Crystalline solids have ordered repeating structures; amorphous solids lack long-range order. Compare these solid types.",
        intro:
          "Solids divide into crystalline and amorphous depending on whether their particles are arranged in a regular pattern.",
        pros_a: [
          "Particles in an ordered repeating lattice",
          "Sharp, definite melting point",
          "Often has flat faces and clean cleavage",
          "Anisotropic properties",
          "Examples: salt, diamond, quartz",
        ],
        pros_b: [
          "Particles arranged randomly",
          "Softens over a temperature range",
          "Breaks with irregular surfaces",
          "Isotropic properties",
          "Examples: glass, rubber, plastic",
        ],
        verdict:
          "Crystalline solids have orderly lattices and sharp melting points; amorphous solids are disordered and soften gradually. The internal arrangement decides their behavior.",
        faq: [
          {
            q: "Why does glass not have a sharp melting point?",
            a: "Glass is amorphous, so its disordered structure softens gradually over a temperature range.",
          },
          {
            q: "What does anisotropic mean?",
            a: "Properties vary with direction, a feature of ordered crystalline solids.",
          },
          {
            q: "Is rubber crystalline or amorphous?",
            a: "Rubber is an amorphous solid with a disordered, random arrangement of particles.",
          },
        ],
      },
      fr: {
        title: "Solide cristallin vs amorphe comparés",
        h1: "Solide cristallin vs amorphe expliqués",
        description:
          "Les solides cristallins ont une structure ordonnée répétée ; les amorphes manquent d'ordre à longue distance. Comparez.",
        intro:
          "Les solides se divisent en cristallins et amorphes selon que leurs particules sont arrangées en un motif régulier.",
        pros_a: [
          "Particules en réseau ordonné répété",
          "Point de fusion net et défini",
          "A souvent des faces planes et un clivage net",
          "Propriétés anisotropes",
          "Exemples : sel, diamant, quartz",
        ],
        pros_b: [
          "Particules arrangées de façon aléatoire",
          "Se ramollit sur une plage de température",
          "Se brise avec des surfaces irrégulières",
          "Propriétés isotropes",
          "Exemples : verre, caoutchouc, plastique",
        ],
        verdict:
          "Les solides cristallins ont des réseaux ordonnés et un point de fusion net ; les amorphes sont désordonnés et se ramollissent progressivement. L'arrangement interne décide.",
        faq: [
          {
            q: "Pourquoi le verre n'a-t-il pas de point de fusion net ?",
            a: "Le verre est amorphe, sa structure désordonnée se ramollit progressivement sur une plage.",
          },
          {
            q: "Que signifie anisotrope ?",
            a: "Les propriétés varient selon la direction, un trait des solides cristallins ordonnés.",
          },
          {
            q: "Le caoutchouc est-il cristallin ou amorphe ?",
            a: "Le caoutchouc est un solide amorphe à l'arrangement de particules désordonné et aléatoire.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "exothermic-vs-endothermic-process",
    a: "Exothermic process",
    b: "Endothermic process",
    category: "chemistry",
    emoji_a: "🔥",
    emoji_b: "❄️",
    content: {
      en: {
        title: "Exothermic vs Endothermic Process",
        h1: "Exothermic vs Endothermic Processes Explained",
        description:
          "Exothermic processes release energy; endothermic ones absorb it. Compare energy flow in physical and chemical changes.",
        intro:
          "Energy flows during every physical and chemical change. The direction of that flow defines exothermic and endothermic processes.",
        pros_a: [
          "Releases energy to the surroundings",
          "Surroundings get warmer",
          "Energy of products is lower",
          "Often feels hot to the touch",
          "Examples: freezing, condensation, burning",
        ],
        pros_b: [
          "Absorbs energy from the surroundings",
          "Surroundings get colder",
          "Energy of products is higher",
          "Often feels cold to the touch",
          "Examples: melting, boiling, evaporation",
        ],
        verdict:
          "Exothermic processes give out energy and warm their surroundings; endothermic processes take in energy and cool them. The energy flow direction is the deciding factor.",
        faq: [
          {
            q: "Is melting exothermic or endothermic?",
            a: "Melting is endothermic because it absorbs energy to break the solid structure.",
          },
          {
            q: "Why does freezing release heat?",
            a: "As particles lock into a solid, they release the energy they held in the liquid state.",
          },
          {
            q: "Does an exothermic process feel hot?",
            a: "Usually yes, because it releases energy as heat into the surroundings.",
          },
        ],
      },
      fr: {
        title: "Processus exothermique vs endothermique",
        h1: "Processus exothermiques vs endothermiques",
        description:
          "Les processus exothermiques libèrent de l'énergie ; les endothermiques en absorbent. Comparez le flux d'énergie.",
        intro:
          "L'énergie circule lors de tout changement physique ou chimique. Le sens de ce flux définit les processus exothermiques et endothermiques.",
        pros_a: [
          "Libère de l'énergie vers le milieu",
          "Le milieu se réchauffe",
          "L'énergie des produits est plus basse",
          "Souvent chaud au toucher",
          "Exemples : congélation, condensation, combustion",
        ],
        pros_b: [
          "Absorbe de l'énergie du milieu",
          "Le milieu se refroidit",
          "L'énergie des produits est plus haute",
          "Souvent froid au toucher",
          "Exemples : fusion, ébullition, évaporation",
        ],
        verdict:
          "Les processus exothermiques dégagent de l'énergie et réchauffent leur milieu ; les endothermiques en absorbent et le refroidissent. Le sens du flux décide.",
        faq: [
          {
            q: "La fusion est-elle exothermique ou endothermique ?",
            a: "La fusion est endothermique car elle absorbe de l'énergie pour briser la structure solide.",
          },
          {
            q: "Pourquoi la congélation libère-t-elle de la chaleur ?",
            a: "En se figeant en solide, les particules libèrent l'énergie qu'elles avaient à l'état liquide.",
          },
          {
            q: "Un processus exothermique est-il chaud au toucher ?",
            a: "Généralement oui, car il libère de l'énergie sous forme de chaleur vers le milieu.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "solid-vs-liquid",
    a: "Solid",
    b: "Liquid",
    category: "chemistry",
    emoji_a: "🧊",
    emoji_b: "💧",
    content: {
      en: {
        title: "Solid vs Liquid: States of Matter",
        h1: "Solid vs Liquid Explained",
        description:
          "Solids hold a fixed shape and volume; liquids keep volume but flow to fit a container. Compare these states of matter.",
        intro:
          "Solids and liquids are two of the main states of matter, differing in how their particles are arranged and how they move.",
        pros_a: [
          "Fixed shape and fixed volume",
          "Particles packed tightly, vibrate in place",
          "Strong intermolecular forces",
          "Cannot be compressed easily",
          "Examples: ice, iron, wood",
        ],
        pros_b: [
          "Fixed volume but takes container's shape",
          "Particles close but free to slide past",
          "Moderate intermolecular forces",
          "Flows and can be poured",
          "Examples: water, oil, mercury",
        ],
        verdict:
          "Solids keep both shape and volume because their particles are locked in place; liquids keep volume but flow because particles can slide past one another.",
        faq: [
          {
            q: "Why can liquids flow but solids cannot?",
            a: "Liquid particles can slide past each other, while solid particles only vibrate in fixed positions.",
          },
          {
            q: "Do liquids have a fixed volume?",
            a: "Yes. Liquids keep a fixed volume but take the shape of their container.",
          },
          {
            q: "Can solids be compressed?",
            a: "Barely. Their tightly packed particles leave almost no space to compress.",
          },
        ],
      },
      fr: {
        title: "Solide vs Liquide : états de la matière",
        h1: "Solide vs Liquide expliqués",
        description:
          "Les solides ont forme et volume fixes ; les liquides gardent le volume mais épousent le récipient. Comparez ces états.",
        intro:
          "Les solides et les liquides sont deux états principaux de la matière, différant par l'arrangement et le mouvement de leurs particules.",
        pros_a: [
          "Forme fixe et volume fixe",
          "Particules serrées, vibrant sur place",
          "Fortes forces intermoléculaires",
          "Difficilement compressible",
          "Exemples : glace, fer, bois",
        ],
        pros_b: [
          "Volume fixe mais épouse la forme du récipient",
          "Particules proches mais glissant librement",
          "Forces intermoléculaires modérées",
          "S'écoule et peut être versé",
          "Exemples : eau, huile, mercure",
        ],
        verdict:
          "Les solides gardent forme et volume car leurs particules sont figées ; les liquides gardent le volume mais s'écoulent car les particules glissent l'une sur l'autre.",
        faq: [
          {
            q: "Pourquoi les liquides s'écoulent-ils et pas les solides ?",
            a: "Les particules d'un liquide glissent l'une sur l'autre, celles d'un solide ne font que vibrer sur place.",
          },
          {
            q: "Les liquides ont-ils un volume fixe ?",
            a: "Oui. Les liquides gardent un volume fixe mais épousent la forme de leur récipient.",
          },
          {
            q: "Les solides peuvent-ils être compressés ?",
            a: "À peine. Leurs particules serrées ne laissent presque aucun espace à comprimer.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "physical-change-vs-chemical-change",
    a: "Physical change",
    b: "Chemical change",
    category: "chemistry",
    emoji_a: "🧊",
    emoji_b: "🧨",
    content: {
      en: {
        title: "Physical vs Chemical Change Compared",
        h1: "Physical Change vs Chemical Change Explained",
        description:
          "Physical changes alter form without new substances; chemical changes create new substances. Compare with clear examples.",
        intro:
          "Changes in matter are either physical or chemical. The test is whether a new substance with new properties is formed.",
        pros_a: [
          "No new substance is formed",
          "Only form, state or shape changes",
          "Usually easily reversible",
          "Same chemical composition before and after",
          "Examples: melting ice, cutting paper",
        ],
        pros_b: [
          "One or more new substances form",
          "Chemical bonds break and form",
          "Usually difficult to reverse",
          "Often signaled by gas, heat or color change",
          "Examples: burning wood, rusting iron",
        ],
        verdict:
          "A physical change rearranges matter without making anything new; a chemical change produces new substances with new properties. Look for signs like gas, heat or color.",
        faq: [
          {
            q: "How do I spot a chemical change?",
            a: "Watch for new substances, color change, gas bubbles, light or a notable energy change.",
          },
          {
            q: "Is dissolving sugar a chemical change?",
            a: "No. Dissolving sugar is a physical change because no new substance forms.",
          },
          {
            q: "Are physical changes reversible?",
            a: "Usually yes, since the substance keeps the same composition throughout.",
          },
        ],
      },
      fr: {
        title: "Changement physique vs chimique comparés",
        h1: "Changement physique vs chimique expliqués",
        description:
          "Les changements physiques modifient la forme sans nouvelle substance ; les chimiques créent de nouvelles substances. Comparez.",
        intro:
          "Les changements de la matière sont physiques ou chimiques. Le test est de savoir si une nouvelle substance aux propriétés nouvelles se forme.",
        pros_a: [
          "Aucune nouvelle substance formée",
          "Seules la forme, l'état ou la taille changent",
          "Généralement facilement réversible",
          "Même composition chimique avant et après",
          "Exemples : fonte de la glace, couper du papier",
        ],
        pros_b: [
          "Une ou plusieurs nouvelles substances se forment",
          "Des liaisons chimiques se rompent et se forment",
          "Généralement difficile à inverser",
          "Souvent signalé par gaz, chaleur ou changement de couleur",
          "Exemples : bois qui brûle, fer qui rouille",
        ],
        verdict:
          "Un changement physique réarrange la matière sans rien créer de nouveau ; un changement chimique produit de nouvelles substances aux propriétés nouvelles.",
        faq: [
          {
            q: "Comment repérer un changement chimique ?",
            a: "Guettez de nouvelles substances, un changement de couleur, des bulles de gaz, de la lumière ou de l'énergie.",
          },
          {
            q: "Dissoudre du sucre est-il un changement chimique ?",
            a: "Non. Dissoudre du sucre est un changement physique car aucune nouvelle substance ne se forme.",
          },
          {
            q: "Les changements physiques sont-ils réversibles ?",
            a: "Généralement oui, car la substance garde la même composition tout du long.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "homogeneous-vs-heterogeneous-mixture",
    a: "Homogeneous mixture",
    b: "Heterogeneous mixture",
    category: "chemistry",
    emoji_a: "🥤",
    emoji_b: "🥗",
    content: {
      en: {
        title: "Homogeneous vs Heterogeneous Mixture",
        h1: "Homogeneous vs Heterogeneous Mixture Explained",
        description:
          "Homogeneous mixtures look uniform throughout; heterogeneous mixtures have visible distinct parts. Compare these mixtures.",
        intro:
          "Mixtures split into homogeneous and heterogeneous types based on how evenly their components are spread.",
        pros_a: [
          "Uniform composition throughout",
          "Components not visibly distinct",
          "Single visible phase",
          "Also called a solution",
          "Examples: salt water, air, brass",
        ],
        pros_b: [
          "Non-uniform composition",
          "Components are visibly distinct",
          "Two or more visible phases",
          "Parts can often be physically picked out",
          "Examples: salad, sand and water, granite",
        ],
        verdict:
          "A homogeneous mixture looks the same everywhere, like a true solution; a heterogeneous mixture has visibly separate parts. Uniformity is the deciding test.",
        faq: [
          {
            q: "Is salt water homogeneous?",
            a: "Yes. Salt water is a homogeneous mixture with uniform composition throughout.",
          },
          {
            q: "What makes a mixture heterogeneous?",
            a: "Visibly distinct components or more than one phase that you can see or separate.",
          },
          {
            q: "Is air a mixture of which type?",
            a: "Air is a homogeneous mixture of gases that appears uniform.",
          },
        ],
      },
      fr: {
        title: "Mélange homogène vs hétérogène",
        h1: "Mélange homogène vs hétérogène expliqués",
        description:
          "Les mélanges homogènes paraissent uniformes partout ; les hétérogènes ont des parties distinctes visibles. Comparez ces mélanges.",
        intro:
          "Les mélanges se divisent en types homogène et hétérogène selon l'uniformité de la répartition de leurs composants.",
        pros_a: [
          "Composition uniforme partout",
          "Composants non distinguables visuellement",
          "Une seule phase visible",
          "Aussi appelé solution",
          "Exemples : eau salée, air, laiton",
        ],
        pros_b: [
          "Composition non uniforme",
          "Composants visiblement distincts",
          "Deux phases visibles ou plus",
          "Parties souvent séparables physiquement",
          "Exemples : salade, sable et eau, granite",
        ],
        verdict:
          "Un mélange homogène paraît identique partout, comme une vraie solution ; un mélange hétérogène a des parties visiblement séparées. L'uniformité est le test décisif.",
        faq: [
          {
            q: "L'eau salée est-elle homogène ?",
            a: "Oui. L'eau salée est un mélange homogène à composition uniforme partout.",
          },
          {
            q: "Qu'est-ce qui rend un mélange hétérogène ?",
            a: "Des composants visiblement distincts ou plus d'une phase visible ou séparable.",
          },
          {
            q: "L'air est un mélange de quel type ?",
            a: "L'air est un mélange homogène de gaz qui paraît uniforme.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "proton-vs-neutron",
    a: "Proton",
    b: "Neutron",
    category: "chemistry",
    emoji_a: "➕",
    emoji_b: "⚪",
    content: {
      en: {
        title: "Proton vs Neutron: Nucleus Particles",
        h1: "Proton vs Neutron Explained",
        description:
          "Protons carry positive charge and define the element; neutrons are neutral and add mass. Compare these nuclear particles.",
        intro:
          "Protons and neutrons both live in the nucleus, but only one carries charge and determines an atom's identity.",
        pros_a: [
          "Carries a positive electric charge",
          "Number defines the element (atomic number)",
          "Mass about 1 atomic mass unit",
          "Found in the nucleus",
          "Determines chemical identity",
        ],
        pros_b: [
          "Has no electric charge (neutral)",
          "Number can vary, creating isotopes",
          "Mass about 1 atomic mass unit",
          "Found in the nucleus",
          "Adds mass and nuclear stability",
        ],
        verdict:
          "Protons set an atom's identity and charge, while neutrons add mass and stabilize the nucleus. Changing protons changes the element; changing neutrons changes the isotope.",
        faq: [
          {
            q: "Which particle defines the element?",
            a: "The proton, since the number of protons equals the atomic number.",
          },
          {
            q: "What happens if neutron count changes?",
            a: "The atom becomes a different isotope of the same element.",
          },
          {
            q: "Do both have a charge?",
            a: "No. Protons are positive, but neutrons carry no charge.",
          },
        ],
      },
      fr: {
        title: "Proton vs Neutron : particules du noyau",
        h1: "Proton vs Neutron expliqués",
        description:
          "Les protons portent une charge positive et définissent l'élément ; les neutrons sont neutres et ajoutent de la masse. Comparez.",
        intro:
          "Les protons et les neutrons vivent tous deux dans le noyau, mais seul l'un porte une charge et détermine l'identité de l'atome.",
        pros_a: [
          "Porte une charge électrique positive",
          "Le nombre définit l'élément (numéro atomique)",
          "Masse d'environ 1 unité de masse atomique",
          "Présent dans le noyau",
          "Détermine l'identité chimique",
        ],
        pros_b: [
          "N'a aucune charge électrique (neutre)",
          "Le nombre peut varier, créant des isotopes",
          "Masse d'environ 1 unité de masse atomique",
          "Présent dans le noyau",
          "Ajoute de la masse et de la stabilité nucléaire",
        ],
        verdict:
          "Les protons fixent l'identité et la charge de l'atome, tandis que les neutrons ajoutent de la masse et stabilisent le noyau. Changer les protons change l'élément.",
        faq: [
          {
            q: "Quelle particule définit l'élément ?",
            a: "Le proton, car le nombre de protons égale le numéro atomique.",
          },
          {
            q: "Que se passe-t-il si le nombre de neutrons change ?",
            a: "L'atome devient un isotope différent du même élément.",
          },
          {
            q: "Ont-ils tous deux une charge ?",
            a: "Non. Les protons sont positifs, mais les neutrons ne portent aucune charge.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "proton-vs-electron",
    a: "Proton",
    b: "Electron",
    category: "chemistry",
    emoji_a: "➕",
    emoji_b: "➖",
    content: {
      en: {
        title: "Proton vs Electron: Charge and Mass",
        h1: "Proton vs Electron Explained",
        description:
          "Protons are heavy positive nucleus particles; electrons are light negative particles in orbitals. Compare these particles.",
        intro:
          "Protons and electrons carry opposite charges and live in different parts of the atom, shaping its structure and chemistry.",
        pros_a: [
          "Positive electric charge",
          "Located in the nucleus",
          "Relatively heavy, about 1 amu",
          "Number sets the element's identity",
          "Stable and tightly bound",
        ],
        pros_b: [
          "Negative electric charge",
          "Located in orbitals around the nucleus",
          "Very light, about 1/1836 of a proton",
          "Number governs chemical bonding",
          "Can be gained, lost or shared",
        ],
        verdict:
          "Protons are heavy and positive in the nucleus; electrons are light and negative in orbitals. Protons fix identity, while electrons drive chemical bonding.",
        faq: [
          {
            q: "Which is heavier?",
            a: "The proton, which is roughly 1836 times more massive than an electron.",
          },
          {
            q: "Which particle controls bonding?",
            a: "Electrons, since chemical bonds form by gaining, losing or sharing them.",
          },
          {
            q: "Where are electrons located?",
            a: "In orbitals, regions of probability surrounding the nucleus.",
          },
        ],
      },
      fr: {
        title: "Proton vs Électron : charge et masse",
        h1: "Proton vs Électron expliqués",
        description:
          "Les protons sont de lourdes particules positives du noyau ; les électrons de légères particules négatives en orbitales. Comparez.",
        intro:
          "Les protons et les électrons portent des charges opposées et vivent dans des parties différentes de l'atome.",
        pros_a: [
          "Charge électrique positive",
          "Situé dans le noyau",
          "Relativement lourd, environ 1 uma",
          "Le nombre fixe l'identité de l'élément",
          "Stable et fortement lié",
        ],
        pros_b: [
          "Charge électrique négative",
          "Situé dans des orbitales autour du noyau",
          "Très léger, environ 1/1836 d'un proton",
          "Le nombre gouverne les liaisons chimiques",
          "Peut être gagné, perdu ou partagé",
        ],
        verdict:
          "Les protons sont lourds et positifs dans le noyau ; les électrons légers et négatifs dans les orbitales. Les protons fixent l'identité, les électrons pilotent la liaison chimique.",
        faq: [
          {
            q: "Lequel est le plus lourd ?",
            a: "Le proton, environ 1836 fois plus massif qu'un électron.",
          },
          {
            q: "Quelle particule contrôle la liaison ?",
            a: "Les électrons, car les liaisons chimiques se forment en les gagnant, perdant ou partageant.",
          },
          {
            q: "Où se trouvent les électrons ?",
            a: "Dans des orbitales, des régions de probabilité entourant le noyau.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "kinetics-vs-thermodynamics",
    a: "Kinetics",
    b: "Thermodynamics",
    category: "chemistry",
    emoji_a: "⏱️",
    emoji_b: "🌡️",
    content: {
      en: {
        title: "Kinetics vs Thermodynamics in Reactions",
        h1: "Kinetics vs Thermodynamics Explained",
        description:
          "Kinetics studies how fast a reaction goes; thermodynamics studies whether it can happen. Compare these two viewpoints.",
        intro:
          "Kinetics and thermodynamics answer different questions about a reaction: how fast versus whether it is favorable.",
        pros_a: [
          "Studies reaction rate and speed",
          "Concerns activation energy and pathway",
          "Affected by catalysts and temperature",
          "Answers 'how fast' a reaction goes",
          "Rate can be slow even if favorable",
        ],
        pros_b: [
          "Studies energy and feasibility",
          "Concerns enthalpy, entropy and free energy",
          "Predicts the position of equilibrium",
          "Answers 'whether' a reaction can occur",
          "Says nothing about reaction speed",
        ],
        verdict:
          "Thermodynamics tells you if a reaction is possible; kinetics tells you how fast it will get there. A favorable reaction can still be too slow to observe.",
        faq: [
          {
            q: "Can a favorable reaction be slow?",
            a: "Yes. Thermodynamics may favor it, but kinetics can make it extremely slow without a catalyst.",
          },
          {
            q: "What does a catalyst affect?",
            a: "A catalyst changes kinetics by speeding the rate, not thermodynamics or the final equilibrium.",
          },
          {
            q: "Which predicts equilibrium position?",
            a: "Thermodynamics, through free energy, predicts where equilibrium lies.",
          },
        ],
      },
      fr: {
        title: "Cinétique vs Thermodynamique des réactions",
        h1: "Cinétique vs Thermodynamique expliquées",
        description:
          "La cinétique étudie la vitesse d'une réaction ; la thermodynamique si elle peut avoir lieu. Comparez ces deux points de vue.",
        intro:
          "La cinétique et la thermodynamique répondent à des questions différentes : à quelle vitesse contre est-ce favorable.",
        pros_a: [
          "Étudie la vitesse de réaction",
          "Concerne l'énergie d'activation et le chemin",
          "Affectée par les catalyseurs et la température",
          "Répond à « à quelle vitesse » va une réaction",
          "La vitesse peut être lente même si favorable",
        ],
        pros_b: [
          "Étudie l'énergie et la faisabilité",
          "Concerne enthalpie, entropie et énergie libre",
          "Prédit la position de l'équilibre",
          "Répond à « si » une réaction peut avoir lieu",
          "Ne dit rien de la vitesse de réaction",
        ],
        verdict:
          "La thermodynamique dit si une réaction est possible ; la cinétique à quelle vitesse elle y parvient. Une réaction favorable peut rester trop lente à observer.",
        faq: [
          {
            q: "Une réaction favorable peut-elle être lente ?",
            a: "Oui. La thermodynamique peut la favoriser, mais la cinétique peut la rendre très lente sans catalyseur.",
          },
          {
            q: "Sur quoi agit un catalyseur ?",
            a: "Un catalyseur change la cinétique en accélérant la vitesse, pas la thermodynamique ni l'équilibre final.",
          },
          {
            q: "Laquelle prédit la position de l'équilibre ?",
            a: "La thermodynamique, via l'énergie libre, prédit où se situe l'équilibre.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "empirical-formula-vs-molecular-formula",
    a: "Empirical formula",
    b: "Molecular formula",
    category: "chemistry",
    emoji_a: "➗",
    emoji_b: "🧮",
    content: {
      en: {
        title: "Empirical vs Molecular Formula Compared",
        h1: "Empirical Formula vs Molecular Formula",
        description:
          "An empirical formula shows the simplest atom ratio; a molecular formula shows the actual atom count. Compare both.",
        intro:
          "Chemical formulas come in two forms. One gives the simplest ratio, the other gives the true number of atoms.",
        pros_a: [
          "Shows the simplest whole-number ratio",
          "Reduced to lowest terms",
          "Found from percentage composition",
          "Same for related compounds",
          "Example: CH for benzene",
        ],
        pros_b: [
          "Shows the actual number of atoms",
          "A whole-number multiple of the empirical",
          "Found using the molar mass",
          "Unique to the specific compound",
          "Example: C6H6 for benzene",
        ],
        verdict:
          "The empirical formula gives the simplest ratio; the molecular formula gives the real count. Multiply the empirical formula by a whole number, found from molar mass, to get the molecular one.",
        faq: [
          {
            q: "How do I get the molecular formula?",
            a: "Find the empirical formula, then multiply it by molar mass divided by empirical mass.",
          },
          {
            q: "Can they be the same?",
            a: "Yes. For water, both the empirical and molecular formula are H2O.",
          },
          {
            q: "What does the empirical formula come from?",
            a: "It is calculated from the percentage composition by mass of each element.",
          },
        ],
      },
      fr: {
        title: "Formule empirique vs moléculaire comparées",
        h1: "Formule empirique vs Formule moléculaire",
        description:
          "Une formule empirique donne le rapport d'atomes le plus simple ; une formule moléculaire le nombre réel d'atomes. Comparez.",
        intro:
          "Les formules chimiques existent sous deux formes. L'une donne le rapport le plus simple, l'autre le vrai nombre d'atomes.",
        pros_a: [
          "Donne le rapport entier le plus simple",
          "Réduite à sa plus simple expression",
          "Trouvée à partir de la composition centésimale",
          "Identique pour des composés apparentés",
          "Exemple : CH pour le benzène",
        ],
        pros_b: [
          "Donne le nombre réel d'atomes",
          "Un multiple entier de la formule empirique",
          "Trouvée à l'aide de la masse molaire",
          "Propre au composé spécifique",
          "Exemple : C6H6 pour le benzène",
        ],
        verdict:
          "La formule empirique donne le rapport le plus simple ; la formule moléculaire le nombre réel. Multipliez l'empirique par un entier, trouvé via la masse molaire.",
        faq: [
          {
            q: "Comment obtenir la formule moléculaire ?",
            a: "Trouvez la formule empirique, puis multipliez-la par la masse molaire divisée par la masse empirique.",
          },
          {
            q: "Peuvent-elles être identiques ?",
            a: "Oui. Pour l'eau, la formule empirique et la formule moléculaire sont toutes deux H2O.",
          },
          {
            q: "D'où vient la formule empirique ?",
            a: "Elle se calcule à partir de la composition centésimale massique de chaque élément.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "exothermic-reaction-vs-combustion",
    a: "Exothermic reaction",
    b: "Combustion",
    category: "chemistry",
    emoji_a: "🔥",
    emoji_b: "🔥",
    content: {
      en: {
        title: "Exothermic Reaction vs Combustion Compared",
        h1: "Exothermic Reaction vs Combustion Explained",
        description:
          "All combustion is exothermic, but exothermic reactions are a broader class. Compare the general category with burning.",
        intro:
          "Combustion is a specific type of exothermic reaction. Understanding the relationship clarifies energy-releasing chemistry.",
        pros_a: [
          "Any reaction that releases energy",
          "Broad category of reactions",
          "Includes neutralization and respiration",
          "Negative enthalpy change",
          "Does not require oxygen",
        ],
        pros_b: [
          "A specific exothermic reaction",
          "Reaction of a fuel with oxygen",
          "Produces heat and usually light",
          "Often forms carbon dioxide and water",
          "Examples: burning wood, gas or fuel",
        ],
        verdict:
          "Combustion is one kind of exothermic reaction, requiring a fuel and oxygen. All combustion releases energy, but many exothermic reactions need no oxygen at all.",
        faq: [
          {
            q: "Is all combustion exothermic?",
            a: "Yes. Combustion always releases energy, making it a type of exothermic reaction.",
          },
          {
            q: "Are all exothermic reactions combustion?",
            a: "No. Neutralization and respiration release energy without being combustion.",
          },
          {
            q: "What does combustion need?",
            a: "Combustion requires a fuel and oxygen, plus enough heat to start.",
          },
        ],
      },
      fr: {
        title: "Réaction exothermique vs Combustion",
        h1: "Réaction exothermique vs Combustion expliquées",
        description:
          "Toute combustion est exothermique, mais les réactions exothermiques forment une classe plus large. Comparez catégorie et combustion.",
        intro:
          "La combustion est un type précis de réaction exothermique. Comprendre le lien clarifie la chimie qui libère de l'énergie.",
        pros_a: [
          "Toute réaction qui libère de l'énergie",
          "Large catégorie de réactions",
          "Inclut la neutralisation et la respiration",
          "Variation d'enthalpie négative",
          "Ne nécessite pas d'oxygène",
        ],
        pros_b: [
          "Une réaction exothermique précise",
          "Réaction d'un combustible avec l'oxygène",
          "Produit de la chaleur et souvent de la lumière",
          "Forme souvent dioxyde de carbone et eau",
          "Exemples : brûler du bois, du gaz ou du carburant",
        ],
        verdict:
          "La combustion est un type de réaction exothermique, nécessitant un combustible et de l'oxygène. Toute combustion libère de l'énergie, mais beaucoup d'exothermiques n'ont pas besoin d'oxygène.",
        faq: [
          {
            q: "Toute combustion est-elle exothermique ?",
            a: "Oui. La combustion libère toujours de l'énergie, ce qui en fait un type de réaction exothermique.",
          },
          {
            q: "Toute réaction exothermique est-elle une combustion ?",
            a: "Non. La neutralisation et la respiration libèrent de l'énergie sans être des combustions.",
          },
          {
            q: "De quoi la combustion a-t-elle besoin ?",
            a: "La combustion nécessite un combustible et de l'oxygène, plus assez de chaleur pour démarrer.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "concentrated-vs-dilute",
    a: "Concentrated",
    b: "Dilute",
    category: "chemistry",
    emoji_a: "🧴",
    emoji_b: "💦",
    content: {
      en: {
        title: "Concentrated vs Dilute Solution Compared",
        h1: "Concentrated vs Dilute Solution Explained",
        description:
          "A concentrated solution has lots of solute per volume; a dilute one has little. Compare these descriptions of concentration.",
        intro:
          "Concentrated and dilute describe how much solute is present in a solution, a relative comparison rather than a fixed value.",
        pros_a: [
          "Large amount of solute per unit volume",
          "High concentration value",
          "Less solvent relative to solute",
          "Often appears darker or more viscous",
          "Made dilute by adding more solvent",
        ],
        pros_b: [
          "Small amount of solute per unit volume",
          "Low concentration value",
          "More solvent relative to solute",
          "Often appears lighter or thinner",
          "Made concentrated by evaporating solvent",
        ],
        verdict:
          "Concentrated and dilute are relative terms describing solute amount per volume. Adding solvent dilutes a solution; removing solvent concentrates it.",
        faq: [
          {
            q: "How do I dilute a solution?",
            a: "Add more solvent, which lowers the amount of solute per unit volume.",
          },
          {
            q: "Is concentrated the same as strong?",
            a: "No. Concentration is about amount per volume, while strength refers to degree of ionization.",
          },
          {
            q: "Are these terms absolute?",
            a: "No. They are relative comparisons between solutions, not fixed numerical values.",
          },
        ],
      },
      fr: {
        title: "Solution concentrée vs diluée comparées",
        h1: "Solution concentrée vs diluée expliquées",
        description:
          "Une solution concentrée a beaucoup de soluté par volume ; une diluée en a peu. Comparez ces descriptions de concentration.",
        intro:
          "Concentrée et diluée décrivent la quantité de soluté dans une solution, une comparaison relative plutôt qu'une valeur fixe.",
        pros_a: [
          "Grande quantité de soluté par unité de volume",
          "Valeur de concentration élevée",
          "Moins de solvant par rapport au soluté",
          "Paraît souvent plus foncée ou visqueuse",
          "Rendue diluée en ajoutant du solvant",
        ],
        pros_b: [
          "Petite quantité de soluté par unité de volume",
          "Valeur de concentration faible",
          "Plus de solvant par rapport au soluté",
          "Paraît souvent plus claire ou fluide",
          "Rendue concentrée en évaporant le solvant",
        ],
        verdict:
          "Concentrée et diluée sont des termes relatifs décrivant la quantité de soluté par volume. Ajouter du solvant dilue une solution ; en retirer la concentre.",
        faq: [
          {
            q: "Comment diluer une solution ?",
            a: "Ajoutez du solvant, ce qui abaisse la quantité de soluté par unité de volume.",
          },
          {
            q: "Concentré équivaut-il à fort ?",
            a: "Non. La concentration concerne la quantité par volume, la force le degré d'ionisation.",
          },
          {
            q: "Ces termes sont-ils absolus ?",
            a: "Non. Ce sont des comparaisons relatives entre solutions, pas des valeurs numériques fixes.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "primary-cell-vs-secondary-cell",
    a: "Primary cell",
    b: "Secondary cell",
    category: "chemistry",
    emoji_a: "🪫",
    emoji_b: "🔋",
    content: {
      en: {
        title: "Primary vs Secondary Cell: Batteries",
        h1: "Primary Cell vs Secondary Cell Explained",
        description:
          "Primary cells are single-use; secondary cells are rechargeable. Compare these two battery types side by side.",
        intro:
          "Batteries split into primary and secondary cells, depending on whether their reaction can be reversed by recharging.",
        pros_a: [
          "Single-use, not rechargeable",
          "Reaction is irreversible",
          "Discarded once depleted",
          "Lower upfront cost",
          "Examples: alkaline AA, zinc-carbon cells",
        ],
        pros_b: [
          "Rechargeable many times",
          "Reaction can be reversed by charging",
          "Reused over many cycles",
          "Higher cost but better long-term value",
          "Examples: lithium-ion, lead-acid",
        ],
        verdict:
          "Primary cells are used once and thrown away; secondary cells can be recharged and reused. Secondary cells cost more but are cheaper and greener over time.",
        faq: [
          {
            q: "Can a primary cell be recharged?",
            a: "No. Its chemical reaction is irreversible, so it must be replaced once depleted.",
          },
          {
            q: "Why do secondary cells cost more?",
            a: "They use more complex reversible chemistry, but the cost spreads over many recharge cycles.",
          },
          {
            q: "Is a car battery primary or secondary?",
            a: "A lead-acid car battery is a secondary cell, designed to be recharged.",
          },
        ],
      },
      fr: {
        title: "Pile primaire vs secondaire : batteries",
        h1: "Pile primaire vs Pile secondaire expliquées",
        description:
          "Les piles primaires sont à usage unique ; les secondaires rechargeables. Comparez ces deux types de batteries.",
        intro:
          "Les batteries se divisent en piles primaires et secondaires, selon que leur réaction peut être inversée par recharge.",
        pros_a: [
          "À usage unique, non rechargeable",
          "Réaction irréversible",
          "Jetée une fois épuisée",
          "Coût initial plus faible",
          "Exemples : piles AA alcalines, zinc-carbone",
        ],
        pros_b: [
          "Rechargeable de nombreuses fois",
          "Réaction inversable par charge",
          "Réutilisée sur de nombreux cycles",
          "Coût plus élevé mais meilleur à long terme",
          "Exemples : lithium-ion, plomb-acide",
        ],
        verdict:
          "Les piles primaires s'utilisent une fois puis se jettent ; les secondaires se rechargent et se réutilisent. Les secondaires coûtent plus mais sont plus économiques avec le temps.",
        faq: [
          {
            q: "Une pile primaire peut-elle être rechargée ?",
            a: "Non. Sa réaction chimique est irréversible, elle doit être remplacée une fois épuisée.",
          },
          {
            q: "Pourquoi les piles secondaires coûtent-elles plus ?",
            a: "Elles utilisent une chimie réversible plus complexe, mais le coût s'amortit sur de nombreux cycles.",
          },
          {
            q: "Une batterie de voiture est-elle primaire ou secondaire ?",
            a: "Une batterie plomb-acide de voiture est une pile secondaire, conçue pour être rechargée.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "strong-base-vs-weak-base",
    a: "Strong base",
    b: "Weak base",
    category: "chemistry",
    emoji_a: "🧼",
    emoji_b: "🧴",
    content: {
      en: {
        title: "Strong Base vs Weak Base: Key Differences",
        h1: "Strong Base vs Weak Base Explained",
        description:
          "Strong bases dissociate fully in water; weak bases only partially. Compare pH, dissociation and examples side by side.",
        intro:
          "The strength of a base is about how completely it ionizes, not how concentrated it is. This shapes pH and reactivity.",
        pros_a: [
          "Dissociates completely in water",
          "High pH at the same concentration",
          "Releases many hydroxide ions",
          "Reaction essentially irreversible",
          "Examples: NaOH, KOH",
        ],
        pros_b: [
          "Dissociates only partially in water",
          "Lower pH than a strong base at same concentration",
          "Releases fewer hydroxide ions",
          "Establishes an equilibrium",
          "Examples: ammonia, methylamine",
        ],
        verdict:
          "Strong bases ionize fully and give a high pH; weak bases set up an equilibrium and ionize partially. Strength is independent of concentration.",
        faq: [
          {
            q: "Does strong base mean concentrated?",
            a: "No. Strength is about degree of ionization, while concentration is amount per volume.",
          },
          {
            q: "What is the Kb value?",
            a: "Kb is the equilibrium constant showing how far a weak base ionizes in water.",
          },
          {
            q: "Is ammonia a strong or weak base?",
            a: "Ammonia is a weak base because it only partially ionizes in water.",
          },
        ],
      },
      fr: {
        title: "Base forte vs Base faible : différences",
        h1: "Base forte vs Base faible expliquées",
        description:
          "Les bases fortes se dissocient totalement dans l'eau ; les faibles partiellement. Comparez pH, dissociation et exemples.",
        intro:
          "La force d'une base concerne son degré d'ionisation, pas sa concentration. Cela influence le pH et la réactivité.",
        pros_a: [
          "Se dissocie totalement dans l'eau",
          "pH élevé à concentration égale",
          "Libère de nombreux ions hydroxyde",
          "Réaction quasi irréversible",
          "Exemples : NaOH, KOH",
        ],
        pros_b: [
          "Ne se dissocie que partiellement dans l'eau",
          "pH plus bas qu'une base forte à concentration égale",
          "Libère moins d'ions hydroxyde",
          "Établit un équilibre",
          "Exemples : ammoniac, méthylamine",
        ],
        verdict:
          "Les bases fortes s'ionisent totalement et donnent un pH élevé ; les faibles établissent un équilibre et s'ionisent partiellement. La force est indépendante de la concentration.",
        faq: [
          {
            q: "Base forte signifie-t-elle concentrée ?",
            a: "Non. La force concerne le degré d'ionisation, la concentration la quantité par volume.",
          },
          {
            q: "Qu'est-ce que la valeur Kb ?",
            a: "Kb est la constante d'équilibre montrant jusqu'où une base faible s'ionise dans l'eau.",
          },
          {
            q: "L'ammoniac est-il une base forte ou faible ?",
            a: "L'ammoniac est une base faible car il ne s'ionise que partiellement dans l'eau.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "addition-reaction-vs-substitution-reaction",
    a: "Addition reaction",
    b: "Substitution reaction",
    category: "chemistry",
    emoji_a: "➕",
    emoji_b: "🔁",
    content: {
      en: {
        title: "Addition vs Substitution Reaction Compared",
        h1: "Addition vs Substitution Reaction Explained",
        description:
          "Addition reactions add atoms across a double bond; substitution swaps one atom for another. Compare these organic reactions.",
        intro:
          "Addition and substitution are two core organic reaction types. Whether atoms are added or swapped sets them apart.",
        pros_a: [
          "Atoms add across a multiple bond",
          "Double or triple bond becomes single",
          "Typical of unsaturated compounds",
          "No small molecule is released",
          "Example: bromine adding to an alkene",
        ],
        pros_b: [
          "One atom or group replaces another",
          "Bonds are swapped, not added",
          "Typical of saturated and aromatic compounds",
          "Often releases a small molecule",
          "Example: chlorination of an alkane",
        ],
        verdict:
          "Addition reactions saturate a multiple bond by adding atoms; substitution reactions swap one group for another. Unsaturated compounds favor addition, saturated ones favor substitution.",
        faq: [
          {
            q: "Which compounds undergo addition?",
            a: "Unsaturated compounds with double or triple bonds, like alkenes and alkynes.",
          },
          {
            q: "What happens in a substitution reaction?",
            a: "An atom or group on the molecule is replaced by a different atom or group.",
          },
          {
            q: "Why do aromatics prefer substitution?",
            a: "Substitution keeps the stable aromatic ring intact, while addition would break it.",
          },
        ],
      },
      fr: {
        title: "Réaction d'addition vs de substitution",
        h1: "Réaction d'addition vs de substitution",
        description:
          "Les additions ajoutent des atomes sur une double liaison ; la substitution échange un atome. Comparez ces réactions organiques.",
        intro:
          "Addition et substitution sont deux types clés de réactions organiques. Ajouter ou échanger des atomes les distingue.",
        pros_a: [
          "Des atomes s'ajoutent sur une liaison multiple",
          "La double ou triple liaison devient simple",
          "Typique des composés insaturés",
          "Aucune petite molécule libérée",
          "Exemple : le brome s'ajoutant à un alcène",
        ],
        pros_b: [
          "Un atome ou groupe en remplace un autre",
          "Les liaisons sont échangées, pas ajoutées",
          "Typique des composés saturés et aromatiques",
          "Libère souvent une petite molécule",
          "Exemple : la chloration d'un alcane",
        ],
        verdict:
          "Les additions saturent une liaison multiple en ajoutant des atomes ; les substitutions échangent un groupe. Les insaturés favorisent l'addition, les saturés la substitution.",
        faq: [
          {
            q: "Quels composés subissent l'addition ?",
            a: "Les composés insaturés à double ou triple liaison, comme les alcènes et alcynes.",
          },
          {
            q: "Que se passe-t-il dans une substitution ?",
            a: "Un atome ou groupe de la molécule est remplacé par un atome ou groupe différent.",
          },
          {
            q: "Pourquoi les aromatiques préfèrent-ils la substitution ?",
            a: "La substitution conserve le cycle aromatique stable, alors que l'addition le briserait.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "organic-vs-inorganic-compound",
    a: "Organic compound",
    b: "Inorganic compound",
    category: "chemistry",
    emoji_a: "🌱",
    emoji_b: "🪨",
    content: {
      en: {
        title: "Organic vs Inorganic Compound Compared",
        h1: "Organic vs Inorganic Compound Explained",
        description:
          "Organic compounds are carbon-based; inorganic compounds generally are not. Compare these two great chemical classes.",
        intro:
          "Chemistry splits compounds into organic and inorganic. The presence of carbon-hydrogen bonds is the usual dividing line.",
        pros_a: [
          "Based on carbon, usually with hydrogen",
          "Generally covalently bonded",
          "Often flammable, lower melting points",
          "Forms huge, varied molecules",
          "Examples: methane, glucose, ethanol",
        ],
        pros_b: [
          "Generally not carbon-hydrogen based",
          "Often ionically bonded",
          "Usually higher melting points",
          "Frequently dissolves to conduct electricity",
          "Examples: salt, water, sulfuric acid",
        ],
        verdict:
          "Organic compounds are carbon-based with covalent bonds and great structural variety; inorganic compounds cover everything else, often ionic with higher melting points.",
        faq: [
          {
            q: "What defines an organic compound?",
            a: "Most contain carbon atoms bonded to hydrogen, the hallmark of organic chemistry.",
          },
          {
            q: "Is carbon dioxide organic?",
            a: "Carbon dioxide contains carbon but is traditionally classed as inorganic.",
          },
          {
            q: "Why are there so many organic compounds?",
            a: "Carbon forms stable chains, rings and branches, allowing endless structural variety.",
          },
        ],
      },
      fr: {
        title: "Composé organique vs inorganique comparés",
        h1: "Composé organique vs inorganique expliqués",
        description:
          "Les composés organiques sont à base de carbone ; les inorganiques généralement non. Comparez ces deux grandes classes.",
        intro:
          "La chimie divise les composés en organiques et inorganiques. La présence de liaisons carbone-hydrogène est la ligne de partage.",
        pros_a: [
          "À base de carbone, généralement avec hydrogène",
          "Liaisons généralement covalentes",
          "Souvent inflammables, points de fusion bas",
          "Forme de grandes molécules variées",
          "Exemples : méthane, glucose, éthanol",
        ],
        pros_b: [
          "Généralement pas à base carbone-hydrogène",
          "Liaisons souvent ioniques",
          "Points de fusion généralement plus élevés",
          "Conduit souvent l'électricité une fois dissous",
          "Exemples : sel, eau, acide sulfurique",
        ],
        verdict:
          "Les composés organiques sont à base de carbone avec des liaisons covalentes et une grande variété ; les inorganiques couvrent tout le reste, souvent ioniques.",
        faq: [
          {
            q: "Qu'est-ce qui définit un composé organique ?",
            a: "La plupart contiennent des atomes de carbone liés à l'hydrogène, marque de la chimie organique.",
          },
          {
            q: "Le dioxyde de carbone est-il organique ?",
            a: "Le dioxyde de carbone contient du carbone mais est traditionnellement classé inorganique.",
          },
          {
            q: "Pourquoi y a-t-il tant de composés organiques ?",
            a: "Le carbone forme des chaînes, cycles et ramifications stables, permettant une variété infinie.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "electronegativity-vs-electron-affinity",
    a: "Electronegativity",
    b: "Electron affinity",
    category: "chemistry",
    emoji_a: "🧲",
    emoji_b: "⚡",
    content: {
      en: {
        title: "Electronegativity vs Electron Affinity",
        h1: "Electronegativity vs Electron Affinity Explained",
        description:
          "Electronegativity is the pull on shared electrons in a bond; electron affinity is energy released when an atom gains one. Compare both.",
        intro:
          "Both terms describe an atom's attraction for electrons, but one applies within a bond and the other to a free atom.",
        pros_a: [
          "Pull on shared electrons in a bond",
          "A relative, unitless scale",
          "Measured by the Pauling scale",
          "Predicts bond polarity",
          "Fluorine has the highest value",
        ],
        pros_b: [
          "Energy change when an atom gains an electron",
          "An actual measured energy in kJ/mol",
          "Applies to an isolated gaseous atom",
          "Usually releases energy (negative value)",
          "Chlorine has a very high value",
        ],
        verdict:
          "Electronegativity is a relative pull within bonds; electron affinity is a measured energy for a lone atom gaining an electron. Both rise across a period.",
        faq: [
          {
            q: "How do the two differ?",
            a: "Electronegativity is a relative scale for bonded atoms; electron affinity is an energy for a free atom.",
          },
          {
            q: "Which element is most electronegative?",
            a: "Fluorine has the highest electronegativity of all elements.",
          },
          {
            q: "What units does electron affinity use?",
            a: "Electron affinity is measured as an energy in kilojoules per mole.",
          },
        ],
      },
      fr: {
        title: "Électronégativité vs Affinité électronique",
        h1: "Électronégativité vs Affinité électronique",
        description:
          "L'électronégativité est l'attraction sur les électrons d'une liaison ; l'affinité l'énergie libérée par un atome qui en gagne un. Comparez.",
        intro:
          "Les deux termes décrivent l'attraction d'un atome pour les électrons, mais l'un s'applique dans une liaison et l'autre à un atome libre.",
        pros_a: [
          "Attraction sur les électrons partagés d'une liaison",
          "Une échelle relative et sans unité",
          "Mesurée par l'échelle de Pauling",
          "Prédit la polarité d'une liaison",
          "Le fluor a la valeur la plus élevée",
        ],
        pros_b: [
          "Variation d'énergie quand un atome gagne un électron",
          "Une vraie énergie mesurée en kJ/mol",
          "S'applique à un atome gazeux isolé",
          "Libère généralement de l'énergie (valeur négative)",
          "Le chlore a une valeur très élevée",
        ],
        verdict:
          "L'électronégativité est une attraction relative dans les liaisons ; l'affinité électronique une énergie mesurée pour un atome isolé gagnant un électron. Les deux augmentent sur une période.",
        faq: [
          {
            q: "En quoi les deux diffèrent-ils ?",
            a: "L'électronégativité est une échelle relative pour atomes liés ; l'affinité une énergie pour un atome libre.",
          },
          {
            q: "Quel élément est le plus électronégatif ?",
            a: "Le fluor a l'électronégativité la plus élevée de tous les éléments.",
          },
          {
            q: "Quelles unités pour l'affinité électronique ?",
            a: "L'affinité électronique se mesure comme une énergie en kilojoules par mole.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "atomic-number-vs-mass-number",
    a: "Atomic number",
    b: "Mass number",
    category: "chemistry",
    emoji_a: "🔢",
    emoji_b: "⚖️",
    content: {
      en: {
        title: "Atomic Number vs Mass Number Compared",
        h1: "Atomic Number vs Mass Number Explained",
        description:
          "Atomic number counts protons; mass number counts protons plus neutrons. Compare these two key atomic figures.",
        intro:
          "Every atom is described by two numbers. One identifies the element, the other gives the total nuclear particle count.",
        pros_a: [
          "Counts only the protons",
          "Symbol Z",
          "Defines which element an atom is",
          "Same for all atoms of an element",
          "Equals electrons in a neutral atom",
        ],
        pros_b: [
          "Counts protons plus neutrons",
          "Symbol A",
          "Gives the total nuclear mass",
          "Varies between isotopes",
          "Always a whole number",
        ],
        verdict:
          "The atomic number fixes the element by counting protons; the mass number adds neutrons to give the nuclear total. Subtract Z from A to find the neutron count.",
        faq: [
          {
            q: "How do I find the number of neutrons?",
            a: "Subtract the atomic number from the mass number.",
          },
          {
            q: "Which number defines the element?",
            a: "The atomic number, since it equals the proton count.",
          },
          {
            q: "Why does mass number vary?",
            a: "Isotopes of an element have different neutron counts, changing the mass number.",
          },
        ],
      },
      fr: {
        title: "Numéro atomique vs Nombre de masse",
        h1: "Numéro atomique vs Nombre de masse",
        description:
          "Le numéro atomique compte les protons ; le nombre de masse les protons plus les neutrons. Comparez ces deux valeurs atomiques.",
        intro:
          "Chaque atome est décrit par deux nombres. L'un identifie l'élément, l'autre donne le total des particules du noyau.",
        pros_a: [
          "Compte uniquement les protons",
          "Symbole Z",
          "Définit quel élément est un atome",
          "Identique pour tous les atomes d'un élément",
          "Égale les électrons dans un atome neutre",
        ],
        pros_b: [
          "Compte les protons plus les neutrons",
          "Symbole A",
          "Donne la masse nucléaire totale",
          "Varie entre isotopes",
          "Toujours un nombre entier",
        ],
        verdict:
          "Le numéro atomique fixe l'élément en comptant les protons ; le nombre de masse ajoute les neutrons. Soustrayez Z de A pour trouver le nombre de neutrons.",
        faq: [
          {
            q: "Comment trouver le nombre de neutrons ?",
            a: "Soustrayez le numéro atomique du nombre de masse.",
          },
          {
            q: "Quel nombre définit l'élément ?",
            a: "Le numéro atomique, car il égale le nombre de protons.",
          },
          {
            q: "Pourquoi le nombre de masse varie-t-il ?",
            a: "Les isotopes d'un élément ont des nombres de neutrons différents, changeant le nombre de masse.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "monomer-vs-polymer",
    a: "Monomer",
    b: "Polymer",
    category: "chemistry",
    emoji_a: "🔵",
    emoji_b: "⛓️",
    content: {
      en: {
        title: "Monomer vs Polymer: Building Blocks",
        h1: "Monomer vs Polymer Explained",
        description:
          "Monomers are small repeating units; polymers are long chains built from many monomers. Compare these terms for study.",
        intro:
          "Polymers are made by linking many monomers together. The relationship is like beads forming a long necklace.",
        pros_a: [
          "A single small molecular unit",
          "The building block of a polymer",
          "Can react and join with other monomers",
          "Low molecular mass",
          "Examples: ethene, glucose, amino acids",
        ],
        pros_b: [
          "A long chain of many monomers",
          "Built by polymerization",
          "Very high molecular mass",
          "Has properties unlike its monomers",
          "Examples: polythene, starch, proteins",
        ],
        verdict:
          "A monomer is one small unit; a polymer is many of them joined into a long chain. Polymerization links monomers, often releasing small molecules in the process.",
        faq: [
          {
            q: "How are polymers made?",
            a: "By polymerization, where many monomer units bond together into a long chain.",
          },
          {
            q: "Do polymers act like their monomers?",
            a: "No. Polymers usually have very different properties from the monomers that build them.",
          },
          {
            q: "Is starch a polymer?",
            a: "Yes. Starch is a natural polymer built from many glucose monomer units.",
          },
        ],
      },
      fr: {
        title: "Monomère vs Polymère : briques de base",
        h1: "Monomère vs Polymère expliqués",
        description:
          "Les monomères sont de petites unités répétées ; les polymères de longues chaînes faites de nombreux monomères. Comparez.",
        intro:
          "Les polymères se forment en reliant de nombreux monomères. La relation est comme des perles formant un long collier.",
        pros_a: [
          "Une seule petite unité moléculaire",
          "La brique de base d'un polymère",
          "Peut réagir et se lier à d'autres monomères",
          "Faible masse moléculaire",
          "Exemples : éthène, glucose, acides aminés",
        ],
        pros_b: [
          "Une longue chaîne de nombreux monomères",
          "Construit par polymérisation",
          "Masse moléculaire très élevée",
          "Propriétés différentes de ses monomères",
          "Exemples : polyéthylène, amidon, protéines",
        ],
        verdict:
          "Un monomère est une petite unité ; un polymère en est plusieurs reliées en une longue chaîne. La polymérisation lie les monomères, libérant souvent de petites molécules.",
        faq: [
          {
            q: "Comment fabrique-t-on les polymères ?",
            a: "Par polymérisation, où de nombreuses unités monomères se lient en une longue chaîne.",
          },
          {
            q: "Les polymères agissent-ils comme leurs monomères ?",
            a: "Non. Les polymères ont généralement des propriétés très différentes des monomères qui les composent.",
          },
          {
            q: "L'amidon est-il un polymère ?",
            a: "Oui. L'amidon est un polymère naturel construit de nombreuses unités monomères de glucose.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "fission-vs-fusion",
    a: "Nuclear fission",
    b: "Nuclear fusion",
    category: "chemistry",
    emoji_a: "💥",
    emoji_b: "☀️",
    content: {
      en: {
        title: "Nuclear Fission vs Fusion Compared",
        h1: "Nuclear Fission vs Fusion Explained",
        description:
          "Fission splits a heavy nucleus; fusion joins light nuclei. Compare these two nuclear reactions and their energy release.",
        intro:
          "Fission and fusion both release nuclear energy, but they work in opposite directions on the nucleus.",
        pros_a: [
          "Splits a heavy nucleus into smaller ones",
          "Triggered by neutron bombardment",
          "Powers current nuclear reactors",
          "Produces long-lived radioactive waste",
          "Example: uranium-235 splitting",
        ],
        pros_b: [
          "Joins light nuclei into a heavier one",
          "Requires extreme heat and pressure",
          "Powers the Sun and stars",
          "Produces far less radioactive waste",
          "Example: hydrogen fusing into helium",
        ],
        verdict:
          "Fission splits heavy atoms and runs today's reactors; fusion joins light atoms and powers the stars. Fusion releases more energy per mass but is far harder to sustain on Earth.",
        faq: [
          {
            q: "Which powers the Sun?",
            a: "Nuclear fusion, joining hydrogen nuclei into helium, powers the Sun and other stars.",
          },
          {
            q: "Why is fusion hard to achieve?",
            a: "It needs extreme temperature and pressure to overcome the repulsion between nuclei.",
          },
          {
            q: "Which produces more nuclear waste?",
            a: "Fission produces long-lived radioactive waste, while fusion produces far less.",
          },
        ],
      },
      fr: {
        title: "Fission vs Fusion nucléaire comparées",
        h1: "Fission vs Fusion nucléaire expliquées",
        description:
          "La fission divise un noyau lourd ; la fusion unit des noyaux légers. Comparez ces deux réactions nucléaires et leur énergie.",
        intro:
          "La fission et la fusion libèrent toutes deux de l'énergie nucléaire, mais elles agissent en sens opposés sur le noyau.",
        pros_a: [
          "Divise un noyau lourd en plus petits",
          "Déclenchée par bombardement de neutrons",
          "Alimente les réacteurs nucléaires actuels",
          "Produit des déchets radioactifs à longue vie",
          "Exemple : l'uranium 235 qui se divise",
        ],
        pros_b: [
          "Unit des noyaux légers en un plus lourd",
          "Nécessite chaleur et pression extrêmes",
          "Alimente le Soleil et les étoiles",
          "Produit bien moins de déchets radioactifs",
          "Exemple : l'hydrogène fusionnant en hélium",
        ],
        verdict:
          "La fission divise les atomes lourds et fait fonctionner les réacteurs actuels ; la fusion unit les atomes légers et alimente les étoiles. La fusion libère plus d'énergie par masse.",
        faq: [
          {
            q: "Laquelle alimente le Soleil ?",
            a: "La fusion nucléaire, unissant les noyaux d'hydrogène en hélium, alimente le Soleil et les étoiles.",
          },
          {
            q: "Pourquoi la fusion est-elle difficile à réaliser ?",
            a: "Elle nécessite une température et une pression extrêmes pour vaincre la répulsion entre noyaux.",
          },
          {
            q: "Laquelle produit le plus de déchets nucléaires ?",
            a: "La fission produit des déchets radioactifs à longue vie, la fusion bien moins.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "qualitative-vs-quantitative-analysis",
    a: "Qualitative analysis",
    b: "Quantitative analysis",
    category: "chemistry",
    emoji_a: "🔍",
    emoji_b: "📊",
    content: {
      en: {
        title: "Qualitative vs Quantitative Analysis",
        h1: "Qualitative vs Quantitative Analysis Explained",
        description:
          "Qualitative analysis identifies what is present; quantitative analysis measures how much. Compare these two lab approaches.",
        intro:
          "Chemical analysis answers two questions: what is in a sample, and how much. Each is handled by a different approach.",
        pros_a: [
          "Identifies which substances are present",
          "Answers the 'what' question",
          "Uses flame tests and precipitate reactions",
          "Gives descriptive, non-numeric results",
          "Example: testing for a metal ion",
        ],
        pros_b: [
          "Measures the amount of a substance",
          "Answers the 'how much' question",
          "Uses titration and gravimetric methods",
          "Gives numerical results",
          "Example: finding a solution's concentration",
        ],
        verdict:
          "Qualitative analysis identifies the components of a sample; quantitative analysis measures their amounts. Labs often run qualitative first, then quantitative.",
        faq: [
          {
            q: "Which type uses titration?",
            a: "Quantitative analysis, since titration measures how much of a substance is present.",
          },
          {
            q: "What does qualitative analysis tell you?",
            a: "It identifies which substances or ions are present, without giving amounts.",
          },
          {
            q: "Can both be used together?",
            a: "Yes. A sample is often identified qualitatively first, then measured quantitatively.",
          },
        ],
      },
      fr: {
        title: "Analyse qualitative vs quantitative",
        h1: "Analyse qualitative vs quantitative expliquées",
        description:
          "L'analyse qualitative identifie ce qui est présent ; la quantitative mesure la quantité. Comparez ces deux approches.",
        intro:
          "L'analyse chimique répond à deux questions : qu'y a-t-il dans un échantillon et en quelle quantité. Chacune utilise une approche différente.",
        pros_a: [
          "Identifie quelles substances sont présentes",
          "Répond à la question « quoi »",
          "Utilise tests de flamme et précipités",
          "Donne des résultats descriptifs, non chiffrés",
          "Exemple : tester la présence d'un ion métallique",
        ],
        pros_b: [
          "Mesure la quantité d'une substance",
          "Répond à la question « combien »",
          "Utilise titrage et méthodes gravimétriques",
          "Donne des résultats numériques",
          "Exemple : trouver la concentration d'une solution",
        ],
        verdict:
          "L'analyse qualitative identifie les composants d'un échantillon ; la quantitative mesure leurs quantités. Les laboratoires font souvent la qualitative d'abord, puis la quantitative.",
        faq: [
          {
            q: "Quel type utilise le titrage ?",
            a: "L'analyse quantitative, car le titrage mesure la quantité présente d'une substance.",
          },
          {
            q: "Que révèle l'analyse qualitative ?",
            a: "Elle identifie quelles substances ou ions sont présents, sans donner de quantités.",
          },
          {
            q: "Les deux peuvent-elles être combinées ?",
            a: "Oui. Un échantillon est souvent d'abord identifié qualitativement, puis mesuré quantitativement.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "exact-number-vs-measured-number",
    a: "Exact number",
    b: "Measured number",
    category: "chemistry",
    emoji_a: "💯",
    emoji_b: "📏",
    content: {
      en: {
        title: "Exact vs Measured Number in Chemistry",
        h1: "Exact Number vs Measured Number Explained",
        description:
          "Exact numbers have no uncertainty; measured numbers always carry some. Compare these two types for significant figures.",
        intro:
          "Numbers in chemistry come in two kinds. One is perfectly precise, the other limited by the measuring tool.",
        pros_a: [
          "Has no uncertainty at all",
          "Comes from counting or definitions",
          "Infinite significant figures",
          "Does not limit calculation precision",
          "Examples: 12 in a dozen, 100 cm in a meter",
        ],
        pros_b: [
          "Always carries some uncertainty",
          "Comes from using an instrument",
          "Limited significant figures",
          "Limits the precision of a result",
          "Examples: a mass of 5.32 g, a length of 4.1 cm",
        ],
        verdict:
          "Exact numbers are perfectly precise from counting or definitions; measured numbers always have uncertainty. Only measured numbers limit significant figures in a calculation.",
        faq: [
          {
            q: "Why do exact numbers not limit significant figures?",
            a: "They have infinite significant figures, so they never restrict a calculation's precision.",
          },
          {
            q: "Where do measured numbers come from?",
            a: "From instruments like balances, rulers and thermometers, which always have some uncertainty.",
          },
          {
            q: "Is a counted quantity exact?",
            a: "Yes. Counting whole items, like 24 students, gives an exact number.",
          },
        ],
      },
      fr: {
        title: "Nombre exact vs mesuré en chimie",
        h1: "Nombre exact vs Nombre mesuré expliqués",
        description:
          "Les nombres exacts n'ont aucune incertitude ; les nombres mesurés en ont toujours. Comparez ces deux types pour les chiffres significatifs.",
        intro:
          "Les nombres en chimie sont de deux sortes. L'un est parfaitement précis, l'autre limité par l'outil de mesure.",
        pros_a: [
          "N'a aucune incertitude",
          "Vient d'un comptage ou de définitions",
          "Nombre infini de chiffres significatifs",
          "Ne limite pas la précision du calcul",
          "Exemples : 12 dans une douzaine, 100 cm dans un mètre",
        ],
        pros_b: [
          "Porte toujours une certaine incertitude",
          "Vient de l'usage d'un instrument",
          "Nombre limité de chiffres significatifs",
          "Limite la précision d'un résultat",
          "Exemples : une masse de 5,32 g, une longueur de 4,1 cm",
        ],
        verdict:
          "Les nombres exacts sont parfaitement précis (comptage ou définitions) ; les nombres mesurés ont toujours une incertitude. Seuls les nombres mesurés limitent les chiffres significatifs.",
        faq: [
          {
            q: "Pourquoi les nombres exacts ne limitent-ils pas les chiffres significatifs ?",
            a: "Ils ont un nombre infini de chiffres significatifs, ils ne restreignent donc jamais la précision.",
          },
          {
            q: "D'où viennent les nombres mesurés ?",
            a: "D'instruments comme les balances, règles et thermomètres, qui ont toujours une incertitude.",
          },
          {
            q: "Une quantité comptée est-elle exacte ?",
            a: "Oui. Compter des objets entiers, comme 24 élèves, donne un nombre exact.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "accuracy-vs-precision",
    a: "Accuracy",
    b: "Precision",
    category: "chemistry",
    emoji_a: "🎯",
    emoji_b: "🔬",
    content: {
      en: {
        title: "Accuracy vs Precision in Measurement",
        h1: "Accuracy vs Precision Explained",
        description:
          "Accuracy is closeness to the true value; precision is how repeatable measurements are. Compare these two lab concepts.",
        intro:
          "Accuracy and precision are often confused but describe different qualities of a measurement.",
        pros_a: [
          "Closeness to the true or accepted value",
          "Measures correctness",
          "Improved by calibrating instruments",
          "Affected by systematic error",
          "Example: a reading near the real mass",
        ],
        pros_b: [
          "How close repeated measurements are to each other",
          "Measures consistency and repeatability",
          "Improved by careful technique",
          "Affected by random error",
          "Example: five readings all very close together",
        ],
        verdict:
          "Accuracy is about being right; precision is about being consistent. A measurement can be precise but inaccurate, so good experiments aim for both.",
        faq: [
          {
            q: "Can a result be precise but not accurate?",
            a: "Yes. Repeated readings can cluster tightly yet all be far from the true value.",
          },
          {
            q: "What error reduces accuracy?",
            a: "Systematic error, such as an uncalibrated instrument, shifts results away from the true value.",
          },
          {
            q: "How do I improve precision?",
            a: "By using careful, consistent technique to reduce random error between readings.",
          },
        ],
      },
      fr: {
        title: "Exactitude vs Précision en mesure",
        h1: "Exactitude vs Précision expliquées",
        description:
          "L'exactitude est la proximité de la vraie valeur ; la précision la répétabilité des mesures. Comparez ces deux concepts.",
        intro:
          "L'exactitude et la précision sont souvent confondues mais décrivent des qualités différentes d'une mesure.",
        pros_a: [
          "Proximité de la valeur vraie ou acceptée",
          "Mesure la justesse",
          "Améliorée en calibrant les instruments",
          "Affectée par l'erreur systématique",
          "Exemple : une lecture proche de la masse réelle",
        ],
        pros_b: [
          "Proximité des mesures répétées entre elles",
          "Mesure la cohérence et la répétabilité",
          "Améliorée par une technique soignée",
          "Affectée par l'erreur aléatoire",
          "Exemple : cinq lectures toutes très proches",
        ],
        verdict:
          "L'exactitude, c'est avoir juste ; la précision, c'est être cohérent. Une mesure peut être précise mais inexacte, donc une bonne expérience vise les deux.",
        faq: [
          {
            q: "Un résultat peut-il être précis mais inexact ?",
            a: "Oui. Des lectures répétées peuvent être très groupées tout en étant loin de la vraie valeur.",
          },
          {
            q: "Quelle erreur réduit l'exactitude ?",
            a: "L'erreur systématique, comme un instrument non calibré, écarte les résultats de la vraie valeur.",
          },
          {
            q: "Comment améliorer la précision ?",
            a: "En utilisant une technique soignée et cohérente pour réduire l'erreur aléatoire entre lectures.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "valence-electron-vs-core-electron",
    a: "Valence electron",
    b: "Core electron",
    category: "chemistry",
    emoji_a: "🌟",
    emoji_b: "⚫",
    content: {
      en: {
        title: "Valence vs Core Electron Compared",
        h1: "Valence Electron vs Core Electron Explained",
        description:
          "Valence electrons are in the outer shell and drive bonding; core electrons are inner and shielded. Compare these electrons.",
        intro:
          "Electrons in an atom split into two roles. The outermost ones do the chemistry while the inner ones stay locked away.",
        pros_a: [
          "Located in the outermost shell",
          "Involved in chemical bonding",
          "Determines an element's reactivity",
          "Shown in Lewis dot diagrams",
          "Lost, gained or shared in reactions",
        ],
        pros_b: [
          "Located in the inner, filled shells",
          "Not involved in bonding",
          "Tightly held by the nucleus",
          "Shields valence electrons from full nuclear charge",
          "Generally unchanged in reactions",
        ],
        verdict:
          "Valence electrons live in the outer shell and govern bonding and reactivity; core electrons stay buried inside, shielding the outer ones but not joining reactions.",
        faq: [
          {
            q: "Which electrons take part in bonding?",
            a: "Valence electrons in the outermost shell are the ones involved in chemical bonding.",
          },
          {
            q: "What do core electrons do?",
            a: "They shield valence electrons from the full pull of the nucleus but do not bond.",
          },
          {
            q: "Where are valence electrons shown?",
            a: "In Lewis dot diagrams, which display only the outer-shell electrons.",
          },
        ],
      },
      fr: {
        title: "Électron de valence vs de cœur comparés",
        h1: "Électron de valence vs de cœur expliqués",
        description:
          "Les électrons de valence sont en couche externe et pilotent la liaison ; ceux de cœur sont internes et écrantés. Comparez.",
        intro:
          "Les électrons d'un atome ont deux rôles. Les plus externes font la chimie tandis que les internes restent enfermés.",
        pros_a: [
          "Situés dans la couche la plus externe",
          "Impliqués dans la liaison chimique",
          "Déterminent la réactivité d'un élément",
          "Montrés dans les diagrammes de Lewis",
          "Perdus, gagnés ou partagés en réaction",
        ],
        pros_b: [
          "Situés dans les couches internes pleines",
          "Non impliqués dans la liaison",
          "Fortement retenus par le noyau",
          "Écrantent les électrons de valence",
          "Généralement inchangés en réaction",
        ],
        verdict:
          "Les électrons de valence vivent en couche externe et gouvernent liaison et réactivité ; ceux de cœur restent enfouis, écrantant les externes sans participer aux réactions.",
        faq: [
          {
            q: "Quels électrons participent à la liaison ?",
            a: "Les électrons de valence de la couche la plus externe sont ceux impliqués dans la liaison chimique.",
          },
          {
            q: "Que font les électrons de cœur ?",
            a: "Ils écrantent les électrons de valence de la pleine attraction du noyau mais ne se lient pas.",
          },
          {
            q: "Où montre-t-on les électrons de valence ?",
            a: "Dans les diagrammes de Lewis, qui n'affichent que les électrons de la couche externe.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "sigma-bond-vs-pi-bond",
    a: "Sigma bond",
    b: "Pi bond",
    category: "chemistry",
    emoji_a: "➖",
    emoji_b: "〰️",
    content: {
      en: {
        title: "Sigma vs Pi Bond: Covalent Bonding",
        h1: "Sigma Bond vs Pi Bond Explained",
        description:
          "Sigma bonds form by head-on orbital overlap; pi bonds form by sideways overlap. Compare strength and rotation.",
        intro:
          "Covalent bonds come in two types. Sigma and pi bonds differ in how their orbitals overlap and how strong they are.",
        pros_a: [
          "Formed by head-on orbital overlap",
          "Strong, with electron density on the bond axis",
          "Always the first bond between two atoms",
          "Allows free rotation around the bond",
          "Present in all single bonds",
        ],
        pros_b: [
          "Formed by sideways orbital overlap",
          "Weaker, with density above and below the axis",
          "Only forms after a sigma bond exists",
          "Prevents rotation around the bond",
          "Present in double and triple bonds",
        ],
        verdict:
          "A sigma bond is the strong first bond from head-on overlap; pi bonds are weaker sideways overlaps added in double and triple bonds. Pi bonds lock the molecule against rotation.",
        faq: [
          {
            q: "Which bond is stronger?",
            a: "The sigma bond, because head-on overlap concentrates electron density most effectively.",
          },
          {
            q: "How many bonds are in a triple bond?",
            a: "A triple bond has one sigma bond and two pi bonds.",
          },
          {
            q: "Why can't double bonds rotate?",
            a: "The pi bond's sideways overlap would break if the atoms rotated, so rotation is blocked.",
          },
        ],
      },
      fr: {
        title: "Liaison sigma vs pi : liaison covalente",
        h1: "Liaison sigma vs Liaison pi expliquées",
        description:
          "Les liaisons sigma se forment par recouvrement axial ; les liaisons pi par recouvrement latéral. Comparez force et rotation.",
        intro:
          "Les liaisons covalentes sont de deux types. Les liaisons sigma et pi diffèrent par le recouvrement des orbitales et leur force.",
        pros_a: [
          "Formée par recouvrement axial des orbitales",
          "Forte, densité électronique sur l'axe de liaison",
          "Toujours la première liaison entre deux atomes",
          "Permet la libre rotation autour de la liaison",
          "Présente dans toutes les liaisons simples",
        ],
        pros_b: [
          "Formée par recouvrement latéral des orbitales",
          "Plus faible, densité au-dessus et en dessous de l'axe",
          "Ne se forme qu'après une liaison sigma",
          "Empêche la rotation autour de la liaison",
          "Présente dans les doubles et triples liaisons",
        ],
        verdict:
          "Une liaison sigma est la première liaison forte par recouvrement axial ; les liaisons pi sont des recouvrements latéraux plus faibles ajoutés aux doubles et triples liaisons.",
        faq: [
          {
            q: "Quelle liaison est la plus forte ?",
            a: "La liaison sigma, car le recouvrement axial concentre le plus efficacement la densité électronique.",
          },
          {
            q: "Combien de liaisons dans une triple liaison ?",
            a: "Une triple liaison comporte une liaison sigma et deux liaisons pi.",
          },
          {
            q: "Pourquoi les doubles liaisons ne tournent-elles pas ?",
            a: "Le recouvrement latéral de la liaison pi se romprait si les atomes tournaient, la rotation est donc bloquée.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "electrophile-vs-nucleophile",
    a: "Electrophile",
    b: "Nucleophile",
    category: "chemistry",
    emoji_a: "🧲",
    emoji_b: "💞",
    content: {
      en: {
        title: "Electrophile vs Nucleophile Compared",
        h1: "Electrophile vs Nucleophile Explained",
        description:
          "Electrophiles seek electrons; nucleophiles donate them. Compare these two key species in organic reaction mechanisms.",
        intro:
          "Organic reactions are largely a dance between electron-poor and electron-rich species. These are electrophiles and nucleophiles.",
        pros_a: [
          "Electron-loving, electron-deficient species",
          "Accepts a pair of electrons",
          "Often positive or partially positive",
          "Attacked by nucleophiles",
          "Examples: H+, carbocations, Br2",
        ],
        pros_b: [
          "Nucleus-loving, electron-rich species",
          "Donates a pair of electrons",
          "Often negative or has a lone pair",
          "Attacks electrophiles",
          "Examples: OH-, NH3, CN-",
        ],
        verdict:
          "Electrophiles are electron-poor and accept electron pairs; nucleophiles are electron-rich and donate them. Reactions happen when a nucleophile attacks an electrophile.",
        faq: [
          {
            q: "Which one donates electrons?",
            a: "The nucleophile donates a pair of electrons; the electrophile accepts them.",
          },
          {
            q: "Is a positive ion an electrophile?",
            a: "Usually yes. Positive or electron-deficient species act as electrophiles.",
          },
          {
            q: "How do they react together?",
            a: "An electron-rich nucleophile attacks an electron-poor electrophile, forming a new bond.",
          },
        ],
      },
      fr: {
        title: "Électrophile vs Nucléophile comparés",
        h1: "Électrophile vs Nucléophile expliqués",
        description:
          "Les électrophiles cherchent des électrons ; les nucléophiles en donnent. Comparez ces deux espèces clés des mécanismes organiques.",
        intro:
          "Les réactions organiques sont largement une danse entre espèces pauvres et riches en électrons : les électrophiles et les nucléophiles.",
        pros_a: [
          "Espèce avide d'électrons, déficiente en électrons",
          "Accepte une paire d'électrons",
          "Souvent positive ou partiellement positive",
          "Attaquée par les nucléophiles",
          "Exemples : H+, carbocations, Br2",
        ],
        pros_b: [
          "Espèce riche en électrons, avide de noyau",
          "Donne une paire d'électrons",
          "Souvent négative ou avec un doublet libre",
          "Attaque les électrophiles",
          "Exemples : OH-, NH3, CN-",
        ],
        verdict:
          "Les électrophiles sont pauvres en électrons et acceptent des paires ; les nucléophiles sont riches et en donnent. Les réactions ont lieu quand un nucléophile attaque un électrophile.",
        faq: [
          {
            q: "Lequel donne des électrons ?",
            a: "Le nucléophile donne une paire d'électrons ; l'électrophile les accepte.",
          },
          {
            q: "Un ion positif est-il un électrophile ?",
            a: "Généralement oui. Les espèces positives ou déficientes en électrons agissent en électrophiles.",
          },
          {
            q: "Comment réagissent-ils ensemble ?",
            a: "Un nucléophile riche en électrons attaque un électrophile pauvre, formant une nouvelle liaison.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "buffer-vs-indicator",
    a: "Buffer",
    b: "Indicator",
    category: "chemistry",
    emoji_a: "⚖️",
    emoji_b: "🌈",
    content: {
      en: {
        title: "Buffer vs Indicator: Acid-Base Tools",
        h1: "Buffer vs Indicator Explained",
        description:
          "A buffer resists pH change; an indicator signals pH by changing color. Compare these two acid-base lab tools.",
        intro:
          "Buffers and indicators both relate to pH but do opposite jobs: one stabilizes pH, the other reveals it.",
        pros_a: [
          "Resists changes in pH",
          "Made of a weak acid and its conjugate base",
          "Keeps pH stable when acid or base is added",
          "Vital in blood and biological systems",
          "Example: acetic acid with sodium acetate",
        ],
        pros_b: [
          "Signals the pH of a solution",
          "Changes color over a pH range",
          "Often a weak acid or base itself",
          "Used to find titration endpoints",
          "Examples: litmus, phenolphthalein",
        ],
        verdict:
          "A buffer holds pH steady against added acid or base, while an indicator changes color to reveal pH. One stabilizes, the other reports.",
        faq: [
          {
            q: "What is a buffer made of?",
            a: "Typically a weak acid and its conjugate base, or a weak base and its conjugate acid.",
          },
          {
            q: "Why use an indicator in titration?",
            a: "Its color change marks the endpoint, showing when neutralization is complete.",
          },
          {
            q: "Does an indicator change pH?",
            a: "No. An indicator only reveals pH; it does not stabilize or significantly alter it.",
          },
        ],
      },
      fr: {
        title: "Tampon vs Indicateur : outils acido-basiques",
        h1: "Tampon vs Indicateur expliqués",
        description:
          "Un tampon résiste aux changements de pH ; un indicateur signale le pH en changeant de couleur. Comparez ces deux outils.",
        intro:
          "Les tampons et les indicateurs concernent tous deux le pH mais font des tâches opposées : l'un stabilise le pH, l'autre le révèle.",
        pros_a: [
          "Résiste aux changements de pH",
          "Fait d'un acide faible et de sa base conjuguée",
          "Garde le pH stable si on ajoute acide ou base",
          "Vital dans le sang et les systèmes biologiques",
          "Exemple : acide acétique avec acétate de sodium",
        ],
        pros_b: [
          "Signale le pH d'une solution",
          "Change de couleur sur une plage de pH",
          "Souvent lui-même un acide ou une base faible",
          "Sert à repérer les points d'équivalence",
          "Exemples : tournesol, phénolphtaléine",
        ],
        verdict:
          "Un tampon maintient le pH stable face à un ajout d'acide ou de base, tandis qu'un indicateur change de couleur pour révéler le pH. L'un stabilise, l'autre signale.",
        faq: [
          {
            q: "De quoi un tampon est-il fait ?",
            a: "Typiquement d'un acide faible et de sa base conjuguée, ou d'une base faible et de son acide conjugué.",
          },
          {
            q: "Pourquoi utiliser un indicateur en titrage ?",
            a: "Son changement de couleur marque le point d'équivalence, montrant la fin de la neutralisation.",
          },
          {
            q: "Un indicateur change-t-il le pH ?",
            a: "Non. Un indicateur ne fait que révéler le pH ; il ne le stabilise ni ne l'altère notablement.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "exo-vs-endo-bond-breaking",
    a: "Bond breaking",
    b: "Bond making",
    category: "chemistry",
    emoji_a: "💥",
    emoji_b: "🔗",
    content: {
      en: {
        title: "Bond Breaking vs Bond Making: Energy",
        h1: "Bond Breaking vs Bond Making Explained",
        description:
          "Breaking bonds absorbs energy; making bonds releases it. Compare these two steps that decide a reaction's energy.",
        intro:
          "Every reaction breaks old bonds and makes new ones. The balance between the two decides if a reaction is exothermic or endothermic.",
        pros_a: [
          "Energy must be absorbed to break a bond",
          "An endothermic step",
          "Always requires an energy input",
          "Stronger bonds need more energy",
          "Happens to the reactants",
        ],
        pros_b: [
          "Energy is released when a bond forms",
          "An exothermic step",
          "Always gives out energy",
          "Stronger bonds release more energy",
          "Happens to form the products",
        ],
        verdict:
          "Breaking bonds always absorbs energy and making bonds always releases it. If bond making releases more than bond breaking absorbs, the reaction is exothermic overall.",
        faq: [
          {
            q: "Which step releases energy?",
            a: "Bond making releases energy; bond breaking absorbs it.",
          },
          {
            q: "How does this decide exothermic vs endothermic?",
            a: "If forming new bonds releases more than breaking old ones absorbs, the reaction is exothermic.",
          },
          {
            q: "Do stronger bonds matter more?",
            a: "Yes. Stronger bonds absorb more energy to break and release more energy when they form.",
          },
        ],
      },
      fr: {
        title: "Rupture vs Formation de liaison : énergie",
        h1: "Rupture vs Formation de liaison expliquées",
        description:
          "Rompre des liaisons absorbe de l'énergie ; en former en libère. Comparez ces deux étapes qui décident l'énergie d'une réaction.",
        intro:
          "Toute réaction rompt d'anciennes liaisons et en forme de nouvelles. L'équilibre entre les deux décide si la réaction est exo ou endothermique.",
        pros_a: [
          "De l'énergie doit être absorbée pour rompre une liaison",
          "Une étape endothermique",
          "Nécessite toujours un apport d'énergie",
          "Les liaisons plus fortes demandent plus d'énergie",
          "Concerne les réactifs",
        ],
        pros_b: [
          "De l'énergie est libérée quand une liaison se forme",
          "Une étape exothermique",
          "Dégage toujours de l'énergie",
          "Les liaisons plus fortes libèrent plus d'énergie",
          "Se produit pour former les produits",
        ],
        verdict:
          "Rompre des liaisons absorbe toujours de l'énergie et en former en libère toujours. Si la formation libère plus que la rupture n'absorbe, la réaction est globalement exothermique.",
        faq: [
          {
            q: "Quelle étape libère de l'énergie ?",
            a: "La formation de liaison libère de l'énergie ; la rupture en absorbe.",
          },
          {
            q: "Comment cela décide-t-il exo ou endothermique ?",
            a: "Si former de nouvelles liaisons libère plus que rompre les anciennes n'absorbe, la réaction est exothermique.",
          },
          {
            q: "Les liaisons plus fortes comptent-elles davantage ?",
            a: "Oui. Les liaisons plus fortes absorbent plus d'énergie pour se rompre et en libèrent plus en se formant.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "concentration-vs-rate-of-reaction",
    a: "Concentration",
    b: "Rate of reaction",
    category: "chemistry",
    emoji_a: "🧴",
    emoji_b: "⏱️",
    content: {
      en: {
        title: "Concentration vs Rate of Reaction",
        h1: "Concentration vs Rate of Reaction Explained",
        description:
          "Concentration measures how much solute is present; rate of reaction measures how fast it proceeds. Compare and link the two.",
        intro:
          "Concentration and rate of reaction are linked but distinct: one is a state, the other a speed.",
        pros_a: [
          "Amount of solute per unit volume",
          "A snapshot quantity at a moment",
          "Measured in mol/L",
          "Higher value means more particles present",
          "Affects how often collisions occur",
        ],
        pros_b: [
          "How fast reactants turn into products",
          "Measured per unit time",
          "Expressed as change in concentration over time",
          "Higher value means a faster reaction",
          "Affected by concentration, temperature and catalysts",
        ],
        verdict:
          "Concentration is how much is present; rate of reaction is how fast change happens. Raising concentration usually raises the rate by causing more frequent collisions.",
        faq: [
          {
            q: "How does concentration affect rate?",
            a: "More concentrated reactants collide more often, so the reaction generally goes faster.",
          },
          {
            q: "What units does rate use?",
            a: "Rate is usually expressed as change in concentration per unit time, such as mol/L per second.",
          },
          {
            q: "Is concentration the only factor in rate?",
            a: "No. Temperature, surface area and catalysts also affect the rate of reaction.",
          },
        ],
      },
      fr: {
        title: "Concentration vs Vitesse de réaction",
        h1: "Concentration vs Vitesse de réaction expliquées",
        description:
          "La concentration mesure la quantité de soluté ; la vitesse de réaction la rapidité du processus. Comparez et reliez les deux.",
        intro:
          "La concentration et la vitesse de réaction sont liées mais distinctes : l'une est un état, l'autre une rapidité.",
        pros_a: [
          "Quantité de soluté par unité de volume",
          "Une quantité instantanée à un moment donné",
          "Mesurée en mol/L",
          "Une valeur élevée signifie plus de particules",
          "Influence la fréquence des collisions",
        ],
        pros_b: [
          "Rapidité de transformation des réactifs en produits",
          "Mesurée par unité de temps",
          "Exprimée comme variation de concentration dans le temps",
          "Une valeur élevée signifie une réaction plus rapide",
          "Affectée par concentration, température et catalyseurs",
        ],
        verdict:
          "La concentration est la quantité présente ; la vitesse de réaction la rapidité du changement. Augmenter la concentration augmente souvent la vitesse via des collisions plus fréquentes.",
        faq: [
          {
            q: "Comment la concentration affecte-t-elle la vitesse ?",
            a: "Des réactifs plus concentrés se heurtent plus souvent, donc la réaction est généralement plus rapide.",
          },
          {
            q: "Quelles unités pour la vitesse ?",
            a: "La vitesse s'exprime généralement comme variation de concentration par unité de temps, par exemple mol/L par seconde.",
          },
          {
            q: "La concentration est-elle le seul facteur de vitesse ?",
            a: "Non. La température, la surface de contact et les catalyseurs influencent aussi la vitesse.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "noble-gas-vs-alkali-metal",
    a: "Noble gas",
    b: "Alkali metal",
    category: "chemistry",
    emoji_a: "💡",
    emoji_b: "🔥",
    content: {
      en: {
        title: "Noble Gas vs Alkali Metal: Extremes",
        h1: "Noble Gas vs Alkali Metal Explained",
        description:
          "Noble gases are the least reactive elements; alkali metals are among the most reactive. Compare these periodic table extremes.",
        intro:
          "Group 18 and Group 1 sit at opposite ends of reactivity. One has a full electron shell, the other a single loose electron.",
        pros_a: [
          "Group 18 with a full valence shell",
          "Extremely stable and unreactive",
          "Exists as single, stable atoms",
          "Colorless, odorless gases",
          "Examples: helium, neon, argon",
        ],
        pros_b: [
          "Group 1 with one valence electron",
          "Extremely reactive, especially with water",
          "Soft metals with low density",
          "Stored under oil for safety",
          "Examples: lithium, sodium, potassium",
        ],
        verdict:
          "Noble gases are the calmest elements thanks to a full shell, while alkali metals are among the most violent due to one easily lost electron. They mark the reactivity extremes.",
        faq: [
          {
            q: "Why are noble gases so stable?",
            a: "Their full outer electron shell gives them no drive to react with other elements.",
          },
          {
            q: "Why are alkali metals stored under oil?",
            a: "They react so quickly with air and water that oil protects them from moisture.",
          },
          {
            q: "Which is more reactive?",
            a: "Alkali metals are far more reactive; noble gases are nearly inert.",
          },
        ],
      },
      fr: {
        title: "Gaz noble vs Métal alcalin : les extrêmes",
        h1: "Gaz noble vs Métal alcalin expliqués",
        description:
          "Les gaz nobles sont les éléments les moins réactifs ; les métaux alcalins parmi les plus réactifs. Comparez ces extrêmes.",
        intro:
          "Les groupes 18 et 1 sont aux extrémités opposées de la réactivité. L'un a une couche pleine, l'autre un seul électron peu retenu.",
        pros_a: [
          "Groupe 18 avec une couche de valence pleine",
          "Extrêmement stable et non réactif",
          "Existe en atomes uniques et stables",
          "Gaz incolores et inodores",
          "Exemples : hélium, néon, argon",
        ],
        pros_b: [
          "Groupe 1 avec un électron de valence",
          "Extrêmement réactif, surtout avec l'eau",
          "Métaux mous à faible densité",
          "Conservés sous huile par sécurité",
          "Exemples : lithium, sodium, potassium",
        ],
        verdict:
          "Les gaz nobles sont les éléments les plus calmes grâce à une couche pleine, les métaux alcalins parmi les plus violents à cause d'un électron facilement perdu. Ils marquent les extrêmes.",
        faq: [
          {
            q: "Pourquoi les gaz nobles sont-ils si stables ?",
            a: "Leur couche externe pleine ne leur donne aucune raison de réagir avec d'autres éléments.",
          },
          {
            q: "Pourquoi conserver les métaux alcalins sous huile ?",
            a: "Ils réagissent si vite avec l'air et l'eau que l'huile les protège de l'humidité.",
          },
          {
            q: "Lequel est le plus réactif ?",
            a: "Les métaux alcalins sont bien plus réactifs ; les gaz nobles sont presque inertes.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "endpoint-vs-equivalence-point",
    a: "Endpoint",
    b: "Equivalence point",
    category: "chemistry",
    emoji_a: "🌈",
    emoji_b: "⚖️",
    content: {
      en: {
        title: "Endpoint vs Equivalence Point in Titration",
        h1: "Endpoint vs Equivalence Point Explained",
        description:
          "The equivalence point is where reactants exactly balance; the endpoint is where the indicator changes. Compare both.",
        intro:
          "Titration has two closely related points. One is the true chemical balance, the other is what the indicator shows.",
        pros_a: [
          "Where the indicator visibly changes color",
          "What the experimenter actually observes",
          "Slightly after the equivalence point",
          "Depends on the chosen indicator",
          "A practical, observed signal",
        ],
        pros_b: [
          "Where acid and base exactly neutralize",
          "Moles of reactants are stoichiometrically equal",
          "The true theoretical point",
          "Independent of any indicator",
          "Found precisely with a pH meter",
        ],
        verdict:
          "The equivalence point is the true chemical balance; the endpoint is the observed color change. A good indicator makes the endpoint fall very close to the equivalence point.",
        faq: [
          {
            q: "Are the two points the same?",
            a: "Not exactly. A well-chosen indicator makes the endpoint nearly match the equivalence point.",
          },
          {
            q: "Which is the theoretical point?",
            a: "The equivalence point is the true theoretical point where reactants are stoichiometrically equal.",
          },
          {
            q: "Why choose the indicator carefully?",
            a: "So its color change happens as close as possible to the equivalence point for accuracy.",
          },
        ],
      },
      fr: {
        title: "Point de virage vs d'équivalence (titrage)",
        h1: "Point de virage vs Point d'équivalence",
        description:
          "Le point d'équivalence est où les réactifs s'équilibrent exactement ; le point de virage où l'indicateur change. Comparez.",
        intro:
          "Le titrage a deux points étroitement liés. L'un est le vrai équilibre chimique, l'autre ce que montre l'indicateur.",
        pros_a: [
          "Où l'indicateur change visiblement de couleur",
          "Ce que l'expérimentateur observe réellement",
          "Légèrement après le point d'équivalence",
          "Dépend de l'indicateur choisi",
          "Un signal pratique et observé",
        ],
        pros_b: [
          "Où acide et base se neutralisent exactement",
          "Les moles de réactifs sont stœchiométriquement égales",
          "Le vrai point théorique",
          "Indépendant de tout indicateur",
          "Trouvé précisément avec un pH-mètre",
        ],
        verdict:
          "Le point d'équivalence est le vrai équilibre chimique ; le point de virage le changement de couleur observé. Un bon indicateur fait coïncider le virage avec l'équivalence.",
        faq: [
          {
            q: "Les deux points sont-ils identiques ?",
            a: "Pas exactement. Un indicateur bien choisi fait quasi coïncider le virage avec l'équivalence.",
          },
          {
            q: "Lequel est le point théorique ?",
            a: "Le point d'équivalence est le vrai point théorique où les réactifs sont stœchiométriquement égaux.",
          },
          {
            q: "Pourquoi choisir l'indicateur avec soin ?",
            a: "Pour que son changement de couleur ait lieu au plus près du point d'équivalence, par précision.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "hard-water-vs-soft-water",
    a: "Hard water",
    b: "Soft water",
    category: "chemistry",
    emoji_a: "🪨",
    emoji_b: "💧",
    content: {
      en: {
        title: "Hard Water vs Soft Water Compared",
        h1: "Hard Water vs Soft Water Explained",
        description:
          "Hard water is rich in calcium and magnesium ions; soft water has few. Compare these two water types side by side.",
        intro:
          "Water hardness depends on dissolved mineral ions. The amount of calcium and magnesium decides whether water is hard or soft.",
        pros_a: [
          "High in calcium and magnesium ions",
          "Forms scum with soap",
          "Leaves limescale in kettles and pipes",
          "Lathers poorly with soap",
          "Often from chalk or limestone areas",
        ],
        pros_b: [
          "Low in calcium and magnesium ions",
          "Lathers easily with soap",
          "Leaves little or no limescale",
          "Found in areas with hard rock like granite",
          "Can be produced by ion-exchange softening",
        ],
        verdict:
          "Hard water carries dissolved calcium and magnesium that fight soap and form limescale; soft water has few such ions and lathers easily. Hardness reflects the local geology.",
        faq: [
          {
            q: "What causes water hardness?",
            a: "Dissolved calcium and magnesium ions, usually picked up from chalk or limestone rock.",
          },
          {
            q: "Why does hard water form limescale?",
            a: "Heating it deposits insoluble calcium carbonate as scale in kettles and pipes.",
          },
          {
            q: "How is hard water softened?",
            a: "By ion exchange, swapping calcium and magnesium ions for sodium ions.",
          },
        ],
      },
      fr: {
        title: "Eau dure vs Eau douce comparées",
        h1: "Eau dure vs Eau douce expliquées",
        description:
          "L'eau dure est riche en ions calcium et magnésium ; l'eau douce en a peu. Comparez ces deux types d'eau.",
        intro:
          "La dureté de l'eau dépend des ions minéraux dissous. La quantité de calcium et de magnésium décide si l'eau est dure ou douce.",
        pros_a: [
          "Riche en ions calcium et magnésium",
          "Forme un dépôt avec le savon",
          "Laisse du calcaire dans bouilloires et tuyaux",
          "Mousse mal avec le savon",
          "Souvent des régions de craie ou calcaire",
        ],
        pros_b: [
          "Pauvre en ions calcium et magnésium",
          "Mousse facilement avec le savon",
          "Laisse peu ou pas de calcaire",
          "Présente dans les régions de roche dure comme le granite",
          "Peut être produite par adoucissement par échange d'ions",
        ],
        verdict:
          "L'eau dure contient du calcium et du magnésium dissous qui gênent le savon et forment du calcaire ; l'eau douce en a peu et mousse facilement. La dureté reflète la géologie locale.",
        faq: [
          {
            q: "Qu'est-ce qui cause la dureté de l'eau ?",
            a: "Les ions calcium et magnésium dissous, généralement issus de la craie ou du calcaire.",
          },
          {
            q: "Pourquoi l'eau dure forme-t-elle du calcaire ?",
            a: "La chauffer dépose du carbonate de calcium insoluble en tartre dans bouilloires et tuyaux.",
          },
          {
            q: "Comment adoucit-on l'eau dure ?",
            a: "Par échange d'ions, en remplaçant les ions calcium et magnésium par des ions sodium.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "lewis-acid-vs-lewis-base",
    a: "Lewis acid",
    b: "Lewis base",
    category: "chemistry",
    emoji_a: "🤲",
    emoji_b: "🎁",
    content: {
      en: {
        title: "Lewis Acid vs Lewis Base Compared",
        h1: "Lewis Acid vs Lewis Base Explained",
        description:
          "A Lewis acid accepts an electron pair; a Lewis base donates one. Compare this broad acid-base definition side by side.",
        intro:
          "The Lewis theory defines acids and bases by electron pairs, broadening the idea beyond protons and hydroxide ions.",
        pros_a: [
          "Accepts a pair of electrons",
          "An electron-pair acceptor",
          "Often has an empty orbital",
          "Includes species with no protons",
          "Examples: BF3, H+, metal cations",
        ],
        pros_b: [
          "Donates a pair of electrons",
          "An electron-pair donor",
          "Usually has a lone pair available",
          "Includes species with no hydroxide",
          "Examples: NH3, H2O, OH-",
        ],
        verdict:
          "Lewis acids accept electron pairs and Lewis bases donate them, a definition broad enough to cover reactions with no protons at all. They form a bond by sharing one pair.",
        faq: [
          {
            q: "How does the Lewis definition differ?",
            a: "It focuses on electron pairs rather than proton transfer, so it covers far more reactions.",
          },
          {
            q: "Is every Lewis base also a Brønsted base?",
            a: "Many are, but the Lewis definition is broader and includes species that accept no protons.",
          },
          {
            q: "What bond forms in a Lewis reaction?",
            a: "A coordinate covalent bond, where the base supplies both shared electrons.",
          },
        ],
      },
      fr: {
        title: "Acide de Lewis vs Base de Lewis comparés",
        h1: "Acide de Lewis vs Base de Lewis expliqués",
        description:
          "Un acide de Lewis accepte une paire d'électrons ; une base de Lewis en donne une. Comparez cette définition large.",
        intro:
          "La théorie de Lewis définit acides et bases par les paires d'électrons, élargissant l'idée au-delà des protons et des ions hydroxyde.",
        pros_a: [
          "Accepte une paire d'électrons",
          "Un accepteur de paire d'électrons",
          "A souvent une orbitale vide",
          "Inclut des espèces sans proton",
          "Exemples : BF3, H+, cations métalliques",
        ],
        pros_b: [
          "Donne une paire d'électrons",
          "Un donneur de paire d'électrons",
          "Possède généralement un doublet libre disponible",
          "Inclut des espèces sans hydroxyde",
          "Exemples : NH3, H2O, OH-",
        ],
        verdict:
          "Les acides de Lewis acceptent des paires d'électrons et les bases de Lewis en donnent, une définition assez large pour couvrir des réactions sans aucun proton.",
        faq: [
          {
            q: "En quoi la définition de Lewis diffère-t-elle ?",
            a: "Elle se concentre sur les paires d'électrons plutôt que le transfert de proton, couvrant bien plus de réactions.",
          },
          {
            q: "Toute base de Lewis est-elle aussi une base de Brønsted ?",
            a: "Beaucoup le sont, mais la définition de Lewis est plus large et inclut des espèces n'acceptant aucun proton.",
          },
          {
            q: "Quelle liaison se forme dans une réaction de Lewis ?",
            a: "Une liaison covalente de coordination, où la base fournit les deux électrons partagés.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "exothermic-graph-vs-endothermic-graph",
    a: "Activation energy",
    b: "Enthalpy change",
    category: "chemistry",
    emoji_a: "⛰️",
    emoji_b: "📉",
    content: {
      en: {
        title: "Activation Energy vs Enthalpy Change",
        h1: "Activation Energy vs Enthalpy Change Explained",
        description:
          "Activation energy is the barrier to start a reaction; enthalpy change is the net energy difference. Compare both on a graph.",
        intro:
          "Energy diagrams show two key quantities. One is the hill that must be climbed, the other is the overall energy change.",
        pros_a: [
          "The minimum energy to start a reaction",
          "The height of the energy barrier",
          "Lowered by adding a catalyst",
          "Determines reaction rate",
          "Measured from reactants to the peak",
        ],
        pros_b: [
          "The net energy difference of the reaction",
          "Reactant energy minus product energy",
          "Negative for exothermic, positive for endothermic",
          "Unaffected by a catalyst",
          "Measured from reactants to products",
        ],
        verdict:
          "Activation energy is the barrier height that sets reaction speed; enthalpy change is the overall energy gap between reactants and products. A catalyst lowers the first, not the second.",
        faq: [
          {
            q: "Does a catalyst change the enthalpy change?",
            a: "No. A catalyst only lowers activation energy; the overall enthalpy change stays the same.",
          },
          {
            q: "Which value sets reaction rate?",
            a: "Activation energy, since a lower barrier lets more collisions succeed.",
          },
          {
            q: "How do I read enthalpy change on a graph?",
            a: "It is the vertical gap between the reactant and product energy levels.",
          },
        ],
      },
      fr: {
        title: "Énergie d'activation vs Variation d'enthalpie",
        h1: "Énergie d'activation vs Variation d'enthalpie",
        description:
          "L'énergie d'activation est la barrière de démarrage ; la variation d'enthalpie l'écart net d'énergie. Comparez sur un graphe.",
        intro:
          "Les diagrammes d'énergie montrent deux grandeurs clés. L'une est la colline à gravir, l'autre le changement global d'énergie.",
        pros_a: [
          "L'énergie minimale pour démarrer une réaction",
          "La hauteur de la barrière énergétique",
          "Abaissée par l'ajout d'un catalyseur",
          "Détermine la vitesse de réaction",
          "Mesurée des réactifs jusqu'au sommet",
        ],
        pros_b: [
          "L'écart net d'énergie de la réaction",
          "Énergie des réactifs moins celle des produits",
          "Négative si exothermique, positive si endothermique",
          "Non affectée par un catalyseur",
          "Mesurée des réactifs aux produits",
        ],
        verdict:
          "L'énergie d'activation est la hauteur de barrière fixant la vitesse ; la variation d'enthalpie l'écart global entre réactifs et produits. Un catalyseur abaisse la première, pas la seconde.",
        faq: [
          {
            q: "Un catalyseur change-t-il la variation d'enthalpie ?",
            a: "Non. Un catalyseur n'abaisse que l'énergie d'activation ; la variation d'enthalpie globale reste identique.",
          },
          {
            q: "Quelle valeur fixe la vitesse de réaction ?",
            a: "L'énergie d'activation, car une barrière plus basse permet à plus de collisions de réussir.",
          },
          {
            q: "Comment lire la variation d'enthalpie sur un graphe ?",
            a: "C'est l'écart vertical entre les niveaux d'énergie des réactifs et des produits.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "conjugate-acid-vs-conjugate-base",
    a: "Conjugate acid",
    b: "Conjugate base",
    category: "chemistry",
    emoji_a: "➕",
    emoji_b: "➖",
    content: {
      en: {
        title: "Conjugate Acid vs Conjugate Base Compared",
        h1: "Conjugate Acid vs Conjugate Base Explained",
        description:
          "A conjugate acid forms when a base gains a proton; a conjugate base forms when an acid loses one. Compare these pairs.",
        intro:
          "In Brønsted-Lowry theory, acids and bases come in conjugate pairs that differ by exactly one proton.",
        pros_a: [
          "Forms when a base accepts a proton",
          "Has one more H+ than its base",
          "Can donate that proton back",
          "Stronger base gives a weaker conjugate acid",
          "Example: NH4+ from ammonia",
        ],
        pros_b: [
          "Forms when an acid loses a proton",
          "Has one fewer H+ than its acid",
          "Can accept a proton back",
          "Stronger acid gives a weaker conjugate base",
          "Example: Cl- from hydrochloric acid",
        ],
        verdict:
          "A conjugate acid has one extra proton; a conjugate base has one fewer. Every acid-base reaction produces a conjugate pair, with a stronger species yielding a weaker partner.",
        faq: [
          {
            q: "What differs within a conjugate pair?",
            a: "Exactly one proton: the conjugate acid has one more H+ than the conjugate base.",
          },
          {
            q: "Why does a strong acid give a weak conjugate base?",
            a: "Because the strong acid gives up its proton readily, its conjugate base holds protons poorly.",
          },
          {
            q: "Does every acid-base reaction form conjugates?",
            a: "Yes. Brønsted-Lowry reactions always produce a conjugate acid and a conjugate base.",
          },
        ],
      },
      fr: {
        title: "Acide conjugué vs Base conjuguée comparés",
        h1: "Acide conjugué vs Base conjuguée expliqués",
        description:
          "Un acide conjugué se forme quand une base gagne un proton ; une base conjuguée quand un acide en perd un. Comparez ces paires.",
        intro:
          "Dans la théorie de Brønsted-Lowry, acides et bases vont par paires conjuguées différant d'exactement un proton.",
        pros_a: [
          "Se forme quand une base accepte un proton",
          "A un H+ de plus que sa base",
          "Peut redonner ce proton",
          "Une base plus forte donne un acide conjugué plus faible",
          "Exemple : NH4+ issu de l'ammoniac",
        ],
        pros_b: [
          "Se forme quand un acide perd un proton",
          "A un H+ de moins que son acide",
          "Peut réaccepter un proton",
          "Un acide plus fort donne une base conjuguée plus faible",
          "Exemple : Cl- issu de l'acide chlorhydrique",
        ],
        verdict:
          "Un acide conjugué a un proton de plus ; une base conjuguée un de moins. Toute réaction acido-basique produit une paire conjuguée, l'espèce plus forte donnant un partenaire plus faible.",
        faq: [
          {
            q: "Qu'est-ce qui diffère dans une paire conjuguée ?",
            a: "Exactement un proton : l'acide conjugué a un H+ de plus que la base conjuguée.",
          },
          {
            q: "Pourquoi un acide fort donne-t-il une base conjuguée faible ?",
            a: "Comme l'acide fort cède facilement son proton, sa base conjuguée retient mal les protons.",
          },
          {
            q: "Toute réaction acido-basique forme-t-elle des conjugués ?",
            a: "Oui. Les réactions de Brønsted-Lowry produisent toujours un acide conjugué et une base conjuguée.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "nitrogen-vs-oxygen",
    a: "Nitrogen",
    b: "Oxygen",
    category: "chemistry",
    emoji_a: "💨",
    emoji_b: "🫁",
    content: {
      en: {
        title: "Nitrogen vs Oxygen: Air's Main Gases",
        h1: "Nitrogen vs Oxygen Explained",
        description:
          "Nitrogen is an inert diatomic gas; oxygen is a reactive one essential for life. Compare the two main components of air.",
        intro:
          "Nitrogen and oxygen make up almost all of the air we breathe, yet their chemical behavior is strikingly different.",
        pros_a: [
          "Symbol N, makes up about 78% of air",
          "Very stable due to a strong triple bond",
          "Largely unreactive at room temperature",
          "Essential for proteins and DNA",
          "Used to make ammonia and fertilizers",
        ],
        pros_b: [
          "Symbol O, makes up about 21% of air",
          "Highly reactive, supports combustion",
          "Needed for respiration in living things",
          "Forms oxides with most elements",
          "Has the allotrope ozone, O3",
        ],
        verdict:
          "Nitrogen is abundant and inert thanks to its triple bond, while oxygen is reactive and life-sustaining. Together they form the bulk of the atmosphere.",
        faq: [
          {
            q: "Why is nitrogen so unreactive?",
            a: "Its molecules are held by a very strong triple bond that is hard to break.",
          },
          {
            q: "Which gas supports burning?",
            a: "Oxygen supports combustion; nitrogen does not and can even dilute fire.",
          },
          {
            q: "Which is more abundant in air?",
            a: "Nitrogen, at roughly 78%, far outweighs oxygen at about 21%.",
          },
        ],
      },
      fr: {
        title: "Azote vs Oxygène : les gaz de l'air",
        h1: "Azote vs Oxygène expliqués",
        description:
          "L'azote est un gaz diatomique inerte ; l'oxygène un gaz réactif essentiel à la vie. Comparez les deux composants de l'air.",
        intro:
          "L'azote et l'oxygène composent la quasi-totalité de l'air respiré, pourtant leur comportement chimique est très différent.",
        pros_a: [
          "Symbole N, environ 78% de l'air",
          "Très stable grâce à une triple liaison forte",
          "Peu réactif à température ambiante",
          "Essentiel aux protéines et à l'ADN",
          "Sert à produire ammoniac et engrais",
        ],
        pros_b: [
          "Symbole O, environ 21% de l'air",
          "Très réactif, entretient la combustion",
          "Nécessaire à la respiration du vivant",
          "Forme des oxydes avec la plupart des éléments",
          "Possède l'allotrope ozone, O3",
        ],
        verdict:
          "L'azote est abondant et inerte grâce à sa triple liaison, l'oxygène réactif et vital. Ensemble ils forment l'essentiel de l'atmosphère.",
        faq: [
          {
            q: "Pourquoi l'azote est-il si peu réactif ?",
            a: "Ses molécules sont tenues par une triple liaison très forte, difficile à rompre.",
          },
          {
            q: "Quel gaz entretient la combustion ?",
            a: "L'oxygène entretient la combustion ; l'azote non et peut même diluer le feu.",
          },
          {
            q: "Lequel est le plus abondant dans l'air ?",
            a: "L'azote, à environ 78%, dépasse largement l'oxygène à environ 21%.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "exo-vs-endo-respiration-vs-photosynthesis",
    a: "Respiration",
    b: "Photosynthesis",
    category: "chemistry",
    emoji_a: "🫁",
    emoji_b: "🌿",
    content: {
      en: {
        title: "Respiration vs Photosynthesis Compared",
        h1: "Respiration vs Photosynthesis Explained",
        description:
          "Respiration releases energy by breaking down glucose; photosynthesis stores energy by making it. Compare these processes.",
        intro:
          "Respiration and photosynthesis are opposite biochemical processes that cycle carbon and energy through living things.",
        pros_a: [
          "Breaks down glucose to release energy",
          "An exothermic process",
          "Uses oxygen, releases carbon dioxide",
          "Occurs in all living cells",
          "Reactants: glucose and oxygen",
        ],
        pros_b: [
          "Builds glucose and stores energy",
          "An endothermic process needing light",
          "Uses carbon dioxide, releases oxygen",
          "Occurs in plants, algae and some bacteria",
          "Reactants: carbon dioxide and water",
        ],
        verdict:
          "Respiration releases stored chemical energy while photosynthesis captures light energy as glucose. They are chemical opposites that keep the carbon and oxygen cycles turning.",
        faq: [
          {
            q: "Which process releases oxygen?",
            a: "Photosynthesis releases oxygen, while respiration consumes it.",
          },
          {
            q: "Is respiration exothermic?",
            a: "Yes. Respiration releases energy, making it an exothermic process.",
          },
          {
            q: "Do plants do both?",
            a: "Yes. Plants photosynthesize in light and respire continuously to use energy.",
          },
        ],
      },
      fr: {
        title: "Respiration vs Photosynthèse comparées",
        h1: "Respiration vs Photosynthèse expliquées",
        description:
          "La respiration libère l'énergie en dégradant le glucose ; la photosynthèse la stocke en le fabriquant. Comparez ces processus.",
        intro:
          "La respiration et la photosynthèse sont des processus biochimiques opposés qui font circuler carbone et énergie dans le vivant.",
        pros_a: [
          "Dégrade le glucose pour libérer de l'énergie",
          "Un processus exothermique",
          "Utilise l'oxygène, libère du dioxyde de carbone",
          "Se produit dans toutes les cellules vivantes",
          "Réactifs : glucose et oxygène",
        ],
        pros_b: [
          "Fabrique du glucose et stocke l'énergie",
          "Un processus endothermique nécessitant la lumière",
          "Utilise le dioxyde de carbone, libère l'oxygène",
          "Se produit chez les plantes, algues et bactéries",
          "Réactifs : dioxyde de carbone et eau",
        ],
        verdict:
          "La respiration libère l'énergie chimique stockée tandis que la photosynthèse capte l'énergie lumineuse en glucose. Ce sont des opposées qui font tourner les cycles du carbone.",
        faq: [
          {
            q: "Quel processus libère de l'oxygène ?",
            a: "La photosynthèse libère de l'oxygène, tandis que la respiration en consomme.",
          },
          {
            q: "La respiration est-elle exothermique ?",
            a: "Oui. La respiration libère de l'énergie, ce qui en fait un processus exothermique.",
          },
          {
            q: "Les plantes font-elles les deux ?",
            a: "Oui. Les plantes photosynthétisent à la lumière et respirent en continu pour utiliser l'énergie.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "ionization-energy-vs-atomic-radius",
    a: "Ionization energy",
    b: "Atomic radius",
    category: "chemistry",
    emoji_a: "⚡",
    emoji_b: "📐",
    content: {
      en: {
        title: "Ionization Energy vs Atomic Radius",
        h1: "Ionization Energy vs Atomic Radius Explained",
        description:
          "Ionization energy is the energy to remove an electron; atomic radius is an atom's size. Compare these periodic trends.",
        intro:
          "Two important periodic trends move in opposite directions across the table, and they are closely related.",
        pros_a: [
          "Energy needed to remove an outer electron",
          "Measured in kJ/mol",
          "Increases across a period",
          "Decreases down a group",
          "Higher for atoms holding electrons tightly",
        ],
        pros_b: [
          "The size of an atom",
          "Measured in picometers",
          "Decreases across a period",
          "Increases down a group",
          "Larger when electrons are farther out",
        ],
        verdict:
          "Ionization energy and atomic radius trend oppositely: as atoms get smaller, electrons are held tighter and harder to remove. They are two sides of the same nuclear pull.",
        faq: [
          {
            q: "How are the two trends related?",
            a: "Smaller atoms hold electrons more tightly, so a smaller radius means a higher ionization energy.",
          },
          {
            q: "Why does atomic radius shrink across a period?",
            a: "Increasing nuclear charge pulls the electrons in closer without adding a new shell.",
          },
          {
            q: "Where is ionization energy highest?",
            a: "Toward the top right of the periodic table, where atoms are small and hold electrons tightly.",
          },
        ],
      },
      fr: {
        title: "Énergie d'ionisation vs Rayon atomique",
        h1: "Énergie d'ionisation vs Rayon atomique",
        description:
          "L'énergie d'ionisation est l'énergie pour retirer un électron ; le rayon atomique la taille d'un atome. Comparez ces tendances.",
        intro:
          "Deux tendances périodiques importantes évoluent en sens opposés dans le tableau, et elles sont étroitement liées.",
        pros_a: [
          "Énergie nécessaire pour retirer un électron externe",
          "Mesurée en kJ/mol",
          "Augmente le long d'une période",
          "Diminue le long d'un groupe",
          "Plus élevée pour les atomes retenant fort les électrons",
        ],
        pros_b: [
          "La taille d'un atome",
          "Mesuré en picomètres",
          "Diminue le long d'une période",
          "Augmente le long d'un groupe",
          "Plus grand quand les électrons sont plus éloignés",
        ],
        verdict:
          "L'énergie d'ionisation et le rayon atomique évoluent à l'inverse : quand les atomes rétrécissent, les électrons sont plus retenus et plus durs à retirer.",
        faq: [
          {
            q: "Comment les deux tendances sont-elles liées ?",
            a: "Les atomes plus petits retiennent plus fort les électrons, un rayon plus petit donne une ionisation plus élevée.",
          },
          {
            q: "Pourquoi le rayon atomique diminue-t-il sur une période ?",
            a: "La charge nucléaire croissante attire les électrons plus près sans ajouter de couche.",
          },
          {
            q: "Où l'énergie d'ionisation est-elle la plus élevée ?",
            a: "En haut à droite du tableau périodique, où les atomes sont petits et retiennent fort les électrons.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "exo-vs-endo-acid-vs-salt",
    a: "Acid",
    b: "Salt",
    category: "chemistry",
    emoji_a: "🧪",
    emoji_b: "🧂",
    content: {
      en: {
        title: "Acid vs Salt: From Reactant to Product",
        h1: "Acid vs Salt Explained",
        description:
          "An acid donates protons; a salt is the ionic product of neutralizing an acid. Compare these related substances.",
        intro:
          "Acids and salts are connected: react an acid with a base and one of the products is a salt.",
        pros_a: [
          "Donates H+ ions in solution",
          "Has a pH below 7",
          "Sour taste, corrosive to metals",
          "A reactant in neutralization",
          "Examples: HCl, sulfuric acid, nitric acid",
        ],
        pros_b: [
          "An ionic compound of a cation and anion",
          "Usually has a neutral pH",
          "Formed when an acid is neutralized",
          "A product of acid-base reactions",
          "Examples: sodium chloride, potassium nitrate",
        ],
        verdict:
          "An acid is a proton-donating reactant; a salt is the neutral ionic product that forms when an acid reacts with a base. Acids start the reaction, salts finish it.",
        faq: [
          {
            q: "How is a salt formed from an acid?",
            a: "When an acid reacts with a base, the acid's anion joins the base's cation to form a salt.",
          },
          {
            q: "Are all salts neutral?",
            a: "Most are near neutral, but some salts are slightly acidic or basic depending on their ions.",
          },
          {
            q: "What is the other product with a salt?",
            a: "Neutralizing an acid with a base usually also produces water.",
          },
        ],
      },
      fr: {
        title: "Acide vs Sel : du réactif au produit",
        h1: "Acide vs Sel expliqués",
        description:
          "Un acide cède des protons ; un sel est le produit ionique de la neutralisation d'un acide. Comparez ces substances liées.",
        intro:
          "Les acides et les sels sont liés : faites réagir un acide avec une base et l'un des produits est un sel.",
        pros_a: [
          "Cède des ions H+ en solution",
          "A un pH inférieur à 7",
          "Goût aigre, corrosif pour les métaux",
          "Un réactif dans la neutralisation",
          "Exemples : HCl, acide sulfurique, acide nitrique",
        ],
        pros_b: [
          "Un composé ionique d'un cation et d'un anion",
          "A généralement un pH neutre",
          "Formé quand un acide est neutralisé",
          "Un produit des réactions acido-basiques",
          "Exemples : chlorure de sodium, nitrate de potassium",
        ],
        verdict:
          "Un acide est un réactif donneur de protons ; un sel le produit ionique neutre formé quand un acide réagit avec une base. Les acides lancent la réaction, les sels la concluent.",
        faq: [
          {
            q: "Comment un sel se forme-t-il à partir d'un acide ?",
            a: "Quand un acide réagit avec une base, l'anion de l'acide s'unit au cation de la base pour former un sel.",
          },
          {
            q: "Tous les sels sont-ils neutres ?",
            a: "La plupart sont proches du neutre, mais certains sels sont légèrement acides ou basiques selon leurs ions.",
          },
          {
            q: "Quel est l'autre produit avec un sel ?",
            a: "Neutraliser un acide avec une base produit généralement aussi de l'eau.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "exo-vs-endo-hydrate-vs-anhydrate",
    a: "Hydrate",
    b: "Anhydrous",
    category: "chemistry",
    emoji_a: "💧",
    emoji_b: "🏜️",
    content: {
      en: {
        title: "Hydrate vs Anhydrous Compound Compared",
        h1: "Hydrate vs Anhydrous Explained",
        description:
          "A hydrate contains water in its crystal structure; an anhydrous form has none. Compare these two states of a compound.",
        intro:
          "Many salts can hold water within their crystals. Whether water is present makes a compound a hydrate or anhydrous.",
        pros_a: [
          "Contains water within the crystal lattice",
          "Has a fixed water-to-formula ratio",
          "Written with a dot, like CuSO4·5H2O",
          "Often more colorful, like blue copper sulfate",
          "Loses water when heated",
        ],
        pros_b: [
          "Contains no water of crystallization",
          "Formed by heating a hydrate",
          "Often a different color from the hydrate",
          "Can absorb water and become a hydrate again",
          "Example: white anhydrous copper sulfate",
        ],
        verdict:
          "A hydrate carries a fixed amount of water locked in its crystals, while an anhydrous compound has none. Heating drives water off; exposure to moisture can bring it back.",
        faq: [
          {
            q: "How do I make an anhydrous compound?",
            a: "Heat the hydrate to drive off the water of crystallization.",
          },
          {
            q: "Why does copper sulfate change color?",
            a: "Hydrated copper sulfate is blue, while the anhydrous form is white.",
          },
          {
            q: "Is the water amount fixed in a hydrate?",
            a: "Yes. Each hydrate has a definite ratio of water molecules per formula unit.",
          },
        ],
      },
      fr: {
        title: "Hydrate vs Composé anhydre comparés",
        h1: "Hydrate vs Anhydre expliqués",
        description:
          "Un hydrate contient de l'eau dans sa structure cristalline ; une forme anhydre n'en a pas. Comparez ces deux états.",
        intro:
          "De nombreux sels peuvent retenir de l'eau dans leurs cristaux. La présence d'eau fait d'un composé un hydrate ou un anhydre.",
        pros_a: [
          "Contient de l'eau dans le réseau cristallin",
          "A un rapport eau-formule fixe",
          "Noté avec un point, comme CuSO4·5H2O",
          "Souvent plus coloré, comme le sulfate de cuivre bleu",
          "Perd son eau au chauffage",
        ],
        pros_b: [
          "Ne contient aucune eau de cristallisation",
          "Formé en chauffant un hydrate",
          "Souvent d'une couleur différente de l'hydrate",
          "Peut absorber de l'eau et redevenir un hydrate",
          "Exemple : sulfate de cuivre anhydre blanc",
        ],
        verdict:
          "Un hydrate porte une quantité fixe d'eau enfermée dans ses cristaux, un composé anhydre n'en a aucune. Chauffer chasse l'eau ; l'humidité peut la ramener.",
        faq: [
          {
            q: "Comment obtenir un composé anhydre ?",
            a: "Chauffez l'hydrate pour chasser l'eau de cristallisation.",
          },
          {
            q: "Pourquoi le sulfate de cuivre change-t-il de couleur ?",
            a: "Le sulfate de cuivre hydraté est bleu, tandis que la forme anhydre est blanche.",
          },
          {
            q: "La quantité d'eau est-elle fixe dans un hydrate ?",
            a: "Oui. Chaque hydrate a un rapport défini de molécules d'eau par unité de formule.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "exo-vs-endo-oxidizing-vs-reducing-agent",
    a: "Oxidizing agent",
    b: "Reducing agent",
    category: "chemistry",
    emoji_a: "🔥",
    emoji_b: "🛡️",
    content: {
      en: {
        title: "Oxidizing Agent vs Reducing Agent Compared",
        h1: "Oxidizing Agent vs Reducing Agent Explained",
        description:
          "An oxidizing agent gains electrons and is reduced; a reducing agent loses electrons and is oxidized. Compare both.",
        intro:
          "Every redox reaction has an oxidizing agent and a reducing agent. They cause change in each other while undergoing the opposite themselves.",
        pros_a: [
          "Causes oxidation in another species",
          "Accepts electrons itself",
          "Is reduced during the reaction",
          "Often electron-hungry, like oxygen or halogens",
          "Examples: oxygen, chlorine, potassium permanganate",
        ],
        pros_b: [
          "Causes reduction in another species",
          "Donates electrons itself",
          "Is oxidized during the reaction",
          "Often metals or hydrogen-rich species",
          "Examples: hydrogen, carbon, reactive metals",
        ],
        verdict:
          "An oxidizing agent grabs electrons and gets reduced; a reducing agent gives electrons and gets oxidized. They are partners that always appear together in redox reactions.",
        faq: [
          {
            q: "What happens to an oxidizing agent?",
            a: "It accepts electrons and is itself reduced during the reaction.",
          },
          {
            q: "How do I spot a reducing agent?",
            a: "It donates electrons and is oxidized; reactive metals are common examples.",
          },
          {
            q: "Can a reaction have just one of them?",
            a: "No. Redox reactions always pair an oxidizing agent with a reducing agent.",
          },
        ],
      },
      fr: {
        title: "Oxydant vs Réducteur comparés",
        h1: "Oxydant vs Réducteur expliqués",
        description:
          "Un oxydant gagne des électrons et est réduit ; un réducteur perd des électrons et est oxydé. Comparez les deux.",
        intro:
          "Toute réaction rédox a un oxydant et un réducteur. Ils provoquent un changement l'un sur l'autre en subissant eux-mêmes l'inverse.",
        pros_a: [
          "Provoque l'oxydation d'une autre espèce",
          "Accepte lui-même des électrons",
          "Est réduit pendant la réaction",
          "Souvent avide d'électrons, comme l'oxygène ou les halogènes",
          "Exemples : oxygène, chlore, permanganate de potassium",
        ],
        pros_b: [
          "Provoque la réduction d'une autre espèce",
          "Donne lui-même des électrons",
          "Est oxydé pendant la réaction",
          "Souvent des métaux ou espèces riches en hydrogène",
          "Exemples : hydrogène, carbone, métaux réactifs",
        ],
        verdict:
          "Un oxydant capte des électrons et se fait réduire ; un réducteur en donne et se fait oxyder. Ce sont des partenaires qui apparaissent toujours ensemble en rédox.",
        faq: [
          {
            q: "Qu'arrive-t-il à un oxydant ?",
            a: "Il accepte des électrons et se fait lui-même réduire pendant la réaction.",
          },
          {
            q: "Comment repérer un réducteur ?",
            a: "Il donne des électrons et se fait oxyder ; les métaux réactifs en sont des exemples courants.",
          },
          {
            q: "Une réaction peut-elle n'en avoir qu'un ?",
            a: "Non. Les réactions rédox associent toujours un oxydant à un réducteur.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "exo-vs-endo-electrolyte-vs-nonelectrolyte",
    a: "Electrolyte",
    b: "Nonelectrolyte",
    category: "chemistry",
    emoji_a: "⚡",
    emoji_b: "🚫",
    content: {
      en: {
        title: "Electrolyte vs Nonelectrolyte Compared",
        h1: "Electrolyte vs Nonelectrolyte Explained",
        description:
          "An electrolyte conducts electricity when dissolved; a nonelectrolyte does not. Compare these two solution types.",
        intro:
          "Whether a dissolved substance conducts electricity depends on if it forms ions. That decides electrolyte versus nonelectrolyte.",
        pros_a: [
          "Conducts electricity when dissolved or molten",
          "Breaks into free-moving ions in water",
          "Includes ionic compounds and strong acids",
          "Strong or weak depending on ionization",
          "Examples: salt, hydrochloric acid",
        ],
        pros_b: [
          "Does not conduct electricity in solution",
          "Dissolves as neutral molecules, not ions",
          "Usually covalent molecular compounds",
          "No free charges to carry current",
          "Examples: sugar, ethanol, glucose",
        ],
        verdict:
          "Electrolytes release ions and conduct electricity in solution, while nonelectrolytes dissolve as neutral molecules and do not. Ion formation is the deciding factor.",
        faq: [
          {
            q: "Why does salt water conduct electricity?",
            a: "Salt is an electrolyte that splits into mobile ions able to carry current.",
          },
          {
            q: "Is sugar water an electrolyte?",
            a: "No. Sugar dissolves as neutral molecules, so sugar water is a nonelectrolyte.",
          },
          {
            q: "What is a weak electrolyte?",
            a: "A substance that only partially ionizes, so it conducts electricity weakly.",
          },
        ],
      },
      fr: {
        title: "Électrolyte vs Non-électrolyte comparés",
        h1: "Électrolyte vs Non-électrolyte expliqués",
        description:
          "Un électrolyte conduit l'électricité une fois dissous ; un non-électrolyte non. Comparez ces deux types de solutions.",
        intro:
          "Qu'une substance dissoute conduise l'électricité dépend de la formation d'ions. Cela décide électrolyte ou non-électrolyte.",
        pros_a: [
          "Conduit l'électricité dissous ou fondu",
          "Se sépare en ions mobiles dans l'eau",
          "Inclut les composés ioniques et acides forts",
          "Fort ou faible selon l'ionisation",
          "Exemples : sel, acide chlorhydrique",
        ],
        pros_b: [
          "Ne conduit pas l'électricité en solution",
          "Se dissout en molécules neutres, pas en ions",
          "Généralement des composés covalents moléculaires",
          "Aucune charge libre pour transporter le courant",
          "Exemples : sucre, éthanol, glucose",
        ],
        verdict:
          "Les électrolytes libèrent des ions et conduisent l'électricité en solution, les non-électrolytes se dissolvent en molécules neutres et non. La formation d'ions est décisive.",
        faq: [
          {
            q: "Pourquoi l'eau salée conduit-elle l'électricité ?",
            a: "Le sel est un électrolyte qui se sépare en ions mobiles capables de transporter le courant.",
          },
          {
            q: "L'eau sucrée est-elle un électrolyte ?",
            a: "Non. Le sucre se dissout en molécules neutres, l'eau sucrée est donc un non-électrolyte.",
          },
          {
            q: "Qu'est-ce qu'un électrolyte faible ?",
            a: "Une substance qui ne s'ionise que partiellement, conduisant donc faiblement l'électricité.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "exo-vs-endo-evaporation-vs-boiling",
    a: "Evaporation",
    b: "Boiling",
    category: "chemistry",
    emoji_a: "☀️",
    emoji_b: "🫧",
    content: {
      en: {
        title: "Evaporation vs Boiling: Liquid to Gas",
        h1: "Evaporation vs Boiling Explained",
        description:
          "Evaporation happens at the surface at any temperature; boiling happens throughout at the boiling point. Compare both.",
        intro:
          "Both turn liquid into gas, but they differ in where they occur and what temperature they need.",
        pros_a: [
          "Occurs only at the liquid surface",
          "Happens at any temperature",
          "A slow, gradual process",
          "Causes cooling of the remaining liquid",
          "Example: a puddle drying up",
        ],
        pros_b: [
          "Occurs throughout the whole liquid",
          "Happens only at the boiling point",
          "A fast process with bubble formation",
          "Temperature stays constant while boiling",
          "Example: water bubbling in a kettle",
        ],
        verdict:
          "Evaporation is a slow surface process at any temperature, while boiling is a rapid bulk process fixed at the boiling point. Both convert liquid to vapor.",
        faq: [
          {
            q: "Can a liquid evaporate below its boiling point?",
            a: "Yes. Evaporation happens at any temperature, only at the surface.",
          },
          {
            q: "Why do bubbles form during boiling?",
            a: "Vapor forms throughout the liquid, creating bubbles that rise to the surface.",
          },
          {
            q: "Does temperature rise while boiling?",
            a: "No. The temperature stays at the boiling point until all the liquid has vaporized.",
          },
        ],
      },
      fr: {
        title: "Évaporation vs Ébullition : liquide à gaz",
        h1: "Évaporation vs Ébullition expliquées",
        description:
          "L'évaporation a lieu en surface à toute température ; l'ébullition partout au point d'ébullition. Comparez les deux.",
        intro:
          "Les deux transforment le liquide en gaz, mais elles diffèrent par l'endroit où elles se produisent et la température nécessaire.",
        pros_a: [
          "Se produit uniquement à la surface du liquide",
          "A lieu à n'importe quelle température",
          "Un processus lent et progressif",
          "Refroidit le liquide restant",
          "Exemple : une flaque qui sèche",
        ],
        pros_b: [
          "Se produit dans tout le liquide",
          "A lieu seulement au point d'ébullition",
          "Un processus rapide avec formation de bulles",
          "La température reste constante pendant l'ébullition",
          "Exemple : l'eau qui bout dans une bouilloire",
        ],
        verdict:
          "L'évaporation est un processus de surface lent à toute température, l'ébullition un processus rapide dans toute la masse fixé au point d'ébullition. Les deux convertissent liquide en vapeur.",
        faq: [
          {
            q: "Un liquide peut-il s'évaporer sous son point d'ébullition ?",
            a: "Oui. L'évaporation a lieu à toute température, uniquement à la surface.",
          },
          {
            q: "Pourquoi des bulles se forment-elles à l'ébullition ?",
            a: "De la vapeur se forme dans tout le liquide, créant des bulles qui montent à la surface.",
          },
          {
            q: "La température monte-t-elle pendant l'ébullition ?",
            a: "Non. La température reste au point d'ébullition jusqu'à ce que tout le liquide soit vaporisé.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
];
