// Inline i18n strings for the /cosmos surface (NASA APOD).
// All 8 supported locales — kept here per task constraints (no lib/i18n changes).

export type ToolLocale = "fr" | "en" | "es" | "it" | "pt" | "de" | "ja" | "zh";

export type CosmosStrings = {
  hubTitle: string;
  hubIntro: string;
  pictureOfTheDay: string;
  explanation: string;
  details: string;
  date: string;
  copyright: string;
  source: string;
  archives: string;
  archivesIntro: string;
  previousDay: string;
  nextDay: string;
  englishOnlyNote: string;
  enBadge: string;
  pollCtaTitle: string;
  pollCtaBody: string;
  pollCtaButton: string;
  pollQuestion: string;
  pollOptions: string[]; // 4 options
  backToToday: string;
  backToHub: string;
  stubTitle: string;
  stubBody: string;
  apodFor: string; // "Astronomy Picture of the Day · {date}"
  videoNote: string;
  openOriginal: string;
};

const fr: CosmosStrings = {
  hubTitle: "🌌 Cosmos du jour",
  hubIntro: "L'image astronomique du jour de la NASA, mise à jour automatiquement. Plonge dans l'univers en 30 secondes.",
  pictureOfTheDay: "Image du jour",
  explanation: "Explication",
  details: "Détails",
  date: "Date",
  copyright: "Crédit",
  source: "Source : NASA APOD",
  archives: "Archives récentes",
  archivesIntro: "Les 14 derniers jours d'images astronomiques.",
  previousDay: "← Jour précédent",
  nextDay: "Jour suivant →",
  englishOnlyNote: "La NASA ne publie l'explication qu'en anglais — texte original ci-dessous.",
  enBadge: "🌐 EN",
  pollCtaTitle: "Tu kiffes l'espace ?",
  pollCtaBody: "Lance un mini-sondage cosmique en 10 secondes et partage-le.",
  pollCtaButton: "Créer mon sondage",
  pollQuestion: "Quelle galaxie te fait kiffer ?",
  pollOptions: ["Andromède", "Voie lactée", "M87", "Les autres"],
  backToToday: "Retour au cosmos du jour",
  backToHub: "← Tous les cosmos",
  stubTitle: "Image non disponible",
  stubBody: "L'image astronomique pour cette date n'est pas accessible. Essaye une autre date ou reviens plus tard.",
  apodFor: "Image astronomique · {date}",
  videoNote: "Cette publication est une vidéo NASA — clique pour la lire.",
  openOriginal: "Ouvrir l'original chez NASA",
};

const en: CosmosStrings = {
  hubTitle: "🌌 Cosmos of the day",
  hubIntro: "NASA's Astronomy Picture of the Day, refreshed automatically. Dive into the universe in 30 seconds.",
  pictureOfTheDay: "Picture of the day",
  explanation: "Explanation",
  details: "Details",
  date: "Date",
  copyright: "Credit",
  source: "Source: NASA APOD",
  archives: "Recent archive",
  archivesIntro: "The last 14 days of astronomy pictures.",
  previousDay: "← Previous day",
  nextDay: "Next day →",
  englishOnlyNote: "NASA only publishes the explanation in English — original text below.",
  enBadge: "🌐 EN",
  pollCtaTitle: "Love space?",
  pollCtaBody: "Spin up a cosmic mini-poll in 10 seconds and share it.",
  pollCtaButton: "Create my poll",
  pollQuestion: "Which galaxy hits hardest?",
  pollOptions: ["Andromeda", "Milky Way", "M87", "The others"],
  backToToday: "Back to today's picture",
  backToHub: "← All cosmos",
  stubTitle: "Picture unavailable",
  stubBody: "The astronomy picture for this date isn't accessible. Try another date or check back later.",
  apodFor: "Astronomy Picture of the Day · {date}",
  videoNote: "This entry is a NASA video — tap to play.",
  openOriginal: "Open original at NASA",
};

