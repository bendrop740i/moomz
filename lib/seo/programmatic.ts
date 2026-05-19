// Programmatic SEO: /q/[locale]/[topic]/[modifier]
// Generates ~1000 pages by combining 5 topics × 10 audiences × 10 themes × 2 locales.
// Each page surfaces 15 prompts filtered by the page's audience+theme tags.

export type ProgLocale = "en" | "fr";
export type Topic =
  | "would-you-rather"
  | "this-or-that"
  | "never-have-i-ever"
  | "icebreaker"
  | "hot-takes";

export const TOPICS: Array<{ id: Topic; emoji: string; label: Record<ProgLocale, string> }> = [
  { id: "would-you-rather", emoji: "🤔", label: { en: "Would you rather", fr: "Tu préfères" } },
  { id: "this-or-that", emoji: "↔️", label: { en: "This or that", fr: "Ceci ou cela" } },
  { id: "never-have-i-ever", emoji: "🙅", label: { en: "Never have I ever", fr: "Je n'ai jamais" } },
  { id: "icebreaker", emoji: "🧊", label: { en: "Icebreaker", fr: "Brise-glace" } },
  { id: "hot-takes", emoji: "🔥", label: { en: "Hot takes", fr: "Avis impopulaire" } },
];

export const AUDIENCES = [
  { id: "adults", label: { en: "adults", fr: "adultes" } },
  { id: "couples", label: { en: "couples", fr: "couples" } },
  { id: "college", label: { en: "college", fr: "étudiants" } },
  { id: "work", label: { en: "work", fr: "le boulot" } },
  { id: "friends", label: { en: "best friends", fr: "potes" } },
  { id: "family", label: { en: "family", fr: "la famille" } },
  { id: "teens", label: { en: "teens", fr: "ados" } },
  { id: "strangers", label: { en: "strangers", fr: "inconnus" } },
  { id: "first-date", label: { en: "a first date", fr: "un premier rdv" } },
  { id: "gen-z", label: { en: "Gen Z", fr: "la Gen Z" } },
  { id: "kids", label: { en: "kids", fr: "enfants" } },
  { id: "dating", label: { en: "dating", fr: "rencontres" } },
] as const;

export const THEMES = [
  { id: "funny", label: { en: "funny", fr: "drôles" } },
  { id: "dirty", label: { en: "spicy", fr: "épicées" } },
  { id: "deep", label: { en: "deep", fr: "profondes" } },
  { id: "weird", label: { en: "weird", fr: "bizarres" } },
  { id: "awkward", label: { en: "awkward", fr: "gênantes" } },
  { id: "savage", label: { en: "savage", fr: "savage" } },
  { id: "dating", label: { en: "dating", fr: "dating" } },
  { id: "money", label: { en: "money", fr: "argent" } },
  { id: "food", label: { en: "food", fr: "bouffe" } },
  { id: "drama", label: { en: "drama", fr: "drama" } },
] as const;

export type AudienceId = (typeof AUDIENCES)[number]["id"];
export type ThemeId = (typeof THEMES)[number]["id"];

export type Prompt = {
  q: Record<ProgLocale, string>;
  opts: Record<ProgLocale, string[]>;
  audiences: AudienceId[]; // empty = applies to all
  themes: ThemeId[];
};

// --- PROMPT POOLS ---------------------------------------------------------
// Each topic has ~40 prompts tagged with audience/theme. The route picks 15
// matching the requested (audience, theme) — falling back to topic pool if
// not enough exact matches.

