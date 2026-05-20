// Daily cron: generates 10 polls per language using X-or-Y templates + word
// banks. Inserts as is_seed=true so trending isn't dominated by bot content.
//
// Hit by Vercel Cron at the schedule defined in vercel.json. Validate via
// `Authorization: Bearer ${CRON_SECRET}` header if CRON_SECRET is set.
//
// Manual trigger (dev): GET /api/cron/auto-polls?force=1

import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

type Lang = "fr" | "en" | "es" | "it" | "pt" | "de" | "ja" | "zh";
const LANGS: Lang[] = ["fr", "en", "es", "it", "pt", "de", "ja", "zh"];
const PER_LANG = 10;

// --- Word banks per language ---------------------------------------------
// Each entry is a pair [A, B] that fills an X/Y template. Banks are themed
// so the resulting polls feel coherent.

const BANK_FOOD: Record<Lang, [string, string][]> = {
  fr: [["Pizza", "Burger"], ["Sushi", "Ramen"], ["Café", "Thé"], ["Sucré", "Salé"], ["Glace", "Gâteau"], ["Pasta", "Risotto"], ["Croissant", "Pain au choc"], ["Vin rouge", "Vin blanc"], ["Coca", "Pepsi"], ["Tacos", "Kebab"]],
  en: [["Pizza", "Burger"], ["Sushi", "Ramen"], ["Coffee", "Tea"], ["Sweet", "Salty"], ["Ice cream", "Cake"], ["Pasta", "Risotto"], ["Pancakes", "Waffles"], ["Red wine", "White wine"], ["Coke", "Pepsi"], ["Tacos", "Burrito"]],
  es: [["Pizza", "Burger"], ["Sushi", "Ramen"], ["Café", "Té"], ["Dulce", "Salado"], ["Helado", "Tarta"], ["Pasta", "Arroz"], ["Tortilla", "Paella"], ["Vino tinto", "Vino blanco"], ["Coca", "Pepsi"], ["Tacos", "Tapas"]],
  it: [["Pizza", "Burger"], ["Sushi", "Ramen"], ["Caffè", "Tè"], ["Dolce", "Salato"], ["Gelato", "Torta"], ["Pasta", "Risotto"], ["Cornetto", "Brioche"], ["Vino rosso", "Vino bianco"], ["Coca", "Pepsi"], ["Pizza", "Pasta"]],
  pt: [["Pizza", "Hambúrguer"], ["Sushi", "Ramen"], ["Café", "Chá"], ["Doce", "Salgado"], ["Sorvete", "Bolo"], ["Pasta", "Risoto"], ["Pão de queijo", "Coxinha"], ["Vinho tinto", "Vinho branco"], ["Coca", "Pepsi"], ["Açaí", "Tapioca"]],
  de: [["Pizza", "Burger"], ["Sushi", "Ramen"], ["Kaffee", "Tee"], ["Süß", "Salzig"], ["Eis", "Kuchen"], ["Pasta", "Risotto"], ["Brezel", "Croissant"], ["Rotwein", "Weißwein"], ["Cola", "Pepsi"], ["Currywurst", "Döner"]],
  ja: [["ピザ", "バーガー"], ["寿司", "ラーメン"], ["コーヒー", "紅茶"], ["甘い", "塩辛い"], ["アイス", "ケーキ"], ["パスタ", "リゾット"], ["うどん", "そば"], ["赤ワイン", "白ワイン"], ["コーラ", "ペプシ"], ["タコス", "ブリトー"]],
  zh: [["披萨", "汉堡"], ["寿司", "拉面"], ["咖啡", "茶"], ["甜", "咸"], ["冰淇淋", "蛋糕"], ["意面", "炒饭"], ["包子", "饺子"], ["红酒", "白酒"], ["可乐", "百事"], ["火锅", "烧烤"]],
};

