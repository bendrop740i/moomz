// Inline i18n strings for the /astro surface. Self-contained per task constraints.

export type AstroLocale = "fr" | "en" | "es" | "it" | "pt" | "de" | "ja" | "zh";

export type AstroStrings = {
  hubTitle: string;
  hubIntro: string;
  hubSubline: string; // "{n} signs ..."
  findYourSign: string;
  birthday: string;
  birthdayHint: string;
  findButton: string;
  yourSignIs: string;
  seeSign: string;

  allSigns: string;
  byElement: string;

  // Detail page labels
  profile: string;
  element: string;
  modality: string;
  planet: string;
  luckyColor: string;
  traits: string;
  compatible: string;
  challenging: string;
  thisWeek: string;
  personality: string;
  pollHeadline: string;
  pollBody: string;
  pollButton: string;
  otherSigns: string;
  oppositeSign: string;
  backToHub: string;

  // Element / modality labels
  elements: Record<"Feu" | "Terre" | "Air" | "Eau", string>;
  modalities: Record<"Cardinal" | "Fixe" | "Mutable", string>;

  // Weekly vibe blurbs per element (~50 words each, generic + archetype-aligned)
  weeklyVibe: Record<"Feu" | "Terre" | "Air" | "Eau", string>;
};

const fr: AstroStrings = {
  hubTitle: "Astrologie & signes du zodiaque",
  hubIntro: "Découvre ton signe, ton élément, tes affinités et la vibe de ta semaine. Gratuit, sans inscription.",
  hubSubline: "12 signes · 4 éléments · compatibilités cartographiées",
  findYourSign: "Trouve ton signe",
  birthday: "Ta date de naissance",
  birthdayHint: "On utilise juste le jour et le mois.",
  findButton: "Découvrir mon signe",
  yourSignIs: "Ton signe est",
  seeSign: "Voir la fiche",
  allSigns: "Tous les signes",
  byElement: "Par élément",
  profile: "Profil",
  element: "Élément",
  modality: "Modalité",
  planet: "Planète",
  luckyColor: "Couleur fétiche",
  traits: "Traits dominants",
  compatible: "Compatibilités",
  challenging: "Défis relationnels",
  thisWeek: "Cette semaine",
  personality: "Personnalité",
  pollHeadline: "Tu te reconnais ?",
  pollBody: "Lance un sondage et vois ce que la commu pense de ton signe.",
  pollButton: "Créer le sondage",
  otherSigns: "Signes du même élément",
  oppositeSign: "Signe opposé",
  backToHub: "← Tous les signes",
  elements: { Feu: "Feu", Terre: "Terre", Air: "Air", Eau: "Eau" },
  modalities: { Cardinal: "Cardinal", Fixe: "Fixe", Mutable: "Mutable" },
  weeklyVibe: {
    Feu: "Énergie haute, envie de bouger. Canalise cette flamme dans un projet qui te tient à cœur plutôt que dans une dispute. Ose dire oui à une opportunité qui pousse à la porte. Repos non négociable en fin de semaine pour éviter le burn-out.",
    Terre: "Semaine pour poser des fondations. Les petites routines paient gros — finances, corps, maison. Ton meilleur move : terminer un truc en suspens plutôt que d'en lancer un nouveau. Une rencontre te rappelle pourquoi la patience est ton super-pouvoir.",
    Air: "Beaucoup d'idées, beaucoup de bavardage. Trie ce qui mérite vraiment ton attention. Une conversation déclenche un déclic créatif — note-la. Attention à ne pas survoler les émotions des autres ; ralentis si quelqu'un essaie de te dire quelque chose en vrai.",
    Eau: "Sensibilité à fleur de peau, intuition aiguisée. C'est le moment de poser une limite ou de réparer un lien. L'art, la musique, l'eau littérale (douche, mer, lac) sont tes alliés. Ne confonds pas l'émotion du moment avec la vérité du long terme.",
  },
};

