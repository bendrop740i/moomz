import type { Metadata } from "next";
import Link from "next/link";
import HubNav, { type HubLocale } from "@/app/_seo/hub-nav";
import { getAllTemplates } from "@/lib/seo/templates/loader";
import { getLocale } from "@/lib/i18n-server";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Poll templates: 100+ ready-to-launch polls · moomz",
  description:
    "Browse ready-made poll templates for wedding, classroom, couple, party, work, food, travel. One click to launch — your question and options pre-filled on moomz.",
  alternates: { canonical: "https://moomz.com/template" },
  openGraph: {
    title: "Poll templates · moomz",
    description:
      "100+ ready-to-launch poll templates. Wedding, classroom, party, couple, work. One click to launch on moomz.",
    url: "https://moomz.com/template",
    type: "website",
    siteName: "moomz",
  },
  twitter: {
    card: "summary_large_image",
    title: "Poll templates · moomz",
    description: "100+ ready-to-launch poll templates.",
  },
};

const HUB_LOCALES: HubLocale[] = [
  "fr",
  "en",
  "es",
  "it",
  "pt",
  "de",
  "ja",
  "zh",
];

function toHubLocale(loc: string): HubLocale {
  return (HUB_LOCALES as string[]).includes(loc)
    ? (loc as HubLocale)
    : "en";
}

// UI chrome localized for all 8 visitor locales. Template data (question /
// options / etc.) stays in its authored language by design.
const T: Record<HubLocale, {
  eyebrow: string;
  h1Suffix: string;
  blurb: string;
  blankTitle: string;
  blankSub: string;
  options: string;
  cta: string;
}> = {
  fr: {
    eyebrow: "modèles · moomz",
    h1Suffix: " modèles de sondage",
    blurb:
      "Des sondages prêts à lancer pour toutes les occasions — mariage, classe, soirée, couple, travail, food, voyage, drama. Choisis un modèle, ta question et tes options arrivent pré-remplies sur moomz. Partage le lien. C'est fait.",
    blankTitle: "moomz.com",
    blankSub: "Pars aussi d'une page blanche — 10 secondes, anonyme, gratuit",
    options: "options",
    cta: "Crée ton sondage moomz gratuit →",
  },
  en: {
    eyebrow: "template · moomz",
    h1Suffix: " poll templates",
    blurb:
      "Ready-to-launch polls for every occasion — wedding, classroom, party, couple, work, food, travel, drama. Tap a template, your question and options land pre-filled on moomz. Share the link. Done.",
    blankTitle: "moomz.com",
    blankSub: "Start from blank too — 10 seconds, anonymous, free",
    options: "options",
    cta: "Create your free moomz poll →",
  },
  es: {
    eyebrow: "plantillas · moomz",
    h1Suffix: " plantillas de encuesta",
    blurb:
      "Encuestas listas para lanzar para cada ocasión — boda, clase, fiesta, pareja, trabajo, comida, viajes, drama. Toca una plantilla y tu pregunta y opciones llegan precargadas a moomz. Comparte el enlace. Listo.",
    blankTitle: "moomz.com",
    blankSub: "Empieza también desde cero — 10 segundos, anónimo, gratis",
    options: "opciones",
    cta: "Crea tu encuesta moomz gratis →",
  },
  it: {
    eyebrow: "modelli · moomz",
    h1Suffix: " modelli di sondaggio",
    blurb:
      "Sondaggi pronti da lanciare per ogni occasione — matrimonio, classe, festa, coppia, lavoro, cibo, viaggi, drama. Tocca un modello, la tua domanda e le opzioni arrivano già pronte su moomz. Condividi il link. Fatto.",
    blankTitle: "moomz.com",
    blankSub: "Parti anche da zero — 10 secondi, anonimo, gratis",
    options: "opzioni",
    cta: "Crea il tuo sondaggio moomz gratis →",
  },
  pt: {
    eyebrow: "modelos · moomz",
    h1Suffix: " modelos de sondagem",
    blurb:
      "Sondagens prontas a lançar para todas as ocasiões — casamento, aula, festa, casal, trabalho, comida, viagens, drama. Toca num modelo, a tua pergunta e opções chegam preenchidas ao moomz. Partilha o link. Pronto.",
    blankTitle: "moomz.com",
    blankSub: "Começa também do zero — 10 segundos, anónimo, grátis",
    options: "opções",
    cta: "Cria a tua sondagem moomz grátis →",
  },
  de: {
    eyebrow: "vorlagen · moomz",
    h1Suffix: " Umfrage-Vorlagen",
    blurb:
      "Startklare Umfragen für jeden Anlass — Hochzeit, Klasse, Party, Paar, Arbeit, Essen, Reisen, Drama. Tippe auf eine Vorlage, deine Frage und Optionen landen vorausgefüllt auf moomz. Link teilen. Fertig.",
    blankTitle: "moomz.com",
    blankSub: "Starte auch von null — 10 Sekunden, anonym, kostenlos",
    options: "Optionen",
    cta: "Erstelle deine kostenlose moomz-Umfrage →",
  },
  ja: {
    eyebrow: "テンプレート · moomz",
    h1Suffix: "個の投票テンプレート",
    blurb:
      "あらゆる場面で使える、すぐに公開できる投票 — 結婚式、教室、パーティー、カップル、仕事、グルメ、旅行、ドラマ。テンプレートをタップすれば、質問と選択肢が moomz に自動入力されます。リンクを共有して完了。",
    blankTitle: "moomz.com",
    blankSub: "白紙から始めることも — 10秒、匿名、無料",
    options: "個の選択肢",
    cta: "無料でmoomz投票を作成 →",
  },
  zh: {
    eyebrow: "模板 · moomz",
    h1Suffix: "个投票模板",
    blurb:
      "适合各种场合、即开即用的投票 — 婚礼、课堂、派对、情侣、职场、美食、旅行、八卦。点一个模板，你的问题和选项就会预填进 moomz。分享链接，搞定。",
    blankTitle: "moomz.com",
    blankSub: "也可以从空白开始 — 10 秒、匿名、免费",
    options: "个选项",
    cta: "免费创建你的 moomz 投票 →",
  },
};