const BANK_LIFE: Record<Lang, [string, string][]> = {
  fr: [["Plage", "Montagne"], ["Ville", "Campagne"], ["Été", "Hiver"], ["Matin", "Soir"], ["Chat", "Chien"], ["Livre", "Film"], ["Économiser", "Claquer"], ["Voyage", "Maison"], ["Marvel", "DC"], ["iPhone", "Android"]],
  en: [["Beach", "Mountain"], ["City", "Countryside"], ["Summer", "Winter"], ["Morning", "Night"], ["Cat", "Dog"], ["Book", "Film"], ["Save", "Spend"], ["Travel", "Home"], ["Marvel", "DC"], ["iPhone", "Android"]],
  es: [["Playa", "Montaña"], ["Ciudad", "Campo"], ["Verano", "Invierno"], ["Mañana", "Noche"], ["Gato", "Perro"], ["Libro", "Película"], ["Ahorrar", "Gastar"], ["Viaje", "Casa"], ["Marvel", "DC"], ["iPhone", "Android"]],
  it: [["Mare", "Montagna"], ["Città", "Campagna"], ["Estate", "Inverno"], ["Mattina", "Sera"], ["Gatto", "Cane"], ["Libro", "Film"], ["Risparmiare", "Spendere"], ["Viaggio", "Casa"], ["Marvel", "DC"], ["iPhone", "Android"]],
  pt: [["Praia", "Montanha"], ["Cidade", "Campo"], ["Verão", "Inverno"], ["Manhã", "Noite"], ["Gato", "Cachorro"], ["Livro", "Filme"], ["Poupar", "Gastar"], ["Viagem", "Casa"], ["Marvel", "DC"], ["iPhone", "Android"]],
  de: [["Strand", "Berge"], ["Stadt", "Land"], ["Sommer", "Winter"], ["Morgen", "Abend"], ["Katze", "Hund"], ["Buch", "Film"], ["Sparen", "Ausgeben"], ["Reise", "Zuhause"], ["Marvel", "DC"], ["iPhone", "Android"]],
  ja: [["海", "山"], ["都会", "田舎"], ["夏", "冬"], ["朝", "夜"], ["猫", "犬"], ["本", "映画"], ["貯金", "散財"], ["旅行", "家"], ["マーベル", "DC"], ["iPhone", "Android"]],
  zh: [["海边", "山里"], ["城市", "乡下"], ["夏天", "冬天"], ["早上", "晚上"], ["猫", "狗"], ["书", "电影"], ["存钱", "花钱"], ["旅行", "在家"], ["漫威", "DC"], ["iPhone", "安卓"]],
};