const en: AstroStrings = {
  hubTitle: "Astrology & zodiac signs",
  hubIntro: "Find your sign, your element, your matches and your weekly vibe. Free, no signup.",
  hubSubline: "12 signs · 4 elements · full compatibility map",
  findYourSign: "Find your sign",
  birthday: "Your birthday",
  birthdayHint: "We only use the day and month.",
  findButton: "Find my sign",
  yourSignIs: "Your sign is",
  seeSign: "See profile",
  allSigns: "All signs",
  byElement: "By element",
  profile: "Profile",
  element: "Element",
  modality: "Modality",
  planet: "Planet",
  luckyColor: "Lucky color",
  traits: "Key traits",
  compatible: "Best matches",
  challenging: "Challenging matches",
  thisWeek: "This week",
  personality: "Personality",
  pollHeadline: "Does this sound like you?",
  pollBody: "Run a poll and see what the community thinks of your sign.",
  pollButton: "Create the poll",
  otherSigns: "Same element",
  oppositeSign: "Opposite sign",
  backToHub: "← All signs",
  elements: { Feu: "Fire", Terre: "Earth", Air: "Air", Eau: "Water" },
  modalities: { Cardinal: "Cardinal", Fixe: "Fixed", Mutable: "Mutable" },
  weeklyVibe: {
    Feu: "High-voltage week. Channel the spark into something you actually care about, not a pointless argument. Say yes to the opportunity knocking. Build in real rest before the weekend — your engine runs hot but it still needs cooling.",
    Terre: "A week for laying foundations. Small routines pay big dividends — money, body, home. Best move: finish something dangling instead of starting something new. A meeting reminds you why patience is your superpower.",
    Air: "Ideas everywhere, chatter even more. Filter what truly deserves your attention. A conversation triggers a creative spark — write it down. Watch out for skimming over someone else's feelings; slow down if they're trying to tell you something real.",
    Eau: "Sensitivity dialed up, intuition sharper than usual. Time to set a boundary or repair a bond. Art, music and literal water (shower, sea, lake) are your allies. Don't mistake the feeling of the moment for the truth of the long run.",
  },
};

const es: AstroStrings = {
  hubTitle: "Astrología y signos del zodíaco",
  hubIntro: "Descubre tu signo, tu elemento, tus afinidades y tu vibe semanal. Gratis, sin registro.",
  hubSubline: "12 signos · 4 elementos · compatibilidades mapeadas",
  findYourSign: "Descubre tu signo",
  birthday: "Tu fecha de nacimiento",
  birthdayHint: "Solo usamos el día y el mes.",
  findButton: "Descubrir mi signo",
  yourSignIs: "Tu signo es",
  seeSign: "Ver ficha",
  allSigns: "Todos los signos",
  byElement: "Por elemento",
  profile: "Perfil",
  element: "Elemento",
  modality: "Modalidad",
  planet: "Planeta",
  luckyColor: "Color de la suerte",
  traits: "Rasgos dominantes",
  compatible: "Mejores compatibilidades",
  challenging: "Compatibilidades difíciles",
  thisWeek: "Esta semana",
  personality: "Personalidad",
  pollHeadline: "¿Te identificas?",
  pollBody: "Lanza una encuesta y mira qué piensa la comunidad de tu signo.",
  pollButton: "Crear la encuesta",
  otherSigns: "Mismo elemento",
  oppositeSign: "Signo opuesto",
  backToHub: "← Todos los signos",
  elements: { Feu: "Fuego", Terre: "Tierra", Air: "Aire", Eau: "Agua" },
  modalities: { Cardinal: "Cardinal", Fixe: "Fijo", Mutable: "Mutable" },
  weeklyVibe: {
    Feu: "Semana de alto voltaje. Canaliza esa chispa en algo que te importe de verdad, no en una discusión inútil. Di sí a la oportunidad que llama. Reserva descanso real antes del fin de semana — tu motor funciona caliente pero necesita enfriarse.",
    Terre: "Semana para poner bases. Las pequeñas rutinas rinden mucho — dinero, cuerpo, casa. Mejor jugada: terminar algo pendiente en vez de empezar algo nuevo. Un encuentro te recuerda por qué la paciencia es tu superpoder.",
    Air: "Ideas por todas partes, conversaciones aún más. Filtra lo que realmente merece tu atención. Una charla detona una chispa creativa — anótala. Cuidado con sobrevolar los sentimientos de los demás; baja el ritmo si intentan decirte algo real.",
    Eau: "Sensibilidad a flor de piel, intuición afilada. Momento de poner un límite o reparar un vínculo. El arte, la música y el agua literal (ducha, mar, lago) son tus aliados. No confundas la emoción del momento con la verdad a largo plazo.",
  },
};

