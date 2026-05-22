import type { Metadata } from "next";
import Link from "next/link";
import { METEO_CITIES, flagOf, type City } from "@/lib/tools/meteo";
import { getLocale, canonicalUrl } from "@/lib/i18n-server";
import type { Locale } from "@/lib/i18n";

export const dynamic = "force-dynamic";
export const revalidate = 1800;

const STRINGS: Record<Locale, {
  title: string;
  description: string;
  hero: string;
  tagline: string;
  Europe: string;
  Asia: string;
  Americas: string;
  Oceania: string;
  Africa: string;
  cities: string;
  back: string;
  cta: string;
  ctaSub: string;
}> = {
  fr: {
    title: "Météo dans 50 villes du monde · moomz",
    description: "Météo en direct + prévisions 7 jours pour 50 villes : Paris, Londres, Tokyo, New York, Sydney… Données gratuites Open-Meteo, mises à jour toutes les 30 minutes.",
    hero: "🌍 Météo monde",
    tagline: "Prévisions 7 jours pour 50 grandes villes. Données live, zéro pub.",
    Europe: "Europe", Asia: "Asie", Americas: "Amériques", Oceania: "Océanie", Africa: "Afrique",
    cities: "villes", back: "← retour",
    cta: "Crée ton sondage moomz",
    ctaSub: "10 secondes, anonyme, gratuit",
  },
  en: {
    title: "Weather in 50 cities worldwide · moomz",
    description: "Live weather + 7-day forecast for 50 cities: Paris, London, Tokyo, New York, Sydney… Free Open-Meteo data, refreshed every 30 minutes.",
    hero: "🌍 World weather",
    tagline: "7-day forecasts for 50 major cities. Live data, zero ads.",
    Europe: "Europe", Asia: "Asia", Americas: "Americas", Oceania: "Oceania", Africa: "Africa",
    cities: "cities", back: "← back",
    cta: "Create your moomz poll",
    ctaSub: "10 seconds, anonymous, free",
  },
  es: {
    title: "El tiempo en 50 ciudades del mundo · moomz",
    description: "El tiempo en directo + pronóstico a 7 días para 50 ciudades: París, Londres, Tokio, Nueva York… Datos gratuitos de Open-Meteo, actualizados cada 30 min.",
    hero: "🌍 Tiempo mundial",
    tagline: "Pronósticos a 7 días para 50 grandes ciudades. Datos en vivo, sin anuncios.",
    Europe: "Europa", Asia: "Asia", Americas: "Américas", Oceania: "Oceanía", Africa: "África",
    cities: "ciudades", back: "← volver",
    cta: "Crea tu encuesta moomz",
    ctaSub: "10 segundos, anónimo, gratis",
  },
  it: {
    title: "Meteo in 50 città del mondo · moomz",
    description: "Meteo in tempo reale + previsioni a 7 giorni per 50 città: Parigi, Londra, Tokyo, New York… Dati gratuiti Open-Meteo, aggiornati ogni 30 min.",
    hero: "🌍 Meteo mondiale",
    tagline: "Previsioni a 7 giorni per 50 grandi città. Dati live, zero pubblicità.",
    Europe: "Europa", Asia: "Asia", Americas: "Americhe", Oceania: "Oceania", Africa: "Africa",
    cities: "città", back: "← indietro",
    cta: "Crea il tuo sondaggio moomz",
    ctaSub: "10 secondi, anonimo, gratis",
  },
  pt: {
    title: "Tempo em 50 cidades do mundo · moomz",
    description: "Tempo ao vivo + previsão de 7 dias para 50 cidades: Paris, Londres, Tóquio, Nova Iorque… Dados gratuitos Open-Meteo, atualizados a cada 30 min.",
    hero: "🌍 Tempo mundial",
    tagline: "Previsões de 7 dias para 50 grandes cidades. Dados ao vivo, sem anúncios.",
    Europe: "Europa", Asia: "Ásia", Americas: "Américas", Oceania: "Oceania", Africa: "África",
    cities: "cidades", back: "← voltar",
    cta: "Cria a tua sondagem moomz",
    ctaSub: "10 segundos, anónimo, grátis",
  },
  de: {
    title: "Wetter in 50 Städten weltweit · moomz",
    description: "Live-Wetter + 7-Tage-Vorhersage für 50 Städte: Paris, London, Tokio, New York… Kostenlose Open-Meteo-Daten, alle 30 Min aktualisiert.",
    hero: "🌍 Weltwetter",
    tagline: "7-Tage-Vorhersagen für 50 Großstädte. Live-Daten, keine Werbung.",
    Europe: "Europa", Asia: "Asien", Americas: "Amerika", Oceania: "Ozeanien", Africa: "Afrika",
    cities: "Städte", back: "← zurück",
    cta: "Erstelle deine moomz-Umfrage",
    ctaSub: "10 Sekunden, anonym, kostenlos",
  },
  ja: {
    title: "世界50都市の天気予報 · moomz",
    description: "パリ、ロンドン、東京、ニューヨーク…世界50都市のライブ天気と7日間予報。Open-Meteoの無料データ、30分ごとに更新。",
    hero: "🌍 世界の天気",
    tagline: "世界50都市の7日間予報。リアルタイム、広告なし。",
    Europe: "ヨーロッパ", Asia: "アジア", Americas: "アメリカ", Oceania: "オセアニア", Africa: "アフリカ",
    cities: "都市", back: "← 戻る",
    cta: "moomzで投票を作る",
    ctaSub: "10秒・匿名・無料",
  },
  zh: {
    title: "全球50座城市天气 · moomz",
    description: "巴黎、伦敦、东京、纽约…全球50座城市的实时天气和7天预报。Open-Meteo免费数据,每30分钟更新。",
    hero: "🌍 全球天气",
    tagline: "50座大城市的7天预报。实时数据,零广告。",
    Europe: "欧洲", Asia: "亚洲", Americas: "美洲", Oceania: "大洋洲", Africa: "非洲",
    cities: "座城市", back: "← 返回",
    cta: "创建你的 moomz 投票",
    ctaSub: "10秒 · 匿名 · 免费",
  },
};