export const PROMPTS: Record<Topic, Prompt[]> = {
  "would-you-rather": [
    { q: { en: "Would you rather be invisible or read minds?", fr: "Tu préfères être invisible ou lire les pensées ?" }, opts: { en: ["Invisible", "Read minds"], fr: ["Invisible", "Lire les pensées"] }, audiences: ["adults", "college", "friends", "gen-z"], themes: ["deep", "funny"] },
    { q: { en: "Always be 10 min late or 30 min early?", fr: "Toujours 10 min en retard ou 30 min en avance ?" }, opts: { en: ["10 late", "30 early"], fr: ["10 en retard", "30 en avance"] }, audiences: ["work", "friends", "adults"], themes: ["funny", "awkward"] },
    { q: { en: "Date someone you love or someone who loves you?", fr: "Aimer ou être aimé ?" }, opts: { en: ["I love them", "They love me"], fr: ["J'aime", "Aimé(e)"] }, audiences: ["couples", "adults", "first-date"], themes: ["deep", "dating"] },
    { q: { en: "Never text again or never call again?", fr: "Plus jamais texter ou plus jamais appeler ?" }, opts: { en: ["No texts", "No calls"], fr: ["Plus de SMS", "Plus d'appels"] }, audiences: ["gen-z", "teens", "adults"], themes: ["funny", "weird"] },
    { q: { en: "Know how you die or when you die?", fr: "Savoir comment tu meurs ou quand ?" }, opts: { en: ["How", "When"], fr: ["Comment", "Quand"] }, audiences: ["adults", "college"], themes: ["deep", "weird"] },
    { q: { en: "Be famous and broke or unknown and rich?", fr: "Célèbre et fauché·e ou inconnu·e et riche ?" }, opts: { en: ["Famous broke", "Unknown rich"], fr: ["Célèbre fauché·e", "Inconnu·e riche"] }, audiences: ["adults", "gen-z", "college"], themes: ["money", "deep"] },
    { q: { en: "Lose all your photos or all your texts?", fr: "Perdre toutes tes photos ou tous tes SMS ?" }, opts: { en: ["Photos", "Texts"], fr: ["Photos", "SMS"] }, audiences: ["adults", "couples", "friends"], themes: ["deep", "drama"] },
    { q: { en: "Only eat sweet or only eat salty?", fr: "Que du sucré ou que du salé ?" }, opts: { en: ["Sweet", "Salty"], fr: ["Sucré", "Salé"] }, audiences: ["family", "kids", "friends"], themes: ["food", "funny"] },
    { q: { en: "Live without music or without TV/movies?", fr: "Vivre sans musique ou sans écran ?" }, opts: { en: ["No music", "No screens"], fr: ["Sans musique", "Sans écrans"] }, audiences: ["teens", "gen-z", "college"], themes: ["deep", "weird"] },
    { q: { en: "Always speak in rhyme or always sing your words?", fr: "Toujours rimer ou toujours chanter ?" }, opts: { en: ["Rhyme", "Sing"], fr: ["Rimer", "Chanter"] }, audiences: ["friends", "teens", "family"], themes: ["funny", "weird"] },
    { q: { en: "Be alone forever or surrounded by people you hate?", fr: "Seul·e à vie ou entouré·e de gens que tu détestes ?" }, opts: { en: ["Alone", "Crowd of haters"], fr: ["Seul·e", "Entouré·e"] }, audiences: ["adults", "college"], themes: ["deep", "savage"] },
    { q: { en: "Read your ex's diary or have them read yours?", fr: "Lire le journal de ton·ta ex ou qu'iel lise le tien ?" }, opts: { en: ["Read theirs", "They read mine"], fr: ["Lire le sien", "Iel lit le mien"] }, audiences: ["couples", "adults", "dating"], themes: ["drama", "dating", "awkward"] },
    { q: { en: "Spill the tea or take it to the grave?", fr: "Balancer le ragot ou tomber dans la tombe avec ?" }, opts: { en: ["Spill", "Take it"], fr: ["Balancer", "Tomber avec"] }, audiences: ["gen-z", "friends", "teens"], themes: ["drama", "savage"] },
    { q: { en: "Earn €100k/year boring job or €40k/year dream job?", fr: "100k€/an chiant ou 40k€/an passion ?" }, opts: { en: ["100k boring", "40k dream"], fr: ["100k chiant", "40k passion"] }, audiences: ["adults", "work", "college"], themes: ["money", "deep"] },
    { q: { en: "Marry for love or marry for money?", fr: "Mariage par amour ou par argent ?" }, opts: { en: ["Love", "Money"], fr: ["Amour", "Argent"] }, audiences: ["couples", "adults", "dating"], themes: ["money", "deep", "dating"] },
    { q: { en: "Live in 1920 or 2120?", fr: "Vivre en 1920 ou en 2120 ?" }, opts: { en: ["1920", "2120"], fr: ["1920", "2120"] }, audiences: ["adults", "college", "gen-z"], themes: ["deep", "weird"] },
    { q: { en: "Have unlimited food or unlimited free travel?", fr: "Bouffe à vie ou voyage à vie ?" }, opts: { en: ["Food", "Travel"], fr: ["Bouffe", "Voyage"] }, audiences: ["adults", "couples", "friends"], themes: ["food", "money"] },
    { q: { en: "Be a meme or be canceled?", fr: "Devenir un meme ou te faire cancel ?" }, opts: { en: ["Meme", "Canceled"], fr: ["Meme", "Cancel"] }, audiences: ["gen-z", "teens"], themes: ["funny", "drama", "savage"] },
    { q: { en: "Your camera always on at work or off forever?", fr: "Caméra toujours allumée au taf ou éteinte à vie ?" }, opts: { en: ["Always on", "Off forever"], fr: ["Allumée", "Éteinte"] }, audiences: ["work", "adults"], themes: ["awkward", "funny"] },
    { q: { en: "Sit at the boss's table or never speak in meetings?", fr: "Manger avec le boss ou ne plus jamais parler en réu ?" }, opts: { en: ["Boss table", "Silent"], fr: ["Avec le boss", "Silence"] }, audiences: ["work", "adults"], themes: ["awkward", "savage"] },
    { q: { en: "Find out you're adopted or find out you have a twin?", fr: "Découvrir que t'es adopté·e ou que t'as un·e jumeau·elle ?" }, opts: { en: ["Adopted", "Twin"], fr: ["Adopté·e", "Jumeau·elle"] }, audiences: ["family", "adults"], themes: ["drama", "deep"] },
    { q: { en: "Drunk text your ex or drunk text your boss?", fr: "Texte bourré·e à ton·ta ex ou à ton boss ?" }, opts: { en: ["Ex", "Boss"], fr: ["Ex", "Boss"] }, audiences: ["adults", "work"], themes: ["awkward", "funny", "drama"] },
    { q: { en: "Forget your anniversary or your partner's birthday?", fr: "Oublier ton anniv de couple ou son anniv ?" }, opts: { en: ["Anniversary", "Birthday"], fr: ["Anniv couple", "Son anniv"] }, audiences: ["couples", "adults"], themes: ["dating", "drama", "awkward"] },
    { q: { en: "Live without coffee or without WiFi?", fr: "Vivre sans café ou sans WiFi ?" }, opts: { en: ["No coffee", "No WiFi"], fr: ["Sans café", "Sans WiFi"] }, audiences: ["adults", "work", "college"], themes: ["funny", "food"] },
    { q: { en: "Have a tail or have wings?", fr: "Avoir une queue ou des ailes ?" }, opts: { en: ["Tail", "Wings"], fr: ["Queue", "Ailes"] }, audiences: ["teens", "kids", "friends"], themes: ["weird", "funny"] },
    { q: { en: "Be roasted in public or ghosted by everyone?", fr: "Te faire clasher en public ou ghoster par tout le monde ?" }, opts: { en: ["Roasted", "Ghosted"], fr: ["Clashé·e", "Ghosté·e"] }, audiences: ["teens", "gen-z", "college"], themes: ["savage", "awkward", "drama"] },
    { q: { en: "Date your ex's best friend or your best friend's ex?", fr: "Sortir avec le·la meilleur·e ami·e de ton·ta ex ou avec l'ex de ton·ta meilleur·e ami·e ?" }, opts: { en: ["Ex's BFF", "BFF's ex"], fr: ["BFF de l'ex", "Ex de la BFF"] }, audiences: ["couples", "adults", "dating"], themes: ["drama", "dating", "savage"] },
    { q: { en: "Show up to a wedding overdressed or underdressed?", fr: "Arriver à un mariage trop chic ou pas assez ?" }, opts: { en: ["Overdressed", "Underdressed"], fr: ["Trop chic", "Pas assez"] }, audiences: ["adults", "friends"], themes: ["awkward", "funny"] },
    { q: { en: "Be the funniest at the table or the smartest?", fr: "Être le·la plus drôle ou le·la plus intelligent·e à table ?" }, opts: { en: ["Funniest", "Smartest"], fr: ["Plus drôle", "Plus smart"] }, audiences: ["family", "friends", "adults"], themes: ["funny", "deep"] },
    { q: { en: "Lose a finger or 5 IQ points?", fr: "Perdre un doigt ou 5 points de QI ?" }, opts: { en: ["Finger", "IQ"], fr: ["Doigt", "QI"] }, audiences: ["adults", "college"], themes: ["weird", "deep"] },
  ],
  "this-or-that": [
    { q: { en: "Coffee or tea?", fr: "Café ou thé ?" }, opts: { en: ["Coffee", "Tea"], fr: ["Café", "Thé"] }, audiences: ["family", "work", "adults"], themes: ["food"] },
    { q: { en: "Beach or mountain?", fr: "Plage ou montagne ?" }, opts: { en: ["Beach", "Mountain"], fr: ["Plage", "Montagne"] }, audiences: ["family", "couples", "friends"], themes: ["deep"] },
    { q: { en: "Cats or dogs?", fr: "Chats ou chiens ?" }, opts: { en: ["Cats", "Dogs"], fr: ["Chats", "Chiens"] }, audiences: ["family", "kids", "friends"], themes: ["funny"] },
    { q: { en: "Pizza or burger?", fr: "Pizza ou burger ?" }, opts: { en: ["Pizza", "Burger"], fr: ["Pizza", "Burger"] }, audiences: ["college", "friends", "teens"], themes: ["food"] },
    { q: { en: "Netflix or YouTube?", fr: "Netflix ou YouTube ?" }, opts: { en: ["Netflix", "YouTube"], fr: ["Netflix", "YouTube"] }, audiences: ["teens", "gen-z", "college"], themes: ["funny"] },
    { q: { en: "iPhone or Android?", fr: "iPhone ou Android ?" }, opts: { en: ["iPhone", "Android"], fr: ["iPhone", "Android"] }, audiences: ["adults", "teens", "gen-z"], themes: ["drama"] },
    { q: { en: "Text first or wait?", fr: "Texter en premier ou attendre ?" }, opts: { en: ["Text first", "Wait"], fr: ["Texter", "Attendre"] }, audiences: ["dating", "first-date", "gen-z"], themes: ["dating", "drama"] },
    { q: { en: "Drink wine or beer?", fr: "Vin ou bière ?" }, opts: { en: ["Wine", "Beer"], fr: ["Vin", "Bière"] }, audiences: ["adults", "college", "friends"], themes: ["food"] },
    { q: { en: "Window seat or aisle?", fr: "Hublot ou couloir ?" }, opts: { en: ["Window", "Aisle"], fr: ["Hublot", "Couloir"] }, audiences: ["adults", "couples"], themes: ["funny"] },
    { q: { en: "Save or spend?", fr: "Épargner ou claquer ?" }, opts: { en: ["Save", "Spend"], fr: ["Épargner", "Claquer"] }, audiences: ["adults", "work", "college"], themes: ["money", "deep"] },
    { q: { en: "Early bird or night owl?", fr: "Du matin ou du soir ?" }, opts: { en: ["Early bird", "Night owl"], fr: ["Matinal·e", "Du soir"] }, audiences: ["adults", "college", "couples"], themes: ["funny"] },
    { q: { en: "Books or films?", fr: "Livres ou films ?" }, opts: { en: ["Books", "Films"], fr: ["Livres", "Films"] }, audiences: ["adults", "college"], themes: ["deep"] },
    { q: { en: "Truth or dare?", fr: "Action ou vérité ?" }, opts: { en: ["Truth", "Dare"], fr: ["Vérité", "Action"] }, audiences: ["teens", "friends", "college"], themes: ["funny", "savage"] },
    { q: { en: "Wedding or eloping?", fr: "Mariage ou fugue ?" }, opts: { en: ["Wedding", "Elope"], fr: ["Mariage", "Fugue"] }, audiences: ["couples", "adults"], themes: ["deep", "dating"] },
    { q: { en: "Big city or small town?", fr: "Grande ville ou petit village ?" }, opts: { en: ["Big city", "Small town"], fr: ["Ville", "Village"] }, audiences: ["adults", "college", "family"], themes: ["deep"] },
    { q: { en: "Spotify or Apple Music?", fr: "Spotify ou Apple Music ?" }, opts: { en: ["Spotify", "Apple"], fr: ["Spotify", "Apple"] }, audiences: ["teens", "gen-z"], themes: ["drama"] },
    { q: { en: "Hot shower or cold shower?", fr: "Douche chaude ou froide ?" }, opts: { en: ["Hot", "Cold"], fr: ["Chaude", "Froide"] }, audiences: ["adults"], themes: ["weird"] },
    { q: { en: "Crocs or Birkenstocks?", fr: "Crocs ou Birkenstocks ?" }, opts: { en: ["Crocs", "Birks"], fr: ["Crocs", "Birks"] }, audiences: ["gen-z", "teens"], themes: ["funny", "awkward"] },
    { q: { en: "Hike or swim?", fr: "Rando ou baignade ?" }, opts: { en: ["Hike", "Swim"], fr: ["Rando", "Baignade"] }, audiences: ["family", "couples"], themes: ["funny"] },
    { q: { en: "WFH or office?", fr: "Télétravail ou bureau ?" }, opts: { en: ["WFH", "Office"], fr: ["Télétravail", "Bureau"] }, audiences: ["work", "adults"], themes: ["awkward"] },
  ],
  "never-have-i-ever": [
    { q: { en: "Never have I ever ghosted someone", fr: "Je n'ai jamais ghosté quelqu'un" }, opts: { en: ["Done it", "Never"], fr: ["Fait", "Jamais"] }, audiences: ["dating", "gen-z", "adults"], themes: ["drama", "dating"] },
    { q: { en: "Never have I ever cried at work", fr: "Je n'ai jamais pleuré au boulot" }, opts: { en: ["Done it", "Never"], fr: ["Fait", "Jamais"] }, audiences: ["work", "adults"], themes: ["awkward", "drama"] },
    { q: { en: "Never have I ever stalked an ex on Insta", fr: "Je n'ai jamais stalké un·e ex sur Insta" }, opts: { en: ["Done it", "Never"], fr: ["Fait", "Jamais"] }, audiences: ["adults", "couples", "dating"], themes: ["dating", "drama"] },
    { q: { en: "Never have I ever lied on my CV", fr: "Je n'ai jamais menti sur mon CV" }, opts: { en: ["Done it", "Never"], fr: ["Fait", "Jamais"] }, audiences: ["work", "adults", "college"], themes: ["awkward", "savage"] },
    { q: { en: "Never have I ever faked a sick day", fr: "Je n'ai jamais simulé un arrêt maladie" }, opts: { en: ["Done it", "Never"], fr: ["Fait", "Jamais"] }, audiences: ["work", "adults"], themes: ["funny", "savage"] },
    { q: { en: "Never have I ever sent the wrong text to the wrong person", fr: "Je n'ai jamais envoyé un message à la mauvaise personne" }, opts: { en: ["Done it", "Never"], fr: ["Fait", "Jamais"] }, audiences: ["adults", "gen-z"], themes: ["awkward", "drama"] },
    { q: { en: "Never have I ever cheated on a test", fr: "Je n'ai jamais triché à un examen" }, opts: { en: ["Done it", "Never"], fr: ["Fait", "Jamais"] }, audiences: ["college", "teens"], themes: ["savage"] },
    { q: { en: "Never have I ever kissed my best friend", fr: "Je n'ai jamais embrassé mon·ma meilleur·e ami·e" }, opts: { en: ["Done it", "Never"], fr: ["Fait", "Jamais"] }, audiences: ["friends", "couples", "dating"], themes: ["dating", "drama", "awkward"] },
    { q: { en: "Never have I ever rage-quit a video call", fr: "Je n'ai jamais quitté un Zoom en rage" }, opts: { en: ["Done it", "Never"], fr: ["Fait", "Jamais"] }, audiences: ["work", "adults"], themes: ["awkward", "drama"] },
    { q: { en: "Never have I ever been broken up with by text", fr: "Je n'ai jamais été largué·e par SMS" }, opts: { en: ["Yes", "Never"], fr: ["Oui", "Jamais"] }, audiences: ["adults", "dating", "couples"], themes: ["drama", "dating"] },
    { q: { en: "Never have I ever forgotten a parent's birthday", fr: "Je n'ai jamais oublié l'anniv d'un parent" }, opts: { en: ["Done it", "Never"], fr: ["Fait", "Jamais"] }, audiences: ["family", "adults"], themes: ["awkward"] },
    { q: { en: "Never have I ever lied about my age", fr: "Je n'ai jamais menti sur mon âge" }, opts: { en: ["Done it", "Never"], fr: ["Fait", "Jamais"] }, audiences: ["adults", "dating"], themes: ["awkward"] },
    { q: { en: "Never have I ever sent a nude", fr: "Je n'ai jamais envoyé un nude" }, opts: { en: ["Done it", "Never"], fr: ["Fait", "Jamais"] }, audiences: ["adults", "dating", "gen-z"], themes: ["dirty", "drama", "dating"] },
    { q: { en: "Never have I ever pretended to laugh at a boss joke", fr: "Je n'ai jamais ri faussement à une blague du boss" }, opts: { en: ["Done it", "Never"], fr: ["Fait", "Jamais"] }, audiences: ["work"], themes: ["awkward", "funny"] },
    { q: { en: "Never have I ever blocked a family member", fr: "Je n'ai jamais bloqué un membre de la famille" }, opts: { en: ["Done it", "Never"], fr: ["Fait", "Jamais"] }, audiences: ["family", "adults"], themes: ["drama", "savage"] },
    { q: { en: "Never have I ever stalked a stranger via mutuals", fr: "Je n'ai jamais stalké un·e inconnu·e via les mutuals" }, opts: { en: ["Done it", "Never"], fr: ["Fait", "Jamais"] }, audiences: ["gen-z", "teens"], themes: ["drama", "weird"] },
    { q: { en: "Never have I ever skipped a wedding to stay home", fr: "Je n'ai jamais skippé un mariage pour rester chez moi" }, opts: { en: ["Done it", "Never"], fr: ["Fait", "Jamais"] }, audiences: ["adults", "friends"], themes: ["awkward", "savage"] },
    { q: { en: "Never have I ever lied to my doctor", fr: "Je n'ai jamais menti à mon médecin" }, opts: { en: ["Done it", "Never"], fr: ["Fait", "Jamais"] }, audiences: ["adults"], themes: ["awkward"] },
    { q: { en: "Never have I ever pretended I read the book", fr: "Je n'ai jamais fait semblant d'avoir lu le bouquin" }, opts: { en: ["Done it", "Never"], fr: ["Fait", "Jamais"] }, audiences: ["college", "adults"], themes: ["funny", "awkward"] },
    { q: { en: "Never have I ever cried watching a Pixar film", fr: "Je n'ai jamais pleuré devant un Pixar" }, opts: { en: ["Done it", "Never"], fr: ["Fait", "Jamais"] }, audiences: ["family", "couples", "friends"], themes: ["deep", "funny"] },
  ],
  "icebreaker": [
    { q: { en: "What's the most embarrassing thing you Googled this week?", fr: "Le truc le plus gênant que t'as Googlé cette semaine ?" }, opts: { en: ["I'll spill", "Pass"], fr: ["Je balance", "Pass"] }, audiences: ["friends", "work", "college", "first-date"], themes: ["awkward", "funny"] },
    { q: { en: "Coffee bag or tea bag?", fr: "Sachet de café ou de thé ?" }, opts: { en: ["Coffee", "Tea"], fr: ["Café", "Thé"] }, audiences: ["work", "strangers"], themes: ["food"] },
    { q: { en: "What was the last app you opened?", fr: "C'est quoi la dernière app que t'as ouverte ?" }, opts: { en: ["Insta", "TikTok", "Other"], fr: ["Insta", "TikTok", "Autre"] }, audiences: ["work", "strangers", "first-date"], themes: ["funny"] },
    { q: { en: "What did you binge most recently?", fr: "Dernière série que t'as binge ?" }, opts: { en: ["I'll tell", "Pass"], fr: ["Je dis", "Pass"] }, audiences: ["work", "college", "strangers"], themes: ["funny"] },
    { q: { en: "If we ordered food right now, who picks?", fr: "Si on commande là maintenant, qui choisit ?" }, opts: { en: ["Me", "You"], fr: ["Moi", "Toi"] }, audiences: ["work", "first-date", "couples"], themes: ["food", "funny"] },
    { q: { en: "What's a hill you'd die on?", fr: "C'est quoi ton avis impopulaire à mourir dessus ?" }, opts: { en: ["I'll say", "Too risky"], fr: ["Je le dis", "Trop risqué"] }, audiences: ["work", "first-date", "college"], themes: ["deep", "savage"] },
    { q: { en: "Beach or library?", fr: "Plage ou bibliothèque ?" }, opts: { en: ["Beach", "Library"], fr: ["Plage", "Biblio"] }, audiences: ["work", "strangers"], themes: ["funny"] },
    { q: { en: "Last thing that made you laugh?", fr: "Dernier truc qui t'a fait rire ?" }, opts: { en: ["I'll tell", "Pass"], fr: ["Je dis", "Pass"] }, audiences: ["work", "first-date", "strangers"], themes: ["funny"] },
    { q: { en: "Mountains or city break for the weekend?", fr: "Montagne ou city break ce weekend ?" }, opts: { en: ["Mountain", "City"], fr: ["Montagne", "Ville"] }, audiences: ["work", "couples"], themes: ["deep"] },
    { q: { en: "Best concert you've been to?", fr: "Meilleur concert que t'as vu ?" }, opts: { en: ["I'll name it", "Pass"], fr: ["Je dis", "Pass"] }, audiences: ["college", "work", "strangers"], themes: ["funny"] },
    { q: { en: "Pineapple on pizza, allowed?", fr: "Ananas sur pizza, légal ou pas ?" }, opts: { en: ["Yes", "No"], fr: ["Oui", "Non"] }, audiences: ["work", "family", "friends"], themes: ["food", "drama"] },
    { q: { en: "Morning person or absolutely not?", fr: "Plutôt du matin ou clairement pas ?" }, opts: { en: ["Morning", "No"], fr: ["Matin", "Non"] }, audiences: ["work", "couples"], themes: ["awkward", "funny"] },
    { q: { en: "If you had to give a TED talk right now, on what?", fr: "Une TED talk obligatoire dans 1h, c'est sur quoi ?" }, opts: { en: ["I have a topic", "Help"], fr: ["J'ai un sujet", "Au secours"] }, audiences: ["work", "college"], themes: ["deep", "funny"] },
    { q: { en: "Your last karaoke song?", fr: "Ta dernière chanson au karaoké ?" }, opts: { en: ["I'll say", "Pass"], fr: ["Je dis", "Pass"] }, audiences: ["college", "work", "friends"], themes: ["funny", "awkward"] },
    { q: { en: "Adopt a sloth or a parrot?", fr: "Adopter un paresseux ou un perroquet ?" }, opts: { en: ["Sloth", "Parrot"], fr: ["Paresseux", "Perroquet"] }, audiences: ["work", "family", "kids"], themes: ["weird", "funny"] },
    { q: { en: "Camera on or camera off in our next meeting?", fr: "Caméra on ou off pour la prochaine réu ?" }, opts: { en: ["On", "Off"], fr: ["On", "Off"] }, audiences: ["work"], themes: ["awkward", "funny"] },
    { q: { en: "Which colleague would survive a horror movie?", fr: "Quel collègue survivrait à un film d'horreur ?" }, opts: { en: ["I'll name", "Pass"], fr: ["Je dis", "Pass"] }, audiences: ["work"], themes: ["funny", "savage"] },
    { q: { en: "What's your red flag?", fr: "C'est quoi ton red flag ?" }, opts: { en: ["I'll admit", "I'm flawless"], fr: ["J'avoue", "Aucun"] }, audiences: ["first-date", "dating", "friends"], themes: ["dating", "funny", "savage"] },
    { q: { en: "Spicy food or no?", fr: "Tu manges épicé ?" }, opts: { en: ["Spicy", "Mild"], fr: ["Épicé", "Doux"] }, audiences: ["first-date", "work", "strangers"], themes: ["food"] },
    { q: { en: "Where would you teleport in 5 sec right now?", fr: "Tu te téléportes où en 5 sec là maintenant ?" }, opts: { en: ["I'll say", "Pass"], fr: ["Je dis", "Pass"] }, audiences: ["work", "couples", "first-date"], themes: ["deep", "funny"] },
  ],
  "hot-takes": [
    { q: { en: "Hot take: long-distance never works.", fr: "Avis impopulaire : la distance, ça marche jamais." }, opts: { en: ["Agree", "Disagree"], fr: ["D'accord", "Pas d'accord"] }, audiences: ["dating", "couples", "adults"], themes: ["dating", "drama"] },
    { q: { en: "Hot take: WFH made us less productive.", fr: "Avis impopulaire : le télétravail nous a rendus moins productifs." }, opts: { en: ["Agree", "Disagree"], fr: ["D'accord", "Pas d'accord"] }, audiences: ["work", "adults"], themes: ["awkward", "savage"] },
    { q: { en: "Hot take: cinema is dead.", fr: "Avis impopulaire : le cinéma est mort." }, opts: { en: ["Agree", "Disagree"], fr: ["D'accord", "Pas d'accord"] }, audiences: ["adults", "college"], themes: ["deep"] },
    { q: { en: "Hot take: tipping has gone too far.", fr: "Avis impopulaire : on tip trop." }, opts: { en: ["Agree", "Disagree"], fr: ["D'accord", "Pas d'accord"] }, audiences: ["adults"], themes: ["money", "savage"] },
    { q: { en: "Hot take: parents are friends, not authorities.", fr: "Avis impopulaire : les parents sont des potes, pas des chefs." }, opts: { en: ["Agree", "Disagree"], fr: ["D'accord", "Pas d'accord"] }, audiences: ["family", "teens", "adults"], themes: ["drama"] },
    { q: { en: "Hot take: vinyl is overrated.", fr: "Avis impopulaire : le vinyle est surcoté." }, opts: { en: ["Agree", "Disagree"], fr: ["D'accord", "Pas d'accord"] }, audiences: ["college", "adults", "gen-z"], themes: ["savage"] },
    { q: { en: "Hot take: open relationships are a cop-out.", fr: "Avis impopulaire : les relations libres c'est de la fuite." }, opts: { en: ["Agree", "Disagree"], fr: ["D'accord", "Pas d'accord"] }, audiences: ["couples", "adults", "dating"], themes: ["dating", "deep", "drama"] },
    { q: { en: "Hot take: weddings are a waste of money.", fr: "Avis impopulaire : les mariages sont un gâchis." }, opts: { en: ["Agree", "Disagree"], fr: ["D'accord", "Pas d'accord"] }, audiences: ["couples", "adults", "family"], themes: ["money", "savage"] },
    { q: { en: "Hot take: kids don't need smartphones until 16.", fr: "Avis impopulaire : pas de smartphone avant 16 ans." }, opts: { en: ["Agree", "Disagree"], fr: ["D'accord", "Pas d'accord"] }, audiences: ["family", "teens", "adults"], themes: ["drama", "deep"] },
    { q: { en: "Hot take: AI will replace your job before 2030.", fr: "Avis impopulaire : l'IA va prendre ton job avant 2030." }, opts: { en: ["Agree", "Disagree"], fr: ["D'accord", "Pas d'accord"] }, audiences: ["work", "adults", "college"], themes: ["deep", "money"] },
    { q: { en: "Hot take: monogamy was a marketing campaign.", fr: "Avis impopulaire : la monogamie est un coup de marketing." }, opts: { en: ["Agree", "Disagree"], fr: ["D'accord", "Pas d'accord"] }, audiences: ["adults", "dating", "couples"], themes: ["dating", "drama", "savage"] },
    { q: { en: "Hot take: French people are not rude.", fr: "Avis impopulaire : les Français sont pas snobs." }, opts: { en: ["Agree", "Disagree"], fr: ["D'accord", "Pas d'accord"] }, audiences: ["adults"], themes: ["funny", "drama"] },
    { q: { en: "Hot take: gym selfies should be banned.", fr: "Avis impopulaire : les selfies de salle, à interdire." }, opts: { en: ["Agree", "Disagree"], fr: ["D'accord", "Pas d'accord"] }, audiences: ["gen-z", "adults"], themes: ["awkward", "savage"] },
    { q: { en: "Hot take: birthdays after 30 are sad.", fr: "Avis impopulaire : les anniv après 30 ans c'est triste." }, opts: { en: ["Agree", "Disagree"], fr: ["D'accord", "Pas d'accord"] }, audiences: ["adults"], themes: ["deep", "savage"] },
    { q: { en: "Hot take: dating apps are dead.", fr: "Avis impopulaire : les apps de dating sont mortes." }, opts: { en: ["Agree", "Disagree"], fr: ["D'accord", "Pas d'accord"] }, audiences: ["dating", "adults", "gen-z"], themes: ["dating", "drama"] },
    { q: { en: "Hot take: small talk should be illegal.", fr: "Avis impopulaire : le small talk devrait être interdit." }, opts: { en: ["Agree", "Disagree"], fr: ["D'accord", "Pas d'accord"] }, audiences: ["work", "strangers"], themes: ["awkward", "savage"] },
    { q: { en: "Hot take: brunch is overrated.", fr: "Avis impopulaire : le brunch est surcoté." }, opts: { en: ["Agree", "Disagree"], fr: ["D'accord", "Pas d'accord"] }, audiences: ["friends", "adults"], themes: ["food", "savage"] },
    { q: { en: "Hot take: streaming killed actual music taste.", fr: "Avis impopulaire : le streaming a tué les goûts musicaux." }, opts: { en: ["Agree", "Disagree"], fr: ["D'accord", "Pas d'accord"] }, audiences: ["adults", "college", "gen-z"], themes: ["deep", "drama"] },
    { q: { en: "Hot take: Crocs are actually fine.", fr: "Avis impopulaire : les Crocs c'est ok." }, opts: { en: ["Agree", "Disagree"], fr: ["D'accord", "Pas d'accord"] }, audiences: ["gen-z", "teens"], themes: ["funny", "awkward"] },
    { q: { en: "Hot take: politeness is overrated.", fr: "Avis impopulaire : la politesse est surcotée." }, opts: { en: ["Agree", "Disagree"], fr: ["D'accord", "Pas d'accord"] }, audiences: ["adults", "gen-z"], themes: ["savage"] },
  ],
};