// Category labels per visitor locale (UI chrome — not template data).
const CATEGORY_LABEL: Record<string, Record<HubLocale, string>> = {
  wedding: { fr: "💍 Mariage", en: "💍 Wedding", es: "💍 Boda", it: "💍 Matrimonio", pt: "💍 Casamento", de: "💍 Hochzeit", ja: "💍 結婚式", zh: "💍 婚礼" },
  bachelorette: { fr: "👯 EVJF", en: "👯 Bachelorette", es: "👯 Despedida de soltera", it: "👯 Addio al nubilato", pt: "👯 Despedida de solteira", de: "👯 Junggesellinnenabschied", ja: "👯 バチェロレッテ", zh: "👯 单身派对（女）" },
  bachelor: { fr: "🥃 EVG", en: "🥃 Bachelor", es: "🥃 Despedida de soltero", it: "🥃 Addio al celibato", pt: "🥃 Despedida de solteiro", de: "🥃 Junggesellenabschied", ja: "🥃 バチェラー", zh: "🥃 单身派对（男）" },
  couple: { fr: "💖 Couple", en: "💖 Couple", es: "💖 Pareja", it: "💖 Coppia", pt: "💖 Casal", de: "💖 Paar", ja: "💖 カップル", zh: "💖 情侣" },
  party: { fr: "🎉 Soirée", en: "🎉 Party", es: "🎉 Fiesta", it: "🎉 Festa", pt: "🎉 Festa", de: "🎉 Party", ja: "🎉 パーティー", zh: "🎉 派对" },
  classroom: { fr: "📚 Classe", en: "📚 Classroom", es: "📚 Clase", it: "📚 Classe", pt: "📚 Sala de aula", de: "📚 Klassenzimmer", ja: "📚 教室", zh: "📚 课堂" },
  icebreaker: { fr: "❄️ Brise-glace", en: "❄️ Icebreaker", es: "❄️ Rompehielos", it: "❄️ Rompighiaccio", pt: "❄️ Quebra-gelo", de: "❄️ Eisbrecher", ja: "❄️ アイスブレイク", zh: "❄️ 破冰" },
  work: { fr: "💼 Travail", en: "💼 Work", es: "💼 Trabajo", it: "💼 Lavoro", pt: "💼 Trabalho", de: "💼 Arbeit", ja: "💼 仕事", zh: "💼 职场" },
  food: { fr: "🍕 Food", en: "🍕 Food", es: "🍕 Comida", it: "🍕 Cibo", pt: "🍕 Comida", de: "🍕 Essen", ja: "🍕 グルメ", zh: "🍕 美食" },
  travel: { fr: "✈️ Voyage", en: "✈️ Travel", es: "✈️ Viajes", it: "✈️ Viaggi", pt: "✈️ Viagens", de: "✈️ Reisen", ja: "✈️ 旅行", zh: "✈️ 旅行" },
  teen: { fr: "🤳 Ado", en: "🤳 Teen", es: "🤳 Adolescentes", it: "🤳 Teen", pt: "🤳 Adolescentes", de: "🤳 Teenager", ja: "🤳 ティーン", zh: "🤳 青少年" },
  valentine: { fr: "💘 St-Valentin", en: "💘 Valentine", es: "💘 San Valentín", it: "💘 San Valentino", pt: "💘 Dia dos Namorados", de: "💘 Valentinstag", ja: "💘 バレンタイン", zh: "💘 情人节" },
  halloween: { fr: "🎃 Halloween", en: "🎃 Halloween", es: "🎃 Halloween", it: "🎃 Halloween", pt: "🎃 Halloween", de: "🎃 Halloween", ja: "🎃 ハロウィン", zh: "🎃 万圣节" },
  christmas: { fr: "🎄 Noël", en: "🎄 Christmas", es: "🎄 Navidad", it: "🎄 Natale", pt: "🎄 Natal", de: "🎄 Weihnachten", ja: "🎄 クリスマス", zh: "🎄 圣诞节" },
  newyear: { fr: "🎊 Nouvel An", en: "🎊 New Year", es: "🎊 Año Nuevo", it: "🎊 Capodanno", pt: "🎊 Ano Novo", de: "🎊 Neujahr", ja: "🎊 新年", zh: "🎊 新年" },
  birthday: { fr: "🎂 Anniversaire", en: "🎂 Birthday", es: "🎂 Cumpleaños", it: "🎂 Compleanno", pt: "🎂 Aniversário", de: "🎂 Geburtstag", ja: "🎂 誕生日", zh: "🎂 生日" },
  baby: { fr: "🍼 Baby shower", en: "🍼 Baby shower", es: "🍼 Baby shower", it: "🍼 Baby shower", pt: "🍼 Chá de bebé", de: "🍼 Babyparty", ja: "🍼 ベビーシャワー", zh: "🍼 迎婴派对" },
  family: { fr: "👨‍👩‍👧 Famille", en: "👨‍👩‍👧 Family", es: "👨‍👩‍👧 Familia", it: "👨‍👩‍👧 Famiglia", pt: "👨‍👩‍👧 Família", de: "👨‍👩‍👧 Familie", ja: "👨‍👩‍👧 家族", zh: "👨‍👩‍👧 家庭" },
  gaming: { fr: "🎮 Gaming", en: "🎮 Gaming", es: "🎮 Gaming", it: "🎮 Gaming", pt: "🎮 Gaming", de: "🎮 Gaming", ja: "🎮 ゲーム", zh: "🎮 游戏" },
  music: { fr: "🎵 Musique", en: "🎵 Music", es: "🎵 Música", it: "🎵 Musica", pt: "🎵 Música", de: "🎵 Musik", ja: "🎵 音楽", zh: "🎵 音乐" },
  sport: { fr: "🏆 Sport", en: "🏆 Sport", es: "🏆 Deporte", it: "🏆 Sport", pt: "🏆 Desporto", de: "🏆 Sport", ja: "🏆 スポーツ", zh: "🏆 运动" },
  drama: { fr: "🌶️ Drama", en: "🌶️ Drama", es: "🌶️ Drama", it: "🌶️ Drama", pt: "🌶️ Drama", de: "🌶️ Drama", ja: "🌶️ ドラマ", zh: "🌶️ 八卦" },
  debate: { fr: "🗣️ Débat", en: "🗣️ Debate", es: "🗣️ Debate", it: "🗣️ Dibattito", pt: "🗣️ Debate", de: "🗣️ Debatte", ja: "🗣️ ディベート", zh: "🗣️ 辩论" },
  finance: { fr: "💸 Argent", en: "💸 Money", es: "💸 Dinero", it: "💸 Soldi", pt: "💸 Dinheiro", de: "💸 Geld", ja: "💸 お金", zh: "💸 金钱" },
  beauty: { fr: "💄 Mode", en: "💄 Beauty", es: "💄 Belleza", it: "💄 Bellezza", pt: "💄 Beleza", de: "💄 Beauty", ja: "💄 ビューティー", zh: "💄 美妆" },
};

