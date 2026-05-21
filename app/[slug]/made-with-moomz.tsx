import Link from "next/link";
import { getLocale } from "@/lib/i18n-server";
import type { Locale } from "@/lib/i18n";

type MWMCopy = {
  poweredBy: string;
  headline: string;
  sub: string;
  cta: string;
  srOnly: string;
  asideAriaLabel: string;
};

const MWM_COPY: Record<Locale, MWMCopy> = {
  fr: {
    poweredBy: "✨ Propulsé par moomz",
    headline: "Crée ton vibe check gratuit",
    sub: "Profil + vibe checks + questions anonymes. En 10 secondes.",
    cta: "Crée ton vibe check gratuit sur moomz",
    srOnly: "moomz — vibe check viral, sondage gratuit anonyme et linker de profil tout-en-un pour partager ton lien en bio. Crée un vibe check gratuit en 10 secondes, sans inscription, et partage ton linker moomz comme alternative à Linktree.",
    asideAriaLabel: "Crée ton vibe check gratuit sur moomz",
  },
  en: {
    poweredBy: "✨ Powered by moomz",
    headline: "Create your free vibe check",
    sub: "Profile + vibe checks + anonymous questions. In 10 seconds.",
    cta: "Create your free vibe check on moomz",
    srOnly: "moomz — viral vibe check, free anonymous poll and all-in-one profile linker to share in your bio. Create a free vibe check in 10 seconds, no sign-up required.",
    asideAriaLabel: "Create your free vibe check on moomz",
  },
  es: {
    poweredBy: "✨ Impulsado por moomz",
    headline: "Crea tu vibe check gratis",
    sub: "Perfil + vibe checks + preguntas anónimas. En 10 segundos.",
    cta: "Crea tu vibe check gratis en moomz",
    srOnly: "moomz — vibe check viral, encuesta gratuita y perfil todo en uno para compartir en tu bio.",
    asideAriaLabel: "Crea tu vibe check gratis en moomz",
  },
  it: {
    poweredBy: "✨ Offerto da moomz",
    headline: "Crea il tuo vibe check gratis",
    sub: "Profilo + vibe check + domande anonime. In 10 secondi.",
    cta: "Crea il tuo vibe check gratis su moomz",
    srOnly: "moomz — vibe check virale, sondaggio gratuito anonimo e linker di profilo tutto in uno da condividere nella tua bio.",
    asideAriaLabel: "Crea il tuo vibe check gratis su moomz",
  },
  pt: {
    poweredBy: "✨ Desenvolvido por moomz",
    headline: "Cria o teu vibe check grátis",
    sub: "Perfil + vibe checks + perguntas anónimas. Em 10 segundos.",
    cta: "Cria o teu vibe check grátis no moomz",
    srOnly: "moomz — vibe check viral, enquete gratuita anónima e linker de perfil tudo em um para partilhar na tua bio.",
    asideAriaLabel: "Cria o teu vibe check grátis no moomz",
  },
  de: {
    poweredBy: "✨ Bereitgestellt von moomz",
    headline: "Erstell deinen kostenlosen Vibe Check",
    sub: "Profil + Vibe Checks + anonyme Fragen. In 10 Sekunden.",
    cta: "Erstell deinen kostenlosen Vibe Check auf moomz",
    srOnly: "moomz — viraler Vibe Check, kostenlose anonyme Umfrage und Profil-Linker in einem — für deine Bio.",
    asideAriaLabel: "Erstell deinen kostenlosen Vibe Check auf moomz",
  },
  ja: {
    poweredBy: "✨ moomz が提供",
    headline: "無料のバイブチェックを作ろう",
    sub: "プロフィール + バイブチェック + 匿名の質問。10秒で完成。",
    cta: "moomz で無料のバイブチェックを作ろう",
    srOnly: "moomz — バイラルなバイブチェック、無料の匿名アンケート、プロフィールリンクをまとめてバイオでシェア。",
    asideAriaLabel: "moomz で無料のバイブチェックを作ろう",
  },
  zh: {
    poweredBy: "✨ 由 moomz 提供",
    headline: "免费创建你的 Vibe Check",
    sub: "主页 + Vibe Check + 匿名提问。10 秒搞定。",
    cta: "在 moomz 上免费创建你的 Vibe Check",
    srOnly: "moomz — 病毒式 Vibe Check、免费匿名投票和一体式主页链接，分享到你的简介。",
    asideAriaLabel: "在 moomz 上免费创建你的 Vibe Check",
  },
};

export default function MadeWithMoomz() {
  const locale = getLocale() as Locale;
  const c = MWM_COPY[locale] ?? MWM_COPY.en;

  return (
    <aside aria-label={c.asideAriaLabel}>
      <Link
        href="/"
        title={c.cta}
        aria-label={c.asideAriaLabel}
        className="block glass rounded-3xl p-5 sm:p-6 mt-2 text-center hover:scale-[1.01] active:scale-[0.99] transition group relative overflow-hidden"
      >
        <div
          aria-hidden
          className="absolute -top-12 -left-12 w-40 h-40 rounded-full opacity-50 blur-3xl pointer-events-none"
          style={{ background: "#ff3d8b" }}
        />
        <div
          aria-hidden
          className="absolute -bottom-12 -right-12 w-44 h-44 rounded-full opacity-40 blur-3xl pointer-events-none"
          style={{ background: "#7c3aed" }}
        />

        <div className="relative space-y-2">
          <div className="text-[11px] uppercase tracking-[0.2em] text-white/40 font-semibold">
            {c.poweredBy}
          </div>
          <div className="text-xl sm:text-2xl font-bold tracking-tight">
            {c.headline}
          </div>
          <div className="text-sm text-white/60 max-w-xs mx-auto text-balance">
            {c.sub}
          </div>
          <div className="pt-2 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-2 text-sm font-bold shadow-lg shadow-pink-500/30 group-hover:scale-[1.04] transition">
            <span>{c.cta}</span>
            <span aria-hidden>→</span>
          </div>
          <span className="sr-only">
            {c.srOnly}
          </span>
        </div>
      </Link>
    </aside>
  );
}
