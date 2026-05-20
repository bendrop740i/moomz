// Hand-written bilingual dictionary used by `/definition/*` (FR) and
// `/define/*` (EN). NO external APIs are hit — every entry is inlined here so
// the pages render statically and survive offline.
//
// Each entry has a stable `slug` (used as URL segment) and a canonical `word`
// (the display form). Slugs are kebab-case ASCII, words can carry accents.

import type { Locale } from "@/lib/i18n";

export type WordSense = {
  text: string;
  example?: string;
};

export type WordEntry = {
  word: string;
  slug: string;
  partOfSpeech: string;
  pronunciation?: string;
  definitions: WordSense[];
  etymology?: string;
  synonyms?: string[];
  related?: string[];
  /** Optional contextual poll. Tags & options are sent to /?q=&o= prefill. */
  poll?: {
    q: string;
    o: string[];
  };
};

// =====================================================================
// FRENCH WORDS
// =====================================================================
export const FR_WORDS: WordEntry[] = [
  // ---- Gen Z slang ----
  {
    word: "kiff",
    slug: "kiff",
    partOfSpeech: "nom",
    pronunciation: "/kif/",
    definitions: [
      {
        text: "Plaisir intense, coup de cœur, sensation très agréable.",
        example: "C'est un vrai kiff de te voir.",
      },
      {
        text: "Par extension, ce qu'on adore faire.",
        example: "Le foot, c'est son kiff numéro un.",
      },
    ],
    etymology:
      "De l'arabe maghrébin « kif » qui désignait à l'origine un mélange de cannabis, puis l'état de bien-être qu'il procurait.",
    synonyms: ["plaisir", "trip", "délire"],
    related: ["kiffer", "vibe", "swag", "banger"],
    poll: {
      q: "Tu utilises encore le mot « kiff » ?",
      o: ["Tous les jours", "Parfois", "Trop has-been"],
    },
  },
  {
    word: "kiffer",
    slug: "kiffer",
    partOfSpeech: "verbe",
    pronunciation: "/ki.fe/",
    definitions: [
      {
        text: "Aimer beaucoup, apprécier intensément.",
        example: "Je kiffe trop ce son.",
      },
      {
        text: "Être attiré par quelqu'un.",
        example: "Je crois qu'il te kiffe grave.",
      },
    ],
    etymology: "Verbe dérivé de « kiff » apparu dans les années 1990 dans les banlieues françaises.",
    synonyms: ["adorer", "aimer", "apprécier"],
    related: ["kiff", "vibe", "swag"],
    poll: {
      q: "Tu dis plutôt…",
      o: ["Je kiffe", "J'adore", "J'aime"],
    },
  },
  {
    word: "vibe",
    slug: "vibe",
    partOfSpeech: "nom",
    pronunciation: "/vajb/",
    definitions: [
      {
        text: "Ambiance, énergie ressentie autour d'une personne ou d'un lieu.",
        example: "La vibe de cette soirée est ouf.",
      },
    ],
    etymology: "De l'anglais « vibration », popularisé par la pop culture américaine puis Gen Z.",
    synonyms: ["ambiance", "énergie", "feeling"],
    related: ["mood", "kiff", "banger"],
    poll: {
      q: "La vibe d'aujourd'hui c'est…",
      o: ["Parfaite", "Bof", "Carrément off"],
    },
  },
  {
    word: "banger",
    slug: "banger",
    partOfSpeech: "nom",
    pronunciation: "/ban.gœʁ/",
    definitions: [
      {
        text: "Morceau de musique extrêmement réussi, qui frappe fort.",
        example: "Le nouveau son de Ninho c'est un banger.",
      },
      {
        text: "Par extension, n'importe quoi de très bon (film, plat, blague…).",
        example: "Sa réplique c'était un banger.",
      },
    ],
    etymology: "Anglicisme adopté tel quel, de « bang » (frapper).",
    synonyms: ["tube", "hit", "classique"],
    related: ["vibe", "kiff", "fire"],
    poll: {
      q: "Un banger de l'année c'est obligatoirement…",
      o: ["Un son rap", "Un son pop", "Un classique remixé"],
    },
  },
  {
    word: "deter",
    slug: "deter",
    partOfSpeech: "adj",
    pronunciation: "/de.tɛʁ/",
    definitions: [
      {
        text: "Déterminé, prêt à tout donner pour atteindre un objectif.",
        example: "Je suis deter pour les exams.",
      },
    ],
    etymology: "Apocope de « déterminé », typique du parler djeuns 2010-2020.",
    synonyms: ["motivé", "chaud", "à fond"],
    related: ["chaud", "kiff", "venere"],
  },
  {
    word: "sah",
    slug: "sah",
    partOfSpeech: "interj",
    pronunciation: "/sa/",
    definitions: [
      {
        text: "Interjection signifiant « vraiment » ou « sérieusement », souvent en début ou fin de phrase.",
        example: "Sah, t'as fait quoi hier ?",
      },
    ],
    etymology: "De l'arabe « sah » (« vrai »), popularisé par le rap et les réseaux dans les années 2010.",
    synonyms: ["vraiment", "wallah", "srx"],
    related: ["wesh", "wallah", "srx"],
  },
  {
    word: "bg",
    slug: "bg",
    partOfSpeech: "nom",
    definitions: [
      {
        text: "Abréviation de « beau gosse », personne très charmante.",
        example: "T'es un bg sur cette photo.",
      },
    ],
    etymology: "Acronyme de « beau gosse », répandu via SMS et chat dès les années 2000.",
    synonyms: ["beau gosse", "canon", "charo"],
    related: ["swag", "gow"],
  },
  {
    word: "daron",
    slug: "daron",
    partOfSpeech: "nom",
    pronunciation: "/da.ʁɔ̃/",
    definitions: [
      {
        text: "Père, papa, dans le langage familier.",
        example: "Mon daron veut pas que je sorte ce soir.",
      },
    ],
    etymology: "Argot français ancien (XVIIIe) désignant à l'origine un patron ou un vieux.",
    synonyms: ["père", "papa", "vieux"],
    related: ["daronne", "famille", "frerot"],
  },
  {
    word: "daronne",
    slug: "daronne",
    partOfSpeech: "nom",
    pronunciation: "/da.ʁɔn/",
    definitions: [
      {
        text: "Mère, maman, dans le langage familier.",
        example: "Ma daronne fait les meilleures pâtes.",
      },
    ],
    etymology: "Forme féminine de « daron ».",
    synonyms: ["mère", "maman"],
    related: ["daron", "famille"],
  },
  {
    word: "swag",
    slug: "swag",
    partOfSpeech: "nom",
    pronunciation: "/swag/",
    definitions: [
      {
        text: "Style assumé, classe naturelle dans la tenue ou l'attitude.",
        example: "Il a trop de swag avec ce manteau.",
      },
    ],
    etymology: "Anglicisme issu du hip-hop américain, popularisé par Jay-Z et Lil Wayne fin 2000.",
    synonyms: ["style", "classe", "drip"],
    related: ["vibe", "bg", "kiff"],
  },
  {
    word: "frerot",
    slug: "frerot",
    partOfSpeech: "nom",
    pronunciation: "/fʁe.ʁo/",
    definitions: [
      {
        text: "Diminutif affectueux de « frère », pour un ami très proche.",
        example: "Wesh frerot, ça va ?",
      },
    ],
    etymology: "Diminutif populaire de « frère », répandu dans le rap français.",
    synonyms: ["frère", "reuf", "srab"],
    related: ["reuf", "srab", "famille"],
  },
  {
    word: "venere",
    slug: "venere",
    partOfSpeech: "adj",
    pronunciation: "/və.nɛʁ/",
    definitions: [
      {
        text: "Très énervé, en colère.",
        example: "Je suis venere il a pas répondu à mes messages.",
      },
    ],
    etymology: "Verlan de « énervé », inversion syllabique typique du parler des banlieues.",
    synonyms: ["énervé", "remonté", "salty"],
    related: ["jpp", "deter"],
  },
  {
    word: "pose",
    slug: "pose",
    partOfSpeech: "adj",
    pronunciation: "/po.ze/",
    definitions: [
      {
        text: "Calme, détendu, tranquille.",
        example: "On reste posé chez moi ce soir.",
      },
    ],
    etymology: "Du verbe « poser » dans son sens de « se détendre ».",
    synonyms: ["tranquille", "oklm", "chill"],
    related: ["oklm", "vibe"],
  },
  {
    word: "oklm",
    slug: "oklm",
    partOfSpeech: "adj",
    definitions: [
      {
        text: "Acronyme de « au calme », signifie tranquille, peinard.",
        example: "Je suis oklm devant Netflix.",
      },
    ],
    etymology: "Forgé par Booba avec son label « OKLM » en 2014.",
    synonyms: ["calme", "posé", "chill"],
    related: ["pose", "vibe"],
  },
  {
    word: "askip",
    slug: "askip",
    partOfSpeech: "adv",
    pronunciation: "/as.kip/",
    definitions: [
      {
        text: "Abréviation de « à ce qu'il paraît », pour rapporter une rumeur.",
        example: "Askip ils se sont remis ensemble.",
      },
    ],
    etymology: "Contraction phonétique répandue sur les réseaux dans les années 2010.",
    synonyms: ["paraît-il", "il paraît que"],
    related: ["sah", "wesh"],
  },
  {
    word: "wesh",
    slug: "wesh",
    partOfSpeech: "interj",
    pronunciation: "/wɛʃ/",
    definitions: [
      {
        text: "Salutation informelle, équivalent de « salut » ou « yo ».",
        example: "Wesh ma gow, ça dit quoi ?",
      },
    ],
    etymology: "De l'arabe algérien « wash » (« quoi ? »), salutation interrogative.",
    synonyms: ["salut", "yo", "hello"],
    related: ["frerot", "sah", "gow"],
  },
  {
    word: "mdr",
    slug: "mdr",
    partOfSpeech: "interj",
    definitions: [
      {
        text: "Acronyme de « mort de rire », équivalent texto de « lol ».",
        example: "Sa blague mdr trop drôle.",
      },
    ],
    etymology: "Acronyme né dans les chats IRC français des années 1990.",
    synonyms: ["lol", "ptdr", "jpp"],
    related: ["ptdr", "jpp"],
  },
  {
    word: "ptdr",
    slug: "ptdr",
    partOfSpeech: "interj",
    definitions: [
      {
        text: "Acronyme de « pété de rire », version intensive de mdr.",
        example: "T'es sérieux ? ptdr.",
      },
    ],
    etymology: "Variante plus expressive de « mdr », répandue dès les années 2000.",
    synonyms: ["mdr", "jpp"],
    related: ["mdr", "jpp"],
  },
  {
    word: "jpp",
    slug: "jpp",
    partOfSpeech: "interj",
    definitions: [
      {
        text: "Acronyme de « j'en peux plus », exprime l'exaspération ou l'hilarité.",
        example: "Il refait la même blague, jpp.",
      },
    ],
    etymology: "Acronyme texto né sur MSN puis répandu sur Twitter.",
    synonyms: ["mdr", "ptdr", "saoulé"],
    related: ["mdr", "ptdr", "venere"],
  },
  {
    word: "srx",
    slug: "srx",
    partOfSpeech: "adv",
    definitions: [
      {
        text: "Abréviation de « sérieux », utilisé seul comme question ou intensificateur.",
        example: "Srx tu pars déjà ?",
      },
    ],
    etymology: "Apocope abrégée de « sérieux ».",
    synonyms: ["sérieux", "vraiment", "sah"],
    related: ["sah", "wallah"],
  },
  {
    word: "srab",
    slug: "srab",
    partOfSpeech: "nom",
    pronunciation: "/sʁab/",
    definitions: [
      {
        text: "Pote, ami très proche.",
        example: "Mon srab vient ce week-end.",
      },
    ],
    etymology: "De l'arabe maghrébin « sahbi » (« mon ami »).",
    synonyms: ["pote", "frerot", "reuf"],
    related: ["reuf", "frerot"],
  },
  {
    word: "reuf",
    slug: "reuf",
    partOfSpeech: "nom",
    pronunciation: "/ʁœf/",
    definitions: [
      {
        text: "Verlan de « frère », utilisé pour un ami ou un membre de la famille.",
        example: "C'est mon reuf depuis la primaire.",
      },
    ],
    etymology: "Verlan classique de « frère ».",
    synonyms: ["frère", "frerot", "srab"],
    related: ["frerot", "srab", "daron"],
  },
  {
    word: "reup",
    slug: "reup",
    partOfSpeech: "verbe",
    definitions: [
      {
        text: "Republier un contenu (story, vidéo, post).",
        example: "Reup ma story stp.",
      },
    ],
    etymology: "Anglicisme de « re-upload » (re-téléverser).",
    synonyms: ["repost", "partager"],
    related: ["vibe", "banger"],
  },
  {
    word: "gow",
    slug: "gow",
    partOfSpeech: "nom",
    pronunciation: "/ɡow/",
    definitions: [
      {
        text: "Petite copine ou jeune femme.",
        example: "Sa gow est trop stylée.",
      },
    ],
    etymology: "Verlan apocopé de « meuf » → « feumeu » → contracté en « gow ».",
    synonyms: ["meuf", "copine", "bestie"],
    related: ["bg", "kiff"],
  },
  {
    word: "miskine",
    slug: "miskine",
    partOfSpeech: "interj",
    pronunciation: "/mis.kin/",
    definitions: [
      {
        text: "Expression de compassion ou de pitié, équivalent de « le pauvre ».",
        example: "Miskine, il a raté son train.",
      },
    ],
    etymology: "De l'arabe « miskîn » (« pauvre, miséreux »).",
    synonyms: ["le pauvre", "la pauvre"],
    related: ["wesh", "wallah"],
  },
  {
    word: "wallah",
    slug: "wallah",
    partOfSpeech: "interj",
    pronunciation: "/wa.la/",
    definitions: [
      {
        text: "Serment signifiant « je te jure » ou « par Dieu ».",
        example: "Wallah c'est vrai, j'invente rien.",
      },
    ],
    etymology: "De l'arabe « wa-llāh » (« par Dieu »).",
    synonyms: ["sah", "je te jure", "srx"],
    related: ["sah", "srx"],
  },
  {
    word: "charo",
    slug: "charo",
    partOfSpeech: "nom",
    pronunciation: "/ʃa.ʁo/",
    definitions: [
      {
        text: "Personne (souvent homme) qui drague à outrance.",
        example: "Arrête de jouer au charo.",
      },
    ],
    etymology: "Apocope de « charognard », popularisé par le rap français.",
    synonyms: ["dragueur", "bg"],
    related: ["bg", "kiff"],
  },
  {
    word: "bicrave",
    slug: "bicrave",
    partOfSpeech: "verbe",
    pronunciation: "/bi.kʁav/",
    definitions: [
      {
        text: "Vendre, dealer (souvent au sens propre comme figuré).",
        example: "Il bicrave des sneakers neuves.",
      },
    ],
    etymology: "Du romani « bikrav » (« je vends »).",
    synonyms: ["vendre", "dealer"],
    related: ["argent", "kiff"],
  },

  // ---- Everyday French ----
  {
    word: "amour",
    slug: "amour",
    partOfSpeech: "nom",
    pronunciation: "/a.muʁ/",
    definitions: [
      {
        text: "Sentiment d'affection profonde envers une personne, un être ou une chose.",
        example: "Leur amour dure depuis dix ans.",
      },
    ],
    etymology: "Du latin « amor » (« amour, affection »).",
    synonyms: ["affection", "passion", "tendresse"],
    related: ["bisou", "ami", "famille"],
    poll: {
      q: "L'amour vrai, ça existe ?",
      o: ["Évidemment", "Seulement dans les films", "Je veux y croire"],
    },
  },
  {
    word: "bisou",
    slug: "bisou",
    partOfSpeech: "nom",
    pronunciation: "/bi.zu/",
    definitions: [
      {
        text: "Petit baiser affectueux, signe de tendresse ou de salut.",
        example: "Bisou à toute la famille.",
      },
    ],
    etymology: "Diminutif populaire de « bise ».",
    synonyms: ["baiser", "bise"],
    related: ["amour", "ami"],
  },
  {
    word: "ami",
    slug: "ami",
    partOfSpeech: "nom",
    pronunciation: "/a.mi/",
    definitions: [
      {
        text: "Personne avec qui on entretient une relation affectueuse et durable.",
        example: "C'est mon meilleur ami depuis l'école.",
      },
    ],
    etymology: "Du latin « amicus » (« ami »).",
    synonyms: ["pote", "frerot", "copain"],
    related: ["frerot", "famille", "srab"],
  },
  {
    word: "famille",
    slug: "famille",
    partOfSpeech: "nom",
    pronunciation: "/fa.mij/",
    definitions: [
      {
        text: "Ensemble des personnes liées par le sang, le mariage ou l'adoption.",
        example: "Toute la famille était réunie pour Noël.",
      },
    ],
    etymology: "Du latin « familia » (ensemble des personnes vivant sous un même toit).",
    synonyms: ["proches", "parents"],
    related: ["daron", "daronne", "ami"],
  },
  {
    word: "travail",
    slug: "travail",
    partOfSpeech: "nom",
    pronunciation: "/tʁa.vaj/",
    definitions: [
      {
        text: "Activité humaine exercée en vue d'un résultat utile.",
        example: "Son travail lui prend tout son temps.",
      },
    ],
    etymology: "Du latin populaire « tripalium », instrument de torture à trois pieux — d'où le sens de « peine, effort ».",
    synonyms: ["job", "boulot", "métier"],
    related: ["maison", "argent"],
  },
  {
    word: "maison",
    slug: "maison",
    partOfSpeech: "nom",
    pronunciation: "/mɛ.zɔ̃/",
    definitions: [
      {
        text: "Bâtiment servant d'habitation.",
        example: "Je rentre à la maison.",
      },
    ],
    etymology: "Du latin « mansio » (« halte, demeure »).",
    synonyms: ["demeure", "logement", "foyer"],
    related: ["famille", "travail"],
  },
  {
    word: "voiture",
    slug: "voiture",
    partOfSpeech: "nom",
    pronunciation: "/vwa.tyʁ/",
    definitions: [
      {
        text: "Véhicule automobile destiné au transport de personnes.",
        example: "Sa voiture est en panne.",
      },
    ],
    etymology: "Du latin « vectura » (« transport »).",
    synonyms: ["auto", "bagnole", "caisse"],
    related: ["travail", "voyage"],
  },
  {
    word: "soleil",
    slug: "soleil",
    partOfSpeech: "nom",
    pronunciation: "/sɔ.lɛj/",
    definitions: [
      {
        text: "Étoile autour de laquelle tourne la Terre, source de lumière et de chaleur.",
        example: "Le soleil se couche tard en été.",
      },
    ],
    etymology: "Du latin populaire « soliculus », diminutif de « sol ».",
    synonyms: ["astre"],
    related: ["pluie", "neige", "plage"],
  },
  {
    word: "pluie",
    slug: "pluie",
    partOfSpeech: "nom",
    pronunciation: "/plɥi/",
    definitions: [
      {
        text: "Eau qui tombe en gouttes des nuages.",
        example: "La pluie a duré toute la nuit.",
      },
    ],
    etymology: "Du latin « pluvia ».",
    synonyms: ["averse"],
    related: ["soleil", "neige"],
  },
  {
    word: "neige",
    slug: "neige",
    partOfSpeech: "nom",
    pronunciation: "/nɛʒ/",
    definitions: [
      {
        text: "Eau cristallisée qui tombe sous forme de flocons.",
        example: "La neige recouvre les sommets.",
      },
    ],
    etymology: "Du latin « nix, nivis ».",
    synonyms: ["poudreuse", "flocons"],
    related: ["soleil", "pluie", "montagne"],
  },
  {
    word: "montagne",
    slug: "montagne",
    partOfSpeech: "nom",
    pronunciation: "/mɔ̃.taɲ/",
    definitions: [
      {
        text: "Élévation naturelle du sol dépassant en général 500 mètres.",
        example: "La montagne offre des paysages incroyables.",
      },
    ],
    etymology: "Du latin populaire « montanea », de « mons » (« mont »).",
    synonyms: ["mont", "sommet"],
    related: ["mer", "neige", "voyage"],
  },
  {
    word: "mer",
    slug: "mer",
    partOfSpeech: "nom",
    pronunciation: "/mɛʁ/",
    definitions: [
      {
        text: "Vaste étendue d'eau salée recouvrant une grande partie du globe.",
        example: "On part à la mer cet été.",
      },
    ],
    etymology: "Du latin « mare ».",
    synonyms: ["océan"],
    related: ["plage", "soleil", "voyage"],
  },
  {
    word: "plage",
    slug: "plage",
    partOfSpeech: "nom",
    pronunciation: "/plaʒ/",
    definitions: [
      {
        text: "Étendue de sable ou de galets au bord de la mer.",
        example: "On a passé la journée à la plage.",
      },
    ],
    etymology: "De l'italien « piaggia » (rivage).",
    synonyms: ["rivage", "côte"],
    related: ["mer", "soleil", "vacances"],
  },
  {
    word: "cafe",
    slug: "cafe",
    partOfSpeech: "nom",
    pronunciation: "/ka.fe/",
    definitions: [
      {
        text: "Boisson chaude obtenue par infusion de grains de caféier torréfiés.",
        example: "Un café serré le matin, c'est sacré.",
      },
      {
        text: "Établissement où on consomme cette boisson et d'autres rafraîchissements.",
        example: "On se retrouve au café d'en face.",
      },
    ],
    etymology: "De l'arabe « qahwa », via le turc « kahve » et l'italien « caffè ».",
    synonyms: ["expresso", "noir"],
    related: ["vin", "pain"],
  },
  {
    word: "vin",
    slug: "vin",
    partOfSpeech: "nom",
    pronunciation: "/vɛ̃/",
    definitions: [
      {
        text: "Boisson alcoolisée issue de la fermentation du jus de raisin.",
        example: "Un bon vin rouge avec le fromage.",
      },
    ],
    etymology: "Du latin « vinum ».",
    synonyms: ["pinard", "rouge"],
    related: ["cafe", "pain", "fromage"],
  },
  {
    word: "pain",
    slug: "pain",
    partOfSpeech: "nom",
    pronunciation: "/pɛ̃/",
    definitions: [
      {
        text: "Aliment de base à base de farine, eau et levain, cuit au four.",
        example: "La baguette de pain est croustillante.",
      },
    ],
    etymology: "Du latin « panis ».",
    synonyms: ["baguette", "miche"],
    related: ["fromage", "vin", "cafe"],
  },
  {
    word: "fromage",
    slug: "fromage",
    partOfSpeech: "nom",
    pronunciation: "/fʁɔ.maʒ/",
    definitions: [
      {
        text: "Aliment obtenu par coagulation du lait, puis affinage.",
        example: "Le plateau de fromages arrive après le repas.",
      },
    ],
    etymology: "Du latin populaire « formaticum », de « forma » (moule).",
    synonyms: [],
    related: ["pain", "vin"],
  },
  {
    word: "chocolat",
    slug: "chocolat",
    partOfSpeech: "nom",
    pronunciation: "/ʃɔ.kɔ.la/",
    definitions: [
      {
        text: "Aliment fabriqué à partir des fèves du cacaoyer.",
        example: "Une tablette de chocolat noir.",
      },
    ],
    etymology: "Du nahuatl « xocolatl » via l'espagnol.",
    synonyms: ["choco"],
    related: ["cafe", "bonheur"],
  },
  {
    word: "bonheur",
    slug: "bonheur",
    partOfSpeech: "nom",
    pronunciation: "/bɔ.nœʁ/",
    definitions: [
      {
        text: "État de complète satisfaction et de plénitude.",
        example: "Le bonheur, c'est les petites choses.",
      },
    ],
    etymology: "De l'ancien français « bon heur » (bon présage, bonne chance).",
    synonyms: ["joie", "plaisir", "kiff"],
    related: ["joie", "kiff", "amour"],
  },
  {
    word: "tristesse",
    slug: "tristesse",
    partOfSpeech: "nom",
    pronunciation: "/tʁis.tɛs/",
    definitions: [
      {
        text: "État affectif douloureux marqué par l'abattement.",
        example: "Une grande tristesse l'envahit.",
      },
    ],
    etymology: "Du latin « tristitia ».",
    synonyms: ["chagrin", "peine"],
    related: ["peur", "joie", "colere"],
  },
  {
    word: "peur",
    slug: "peur",
    partOfSpeech: "nom",
    pronunciation: "/pœʁ/",
    definitions: [
      {
        text: "Sentiment de crainte face à un danger réel ou imaginaire.",
        example: "Il avait peur du noir.",
      },
    ],
    etymology: "Du latin « pavor ».",
    synonyms: ["crainte", "trouille"],
    related: ["tristesse", "joie"],
  },
  {
    word: "joie",
    slug: "joie",
    partOfSpeech: "nom",
    pronunciation: "/ʒwa/",
    definitions: [
      {
        text: "Émotion vive et agréable, sentiment de plénitude.",
        example: "Une joie immense l'a envahie.",
      },
    ],
    etymology: "Du latin « gaudia », pluriel de « gaudium ».",
    synonyms: ["bonheur", "allégresse"],
    related: ["bonheur", "tristesse", "surprise"],
  },
  {
    word: "colere",
    slug: "colere",
    partOfSpeech: "nom",
    pronunciation: "/kɔ.lɛʁ/",
    definitions: [
      {
        text: "État émotionnel de mécontentement intense.",
        example: "Sa colère est montée d'un coup.",
      },
    ],
    etymology: "Du latin « cholera » (bile).",
    synonyms: ["rage", "fureur", "venere"],
    related: ["venere", "tristesse"],
  },
  {
    word: "surprise",
    slug: "surprise",
    partOfSpeech: "nom",
    pronunciation: "/syʁ.pʁiz/",
    definitions: [
      {
        text: "Émotion ressentie devant un événement inattendu.",
        example: "Quelle bonne surprise de te voir !",
      },
    ],
    etymology: "Participe passé féminin de « surprendre ».",
    synonyms: ["étonnement"],
    related: ["joie", "espoir"],
  },
  {
    word: "espoir",
    slug: "espoir",
    partOfSpeech: "nom",
    pronunciation: "/ɛs.pwaʁ/",
    definitions: [
      {
        text: "Sentiment qui porte à attendre avec confiance ce que l'on désire.",
        example: "L'espoir fait vivre.",
      },
    ],
    etymology: "Du latin populaire « sperare ».",
    synonyms: ["espérance"],
    related: ["reve", "joie"],
  },
  {
    word: "reve",
    slug: "reve",
    partOfSpeech: "nom",
    pronunciation: "/ʁɛv/",
    definitions: [
      {
        text: "Production psychique du sommeil paradoxal.",
        example: "J'ai fait un rêve étrange cette nuit.",
      },
      {
        text: "Aspiration profonde, projet idéalisé.",
        example: "Voyager autour du monde est son rêve.",
      },
    ],
    etymology: "Déverbal de « rêver », attesté au XIIe siècle.",
    synonyms: ["songe", "désir"],
    related: ["sommeil", "espoir"],
  },
  {
    word: "sommeil",
    slug: "sommeil",
    partOfSpeech: "nom",
    pronunciation: "/sɔ.mɛj/",
    definitions: [
      {
        text: "État de repos physiologique pendant lequel la conscience est suspendue.",
        example: "Il a sombré dans un sommeil profond.",
      },
    ],
    etymology: "Du latin « somniculus », diminutif de « somnus ».",
    synonyms: ["repos", "dodo"],
    related: ["dormir", "reve"],
  },
  {
    word: "manger",
    slug: "manger",
    partOfSpeech: "verbe",
    pronunciation: "/mɑ̃.ʒe/",
    definitions: [
      {
        text: "Absorber des aliments par la bouche.",
        example: "On mange dans une heure.",
      },
    ],
    etymology: "Du latin « manducare » (mâcher).",
    synonyms: ["bouffer", "déguster"],
    related: ["pain", "fromage", "vin"],
  },
  {
    word: "dormir",
    slug: "dormir",
    partOfSpeech: "verbe",
    pronunciation: "/dɔʁ.miʁ/",
    definitions: [
      {
        text: "Être dans l'état de sommeil.",
        example: "J'ai dormi comme un bébé.",
      },
    ],
    etymology: "Du latin « dormire ».",
    synonyms: ["pioncer", "roupiller"],
    related: ["sommeil", "reve"],
  },
  {
    word: "courir",
    slug: "courir",
    partOfSpeech: "verbe",
    pronunciation: "/ku.ʁiʁ/",
    definitions: [
      {
        text: "Se déplacer rapidement en faisant des foulées plus longues qu'à la marche.",
        example: "Il court tous les matins.",
      },
    ],
    etymology: "Du latin « currere ».",
    synonyms: ["sprinter", "trotter"],
    related: ["danser", "manger"],
  },
  {
    word: "danser",
    slug: "danser",
    partOfSpeech: "verbe",
    pronunciation: "/dɑ̃.se/",
    definitions: [
      {
        text: "Exécuter des mouvements rythmés sur une musique.",
        example: "On a dansé toute la nuit.",
      },
    ],
    etymology: "De l'ancien haut allemand « dansôn ».",
    synonyms: ["guincher"],
    related: ["chanter", "fete", "banger"],
  },
  {
    word: "chanter",
    slug: "chanter",
    partOfSpeech: "verbe",
    pronunciation: "/ʃɑ̃.te/",
    definitions: [
      {
        text: "Produire des sons mélodieux avec la voix.",
        example: "Elle chante juste, c'est dingue.",
      },
    ],
    etymology: "Du latin « cantare », fréquentatif de « canere ».",
    synonyms: ["entonner"],
    related: ["danser", "banger", "fete"],
  },
  {
    word: "voyage",
    slug: "voyage",
    partOfSpeech: "nom",
    pronunciation: "/vwa.jaʒ/",
    definitions: [
      {
        text: "Déplacement vers un lieu éloigné de chez soi.",
        example: "Un voyage au Japon, c'est mon rêve.",
      },
    ],
    etymology: "Du latin « viaticum » (provisions de voyage).",
    synonyms: ["trip", "périple"],
    related: ["vacances", "voiture", "mer"],
  },
  {
    word: "vacances",
    slug: "vacances",
    partOfSpeech: "nom",
    pronunciation: "/va.kɑ̃s/",
    definitions: [
      {
        text: "Période de repos pendant laquelle l'activité ordinaire est suspendue.",
        example: "Les vacances commencent vendredi.",
      },
    ],
    etymology: "Du latin « vacantia » (« être vide »).",
    synonyms: ["congés", "break"],
    related: ["voyage", "plage", "fete"],
  },
  {
    word: "fete",
    slug: "fete",
    partOfSpeech: "nom",
    pronunciation: "/fɛt/",
    definitions: [
      {
        text: "Réjouissance collective marquant un événement.",
        example: "On organise une fête samedi.",
      },
    ],
    etymology: "Du latin « festa », pluriel de « festum ».",
    synonyms: ["soirée", "teuf"],
    related: ["danser", "chanter", "vacances"],
  },
  {
    word: "argent",
    slug: "argent",
    partOfSpeech: "nom",
    pronunciation: "/aʁ.ʒɑ̃/",
    definitions: [
      {
        text: "Métal précieux blanc et brillant.",
        example: "Une bague en argent.",
      },
      {
        text: "Monnaie, par extension toute somme.",
        example: "Il n'a plus d'argent en fin de mois.",
      },
    ],
    etymology: "Du latin « argentum ».",
    synonyms: ["thune", "fric", "monnaie"],
    related: ["travail", "bicrave"],
  },
];