export default function TemplateHub() {
  const locale = toHubLocale(getLocale());
  const t = T[locale];
  // Each template is authored in one language — show only the visitor's
  // locale so an English visitor never sees French template cards.
  const all = getAllTemplates().filter((p) => p.locale === locale);
  const byCategory = new Map<string, typeof all>();
  for (const p of all) {
    const list = byCategory.get(p.category) ?? [];
    list.push(p);
    byCategory.set(p.category, list);
  }
  const categories = [...byCategory.keys()].sort();

  return (
    <div className="space-y-10 fade-up">
      <HubNav locale={locale} current="templates" />
      <header className="space-y-3 text-center">
        <div className="text-xs uppercase tracking-widest text-white/40">
          {t.eyebrow}
        </div>
        <h1 className="font-display text-5xl sm:text-6xl tracking-tight bg-gradient-to-br from-white via-pink-200 to-pink-400 bg-clip-text text-transparent">
          {all.length}
          {t.h1Suffix}
        </h1>
        <p className="text-white/60 text-balance max-w-2xl mx-auto">
          {t.blurb}
        </p>
      </header>

      <Link
        href="/"
        className="block rounded-2xl bg-gradient-to-r from-pink-500/20 to-purple-600/20 border border-pink-400/30 px-5 py-4 hover:from-pink-500/30 hover:to-purple-600/30 transition text-center"
      >
        <div className="font-display text-xl">{t.blankTitle}</div>
        <div className="text-xs text-white/50">{t.blankSub}</div>
      </Link>

      {categories.map((cat) => {
        const list = byCategory.get(cat) ?? [];
        const catLabel = CATEGORY_LABEL[cat]?.[locale] ?? cat;
        return (
          <section key={cat} className="space-y-3">
            <h2 className="font-display text-2xl text-white">{catLabel}</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {list.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/template/${p.slug}`}
                    className="glass rounded-2xl px-5 py-4 hover:bg-white/10 transition flex items-start gap-3 h-full"
                  >
                    <span className="text-3xl shrink-0">{p.emoji}</span>
                    <div className="min-w-0">
                      <div className="font-display text-base text-white leading-tight">
                        {p.title}
                      </div>
                      <div className="text-xs text-white/50 line-clamp-2 mt-1">
                        {p.question}
                      </div>
                      <div className="mt-2 text-[10px] uppercase tracking-widest text-white/30">
                        {p.locale.toUpperCase()} · {p.options.length}{" "}
                        {t.options}
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        );
      })}

      <Link
        href="/"
        className="block rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 px-5 py-4 text-center font-display text-xl hover:scale-[1.02] transition shadow-lg shadow-pink-500/30"
      >
        {t.cta}
      </Link>
    </div>
  );
}
