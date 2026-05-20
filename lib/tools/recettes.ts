// Static catalogue for the /recettes recipe browser tool.
//
// Data source at runtime: TheMealDB free public API
//   - by ingredient: https://www.themealdb.com/api/json/v1/1/filter.php?i=<param>
//   - by category:   https://www.themealdb.com/api/json/v1/1/filter.php?c=<param>
//
// No API key. Server fetches go through Next.js `fetch(url, { next: { revalidate: 86400 } })`
// and gracefully degrade to a stub when the API is unavailable.

export type RecipeApiType = "ingredient" | "category";

export type RecipeCategory = {
  /** URL slug (FR-leaning). */
  slug: string;
  /** Value passed as ?i= or ?c= to TheMealDB filter.php. */
  apiParam: string;
  /** Which filter endpoint to hit. */
  apiType: RecipeApiType;
  /** Visual marker for cards. */
  emoji: string;
  /** Display name in French. */
  name_fr: string;
  /** Display name in English. */
  name_en: string;
  /** Poll prompt — "T'aimes le poulet plutôt..." style. */
  pollQuestion_fr: string;
  pollQuestion_en: string;
  /** 2-4 poll options matching the question. */
  pollOptions_fr: string[];
  pollOptions_en: string[];
  /** Short ~150-word intro (FR). */
  intro_fr: string;
  /** Short ~150-word intro (EN). */
  intro_en: string;
};