// =====================================================================
// ENGLISH WORDS
// =====================================================================
export const EN_WORDS: WordEntry[] = [
  // ---- Slang ----
  {
    word: "vibe",
    slug: "vibe",
    partOfSpeech: "noun",
    pronunciation: "/vaɪb/",
    definitions: [
      {
        text: "The atmosphere or feeling that a person, place, or situation gives off.",
        example: "This coffee shop has a really chill vibe.",
      },
    ],
    etymology: "Shortening of vibration, popularized by hippie culture in the 1960s and revived by Gen Z.",
    synonyms: ["mood", "energy", "feel"],
    related: ["mood", "lit", "vibes"],
    poll: {
      q: "The vibes today are…",
      o: ["Immaculate", "Off", "Mid"],
    },
  },
  {
    word: "vibes",
    slug: "vibes",
    partOfSpeech: "noun",
    pronunciation: "/vaɪbz/",
    definitions: [
      {
        text: "Plural form often used as a general descriptor for the overall feeling.",
        example: "Bro, the vibes were immaculate.",
      },
    ],
    etymology: "Plural of vibe.",
    synonyms: ["energy", "mood"],
    related: ["vibe", "mood"],
  },
  {
    word: "bro",
    slug: "bro",
    partOfSpeech: "noun",
    pronunciation: "/broʊ/",
    definitions: [
      {
        text: "Informal term for a male friend, peer, or even a stranger.",
        example: "Bro, you won't believe what happened.",
      },
    ],
    etymology: "Shortening of brother, used as an address since the late 19th century.",
    synonyms: ["bestie", "dude"],
    related: ["bestie", "friend"],
  },
  {
    word: "slay",
    slug: "slay",
    partOfSpeech: "verb",
    pronunciation: "/sleɪ/",
    definitions: [
      {
        text: "To impress greatly or do something exceptionally well.",
        example: "She slayed that performance.",
      },
    ],
    etymology: "From Old English slēan (to strike). Modern slang use comes from Black ballroom culture in the 1980s.",
    synonyms: ["crush", "dominate"],
    related: ["fire", "lit", "snatched"],
    poll: {
      q: "Who slayed harder this year?",
      o: ["Sabrina Carpenter", "Charli XCX", "Chappell Roan"],
    },
  },
  {
    word: "lit",
    slug: "lit",
    partOfSpeech: "adj",
    pronunciation: "/lɪt/",
    definitions: [
      {
        text: "Exciting, excellent, full of energy.",
        example: "The party last night was lit.",
      },
    ],
    etymology: "Originally meant intoxicated, expanded to mean amazing in 2010s hip-hop.",
    synonyms: ["fire", "hype", "epic"],
    related: ["fire", "banger", "slaps"],
  },
  {
    word: "fire",
    slug: "fire",
    partOfSpeech: "adj",
    pronunciation: "/faɪər/",
    definitions: [
      {
        text: "Extremely impressive or good.",
        example: "That outfit is fire.",
      },
    ],
    etymology: "Slang use as adjective comes from late 2000s hip-hop circles.",
    synonyms: ["lit", "slaps", "amazing"],
    related: ["lit", "slay", "banger"],
  },
  {
    word: "mood",
    slug: "mood",
    partOfSpeech: "noun",
    pronunciation: "/muːd/",
    definitions: [
      {
        text: "Something so relatable that it captures one's current state.",
        example: "Eating cereal at midnight is a mood.",
      },
    ],
    etymology: "Old English mōd (mind), extended as relatability meme tag on Tumblr around 2014.",
    synonyms: ["vibe", "same"],
    related: ["vibe", "lowkey"],
  },
  {
    word: "bestie",
    slug: "bestie",
    partOfSpeech: "noun",
    pronunciation: "/ˈbɛsti/",
    definitions: [
      {
        text: "Best friend; also used loosely toward acquaintances.",
        example: "Hey bestie, want to grab coffee?",
      },
    ],
    etymology: "Diminutive of best (friend), widespread on social media from the 2010s.",
    synonyms: ["bff", "bro"],
    related: ["bro", "friend"],
  },
  {
    word: "lowkey",
    slug: "lowkey",
    partOfSpeech: "adv",
    pronunciation: "/ˈloʊˌkiː/",
    definitions: [
      {
        text: "Quietly, subtly, or to a moderate degree.",
        example: "I lowkey want pizza right now.",
      },
    ],
    etymology: "From the musical concept of a quiet or subdued key, repurposed online in the 2010s.",
    synonyms: ["kinda", "secretly"],
    related: ["highkey", "mood"],
  },
  {
    word: "highkey",
    slug: "highkey",
    partOfSpeech: "adv",
    pronunciation: "/ˈhaɪˌkiː/",
    definitions: [
      {
        text: "Openly, very obviously, or to a strong degree.",
        example: "I highkey love this song.",
      },
    ],
    etymology: "Counterpart to lowkey, both coined in roughly the same era.",
    synonyms: ["totally", "definitely"],
    related: ["lowkey", "mood"],
  },
  {
    word: "sus",
    slug: "sus",
    partOfSpeech: "adj",
    pronunciation: "/sʌs/",
    definitions: [
      {
        text: "Suspicious, sketchy, untrustworthy.",
        example: "That email looks sus.",
      },
    ],
    etymology: "Shortening of suspicious, mainstreamed by the game Among Us in 2020.",
    synonyms: ["sketch", "shady"],
    related: ["cap", "no-cap"],
  },
  {
    word: "cap",
    slug: "cap",
    partOfSpeech: "noun",
    pronunciation: "/kæp/",
    definitions: [
      {
        text: "A lie or exaggeration; saying something untrue.",
        example: "That story is cap.",
      },
    ],
    etymology: "Black slang from early 1900s where to cap meant to brag falsely.",
    synonyms: ["lie", "bs"],
    related: ["no-cap", "sus"],
  },
  {
    word: "no-cap",
    slug: "no-cap",
    partOfSpeech: "interj",
    pronunciation: "/noʊ kæp/",
    definitions: [
      {
        text: "Phrase meaning no lie, used to affirm honesty.",
        example: "No cap, that's the best burger in town.",
      },
    ],
    etymology: "Coined as the negation of cap (lie).",
    synonyms: ["fr", "honestly"],
    related: ["cap", "bet"],
  },
  {
    word: "bet",
    slug: "bet",
    partOfSpeech: "interj",
    pronunciation: "/bɛt/",
    definitions: [
      {
        text: "Affirmation meaning OK, sure, or it's a deal.",
        example: "Wanna grab food? Bet.",
      },
    ],
    etymology: "Shortened from you bet, used as casual confirmation since the late 1990s.",
    synonyms: ["sure", "okay", "deal"],
    related: ["no-cap", "facts"],
  },
  {
    word: "sheesh",
    slug: "sheesh",
    partOfSpeech: "interj",
    pronunciation: "/ʃiːʃ/",
    definitions: [
      {
        text: "Exclamation expressing strong admiration, awe, or sometimes annoyance.",
        example: "Sheesh, that's an expensive jacket.",
      },
    ],
    etymology: "Onomatopoeic exclamation revived on TikTok in 2021.",
    synonyms: ["damn", "wow"],
    related: ["slay", "fire"],
  },
  {
    word: "simp",
    slug: "simp",
    partOfSpeech: "noun",
    pronunciation: "/sɪmp/",
    definitions: [
      {
        text: "Someone who is overly attentive or submissive to someone they're attracted to.",
        example: "Don't be a simp, have some self-respect.",
      },
    ],
    etymology: "Originally meant simpleton in 1900s. Repurposed by Twitch streamers in the late 2010s.",
    synonyms: ["pushover"],
    related: ["ick", "ghosted"],
  },
  {
    word: "ick",
    slug: "ick",
    partOfSpeech: "noun",
    pronunciation: "/ɪk/",
    definitions: [
      {
        text: "A sudden feeling of disgust toward someone you previously liked.",
        example: "He chewed with his mouth open and I got the ick.",
      },
    ],
    etymology: "Onomatopoeic, popularized by Love Island UK and TikTok dating commentary.",
    synonyms: ["turn-off"],
    related: ["simp", "ghosted", "salty"],
  },
  {
    word: "flex",
    slug: "flex",
    partOfSpeech: "verb",
    pronunciation: "/flɛks/",
    definitions: [
      {
        text: "To show off, especially wealth or status.",
        example: "He's always flexing his new sneakers.",
      },
    ],
    etymology: "From the literal meaning of flexing a muscle to display strength.",
    synonyms: ["brag", "stunt"],
    related: ["drip", "snatched", "flex"],
  },
  {
    word: "ghosted",
    slug: "ghosted",
    partOfSpeech: "verb",
    pronunciation: "/ˈɡoʊstɪd/",
    definitions: [
      {
        text: "Cut off all communication with someone without explanation.",
        example: "He ghosted me after the second date.",
      },
    ],
    etymology: "From ghost; popularized by dating-app culture in the mid-2010s.",
    synonyms: ["disappeared"],
    related: ["ick", "salty"],
  },
  {
    word: "salty",
    slug: "salty",
    partOfSpeech: "adj",
    pronunciation: "/ˈsɔːlti/",
    definitions: [
      {
        text: "Bitter, resentful, or visibly upset over a small thing.",
        example: "She's salty she didn't get invited.",
      },
    ],
    etymology: "American slang since the early 1900s; mainstreamed via gaming streams in the 2010s.",
    synonyms: ["bitter", "petty"],
    related: ["ick", "ghosted"],
  },
  {
    word: "glow-up",
    slug: "glow-up",
    partOfSpeech: "noun",
    pronunciation: "/ˈɡloʊ ʌp/",
    definitions: [
      {
        text: "A dramatic personal transformation, especially in appearance.",
        example: "Her glow-up since high school is insane.",
      },
    ],
    etymology: "Coined by rapper Chief Keef's track Gotta Glo Up One Day in 2013.",
    synonyms: ["transformation", "upgrade"],
    related: ["snatched", "drip", "slay"],
  },
  {
    word: "periodt",
    slug: "periodt",
    partOfSpeech: "interj",
    pronunciation: "/ˈpɪriədt/",
    definitions: [
      {
        text: "Emphatic period — used to end a statement with no room for debate.",
        example: "She's the best singer of her generation, periodt.",
      },
    ],
    etymology: "Variation of period popularized by Black drag culture and amplified on TikTok.",
    synonyms: ["facts", "and that's that"],
    related: ["slay", "facts"],
  },
  {
    word: "finna",
    slug: "finna",
    partOfSpeech: "verb",
    pronunciation: "/ˈfɪnə/",
    definitions: [
      {
        text: "Going to, about to (do something).",
        example: "I'm finna take a nap.",
      },
    ],
    etymology: "Contraction of fixing to, from Southern American English.",
    synonyms: ["gonna", "about to"],
    related: ["bet", "lowkey"],
  },
  {
    word: "yeet",
    slug: "yeet",
    partOfSpeech: "verb",
    pronunciation: "/jiːt/",
    definitions: [
      {
        text: "To throw something with force, or to express enthusiasm.",
        example: "He yeeted his old phone into the trash.",
      },
    ],
    etymology: "Originated in a 2014 Vine video by Lil Meatball, then spread universally.",
    synonyms: ["chuck", "huck"],
    related: ["sheesh", "lit"],
  },
  {
    word: "slaps",
    slug: "slaps",
    partOfSpeech: "verb",
    pronunciation: "/slæps/",
    definitions: [
      {
        text: "Said of music or food that is very enjoyable.",
        example: "This new track absolutely slaps.",
      },
    ],
    etymology: "From hip-hop slang where a track slap meant it hit hard.",
    synonyms: ["bangs", "knocks"],
    related: ["banger", "fire", "lit"],
  },
  {
    word: "banger",
    slug: "banger",
    partOfSpeech: "noun",
    pronunciation: "/ˈbæŋər/",
    definitions: [
      {
        text: "A really good song, hit track.",
        example: "Their album is full of bangers.",
      },
    ],
    etymology: "British slang for an excellent song, mainstreamed globally via streaming.",
    synonyms: ["hit", "classic", "slaps"],
    related: ["slaps", "fire", "lit"],
  },
  {
    word: "drip",
    slug: "drip",
    partOfSpeech: "noun",
    pronunciation: "/drɪp/",
    definitions: [
      {
        text: "A stylish, fashionable outfit or appearance.",
        example: "His drip today is unmatched.",
      },
    ],
    etymology: "Popularized by Atlanta hip-hop in the late 2010s.",
    synonyms: ["style", "swag", "fit"],
    related: ["flex", "snatched", "glow-up"],
  },
  {
    word: "snatched",
    slug: "snatched",
    partOfSpeech: "adj",
    pronunciation: "/snætʃt/",
    definitions: [
      {
        text: "Looking very good, flawless, especially regarding appearance.",
        example: "Her waist is snatched.",
      },
    ],
    etymology: "From Black ballroom culture in the 1980s.",
    synonyms: ["flawless", "fierce"],
    related: ["drip", "slay", "glow-up"],
  },
  {
    word: "based",
    slug: "based",
    partOfSpeech: "adj",
    pronunciation: "/beɪst/",
    definitions: [
      {
        text: "Independently confident in one's beliefs, regardless of others' opinions.",
        example: "Hot take but based.",
      },
    ],
    etymology: "Coined by rapper Lil B in 2010 to invert the negative drug reference basehead.",
    synonyms: ["legit"],
    related: ["mid", "cope"],
  },
  {
    word: "mid",
    slug: "mid",
    partOfSpeech: "adj",
    pronunciation: "/mɪd/",
    definitions: [
      {
        text: "Mediocre, average, not great.",
        example: "The movie was kinda mid.",
      },
    ],
    etymology: "Shortened from middling, mainstreamed via gaming Twitter around 2021.",
    synonyms: ["meh", "average"],
    related: ["based", "cope"],
  },
  {
    word: "cope",
    slug: "cope",
    partOfSpeech: "verb",
    pronunciation: "/koʊp/",
    definitions: [
      {
        text: "To deal with disappointment, often used dismissively online.",
        example: "Don't like the result? Cope.",
      },
    ],
    etymology: "Old French coper (strike), modern slang use from competitive gaming and 4chan.",
    synonyms: ["seethe"],
    related: ["ratio", "l", "based"],
  },
  {
    word: "ratio",
    slug: "ratio",
    partOfSpeech: "verb",
    pronunciation: "/ˈreɪʃiˌoʊ/",
    definitions: [
      {
        text: "On social media, when a reply gets more engagement than the original post.",
        example: "He got ratio'd into oblivion.",
      },
    ],
    etymology: "From the Twitter reply-to-like ratio metric.",
    synonyms: ["dunked on"],
    related: ["cope", "l", "w"],
  },
  {
    word: "w",
    slug: "w",
    partOfSpeech: "noun",
    pronunciation: "/ˈdʌbəl.juː/",
    definitions: [
      {
        text: "A win; something positive.",
        example: "Got the job — big W.",
      },
    ],
    etymology: "Originated in esports chat as a short cheer for win.",
    synonyms: ["win"],
    related: ["l", "ratio"],
  },
  {
    word: "l",
    slug: "l",
    partOfSpeech: "noun",
    pronunciation: "/ɛl/",
    definitions: [
      {
        text: "A loss; something negative.",
        example: "Missed the bus — L.",
      },
    ],
    etymology: "Inverse of W, from gaming and esports chat.",
    synonyms: ["loss"],
    related: ["w", "cope", "ratio"],
  },
  {
    word: "npc",
    slug: "npc",
    partOfSpeech: "noun",
    pronunciation: "/ˌɛn.piːˈsiː/",
    definitions: [
      {
        text: "A person seen as unoriginal or behaving predictably, as if scripted.",
        example: "Stop being such an NPC.",
      },
    ],
    etymology: "Acronym for non-player character from video games.",
    synonyms: ["sheep", "drone"],
    related: ["based", "mid"],
  },

  // ---- Everyday English ----
  {
    word: "love",
    slug: "love",
    partOfSpeech: "noun",
    pronunciation: "/lʌv/",
    definitions: [
      {
        text: "An intense feeling of deep affection.",
        example: "Their love has lasted decades.",
      },
    ],
    etymology: "From Old English lufu, related to German Liebe.",
    synonyms: ["affection", "passion"],
    related: ["kiss", "friend", "family"],
    poll: {
      q: "Real love is…",
      o: ["Once in a lifetime", "Built every day", "Overrated"],
    },
  },
  {
    word: "kiss",
    slug: "kiss",
    partOfSpeech: "noun",
    pronunciation: "/kɪs/",
    definitions: [
      {
        text: "A touch with the lips as a sign of affection or greeting.",
        example: "A kiss on the cheek.",
      },
    ],
    etymology: "From Old English cyssan, of Germanic origin.",
    synonyms: ["smooch", "peck"],
    related: ["love", "friend"],
  },
  {
    word: "friend",
    slug: "friend",
    partOfSpeech: "noun",
    pronunciation: "/frɛnd/",
    definitions: [
      {
        text: "A person with whom one shares mutual affection.",
        example: "She's my closest friend.",
      },
    ],
    etymology: "From Old English frēond (one who loves).",
    synonyms: ["pal", "buddy", "bestie"],
    related: ["bestie", "bro", "family"],
  },
  {
    word: "family",
    slug: "family",
    partOfSpeech: "noun",
    pronunciation: "/ˈfæməli/",
    definitions: [
      {
        text: "A group of people related by blood, marriage, or adoption.",
        example: "The whole family gathered for Thanksgiving.",
      },
    ],
    etymology: "From Latin familia (household, servants).",
    synonyms: ["kin", "relatives"],
    related: ["love", "friend"],
  },
  {
    word: "work",
    slug: "work",
    partOfSpeech: "noun",
    pronunciation: "/wɜːrk/",
    definitions: [
      {
        text: "Activity involving mental or physical effort done to achieve a result.",
        example: "She left work early.",
      },
    ],
    etymology: "From Old English weorc.",
    synonyms: ["job", "labor"],
    related: ["home", "car"],
  },
  {
    word: "home",
    slug: "home",
    partOfSpeech: "noun",
    pronunciation: "/hoʊm/",
    definitions: [
      {
        text: "The place where one lives.",
        example: "I'm heading home.",
      },
    ],
    etymology: "From Old English hām (dwelling).",
    synonyms: ["house", "residence"],
    related: ["family", "work"],
  },
  {
    word: "car",
    slug: "car",
    partOfSpeech: "noun",
    pronunciation: "/kɑːr/",
    definitions: [
      {
        text: "A road vehicle, typically with four wheels, powered by an engine.",
        example: "His car broke down on the highway.",
      },
    ],
    etymology: "From Latin carrus (wheeled vehicle).",
    synonyms: ["auto", "vehicle"],
    related: ["work", "travel"],
  },
  {
    word: "sun",
    slug: "sun",
    partOfSpeech: "noun",
    pronunciation: "/sʌn/",
    definitions: [
      {
        text: "The star at the center of our solar system.",
        example: "The sun rose at six.",
      },
    ],
    etymology: "From Old English sunne.",
    synonyms: ["sunshine"],
    related: ["rain", "beach"],
  },
  {
    word: "rain",
    slug: "rain",
    partOfSpeech: "noun",
    pronunciation: "/reɪn/",
    definitions: [
      {
        text: "Water that falls in drops from the clouds.",
        example: "The rain stopped at noon.",
      },
    ],
    etymology: "From Old English regn.",
    synonyms: ["shower", "drizzle"],
    related: ["sun", "snow"],
  },
  {
    word: "snow",
    slug: "snow",
    partOfSpeech: "noun",
    pronunciation: "/snoʊ/",
    definitions: [
      {
        text: "Frozen water that falls as soft white flakes.",
        example: "Snow covered the mountains.",
      },
    ],
    etymology: "From Old English snāw.",
    synonyms: ["powder"],
    related: ["rain", "mountain"],
  },
  {
    word: "mountain",
    slug: "mountain",
    partOfSpeech: "noun",
    pronunciation: "/ˈmaʊntn/",
    definitions: [
      {
        text: "A large natural elevation of the earth's surface, larger than a hill.",
        example: "They climbed the mountain at dawn.",
      },
    ],
    etymology: "From Latin montanea, from mons (mount).",
    synonyms: ["peak", "summit"],
    related: ["sea", "snow", "travel"],
  },
  {
    word: "sea",
    slug: "sea",
    partOfSpeech: "noun",
    pronunciation: "/siː/",
    definitions: [
      {
        text: "The expanse of salt water that covers most of the earth's surface.",
        example: "We sailed across the sea.",
      },
    ],
    etymology: "From Old English sǣ.",
    synonyms: ["ocean"],
    related: ["beach", "sun", "travel"],
  },
  {
    word: "beach",
    slug: "beach",
    partOfSpeech: "noun",
    pronunciation: "/biːtʃ/",
    definitions: [
      {
        text: "A sandy or pebbly shore at the edge of a sea, river, or lake.",
        example: "We spent the day at the beach.",
      },
    ],
    etymology: "Originally referring to loose pebbles on the shore.",
    synonyms: ["shore", "coast"],
    related: ["sea", "sun", "vacation"],
  },
  {
    word: "coffee",
    slug: "coffee",
    partOfSpeech: "noun",
    pronunciation: "/ˈkɔːfi/",
    definitions: [
      {
        text: "A hot drink made from the roasted and ground beans of a tropical shrub.",
        example: "She drinks coffee every morning.",
      },
    ],
    etymology: "From Arabic qahwa via Turkish kahve and Italian caffè.",
    synonyms: ["brew", "joe"],
    related: ["wine", "bread"],
  },
  {
    word: "wine",
    slug: "wine",
    partOfSpeech: "noun",
    pronunciation: "/waɪn/",
    definitions: [
      {
        text: "An alcoholic drink made from fermented grape juice.",
        example: "A glass of red wine with dinner.",
      },
    ],
    etymology: "From Old English wīn, from Latin vinum.",
    synonyms: ["vino"],
    related: ["coffee", "bread", "cheese"],
  },
  {
    word: "bread",
    slug: "bread",
    partOfSpeech: "noun",
    pronunciation: "/brɛd/",
    definitions: [
      {
        text: "A staple food made by baking dough of flour and water.",
        example: "Fresh bread from the bakery.",
      },
    ],
    etymology: "From Old English brēad.",
    synonyms: ["loaf"],
    related: ["cheese", "wine", "coffee"],
  },
  {
    word: "cheese",
    slug: "cheese",
    partOfSpeech: "noun",
    pronunciation: "/tʃiːz/",
    definitions: [
      {
        text: "A food made from pressed curds of milk.",
        example: "A cheese platter for the guests.",
      },
    ],
    etymology: "From Old English cēse, from Latin caseus.",
    synonyms: [],
    related: ["bread", "wine"],
  },
  {
    word: "chocolate",
    slug: "chocolate",
    partOfSpeech: "noun",
    pronunciation: "/ˈtʃɒklɪt/",
    definitions: [
      {
        text: "A food made from roasted and ground cacao seeds.",
        example: "A bar of dark chocolate.",
      },
    ],
    etymology: "From Nahuatl xocolatl via Spanish.",
    synonyms: ["cocoa"],
    related: ["coffee", "happiness"],
  },
  {
    word: "happiness",
    slug: "happiness",
    partOfSpeech: "noun",
    pronunciation: "/ˈhæpinəs/",
    definitions: [
      {
        text: "The state of feeling pleasure or contentment.",
        example: "Her happiness was contagious.",
      },
    ],
    etymology: "From happy + -ness, from Old Norse happ (chance, luck).",
    synonyms: ["joy", "bliss"],
    related: ["joy", "love", "hope"],
  },
  {
    word: "sadness",
    slug: "sadness",
    partOfSpeech: "noun",
    pronunciation: "/ˈsædnəs/",
    definitions: [
      {
        text: "The feeling of being unhappy, especially because something bad has happened.",
        example: "A deep sadness fell over the room.",
      },
    ],
    etymology: "From Old English sæd (sated, weary).",
    synonyms: ["sorrow", "grief"],
    related: ["fear", "joy", "anger"],
  },
  {
    word: "fear",
    slug: "fear",
    partOfSpeech: "noun",
    pronunciation: "/fɪər/",
    definitions: [
      {
        text: "An unpleasant emotion caused by the threat of danger, real or imagined.",
        example: "He has a fear of heights.",
      },
    ],
    etymology: "From Old English fǣr (sudden danger).",
    synonyms: ["dread", "anxiety"],
    related: ["sadness", "joy"],
  },
  {
    word: "joy",
    slug: "joy",
    partOfSpeech: "noun",
    pronunciation: "/dʒɔɪ/",
    definitions: [
      {
        text: "A feeling of great pleasure and happiness.",
        example: "Tears of joy ran down her face.",
      },
    ],
    etymology: "From Latin gaudia, plural of gaudium.",
    synonyms: ["delight", "bliss"],
    related: ["happiness", "sadness", "surprise"],
  },
  {
    word: "anger",
    slug: "anger",
    partOfSpeech: "noun",
    pronunciation: "/ˈæŋɡər/",
    definitions: [
      {
        text: "A strong feeling of annoyance or hostility.",
        example: "He couldn't hide his anger.",
      },
    ],
    etymology: "From Old Norse angr (sorrow, distress).",
    synonyms: ["rage", "fury"],
    related: ["sadness", "salty"],
  },
  {
    word: "surprise",
    slug: "surprise",
    partOfSpeech: "noun",
    pronunciation: "/sərˈpraɪz/",
    definitions: [
      {
        text: "An unexpected or astonishing event or fact.",
        example: "What a pleasant surprise to see you.",
      },
    ],
    etymology: "From Old French surprise (overtaken, caught off guard).",
    synonyms: ["shock", "amazement"],
    related: ["joy", "hope"],
  },
  {
    word: "hope",
    slug: "hope",
    partOfSpeech: "noun",
    pronunciation: "/hoʊp/",
    definitions: [
      {
        text: "A feeling of expectation and desire for a certain thing to happen.",
        example: "Don't lose hope.",
      },
    ],
    etymology: "From Old English hopa.",
    synonyms: ["faith", "optimism"],
    related: ["dream", "joy"],
  },
  {
    word: "dream",
    slug: "dream",
    partOfSpeech: "noun",
    pronunciation: "/driːm/",
    definitions: [
      {
        text: "A series of images, ideas, emotions, and sensations occurring in the mind during sleep.",
        example: "I had a weird dream last night.",
      },
      {
        text: "A cherished aspiration, ambition, or ideal.",
        example: "Traveling the world is her dream.",
      },
    ],
    etymology: "From Old English drēam (joy, music), later shifting to its modern sense.",
    synonyms: ["vision", "aspiration"],
    related: ["sleep", "hope"],
  },
  {
    word: "sleep",
    slug: "sleep",
    partOfSpeech: "noun",
    pronunciation: "/sliːp/",
    definitions: [
      {
        text: "A natural state of rest during which the eyes are closed and consciousness is suspended.",
        example: "She needs eight hours of sleep.",
      },
    ],
    etymology: "From Old English slǣpan.",
    synonyms: ["slumber", "rest"],
    related: ["dream", "eat"],
  },
  {
    word: "eat",
    slug: "eat",
    partOfSpeech: "verb",
    pronunciation: "/iːt/",
    definitions: [
      {
        text: "To put food into the mouth and chew and swallow it.",
        example: "Let's eat in an hour.",
      },
    ],
    etymology: "From Old English etan.",
    synonyms: ["consume", "devour"],
    related: ["bread", "cheese", "wine"],
  },
  {
    word: "travel",
    slug: "travel",
    partOfSpeech: "noun",
    pronunciation: "/ˈtrævəl/",
    definitions: [
      {
        text: "The act of going from one place to another, especially over a distance.",
        example: "She loves to travel during summer.",
      },
    ],
    etymology: "From Old French travailler (to toil), referring originally to the hardship of a journey.",
    synonyms: ["trip", "journey"],
    related: ["vacation", "car", "sea"],
  },
  {
    word: "vacation",
    slug: "vacation",
    partOfSpeech: "noun",
    pronunciation: "/veɪˈkeɪʃən/",
    definitions: [
      {
        text: "An extended period of leisure away from work or duties.",
        example: "We're going on vacation next month.",
      },
    ],
    etymology: "From Latin vacatio (freedom, exemption).",
    synonyms: ["holiday", "break"],
    related: ["travel", "beach", "party"],
  },
  {
    word: "party",
    slug: "party",
    partOfSpeech: "noun",
    pronunciation: "/ˈpɑːrti/",
    definitions: [
      {
        text: "A social gathering of invited guests, usually for festivity.",
        example: "Are you coming to my party?",
      },
    ],
    etymology: "From Old French partie (part, share).",
    synonyms: ["bash", "celebration"],
    related: ["vacation", "music"],
  },
  {
    word: "music",
    slug: "music",
    partOfSpeech: "noun",
    pronunciation: "/ˈmjuːzɪk/",
    definitions: [
      {
        text: "Vocal or instrumental sounds combined to produce beauty of form, harmony, and expression of emotion.",
        example: "Music is her therapy.",
      },
    ],
    etymology: "From Latin musica, from Greek mousike (art of the muses).",
    synonyms: ["tunes"],
    related: ["party", "banger", "slaps"],
  },
  {
    word: "book",
    slug: "book",
    partOfSpeech: "noun",
    pronunciation: "/bʊk/",
    definitions: [
      {
        text: "A written or printed work consisting of pages bound together.",
        example: "She finished the book in two days.",
      },
    ],
    etymology: "From Old English bōc.",
    synonyms: ["volume", "novel"],
    related: ["dream", "home"],
  },
];

