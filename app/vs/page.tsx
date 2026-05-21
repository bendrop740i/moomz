import Link from "next/link";
import type { Metadata } from "next";
import { allPairs } from "@/lib/seo/vs/loader";
import type { VsCategoryId, VsLocale } from "@/lib/seo/vs/types";
import { VS_LOCALES } from "@/lib/seo/vs/types";
import { getLocale } from "@/lib/i18n-server";

export const metadata: Metadata = {
  title: "moomz /vs — head-to-head comparisons on 10 topics",
  description:
    "1000+ side-by-side comparisons: tools, tech, food, travel, science, chemistry, animals, lifestyle, culture. Pick a side, share the poll.",
  alternates: { canonical: "https://moomz.com/vs" },
};

// Per-locale chrome. Data (pair names) is authored-language by design and is
// never translated here.
const CHROME: Record<
  VsLocale,
  {
    kicker: string;
    h1: string;
    sub: (n: number) => string;
    ctaTitle: string;
    ctaSub: string;
    categories: string;
    all: string;
    pairs: string;
  }
> = {
  en: {
    kicker: "moomz · /vs",
    h1: "Head-to-head",
    sub: (n) => `${n} pairs. Pros, cons, and the only verdict that matters: yours. Vote on moomz.`,
    ctaTitle: "Run your own showdown in 10 seconds",
    ctaSub: "moomz.com — anonymous, free",
    categories: "Categories",
    all: "All comparisons",
    pairs: "pairs",
  },
  fr: {
    kicker: "moomz · /vs",
    h1: "Face à face",
    sub: (n) => `${n} duels. Pour, contre, et le seul verdict qui compte : le tien. Vote sur moomz.`,
    ctaTitle: "Lance ton propre duel en 10 secondes",
    ctaSub: "moomz.com — anonyme, gratuit",
    categories: "Catégories",
    all: "Tous les comparatifs",
    pairs: "duels",
  },
  es: {
    kicker: "moomz · /vs",
    h1: "Cara a cara",
    sub: (n) => `${n} duelos. Pros, contras y el único veredicto que cuenta: el tuyo. Vota en moomz.`,
    ctaTitle: "Lanza tu propio duelo en 10 segundos",
    ctaSub: "moomz.com — anónimo, gratis",
    categories: "Categorías",
    all: "Todas las comparativas",
    pairs: "duelos",
  },
  it: {
    kicker: "moomz · /vs",
    h1: "Faccia a faccia",
    sub: (n) => `${n} sfide. Pro, contro e l'unico verdetto che conta: il tuo. Vota su moomz.`,
    ctaTitle: "Lancia la tua sfida in 10 secondi",
    ctaSub: "moomz.com — anonimo, gratis",
    categories: "Categorie",
    all: "Tutti i confronti",
    pairs: "sfide",
  },
  pt: {
    kicker: "moomz · /vs",
    h1: "Frente a frente",
    sub: (n) => `${n} duelos. Prós, contras e o único veredito que importa: o seu. Vote no moomz.`,
    ctaTitle: "Lance o seu próprio duelo em 10 segundos",
    ctaSub: "moomz.com — anônimo, grátis",
    categories: "Categorias",
    all: "Todas as comparações",
    pairs: "duelos",
  },
  de: {
    kicker: "moomz · /vs",
    h1: "Direkte Vergleiche",
    sub: (n) => `${n} Duelle. Pro, Kontra und das einzige Urteil, das zählt: deins. Stimme auf moomz ab.`,
    ctaTitle: "Starte dein eigenes Duell in 10 Sekunden",
    ctaSub: "moomz.com — anonym, kostenlos",
    categories: "Kategorien",
    all: "Alle Vergleiche",
    pairs: "Duelle",
  },
  ja: {
    kicker: "moomz · /vs",
    h1: "ガチ対決",
    sub: (n) => `${n}件の対決。長所、短所、そして本当に大事な結論はあなた次第。moomzで投票しよう。`,
    ctaTitle: "10秒で自分だけの対決をつくろう",
    ctaSub: "moomz.com — 匿名・無料",
    categories: "カテゴリー",
    all: "すべての比較",
    pairs: "件",
  },
  zh: {
    kicker: "moomz · /vs",
    h1: "正面对决",
    sub: (n) => `${n} 组对决。优点、缺点,以及唯一重要的结论:你的选择。在 moomz 上投票。`,
    ctaTitle: "10 秒发起你自己的对决",
    ctaSub: "moomz.com — 匿名、免费",
    categories: "分类",
    all: "全部对比",
    pairs: "组",
  },
};