const es: CosmosStrings = {
  hubTitle: "🌌 Cosmos del día",
  hubIntro: "La imagen astronómica del día de la NASA, actualizada automáticamente. Sumérgete en el universo en 30 segundos.",
  pictureOfTheDay: "Imagen del día",
  explanation: "Explicación",
  details: "Detalles",
  date: "Fecha",
  copyright: "Crédito",
  source: "Fuente: NASA APOD",
  archives: "Archivo reciente",
  archivesIntro: "Las últimas 14 imágenes astronómicas.",
  previousDay: "← Día anterior",
  nextDay: "Día siguiente →",
  englishOnlyNote: "La NASA solo publica la explicación en inglés — texto original abajo.",
  enBadge: "🌐 EN",
  pollCtaTitle: "¿Te flipa el espacio?",
  pollCtaBody: "Lanza una mini-encuesta cósmica en 10 segundos y compártela.",
  pollCtaButton: "Crear mi encuesta",
  pollQuestion: "¿Qué galaxia te flipa más?",
  pollOptions: ["Andrómeda", "Vía Láctea", "M87", "Las otras"],
  backToToday: "Volver a la imagen de hoy",
  backToHub: "← Todos los cosmos",
  stubTitle: "Imagen no disponible",
  stubBody: "La imagen astronómica de esta fecha no está disponible. Prueba otra fecha o vuelve más tarde.",
  apodFor: "Imagen astronómica · {date}",
  videoNote: "Esta entrada es un vídeo de la NASA — toca para reproducir.",
  openOriginal: "Abrir el original en NASA",
};

const it: CosmosStrings = {
  hubTitle: "🌌 Cosmo del giorno",
  hubIntro: "L'immagine astronomica del giorno della NASA, aggiornata in automatico. Tuffati nell'universo in 30 secondi.",
  pictureOfTheDay: "Immagine del giorno",
  explanation: "Spiegazione",
  details: "Dettagli",
  date: "Data",
  copyright: "Credito",
  source: "Fonte: NASA APOD",
  archives: "Archivio recente",
  archivesIntro: "Le ultime 14 immagini astronomiche.",
  previousDay: "← Giorno precedente",
  nextDay: "Giorno successivo →",
  englishOnlyNote: "La NASA pubblica la spiegazione solo in inglese — testo originale qui sotto.",
  enBadge: "🌐 EN",
  pollCtaTitle: "Ami lo spazio?",
  pollCtaBody: "Lancia un mini-sondaggio cosmico in 10 secondi e condividilo.",
  pollCtaButton: "Crea il mio sondaggio",
  pollQuestion: "Quale galassia ti gasa di più?",
  pollOptions: ["Andromeda", "Via Lattea", "M87", "Le altre"],
  backToToday: "Torna all'immagine di oggi",
  backToHub: "← Tutti i cosmi",
  stubTitle: "Immagine non disponibile",
  stubBody: "L'immagine astronomica per questa data non è disponibile. Prova un'altra data o torna più tardi.",
  apodFor: "Immagine astronomica · {date}",
  videoNote: "Questo contenuto è un video NASA — tocca per riprodurlo.",
  openOriginal: "Apri l'originale su NASA",
};

const pt: CosmosStrings = {
  hubTitle: "🌌 Cosmos do dia",
  hubIntro: "A imagem astronômica do dia da NASA, atualizada automaticamente. Mergulhe no universo em 30 segundos.",
  pictureOfTheDay: "Imagem do dia",
  explanation: "Explicação",
  details: "Detalhes",
  date: "Data",
  copyright: "Crédito",
  source: "Fonte: NASA APOD",
  archives: "Arquivo recente",
  archivesIntro: "As últimas 14 imagens astronômicas.",
  previousDay: "← Dia anterior",
  nextDay: "Próximo dia →",
  englishOnlyNote: "A NASA só publica a explicação em inglês — texto original abaixo.",
  enBadge: "🌐 EN",
  pollCtaTitle: "Curte o espaço?",
  pollCtaBody: "Crie uma mini-enquete cósmica em 10 segundos e compartilhe.",
  pollCtaButton: "Criar minha enquete",
  pollQuestion: "Qual galáxia te impressiona mais?",
  pollOptions: ["Andrômeda", "Via Láctea", "M87", "As outras"],
  backToToday: "Voltar à imagem de hoje",
  backToHub: "← Todos os cosmos",
  stubTitle: "Imagem indisponível",
  stubBody: "A imagem astronômica para esta data não está disponível. Tente outra data ou volte mais tarde.",
  apodFor: "Imagem astronômica · {date}",
  videoNote: "Esta entrada é um vídeo da NASA — toque para reproduzir.",
  openOriginal: "Abrir original na NASA",
};