// --- ROUTE HELPERS --------------------------------------------------------

export function getAllRoutes(): Array<{ locale: ProgLocale; topic: Topic; modifier: string }> {
  const out: Array<{ locale: ProgLocale; topic: Topic; modifier: string }> = [];
  for (const locale of ["en", "fr"] as const) {
    for (const topic of TOPICS) {
      for (const aud of AUDIENCES) {
        for (const th of THEMES) {
          out.push({ locale, topic: topic.id, modifier: `for-${aud.id}-${th.id}` });
        }
      }
    }
  }
  return out;
}

export function parseModifier(modifier: string): { audience: AudienceId | null; theme: ThemeId | null } {
  const m = modifier.match(/^for-([a-z-]+?)-([a-z-]+)$/);
  if (!m) return { audience: null, theme: null };
  const audience = AUDIENCES.find((a) => a.id === m[1])?.id ?? null;
  const theme = THEMES.find((t) => t.id === m[2])?.id ?? null;
  return { audience, theme };
}

function relevanceScore(p: Prompt, audience: AudienceId | null, theme: ThemeId | null): number {
  let s = 0;
  if (audience && p.audiences.includes(audience)) s += 2;
  if (theme && p.themes.includes(theme)) s += 2;
  // small bonus if the prompt has any tags in common with neighbors so the
  // page is themed even when (audience,theme) intersection is small
  s += p.audiences.length * 0.1;
  return s;
}