const BANK_DRAMA: Record<Lang, [string, string][]> = {
  fr: [["Ex à un mariage", "Ex à mon mariage"], ["Ghoster", "Être ghosté·e"], ["Mentir", "Dire la vérité brutale"], ["Insta perfect", "BeReal cru"], ["Couple aff", "Couple discret"], ["Drama group chat", "Solo zen"], ["Reply all", "Reply privé"], ["Story drunk", "Story sober"], ["Slide DM", "Attendre"], ["Rebond", "Solo 6 mois"]],
  en: [["Ex at wedding", "Ex at MY wedding"], ["Ghost them", "Get ghosted"], ["Lie", "Brutal truth"], ["Insta perfect", "BeReal raw"], ["Couple flex", "Couple low-key"], ["Group chat drama", "Solo zen"], ["Reply all", "Reply private"], ["Drunk story", "Sober story"], ["Slide DMs", "Wait"], ["Rebound", "Solo 6 months"]],
  es: [["Ex en una boda", "Ex en MI boda"], ["Ghostear", "Te ghosteen"], ["Mentir", "Verdad brutal"], ["Insta perfecto", "BeReal real"], ["Pareja pública", "Pareja discreta"], ["Drama grupal", "Solo zen"], ["Responder a todos", "Privado"], ["Story borracha", "Story sobria"], ["Mandar DM", "Esperar"], ["Rebote", "Solo 6 meses"]],
  it: [["Ex a un matrimonio", "Ex al MIO matrimonio"], ["Ghostare", "Essere ghostata"], ["Mentire", "Verità brutale"], ["Insta perfetto", "BeReal vero"], ["Coppia pubblica", "Coppia discreta"], ["Drama di gruppo", "Solo zen"], ["Rispondi a tutti", "Privato"], ["Story ubriaca", "Story sobria"], ["Scrivere in DM", "Aspettare"], ["Rebound", "Solo 6 mesi"]],
  pt: [["Ex num casamento", "Ex no MEU casamento"], ["Dar ghost", "Levar ghost"], ["Mentir", "Verdade brutal"], ["Insta perfeito", "BeReal cru"], ["Casal flex", "Casal discreto"], ["Drama no grupo", "Solo zen"], ["Responder a todos", "Privado"], ["Story bêbada", "Story sóbria"], ["Mandar DM", "Esperar"], ["Pulo", "Solo 6 meses"]],
  de: [["Ex auf einer Hochzeit", "Ex auf MEINER Hochzeit"], ["Ghosten", "Geghosted werden"], ["Lügen", "Brutale Wahrheit"], ["Insta perfekt", "BeReal real"], ["Paar öffentlich", "Paar diskret"], ["Gruppenchat-Drama", "Solo zen"], ["Allen antworten", "Privat"], ["Story besoffen", "Story nüchtern"], ["DM schicken", "Warten"], ["Rebound", "Solo 6 Monate"]],
  ja: [["元カレ/元カノが結婚式", "自分の結婚式に元カレ/元カノ"], ["ゴーストする", "ゴーストされる"], ["嘘", "残酷な真実"], ["インスタ完璧", "BeReal素"], ["カップル見せつけ", "カップル隠す"], ["グルチャ修羅場", "ソロ禅"], ["全員返信", "個別返信"], ["酔ったストーリー", "シラフのストーリー"], ["DMする", "待つ"], ["リバウンド", "ソロ半年"]],
  zh: [["前任出现在婚礼", "前任出现在我婚礼"], ["主动消失", "被消失"], ["撒谎", "说残忍的真话"], ["INS完美", "BeReal真实"], ["晒情侣", "低调情侣"], ["群聊大瓜", "独自禅修"], ["回复全员", "回复私聊"], ["酒后story", "清醒story"], ["主动私信", "等他/她"], ["快速脱单", "独处半年"]],
};

const ALL_BANKS: Record<Lang, Array<[string, string]>> = LANGS.reduce(
  (acc, l) => {
    acc[l] = [...BANK_FOOD[l], ...BANK_LIFE[l], ...BANK_DRAMA[l]];
    return acc;
  },
  {} as Record<Lang, [string, string][]>,
);

// --- Templates ------------------------------------------------------------
// Each lang has 4 question templates that take an [X, Y] pair.