export const RECIPE_CATEGORIES: RecipeCategory[] = [
  // ---------- INGREDIENTS ----------
  {
    slug: "poulet",
    apiParam: "Chicken",
    apiType: "ingredient",
    emoji: "🍗",
    name_fr: "Poulet",
    name_en: "Chicken",
    pollQuestion_fr: "T'aimes le poulet plutôt...",
    pollQuestion_en: "How do you like your chicken?",
    pollOptions_fr: ["Rôti", "Curry", "Cordon bleu", "En salade"],
    pollOptions_en: ["Roasted", "Curry", "Cordon bleu", "In salad"],
    intro_fr:
      "Le poulet est sans doute la viande la plus polyvalente au monde. Doux, bon marché et facile à apprivoiser, il accepte aussi bien les marinades indiennes au yaourt et garam masala que les sauces crémées à la française. Une cuisson maîtrisée est la clé : 75 °C à cœur pour la sécurité, mais pas plus, sous peine d'obtenir une chair sèche. Les blancs gagnent à être saisis vif puis terminés au four ; les cuisses tolèrent les cuissons longues et les braisages. Côté accords, il adore le citron, le thym, l'estragon, le miel et la sauce soja. Pour varier, alterne entre rôti dominical, curry thaï au lait de coco, tikka masala, poulet basquaise ou simplement grillé avec du riz parfumé. C'est la viande caméléon parfaite pour la semaine.",
    intro_en:
      "Chicken might be the most versatile protein on Earth. Mild, affordable and forgiving, it welcomes Indian yogurt marinades, French cream sauces and Thai coconut curries with equal ease. The secret is internal temperature: 165 °F / 75 °C and not a degree more, or the meat dries out. Breasts love a hard sear followed by a quick oven finish; thighs reward slow braises. Pair it with lemon, thyme, tarragon, honey, soy sauce or smoked paprika. Rotate between Sunday roast, tikka masala, Thai green curry, schnitzel, butter chicken, jerk grill or simple lemon-herb sheet-pan dinners. It's the chameleon weekday meat that never gets boring.",
  },
  {
    slug: "boeuf",
    apiParam: "Beef",
    apiType: "ingredient",
    emoji: "🥩",
    name_fr: "Bœuf",
    name_en: "Beef",
    pollQuestion_fr: "Ton bœuf préféré, c'est plutôt...",
    pollQuestion_en: "Your favorite beef dish is...",
    pollOptions_fr: ["Steak frites", "Bourguignon", "Burger", "Tartare"],
    pollOptions_en: ["Steak frites", "Beef stew", "Burger", "Tartare"],
    intro_fr:
      "Le bœuf, c'est l'umami à l'état pur. Du steak saisi à la poêle en fonte au bourguignon mijoté trois heures, chaque morceau raconte une cuisine. Pour un steak, sors-le 30 min avant cuisson, sèche-le, sale puis saisis-le à très haute température : la fameuse réaction de Maillard fait le reste. Les morceaux à braiser (paleron, joue, gîte) demandent du temps et un liquide acide (vin rouge, bière brune, tomate) pour fondre le collagène en gélatine. Côté accords, l'estragon, l'échalote, le poivre noir et la moutarde de Dijon sont des classiques imbattables. Pour varier les plaisirs : bourguignon, pho vietnamien, tacos al pastor, ragù bolognais, ou simplement un beau côte de bœuf grillé partagé.",
    intro_en:
      "Beef is pure umami. From a cast-iron-seared ribeye to a three-hour bourguignon, every cut tells a different story. For steaks, pull from the fridge 30 minutes early, pat dry, salt aggressively and sear over screaming heat — Maillard browning does the rest. Braising cuts (chuck, brisket, oxtail, shin) need time and an acidic liquid (red wine, dark beer, tomato) to melt collagen into silky gelatin. Tarragon, shallot, black pepper, Dijon mustard, blue cheese — all classic partners. Rotate between bourguignon, pho, beef tacos, ragù alla bolognese, Korean bulgogi or a shared standing rib roast.",
  },
  {
    slug: "porc",
    apiParam: "Pork",
    apiType: "ingredient",
    emoji: "🐖",
    name_fr: "Porc",
    name_en: "Pork",
    pollQuestion_fr: "Ton plat de porc préféré ?",
    pollQuestion_en: "Favorite pork dish?",
    pollOptions_fr: ["Côtes BBQ", "Filet mignon", "Rôti aux pommes", "Bacon partout"],
    pollOptions_en: ["BBQ ribs", "Pork loin", "Roast with apples", "Bacon on everything"],
    intro_fr:
      "Longtemps boudé, le porc revient en force grâce aux élevages plein air et aux races anciennes (Noir de Bigorre, Mangalica, Kurobuta). Sa graisse persillée fond à la cuisson et le rend incroyablement juteux. Filet mignon : poêle vive puis four 12 min à 180 °C — rosé au cœur, c'est le mieux. Échine et travers : cuisson longue à basse température (110 °C, 4 h) façon pulled pork ou ribs BBQ. Côté accords, le porc adore les fruits acidulés (pomme, pruneau, ananas), les épices douces (cinq-épices, cumin, paprika fumé) et la moutarde à l'ancienne. Pense aussi aux gyozas, char siu chinois, porchetta italienne ou simplement aux saucisses grillées dominicales.",
    intro_en:
      "Long underrated, pork is having a renaissance thanks to heritage breeds (Berkshire, Mangalica, Iberico) and free-range farming. Its marbled fat melts in the heat, leaving the meat juicy and rich. Tenderloin: hard sear then 12 minutes at 360 °F, just past pink. Shoulder and ribs: low and slow at 225 °F for 4 hours, pulled or sticky-glazed. Pork loves acidic fruit (apple, prune, pineapple), warm spices (five-spice, cumin, smoked paprika) and whole-grain mustard. Try Chinese char siu, Italian porchetta, Japanese gyoza or just classic Sunday sausages over coals.",
  },
  {
    slug: "saumon",
    apiParam: "Salmon",
    apiType: "ingredient",
    emoji: "🐟",
    name_fr: "Saumon",
    name_en: "Salmon",
    pollQuestion_fr: "Le saumon, tu le préfères...",
    pollQuestion_en: "Salmon — how do you like it?",
    pollOptions_fr: ["Cru / sashimi", "Mi-cuit", "Grillé", "Fumé sur bagel"],
    pollOptions_en: ["Raw / sashimi", "Medium-rare", "Grilled", "Smoked on bagel"],
    intro_fr:
      "Le saumon est la passerelle parfaite vers le poisson : gras, riche en oméga-3 et beaucoup plus indulgent qu'une dorade. Côté cuisson, le mi-cuit (52 °C à cœur) fait l'unanimité chez les chefs — chair fondante, presque crue au centre. Pour un pavé crispy, peau côté poêle bien chaude 4-5 min sans y toucher, puis 30 secondes côté chair. Accords gagnants : citron jaune, aneth, ciboulette, sauce soja-mirin-gingembre, miso, érable. Côté origine, le saumon sauvage du Pacifique a une chair plus ferme et un goût plus prononcé que l'élevage atlantique. Pour varier : tartare au combava, gravlax maison à la betterave, donburi japonais, ou le grand classique fumé-bagel-fromage frais.",
    intro_en:
      "Salmon is the gateway fish: fatty, omega-3-loaded and far more forgiving than something like sea bream. Chefs love it medium-rare (125 °F internal) — silky, almost translucent at the core. For a crispy-skin fillet, place skin-side down in a screaming hot dry pan for 4-5 minutes without moving, then 30 seconds flesh-side. Best partners: lemon, dill, chives, soy-mirin-ginger, miso, maple syrup. Wild Pacific salmon has a firmer bite and stronger flavor than farmed Atlantic. Rotate between yuzu tartare, beet-cured gravlax, Japanese donburi, or the unbeatable bagel-cream-cheese-smoked classic.",
  },
  {
    slug: "crevettes",
    apiParam: "Shrimp",
    apiType: "ingredient",
    emoji: "🦐",
    name_fr: "Crevettes",
    name_en: "Shrimp",
    pollQuestion_fr: "Tes crevettes, tu les manges plutôt...",
    pollQuestion_en: "Best way to eat shrimp?",
    pollOptions_fr: ["À l'ail-persil", "En curry thaï", "Tempura", "Cocktail"],
    pollOptions_en: ["Garlic butter", "Thai curry", "Tempura", "Cocktail"],
    intro_fr:
      "La crevette est rapide, festive et toujours dans le top 5 des produits de la mer préférés. Règle d'or : ne pas trop la cuire — 2 à 3 minutes max, dès qu'elle devient rose opaque et se replie en C, c'est prêt. Au-delà, elle devient caoutchouteuse. Pour intensifier le goût, fais d'abord un fumet rapide avec les têtes et carapaces. Accords classiques : ail, persil, citron, piment, gingembre, lait de coco. Côté technique, la décortique-toi-même libère un jus marin précieux à récupérer dans la poêle. Recettes incontournables : aglio-olio aux crevettes, curry thaï rouge, gambas a la plancha, scampi fritti italiens ou le shrimp boil cajun à partager.",
    intro_en:
      "Shrimp is fast, festive and consistently in the top 5 of America's favorite seafoods. Golden rule: don't overcook — 2 to 3 minutes max. Once they turn opaque pink and curl into a C, they're done. Past that they go rubbery. Save the shells and heads for a quick stock to deepen the flavor. Classic pairings: garlic, parsley, lemon, chili, ginger, coconut milk. Essentials to master: garlic-butter shrimp, Thai red curry, Spanish gambas a la plancha, Cajun shrimp boil and Italian shrimp scampi over pasta.",
  },
  {
    slug: "riz",
    apiParam: "Rice",
    apiType: "ingredient",
    emoji: "🍚",
    name_fr: "Riz",
    name_en: "Rice",
    pollQuestion_fr: "Ton riz favori, c'est...",
    pollQuestion_en: "Your go-to rice?",
    pollOptions_fr: ["Riz blanc basmati", "Risotto crémeux", "Sushi rice", "Riz pilaf"],
    pollOptions_en: ["Basmati", "Creamy risotto", "Sushi rice", "Pilaf"],
    intro_fr:
      "Plus de la moitié de l'humanité mange du riz tous les jours, et chaque variété a sa technique. Basmati : trempage 30 min, cuisson par absorption (1 vol. de riz pour 1,5 vol. d'eau, 12 min couvert). Riz à sushi : lavé jusqu'à eau claire, mijoté avec un vinaigre sucré-salé. Risotto : grain rond Arborio ou Carnaroli, nacrage à sec puis bouillon ajouté louche par louche en remuant pour libérer l'amidon. Pour le riz sauté façon nasi goreng ou yangzhou, utilise du riz cuit la veille — c'est le secret pour qu'il ne colle pas. Côté accords, le riz aime tout : safran, curcuma, lait de coco, beurre, parmesan, sauce soja. Une céréale humble mais infinie.",
    intro_en:
      "More than half the planet eats rice daily, and every variety has its method. Basmati: soak 30 minutes, cook by absorption (1 cup rice to 1.5 cups water, 12 minutes covered). Sushi rice: rinsed until the water runs clear, simmered with a sweet-tart vinegar dressing. Risotto: short-grain Arborio or Carnaroli, toasted dry then bathed in stock one ladle at a time with constant stirring to release starch. For fried rice — nasi goreng, yangzhou, chahan — always use day-old refrigerated rice; that's the no-stick secret. Rice loves saffron, turmeric, coconut milk, butter, parmesan, soy. Humble grain, infinite range.",
  },
  {
    slug: "pates",
    apiParam: "Pasta",
    apiType: "ingredient",
    emoji: "🍝",
    name_fr: "Pâtes",
    name_en: "Pasta",
    pollQuestion_fr: "Tes pâtes du soir, c'est...",
    pollQuestion_en: "Weeknight pasta of choice?",
    pollOptions_fr: ["Carbonara", "Bolognaise", "Pesto", "Aglio e olio"],
    pollOptions_en: ["Carbonara", "Bolognese", "Pesto", "Aglio e olio"],
    intro_fr:
      "Les pâtes sont sacrées en Italie, et chaque forme a sa sauce attitrée : tagliatelles pour la bolognaise, spaghetti pour l'aglio-olio, rigatoni pour l'amatriciana, orecchiette pour les cime di rapa. Règle numéro un : eau extrêmement salée (10 g/L, comme la mer), pas d'huile dedans. Numéro deux : cuisson al dente, avec 1 min de moins que le paquet. Numéro trois : finir la cuisson à la poêle dans la sauce avec une louche d'eau de cuisson — l'amidon fait l'émulsion. La carbonara, c'est jaune d'œuf + guanciale + pecorino + poivre, jamais de crème. Le pesto se fait au mortier avec basilic, pignons, ail, pecorino et huile. Et la sauce tomate parfaite ? Tomates pelées San Marzano, ail, huile, basilic, 20 min de mijotage. Voilà.",
    intro_en:
      "Pasta is sacred in Italy, and every shape has its assigned sauce: tagliatelle for bolognese, spaghetti for aglio e olio, rigatoni for amatriciana, orecchiette for cime di rapa. Rule one: pasta water should be salty like the sea (10 g/liter), and never add oil to it. Rule two: cook al dente, one minute less than the package. Rule three: finish cooking in the pan with the sauce plus a ladle of pasta water — the starch creates the emulsion. Real carbonara: egg yolk, guanciale, pecorino, black pepper, never cream. Pesto: basil, pine nuts, garlic, pecorino, oil — pounded in a mortar. Perfect tomato sauce? San Marzano peeled tomatoes, garlic, oil, basil, 20 minutes of simmering. Done.",
  },
  {
    slug: "pommes-de-terre",
    apiParam: "Potatoes",
    apiType: "ingredient",
    emoji: "🥔",
    name_fr: "Pommes de terre",
    name_en: "Potatoes",
    pollQuestion_fr: "Ta façon préférée de manger des patates ?",
    pollQuestion_en: "Best way to eat potatoes?",
    pollOptions_fr: ["Frites", "Purée", "Rôties au four", "Gratin dauphinois"],
    pollOptions_en: ["French fries", "Mash", "Roasted", "Gratin"],
    intro_fr:
      "La patate est le grand classique réconfortant, mais le choix de la variété fait tout. À chair ferme (Charlotte, Roseval) : vapeur, salade, sauté. À chair farineuse (Bintje, Russet) : purée, frites, gratin. Pour des frites parfaites, double cuisson : un premier bain à 140 °C pendant 8 min pour cuire l'intérieur, puis un second à 180 °C pendant 3 min pour le crispy. La purée parfaite ? Cuites entières avec la peau, écrasées au moulin (jamais au mixeur, ça fait de la colle), beurre froid coupé en dés, lait chaud. Les patates rôties : précuites 8 min à l'eau salée, secouées pour casser les arêtes, puis four 220 °C 35 min dans la graisse de canard. Le gratin dauphinois ? Pas de fromage, juste crème, ail et muscade.",
    intro_en:
      "Potatoes are the ultimate comfort food, but variety choice is everything. Waxy (Charlotte, Yukon Gold): steamed, salads, sautéed. Floury (Russet, Bintje, Maris Piper): mash, fries, gratins. For perfect French fries, double-cook: first 8 minutes at 280 °F to cook the inside, then 3 minutes at 355 °F for the crispy shell. Perfect mash? Boil whole in their skins, push through a ricer (never a food processor — turns to glue), cold cubed butter, hot milk. Roasted potatoes: parboil 8 minutes in salted water, shake to roughen the edges, then 425 °F for 35 minutes in duck fat. Authentic gratin dauphinois has no cheese — just cream, garlic and nutmeg.",
  },
  {
    slug: "lentilles",
    apiParam: "Lentils",
    apiType: "ingredient",
    emoji: "🟤",
    name_fr: "Lentilles",
    name_en: "Lentils",
    pollQuestion_fr: "Lentilles vertes ou corail ?",
    pollQuestion_en: "Green or red lentils?",
    pollOptions_fr: ["Lentilles vertes du Puy", "Lentilles corail", "Beluga noires", "Pas fan, désolé"],
    pollOptions_en: ["Green Puy lentils", "Red lentils", "Black beluga", "Not a fan"],
    intro_fr:
      "Les lentilles sont la légumineuse miracle : 25 % de protéines, riches en fer, en fibres, et cuisson rapide sans trempage (20-30 min selon la variété). Les vertes du Puy AOC tiennent à la cuisson et sont parfaites en salade tiède avec échalote et vinaigrette à la moutarde. Les corail (en fait orange) se défont et donnent un dahl indien crémeux en 15 min. Les beluga, noires brillantes, sont l'option chic — al dente, elles imitent presque le caviar. Pour ne pas qu'elles éclatent, démarre à l'eau froide, sale en fin de cuisson (le sel durcit la peau si trop tôt). Accords gagnants : carotte, oignon, lard fumé, cumin, gingembre, lait de coco, citron. Plat zéro déchet et zéro budget.",
    intro_en:
      "Lentils are the miracle legume: 25% protein, loaded with iron and fiber, and they cook fast without soaking (20-30 minutes depending on variety). French Puy lentils hold their shape and shine in a warm salad with shallot and Dijon vinaigrette. Red lentils (actually orange) collapse and turn into creamy Indian dal in 15 minutes. Beluga lentils are the fancy option — glossy black, al dente, almost caviar-like. To stop them from bursting, start in cold water and salt only at the end (salt toughens the skin if added too early). Best pairings: carrot, onion, smoky bacon, cumin, ginger, coconut milk, lemon. Zero-waste, zero-budget hero food.",
  },
  {
    slug: "champignons",
    apiParam: "Mushrooms",
    apiType: "ingredient",
    emoji: "🍄",
    name_fr: "Champignons",
    name_en: "Mushrooms",
    pollQuestion_fr: "Ton champignon préféré ?",
    pollQuestion_en: "Favorite mushroom?",
    pollOptions_fr: ["Cèpes", "Girolles", "Shiitake", "Champignons de Paris classiques"],
    pollOptions_en: ["Porcini", "Chanterelles", "Shiitake", "Classic button mushrooms"],
    intro_fr:
      "Les champignons sont la cinquième saveur — umami pur — et changent une recette en deux temps trois mouvements. Règle absolue : ne JAMAIS les laver à l'eau (ils se gorgent et caoutchoutent), brosse-les ou essuie-les avec un linge humide. Cuisson à sec en poêle bien chaude jusqu'à ce que l'eau s'évapore, ensuite seulement ajoute beurre, ail et persil. Les cèpes et morilles méritent le grand jeu (poêlée avec ail-persil, ou risotto). Les girolles sortent à l'automne, sublimes avec œufs brouillés. Les shiitake sèchés font le meilleur dashi végétal en 30 min de trempage. Les pleurotes effilochés imitent à merveille le poulet. Pour les amateurs : la duxelles (hachée fine, beurre, échalote) est la base de cuisine la plus polyvalente qui existe.",
    intro_en:
      "Mushrooms are the fifth flavor — pure umami — and transform a dish instantly. Absolute rule: NEVER rinse them under water (they soak it up and turn rubbery). Brush them or wipe with a damp cloth. Dry-sauté in a screaming hot pan until their water evaporates, only THEN add butter, garlic and parsley. Porcini and morels deserve star treatment (pan-fried with garlic-parsley, or risotto). Chanterelles arrive in autumn — divine with scrambled eggs. Dried shiitake make the best vegan dashi after 30 minutes of soaking. Shredded oyster mushrooms mimic pulled chicken brilliantly. Pro move: duxelles (finely minced with shallot and butter) is the most versatile base in the kitchen.",
  },
  {
    slug: "fromage",
    apiParam: "Cheese",
    apiType: "ingredient",
    emoji: "🧀",
    name_fr: "Fromage",
    name_en: "Cheese",
    pollQuestion_fr: "Ton fromage favori, c'est plutôt...",
    pollQuestion_en: "Your favorite cheese vibe?",
    pollOptions_fr: ["Pâte molle (camembert, brie)", "Pâte dure (comté, parmesan)", "Bleu (roquefort)", "Chèvre frais"],
    pollOptions_en: ["Soft (brie, camembert)", "Hard (cheddar, parmesan)", "Blue (roquefort, gorgonzola)", "Fresh goat"],
    intro_fr:
      "La France produit plus de 1200 fromages, mais 5 grandes familles couvrent tout : pâtes molles à croûte fleurie (camembert, brie), pâtes molles à croûte lavée (munster, époisses), pâtes pressées non cuites (saint-nectaire, reblochon), pâtes pressées cuites (comté, beaufort) et pâtes persillées (roquefort, fourme). Service : sors-les du frigo 1h avant pour qu'ils libèrent leurs arômes. En cuisine, le fromage fondu adore les recettes simples — tartiflette, raclette, croque-monsieur, mac and cheese, fondue savoyarde. Astuce pro pour la fondue : Comté + Beaufort + vin blanc sec + une pointe de kirsch + un peu de Maïzena pour stabiliser. Et le parmesan râpé dans une carbonara n'a pas besoin de description : c'est le glutamate naturel le plus efficace au monde.",
    intro_en:
      "France makes over 1,200 cheeses, but 5 families cover the universe: bloomy-rind soft (brie, camembert), washed-rind soft (munster, époisses), pressed uncooked (gouda, manchego), pressed cooked (comté, parmesan, gruyère) and blue (roquefort, gorgonzola, stilton). Take cheese out of the fridge 1 hour before serving to release the aromas. In cooking, melted cheese loves simple dishes — mac and cheese, croque-monsieur, raclette, tartiflette, Swiss fondue. Pro fondue tip: Comté + Beaufort + dry white wine + a splash of kirsch + a teaspoon of cornstarch to stabilize. And grated parmesan on carbonara? That's nature's most efficient glutamate, no explanation needed.",
  },
  {
    slug: "tomate",
    apiParam: "Tomato",
    apiType: "ingredient",
    emoji: "🍅",
    name_fr: "Tomate",
    name_en: "Tomato",
    pollQuestion_fr: "La tomate, tu la manges plutôt...",
    pollQuestion_en: "Tomato season — how do you eat them?",
    pollOptions_fr: ["Crue, salade caprese", "En sauce mijotée", "Confite au four", "Gaspacho froid"],
    pollOptions_en: ["Raw, caprese", "Slow-cooked sauce", "Roasted / confit", "Cold gazpacho"],
    intro_fr:
      "La tomate est un fruit, mais en cuisine c'est le légume star de l'été. Toujours à température ambiante (jamais au frigo, ça tue les arômes). Crue, elle exige juste de la fleur de sel, de l'huile d'olive première pression et éventuellement un peu de basilic ou de burrata. Cuite, elle libère son acidité et concentre ses sucres : pelée puis mijotée 30 min avec ail et basilic, c'est la sauce italienne universelle. Au four, confite 90 min à 120 °C avec ail-thym, elle devient un condiment magique. La gaspacho andalou ? Tomates très mûres mixées avec poivron, concombre, pain trempé, ail, huile, vinaigre de Xérès. Variétés stars : Roma pour les sauces, Cœur de bœuf pour la salade, San Marzano pour la pizza, cerise pour l'apéro. Évite les tomates d'hiver sans goût.",
    intro_en:
      "Tomato is a fruit but functions as summer's star vegetable. Always store at room temperature (the fridge kills the aroma compounds). Raw, all it needs is flaky salt, top-shelf olive oil and optionally basil or burrata. Cooked, it releases acidity and concentrates sugars: peeled, simmered 30 minutes with garlic and basil = the universal Italian sauce. Slow-roasted (confit) at 250 °F for 90 minutes with garlic and thyme, it becomes a magic condiment. Andalusian gazpacho: very ripe tomatoes blended with pepper, cucumber, soaked bread, garlic, oil and sherry vinegar. Star varieties: Roma for sauces, beefsteak for slicing, San Marzano for pizza, cherry for snacking. Skip the watery off-season ones.",
  },
  {
    slug: "oeufs",
    apiParam: "Eggs",
    apiType: "ingredient",
    emoji: "🥚",
    name_fr: "Œufs",
    name_en: "Eggs",
    pollQuestion_fr: "Tes œufs du matin, tu les fais comment ?",
    pollQuestion_en: "Morning eggs — how?",
    pollOptions_fr: ["Brouillés crémeux", "À la coque", "Au plat baveux", "Omelette baveuse"],
    pollOptions_en: ["Creamy scrambled", "Soft-boiled", "Sunny-side up", "Soft omelette"],
    intro_fr:
      "L'œuf est l'ingrédient parfait : 6 g de protéines, prêt en 3 minutes, et infini en versions. Brouillés crémeux à la Gordon Ramsay : feu doux, ajoute beurre + sel hors du feu, remue sans arrêt avec une spatule, retire à 70 % cuit (la chaleur résiduelle finit le travail). Œufs à la coque : 6 min pile dans l'eau bouillante, jaune coulant garanti. Omelette baveuse française : 3 œufs battus à peine, poêle bien chaude, beurre noisette, remue 30 secondes, plie sans laisser colorer. Les œufs Bénédicte avec sauce hollandaise, c'est le boss final du brunch. Et la quiche lorraine ? Lardons, crème, œufs, muscade — point. Le pavlova, le soufflé au chocolat, la mayonnaise, le sabayon, l'île flottante : ils dépendent tous d'un seul ingrédient. Magique.",
    intro_en:
      "The egg is the perfect ingredient: 6 g of protein, ready in 3 minutes, infinite in form. Gordon Ramsay-style creamy scrambled: low heat, add butter and salt off the heat, stir constantly with a spatula, pull at 70% cooked (residual heat finishes it). Soft-boiled: exactly 6 minutes in boiling water = runny yolk guaranteed. French rolled omelette: 3 eggs barely beaten, screaming hot pan, brown butter, stir 30 seconds, fold without browning. Eggs Benedict with hollandaise is the boss-fight of brunch. And quiche lorraine? Bacon, cream, eggs, nutmeg — that's it. Pavlova, chocolate soufflé, mayonnaise, sabayon, île flottante — all built on one ingredient. Pure magic.",
  },
  {
    slug: "avocat",
    apiParam: "Avocado",
    apiType: "ingredient",
    emoji: "🥑",
    name_fr: "Avocat",
    name_en: "Avocado",
    pollQuestion_fr: "L'avocat, tu le manges...",
    pollQuestion_en: "Avocado — how?",
    pollOptions_fr: ["Sur toast", "En guacamole", "Dans un poke bowl", "À la cuillère, c'est tout"],
    pollOptions_en: ["On toast", "Guacamole", "In a poke bowl", "Straight with a spoon"],
    intro_fr:
      "L'avocat est devenu l'emblème de la cuisine millenial — et pour cause : sa texture beurrée, ses bons gras (omega-9), sa polyvalence absolue. Pour le choisir mûr : il doit céder légèrement sous le doigt sans être mou. S'il est trop dur, glisse-le 2 jours dans un sac papier avec une banane (l'éthylène accélère la maturation). Le hass mexicain est la variété roi : chair onctueuse, peau rugueuse. Guacamole authentique : écrase à la fourchette (jamais au mixeur), citron vert, oignon rouge, coriandre, piment, sel. Avocado toast : pain au levain grillé, écrase l'avocat dessus, fleur de sel, huile d'olive, piment d'Espelette, œuf poché. Côté impact : la production demande beaucoup d'eau (250 L par fruit) — variétés locales européennes en Espagne ou Sicile à privilégier quand possible.",
    intro_en:
      "Avocado became the millennial culinary emblem — for good reason: buttery texture, healthy fats (omega-9), endless versatility. To pick a ripe one, it should give slightly under finger pressure without being mushy. If too hard, slip it into a paper bag with a banana for 2 days (ethylene speeds ripening). Mexican Hass is the king variety: silky flesh, pebbled skin. Real guacamole: mashed with a fork (never a blender), lime, red onion, cilantro, chili, salt. Avocado toast: grilled sourdough, smashed avocado, flaky salt, olive oil, chili flakes, poached egg. On impact: avocado farming uses serious water (66 gal per fruit) — when possible, choose European-grown (Spain, Sicily) over flown-in.",
  },
  {
    slug: "chocolat",
    apiParam: "Chocolate",
    apiType: "ingredient",
    emoji: "🍫",
    name_fr: "Chocolat",
    name_en: "Chocolate",
    pollQuestion_fr: "Team chocolat...",
    pollQuestion_en: "Team chocolate...",
    pollOptions_fr: ["Noir intense (70%+)", "Au lait classique", "Blanc onctueux", "Praliné noisette"],
    pollOptions_en: ["Dark intense (70%+)", "Classic milk", "Creamy white", "Hazelnut praline"],
    intro_fr:
      "Le chocolat vient de la fève de cacao (Theobroma cacao = nourriture des dieux, et c'est mérité). 70 % de la production mondiale vient d'Afrique de l'Ouest, mais les grands crus se trouvent à Madagascar, en Équateur, au Venezuela. Le pourcentage indique la teneur en cacao : 70 % = équilibre amertume/sucre. Le tempérage est la technique reine pour obtenir un chocolat brillant et qui claque : fonte à 50 °C, refroidi à 27 °C, remonté à 31 °C. Recettes essentielles : mousse au chocolat (œufs + chocolat fondu, 4 ingrédients), fondant au chocolat cœur coulant, ganache pour tartes, brownie texture dense, cookies pépites moelleux. Et la tablette pure dégustation, lentement laissée fondre sur la langue, reste l'expérience la plus pure.",
    intro_en:
      "Chocolate comes from cacao beans (Theobroma cacao = food of the gods, and rightly so). 70% of global production comes from West Africa, but the grand crus live in Madagascar, Ecuador and Venezuela. The percentage indicates cocoa content: 70% = balanced bitter-sweet. Tempering is the master technique for shiny snap-able chocolate: melt to 122 °F, cool to 80 °F, gently reheat to 88 °F. Essential recipes: chocolate mousse (eggs + melted chocolate, 4 ingredients), molten lava cake, tart ganache, fudgy brownies, chewy chocolate chip cookies. And a tasting-grade dark square slowly melting on the tongue remains the purest experience.",
  },

  // ---------- CATEGORIES ----------
  {
    slug: "seafood",
    apiParam: "Seafood",
    apiType: "category",
    emoji: "🦞",
    name_fr: "Fruits de mer",
    name_en: "Seafood",
    pollQuestion_fr: "Le top des fruits de mer, c'est...",
    pollQuestion_en: "Top seafood pick?",
    pollOptions_fr: ["Huîtres", "Homard", "Moules-frites", "Plateau royal complet"],
    pollOptions_en: ["Oysters", "Lobster", "Mussels & fries", "Full seafood platter"],
    intro_fr:
      "Les fruits de mer transportent immédiatement vers la côte. Huîtres : à manger très fraîches, citron OU vinaigre à l'échalote, jamais les deux. Moules : un kilo par personne, marinière (vin blanc, échalote, persil), 5 min couvercle fermé jusqu'à ouverture. Homard : court-bouillon, 10 min pour un 500 g, à servir tiède avec beurre fondu citronné. Le plateau royal s'organise par étages : glaçons + algues + bigorneaux, crevettes roses, huîtres, palourdes, langoustines, tourteau au centre. À boire : Muscadet, Sancerre, Chablis ou cidre brut. Et n'oublie pas le pain de seigle beurré demi-sel — c'est la touche bretonne qui fait toute la différence sur les huîtres.",
    intro_en:
      "Seafood instantly transports you seaside. Oysters: serve very fresh, lemon OR mignonette, never both. Mussels: 1 kg per person, classic mariniere (white wine, shallot, parsley), 5 minutes covered until they open. Lobster: salted boil, 10 minutes for a 1-pounder, served warm with lemon-butter. The grand platter is layered: ice + seaweed + winkles, pink shrimp, oysters, clams, langoustines, with crab in the center. Drinks: Muscadet, Sancerre, Chablis or dry cider. Don't skip the buttered rye bread — that Breton touch makes every oyster better.",
  },
  {
    slug: "vegetarien",
    apiParam: "Vegetarian",
    apiType: "category",
    emoji: "🥗",
    name_fr: "Végétarien",
    name_en: "Vegetarian",
    pollQuestion_fr: "Ton plat végé préféré, c'est...",
    pollQuestion_en: "Favorite veggie dish?",
    pollOptions_fr: ["Curry de légumes", "Buddha bowl", "Risotto aux champignons", "Pizza margherita"],
    pollOptions_en: ["Veggie curry", "Buddha bowl", "Mushroom risotto", "Margherita pizza"],
    intro_fr:
      "Manger végétarien ne veut plus dire manger triste — au contraire, c'est la cuisine la plus créative du moment. Pour des plats vraiment rassasiants, joue sur trois piliers : féculents (riz complet, quinoa, patate douce, pâtes), protéines végétales (tofu, tempeh, lentilles, pois chiches, haricots noirs) et MATIÈRE GRASSE de qualité (huile d'olive, avocat, tahini, noix). Sans gras, c'est triste. L'umami végétal vient des champignons, du miso, de la sauce soja, du parmesan, des tomates séchées, de la levure maltée. Idées : curry pois chiches-épinards-lait de coco, lasagnes aux légumes, falafels, shakshuka, ratatouille, dal indien, pad thaï au tofu, gnocchi au gorgonzola. Pas une seule bouchée triste dans le lot.",
    intro_en:
      "Eating vegetarian no longer means eating sad — it's actually the most creative cuisine right now. For truly satisfying meals, lean on three pillars: starches (brown rice, quinoa, sweet potato, pasta), plant proteins (tofu, tempeh, lentils, chickpeas, black beans) and quality FAT (olive oil, avocado, tahini, nuts). No fat = no joy. Plant umami comes from mushrooms, miso, soy sauce, parmesan, sun-dried tomatoes, nutritional yeast. Ideas: chickpea-spinach-coconut curry, veggie lasagna, falafels, shakshuka, ratatouille, Indian dal, tofu pad thai, gnocchi with gorgonzola. Not one boring bite in the lineup.",
  },
  {
    slug: "vegan",
    apiParam: "Vegan",
    apiType: "category",
    emoji: "🌱",
    name_fr: "Vegan",
    name_en: "Vegan",
    pollQuestion_fr: "Le plat vegan qui t'a converti(e), c'est...",
    pollQuestion_en: "Vegan dish that converted you?",
    pollOptions_fr: ["Burger vegan beyond", "Pad thaï tofu", "Bowl quinoa-avocat", "Pas encore converti(e)"],
    pollOptions_en: ["Beyond burger", "Tofu pad thai", "Quinoa-avocado bowl", "Not converted yet"],
    intro_fr:
      "La cuisine vegan a explosé : plus aucune carence à craindre avec un peu de variété, et certains plats égalent vraiment leurs versions classiques. Substituts utiles à avoir sous la main : tofu ferme (à mariner et saisir), tempeh fumé (texture intense), seitan (la viande de blé, parfaite en sauce), lait d'avoine pour le café, crème de coco pour les sauces, levure maltée pour le côté fromage. Recettes incontournables : burger lentilles-champignons, mac and cheese à la courge butternut, ricotta de tofu pour lasagnes, mayonnaise au lait de soja, brownie haricots noirs (oui vraiment), cheesecake aux noix de cajou. Tu peux aussi simplement véganiser tes classiques : pâtes alle vongole sans palourdes (avec champignons et nori = goût marin), carbonara au tofu fumé.",
    intro_en:
      "Vegan cooking has exploded: no deficiency to fear with a varied diet, and some dishes truly rival their classic versions. Essential pantry swaps: firm tofu (marinate and sear), smoked tempeh (intense texture), seitan (wheat meat, perfect in sauces), oat milk for coffee, coconut cream for sauces, nutritional yeast for the cheesy hit. Must-try recipes: lentil-mushroom burgers, butternut squash mac and cheese, tofu ricotta lasagna, soy-milk mayo, black bean brownies (yes really), cashew cheesecake. You can also just veganize your classics: pasta alle vongole without clams (use mushrooms and nori for the sea taste), carbonara with smoked tofu.",
  },
  {
    slug: "dessert",
    apiParam: "Dessert",
    apiType: "category",
    emoji: "🍰",
    name_fr: "Dessert",
    name_en: "Dessert",
    pollQuestion_fr: "Le dessert qui te fait craquer ?",
    pollQuestion_en: "Dessert that wins you over?",
    pollOptions_fr: ["Tiramisu", "Fondant au chocolat", "Tarte au citron meringuée", "Cheesecake new-yorkais"],
    pollOptions_en: ["Tiramisu", "Molten chocolate cake", "Lemon meringue pie", "NY cheesecake"],
    intro_fr:
      "Le dessert est la pâtisserie miniature à la maison — précis mais accessible avec quelques règles. Le sucre, ce n'est pas juste pour le goût : il retient l'humidité, fait dorer (réaction de Maillard), structure les blancs d'œufs montés. La farine T45 ou T55 pour les pâtisseries fines, T65 pour les pâtes à tarte plus rustiques. Le beurre froid pour les pâtes brisées qui se feuilletteront, fondu pour les cookies moelleux. Œufs et beurre à température ambiante pour les génoises (mieux montés, mieux émulsifiés). Recettes à maîtriser : mousse au chocolat, cookies, tarte au citron, fondant cœur coulant, crème brûlée à la torche, tiramisu, cheesecake. Et le secret final : pèse TOUT au gramme près. Pâtisserie = chimie, pas improvisation.",
    intro_en:
      "Dessert is home pastry — precise but accessible with a few rules. Sugar isn't just flavor: it retains moisture, browns (Maillard), structures whipped egg whites. Cake flour for delicate bakes, all-purpose for tart shells. Cold butter for flaky pastries, melted for chewy cookies. Eggs and butter at room temperature for sponge cakes (better whip, better emulsion). Recipes to master: chocolate mousse, chocolate chip cookies, lemon tart, molten lava cake, torched crème brûlée, tiramisu, cheesecake. The ultimate secret: WEIGH everything to the gram. Pastry is chemistry, not improvisation.",
  },
  {
    slug: "petit-dejeuner",
    apiParam: "Breakfast",
    apiType: "category",
    emoji: "🥞",
    name_fr: "Petit-déjeuner",
    name_en: "Breakfast",
    pollQuestion_fr: "Le petit-déj qui te réveille vraiment ?",
    pollQuestion_en: "Breakfast that actually wakes you up?",
    pollOptions_fr: ["Pancakes & sirop d'érable", "Œufs Bénédicte", "Bowl açaï", "Tartines beurre-confiture"],
    pollOptions_en: ["Pancakes & maple syrup", "Eggs Benedict", "Açaí bowl", "Toast with butter & jam"],
    intro_fr:
      "Le petit-déjeuner varie radicalement selon les pays : continental européen (pain-beurre-confiture-café), anglais full breakfast (œufs-bacon-haricots-toast-tomate), américain pancakes-sirop-bacon, japonais riz-poisson-misoshiru, indien dosa-chutney. Pour un vrai bon brunch maison : pancakes moelleux (battre légèrement la pâte, laisser reposer 10 min, cuisson à feu moyen sans matière grasse pour les premières bulles, retournés une seule fois). Granola maison : avoine + miel + huile + fruits secs au four 30 min à 150 °C. Œufs Bénédicte : muffin anglais grillé, jambon, œuf poché (eau frémissante + filet de vinaigre + tourbillon, 3 min), nappés de sauce hollandaise (jaunes + beurre clarifié + citron). Lance ta journée comme un boss.",
    intro_en:
      "Breakfast varies wildly by country: European continental (bread-butter-jam-coffee), English full breakfast (eggs-bacon-beans-toast-tomato), American pancakes-syrup-bacon, Japanese rice-fish-miso, Indian dosa-chutney. For a great home brunch: fluffy pancakes (mix lightly, rest 10 minutes, medium heat with no fat for the first bubbles, flip once only). Homemade granola: oats + honey + oil + dried fruit baked 30 minutes at 300 °F. Eggs Benedict: toasted English muffin, ham, poached egg (simmering water + splash of vinegar + whirlpool, 3 minutes), topped with hollandaise (yolks + clarified butter + lemon). Start the day like a boss.",
  },
];