export const FR_SLUGS: string[] = FR_WORDS.map((w) => w.slug);
export const EN_SLUGS: string[] = EN_WORDS.map((w) => w.slug);

export function findFrWord(slug: string): WordEntry | undefined {
  return FR_WORDS.find((w) => w.slug === slug);
}

export function findEnWord(slug: string): WordEntry | undefined {
  return EN_WORDS.find((w) => w.slug === slug);
}

// =====================================================================
// LOCALIZED UI STRINGS (8 langs) — labels rendered around every entry.
// =====================================================================

type LabelKey =
  | "definition"
  | "etymology"
  | "synonyms"
  | "howToUse"
  | "createPoll"
  | "relatedWords"
  | "allWords"
  | "pronunciation"
  | "partOfSpeech"
  | "back"
  | "hubTitleFr"
  | "hubTitleEn"
  | "hubSubtitle"
  | "noPoll"
  | "letterFilter";

export const LABELS: Record<Locale, Record<LabelKey, string>> = {
  fr: {
    definition: "Définition",
    etymology: "Étymologie",
    synonyms: "Synonymes",
    howToUse: "Comment utiliser",
    createPoll: "Lancer un sondage",
    relatedWords: "Mots liés",
    allWords: "Tous les mots",
    pronunciation: "Prononciation",
    partOfSpeech: "Nature",
    back: "← Retour au dictionnaire",
    hubTitleFr: "Dictionnaire français",
    hubTitleEn: "English dictionary",
    hubSubtitle: "Définitions courtes, slang Gen Z et mots de tous les jours.",
    noPoll: "Pas encore de sondage lié",
    letterFilter: "Lettre",
  },
  en: {
    definition: "Definition",
    etymology: "Etymology",
    synonyms: "Synonyms",
    howToUse: "How to use",
    createPoll: "Create a poll",
    relatedWords: "Related words",
    allWords: "All words",
    pronunciation: "Pronunciation",
    partOfSpeech: "Part of speech",
    back: "← Back to dictionary",
    hubTitleFr: "Dictionnaire français",
    hubTitleEn: "English dictionary",
    hubSubtitle: "Short definitions, Gen Z slang and everyday words.",
    noPoll: "No related poll yet",
    letterFilter: "Letter",
  },
  es: {
    definition: "Definición",
    etymology: "Etimología",
    synonyms: "Sinónimos",
    howToUse: "Cómo usar",
    createPoll: "Crear una encuesta",
    relatedWords: "Palabras relacionadas",
    allWords: "Todas las palabras",
    pronunciation: "Pronunciación",
    partOfSpeech: "Categoría",
    back: "← Volver al diccionario",
    hubTitleFr: "Diccionario francés",
    hubTitleEn: "Diccionario inglés",
    hubSubtitle: "Definiciones cortas, jerga Gen Z y palabras cotidianas.",
    noPoll: "Aún no hay encuesta relacionada",
    letterFilter: "Letra",
  },
  it: {
    definition: "Definizione",
    etymology: "Etimologia",
    synonyms: "Sinonimi",
    howToUse: "Come usare",
    createPoll: "Crea un sondaggio",
    relatedWords: "Parole correlate",
    allWords: "Tutte le parole",
    pronunciation: "Pronuncia",
    partOfSpeech: "Categoria",
    back: "← Torna al dizionario",
    hubTitleFr: "Dizionario francese",
    hubTitleEn: "Dizionario inglese",
    hubSubtitle: "Definizioni brevi, slang Gen Z e parole di tutti i giorni.",
    noPoll: "Nessun sondaggio collegato",
    letterFilter: "Lettera",
  },
  pt: {
    definition: "Definição",
    etymology: "Etimologia",
    synonyms: "Sinônimos",
    howToUse: "Como usar",
    createPoll: "Criar uma enquete",
    relatedWords: "Palavras relacionadas",
    allWords: "Todas as palavras",
    pronunciation: "Pronúncia",
    partOfSpeech: "Categoria",
    back: "← Voltar ao dicionário",
    hubTitleFr: "Dicionário francês",
    hubTitleEn: "Dicionário inglês",
    hubSubtitle: "Definições curtas, gíria Gen Z e palavras do dia a dia.",
    noPoll: "Sem enquete relacionada ainda",
    letterFilter: "Letra",
  },
  de: {
    definition: "Definition",
    etymology: "Etymologie",
    synonyms: "Synonyme",
    howToUse: "Verwendung",
    createPoll: "Umfrage erstellen",
    relatedWords: "Verwandte Wörter",
    allWords: "Alle Wörter",
    pronunciation: "Aussprache",
    partOfSpeech: "Wortart",
    back: "← Zurück zum Wörterbuch",
    hubTitleFr: "Französisches Wörterbuch",
    hubTitleEn: "Englisches Wörterbuch",
    hubSubtitle: "Kurze Definitionen, Gen-Z-Slang und Alltagswörter.",
    noPoll: "Noch keine passende Umfrage",
    letterFilter: "Buchstabe",
  },
  ja: {
    definition: "意味",
    etymology: "語源",
    synonyms: "類義語",
    howToUse: "使い方",
    createPoll: "アンケートを作成",
    relatedWords: "関連語",
    allWords: "すべての単語",
    pronunciation: "発音",
    partOfSpeech: "品詞",
    back: "← 辞書に戻る",
    hubTitleFr: "フランス語辞典",
    hubTitleEn: "英語辞典",
    hubSubtitle: "短い定義、Z世代のスラング、日常語。",
    noPoll: "関連アンケートはまだありません",
    letterFilter: "文字",
  },
  zh: {
    definition: "释义",
    etymology: "词源",
    synonyms: "近义词",
    howToUse: "如何使用",
    createPoll: "创建投票",
    relatedWords: "相关词",
    allWords: "所有词",
    pronunciation: "发音",
    partOfSpeech: "词性",
    back: "← 返回词典",
    hubTitleFr: "法语词典",
    hubTitleEn: "英语词典",
    hubSubtitle: "简短定义、Z 世代俚语和日常用语。",
    noPoll: "暂无相关投票",
    letterFilter: "字母",
  },
};

export function getLabels(locale: Locale): Record<LabelKey, string> {
  return LABELS[locale] ?? LABELS.en;
}