const it: AstroStrings = {
  hubTitle: "Astrologia e segni zodiacali",
  hubIntro: "Scopri il tuo segno, il tuo elemento, le tue affinità e la vibe della settimana. Gratis, senza registrazione.",
  hubSubline: "12 segni · 4 elementi · compatibilità mappate",
  findYourSign: "Scopri il tuo segno",
  birthday: "La tua data di nascita",
  birthdayHint: "Usiamo solo giorno e mese.",
  findButton: "Scopri il mio segno",
  yourSignIs: "Il tuo segno è",
  seeSign: "Vedi scheda",
  allSigns: "Tutti i segni",
  byElement: "Per elemento",
  profile: "Profilo",
  element: "Elemento",
  modality: "Modalità",
  planet: "Pianeta",
  luckyColor: "Colore fortunato",
  traits: "Tratti dominanti",
  compatible: "Migliori affinità",
  challenging: "Affinità difficili",
  thisWeek: "Questa settimana",
  personality: "Personalità",
  pollHeadline: "Ti ci ritrovi?",
  pollBody: "Lancia un sondaggio e guarda cosa pensa la community del tuo segno.",
  pollButton: "Crea il sondaggio",
  otherSigns: "Stesso elemento",
  oppositeSign: "Segno opposto",
  backToHub: "← Tutti i segni",
  elements: { Feu: "Fuoco", Terre: "Terra", Air: "Aria", Eau: "Acqua" },
  modalities: { Cardinal: "Cardinale", Fixe: "Fisso", Mutable: "Mobile" },
  weeklyVibe: {
    Feu: "Settimana ad alto voltaggio. Canalizza la scintilla in un progetto che ami davvero, non in un litigio inutile. Dì sì all'opportunità che bussa. Riposo reale prima del weekend — il tuo motore va caldo ma serve raffreddarlo.",
    Terre: "Settimana per gettare basi. Le piccole routine rendono molto — soldi, corpo, casa. Mossa migliore: finire qualcosa di sospeso invece di iniziarne uno nuovo. Un incontro ti ricorda perché la pazienza è il tuo superpotere.",
    Air: "Idee ovunque, chiacchiere ancora di più. Filtra ciò che davvero merita attenzione. Una conversazione accende una scintilla creativa — annotala. Attento a non sorvolare sui sentimenti degli altri; rallenta se ti vogliono dire qualcosa di vero.",
    Eau: "Sensibilità a fior di pelle, intuito affilato. Momento per porre un limite o riparare un legame. Arte, musica e l'acqua vera (doccia, mare, lago) sono i tuoi alleati. Non confondere l'emozione del momento con la verità nel lungo periodo.",
  },
};

const pt: AstroStrings = {
  hubTitle: "Astrologia e signos do zodíaco",
  hubIntro: "Descubra seu signo, seu elemento, suas afinidades e a vibe da semana. Grátis, sem cadastro.",
  hubSubline: "12 signos · 4 elementos · compatibilidades mapeadas",
  findYourSign: "Descubra seu signo",
  birthday: "Sua data de nascimento",
  birthdayHint: "Usamos só o dia e o mês.",
  findButton: "Descobrir meu signo",
  yourSignIs: "Seu signo é",
  seeSign: "Ver perfil",
  allSigns: "Todos os signos",
  byElement: "Por elemento",
  profile: "Perfil",
  element: "Elemento",
  modality: "Modalidade",
  planet: "Planeta",
  luckyColor: "Cor da sorte",
  traits: "Traços dominantes",
  compatible: "Melhores combinações",
  challenging: "Combinações difíceis",
  thisWeek: "Esta semana",
  personality: "Personalidade",
  pollHeadline: "Você se identifica?",
  pollBody: "Lance uma enquete e veja o que a comunidade acha do seu signo.",
  pollButton: "Criar a enquete",
  otherSigns: "Mesmo elemento",
  oppositeSign: "Signo oposto",
  backToHub: "← Todos os signos",
  elements: { Feu: "Fogo", Terre: "Terra", Air: "Ar", Eau: "Água" },
  modalities: { Cardinal: "Cardinal", Fixe: "Fixo", Mutable: "Mutável" },
  weeklyVibe: {
    Feu: "Semana de alta voltagem. Canalize a faísca em algo que te importa de verdade, não em uma discussão inútil. Diga sim à oportunidade que bate. Garanta descanso real antes do fim de semana — seu motor anda quente mas precisa esfriar.",
    Terre: "Semana de assentar bases. Pequenas rotinas rendem muito — dinheiro, corpo, casa. Melhor jogada: terminar algo pendente em vez de começar algo novo. Um encontro te lembra por que a paciência é seu superpoder.",
    Air: "Ideias por todo lado, conversas ainda mais. Filtre o que realmente merece sua atenção. Uma conversa acende uma centelha criativa — anote. Cuidado para não sobrevoar os sentimentos dos outros; desacelere se quiserem te dizer algo de verdade.",
    Eau: "Sensibilidade à flor da pele, intuição afiada. Momento de impor um limite ou consertar um vínculo. Arte, música e água literal (banho, mar, lago) são seus aliados. Não confunda a emoção do momento com a verdade do longo prazo.",
  },
};

