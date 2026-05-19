import type { Quiz } from "../types";

export const animauxNatureQuizzes: Quiz[] = [
  {
    slug: "quiz-animaux-etranges-meconnus",
    title: "Quiz animaux étranges : axolotl, tardigrade, pangolin",
    description: "Axolotl rose, tardigrade indestructible, pangolin écailleux : 10 questions pour tester ce que tu sais des animaux les plus bizarres de la planète.",
    topic: "animaux",
    emoji: "🦎",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "Quelle est la super-capacité la plus connue de l'axolotl ?",
        options: ["Voler de nuit", "Régénérer ses membres", "Changer de sexe", "Vivre 200 ans"],
        correct: 1,
        explainer: "L'axolotl, salamandre originaire du lac Xochimilco au Mexique, peut repousser entièrement une patte, sa queue, sa moelle épinière et même des parties de son cœur ou de son cerveau, ce qui en fait une star de la recherche en médecine régénérative."
      },
      {
        q: "Le tardigrade (ourson d'eau) a survécu à quel environnement extrême ?",
        options: ["Le vide spatial", "Le noyau d'un réacteur nucléaire", "Le centre de la Terre", "Le Soleil"],
        correct: 0,
        explainer: "En 2007, des tardigrades ont été exposés au vide et aux radiations de l'espace lors de la mission TARDIS, et certains ont survécu puis se sont reproduits, grâce à leur capacité de cryptobiose qui suspend leur métabolisme."
      },
      {
        q: "Le pangolin est le seul mammifère au monde à être entièrement recouvert de…",
        options: ["Poils urticants", "Écailles de kératine", "Plumes", "Plaques osseuses"],
        correct: 1,
        explainer: "Ses écailles sont faites de kératine, la même protéine que nos ongles. Cette particularité en fait malheureusement l'un des mammifères les plus braconnés au monde, ses écailles étant prisées dans certaines médecines traditionnelles."
      },
      {
        q: "Combien de cœurs possède une pieuvre ?",
        options: ["Un seul", "Deux", "Trois", "Cinq"],
        correct: 2,
        explainer: "La pieuvre a trois cœurs : un cœur principal qui pompe le sang vers le corps et deux cœurs branchiaux qui envoient le sang vers les branchies pour l'oxygéner. Son sang est bleu à cause de l'hémocyanine."
      },
      {
        q: "Le narval est célèbre pour quelle particularité ?",
        options: ["Sa longue défense torsadée", "Ses ailes rétractables", "Sa carapace dorée", "Ses huit yeux"],
        correct: 0,
        explainer: "La défense du narval mâle est en réalité une canine gauche qui transperce la lèvre supérieure et peut atteindre 3 mètres. Elle est richement innervée et servirait à détecter les variations chimiques de l'eau."
      },
      {
        q: "Quel mammifère ovipare (pondeur d'œufs) vit en Australie ?",
        options: ["Le wombat", "L'ornithorynque", "Le koala", "Le quokka"],
        correct: 1,
        explainer: "L'ornithorynque est l'un des cinq seuls mammifères monotrèmes au monde : il pond des œufs comme un oiseau, possède un bec de canard, et le mâle a un éperon venimeux à la patte arrière."
      },
      {
        q: "Le blob (Physarum polycephalum) est…",
        options: ["Une algue rouge", "Un champignon", "Un protiste sans cerveau capable d'apprendre", "Un insecte microscopique"],
        correct: 2,
        explainer: "Le blob n'est ni animal, ni végétal, ni champignon : c'est un organisme unicellulaire géant qui peut résoudre des labyrinthes et mémoriser des informations sans posséder le moindre neurone."
      },
      {
        q: "Pourquoi l'aye-aye, un lémurien de Madagascar, est-il si étrange ?",
        options: ["Il a un doigt très allongé pour pêcher des larves", "Il change de couleur la nuit", "Il a des ailes membraneuses", "Il hiberne 9 mois par an"],
        correct: 0,
        explainer: "L'aye-aye tape sur l'écorce pour localiser des larves par écholocation, puis utilise son majeur extrêmement allongé et fin pour les extraire. Cette technique de chasse, dite percussive foraging, est unique chez les primates."
      },
      {
        q: "Le poisson-lune (môle) peut peser jusqu'à environ…",
        options: ["50 kg", "300 kg", "1 tonne", "2,3 tonnes"],
        correct: 3,
        explainer: "Le Mola mola est le plus lourd des poissons osseux connus, avec des spécimens atteignant 2,3 tonnes. Il pond aussi le plus grand nombre d'œufs de tous les vertébrés : jusqu'à 300 millions à la fois."
      },
      {
        q: "Le rat-taupe nu est célèbre car il…",
        options: ["Vole en nuée", "Ne ressent presque pas la douleur et résiste au cancer", "Est le plus rapide du désert", "Brille dans le noir"],
        correct: 1,
        explainer: "Ce petit mammifère eusocial d'Afrique de l'Est vit jusqu'à 30 ans, ne développe quasiment jamais de cancer et est insensible à plusieurs formes de douleur, ce qui en fait un modèle fascinant pour la recherche médicale."
      }
    ]
  },
  {
    slug: "quiz-mammiferes-marins-baleines-dauphins",
    title: "Quiz mammifères marins : baleines, dauphins, orques",
    description: "Du chant des baleines à bosse à l'intelligence des orques, 11 questions pour plonger dans le monde fascinant des cétacés et autres mammifères marins.",
    topic: "animaux",
    emoji: "🐬",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "Quel est le plus grand animal ayant jamais existé sur Terre ?",
        options: ["Le tyrannosaure", "L'éléphant d'Afrique", "La baleine bleue", "Le diplodocus"],
        correct: 2,
        explainer: "La baleine bleue peut atteindre 30 mètres et 190 tonnes, surpassant tous les dinosaures connus. Son cœur pèse environ 180 kg et sa langue à elle seule peut peser autant qu'un éléphant."
      },
      {
        q: "Les orques appartiennent en réalité à la famille des…",
        options: ["Requins", "Dauphins", "Baleines à fanons", "Phoques"],
        correct: 1,
        explainer: "Malgré leur nom anglais killer whale, les orques (Orcinus orca) sont les plus grands membres de la famille des delphinidés. Leur intelligence sociale et leurs cultures de chasse distinctes selon les populations sont étudiées depuis des décennies."
      },
      {
        q: "Comment les baleines à bosse communiquent-elles à très longue distance ?",
        options: ["Par bioluminescence", "Par des chants complexes", "Par télépathie", "Par bulles d'air"],
        correct: 1,
        explainer: "Les mâles produisent de longs chants structurés qui peuvent durer plus de 20 minutes et porter sur des dizaines de kilomètres. Les chants évoluent au fil des saisons et se propagent entre populations comme une mode."
      },
      {
        q: "Le dauphin dort en gardant…",
        options: ["Les deux yeux ouverts", "Un hémisphère cérébral éveillé", "La tête hors de l'eau", "La queue en surface"],
        correct: 1,
        explainer: "Les dauphins pratiquent le sommeil unihémisphérique : un hémisphère du cerveau dort pendant que l'autre reste actif pour continuer à respirer en surface et surveiller les prédateurs."
      },
      {
        q: "Quel cétacé possède la plus longue migration documentée ?",
        options: ["Le cachalot", "La baleine grise", "Le rorqual commun", "Le marsouin"],
        correct: 1,
        explainer: "La baleine grise migre chaque année entre la mer de Béring et les lagunes du Mexique, parcourant jusqu'à 22 000 km aller-retour, l'une des plus longues migrations connues chez les mammifères."
      },
      {
        q: "Le cachalot est célèbre pour…",
        options: ["Plonger à plus de 2 000 m de profondeur", "Voler hors de l'eau", "Vivre uniquement en eau douce", "Manger des algues"],
        correct: 0,
        explainer: "Le cachalot est le mammifère qui plonge le plus profond, dépassant 2 000 mètres pour chasser le calmar géant. Il peut retenir sa respiration plus d'une heure grâce à sa myoglobine très concentrée."
      },
      {
        q: "Les fanons de baleine servent à…",
        options: ["Filtrer le plancton", "Détecter les prédateurs", "Naviguer la nuit", "Garder la chaleur"],
        correct: 0,
        explainer: "Les baleines à fanons (mysticètes) n'ont pas de dents : elles avalent d'énormes volumes d'eau puis l'expulsent à travers leurs fanons en kératine, qui retiennent le krill, les petits poissons et le plancton."
      },
      {
        q: "Le bélouga est surnommé…",
        options: ["Le clown de la banquise", "Le requin blanc", "Le canari des mers", "Le tigre du Nord"],
        correct: 2,
        explainer: "Surnommé canari des mers à cause de sa palette de sifflements, clics et trilles très audibles, le bélouga est aussi l'un des rares cétacés à pouvoir bouger sa tête latéralement grâce à ses vertèbres cervicales non fusionnées."
      },
      {
        q: "Le lamantin est aussi appelé…",
        options: ["Hippocampe géant", "Vache marine", "Phoque doré", "Roi des récifs"],
        correct: 1,
        explainer: "Surnommé vache marine, le lamantin est un siréniens herbivore qui broute paisiblement les herbes marines. Malgré son apparence, son plus proche parent terrestre serait l'éléphant."
      },
      {
        q: "Combien de temps peut durer la gestation d'une orque ?",
        options: ["3 mois", "8 mois", "12 mois", "17 mois"],
        correct: 3,
        explainer: "Les orques ont l'une des plus longues gestations chez les cétacés, autour de 15 à 18 mois. Les femelles élèvent aussi leurs petits pendant des années dans des matrilignées très structurées."
      },
      {
        q: "Quelle espèce de dauphin remonte le fleuve Amazone ?",
        options: ["Le dauphin bleu et blanc", "Le dauphin rose (boto)", "Le dauphin de Risso", "Le marsouin commun"],
        correct: 1,
        explainer: "Le boto, ou dauphin rose de l'Amazone, vit en eau douce et adopte une coloration rosée à l'âge adulte, surtout chez les mâles. Sa vue est faible, mais son sonar lui permet de chasser dans des eaux très troubles."
      }
    ]
  },
  {
    slug: "quiz-oiseaux-rapaces-exotiques",
    title: "Quiz oiseaux : rapaces, perroquets et oiseaux exotiques",
    description: "Aigle royal, ara hyacinthe, oiseau-lyre : 10 questions pour reconnaître les rapaces, les perroquets et les oiseaux les plus spectaculaires du monde.",
    topic: "animaux",
    emoji: "🦅",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "Quel oiseau peut voler à plus de 350 km/h en piqué ?",
        options: ["L'aigle royal", "Le faucon pèlerin", "Le condor des Andes", "Le martinet"],
        correct: 1,
        explainer: "Le faucon pèlerin est l'animal le plus rapide de la planète : en piqué pour fondre sur sa proie, il dépasse 350 km/h. Des narines spéciales et une membrane nictitante le protègent du flux d'air."
      },
      {
        q: "Quel grand rapace plane sur les Andes grâce à ses 3 mètres d'envergure ?",
        options: ["Le condor des Andes", "Le pygargue à tête blanche", "Le vautour fauve", "L'aigle harpie"],
        correct: 0,
        explainer: "Le condor des Andes atteint près de 3,2 m d'envergure, ce qui en fait l'un des plus grands oiseaux capables de voler. Il utilise les courants ascendants pour planer des heures sans battre des ailes."
      },
      {
        q: "Le plus grand perroquet du monde, au plumage bleu cobalt, est…",
        options: ["Le cacatoès soufré", "L'ara hyacinthe", "Le perroquet gris du Gabon", "L'amazone à front bleu"],
        correct: 1,
        explainer: "L'ara hyacinthe peut atteindre 1 mètre du bec à la queue. Son bec est si puissant qu'il casse les noix de palme les plus dures, et son plumage bleu en fait une cible majeure du trafic d'animaux."
      },
      {
        q: "Le kiwi est un oiseau endémique de…",
        options: ["L'Australie", "La Nouvelle-Zélande", "Madagascar", "L'Indonésie"],
        correct: 1,
        explainer: "Symbole national de la Nouvelle-Zélande, le kiwi est un oiseau nocturne incapable de voler. Il pond l'un des plus gros œufs au monde par rapport à sa taille (jusqu'à 20 % du poids de la femelle)."
      },
      {
        q: "Quel oiseau est célèbre pour imiter parfaitement tous les sons qu'il entend ?",
        options: ["Le toucan toco", "L'oiseau-lyre superbe", "Le quetzal", "Le calao bicorne"],
        correct: 1,
        explainer: "L'oiseau-lyre superbe d'Australie imite à la perfection chants d'autres oiseaux, tronçonneuses, alarmes de voiture ou clics d'appareil photo. Le mâle déploie aussi une queue spectaculaire en forme de lyre pour parader."
      },
      {
        q: "Le calao bicorne se distingue par…",
        options: ["Sa langue bleue", "Un casque osseux au-dessus du bec", "Sa capacité à hiberner", "Sa plume unique sur le crâne"],
        correct: 1,
        explainer: "Ce grand oiseau asiatique arbore un casque jaune et noir, en kératine, qui amplifie ses cris. La femelle s'enferme dans une cavité d'arbre scellée par de la boue pour couver, nourrie par le mâle à travers une fente."
      },
      {
        q: "Quel oiseau marin parcourt de pôle à pôle chaque année ?",
        options: ["Le fou de Bassan", "Le manchot empereur", "La sterne arctique", "Le goéland argenté"],
        correct: 2,
        explainer: "La sterne arctique détient le record absolu de migration : elle fait la navette entre l'Arctique et l'Antarctique chaque année, parcourant souvent plus de 70 000 km, soit l'équivalent de plusieurs fois le tour de la Terre dans sa vie."
      },
      {
        q: "Le colibri bat des ailes en moyenne combien de fois par seconde ?",
        options: ["5 fois", "20 fois", "50 fois", "200 fois"],
        correct: 2,
        explainer: "Selon les espèces, le colibri bat des ailes 50 à 80 fois par seconde, ce qui produit son bourdonnement caractéristique. C'est le seul oiseau capable de faire du vol stationnaire et même de voler à reculons."
      },
      {
        q: "Quelle chouette est la plus grande du monde ?",
        options: ["La chouette effraie", "Le grand-duc d'Europe", "Le harfang des neiges", "La chevêchette"],
        correct: 1,
        explainer: "Avec près de 1,8 m d'envergure, le grand-duc d'Europe (hibou grand-duc) est le plus grand rapace nocturne du monde. Ses aigrettes sur la tête ne sont pas des oreilles mais des touffes de plumes décoratives."
      },
      {
        q: "Le quetzal resplendissant, oiseau sacré des Mayas, vit principalement…",
        options: ["Dans les forêts d'altitude d'Amérique centrale", "Dans le désert du Sahara", "Dans la taïga sibérienne", "Sur les côtes japonaises"],
        correct: 0,
        explainer: "Le quetzal vit dans les forêts de nuages du Mexique au Panama. Les Mayas et Aztèques vénéraient ses longues plumes vertes, réservées aux chefs et aux prêtres, et le considéraient comme l'incarnation du dieu Quetzalcoatl."
      }
    ]
  },
  {
    slug: "quiz-serpents-venins-poisons",
    title: "Quiz serpents, venins et animaux venimeux mortels",
    description: "Cobra royal, mamba noir, méduse-boîte, grenouille dorée : 10 questions sur les animaux les plus venimeux et toxiques de la planète.",
    topic: "animaux",
    emoji: "🐍",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "Quel est le serpent le plus venimeux du monde au goutte-à-goutte ?",
        options: ["Le cobra royal", "Le mamba noir", "Le taïpan du désert (inland taipan)", "La vipère du Gabon"],
        correct: 2,
        explainer: "Le taïpan du désert d'Australie possède le venin terrestre le plus toxique connu : une seule morsure contient assez de venin pour tuer une centaine d'adultes. Heureusement, c'est un serpent timide qui mord très rarement les humains."
      },
      {
        q: "Pourquoi un animal est-il dit venimeux et pas seulement toxique ?",
        options: ["Il inocule activement sa toxine (morsure, dard)", "Il vit dans l'eau", "Il a des couleurs vives", "Il chasse la nuit"],
        correct: 0,
        explainer: "Un animal venimeux injecte son poison via crochets, dards ou aiguillons. À l'inverse, un animal toxique l'est passivement quand on le touche ou le mange (comme certaines grenouilles ou poissons-globes)."
      },
      {
        q: "La grenouille la plus toxique au monde est…",
        options: ["La rainette verte", "La phyllobate terrible (grenouille dorée)", "Le crapaud commun", "La grenouille rieuse"],
        correct: 1,
        explainer: "Endémique de Colombie, la phyllobate terrible porte assez de batrachotoxine sur sa peau pour tuer plusieurs adultes. Les Emberá enduisaient leurs sarbacanes de son poison, d'où son surnom de poison dart frog."
      },
      {
        q: "Quel céphalopode minuscule possède un venin neurotoxique fatal ?",
        options: ["La pieuvre à anneaux bleus", "La seiche commune", "Le calmar géant", "Le nautile"],
        correct: 0,
        explainer: "La pieuvre à anneaux bleus, grande comme une balle de golf, vit dans l'océan Pacifique. Son venin contient de la tétrodotoxine et il n'existe pas d'antidote ; ses anneaux bleus iridescents sont un avertissement."
      },
      {
        q: "Pourquoi le fugu (poisson-globe) est-il dangereux ?",
        options: ["Il fait éclater l'estomac", "Il contient de la tétrodotoxine", "Il transmet la rage", "Il pique avec sa queue"],
        correct: 1,
        explainer: "Le fugu accumule la tétrodotoxine, qui paralyse les muscles respiratoires et n'a pas d'antidote. Au Japon, sa préparation est strictement réglementée et seuls des chefs licenciés peuvent le servir."
      },
      {
        q: "Le mamba noir d'Afrique est célèbre pour…",
        options: ["Sa lenteur", "Sa rapidité et son venin neurotoxique foudroyant", "Sa vie souterraine", "Sa capacité à voler"],
        correct: 1,
        explainer: "Le mamba noir peut filer à 20 km/h sur de courtes distances. Son venin combine neurotoxines et cardiotoxines et tuait quasi systématiquement avant l'existence du sérum antivenimeux."
      },
      {
        q: "L'animal le plus mortel pour l'humain chaque année est…",
        options: ["Le requin", "Le crocodile", "Le moustique", "Le lion"],
        correct: 2,
        explainer: "Les moustiques tuent plus de 700 000 personnes par an en transmettant paludisme, dengue, Zika ou fièvre jaune. À côté, les requins tuent en moyenne moins de dix humains par an dans le monde."
      },
      {
        q: "La méduse-boîte (Chironex fleckeri) vit principalement…",
        options: ["Dans la Méditerranée", "Au large de l'Australie", "Dans les Caraïbes", "En Arctique"],
        correct: 1,
        explainer: "La méduse-boîte des côtes nord-australiennes possède l'un des venins les plus puissants du règne animal. Ses tentacules peuvent provoquer un arrêt cardiaque en quelques minutes chez l'humain."
      },
      {
        q: "Quel serpent peut littéralement cracher son venin dans les yeux ?",
        options: ["Le boa constricteur", "Le cobra cracheur", "L'anaconda", "Le python royal"],
        correct: 1,
        explainer: "Plusieurs espèces de cobras cracheurs projettent leur venin jusqu'à 2-3 mètres en visant les yeux. Le venin provoque une douleur intense et peut causer une cécité s'il n'est pas rincé immédiatement."
      },
      {
        q: "Le cobra royal est unique car il…",
        options: ["Mange surtout d'autres serpents", "Vit uniquement dans le désert", "Est aveugle", "Ne dépasse jamais 50 cm"],
        correct: 0,
        explainer: "Le cobra royal (Ophiophagus hannah) se nourrit principalement d'autres serpents, y compris venimeux. Plus long serpent venimeux du monde (jusqu'à 5,5 m), il est le seul à construire un nid pour ses œufs."
      }
    ]
  },
  {
    slug: "quiz-animaux-nocturnes-comportements",
    title: "Quiz animaux nocturnes : chouettes, chauves-souris et plus",
    description: "Chauves-souris, hiboux, lémuriens, scorpions fluorescents : 10 questions sur la vie secrète des animaux qui s'éveillent quand le soleil se couche.",
    topic: "animaux",
    emoji: "🦇",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "Comment la chauve-souris se repère-t-elle dans le noir ?",
        options: ["Avec sa vision infrarouge", "Par écholocation", "Avec son odorat", "Avec ses antennes"],
        correct: 1,
        explainer: "Les chauves-souris émettent des ultrasons par la bouche ou le nez, puis interprètent les échos pour cartographier leur environnement et localiser leurs proies, parfois un moustique en plein vol et en pleine nuit."
      },
      {
        q: "Pourquoi les yeux de chats brillent-ils la nuit ?",
        options: ["À cause d'un parasite", "Grâce au tapetum lucidum", "Parce qu'ils produisent de la lumière", "À cause de leurs larmes"],
        correct: 1,
        explainer: "Derrière la rétine, le tapetum lucidum est une couche réfléchissante qui renvoie la lumière sur les cellules visuelles, doublant la sensibilité nocturne. C'est ce miroir qui produit l'éclat caractéristique des yeux dans une lampe."
      },
      {
        q: "Le scorpion sous une lampe UV apparaît…",
        options: ["Rouge", "Jaune", "Fluorescent bleu-vert", "Transparent"],
        correct: 2,
        explainer: "La cuticule du scorpion contient des molécules qui fluorescent en bleu-vert sous UV. C'est très pratique pour les chercheurs, mais on ignore encore exactement à quoi cette fluorescence sert au scorpion lui-même."
      },
      {
        q: "Quel petit primate nocturne de Madagascar a d'énormes yeux jaunes ?",
        options: ["Le tarsier", "Le maki cata", "L'aye-aye", "Le microcèbe"],
        correct: 3,
        explainer: "Les microcèbes sont parmi les plus petits primates au monde (parfois 30 g). Comme d'autres lémuriens nocturnes, leurs grands yeux captent un maximum de lumière pour chasser insectes et fruits la nuit."
      },
      {
        q: "Le hibou peut tourner sa tête de combien de degrés ?",
        options: ["90°", "180°", "270°", "360°"],
        correct: 2,
        explainer: "Le hibou peut tourner sa tête jusqu'à environ 270°. Ses vertèbres adaptées et un système vasculaire particulier protègent son cerveau pendant ces rotations extrêmes, ce qui compense ses yeux quasi immobiles."
      },
      {
        q: "Quel animal nocturne d'Afrique chasse en groupe avec des cris stridents ?",
        options: ["Le lion", "Le guépard", "La hyène tachetée", "Le rhinocéros"],
        correct: 2,
        explainer: "La hyène tachetée est très active la nuit, vit en clans matriarcaux et coordonne ses chasses avec une vaste palette de cris, hululements et fameux rires qui servent à signaler nourriture, conflits ou position."
      },
      {
        q: "Pourquoi les lucioles produisent-elles de la lumière ?",
        options: ["Pour effrayer les prédateurs", "Pour séduire un partenaire", "Pour digérer", "Pour voir dans le noir"],
        correct: 1,
        explainer: "La bioluminescence des lucioles est un signal de séduction très précis : chaque espèce a son propre code de clignotements pour reconnaître ses partenaires. Cette lumière froide est produite par la réaction luciférine-luciférase."
      },
      {
        q: "Le loris lent est l'un des rares mammifères à être…",
        options: ["Aveugle de naissance", "Venimeux", "Capable de voler", "Sans cœur"],
        correct: 1,
        explainer: "Le loris lent a une glande venimeuse sur le coude. Il lèche cette glande, mélange la sécrétion à sa salive et inflige une morsure venimeuse qui peut provoquer un choc anaphylactique chez l'humain."
      },
      {
        q: "Pourquoi les chouettes volent-elles silencieusement ?",
        options: ["Elles n'ont pas de plumes", "Le bord de leurs plumes est dentelé", "Elles flottent magnétiquement", "Elles utilisent leur queue comme planeur"],
        correct: 1,
        explainer: "Les plumes primaires de la chouette ont un bord d'attaque en peigne et un duvet qui amortit les turbulences. Résultat : un vol quasi inaudible, idéal pour fondre sur une souris sans alerter sa cible."
      },
      {
        q: "Quel grand félin nocturne d'Amérique latine a la morsure la plus puissante ?",
        options: ["Le puma", "Le lynx", "Le jaguar", "L'ocelot"],
        correct: 2,
        explainer: "Le jaguar a la morsure la plus puissante de tous les grands félins par rapport à sa taille. Il peut transpercer le crâne de ses proies ou la carapace d'une tortue, et chasse souvent à la tombée de la nuit autour de l'eau."
      }
    ]
  },
  {
    slug: "quiz-faune-francaise-foret-montagne",
    title: "Quiz faune française : loup, lynx, sanglier, gypaète",
    description: "Loup gris, lynx boréal, sanglier, ours brun, gypaète barbu : 10 questions sur les animaux sauvages emblématiques des forêts et montagnes françaises.",
    topic: "animaux",
    emoji: "🐺",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "Le loup gris est revenu naturellement en France dans les années 1990 par…",
        options: ["Les Pyrénées", "Le Massif central", "Les Alpes du Sud", "La Bretagne"],
        correct: 2,
        explainer: "Le loup gris a recolonisé la France par les Alpes du Sud depuis l'Italie en 1992, observé pour la première fois dans le Mercantour. Il s'est ensuite étendu vers le Jura, le Massif central et même le Grand Est."
      },
      {
        q: "Quel rapace barbu, charognard, a été réintroduit dans les Alpes et les Pyrénées ?",
        options: ["Le gypaète barbu", "L'aigle royal", "Le faucon crécerelle", "Le milan noir"],
        correct: 0,
        explainer: "Le gypaète barbu, plus grand rapace d'Europe avec près de 3 m d'envergure, est spécialisé dans la digestion des os. Quasi disparu en France, il a été réintroduit avec succès dans les Alpes depuis 1986."
      },
      {
        q: "Combien d'ours bruns vivent dans les Pyrénées françaises (estimation récente) ?",
        options: ["Aucun", "Une dizaine", "Plus de 70", "Plus de 500"],
        correct: 2,
        explainer: "Suite aux réintroductions d'ours slovènes depuis 1996, la population pyrénéenne dépasse aujourd'hui les 70 individus, principalement côté français des Pyrénées centrales et de l'Ariège."
      },
      {
        q: "Le lynx boréal en France se trouve surtout dans…",
        options: ["Les Vosges et le Jura", "La Camargue", "Le Médoc", "La Corse"],
        correct: 0,
        explainer: "Le lynx boréal, plus grand félin sauvage d'Europe, a recolonisé le Jura puis les Vosges depuis la Suisse. Discret et solitaire, il chasse surtout le chevreuil dans les forêts montagnardes."
      },
      {
        q: "Le sanglier a explosé en France à cause de…",
        options: ["L'augmentation des cultures de maïs", "La création d'autoroutes", "La diminution des forêts", "L'arrivée du loup"],
        correct: 0,
        explainer: "L'extension du maïs, des forêts mixtes et les hivers plus doux ont permis au sanglier de pulluler. Sa population française est passée de quelques dizaines de milliers dans les années 1970 à plus d'un million aujourd'hui."
      },
      {
        q: "Quel petit mustélidé semi-aquatique a failli disparaître de France à cause de la chasse ?",
        options: ["Le furet", "La loutre d'Europe", "L'hermine", "La marmotte"],
        correct: 1,
        explainer: "La loutre d'Europe, longtemps chassée pour sa fourrure et victime de la pollution des rivières, avait quasi disparu. Protégée depuis 1972, elle reconquiert peu à peu le Massif central, la Bretagne et le Sud-Ouest."
      },
      {
        q: "Le bouquetin des Alpes a été sauvé de l'extinction grâce à…",
        options: ["Une réserve royale en Italie", "Un programme russe", "Des zoos britanniques", "Le hasard"],
        correct: 0,
        explainer: "Tous les bouquetins des Alpes actuels descendent d'une centaine d'individus protégés au Grand-Paradis par les rois d'Italie au XIXe siècle. À partir de cette réserve, l'espèce a été réintroduite dans tous les massifs alpins."
      },
      {
        q: "Quel oiseau emblématique fait son nid dans les hautes falaises de Camargue ?",
        options: ["Le flamant rose", "Le balbuzard", "Le héron cendré", "Le grand corbeau"],
        correct: 0,
        explainer: "La Camargue accueille la plus importante colonie de flamants roses d'Europe. Ils nichent en îlots sur des plates-formes de boue dans les lagunes peu profondes, et leur couleur vient des caroténoïdes des petits crustacés qu'ils filtrent."
      },
      {
        q: "Le castor d'Europe en France vit surtout…",
        options: ["Sur les côtes bretonnes", "Le long du Rhône et de ses affluents", "Dans les Alpes du Nord", "En Corse"],
        correct: 1,
        explainer: "Quasi éteint au début du XXe siècle, le castor a été sauvé dans une petite zone du Rhône, puis réintroduit ailleurs. Il colonise aujourd'hui de nombreuses rivières françaises grâce à ses barrages qui restaurent les zones humides."
      },
      {
        q: "L'aigle royal niche en France principalement…",
        options: ["En Île-de-France", "Dans les massifs alpins et pyrénéens", "En Vendée", "Dans la baie de Somme"],
        correct: 1,
        explainer: "Avec plus de 400 couples, l'aigle royal niche surtout dans les Alpes, les Pyrénées et la Corse. Il préfère les vastes territoires de montagne où il chasse marmottes, lièvres et jeunes ongulés."
      }
    ]
  },
  {
    slug: "quiz-races-de-chiens-origines",
    title: "Quiz races de chiens : origines, traits et anecdotes",
    description: "Husky, border collie, shiba, dogue argentin : 10 questions pour reconnaître les races de chiens, leurs origines et leurs caractères.",
    topic: "animaux",
    emoji: "🐕",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "Le border collie est considéré comme la race de chien…",
        options: ["La plus rapide", "La plus intelligente", "La plus petite", "La plus rare"],
        correct: 1,
        explainer: "Selon les travaux du psychologue Stanley Coren, le border collie arrive en tête des races pour l'apprentissage d'ordres. Sélectionné pour le travail de berger en Angleterre et en Écosse, il a besoin d'un énorme stimuli mental."
      },
      {
        q: "Le husky sibérien a été élevé à l'origine pour…",
        options: ["Garder les troupeaux", "Tirer les traîneaux", "Chasser le sanglier", "La compagnie de la noblesse"],
        correct: 1,
        explainer: "Le husky vient des Tchouktches de Sibérie, qui l'ont sélectionné pour tirer des charges sur de très longues distances par grand froid. Son double pelage et ses pattes adaptées en font un coureur infatigable."
      },
      {
        q: "Le shiba inu est originaire de…",
        options: ["Chine", "Corée", "Japon", "Mongolie"],
        correct: 2,
        explainer: "Le shiba inu est une race japonaise très ancienne, sélectionnée pour la chasse en montagne. Il a failli disparaître après la Seconde Guerre mondiale, puis a explosé en popularité avec internet et le mème Doge."
      },
      {
        q: "Quel chien est associé à la légende du sauveteur des Alpes ?",
        options: ["Le saint-bernard", "Le terre-neuve", "Le berger allemand", "Le labrador"],
        correct: 0,
        explainer: "Les saint-bernards étaient utilisés par les moines de l'hospice du Grand-Saint-Bernard pour secourir les voyageurs perdus dans la neige. Le célèbre Barry aurait sauvé plus de 40 personnes au début du XIXe siècle."
      },
      {
        q: "Le chihuahua est le plus petit chien du monde et vient de…",
        options: ["Espagne", "Mexique", "Italie", "Argentine"],
        correct: 1,
        explainer: "Le chihuahua tire son nom de l'État mexicain de Chihuahua. Probable descendant du techichi des Toltèques, c'est aujourd'hui la plus petite race officielle, dépassant rarement 3 kg."
      },
      {
        q: "Le labrador est originellement un chien de…",
        options: ["Garde de châteaux", "Berger", "Travail de pêcheurs à Terre-Neuve", "Chasse en montagne"],
        correct: 2,
        explainer: "Le labrador descend des chiens d'eau de Terre-Neuve qui aidaient les pêcheurs à ramener filets et poissons. Son pelage huilé, sa queue de loutre et ses pattes palmées en font un excellent nageur."
      },
      {
        q: "Quel chien africain est célèbre pour ne presque pas aboyer ?",
        options: ["Le basenji", "Le boerboel", "Le rhodesian ridgeback", "Le sloughi"],
        correct: 0,
        explainer: "Le basenji, originaire d'Afrique centrale, n'aboie pas mais émet un son particulier appelé yodel à cause de la forme de son larynx. Il est aussi l'une des plus vieilles races canines connues."
      },
      {
        q: "Le caniche, malgré sa réputation, a été élevé à l'origine pour…",
        options: ["Tirer des charrettes", "Rapporter le gibier d'eau", "Garder les moutons", "Chasser les rats"],
        correct: 1,
        explainer: "Le mot caniche vient de cane (canard). C'est un excellent chien rapporteur de gibier d'eau, dont la tonte caractéristique servait à protéger ses articulations du froid tout en allégeant son arrière-train."
      },
      {
        q: "Quel chien italien à robe noire est connu pour son aboiement profond ?",
        options: ["Le bouledogue français", "Le cane corso", "Le berger des Pyrénées", "Le bichon havanais"],
        correct: 1,
        explainer: "Le cane corso est un molosse italien descendant des molosses romains. Élevé pour la garde et la chasse au sanglier, c'est un chien puissant qui demande une socialisation soignée et un maître expérimenté."
      },
      {
        q: "Le berger australien a en réalité été sélectionné principalement…",
        options: ["En Australie", "Aux États-Unis", "En Nouvelle-Zélande", "En Patagonie"],
        correct: 1,
        explainer: "Malgré son nom, le berger australien a été créé aux États-Unis, sans doute par des éleveurs basques venus via l'Australie. Sa robe merle et ses yeux souvent vairons en font une race très reconnaissable."
      }
    ]
  },
  {
    slug: "quiz-animaux-disparus-protection",
    title: "Quiz animaux disparus et espèces menacées",
    description: "Dodo, thylacine, tigre de Tasmanie, vaquita : 10 questions sur les espèces éteintes et celles que l'humain tente encore de sauver.",
    topic: "animaux",
    emoji: "🦣",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "Le dodo a disparu vers la fin du XVIIe siècle sur…",
        options: ["L'île de la Réunion", "Madagascar", "L'île Maurice", "Les Seychelles"],
        correct: 2,
        explainer: "Le dodo, gros oiseau incapable de voler endémique de l'île Maurice, a été décimé en quelques décennies par les marins, leurs cochons, rats et singes qui mangeaient ses œufs au sol. Il symbolise les extinctions causées par l'humain."
      },
      {
        q: "Le thylacine, dernier marsupial carnivore, vivait à…",
        options: ["Madagascar", "En Tasmanie", "En Patagonie", "En Nouvelle-Guinée"],
        correct: 1,
        explainer: "Surnommé tigre de Tasmanie pour ses rayures, le thylacine a été chassé par les colons et le dernier individu connu est mort au zoo de Hobart en 1936. Des projets contemporains tentent de le ressusciter par génétique."
      },
      {
        q: "Quelle est l'espèce de petit cétacé la plus menacée au monde ?",
        options: ["Le marsouin du Yang-Tsé", "La vaquita du golfe de Californie", "Le dauphin de Maui", "Le bélouga de la Saint-Laurent"],
        correct: 1,
        explainer: "La vaquita, marsouin endémique du golfe de Californie, ne compte plus qu'environ une dizaine d'individus. Elle est victime des filets maillants utilisés pour pêcher illégalement le totoaba, dont la vessie natatoire vaut une fortune."
      },
      {
        q: "Combien restait-il de rhinocéros blancs du Nord en 2025 ?",
        options: ["Plus de 5000", "Environ 500", "Une centaine", "Deux femelles"],
        correct: 3,
        explainer: "L'espèce est fonctionnellement éteinte : seules deux femelles, Najin et Fatu, sont encore en vie au Kenya. Des chercheurs tentent une fécondation in vitro à partir d'ovocytes et de sperme congelé pour préserver la lignée."
      },
      {
        q: "Le mammouth laineux a disparu il y a environ…",
        options: ["10 millions d'années", "100 000 ans", "4 000 ans", "500 ans"],
        correct: 2,
        explainer: "Les derniers mammouths ont survécu sur l'île Wrangel jusqu'à environ 4 000 ans avant notre ère, soit après la construction des premières pyramides. Changements climatiques et chasse humaine ont eu raison d'eux."
      },
      {
        q: "Le tigre est la plus grande espèce de félin et compte aujourd'hui environ…",
        options: ["Moins de 5 000 individus sauvages", "30 000", "100 000", "1 million"],
        correct: 0,
        explainer: "Il reste moins de 5 000 tigres à l'état sauvage, contre plus de 100 000 il y a un siècle. La déforestation et le braconnage continuent de menacer les neuf sous-espèces, dont trois sont déjà éteintes."
      },
      {
        q: "Le grand pingouin, oiseau marin disparu en 1844, vivait surtout…",
        options: ["En Antarctique", "Dans l'Atlantique Nord", "Au Pacifique sud", "En mer Méditerranée"],
        correct: 1,
        explainer: "Le grand pingouin, qui ressemblait à un manchot mais vivait dans l'Atlantique Nord, a été chassé pour ses plumes, sa chair et ses œufs. Les deux derniers individus connus ont été tués en Islande en 1844."
      },
      {
        q: "L'IUCN classe les espèces selon des catégories. Que signifie EW ?",
        options: ["En sécurité partout", "Éteinte à l'état sauvage", "Espèce sans données", "Espèce abondante"],
        correct: 1,
        explainer: "EW (Extinct in the Wild) désigne une espèce qui ne survit plus qu'en captivité ou dans des populations naturalisées hors de son aire d'origine, comme l'oryx d'Arabie réintroduit après son extinction sauvage."
      },
      {
        q: "Le grand panda doit sa survie surtout à…",
        options: ["Sa vitesse de reproduction", "L'élevage en captivité et la protection des bambouseraies", "Sa capacité à voler", "Son régime omnivore"],
        correct: 1,
        explainer: "La Chine a investi massivement dans des réserves de bambou et l'élevage en captivité depuis les années 1980. La population sauvage est remontée au-dessus de 1 800 individus et l'IUCN a reclassé l'espèce comme vulnérable plutôt qu'en danger."
      },
      {
        q: "Quel rongeur d'Australie est devenu le premier mammifère officiellement éteint à cause du réchauffement climatique ?",
        options: ["Le wombat", "Le bandicoot", "Le rat-mosaïque de Bramble Cay", "Le quokka"],
        correct: 2,
        explainer: "Le rat-mosaïque de Bramble Cay, qui vivait sur un minuscule îlot de la Grande Barrière, a été officiellement déclaré éteint en 2019. La montée des eaux et les tempêtes ont détruit son habitat unique."
      }
    ]
  },
  {
    slug: "quiz-savane-africaine-big-five",
    title: "Quiz savane africaine : lion, éléphant, rhinocéros, big five",
    description: "Lion, éléphant d'Afrique, léopard, buffle, rhinocéros : 10 questions sur la faune et les comportements des grands animaux de la savane africaine.",
    topic: "animaux",
    emoji: "🦁",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "Que désigne traditionnellement le big five en Afrique ?",
        options: ["Les cinq plus grands animaux", "Les cinq animaux les plus dangereux à chasser à pied", "Les cinq plus rapides", "Les cinq plus rares"],
        correct: 1,
        explainer: "Le terme big five a été inventé par les chasseurs de l'époque coloniale pour désigner les cinq animaux les plus difficiles et dangereux à chasser à pied : lion, éléphant d'Afrique, léopard, rhinocéros et buffle du Cap."
      },
      {
        q: "Dans une troupe de lions, qui chasse principalement ?",
        options: ["Les mâles dominants", "Les femelles en groupe", "Les jeunes mâles solitaires", "Les éclaireurs solitaires"],
        correct: 1,
        explainer: "Ce sont les lionnes qui chassent en coordination, encerclant les proies et utilisant l'effet de meute. Les mâles, plus lourds, défendent surtout le territoire contre d'autres mâles et profitent des prises."
      },
      {
        q: "Quel est l'animal terrestre le plus rapide ?",
        options: ["Le lion", "Le guépard", "L'autruche", "L'antilope pronghorn"],
        correct: 1,
        explainer: "Le guépard atteint 110 à 120 km/h sur quelques centaines de mètres. Son corps fin, ses griffes non rétractiles et sa longue queue qui sert de gouvernail en font une machine à sprinter spécialisée."
      },
      {
        q: "L'éléphant d'Afrique se distingue de l'éléphant d'Asie par…",
        options: ["Des oreilles beaucoup plus grandes", "L'absence de défenses", "Une trompe pliable en deux", "Un pelage épais"],
        correct: 0,
        explainer: "L'éléphant d'Afrique a de grandes oreilles en forme du continent africain qui aident à dissiper la chaleur, alors que l'éléphant d'Asie a des oreilles plus petites. Les Africains ont aussi deux doigts au bout de la trompe contre un seul chez l'Asiatique."
      },
      {
        q: "Combien d'œufs une autruche pond-elle environ par saison ?",
        options: ["2", "12", "60", "200"],
        correct: 2,
        explainer: "Plusieurs femelles peuvent pondre dans un même nid au sol surveillé par un couple dominant, atteignant souvent 40 à 60 œufs. L'œuf d'autruche est le plus gros œuf d'oiseau au monde, environ 1,5 kg."
      },
      {
        q: "Le rhinocéros blanc et le rhinocéros noir se différencient surtout par…",
        options: ["La couleur", "La forme de la bouche", "Le nombre de cornes", "La taille des oreilles"],
        correct: 1,
        explainer: "Le rhinocéros blanc a une lèvre large et carrée pour brouter l'herbe, tandis que le rhinocéros noir possède une lèvre supérieure préhensile pour saisir feuilles et brindilles. Leurs couleurs réelles sont en fait très proches."
      },
      {
        q: "Pourquoi les zèbres sont-ils rayés noir et blanc ?",
        options: ["Pour le camouflage thermique", "Pour repousser les mouches tsé-tsé et taons", "Pour briller au clair de lune", "Pour communiquer en morse"],
        correct: 1,
        explainer: "Plusieurs études récentes montrent que les rayures perturbent l'atterrissage des mouches piqueuses qui transmettent maladies et parasites. Le camouflage et la confusion en troupeau jouent aussi un rôle secondaire."
      },
      {
        q: "Quel grand singe vit dans les forêts humides d'Afrique centrale ?",
        options: ["L'orang-outan", "Le gorille des montagnes", "Le macaque rhésus", "Le gibbon"],
        correct: 1,
        explainer: "Le gorille des montagnes vit dans les forêts d'altitude du Rwanda, de la RDC et de l'Ouganda. Grâce aux efforts de Dian Fossey puis aux programmes d'écotourisme, sa population sauvage a doublé depuis les années 1980."
      },
      {
        q: "Le suricate vit en clans organisés dans le désert du…",
        options: ["Sahara", "Gobi", "Kalahari", "Mojave"],
        correct: 2,
        explainer: "Le suricate vit dans le désert du Kalahari en Afrique australe. Les sentinelles guettent debout en se relayant, et le groupe apprend aux jeunes à manier des proies dangereuses comme les scorpions."
      },
      {
        q: "Pourquoi le cou de la girafe est-il aussi long ?",
        options: ["Pour combattre les prédateurs", "Pour atteindre les feuilles hautes des acacias et combats entre mâles", "Pour mieux nager", "Pour réguler la température"],
        correct: 1,
        explainer: "L'évolution a favorisé un long cou à la fois pour atteindre des feuilles inaccessibles et pour les combats spectaculaires entre mâles, qui balancent leur tête comme un fléau. La girafe a pourtant le même nombre de vertèbres cervicales que nous : sept."
      }
    ]
  },
  {
    slug: "quiz-australie-faune-unique",
    title: "Quiz Australie : kangourou, koala, diable de Tasmanie",
    description: "Kangourou, koala, ornithorynque, diable de Tasmanie, quokka : 10 questions sur la faune unique de l'Australie et ses marsupiaux.",
    topic: "animaux",
    emoji: "🦘",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "Le kangourou se déplace en bondissant principalement parce que…",
        options: ["Il a perdu l'usage de la marche", "C'est plus économe en énergie à grande vitesse", "Il imite les lapins géants", "Sa queue le porte mal"],
        correct: 1,
        explainer: "Aux vitesses supérieures à 25 km/h, le saut du kangourou consomme moins d'énergie que la course classique. Ses tendons d'Achille jouent comme des ressorts qui stockent et restituent l'énergie à chaque bond."
      },
      {
        q: "Le koala se nourrit presque exclusivement de feuilles de…",
        options: ["Bambou", "Eucalyptus", "Acacia", "Fougère"],
        correct: 1,
        explainer: "Le koala mange jusqu'à 1 kg de feuilles d'eucalyptus par jour. Très pauvres en énergie et toxiques pour la plupart des mammifères, elles imposent de dormir près de 20 heures par jour pour digérer."
      },
      {
        q: "Le diable de Tasmanie est menacé par…",
        options: ["La sécheresse", "Un cancer facial transmissible", "Les feux de brousse uniquement", "La chasse aux trophées"],
        correct: 1,
        explainer: "Une tumeur faciale transmissible (DFTD) décime les diables de Tasmanie depuis les années 1990. Elle se propage par morsures lors des combats et a fait chuter la population de plus de 80 % dans certaines zones."
      },
      {
        q: "Le wombat est célèbre pour produire des crottes…",
        options: ["Lumineuses", "Cubiques", "Triangulaires", "Liquides"],
        correct: 1,
        explainer: "Le wombat est le seul animal connu à produire des excréments cubiques, sculptés par la forme particulière de la dernière partie de son intestin. Cette forme évite que les crottes ne roulent et l'aide à marquer son territoire."
      },
      {
        q: "Le quokka est devenu une star d'internet pour…",
        options: ["Son cri strident", "Son sourire perpétuel et ses selfies", "Sa danse de parade", "Sa vitesse incroyable"],
        correct: 1,
        explainer: "Ce petit marsupial vit principalement sur Rottnest Island et semble toujours sourire à cause de la forme de sa bouche. Très peu craintif, il est devenu célèbre grâce aux quokka selfies viraux."
      },
      {
        q: "Le dingo, chien sauvage australien, est probablement arrivé sur le continent il y a environ…",
        options: ["5 000 à 10 000 ans", "200 ans", "50 millions d'années", "100 ans"],
        correct: 0,
        explainer: "Le dingo descend de chiens domestiques rapportés par des navigateurs en provenance d'Asie du Sud-Est il y a environ 5 000 à 10 000 ans. Il a redevenu sauvage et joue aujourd'hui un rôle clé dans l'équilibre des écosystèmes."
      },
      {
        q: "Quelle araignée australienne mortelle vit dans la région de Sydney ?",
        options: ["L'argiope frelon", "L'atrace robuste (Sydney funnel-web)", "La tarentule rose", "L'araignée-loup"],
        correct: 1,
        explainer: "L'atrace robuste est l'une des araignées les plus venimeuses du monde. Son venin tuait régulièrement avant la création d'un sérum antivenimeux en 1981 ; aujourd'hui les décès sont rares."
      },
      {
        q: "Le crocodile marin (estuarien) australien peut atteindre une longueur de…",
        options: ["1 m", "3 m", "5 m", "Plus de 6 m"],
        correct: 3,
        explainer: "Le crocodile marin est le plus grand reptile vivant : les plus gros mâles dépassent 6 mètres et 1 tonne. On le rencontre des fleuves du Top End jusque dans les eaux côtières voire la haute mer."
      },
      {
        q: "Le casoar à casque vit dans les forêts du Queensland et est dangereux à cause…",
        options: ["De son bec acéré", "De ses griffes-poignards", "De son crachat venimeux", "De son envergure"],
        correct: 1,
        explainer: "Le casoar peut atteindre 1,80 m et porter sur le doigt central une griffe en forme de poignard de 12 cm. Un coup de patte peut être mortel, ce qui le classe parmi les oiseaux vivants les plus dangereux."
      },
      {
        q: "La Grande Barrière de corail est principalement menacée par…",
        options: ["Les marées rouges", "Le blanchissement lié au réchauffement de l'eau", "L'arrivée des baleines", "Les courants polaires"],
        correct: 1,
        explainer: "Quand l'eau se réchauffe trop longtemps, les coraux expulsent leurs algues symbiotiques (zooxanthelles), blanchissent puis meurent. Plusieurs épisodes massifs depuis 2016 ont gravement endommagé la Grande Barrière."
      }
    ]
  },
  {
    slug: "quiz-ecosystemes-banquise-amazonie",
    title: "Quiz écosystèmes : banquise, Amazonie, récifs coralliens",
    description: "Banquise polaire, forêt amazonienne, récifs coralliens, mangroves : 10 questions sur les grands écosystèmes de la planète et leur biodiversité.",
    topic: "animaux",
    emoji: "🌳",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "L'Amazonie produit-elle vraiment 20 % de l'oxygène atmosphérique ?",
        options: ["Oui, tout son oxygène est exporté", "Non, la forêt en consomme presque autant qu'elle en produit", "Oui, mais seulement la nuit", "Personne ne sait"],
        correct: 1,
        explainer: "La fameuse statistique des 20 % est trompeuse : la photosynthèse amazonienne est massive, mais respiration des plantes, sols et décomposition consomment la quasi-totalité de cet oxygène. Sa vraie valeur est sa biodiversité et son rôle dans le cycle de l'eau."
      },
      {
        q: "Le manchot empereur élève son poussin sur la banquise grâce à…",
        options: ["Une poche d'eau chaude", "Un repli de peau au-dessus des pieds", "Un trou creusé dans la neige", "Un nid de plumes"],
        correct: 1,
        explainer: "Le mâle couve l'œuf puis le poussin sur ses pieds, sous un repli ventral, par -50 °C et dans les blizzards de l'hiver antarctique. Les mâles se regroupent en tortue pour partager leur chaleur."
      },
      {
        q: "Les récifs coralliens couvrent moins de 1 % des océans mais hébergent environ…",
        options: ["1 % de la faune marine", "10 %", "25 %", "70 %"],
        correct: 2,
        explainer: "Bien qu'extrêmement minoritaires en surface, les récifs coralliens abritent près d'un quart des espèces marines connues : poissons, mollusques, crustacés, éponges et bien d'autres trouvent refuge et nourriture dans leurs reliefs."
      },
      {
        q: "L'ours polaire chasse principalement…",
        options: ["Les poissons en eaux libres", "Les phoques sur la banquise", "Les caribous", "Les manchots"],
        correct: 1,
        explainer: "L'ours polaire attend les phoques près des trous de respiration dans la glace. Il ne croise jamais de manchots à l'état naturel : ces oiseaux vivent dans l'hémisphère sud, l'ours polaire dans l'hémisphère nord."
      },
      {
        q: "La mangrove est un écosystème particulier où poussent des…",
        options: ["Coraux géants", "Arbres adaptés à l'eau salée", "Cactus aquatiques", "Lichens flottants"],
        correct: 1,
        explainer: "Les mangroves sont des forêts de palétuviers capables de supporter l'eau salée et les marées. Elles servent de nurserie à de nombreuses espèces de poissons et protègent les côtes contre l'érosion et les tempêtes."
      },
      {
        q: "Quel est le plus grand récif corallien du monde ?",
        options: ["Le récif de Belize", "La Grande Barrière australienne", "Le récif d'Apo", "Le récif d'Aldabra"],
        correct: 1,
        explainer: "La Grande Barrière australienne s'étend sur plus de 2 300 km le long des côtes du Queensland. Visible depuis l'espace, elle est composée de milliers de récifs distincts et abrite plus de 1 500 espèces de poissons."
      },
      {
        q: "Le krill est crucial dans l'océan Austral car…",
        options: ["Il chasse les baleines", "Il est à la base de la chaîne alimentaire", "Il produit du pétrole", "Il filtre les radiations"],
        correct: 1,
        explainer: "Le krill antarctique forme des nuées denses dans les eaux australes. Baleines, manchots, phoques et oiseaux marins s'en nourrissent : son déclin lié au réchauffement menacerait l'ensemble de l'écosystème polaire."
      },
      {
        q: "La forêt boréale (taïga) couvre principalement…",
        options: ["Le sud du Sahara", "Le nord du Canada et de la Sibérie", "L'Australie centrale", "Le Brésil"],
        correct: 1,
        explainer: "La taïga, dominée par les conifères, s'étire sur l'Alaska, le Canada, la Scandinavie et la Sibérie. C'est le plus grand biome terrestre, refuge de l'élan, du lynx, de l'ours brun et du grand corbeau."
      },
      {
        q: "Les abeilles sont essentielles à l'écosystème car elles…",
        options: ["Mangent les nuisibles", "Pollinisent une grande part des plantes à fleurs", "Filtrent l'eau", "Aèrent les sols"],
        correct: 1,
        explainer: "Les abeilles assurent la pollinisation d'environ 75 % des cultures vivrières mondiales. Leur déclin, lié aux pesticides, à la perte d'habitats et aux parasites comme le varroa, menace directement la production alimentaire."
      },
      {
        q: "Dans la forêt amazonienne, le jaguar joue le rôle de…",
        options: ["Charognard", "Super-prédateur", "Herbivore dominant", "Pollinisateur"],
        correct: 1,
        explainer: "En tant que super-prédateur, le jaguar régule les populations de capybaras, tapirs et caïmans. Sans lui, certaines espèces proliféreraient et déséquilibreraient toute la chaîne alimentaire de la forêt."
      }
    ]
  },
  {
    slug: "quiz-records-animaux-rapide-grand",
    title: "Quiz records animaux : plus rapide, plus grand, plus vieux",
    description: "Le plus rapide, le plus grand, le plus vieux, le plus lourd : 10 questions sur les records absolus du règne animal, du guépard au requin du Groenland.",
    topic: "animaux",
    emoji: "🏆",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "Quel est l'animal le plus rapide sur Terre toutes catégories confondues ?",
        options: ["Le guépard", "Le faucon pèlerin en piqué", "L'antilope pronghorn", "Le marlin bleu"],
        correct: 1,
        explainer: "Le faucon pèlerin dépasse 350 km/h en piqué, ce qui en fait l'animal le plus rapide tous milieux confondus. Le guépard reste roi en vitesse de course, et le marlin bleu en vitesse aquatique."
      },
      {
        q: "Quel animal vit le plus longtemps de manière documentée ?",
        options: ["L'éléphant", "La tortue géante", "Le requin du Groenland", "Le baleinier"],
        correct: 2,
        explainer: "Le requin du Groenland peut vivre 300 à 500 ans selon des datations au carbone 14 réalisées sur le cristallin. Il atteint sa maturité sexuelle vers 150 ans, ce qui en fait le vertébré le plus longévif connu."
      },
      {
        q: "Quel animal détient le record de hauteur du saut par rapport à sa taille ?",
        options: ["La grenouille léopard", "La puce", "Le cerf élaphe", "Le pronghorn"],
        correct: 1,
        explainer: "La puce peut sauter plus de 200 fois sa propre hauteur, grâce à une protéine élastique appelée résiline qui stocke et libère l'énergie comme un ressort. Ramené à un humain, cela représenterait un saut de plusieurs centaines de mètres."
      },
      {
        q: "Le plus gros invertébré du monde est…",
        options: ["Le poulpe géant du Pacifique", "Le calmar colossal", "Le crabe-araignée du Japon", "Le ver de terre australien"],
        correct: 1,
        explainer: "Le calmar colossal de l'Antarctique peut atteindre 14 m et près de 500 kg. Plus massif encore que le calmar géant, il possède les plus gros yeux du règne animal, parfois 27 cm de diamètre."
      },
      {
        q: "Quel mammifère a la durée de gestation la plus longue ?",
        options: ["Le rhinocéros", "L'éléphant", "La baleine bleue", "Le cachalot"],
        correct: 1,
        explainer: "L'éléphant porte ses petits près de 22 mois, la plus longue gestation chez les mammifères. À la naissance, le petit pèse déjà autour de 100 kg et marche en quelques heures."
      },
      {
        q: "Le ver Lineus longissimus, animal le plus long jamais observé, peut mesurer jusqu'à…",
        options: ["3 m", "10 m", "55 m", "100 m"],
        correct: 2,
        explainer: "Échoué en Écosse en 1864, un spécimen de Lineus longissimus atteignait 55 m. Ce ver némerte vit dans les fonds marins et peut s'étirer extrêmement grâce à son corps gélatineux."
      },
      {
        q: "Quel oiseau pond l'œuf le plus petit ?",
        options: ["Le moineau", "Le colibri abeille", "Le roitelet", "Le martinet"],
        correct: 1,
        explainer: "Le colibri abeille de Cuba est aussi le plus petit oiseau du monde (environ 5 cm). Ses œufs ne dépassent guère 6 mm et pèsent autour d'un demi-gramme."
      },
      {
        q: "Le plus puissant choc d'un animal (en accélération) est asséné par…",
        options: ["La squille (crevette-mante)", "Le requin blanc", "Le kangourou", "Le boxeur thaï"],
        correct: 0,
        explainer: "La crevette-mante porte un coup d'appendice qui accélère à 80 km/h dans l'eau, soit l'équivalent d'une balle de calibre 22. L'onde de choc qui suit peut même briser le verre des aquariums."
      },
      {
        q: "Quel poisson migre sur la plus longue distance ?",
        options: ["Le thon rouge", "Le saumon atlantique", "Le requin-baleine", "L'anguille européenne"],
        correct: 0,
        explainer: "Certains thons rouges parcourent plus de 10 000 km entre la Méditerranée et l'Atlantique Nord. Ils retournent souvent pondre dans les eaux où ils sont nés, comme les saumons."
      },
      {
        q: "L'animal le plus venimeux par dose létale est…",
        options: ["Le mamba noir", "Le ver fileur (cnidaire)", "Le taïpan du désert", "L'escargot de mer Conus geographus"],
        correct: 3,
        explainer: "L'escargot Conus geographus injecte un cocktail de centaines de toxines via un harpon. Une seule piqûre peut tuer un humain en quelques heures et il n'existe pas d'antidote spécifique."
      }
    ]
  }
];