// Category labels per locale. The category id stays stable; only the display
// label is localized.
const CATEGORY_LABELS: Record<VsCategoryId, Record<VsLocale, string>> = {
  tools: {
    en: "Tools & apps", fr: "Outils & apps", es: "Herramientas y apps", it: "Strumenti e app",
    pt: "Ferramentas e apps", de: "Tools & Apps", ja: "ツール＆アプリ", zh: "工具与应用",
  },
  tech: {
    en: "Tech & code", fr: "Tech & code", es: "Tecnología y código", it: "Tech e codice",
    pt: "Tech e código", de: "Tech & Code", ja: "テック＆コード", zh: "技术与代码",
  },
  cloud: {
    en: "Cloud & platforms", fr: "Cloud & plateformes", es: "Cloud y plataformas", it: "Cloud e piattaforme",
    pt: "Cloud e plataformas", de: "Cloud & Plattformen", ja: "クラウド＆プラットフォーム", zh: "云与平台",
  },
  food: {
    en: "Food & drink", fr: "Food & boissons", es: "Comida y bebida", it: "Cibo e bevande",
    pt: "Comida e bebida", de: "Essen & Trinken", ja: "フード＆ドリンク", zh: "美食与饮品",
  },
  travel: {
    en: "Travel & places", fr: "Voyage & lieux", es: "Viajes y lugares", it: "Viaggi e luoghi",
    pt: "Viagens e lugares", de: "Reisen & Orte", ja: "旅行＆場所", zh: "旅行与地点",
  },
  science: {
    en: "Science", fr: "Sciences", es: "Ciencia", it: "Scienza",
    pt: "Ciência", de: "Wissenschaft", ja: "科学", zh: "科学",
  },
  chemistry: {
    en: "Chemistry", fr: "Chimie", es: "Química", it: "Chimica",
    pt: "Química", de: "Chemie", ja: "化学", zh: "化学",
  },
  animals: {
    en: "Animals", fr: "Animaux", es: "Animales", it: "Animali",
    pt: "Animais", de: "Tiere", ja: "動物", zh: "动物",
  },
  lifestyle: {
    en: "Lifestyle", fr: "Lifestyle", es: "Estilo de vida", it: "Lifestyle",
    pt: "Estilo de vida", de: "Lifestyle", ja: "ライフスタイル", zh: "生活方式",
  },
  culture: {
    en: "Culture & media", fr: "Culture & médias", es: "Cultura y medios", it: "Cultura e media",
    pt: "Cultura e mídia", de: "Kultur & Medien", ja: "カルチャー＆メディア", zh: "文化与媒体",
  },
};

const CATEGORY_ORDER: Array<{ id: VsCategoryId; emoji: string }> = [
  { id: "tools", emoji: "🛠️" },
  { id: "tech", emoji: "💻" },
  { id: "cloud", emoji: "☁️" },
  { id: "food", emoji: "🍕" },
  { id: "travel", emoji: "✈️" },
  { id: "science", emoji: "🔬" },
  { id: "chemistry", emoji: "⚗️" },
  { id: "animals", emoji: "🐾" },
  { id: "lifestyle", emoji: "🧘" },
  { id: "culture", emoji: "🎭" },
];

export default function VsHub() {
  // The /vs hub has no locale in the URL — derive it from the visitor cookie /
  // Accept-Language, then coerce into the VsLocale set (same 8 langs).
  const visitorLocale = getLocale();
  const locale: VsLocale = (VS_LOCALES as string[]).includes(visitorLocale)
    ? (visitorLocale as VsLocale)
    : "en";
  const c = CHROME[locale];

  // Pick the best-available locale for a pair link: prefer the visitor locale,
  // else its first authored locale.
  const linkLocale = (p: (typeof allPairs)[number]): string =>
    p.content[locale] ? locale : (Object.keys(p.content)[0] ?? "en");

  // Group every pair by category so the hub links ALL ~1000 pairs (BUG 2).
  const byCat = new Map<VsCategoryId, typeof allPairs>();
  for (const p of allPairs) {
    const list = byCat.get(p.category) ?? [];
    list.push(p);
    byCat.set(p.category, list);
  }

  return (
    <div className="space-y-8 fade-up">
      <header className="space-y-3 text-center">
        <div className="text-xs uppercase tracking-widest text-white/40">{c.kicker}</div>
        <h1 className="font-display text-5xl sm:text-6xl tracking-tight bg-gradient-to-br from-white via-pink-200 to-pink-400 bg-clip-text text-transparent">
          {c.h1}
        </h1>
        <p className="text-white/60 text-balance max-w-2xl mx-auto">{c.sub(allPairs.length)}</p>
      </header>

      <Link
        href="/"
        className="block rounded-2xl bg-gradient-to-r from-pink-500/20 to-purple-600/20 border border-pink-400/30 px-5 py-4 hover:from-pink-500/30 hover:to-purple-600/30 transition text-center"
      >
        <div className="font-display text-xl">{c.ctaTitle}</div>
        <div className="text-xs text-white/50">{c.ctaSub}</div>
      </Link>

      {/* Category jump-links */}
      <section className="space-y-3">
        <h2 className="font-display text-2xl text-white">{c.categories}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {CATEGORY_ORDER.map((cat) => {
            const list = byCat.get(cat.id) ?? [];
            if (list.length === 0) return null;
            return (
              <a
                key={cat.id}
                href={`#cat-${cat.id}`}
                className="glass rounded-2xl px-4 py-3 hover:bg-white/10 transition"
              >
                <div className="flex items-center justify-between">
                  <div className="text-2xl">{cat.emoji}</div>
                  <div className="text-xs text-white/40">{list.length}</div>
                </div>
                <div className="text-sm font-medium text-white mt-2">
                  {CATEGORY_LABELS[cat.id][locale]}
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* Every pair, grouped by category — full coverage so all ~1000 pairs
          are reachable from the hub (BUG 2). */}
      <section className="space-y-6">
        <h2 className="font-display text-2xl text-white">{c.all}</h2>
        {CATEGORY_ORDER.map((cat) => {
          const list = byCat.get(cat.id) ?? [];
          if (list.length === 0) return null;
          return (
            <section key={cat.id} id={`cat-${cat.id}`} className="space-y-2 scroll-mt-20">
              <h3 className="font-semibold text-lg text-white flex items-center gap-2">
                <span aria-hidden>{cat.emoji}</span>
                <span>{CATEGORY_LABELS[cat.id][locale]}</span>
                <span className="text-xs text-white/40 font-normal">
                  ({list.length} {c.pairs})
                </span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {list.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/vs/${linkLocale(p)}/${p.slug}`}
                    className="glass rounded-xl px-4 py-3 hover:bg-white/10 transition text-sm text-white/80 truncate"
                  >
                    {p.emoji_a ?? ""} {p.a} <span className="text-white/40">vs</span> {p.b}{" "}
                    {p.emoji_b ?? ""}
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </section>
    </div>
  );
}
