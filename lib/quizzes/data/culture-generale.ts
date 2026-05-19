import type { Quiz } from "../types";

export const cultureGeneraleQuizzes: Quiz[] = [
  {
    slug: "quiz-litterature-francaise-grands-auteurs",
    title: "Quiz littérature française : reconnais-tu ces grands auteurs ?",
    description: "Hugo, Camus, Proust, Modiano... Teste tes connaissances sur les géants de la littérature française à travers 10 questions sur leurs œuvres cultes.",
    topic: "culture-generale",
    emoji: "📚",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "Qui a écrit Les Misérables ?",
        options: ["Émile Zola", "Victor Hugo", "Honoré de Balzac", "Alexandre Dumas"],
        correct: 1,
        explainer: "Victor Hugo publie Les Misérables en 1862, en exil à Guernesey. Le roman suit Jean Valjean sur plusieurs décennies et reste l'un des piliers du romantisme français."
      },
      {
        q: "Quel roman ouvre par 'Aujourd'hui, maman est morte' ?",
        options: ["La Peste", "L'Étranger", "La Chute", "Le Mythe de Sisyphe"],
        correct: 1,
        explainer: "C'est l'incipit célèbre de L'Étranger (1942) d'Albert Camus, qui pose immédiatement le ton détaché de Meursault. Camus reçoit le Nobel de littérature en 1957."
      },
      {
        q: "Combien de tomes compte À la recherche du temps perdu de Proust ?",
        options: ["3", "5", "7", "12"],
        correct: 2,
        explainer: "Marcel Proust a écrit sept tomes, de Du côté de chez Swann (1913) au Temps retrouvé (1927, posthume). Les trois derniers volumes paraissent après sa mort en 1922."
      },
      {
        q: "Quel auteur français a reçu le Nobel de littérature en 2014 ?",
        options: ["Patrick Modiano", "Jean-Marie Le Clézio", "Annie Ernaux", "Michel Houellebecq"],
        correct: 0,
        explainer: "Patrick Modiano reçoit le Nobel en 2014 pour son œuvre obsédée par la mémoire et l'Occupation. Annie Ernaux le recevra en 2022."
      },
      {
        q: "Qui a écrit Madame Bovary ?",
        options: ["Stendhal", "Gustave Flaubert", "Guy de Maupassant", "Honoré de Balzac"],
        correct: 1,
        explainer: "Gustave Flaubert publie Madame Bovary en 1857. Le roman provoque un procès pour outrage à la morale, dont Flaubert sort acquitté."
      },
      {
        q: "Dans quel recueil trouve-t-on le poème Le Dormeur du val ?",
        options: ["Les Fleurs du mal", "Poésies de Rimbaud", "Alcools", "Capitale de la douleur"],
        correct: 1,
        explainer: "Le Dormeur du val est un sonnet écrit par Arthur Rimbaud en octobre 1870, alors qu'il n'a que 16 ans. Il évoque la guerre franco-prussienne."
      },
      {
        q: "Qui est l'auteur de La Cantatrice chauve ?",
        options: ["Samuel Beckett", "Eugène Ionesco", "Jean Genet", "Jean Anouilh"],
        correct: 1,
        explainer: "Eugène Ionesco crée La Cantatrice chauve en 1950, pièce fondatrice du théâtre de l'absurde. Elle se joue sans interruption au Théâtre de la Huchette depuis 1957."
      },
      {
        q: "Quel personnage est le héros du roman Le Comte de Monte-Cristo ?",
        options: ["D'Artagnan", "Edmond Dantès", "Jean Valjean", "Julien Sorel"],
        correct: 1,
        explainer: "Edmond Dantès, marin marseillais injustement emprisonné au château d'If, devient le Comte de Monte-Cristo. Le roman d'Alexandre Dumas paraît en feuilleton en 1844-1846."
      },
      {
        q: "Qui a écrit Le Deuxième Sexe en 1949 ?",
        options: ["Marguerite Duras", "Simone de Beauvoir", "Colette", "Françoise Sagan"],
        correct: 1,
        explainer: "Simone de Beauvoir publie Le Deuxième Sexe en 1949, essai fondateur du féminisme contemporain avec sa formule 'On ne naît pas femme, on le devient'."
      },
      {
        q: "Quelle est la profession de Bardamu dans Voyage au bout de la nuit ?",
        options: ["Avocat", "Médecin", "Journaliste", "Professeur"],
        correct: 1,
        explainer: "Bardamu est médecin, comme l'auteur Louis-Ferdinand Céline. Le roman, paru en 1932, révolutionne la langue littéraire avec son oralité crue."
      }
    ]
  },
  {
    slug: "quiz-philosophie-occidentale-grands-penseurs",
    title: "Quiz philosophie : Descartes, Sartre, Nietzsche et les autres",
    description: "Des présocratiques à l'existentialisme, teste tes connaissances sur les philosophes qui ont façonné la pensée occidentale en 10 questions costaudes.",
    topic: "culture-generale",
    emoji: "🧠",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "Qui a écrit 'Je pense, donc je suis' ?",
        options: ["Spinoza", "Descartes", "Pascal", "Leibniz"],
        correct: 1,
        explainer: "René Descartes formule le cogito dans le Discours de la méthode (1637), puis le reprend en latin 'Cogito ergo sum' dans les Principes (1644)."
      },
      {
        q: "Quel philosophe a proclamé 'Dieu est mort' ?",
        options: ["Schopenhauer", "Nietzsche", "Heidegger", "Kierkegaard"],
        correct: 1,
        explainer: "Friedrich Nietzsche écrit cette formule dans Le Gai Savoir (1882), reprise dans Ainsi parlait Zarathoustra. Il y diagnostique la fin des certitudes métaphysiques."
      },
      {
        q: "Quelle œuvre majeure Sartre publie-t-il en 1943 ?",
        options: ["La Nausée", "L'Être et le Néant", "Les Mots", "Huis clos"],
        correct: 1,
        explainer: "L'Être et le Néant est le grand traité d'ontologie phénoménologique de Jean-Paul Sartre, fondement de l'existentialisme français."
      },
      {
        q: "Qui est l'auteur de la Critique de la raison pure ?",
        options: ["Hegel", "Kant", "Fichte", "Schelling"],
        correct: 1,
        explainer: "Emmanuel Kant publie la Critique de la raison pure en 1781, ouvrant la philosophie transcendantale. Il y distingue phénomènes et noumènes."
      },
      {
        q: "Quel philosophe grec enseignait dans l'Académie ?",
        options: ["Socrate", "Platon", "Aristote", "Épicure"],
        correct: 1,
        explainer: "Platon fonde l'Académie vers -387 à Athènes. Aristote, son élève, fondera plus tard le Lycée. L'Académie subsistera presque 1000 ans."
      },
      {
        q: "Qui a écrit Le Contrat social en 1762 ?",
        options: ["Voltaire", "Rousseau", "Montesquieu", "Diderot"],
        correct: 1,
        explainer: "Jean-Jacques Rousseau publie Du contrat social en 1762. L'ouvrage commence par 'L'homme est né libre, et partout il est dans les fers'."
      },
      {
        q: "Quelle école philosophique prônait l'ataraxie ?",
        options: ["Le stoïcisme", "L'épicurisme", "Le cynisme", "Le scepticisme"],
        correct: 1,
        explainer: "L'épicurisme vise l'ataraxie, absence de troubles de l'âme. Épicure (-341 à -270) la distinguait de la simple recherche du plaisir."
      },
      {
        q: "Quel philosophe a écrit Le Capital ?",
        options: ["Friedrich Engels", "Karl Marx", "Pierre-Joseph Proudhon", "Mikhaïl Bakounine"],
        correct: 1,
        explainer: "Karl Marx publie le tome 1 du Capital en 1867. Les tomes 2 et 3 paraîtront après sa mort, édités par Engels en 1885 et 1894."
      },
      {
        q: "Qui a inventé le concept de 'banalité du mal' ?",
        options: ["Simone Weil", "Hannah Arendt", "Judith Butler", "Susan Sontag"],
        correct: 1,
        explainer: "Hannah Arendt forge l'expression dans Eichmann à Jérusalem (1963), reportage sur le procès du criminel nazi. Elle y voit un mal de l'irréflexion."
      },
      {
        q: "Qui est l'auteur de Surveiller et punir ?",
        options: ["Gilles Deleuze", "Michel Foucault", "Jacques Derrida", "Roland Barthes"],
        correct: 1,
        explainer: "Michel Foucault publie Surveiller et punir en 1975. Il y analyse la naissance de la prison moderne et le passage du supplice à la discipline."
      }
    ]
  },
  {
    slug: "quiz-mythologie-grecque-zeus-olympe",
    title: "Quiz mythologie grecque : dieux, héros et monstres de l'Olympe",
    description: "Zeus, Athéna, Héraclès... Plonge dans le panthéon grec et teste tes connaissances sur les dieux, héros et créatures de la mythologie antique.",
    topic: "culture-generale",
    emoji: "🏛️",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "Qui est la déesse grecque de la sagesse ?",
        options: ["Héra", "Athéna", "Aphrodite", "Artémis"],
        correct: 1,
        explainer: "Athéna, fille de Zeus née armée de sa tête, est la déesse de la sagesse, de la stratégie militaire et des arts. Elle protège la ville d'Athènes."
      },
      {
        q: "Combien de travaux Héraclès doit-il accomplir ?",
        options: ["7", "10", "12", "15"],
        correct: 2,
        explainer: "Héraclès accomplit 12 travaux imposés par Eurysthée, dont tuer l'Hydre de Lerne, capturer le sanglier d'Érymanthe ou nettoyer les écuries d'Augias."
      },
      {
        q: "Qui est le messager des dieux ?",
        options: ["Apollon", "Hermès", "Dionysos", "Arès"],
        correct: 1,
        explainer: "Hermès, fils de Zeus et Maïa, est le messager aux sandales ailées. Il guide aussi les âmes vers les Enfers (psychopompe) et protège voyageurs et voleurs."
      },
      {
        q: "Qui a ouvert la boîte funeste de la mythologie grecque ?",
        options: ["Hélène", "Pandore", "Cassandre", "Médée"],
        correct: 1,
        explainer: "Pandore, première femme créée par Héphaïstos, ouvre la jarre (et non la boîte, erreur de traduction d'Érasme) libérant tous les maux. Seule l'espérance reste au fond."
      },
      {
        q: "Quel monstre Œdipe doit-il vaincre devant Thèbes ?",
        options: ["La Méduse", "Le Sphinx", "La Chimère", "Le Minotaure"],
        correct: 1,
        explainer: "Œdipe résout l'énigme du Sphinx ('Quel être marche à quatre pattes le matin...') qui se jette alors dans le vide. Cela lui ouvre les portes de Thèbes."
      },
      {
        q: "Qui est le dieu grec de la mer ?",
        options: ["Hadès", "Poséidon", "Triton", "Océan"],
        correct: 1,
        explainer: "Poséidon, frère de Zeus et Hadès, règne sur les mers avec son trident. Il provoque tempêtes et tremblements de terre quand on l'offense."
      },
      {
        q: "Combien d'Olympiens compte-t-on traditionnellement ?",
        options: ["10", "12", "14", "9"],
        correct: 1,
        explainer: "Le panthéon olympien compte 12 dieux principaux : Zeus, Héra, Poséidon, Déméter, Athéna, Apollon, Artémis, Arès, Aphrodite, Héphaïstos, Hermès et Dionysos (ou Hestia)."
      },
      {
        q: "Qui transforme tout ce qu'il touche en or ?",
        options: ["Crésus", "Midas", "Tantale", "Sisyphe"],
        correct: 1,
        explainer: "Le roi Midas reçoit ce don de Dionysos en remerciement, mais le regrette quand il ne peut plus manger ni embrasser sa fille devenue statue d'or."
      },
      {
        q: "Qui guide Thésée hors du Labyrinthe grâce à un fil ?",
        options: ["Ariane", "Phèdre", "Hippolyte", "Pasiphaé"],
        correct: 0,
        explainer: "Ariane, fille du roi Minos, donne à Thésée un fil pour retrouver son chemin après avoir tué le Minotaure. Thésée l'abandonnera ensuite à Naxos."
      },
      {
        q: "Quel héros vole le feu aux dieux pour le donner aux hommes ?",
        options: ["Atlas", "Prométhée", "Épiméthée", "Deucalion"],
        correct: 1,
        explainer: "Prométhée, Titan ami des humains, vole le feu de l'Olympe dans une tige de fenouil. Zeus le punit en l'enchaînant au Caucase, son foie dévoré chaque jour par un aigle."
      }
    ]
  },
  {
    slug: "quiz-arts-plastiques-peintres-legendaires",
    title: "Quiz peinture : Da Vinci, Monet, Picasso et les chefs-d'œuvre",
    description: "De la Renaissance au cubisme, reconnais les tableaux célèbres et leurs créateurs. Un voyage en 10 questions à travers l'histoire de l'art.",
    topic: "culture-generale",
    emoji: "🎨",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "Qui a peint La Joconde ?",
        options: ["Michel-Ange", "Léonard de Vinci", "Raphaël", "Botticelli"],
        correct: 1,
        explainer: "Léonard de Vinci peint La Joconde (Mona Lisa) entre 1503 et 1519. Le tableau est exposé au Louvre depuis 1804 et fut volé en 1911 par Vincenzo Peruggia."
      },
      {
        q: "Quel mouvement artistique Picasso a-t-il cofondé ?",
        options: ["Le fauvisme", "Le cubisme", "Le surréalisme", "L'expressionnisme"],
        correct: 1,
        explainer: "Pablo Picasso et Georges Braque inventent le cubisme vers 1907-1908. Les Demoiselles d'Avignon (1907) est considéré comme le tableau pionnier."
      },
      {
        q: "Qui a peint la série des Nymphéas ?",
        options: ["Renoir", "Monet", "Pissarro", "Manet"],
        correct: 1,
        explainer: "Claude Monet peint environ 250 Nymphéas entre 1897 et sa mort en 1926, dans son jardin de Giverny. Les grandes toiles ornent l'Orangerie à Paris."
      },
      {
        q: "Dans quel musée est exposée La Nuit étoilée de Van Gogh ?",
        options: ["Louvre, Paris", "MoMA, New York", "Musée Van Gogh, Amsterdam", "Orsay, Paris"],
        correct: 1,
        explainer: "La Nuit étoilée (1889) est conservée au MoMA de New York depuis 1941. Van Gogh la peint depuis sa chambre de l'asile Saint-Paul-de-Mausole à Saint-Rémy."
      },
      {
        q: "Qui a peint le plafond de la chapelle Sixtine ?",
        options: ["Léonard de Vinci", "Michel-Ange", "Raphaël", "Le Bernin"],
        correct: 1,
        explainer: "Michel-Ange peint le plafond de la Sixtine entre 1508 et 1512, sur commande du pape Jules II. La Création d'Adam en est la fresque la plus célèbre."
      },
      {
        q: "Quel peintre espagnol a réalisé Guernica en 1937 ?",
        options: ["Dalí", "Picasso", "Miró", "Goya"],
        correct: 1,
        explainer: "Pablo Picasso peint Guernica en réaction au bombardement de la ville basque par l'aviation nazie pendant la guerre d'Espagne. Le tableau est au musée Reina Sofía à Madrid."
      },
      {
        q: "Qui est l'auteur de La Persistance de la mémoire (montres molles) ?",
        options: ["Max Ernst", "Salvador Dalí", "René Magritte", "Joan Miró"],
        correct: 1,
        explainer: "Salvador Dalí peint cette icône surréaliste en 1931. Les montres molles évoqueraient un camembert fondant au soleil, selon les propres mots de l'artiste."
      },
      {
        q: "Quel courant a inspiré le titre du tableau Impression, soleil levant ?",
        options: ["Le post-impressionnisme", "L'impressionnisme", "Le pointillisme", "Le néo-impressionnisme"],
        correct: 1,
        explainer: "Le tableau de Monet (1872), exposé en 1874, inspire au critique Louis Leroy le terme moqueur 'impressionniste' qui sera revendiqué par les peintres."
      },
      {
        q: "Qui a sculpté Le Penseur ?",
        options: ["Rodin", "Camille Claudel", "Bourdelle", "Maillol"],
        correct: 0,
        explainer: "Auguste Rodin conçoit Le Penseur vers 1880 comme partie de La Porte de l'Enfer. La version monumentale en bronze date de 1904 et représente Dante méditant."
      },
      {
        q: "Quel peintre néerlandais a réalisé La Jeune Fille à la perle ?",
        options: ["Rembrandt", "Vermeer", "Van Eyck", "Bosch"],
        correct: 1,
        explainer: "Johannes Vermeer peint ce tronie vers 1665. Le tableau, conservé au Mauritshuis de La Haye, est surnommé 'la Joconde du Nord'."
      }
    ]
  },
  {
    slug: "quiz-expressions-francaises-origines-cachees",
    title: "Quiz expressions françaises : connais-tu leurs vraies origines ?",
    description: "Pourquoi dit-on 'rendre son tablier' ou 'tomber dans les pommes' ? Découvre l'histoire surprenante de 10 expressions du quotidien.",
    topic: "culture-generale",
    emoji: "📖",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "D'où vient l'expression 'tirer le diable par la queue' ?",
        options: ["Du Moyen Âge religieux", "Des contes médiévaux où le diable lâchait ses victimes", "Du folklore breton", "De la Bible"],
        correct: 1,
        explainer: "L'expression du XVIIe siècle évoque l'image d'un pauvre tirant le diable par la queue pour lui arracher de quoi vivre. Elle signifie peiner à joindre les deux bouts."
      },
      {
        q: "Que veut littéralement dire 'avoir du pain sur la planche' à l'origine ?",
        options: ["Avoir du travail à faire", "Avoir des réserves pour longtemps", "Être boulanger", "Manger en groupe"],
        correct: 1,
        explainer: "Avant le XXe siècle, l'expression signifiait l'inverse : avoir des provisions de pain stockées sur des planches au plafond. Le sens s'est inversé vers 1930."
      },
      {
        q: "Pourquoi dit-on 'poser un lapin' ?",
        options: ["À cause d'un magicien", "Argot du XIXe pour payer un service galant", "Référence à la chasse", "Tradition paysanne"],
        correct: 1,
        explainer: "Au XIXe siècle, 'poser un lapin' signifiait ne pas rétribuer les faveurs d'une fille. Le sens d'absence à un rendez-vous est apparu vers 1890."
      },
      {
        q: "D'où vient 'tomber dans les pommes' ?",
        options: ["George Sand a écrit 'être dans les pommes cuites'", "D'un verger normand", "De la cuisine médiévale", "D'une fable de La Fontaine"],
        correct: 0,
        explainer: "George Sand utilise 'être dans les pommes cuites' dans une lettre de 1864 pour dire être épuisée. L'expression viendrait d'une déformation de 'pâmes' (pâmoison)."
      },
      {
        q: "Que désignait à l'origine 'un canard' dans la presse ?",
        options: ["Un journaliste novice", "Une fausse nouvelle", "Un journal du dimanche", "Un éditeur ruiné"],
        correct: 1,
        explainer: "Au XVIIIe siècle, 'vendre un canard à moitié' signifiait tromper, d'où 'canard' pour fausse nouvelle. Puis le mot a désigné un journal de mauvaise qualité, puis tout journal."
      },
      {
        q: "Pourquoi 'cousu de fil blanc' veut dire 'évident' ?",
        options: ["Les couturières apprenties utilisaient du fil blanc", "Le fil blanc se voit sur les tissus sombres", "Les vêtements de luxe l'évitaient", "Les soldats du roi le portaient"],
        correct: 1,
        explainer: "Le fil blanc se voit immédiatement sur du tissu de couleur, alors qu'un bon ouvrage utilise du fil assorti. Une supercherie cousue de fil blanc se repère donc d'un coup d'œil."
      },
      {
        q: "Que signifie 'rendre son tablier' à l'origine ?",
        options: ["Devenir maître artisan", "Démissionner d'un emploi de domestique", "Se marier", "Quitter la cuisine"],
        correct: 1,
        explainer: "Les domestiques et cuisiniers portaient un tablier comme uniforme. Le rendre signifiait quitter son service. L'expression date du XIXe siècle."
      },
      {
        q: "D'où vient 'avoir maille à partir' ?",
        options: ["Du verbe 'partir' au sens ancien de partager", "D'un terme de couture", "D'un proverbe breton", "Du jeu de cartes"],
        correct: 0,
        explainer: "La maille était la plus petite pièce de monnaie médiévale. 'Partir' signifiait 'partager'. Avoir maille à partir = se disputer un demi-denier, donc avoir un différend."
      },
      {
        q: "Pourquoi dit-on 'travailler pour le roi de Prusse' ?",
        options: ["Frédéric II payait mal ses soldats", "Le roi exigeait des heures sup", "Référence à Voltaire à Berlin", "Tradition militaire"],
        correct: 0,
        explainer: "Frédéric-Guillaume Ier de Prusse était connu pour mal payer ses soldats, et son fils Frédéric II l'a suivi. L'expression signifie travailler beaucoup pour rien."
      },
      {
        q: "D'où vient 'à la queue leu leu' ?",
        options: ["Du loup ('leu' en ancien français)", "D'une danse paysanne", "Du nom d'un général", "D'un mot italien"],
        correct: 0,
        explainer: "'Leu' est l'ancien français pour 'loup' (du latin lupus). Les loups marchent en file indienne, l'expression date du Moyen Âge et signifie 'à la queue du loup, le loup'."
      }
    ]
  },
  {
    slug: "quiz-etymologie-mots-francais-surprenants",
    title: "Quiz étymologie : connais-tu la vraie origine de ces mots ?",
    description: "Bizarre, salaire, vaccin... Chaque mot cache une histoire. Teste ton sens de l'étymologie avec 10 mots du quotidien aux racines insoupçonnées.",
    topic: "culture-generale",
    emoji: "📖",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "D'où vient le mot 'salaire' ?",
        options: ["Du latin sal (sel)", "Du grec salarios", "De l'arabe salar", "Du germanique sal"],
        correct: 0,
        explainer: "Les légionnaires romains recevaient une ration de sel ou de l'argent pour l'acheter : le salarium. Le sel servait à conserver la viande et valait cher."
      },
      {
        q: "D'où vient le mot 'vaccin' ?",
        options: ["Du latin vacca (vache)", "Du nom du Dr Vaccin", "De l'italien vaccino", "Du sanskrit"],
        correct: 0,
        explainer: "Edward Jenner inocule en 1796 le virus de la vaccine (variole de la vache, vacca en latin) pour protéger contre la variole humaine. D'où le nom."
      },
      {
        q: "Quelle est l'origine de 'bizarre' ?",
        options: ["Du basque bizar (barbe)", "De l'italien bizarro", "De l'arabe", "Du grec"],
        correct: 0,
        explainer: "Le mot vient du basque 'bizar' (barbe), via l'espagnol bizarro qui signifiait 'fougueux, brave' avant de prendre en français le sens d'étrange au XVIIe siècle."
      },
      {
        q: "D'où vient 'sabotage' ?",
        options: ["D'ouvriers jetant leurs sabots dans les machines", "Du verbe saboter (mal travailler avec ses sabots)", "D'un général prussien", "D'un mot anglais"],
        correct: 1,
        explainer: "L'image des ouvriers jetant leurs sabots dans les machines est un mythe. Saboter signifiait d'abord 'faire du bruit avec ses sabots', puis 'travailler vite et mal'."
      },
      {
        q: "Que signifiait à l'origine 'travail' en latin ?",
        options: ["Effort", "Instrument de torture (tripalium)", "Champ", "Outil agricole"],
        correct: 1,
        explainer: "Le tripalium était un instrument à trois pieux utilisé pour immobiliser les chevaux ou torturer. Le mot a évolué vers l'effort pénible, puis le travail moderne."
      },
      {
        q: "D'où vient le mot 'algèbre' ?",
        options: ["De l'arabe al-jabr (réunion)", "Du grec algos (douleur)", "Du latin algebra", "D'un mathématicien italien"],
        correct: 0,
        explainer: "Le mot vient de l'arabe 'al-jabr' (la réduction), du titre du traité d'Al-Khwarizmi au IXe siècle. Le nom de ce mathématicien a aussi donné 'algorithme'."
      },
      {
        q: "D'où vient le mot 'café' ?",
        options: ["De l'arabe qahwa", "Du turc kahve", "De l'éthiopien Kaffa", "Toutes ces réponses sont liées"],
        correct: 3,
        explainer: "Le mot vient de l'arabe 'qahwa', passé au turc 'kahve', puis à l'italien 'caffè'. La région de Kaffa en Éthiopie serait le berceau de la plante elle-même."
      },
      {
        q: "Que signifiait 'candidat' chez les Romains ?",
        options: ["Vêtu de blanc", "Choisi par le peuple", "Jeune", "Riche"],
        correct: 0,
        explainer: "Du latin 'candidatus', vêtu d'une toge blanchie à la craie (candidus = blanc éclatant). Les briguants romains portaient cette toge pour symboliser leur pureté."
      },
      {
        q: "D'où vient 'panique' ?",
        options: ["Du dieu Pan", "Du grec panikos (universel)", "Du latin", "Du français médiéval"],
        correct: 0,
        explainer: "Le dieu grec Pan, mi-bouc mi-homme, provoquait par ses cris des terreurs subites dans les bois. La 'terreur panique' signifie originellement 'inspirée par Pan'."
      },
      {
        q: "D'où vient 'cauchemar' ?",
        options: ["Du latin calx-mare", "Du néerlandais mare (fantôme oppressant)", "D'un proverbe normand", "De l'arabe"],
        correct: 1,
        explainer: "De 'cauche' (vieux français 'fouler, presser') et 'mare', un fantôme nocturne en vieux néerlandais et néo-anglais (nightmare). Le cauchemar est ce qui pèse sur le dormeur."
      }
    ]
  },
  {
    slug: "quiz-prix-nobel-laureats-celebres",
    title: "Quiz prix Nobel : reconnais-tu ces lauréats célèbres ?",
    description: "De Marie Curie à Malala, teste tes connaissances sur les prix Nobel : sciences, paix, littérature... 10 questions sur les lauréats marquants.",
    topic: "culture-generale",
    emoji: "🌟",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "Qui a fondé les prix Nobel ?",
        options: ["Un industriel suédois", "Un mathématicien norvégien", "Un philanthrope danois", "Un roi de Suède"],
        correct: 0,
        explainer: "Alfred Nobel, inventeur suédois de la dynamite, lègue sa fortune en 1895 pour créer les prix. La première remise a lieu en 1901, cinq ans après sa mort."
      },
      {
        q: "Combien de prix Nobel Marie Curie a-t-elle reçus ?",
        options: ["1", "2", "3", "4"],
        correct: 1,
        explainer: "Marie Curie reçoit le Nobel de physique en 1903 (avec Pierre Curie et Henri Becquerel) et celui de chimie en 1911. Elle est la première femme nobélisée et la seule en deux disciplines scientifiques."
      },
      {
        q: "Quel scientifique a reçu le Nobel de physique en 1921 ?",
        options: ["Niels Bohr", "Albert Einstein", "Max Planck", "Werner Heisenberg"],
        correct: 1,
        explainer: "Albert Einstein reçoit le Nobel en 1921 pour sa découverte de l'effet photoélectrique, et non pour la relativité jugée encore trop théorique à l'époque."
      },
      {
        q: "Qui est la plus jeune lauréate du Nobel de la paix ?",
        options: ["Malala Yousafzai", "Greta Thunberg", "Rigoberta Menchú", "Wangari Maathai"],
        correct: 0,
        explainer: "Malala Yousafzai reçoit le Nobel de la paix à 17 ans en 2014, conjointement avec Kailash Satyarthi, pour son combat pour l'éducation des filles."
      },
      {
        q: "Quel président américain a reçu le Nobel de la paix en 2009 ?",
        options: ["Bill Clinton", "Barack Obama", "Jimmy Carter", "Al Gore"],
        correct: 1,
        explainer: "Barack Obama reçoit le Nobel de la paix en 2009, seulement neuf mois après son investiture, pour ses efforts en faveur de la diplomatie internationale."
      },
      {
        q: "Quelle romancière française a reçu le Nobel de littérature en 2022 ?",
        options: ["Leïla Slimani", "Annie Ernaux", "Marie NDiaye", "Maylis de Kerangal"],
        correct: 1,
        explainer: "Annie Ernaux reçoit le Nobel en 2022 pour 'le courage et l'acuité avec laquelle elle découvre les racines, les éloignements et les contraintes collectives de la mémoire personnelle'."
      },
      {
        q: "Qui a refusé le Nobel de littérature en 1964 ?",
        options: ["Boris Pasternak", "Jean-Paul Sartre", "Samuel Beckett", "Albert Camus"],
        correct: 1,
        explainer: "Jean-Paul Sartre refuse le Nobel en 1964 pour ne pas être 'transformé en institution'. Boris Pasternak avait été contraint de le refuser en 1958 par le régime soviétique."
      },
      {
        q: "Quelle scientifique française a reçu le Nobel de chimie en 2020 ?",
        options: ["Catherine Vidal", "Emmanuelle Charpentier", "Françoise Combes", "Esther Duflo"],
        correct: 1,
        explainer: "Emmanuelle Charpentier et Jennifer Doudna reçoivent le Nobel de chimie 2020 pour la découverte des ciseaux génétiques CRISPR-Cas9."
      },
      {
        q: "Pour quelle discipline n'existe-t-il PAS de prix Nobel ?",
        options: ["Physique", "Mathématiques", "Chimie", "Médecine"],
        correct: 1,
        explainer: "Il n'existe pas de Nobel de mathématiques. L'équivalent est la médaille Fields, décernée tous les 4 ans à des mathématiciens de moins de 40 ans depuis 1936."
      },
      {
        q: "Qui a reçu le premier Nobel d'économie en 1969 ?",
        options: ["Milton Friedman", "Ragnar Frisch et Jan Tinbergen", "Paul Samuelson", "John Hicks"],
        correct: 1,
        explainer: "Le prix d'économie n'est pas un vrai Nobel mais le 'prix de la Banque de Suède en sciences économiques en mémoire d'Alfred Nobel', créé en 1968. Frisch et Tinbergen le reçoivent en 1969."
      }
    ]
  },
  {
    slug: "quiz-academie-francaise-immortels-langue",
    title: "Quiz Académie française : les immortels et la langue de Molière",
    description: "Fondée en 1635, l'Académie veille sur la langue française. Teste tes connaissances sur ses 40 immortels et son histoire en 10 questions.",
    topic: "culture-generale",
    emoji: "🏛️",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "En quelle année a été fondée l'Académie française ?",
        options: ["1610", "1635", "1660", "1789"],
        correct: 1,
        explainer: "L'Académie française est officiellement fondée en 1635 par le cardinal Richelieu, à partir d'un cercle informel de lettrés qui se réunissaient depuis 1629."
      },
      {
        q: "Combien de membres compte l'Académie française ?",
        options: ["30", "40", "50", "60"],
        correct: 1,
        explainer: "L'Académie compte 40 membres depuis sa fondation, les 'immortels'. Le nombre n'a jamais changé. Ils sont élus à vie par cooptation."
      },
      {
        q: "Qui fut la première femme élue à l'Académie française ?",
        options: ["Simone Veil", "Marguerite Yourcenar", "Florence Delay", "Hélène Carrère d'Encausse"],
        correct: 1,
        explainer: "Marguerite Yourcenar est élue le 6 mars 1980, première femme depuis la fondation en 1635. Elle est élue au fauteuil 3, succédant à Roger Caillois."
      },
      {
        q: "Quel est l'objet principal de l'Académie ?",
        options: ["Publier des poèmes", "Élaborer le Dictionnaire", "Récompenser les écrivains", "Conseiller le président"],
        correct: 1,
        explainer: "La mission première est de codifier la langue via le Dictionnaire de l'Académie française. La 1re édition date de 1694, la 9e (en cours) a commencé en 1986."
      },
      {
        q: "Comment appelle-t-on l'épée et l'habit des académiciens ?",
        options: ["L'habit vert", "L'habit royal", "Le costume noir", "L'habit d'apparat"],
        correct: 0,
        explainer: "L'habit vert, brodé de feuilles d'olivier, et l'épée sont remis lors de la cérémonie d'intronisation. Le costume date du Consulat, fixé par Napoléon en 1801."
      },
      {
        q: "Quel philosophe des Lumières fut élu en 1746 ?",
        options: ["Voltaire", "Diderot", "Rousseau", "Montesquieu"],
        correct: 0,
        explainer: "Voltaire est élu en 1746 au fauteuil 33. Diderot n'a jamais été élu. Rousseau a refusé toute candidature. Montesquieu siégeait depuis 1727."
      },
      {
        q: "Où siège l'Académie française ?",
        options: ["Au Louvre", "Au Palais-Royal", "Sous la Coupole de l'Institut", "À l'Élysée"],
        correct: 2,
        explainer: "L'Académie siège quai de Conti à Paris, sous la coupole du palais Mazarin, depuis 1805. Le bâtiment abrite aussi les quatre autres académies de l'Institut."
      },
      {
        q: "Combien de fauteuils porte le nom d'un homonyme entre académiciens ?",
        options: ["Tous numérotés 1-40 sans noms", "10 fauteuils", "Aucun", "20 fauteuils"],
        correct: 0,
        explainer: "Les fauteuils sont numérotés de 1 à 40, sans nom propre. Chaque nouvel élu prononce un éloge de son prédécesseur sous la Coupole."
      },
      {
        q: "Quel auteur africain est le premier Noir élu en 1983 ?",
        options: ["Aimé Césaire", "Léopold Sédar Senghor", "Maryse Condé", "Alain Mabanckou"],
        correct: 1,
        explainer: "Léopold Sédar Senghor, poète et président du Sénégal, est élu en 1983 au fauteuil 16. Il est le premier Africain noir à siéger sous la Coupole."
      },
      {
        q: "Quelle devise figure sur le sceau de l'Académie ?",
        options: ["À l'immortalité", "Liberté, égalité, fraternité", "Honneur et patrie", "Toujours plus haut"],
        correct: 0,
        explainer: "La devise 'À l'immortalité' figure sur le sceau dessiné par Richelieu. C'est de là que vient le surnom des académiciens, les 'immortels' — l'immortalité étant celle de la langue."
      }
    ]
  },
  {
    slug: "quiz-religions-monde-bases-essentielles",
    title: "Quiz religions du monde : les bases que tout le monde devrait savoir",
    description: "Christianisme, islam, hindouisme, bouddhisme... Teste tes connaissances de base sur les grandes religions du monde en 10 questions accessibles.",
    topic: "culture-generale",
    emoji: "🌟",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "Combien de piliers compte l'islam ?",
        options: ["3", "5", "7", "10"],
        correct: 1,
        explainer: "L'islam repose sur 5 piliers : la profession de foi (chahada), la prière (salat), l'aumône (zakat), le jeûne du Ramadan (sawm) et le pèlerinage à La Mecque (hajj)."
      },
      {
        q: "Quel est le livre sacré de l'hindouisme le plus connu ?",
        options: ["Le Coran", "La Bhagavad-Gîtâ", "L'Avesta", "Le Tao Te King"],
        correct: 1,
        explainer: "La Bhagavad-Gîtâ ('Chant du Bienheureux') est extraite du Mahabharata. Il existe d'autres textes : Vedas, Upanishads, Puranas. L'hindouisme n'a pas un seul livre canonique."
      },
      {
        q: "Quelle religion fonde Siddhartha Gautama ?",
        options: ["L'hindouisme", "Le bouddhisme", "Le jaïnisme", "Le sikhisme"],
        correct: 1,
        explainer: "Siddhartha Gautama, le Bouddha 'éveillé', fonde le bouddhisme vers le VIe siècle av. J.-C. en Inde du Nord après avoir atteint l'illumination sous l'arbre de la Bodhi."
      },
      {
        q: "Quel jour est le shabbat pour les juifs ?",
        options: ["Vendredi", "Samedi", "Dimanche", "Lundi"],
        correct: 1,
        explainer: "Le shabbat va du vendredi soir au samedi soir (du coucher du soleil au coucher suivant). Il commémore le 7e jour où Dieu se repose après la création."
      },
      {
        q: "Combien de sacrements la religion catholique reconnaît-elle ?",
        options: ["5", "7", "10", "12"],
        correct: 1,
        explainer: "L'Église catholique reconnaît 7 sacrements : baptême, confirmation, eucharistie, réconciliation, onction des malades, ordre, mariage. Fixés au concile de Trente."
      },
      {
        q: "Que signifie 'protestant' à l'origine ?",
        options: ["Qui prie souvent", "Qui proteste contre l'autorité papale", "Qui voyage", "Qui chante"],
        correct: 1,
        explainer: "Le terme vient de la 'protestation' (Protestatio) signée en 1529 à la diète de Spire par six princes allemands soutenant Luther contre l'empereur Charles Quint."
      },
      {
        q: "Quel courant de l'islam est majoritaire en Iran ?",
        options: ["Sunnite", "Chiite", "Ibadite", "Soufi"],
        correct: 1,
        explainer: "L'Iran est à 90% chiite duodécimain depuis le XVIe siècle (dynastie séfévide). Le chiisme représente 10-13% des musulmans mondiaux, majoritairement en Iran, Irak, Bahreïn."
      },
      {
        q: "Combien de divinités principales compte la trimûrti hindoue ?",
        options: ["2", "3", "5", "7"],
        correct: 1,
        explainer: "La trimûrti regroupe Brahmâ (créateur), Vishnu (préservateur) et Shiva (destructeur). Trois aspects d'une même réalité divine ultime, le Brahman."
      },
      {
        q: "Quelle religion suit le Tipitaka (Trois corbeilles) ?",
        options: ["Le bouddhisme theravada", "Le shintoïsme", "Le taoïsme", "Le confucianisme"],
        correct: 0,
        explainer: "Le Tipitaka, ou Canon pali, est le corpus canonique du bouddhisme theravada. Il comprend les règles monastiques (Vinaya), les discours (Sutta) et la doctrine (Abhidhamma)."
      },
      {
        q: "Quelle fête juive commémore la sortie d'Égypte ?",
        options: ["Hanoukka", "Pessah (Pâque juive)", "Yom Kippour", "Roch Hachana"],
        correct: 1,
        explainer: "Pessah, en hébreu, signifie 'passage' et commémore la sortie d'Égypte de Moïse. La fête dure 7 ou 8 jours et marque le début de l'Exode raconté dans la Torah."
      }
    ]
  },
  {
    slug: "quiz-langues-monde-plus-parlees-records",
    title: "Quiz langues du monde : les plus parlées et leurs records",
    description: "Mandarin, anglais, hindi... Quelles langues dominent la planète ? Teste tes connaissances sur les langues mondiales et leurs particularités en 10 questions.",
    topic: "culture-generale",
    emoji: "🌍",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "Quelle langue compte le plus de locuteurs natifs au monde ?",
        options: ["Anglais", "Mandarin", "Espagnol", "Hindi"],
        correct: 1,
        explainer: "Le mandarin chinois compte environ 940 millions de locuteurs natifs. L'anglais arrive 3e en natifs (~370 M) mais 1er en locuteurs totaux avec environ 1,5 milliard."
      },
      {
        q: "Quelle langue compte le plus de locuteurs TOTAL (natifs + L2) ?",
        options: ["Mandarin", "Anglais", "Espagnol", "Arabe"],
        correct: 1,
        explainer: "L'anglais arrive en tête avec environ 1,5 milliard de locuteurs tous niveaux confondus, du fait de son statut de lingua franca mondiale."
      },
      {
        q: "Combien de langues sont parlées dans le monde environ ?",
        options: ["1 000", "3 000", "7 000", "15 000"],
        correct: 2,
        explainer: "L'Ethnologue recense environ 7 100 langues vivantes en 2024. Près de 40% sont menacées de disparition. Une langue disparaît environ toutes les deux semaines."
      },
      {
        q: "Quelle langue a le plus de caractères dans son alphabet ?",
        options: ["Le russe (33)", "Le khmer (74)", "L'arabe (28)", "Le grec (24)"],
        correct: 1,
        explainer: "Le khmer (cambodgien) possède l'alphabet le plus long du monde selon le Guinness, avec 74 lettres : 33 consonnes, 23 voyelles dépendantes, et 12-14 voyelles indépendantes."
      },
      {
        q: "Combien de pays ont le français comme langue officielle ?",
        options: ["12", "29", "45", "60"],
        correct: 1,
        explainer: "Le français est langue officielle dans 29 pays, principalement en Afrique. Il est parlé par environ 320 millions de locuteurs dans le monde."
      },
      {
        q: "Quelle est la langue officielle de l'Indonésie ?",
        options: ["Le javanais", "L'indonésien (bahasa Indonesia)", "Le malais", "Le tagalog"],
        correct: 1,
        explainer: "Le bahasa Indonesia, dérivé du malais, est la langue officielle. Il unifie un pays aux 700+ langues locales. Le javanais est le plus parlé en langue maternelle (~80 M)."
      },
      {
        q: "Quelle est la langue la plus parlée en Amérique du Sud ?",
        options: ["L'espagnol", "Le portugais", "Le quechua", "Ils sont à égalité"],
        correct: 1,
        explainer: "Le portugais est la première langue du continent grâce au Brésil (~215 M d'habitants). L'espagnol arrive 2e malgré sa présence dans plus de pays."
      },
      {
        q: "Combien de tons compte le mandarin standard ?",
        options: ["2", "4", "6", "Aucun"],
        correct: 1,
        explainer: "Le mandarin standard compte 4 tons (plat, montant, descendant-montant, descendant) plus un ton neutre. Le cantonais en compte 6 à 9 selon les analyses."
      },
      {
        q: "Quel est l'idiome avec le moins de phonèmes au monde ?",
        options: ["Le hawaïen", "Le rotokas (Papouasie)", "Le pirahã (Brésil)", "Le japonais"],
        correct: 1,
        explainer: "Le rotokas, parlé en Papouasie-Nouvelle-Guinée, ne compte que 11 phonèmes (6 consonnes et 5 voyelles). Le pirahã en a 10-11, le hawaïen 13."
      },
      {
        q: "Quelle langue européenne n'est apparentée à aucune autre ?",
        options: ["Le finnois", "Le basque", "Le hongrois", "Le maltais"],
        correct: 1,
        explainer: "Le basque (euskara) est un isolat linguistique : il n'est apparenté à aucune autre langue connue. Finnois et hongrois sont finno-ougriens, le maltais est sémitique."
      }
    ]
  },
  {
    slug: "quiz-premieres-fois-histoire-grandes-decouvertes",
    title: "Quiz premiers de l'histoire : les premières fois qui ont changé le monde",
    description: "Premier homme sur la Lune, première greffe du cœur, premier vol... Teste tes connaissances sur les pionniers et leurs premières fois historiques.",
    topic: "culture-generale",
    emoji: "🌟",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "Qui est le premier homme à avoir marché sur la Lune ?",
        options: ["Buzz Aldrin", "Neil Armstrong", "Michael Collins", "Youri Gagarine"],
        correct: 1,
        explainer: "Neil Armstrong pose le pied sur la Lune le 21 juillet 1969 à 02h56 UTC, lors de la mission Apollo 11. Buzz Aldrin le suit 19 minutes plus tard."
      },
      {
        q: "Qui a réalisé la première greffe du cœur en 1967 ?",
        options: ["Christian Barnard", "Alexis Carrel", "Norman Shumway", "Denton Cooley"],
        correct: 0,
        explainer: "Le chirurgien sud-africain Christian Barnard réalise la première greffe cardiaque humaine le 3 décembre 1967 au Cap. Le receveur, Louis Washkansky, survivra 18 jours."
      },
      {
        q: "Qui fut le premier humain dans l'espace ?",
        options: ["Neil Armstrong", "Youri Gagarine", "Alan Shepard", "John Glenn"],
        correct: 1,
        explainer: "Le cosmonaute soviétique Youri Gagarine effectue le 12 avril 1961 une orbite complète autour de la Terre en 108 minutes à bord de Vostok 1."
      },
      {
        q: "Qui a réalisé le premier vol motorisé en 1903 ?",
        options: ["Louis Blériot", "Les frères Wright", "Clément Ader", "Santos-Dumont"],
        correct: 1,
        explainer: "Orville et Wilbur Wright réalisent le 17 décembre 1903 à Kitty Hawk (Caroline du Nord) le premier vol motorisé contrôlé : 36 mètres en 12 secondes."
      },
      {
        q: "Qui est la première femme à avoir reçu un prix Nobel ?",
        options: ["Marie Curie", "Bertha von Suttner", "Selma Lagerlöf", "Grazia Deledda"],
        correct: 0,
        explainer: "Marie Curie reçoit le Nobel de physique en 1903 avec son mari et Becquerel. Bertha von Suttner reçoit le Nobel de la paix en 1905, Selma Lagerlöf celui de littérature en 1909."
      },
      {
        q: "Quel pays a accordé le premier droit de vote aux femmes ?",
        options: ["États-Unis", "Nouvelle-Zélande", "Finlande", "Australie"],
        correct: 1,
        explainer: "La Nouvelle-Zélande accorde le droit de vote aux femmes en 1893. L'Australie suit en 1902, la Finlande en 1906. La France attend 1944."
      },
      {
        q: "Qui a gravi l'Everest pour la première fois en 1953 ?",
        options: ["Reinhold Messner", "Edmund Hillary et Tenzing Norgay", "George Mallory", "Maurice Herzog"],
        correct: 1,
        explainer: "Le Néo-Zélandais Edmund Hillary et le Sherpa Tenzing Norgay atteignent le sommet le 29 mai 1953. Mallory avait disparu en 1924 sans qu'on sache s'il avait sommité."
      },
      {
        q: "Quel pays a interdit l'esclavage en premier en Europe ?",
        options: ["France", "Royaume-Uni", "Danemark", "Suède"],
        correct: 2,
        explainer: "Le Danemark interdit en 1792 la traite négrière (effective en 1803), premier pays d'Europe à le faire. La France abolit l'esclavage en 1794 puis définitivement en 1848."
      },
      {
        q: "Qui a effectué la première transplantation de visage en 2005 ?",
        options: ["Une équipe américaine", "Une équipe française (Pr Devauchelle)", "Une équipe espagnole", "Une équipe chinoise"],
        correct: 1,
        explainer: "Le professeur Bernard Devauchelle réalise à Amiens en novembre 2005 la première greffe partielle de visage au monde sur Isabelle Dinoire, défigurée par un chien."
      },
      {
        q: "Quel ordinateur a battu le champion du monde d'échecs en 1997 ?",
        options: ["Watson", "Deep Blue", "AlphaZero", "HAL 9000"],
        correct: 1,
        explainer: "Deep Blue d'IBM bat Garry Kasparov 3,5 à 2,5 en mai 1997 à New York. C'est la première défaite d'un champion du monde en exercice par une machine en match officiel."
      }
    ]
  },
  {
    slug: "quiz-records-mondiaux-guinness-incroyables",
    title: "Quiz records Guinness : les records mondiaux les plus dingues",
    description: "L'homme le plus grand, le record du sourire le plus long, l'arbre le plus vieux... 10 records mondiaux Guinness à découvrir en quiz.",
    topic: "culture-generale",
    emoji: "🌟",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "Quelle est la taille de l'homme le plus grand jamais mesuré ?",
        options: ["2,30 m", "2,51 m", "2,72 m", "2,90 m"],
        correct: 2,
        explainer: "L'Américain Robert Wadlow mesurait 2,72 m à sa mort en 1940, à 22 ans. Sa taille était due à une hyperplasie de l'hypophyse. Il continuait de grandir."
      },
      {
        q: "Quel est l'arbre le plus ancien encore vivant ?",
        options: ["Un séquoia", "Un pin Bristlecone", "Un baobab", "Un chêne"],
        correct: 1,
        explainer: "Le pin Bristlecone Methuselah, en Californie, a plus de 4 850 ans. Il a poussé alors que les pyramides étaient en construction. Sa localisation est gardée secrète pour le protéger."
      },
      {
        q: "Quelle est la plus longue rivière du monde ?",
        options: ["Le Nil", "L'Amazone", "Le Yangtsé", "Le débat reste ouvert entre Nil et Amazone"],
        correct: 3,
        explainer: "Le Nil (6 650 km) est traditionnellement classé 1er, mais l'Amazone (6 400-7 000 km selon mesures) pourrait être plus long. Le débat dépend de la source retenue."
      },
      {
        q: "Combien de pétales compte le record de la plus grosse fleur du monde ?",
        options: ["3", "5", "Pas de pétales — c'est une Rafflesia (1 m de diamètre)", "12"],
        correct: 2,
        explainer: "La Rafflesia arnoldii d'Indonésie est la plus grande fleur du monde, jusqu'à 1,1 m et 11 kg. Elle dégage une odeur de viande pourrie pour attirer les mouches pollinisatrices."
      },
      {
        q: "Quel mammifère est le plus rapide du monde ?",
        options: ["Le guépard (env. 110 km/h)", "Le lion", "Le lévrier", "L'antilope pronghorn"],
        correct: 0,
        explainer: "Le guépard atteint 110-120 km/h sur 400 m. Il accélère de 0 à 100 km/h en 3 secondes. Sur la distance, le pronghorn américain reste plus rapide (88 km/h sur 6 km)."
      },
      {
        q: "Quelle est la profondeur du point le plus bas des océans ?",
        options: ["6 000 m", "8 848 m", "10 994 m (fosse des Mariannes)", "13 500 m"],
        correct: 2,
        explainer: "Le Challenger Deep dans la fosse des Mariannes atteint environ 10 994 m. Si on y plaçait l'Everest (8 849 m), son sommet serait encore à 2 km sous la surface."
      },
      {
        q: "Combien de langues parle l'homme le plus polyglotte de l'histoire ?",
        options: ["32 (cardinal Mezzofanti)", "50", "75", "100"],
        correct: 0,
        explainer: "Le cardinal italien Giuseppe Mezzofanti (1774-1849) parlait couramment 32 langues et en maîtrisait 38 selon ses biographes. Il n'avait quasiment jamais quitté l'Italie."
      },
      {
        q: "Quel est le record du plus long temps passé dans l'espace en une mission ?",
        options: ["180 jours", "300 jours", "437 jours (Valeri Poliakov)", "600 jours"],
        correct: 2,
        explainer: "Le cosmonaute russe Valeri Poliakov reste 437 jours et 18 heures à bord de la station Mir entre 1994 et 1995. Record d'une mission continue toujours invaincu."
      },
      {
        q: "Quel est l'animal terrestre le plus lourd ?",
        options: ["L'hippopotame", "Le rhinocéros blanc", "L'éléphant d'Afrique", "Le bison"],
        correct: 2,
        explainer: "L'éléphant de savane d'Afrique pèse jusqu'à 6 tonnes pour 4 m de haut. Le record est détenu par un mâle de 12,2 tonnes abattu en 1974 en Angola."
      },
      {
        q: "Quelle est la chute d'eau la plus haute du monde ?",
        options: ["Niagara", "Iguazu", "Salto Angel (979 m)", "Victoria"],
        correct: 2,
        explainer: "Le Salto Angel, ou Kerepakupai Merú, au Venezuela, plonge de 979 m d'un sommet de la Gran Sabana. Sa chute libre principale fait 807 m. Découvert en 1933 par Jimmy Angel."
      }
    ]
  }
];