const de: AstroStrings = {
  hubTitle: "Astrologie & Sternzeichen",
  hubIntro: "Finde dein Zeichen, dein Element, deine Matches und die Vibe der Woche. Kostenlos, ohne Anmeldung.",
  hubSubline: "12 Zeichen · 4 Elemente · vollständige Kompatibilitätskarte",
  findYourSign: "Finde dein Sternzeichen",
  birthday: "Dein Geburtstag",
  birthdayHint: "Wir verwenden nur Tag und Monat.",
  findButton: "Mein Zeichen finden",
  yourSignIs: "Dein Zeichen ist",
  seeSign: "Profil ansehen",
  allSigns: "Alle Zeichen",
  byElement: "Nach Element",
  profile: "Profil",
  element: "Element",
  modality: "Modalität",
  planet: "Planet",
  luckyColor: "Glücksfarbe",
  traits: "Hauptmerkmale",
  compatible: "Beste Matches",
  challenging: "Schwierige Matches",
  thisWeek: "Diese Woche",
  personality: "Persönlichkeit",
  pollHeadline: "Erkennst du dich wieder?",
  pollBody: "Starte eine Umfrage und sieh, was die Community über dein Zeichen denkt.",
  pollButton: "Umfrage erstellen",
  otherSigns: "Gleiches Element",
  oppositeSign: "Gegenüberliegendes Zeichen",
  backToHub: "← Alle Zeichen",
  elements: { Feu: "Feuer", Terre: "Erde", Air: "Luft", Eau: "Wasser" },
  modalities: { Cardinal: "Kardinal", Fixe: "Fix", Mutable: "Veränderlich" },
  weeklyVibe: {
    Feu: "Hochspannungswoche. Lenke den Funken in etwas, das dir wirklich wichtig ist, nicht in einen sinnlosen Streit. Sag Ja zur Chance, die klopft. Plane echte Erholung vor dem Wochenende ein — dein Motor läuft heiß, braucht aber Abkühlung.",
    Terre: "Eine Woche zum Fundamente legen. Kleine Routinen zahlen sich groß aus — Geld, Körper, Zuhause. Beste Bewegung: etwas Liegengebliebenes abschließen statt etwas Neues anfangen. Eine Begegnung erinnert dich, warum Geduld deine Superkraft ist.",
    Air: "Ideen überall, Gespräche noch mehr. Filtere, was wirklich Aufmerksamkeit verdient. Ein Gespräch zündet einen kreativen Funken — schreib es auf. Achte darauf, nicht über die Gefühle anderer hinwegzufliegen; werde langsamer, wenn jemand dir etwas Echtes sagen will.",
    Eau: "Sensibilität hochgedreht, Intuition schärfer als üblich. Zeit, eine Grenze zu setzen oder eine Bindung zu reparieren. Kunst, Musik und buchstäblich Wasser (Dusche, Meer, See) sind deine Verbündeten. Verwechsle das Gefühl des Moments nicht mit der Wahrheit der langen Sicht.",
  },
};

