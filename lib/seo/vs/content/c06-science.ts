import type { VsPair } from "../types";

export const pairs: VsPair[] = [
  {
    slug: "mitosis-vs-meiosis",
    a: "Mitosis",
    b: "Meiosis",
    category: "science",
    emoji_a: "🧬",
    emoji_b: "🧬",
    content: {
      en: {
        title: "Mitosis vs Meiosis: Cell Division Explained",
        h1: "Mitosis vs Meiosis: How Cells Divide",
        description:
          "Mitosis makes two identical body cells; meiosis makes four genetically varied sex cells. Compare the two cell-division processes side by side.",
        intro:
          "Both are forms of cell division, but they serve very different biological roles. Mitosis keeps an organism growing and healing, while meiosis makes reproduction and genetic variation possible.",
        pros_a: [
          "Produces 2 daughter cells genetically identical to the parent",
          "Involves one round of division",
          "Used for growth, tissue repair and asexual reproduction",
          "Daughter cells are diploid (full chromosome set)",
          "No crossing over, so no new gene combinations",
        ],
        pros_b: [
          "Produces 4 daughter cells, each genetically unique",
          "Involves two consecutive rounds of division",
          "Used to form gametes (sperm and egg cells)",
          "Daughter cells are haploid (half the chromosome set)",
          "Crossing over and independent assortment create variation",
        ],
        verdict:
          "Mitosis is the everyday cell division that builds and maintains the body. Meiosis happens only in reproductive organs to make gametes. Together they explain both how you grow and how traits pass to offspring.",
        faq: [
          {
            q: "Which process creates genetic diversity?",
            a: "Meiosis, through crossing over and the independent assortment of chromosomes, producing gametes that are all genetically different.",
          },
          {
            q: "How many divisions occur in each?",
            a: "Mitosis has one division producing two cells; meiosis has two divisions producing four cells.",
          },
          {
            q: "Are the resulting cells diploid or haploid?",
            a: "Mitosis yields diploid cells with the full chromosome number; meiosis yields haploid cells with half.",
          },
        ],
      },
      fr: {
        title: "Mitose vs Méiose : la division cellulaire",
        h1: "Mitose vs Méiose : comment les cellules se divisent",
        description:
          "La mitose crée deux cellules corporelles identiques ; la méiose crée quatre cellules sexuelles variées. Comparez les deux divisions cellulaires.",
        intro:
          "Ce sont deux formes de division cellulaire, mais leurs rôles diffèrent. La mitose assure la croissance et la réparation, la méiose rend possibles la reproduction et la diversité génétique.",
        pros_a: [
          "Produit 2 cellules filles identiques à la cellule mère",
          "Comporte une seule division",
          "Sert à la croissance, la réparation et la reproduction asexuée",
          "Les cellules filles sont diploïdes (jeu complet de chromosomes)",
          "Pas de crossing-over, donc aucune nouvelle combinaison de gènes",
        ],
        pros_b: [
          "Produit 4 cellules filles toutes génétiquement uniques",
          "Comporte deux divisions successives",
          "Sert à former les gamètes (spermatozoïdes et ovules)",
          "Les cellules filles sont haploïdes (moitié des chromosomes)",
          "Le crossing-over et le brassage créent de la variation",
        ],
        verdict:
          "La mitose est la division quotidienne qui construit et entretient le corps. La méiose n'a lieu que dans les organes reproducteurs pour fabriquer les gamètes. Ensemble elles expliquent la croissance et l'hérédité.",
        faq: [
          {
            q: "Quel processus crée la diversité génétique ?",
            a: "La méiose, grâce au crossing-over et au brassage indépendant des chromosomes, produit des gamètes tous différents.",
          },
          {
            q: "Combien de divisions dans chacune ?",
            a: "La mitose a une division et donne deux cellules ; la méiose a deux divisions et donne quatre cellules.",
          },
          {
            q: "Les cellules obtenues sont-elles diploïdes ou haploïdes ?",
            a: "La mitose donne des cellules diploïdes au jeu complet de chromosomes ; la méiose des cellules haploïdes à moitié.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "dna-vs-rna",
    a: "DNA",
    b: "RNA",
    category: "science",
    emoji_a: "🧬",
    emoji_b: "🧬",
    content: {
      en: {
        title: "DNA vs RNA: The Two Nucleic Acids",
        h1: "DNA vs RNA: Structure and Function",
        description:
          "DNA stores genetic information long-term; RNA carries and translates it into proteins. Compare structure, sugar, bases and roles.",
        intro:
          "DNA and RNA are the two nucleic acids that run the chemistry of life. DNA is the master archive, while RNA is the working copy that gets things done.",
        pros_a: [
          "Stores hereditary information stably for generations",
          "Double-stranded helix, very stable structure",
          "Contains deoxyribose sugar (lacks one oxygen)",
          "Uses bases A, T, G and C",
          "Stays mostly in the cell nucleus",
        ],
        pros_b: [
          "Carries and translates genetic instructions into proteins",
          "Usually single-stranded and more flexible",
          "Contains ribose sugar (has an extra oxygen)",
          "Uses bases A, U, G and C (uracil instead of thymine)",
          "Found throughout the cell, including the cytoplasm",
        ],
        verdict:
          "DNA is the secure library of genetic data; RNA is the messenger and worker that reads and uses it. Life needs both — DNA for permanence, RNA for action.",
        faq: [
          {
            q: "What base differs between DNA and RNA?",
            a: "DNA uses thymine (T) while RNA uses uracil (U) in its place; both share adenine, guanine and cytosine.",
          },
          {
            q: "Why is DNA more stable than RNA?",
            a: "DNA's double helix and deoxyribose sugar make it chemically resistant, ideal for long-term storage.",
          },
          {
            q: "What are the main types of RNA?",
            a: "Messenger RNA (mRNA), transfer RNA (tRNA) and ribosomal RNA (rRNA) work together in protein synthesis.",
          },
        ],
      },
      fr: {
        title: "ADN vs ARN : les deux acides nucléiques",
        h1: "ADN vs ARN : structure et fonction",
        description:
          "L'ADN stocke l'information génétique ; l'ARN la transporte et la traduit en protéines. Comparez structure, sucre, bases et rôles.",
        intro:
          "L'ADN et l'ARN sont les deux acides nucléiques qui pilotent la chimie du vivant. L'ADN est l'archive, l'ARN la copie de travail qui agit.",
        pros_a: [
          "Stocke l'information héréditaire de façon stable",
          "Double hélice, structure très stable",
          "Contient le sucre désoxyribose (un oxygène en moins)",
          "Utilise les bases A, T, G et C",
          "Reste surtout dans le noyau de la cellule",
        ],
        pros_b: [
          "Transporte et traduit les instructions en protéines",
          "Généralement simple brin et plus flexible",
          "Contient le sucre ribose (un oxygène en plus)",
          "Utilise A, U, G et C (uracile au lieu de thymine)",
          "Présent dans toute la cellule, dont le cytoplasme",
        ],
        verdict:
          "L'ADN est la bibliothèque sûre des données génétiques ; l'ARN le messager qui les lit et les utilise. La vie a besoin des deux : l'ADN pour durer, l'ARN pour agir.",
        faq: [
          {
            q: "Quelle base diffère entre ADN et ARN ?",
            a: "L'ADN utilise la thymine (T) là où l'ARN utilise l'uracile (U) ; les deux partagent adénine, guanine et cytosine.",
          },
          {
            q: "Pourquoi l'ADN est-il plus stable que l'ARN ?",
            a: "La double hélice et le désoxyribose rendent l'ADN résistant, idéal pour un stockage durable.",
          },
          {
            q: "Quels sont les principaux types d'ARN ?",
            a: "L'ARN messager (ARNm), de transfert (ARNt) et ribosomique (ARNr) collaborent à la synthèse des protéines.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "eukaryote-vs-prokaryote",
    a: "Eukaryote",
    b: "Prokaryote",
    category: "science",
    emoji_a: "🔬",
    emoji_b: "🦠",
    content: {
      en: {
        title: "Eukaryote vs Prokaryote: Cell Types",
        h1: "Eukaryote vs Prokaryote: The Two Cell Types",
        description:
          "Eukaryotes have a nucleus and organelles; prokaryotes do not. Compare the two fundamental cell types and the life they build.",
        intro:
          "Every living thing is built from one of two cell types. Prokaryotes are simple and ancient, while eukaryotes are larger and compartmentalized.",
        pros_a: [
          "Has a true membrane-bound nucleus",
          "Contains organelles like mitochondria and ER",
          "Generally larger (10-100 micrometers)",
          "Includes animals, plants, fungi and protists",
          "DNA is linear and packaged into chromosomes",
        ],
        pros_b: [
          "No nucleus — DNA floats freely in the cytoplasm",
          "Lacks membrane-bound organelles",
          "Generally smaller (1-10 micrometers)",
          "Includes all bacteria and archaea",
          "DNA is usually a single circular molecule",
        ],
        verdict:
          "Prokaryotes were Earth's first life and still dominate by number. Eukaryotes evolved later with internal compartments that allowed complex multicellular organisms. Both remain essential to the biosphere.",
        faq: [
          {
            q: "Which cell type is older?",
            a: "Prokaryotes appeared first, around 3.5 billion years ago; eukaryotes evolved roughly 2 billion years ago.",
          },
          {
            q: "Do prokaryotes have any organelles?",
            a: "They have ribosomes, but no membrane-bound organelles like mitochondria or a nucleus.",
          },
          {
            q: "What is endosymbiotic theory?",
            a: "It proposes that eukaryotic mitochondria and chloroplasts originated from once free-living prokaryotes.",
          },
        ],
      },
      fr: {
        title: "Eucaryote vs Procaryote : types de cellules",
        h1: "Eucaryote vs Procaryote : les deux types de cellules",
        description:
          "Les eucaryotes ont un noyau et des organites ; les procaryotes non. Comparez les deux types de cellules fondamentaux.",
        intro:
          "Tout être vivant est bâti à partir de l'un de deux types de cellules. Les procaryotes sont simples et anciens, les eucaryotes plus grands et compartimentés.",
        pros_a: [
          "Possède un vrai noyau délimité par une membrane",
          "Contient des organites comme mitochondries et RE",
          "Généralement plus grande (10-100 micromètres)",
          "Inclut animaux, plantes, champignons et protistes",
          "L'ADN est linéaire et organisé en chromosomes",
        ],
        pros_b: [
          "Pas de noyau — l'ADN flotte dans le cytoplasme",
          "Aucun organite délimité par une membrane",
          "Généralement plus petite (1-10 micromètres)",
          "Inclut toutes les bactéries et les archées",
          "L'ADN est souvent une molécule circulaire unique",
        ],
        verdict:
          "Les procaryotes furent la première vie sur Terre et dominent encore en nombre. Les eucaryotes ont évolué plus tard avec des compartiments internes permettant la complexité multicellulaire.",
        faq: [
          {
            q: "Quel type de cellule est le plus ancien ?",
            a: "Les procaryotes apparus il y a 3,5 milliards d'années ; les eucaryotes il y a environ 2 milliards d'années.",
          },
          {
            q: "Les procaryotes ont-ils des organites ?",
            a: "Ils ont des ribosomes, mais aucun organite à membrane comme les mitochondries ou un noyau.",
          },
          {
            q: "Qu'est-ce que la théorie endosymbiotique ?",
            a: "Elle propose que mitochondries et chloroplastes des eucaryotes proviennent de procaryotes jadis libres.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "plant-cell-vs-animal-cell",
    a: "Plant cell",
    b: "Animal cell",
    category: "science",
    emoji_a: "🌱",
    emoji_b: "🐾",
    content: {
      en: {
        title: "Plant Cell vs Animal Cell: Key Differences",
        h1: "Plant Cell vs Animal Cell: Structure Compared",
        description:
          "Plant cells have a cell wall and chloroplasts; animal cells have centrioles and lysosomes. Compare these two eukaryotic cells.",
        intro:
          "Plant and animal cells are both eukaryotic, but their structures reflect very different lifestyles — one makes its own food, the other must find it.",
        pros_a: [
          "Has a rigid cellulose cell wall for support",
          "Contains chloroplasts for photosynthesis",
          "Has one large central vacuole storing water",
          "Usually a fixed, rectangular shape",
          "Stores energy mainly as starch",
        ],
        pros_b: [
          "No cell wall — only a flexible plasma membrane",
          "No chloroplasts; cannot make its own food",
          "Has many small vacuoles, if any",
          "Variable, often rounded shape",
          "Has centrioles and lysosomes for division and digestion",
        ],
        verdict:
          "Plant cells are built for stability and self-feeding through photosynthesis. Animal cells trade rigidity for flexibility and mobility. Both share the core eukaryotic machinery like a nucleus and mitochondria.",
        faq: [
          {
            q: "Do animal cells have a cell wall?",
            a: "No. Animal cells only have a plasma membrane, which makes them flexible and able to change shape.",
          },
          {
            q: "What gives plant cells their green color?",
            a: "Chloroplasts containing the pigment chlorophyll, which absorbs light for photosynthesis.",
          },
          {
            q: "Do plant cells have mitochondria?",
            a: "Yes. Plant cells have mitochondria too — they still need cellular respiration alongside photosynthesis.",
          },
        ],
      },
      fr: {
        title: "Cellule végétale vs animale : différences",
        h1: "Cellule végétale vs Cellule animale comparées",
        description:
          "La cellule végétale a une paroi et des chloroplastes ; l'animale a des centrioles et lysosomes. Comparez ces deux cellules.",
        intro:
          "Les cellules végétale et animale sont eucaryotes, mais leurs structures reflètent des modes de vie opposés : l'une produit sa nourriture, l'autre la cherche.",
        pros_a: [
          "Possède une paroi rigide en cellulose pour le soutien",
          "Contient des chloroplastes pour la photosynthèse",
          "A une grande vacuole centrale stockant l'eau",
          "Forme généralement fixe et rectangulaire",
          "Stocke l'énergie surtout sous forme d'amidon",
        ],
        pros_b: [
          "Pas de paroi — seulement une membrane plasmique souple",
          "Pas de chloroplastes ; ne produit pas sa nourriture",
          "A de nombreuses petites vacuoles, voire aucune",
          "Forme variable, souvent arrondie",
          "Possède centrioles et lysosomes pour division et digestion",
        ],
        verdict:
          "La cellule végétale est conçue pour la stabilité et l'autosuffisance via la photosynthèse. L'animale échange la rigidité contre flexibilité et mobilité. Toutes deux partagent noyau et mitochondries.",
        faq: [
          {
            q: "La cellule animale a-t-elle une paroi ?",
            a: "Non. Elle n'a qu'une membrane plasmique, ce qui la rend souple et capable de changer de forme.",
          },
          {
            q: "Qu'est-ce qui donne sa couleur verte à la cellule végétale ?",
            a: "Les chloroplastes contenant le pigment chlorophylle, qui absorbe la lumière pour la photosynthèse.",
          },
          {
            q: "La cellule végétale a-t-elle des mitochondries ?",
            a: "Oui. Elle a aussi des mitochondries — la respiration cellulaire reste nécessaire en plus de la photosynthèse.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "mass-vs-weight",
    a: "Mass",
    b: "Weight",
    category: "science",
    emoji_a: "⚖️",
    emoji_b: "🪐",
    content: {
      en: {
        title: "Mass vs Weight: What's the Difference?",
        h1: "Mass vs Weight: A Common Physics Mix-up",
        description:
          "Mass is the amount of matter in an object; weight is the gravitational force on it. Compare these two often-confused quantities.",
        intro:
          "People use 'mass' and 'weight' interchangeably, but physics treats them very differently. One never changes; the other depends on where you are.",
        pros_a: [
          "Measures the amount of matter in an object",
          "Stays constant everywhere in the universe",
          "Measured in kilograms (kg)",
          "A scalar quantity with no direction",
          "Determines an object's inertia and resistance to force",
        ],
        pros_b: [
          "Measures the gravitational force on an object",
          "Changes with location and local gravity",
          "Measured in newtons (N)",
          "A vector quantity pointing toward the planet's center",
          "Calculated as mass times gravitational acceleration",
        ],
        verdict:
          "Mass is intrinsic — your mass is the same on Earth and the Moon. Weight is situational — you weigh about one-sixth as much on the Moon. Bathroom scales actually measure weight, then convert.",
        faq: [
          {
            q: "Would you weigh less on the Moon?",
            a: "Yes. The Moon's gravity is about one-sixth of Earth's, so your weight there is roughly one-sixth, though your mass is unchanged.",
          },
          {
            q: "What units measure each?",
            a: "Mass is measured in kilograms; weight, being a force, is measured in newtons.",
          },
          {
            q: "Can an object be weightless but still have mass?",
            a: "Yes. In free fall or orbit an object is weightless, yet it still has the same mass.",
          },
        ],
      },
      fr: {
        title: "Masse vs Poids : quelle différence ?",
        h1: "Masse vs Poids : une confusion fréquente",
        description:
          "La masse est la quantité de matière ; le poids est la force gravitationnelle. Comparez ces deux grandeurs souvent confondues.",
        intro:
          "On emploie « masse » et « poids » comme synonymes, mais la physique les distingue nettement. L'une ne change jamais, l'autre dépend du lieu.",
        pros_a: [
          "Mesure la quantité de matière d'un objet",
          "Reste constante partout dans l'univers",
          "Se mesure en kilogrammes (kg)",
          "Grandeur scalaire, sans direction",
          "Détermine l'inertie et la résistance à la force",
        ],
        pros_b: [
          "Mesure la force gravitationnelle sur un objet",
          "Change selon le lieu et la gravité locale",
          "Se mesure en newtons (N)",
          "Grandeur vectorielle pointant vers le centre de l'astre",
          "Se calcule comme masse fois accélération gravitationnelle",
        ],
        verdict:
          "La masse est intrinsèque : la vôtre est identique sur Terre et sur la Lune. Le poids est situationnel : vous pesez six fois moins sur la Lune. Une balance mesure en fait le poids, puis convertit.",
        faq: [
          {
            q: "Pèse-t-on moins sur la Lune ?",
            a: "Oui. La gravité lunaire vaut un sixième de celle de la Terre ; votre poids y est six fois moindre, mais votre masse inchangée.",
          },
          {
            q: "Quelles unités pour chacune ?",
            a: "La masse se mesure en kilogrammes ; le poids, une force, se mesure en newtons.",
          },
          {
            q: "Un objet peut-il être sans poids mais avoir une masse ?",
            a: "Oui. En chute libre ou en orbite, un objet est sans poids mais conserve sa masse.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "speed-vs-velocity",
    a: "Speed",
    b: "Velocity",
    category: "science",
    emoji_a: "🏃",
    emoji_b: "🧭",
    content: {
      en: {
        title: "Speed vs Velocity: Scalar vs Vector",
        h1: "Speed vs Velocity: Direction Makes the Difference",
        description:
          "Speed tells you how fast; velocity tells you how fast and in what direction. Compare these two motion quantities.",
        intro:
          "Speed and velocity both describe motion, but only one includes direction. That single difference matters enormously in physics.",
        pros_a: [
          "Measures how fast an object moves",
          "A scalar quantity — magnitude only, no direction",
          "Always positive or zero",
          "Average speed equals total distance over total time",
          "Used in everyday descriptions of motion",
        ],
        pros_b: [
          "Measures speed together with direction of motion",
          "A vector quantity — has both magnitude and direction",
          "Can be positive, negative or zero",
          "Average velocity equals displacement over time",
          "Essential for calculating acceleration and forces",
        ],
        verdict:
          "Speed answers 'how fast?'; velocity answers 'how fast and which way?'. A car driving in a circle at constant speed has constantly changing velocity. Physics problems usually need velocity.",
        faq: [
          {
            q: "Can speed be negative?",
            a: "No. Speed is always positive or zero, since it ignores direction. Only velocity can be negative.",
          },
          {
            q: "Can velocity change while speed stays constant?",
            a: "Yes. Moving in a circle at constant speed changes direction, so velocity changes continuously.",
          },
          {
            q: "What is the difference between distance and displacement?",
            a: "Distance is total path length; displacement is the straight-line change in position, with direction.",
          },
        ],
      },
      fr: {
        title: "Vitesse vs Vélocité : scalaire vs vecteur",
        h1: "Vitesse vs Vélocité : la direction fait la différence",
        description:
          "La vitesse dit à quelle allure ; la vélocité dit l'allure et la direction. Comparez ces deux grandeurs du mouvement.",
        intro:
          "Vitesse et vélocité décrivent le mouvement, mais une seule inclut la direction. Cette différence est capitale en physique.",
        pros_a: [
          "Mesure à quelle allure un objet se déplace",
          "Grandeur scalaire — magnitude seule, sans direction",
          "Toujours positive ou nulle",
          "Vitesse moyenne = distance totale sur temps total",
          "Utilisée dans les descriptions courantes du mouvement",
        ],
        pros_b: [
          "Mesure l'allure et la direction du mouvement",
          "Grandeur vectorielle — magnitude et direction",
          "Peut être positive, négative ou nulle",
          "Vélocité moyenne = déplacement sur temps",
          "Indispensable pour calculer accélération et forces",
        ],
        verdict:
          "La vitesse répond à « quelle allure ? » ; la vélocité à « quelle allure et dans quel sens ? ». Une voiture en cercle à allure constante a une vélocité qui change sans cesse.",
        faq: [
          {
            q: "La vitesse peut-elle être négative ?",
            a: "Non. La vitesse est toujours positive ou nulle car elle ignore la direction. Seule la vélocité peut être négative.",
          },
          {
            q: "La vélocité peut-elle changer à vitesse constante ?",
            a: "Oui. Se déplacer en cercle à allure constante change la direction, donc la vélocité varie sans cesse.",
          },
          {
            q: "Distance et déplacement, quelle différence ?",
            a: "La distance est la longueur du trajet ; le déplacement est le changement de position en ligne droite, avec direction.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "velocity-vs-acceleration",
    a: "Velocity",
    b: "Acceleration",
    category: "science",
    emoji_a: "🧭",
    emoji_b: "🚀",
    content: {
      en: {
        title: "Velocity vs Acceleration: Rates of Change",
        h1: "Velocity vs Acceleration in Motion",
        description:
          "Velocity is how position changes over time; acceleration is how velocity changes over time. Compare these two motion concepts.",
        intro:
          "Velocity and acceleration are linked but distinct. One describes motion itself; the other describes how that motion is changing.",
        pros_a: [
          "Describes the rate of change of position",
          "Measured in meters per second (m/s)",
          "A vector with magnitude and direction",
          "Constant velocity means no acceleration",
          "Equal to displacement divided by time",
        ],
        pros_b: [
          "Describes the rate of change of velocity",
          "Measured in meters per second squared (m/s²)",
          "A vector that can speed up, slow down or turn motion",
          "Zero acceleration means constant velocity",
          "Linked to net force by Newton's second law",
        ],
        verdict:
          "Velocity tells you the current state of motion; acceleration tells you how it is changing. A car at steady speed has velocity but zero acceleration; pressing the pedal creates acceleration.",
        faq: [
          {
            q: "Can an object accelerate without changing speed?",
            a: "Yes. Changing direction is acceleration. A car turning at constant speed is still accelerating.",
          },
          {
            q: "What does negative acceleration mean?",
            a: "It usually means slowing down (deceleration), or speeding up in the negative direction.",
          },
          {
            q: "How is acceleration related to force?",
            a: "Newton's second law states force equals mass times acceleration, so any net force produces acceleration.",
          },
        ],
      },
      fr: {
        title: "Vélocité vs Accélération : taux de variation",
        h1: "Vélocité vs Accélération dans le mouvement",
        description:
          "La vélocité est la variation de position dans le temps ; l'accélération la variation de vélocité. Comparez ces deux concepts.",
        intro:
          "Vélocité et accélération sont liées mais distinctes. L'une décrit le mouvement lui-même, l'autre comment ce mouvement change.",
        pros_a: [
          "Décrit le taux de variation de la position",
          "Se mesure en mètres par seconde (m/s)",
          "Vecteur avec magnitude et direction",
          "Une vélocité constante signifie pas d'accélération",
          "Égale au déplacement divisé par le temps",
        ],
        pros_b: [
          "Décrit le taux de variation de la vélocité",
          "Se mesure en mètres par seconde carrée (m/s²)",
          "Vecteur qui accélère, ralentit ou fait tourner",
          "Une accélération nulle signifie vélocité constante",
          "Liée à la force nette par la 2e loi de Newton",
        ],
        verdict:
          "La vélocité indique l'état actuel du mouvement ; l'accélération comment il change. Une voiture à allure stable a une vélocité mais pas d'accélération ; appuyer sur la pédale crée une accélération.",
        faq: [
          {
            q: "Un objet peut-il accélérer sans changer d'allure ?",
            a: "Oui. Changer de direction est une accélération. Une voiture qui tourne à allure constante accélère encore.",
          },
          {
            q: "Que signifie une accélération négative ?",
            a: "Souvent un ralentissement (décélération), ou une accélération dans le sens négatif.",
          },
          {
            q: "Comment l'accélération est-elle liée à la force ?",
            a: "La 2e loi de Newton dit que force = masse × accélération ; toute force nette produit une accélération.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "force-vs-pressure",
    a: "Force",
    b: "Pressure",
    category: "science",
    emoji_a: "💪",
    emoji_b: "📊",
    content: {
      en: {
        title: "Force vs Pressure: Push vs Push Per Area",
        h1: "Force vs Pressure: Two Related Concepts",
        description:
          "Force is a push or pull; pressure is force spread over an area. Compare these two related physics quantities.",
        intro:
          "Force and pressure are connected but not the same. The difference comes down to whether area is taken into account.",
        pros_a: [
          "A push or pull that can change an object's motion",
          "Measured in newtons (N)",
          "A vector with magnitude and direction",
          "Causes acceleration via Newton's second law",
          "Independent of the contact area",
        ],
        pros_b: [
          "Force applied per unit of area",
          "Measured in pascals (Pa) or N/m²",
          "A scalar quantity in fluids",
          "The same force on a smaller area gives more pressure",
          "Explains why sharp knives and snowshoes work",
        ],
        verdict:
          "Force is the total push; pressure is how concentrated that push is. A sharp knife and a blunt one can use the same force, but the sharp edge concentrates it into far higher pressure.",
        faq: [
          {
            q: "Why does a sharp knife cut better?",
            a: "Its thin edge has a tiny contact area, so the same force creates much higher pressure.",
          },
          {
            q: "What unit measures pressure?",
            a: "The pascal (Pa), equal to one newton per square meter.",
          },
          {
            q: "Why do snowshoes stop you sinking?",
            a: "They spread your weight over a large area, lowering the pressure on the snow.",
          },
        ],
      },
      fr: {
        title: "Force vs Pression : poussée vs poussée/surface",
        h1: "Force vs Pression : deux concepts liés",
        description:
          "La force est une poussée ou traction ; la pression est une force répartie sur une surface. Comparez ces deux grandeurs.",
        intro:
          "Force et pression sont liées mais distinctes. La différence tient à la prise en compte ou non de la surface.",
        pros_a: [
          "Une poussée ou traction qui peut changer le mouvement",
          "Se mesure en newtons (N)",
          "Vecteur avec magnitude et direction",
          "Provoque une accélération via la 2e loi de Newton",
          "Indépendante de la surface de contact",
        ],
        pros_b: [
          "Force appliquée par unité de surface",
          "Se mesure en pascals (Pa) ou N/m²",
          "Grandeur scalaire dans les fluides",
          "La même force sur une surface plus petite = plus de pression",
          "Explique le fonctionnement des couteaux et raquettes à neige",
        ],
        verdict:
          "La force est la poussée totale ; la pression dit à quel point elle est concentrée. Un couteau aiguisé et un émoussé peuvent user de la même force, mais l'arête fine concentre une pression bien plus forte.",
        faq: [
          {
            q: "Pourquoi un couteau aiguisé coupe-t-il mieux ?",
            a: "Son arête fine a une surface de contact minuscule, donc la même force crée une pression bien plus élevée.",
          },
          {
            q: "Quelle unité mesure la pression ?",
            a: "Le pascal (Pa), égal à un newton par mètre carré.",
          },
          {
            q: "Pourquoi les raquettes à neige empêchent-elles d'enfoncer ?",
            a: "Elles répartissent le poids sur une grande surface, réduisant la pression sur la neige.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "energy-vs-power",
    a: "Energy",
    b: "Power",
    category: "science",
    emoji_a: "⚡",
    emoji_b: "🔋",
    content: {
      en: {
        title: "Energy vs Power: What's the Difference?",
        h1: "Energy vs Power: Quantity vs Rate",
        description:
          "Energy is the capacity to do work; power is how fast that work is done. Compare these two often-confused physics terms.",
        intro:
          "Energy and power are easy to mix up. One is a total amount; the other is a rate — how quickly energy is used or produced.",
        pros_a: [
          "The capacity to do work or cause change",
          "Measured in joules (J)",
          "Can be stored, transferred or converted",
          "Conserved — never created or destroyed",
          "Exists as kinetic, potential, thermal and other forms",
        ],
        pros_b: [
          "The rate at which energy is transferred or used",
          "Measured in watts (W), equal to joules per second",
          "Describes how fast work is done",
          "A higher power rating means faster energy use",
          "Calculated as energy divided by time",
        ],
        verdict:
          "Energy is the 'how much'; power is the 'how fast'. A 100 W bulb uses energy twice as fast as a 50 W bulb. Your electricity bill charges for energy (kilowatt-hours), not power.",
        faq: [
          {
            q: "What is a kilowatt-hour?",
            a: "It is a unit of energy — the energy used by a one-kilowatt device running for one hour.",
          },
          {
            q: "Does higher power mean more energy?",
            a: "Not necessarily. Higher power means energy is used faster, but total energy also depends on time.",
          },
          {
            q: "What unit measures power?",
            a: "The watt, defined as one joule of energy transferred per second.",
          },
        ],
      },
      fr: {
        title: "Énergie vs Puissance : quelle différence ?",
        h1: "Énergie vs Puissance : quantité vs taux",
        description:
          "L'énergie est la capacité d'effectuer un travail ; la puissance est la vitesse de ce travail. Comparez ces deux termes.",
        intro:
          "Énergie et puissance se confondent facilement. L'une est une quantité totale, l'autre un taux — à quelle vitesse l'énergie est utilisée.",
        pros_a: [
          "La capacité d'effectuer un travail ou un changement",
          "Se mesure en joules (J)",
          "Peut être stockée, transférée ou convertie",
          "Se conserve — ni créée ni détruite",
          "Existe sous forme cinétique, potentielle, thermique, etc.",
        ],
        pros_b: [
          "Le taux de transfert ou d'utilisation de l'énergie",
          "Se mesure en watts (W), soit joules par seconde",
          "Décrit la vitesse à laquelle le travail est fait",
          "Une puissance plus élevée = énergie utilisée plus vite",
          "Se calcule comme énergie divisée par temps",
        ],
        verdict:
          "L'énergie, c'est « combien » ; la puissance, c'est « à quelle vitesse ». Une ampoule de 100 W consomme deux fois plus vite qu'une de 50 W. Votre facture compte l'énergie (kWh), pas la puissance.",
        faq: [
          {
            q: "Qu'est-ce qu'un kilowattheure ?",
            a: "C'est une unité d'énergie — l'énergie d'un appareil d'un kilowatt fonctionnant une heure.",
          },
          {
            q: "Plus de puissance signifie-t-il plus d'énergie ?",
            a: "Pas forcément. Plus de puissance = énergie utilisée plus vite, mais l'énergie totale dépend aussi du temps.",
          },
          {
            q: "Quelle unité mesure la puissance ?",
            a: "Le watt, défini comme un joule d'énergie transféré par seconde.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "kinetic-energy-vs-potential-energy",
    a: "Kinetic energy",
    b: "Potential energy",
    category: "science",
    emoji_a: "🏃",
    emoji_b: "⛰️",
    content: {
      en: {
        title: "Kinetic vs Potential Energy Explained",
        h1: "Kinetic vs Potential Energy: Motion vs Stored",
        description:
          "Kinetic energy is the energy of motion; potential energy is stored energy waiting to be released. Compare the two forms.",
        intro:
          "Mechanical energy comes in two forms. Kinetic energy is energy in action, while potential energy is energy held in reserve.",
        pros_a: [
          "The energy an object has because it is moving",
          "Depends on mass and the square of speed",
          "Zero when the object is at rest",
          "Examples: a flowing river, a thrown ball",
          "Increases as an object speeds up",
        ],
        pros_b: [
          "Stored energy due to position or condition",
          "Gravitational type depends on mass, gravity and height",
          "Maximum at the highest point of motion",
          "Examples: a stretched bow, a raised weight",
          "Converts to kinetic energy when released",
        ],
        verdict:
          "A roller coaster shows both: potential energy peaks at the top of the hill, then converts to kinetic energy on the way down. Total mechanical energy stays constant if friction is ignored.",
        faq: [
          {
            q: "What happens to potential energy as an object falls?",
            a: "It converts into kinetic energy, so the object speeds up while its height decreases.",
          },
          {
            q: "Can an object have both at once?",
            a: "Yes. A ball moving through the air mid-fall has both kinetic and gravitational potential energy.",
          },
          {
            q: "What formula gives kinetic energy?",
            a: "Kinetic energy equals one-half times mass times velocity squared.",
          },
        ],
      },
      fr: {
        title: "Énergie cinétique vs potentielle expliquée",
        h1: "Énergie cinétique vs potentielle : mouvement vs stockée",
        description:
          "L'énergie cinétique est celle du mouvement ; l'énergie potentielle est stockée, prête à être libérée. Comparez les deux formes.",
        intro:
          "L'énergie mécanique a deux formes. L'énergie cinétique est l'énergie en action, l'énergie potentielle est en réserve.",
        pros_a: [
          "L'énergie d'un objet due à son mouvement",
          "Dépend de la masse et du carré de la vitesse",
          "Nulle quand l'objet est au repos",
          "Exemples : une rivière qui coule, une balle lancée",
          "Augmente quand l'objet accélère",
        ],
        pros_b: [
          "Énergie stockée due à la position ou l'état",
          "Le type gravitationnel dépend de masse, gravité et hauteur",
          "Maximale au point le plus haut du mouvement",
          "Exemples : un arc tendu, une masse soulevée",
          "Se convertit en énergie cinétique une fois libérée",
        ],
        verdict:
          "Des montagnes russes montrent les deux : l'énergie potentielle culmine en haut, puis se convertit en cinétique à la descente. L'énergie mécanique totale reste constante sans frottement.",
        faq: [
          {
            q: "Que devient l'énergie potentielle quand un objet tombe ?",
            a: "Elle se convertit en énergie cinétique : l'objet accélère tandis que sa hauteur diminue.",
          },
          {
            q: "Un objet peut-il avoir les deux à la fois ?",
            a: "Oui. Une balle en plein vol a à la fois de l'énergie cinétique et potentielle gravitationnelle.",
          },
          {
            q: "Quelle formule donne l'énergie cinétique ?",
            a: "L'énergie cinétique vaut un demi fois la masse fois la vitesse au carré.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "heat-vs-temperature",
    a: "Heat",
    b: "Temperature",
    category: "science",
    emoji_a: "🔥",
    emoji_b: "🌡️",
    content: {
      en: {
        title: "Heat vs Temperature: Energy vs Intensity",
        h1: "Heat vs Temperature: A Key Thermal Distinction",
        description:
          "Heat is energy transferred between objects; temperature measures the average kinetic energy of particles. Compare the two.",
        intro:
          "Heat and temperature feel like the same thing, but thermodynamics treats them very differently — one is energy in transit, the other a measurement.",
        pros_a: [
          "Energy transferred due to a temperature difference",
          "Measured in joules (J)",
          "Always flows from hotter to colder objects",
          "Depends on mass, material and temperature change",
          "An extensive quantity — more matter can hold more",
        ],
        pros_b: [
          "Measures the average kinetic energy of particles",
          "Measured in degrees Celsius, Fahrenheit or kelvin",
          "An intensive quantity — independent of amount of matter",
          "Determines the direction of heat flow",
          "Does not depend on the size of the object",
        ],
        verdict:
          "A cup and a bathtub of water at the same temperature feel equally hot, but the bathtub holds far more heat. Temperature tells you intensity; heat tells you total thermal energy transferred.",
        faq: [
          {
            q: "Which holds more heat: a cup or a tub at the same temperature?",
            a: "The tub. It has far more mass, so it stores much more thermal energy despite the equal temperature.",
          },
          {
            q: "What direction does heat flow?",
            a: "Heat always flows spontaneously from a higher-temperature object to a lower-temperature one.",
          },
          {
            q: "Why is kelvin used in science?",
            a: "Kelvin starts at absolute zero, so it never goes negative and works cleanly in physics equations.",
          },
        ],
      },
      fr: {
        title: "Chaleur vs Température : énergie vs intensité",
        h1: "Chaleur vs Température : une distinction thermique clé",
        description:
          "La chaleur est l'énergie transférée entre objets ; la température mesure l'énergie cinétique moyenne des particules.",
        intro:
          "Chaleur et température semblent identiques, mais la thermodynamique les distingue : l'une est l'énergie en transit, l'autre une mesure.",
        pros_a: [
          "Énergie transférée du fait d'une différence de température",
          "Se mesure en joules (J)",
          "S'écoule toujours du plus chaud vers le plus froid",
          "Dépend de la masse, du matériau et de l'écart de température",
          "Grandeur extensive — plus de matière en contient plus",
        ],
        pros_b: [
          "Mesure l'énergie cinétique moyenne des particules",
          "Se mesure en degrés Celsius, Fahrenheit ou kelvins",
          "Grandeur intensive — indépendante de la quantité de matière",
          "Détermine le sens du flux de chaleur",
          "Ne dépend pas de la taille de l'objet",
        ],
        verdict:
          "Une tasse et une baignoire d'eau à la même température sont aussi chaudes, mais la baignoire contient bien plus de chaleur. La température dit l'intensité ; la chaleur l'énergie thermique totale.",
        faq: [
          {
            q: "Qui contient plus de chaleur, une tasse ou une baignoire à même température ?",
            a: "La baignoire. Sa masse bien plus grande stocke beaucoup plus d'énergie thermique malgré la même température.",
          },
          {
            q: "Dans quel sens la chaleur s'écoule-t-elle ?",
            a: "La chaleur s'écoule toujours spontanément d'un objet plus chaud vers un plus froid.",
          },
          {
            q: "Pourquoi le kelvin est-il utilisé en science ?",
            a: "Le kelvin part du zéro absolu, ne devient jamais négatif et s'utilise sans souci dans les équations.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "wave-vs-particle",
    a: "Wave",
    b: "Particle",
    category: "science",
    emoji_a: "〰️",
    emoji_b: "⚛️",
    content: {
      en: {
        title: "Wave vs Particle: Light's Dual Nature",
        h1: "Wave vs Particle: Two Models of Matter and Light",
        description:
          "Waves spread out and interfere; particles are localized lumps of matter or energy. Compare these two physical models.",
        intro:
          "One of physics' deepest puzzles is that light and matter behave as both waves and particles, depending on how you observe them.",
        pros_a: [
          "Spreads out continuously through space",
          "Shows interference and diffraction patterns",
          "Carries energy without transporting matter",
          "Described by wavelength, frequency and amplitude",
          "Explains color, sound and ripples on water",
        ],
        pros_b: [
          "A localized, discrete lump of matter or energy",
          "Has a definite position and can be counted",
          "Carries momentum in collisions",
          "Explains the photoelectric effect and quantized energy",
          "Light particles are called photons",
        ],
        verdict:
          "Wave-particle duality says light and matter are neither purely wave nor purely particle. The double-slit experiment shows light interfering like a wave yet arriving as discrete photons.",
        faq: [
          {
            q: "What is wave-particle duality?",
            a: "The principle that light and matter display both wave-like and particle-like properties depending on the experiment.",
          },
          {
            q: "Who proposed light is made of particles?",
            a: "Einstein explained the photoelectric effect using light quanta, later named photons.",
          },
          {
            q: "Does matter behave as a wave?",
            a: "Yes. Electrons and even atoms produce interference patterns, confirming the de Broglie wavelength.",
          },
        ],
      },
      fr: {
        title: "Onde vs Particule : la double nature de la lumière",
        h1: "Onde vs Particule : deux modèles de la matière et de la lumière",
        description:
          "Les ondes se propagent et interfèrent ; les particules sont des grains localisés. Comparez ces deux modèles physiques.",
        intro:
          "L'une des énigmes de la physique est que lumière et matière se comportent à la fois comme ondes et particules, selon l'observation.",
        pros_a: [
          "Se propage continûment dans l'espace",
          "Montre des figures d'interférence et de diffraction",
          "Transporte de l'énergie sans transporter de matière",
          "Décrite par longueur d'onde, fréquence et amplitude",
          "Explique la couleur, le son et les rides sur l'eau",
        ],
        pros_b: [
          "Un grain localisé et discret de matière ou d'énergie",
          "A une position définie et peut être compté",
          "Transporte de la quantité de mouvement lors des chocs",
          "Explique l'effet photoélectrique et l'énergie quantifiée",
          "Les particules de lumière s'appellent des photons",
        ],
        verdict:
          "La dualité onde-particule dit que lumière et matière ne sont ni pures ondes ni pures particules. L'expérience des fentes de Young montre la lumière interférer tout en arrivant en photons discrets.",
        faq: [
          {
            q: "Qu'est-ce que la dualité onde-particule ?",
            a: "Le principe selon lequel lumière et matière montrent des propriétés d'onde et de particule selon l'expérience.",
          },
          {
            q: "Qui a proposé que la lumière soit faite de particules ?",
            a: "Einstein a expliqué l'effet photoélectrique avec des quanta de lumière, plus tard nommés photons.",
          },
          {
            q: "La matière se comporte-t-elle comme une onde ?",
            a: "Oui. Les électrons et même les atomes produisent des interférences, confirmant la longueur d'onde de de Broglie.",
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
    category: "science",
    emoji_a: "➕",
    emoji_b: "⚪",
    content: {
      en: {
        title: "Proton vs Neutron: Inside the Nucleus",
        h1: "Proton vs Neutron: The Two Nuclear Particles",
        description:
          "Protons carry positive charge and define the element; neutrons are neutral and add mass. Compare these nuclear particles.",
        intro:
          "Protons and neutrons share the atomic nucleus and have nearly identical mass, but one crucial property sets them apart: electric charge.",
        pros_a: [
          "Carries a positive electric charge of +1",
          "Number of protons defines the chemical element",
          "Found in the nucleus of every atom",
          "Made of two up quarks and one down quark",
          "Stable when bound in a nucleus",
        ],
        pros_b: [
          "Carries no electric charge — electrically neutral",
          "Adds mass and nuclear stability without changing the element",
          "Found in the nucleus of all atoms except common hydrogen",
          "Made of one up quark and two down quarks",
          "Can be unstable, decaying into a proton, electron and antineutrino",
        ],
        verdict:
          "The proton count (atomic number) decides what element an atom is; the neutron count decides which isotope. Both contribute almost all of an atom's mass.",
        faq: [
          {
            q: "What determines the element of an atom?",
            a: "The number of protons, called the atomic number. Carbon always has six protons, for example.",
          },
          {
            q: "What is an isotope?",
            a: "Atoms of the same element with different numbers of neutrons are isotopes of that element.",
          },
          {
            q: "Are protons and neutrons fundamental particles?",
            a: "No. Each is made of three quarks held together by the strong nuclear force.",
          },
        ],
      },
      fr: {
        title: "Proton vs Neutron : au cœur du noyau",
        h1: "Proton vs Neutron : les deux particules nucléaires",
        description:
          "Les protons portent une charge positive et définissent l'élément ; les neutrons sont neutres et ajoutent de la masse.",
        intro:
          "Protons et neutrons partagent le noyau atomique et ont une masse presque identique, mais une propriété les distingue : la charge électrique.",
        pros_a: [
          "Porte une charge électrique positive de +1",
          "Le nombre de protons définit l'élément chimique",
          "Présent dans le noyau de chaque atome",
          "Composé de deux quarks up et un quark down",
          "Stable lorsqu'il est lié dans un noyau",
        ],
        pros_b: [
          "Ne porte aucune charge — électriquement neutre",
          "Ajoute masse et stabilité sans changer l'élément",
          "Présent dans tous les noyaux sauf l'hydrogène courant",
          "Composé d'un quark up et deux quarks down",
          "Peut être instable, se désintégrant en proton, électron et antineutrino",
        ],
        verdict:
          "Le nombre de protons (numéro atomique) décide de l'élément ; le nombre de neutrons décide de l'isotope. Les deux fournissent presque toute la masse de l'atome.",
        faq: [
          {
            q: "Qu'est-ce qui détermine l'élément d'un atome ?",
            a: "Le nombre de protons, le numéro atomique. Le carbone a toujours six protons, par exemple.",
          },
          {
            q: "Qu'est-ce qu'un isotope ?",
            a: "Des atomes d'un même élément avec un nombre de neutrons différent sont des isotopes.",
          },
          {
            q: "Protons et neutrons sont-ils des particules fondamentales ?",
            a: "Non. Chacun est composé de trois quarks liés par la force nucléaire forte.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "nuclear-fission-vs-fusion",
    a: "Nuclear fission",
    b: "Nuclear fusion",
    category: "science",
    emoji_a: "💥",
    emoji_b: "☀️",
    content: {
      en: {
        title: "Fission vs Fusion: Two Nuclear Reactions",
        h1: "Nuclear Fission vs Fusion: Splitting vs Joining",
        description:
          "Fission splits heavy nuclei apart; fusion joins light nuclei together. Both release energy — compare how and where.",
        intro:
          "Fission and fusion are opposite nuclear reactions, yet both unleash enormous energy by converting mass according to E=mc².",
        pros_a: [
          "Splits a heavy nucleus into lighter ones",
          "Powers today's nuclear power plants",
          "Triggered by neutron bombardment of uranium or plutonium",
          "Produces long-lived radioactive waste",
          "Can sustain a chain reaction at modest conditions",
        ],
        pros_b: [
          "Joins light nuclei such as hydrogen into helium",
          "Powers the Sun and all stars",
          "Requires extreme temperature and pressure to start",
          "Produces little long-lived radioactive waste",
          "Releases far more energy per unit mass than fission",
        ],
        verdict:
          "Fission is proven and runs reactors worldwide, but leaves hazardous waste. Fusion promises cleaner, more abundant energy, yet remains hard to sustain on Earth. The Sun runs on fusion.",
        faq: [
          {
            q: "Which reaction powers the Sun?",
            a: "Fusion. The Sun fuses hydrogen nuclei into helium, releasing the energy that lights our solar system.",
          },
          {
            q: "Why is fusion hard to achieve on Earth?",
            a: "It needs temperatures of millions of degrees and intense pressure to overcome nuclei repelling each other.",
          },
          {
            q: "Which produces more dangerous waste?",
            a: "Fission produces long-lived radioactive waste; fusion's byproducts are far shorter-lived.",
          },
        ],
      },
      fr: {
        title: "Fission vs Fusion : deux réactions nucléaires",
        h1: "Fission vs Fusion nucléaire : diviser vs fusionner",
        description:
          "La fission divise les noyaux lourds ; la fusion unit les noyaux légers. Toutes deux libèrent de l'énergie — comparez.",
        intro:
          "Fission et fusion sont des réactions nucléaires opposées, mais toutes deux libèrent une énergie énorme via E=mc².",
        pros_a: [
          "Divise un noyau lourd en noyaux plus légers",
          "Alimente les centrales nucléaires actuelles",
          "Déclenchée par bombardement de neutrons d'uranium ou plutonium",
          "Produit des déchets radioactifs à longue durée de vie",
          "Peut entretenir une réaction en chaîne à conditions modérées",
        ],
        pros_b: [
          "Unit des noyaux légers comme l'hydrogène en hélium",
          "Alimente le Soleil et toutes les étoiles",
          "Exige température et pression extrêmes pour démarrer",
          "Produit peu de déchets radioactifs durables",
          "Libère bien plus d'énergie par unité de masse que la fission",
        ],
        verdict:
          "La fission est éprouvée et fait tourner des réacteurs, mais laisse des déchets dangereux. La fusion promet une énergie plus propre mais reste difficile à maîtriser. Le Soleil fonctionne à la fusion.",
        faq: [
          {
            q: "Quelle réaction alimente le Soleil ?",
            a: "La fusion. Le Soleil fusionne des noyaux d'hydrogène en hélium, libérant l'énergie de notre système solaire.",
          },
          {
            q: "Pourquoi la fusion est-elle difficile sur Terre ?",
            a: "Elle exige des millions de degrés et une forte pression pour vaincre la répulsion des noyaux.",
          },
          {
            q: "Laquelle produit les déchets les plus dangereux ?",
            a: "La fission produit des déchets radioactifs durables ; les sous-produits de la fusion sont bien plus éphémères.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "conduction-vs-convection",
    a: "Conduction",
    b: "Convection",
    category: "science",
    emoji_a: "🍳",
    emoji_b: "♨️",
    content: {
      en: {
        title: "Conduction vs Convection: Heat Transfer",
        h1: "Conduction vs Convection: How Heat Moves",
        description:
          "Conduction transfers heat through direct contact; convection transfers it through moving fluids. Compare these two modes.",
        intro:
          "Heat moves in three main ways. Conduction and convection both need matter, but they move energy through it very differently.",
        pros_a: [
          "Transfers heat through direct particle contact",
          "Works best in solids, especially metals",
          "No bulk movement of the material itself",
          "Energy passes from vibrating particle to neighbor",
          "Example: a metal spoon heating in hot soup",
        ],
        pros_b: [
          "Transfers heat through the movement of a fluid",
          "Works in liquids and gases, not solids",
          "Warm fluid rises, cool fluid sinks, creating currents",
          "Carries energy by moving the matter itself",
          "Example: boiling water or warm air circulating in a room",
        ],
        verdict:
          "Conduction needs touching particles and is the way solids share heat. Convection relies on flowing fluids carrying energy with them. A pot on a stove uses both at once.",
        faq: [
          {
            q: "Can convection happen in a solid?",
            a: "No. Convection requires a fluid that can flow; solids transfer heat by conduction instead.",
          },
          {
            q: "Why do metals conduct heat well?",
            a: "Free electrons in metals move easily and carry thermal energy quickly through the material.",
          },
          {
            q: "What is the third type of heat transfer?",
            a: "Radiation, which transfers heat through electromagnetic waves and needs no medium at all.",
          },
        ],
      },
      fr: {
        title: "Conduction vs Convection : transfert de chaleur",
        h1: "Conduction vs Convection : comment la chaleur se déplace",
        description:
          "La conduction transfère la chaleur par contact direct ; la convection par des fluides en mouvement. Comparez ces deux modes.",
        intro:
          "La chaleur se déplace de trois façons. Conduction et convection ont besoin de matière, mais y transportent l'énergie différemment.",
        pros_a: [
          "Transfère la chaleur par contact direct des particules",
          "Fonctionne surtout dans les solides, en particulier les métaux",
          "Pas de déplacement global du matériau lui-même",
          "L'énergie passe d'une particule vibrante à sa voisine",
          "Exemple : une cuillère métallique chauffant dans la soupe",
        ],
        pros_b: [
          "Transfère la chaleur par le mouvement d'un fluide",
          "Fonctionne dans les liquides et gaz, pas les solides",
          "Le fluide chaud monte, le froid descend, créant des courants",
          "Transporte l'énergie en déplaçant la matière elle-même",
          "Exemple : l'eau qui bout ou l'air chaud circulant dans une pièce",
        ],
        verdict:
          "La conduction exige des particules en contact et fait circuler la chaleur dans les solides. La convection repose sur des fluides en mouvement. Une casserole sur le feu utilise les deux.",
        faq: [
          {
            q: "La convection peut-elle avoir lieu dans un solide ?",
            a: "Non. La convection exige un fluide capable de couler ; les solides transfèrent par conduction.",
          },
          {
            q: "Pourquoi les métaux conduisent-ils bien la chaleur ?",
            a: "Les électrons libres des métaux se déplacent aisément et transportent vite l'énergie thermique.",
          },
          {
            q: "Quel est le troisième mode de transfert de chaleur ?",
            a: "Le rayonnement, qui transfère la chaleur par ondes électromagnétiques sans aucun milieu.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "reflection-vs-refraction",
    a: "Reflection",
    b: "Refraction",
    category: "science",
    emoji_a: "🪞",
    emoji_b: "🔍",
    content: {
      en: {
        title: "Reflection vs Refraction: Light Behavior",
        h1: "Reflection vs Refraction: How Light Bends",
        description:
          "Reflection bounces light off a surface; refraction bends light passing into a new medium. Compare these two optics effects.",
        intro:
          "When light meets a surface, it can bounce back or pass through. Reflection and refraction explain mirrors, lenses and rainbows alike.",
        pros_a: [
          "Light bounces off a surface back into the same medium",
          "Angle of incidence equals angle of reflection",
          "The light stays in its original medium",
          "Creates images in mirrors and on still water",
          "Speed of the light does not change",
        ],
        pros_b: [
          "Light bends as it passes into a different medium",
          "Caused by a change in the speed of light",
          "The direction changes; the medium changes",
          "Creates effects like a straw looking bent in water",
          "Governs how lenses focus light",
        ],
        verdict:
          "Reflection keeps light in one medium and bounces it; refraction sends it into a new medium and bends it. Glasses, cameras and your own eye lens all rely on refraction.",
        faq: [
          {
            q: "Why does a straw look bent in a glass of water?",
            a: "Refraction bends the light as it leaves the water and enters air, shifting the straw's apparent position.",
          },
          {
            q: "What law governs reflection?",
            a: "The law of reflection: the angle of incidence equals the angle of reflection, measured from the normal.",
          },
          {
            q: "What causes refraction?",
            a: "Light changes speed when it enters a denser or less dense medium, which bends its path.",
          },
        ],
      },
      fr: {
        title: "Réflexion vs Réfraction : comportement de la lumière",
        h1: "Réflexion vs Réfraction : comment la lumière se courbe",
        description:
          "La réflexion renvoie la lumière d'une surface ; la réfraction la courbe en changeant de milieu. Comparez ces deux effets.",
        intro:
          "Quand la lumière rencontre une surface, elle peut rebondir ou la traverser. Réflexion et réfraction expliquent miroirs, lentilles et arcs-en-ciel.",
        pros_a: [
          "La lumière rebondit sur une surface, restant dans le même milieu",
          "L'angle d'incidence égale l'angle de réflexion",
          "La lumière reste dans son milieu d'origine",
          "Crée des images dans les miroirs et l'eau calme",
          "La vitesse de la lumière ne change pas",
        ],
        pros_b: [
          "La lumière se courbe en passant dans un autre milieu",
          "Causée par un changement de vitesse de la lumière",
          "La direction change ; le milieu change",
          "Crée l'illusion d'une paille tordue dans l'eau",
          "Régit la façon dont les lentilles focalisent la lumière",
        ],
        verdict:
          "La réflexion garde la lumière dans un milieu et la renvoie ; la réfraction l'envoie dans un nouveau milieu et la courbe. Lunettes, appareils photo et votre œil reposent sur la réfraction.",
        faq: [
          {
            q: "Pourquoi une paille semble-t-elle tordue dans l'eau ?",
            a: "La réfraction courbe la lumière en quittant l'eau pour l'air, décalant la position apparente de la paille.",
          },
          {
            q: "Quelle loi régit la réflexion ?",
            a: "La loi de la réflexion : l'angle d'incidence égale l'angle de réflexion, mesurés depuis la normale.",
          },
          {
            q: "Qu'est-ce qui cause la réfraction ?",
            a: "La lumière change de vitesse en entrant dans un milieu plus ou moins dense, ce qui courbe son trajet.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "ac-vs-dc-current",
    a: "AC current",
    b: "DC current",
    category: "science",
    emoji_a: "🔌",
    emoji_b: "🔋",
    content: {
      en: {
        title: "AC vs DC Current: Two Ways Electricity Flows",
        h1: "AC vs DC Current: Alternating vs Direct",
        description:
          "AC reverses direction many times per second; DC flows steadily one way. Compare alternating and direct current.",
        intro:
          "Electric current comes in two basic forms. The choice between them shaped the history of power grids and still matters today.",
        pros_a: [
          "Current periodically reverses direction",
          "Easy to step up or down with transformers",
          "Efficient for transmitting power over long distances",
          "Standard supply from wall outlets and the grid",
          "Frequency is typically 50 or 60 hertz",
        ],
        pros_b: [
          "Current flows steadily in one constant direction",
          "Provided by batteries and solar cells",
          "Powers electronics, phones and most circuit chips",
          "Stable voltage suits sensitive devices",
          "Loses more energy over very long transmission lines",
        ],
        verdict:
          "AC won the grid because transformers make long-distance transmission efficient. DC dominates inside electronics and batteries. Modern devices convert wall AC into the DC their chips need.",
        faq: [
          {
            q: "Why do power grids use AC?",
            a: "AC voltage can be raised and lowered with transformers, making long-distance transmission far more efficient.",
          },
          {
            q: "Do batteries produce AC or DC?",
            a: "Batteries produce DC — a steady one-way flow of current.",
          },
          {
            q: "What converts AC to DC?",
            a: "A rectifier, often inside a power adapter, converts wall AC into the DC that electronics need.",
          },
        ],
      },
      fr: {
        title: "Courant AC vs DC : deux façons de circuler",
        h1: "Courant AC vs DC : alternatif vs continu",
        description:
          "L'AC inverse son sens plusieurs fois par seconde ; le DC circule dans un sens stable. Comparez courant alternatif et continu.",
        intro:
          "Le courant électrique a deux formes de base. Le choix entre elles a façonné l'histoire des réseaux et compte encore.",
        pros_a: [
          "Le courant inverse périodiquement son sens",
          "Facile à élever ou abaisser avec des transformateurs",
          "Efficace pour transmettre l'énergie sur de longues distances",
          "Fourniture standard des prises murales et du réseau",
          "Fréquence typique de 50 ou 60 hertz",
        ],
        pros_b: [
          "Le courant circule dans un sens constant",
          "Fourni par les batteries et les cellules solaires",
          "Alimente l'électronique, les téléphones et les puces",
          "Une tension stable convient aux appareils sensibles",
          "Perd plus d'énergie sur de très longues lignes",
        ],
        verdict:
          "L'AC a remporté le réseau car les transformateurs rendent la transmission longue distance efficace. Le DC domine dans l'électronique. Les appareils convertissent l'AC mural en DC pour leurs puces.",
        faq: [
          {
            q: "Pourquoi les réseaux utilisent-ils l'AC ?",
            a: "La tension AC se monte et se descend avec des transformateurs, rendant la transmission longue distance bien plus efficace.",
          },
          {
            q: "Les batteries produisent-elles de l'AC ou du DC ?",
            a: "Les batteries produisent du DC — un flux de courant stable et unidirectionnel.",
          },
          {
            q: "Qu'est-ce qui convertit l'AC en DC ?",
            a: "Un redresseur, souvent dans un adaptateur, convertit l'AC mural en DC pour l'électronique.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "series-vs-parallel-circuit",
    a: "Series circuit",
    b: "Parallel circuit",
    category: "science",
    emoji_a: "➖",
    emoji_b: "🔀",
    content: {
      en: {
        title: "Series vs Parallel Circuit: Wiring Compared",
        h1: "Series vs Parallel Circuit: Two Ways to Wire",
        description:
          "Series circuits give one path for current; parallel circuits give several. Compare how components are connected.",
        intro:
          "How you wire components changes everything about a circuit's behavior. Series and parallel are the two fundamental layouts.",
        pros_a: [
          "Components share a single current path",
          "The same current flows through every component",
          "Voltage is divided among the components",
          "One break stops the entire circuit",
          "Total resistance is the sum of all resistances",
        ],
        pros_b: [
          "Components are on separate branches",
          "Each branch receives the full source voltage",
          "Current divides between the branches",
          "One break leaves the other branches working",
          "Total resistance is less than the smallest resistor",
        ],
        verdict:
          "Series wiring is simple but fragile — one failure kills it, like old fairy lights. Parallel wiring keeps the rest running if one part fails, which is why house wiring uses it.",
        faq: [
          {
            q: "Why do homes use parallel wiring?",
            a: "So each appliance gets full voltage and one failure does not switch off the whole house.",
          },
          {
            q: "What happens if one bulb fails in a series circuit?",
            a: "The whole circuit breaks and every other bulb goes out, since there is only one path.",
          },
          {
            q: "How does total resistance differ?",
            a: "Series resistance adds up; parallel resistance is always less than the smallest resistor.",
          },
        ],
      },
      fr: {
        title: "Circuit série vs parallèle : câblage comparé",
        h1: "Circuit série vs parallèle : deux façons de câbler",
        description:
          "Le circuit série offre un seul chemin au courant ; le parallèle en offre plusieurs. Comparez les branchements de composants.",
        intro:
          "La façon de câbler les composants change tout dans un circuit. Série et parallèle sont les deux montages fondamentaux.",
        pros_a: [
          "Les composants partagent un unique chemin de courant",
          "Le même courant traverse chaque composant",
          "La tension se répartit entre les composants",
          "Une coupure stoppe tout le circuit",
          "La résistance totale est la somme des résistances",
        ],
        pros_b: [
          "Les composants sont sur des branches séparées",
          "Chaque branche reçoit la pleine tension de la source",
          "Le courant se divise entre les branches",
          "Une coupure laisse les autres branches fonctionner",
          "La résistance totale est inférieure à la plus petite résistance",
        ],
        verdict:
          "Le montage série est simple mais fragile — une panne le tue, comme les vieilles guirlandes. Le montage parallèle garde le reste actif si une partie lâche : d'où son usage domestique.",
        faq: [
          {
            q: "Pourquoi les maisons utilisent-elles le câblage parallèle ?",
            a: "Pour que chaque appareil reçoive la pleine tension et qu'une panne ne coupe pas toute la maison.",
          },
          {
            q: "Que se passe-t-il si une ampoule lâche en série ?",
            a: "Tout le circuit se coupe et toutes les autres ampoules s'éteignent, car il n'y a qu'un chemin.",
          },
          {
            q: "Comment la résistance totale diffère-t-elle ?",
            a: "En série les résistances s'additionnent ; en parallèle la totale est inférieure à la plus petite.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "voltage-vs-current",
    a: "Voltage",
    b: "Current",
    category: "science",
    emoji_a: "⚡",
    emoji_b: "🌊",
    content: {
      en: {
        title: "Voltage vs Current: Pressure vs Flow",
        h1: "Voltage vs Current: Two Electrical Basics",
        description:
          "Voltage is the electrical push; current is the rate of charge flow. Compare these two fundamental quantities.",
        intro:
          "Voltage and current are the foundation of electricity. A water-pipe analogy helps: voltage is pressure, current is the flow.",
        pros_a: [
          "The potential difference that pushes charge",
          "Measured in volts (V)",
          "Acts like pressure driving the flow",
          "Can exist without any current flowing",
          "Provided by batteries and generators",
        ],
        pros_b: [
          "The rate at which electric charge flows",
          "Measured in amperes (A)",
          "Acts like the flow rate in a pipe",
          "Only flows when a complete circuit exists",
          "Causes heating, magnetism and useful work",
        ],
        verdict:
          "Voltage is the cause, current is the effect. A battery has voltage even when disconnected, but current only flows once a closed circuit lets charge move. Ohm's law links them through resistance.",
        faq: [
          {
            q: "Can voltage exist without current?",
            a: "Yes. A disconnected battery has voltage but no current, because the circuit is open.",
          },
          {
            q: "What is Ohm's law?",
            a: "It states that voltage equals current multiplied by resistance, linking the three quantities.",
          },
          {
            q: "Which is more dangerous, voltage or current?",
            a: "Current flowing through the body is what causes harm, but high voltage is needed to drive it.",
          },
        ],
      },
      fr: {
        title: "Tension vs Courant : pression vs débit",
        h1: "Tension vs Courant : deux bases de l'électricité",
        description:
          "La tension est la poussée électrique ; le courant est le débit de charges. Comparez ces deux grandeurs fondamentales.",
        intro:
          "Tension et courant sont la base de l'électricité. L'analogie du tuyau d'eau aide : la tension est la pression, le courant le débit.",
        pros_a: [
          "La différence de potentiel qui pousse les charges",
          "Se mesure en volts (V)",
          "Agit comme une pression qui pousse le débit",
          "Peut exister sans aucun courant qui circule",
          "Fournie par les batteries et les générateurs",
        ],
        pros_b: [
          "Le débit auquel la charge électrique circule",
          "Se mesure en ampères (A)",
          "Agit comme le débit dans un tuyau",
          "Ne circule que si un circuit complet existe",
          "Cause chauffage, magnétisme et travail utile",
        ],
        verdict:
          "La tension est la cause, le courant l'effet. Une batterie a une tension même débranchée, mais le courant ne circule que dans un circuit fermé. La loi d'Ohm les relie par la résistance.",
        faq: [
          {
            q: "La tension peut-elle exister sans courant ?",
            a: "Oui. Une batterie débranchée a une tension mais pas de courant, car le circuit est ouvert.",
          },
          {
            q: "Qu'est-ce que la loi d'Ohm ?",
            a: "Elle dit que la tension égale le courant multiplié par la résistance, reliant les trois grandeurs.",
          },
          {
            q: "Tension ou courant, lequel est le plus dangereux ?",
            a: "C'est le courant traversant le corps qui blesse, mais une tension élevée est nécessaire pour l'imposer.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "general-vs-special-relativity",
    a: "General relativity",
    b: "Special relativity",
    category: "science",
    emoji_a: "🌌",
    emoji_b: "🚄",
    content: {
      en: {
        title: "General vs Special Relativity Explained",
        h1: "General vs Special Relativity: Einstein's Two Theories",
        description:
          "Special relativity handles motion at constant speed; general relativity adds gravity and acceleration. Compare both theories.",
        intro:
          "Einstein produced two relativity theories a decade apart. One handles steady motion; the other extends it to gravity and the cosmos.",
        pros_a: [
          "Describes gravity as the curvature of spacetime",
          "Published by Einstein in 1915",
          "Handles acceleration and non-inertial frames",
          "Predicts black holes, gravitational waves and lensing",
          "Explains the orbit of Mercury and GPS time correction",
        ],
        pros_b: [
          "Describes physics in frames moving at constant velocity",
          "Published by Einstein in 1905",
          "Introduces time dilation and length contraction",
          "States the speed of light is the same for all observers",
          "Gives the famous equation E equals m c squared",
        ],
        verdict:
          "Special relativity is a special case of the broader general theory. Use special relativity for steady high-speed motion; general relativity is needed wherever gravity or acceleration matters.",
        faq: [
          {
            q: "Which theory came first?",
            a: "Special relativity in 1905; general relativity followed ten years later in 1915.",
          },
          {
            q: "What does general relativity add?",
            a: "It extends relativity to gravity and acceleration, describing gravity as curved spacetime.",
          },
          {
            q: "Does GPS need relativity?",
            a: "Yes. GPS satellites must correct for time effects from both special and general relativity.",
          },
        ],
      },
      fr: {
        title: "Relativité générale vs restreinte expliquée",
        h1: "Relativité générale vs restreinte : les deux théories d'Einstein",
        description:
          "La relativité restreinte traite le mouvement à vitesse constante ; la générale ajoute gravité et accélération.",
        intro:
          "Einstein a produit deux théories de la relativité à dix ans d'écart. L'une traite le mouvement régulier, l'autre l'étend à la gravité.",
        pros_a: [
          "Décrit la gravité comme une courbure de l'espace-temps",
          "Publiée par Einstein en 1915",
          "Traite l'accélération et les référentiels non inertiels",
          "Prédit trous noirs, ondes gravitationnelles et lentilles",
          "Explique l'orbite de Mercure et la correction du temps GPS",
        ],
        pros_b: [
          "Décrit la physique dans des référentiels à vitesse constante",
          "Publiée par Einstein en 1905",
          "Introduit la dilatation du temps et la contraction des longueurs",
          "Affirme que la vitesse de la lumière est la même pour tous",
          "Donne la célèbre équation E égale m c carré",
        ],
        verdict:
          "La relativité restreinte est un cas particulier de la théorie générale. Utilisez la restreinte pour le mouvement rapide régulier ; la générale est nécessaire dès que gravité ou accélération entre en jeu.",
        faq: [
          {
            q: "Quelle théorie est venue en premier ?",
            a: "La relativité restreinte en 1905 ; la générale a suivi dix ans plus tard, en 1915.",
          },
          {
            q: "Qu'ajoute la relativité générale ?",
            a: "Elle étend la relativité à la gravité et l'accélération, décrivant la gravité comme un espace-temps courbé.",
          },
          {
            q: "Le GPS a-t-il besoin de la relativité ?",
            a: "Oui. Les satellites GPS doivent corriger les effets temporels des relativités restreinte et générale.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "quantum-vs-classical-physics",
    a: "Quantum physics",
    b: "Classical physics",
    category: "science",
    emoji_a: "🌀",
    emoji_b: "🍎",
    content: {
      en: {
        title: "Quantum vs Classical Physics Compared",
        h1: "Quantum vs Classical Physics: Two Frameworks",
        description:
          "Classical physics describes everyday objects; quantum physics rules the tiny world of atoms and particles. Compare both.",
        intro:
          "Physics has two great frameworks. One predicts the motion of planets and cars; the other governs the strange behavior of atoms.",
        pros_a: [
          "Describes the behavior of atoms and subatomic particles",
          "Energy comes in discrete packets called quanta",
          "Includes superposition, entanglement and uncertainty",
          "Predictions are probabilistic, not exact",
          "Underpins lasers, semiconductors and modern electronics",
        ],
        pros_b: [
          "Describes everyday-sized objects and motion",
          "Treats energy as continuous, not quantized",
          "Predictions are deterministic and exact",
          "Built on Newton's laws and electromagnetism",
          "Accurate for planets, vehicles and machines",
        ],
        verdict:
          "Classical physics works perfectly for the human-scale world and remains essential for engineering. Quantum physics takes over at atomic scales. Both are correct in their own domains.",
        faq: [
          {
            q: "When does classical physics fail?",
            a: "At very small scales — atoms and particles — where quantum effects like superposition dominate.",
          },
          {
            q: "Is quantum physics random?",
            a: "Its predictions are probabilistic; it gives the odds of outcomes rather than a single certain result.",
          },
          {
            q: "Do they ever agree?",
            a: "Yes. For large objects, quantum predictions average out to match classical physics, called the correspondence principle.",
          },
        ],
      },
      fr: {
        title: "Physique quantique vs classique comparées",
        h1: "Physique quantique vs classique : deux cadres",
        description:
          "La physique classique décrit les objets du quotidien ; la quantique régit le monde minuscule des atomes. Comparez les deux.",
        intro:
          "La physique a deux grands cadres. L'un prédit le mouvement des planètes, l'autre régit le comportement étrange des atomes.",
        pros_a: [
          "Décrit le comportement des atomes et des particules",
          "L'énergie vient en paquets discrets, les quanta",
          "Inclut superposition, intrication et incertitude",
          "Les prédictions sont probabilistes, non exactes",
          "Sous-tend lasers, semi-conducteurs et électronique moderne",
        ],
        pros_b: [
          "Décrit les objets et mouvements à l'échelle humaine",
          "Traite l'énergie comme continue, non quantifiée",
          "Les prédictions sont déterministes et exactes",
          "Bâtie sur les lois de Newton et l'électromagnétisme",
          "Précise pour les planètes, véhicules et machines",
        ],
        verdict:
          "La physique classique fonctionne parfaitement à l'échelle humaine et reste essentielle à l'ingénierie. La quantique prend le relais à l'échelle atomique. Chacune est juste dans son domaine.",
        faq: [
          {
            q: "Quand la physique classique échoue-t-elle ?",
            a: "Aux très petites échelles — atomes et particules — où les effets quantiques comme la superposition dominent.",
          },
          {
            q: "La physique quantique est-elle aléatoire ?",
            a: "Ses prédictions sont probabilistes ; elle donne les probabilités des résultats plutôt qu'un seul résultat certain.",
          },
          {
            q: "S'accordent-elles parfois ?",
            a: "Oui. Pour les grands objets, les prédictions quantiques rejoignent la classique : c'est le principe de correspondance.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "black-hole-vs-neutron-star",
    a: "Black hole",
    b: "Neutron star",
    category: "science",
    emoji_a: "🕳️",
    emoji_b: "✨",
    content: {
      en: {
        title: "Black Hole vs Neutron Star: Stellar Remnants",
        h1: "Black Hole vs Neutron Star: Dead Star Compared",
        description:
          "Black holes trap even light; neutron stars are ultra-dense but still visible. Compare these two collapsed stellar remnants.",
        intro:
          "When massive stars die, they collapse into extreme objects. Two outcomes dominate: a neutron star or, for the heaviest stars, a black hole.",
        pros_a: [
          "Gravity so strong not even light can escape",
          "Bounded by an event horizon, not a solid surface",
          "Forms from the heaviest collapsing stars",
          "Singularity at the center has near-infinite density",
          "Detected by its effect on nearby matter and light",
        ],
        pros_b: [
          "An ultra-dense ball of tightly packed neutrons",
          "Has an actual solid surface",
          "Forms from collapsing stars below the black-hole mass limit",
          "Can spin rapidly and beam radio waves as a pulsar",
          "Directly visible across the electromagnetic spectrum",
        ],
        verdict:
          "Both are corpses of massive stars. Below roughly three solar masses, collapse stops at a neutron star; above it, gravity wins and a black hole forms. Neutron stars can still be seen; black holes cannot.",
        faq: [
          {
            q: "Which is denser?",
            a: "A black hole's singularity is effectively infinite density, but neutron stars are the densest visible objects known.",
          },
          {
            q: "Can a neutron star become a black hole?",
            a: "Yes. If it gains enough mass, gravity overcomes neutron pressure and it collapses into a black hole.",
          },
          {
            q: "What is a pulsar?",
            a: "A rapidly spinning neutron star that emits beams of radiation we detect as regular pulses.",
          },
        ],
      },
      fr: {
        title: "Trou noir vs Étoile à neutrons : restes stellaires",
        h1: "Trou noir vs Étoile à neutrons : étoiles mortes comparées",
        description:
          "Les trous noirs piègent la lumière ; les étoiles à neutrons sont ultra-denses mais visibles. Comparez ces restes stellaires.",
        intro:
          "À la mort des étoiles massives, elles s'effondrent en objets extrêmes. Deux issues dominent : une étoile à neutrons ou un trou noir.",
        pros_a: [
          "Une gravité si forte que même la lumière ne s'échappe pas",
          "Délimité par un horizon des événements, pas une surface",
          "Se forme à partir des étoiles les plus massives",
          "La singularité centrale a une densité quasi infinie",
          "Détecté par son effet sur la matière et la lumière voisines",
        ],
        pros_b: [
          "Une boule ultra-dense de neutrons serrés",
          "Possède une véritable surface solide",
          "Se forme d'étoiles sous la masse limite des trous noirs",
          "Peut tourner vite et émettre des ondes radio en pulsar",
          "Directement visible dans le spectre électromagnétique",
        ],
        verdict:
          "Tous deux sont des cadavres d'étoiles massives. Sous environ trois masses solaires, l'effondrement s'arrête en étoile à neutrons ; au-delà, la gravité l'emporte et un trou noir naît.",
        faq: [
          {
            q: "Lequel est le plus dense ?",
            a: "La singularité d'un trou noir a une densité quasi infinie, mais les étoiles à neutrons sont les objets visibles les plus denses.",
          },
          {
            q: "Une étoile à neutrons peut-elle devenir un trou noir ?",
            a: "Oui. Si elle gagne assez de masse, la gravité vainc la pression des neutrons et elle s'effondre en trou noir.",
          },
          {
            q: "Qu'est-ce qu'un pulsar ?",
            a: "Une étoile à neutrons en rotation rapide émettant des faisceaux de rayonnement perçus comme des pulsations régulières.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "star-vs-planet",
    a: "Star",
    b: "Planet",
    category: "science",
    emoji_a: "⭐",
    emoji_b: "🪐",
    content: {
      en: {
        title: "Star vs Planet: What's the Difference?",
        h1: "Star vs Planet: Light-Makers vs Light-Reflectors",
        description:
          "Stars generate their own light through fusion; planets only reflect starlight. Compare these two kinds of celestial body.",
        intro:
          "Look up at night and most points of light are stars, but a few are planets. The key difference is whether the object makes its own light.",
        pros_a: [
          "Generates its own light and heat through nuclear fusion",
          "Made mostly of hydrogen and helium plasma",
          "Held together and powered by enormous gravity",
          "Twinkles when seen through Earth's atmosphere",
          "Our Sun is the nearest example",
        ],
        pros_b: [
          "Does not produce light; it reflects a star's light",
          "Orbits a star and has cleared its orbital path",
          "Can be rocky like Earth or gaseous like Jupiter",
          "Shines with a steady light rather than twinkling",
          "Far less massive than a star",
        ],
        verdict:
          "Stars are nuclear furnaces that shine; planets are cooler bodies that merely reflect that light. A planet could never ignite fusion unless it gained enough mass to become a star.",
        faq: [
          {
            q: "Why do stars twinkle but planets do not?",
            a: "Stars are point sources, so atmospheric turbulence makes them twinkle; planets are small disks and shine steadily.",
          },
          {
            q: "How massive must an object be to become a star?",
            a: "Roughly 80 times the mass of Jupiter, enough to start hydrogen fusion in its core.",
          },
          {
            q: "Can a planet orbit two stars?",
            a: "Yes. Circumbinary planets orbit a pair of stars, and several have been confirmed.",
          },
        ],
      },
      fr: {
        title: "Étoile vs Planète : quelle différence ?",
        h1: "Étoile vs Planète : productrice vs réfléchissante de lumière",
        description:
          "Les étoiles produisent leur lumière par fusion ; les planètes ne font que la refléter. Comparez ces deux corps célestes.",
        intro:
          "La nuit, la plupart des points lumineux sont des étoiles, mais quelques-uns sont des planètes. La clé : l'objet produit-il sa propre lumière.",
        pros_a: [
          "Produit sa lumière et sa chaleur par fusion nucléaire",
          "Composée surtout de plasma d'hydrogène et d'hélium",
          "Tenue et alimentée par une gravité énorme",
          "Scintille vue à travers l'atmosphère terrestre",
          "Notre Soleil en est l'exemple le plus proche",
        ],
        pros_b: [
          "Ne produit pas de lumière ; elle reflète celle d'une étoile",
          "Orbite une étoile et a nettoyé son orbite",
          "Peut être rocheuse comme la Terre ou gazeuse comme Jupiter",
          "Brille d'une lumière stable plutôt que scintillante",
          "Bien moins massive qu'une étoile",
        ],
        verdict:
          "Les étoiles sont des fournaises nucléaires qui brillent ; les planètes des corps plus froids qui ne font que refléter. Une planète ne pourrait jamais s'enflammer sans gagner assez de masse.",
        faq: [
          {
            q: "Pourquoi les étoiles scintillent-elles et pas les planètes ?",
            a: "Les étoiles sont des sources ponctuelles : la turbulence atmosphérique les fait scintiller ; les planètes sont de petits disques et brillent régulièrement.",
          },
          {
            q: "Quelle masse faut-il pour devenir une étoile ?",
            a: "Environ 80 fois la masse de Jupiter, assez pour amorcer la fusion de l'hydrogène au cœur.",
          },
          {
            q: "Une planète peut-elle orbiter deux étoiles ?",
            a: "Oui. Les planètes circumbinaires orbitent une paire d'étoiles, et plusieurs ont été confirmées.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "asteroid-vs-comet",
    a: "Asteroid",
    b: "Comet",
    category: "science",
    emoji_a: "🪨",
    emoji_b: "☄️",
    content: {
      en: {
        title: "Asteroid vs Comet: Rocky vs Icy Bodies",
        h1: "Asteroid vs Comet: Two Small Solar System Bodies",
        description:
          "Asteroids are rocky and metallic; comets are icy and grow tails near the Sun. Compare these small solar system bodies.",
        intro:
          "Asteroids and comets are leftovers from the solar system's birth, but they differ in what they are made of and where they come from.",
        pros_a: [
          "Made mostly of rock and metal",
          "Mostly orbit in the asteroid belt between Mars and Jupiter",
          "Formed in the warmer inner solar system",
          "Stay solid and do not grow a tail",
          "Range from tiny boulders to hundreds of kilometers wide",
        ],
        pros_b: [
          "Made of ice, dust and frozen gases",
          "Originate in the distant Kuiper Belt and Oort Cloud",
          "Formed in the cold outer solar system",
          "Grow a glowing coma and tail when near the Sun",
          "Follow long, highly elliptical orbits",
        ],
        verdict:
          "Asteroids are rocky and stay close to home; comets are icy 'dirty snowballs' from the outer system that put on a show when sunlight vaporizes their ice into a tail.",
        faq: [
          {
            q: "Why do comets have tails but asteroids do not?",
            a: "Comets contain ice that vaporizes near the Sun, releasing gas and dust that form a glowing tail.",
          },
          {
            q: "Where do comets come from?",
            a: "From the Kuiper Belt beyond Neptune and the far more distant Oort Cloud.",
          },
          {
            q: "Could an asteroid hit Earth?",
            a: "Yes, and several have. Astronomers track near-Earth asteroids to assess any impact risk.",
          },
        ],
      },
      fr: {
        title: "Astéroïde vs Comète : corps rocheux vs glacés",
        h1: "Astéroïde vs Comète : deux petits corps du système solaire",
        description:
          "Les astéroïdes sont rocheux et métalliques ; les comètes glacées développent une queue près du Soleil. Comparez-les.",
        intro:
          "Astéroïdes et comètes sont des vestiges de la naissance du système solaire, mais diffèrent par leur composition et leur origine.",
        pros_a: [
          "Composé surtout de roche et de métal",
          "Orbitent surtout dans la ceinture entre Mars et Jupiter",
          "Formés dans le système solaire interne plus chaud",
          "Restent solides et ne développent pas de queue",
          "Vont du petit rocher à des centaines de kilomètres",
        ],
        pros_b: [
          "Composée de glace, poussière et gaz gelés",
          "Provient de la lointaine ceinture de Kuiper et du nuage d'Oort",
          "Formée dans le système solaire externe et froid",
          "Développe une chevelure et une queue près du Soleil",
          "Suit des orbites longues et très elliptiques",
        ],
        verdict:
          "Les astéroïdes sont rocheux et restent proches ; les comètes sont des « boules de neige sales » glacées du système externe qui font le spectacle quand le Soleil vaporise leur glace.",
        faq: [
          {
            q: "Pourquoi les comètes ont-elles une queue et pas les astéroïdes ?",
            a: "Les comètes contiennent de la glace qui se vaporise près du Soleil, libérant gaz et poussière formant une queue.",
          },
          {
            q: "D'où viennent les comètes ?",
            a: "De la ceinture de Kuiper au-delà de Neptune et du nuage d'Oort bien plus lointain.",
          },
          {
            q: "Un astéroïde pourrait-il frapper la Terre ?",
            a: "Oui, et plusieurs l'ont fait. Les astronomes suivent les astéroïdes géocroiseurs pour évaluer le risque d'impact.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "meteor-vs-meteorite",
    a: "Meteor",
    b: "Meteorite",
    category: "science",
    emoji_a: "🌠",
    emoji_b: "🪨",
    content: {
      en: {
        title: "Meteor vs Meteorite: Space Rock Terms",
        h1: "Meteor vs Meteorite: A Question of Location",
        description:
          "A meteor is the streak of light in the sky; a meteorite is the rock that survives and lands. Compare these space-rock terms.",
        intro:
          "Meteor and meteorite sound alike but describe different stages of the same event. The difference is simply where the space rock is.",
        pros_a: [
          "The bright streak of light seen burning in the sky",
          "Caused by a space rock heated by air friction",
          "Occurs high in Earth's atmosphere",
          "Also called a shooting star",
          "Most burn up completely before reaching the ground",
        ],
        pros_b: [
          "The actual rock that survives and reaches the ground",
          "A solid object you can hold and study",
          "Found on Earth's surface after the fall",
          "Provides direct samples of asteroids and other worlds",
          "Often shows a dark fusion crust from atmospheric heating",
        ],
        verdict:
          "The same object has three names: a meteoroid in space, a meteor while glowing through the atmosphere, and a meteorite once it lands. The terms track its journey to Earth.",
        faq: [
          {
            q: "What is a meteoroid?",
            a: "A small rocky or metallic body traveling through space before it enters a planet's atmosphere.",
          },
          {
            q: "Do most meteors become meteorites?",
            a: "No. The vast majority burn up entirely in the atmosphere and never reach the ground.",
          },
          {
            q: "What causes the bright streak?",
            a: "Friction with the air heats and ionizes the gas around the rock, producing a glowing trail.",
          },
        ],
      },
      fr: {
        title: "Météore vs Météorite : termes des roches spatiales",
        h1: "Météore vs Météorite : une question de lieu",
        description:
          "Un météore est la traînée lumineuse dans le ciel ; une météorite est la roche qui survit et atterrit. Comparez ces termes.",
        intro:
          "Météore et météorite se ressemblent mais décrivent des étapes différentes d'un même événement. La différence est l'endroit où se trouve la roche.",
        pros_a: [
          "La traînée lumineuse vue brûler dans le ciel",
          "Causée par une roche spatiale chauffée par le frottement",
          "Se produit haut dans l'atmosphère terrestre",
          "Aussi appelée étoile filante",
          "La plupart se consument avant d'atteindre le sol",
        ],
        pros_b: [
          "La roche réelle qui survit et atteint le sol",
          "Un objet solide que l'on peut tenir et étudier",
          "Trouvée à la surface de la Terre après la chute",
          "Fournit des échantillons directs d'astéroïdes et d'autres mondes",
          "Montre souvent une croûte de fusion sombre",
        ],
        verdict:
          "Le même objet a trois noms : météoroïde dans l'espace, météore en brûlant dans l'atmosphère, et météorite une fois au sol. Les termes suivent son voyage vers la Terre.",
        faq: [
          {
            q: "Qu'est-ce qu'un météoroïde ?",
            a: "Un petit corps rocheux ou métallique voyageant dans l'espace avant d'entrer dans une atmosphère.",
          },
          {
            q: "La plupart des météores deviennent-ils des météorites ?",
            a: "Non. La grande majorité se consume entièrement dans l'atmosphère et n'atteint jamais le sol.",
          },
          {
            q: "Qu'est-ce qui cause la traînée lumineuse ?",
            a: "Le frottement avec l'air chauffe et ionise le gaz autour de la roche, produisant une traînée brillante.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "solar-eclipse-vs-lunar-eclipse",
    a: "Solar eclipse",
    b: "Lunar eclipse",
    category: "science",
    emoji_a: "🌑",
    emoji_b: "🌕",
    content: {
      en: {
        title: "Solar vs Lunar Eclipse: What's the Difference?",
        h1: "Solar vs Lunar Eclipse: Two Cosmic Alignments",
        description:
          "A solar eclipse hides the Sun; a lunar eclipse darkens the Moon. Compare how these two cosmic alignments work.",
        intro:
          "Eclipses are a game of shadows between the Sun, Earth and Moon. Which body is blocked decides whether it is a solar or lunar eclipse.",
        pros_a: [
          "The Moon passes between the Sun and Earth",
          "The Moon's shadow blocks the Sun's light",
          "Happens only during a new moon",
          "Visible only from a narrow path on Earth",
          "Must never be viewed without proper eye protection",
        ],
        pros_b: [
          "Earth passes between the Sun and the Moon",
          "Earth's shadow falls across the Moon",
          "Happens only during a full moon",
          "Visible from the entire night side of Earth",
          "Safe to watch with the naked eye",
        ],
        verdict:
          "In a solar eclipse the Moon's shadow hits Earth; in a lunar eclipse Earth's shadow hits the Moon. Lunar eclipses are easier to see and safe to watch; solar eclipses are rarer from any one spot.",
        faq: [
          {
            q: "Why is a solar eclipse visible from fewer places?",
            a: "The Moon's shadow is small, so totality only crosses a narrow path on Earth's surface.",
          },
          {
            q: "Why does the Moon turn red in a lunar eclipse?",
            a: "Sunlight bent through Earth's atmosphere reaches the Moon, and red wavelengths dominate, giving a 'blood moon'.",
          },
          {
            q: "Can you watch a lunar eclipse safely?",
            a: "Yes. Unlike a solar eclipse, a lunar eclipse is completely safe to view with the naked eye.",
          },
        ],
      },
      fr: {
        title: "Éclipse solaire vs lunaire : quelle différence ?",
        h1: "Éclipse solaire vs lunaire : deux alignements cosmiques",
        description:
          "Une éclipse solaire cache le Soleil ; une éclipse lunaire assombrit la Lune. Comparez ces deux alignements cosmiques.",
        intro:
          "Les éclipses sont un jeu d'ombres entre Soleil, Terre et Lune. Le corps masqué décide s'il s'agit d'une éclipse solaire ou lunaire.",
        pros_a: [
          "La Lune passe entre le Soleil et la Terre",
          "L'ombre de la Lune bloque la lumière du Soleil",
          "Ne se produit qu'à la nouvelle lune",
          "Visible seulement depuis une bande étroite sur Terre",
          "Ne doit jamais être observée sans protection oculaire",
        ],
        pros_b: [
          "La Terre passe entre le Soleil et la Lune",
          "L'ombre de la Terre tombe sur la Lune",
          "Ne se produit qu'à la pleine lune",
          "Visible de tout le côté nuit de la Terre",
          "Sans danger à observer à l'œil nu",
        ],
        verdict:
          "Lors d'une éclipse solaire, l'ombre de la Lune frappe la Terre ; lors d'une lunaire, l'ombre de la Terre frappe la Lune. Les éclipses lunaires sont plus faciles et sûres à voir.",
        faq: [
          {
            q: "Pourquoi une éclipse solaire est-elle visible de moins d'endroits ?",
            a: "L'ombre de la Lune est petite ; la totalité ne traverse qu'une bande étroite de la surface terrestre.",
          },
          {
            q: "Pourquoi la Lune devient-elle rouge lors d'une éclipse lunaire ?",
            a: "La lumière solaire courbée par l'atmosphère atteint la Lune ; les longueurs d'onde rouges dominent, d'où la « lune de sang ».",
          },
          {
            q: "Peut-on regarder une éclipse lunaire sans danger ?",
            a: "Oui. Contrairement à l'éclipse solaire, l'éclipse lunaire s'observe sans risque à l'œil nu.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "galaxy-vs-nebula",
    a: "Galaxy",
    b: "Nebula",
    category: "science",
    emoji_a: "🌌",
    emoji_b: "☁️",
    content: {
      en: {
        title: "Galaxy vs Nebula: Cosmic Structures Compared",
        h1: "Galaxy vs Nebula: Star Cities vs Gas Clouds",
        description:
          "A galaxy is a vast collection of stars; a nebula is a cloud of gas and dust. Compare these two cosmic structures.",
        intro:
          "Galaxies and nebulae are both spectacular sights in deep space, but they are very different things — one is a star system, the other raw material.",
        pros_a: [
          "A huge gravitationally bound system of stars",
          "Contains billions to trillions of stars",
          "Has a defined structure: spiral, elliptical or irregular",
          "Holds stars, gas, dust, planets and dark matter",
          "Our Milky Way is one example among trillions",
        ],
        pros_b: [
          "A cloud of interstellar gas and dust",
          "Often the birthplace of new stars",
          "Much smaller than a galaxy",
          "Can glow, reflect light or appear dark",
          "Frequently found within galaxies, including ours",
        ],
        verdict:
          "A galaxy is a massive star city; a nebula is a cloud of gas and dust often inside a galaxy. Nebulae are the nurseries where stars form, so they are part of galactic life cycles.",
        faq: [
          {
            q: "Are nebulae inside galaxies?",
            a: "Usually yes. Most nebulae lie within galaxies, including many visible in our own Milky Way.",
          },
          {
            q: "Why are some nebulae called star nurseries?",
            a: "Gravity pulls their gas and dust together until it collapses and ignites into new stars.",
          },
          {
            q: "How big is a typical galaxy?",
            a: "Galaxies span tens of thousands of light-years and contain billions or trillions of stars.",
          },
        ],
      },
      fr: {
        title: "Galaxie vs Nébuleuse : structures cosmiques",
        h1: "Galaxie vs Nébuleuse : cités d'étoiles vs nuages de gaz",
        description:
          "Une galaxie est un vaste ensemble d'étoiles ; une nébuleuse un nuage de gaz et de poussière. Comparez ces structures cosmiques.",
        intro:
          "Galaxies et nébuleuses sont des spectacles de l'espace profond, mais très différents : l'un est un système stellaire, l'autre une matière brute.",
        pros_a: [
          "Un immense système d'étoiles lié par la gravité",
          "Contient des milliards à des billions d'étoiles",
          "A une structure définie : spirale, elliptique ou irrégulière",
          "Renferme étoiles, gaz, poussière, planètes et matière noire",
          "Notre Voie lactée en est un exemple parmi des billions",
        ],
        pros_b: [
          "Un nuage de gaz et de poussière interstellaires",
          "Souvent le berceau de nouvelles étoiles",
          "Bien plus petite qu'une galaxie",
          "Peut briller, refléter la lumière ou paraître sombre",
          "Souvent située au sein de galaxies, dont la nôtre",
        ],
        verdict:
          "Une galaxie est une cité d'étoiles massive ; une nébuleuse un nuage de gaz souvent à l'intérieur d'une galaxie. Les nébuleuses sont les pouponnières où naissent les étoiles.",
        faq: [
          {
            q: "Les nébuleuses sont-elles dans les galaxies ?",
            a: "Le plus souvent oui. La plupart se trouvent au sein de galaxies, dont beaucoup dans notre Voie lactée.",
          },
          {
            q: "Pourquoi certaines nébuleuses sont des pouponnières d'étoiles ?",
            a: "La gravité rassemble leur gaz et poussière jusqu'à l'effondrement, allumant de nouvelles étoiles.",
          },
          {
            q: "Quelle est la taille d'une galaxie typique ?",
            a: "Les galaxies s'étendent sur des dizaines de milliers d'années-lumière et contiennent des milliards d'étoiles.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "big-bang-vs-steady-state",
    a: "Big Bang theory",
    b: "Steady State theory",
    category: "science",
    emoji_a: "💥",
    emoji_b: "♾️",
    content: {
      en: {
        title: "Big Bang vs Steady State: Cosmology Compared",
        h1: "Big Bang vs Steady State: How the Universe Began",
        description:
          "The Big Bang says the universe had a hot dense start; Steady State said it always existed. Compare these two cosmologies.",
        intro:
          "For decades two rival theories competed to explain the universe's origin. One won decisively, but the debate shaped modern cosmology.",
        pros_a: [
          "Universe began about 13.8 billion years ago",
          "Started from an extremely hot, dense state and expanded",
          "Predicts the cosmic microwave background radiation",
          "Explains the observed abundance of hydrogen and helium",
          "The accepted model, backed by strong evidence",
        ],
        pros_b: [
          "Proposed the universe had no beginning and no end",
          "Suggested matter is continuously created as space expands",
          "Kept the universe's density constant over time",
          "Offered a tidy, eternal cosmos with no origin point",
          "Now rejected, as it fails to explain key observations",
        ],
        verdict:
          "The Big Bang theory won because it predicted the cosmic microwave background, discovered in 1965. Steady State could not explain that radiation and has been abandoned by modern cosmology.",
        faq: [
          {
            q: "What evidence supports the Big Bang?",
            a: "The cosmic microwave background, galaxy redshift expansion, and the measured ratio of light elements.",
          },
          {
            q: "Why was Steady State rejected?",
            a: "It could not explain the cosmic microwave background or the evolution of galaxies over cosmic time.",
          },
          {
            q: "Did the Big Bang explode into existing space?",
            a: "No. The Big Bang created space and time themselves; it was an expansion of space, not an explosion within it.",
          },
        ],
      },
      fr: {
        title: "Big Bang vs État stationnaire : cosmologies",
        h1: "Big Bang vs État stationnaire : l'origine de l'univers",
        description:
          "Le Big Bang dit que l'univers a eu un début chaud et dense ; l'État stationnaire qu'il a toujours existé. Comparez-les.",
        intro:
          "Pendant des décennies, deux théories rivales expliquaient l'origine de l'univers. L'une l'a emporté nettement, mais le débat a façonné la cosmologie.",
        pros_a: [
          "L'univers a commencé il y a environ 13,8 milliards d'années",
          "Parti d'un état très chaud et dense, puis en expansion",
          "Prédit le fond diffus cosmologique",
          "Explique l'abondance observée d'hydrogène et d'hélium",
          "Le modèle accepté, étayé par de solides preuves",
        ],
        pros_b: [
          "Proposait un univers sans début ni fin",
          "Suggérait une création continue de matière à mesure de l'expansion",
          "Maintenait la densité de l'univers constante dans le temps",
          "Offrait un cosmos éternel sans point d'origine",
          "Aujourd'hui rejetée, n'expliquant pas des observations clés",
        ],
        verdict:
          "La théorie du Big Bang l'a emporté car elle prédisait le fond diffus cosmologique, découvert en 1965. L'État stationnaire ne pouvait l'expliquer et a été abandonné.",
        faq: [
          {
            q: "Quelles preuves soutiennent le Big Bang ?",
            a: "Le fond diffus cosmologique, le décalage vers le rouge des galaxies et le rapport mesuré des éléments légers.",
          },
          {
            q: "Pourquoi l'État stationnaire a-t-il été rejeté ?",
            a: "Il ne pouvait expliquer le fond diffus cosmologique ni l'évolution des galaxies au fil du temps cosmique.",
          },
          {
            q: "Le Big Bang a-t-il explosé dans un espace existant ?",
            a: "Non. Le Big Bang a créé l'espace et le temps eux-mêmes ; c'était une expansion de l'espace, pas une explosion dedans.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "algebra-vs-calculus",
    a: "Algebra",
    b: "Calculus",
    category: "science",
    emoji_a: "🔢",
    emoji_b: "∫",
    content: {
      en: {
        title: "Algebra vs Calculus: Two Branches of Math",
        h1: "Algebra vs Calculus: From Equations to Change",
        description:
          "Algebra works with unknowns and equations; calculus studies rates of change and accumulation. Compare these math branches.",
        intro:
          "Algebra and calculus are pillars of mathematics. Algebra lays the groundwork, while calculus extends it to a world that is constantly changing.",
        pros_a: [
          "Uses letters and symbols to represent unknown numbers",
          "Solves equations and analyzes relationships",
          "Works with fixed, static quantities",
          "Foundation for nearly all higher mathematics",
          "Taught before calculus in most curricula",
        ],
        pros_b: [
          "Studies continuous change and motion",
          "Built on the concepts of limits and infinity",
          "Derivatives measure rates of change",
          "Integrals measure accumulation and area",
          "Essential for physics, engineering and economics",
        ],
        verdict:
          "Algebra is the language and toolkit of mathematics; calculus uses that toolkit to handle change. You need solid algebra before calculus makes sense — they build on each other.",
        faq: [
          {
            q: "Do you need algebra to learn calculus?",
            a: "Yes. Calculus relies heavily on algebraic manipulation, so a strong algebra foundation is essential.",
          },
          {
            q: "What is calculus mainly used for?",
            a: "Modeling change — velocity, growth, areas and optimization — across physics, engineering and economics.",
          },
          {
            q: "Who invented calculus?",
            a: "Isaac Newton and Gottfried Leibniz developed it independently in the late 17th century.",
          },
        ],
      },
      fr: {
        title: "Algèbre vs Calcul : deux branches des maths",
        h1: "Algèbre vs Calcul : des équations au changement",
        description:
          "L'algèbre manie inconnues et équations ; le calcul étudie taux de variation et accumulation. Comparez ces branches.",
        intro:
          "Algèbre et calcul sont des piliers des mathématiques. L'algèbre pose les bases, le calcul l'étend à un monde en perpétuel changement.",
        pros_a: [
          "Utilise lettres et symboles pour des nombres inconnus",
          "Résout des équations et analyse des relations",
          "Travaille avec des quantités fixes et statiques",
          "Fondement de presque toutes les maths supérieures",
          "Enseignée avant le calcul dans la plupart des cursus",
        ],
        pros_b: [
          "Étudie le changement continu et le mouvement",
          "Bâti sur les concepts de limites et d'infini",
          "Les dérivées mesurent les taux de variation",
          "Les intégrales mesurent l'accumulation et l'aire",
          "Essentiel à la physique, l'ingénierie et l'économie",
        ],
        verdict:
          "L'algèbre est le langage et la boîte à outils des maths ; le calcul utilise cette boîte pour traiter le changement. Une algèbre solide est requise avant le calcul.",
        faq: [
          {
            q: "Faut-il l'algèbre pour apprendre le calcul ?",
            a: "Oui. Le calcul repose largement sur la manipulation algébrique ; une base solide est essentielle.",
          },
          {
            q: "À quoi sert surtout le calcul ?",
            a: "À modéliser le changement — vitesse, croissance, aires, optimisation — en physique, ingénierie et économie.",
          },
          {
            q: "Qui a inventé le calcul ?",
            a: "Isaac Newton et Gottfried Leibniz l'ont développé indépendamment à la fin du XVIIe siècle.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "derivative-vs-integral",
    a: "Derivative",
    b: "Integral",
    category: "science",
    emoji_a: "📈",
    emoji_b: "∫",
    content: {
      en: {
        title: "Derivative vs Integral: Calculus Core Concepts",
        h1: "Derivative vs Integral: Two Sides of Calculus",
        description:
          "A derivative measures rate of change; an integral measures accumulation and area. Compare these two calculus operations.",
        intro:
          "Calculus has two central operations that are deeply linked. One zooms in on instantaneous change; the other sums up small pieces.",
        pros_a: [
          "Measures the instantaneous rate of change",
          "Gives the slope of a curve at a point",
          "Found by differentiation",
          "Velocity is the derivative of position",
          "Used to find maximum and minimum values",
        ],
        pros_b: [
          "Measures total accumulation over an interval",
          "Gives the area under a curve",
          "Found by integration",
          "Distance is the integral of velocity",
          "Used to compute areas, volumes and totals",
        ],
        verdict:
          "Derivatives and integrals are inverse operations, joined by the Fundamental Theorem of Calculus. Differentiating undoes integrating, and vice versa. Together they describe both change and accumulation.",
        faq: [
          {
            q: "How are derivatives and integrals related?",
            a: "They are inverse operations, linked by the Fundamental Theorem of Calculus.",
          },
          {
            q: "What does a derivative tell you?",
            a: "It gives the rate of change at an instant — for example, the slope of a curve at one point.",
          },
          {
            q: "What does an integral compute?",
            a: "It computes accumulated quantities, most commonly the area under a curve over an interval.",
          },
        ],
      },
      fr: {
        title: "Dérivée vs Intégrale : concepts clés du calcul",
        h1: "Dérivée vs Intégrale : les deux faces du calcul",
        description:
          "Une dérivée mesure le taux de variation ; une intégrale l'accumulation et l'aire. Comparez ces deux opérations du calcul.",
        intro:
          "Le calcul a deux opérations centrales profondément liées. L'une zoome sur le changement instantané, l'autre additionne de petits morceaux.",
        pros_a: [
          "Mesure le taux de variation instantané",
          "Donne la pente d'une courbe en un point",
          "Obtenue par dérivation",
          "La vitesse est la dérivée de la position",
          "Sert à trouver les maxima et minima",
        ],
        pros_b: [
          "Mesure l'accumulation totale sur un intervalle",
          "Donne l'aire sous une courbe",
          "Obtenue par intégration",
          "La distance est l'intégrale de la vitesse",
          "Sert à calculer aires, volumes et totaux",
        ],
        verdict:
          "Dérivées et intégrales sont des opérations inverses, reliées par le théorème fondamental du calcul. Dériver défait l'intégration et inversement. Ensemble elles décrivent changement et accumulation.",
        faq: [
          {
            q: "Comment dérivée et intégrale sont-elles liées ?",
            a: "Ce sont des opérations inverses, reliées par le théorème fondamental du calcul.",
          },
          {
            q: "Que dit une dérivée ?",
            a: "Elle donne le taux de variation à un instant — par exemple la pente d'une courbe en un point.",
          },
          {
            q: "Que calcule une intégrale ?",
            a: "Elle calcule des quantités accumulées, le plus souvent l'aire sous une courbe sur un intervalle.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "vector-vs-scalar",
    a: "Vector",
    b: "Scalar",
    category: "science",
    emoji_a: "➡️",
    emoji_b: "🔢",
    content: {
      en: {
        title: "Vector vs Scalar: Quantities in Physics",
        h1: "Vector vs Scalar: With or Without Direction",
        description:
          "A vector has magnitude and direction; a scalar has only magnitude. Compare these two kinds of physical quantity.",
        intro:
          "Every physical quantity is either a vector or a scalar. The distinction is simple but crucial: does it have a direction?",
        pros_a: [
          "Has both magnitude and direction",
          "Examples include velocity, force and displacement",
          "Drawn as an arrow whose length shows size",
          "Added using geometry, not simple arithmetic",
          "Direction is essential to its meaning",
        ],
        pros_b: [
          "Has magnitude only, with no direction",
          "Examples include mass, speed, time and temperature",
          "Fully described by a single number and unit",
          "Added using ordinary arithmetic",
          "Often the magnitude of a related vector",
        ],
        verdict:
          "Scalars are single numbers; vectors carry a direction too. Speed is a scalar, velocity is its vector cousin. Knowing which type you have determines how you can add and use the quantity.",
        faq: [
          {
            q: "Is temperature a vector or a scalar?",
            a: "Temperature is a scalar — it has a magnitude but no direction.",
          },
          {
            q: "Why can't you add vectors like ordinary numbers?",
            a: "Because direction matters; vectors are combined using geometry or component-by-component addition.",
          },
          {
            q: "Give an example of a vector and its scalar pair.",
            a: "Velocity is a vector; its magnitude, speed, is the corresponding scalar.",
          },
        ],
      },
      fr: {
        title: "Vecteur vs Scalaire : grandeurs en physique",
        h1: "Vecteur vs Scalaire : avec ou sans direction",
        description:
          "Un vecteur a une magnitude et une direction ; un scalaire n'a qu'une magnitude. Comparez ces deux types de grandeurs.",
        intro:
          "Toute grandeur physique est soit un vecteur, soit un scalaire. La distinction est simple mais cruciale : a-t-elle une direction ?",
        pros_a: [
          "Possède une magnitude et une direction",
          "Exemples : vélocité, force et déplacement",
          "Dessiné comme une flèche dont la longueur indique la taille",
          "S'additionne par la géométrie, non par simple arithmétique",
          "La direction est essentielle à son sens",
        ],
        pros_b: [
          "N'a qu'une magnitude, sans direction",
          "Exemples : masse, vitesse, temps et température",
          "Entièrement décrit par un nombre et une unité",
          "S'additionne par arithmétique ordinaire",
          "Souvent la magnitude d'un vecteur associé",
        ],
        verdict:
          "Les scalaires sont de simples nombres ; les vecteurs portent aussi une direction. La vitesse est un scalaire, la vélocité son cousin vectoriel. Le type détermine comment additionner la grandeur.",
        faq: [
          {
            q: "La température est-elle un vecteur ou un scalaire ?",
            a: "La température est un scalaire — elle a une magnitude mais aucune direction.",
          },
          {
            q: "Pourquoi ne peut-on additionner les vecteurs comme des nombres ?",
            a: "Parce que la direction compte ; les vecteurs se combinent par géométrie ou composante par composante.",
          },
          {
            q: "Donnez un exemple de vecteur et son scalaire associé.",
            a: "La vélocité est un vecteur ; sa magnitude, la vitesse, est le scalaire correspondant.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "mean-vs-median",
    a: "Mean",
    b: "Median",
    category: "science",
    emoji_a: "📊",
    emoji_b: "📐",
    content: {
      en: {
        title: "Mean vs Median: Two Averages Compared",
        h1: "Mean vs Median: Which Average to Use",
        description:
          "The mean is the arithmetic average; the median is the middle value. Compare these two measures of central tendency.",
        intro:
          "Both mean and median describe the 'center' of data, but they can give very different answers when the data is skewed.",
        pros_a: [
          "The sum of all values divided by the count",
          "Uses every single data point",
          "Common in everyday statistics and calculations",
          "Strongly affected by extreme outliers",
          "Easy to use in further mathematical formulas",
        ],
        pros_b: [
          "The middle value when data is sorted in order",
          "Splits the dataset into two equal halves",
          "Barely affected by extreme outliers",
          "Better represents typical values in skewed data",
          "Used for incomes, house prices and similar data",
        ],
        verdict:
          "Use the mean for symmetric data without big outliers; use the median when data is skewed — like incomes — because a few extreme values can drag the mean far from typical experience.",
        faq: [
          {
            q: "Why is median preferred for income data?",
            a: "Incomes are skewed by a few very high earners; the median better reflects what a typical person earns.",
          },
          {
            q: "Can the mean and median be equal?",
            a: "Yes. In a perfectly symmetric distribution the mean and median are the same value.",
          },
          {
            q: "Which average is sensitive to outliers?",
            a: "The mean. A single extreme value can shift it noticeably, while the median resists outliers.",
          },
        ],
      },
      fr: {
        title: "Moyenne vs Médiane : deux moyennes comparées",
        h1: "Moyenne vs Médiane : quelle moyenne utiliser",
        description:
          "La moyenne est la moyenne arithmétique ; la médiane la valeur centrale. Comparez ces deux mesures de tendance centrale.",
        intro:
          "Moyenne et médiane décrivent toutes deux le « centre » des données, mais peuvent donner des réponses très différentes si les données sont asymétriques.",
        pros_a: [
          "La somme de toutes les valeurs divisée par le nombre",
          "Utilise chaque point de données",
          "Courante dans les statistiques et calculs du quotidien",
          "Fortement affectée par les valeurs extrêmes",
          "Facile à employer dans d'autres formules mathématiques",
        ],
        pros_b: [
          "La valeur centrale quand les données sont triées",
          "Sépare le jeu de données en deux moitiés égales",
          "À peine affectée par les valeurs extrêmes",
          "Représente mieux les valeurs typiques de données asymétriques",
          "Utilisée pour les revenus, les prix immobiliers, etc.",
        ],
        verdict:
          "Utilisez la moyenne pour des données symétriques sans grandes valeurs extrêmes ; la médiane pour des données asymétriques comme les revenus, car quelques extrêmes éloignent la moyenne du typique.",
        faq: [
          {
            q: "Pourquoi préfère-t-on la médiane pour les revenus ?",
            a: "Les revenus sont biaisés par quelques très hauts salaires ; la médiane reflète mieux ce que gagne une personne typique.",
          },
          {
            q: "Moyenne et médiane peuvent-elles être égales ?",
            a: "Oui. Dans une distribution parfaitement symétrique, moyenne et médiane ont la même valeur.",
          },
          {
            q: "Quelle moyenne est sensible aux valeurs extrêmes ?",
            a: "La moyenne. Une seule valeur extrême peut la décaler nettement, tandis que la médiane y résiste.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "variance-vs-standard-deviation",
    a: "Variance",
    b: "Standard deviation",
    category: "science",
    emoji_a: "📉",
    emoji_b: "📏",
    content: {
      en: {
        title: "Variance vs Standard Deviation Explained",
        h1: "Variance vs Standard Deviation: Measuring Spread",
        description:
          "Variance is the average squared spread; standard deviation is its square root. Compare these two measures of dispersion.",
        intro:
          "Both quantities measure how spread out data is, and they are directly related — the standard deviation is simply the square root of the variance.",
        pros_a: [
          "The average of the squared deviations from the mean",
          "Always non-negative",
          "Expressed in squared units of the original data",
          "Adds neatly when combining independent variables",
          "A core building block of statistical theory",
        ],
        pros_b: [
          "The square root of the variance",
          "Expressed in the same units as the original data",
          "Easier to interpret in real-world terms",
          "Used to describe the width of a normal distribution",
          "More common in reports and everyday statistics",
        ],
        verdict:
          "Variance is mathematically convenient but its squared units are hard to interpret. Standard deviation undoes the squaring, so it is easier to read. Use variance in proofs, standard deviation in reports.",
        faq: [
          {
            q: "How are variance and standard deviation related?",
            a: "The standard deviation is the square root of the variance, bringing it back to the original units.",
          },
          {
            q: "Why is standard deviation easier to interpret?",
            a: "It is in the same units as the data, so a deviation in meters or dollars makes intuitive sense.",
          },
          {
            q: "Can variance be negative?",
            a: "No. Because it averages squared values, variance is always zero or positive.",
          },
        ],
      },
      fr: {
        title: "Variance vs Écart-type expliqués",
        h1: "Variance vs Écart-type : mesurer la dispersion",
        description:
          "La variance est la dispersion carrée moyenne ; l'écart-type sa racine carrée. Comparez ces deux mesures de dispersion.",
        intro:
          "Les deux grandeurs mesurent la dispersion des données et sont directement liées : l'écart-type est la racine carrée de la variance.",
        pros_a: [
          "La moyenne des écarts au carré par rapport à la moyenne",
          "Toujours non négative",
          "Exprimée dans les unités au carré des données",
          "S'additionne proprement pour des variables indépendantes",
          "Une brique fondamentale de la théorie statistique",
        ],
        pros_b: [
          "La racine carrée de la variance",
          "Exprimé dans les mêmes unités que les données",
          "Plus facile à interpréter concrètement",
          "Sert à décrire la largeur d'une loi normale",
          "Plus courant dans les rapports et statistiques du quotidien",
        ],
        verdict:
          "La variance est commode mathématiquement mais ses unités au carré sont peu lisibles. L'écart-type annule le carré et se lit mieux. Variance pour les preuves, écart-type pour les rapports.",
        faq: [
          {
            q: "Comment variance et écart-type sont-ils liés ?",
            a: "L'écart-type est la racine carrée de la variance, le ramenant aux unités d'origine.",
          },
          {
            q: "Pourquoi l'écart-type est-il plus facile à interpréter ?",
            a: "Il est dans les mêmes unités que les données, donc un écart en mètres ou euros a un sens intuitif.",
          },
          {
            q: "La variance peut-elle être négative ?",
            a: "Non. Comme elle moyenne des valeurs au carré, la variance est toujours nulle ou positive.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "permutation-vs-combination",
    a: "Permutation",
    b: "Combination",
    category: "science",
    emoji_a: "🔢",
    emoji_b: "🎲",
    content: {
      en: {
        title: "Permutation vs Combination: Does Order Matter?",
        h1: "Permutation vs Combination: Counting Arrangements",
        description:
          "Permutations count ordered arrangements; combinations count unordered selections. Compare these two counting methods.",
        intro:
          "Both permutations and combinations count ways to choose items, but the answer depends on one question: does the order matter?",
        pros_a: [
          "Counts arrangements where order matters",
          "ABC and CBA are counted as different",
          "Always gives a count equal to or larger than combinations",
          "Used for rankings, passwords and seat orders",
          "Calculated as n! divided by (n minus r) factorial",
        ],
        pros_b: [
          "Counts selections where order does not matter",
          "ABC and CBA are counted as the same group",
          "Always gives a count equal to or smaller than permutations",
          "Used for lottery picks, committees and card hands",
          "Calculated by dividing permutations by r factorial",
        ],
        verdict:
          "Ask whether order matters. For a race podium (gold, silver, bronze) use permutations; for picking a committee where all members are equal, use combinations.",
        faq: [
          {
            q: "How do I decide which to use?",
            a: "If rearranging the chosen items creates a different outcome, use permutations; if not, use combinations.",
          },
          {
            q: "Is a lottery a permutation or a combination?",
            a: "A combination, because the order in which numbers are drawn usually does not matter.",
          },
          {
            q: "Which gives a bigger number?",
            a: "Permutations, since each unordered combination corresponds to several ordered arrangements.",
          },
        ],
      },
      fr: {
        title: "Permutation vs Combinaison : l'ordre compte-t-il ?",
        h1: "Permutation vs Combinaison : compter les arrangements",
        description:
          "Les permutations comptent les arrangements ordonnés ; les combinaisons les sélections non ordonnées. Comparez ces méthodes.",
        intro:
          "Permutations et combinaisons comptent les façons de choisir des éléments, mais la réponse dépend d'une question : l'ordre compte-t-il ?",
        pros_a: [
          "Compte les arrangements où l'ordre compte",
          "ABC et CBA sont comptés comme différents",
          "Donne toujours un nombre égal ou supérieur aux combinaisons",
          "Sert aux classements, mots de passe et ordres de places",
          "Calculée comme n! divisé par (n moins r) factorielle",
        ],
        pros_b: [
          "Compte les sélections où l'ordre n'importe pas",
          "ABC et CBA sont comptés comme le même groupe",
          "Donne toujours un nombre égal ou inférieur aux permutations",
          "Sert au loto, aux comités et aux mains de cartes",
          "Calculée en divisant les permutations par r factorielle",
        ],
        verdict:
          "Demandez-vous si l'ordre compte. Pour un podium (or, argent, bronze), utilisez les permutations ; pour un comité où tous les membres sont égaux, les combinaisons.",
        faq: [
          {
            q: "Comment décider laquelle utiliser ?",
            a: "Si réarranger les éléments choisis crée un résultat différent, utilisez les permutations ; sinon, les combinaisons.",
          },
          {
            q: "Le loto est-il une permutation ou une combinaison ?",
            a: "Une combinaison, car l'ordre de tirage des numéros n'importe généralement pas.",
          },
          {
            q: "Laquelle donne le plus grand nombre ?",
            a: "Les permutations, car chaque combinaison non ordonnée correspond à plusieurs arrangements ordonnés.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "supervised-vs-unsupervised-learning",
    a: "Supervised learning",
    b: "Unsupervised learning",
    category: "science",
    emoji_a: "🏷️",
    emoji_b: "🔍",
    content: {
      en: {
        title: "Supervised vs Unsupervised Learning",
        h1: "Supervised vs Unsupervised Learning Compared",
        description:
          "Supervised learning trains on labeled data; unsupervised learning finds patterns in unlabeled data. Compare both approaches.",
        intro:
          "Machine learning has two foundational styles. The key difference is whether the training data comes with correct answers attached.",
        pros_a: [
          "Trains on data that includes known labels or answers",
          "Learns to predict outputs from inputs",
          "Used for classification and regression tasks",
          "Accuracy can be measured against the true labels",
          "Needs costly human-labeled training data",
        ],
        pros_b: [
          "Trains on data with no labels at all",
          "Discovers hidden structure and patterns",
          "Used for clustering and dimensionality reduction",
          "Harder to evaluate without a ground truth",
          "Works with abundant raw, unlabeled data",
        ],
        verdict:
          "Use supervised learning when you have labeled examples and a clear target to predict. Use unsupervised learning to explore unlabeled data and uncover groupings you did not define in advance.",
        faq: [
          {
            q: "Which needs labeled data?",
            a: "Supervised learning. It requires input-output pairs where the correct answer is already known.",
          },
          {
            q: "What is a typical unsupervised task?",
            a: "Clustering — grouping similar data points together without any predefined categories.",
          },
          {
            q: "Is one better than the other?",
            a: "Neither. The right choice depends on whether your data is labeled and what problem you need to solve.",
          },
        ],
      },
      fr: {
        title: "Apprentissage supervisé vs non supervisé",
        h1: "Apprentissage supervisé vs non supervisé comparés",
        description:
          "L'apprentissage supervisé s'entraîne sur des données étiquetées ; le non supervisé trouve des motifs dans des données non étiquetées.",
        intro:
          "L'apprentissage automatique a deux styles fondamentaux. La clé : les données d'entraînement viennent-elles avec les bonnes réponses ?",
        pros_a: [
          "S'entraîne sur des données avec étiquettes ou réponses connues",
          "Apprend à prédire des sorties à partir d'entrées",
          "Sert aux tâches de classification et de régression",
          "La précision se mesure contre les vraies étiquettes",
          "Nécessite des données étiquetées par des humains, coûteuses",
        ],
        pros_b: [
          "S'entraîne sur des données sans aucune étiquette",
          "Découvre des structures et motifs cachés",
          "Sert au clustering et à la réduction de dimension",
          "Plus difficile à évaluer sans vérité de terrain",
          "Fonctionne avec des données brutes abondantes",
        ],
        verdict:
          "Utilisez le supervisé quand vous avez des exemples étiquetés et une cible claire à prédire. Le non supervisé pour explorer des données non étiquetées et révéler des regroupements.",
        faq: [
          {
            q: "Lequel a besoin de données étiquetées ?",
            a: "Le supervisé. Il exige des paires entrée-sortie où la bonne réponse est déjà connue.",
          },
          {
            q: "Quelle est une tâche non supervisée typique ?",
            a: "Le clustering — regrouper des points de données similaires sans catégories prédéfinies.",
          },
          {
            q: "L'un est-il meilleur que l'autre ?",
            a: "Aucun. Le bon choix dépend de l'étiquetage de vos données et du problème à résoudre.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "classification-vs-regression",
    a: "Classification",
    b: "Regression",
    category: "science",
    emoji_a: "🏷️",
    emoji_b: "📈",
    content: {
      en: {
        title: "Classification vs Regression in Machine Learning",
        h1: "Classification vs Regression: Predicting Outcomes",
        description:
          "Classification predicts categories; regression predicts continuous numbers. Compare these two supervised learning tasks.",
        intro:
          "Both are supervised learning tasks, but they answer different kinds of question. One sorts data into groups; the other predicts a number.",
        pros_a: [
          "Predicts which category or class an input belongs to",
          "Output is a discrete label, like spam or not spam",
          "Evaluated with accuracy, precision and recall",
          "Examples: image recognition, disease diagnosis",
          "Decision boundaries separate the classes",
        ],
        pros_b: [
          "Predicts a continuous numerical value",
          "Output is a number, like a price or temperature",
          "Evaluated with error metrics like mean squared error",
          "Examples: house price and stock value prediction",
          "Fits a line or curve through the data",
        ],
        verdict:
          "Ask what kind of answer you need. If the output is a label or category, use classification; if it is a quantity on a continuous scale, use regression.",
        faq: [
          {
            q: "How do I tell which task I have?",
            a: "If you predict a category, it is classification; if you predict a number, it is regression.",
          },
          {
            q: "Is predicting house prices classification or regression?",
            a: "Regression, because the price is a continuous numeric value rather than a fixed category.",
          },
          {
            q: "Can the same algorithm do both?",
            a: "Some, like decision trees and neural networks, can be adapted for either classification or regression.",
          },
        ],
      },
      fr: {
        title: "Classification vs Régression en apprentissage",
        h1: "Classification vs Régression : prédire des résultats",
        description:
          "La classification prédit des catégories ; la régression prédit des nombres continus. Comparez ces deux tâches supervisées.",
        intro:
          "Les deux sont des tâches supervisées, mais répondent à des questions différentes. L'une trie en groupes, l'autre prédit un nombre.",
        pros_a: [
          "Prédit la catégorie ou classe d'une entrée",
          "La sortie est une étiquette discrète, comme spam ou non",
          "Évaluée par précision, exactitude et rappel",
          "Exemples : reconnaissance d'images, diagnostic de maladie",
          "Des frontières de décision séparent les classes",
        ],
        pros_b: [
          "Prédit une valeur numérique continue",
          "La sortie est un nombre, comme un prix ou une température",
          "Évaluée par des métriques d'erreur comme l'erreur quadratique",
          "Exemples : prédiction de prix immobilier et de valeur d'action",
          "Ajuste une droite ou courbe à travers les données",
        ],
        verdict:
          "Demandez-vous quel type de réponse vous voulez. Si la sortie est une étiquette ou catégorie, classification ; si c'est une quantité sur une échelle continue, régression.",
        faq: [
          {
            q: "Comment savoir quelle tâche j'ai ?",
            a: "Si vous prédisez une catégorie, c'est de la classification ; si vous prédisez un nombre, de la régression.",
          },
          {
            q: "Prédire des prix immobiliers, classification ou régression ?",
            a: "Régression, car le prix est une valeur numérique continue plutôt qu'une catégorie fixe.",
          },
          {
            q: "Un même algorithme peut-il faire les deux ?",
            a: "Certains, comme les arbres de décision et les réseaux de neurones, s'adaptent aux deux.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "rational-vs-irrational-numbers",
    a: "Rational numbers",
    b: "Irrational numbers",
    category: "science",
    emoji_a: "➗",
    emoji_b: "♾️",
    content: {
      en: {
        title: "Rational vs Irrational Numbers Explained",
        h1: "Rational vs Irrational Numbers: Two Number Types",
        description:
          "Rational numbers can be written as fractions; irrational numbers cannot. Compare these two types of real numbers.",
        intro:
          "Every real number is either rational or irrational. The dividing line is whether it can be expressed as a simple fraction.",
        pros_a: [
          "Can be written as a fraction of two integers",
          "Decimal expansion either terminates or repeats",
          "Includes all integers and finite decimals",
          "Examples: 1/2, 7, 0.75 and 0.333 repeating",
          "Closed under addition, subtraction and multiplication",
        ],
        pros_b: [
          "Cannot be written as a fraction of two integers",
          "Decimal expansion never terminates and never repeats",
          "Includes famous constants like pi and the square root of 2",
          "Examples: pi, e and the golden ratio",
          "Fill the gaps between rational numbers on the line",
        ],
        verdict:
          "Rational numbers behave neatly as fractions with predictable decimals. Irrational numbers like pi run forever with no pattern. Together they make up the complete set of real numbers.",
        faq: [
          {
            q: "Is pi rational or irrational?",
            a: "Pi is irrational; its decimal expansion goes on forever without repeating.",
          },
          {
            q: "How can you spot an irrational number?",
            a: "If its decimal never ends and never settles into a repeating pattern, it is irrational.",
          },
          {
            q: "Is the square root of 4 irrational?",
            a: "No. The square root of 4 is 2, a whole number, so it is rational.",
          },
        ],
      },
      fr: {
        title: "Nombres rationnels vs irrationnels expliqués",
        h1: "Nombres rationnels vs irrationnels : deux types",
        description:
          "Les nombres rationnels s'écrivent en fractions ; les irrationnels non. Comparez ces deux types de nombres réels.",
        intro:
          "Tout nombre réel est rationnel ou irrationnel. La frontière : peut-il s'exprimer comme une fraction simple ?",
        pros_a: [
          "Peut s'écrire comme une fraction de deux entiers",
          "Le développement décimal s'arrête ou se répète",
          "Inclut tous les entiers et les décimaux finis",
          "Exemples : 1/2, 7, 0,75 et 0,333 périodique",
          "Stable par addition, soustraction et multiplication",
        ],
        pros_b: [
          "Ne peut s'écrire comme une fraction de deux entiers",
          "Le développement décimal ne s'arrête ni ne se répète",
          "Inclut des constantes célèbres comme pi et racine de 2",
          "Exemples : pi, e et le nombre d'or",
          "Comblent les vides entre les rationnels sur la droite",
        ],
        verdict:
          "Les rationnels se comportent proprement en fractions à décimales prévisibles. Les irrationnels comme pi courent sans fin ni motif. Ensemble ils forment l'ensemble complet des réels.",
        faq: [
          {
            q: "Pi est-il rationnel ou irrationnel ?",
            a: "Pi est irrationnel ; son développement décimal est infini et non périodique.",
          },
          {
            q: "Comment repérer un nombre irrationnel ?",
            a: "Si sa décimale ne se termine jamais et ne devient jamais périodique, il est irrationnel.",
          },
          {
            q: "La racine carrée de 4 est-elle irrationnelle ?",
            a: "Non. La racine carrée de 4 vaut 2, un entier, elle est donc rationnelle.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "prime-vs-composite-numbers",
    a: "Prime numbers",
    b: "Composite numbers",
    category: "science",
    emoji_a: "🔑",
    emoji_b: "🧱",
    content: {
      en: {
        title: "Prime vs Composite Numbers Explained",
        h1: "Prime vs Composite Numbers: Building Blocks of Math",
        description:
          "Prime numbers have exactly two divisors; composite numbers have more. Compare these two classes of whole numbers.",
        intro:
          "Whole numbers above 1 split into two groups. The difference comes down to how many factors a number has.",
        pros_a: [
          "Has exactly two distinct divisors: 1 and itself",
          "Cannot be split into smaller whole-number factors",
          "Examples: 2, 3, 5, 7, 11 and 13",
          "The 'atoms' from which all integers are built",
          "Two is the only even prime number",
        ],
        pros_b: [
          "Has more than two divisors",
          "Can be factored into smaller whole numbers",
          "Examples: 4, 6, 8, 9, 10 and 12",
          "Always expressible as a product of primes",
          "Most whole numbers are composite",
        ],
        verdict:
          "Primes are the indivisible building blocks; composites are products of those blocks. The Fundamental Theorem of Arithmetic says every integer above 1 has a unique prime factorization.",
        faq: [
          {
            q: "Is 1 prime or composite?",
            a: "Neither. The number 1 has only one divisor, so it is classified as neither prime nor composite.",
          },
          {
            q: "Why is 2 special among primes?",
            a: "It is the only even prime number; every other even number is divisible by 2 and thus composite.",
          },
          {
            q: "What is prime factorization?",
            a: "Writing a composite number as a product of prime numbers, which is unique for every integer.",
          },
        ],
      },
      fr: {
        title: "Nombres premiers vs composés expliqués",
        h1: "Nombres premiers vs composés : briques des maths",
        description:
          "Les nombres premiers ont exactement deux diviseurs ; les composés en ont plus. Comparez ces deux classes d'entiers.",
        intro:
          "Les entiers supérieurs à 1 se répartissent en deux groupes. La différence tient au nombre de facteurs d'un nombre.",
        pros_a: [
          "A exactement deux diviseurs distincts : 1 et lui-même",
          "Ne peut être divisé en facteurs entiers plus petits",
          "Exemples : 2, 3, 5, 7, 11 et 13",
          "Les « atomes » à partir desquels tous les entiers se construisent",
          "Deux est le seul nombre premier pair",
        ],
        pros_b: [
          "A plus de deux diviseurs",
          "Peut être factorisé en entiers plus petits",
          "Exemples : 4, 6, 8, 9, 10 et 12",
          "Toujours exprimable comme un produit de nombres premiers",
          "La plupart des entiers sont composés",
        ],
        verdict:
          "Les premiers sont les briques indivisibles ; les composés sont des produits de ces briques. Le théorème fondamental de l'arithmétique dit que tout entier supérieur à 1 a une factorisation première unique.",
        faq: [
          {
            q: "1 est-il premier ou composé ?",
            a: "Ni l'un ni l'autre. Le nombre 1 n'a qu'un diviseur, il n'est donc ni premier ni composé.",
          },
          {
            q: "Pourquoi 2 est-il spécial parmi les premiers ?",
            a: "C'est le seul nombre premier pair ; tout autre nombre pair est divisible par 2 et donc composé.",
          },
          {
            q: "Qu'est-ce que la factorisation première ?",
            a: "Écrire un nombre composé comme un produit de nombres premiers, unique pour chaque entier.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "geometry-vs-topology",
    a: "Geometry",
    b: "Topology",
    category: "science",
    emoji_a: "📐",
    emoji_b: "🍩",
    content: {
      en: {
        title: "Geometry vs Topology: Shape and Space",
        h1: "Geometry vs Topology: Rigid vs Stretchy Shapes",
        description:
          "Geometry studies exact shapes and measurements; topology studies properties kept under stretching. Compare these math fields.",
        intro:
          "Geometry and topology both study shape, but they care about very different things — one measures precisely, the other ignores size entirely.",
        pros_a: [
          "Studies exact distances, angles and shapes",
          "Measurements like length and area matter",
          "Shapes are rigid; bending changes them",
          "Includes Euclidean and non-Euclidean systems",
          "Used in construction, navigation and design",
        ],
        pros_b: [
          "Studies properties unchanged by continuous deformation",
          "Stretching and bending are allowed, tearing is not",
          "Ignores exact size, distance and angle",
          "A coffee cup and a donut are topologically the same",
          "Used in data analysis, networks and physics",
        ],
        verdict:
          "Geometry is the math of precise shapes and measurements; topology is sometimes called 'rubber-sheet geometry' because it studies what survives stretching. Both reveal the structure of space.",
        faq: [
          {
            q: "Why is a coffee cup the same as a donut in topology?",
            a: "Both have exactly one hole, and one can be deformed into the other without tearing.",
          },
          {
            q: "Does topology care about distance?",
            a: "No. Topology ignores exact distances and angles, focusing only on connectedness and holes.",
          },
          {
            q: "Which field is more measurement-focused?",
            a: "Geometry. It depends heavily on exact lengths, angles and areas.",
          },
        ],
      },
      fr: {
        title: "Géométrie vs Topologie : forme et espace",
        h1: "Géométrie vs Topologie : formes rigides vs élastiques",
        description:
          "La géométrie étudie les formes et mesures exactes ; la topologie ce qui survit à l'étirement. Comparez ces domaines.",
        intro:
          "Géométrie et topologie étudient la forme, mais s'intéressent à des choses différentes : l'une mesure précisément, l'autre ignore la taille.",
        pros_a: [
          "Étudie les distances, angles et formes exacts",
          "Les mesures comme longueur et aire comptent",
          "Les formes sont rigides ; les plier les change",
          "Inclut les systèmes euclidiens et non euclidiens",
          "Utilisée en construction, navigation et design",
        ],
        pros_b: [
          "Étudie les propriétés inchangées par déformation continue",
          "Étirer et plier sont permis, déchirer non",
          "Ignore taille, distance et angle exacts",
          "Une tasse et un donut sont topologiquement identiques",
          "Utilisée en analyse de données, réseaux et physique",
        ],
        verdict:
          "La géométrie est la math des formes et mesures précises ; la topologie, dite « géométrie de la feuille élastique », étudie ce qui survit à l'étirement. Les deux révèlent la structure de l'espace.",
        faq: [
          {
            q: "Pourquoi une tasse égale un donut en topologie ?",
            a: "Tous deux ont exactement un trou et l'un peut se déformer en l'autre sans déchirure.",
          },
          {
            q: "La topologie se soucie-t-elle de la distance ?",
            a: "Non. La topologie ignore distances et angles exacts, se concentrant sur la connexité et les trous.",
          },
          {
            q: "Quel domaine est plus axé sur la mesure ?",
            a: "La géométrie. Elle dépend fortement des longueurs, angles et aires exacts.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "volcano-vs-earthquake",
    a: "Volcano",
    b: "Earthquake",
    category: "science",
    emoji_a: "🌋",
    emoji_b: "🌍",
    content: {
      en: {
        title: "Volcano vs Earthquake: Geological Events",
        h1: "Volcano vs Earthquake: Two Faces of a Restless Earth",
        description:
          "Volcanoes erupt magma to the surface; earthquakes release energy as ground shaking. Compare these geological events.",
        intro:
          "Volcanoes and earthquakes are both driven by forces deep within the Earth, yet they express that energy in completely different ways.",
        pros_a: [
          "An opening that erupts magma, ash and gases",
          "Builds up land and creates new rock over time",
          "Often gives warning signs before erupting",
          "Concentrated at plate boundaries and hotspots",
          "Can affect climate by spreading ash into the atmosphere",
        ],
        pros_b: [
          "A sudden release of energy that shakes the ground",
          "Caused by rock breaking along faults",
          "Usually strikes without practical warning",
          "Measured in magnitude on the moment magnitude scale",
          "Can trigger tsunamis, landslides and building collapse",
        ],
        verdict:
          "Both stem from plate tectonics. Volcanoes channel heat and molten rock upward; earthquakes release built-up stress as seismic waves. They often occur in the same regions, like the Pacific Ring of Fire.",
        faq: [
          {
            q: "Can a volcano cause an earthquake?",
            a: "Yes. Magma moving underground can fracture rock and trigger volcanic earthquakes.",
          },
          {
            q: "Which is easier to predict?",
            a: "Volcanoes often give warning signs; earthquakes typically strike with little or no warning.",
          },
          {
            q: "Why do both happen at plate boundaries?",
            a: "Plate boundaries are where the Earth's crust grinds, splits and dives, releasing heat and stress.",
          },
        ],
      },
      fr: {
        title: "Volcan vs Tremblement de terre : événements géologiques",
        h1: "Volcan vs Séisme : deux visages d'une Terre agitée",
        description:
          "Les volcans font remonter le magma ; les séismes libèrent de l'énergie en secousses. Comparez ces événements géologiques.",
        intro:
          "Volcans et séismes sont mus par les forces des profondeurs de la Terre, mais expriment cette énergie de façons très différentes.",
        pros_a: [
          "Une ouverture qui émet magma, cendres et gaz",
          "Construit du relief et crée de nouvelles roches",
          "Donne souvent des signes avant-coureurs",
          "Concentré aux limites de plaques et aux points chauds",
          "Peut affecter le climat en répandant des cendres",
        ],
        pros_b: [
          "Une libération soudaine d'énergie qui secoue le sol",
          "Causé par la rupture de roches le long de failles",
          "Frappe souvent sans avertissement pratique",
          "Mesuré en magnitude sur l'échelle de moment",
          "Peut déclencher tsunamis, glissements et effondrements",
        ],
        verdict:
          "Tous deux découlent de la tectonique des plaques. Les volcans canalisent chaleur et roche fondue vers le haut ; les séismes libèrent le stress accumulé. Ils coexistent souvent, comme dans la Ceinture de feu.",
        faq: [
          {
            q: "Un volcan peut-il causer un séisme ?",
            a: "Oui. Le magma qui se déplace sous terre peut fracturer la roche et déclencher des séismes volcaniques.",
          },
          {
            q: "Lequel est le plus facile à prédire ?",
            a: "Les volcans donnent souvent des signes ; les séismes frappent généralement sans avertissement.",
          },
          {
            q: "Pourquoi les deux se produisent-ils aux limites de plaques ?",
            a: "C'est là que la croûte se broie, se fend et plonge, libérant chaleur et stress.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "igneous-vs-sedimentary-rock",
    a: "Igneous rock",
    b: "Sedimentary rock",
    category: "science",
    emoji_a: "🌋",
    emoji_b: "🪨",
    content: {
      en: {
        title: "Igneous vs Sedimentary Rock Compared",
        h1: "Igneous vs Sedimentary Rock: How Rocks Form",
        description:
          "Igneous rock forms from cooled magma; sedimentary rock forms from compacted sediment. Compare these two rock types.",
        intro:
          "Rocks fall into three families. Igneous and sedimentary rocks form in completely different ways — one from fire, the other from accumulation.",
        pros_a: [
          "Forms when molten magma or lava cools and solidifies",
          "Can cool slowly underground or quickly at the surface",
          "Often has interlocking mineral crystals",
          "Examples include granite and basalt",
          "Rarely contains fossils",
        ],
        pros_b: [
          "Forms when sediment is compacted and cemented together",
          "Builds up in visible layers or strata",
          "Made from fragments, minerals or organic remains",
          "Examples include sandstone and limestone",
          "Commonly contains fossils",
        ],
        verdict:
          "Igneous rock is born of heat as magma cools; sedimentary rock is built slowly from layers of debris. Sedimentary rock preserves most fossils, while igneous rock records past volcanic activity.",
        faq: [
          {
            q: "Which rock type contains fossils?",
            a: "Sedimentary rock. It forms gently in layers, so it can preserve the remains of ancient life.",
          },
          {
            q: "What is the third main rock type?",
            a: "Metamorphic rock, formed when existing rock is changed by heat and pressure.",
          },
          {
            q: "Why does granite have visible crystals?",
            a: "It cooled slowly deep underground, giving minerals time to grow into large crystals.",
          },
        ],
      },
      fr: {
        title: "Roche ignée vs sédimentaire comparées",
        h1: "Roche ignée vs sédimentaire : comment les roches se forment",
        description:
          "La roche ignée se forme du magma refroidi ; la sédimentaire de sédiments compactés. Comparez ces deux types de roches.",
        intro:
          "Les roches forment trois familles. Les roches ignées et sédimentaires se forment de façons opposées : l'une par le feu, l'autre par accumulation.",
        pros_a: [
          "Se forme quand magma ou lave refroidit et se solidifie",
          "Peut refroidir lentement sous terre ou vite en surface",
          "Présente souvent des cristaux minéraux imbriqués",
          "Exemples : le granite et le basalte",
          "Contient rarement des fossiles",
        ],
        pros_b: [
          "Se forme quand le sédiment est compacté et cimenté",
          "S'accumule en couches ou strates visibles",
          "Faite de fragments, minéraux ou restes organiques",
          "Exemples : le grès et le calcaire",
          "Contient couramment des fossiles",
        ],
        verdict:
          "La roche ignée naît de la chaleur en refroidissant ; la sédimentaire se bâtit lentement en couches de débris. La sédimentaire conserve les fossiles, l'ignée enregistre l'activité volcanique passée.",
        faq: [
          {
            q: "Quel type de roche contient des fossiles ?",
            a: "La roche sédimentaire. Elle se forme doucement en couches et peut conserver les restes d'êtres anciens.",
          },
          {
            q: "Quel est le troisième type de roche ?",
            a: "La roche métamorphique, formée quand une roche existante est transformée par chaleur et pression.",
          },
          {
            q: "Pourquoi le granite a-t-il des cristaux visibles ?",
            a: "Il a refroidi lentement en profondeur, laissant aux minéraux le temps de former de grands cristaux.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "glacier-vs-iceberg",
    a: "Glacier",
    b: "Iceberg",
    category: "science",
    emoji_a: "🏔️",
    emoji_b: "🧊",
    content: {
      en: {
        title: "Glacier vs Iceberg: Two Forms of Ice",
        h1: "Glacier vs Iceberg: Land Ice vs Floating Ice",
        description:
          "A glacier is a slow-moving river of ice on land; an iceberg is a chunk floating in the sea. Compare these forms of ice.",
        intro:
          "Glaciers and icebergs are both freshwater ice, and they are connected — many icebergs are simply pieces that broke off a glacier.",
        pros_a: [
          "A large mass of ice that flows slowly over land",
          "Forms from snow compacting over many years",
          "Stays grounded on bedrock or mountains",
          "Can carve valleys and shape landscapes",
          "Stores most of the world's freshwater",
        ],
        pros_b: [
          "A chunk of ice floating freely in the ocean",
          "Often breaks off, or 'calves', from a glacier or ice shelf",
          "About 90 percent of its mass sits below the water",
          "Drifts with ocean currents and wind",
          "Made of freshwater, despite floating in salt water",
        ],
        verdict:
          "A glacier is land-based ice that moves slowly under its own weight; an iceberg is the floating offspring that calves off into the sea. Both store freshwater locked away from the ocean.",
        faq: [
          {
            q: "Where do icebergs come from?",
            a: "Most icebergs calve off the edges of glaciers and ice shelves that reach the sea.",
          },
          {
            q: "Why is most of an iceberg underwater?",
            a: "Ice is only slightly less dense than seawater, so about 90 percent of the iceberg stays submerged.",
          },
          {
            q: "Are icebergs made of saltwater?",
            a: "No. Icebergs are frozen freshwater, even though they float in the salty ocean.",
          },
        ],
      },
      fr: {
        title: "Glacier vs Iceberg : deux formes de glace",
        h1: "Glacier vs Iceberg : glace terrestre vs flottante",
        description:
          "Un glacier est une rivière de glace lente sur terre ; un iceberg un bloc flottant en mer. Comparez ces formes de glace.",
        intro:
          "Glaciers et icebergs sont tous deux de la glace d'eau douce, et ils sont liés : beaucoup d'icebergs sont des morceaux détachés d'un glacier.",
        pros_a: [
          "Une grande masse de glace qui s'écoule lentement sur terre",
          "Se forme par compactage de la neige sur des années",
          "Reste posé sur le socle rocheux ou les montagnes",
          "Peut creuser des vallées et façonner les paysages",
          "Stocke la majeure partie de l'eau douce du monde",
        ],
        pros_b: [
          "Un bloc de glace flottant librement dans l'océan",
          "Se détache souvent (« vêle ») d'un glacier ou d'une plateforme",
          "Environ 90 % de sa masse se situe sous l'eau",
          "Dérive avec les courants océaniques et le vent",
          "Fait d'eau douce, bien qu'il flotte en eau salée",
        ],
        verdict:
          "Un glacier est de la glace terrestre qui se déplace lentement sous son poids ; un iceberg est le rejeton flottant qui vêle en mer. Tous deux stockent de l'eau douce hors de l'océan.",
        faq: [
          {
            q: "D'où viennent les icebergs ?",
            a: "La plupart des icebergs se détachent du bord de glaciers et de plateformes de glace atteignant la mer.",
          },
          {
            q: "Pourquoi la majeure partie d'un iceberg est-elle sous l'eau ?",
            a: "La glace est à peine moins dense que l'eau de mer ; environ 90 % de l'iceberg reste immergé.",
          },
          {
            q: "Les icebergs sont-ils faits d'eau salée ?",
            a: "Non. Les icebergs sont de l'eau douce gelée, même s'ils flottent dans l'océan salé.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "hurricane-vs-typhoon",
    a: "Hurricane",
    b: "Typhoon",
    category: "science",
    emoji_a: "🌀",
    emoji_b: "🌊",
    content: {
      en: {
        title: "Hurricane vs Typhoon: Same Storm, Different Names",
        h1: "Hurricane vs Typhoon: A Question of Geography",
        description:
          "Hurricanes and typhoons are the same kind of storm, named differently by region. Compare these tropical cyclones.",
        intro:
          "Hurricane and typhoon describe the very same weather phenomenon. The only real difference is where on Earth the storm forms.",
        pros_a: [
          "The name used in the Atlantic and northeastern Pacific",
          "Affects the Caribbean, the US Gulf and East Coasts",
          "Rated on the Saffir-Simpson scale, categories 1 to 5",
          "Hurricane season peaks roughly August to October",
          "A rotating tropical cyclone with a calm central eye",
        ],
        pros_b: [
          "The name used in the northwestern Pacific Ocean",
          "Affects East and Southeast Asia, including Japan",
          "A 'super typhoon' marks the most intense category",
          "Can occur across more of the year in warmer seas",
          "The same rotating tropical cyclone structure",
        ],
        verdict:
          "Scientifically, hurricanes and typhoons are identical storms — both are tropical cyclones. The label simply changes by ocean basin. In the Indian Ocean the same storm is called a cyclone.",
        faq: [
          {
            q: "Is a typhoon stronger than a hurricane?",
            a: "Not inherently. They are the same storm type; intensity varies storm by storm, not by name.",
          },
          {
            q: "What is the storm called in the Indian Ocean?",
            a: "Simply a cyclone. The three names mark three regions for one phenomenon.",
          },
          {
            q: "What powers these storms?",
            a: "Warm ocean water above about 26 degrees Celsius supplies the heat and moisture they need.",
          },
        ],
      },
      fr: {
        title: "Ouragan vs Typhon : même tempête, noms différents",
        h1: "Ouragan vs Typhon : une question de géographie",
        description:
          "Ouragans et typhons sont le même type de tempête, nommé différemment selon la région. Comparez ces cyclones tropicaux.",
        intro:
          "Ouragan et typhon décrivent le même phénomène météo. La seule vraie différence est l'endroit où la tempête se forme.",
        pros_a: [
          "Le nom utilisé dans l'Atlantique et le Pacifique nord-est",
          "Touche les Caraïbes, le golfe et la côte est des États-Unis",
          "Classé sur l'échelle Saffir-Simpson, catégories 1 à 5",
          "La saison culmine environ d'août à octobre",
          "Un cyclone tropical en rotation avec un œil central calme",
        ],
        pros_b: [
          "Le nom utilisé dans le Pacifique nord-ouest",
          "Touche l'Asie de l'Est et du Sud-Est, dont le Japon",
          "Un « super typhon » marque la catégorie la plus intense",
          "Peut survenir sur une plus grande partie de l'année",
          "La même structure de cyclone tropical en rotation",
        ],
        verdict:
          "Scientifiquement, ouragans et typhons sont des tempêtes identiques — tous deux des cyclones tropicaux. L'étiquette change selon le bassin océanique. Dans l'océan Indien, on parle de cyclone.",
        faq: [
          {
            q: "Un typhon est-il plus fort qu'un ouragan ?",
            a: "Pas intrinsèquement. C'est le même type de tempête ; l'intensité varie d'une tempête à l'autre, pas selon le nom.",
          },
          {
            q: "Comment s'appelle la tempête dans l'océan Indien ?",
            a: "Simplement un cyclone. Les trois noms marquent trois régions pour un seul phénomène.",
          },
          {
            q: "Qu'est-ce qui alimente ces tempêtes ?",
            a: "L'eau océanique chaude au-dessus d'environ 26 degrés Celsius fournit la chaleur et l'humidité nécessaires.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "el-nino-vs-la-nina",
    a: "El Niño",
    b: "La Niña",
    category: "science",
    emoji_a: "🔥",
    emoji_b: "❄️",
    content: {
      en: {
        title: "El Niño vs La Niña: Pacific Climate Patterns",
        h1: "El Niño vs La Niña: Two Sides of a Climate Cycle",
        description:
          "El Niño warms the central Pacific; La Niña cools it. Compare these two opposite phases of the same climate cycle.",
        intro:
          "El Niño and La Niña are the warm and cool phases of one Pacific climate cycle that shifts weather patterns worldwide.",
        pros_a: [
          "The warm phase of the El Niño-Southern Oscillation",
          "Central and eastern Pacific surface waters warm up",
          "Weakens the usual east-to-west trade winds",
          "Often brings drought to Australia and Indonesia",
          "Tends to raise average global temperatures",
        ],
        pros_b: [
          "The cool phase of the same climate cycle",
          "Central and eastern Pacific surface waters cool down",
          "Strengthens the trade winds",
          "Often brings wetter conditions to Australia and Asia",
          "Tends to lower average global temperatures slightly",
        ],
        verdict:
          "El Niño and La Niña are opposite swings of the ENSO cycle. El Niño warms the Pacific and nudges global temperatures up; La Niña cools it. Together they shape rainfall and storms across continents.",
        faq: [
          {
            q: "What is ENSO?",
            a: "The El Niño-Southern Oscillation, the overall Pacific climate cycle that includes both El Niño and La Niña.",
          },
          {
            q: "Which phase is warmer globally?",
            a: "El Niño years tend to be warmer worldwide; La Niña years are usually slightly cooler.",
          },
          {
            q: "How often do they occur?",
            a: "The cycle typically swings every two to seven years, though the timing is irregular.",
          },
        ],
      },
      fr: {
        title: "El Niño vs La Niña : régimes climatiques du Pacifique",
        h1: "El Niño vs La Niña : deux faces d'un cycle climatique",
        description:
          "El Niño réchauffe le Pacifique central ; La Niña le refroidit. Comparez ces deux phases opposées d'un même cycle.",
        intro:
          "El Niño et La Niña sont les phases chaude et froide d'un cycle climatique du Pacifique qui modifie le temps dans le monde entier.",
        pros_a: [
          "La phase chaude de l'oscillation australe El Niño",
          "Les eaux de surface du Pacifique central et est se réchauffent",
          "Affaiblit les alizés habituels d'est en ouest",
          "Apporte souvent la sécheresse en Australie et Indonésie",
          "Tend à élever les températures moyennes mondiales",
        ],
        pros_b: [
          "La phase froide du même cycle climatique",
          "Les eaux de surface du Pacifique central et est se refroidissent",
          "Renforce les alizés",
          "Apporte souvent des conditions plus humides en Asie",
          "Tend à abaisser légèrement les températures mondiales",
        ],
        verdict:
          "El Niño et La Niña sont les oscillations opposées du cycle ENSO. El Niño réchauffe le Pacifique et pousse les températures à la hausse ; La Niña le refroidit. Ensemble ils façonnent pluies et tempêtes.",
        faq: [
          {
            q: "Qu'est-ce que l'ENSO ?",
            a: "L'oscillation australe El Niño, le cycle climatique global du Pacifique qui inclut El Niño et La Niña.",
          },
          {
            q: "Quelle phase est la plus chaude mondialement ?",
            a: "Les années El Niño sont plus chaudes dans le monde ; les années La Niña sont généralement un peu plus fraîches.",
          },
          {
            q: "À quelle fréquence surviennent-ils ?",
            a: "Le cycle oscille en général tous les deux à sept ans, mais le rythme est irrégulier.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "climate-vs-weather",
    a: "Climate",
    b: "Weather",
    category: "science",
    emoji_a: "🌍",
    emoji_b: "🌦️",
    content: {
      en: {
        title: "Climate vs Weather: What's the Difference?",
        h1: "Climate vs Weather: Long-Term vs Short-Term",
        description:
          "Weather is the day-to-day atmosphere; climate is the long-term average. Compare these two often-confused terms.",
        intro:
          "Weather and climate both describe the atmosphere, but over very different timescales. One is what you see today; the other is what you expect over decades.",
        pros_a: [
          "The long-term average of weather over decades",
          "Measured over periods of 30 years or more",
          "Describes typical conditions for a region",
          "Changes slowly and reflects broad trends",
          "Examples: a desert climate or a tropical climate",
        ],
        pros_b: [
          "The state of the atmosphere at a given moment",
          "Measured over hours and days",
          "Describes current temperature, rain, wind and clouds",
          "Changes quickly and is hard to predict far ahead",
          "Examples: a rainy afternoon or a sunny morning",
        ],
        verdict:
          "Weather is what you get on a particular day; climate is what you expect on average. A cold day does not disprove a warming climate — climate is the long-run pattern behind daily weather.",
        faq: [
          {
            q: "How long must you observe to measure climate?",
            a: "At least 30 years of data is the standard period for defining a region's climate.",
          },
          {
            q: "Does a cold day disprove climate change?",
            a: "No. Climate is a decades-long average; a single cold day is just short-term weather.",
          },
          {
            q: "Why is weather hard to predict far ahead?",
            a: "The atmosphere is chaotic, so tiny uncertainties grow rapidly beyond about a week or two.",
          },
        ],
      },
      fr: {
        title: "Climat vs Météo : quelle différence ?",
        h1: "Climat vs Météo : long terme vs court terme",
        description:
          "La météo est l'atmosphère au jour le jour ; le climat sa moyenne à long terme. Comparez ces deux termes souvent confondus.",
        intro:
          "Météo et climat décrivent l'atmosphère, mais sur des échelles de temps très différentes. L'une est ce qu'on voit aujourd'hui, l'autre ce qu'on attend sur des décennies.",
        pros_a: [
          "La moyenne à long terme de la météo sur des décennies",
          "Mesuré sur des périodes de 30 ans ou plus",
          "Décrit les conditions typiques d'une région",
          "Change lentement et reflète de grandes tendances",
          "Exemples : un climat désertique ou tropical",
        ],
        pros_b: [
          "L'état de l'atmosphère à un instant donné",
          "Mesurée sur des heures et des jours",
          "Décrit température, pluie, vent et nuages actuels",
          "Change vite et est difficile à prévoir loin",
          "Exemples : un après-midi pluvieux ou un matin ensoleillé",
        ],
        verdict:
          "La météo est ce qu'on a un jour précis ; le climat ce qu'on attend en moyenne. Un jour froid ne réfute pas un climat qui se réchauffe — le climat est le motif de long terme derrière la météo.",
        faq: [
          {
            q: "Combien de temps faut-il observer pour mesurer le climat ?",
            a: "Au moins 30 ans de données est la période standard pour définir le climat d'une région.",
          },
          {
            q: "Un jour froid réfute-t-il le changement climatique ?",
            a: "Non. Le climat est une moyenne de décennies ; un seul jour froid n'est que de la météo à court terme.",
          },
          {
            q: "Pourquoi la météo est-elle dure à prévoir loin ?",
            a: "L'atmosphère est chaotique : de minuscules incertitudes croissent vite au-delà d'une semaine ou deux.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "photosynthesis-vs-respiration",
    a: "Photosynthesis",
    b: "Cellular respiration",
    category: "science",
    emoji_a: "🌿",
    emoji_b: "🫁",
    content: {
      en: {
        title: "Photosynthesis vs Respiration: Energy Flow",
        h1: "Photosynthesis vs Cellular Respiration Compared",
        description:
          "Photosynthesis stores energy in glucose; respiration releases it. Compare these two opposite biological processes.",
        intro:
          "Photosynthesis and cellular respiration are mirror processes. One captures energy from sunlight; the other releases it for life's activities.",
        pros_a: [
          "Converts sunlight, carbon dioxide and water into glucose",
          "Stores energy in chemical bonds and releases oxygen",
          "Occurs in chloroplasts of plants and algae",
          "Requires light to proceed",
          "Removes carbon dioxide from the atmosphere",
        ],
        pros_b: [
          "Breaks down glucose to release usable energy",
          "Consumes oxygen and produces carbon dioxide and water",
          "Occurs in the mitochondria of nearly all cells",
          "Happens continuously, in light or darkness",
          "Powers cell activity by producing ATP",
        ],
        verdict:
          "Photosynthesis and respiration are chemical opposites that balance each other. Plants do both; animals only respire. Together they cycle carbon, oxygen and energy through the living world.",
        faq: [
          {
            q: "Do plants do both processes?",
            a: "Yes. Plants photosynthesize in light and respire all the time to use the stored energy.",
          },
          {
            q: "Where does each process occur?",
            a: "Photosynthesis happens in chloroplasts; cellular respiration happens in mitochondria.",
          },
          {
            q: "How are the two linked?",
            a: "The products of one are the reactants of the other, forming a continuous energy and gas cycle.",
          },
        ],
      },
      fr: {
        title: "Photosynthèse vs Respiration : flux d'énergie",
        h1: "Photosynthèse vs Respiration cellulaire comparées",
        description:
          "La photosynthèse stocke l'énergie dans le glucose ; la respiration la libère. Comparez ces deux processus biologiques opposés.",
        intro:
          "Photosynthèse et respiration cellulaire sont des processus miroirs. L'un capte l'énergie du soleil, l'autre la libère pour les activités de la vie.",
        pros_a: [
          "Convertit lumière, dioxyde de carbone et eau en glucose",
          "Stocke l'énergie dans des liaisons et libère de l'oxygène",
          "Se déroule dans les chloroplastes des plantes et algues",
          "Nécessite de la lumière pour se produire",
          "Retire du dioxyde de carbone de l'atmosphère",
        ],
        pros_b: [
          "Décompose le glucose pour libérer une énergie utilisable",
          "Consomme de l'oxygène et produit CO2 et eau",
          "Se déroule dans les mitochondries de presque toutes les cellules",
          "A lieu en continu, à la lumière comme dans le noir",
          "Alimente l'activité cellulaire en produisant de l'ATP",
        ],
        verdict:
          "Photosynthèse et respiration sont des opposés chimiques qui s'équilibrent. Les plantes font les deux ; les animaux ne font que respirer. Ensemble elles font circuler carbone, oxygène et énergie.",
        faq: [
          {
            q: "Les plantes font-elles les deux processus ?",
            a: "Oui. Les plantes photosynthétisent à la lumière et respirent en permanence pour utiliser l'énergie stockée.",
          },
          {
            q: "Où chaque processus a-t-il lieu ?",
            a: "La photosynthèse dans les chloroplastes ; la respiration cellulaire dans les mitochondries.",
          },
          {
            q: "Comment les deux sont-ils liés ?",
            a: "Les produits de l'un sont les réactifs de l'autre, formant un cycle continu d'énergie et de gaz.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "aerobic-vs-anaerobic-respiration",
    a: "Aerobic respiration",
    b: "Anaerobic respiration",
    category: "science",
    emoji_a: "🫁",
    emoji_b: "💪",
    content: {
      en: {
        title: "Aerobic vs Anaerobic Respiration Explained",
        h1: "Aerobic vs Anaerobic Respiration: With or Without Oxygen",
        description:
          "Aerobic respiration uses oxygen; anaerobic respiration does not. Compare these two ways cells release energy.",
        intro:
          "Cells release energy from food in two ways. The deciding factor is whether oxygen is available to complete the process.",
        pros_a: [
          "Requires oxygen to release energy from glucose",
          "Produces a large amount of ATP per glucose molecule",
          "End products are carbon dioxide and water",
          "The main process in most cells most of the time",
          "Fully breaks down glucose for maximum yield",
        ],
        pros_b: [
          "Releases energy without using oxygen",
          "Produces far less ATP per glucose molecule",
          "Produces lactic acid in muscles or ethanol in yeast",
          "Used during intense exercise or in low-oxygen conditions",
          "A faster but less efficient backup pathway",
        ],
        verdict:
          "Aerobic respiration is efficient and is the default when oxygen is present. Anaerobic respiration is a quick fallback for short, intense bursts when oxygen runs short — but it yields far less energy.",
        faq: [
          {
            q: "Why does anaerobic respiration cause muscle fatigue?",
            a: "It produces lactic acid, which builds up in muscles during intense exercise and causes a burning feeling.",
          },
          {
            q: "Which produces more energy?",
            a: "Aerobic respiration yields far more ATP per glucose because it fully breaks the molecule down.",
          },
          {
            q: "Does yeast use anaerobic respiration?",
            a: "Yes. Yeast ferments sugar anaerobically, producing ethanol and carbon dioxide.",
          },
        ],
      },
      fr: {
        title: "Respiration aérobie vs anaérobie expliquée",
        h1: "Respiration aérobie vs anaérobie : avec ou sans oxygène",
        description:
          "La respiration aérobie utilise l'oxygène ; l'anaérobie non. Comparez ces deux façons dont les cellules libèrent l'énergie.",
        intro:
          "Les cellules libèrent l'énergie des aliments de deux façons. Le facteur décisif : l'oxygène est-il disponible pour achever le processus ?",
        pros_a: [
          "Nécessite de l'oxygène pour libérer l'énergie du glucose",
          "Produit une grande quantité d'ATP par molécule de glucose",
          "Les produits finaux sont CO2 et eau",
          "Le processus principal dans la plupart des cellules",
          "Décompose entièrement le glucose pour un rendement maximal",
        ],
        pros_b: [
          "Libère de l'énergie sans utiliser d'oxygène",
          "Produit bien moins d'ATP par molécule de glucose",
          "Produit de l'acide lactique dans les muscles ou de l'éthanol dans la levure",
          "Utilisée lors d'efforts intenses ou en conditions pauvres en oxygène",
          "Une voie de secours plus rapide mais moins efficace",
        ],
        verdict:
          "La respiration aérobie est efficace et c'est le mode par défaut avec de l'oxygène. L'anaérobie est un recours rapide pour les efforts courts et intenses, mais donne bien moins d'énergie.",
        faq: [
          {
            q: "Pourquoi la respiration anaérobie cause-t-elle la fatigue musculaire ?",
            a: "Elle produit de l'acide lactique, qui s'accumule dans les muscles lors d'efforts intenses et cause une brûlure.",
          },
          {
            q: "Laquelle produit le plus d'énergie ?",
            a: "La respiration aérobie donne bien plus d'ATP par glucose car elle décompose entièrement la molécule.",
          },
          {
            q: "La levure utilise-t-elle la respiration anaérobie ?",
            a: "Oui. La levure fermente le sucre en anaérobie, produisant éthanol et dioxyde de carbone.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "vein-vs-artery",
    a: "Vein",
    b: "Artery",
    category: "science",
    emoji_a: "🩸",
    emoji_b: "❤️",
    content: {
      en: {
        title: "Vein vs Artery: Blood Vessels Compared",
        h1: "Vein vs Artery: Two Kinds of Blood Vessel",
        description:
          "Arteries carry blood away from the heart; veins return it. Compare these two main types of blood vessel.",
        intro:
          "The circulatory system relies on two main vessel types. Their structures differ because they handle blood under very different pressures.",
        pros_a: [
          "Carries blood back toward the heart",
          "Usually carries oxygen-poor blood",
          "Has thinner walls and lower internal pressure",
          "Contains one-way valves to prevent backflow",
          "Often visible bluish under the skin",
        ],
        pros_b: [
          "Carries blood away from the heart",
          "Usually carries oxygen-rich blood",
          "Has thick, muscular and elastic walls",
          "Withstands high pressure from each heartbeat",
          "Lies deeper in the body and has a strong pulse",
        ],
        verdict:
          "Arteries push high-pressure blood out from the heart, so they are thick and elastic. Veins return low-pressure blood and use valves to keep it moving. The pulmonary vessels reverse the usual oxygen rule.",
        faq: [
          {
            q: "Why do veins have valves but arteries do not?",
            a: "Veins carry low-pressure blood, so valves prevent it from flowing backward, especially against gravity.",
          },
          {
            q: "Do all arteries carry oxygen-rich blood?",
            a: "Almost all do, but the pulmonary artery is an exception, carrying oxygen-poor blood to the lungs.",
          },
          {
            q: "Why are artery walls thicker?",
            a: "They must withstand the high pressure of blood pumped directly from the heart with each beat.",
          },
        ],
      },
      fr: {
        title: "Veine vs Artère : vaisseaux sanguins comparés",
        h1: "Veine vs Artère : deux types de vaisseaux sanguins",
        description:
          "Les artères transportent le sang depuis le cœur ; les veines le ramènent. Comparez ces deux types de vaisseaux sanguins.",
        intro:
          "Le système circulatoire repose sur deux types de vaisseaux. Leurs structures diffèrent car ils gèrent le sang sous des pressions très différentes.",
        pros_a: [
          "Transporte le sang vers le cœur",
          "Transporte généralement un sang pauvre en oxygène",
          "A des parois plus fines et une pression interne plus basse",
          "Contient des valvules anti-retour",
          "Souvent visible bleuâtre sous la peau",
        ],
        pros_b: [
          "Transporte le sang depuis le cœur",
          "Transporte généralement un sang riche en oxygène",
          "A des parois épaisses, musclées et élastiques",
          "Résiste à la forte pression de chaque battement",
          "Située plus profondément, avec un pouls marqué",
        ],
        verdict:
          "Les artères poussent un sang à haute pression depuis le cœur, d'où leurs parois épaisses et élastiques. Les veines ramènent un sang à basse pression et utilisent des valvules. Les vaisseaux pulmonaires inversent la règle de l'oxygène.",
        faq: [
          {
            q: "Pourquoi les veines ont-elles des valvules et pas les artères ?",
            a: "Les veines portent un sang à basse pression ; les valvules l'empêchent de refluer, surtout contre la gravité.",
          },
          {
            q: "Toutes les artères transportent-elles un sang riche en oxygène ?",
            a: "Presque toutes, mais l'artère pulmonaire fait exception en transportant un sang pauvre en oxygène vers les poumons.",
          },
          {
            q: "Pourquoi les parois des artères sont-elles plus épaisses ?",
            a: "Elles doivent résister à la forte pression du sang pompé directement du cœur à chaque battement.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "neuron-vs-glial-cell",
    a: "Neuron",
    b: "Glial cell",
    category: "science",
    emoji_a: "🧠",
    emoji_b: "🔬",
    content: {
      en: {
        title: "Neuron vs Glial Cell: Nervous System Cells",
        h1: "Neuron vs Glial Cell: Signalers and Supporters",
        description:
          "Neurons transmit signals; glial cells support and protect them. Compare these two cell types of the nervous system.",
        intro:
          "The nervous system is built from two main cell types. Neurons grab the spotlight, but glial cells quietly keep everything running.",
        pros_a: [
          "Transmits electrical and chemical signals",
          "Has dendrites, a cell body and an axon",
          "Communicates across junctions called synapses",
          "Generally cannot divide once mature",
          "The core information-processing cells of the brain",
        ],
        pros_b: [
          "Supports, protects and nourishes neurons",
          "Does not transmit nerve impulses itself",
          "Forms the myelin sheath that speeds signals",
          "Can divide and multiply throughout life",
          "Includes astrocytes, oligodendrocytes and microglia",
        ],
        verdict:
          "Neurons are the signaling cells that carry thoughts and reflexes; glial cells are the support crew that insulate, feed and defend them. The brain needs both working together to function.",
        faq: [
          {
            q: "Do glial cells transmit nerve signals?",
            a: "No. Glial cells support neurons but do not carry nerve impulses themselves.",
          },
          {
            q: "What does the myelin sheath do?",
            a: "Made by glial cells, it insulates axons and greatly speeds up signal transmission.",
          },
          {
            q: "Can these cells regenerate?",
            a: "Glial cells can divide throughout life, while mature neurons generally cannot.",
          },
        ],
      },
      fr: {
        title: "Neurone vs Cellule gliale : cellules nerveuses",
        h1: "Neurone vs Cellule gliale : signaleurs et soutiens",
        description:
          "Les neurones transmettent les signaux ; les cellules gliales les soutiennent et protègent. Comparez ces deux types de cellules.",
        intro:
          "Le système nerveux est bâti de deux types de cellules. Les neurones attirent l'attention, mais les cellules gliales font tourner l'ensemble.",
        pros_a: [
          "Transmet des signaux électriques et chimiques",
          "Possède des dendrites, un corps cellulaire et un axone",
          "Communique via des jonctions appelées synapses",
          "Ne peut généralement pas se diviser une fois mûr",
          "Les cellules clés du traitement de l'information",
        ],
        pros_b: [
          "Soutient, protège et nourrit les neurones",
          "Ne transmet pas elle-même les influx nerveux",
          "Forme la gaine de myéline qui accélère les signaux",
          "Peut se diviser et se multiplier toute la vie",
          "Inclut astrocytes, oligodendrocytes et microglie",
        ],
        verdict:
          "Les neurones sont les cellules signaleuses qui portent pensées et réflexes ; les cellules gliales sont l'équipe de soutien qui les isole, nourrit et défend. Le cerveau a besoin des deux.",
        faq: [
          {
            q: "Les cellules gliales transmettent-elles les signaux nerveux ?",
            a: "Non. Les cellules gliales soutiennent les neurones mais ne portent pas elles-mêmes les influx.",
          },
          {
            q: "À quoi sert la gaine de myéline ?",
            a: "Fabriquée par les cellules gliales, elle isole les axones et accélère fortement la transmission.",
          },
          {
            q: "Ces cellules peuvent-elles se régénérer ?",
            a: "Les cellules gliales peuvent se diviser toute la vie, alors que les neurones mûrs le peuvent rarement.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "virus-vs-bacteria",
    a: "Virus",
    b: "Bacteria",
    category: "science",
    emoji_a: "🦠",
    emoji_b: "🧫",
    content: {
      en: {
        title: "Virus vs Bacteria: Two Kinds of Microbe",
        h1: "Virus vs Bacteria: Living Cell vs Inert Particle",
        description:
          "Bacteria are living single cells; viruses are inert particles that need a host. Compare these two kinds of microbe.",
        intro:
          "Viruses and bacteria both cause disease, but they are fundamentally different. One is a living organism; the other barely counts as alive.",
        pros_a: [
          "Not made of cells; a particle of genetic material in a coat",
          "Cannot reproduce without hijacking a host cell",
          "Far smaller than bacteria",
          "Considered non-living outside a host",
          "Treated with antiviral drugs and prevented by vaccines",
        ],
        pros_b: [
          "A complete living single-celled organism",
          "Can reproduce on its own by dividing",
          "Larger than viruses and visible under a light microscope",
          "Many are harmless or even helpful to humans",
          "Treated with antibiotics when they cause infection",
        ],
        verdict:
          "Bacteria are living cells that can thrive independently; viruses are inert until they invade a host. Antibiotics kill bacteria but do nothing to viruses, which is why correct diagnosis matters.",
        faq: [
          {
            q: "Why don't antibiotics work on viruses?",
            a: "Antibiotics target structures and processes of living bacterial cells, which viruses simply do not have.",
          },
          {
            q: "Are all bacteria harmful?",
            a: "No. Most bacteria are harmless and many are beneficial, such as those in your gut.",
          },
          {
            q: "Are viruses alive?",
            a: "It is debated. Viruses cannot reproduce alone and are usually considered non-living outside a host.",
          },
        ],
      },
      fr: {
        title: "Virus vs Bactérie : deux types de microbes",
        h1: "Virus vs Bactérie : cellule vivante vs particule inerte",
        description:
          "Les bactéries sont des cellules vivantes ; les virus des particules inertes qui ont besoin d'un hôte. Comparez ces deux microbes.",
        intro:
          "Virus et bactéries causent des maladies, mais sont fondamentalement différents. L'un est un organisme vivant, l'autre est à peine vivant.",
        pros_a: [
          "Pas fait de cellules ; une particule de matériel génétique enrobée",
          "Ne peut se reproduire sans détourner une cellule hôte",
          "Bien plus petit qu'une bactérie",
          "Considéré comme non vivant hors d'un hôte",
          "Traité par antiviraux et prévenu par des vaccins",
        ],
        pros_b: [
          "Un organisme unicellulaire vivant complet",
          "Peut se reproduire seule en se divisant",
          "Plus grande qu'un virus et visible au microscope optique",
          "Beaucoup sont inoffensives, voire utiles à l'humain",
          "Traitée par antibiotiques en cas d'infection",
        ],
        verdict:
          "Les bactéries sont des cellules vivantes capables de prospérer seules ; les virus sont inertes jusqu'à envahir un hôte. Les antibiotiques tuent les bactéries mais rien contre les virus.",
        faq: [
          {
            q: "Pourquoi les antibiotiques ne marchent-ils pas sur les virus ?",
            a: "Les antibiotiques ciblent les structures des cellules bactériennes vivantes, que les virus n'ont tout simplement pas.",
          },
          {
            q: "Toutes les bactéries sont-elles nocives ?",
            a: "Non. La plupart sont inoffensives et beaucoup sont bénéfiques, comme celles de votre intestin.",
          },
          {
            q: "Les virus sont-ils vivants ?",
            a: "C'est débattu. Les virus ne peuvent se reproduire seuls et sont souvent considérés non vivants hors d'un hôte.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "antigen-vs-antibody",
    a: "Antigen",
    b: "Antibody",
    category: "science",
    emoji_a: "🦠",
    emoji_b: "🛡️",
    content: {
      en: {
        title: "Antigen vs Antibody: The Immune Response",
        h1: "Antigen vs Antibody: Trigger and Defender",
        description:
          "An antigen triggers an immune response; an antibody is the protein that fights it. Compare these two immune system terms.",
        intro:
          "Antigens and antibodies work as a matched pair in the immune system. One is the threat the body detects; the other is the body's tailored response.",
        pros_a: [
          "A foreign molecule that triggers an immune response",
          "Often a protein on the surface of a pathogen",
          "Recognized as 'non-self' by the immune system",
          "Examples include parts of viruses and bacteria",
          "Each antigen has a specific shape the body identifies",
        ],
        pros_b: [
          "A Y-shaped protein produced by the immune system",
          "Made by white blood cells called B cells",
          "Binds specifically to a matching antigen",
          "Neutralizes or marks pathogens for destruction",
          "Provides lasting immunity after infection or vaccination",
        ],
        verdict:
          "An antigen is the alarm — a foreign marker the body detects. An antibody is the custom-built response that locks onto that antigen. Vaccines work by introducing antigens to train antibody production.",
        faq: [
          {
            q: "How do antibodies recognize antigens?",
            a: "Each antibody has a binding site shaped to fit one specific antigen, like a lock and key.",
          },
          {
            q: "What cells make antibodies?",
            a: "B cells, a type of white blood cell, produce and release antibodies.",
          },
          {
            q: "How do vaccines use antigens?",
            a: "Vaccines expose the body to harmless antigens so it builds antibodies before a real infection.",
          },
        ],
      },
      fr: {
        title: "Antigène vs Anticorps : la réponse immunitaire",
        h1: "Antigène vs Anticorps : déclencheur et défenseur",
        description:
          "Un antigène déclenche une réponse immunitaire ; un anticorps est la protéine qui la combat. Comparez ces deux termes immunitaires.",
        intro:
          "Antigènes et anticorps forment une paire assortie dans le système immunitaire. L'un est la menace détectée, l'autre la réponse sur mesure du corps.",
        pros_a: [
          "Une molécule étrangère qui déclenche une réponse immunitaire",
          "Souvent une protéine à la surface d'un agent pathogène",
          "Reconnu comme « non-soi » par le système immunitaire",
          "Exemples : des parties de virus et de bactéries",
          "Chaque antigène a une forme spécifique identifiée par le corps",
        ],
        pros_b: [
          "Une protéine en forme de Y produite par le système immunitaire",
          "Fabriqué par des globules blancs appelés lymphocytes B",
          "Se lie spécifiquement à un antigène correspondant",
          "Neutralise ou marque les pathogènes pour destruction",
          "Procure une immunité durable après infection ou vaccination",
        ],
        verdict:
          "Un antigène est l'alarme — un marqueur étranger détecté par le corps. Un anticorps est la réponse sur mesure qui s'accroche à cet antigène. Les vaccins introduisent des antigènes pour entraîner la production d'anticorps.",
        faq: [
          {
            q: "Comment les anticorps reconnaissent-ils les antigènes ?",
            a: "Chaque anticorps a un site de liaison épousant un antigène précis, comme une clé et une serrure.",
          },
          {
            q: "Quelles cellules fabriquent les anticorps ?",
            a: "Les lymphocytes B, un type de globule blanc, produisent et libèrent les anticorps.",
          },
          {
            q: "Comment les vaccins utilisent-ils les antigènes ?",
            a: "Les vaccins exposent le corps à des antigènes inoffensifs pour qu'il fabrique des anticorps avant une vraie infection.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "vaccine-vs-antibiotic",
    a: "Vaccine",
    b: "Antibiotic",
    category: "science",
    emoji_a: "💉",
    emoji_b: "💊",
    content: {
      en: {
        title: "Vaccine vs Antibiotic: Prevent vs Treat",
        h1: "Vaccine vs Antibiotic: Two Tools of Medicine",
        description:
          "Vaccines prevent infection before it happens; antibiotics treat bacterial infections after they start. Compare these tools.",
        intro:
          "Vaccines and antibiotics are both vital to medicine, but they work at opposite ends of disease — one stops it starting, the other fights it once present.",
        pros_a: [
          "Prevents disease before infection occurs",
          "Trains the immune system using harmless antigens",
          "Works against many viruses and some bacteria",
          "Provides long-lasting, sometimes lifelong protection",
          "Protects communities through herd immunity",
        ],
        pros_b: [
          "Treats infections that have already begun",
          "Kills bacteria or stops them from multiplying",
          "Works only against bacteria, never viruses",
          "Provides no lasting protection after treatment ends",
          "Overuse drives the rise of antibiotic resistance",
        ],
        verdict:
          "Vaccines are preventive — they prepare your immunity in advance. Antibiotics are curative — they fight an active bacterial infection. Neither replaces the other, and antibiotics never treat viral illness.",
        faq: [
          {
            q: "Can antibiotics treat the flu?",
            a: "No. The flu is caused by a virus, and antibiotics only work against bacteria.",
          },
          {
            q: "Do vaccines give permanent protection?",
            a: "Often long-lasting, but some vaccines need boosters as immunity gradually fades.",
          },
          {
            q: "What is antibiotic resistance?",
            a: "When bacteria evolve to survive antibiotics, making infections harder to treat over time.",
          },
        ],
      },
      fr: {
        title: "Vaccin vs Antibiotique : prévenir vs traiter",
        h1: "Vaccin vs Antibiotique : deux outils de la médecine",
        description:
          "Les vaccins préviennent l'infection avant qu'elle arrive ; les antibiotiques traitent les infections bactériennes après.",
        intro:
          "Vaccins et antibiotiques sont vitaux en médecine, mais agissent aux deux extrêmes de la maladie : l'un l'empêche, l'autre la combat une fois là.",
        pros_a: [
          "Prévient la maladie avant que l'infection ne survienne",
          "Entraîne le système immunitaire avec des antigènes inoffensifs",
          "Agit contre de nombreux virus et certaines bactéries",
          "Procure une protection durable, parfois à vie",
          "Protège les communautés par l'immunité collective",
        ],
        pros_b: [
          "Traite les infections déjà déclarées",
          "Tue les bactéries ou stoppe leur multiplication",
          "N'agit que contre les bactéries, jamais les virus",
          "Ne procure aucune protection durable après le traitement",
          "L'abus alimente la montée de la résistance aux antibiotiques",
        ],
        verdict:
          "Les vaccins sont préventifs — ils préparent l'immunité à l'avance. Les antibiotiques sont curatifs — ils combattent une infection bactérienne active. Aucun ne remplace l'autre, et les antibiotiques ne traitent jamais le viral.",
        faq: [
          {
            q: "Les antibiotiques traitent-ils la grippe ?",
            a: "Non. La grippe est causée par un virus, et les antibiotiques n'agissent que contre les bactéries.",
          },
          {
            q: "Les vaccins donnent-ils une protection permanente ?",
            a: "Souvent durable, mais certains vaccins nécessitent des rappels car l'immunité décline peu à peu.",
          },
          {
            q: "Qu'est-ce que la résistance aux antibiotiques ?",
            a: "Quand les bactéries évoluent pour survivre aux antibiotiques, rendant les infections plus dures à traiter.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "hormone-vs-neurotransmitter",
    a: "Hormone",
    b: "Neurotransmitter",
    category: "science",
    emoji_a: "🧪",
    emoji_b: "⚡",
    content: {
      en: {
        title: "Hormone vs Neurotransmitter: Body Messengers",
        h1: "Hormone vs Neurotransmitter: Slow vs Fast Signals",
        description:
          "Hormones travel through the blood for slow body-wide effects; neurotransmitters act fast at synapses. Compare these messengers.",
        intro:
          "The body uses chemical messengers to coordinate itself. Hormones and neurotransmitters do this in two very different ways and timescales.",
        pros_a: [
          "A chemical messenger released into the bloodstream",
          "Produced by glands of the endocrine system",
          "Travels widely and acts on distant target organs",
          "Effects are slower to start but last longer",
          "Examples include insulin, adrenaline and estrogen",
        ],
        pros_b: [
          "A chemical messenger released at a synapse",
          "Produced by neurons in the nervous system",
          "Acts locally on a neighboring cell across a tiny gap",
          "Effects are very fast but short-lived",
          "Examples include dopamine, serotonin and acetylcholine",
        ],
        verdict:
          "Hormones are the body's slow, long-range broadcast system through the blood; neurotransmitters are fast, local messengers at nerve junctions. Some chemicals, like adrenaline, can act as both.",
        faq: [
          {
            q: "Which acts faster?",
            a: "Neurotransmitters act in milliseconds at synapses; hormones are slower because they travel through the blood.",
          },
          {
            q: "Can a chemical be both?",
            a: "Yes. Adrenaline acts as a neurotransmitter in the nervous system and as a hormone in the blood.",
          },
          {
            q: "Which lasts longer?",
            a: "Hormonal effects generally last longer, while neurotransmitter effects are brief and quickly cleared.",
          },
        ],
      },
      fr: {
        title: "Hormone vs Neurotransmetteur : messagers du corps",
        h1: "Hormone vs Neurotransmetteur : signaux lents vs rapides",
        description:
          "Les hormones circulent dans le sang pour des effets lents et larges ; les neurotransmetteurs agissent vite aux synapses.",
        intro:
          "Le corps utilise des messagers chimiques pour se coordonner. Hormones et neurotransmetteurs le font de deux façons et à deux vitesses très différentes.",
        pros_a: [
          "Un messager chimique libéré dans la circulation sanguine",
          "Produite par les glandes du système endocrinien",
          "Voyage loin et agit sur des organes cibles distants",
          "Les effets démarrent plus lentement mais durent plus longtemps",
          "Exemples : insuline, adrénaline et œstrogène",
        ],
        pros_b: [
          "Un messager chimique libéré au niveau d'une synapse",
          "Produit par les neurones du système nerveux",
          "Agit localement sur une cellule voisine, sur un minuscule écart",
          "Les effets sont très rapides mais brefs",
          "Exemples : dopamine, sérotonine et acétylcholine",
        ],
        verdict:
          "Les hormones sont le système de diffusion lent et longue portée du corps via le sang ; les neurotransmetteurs des messagers rapides et locaux aux jonctions nerveuses. Certains, comme l'adrénaline, font les deux.",
        faq: [
          {
            q: "Lequel agit le plus vite ?",
            a: "Les neurotransmetteurs agissent en millisecondes aux synapses ; les hormones sont plus lentes car elles voyagent par le sang.",
          },
          {
            q: "Une molécule peut-elle être les deux ?",
            a: "Oui. L'adrénaline agit comme neurotransmetteur dans le système nerveux et comme hormone dans le sang.",
          },
          {
            q: "Lequel dure le plus longtemps ?",
            a: "Les effets hormonaux durent généralement plus longtemps ; ceux des neurotransmetteurs sont brefs et vite éliminés.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "rem-vs-nrem-sleep",
    a: "REM sleep",
    b: "NREM sleep",
    category: "science",
    emoji_a: "💤",
    emoji_b: "😴",
    content: {
      en: {
        title: "REM vs NREM Sleep: The Stages of Sleep",
        h1: "REM vs NREM Sleep: Two Phases of Rest",
        description:
          "REM sleep is active and dream-filled; NREM sleep is deep and restorative. Compare the two main types of sleep.",
        intro:
          "A night of sleep cycles between two main types. REM and NREM sleep do different jobs for the brain and body.",
        pros_a: [
          "Rapid eye movement sleep, when vivid dreams occur",
          "Brain activity resembles being awake",
          "The body's voluntary muscles are temporarily paralyzed",
          "Important for memory and emotional processing",
          "Makes up a larger share of sleep toward morning",
        ],
        pros_b: [
          "Non-rapid eye movement sleep, divided into three stages",
          "Includes the deepest, slow-wave restorative sleep",
          "Brain activity slows and becomes more regular",
          "Important for physical repair and growth",
          "Dominates the first half of the night",
        ],
        verdict:
          "NREM sleep handles deep physical restoration; REM sleep supports memory, learning and emotional health. A healthy night cycles through both several times, so each plays an essential role.",
        faq: [
          {
            q: "When do most dreams happen?",
            a: "Most vivid dreaming happens during REM sleep, when brain activity is high.",
          },
          {
            q: "Which sleep is most restorative for the body?",
            a: "Deep NREM slow-wave sleep is the most physically restorative phase.",
          },
          {
            q: "How long is one sleep cycle?",
            a: "A full cycle through NREM and REM lasts roughly 90 minutes and repeats through the night.",
          },
        ],
      },
      fr: {
        title: "Sommeil paradoxal vs lent : les stades du sommeil",
        h1: "Sommeil paradoxal vs lent : deux phases de repos",
        description:
          "Le sommeil paradoxal est actif et rempli de rêves ; le sommeil lent est profond et réparateur. Comparez les deux types.",
        intro:
          "Une nuit de sommeil alterne entre deux types principaux. Sommeil paradoxal et lent accomplissent des tâches différentes pour le cerveau et le corps.",
        pros_a: [
          "Sommeil à mouvements oculaires rapides, où surviennent les rêves vifs",
          "L'activité cérébrale ressemble à celle de l'éveil",
          "Les muscles volontaires du corps sont temporairement paralysés",
          "Important pour la mémoire et le traitement émotionnel",
          "Occupe une plus grande part du sommeil vers le matin",
        ],
        pros_b: [
          "Sommeil sans mouvements oculaires rapides, en trois stades",
          "Inclut le sommeil profond à ondes lentes, réparateur",
          "L'activité cérébrale ralentit et devient plus régulière",
          "Important pour la réparation physique et la croissance",
          "Domine la première moitié de la nuit",
        ],
        verdict:
          "Le sommeil lent assure la restauration physique profonde ; le paradoxal soutient mémoire, apprentissage et santé émotionnelle. Une bonne nuit alterne les deux plusieurs fois.",
        faq: [
          {
            q: "Quand surviennent la plupart des rêves ?",
            a: "Les rêves les plus vifs surviennent durant le sommeil paradoxal, quand l'activité cérébrale est élevée.",
          },
          {
            q: "Quel sommeil est le plus réparateur pour le corps ?",
            a: "Le sommeil lent profond à ondes lentes est la phase la plus réparatrice physiquement.",
          },
          {
            q: "Combien dure un cycle de sommeil ?",
            a: "Un cycle complet de sommeil lent et paradoxal dure environ 90 minutes et se répète la nuit.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "rods-vs-cones",
    a: "Rods",
    b: "Cones",
    category: "science",
    emoji_a: "🌙",
    emoji_b: "🌈",
    content: {
      en: {
        title: "Rods vs Cones: The Eye's Light Receptors",
        h1: "Rods vs Cones: How the Eye Sees",
        description:
          "Rods detect dim light and motion; cones detect color and detail. Compare the two photoreceptor cells of the retina.",
        intro:
          "Your retina holds two kinds of light-sensing cells. Rods and cones divide the work of vision between dim and bright conditions.",
        pros_a: [
          "Highly sensitive to low light levels",
          "Enable night vision and detecting movement",
          "Do not distinguish colors, only shades of grey",
          "Far more numerous, around 120 million per eye",
          "Concentrated in the outer edges of the retina",
        ],
        pros_b: [
          "Work best in bright light",
          "Enable color vision and sharp detail",
          "Come in three types sensing red, green and blue",
          "Fewer in number, around 6 million per eye",
          "Concentrated in the central fovea for sharp focus",
        ],
        verdict:
          "Rods give you sensitive black-and-white vision in the dark; cones give you colorful, detailed vision in bright light. That is why colors fade and detail blurs at night when only rods are active.",
        faq: [
          {
            q: "Why can't we see color well at night?",
            a: "In dim light only rods are active, and rods cannot detect color — just shades of grey.",
          },
          {
            q: "Which cells give sharp central vision?",
            a: "Cones, densely packed in the fovea at the center of the retina, provide the sharpest detail.",
          },
          {
            q: "What causes color blindness?",
            a: "Color blindness usually results from missing or faulty cone types, often red or green.",
          },
        ],
      },
      fr: {
        title: "Bâtonnets vs Cônes : les récepteurs de l'œil",
        h1: "Bâtonnets vs Cônes : comment l'œil voit",
        description:
          "Les bâtonnets détectent la faible lumière et le mouvement ; les cônes la couleur et le détail. Comparez ces photorécepteurs.",
        intro:
          "Votre rétine abrite deux types de cellules sensibles à la lumière. Bâtonnets et cônes se partagent la vision entre conditions sombres et lumineuses.",
        pros_a: [
          "Très sensibles aux faibles niveaux de lumière",
          "Permettent la vision nocturne et la détection du mouvement",
          "Ne distinguent pas les couleurs, seulement les nuances de gris",
          "Bien plus nombreux, environ 120 millions par œil",
          "Concentrés sur les bords extérieurs de la rétine",
        ],
        pros_b: [
          "Fonctionnent au mieux en pleine lumière",
          "Permettent la vision des couleurs et du détail net",
          "Existent en trois types percevant rouge, vert et bleu",
          "Moins nombreux, environ 6 millions par œil",
          "Concentrés dans la fovéa centrale pour une mise au point nette",
        ],
        verdict:
          "Les bâtonnets donnent une vision sensible en noir et blanc dans le noir ; les cônes une vision colorée et détaillée en pleine lumière. D'où la disparition des couleurs la nuit.",
        faq: [
          {
            q: "Pourquoi voit-on mal les couleurs la nuit ?",
            a: "En faible lumière, seuls les bâtonnets sont actifs, et ils ne détectent pas la couleur — juste des nuances de gris.",
          },
          {
            q: "Quelles cellules donnent la vision centrale nette ?",
            a: "Les cônes, densément regroupés dans la fovéa au centre de la rétine, donnent le détail le plus net.",
          },
          {
            q: "Qu'est-ce qui cause le daltonisme ?",
            a: "Le daltonisme résulte généralement de types de cônes absents ou défectueux, souvent le rouge ou le vert.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "genotype-vs-phenotype",
    a: "Genotype",
    b: "Phenotype",
    category: "science",
    emoji_a: "🧬",
    emoji_b: "👁️",
    content: {
      en: {
        title: "Genotype vs Phenotype: Genes and Traits",
        h1: "Genotype vs Phenotype: Code vs Expression",
        description:
          "Genotype is an organism's genetic code; phenotype is its observable traits. Compare these two genetics concepts.",
        intro:
          "Genetics distinguishes between the instructions an organism carries and the visible results. That is the difference between genotype and phenotype.",
        pros_a: [
          "The full set of genes an organism carries",
          "The inherited genetic code itself",
          "Cannot be seen directly without genetic testing",
          "Stays the same throughout an organism's life",
          "Determines the potential range of traits",
        ],
        pros_b: [
          "The observable physical and behavioral traits",
          "The visible expression of the genotype",
          "Can be seen and measured directly",
          "Can change with environment, age and lifestyle",
          "Results from genotype interacting with surroundings",
        ],
        verdict:
          "Genotype is the genetic blueprint; phenotype is the finished result you can observe. The same genotype can yield different phenotypes depending on environment, so genes set potential, not destiny.",
        faq: [
          {
            q: "Can two organisms share a genotype but differ in phenotype?",
            a: "Yes. Identical twins share a genotype yet can develop differences from environment and lifestyle.",
          },
          {
            q: "Does the environment affect genotype?",
            a: "Not the inherited code itself, but the environment strongly influences which traits appear in the phenotype.",
          },
          {
            q: "Which can you observe directly?",
            a: "The phenotype. Genotype generally requires genetic testing to determine.",
          },
        ],
      },
      fr: {
        title: "Génotype vs Phénotype : gènes et caractères",
        h1: "Génotype vs Phénotype : code vs expression",
        description:
          "Le génotype est le code génétique d'un organisme ; le phénotype ses caractères observables. Comparez ces concepts de génétique.",
        intro:
          "La génétique distingue les instructions portées par un organisme et les résultats visibles. C'est la différence entre génotype et phénotype.",
        pros_a: [
          "L'ensemble complet des gènes que porte un organisme",
          "Le code génétique hérité lui-même",
          "Ne se voit pas directement sans test génétique",
          "Reste identique toute la vie de l'organisme",
          "Détermine l'éventail potentiel des caractères",
        ],
        pros_b: [
          "Les caractères physiques et comportementaux observables",
          "L'expression visible du génotype",
          "Peut être vu et mesuré directement",
          "Peut changer avec l'environnement, l'âge et le mode de vie",
          "Résulte du génotype interagissant avec son milieu",
        ],
        verdict:
          "Le génotype est le plan génétique ; le phénotype le résultat fini observable. Un même génotype peut donner des phénotypes différents selon l'environnement : les gènes fixent le potentiel, pas le destin.",
        faq: [
          {
            q: "Deux organismes peuvent-ils partager un génotype mais différer de phénotype ?",
            a: "Oui. Les vrais jumeaux partagent un génotype mais peuvent développer des différences dues au milieu et au mode de vie.",
          },
          {
            q: "L'environnement affecte-t-il le génotype ?",
            a: "Pas le code hérité lui-même, mais l'environnement influence fortement quels caractères apparaissent dans le phénotype.",
          },
          {
            q: "Lequel peut-on observer directement ?",
            a: "Le phénotype. Le génotype requiert généralement un test génétique pour être déterminé.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "dominant-vs-recessive-allele",
    a: "Dominant allele",
    b: "Recessive allele",
    category: "science",
    emoji_a: "🔠",
    emoji_b: "🔡",
    content: {
      en: {
        title: "Dominant vs Recessive Allele Explained",
        h1: "Dominant vs Recessive Allele: How Traits Are Inherited",
        description:
          "A dominant allele shows even with one copy; a recessive allele needs two copies. Compare these two forms of a gene.",
        intro:
          "Genes come in alternative versions called alleles. Whether a trait appears depends on whether its allele is dominant or recessive.",
        pros_a: [
          "Expressed even when only one copy is present",
          "Masks the effect of a recessive partner allele",
          "Conventionally written with a capital letter",
          "Shows in the phenotype of a heterozygous individual",
          "Only one copy is needed for the trait to appear",
        ],
        pros_b: [
          "Expressed only when two copies are present",
          "Hidden whenever a dominant allele is also present",
          "Conventionally written with a lowercase letter",
          "Can be carried without showing in the phenotype",
          "Both parents must pass it on for the trait to appear",
        ],
        verdict:
          "A dominant allele needs just one copy to show; a recessive allele needs two. Carriers can pass on hidden recessive alleles, which is why recessive traits can skip generations.",
        faq: [
          {
            q: "What is a carrier?",
            a: "Someone with one recessive and one dominant allele who does not show the recessive trait but can pass it on.",
          },
          {
            q: "Why do recessive traits skip generations?",
            a: "They stay hidden in carriers and only reappear when two recessive alleles meet in offspring.",
          },
          {
            q: "How many alleles does an individual have per gene?",
            a: "Two — one inherited from each parent, which together determine the trait.",
          },
        ],
      },
      fr: {
        title: "Allèle dominant vs récessif expliqué",
        h1: "Allèle dominant vs récessif : l'hérédité des caractères",
        description:
          "Un allèle dominant s'exprime avec une seule copie ; un allèle récessif en nécessite deux. Comparez ces deux formes d'un gène.",
        intro:
          "Les gènes existent en versions alternatives appelées allèles. L'apparition d'un caractère dépend du caractère dominant ou récessif de son allèle.",
        pros_a: [
          "S'exprime même quand une seule copie est présente",
          "Masque l'effet d'un allèle partenaire récessif",
          "Par convention noté avec une lettre majuscule",
          "Se manifeste dans le phénotype d'un individu hétérozygote",
          "Une seule copie suffit pour que le caractère apparaisse",
        ],
        pros_b: [
          "S'exprime seulement quand deux copies sont présentes",
          "Caché dès qu'un allèle dominant est aussi présent",
          "Par convention noté avec une lettre minuscule",
          "Peut être porté sans se montrer dans le phénotype",
          "Les deux parents doivent le transmettre pour qu'il apparaisse",
        ],
        verdict:
          "Un allèle dominant ne nécessite qu'une copie pour se montrer ; un récessif en nécessite deux. Les porteurs transmettent des allèles récessifs cachés, d'où les caractères qui sautent des générations.",
        faq: [
          {
            q: "Qu'est-ce qu'un porteur ?",
            a: "Quelqu'un avec un allèle récessif et un dominant qui ne montre pas le caractère récessif mais peut le transmettre.",
          },
          {
            q: "Pourquoi les caractères récessifs sautent-ils des générations ?",
            a: "Ils restent cachés chez les porteurs et ne réapparaissent que quand deux allèles récessifs se rencontrent.",
          },
          {
            q: "Combien d'allèles un individu a-t-il par gène ?",
            a: "Deux — un hérité de chaque parent, qui ensemble déterminent le caractère.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "endothermic-vs-exothermic-animals",
    a: "Endotherm",
    b: "Ectotherm",
    category: "science",
    emoji_a: "🐻",
    emoji_b: "🦎",
    content: {
      en: {
        title: "Endotherm vs Ectotherm: Warm vs Cold Blooded",
        h1: "Endotherm vs Ectotherm: How Animals Stay Warm",
        description:
          "Endotherms generate their own body heat; ectotherms rely on the environment. Compare warm-blooded and cold-blooded animals.",
        intro:
          "Animals regulate body temperature in two main ways. Some make their own heat internally; others depend on their surroundings.",
        pros_a: [
          "Generates body heat through its own metabolism",
          "Maintains a stable internal temperature",
          "Stays active in cold environments",
          "Needs much more food to fuel heat production",
          "Includes mammals and birds",
        ],
        pros_b: [
          "Relies on external sources for body heat",
          "Body temperature changes with the environment",
          "Basks in the sun or seeks shade to regulate warmth",
          "Needs far less food because heat is not self-made",
          "Includes reptiles, amphibians, fish and insects",
        ],
        verdict:
          "Endotherms pay a high food cost to stay warm and active anywhere, anytime. Ectotherms save energy but depend on the environment and slow down in the cold. Each strategy fits a different niche.",
        faq: [
          {
            q: "Why do reptiles bask in the sun?",
            a: "As ectotherms they cannot make their own heat, so they absorb warmth from sunlight to stay active.",
          },
          {
            q: "Why do endotherms need so much food?",
            a: "Generating constant body heat through metabolism requires a large and steady energy supply.",
          },
          {
            q: "Are endotherms always warmer?",
            a: "Not always, but they keep a stable internal temperature regardless of the environment.",
          },
        ],
      },
      fr: {
        title: "Endotherme vs Ectotherme : sang chaud vs froid",
        h1: "Endotherme vs Ectotherme : comment les animaux se chauffent",
        description:
          "Les endothermes produisent leur chaleur corporelle ; les ectothermes dépendent du milieu. Comparez animaux à sang chaud et froid.",
        intro:
          "Les animaux régulent leur température de deux façons. Certains produisent leur chaleur en interne, d'autres dépendent de leur environnement.",
        pros_a: [
          "Produit sa chaleur corporelle par son propre métabolisme",
          "Maintient une température interne stable",
          "Reste actif dans les environnements froids",
          "Nécessite beaucoup plus de nourriture pour produire la chaleur",
          "Inclut les mammifères et les oiseaux",
        ],
        pros_b: [
          "Dépend de sources externes pour sa chaleur corporelle",
          "La température du corps change avec l'environnement",
          "Se chauffe au soleil ou cherche l'ombre pour se réguler",
          "Nécessite bien moins de nourriture, la chaleur n'étant pas produite",
          "Inclut reptiles, amphibiens, poissons et insectes",
        ],
        verdict:
          "Les endothermes paient un coût alimentaire élevé pour rester chauds et actifs partout. Les ectothermes économisent l'énergie mais dépendent du milieu et ralentissent au froid. Chaque stratégie a sa niche.",
        faq: [
          {
            q: "Pourquoi les reptiles se chauffent-ils au soleil ?",
            a: "Étant ectothermes, ils ne produisent pas leur chaleur ; ils absorbent celle du soleil pour rester actifs.",
          },
          {
            q: "Pourquoi les endothermes ont-ils besoin de tant de nourriture ?",
            a: "Produire une chaleur corporelle constante par le métabolisme exige un apport énergétique grand et régulier.",
          },
          {
            q: "Les endothermes sont-ils toujours plus chauds ?",
            a: "Pas toujours, mais ils maintiennent une température interne stable, quel que soit l'environnement.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "longitudinal-vs-transverse-wave",
    a: "Longitudinal wave",
    b: "Transverse wave",
    category: "science",
    emoji_a: "〰️",
    emoji_b: "🌊",
    content: {
      en: {
        title: "Longitudinal vs Transverse Wave Explained",
        h1: "Longitudinal vs Transverse Wave: Two Wave Types",
        description:
          "Longitudinal waves vibrate along the travel direction; transverse waves vibrate across it. Compare these two wave types.",
        intro:
          "Waves carry energy in two basic ways. The difference is the direction the medium vibrates relative to the wave's travel.",
        pros_a: [
          "The medium vibrates parallel to the wave's direction",
          "Forms regions of compression and rarefaction",
          "Sound is the most familiar example",
          "Can travel through solids, liquids and gases",
          "A push-pull motion along the line of travel",
        ],
        pros_b: [
          "The medium vibrates at right angles to the wave's direction",
          "Forms crests and troughs",
          "Light and water surface waves are examples",
          "Light can travel through a vacuum; mechanical types cannot",
          "An up-and-down or side-to-side motion",
        ],
        verdict:
          "Longitudinal waves squeeze and stretch the medium along their path, like sound. Transverse waves shake it sideways, like light or ripples. Some waves, such as seismic waves, come in both forms.",
        faq: [
          {
            q: "Is sound a longitudinal or transverse wave?",
            a: "Sound is a longitudinal wave, traveling through compressions and rarefactions of the medium.",
          },
          {
            q: "Can light travel through empty space?",
            a: "Yes. Light is a transverse electromagnetic wave that needs no medium and crosses a vacuum.",
          },
          {
            q: "Do earthquakes produce both wave types?",
            a: "Yes. Seismic P-waves are longitudinal and S-waves are transverse.",
          },
        ],
      },
      fr: {
        title: "Onde longitudinale vs transversale expliquée",
        h1: "Onde longitudinale vs transversale : deux types d'ondes",
        description:
          "Les ondes longitudinales vibrent dans le sens du déplacement ; les transversales en travers. Comparez ces deux types d'ondes.",
        intro:
          "Les ondes transportent l'énergie de deux façons de base. La différence est le sens de vibration du milieu par rapport au déplacement.",
        pros_a: [
          "Le milieu vibre parallèlement à la direction de l'onde",
          "Forme des zones de compression et de raréfaction",
          "Le son en est l'exemple le plus familier",
          "Peut traverser solides, liquides et gaz",
          "Un mouvement de poussée-traction le long du trajet",
        ],
        pros_b: [
          "Le milieu vibre à angle droit de la direction de l'onde",
          "Forme des crêtes et des creux",
          "La lumière et les vagues de surface en sont des exemples",
          "La lumière traverse le vide ; les types mécaniques non",
          "Un mouvement de haut en bas ou latéral",
        ],
        verdict:
          "Les ondes longitudinales compriment et étirent le milieu le long de leur trajet, comme le son. Les transversales le secouent latéralement, comme la lumière. Certaines ondes sismiques sont des deux types.",
        faq: [
          {
            q: "Le son est-il une onde longitudinale ou transversale ?",
            a: "Le son est une onde longitudinale, se propageant par compressions et raréfactions du milieu.",
          },
          {
            q: "La lumière peut-elle traverser le vide ?",
            a: "Oui. La lumière est une onde électromagnétique transversale qui ne nécessite aucun milieu.",
          },
          {
            q: "Les séismes produisent-ils les deux types d'ondes ?",
            a: "Oui. Les ondes sismiques P sont longitudinales et les ondes S transversales.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "inertia-vs-momentum",
    a: "Inertia",
    b: "Momentum",
    category: "science",
    emoji_a: "🛑",
    emoji_b: "🎳",
    content: {
      en: {
        title: "Inertia vs Momentum: Resisting and Carrying Motion",
        h1: "Inertia vs Momentum: Two Properties of Motion",
        description:
          "Inertia is resistance to change in motion; momentum is mass in motion. Compare these two fundamental properties.",
        intro:
          "Inertia and momentum both relate to mass and motion, but they describe different things — one resists change, the other quantifies movement.",
        pros_a: [
          "The tendency of an object to resist changes in motion",
          "Depends only on mass, not on velocity",
          "A property, not a quantity with units",
          "Greater mass means greater inertia",
          "Explains why a heavy object is hard to start or stop",
        ],
        pros_b: [
          "A measure of the motion an object carries",
          "Depends on both mass and velocity",
          "A vector quantity measured in kilogram-meters per second",
          "Zero when an object is at rest",
          "Conserved in collisions within a closed system",
        ],
        verdict:
          "Inertia is the resistance an object has to changing its motion; momentum is how much motion it actually has. A parked truck has high inertia but zero momentum until it starts moving.",
        faq: [
          {
            q: "Does a resting object have momentum?",
            a: "No. Momentum depends on velocity, so a stationary object has zero momentum despite having inertia.",
          },
          {
            q: "What is conservation of momentum?",
            a: "In a closed system the total momentum stays constant, even through collisions.",
          },
          {
            q: "Does inertia depend on speed?",
            a: "No. Inertia depends only on mass; momentum is the quantity that also depends on velocity.",
          },
        ],
      },
      fr: {
        title: "Inertie vs Quantité de mouvement expliquées",
        h1: "Inertie vs Quantité de mouvement : deux propriétés",
        description:
          "L'inertie est la résistance au changement de mouvement ; la quantité de mouvement est la masse en mouvement. Comparez-les.",
        intro:
          "Inertie et quantité de mouvement concernent masse et mouvement, mais décrivent des choses différentes : l'une résiste au changement, l'autre le quantifie.",
        pros_a: [
          "La tendance d'un objet à résister aux changements de mouvement",
          "Dépend uniquement de la masse, pas de la vitesse",
          "Une propriété, non une grandeur avec des unités",
          "Plus de masse signifie plus d'inertie",
          "Explique pourquoi un objet lourd est dur à lancer ou arrêter",
        ],
        pros_b: [
          "Une mesure du mouvement que porte un objet",
          "Dépend à la fois de la masse et de la vitesse",
          "Grandeur vectorielle en kilogrammes-mètres par seconde",
          "Nulle quand un objet est au repos",
          "Se conserve lors des chocs dans un système fermé",
        ],
        verdict:
          "L'inertie est la résistance d'un objet à changer son mouvement ; la quantité de mouvement combien il en a réellement. Un camion garé a une grande inertie mais une quantité de mouvement nulle.",
        faq: [
          {
            q: "Un objet au repos a-t-il une quantité de mouvement ?",
            a: "Non. Elle dépend de la vitesse ; un objet immobile a une quantité de mouvement nulle malgré son inertie.",
          },
          {
            q: "Qu'est-ce que la conservation de la quantité de mouvement ?",
            a: "Dans un système fermé, la quantité de mouvement totale reste constante, même lors des chocs.",
          },
          {
            q: "L'inertie dépend-elle de la vitesse ?",
            a: "Non. L'inertie ne dépend que de la masse ; c'est la quantité de mouvement qui dépend aussi de la vitesse.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "atom-vs-molecule",
    a: "Atom",
    b: "Molecule",
    category: "science",
    emoji_a: "⚛️",
    emoji_b: "🔗",
    content: {
      en: {
        title: "Atom vs Molecule: Building Blocks of Matter",
        h1: "Atom vs Molecule: Single Unit vs Bonded Group",
        description:
          "An atom is the smallest unit of an element; a molecule is two or more atoms bonded together. Compare these basics of matter.",
        intro:
          "Matter is built from atoms, and atoms can join into molecules. Understanding the difference is the foundation of physical science.",
        pros_a: [
          "The smallest unit of an element that keeps its identity",
          "Made of protons, neutrons and electrons",
          "Cannot be broken down by chemical means",
          "Identified by its number of protons",
          "The basic building block of all matter",
        ],
        pros_b: [
          "Two or more atoms bonded together",
          "Held together by chemical bonds",
          "Can contain atoms of one element or several",
          "Has properties different from its individual atoms",
          "Examples include water, oxygen gas and glucose",
        ],
        verdict:
          "An atom is a single building block; a molecule is a structure built from those blocks bonded together. Two hydrogen atoms and one oxygen atom bond into one water molecule.",
        faq: [
          {
            q: "Can a molecule be made of just one element?",
            a: "Yes. Oxygen gas is a molecule of two oxygen atoms bonded together.",
          },
          {
            q: "What holds a molecule together?",
            a: "Chemical bonds, formed when atoms share or transfer electrons.",
          },
          {
            q: "Which is smaller, an atom or a molecule?",
            a: "An atom is smaller; a molecule is built from two or more atoms.",
          },
        ],
      },
      fr: {
        title: "Atome vs Molécule : briques de la matière",
        h1: "Atome vs Molécule : unité seule vs groupe lié",
        description:
          "Un atome est la plus petite unité d'un élément ; une molécule est faite de plusieurs atomes liés. Comparez ces bases de la matière.",
        intro:
          "La matière est faite d'atomes, et les atomes peuvent se lier en molécules. Comprendre la différence est le fondement des sciences physiques.",
        pros_a: [
          "La plus petite unité d'un élément gardant son identité",
          "Composé de protons, neutrons et électrons",
          "Ne peut être décomposé par des moyens chimiques",
          "Identifié par son nombre de protons",
          "La brique de base de toute la matière",
        ],
        pros_b: [
          "Deux atomes ou plus liés ensemble",
          "Maintenue par des liaisons chimiques",
          "Peut contenir des atomes d'un seul élément ou de plusieurs",
          "A des propriétés différentes de ses atomes individuels",
          "Exemples : l'eau, le dioxygène et le glucose",
        ],
        verdict:
          "Un atome est une brique unique ; une molécule une structure bâtie de ces briques liées. Deux atomes d'hydrogène et un d'oxygène se lient en une molécule d'eau.",
        faq: [
          {
            q: "Une molécule peut-elle être faite d'un seul élément ?",
            a: "Oui. Le dioxygène est une molécule de deux atomes d'oxygène liés ensemble.",
          },
          {
            q: "Qu'est-ce qui maintient une molécule ?",
            a: "Des liaisons chimiques, formées quand les atomes partagent ou transfèrent des électrons.",
          },
          {
            q: "Lequel est le plus petit, un atome ou une molécule ?",
            a: "Un atome est plus petit ; une molécule est bâtie de deux atomes ou plus.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "renewable-vs-nonrenewable-energy",
    a: "Renewable energy",
    b: "Non-renewable energy",
    category: "science",
    emoji_a: "♻️",
    emoji_b: "🛢️",
    content: {
      en: {
        title: "Renewable vs Non-Renewable Energy Compared",
        h1: "Renewable vs Non-Renewable Energy Sources",
        description:
          "Renewable energy replenishes naturally; non-renewable energy is finite. Compare these two categories of energy source.",
        intro:
          "Energy sources fall into two camps. The key question is whether the source replenishes faster than we use it.",
        pros_a: [
          "Replenishes naturally and will not run out",
          "Includes solar, wind, hydro and geothermal power",
          "Produces little or no greenhouse gas during use",
          "Often relies on intermittent natural conditions",
          "Becoming cheaper and more widespread each year",
        ],
        pros_b: [
          "Exists in a finite supply that will eventually run out",
          "Includes coal, oil, natural gas and nuclear fuel",
          "Provides a reliable, on-demand power supply",
          "Burning fossil fuels releases greenhouse gases",
          "Took millions of years to form underground",
        ],
        verdict:
          "Renewable energy is sustainable and low-emission but can be intermittent. Non-renewable energy is reliable and dense but finite and often polluting. The global shift favors renewables.",
        faq: [
          {
            q: "Is nuclear energy renewable?",
            a: "No. Nuclear power uses uranium, a finite fuel, so it is classified as non-renewable.",
          },
          {
            q: "Why is renewable energy sometimes intermittent?",
            a: "Solar and wind depend on weather and time of day, so output varies and may need storage.",
          },
          {
            q: "Why did fossil fuels take so long to form?",
            a: "They formed from ancient organic matter compressed underground over millions of years.",
          },
        ],
      },
      fr: {
        title: "Énergie renouvelable vs non renouvelable comparées",
        h1: "Énergie renouvelable vs non renouvelable : les sources",
        description:
          "L'énergie renouvelable se reconstitue naturellement ; la non renouvelable est limitée. Comparez ces deux catégories de sources.",
        intro:
          "Les sources d'énergie se divisent en deux camps. La question clé : la source se reconstitue-t-elle plus vite qu'on ne l'utilise ?",
        pros_a: [
          "Se reconstitue naturellement et ne s'épuisera pas",
          "Inclut le solaire, l'éolien, l'hydraulique et la géothermie",
          "Produit peu ou pas de gaz à effet de serre à l'usage",
          "Dépend souvent de conditions naturelles intermittentes",
          "Devient moins chère et plus répandue chaque année",
        ],
        pros_b: [
          "Existe en quantité finie qui finira par s'épuiser",
          "Inclut charbon, pétrole, gaz naturel et combustible nucléaire",
          "Fournit une alimentation fiable et à la demande",
          "Brûler des fossiles libère des gaz à effet de serre",
          "A mis des millions d'années à se former sous terre",
        ],
        verdict:
          "L'énergie renouvelable est durable et peu émettrice mais peut être intermittente. La non renouvelable est fiable et dense mais finie et souvent polluante. La transition mondiale favorise le renouvelable.",
        faq: [
          {
            q: "L'énergie nucléaire est-elle renouvelable ?",
            a: "Non. Le nucléaire utilise l'uranium, un combustible fini, il est donc classé non renouvelable.",
          },
          {
            q: "Pourquoi l'énergie renouvelable est-elle parfois intermittente ?",
            a: "Le solaire et l'éolien dépendent de la météo et de l'heure ; la production varie et peut exiger du stockage.",
          },
          {
            q: "Pourquoi les fossiles ont-ils mis si longtemps à se former ?",
            a: "Ils se sont formés de matière organique ancienne comprimée sous terre sur des millions d'années.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "telescope-vs-microscope",
    a: "Telescope",
    b: "Microscope",
    category: "science",
    emoji_a: "🔭",
    emoji_b: "🔬",
    content: {
      en: {
        title: "Telescope vs Microscope: Far vs Small",
        h1: "Telescope vs Microscope: Two Tools for Seeing",
        description:
          "A telescope reveals distant objects; a microscope reveals tiny ones. Compare these two essential scientific instruments.",
        intro:
          "Both instruments extend human sight beyond its natural limits, but in opposite directions — one outward to the cosmos, one inward to the microscopic.",
        pros_a: [
          "Magnifies distant, faraway objects",
          "Gathers faint light from stars and galaxies",
          "Used in astronomy to study the universe",
          "Comes in refracting and reflecting designs",
          "Large aperture collects more light for fainter objects",
        ],
        pros_b: [
          "Magnifies extremely small, nearby objects",
          "Reveals cells, microbes and fine structures",
          "Used in biology, medicine and materials science",
          "Includes optical and electron microscope types",
          "Higher magnification reveals ever-finer detail",
        ],
        verdict:
          "A telescope brings the distant cosmos into view by gathering faint light; a microscope brings the tiny world into focus by magnifying nearby objects. Each opened a whole realm of science.",
        faq: [
          {
            q: "Can a telescope work as a microscope?",
            a: "No. They are optimized for opposite tasks — one for distant faint light, one for tiny close objects.",
          },
          {
            q: "Why are big telescopes better?",
            a: "A larger aperture gathers more light, revealing fainter and more distant objects.",
          },
          {
            q: "What does an electron microscope use instead of light?",
            a: "It uses a beam of electrons, allowing far greater magnification than optical microscopes.",
          },
        ],
      },
      fr: {
        title: "Télescope vs Microscope : loin vs petit",
        h1: "Télescope vs Microscope : deux outils pour voir",
        description:
          "Un télescope révèle les objets lointains ; un microscope les objets minuscules. Comparez ces deux instruments scientifiques.",
        intro:
          "Les deux instruments étendent la vue humaine au-delà de ses limites, mais dans des sens opposés : l'un vers le cosmos, l'autre vers le microscopique.",
        pros_a: [
          "Grossit les objets lointains et éloignés",
          "Recueille la faible lumière des étoiles et galaxies",
          "Utilisé en astronomie pour étudier l'univers",
          "Existe en versions à réfraction et à réflexion",
          "Une grande ouverture capte plus de lumière",
        ],
        pros_b: [
          "Grossit les objets extrêmement petits et proches",
          "Révèle cellules, microbes et fines structures",
          "Utilisé en biologie, médecine et science des matériaux",
          "Inclut les types optique et électronique",
          "Un grossissement plus fort révèle un détail toujours plus fin",
        ],
        verdict:
          "Un télescope rend visible le cosmos lointain en captant la faible lumière ; un microscope met au point le monde minuscule en grossissant les objets proches. Chacun a ouvert un pan de la science.",
        faq: [
          {
            q: "Un télescope peut-il servir de microscope ?",
            a: "Non. Ils sont optimisés pour des tâches opposées — l'un pour la lumière faible lointaine, l'autre pour le minuscule proche.",
          },
          {
            q: "Pourquoi les grands télescopes sont-ils meilleurs ?",
            a: "Une plus grande ouverture capte plus de lumière, révélant des objets plus faibles et lointains.",
          },
          {
            q: "Qu'utilise un microscope électronique au lieu de la lumière ?",
            a: "Il utilise un faisceau d'électrons, permettant un grossissement bien supérieur aux microscopes optiques.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "rotation-vs-revolution",
    a: "Rotation",
    b: "Revolution",
    category: "science",
    emoji_a: "🔄",
    emoji_b: "🪐",
    content: {
      en: {
        title: "Rotation vs Revolution: Earth's Two Motions",
        h1: "Rotation vs Revolution: Spinning and Orbiting",
        description:
          "Rotation is spinning on an axis; revolution is orbiting another body. Compare these two motions of planets.",
        intro:
          "Earth and other planets move in two ways at once. One motion gives us day and night; the other gives us the year.",
        pros_a: [
          "An object spinning around its own internal axis",
          "Earth's rotation takes about 24 hours",
          "Causes the cycle of day and night",
          "Creates the apparent movement of the Sun across the sky",
          "Also explains the bulge at a planet's equator",
        ],
        pros_b: [
          "An object orbiting around another body",
          "Earth's revolution around the Sun takes about 365 days",
          "Defines the length of one year",
          "Combined with axial tilt, it causes the seasons",
          "Follows a roughly elliptical orbital path",
        ],
        verdict:
          "Rotation is the daily spin that brings day and night; revolution is the yearly orbit that brings the seasons. Earth does both simultaneously, which is why we have days, years and seasons.",
        faq: [
          {
            q: "Which motion causes day and night?",
            a: "Rotation. As Earth spins on its axis, each side faces the Sun in turn.",
          },
          {
            q: "What causes the seasons?",
            a: "Earth's revolution around the Sun combined with the tilt of its axis.",
          },
          {
            q: "How long is one Earth revolution?",
            a: "About 365.25 days, which is why we add a leap day every four years.",
          },
        ],
      },
      fr: {
        title: "Rotation vs Révolution : les deux mouvements de la Terre",
        h1: "Rotation vs Révolution : tourner sur soi et orbiter",
        description:
          "La rotation est le tournoiement sur un axe ; la révolution l'orbite autour d'un autre corps. Comparez ces deux mouvements.",
        intro:
          "La Terre et les autres planètes se déplacent de deux façons à la fois. Un mouvement donne le jour et la nuit, l'autre l'année.",
        pros_a: [
          "Un objet tournant autour de son propre axe interne",
          "La rotation de la Terre dure environ 24 heures",
          "Cause le cycle du jour et de la nuit",
          "Crée le mouvement apparent du Soleil dans le ciel",
          "Explique aussi le renflement à l'équateur d'une planète",
        ],
        pros_b: [
          "Un objet orbitant autour d'un autre corps",
          "La révolution de la Terre autour du Soleil dure environ 365 jours",
          "Définit la durée d'une année",
          "Combinée à l'inclinaison de l'axe, elle cause les saisons",
          "Suit une trajectoire orbitale à peu près elliptique",
        ],
        verdict:
          "La rotation est le tournoiement quotidien qui apporte le jour et la nuit ; la révolution l'orbite annuelle qui apporte les saisons. La Terre fait les deux simultanément.",
        faq: [
          {
            q: "Quel mouvement cause le jour et la nuit ?",
            a: "La rotation. En tournant sur son axe, chaque côté de la Terre fait face au Soleil tour à tour.",
          },
          {
            q: "Qu'est-ce qui cause les saisons ?",
            a: "La révolution de la Terre autour du Soleil combinée à l'inclinaison de son axe.",
          },
          {
            q: "Combien dure une révolution terrestre ?",
            a: "Environ 365,25 jours, d'où l'ajout d'un jour bissextile tous les quatre ans.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "solstice-vs-equinox",
    a: "Solstice",
    b: "Equinox",
    category: "science",
    emoji_a: "☀️",
    emoji_b: "⚖️",
    content: {
      en: {
        title: "Solstice vs Equinox: Marking the Seasons",
        h1: "Solstice vs Equinox: Key Dates of the Year",
        description:
          "A solstice marks the longest or shortest day; an equinox marks equal day and night. Compare these astronomical events.",
        intro:
          "Four key dates structure the year. Solstices and equinoxes mark the turning points of Earth's seasons.",
        pros_a: [
          "Marks the longest or shortest day of the year",
          "Occurs around June 21 and December 21",
          "The Sun reaches its highest or lowest noon position",
          "Begins astronomical summer or winter",
          "Caused by Earth's axial tilt toward or away from the Sun",
        ],
        pros_b: [
          "Marks a day with nearly equal daylight and darkness",
          "Occurs around March 20 and September 22",
          "The Sun crosses directly above the equator",
          "Begins astronomical spring or autumn",
          "Daylight length is roughly the same worldwide",
        ],
        verdict:
          "Solstices are the extremes — the longest and shortest days — while equinoxes are the balance points with equal day and night. Together the four mark the start of each astronomical season.",
        faq: [
          {
            q: "How many solstices and equinoxes are there each year?",
            a: "Two of each: a summer and winter solstice, and a spring and autumn equinox.",
          },
          {
            q: "What causes the solstice?",
            a: "Earth's tilted axis points most toward or away from the Sun, giving the longest or shortest day.",
          },
          {
            q: "Is day and night exactly equal at an equinox?",
            a: "Nearly, but not exactly, due to atmospheric refraction and the Sun's apparent size.",
          },
        ],
      },
      fr: {
        title: "Solstice vs Équinoxe : marquer les saisons",
        h1: "Solstice vs Équinoxe : les dates clés de l'année",
        description:
          "Un solstice marque le jour le plus long ou court ; un équinoxe l'égalité jour-nuit. Comparez ces événements astronomiques.",
        intro:
          "Quatre dates clés structurent l'année. Solstices et équinoxes marquent les tournants des saisons de la Terre.",
        pros_a: [
          "Marque le jour le plus long ou le plus court de l'année",
          "Survient vers le 21 juin et le 21 décembre",
          "Le Soleil atteint sa position de midi la plus haute ou basse",
          "Débute l'été ou l'hiver astronomique",
          "Causé par l'inclinaison de l'axe vers ou loin du Soleil",
        ],
        pros_b: [
          "Marque un jour à durée de lumière et d'obscurité quasi égale",
          "Survient vers le 20 mars et le 22 septembre",
          "Le Soleil passe directement au-dessus de l'équateur",
          "Débute le printemps ou l'automne astronomique",
          "La durée du jour est à peu près identique partout",
        ],
        verdict:
          "Les solstices sont les extrêmes — jours les plus longs et courts — tandis que les équinoxes sont les points d'équilibre à jour et nuit égaux. Les quatre marquent le début de chaque saison.",
        faq: [
          {
            q: "Combien de solstices et d'équinoxes par an ?",
            a: "Deux de chaque : un solstice d'été et d'hiver, un équinoxe de printemps et d'automne.",
          },
          {
            q: "Qu'est-ce qui cause le solstice ?",
            a: "L'axe incliné de la Terre pointe au plus vers ou loin du Soleil, donnant le jour le plus long ou court.",
          },
          {
            q: "Le jour et la nuit sont-ils exactement égaux à l'équinoxe ?",
            a: "Presque, mais pas exactement, du fait de la réfraction atmosphérique et de la taille apparente du Soleil.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "tendon-vs-ligament",
    a: "Tendon",
    b: "Ligament",
    category: "science",
    emoji_a: "💪",
    emoji_b: "🦴",
    content: {
      en: {
        title: "Tendon vs Ligament: Connective Tissue Compared",
        h1: "Tendon vs Ligament: What Connects to What",
        description:
          "Tendons connect muscle to bone; ligaments connect bone to bone. Compare these two types of connective tissue.",
        intro:
          "Tendons and ligaments are both tough connective tissues, but they link different structures and have different jobs in the body.",
        pros_a: [
          "Connects muscle to bone",
          "Transmits the pulling force of muscles to move bones",
          "Made of dense, slightly elastic collagen fibers",
          "Examples include the Achilles tendon",
          "Enables movement when a muscle contracts",
        ],
        pros_b: [
          "Connects bone to bone",
          "Stabilizes joints and limits excessive movement",
          "Made of slightly elastic collagen fibers",
          "Examples include knee ligaments like the ACL",
          "Holds the skeleton together at the joints",
        ],
        verdict:
          "Tendons turn muscle power into motion by linking muscle to bone; ligaments keep joints stable by linking bone to bone. Both are tough but heal slowly because of limited blood supply.",
        faq: [
          {
            q: "Which connects muscle to bone?",
            a: "Tendons. They transmit the force of a contracting muscle to the bone it moves.",
          },
          {
            q: "Why do tendons and ligaments heal slowly?",
            a: "They have a relatively poor blood supply, so repair takes longer than for muscle.",
          },
          {
            q: "What is the ACL?",
            a: "The anterior cruciate ligament, a key knee ligament that stabilizes the joint.",
          },
        ],
      },
      fr: {
        title: "Tendon vs Ligament : tissus conjonctifs comparés",
        h1: "Tendon vs Ligament : ce qui relie quoi",
        description:
          "Les tendons relient le muscle à l'os ; les ligaments relient os à os. Comparez ces deux types de tissu conjonctif.",
        intro:
          "Tendons et ligaments sont des tissus conjonctifs résistants, mais ils relient des structures différentes avec des rôles distincts.",
        pros_a: [
          "Relie le muscle à l'os",
          "Transmet la force de traction des muscles pour bouger les os",
          "Fait de fibres de collagène denses et un peu élastiques",
          "Exemples : le tendon d'Achille",
          "Permet le mouvement quand un muscle se contracte",
        ],
        pros_b: [
          "Relie os à os",
          "Stabilise les articulations et limite les mouvements excessifs",
          "Fait de fibres de collagène un peu élastiques",
          "Exemples : les ligaments du genou comme le LCA",
          "Maintient le squelette uni au niveau des articulations",
        ],
        verdict:
          "Les tendons transforment la force musculaire en mouvement en reliant muscle et os ; les ligaments stabilisent les articulations en reliant os à os. Tous deux résistants mais cicatrisent lentement.",
        faq: [
          {
            q: "Qu'est-ce qui relie le muscle à l'os ?",
            a: "Les tendons. Ils transmettent la force d'un muscle qui se contracte à l'os qu'il déplace.",
          },
          {
            q: "Pourquoi tendons et ligaments cicatrisent-ils lentement ?",
            a: "Ils ont un apport sanguin relativement faible, la réparation prend donc plus de temps.",
          },
          {
            q: "Qu'est-ce que le LCA ?",
            a: "Le ligament croisé antérieur, un ligament clé du genou qui stabilise l'articulation.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "weathering-vs-erosion",
    a: "Weathering",
    b: "Erosion",
    category: "science",
    emoji_a: "🪨",
    emoji_b: "🏞️",
    content: {
      en: {
        title: "Weathering vs Erosion: Shaping the Land",
        h1: "Weathering vs Erosion: Breaking Down vs Carrying Away",
        description:
          "Weathering breaks rock apart in place; erosion transports the broken material away. Compare these two geological processes.",
        intro:
          "Weathering and erosion shape Earth's surface together, but they are distinct steps — one breaks rock down, the other moves it.",
        pros_a: [
          "Breaks down rock and minerals in place",
          "Can be physical, chemical or biological",
          "Does not involve movement of the material",
          "Caused by water, ice, temperature and living things",
          "The first step in soil formation",
        ],
        pros_b: [
          "Transports broken rock and soil to new locations",
          "Carried out by wind, water, ice and gravity",
          "Always involves the movement of material",
          "Carves valleys, canyons and coastlines",
          "Deposits sediment elsewhere as it slows",
        ],
        verdict:
          "Weathering breaks rock down where it sits; erosion then carries the loose pieces away. Weathering must usually happen first to provide the material that erosion transports.",
        faq: [
          {
            q: "Does weathering involve movement?",
            a: "No. Weathering breaks rock down in place; erosion is the process that moves it.",
          },
          {
            q: "What are the types of weathering?",
            a: "Physical (breaking apart), chemical (dissolving) and biological (caused by living things).",
          },
          {
            q: "What is deposition?",
            a: "When eroding agents slow down and drop the sediment they were carrying.",
          },
        ],
      },
      fr: {
        title: "Altération vs Érosion : façonner le paysage",
        h1: "Altération vs Érosion : briser vs emporter",
        description:
          "L'altération brise la roche sur place ; l'érosion transporte les matériaux brisés. Comparez ces deux processus géologiques.",
        intro:
          "Altération et érosion façonnent ensemble la surface terrestre, mais ce sont des étapes distinctes : l'une brise la roche, l'autre la déplace.",
        pros_a: [
          "Décompose roches et minéraux sur place",
          "Peut être physique, chimique ou biologique",
          "N'implique pas de déplacement du matériau",
          "Causée par eau, glace, température et êtres vivants",
          "La première étape de la formation des sols",
        ],
        pros_b: [
          "Transporte roches brisées et sols vers de nouveaux lieux",
          "Réalisée par le vent, l'eau, la glace et la gravité",
          "Implique toujours le déplacement de matériau",
          "Creuse vallées, canyons et littoraux",
          "Dépose les sédiments ailleurs en ralentissant",
        ],
        verdict:
          "L'altération brise la roche là où elle se trouve ; l'érosion emporte ensuite les morceaux détachés. L'altération doit généralement précéder pour fournir le matériau que l'érosion transporte.",
        faq: [
          {
            q: "L'altération implique-t-elle un déplacement ?",
            a: "Non. L'altération brise la roche sur place ; l'érosion est le processus qui la déplace.",
          },
          {
            q: "Quels sont les types d'altération ?",
            a: "Physique (briser), chimique (dissoudre) et biologique (causée par les êtres vivants).",
          },
          {
            q: "Qu'est-ce que le dépôt ?",
            a: "Quand les agents d'érosion ralentissent et lâchent les sédiments qu'ils transportaient.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "convex-vs-concave-lens",
    a: "Convex lens",
    b: "Concave lens",
    category: "science",
    emoji_a: "🔍",
    emoji_b: "👓",
    content: {
      en: {
        title: "Convex vs Concave Lens: Converging vs Diverging",
        h1: "Convex vs Concave Lens: How Lenses Bend Light",
        description:
          "A convex lens converges light to a focus; a concave lens spreads it out. Compare these two basic types of lens.",
        intro:
          "Lenses bend light to form images. Whether they bring light together or spread it apart depends on their shape.",
        pros_a: [
          "Thicker in the middle than at the edges",
          "Converges parallel light rays to a focal point",
          "Can form real, projectable images",
          "Used in magnifying glasses and cameras",
          "Corrects farsightedness in eyeglasses",
        ],
        pros_b: [
          "Thinner in the middle than at the edges",
          "Diverges parallel light rays outward",
          "Always forms a smaller, virtual image",
          "Used in peepholes and some optical instruments",
          "Corrects nearsightedness in eyeglasses",
        ],
        verdict:
          "A convex lens gathers light to a focus and can magnify or project images; a concave lens spreads light and shrinks images. Eyeglasses use whichever shape corrects a given vision problem.",
        faq: [
          {
            q: "Which lens magnifies?",
            a: "A convex lens magnifies, which is why magnifying glasses use a convex shape.",
          },
          {
            q: "Which lens corrects nearsightedness?",
            a: "A concave lens, because it diverges light to move the focus point back onto the retina.",
          },
          {
            q: "Can a concave lens form a real image?",
            a: "No. A concave lens alone always produces a smaller, upright, virtual image.",
          },
        ],
      },
      fr: {
        title: "Lentille convexe vs concave : convergente vs divergente",
        h1: "Lentille convexe vs concave : comment elles courbent la lumière",
        description:
          "Une lentille convexe fait converger la lumière ; une concave la disperse. Comparez ces deux types de lentilles de base.",
        intro:
          "Les lentilles courbent la lumière pour former des images. Qu'elles rassemblent ou dispersent la lumière dépend de leur forme.",
        pros_a: [
          "Plus épaisse au centre qu'aux bords",
          "Fait converger les rayons parallèles en un foyer",
          "Peut former des images réelles, projetables",
          "Utilisée dans les loupes et les appareils photo",
          "Corrige l'hypermétropie dans les lunettes",
        ],
        pros_b: [
          "Plus mince au centre qu'aux bords",
          "Fait diverger les rayons parallèles vers l'extérieur",
          "Forme toujours une image virtuelle plus petite",
          "Utilisée dans les judas et certains instruments optiques",
          "Corrige la myopie dans les lunettes",
        ],
        verdict:
          "Une lentille convexe rassemble la lumière en un foyer et peut grossir ou projeter ; une concave disperse la lumière et rétrécit les images. Les lunettes utilisent la forme qui corrige le défaut.",
        faq: [
          {
            q: "Quelle lentille grossit ?",
            a: "Une lentille convexe grossit, d'où la forme convexe des loupes.",
          },
          {
            q: "Quelle lentille corrige la myopie ?",
            a: "Une lentille concave, car elle disperse la lumière pour ramener le foyer sur la rétine.",
          },
          {
            q: "Une lentille concave peut-elle former une image réelle ?",
            a: "Non. Une lentille concave seule produit toujours une image virtuelle plus petite et droite.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "innate-vs-adaptive-immunity",
    a: "Innate immunity",
    b: "Adaptive immunity",
    category: "science",
    emoji_a: "🛡️",
    emoji_b: "🎯",
    content: {
      en: {
        title: "Innate vs Adaptive Immunity Explained",
        h1: "Innate vs Adaptive Immunity: Two Lines of Defense",
        description:
          "Innate immunity is fast and general; adaptive immunity is slow but specific. Compare the body's two defense systems.",
        intro:
          "The immune system has two cooperating branches. One responds immediately to any threat; the other learns and targets specific invaders.",
        pros_a: [
          "Present from birth and ready immediately",
          "Responds quickly within minutes to hours",
          "Acts against any pathogen in a general way",
          "Includes skin, mucus and white blood cells like phagocytes",
          "Has no lasting memory of past infections",
        ],
        pros_b: [
          "Develops over a lifetime through exposure",
          "Responds more slowly, over days at first",
          "Targets specific pathogens precisely",
          "Involves B cells, T cells and antibodies",
          "Builds lasting memory for faster future responses",
        ],
        verdict:
          "Innate immunity is the rapid, all-purpose first responder; adaptive immunity is the slower, precise specialist that remembers. They work together, and vaccines train the adaptive branch.",
        faq: [
          {
            q: "Which immunity has memory?",
            a: "Adaptive immunity. It remembers past pathogens for a faster, stronger second response.",
          },
          {
            q: "Which responds faster?",
            a: "Innate immunity acts within minutes to hours; adaptive immunity takes days to ramp up.",
          },
          {
            q: "How do vaccines fit in?",
            a: "Vaccines train adaptive immunity to build memory against a pathogen before real exposure.",
          },
        ],
      },
      fr: {
        title: "Immunité innée vs adaptative expliquée",
        h1: "Immunité innée vs adaptative : deux lignes de défense",
        description:
          "L'immunité innée est rapide et générale ; l'adaptative lente mais spécifique. Comparez les deux systèmes de défense du corps.",
        intro:
          "Le système immunitaire a deux branches coopérantes. L'une répond immédiatement à toute menace ; l'autre apprend et cible des envahisseurs précis.",
        pros_a: [
          "Présente dès la naissance et prête immédiatement",
          "Répond vite, en quelques minutes à heures",
          "Agit contre tout pathogène de façon générale",
          "Inclut peau, mucus et globules blancs comme les phagocytes",
          "N'a aucune mémoire durable des infections passées",
        ],
        pros_b: [
          "Se développe au fil de la vie par l'exposition",
          "Répond plus lentement, sur des jours au début",
          "Cible précisément des pathogènes spécifiques",
          "Implique lymphocytes B, T et anticorps",
          "Construit une mémoire durable pour des réponses plus rapides",
        ],
        verdict:
          "L'immunité innée est le premier secours rapide et polyvalent ; l'adaptative le spécialiste lent et précis qui se souvient. Elles coopèrent, et les vaccins entraînent la branche adaptative.",
        faq: [
          {
            q: "Quelle immunité a une mémoire ?",
            a: "L'immunité adaptative. Elle se souvient des pathogènes passés pour une seconde réponse plus rapide.",
          },
          {
            q: "Laquelle répond le plus vite ?",
            a: "L'immunité innée agit en quelques minutes à heures ; l'adaptative met des jours à monter en puissance.",
          },
          {
            q: "Comment les vaccins s'intègrent-ils ?",
            a: "Les vaccins entraînent l'immunité adaptative à bâtir une mémoire avant une vraie exposition.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "gymnosperm-vs-angiosperm",
    a: "Gymnosperm",
    b: "Angiosperm",
    category: "science",
    emoji_a: "🌲",
    emoji_b: "🌸",
    content: {
      en: {
        title: "Gymnosperm vs Angiosperm: Plant Groups Compared",
        h1: "Gymnosperm vs Angiosperm: Two Seed Plant Groups",
        description:
          "Gymnosperms have naked seeds in cones; angiosperms have seeds enclosed in fruit. Compare these two seed plant groups.",
        intro:
          "Seed plants split into two major groups. The difference lies in how their seeds are protected and how they reproduce.",
        pros_a: [
          "Produces 'naked' seeds not enclosed in fruit",
          "Typically bears seeds on cones",
          "Does not produce flowers",
          "Often evergreen, like pines, firs and spruces",
          "An older group, dominant before flowering plants",
        ],
        pros_b: [
          "Produces seeds enclosed within a fruit",
          "Reproduces using flowers",
          "Fruit helps protect seeds and aid their dispersal",
          "Includes most familiar plants, from grasses to oaks",
          "The largest and most diverse group of land plants",
        ],
        verdict:
          "Gymnosperms are the ancient cone-bearers with exposed seeds; angiosperms are the flowering plants whose fruit protects their seeds. Angiosperms now dominate most land ecosystems.",
        faq: [
          {
            q: "Do gymnosperms have flowers?",
            a: "No. Gymnosperms reproduce with cones rather than flowers and have exposed seeds.",
          },
          {
            q: "What advantage does fruit give angiosperms?",
            a: "Fruit protects the seeds and helps disperse them, often via animals that eat it.",
          },
          {
            q: "Which group is older?",
            a: "Gymnosperms are the older group; angiosperms appeared later and now dominate.",
          },
        ],
      },
      fr: {
        title: "Gymnosperme vs Angiosperme : groupes de plantes",
        h1: "Gymnosperme vs Angiosperme : deux groupes de plantes à graines",
        description:
          "Les gymnospermes ont des graines nues dans des cônes ; les angiospermes des graines dans un fruit. Comparez ces groupes.",
        intro:
          "Les plantes à graines se divisent en deux grands groupes. La différence tient à la protection des graines et au mode de reproduction.",
        pros_a: [
          "Produit des graines « nues » non enfermées dans un fruit",
          "Porte typiquement les graines sur des cônes",
          "Ne produit pas de fleurs",
          "Souvent persistant, comme les pins, sapins et épicéas",
          "Un groupe plus ancien, dominant avant les plantes à fleurs",
        ],
        pros_b: [
          "Produit des graines enfermées dans un fruit",
          "Se reproduit à l'aide de fleurs",
          "Le fruit protège les graines et aide à leur dispersion",
          "Inclut la plupart des plantes familières, des herbes aux chênes",
          "Le groupe le plus vaste et diversifié des plantes terrestres",
        ],
        verdict:
          "Les gymnospermes sont les anciens porteurs de cônes aux graines exposées ; les angiospermes les plantes à fleurs dont le fruit protège les graines. Les angiospermes dominent désormais.",
        faq: [
          {
            q: "Les gymnospermes ont-ils des fleurs ?",
            a: "Non. Les gymnospermes se reproduisent avec des cônes plutôt que des fleurs et ont des graines exposées.",
          },
          {
            q: "Quel avantage le fruit donne-t-il aux angiospermes ?",
            a: "Le fruit protège les graines et aide à les disperser, souvent via les animaux qui le mangent.",
          },
          {
            q: "Quel groupe est le plus ancien ?",
            a: "Les gymnospermes sont le groupe le plus ancien ; les angiospermes sont apparus plus tard et dominent.",
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
    category: "science",
    emoji_a: "🎯",
    emoji_b: "📍",
    content: {
      en: {
        title: "Accuracy vs Precision: Measurement Quality",
        h1: "Accuracy vs Precision: Two Measures of Good Data",
        description:
          "Accuracy is closeness to the true value; precision is consistency between measurements. Compare these two science terms.",
        intro:
          "In science, accuracy and precision are not the same. A measurement can be one without the other, and good data needs both.",
        pros_a: [
          "How close a measurement is to the true value",
          "Describes correctness, not consistency",
          "Improved by calibrating instruments correctly",
          "An accurate result hits the real target value",
          "Can be present even if results are scattered",
        ],
        pros_b: [
          "How close repeated measurements are to each other",
          "Describes consistency, not correctness",
          "Improved by careful, repeatable technique",
          "A precise set of results is tightly clustered",
          "Can be present even if all results are wrong",
        ],
        verdict:
          "Accuracy is about hitting the true value; precision is about repeatability. Picture a dartboard: precise darts cluster tightly, accurate darts land near the bullseye. Good measurements need both.",
        faq: [
          {
            q: "Can a measurement be precise but not accurate?",
            a: "Yes. Repeated readings can agree closely yet all be far from the true value.",
          },
          {
            q: "Which describes closeness to the true value?",
            a: "Accuracy. Precision instead describes how consistent repeated measurements are.",
          },
          {
            q: "How do you improve accuracy?",
            a: "By calibrating instruments and removing systematic errors that bias every reading.",
          },
        ],
      },
      fr: {
        title: "Exactitude vs Précision : qualité des mesures",
        h1: "Exactitude vs Précision : deux mesures de bonnes données",
        description:
          "L'exactitude est la proximité de la vraie valeur ; la précision la cohérence entre mesures. Comparez ces deux termes scientifiques.",
        intro:
          "En science, exactitude et précision diffèrent. Une mesure peut avoir l'une sans l'autre, et de bonnes données nécessitent les deux.",
        pros_a: [
          "À quel point une mesure est proche de la vraie valeur",
          "Décrit la justesse, non la cohérence",
          "Améliorée en calibrant correctement les instruments",
          "Un résultat exact atteint la vraie valeur cible",
          "Peut être présente même si les résultats sont dispersés",
        ],
        pros_b: [
          "À quel point des mesures répétées sont proches entre elles",
          "Décrit la cohérence, non la justesse",
          "Améliorée par une technique soignée et reproductible",
          "Un ensemble précis de résultats est bien regroupé",
          "Peut être présente même si tous les résultats sont faux",
        ],
        verdict:
          "L'exactitude consiste à atteindre la vraie valeur ; la précision la répétabilité. Imaginez une cible : des fléchettes précises se regroupent, des exactes touchent le centre. De bonnes mesures requièrent les deux.",
        faq: [
          {
            q: "Une mesure peut-elle être précise sans être exacte ?",
            a: "Oui. Des lectures répétées peuvent concorder étroitement tout en étant loin de la vraie valeur.",
          },
          {
            q: "Laquelle décrit la proximité de la vraie valeur ?",
            a: "L'exactitude. La précision décrit plutôt la cohérence des mesures répétées.",
          },
          {
            q: "Comment améliorer l'exactitude ?",
            a: "En calibrant les instruments et en éliminant les erreurs systématiques qui biaisent chaque lecture.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "mass-vs-density",
    a: "Mass",
    b: "Density",
    category: "science",
    emoji_a: "⚖️",
    emoji_b: "🧱",
    content: {
      en: {
        title: "Mass vs Density: Amount vs Compactness",
        h1: "Mass vs Density: How Much vs How Packed",
        description:
          "Mass is the amount of matter; density is mass per unit volume. Compare these two related physical properties.",
        intro:
          "Mass and density both involve matter, but density adds a crucial idea — how that matter is packed into space.",
        pros_a: [
          "The total amount of matter in an object",
          "Measured in kilograms (kg)",
          "Does not depend on the object's volume",
          "Stays the same regardless of shape or location",
          "A larger object can have more mass with the same material",
        ],
        pros_b: [
          "Mass divided by volume",
          "Measured in kilograms per cubic meter",
          "Describes how tightly matter is packed",
          "Determines whether an object floats or sinks",
          "A property of the material, not the object's size",
        ],
        verdict:
          "Mass tells you how much matter is present; density tells you how compact it is. A kilogram of lead and a kilogram of feathers have equal mass but very different densities and volumes.",
        faq: [
          {
            q: "Why does a steel ship float?",
            a: "Its overall density, including the air-filled hull, is less than that of water.",
          },
          {
            q: "Does density depend on object size?",
            a: "No. Density is a property of the material; a small and large piece of gold have the same density.",
          },
          {
            q: "How is density calculated?",
            a: "Divide an object's mass by its volume.",
          },
        ],
      },
      fr: {
        title: "Masse vs Densité : quantité vs compacité",
        h1: "Masse vs Densité : combien vs à quel point tassé",
        description:
          "La masse est la quantité de matière ; la densité la masse par unité de volume. Comparez ces deux propriétés physiques.",
        intro:
          "Masse et densité concernent toutes deux la matière, mais la densité ajoute une idée cruciale : comment cette matière est tassée dans l'espace.",
        pros_a: [
          "La quantité totale de matière dans un objet",
          "Se mesure en kilogrammes (kg)",
          "Ne dépend pas du volume de l'objet",
          "Reste identique quels que soient la forme ou le lieu",
          "Un objet plus grand peut avoir plus de masse à matériau égal",
        ],
        pros_b: [
          "La masse divisée par le volume",
          "Se mesure en kilogrammes par mètre cube",
          "Décrit à quel point la matière est tassée",
          "Détermine si un objet flotte ou coule",
          "Une propriété du matériau, non de la taille de l'objet",
        ],
        verdict:
          "La masse dit combien de matière est présente ; la densité à quel point elle est compacte. Un kilo de plomb et un kilo de plumes ont la même masse mais des densités et volumes très différents.",
        faq: [
          {
            q: "Pourquoi un navire en acier flotte-t-il ?",
            a: "Sa densité globale, coque remplie d'air comprise, est inférieure à celle de l'eau.",
          },
          {
            q: "La densité dépend-elle de la taille de l'objet ?",
            a: "Non. La densité est une propriété du matériau ; un petit et un grand morceau d'or ont la même densité.",
          },
          {
            q: "Comment calcule-t-on la densité ?",
            a: "On divise la masse d'un objet par son volume.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "qualitative-vs-quantitative-data",
    a: "Qualitative data",
    b: "Quantitative data",
    category: "science",
    emoji_a: "📝",
    emoji_b: "🔢",
    content: {
      en: {
        title: "Qualitative vs Quantitative Data Compared",
        h1: "Qualitative vs Quantitative Data: Words vs Numbers",
        description:
          "Qualitative data describes qualities in words; quantitative data measures amounts in numbers. Compare these two data types.",
        intro:
          "Research collects two basic kinds of data. One captures descriptions and categories; the other captures measurable numbers.",
        pros_a: [
          "Describes qualities, characteristics and categories",
          "Recorded as words, labels or observations",
          "Answers questions about why and how",
          "Examples: colors, opinions and textures",
          "Analyzed by finding themes and patterns",
        ],
        pros_b: [
          "Measures quantities and numerical values",
          "Recorded as numbers that can be counted or measured",
          "Answers questions about how much or how many",
          "Examples: height, temperature and test scores",
          "Analyzed using statistics and calculations",
        ],
        verdict:
          "Qualitative data captures rich descriptions and reasons; quantitative data captures precise measurements. Strong research often combines both — numbers for scale, words for meaning.",
        faq: [
          {
            q: "Is eye color qualitative or quantitative?",
            a: "Qualitative. It is a descriptive category rather than a measured number.",
          },
          {
            q: "Which data type uses statistics?",
            a: "Quantitative data, because it consists of numbers that can be analyzed mathematically.",
          },
          {
            q: "Can a study use both?",
            a: "Yes. Mixed-methods research combines qualitative depth with quantitative measurement.",
          },
        ],
      },
      fr: {
        title: "Données qualitatives vs quantitatives comparées",
        h1: "Données qualitatives vs quantitatives : mots vs nombres",
        description:
          "Les données qualitatives décrivent des qualités en mots ; les quantitatives mesurent des quantités en nombres.",
        intro:
          "La recherche collecte deux types de données de base. L'un saisit descriptions et catégories ; l'autre des nombres mesurables.",
        pros_a: [
          "Décrit qualités, caractéristiques et catégories",
          "Enregistrées en mots, étiquettes ou observations",
          "Répond aux questions du pourquoi et du comment",
          "Exemples : couleurs, opinions et textures",
          "Analysées en repérant thèmes et motifs",
        ],
        pros_b: [
          "Mesure des quantités et des valeurs numériques",
          "Enregistrées en nombres comptables ou mesurables",
          "Répond aux questions du combien",
          "Exemples : taille, température et notes d'examen",
          "Analysées par statistiques et calculs",
        ],
        verdict:
          "Les données qualitatives saisissent des descriptions riches et des raisons ; les quantitatives des mesures précises. Une bonne recherche combine souvent les deux — nombres pour l'échelle, mots pour le sens.",
        faq: [
          {
            q: "La couleur des yeux est-elle qualitative ou quantitative ?",
            a: "Qualitative. C'est une catégorie descriptive plutôt qu'un nombre mesuré.",
          },
          {
            q: "Quel type de données utilise les statistiques ?",
            a: "Les données quantitatives, car elles consistent en nombres analysables mathématiquement.",
          },
          {
            q: "Une étude peut-elle utiliser les deux ?",
            a: "Oui. La recherche à méthodes mixtes combine la profondeur qualitative et la mesure quantitative.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "independent-vs-dependent-variable",
    a: "Independent variable",
    b: "Dependent variable",
    category: "science",
    emoji_a: "🎛️",
    emoji_b: "📊",
    content: {
      en: {
        title: "Independent vs Dependent Variable Explained",
        h1: "Independent vs Dependent Variable in Experiments",
        description:
          "The independent variable is what you change; the dependent variable is what you measure. Compare these two experiment terms.",
        intro:
          "Every controlled experiment has two key variables. Knowing which is which is essential to designing and reading a study.",
        pros_a: [
          "The variable the researcher deliberately changes",
          "The presumed cause being tested",
          "Set or chosen before the experiment runs",
          "Plotted on the horizontal axis of a graph",
          "There is usually only one in a controlled experiment",
        ],
        pros_b: [
          "The variable the researcher measures as a result",
          "The presumed effect or outcome",
          "Changes in response to the independent variable",
          "Plotted on the vertical axis of a graph",
          "Its value depends on the independent variable",
        ],
        verdict:
          "The independent variable is the cause you control; the dependent variable is the effect you observe. Holding everything else constant lets you see how one truly affects the other.",
        faq: [
          {
            q: "Which variable goes on the x-axis?",
            a: "The independent variable is plotted on the horizontal x-axis; the dependent variable on the y-axis.",
          },
          {
            q: "What is a controlled variable?",
            a: "A factor kept constant so it does not affect the outcome and confuse the results.",
          },
          {
            q: "How many independent variables should an experiment have?",
            a: "Usually just one, so any change in the result can be attributed to that single cause.",
          },
        ],
      },
      fr: {
        title: "Variable indépendante vs dépendante expliquée",
        h1: "Variable indépendante vs dépendante dans les expériences",
        description:
          "La variable indépendante est ce qu'on change ; la dépendante ce qu'on mesure. Comparez ces deux termes d'expérimentation.",
        intro:
          "Toute expérience contrôlée a deux variables clés. Savoir laquelle est laquelle est essentiel pour concevoir et lire une étude.",
        pros_a: [
          "La variable que le chercheur change délibérément",
          "La cause présumée que l'on teste",
          "Fixée ou choisie avant le déroulement de l'expérience",
          "Tracée sur l'axe horizontal d'un graphique",
          "Il n'y en a généralement qu'une dans une expérience contrôlée",
        ],
        pros_b: [
          "La variable que le chercheur mesure en résultat",
          "L'effet ou le résultat présumé",
          "Change en réponse à la variable indépendante",
          "Tracée sur l'axe vertical d'un graphique",
          "Sa valeur dépend de la variable indépendante",
        ],
        verdict:
          "La variable indépendante est la cause contrôlée ; la dépendante l'effet observé. Maintenir tout le reste constant permet de voir comment l'une influence vraiment l'autre.",
        faq: [
          {
            q: "Quelle variable va sur l'axe des x ?",
            a: "La variable indépendante est tracée sur l'axe horizontal x ; la dépendante sur l'axe y.",
          },
          {
            q: "Qu'est-ce qu'une variable contrôlée ?",
            a: "Un facteur maintenu constant pour qu'il n'affecte pas le résultat et ne fausse pas les conclusions.",
          },
          {
            q: "Combien de variables indépendantes une expérience devrait-elle avoir ?",
            a: "Généralement une seule, pour qu'un changement de résultat puisse être attribué à cette unique cause.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "hypothesis-vs-theory",
    a: "Hypothesis",
    b: "Theory",
    category: "science",
    emoji_a: "❓",
    emoji_b: "📚",
    content: {
      en: {
        title: "Hypothesis vs Theory: Scientific Terms Explained",
        h1: "Hypothesis vs Theory: From Idea to Established Science",
        description:
          "A hypothesis is a testable prediction; a theory is a well-supported explanation. Compare these two key science terms.",
        intro:
          "In everyday speech 'theory' means a guess, but in science it means the opposite — a robust, tested explanation. The hypothesis is the guess.",
        pros_a: [
          "A specific, testable prediction or proposed explanation",
          "An early step in the scientific method",
          "Made before experiments are carried out",
          "Can be supported or rejected by evidence",
          "Often phrased as an 'if-then' statement",
        ],
        pros_b: [
          "A broad explanation supported by extensive evidence",
          "Built from many confirmed hypotheses and experiments",
          "Has survived repeated rigorous testing",
          "Explains a wide range of related observations",
          "Examples include evolution and plate tectonics",
        ],
        verdict:
          "A hypothesis is a starting guess to be tested; a theory is a powerful explanation backed by mountains of evidence. A theory is not 'just a guess' — it is among the strongest ideas in science.",
        faq: [
          {
            q: "Does a hypothesis become a theory?",
            a: "Not directly. A theory grows from many tested hypotheses and broad confirmed evidence over time.",
          },
          {
            q: "Is a scientific theory just a guess?",
            a: "No. In science a theory is a well-tested, evidence-backed explanation, far stronger than a guess.",
          },
          {
            q: "Can a theory be wrong?",
            a: "Theories can be refined or replaced if strong new evidence contradicts them, but established ones rarely fail.",
          },
        ],
      },
      fr: {
        title: "Hypothèse vs Théorie : termes scientifiques expliqués",
        h1: "Hypothèse vs Théorie : de l'idée à la science établie",
        description:
          "Une hypothèse est une prédiction testable ; une théorie une explication bien étayée. Comparez ces deux termes scientifiques.",
        intro:
          "Dans le langage courant, « théorie » signifie supposition, mais en science c'est l'inverse — une explication robuste et testée. L'hypothèse est la supposition.",
        pros_a: [
          "Une prédiction ou explication proposée, spécifique et testable",
          "Une étape précoce de la méthode scientifique",
          "Formulée avant la réalisation des expériences",
          "Peut être soutenue ou rejetée par les preuves",
          "Souvent énoncée comme une affirmation « si-alors »",
        ],
        pros_b: [
          "Une explication large soutenue par de nombreuses preuves",
          "Bâtie de nombreuses hypothèses et expériences confirmées",
          "A survécu à des tests rigoureux répétés",
          "Explique un large éventail d'observations liées",
          "Exemples : l'évolution et la tectonique des plaques",
        ],
        verdict:
          "Une hypothèse est une supposition de départ à tester ; une théorie une explication puissante étayée par des montagnes de preuves. Une théorie n'est pas « qu'une supposition ».",
        faq: [
          {
            q: "Une hypothèse devient-elle une théorie ?",
            a: "Pas directement. Une théorie naît de nombreuses hypothèses testées et de preuves larges confirmées dans le temps.",
          },
          {
            q: "Une théorie scientifique n'est-elle qu'une supposition ?",
            a: "Non. En science, une théorie est une explication bien testée et étayée, bien plus solide qu'une supposition.",
          },
          {
            q: "Une théorie peut-elle être fausse ?",
            a: "Les théories peuvent être affinées ou remplacées si de fortes preuves nouvelles les contredisent.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "elastic-vs-inelastic-collision",
    a: "Elastic collision",
    b: "Inelastic collision",
    category: "science",
    emoji_a: "🎱",
    emoji_b: "💥",
    content: {
      en: {
        title: "Elastic vs Inelastic Collision Explained",
        h1: "Elastic vs Inelastic Collision: Energy in Impacts",
        description:
          "An elastic collision conserves kinetic energy; an inelastic one does not. Compare these two types of collision.",
        intro:
          "When objects collide, momentum is always conserved, but kinetic energy may or may not be. That distinction defines the two collision types.",
        pros_a: [
          "Total kinetic energy is conserved",
          "Total momentum is also conserved",
          "Objects bounce apart without sticking",
          "An idealized case, closely seen in gas particles",
          "No energy is lost to heat, sound or deformation",
        ],
        pros_b: [
          "Kinetic energy is not conserved",
          "Total momentum is still conserved",
          "Objects may deform or stick together",
          "Energy is lost to heat, sound and deformation",
          "A perfectly inelastic collision leaves objects joined",
        ],
        verdict:
          "Momentum is conserved in every collision, but only elastic collisions also conserve kinetic energy. Most real-world collisions are inelastic, losing energy to heat, sound and deformation.",
        faq: [
          {
            q: "Is momentum conserved in inelastic collisions?",
            a: "Yes. Momentum is conserved in all collisions; only kinetic energy may be lost.",
          },
          {
            q: "Are real collisions elastic or inelastic?",
            a: "Most everyday collisions are inelastic, because some energy always converts to heat or sound.",
          },
          {
            q: "What is a perfectly inelastic collision?",
            a: "One where the colliding objects stick together and move as a single combined mass afterward.",
          },
        ],
      },
      fr: {
        title: "Collision élastique vs inélastique expliquée",
        h1: "Collision élastique vs inélastique : l'énergie des impacts",
        description:
          "Une collision élastique conserve l'énergie cinétique ; une inélastique non. Comparez ces deux types de collision.",
        intro:
          "Lors d'un choc, la quantité de mouvement est toujours conservée, mais l'énergie cinétique peut l'être ou non. Cela définit les deux types.",
        pros_a: [
          "L'énergie cinétique totale est conservée",
          "La quantité de mouvement totale est aussi conservée",
          "Les objets rebondissent sans se coller",
          "Un cas idéalisé, observé chez les particules de gaz",
          "Aucune énergie perdue en chaleur, son ou déformation",
        ],
        pros_b: [
          "L'énergie cinétique n'est pas conservée",
          "La quantité de mouvement totale reste conservée",
          "Les objets peuvent se déformer ou se coller",
          "De l'énergie est perdue en chaleur, son et déformation",
          "Une collision parfaitement inélastique laisse les objets joints",
        ],
        verdict:
          "La quantité de mouvement est conservée dans tout choc, mais seules les collisions élastiques conservent aussi l'énergie cinétique. La plupart des chocs réels sont inélastiques.",
        faq: [
          {
            q: "La quantité de mouvement est-elle conservée dans les chocs inélastiques ?",
            a: "Oui. La quantité de mouvement se conserve dans tous les chocs ; seule l'énergie cinétique peut se perdre.",
          },
          {
            q: "Les chocs réels sont-ils élastiques ou inélastiques ?",
            a: "La plupart des chocs du quotidien sont inélastiques, car une partie de l'énergie se convertit en chaleur ou son.",
          },
          {
            q: "Qu'est-ce qu'une collision parfaitement inélastique ?",
            a: "Une où les objets en collision se collent et se déplacent ensuite comme une seule masse combinée.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "static-vs-kinetic-friction",
    a: "Static friction",
    b: "Kinetic friction",
    category: "science",
    emoji_a: "🛑",
    emoji_b: "🛷",
    content: {
      en: {
        title: "Static vs Kinetic Friction Explained",
        h1: "Static vs Kinetic Friction: Still vs Sliding",
        description:
          "Static friction acts on a still object; kinetic friction acts on a sliding one. Compare these two types of friction.",
        intro:
          "Friction resists motion between surfaces, but it behaves differently depending on whether an object is already moving.",
        pros_a: [
          "Acts on an object that is not yet moving",
          "Prevents an object from starting to slide",
          "Adjusts up to a maximum to match the applied force",
          "Is generally stronger than kinetic friction",
          "Must be overcome before motion can begin",
        ],
        pros_b: [
          "Acts on an object that is already sliding",
          "Opposes the motion of a moving object",
          "Has a roughly constant value while sliding",
          "Is generally weaker than static friction",
          "Converts kinetic energy into heat",
        ],
        verdict:
          "Static friction must be overcome to get something moving, and it is the stronger type. Once sliding starts, the weaker kinetic friction takes over — which is why a stuck object suddenly lurches free.",
        faq: [
          {
            q: "Why is it harder to start sliding an object than to keep it sliding?",
            a: "Static friction is stronger than kinetic friction, so more force is needed to begin motion.",
          },
          {
            q: "Does kinetic friction depend on speed?",
            a: "For most everyday cases it is treated as roughly constant regardless of sliding speed.",
          },
          {
            q: "What happens to the energy lost to friction?",
            a: "It is converted mainly into heat, warming the surfaces in contact.",
          },
        ],
      },
      fr: {
        title: "Frottement statique vs cinétique expliqué",
        h1: "Frottement statique vs cinétique : immobile vs glissant",
        description:
          "Le frottement statique agit sur un objet immobile ; le cinétique sur un objet qui glisse. Comparez ces deux types de frottement.",
        intro:
          "Le frottement résiste au mouvement entre surfaces, mais se comporte différemment selon qu'un objet bouge déjà ou non.",
        pros_a: [
          "Agit sur un objet qui ne bouge pas encore",
          "Empêche un objet de commencer à glisser",
          "S'ajuste jusqu'à un maximum pour égaler la force appliquée",
          "Est généralement plus fort que le frottement cinétique",
          "Doit être vaincu avant que le mouvement puisse débuter",
        ],
        pros_b: [
          "Agit sur un objet qui glisse déjà",
          "S'oppose au mouvement d'un objet en déplacement",
          "A une valeur à peu près constante pendant le glissement",
          "Est généralement plus faible que le frottement statique",
          "Convertit l'énergie cinétique en chaleur",
        ],
        verdict:
          "Le frottement statique doit être vaincu pour mettre quelque chose en mouvement, et c'est le type le plus fort. Une fois le glissement amorcé, le frottement cinétique plus faible prend le relais.",
        faq: [
          {
            q: "Pourquoi est-il plus dur d'amorcer un glissement que de le maintenir ?",
            a: "Le frottement statique est plus fort que le cinétique, il faut donc plus de force pour amorcer le mouvement.",
          },
          {
            q: "Le frottement cinétique dépend-il de la vitesse ?",
            a: "Dans la plupart des cas courants, on le traite comme à peu près constant quelle que soit la vitesse.",
          },
          {
            q: "Que devient l'énergie perdue par le frottement ?",
            a: "Elle est convertie principalement en chaleur, réchauffant les surfaces en contact.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "stalactite-vs-stalagmite",
    a: "Stalactite",
    b: "Stalagmite",
    category: "science",
    emoji_a: "🔻",
    emoji_b: "🔺",
    content: {
      en: {
        title: "Stalactite vs Stalagmite: Cave Formations",
        h1: "Stalactite vs Stalagmite: Hanging vs Rising",
        description:
          "Stalactites hang from cave ceilings; stalagmites rise from cave floors. Compare these two mineral cave formations.",
        intro:
          "Caves grow remarkable mineral formations over thousands of years. Stalactites and stalagmites form from the same dripping water, just at different ends.",
        pros_a: [
          "Hangs downward from a cave ceiling",
          "Forms as mineral-rich water drips and leaves deposits",
          "Grows slowly, often a fraction of a millimeter a year",
          "Usually tapered, like an icicle of rock",
          "The hollow soda-straw type is its earliest stage",
        ],
        pros_b: [
          "Rises upward from a cave floor",
          "Forms where dripping water lands and deposits minerals",
          "Grows slowly, building up over millennia",
          "Usually thicker and more rounded at the top",
          "Often sits directly below a matching stalactite",
        ],
        verdict:
          "Stalactites hang from the ceiling while stalagmites build up from the floor. Given enough time the two can meet and merge into a single column of rock.",
        faq: [
          {
            q: "How can I remember which is which?",
            a: "Stalactite has a 'c' for ceiling; stalagmite has a 'g' for ground.",
          },
          {
            q: "How fast do they grow?",
            a: "Very slowly, often less than a millimeter per year, so large formations are thousands of years old.",
          },
          {
            q: "What happens if they meet?",
            a: "A stalactite and stalagmite can join into a continuous column of mineral rock.",
          },
        ],
      },
      fr: {
        title: "Stalactite vs Stalagmite : formations de grottes",
        h1: "Stalactite vs Stalagmite : suspendue vs montante",
        description:
          "Les stalactites pendent du plafond des grottes ; les stalagmites montent du sol. Comparez ces deux formations minérales.",
        intro:
          "Les grottes développent de remarquables formations minérales sur des millénaires. Stalactites et stalagmites naissent de la même eau, à deux extrémités.",
        pros_a: [
          "Pend vers le bas depuis le plafond d'une grotte",
          "Se forme quand l'eau riche en minéraux goutte et dépose",
          "Croît lentement, souvent une fraction de millimètre par an",
          "Généralement effilée, comme un glaçon de roche",
          "Le type creux en « paille » est son stade le plus précoce",
        ],
        pros_b: [
          "Monte vers le haut depuis le sol d'une grotte",
          "Se forme là où l'eau qui goutte atterrit et dépose des minéraux",
          "Croît lentement, s'accumulant sur des millénaires",
          "Généralement plus épaisse et arrondie au sommet",
          "Se trouve souvent directement sous une stalactite assortie",
        ],
        verdict:
          "Les stalactites pendent du plafond tandis que les stalagmites s'élèvent du sol. Avec assez de temps, les deux peuvent se rejoindre et fusionner en une colonne de roche.",
        faq: [
          {
            q: "Comment retenir laquelle est laquelle ?",
            a: "Stalactite a un « t » comme toit ; stalagmite un « g » comme sol au sens du ground anglais.",
          },
          {
            q: "À quelle vitesse croissent-elles ?",
            a: "Très lentement, souvent moins d'un millimètre par an ; les grandes formations ont des milliers d'années.",
          },
          {
            q: "Que se passe-t-il si elles se rencontrent ?",
            a: "Une stalactite et une stalagmite peuvent se joindre en une colonne continue de roche minérale.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "gravity-vs-buoyancy",
    a: "Gravity",
    b: "Buoyancy",
    category: "science",
    emoji_a: "🌍",
    emoji_b: "🛟",
    content: {
      en: {
        title: "Gravity vs Buoyancy: Down vs Up Forces",
        h1: "Gravity vs Buoyancy: The Forces That Float Things",
        description:
          "Gravity pulls objects down; buoyancy pushes them up in a fluid. Compare these two opposing forces.",
        intro:
          "Whether an object floats or sinks is a tug-of-war between two forces. Gravity drags it down; buoyancy lifts it up.",
        pros_a: [
          "A force that pulls objects toward Earth's center",
          "Acts on all objects with mass, everywhere",
          "Points downward, toward the planet",
          "Proportional to an object's mass",
          "Causes objects to fall and gives them weight",
        ],
        pros_b: [
          "An upward force exerted by a surrounding fluid",
          "Acts only on objects in a liquid or gas",
          "Equals the weight of the fluid the object displaces",
          "Points upward, opposing gravity",
          "Determines whether an object floats or sinks",
        ],
        verdict:
          "Gravity always pulls down; buoyancy pushes up whenever an object sits in a fluid. If buoyancy is greater, the object floats; if gravity wins, it sinks. Archimedes' principle links the two.",
        faq: [
          {
            q: "What is Archimedes' principle?",
            a: "It states that buoyant force equals the weight of the fluid an object displaces.",
          },
          {
            q: "Why do some objects float?",
            a: "They float when the upward buoyant force is at least as large as the downward force of gravity.",
          },
          {
            q: "Does buoyancy act in air?",
            a: "Yes. Air is a fluid, which is why helium balloons rise as buoyancy overcomes gravity.",
          },
        ],
      },
      fr: {
        title: "Gravité vs Poussée d'Archimède : forces opposées",
        h1: "Gravité vs Flottabilité : les forces qui font flotter",
        description:
          "La gravité tire les objets vers le bas ; la poussée d'Archimède les pousse vers le haut dans un fluide. Comparez ces forces.",
        intro:
          "Qu'un objet flotte ou coule résulte d'une lutte entre deux forces. La gravité le tire vers le bas, la poussée d'Archimède le soulève.",
        pros_a: [
          "Une force qui attire les objets vers le centre de la Terre",
          "Agit sur tout objet doté de masse, partout",
          "Pointe vers le bas, vers la planète",
          "Proportionnelle à la masse d'un objet",
          "Fait tomber les objets et leur donne un poids",
        ],
        pros_b: [
          "Une force vers le haut exercée par un fluide environnant",
          "N'agit que sur les objets dans un liquide ou un gaz",
          "Égale au poids du fluide déplacé par l'objet",
          "Pointe vers le haut, s'opposant à la gravité",
          "Détermine si un objet flotte ou coule",
        ],
        verdict:
          "La gravité tire toujours vers le bas ; la poussée d'Archimède pousse vers le haut dès qu'un objet est dans un fluide. Si la poussée l'emporte, l'objet flotte ; sinon il coule.",
        faq: [
          {
            q: "Qu'est-ce que le principe d'Archimède ?",
            a: "Il énonce que la poussée égale le poids du fluide déplacé par un objet.",
          },
          {
            q: "Pourquoi certains objets flottent-ils ?",
            a: "Ils flottent quand la poussée vers le haut est au moins aussi grande que la gravité vers le bas.",
          },
          {
            q: "La poussée d'Archimède agit-elle dans l'air ?",
            a: "Oui. L'air est un fluide, d'où la montée des ballons d'hélium quand la poussée surpasse la gravité.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "frequency-vs-amplitude",
    a: "Frequency",
    b: "Amplitude",
    category: "science",
    emoji_a: "📶",
    emoji_b: "📏",
    content: {
      en: {
        title: "Frequency vs Amplitude: Describing Waves",
        h1: "Frequency vs Amplitude: Two Wave Properties",
        description:
          "Frequency is how often a wave repeats; amplitude is how big its vibration is. Compare these two wave properties.",
        intro:
          "Every wave can be described by several properties. Frequency and amplitude are two of the most important, and they control very different things.",
        pros_a: [
          "How many wave cycles pass a point each second",
          "Measured in hertz (Hz)",
          "Determines the pitch of a sound or color of light",
          "Higher frequency means a shorter wavelength",
          "Does not change as a wave loses energy",
        ],
        pros_b: [
          "The maximum displacement of a wave from its rest position",
          "Measured as a height or distance",
          "Determines the loudness of sound or brightness of light",
          "Larger amplitude means the wave carries more energy",
          "Decreases as a wave spreads out or loses energy",
        ],
        verdict:
          "Frequency sets the pitch or color of a wave; amplitude sets its loudness or brightness. They are independent — a sound can be high-pitched and quiet, or low-pitched and loud.",
        faq: [
          {
            q: "Which property controls a sound's loudness?",
            a: "Amplitude. A larger amplitude carries more energy and produces a louder sound.",
          },
          {
            q: "What does frequency determine for light?",
            a: "It determines color: higher-frequency light appears bluer, lower-frequency light appears redder.",
          },
          {
            q: "Are frequency and amplitude related?",
            a: "No. They are independent properties; one can change without affecting the other.",
          },
        ],
      },
      fr: {
        title: "Fréquence vs Amplitude : décrire les ondes",
        h1: "Fréquence vs Amplitude : deux propriétés des ondes",
        description:
          "La fréquence est la répétition d'une onde ; l'amplitude la taille de sa vibration. Comparez ces deux propriétés des ondes.",
        intro:
          "Toute onde se décrit par plusieurs propriétés. Fréquence et amplitude sont parmi les plus importantes et contrôlent des choses très différentes.",
        pros_a: [
          "Combien de cycles d'onde passent un point chaque seconde",
          "Se mesure en hertz (Hz)",
          "Détermine la hauteur d'un son ou la couleur d'une lumière",
          "Une fréquence plus haute signifie une longueur d'onde plus courte",
          "Ne change pas quand une onde perd de l'énergie",
        ],
        pros_b: [
          "Le déplacement maximal d'une onde par rapport à son repos",
          "Se mesure comme une hauteur ou une distance",
          "Détermine l'intensité d'un son ou la luminosité d'une lumière",
          "Une amplitude plus grande signifie plus d'énergie transportée",
          "Diminue quand une onde se disperse ou perd de l'énergie",
        ],
        verdict:
          "La fréquence fixe la hauteur ou la couleur d'une onde ; l'amplitude son intensité ou sa luminosité. Elles sont indépendantes — un son peut être aigu et faible, ou grave et fort.",
        faq: [
          {
            q: "Quelle propriété contrôle l'intensité d'un son ?",
            a: "L'amplitude. Une amplitude plus grande transporte plus d'énergie et produit un son plus fort.",
          },
          {
            q: "Que détermine la fréquence pour la lumière ?",
            a: "Elle détermine la couleur : une lumière de fréquence plus haute paraît plus bleue, plus basse plus rouge.",
          },
          {
            q: "Fréquence et amplitude sont-elles liées ?",
            a: "Non. Ce sont des propriétés indépendantes ; l'une peut changer sans affecter l'autre.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "alpha-vs-beta-decay",
    a: "Alpha decay",
    b: "Beta decay",
    category: "science",
    emoji_a: "☢️",
    emoji_b: "⚡",
    content: {
      en: {
        title: "Alpha vs Beta Decay: Radioactive Decay Types",
        h1: "Alpha vs Beta Decay: Two Ways Nuclei Break Down",
        description:
          "Alpha decay emits a heavy helium nucleus; beta decay emits a fast electron. Compare these two radioactive decay modes.",
        intro:
          "Unstable atomic nuclei shed energy through radioactive decay. Alpha and beta decay are two of the main ways they do it.",
        pros_a: [
          "Emits an alpha particle, a helium nucleus",
          "The atomic number drops by two",
          "Produces a relatively large, slow, heavy particle",
          "Stopped easily, even by a sheet of paper",
          "Common in very heavy elements like uranium",
        ],
        pros_b: [
          "Emits a beta particle, a fast-moving electron",
          "The atomic number changes by one",
          "Produces a small, light, fast particle",
          "More penetrating, needing aluminum to stop it",
          "Occurs when a neutron converts into a proton",
        ],
        verdict:
          "Alpha decay throws out a heavy helium nucleus and is weakly penetrating; beta decay ejects a fast electron and penetrates further. Both move an unstable nucleus toward stability.",
        faq: [
          {
            q: "Which radiation is more penetrating?",
            a: "Beta particles penetrate further than alpha particles, though both are stopped by modest shielding.",
          },
          {
            q: "What is an alpha particle made of?",
            a: "Two protons and two neutrons — essentially a helium nucleus.",
          },
          {
            q: "What happens to the atomic number in beta decay?",
            a: "It increases by one as a neutron converts into a proton.",
          },
        ],
      },
      fr: {
        title: "Désintégration alpha vs bêta : types radioactifs",
        h1: "Désintégration alpha vs bêta : deux modes de décomposition",
        description:
          "La désintégration alpha émet un noyau d'hélium lourd ; la bêta un électron rapide. Comparez ces deux modes radioactifs.",
        intro:
          "Les noyaux atomiques instables perdent de l'énergie par désintégration radioactive. Les désintégrations alpha et bêta sont deux des modes principaux.",
        pros_a: [
          "Émet une particule alpha, un noyau d'hélium",
          "Le numéro atomique baisse de deux",
          "Produit une particule relativement grande, lente et lourde",
          "Arrêtée facilement, même par une feuille de papier",
          "Courante dans les éléments très lourds comme l'uranium",
        ],
        pros_b: [
          "Émet une particule bêta, un électron rapide",
          "Le numéro atomique change de un",
          "Produit une particule petite, légère et rapide",
          "Plus pénétrante, nécessitant de l'aluminium pour l'arrêter",
          "Survient quand un neutron se convertit en proton",
        ],
        verdict:
          "La désintégration alpha éjecte un noyau d'hélium lourd, peu pénétrant ; la bêta éjecte un électron rapide qui pénètre davantage. Toutes deux rapprochent un noyau instable de la stabilité.",
        faq: [
          {
            q: "Quel rayonnement est le plus pénétrant ?",
            a: "Les particules bêta pénètrent plus loin que les alpha, bien que toutes deux soient arrêtées par un blindage modeste.",
          },
          {
            q: "De quoi une particule alpha est-elle faite ?",
            a: "De deux protons et deux neutrons — essentiellement un noyau d'hélium.",
          },
          {
            q: "Qu'arrive-t-il au numéro atomique en désintégration bêta ?",
            a: "Il augmente de un quand un neutron se convertit en proton.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "asteroid-belt-vs-kuiper-belt",
    a: "Asteroid belt",
    b: "Kuiper Belt",
    category: "science",
    emoji_a: "🪨",
    emoji_b: "🧊",
    content: {
      en: {
        title: "Asteroid Belt vs Kuiper Belt Compared",
        h1: "Asteroid Belt vs Kuiper Belt: Two Solar System Rings",
        description:
          "The asteroid belt is a rocky ring near Mars; the Kuiper Belt is an icy ring beyond Neptune. Compare these two regions.",
        intro:
          "Our solar system has two great rings of leftover material. They sit at very different distances and are made of different stuff.",
        pros_a: [
          "Located between the orbits of Mars and Jupiter",
          "Made mostly of rocky and metallic asteroids",
          "Formed in the warmer inner solar system",
          "Contains the dwarf planet Ceres",
          "Much closer to the Sun and warmer",
        ],
        pros_b: [
          "Located beyond the orbit of Neptune",
          "Made mostly of icy bodies and frozen volatiles",
          "Formed in the cold outer solar system",
          "Contains dwarf planets including Pluto",
          "Far from the Sun and extremely cold",
        ],
        verdict:
          "The asteroid belt is a nearby rocky ring; the Kuiper Belt is a distant icy ring far beyond Neptune. Both are remnants of the solar system's formation that never built a planet.",
        faq: [
          {
            q: "Where is Pluto located?",
            a: "Pluto orbits within the Kuiper Belt, the icy region beyond Neptune.",
          },
          {
            q: "Why is the Kuiper Belt icy and the asteroid belt rocky?",
            a: "The Kuiper Belt formed far from the Sun where it is cold enough for ices to remain frozen.",
          },
          {
            q: "Is the asteroid belt densely packed?",
            a: "No. Despite films, asteroids are spread far apart, with vast empty space between them.",
          },
        ],
      },
      fr: {
        title: "Ceinture d'astéroïdes vs Ceinture de Kuiper",
        h1: "Ceinture d'astéroïdes vs de Kuiper : deux anneaux du système solaire",
        description:
          "La ceinture d'astéroïdes est un anneau rocheux près de Mars ; la ceinture de Kuiper un anneau glacé au-delà de Neptune.",
        intro:
          "Notre système solaire a deux grands anneaux de matière résiduelle. Ils se situent à des distances très différentes et sont faits de matériaux distincts.",
        pros_a: [
          "Située entre les orbites de Mars et de Jupiter",
          "Faite surtout d'astéroïdes rocheux et métalliques",
          "Formée dans le système solaire interne plus chaud",
          "Contient la planète naine Cérès",
          "Bien plus proche du Soleil et plus chaude",
        ],
        pros_b: [
          "Située au-delà de l'orbite de Neptune",
          "Faite surtout de corps glacés et de composés volatils gelés",
          "Formée dans le système solaire externe et froid",
          "Contient des planètes naines dont Pluton",
          "Loin du Soleil et extrêmement froide",
        ],
        verdict:
          "La ceinture d'astéroïdes est un anneau rocheux proche ; la ceinture de Kuiper un anneau glacé lointain bien au-delà de Neptune. Toutes deux sont des vestiges de la formation du système solaire.",
        faq: [
          {
            q: "Où se situe Pluton ?",
            a: "Pluton orbite au sein de la ceinture de Kuiper, la région glacée au-delà de Neptune.",
          },
          {
            q: "Pourquoi la ceinture de Kuiper est-elle glacée et celle d'astéroïdes rocheuse ?",
            a: "La ceinture de Kuiper s'est formée loin du Soleil, là où il fait assez froid pour que les glaces restent gelées.",
          },
          {
            q: "La ceinture d'astéroïdes est-elle densément peuplée ?",
            a: "Non. Malgré les films, les astéroïdes sont très espacés, avec un vaste vide entre eux.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "spring-tide-vs-neap-tide",
    a: "Spring tide",
    b: "Neap tide",
    category: "science",
    emoji_a: "🌊",
    emoji_b: "🌗",
    content: {
      en: {
        title: "Spring Tide vs Neap Tide Explained",
        h1: "Spring Tide vs Neap Tide: The Range of the Sea",
        description:
          "Spring tides have the largest range; neap tides have the smallest. Compare these two tidal extremes.",
        intro:
          "Tides change strength through the month as the Sun and Moon shift position. Spring and neap tides are the two extremes of this cycle.",
        pros_a: [
          "Produces the largest difference between high and low tide",
          "Occurs when the Sun, Earth and Moon are aligned",
          "Happens around the new moon and full moon",
          "The Sun's and Moon's pulls add together",
          "Brings the highest highs and lowest lows",
        ],
        pros_b: [
          "Produces the smallest difference between high and low tide",
          "Occurs when the Sun and Moon are at right angles",
          "Happens around the first and last quarter moons",
          "The Sun's pull partly cancels the Moon's",
          "Brings more moderate high and low tides",
        ],
        verdict:
          "Spring tides are the strongest, with the biggest range, when Sun and Moon align. Neap tides are the weakest, with the smallest range, when they pull at right angles. The cycle repeats twice a month.",
        faq: [
          {
            q: "Do spring tides only happen in spring?",
            a: "No. 'Spring' here means the tide springs forth; they occur twice a month all year round.",
          },
          {
            q: "When do neap tides happen?",
            a: "Around the first and last quarter moons, when the Sun and Moon pull at right angles.",
          },
          {
            q: "What causes tides in general?",
            a: "Mainly the Moon's gravity, with a smaller contribution from the Sun's gravity.",
          },
        ],
      },
      fr: {
        title: "Marée de vive-eau vs morte-eau expliquée",
        h1: "Marée de vive-eau vs morte-eau : l'amplitude de la mer",
        description:
          "Les marées de vive-eau ont la plus grande amplitude ; celles de morte-eau la plus petite. Comparez ces deux extrêmes.",
        intro:
          "Les marées changent de force au fil du mois selon la position du Soleil et de la Lune. Vive-eau et morte-eau sont les deux extrêmes de ce cycle.",
        pros_a: [
          "Produit la plus grande différence entre marée haute et basse",
          "Survient quand Soleil, Terre et Lune sont alignés",
          "Se produit autour de la nouvelle lune et de la pleine lune",
          "Les attractions du Soleil et de la Lune s'additionnent",
          "Apporte les plus hautes marées hautes et basses",
        ],
        pros_b: [
          "Produit la plus petite différence entre marée haute et basse",
          "Survient quand le Soleil et la Lune sont à angle droit",
          "Se produit autour des premier et dernier quartiers",
          "L'attraction du Soleil annule en partie celle de la Lune",
          "Apporte des marées hautes et basses plus modérées",
        ],
        verdict:
          "Les marées de vive-eau sont les plus fortes, à la plus grande amplitude, quand Soleil et Lune s'alignent. Celles de morte-eau les plus faibles, quand ils tirent à angle droit. Le cycle se répète deux fois par mois.",
        faq: [
          {
            q: "Les marées de vive-eau n'arrivent-elles qu'au printemps ?",
            a: "Non. Le terme renvoie à la vivacité de l'eau ; elles surviennent deux fois par mois toute l'année.",
          },
          {
            q: "Quand surviennent les marées de morte-eau ?",
            a: "Autour des premier et dernier quartiers, quand le Soleil et la Lune tirent à angle droit.",
          },
          {
            q: "Qu'est-ce qui cause les marées en général ?",
            a: "Principalement la gravité de la Lune, avec une contribution plus faible de celle du Soleil.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "convergent-vs-divergent-boundary",
    a: "Convergent boundary",
    b: "Divergent boundary",
    category: "science",
    emoji_a: "🏔️",
    emoji_b: "🌋",
    content: {
      en: {
        title: "Convergent vs Divergent Plate Boundaries",
        h1: "Convergent vs Divergent Boundary: Plates Meeting and Parting",
        description:
          "Convergent boundaries push plates together; divergent boundaries pull them apart. Compare these two plate boundary types.",
        intro:
          "Tectonic plates interact at their edges in different ways. Two of the main boundary types involve plates colliding or separating.",
        pros_a: [
          "Two tectonic plates move toward each other",
          "Can force one plate beneath another in subduction",
          "Builds mountain ranges and deep ocean trenches",
          "Linked to powerful earthquakes and volcanoes",
          "Examples include the Himalayas and the Andes",
        ],
        pros_b: [
          "Two tectonic plates move away from each other",
          "Magma rises to fill the widening gap",
          "Creates new crust as the plates separate",
          "Forms mid-ocean ridges and rift valleys",
          "Examples include the Mid-Atlantic Ridge",
        ],
        verdict:
          "Convergent boundaries destroy or crumple crust as plates collide, building mountains; divergent boundaries create new crust as plates pull apart. Both are driven by the slow churn beneath the surface.",
        faq: [
          {
            q: "Which boundary builds mountains?",
            a: "Convergent boundaries, where colliding plates crumple the crust upward into mountain ranges.",
          },
          {
            q: "What forms at a divergent boundary?",
            a: "New crust forms as magma rises into the widening gap, creating mid-ocean ridges and rift valleys.",
          },
          {
            q: "What is the third main boundary type?",
            a: "A transform boundary, where plates slide past each other horizontally.",
          },
        ],
      },
      fr: {
        title: "Limite convergente vs divergente de plaques",
        h1: "Limite convergente vs divergente : plaques qui se rencontrent et s'écartent",
        description:
          "Les limites convergentes rapprochent les plaques ; les divergentes les écartent. Comparez ces deux types de limites de plaques.",
        intro:
          "Les plaques tectoniques interagissent à leurs bords de différentes façons. Deux types de limites impliquent des plaques qui se heurtent ou se séparent.",
        pros_a: [
          "Deux plaques tectoniques se déplacent l'une vers l'autre",
          "Peut forcer une plaque sous une autre par subduction",
          "Construit des chaînes de montagnes et des fosses océaniques",
          "Liée à de puissants séismes et volcans",
          "Exemples : l'Himalaya et les Andes",
        ],
        pros_b: [
          "Deux plaques tectoniques s'éloignent l'une de l'autre",
          "Le magma remonte pour combler l'écart qui s'élargit",
          "Crée de la nouvelle croûte à mesure que les plaques se séparent",
          "Forme des dorsales médio-océaniques et des vallées de rift",
          "Exemple : la dorsale médio-atlantique",
        ],
        verdict:
          "Les limites convergentes détruisent ou plissent la croûte quand les plaques se heurtent, bâtissant des montagnes ; les divergentes créent de la croûte neuve quand les plaques s'écartent.",
        faq: [
          {
            q: "Quelle limite construit les montagnes ?",
            a: "Les limites convergentes, où les plaques en collision plissent la croûte vers le haut en chaînes de montagnes.",
          },
          {
            q: "Que se forme à une limite divergente ?",
            a: "De la croûte neuve se forme quand le magma remonte dans l'écart qui s'élargit, créant dorsales et rifts.",
          },
          {
            q: "Quel est le troisième type principal de limite ?",
            a: "Une limite transformante, où les plaques glissent horizontalement l'une contre l'autre.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "conductor-vs-insulator",
    a: "Conductor",
    b: "Insulator",
    category: "science",
    emoji_a: "🔌",
    emoji_b: "🧤",
    content: {
      en: {
        title: "Conductor vs Insulator: Electrical Materials",
        h1: "Conductor vs Insulator: Letting Charge Flow or Not",
        description:
          "Conductors let electric charge flow easily; insulators block it. Compare these two classes of material.",
        intro:
          "Materials respond very differently to electricity. Some let charge move freely; others resist it almost completely.",
        pros_a: [
          "Allows electric charge to flow easily",
          "Has many free electrons that can move",
          "Examples include copper, silver and aluminum",
          "Used for wires and electrical contacts",
          "Generally also conducts heat well",
        ],
        pros_b: [
          "Strongly resists the flow of electric charge",
          "Has very few free electrons",
          "Examples include rubber, glass and plastic",
          "Used to coat wires and protect against shocks",
          "Generally also a poor conductor of heat",
        ],
        verdict:
          "Conductors carry electricity and are used for wires; insulators block it and are used for safety coatings. Most electrical cables combine both — a conducting core inside an insulating sheath.",
        faq: [
          {
            q: "Why are wires made of copper?",
            a: "Copper is an excellent conductor with low resistance, carrying current efficiently and affordably.",
          },
          {
            q: "Why is rubber used to coat wires?",
            a: "Rubber is an insulator, so it stops current escaping and protects people from electric shocks.",
          },
          {
            q: "What is a semiconductor?",
            a: "A material between the two, conducting under some conditions; it is the basis of modern electronics.",
          },
        ],
      },
      fr: {
        title: "Conducteur vs Isolant : matériaux électriques",
        h1: "Conducteur vs Isolant : laisser passer la charge ou non",
        description:
          "Les conducteurs laissent passer la charge électrique ; les isolants la bloquent. Comparez ces deux classes de matériaux.",
        intro:
          "Les matériaux réagissent très différemment à l'électricité. Certains laissent la charge circuler librement, d'autres y résistent presque totalement.",
        pros_a: [
          "Laisse la charge électrique circuler facilement",
          "Possède de nombreux électrons libres mobiles",
          "Exemples : le cuivre, l'argent et l'aluminium",
          "Utilisé pour les fils et les contacts électriques",
          "Conduit généralement aussi bien la chaleur",
        ],
        pros_b: [
          "Résiste fortement au passage de la charge électrique",
          "Possède très peu d'électrons libres",
          "Exemples : le caoutchouc, le verre et le plastique",
          "Utilisé pour gainer les fils et protéger des chocs",
          "Généralement aussi mauvais conducteur de chaleur",
        ],
        verdict:
          "Les conducteurs transportent l'électricité et servent aux fils ; les isolants la bloquent et servent aux gaines de sécurité. La plupart des câbles combinent les deux.",
        faq: [
          {
            q: "Pourquoi les fils sont-ils en cuivre ?",
            a: "Le cuivre est un excellent conducteur à faible résistance, transportant le courant efficacement et à bon prix.",
          },
          {
            q: "Pourquoi le caoutchouc gaine-t-il les fils ?",
            a: "Le caoutchouc est un isolant ; il empêche le courant de fuir et protège des chocs électriques.",
          },
          {
            q: "Qu'est-ce qu'un semi-conducteur ?",
            a: "Un matériau entre les deux, conduisant sous certaines conditions ; c'est la base de l'électronique moderne.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "light-year-vs-astronomical-unit",
    a: "Light-year",
    b: "Astronomical unit",
    category: "science",
    emoji_a: "🌟",
    emoji_b: "📏",
    content: {
      en: {
        title: "Light-Year vs Astronomical Unit Compared",
        h1: "Light-Year vs Astronomical Unit: Cosmic Distances",
        description:
          "A light-year measures vast interstellar distances; an astronomical unit measures within the solar system. Compare both units.",
        intro:
          "Space is so big that everyday units fail. Astronomers use two special distance units for different scales of the cosmos.",
        pros_a: [
          "The distance light travels in one year",
          "About 9.46 trillion kilometers",
          "Used to measure distances between stars and galaxies",
          "A huge unit suited to interstellar scales",
          "The nearest star is about four light-years away",
        ],
        pros_b: [
          "The average distance from Earth to the Sun",
          "About 150 million kilometers",
          "Used to measure distances within the solar system",
          "A smaller unit suited to planetary scales",
          "Neptune orbits roughly 30 astronomical units out",
        ],
        verdict:
          "The astronomical unit handles distances inside our solar system; the light-year handles the far larger gaps between stars. One light-year equals roughly 63,000 astronomical units.",
        faq: [
          {
            q: "Is a light-year a unit of time?",
            a: "No. Despite the word 'year', a light-year measures distance — how far light travels in a year.",
          },
          {
            q: "Which unit is bigger?",
            a: "The light-year is vastly bigger, equal to about 63,000 astronomical units.",
          },
          {
            q: "What unit do astronomers use beyond light-years?",
            a: "The parsec, equal to about 3.26 light-years, is common for very large distances.",
          },
        ],
      },
      fr: {
        title: "Année-lumière vs Unité astronomique comparées",
        h1: "Année-lumière vs Unité astronomique : distances cosmiques",
        description:
          "L'année-lumière mesure les vastes distances interstellaires ; l'unité astronomique mesure dans le système solaire.",
        intro:
          "L'espace est si vaste que les unités courantes échouent. Les astronomes utilisent deux unités de distance pour différentes échelles.",
        pros_a: [
          "La distance que la lumière parcourt en un an",
          "Environ 9 460 milliards de kilomètres",
          "Utilisée pour les distances entre étoiles et galaxies",
          "Une unité énorme adaptée aux échelles interstellaires",
          "L'étoile la plus proche est à environ quatre années-lumière",
        ],
        pros_b: [
          "La distance moyenne de la Terre au Soleil",
          "Environ 150 millions de kilomètres",
          "Utilisée pour les distances au sein du système solaire",
          "Une unité plus petite adaptée aux échelles planétaires",
          "Neptune orbite à environ 30 unités astronomiques",
        ],
        verdict:
          "L'unité astronomique gère les distances dans notre système solaire ; l'année-lumière les écarts bien plus grands entre étoiles. Une année-lumière vaut environ 63 000 unités astronomiques.",
        faq: [
          {
            q: "L'année-lumière est-elle une unité de temps ?",
            a: "Non. Malgré le mot « année », une année-lumière mesure une distance — celle parcourue par la lumière en un an.",
          },
          {
            q: "Quelle unité est la plus grande ?",
            a: "L'année-lumière est bien plus grande, égale à environ 63 000 unités astronomiques.",
          },
          {
            q: "Quelle unité les astronomes utilisent-ils au-delà des années-lumière ?",
            a: "Le parsec, égal à environ 3,26 années-lumière, est courant pour les très grandes distances.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "mitochondria-vs-chloroplast",
    a: "Mitochondria",
    b: "Chloroplast",
    category: "science",
    emoji_a: "🔋",
    emoji_b: "🌿",
    content: {
      en: {
        title: "Mitochondria vs Chloroplast: Cell Organelles",
        h1: "Mitochondria vs Chloroplast: Two Energy Organelles",
        description:
          "Mitochondria release energy from food; chloroplasts capture energy from light. Compare these two cell organelles.",
        intro:
          "Two organelles handle a cell's energy. They both transform energy, but one releases it while the other captures it.",
        pros_a: [
          "Releases energy by breaking down glucose",
          "Carries out cellular respiration",
          "Found in nearly all eukaryotic cells",
          "Produces ATP, the cell's energy currency",
          "Often called the powerhouse of the cell",
        ],
        pros_b: [
          "Captures light energy and stores it in glucose",
          "Carries out photosynthesis",
          "Found in plant cells and algae, not animal cells",
          "Contains the green pigment chlorophyll",
          "Releases oxygen as a byproduct",
        ],
        verdict:
          "Chloroplasts capture sunlight to build glucose; mitochondria break glucose down to release usable energy. Plant cells have both, while animal cells rely only on mitochondria.",
        faq: [
          {
            q: "Do animal cells have chloroplasts?",
            a: "No. Chloroplasts are found only in plant cells and algae, not in animal cells.",
          },
          {
            q: "How are these organelles linked?",
            a: "Chloroplasts make glucose and mitochondria break it down, so their processes are complementary.",
          },
          {
            q: "Why do both have their own DNA?",
            a: "Endosymbiotic theory says both evolved from once free-living bacteria, keeping some of their own DNA.",
          },
        ],
      },
      fr: {
        title: "Mitochondrie vs Chloroplaste : organites cellulaires",
        h1: "Mitochondrie vs Chloroplaste : deux organites énergétiques",
        description:
          "Les mitochondries libèrent l'énergie des aliments ; les chloroplastes captent l'énergie de la lumière. Comparez ces organites.",
        intro:
          "Deux organites gèrent l'énergie d'une cellule. Tous deux transforment l'énergie, mais l'un la libère tandis que l'autre la capte.",
        pros_a: [
          "Libère l'énergie en décomposant le glucose",
          "Réalise la respiration cellulaire",
          "Présente dans presque toutes les cellules eucaryotes",
          "Produit l'ATP, la monnaie énergétique de la cellule",
          "Souvent appelée la centrale de la cellule",
        ],
        pros_b: [
          "Capte l'énergie lumineuse et la stocke dans le glucose",
          "Réalise la photosynthèse",
          "Présent dans les cellules végétales et les algues, pas animales",
          "Contient le pigment vert chlorophylle",
          "Libère de l'oxygène comme sous-produit",
        ],
        verdict:
          "Les chloroplastes captent la lumière pour fabriquer du glucose ; les mitochondries décomposent le glucose pour libérer une énergie utilisable. Les cellules végétales ont les deux, les animales seulement des mitochondries.",
        faq: [
          {
            q: "Les cellules animales ont-elles des chloroplastes ?",
            a: "Non. Les chloroplastes ne se trouvent que dans les cellules végétales et les algues, pas animales.",
          },
          {
            q: "Comment ces organites sont-ils liés ?",
            a: "Les chloroplastes fabriquent le glucose et les mitochondries le décomposent : leurs processus sont complémentaires.",
          },
          {
            q: "Pourquoi les deux ont-ils leur propre ADN ?",
            a: "La théorie endosymbiotique dit que les deux proviennent de bactéries jadis libres, gardant un peu de leur ADN.",
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
    category: "science",
    emoji_a: "🔤",
    emoji_b: "🧩",
    content: {
      en: {
        title: "Element vs Compound: Pure Substances Compared",
        h1: "Element vs Compound: One Atom Type or Many",
        description:
          "An element contains one type of atom; a compound combines two or more elements chemically. Compare these pure substances.",
        intro:
          "Pure substances come in two kinds. The difference is whether the substance is built from one type of atom or several joined together.",
        pros_a: [
          "Made of only one type of atom",
          "Cannot be broken into simpler substances chemically",
          "Each is listed on the periodic table",
          "Examples include oxygen, gold and hydrogen",
          "The fundamental building blocks of all matter",
        ],
        pros_b: [
          "Made of two or more elements chemically bonded",
          "Can be broken down into its elements by chemical reactions",
          "Has properties different from its component elements",
          "Examples include water, salt and carbon dioxide",
          "Has a fixed ratio of elements, shown by a formula",
        ],
        verdict:
          "An element is the simplest pure substance, made of one atom type; a compound joins elements in fixed ratios. Water, for instance, is a compound of the elements hydrogen and oxygen.",
        faq: [
          {
            q: "Is water an element or a compound?",
            a: "Water is a compound, made of the elements hydrogen and oxygen chemically bonded together.",
          },
          {
            q: "Can a compound be split into elements?",
            a: "Yes, but only by chemical reactions, not by physical methods like filtering.",
          },
          {
            q: "How many elements are there?",
            a: "Around 118 elements are known, each with its own place on the periodic table.",
          },
        ],
      },
      fr: {
        title: "Élément vs Composé : substances pures comparées",
        h1: "Élément vs Composé : un type d'atome ou plusieurs",
        description:
          "Un élément contient un seul type d'atome ; un composé combine chimiquement plusieurs éléments. Comparez ces substances pures.",
        intro:
          "Les substances pures sont de deux sortes. La différence : la substance est-elle bâtie d'un type d'atome ou de plusieurs liés ?",
        pros_a: [
          "Fait d'un seul type d'atome",
          "Ne peut être décomposé chimiquement en substances plus simples",
          "Chacun figure dans le tableau périodique",
          "Exemples : l'oxygène, l'or et l'hydrogène",
          "Les briques fondamentales de toute la matière",
        ],
        pros_b: [
          "Fait de deux éléments ou plus liés chimiquement",
          "Peut être décomposé en ses éléments par des réactions chimiques",
          "A des propriétés différentes de ses éléments composants",
          "Exemples : l'eau, le sel et le dioxyde de carbone",
          "A un rapport fixe d'éléments, indiqué par une formule",
        ],
        verdict:
          "Un élément est la substance pure la plus simple, faite d'un type d'atome ; un composé joint des éléments en rapports fixes. L'eau, par exemple, est un composé d'hydrogène et d'oxygène.",
        faq: [
          {
            q: "L'eau est-elle un élément ou un composé ?",
            a: "L'eau est un composé, fait des éléments hydrogène et oxygène liés chimiquement.",
          },
          {
            q: "Un composé peut-il être séparé en éléments ?",
            a: "Oui, mais seulement par des réactions chimiques, pas par des méthodes physiques comme la filtration.",
          },
          {
            q: "Combien d'éléments existe-t-il ?",
            a: "Environ 118 éléments sont connus, chacun ayant sa place dans le tableau périodique.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "diffusion-vs-osmosis",
    a: "Diffusion",
    b: "Osmosis",
    category: "science",
    emoji_a: "💨",
    emoji_b: "💧",
    content: {
      en: {
        title: "Diffusion vs Osmosis: Movement in Cells",
        h1: "Diffusion vs Osmosis: How Substances Spread",
        description:
          "Diffusion spreads any particles from high to low concentration; osmosis is the diffusion of water. Compare both processes.",
        intro:
          "Cells move substances passively without using energy. Diffusion and osmosis are two related ways this happens.",
        pros_a: [
          "The spreading of particles from high to low concentration",
          "Can involve gases, liquids or dissolved solutes",
          "Does not require a membrane",
          "Continues until concentration is even",
          "A passive process needing no cellular energy",
        ],
        pros_b: [
          "A special type of diffusion involving only water",
          "Water moves across a partially permeable membrane",
          "Water flows toward higher solute concentration",
          "Always requires a semi-permeable membrane",
          "Also a passive process needing no cellular energy",
        ],
        verdict:
          "Osmosis is a specific case of diffusion: the movement of water across a membrane. Diffusion is the broader process that can move any particles, with or without a membrane. Both are passive.",
        faq: [
          {
            q: "Is osmosis a type of diffusion?",
            a: "Yes. Osmosis is the diffusion of water specifically, across a partially permeable membrane.",
          },
          {
            q: "Do these processes need energy?",
            a: "No. Both diffusion and osmosis are passive and need no energy from the cell.",
          },
          {
            q: "Which way does water move in osmosis?",
            a: "Water moves from a region of lower solute concentration toward higher solute concentration.",
          },
        ],
      },
      fr: {
        title: "Diffusion vs Osmose : mouvements dans les cellules",
        h1: "Diffusion vs Osmose : comment les substances se répandent",
        description:
          "La diffusion répand toute particule du plus concentré au moins concentré ; l'osmose est la diffusion de l'eau.",
        intro:
          "Les cellules déplacent des substances passivement sans utiliser d'énergie. Diffusion et osmose sont deux façons liées d'y parvenir.",
        pros_a: [
          "La dispersion de particules du plus concentré au moins concentré",
          "Peut impliquer gaz, liquides ou solutés dissous",
          "Ne nécessite pas de membrane",
          "Se poursuit jusqu'à ce que la concentration soit uniforme",
          "Un processus passif n'exigeant aucune énergie cellulaire",
        ],
        pros_b: [
          "Un type particulier de diffusion impliquant seulement l'eau",
          "L'eau traverse une membrane partiellement perméable",
          "L'eau s'écoule vers la concentration de soluté la plus élevée",
          "Exige toujours une membrane semi-perméable",
          "Aussi un processus passif n'exigeant aucune énergie cellulaire",
        ],
        verdict:
          "L'osmose est un cas particulier de diffusion : le mouvement de l'eau à travers une membrane. La diffusion est le processus plus large qui déplace toute particule, avec ou sans membrane. Les deux sont passifs.",
        faq: [
          {
            q: "L'osmose est-elle un type de diffusion ?",
            a: "Oui. L'osmose est la diffusion de l'eau spécifiquement, à travers une membrane partiellement perméable.",
          },
          {
            q: "Ces processus nécessitent-ils de l'énergie ?",
            a: "Non. La diffusion et l'osmose sont passives et n'exigent aucune énergie de la cellule.",
          },
          {
            q: "Dans quel sens l'eau se déplace-t-elle en osmose ?",
            a: "L'eau va d'une région à faible concentration de soluté vers une concentration plus élevée.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "asteroid-impact-vs-volcanic-eruption",
    a: "Asteroid impact",
    b: "Volcanic eruption",
    category: "science",
    emoji_a: "☄️",
    emoji_b: "🌋",
    content: {
      en: {
        title: "Asteroid Impact vs Volcanic Eruption Compared",
        h1: "Asteroid Impact vs Volcanic Eruption: Catastrophic Events",
        description:
          "An asteroid impact strikes from space; a volcanic eruption erupts from within Earth. Compare these two catastrophic events.",
        intro:
          "Both events can reshape landscapes and disrupt climate, but one comes from space while the other comes from deep underground.",
        pros_a: [
          "Caused by a space rock striking Earth's surface",
          "Releases enormous energy in a single instant",
          "Forms an impact crater",
          "Can throw dust high into the atmosphere",
          "Linked to the mass extinction of the dinosaurs",
        ],
        pros_b: [
          "Caused by magma and gas escaping from inside Earth",
          "Can erupt over hours, days or far longer",
          "Builds volcanic landforms over time",
          "Releases ash, lava and gases",
          "Large eruptions can cool the global climate for years",
        ],
        verdict:
          "An asteroid impact is a sudden blow from space; a volcanic eruption is a release of Earth's internal heat. Both can darken skies and alter climate, and both have driven extinctions.",
        faq: [
          {
            q: "Which event ended the dinosaurs?",
            a: "Evidence points to a massive asteroid impact about 66 million years ago, possibly worsened by volcanism.",
          },
          {
            q: "How do both affect climate?",
            a: "Both can fill the atmosphere with dust or ash, blocking sunlight and cooling the planet temporarily.",
          },
          {
            q: "Which is more predictable?",
            a: "Volcanoes often show warning signs; large asteroid impacts are rare but tracked by sky surveys.",
          },
        ],
      },
      fr: {
        title: "Impact d'astéroïde vs Éruption volcanique comparés",
        h1: "Impact d'astéroïde vs Éruption volcanique : événements catastrophiques",
        description:
          "Un impact d'astéroïde frappe depuis l'espace ; une éruption volcanique jaillit de l'intérieur de la Terre. Comparez-les.",
        intro:
          "Les deux événements peuvent remodeler les paysages et perturber le climat, mais l'un vient de l'espace, l'autre des profondeurs.",
        pros_a: [
          "Causé par une roche spatiale frappant la surface terrestre",
          "Libère une énergie énorme en un seul instant",
          "Forme un cratère d'impact",
          "Peut projeter de la poussière haut dans l'atmosphère",
          "Lié à l'extinction de masse des dinosaures",
        ],
        pros_b: [
          "Causée par magma et gaz s'échappant de l'intérieur de la Terre",
          "Peut éclater sur des heures, des jours ou bien plus longtemps",
          "Construit des reliefs volcaniques au fil du temps",
          "Libère cendres, lave et gaz",
          "Les grandes éruptions peuvent refroidir le climat des années",
        ],
        verdict:
          "Un impact d'astéroïde est un coup soudain venu de l'espace ; une éruption volcanique une libération de la chaleur interne de la Terre. Les deux peuvent obscurcir le ciel et causer des extinctions.",
        faq: [
          {
            q: "Quel événement a mis fin aux dinosaures ?",
            a: "Les preuves désignent un impact d'astéroïde massif il y a environ 66 millions d'années, peut-être aggravé par le volcanisme.",
          },
          {
            q: "Comment les deux affectent-ils le climat ?",
            a: "Les deux peuvent emplir l'atmosphère de poussière ou de cendres, bloquant le soleil et refroidissant la planète.",
          },
          {
            q: "Lequel est le plus prévisible ?",
            a: "Les volcans montrent souvent des signes ; les grands impacts d'astéroïdes sont rares mais suivis par les relevés du ciel.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "latitude-vs-longitude",
    a: "Latitude",
    b: "Longitude",
    category: "science",
    emoji_a: "↔️",
    emoji_b: "↕️",
    content: {
      en: {
        title: "Latitude vs Longitude: Earth's Coordinate Grid",
        h1: "Latitude vs Longitude: Locating Any Point on Earth",
        description:
          "Latitude measures north-south position; longitude measures east-west position. Compare these two map coordinates.",
        intro:
          "Every place on Earth has a precise address made of two numbers. Latitude and longitude together pinpoint any location.",
        pros_a: [
          "Measures position north or south of the equator",
          "Lines run horizontally, parallel to the equator",
          "Ranges from 0 degrees at the equator to 90 at the poles",
          "Latitude lines are called parallels",
          "Strongly influences climate and seasons",
        ],
        pros_b: [
          "Measures position east or west of the prime meridian",
          "Lines run vertically, from pole to pole",
          "Ranges from 0 to 180 degrees east or west",
          "Longitude lines are called meridians",
          "Used to define time zones around the globe",
        ],
        verdict:
          "Latitude tells you how far north or south you are; longitude tells you how far east or west. Combine the two and you can pinpoint any spot on the planet exactly.",
        faq: [
          {
            q: "How do I remember which is which?",
            a: "Latitude lines are flat like the rungs of a ladder; longitude lines run the long way, pole to pole.",
          },
          {
            q: "Where is zero longitude?",
            a: "At the prime meridian, which passes through Greenwich in London.",
          },
          {
            q: "Why does latitude affect climate?",
            a: "It determines how directly sunlight strikes the surface, so the poles are cold and the equator is warm.",
          },
        ],
      },
      fr: {
        title: "Latitude vs Longitude : la grille de coordonnées",
        h1: "Latitude vs Longitude : localiser tout point sur Terre",
        description:
          "La latitude mesure la position nord-sud ; la longitude la position est-ouest. Comparez ces deux coordonnées cartographiques.",
        intro:
          "Chaque lieu sur Terre a une adresse précise faite de deux nombres. Latitude et longitude ensemble repèrent n'importe quel point.",
        pros_a: [
          "Mesure la position au nord ou au sud de l'équateur",
          "Les lignes courent horizontalement, parallèles à l'équateur",
          "Va de 0 degré à l'équateur à 90 aux pôles",
          "Les lignes de latitude s'appellent des parallèles",
          "Influence fortement le climat et les saisons",
        ],
        pros_b: [
          "Mesure la position à l'est ou à l'ouest du méridien d'origine",
          "Les lignes courent verticalement, de pôle à pôle",
          "Va de 0 à 180 degrés est ou ouest",
          "Les lignes de longitude s'appellent des méridiens",
          "Utilisée pour définir les fuseaux horaires du globe",
        ],
        verdict:
          "La latitude indique à quelle distance vers le nord ou le sud vous êtes ; la longitude vers l'est ou l'ouest. Combinez les deux et vous repérez exactement tout point de la planète.",
        faq: [
          {
            q: "Comment retenir laquelle est laquelle ?",
            a: "Les lignes de latitude sont plates comme les barreaux d'une échelle ; la longitude court de pôle à pôle.",
          },
          {
            q: "Où se situe la longitude zéro ?",
            a: "Au méridien d'origine, qui passe par Greenwich à Londres.",
          },
          {
            q: "Pourquoi la latitude affecte-t-elle le climat ?",
            a: "Elle détermine à quel point la lumière du soleil frappe la surface : les pôles sont froids, l'équateur chaud.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "natural-selection-vs-genetic-drift",
    a: "Natural selection",
    b: "Genetic drift",
    category: "science",
    emoji_a: "🦒",
    emoji_b: "🎲",
    content: {
      en: {
        title: "Natural Selection vs Genetic Drift Explained",
        h1: "Natural Selection vs Genetic Drift: Drivers of Evolution",
        description:
          "Natural selection favors helpful traits; genetic drift changes traits by chance. Compare these two evolutionary mechanisms.",
        intro:
          "Populations evolve through several mechanisms. Natural selection and genetic drift both change gene frequencies, but for very different reasons.",
        pros_a: [
          "Favors traits that improve survival and reproduction",
          "A non-random process driven by the environment",
          "Tends to make populations better suited to their habitat",
          "Acts strongest on traits affecting fitness",
          "The main driver of adaptation",
        ],
        pros_b: [
          "Changes gene frequencies purely by random chance",
          "A random process, unrelated to trait usefulness",
          "Has the biggest effect in small populations",
          "Can eliminate helpful traits or spread harmful ones",
          "Reduces genetic variation over time",
        ],
        verdict:
          "Natural selection shapes populations toward fitness in a non-random way; genetic drift shifts them randomly, with the largest effect in small populations. Both act together to drive evolution.",
        faq: [
          {
            q: "Which mechanism is random?",
            a: "Genetic drift is random; natural selection is non-random and driven by environmental pressures.",
          },
          {
            q: "When is genetic drift strongest?",
            a: "In small populations, where chance events can dramatically shift gene frequencies.",
          },
          {
            q: "Can drift work against adaptation?",
            a: "Yes. By chance, genetic drift can remove beneficial traits or spread harmful ones.",
          },
        ],
      },
      fr: {
        title: "Sélection naturelle vs Dérive génétique expliquées",
        h1: "Sélection naturelle vs Dérive génétique : moteurs de l'évolution",
        description:
          "La sélection naturelle favorise les caractères utiles ; la dérive génétique les change par hasard. Comparez ces mécanismes.",
        intro:
          "Les populations évoluent par plusieurs mécanismes. Sélection naturelle et dérive génétique changent toutes deux les fréquences des gènes, mais pour des raisons opposées.",
        pros_a: [
          "Favorise les caractères qui améliorent survie et reproduction",
          "Un processus non aléatoire dicté par l'environnement",
          "Tend à mieux adapter les populations à leur habitat",
          "Agit le plus fort sur les caractères affectant la valeur sélective",
          "Le moteur principal de l'adaptation",
        ],
        pros_b: [
          "Change les fréquences des gènes purement par hasard",
          "Un processus aléatoire, sans lien avec l'utilité des caractères",
          "A le plus grand effet dans les petites populations",
          "Peut éliminer des caractères utiles ou répandre des nuisibles",
          "Réduit la variation génétique au fil du temps",
        ],
        verdict:
          "La sélection naturelle façonne les populations vers la valeur sélective de façon non aléatoire ; la dérive génétique les décale au hasard, surtout dans les petites populations. Les deux conduisent l'évolution.",
        faq: [
          {
            q: "Quel mécanisme est aléatoire ?",
            a: "La dérive génétique est aléatoire ; la sélection naturelle est non aléatoire et dictée par les pressions du milieu.",
          },
          {
            q: "Quand la dérive génétique est-elle la plus forte ?",
            a: "Dans les petites populations, où des événements de hasard peuvent décaler fortement les fréquences des gènes.",
          },
          {
            q: "La dérive peut-elle aller contre l'adaptation ?",
            a: "Oui. Par hasard, la dérive génétique peut supprimer des caractères bénéfiques ou répandre des nuisibles.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "centripetal-vs-centrifugal-force",
    a: "Centripetal force",
    b: "Centrifugal force",
    category: "science",
    emoji_a: "🎡",
    emoji_b: "🌀",
    content: {
      en: {
        title: "Centripetal vs Centrifugal Force Explained",
        h1: "Centripetal vs Centrifugal Force: Real vs Apparent",
        description:
          "Centripetal force is the real inward pull in circular motion; centrifugal force is the apparent outward effect. Compare both.",
        intro:
          "Circular motion involves two terms that confuse many students. One is a genuine force; the other only seems like one.",
        pros_a: [
          "A real force that points toward the center of a circle",
          "Required to keep any object moving in a circle",
          "Provided by tension, gravity or friction",
          "Without it, the object flies off in a straight line",
          "Measurable and obeys Newton's laws directly",
        ],
        pros_b: [
          "An apparent outward effect felt in a rotating frame",
          "Not a real force, but a result of inertia",
          "Felt by passengers in a turning car",
          "Arises only when viewing from a spinning reference frame",
          "Disappears when viewed from an outside, non-rotating frame",
        ],
        verdict:
          "Centripetal force is the true inward pull that bends an object into a circle. The outward 'centrifugal force' you feel is really just inertia trying to keep you moving straight.",
        faq: [
          {
            q: "Is centrifugal force a real force?",
            a: "No. It is an apparent effect of inertia felt only within a rotating reference frame.",
          },
          {
            q: "What provides centripetal force?",
            a: "Anything pulling inward — tension in a string, gravity, or friction between tires and road.",
          },
          {
            q: "What happens without centripetal force?",
            a: "The object stops curving and flies off in a straight line, obeying its inertia.",
          },
        ],
      },
      fr: {
        title: "Force centripète vs centrifuge expliquée",
        h1: "Force centripète vs centrifuge : réelle vs apparente",
        description:
          "La force centripète est la vraie attraction vers le centre ; la centrifuge l'effet apparent vers l'extérieur. Comparez-les.",
        intro:
          "Le mouvement circulaire fait intervenir deux termes qui troublent bien des élèves. L'un est une vraie force, l'autre n'en a que l'apparence.",
        pros_a: [
          "Une force réelle pointant vers le centre d'un cercle",
          "Nécessaire pour qu'un objet se déplace en cercle",
          "Fournie par la tension, la gravité ou le frottement",
          "Sans elle, l'objet part en ligne droite",
          "Mesurable et obéit directement aux lois de Newton",
        ],
        pros_b: [
          "Un effet apparent vers l'extérieur ressenti en rotation",
          "Pas une vraie force, mais un résultat de l'inertie",
          "Ressentie par les passagers d'une voiture qui tourne",
          "Apparaît seulement dans un référentiel en rotation",
          "Disparaît vue d'un référentiel extérieur non tournant",
        ],
        verdict:
          "La force centripète est la vraie attraction vers l'intérieur qui courbe un objet en cercle. La « force centrifuge » ressentie n'est que l'inertie qui cherche à vous garder en ligne droite.",
        faq: [
          {
            q: "La force centrifuge est-elle une vraie force ?",
            a: "Non. C'est un effet apparent de l'inertie, ressenti uniquement dans un référentiel en rotation.",
          },
          {
            q: "Qu'est-ce qui fournit la force centripète ?",
            a: "Tout ce qui tire vers l'intérieur — la tension d'une corde, la gravité ou le frottement des pneus.",
          },
          {
            q: "Que se passe-t-il sans force centripète ?",
            a: "L'objet cesse de se courber et part en ligne droite, obéissant à son inertie.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "endocytosis-vs-exocytosis",
    a: "Endocytosis",
    b: "Exocytosis",
    category: "science",
    emoji_a: "📥",
    emoji_b: "📤",
    content: {
      en: {
        title: "Endocytosis vs Exocytosis: Cell Transport",
        h1: "Endocytosis vs Exocytosis: Moving Big Cargo In and Out",
        description:
          "Endocytosis brings material into a cell; exocytosis expels it. Compare these two bulk transport processes.",
        intro:
          "Cells move large molecules across the membrane using active transport. Endocytosis and exocytosis are opposite directions of the same idea.",
        pros_a: [
          "Brings material into the cell",
          "The membrane folds inward to engulf substances",
          "Forms a vesicle that carries cargo inside",
          "Used to take in nutrients and large particles",
          "Includes phagocytosis, the engulfing of solid matter",
        ],
        pros_b: [
          "Expels material out of the cell",
          "A vesicle fuses with the membrane to release contents",
          "Sends substances into the surrounding space",
          "Used to secrete hormones, enzymes and waste",
          "Adds new membrane to the cell surface in the process",
        ],
        verdict:
          "Endocytosis imports bulk cargo by wrapping the membrane around it; exocytosis exports cargo by fusing vesicles with the membrane. Both require energy and handle materials too big to simply diffuse.",
        faq: [
          {
            q: "Do these processes need energy?",
            a: "Yes. Both endocytosis and exocytosis are active transport and require cellular energy.",
          },
          {
            q: "What is phagocytosis?",
            a: "A type of endocytosis where the cell engulfs large solid particles, such as bacteria.",
          },
          {
            q: "How does the cell secrete hormones?",
            a: "Through exocytosis — vesicles carrying hormones fuse with the membrane and release them outside.",
          },
        ],
      },
      fr: {
        title: "Endocytose vs Exocytose : transport cellulaire",
        h1: "Endocytose vs Exocytose : faire entrer et sortir le gros cargo",
        description:
          "L'endocytose fait entrer du matériel dans la cellule ; l'exocytose l'expulse. Comparez ces deux processus de transport.",
        intro:
          "Les cellules déplacent de grosses molécules à travers la membrane par transport actif. Endocytose et exocytose sont les sens opposés d'une même idée.",
        pros_a: [
          "Fait entrer du matériel dans la cellule",
          "La membrane se replie vers l'intérieur pour engloutir",
          "Forme une vésicule qui transporte le cargo à l'intérieur",
          "Sert à absorber nutriments et grosses particules",
          "Inclut la phagocytose, l'engloutissement de matière solide",
        ],
        pros_b: [
          "Expulse du matériel hors de la cellule",
          "Une vésicule fusionne avec la membrane pour libérer son contenu",
          "Envoie des substances dans l'espace environnant",
          "Sert à sécréter hormones, enzymes et déchets",
          "Ajoute de la membrane neuve à la surface cellulaire",
        ],
        verdict:
          "L'endocytose importe du cargo en enveloppant la membrane autour ; l'exocytose l'exporte en fusionnant des vésicules avec la membrane. Les deux exigent de l'énergie pour des matériaux trop gros pour diffuser.",
        faq: [
          {
            q: "Ces processus nécessitent-ils de l'énergie ?",
            a: "Oui. L'endocytose et l'exocytose sont du transport actif et exigent de l'énergie cellulaire.",
          },
          {
            q: "Qu'est-ce que la phagocytose ?",
            a: "Un type d'endocytose où la cellule engloutit de grosses particules solides, comme des bactéries.",
          },
          {
            q: "Comment la cellule sécrète-t-elle des hormones ?",
            a: "Par exocytose — des vésicules portant les hormones fusionnent avec la membrane et les libèrent à l'extérieur.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "conduction-vs-radiation",
    a: "Conduction",
    b: "Radiation",
    category: "science",
    emoji_a: "🍳",
    emoji_b: "☀️",
    content: {
      en: {
        title: "Conduction vs Radiation: Heat Transfer Modes",
        h1: "Conduction vs Radiation: Contact vs No Contact",
        description:
          "Conduction needs direct contact to move heat; radiation crosses empty space. Compare these two heat transfer modes.",
        intro:
          "Heat travels in three ways. Conduction and radiation are two of them, and they differ on whether a medium is needed at all.",
        pros_a: [
          "Transfers heat through direct contact of particles",
          "Requires a physical medium, ideally a solid",
          "Energy passes from particle to neighboring particle",
          "Cannot occur across a vacuum",
          "Example: a pan handle heating up on a stove",
        ],
        pros_b: [
          "Transfers heat by electromagnetic waves",
          "Needs no medium at all",
          "Can travel through the vacuum of space",
          "All warm objects emit infrared radiation",
          "Example: the Sun warming the Earth across space",
        ],
        verdict:
          "Conduction needs touching matter and works best in solids; radiation needs nothing and crosses empty space. That is how the Sun's heat reaches Earth despite the vacuum between them.",
        faq: [
          {
            q: "How does the Sun's heat reach Earth?",
            a: "By radiation. Electromagnetic waves cross the vacuum of space, since conduction needs a medium.",
          },
          {
            q: "Does radiation need a medium?",
            a: "No. Radiation travels through empty space, unlike conduction and convection.",
          },
          {
            q: "What is the third heat transfer mode?",
            a: "Convection, which moves heat through the bulk motion of a fluid.",
          },
        ],
      },
      fr: {
        title: "Conduction vs Rayonnement : modes de transfert",
        h1: "Conduction vs Rayonnement : contact vs sans contact",
        description:
          "La conduction exige un contact direct pour transporter la chaleur ; le rayonnement traverse le vide. Comparez ces modes.",
        intro:
          "La chaleur voyage de trois façons. Conduction et rayonnement en sont deux, et diffèrent sur la nécessité d'un milieu.",
        pros_a: [
          "Transfère la chaleur par contact direct des particules",
          "Nécessite un milieu physique, idéalement un solide",
          "L'énergie passe de particule à particule voisine",
          "Ne peut se produire à travers le vide",
          "Exemple : une poignée de poêle qui chauffe sur le feu",
        ],
        pros_b: [
          "Transfère la chaleur par ondes électromagnétiques",
          "Ne nécessite aucun milieu",
          "Peut traverser le vide de l'espace",
          "Tout objet chaud émet un rayonnement infrarouge",
          "Exemple : le Soleil réchauffant la Terre à travers l'espace",
        ],
        verdict:
          "La conduction exige une matière en contact et fonctionne dans les solides ; le rayonnement n'exige rien et traverse le vide. Ainsi la chaleur du Soleil atteint la Terre malgré le vide.",
        faq: [
          {
            q: "Comment la chaleur du Soleil atteint-elle la Terre ?",
            a: "Par rayonnement. Les ondes électromagnétiques traversent le vide, la conduction nécessitant un milieu.",
          },
          {
            q: "Le rayonnement a-t-il besoin d'un milieu ?",
            a: "Non. Le rayonnement traverse le vide, contrairement à la conduction et la convection.",
          },
          {
            q: "Quel est le troisième mode de transfert de chaleur ?",
            a: "La convection, qui déplace la chaleur par le mouvement global d'un fluide.",
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
    category: "science",
    emoji_a: "🔢",
    emoji_b: "⚖️",
    content: {
      en: {
        title: "Atomic Number vs Mass Number Explained",
        h1: "Atomic Number vs Mass Number: Identifying Atoms",
        description:
          "The atomic number counts protons; the mass number counts protons plus neutrons. Compare these two atomic quantities.",
        intro:
          "Two numbers describe any atom. One fixes which element it is; the other reflects how heavy that particular atom is.",
        pros_a: [
          "Counts the number of protons in the nucleus",
          "Defines which chemical element the atom is",
          "Always the same for every atom of an element",
          "Written as a subscript before the element symbol",
          "Equals the electron count in a neutral atom",
        ],
        pros_b: [
          "Counts protons plus neutrons in the nucleus",
          "Reflects the atom's overall mass",
          "Can differ between isotopes of the same element",
          "Written as a superscript before the element symbol",
          "Found by adding the proton and neutron counts",
        ],
        verdict:
          "The atomic number tells you the element; the mass number tells you the isotope. Subtract the atomic number from the mass number and you get the neutron count.",
        faq: [
          {
            q: "How do you find the number of neutrons?",
            a: "Subtract the atomic number from the mass number.",
          },
          {
            q: "Can two atoms share an atomic number but differ in mass number?",
            a: "Yes. Those are isotopes — same element, different neutron counts.",
          },
          {
            q: "Which number defines the element?",
            a: "The atomic number, the proton count, uniquely identifies the element.",
          },
        ],
      },
      fr: {
        title: "Numéro atomique vs Nombre de masse expliqués",
        h1: "Numéro atomique vs Nombre de masse : identifier les atomes",
        description:
          "Le numéro atomique compte les protons ; le nombre de masse les protons plus les neutrons. Comparez ces deux grandeurs.",
        intro:
          "Deux nombres décrivent tout atome. L'un fixe de quel élément il s'agit, l'autre reflète la masse de cet atome précis.",
        pros_a: [
          "Compte le nombre de protons dans le noyau",
          "Définit de quel élément chimique l'atome est",
          "Toujours identique pour chaque atome d'un élément",
          "Écrit en indice avant le symbole de l'élément",
          "Égale le nombre d'électrons dans un atome neutre",
        ],
        pros_b: [
          "Compte les protons plus les neutrons du noyau",
          "Reflète la masse globale de l'atome",
          "Peut différer entre isotopes d'un même élément",
          "Écrit en exposant avant le symbole de l'élément",
          "Trouvé en additionnant protons et neutrons",
        ],
        verdict:
          "Le numéro atomique indique l'élément ; le nombre de masse indique l'isotope. Soustrayez le numéro atomique du nombre de masse et vous obtenez le nombre de neutrons.",
        faq: [
          {
            q: "Comment trouve-t-on le nombre de neutrons ?",
            a: "On soustrait le numéro atomique du nombre de masse.",
          },
          {
            q: "Deux atomes peuvent-ils partager un numéro atomique mais différer de nombre de masse ?",
            a: "Oui. Ce sont des isotopes — même élément, nombres de neutrons différents.",
          },
          {
            q: "Quel nombre définit l'élément ?",
            a: "Le numéro atomique, le nombre de protons, identifie l'élément de façon unique.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "convex-vs-concave-mirror",
    a: "Convex mirror",
    b: "Concave mirror",
    category: "science",
    emoji_a: "🪞",
    emoji_b: "🔆",
    content: {
      en: {
        title: "Convex vs Concave Mirror Explained",
        h1: "Convex vs Concave Mirror: Curved Reflection",
        description:
          "A convex mirror bulges outward and spreads light; a concave mirror curves inward and focuses it. Compare these mirrors.",
        intro:
          "Curved mirrors reflect light differently than flat ones. Whether the surface bulges out or curves in changes the image entirely.",
        pros_a: [
          "Reflecting surface bulges outward",
          "Spreads reflected light rays apart",
          "Always forms a small, upright virtual image",
          "Gives a wide field of view",
          "Used in car side mirrors and security mirrors",
        ],
        pros_b: [
          "Reflecting surface curves inward",
          "Converges reflected light rays to a focal point",
          "Can form real or virtual, magnified or reduced images",
          "Used in telescopes, headlights and shaving mirrors",
          "The image depends on the object's distance",
        ],
        verdict:
          "A convex mirror spreads light and shows a wide, shrunken view, ideal for safety. A concave mirror focuses light and can magnify, which makes it useful in telescopes and headlights.",
        faq: [
          {
            q: "Why do cars use convex side mirrors?",
            a: "Convex mirrors give a wide field of view, helping drivers see more of the road behind them.",
          },
          {
            q: "Which mirror can magnify your face?",
            a: "A concave mirror produces a magnified, upright image when you are close to it.",
          },
          {
            q: "Which mirror focuses light to a point?",
            a: "A concave mirror converges parallel light rays to a focal point.",
          },
        ],
      },
      fr: {
        title: "Miroir convexe vs concave expliqué",
        h1: "Miroir convexe vs concave : la réflexion courbe",
        description:
          "Un miroir convexe bombe vers l'extérieur et disperse la lumière ; un concave se courbe vers l'intérieur et la focalise.",
        intro:
          "Les miroirs courbes réfléchissent la lumière autrement que les plats. Que la surface bombe ou se creuse change totalement l'image.",
        pros_a: [
          "La surface réfléchissante bombe vers l'extérieur",
          "Disperse les rayons de lumière réfléchis",
          "Forme toujours une petite image virtuelle droite",
          "Offre un large champ de vision",
          "Utilisé dans les rétroviseurs et les miroirs de sécurité",
        ],
        pros_b: [
          "La surface réfléchissante se courbe vers l'intérieur",
          "Fait converger les rayons réfléchis en un foyer",
          "Peut former des images réelles ou virtuelles, agrandies ou réduites",
          "Utilisé dans les télescopes, phares et miroirs de rasage",
          "L'image dépend de la distance de l'objet",
        ],
        verdict:
          "Un miroir convexe disperse la lumière et montre une vue large et rétrécie, idéale pour la sécurité. Un miroir concave focalise la lumière et peut grossir, d'où son usage en télescope et phare.",
        faq: [
          {
            q: "Pourquoi les voitures utilisent-elles des rétroviseurs convexes ?",
            a: "Les miroirs convexes offrent un large champ de vision, aidant les conducteurs à voir plus de la route derrière.",
          },
          {
            q: "Quel miroir peut grossir votre visage ?",
            a: "Un miroir concave produit une image agrandie et droite quand vous en êtes proche.",
          },
          {
            q: "Quel miroir focalise la lumière en un point ?",
            a: "Un miroir concave fait converger les rayons parallèles en un foyer.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "absolute-vs-apparent-magnitude",
    a: "Absolute magnitude",
    b: "Apparent magnitude",
    category: "science",
    emoji_a: "✨",
    emoji_b: "👁️",
    content: {
      en: {
        title: "Absolute vs Apparent Magnitude of Stars",
        h1: "Absolute vs Apparent Magnitude: True vs Seen Brightness",
        description:
          "Absolute magnitude is a star's true brightness; apparent magnitude is how bright it looks from Earth. Compare both.",
        intro:
          "A star's brightness can be measured two ways. One reflects how it truly shines; the other depends on how far away it is.",
        pros_a: [
          "Measures a star's true, intrinsic brightness",
          "Defined as brightness seen from a fixed standard distance",
          "Does not depend on the star's distance from Earth",
          "Lets astronomers compare stars fairly",
          "A more negative value means a more luminous star",
        ],
        pros_b: [
          "Measures how bright a star appears from Earth",
          "Strongly affected by the star's distance",
          "A nearby dim star can outshine a distant bright one",
          "What the eye actually sees in the night sky",
          "A more negative value means a brighter-looking object",
        ],
        verdict:
          "Apparent magnitude is brightness as seen; absolute magnitude is brightness as it truly is. A faint-looking star may be a powerful giant simply far away, which absolute magnitude reveals.",
        faq: [
          {
            q: "Why does a bright-looking star not mean a powerful star?",
            a: "Apparent brightness depends on distance; a nearby modest star can look brighter than a distant giant.",
          },
          {
            q: "What does absolute magnitude control for?",
            a: "It removes distance by comparing all stars as if seen from the same standard distance.",
          },
          {
            q: "Does a lower magnitude number mean brighter?",
            a: "Yes. The magnitude scale runs backward, so smaller and more negative numbers mean brighter.",
          },
        ],
      },
      fr: {
        title: "Magnitude absolue vs apparente des étoiles",
        h1: "Magnitude absolue vs apparente : éclat vrai vs perçu",
        description:
          "La magnitude absolue est l'éclat vrai d'une étoile ; l'apparente son éclat vu depuis la Terre. Comparez les deux.",
        intro:
          "L'éclat d'une étoile se mesure de deux façons. L'une reflète comment elle brille vraiment, l'autre dépend de sa distance.",
        pros_a: [
          "Mesure l'éclat vrai et intrinsèque d'une étoile",
          "Définie comme l'éclat vu d'une distance standard fixe",
          "Ne dépend pas de la distance de l'étoile à la Terre",
          "Permet aux astronomes de comparer équitablement les étoiles",
          "Une valeur plus négative signifie une étoile plus lumineuse",
        ],
        pros_b: [
          "Mesure l'éclat apparent d'une étoile depuis la Terre",
          "Fortement affectée par la distance de l'étoile",
          "Une étoile faible et proche peut éclipser une lointaine brillante",
          "Ce que l'œil voit réellement dans le ciel nocturne",
          "Une valeur plus négative signifie un objet plus brillant en apparence",
        ],
        verdict:
          "La magnitude apparente est l'éclat tel que vu ; l'absolue l'éclat tel qu'il est. Une étoile d'allure faible peut être une géante puissante simplement lointaine, ce que révèle la magnitude absolue.",
        faq: [
          {
            q: "Pourquoi une étoile d'allure brillante n'est-elle pas forcément puissante ?",
            a: "L'éclat apparent dépend de la distance ; une étoile modeste proche peut paraître plus brillante qu'une géante lointaine.",
          },
          {
            q: "Que neutralise la magnitude absolue ?",
            a: "Elle supprime la distance en comparant toutes les étoiles comme vues d'une même distance standard.",
          },
          {
            q: "Un nombre de magnitude plus bas signifie-t-il plus brillant ?",
            a: "Oui. L'échelle de magnitude est inversée : des nombres plus petits et négatifs signifient plus brillant.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "mean-vs-mode",
    a: "Mean",
    b: "Mode",
    category: "science",
    emoji_a: "📊",
    emoji_b: "🔝",
    content: {
      en: {
        title: "Mean vs Mode: Two Measures of Average",
        h1: "Mean vs Mode: Average Value vs Most Common",
        description:
          "The mean is the arithmetic average; the mode is the most frequent value. Compare these two measures of central tendency.",
        intro:
          "Statistics offers several kinds of average. Mean and mode answer different questions about the center of a dataset.",
        pros_a: [
          "The sum of all values divided by the count",
          "Uses every data point in its calculation",
          "Works only with numerical data",
          "Sensitive to extreme outliers",
          "There is always exactly one mean",
        ],
        pros_b: [
          "The value that appears most often in the data",
          "Found by counting frequency, not calculating",
          "Works with numbers and with categories",
          "Unaffected by extreme outliers",
          "A dataset can have one, several or no mode",
        ],
        verdict:
          "The mean balances all values into a single average; the mode simply names the most common value. Use the mean for numeric data and the mode when you need the most frequent category.",
        faq: [
          {
            q: "Can the mode be used for non-numeric data?",
            a: "Yes. Unlike the mean, the mode works for categories such as favorite color.",
          },
          {
            q: "Can a dataset have more than one mode?",
            a: "Yes. A dataset can be bimodal or multimodal, or have no mode if no value repeats.",
          },
          {
            q: "Which average is affected by outliers?",
            a: "The mean. The mode ignores outliers because it only counts frequency.",
          },
        ],
      },
      fr: {
        title: "Moyenne vs Mode : deux mesures de moyenne",
        h1: "Moyenne vs Mode : valeur moyenne vs la plus fréquente",
        description:
          "La moyenne est la moyenne arithmétique ; le mode la valeur la plus fréquente. Comparez ces deux mesures de tendance centrale.",
        intro:
          "La statistique offre plusieurs types de moyenne. Moyenne et mode répondent à des questions différentes sur le centre d'un jeu de données.",
        pros_a: [
          "La somme de toutes les valeurs divisée par le nombre",
          "Utilise chaque point de données dans son calcul",
          "Ne fonctionne qu'avec des données numériques",
          "Sensible aux valeurs extrêmes",
          "Il y a toujours exactement une moyenne",
        ],
        pros_b: [
          "La valeur qui apparaît le plus souvent dans les données",
          "Trouvé en comptant la fréquence, sans calcul",
          "Fonctionne avec des nombres et avec des catégories",
          "Non affecté par les valeurs extrêmes",
          "Un jeu de données peut avoir un, plusieurs ou aucun mode",
        ],
        verdict:
          "La moyenne équilibre toutes les valeurs en une seule ; le mode nomme simplement la valeur la plus fréquente. Moyenne pour les données numériques, mode pour la catégorie la plus fréquente.",
        faq: [
          {
            q: "Le mode peut-il servir pour des données non numériques ?",
            a: "Oui. Contrairement à la moyenne, le mode fonctionne pour des catégories comme la couleur préférée.",
          },
          {
            q: "Un jeu de données peut-il avoir plus d'un mode ?",
            a: "Oui. Un jeu peut être bimodal ou multimodal, ou n'avoir aucun mode si aucune valeur ne se répète.",
          },
          {
            q: "Quelle moyenne est affectée par les valeurs extrêmes ?",
            a: "La moyenne. Le mode ignore les valeurs extrêmes car il ne compte que la fréquence.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "terrestrial-planet-vs-gas-giant",
    a: "Terrestrial planet",
    b: "Gas giant",
    category: "science",
    emoji_a: "🌍",
    emoji_b: "🪐",
    content: {
      en: {
        title: "Terrestrial Planet vs Gas Giant Compared",
        h1: "Terrestrial Planet vs Gas Giant: Two Planet Types",
        description:
          "Terrestrial planets are small and rocky; gas giants are huge and gaseous. Compare these two classes of planet.",
        intro:
          "The planets of our solar system fall into two broad families, shaped by where they formed relative to the Sun.",
        pros_a: [
          "Small, dense and made mostly of rock and metal",
          "Has a solid surface you could stand on",
          "Includes Mercury, Venus, Earth and Mars",
          "Orbits closer to the Sun in the inner solar system",
          "Has few or no moons",
        ],
        pros_b: [
          "Huge and made mostly of hydrogen and helium",
          "Has no solid surface, only deep gaseous layers",
          "Includes Jupiter and Saturn",
          "Orbits far from the Sun in the outer solar system",
          "Has many moons and often a ring system",
        ],
        verdict:
          "Terrestrial planets are small rocky worlds with solid ground; gas giants are vast balls of gas with no surface. The two types reflect the cold or warm conditions where each formed.",
        faq: [
          {
            q: "Could you stand on a gas giant?",
            a: "No. Gas giants have no solid surface — just increasingly dense layers of gas and liquid.",
          },
          {
            q: "Why do gas giants have so many moons?",
            a: "Their immense mass and gravity captured and held more orbiting bodies during formation.",
          },
          {
            q: "What are Uranus and Neptune classified as?",
            a: "They are often called ice giants, a distinct subgroup rich in icy compounds.",
          },
        ],
      },
      fr: {
        title: "Planète tellurique vs Géante gazeuse comparées",
        h1: "Planète tellurique vs Géante gazeuse : deux types de planètes",
        description:
          "Les planètes telluriques sont petites et rocheuses ; les géantes gazeuses énormes et gazeuses. Comparez ces deux classes.",
        intro:
          "Les planètes de notre système solaire forment deux grandes familles, façonnées par leur lieu de formation par rapport au Soleil.",
        pros_a: [
          "Petite, dense et faite surtout de roche et de métal",
          "Possède une surface solide où l'on pourrait se tenir",
          "Inclut Mercure, Vénus, la Terre et Mars",
          "Orbite plus près du Soleil, dans le système solaire interne",
          "A peu ou pas de lunes",
        ],
        pros_b: [
          "Énorme et faite surtout d'hydrogène et d'hélium",
          "N'a pas de surface solide, seulement de profondes couches gazeuses",
          "Inclut Jupiter et Saturne",
          "Orbite loin du Soleil, dans le système solaire externe",
          "A de nombreuses lunes et souvent un système d'anneaux",
        ],
        verdict:
          "Les planètes telluriques sont de petits mondes rocheux à sol solide ; les géantes gazeuses de vastes boules de gaz sans surface. Les deux types reflètent les conditions froides ou chaudes de leur formation.",
        faq: [
          {
            q: "Pourrait-on se tenir sur une géante gazeuse ?",
            a: "Non. Les géantes gazeuses n'ont pas de surface solide — seulement des couches de gaz et de liquide de plus en plus denses.",
          },
          {
            q: "Pourquoi les géantes gazeuses ont-elles tant de lunes ?",
            a: "Leur masse et gravité immenses ont capturé et retenu plus de corps en orbite lors de leur formation.",
          },
          {
            q: "Comment Uranus et Neptune sont-elles classées ?",
            a: "Elles sont souvent appelées géantes de glace, un sous-groupe distinct riche en composés glacés.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
];