export type ProgPage = {
  topic: Topic;
  topicLabel: string;
  audience: AudienceId | null;
  audienceLabel: string;
  theme: ThemeId | null;
  themeLabel: string;
  emoji: string;
  locale: ProgLocale;
  title: string;
  h1: string;
  description: string;
  intro: string;
  prompts: Array<{ q: string; options: string[] }>;
  faq: Array<{ q: string; a: string }>;
  modifier: string;
};

export function generatePage(
  locale: ProgLocale,
  topic: Topic,
  modifier: string,
): ProgPage | null {
  const topicDef = TOPICS.find((t) => t.id === topic);
  if (!topicDef) return null;
  const { audience, theme } = parseModifier(modifier);
  if (!audience || !theme) return null;
  const audDef = AUDIENCES.find((a) => a.id === audience)!;
  const thDef = THEMES.find((t) => t.id === theme)!;

  const pool = PROMPTS[topic];
  const scored = pool
    .map((p) => ({ p, s: relevanceScore(p, audience, theme) }))
    .sort((a, b) => b.s - a.s);
  // top 15 — fallback to topic pool if pool < 15
  const top = scored.slice(0, 15).map((x) => x.p);

  const prompts = top.map((p) => ({
    q: p.q[locale],
    options: p.opts[locale],
  }));

  const topicLabel = topicDef.label[locale];
  const audienceLabel = audDef.label[locale];
  const themeLabel = thDef.label[locale];

  const title =
    locale === "en"
      ? `${topicLabel} questions for ${audienceLabel} — ${themeLabel}`
      : `${topicLabel} pour ${audienceLabel} — questions ${themeLabel}`;

  const h1 =
    locale === "en"
      ? `${topicLabel} questions for ${audienceLabel}: ${themeLabel} edition`
      : `${topicLabel} pour ${audienceLabel} : version ${themeLabel}`;

  const description =
    locale === "en"
      ? `${prompts.length} ${themeLabel} ${topicLabel.toLowerCase()} questions for ${audienceLabel}. Tap to vote, share the link, see the vibe live on moomz.`
      : `${prompts.length} questions ${themeLabel} de ${topicLabel.toLowerCase()} pour ${audienceLabel}. Tape pour voter, partage le lien, vois la vibe en live.`;

  const intro =
    locale === "en"
      ? `Looking for ${themeLabel} ${topicLabel.toLowerCase()} questions for ${audienceLabel}? Here are ${prompts.length} ready-to-launch prompts. Pick one, hit "Launch this poll", share the moomz link, watch the votes roll in live.`
      : `Tu cherches des questions ${themeLabel} de ${topicLabel.toLowerCase()} pour ${audienceLabel} ? Voilà ${prompts.length} sondages prêts à lancer. Choisis-en un, clique "Lancer ce sondage", balance le lien moomz, regarde les votes tomber en live.`;

  const faq =
    locale === "en"
      ? [
          { q: `Are these ${topicLabel.toLowerCase()} prompts free?`, a: "Yes. Tap a prompt, share the moomz link, vote anonymously. No account needed." },
          { q: `Who are these prompts for?`, a: `These are picked specifically for ${audienceLabel}. The tone leans ${themeLabel}.` },
          { q: `Can I edit a prompt before sharing?`, a: "Yes — when you click 'Launch this poll', it pre-fills the moomz create form. Tweak before publishing." },
          { q: `What's the best one to start with?`, a: "Pick the one that makes you laugh first. Engagement follows the vibe." },
          { q: `Can I add my own options?`, a: "Yes. After launching the prompt, you can add or remove options up to 6 total." },
        ]
      : [
          { q: `C'est gratuit ?`, a: "Oui. Clique sur un prompt, partage le lien moomz, vote anonyme. Pas besoin de compte." },
          { q: `C'est pour qui ces questions ?`, a: `Sélectionnées pour ${audienceLabel}. Ton ${themeLabel}.` },
          { q: `Je peux modifier la question avant de partager ?`, a: "Oui — quand tu cliques 'Lancer', ça pré-remplit le form moomz. Modifie avant publication." },
          { q: `Par quoi je commence ?`, a: "Celui qui te fait rire en premier. L'engagement suit la vibe." },
          { q: `Je peux ajouter mes propres options ?`, a: "Oui. Après le lancement, tu peux ajouter ou retirer des options jusqu'à 6 max." },
        ];

  return {
    topic,
    topicLabel,
    audience,
    audienceLabel,
    theme,
    themeLabel,
    emoji: topicDef.emoji,
    locale,
    title,
    h1,
    description,
    intro,
    prompts,
    faq,
    modifier,
  };
}