const ja: AstroStrings = {
  hubTitle: "占星術と星座",
  hubIntro: "あなたの星座、エレメント、相性、今週のvibeを見つけよう。無料・登録不要。",
  hubSubline: "12星座 · 4エレメント · 相性マップ",
  findYourSign: "あなたの星座を探す",
  birthday: "誕生日",
  birthdayHint: "日と月だけ使います。",
  findButton: "星座を見つける",
  yourSignIs: "あなたの星座は",
  seeSign: "プロフィールを見る",
  allSigns: "すべての星座",
  byElement: "エレメント別",
  profile: "プロフィール",
  element: "エレメント",
  modality: "モダリティ",
  planet: "支配星",
  luckyColor: "ラッキーカラー",
  traits: "主な特徴",
  compatible: "相性の良い星座",
  challenging: "相性の難しい星座",
  thisWeek: "今週",
  personality: "性格",
  pollHeadline: "当たってる？",
  pollBody: "アンケートを作って、コミュニティがあなたの星座をどう思うか見てみよう。",
  pollButton: "アンケートを作成",
  otherSigns: "同じエレメント",
  oppositeSign: "対の星座",
  backToHub: "← すべての星座",
  elements: { Feu: "火", Terre: "土", Air: "風", Eau: "水" },
  modalities: { Cardinal: "活動", Fixe: "不動", Mutable: "柔軟" },
  weeklyVibe: {
    Feu: "高電圧の一週間。火花を本当に大切なものに注ぎ、無意味な口論には使わないで。ノックしているチャンスにイエスと言おう。週末前にしっかり休息を — エンジンは熱いままだけど、冷却も必要。",
    Terre: "基盤を築く週。小さなルーティンが大きく実る — お金、体、家。最良の一手：新しいことを始めるより、保留中のことを終わらせること。ある出会いが、忍耐があなたの超能力である理由を思い出させる。",
    Air: "アイデアが溢れ、おしゃべりはさらに多い。本当に注目に値するものを選別して。会話が創造の火花を点ける — メモを取って。他人の感情を素通りしないように；誰かが本気で何かを伝えようとしているなら、ペースを落として。",
    Eau: "感受性が高まり、直感はいつもより鋭い。境界線を引くか、絆を修復する時。アート、音楽、文字通りの水（シャワー、海、湖）が味方。瞬間の感情を長期的な真実と取り違えないで。",
  },
};

const zh: AstroStrings = {
  hubTitle: "占星术与十二星座",
  hubIntro: "发现你的星座、元素、配对和本周vibe。免费，无需注册。",
  hubSubline: "12星座 · 4元素 · 完整配对地图",
  findYourSign: "查找你的星座",
  birthday: "你的生日",
  birthdayHint: "我们只使用日和月。",
  findButton: "找到我的星座",
  yourSignIs: "你的星座是",
  seeSign: "查看资料",
  allSigns: "所有星座",
  byElement: "按元素",
  profile: "资料",
  element: "元素",
  modality: "属性",
  planet: "守护星",
  luckyColor: "幸运色",
  traits: "主要特征",
  compatible: "最佳配对",
  challenging: "挑战性配对",
  thisWeek: "本周",
  personality: "性格",
  pollHeadline: "符合你吗？",
  pollBody: "发起投票，看看社区怎么看你的星座。",
  pollButton: "创建投票",
  otherSigns: "同元素",
  oppositeSign: "对立星座",
  backToHub: "← 所有星座",
  elements: { Feu: "火", Terre: "土", Air: "风", Eau: "水" },
  modalities: { Cardinal: "基本", Fixe: "固定", Mutable: "变动" },
  weeklyVibe: {
    Feu: "高电压的一周。把火花引向你真正在乎的事情，而不是无谓的争吵。对敲门的机会说是。周末前安排真正的休息 — 你的引擎在高温运转，但仍需冷却。",
    Terre: "打基础的一周。小日常带来大回报 — 金钱、身体、家。最佳行动：完成一件搁置的事，而不是开启一件新事。一次会面提醒你，耐心为何是你的超能力。",
    Air: "想法到处都是，闲谈更多。过滤真正值得你关注的东西。一次对话点燃创意火花 — 记下来。小心别忽略别人的感受；如果有人想告诉你真心话，请放慢节奏。",
    Eau: "敏感度调高，直觉比平时更敏锐。是设立界限或修复关系的时候。艺术、音乐和真实的水（淋浴、海、湖）是你的盟友。别把当下的情绪误认为长期的真相。",
  },
};

export const ASTRO_STRINGS: Record<AstroLocale, AstroStrings> = {
  fr, en, es, it, pt, de, ja, zh,
};

export function pickAstroStrings(locale: string | undefined): AstroStrings {
  const l = (locale ?? "fr") as AstroLocale;
  return ASTRO_STRINGS[l] ?? ASTRO_STRINGS.fr;
}