const QUESTION_TEMPLATES: Record<Lang, ((x: string, y: string) => string)[]> = {
  fr: [
    (x, y) => `${x} ou ${y} ?`,
    (x, y) => `Team ${x} ou team ${y} ?`,
    (x, y) => `Tu préfères ${x} ou ${y} ?`,
    (x, y) => `Pour la vie : ${x} ou ${y} ?`,
  ],
  en: [
    (x, y) => `${x} or ${y}?`,
    (x, y) => `Team ${x} or team ${y}?`,
    (x, y) => `Would you rather ${x} or ${y}?`,
    (x, y) => `For life: ${x} or ${y}?`,
  ],
  es: [
    (x, y) => `${x} o ${y}?`,
    (x, y) => `Team ${x} o team ${y}?`,
    (x, y) => `Prefieres ${x} o ${y}?`,
    (x, y) => `Para toda la vida: ${x} o ${y}?`,
  ],
  it: [
    (x, y) => `${x} o ${y}?`,
    (x, y) => `Team ${x} o team ${y}?`,
    (x, y) => `Preferisci ${x} o ${y}?`,
    (x, y) => `Per la vita: ${x} o ${y}?`,
  ],
  pt: [
    (x, y) => `${x} ou ${y}?`,
    (x, y) => `Team ${x} ou team ${y}?`,
    (x, y) => `Você prefere ${x} ou ${y}?`,
    (x, y) => `Pra vida toda: ${x} ou ${y}?`,
  ],
  de: [
    (x, y) => `${x} oder ${y}?`,
    (x, y) => `Team ${x} oder Team ${y}?`,
    (x, y) => `Lieber ${x} oder ${y}?`,
    (x, y) => `Für immer: ${x} oder ${y}?`,
  ],
  ja: [
    (x, y) => `${x}と${y}どっち？`,
    (x, y) => `${x}派？それとも${y}派？`,
    (x, y) => `${x}か${y}、どっちを選ぶ？`,
    (x, y) => `一生どっちか：${x}か${y}？`,
  ],
  zh: [
    (x, y) => `${x}还是${y}？`,
    (x, y) => `${x}队还是${y}队？`,
    (x, y) => `你选${x}还是${y}？`,
    (x, y) => `一辈子只能选一个：${x}还是${y}？`,
  ],
};

// --- Helpers --------------------------------------------------------------

function pick<T>(arr: T[], rnd: () => number): T {
  return arr[Math.floor(rnd() * arr.length)];
}

// Seeded random (deterministic per day) so manual reruns don't double-insert
// the same content silently — we add a small entropy + the daily date to keep
// each cron invocation distinct yet reproducible.
function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function slugify(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 30);
}

function generateBatch(lang: Lang, count: number, seed: number) {
  const rnd = mulberry32(seed);
  const out: Array<{ question: string; options: string[]; lang: Lang; slug: string }> = [];
  const usedQs = new Set<string>();
  let attempts = 0;
  while (out.length < count && attempts < count * 5) {
    attempts++;
    const tmpl = pick(QUESTION_TEMPLATES[lang], rnd);
    const pair = pick(ALL_BANKS[lang], rnd);
    const question = tmpl(pair[0], pair[1]);
    if (usedQs.has(question)) continue;
    usedQs.add(question);
    const slugRoot = slugify(`${pair[0]}-${pair[1]}-${lang}`);
    const slug = `a${Math.floor(rnd() * 36 ** 4).toString(36)}${slugRoot}`.slice(0, 24);
    out.push({ question, options: pair, lang, slug });
  }
  return out;
}

// --- Handler --------------------------------------------------------------

async function handle(req: Request): Promise<Response> {
  const secret = process.env.CRON_SECRET;
  const auth = req.headers.get("authorization");
  const url = new URL(req.url);
  const force = url.searchParams.get("force");
  if (secret && auth !== `Bearer ${secret}` && force !== secret) {
    return new NextResponse("unauthorized", { status: 401 });
  }

  const today = new Date().toISOString().slice(0, 10);
  const baseSeed = parseInt(today.replace(/-/g, ""), 10);

  const supabase = getSupabase();
  let inserted = 0;
  const errors: string[] = [];

  for (let i = 0; i < LANGS.length; i++) {
    const lang = LANGS[i];
    const batch = generateBatch(lang, PER_LANG, baseSeed + i);
    const rows = batch.map((b) => ({
      slug: b.slug,
      question: b.question,
      options: b.options,
      lang: b.lang,
      is_seed: true,
    }));
    const { error, data } = await supabase.from("polls").insert(rows).select("id");
    if (error) {
      errors.push(`${lang}: ${error.message}`);
    } else {
      inserted += data?.length ?? 0;
    }
  }

  return NextResponse.json({
    ok: errors.length === 0,
    inserted,
    expected: LANGS.length * PER_LANG,
    errors,
    date: today,
  });
}

export async function GET(req: Request) {
  return handle(req);
}

export async function POST(req: Request) {
  return handle(req);
}