const de: CosmosStrings = {
  hubTitle: "🌌 Kosmos des Tages",
  hubIntro: "Das astronomische Bild des Tages der NASA, automatisch aktualisiert. Tauche in 30 Sekunden ins Universum ein.",
  pictureOfTheDay: "Bild des Tages",
  explanation: "Erklärung",
  details: "Details",
  date: "Datum",
  copyright: "Quelle",
  source: "Quelle: NASA APOD",
  archives: "Aktuelles Archiv",
  archivesIntro: "Die letzten 14 astronomischen Bilder.",
  previousDay: "← Vorheriger Tag",
  nextDay: "Nächster Tag →",
  englishOnlyNote: "Die NASA veröffentlicht die Erklärung nur auf Englisch — Originaltext unten.",
  enBadge: "🌐 EN",
  pollCtaTitle: "Liebst du den Weltraum?",
  pollCtaBody: "Erstelle in 10 Sekunden eine kosmische Mini-Umfrage und teile sie.",
  pollCtaButton: "Meine Umfrage erstellen",
  pollQuestion: "Welche Galaxie haut am meisten rein?",
  pollOptions: ["Andromeda", "Milchstraße", "M87", "Die anderen"],
  backToToday: "Zurück zum heutigen Bild",
  backToHub: "← Alle Kosmen",
  stubTitle: "Bild nicht verfügbar",
  stubBody: "Das astronomische Bild für dieses Datum ist nicht verfügbar. Versuche ein anderes Datum oder schau später vorbei.",
  apodFor: "Astronomisches Bild · {date}",
  videoNote: "Dieser Eintrag ist ein NASA-Video — tippen zum Abspielen.",
  openOriginal: "Original bei NASA öffnen",
};

const ja: CosmosStrings = {
  hubTitle: "🌌 今日のコスモス",
  hubIntro: "NASAが毎日選ぶ天体写真を自動で更新。30秒で宇宙にダイブ。",
  pictureOfTheDay: "今日の天体写真",
  explanation: "解説",
  details: "詳細",
  date: "日付",
  copyright: "クレジット",
  source: "出典: NASA APOD",
  archives: "最近のアーカイブ",
  archivesIntro: "直近14日間の天体写真。",
  previousDay: "← 前の日",
  nextDay: "次の日 →",
  englishOnlyNote: "NASAは解説を英語のみで公開しています — 原文は以下。",
  enBadge: "🌐 EN",
  pollCtaTitle: "宇宙が好き？",
  pollCtaBody: "10秒で宇宙ミニ投票を作ってシェア。",
  pollCtaButton: "投票を作る",
  pollQuestion: "どの銀河が一番アツい？",
  pollOptions: ["アンドロメダ", "天の川", "M87", "その他"],
  backToToday: "今日の写真へ戻る",
  backToHub: "← すべてのコスモス",
  stubTitle: "画像は利用できません",
  stubBody: "この日付の天体写真は取得できません。別の日付を試すか、後でもう一度来てください。",
  apodFor: "天体写真 · {date}",
  videoNote: "このエントリはNASAの動画です — タップして再生。",
  openOriginal: "NASAでオリジナルを開く",
};

const zh: CosmosStrings = {
  hubTitle: "🌌 今日宇宙",
  hubIntro: "NASA 每日精选天文图像，自动更新。30秒看见宇宙。",
  pictureOfTheDay: "今日图像",
  explanation: "图像说明",
  details: "详情",
  date: "日期",
  copyright: "版权",
  source: "来源：NASA APOD",
  archives: "近期归档",
  archivesIntro: "最近14天的天文图像。",
  previousDay: "← 上一天",
  nextDay: "下一天 →",
  englishOnlyNote: "NASA 仅以英文发布说明 — 原文见下方。",
  enBadge: "🌐 EN",
  pollCtaTitle: "热爱宇宙？",
  pollCtaBody: "10秒创建一个宇宙小投票，分享给朋友。",
  pollCtaButton: "创建我的投票",
  pollQuestion: "哪个星系最让你心动？",
  pollOptions: ["仙女星系", "银河系", "M87", "其他"],
  backToToday: "返回今日图像",
  backToHub: "← 所有宇宙",
  stubTitle: "图像不可用",
  stubBody: "此日期的天文图像不可访问。请尝试其他日期或稍后再来。",
  apodFor: "天文图像 · {date}",
  videoNote: "此条目是 NASA 视频 — 点击播放。",
  openOriginal: "在 NASA 打开原始页面",
};

const ALL: Record<ToolLocale, CosmosStrings> = {
  fr, en, es, it, pt, de, ja, zh,
};

export function pickString(locale: string): CosmosStrings {
  if (locale in ALL) return ALL[locale as ToolLocale];
  return en;
}

export function bcp47(locale: string): string {
  switch (locale) {
    case "fr": return "fr-FR";
    case "en": return "en-US";
    case "es": return "es-ES";
    case "it": return "it-IT";
    case "pt": return "pt-PT";
    case "de": return "de-DE";
    case "ja": return "ja-JP";
    case "zh": return "zh-CN";
    default: return "en-US";
  }
}