export function generateMetadata(): Metadata {
  const locale = getLocale();
  const s = STRINGS[locale] ?? STRINGS.en;
  return {
    title: s.title,
    description: s.description,
    alternates: { canonical: canonicalUrl() },
    openGraph: {
      title: s.title,
      description: s.description,
      url: canonicalUrl(),
      type: "website",
      siteName: "moomz",
      locale,
    },
    twitter: {
      card: "summary_large_image",
      title: s.title,
      description: s.description,
    },
  };
}

const REGION_ORDER: City["region"][] = ["Europe", "Asia", "Americas", "Oceania", "Africa"];

export default function MeteoHub() {
  const locale = getLocale();
  const s = STRINGS[locale] ?? STRINGS.en;

  const byRegion = new Map<City["region"], City[]>();
  for (const c of METEO_CITIES) {
    const list = byRegion.get(c.region) ?? [];
    list.push(c);
    byRegion.set(c.region, list);
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: s.title,
    description: s.description,
    url: "https://moomz.com/meteo",
    inLanguage: locale,
  };

  return (
    <div className="space-y-8 fade-up">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="space-y-3 text-center">
        <div className="text-xs uppercase tracking-widest text-white/40">
          moomz · tools
        </div>
        <h1 className="font-display text-4xl sm:text-5xl tracking-tight bg-gradient-to-br from-white via-pink-200 to-pink-400 bg-clip-text text-transparent">
          {s.hero}
        </h1>
        <p className="text-white/60 text-balance max-w-2xl mx-auto">
          {s.tagline}
        </p>
      </header>

      {REGION_ORDER.map((region) => {
        const list = byRegion.get(region);
        if (!list || list.length === 0) return null;
        return (
          <section key={region} className="space-y-3">
            <div className="flex items-baseline justify-between">
              <h2 className="font-display text-2xl text-white">
                {s[region]}
              </h2>
              <span className="text-xs text-white/40">
                {list.length} {s.cities}
              </span>
            </div>
            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {list.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/meteo/${c.slug}`}
                    className="glass rounded-2xl px-4 py-3 hover:bg-white/10 transition flex items-center gap-3"
                  >
                    <span className="text-2xl shrink-0">{flagOf(c.cc)}</span>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-white truncate">
                        {c.name}
                      </div>
                      <div className="text-[11px] text-white/40 truncate">
                        {c.country}
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
        {s.cta}
        <div className="text-xs font-sans font-normal text-white/80 mt-0.5">
          {s.ctaSub}
        </div>
      </Link>
    </div>
  );
}