export const RECETTES_SLUGS: string[] = RECIPE_CATEGORIES.map((c) => c.slug);

const BY_SLUG: Map<string, RecipeCategory> = new Map(
  RECIPE_CATEGORIES.map((c) => [c.slug, c]),
);

export function findCategory(slug: string): RecipeCategory | null {
  return BY_SLUG.get(slug) ?? null;
}

/** Pick `limit` sibling categories, excluding the current one. */
export function relatedCategories(
  current: RecipeCategory,
  limit = 6,
): RecipeCategory[] {
  return RECIPE_CATEGORIES.filter((c) => c.slug !== current.slug).slice(0, limit);
}

// ---------- TheMealDB API types + fetcher ----------

export type Meal = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};

type FilterResponse = {
  meals: Meal[] | null;
};

/**
 * Fetch the meals list for a category. Returns an empty array on API failure
 * (network, non-200, malformed JSON) so the page can render a stub.
 */
export async function fetchMealsFor(category: RecipeCategory): Promise<Meal[]> {
  const param = category.apiType === "ingredient" ? "i" : "c";
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?${param}=${encodeURIComponent(category.apiParam)}`;
  try {
    const res = await fetch(url, { next: { revalidate: 86400 } });
    if (!res.ok) return [];
    const json = (await res.json()) as FilterResponse;
    return Array.isArray(json.meals) ? json.meals : [];
  } catch {
    return [];
  }
}

/** Build the canonical TheMealDB recipe page URL for a meal id. */
export function mealDbUrl(idMeal: string): string {
  return `https://www.themealdb.com/meal.php?id=${encodeURIComponent(idMeal)}`;
}
