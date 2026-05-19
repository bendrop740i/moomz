import Link from "next/link";
import SeoFooter from "./seo-footer";
import { getLocale } from "@/lib/i18n-server";
import { t } from "@/lib/i18n";

export default function NotFound() {
  const locale = getLocale();
  const tx = (k: string) => t(k, locale);

  return (
    <div className="space-y-8 fade-up text-center">
      <header className="space-y-3">
        <Link
          href="/"
          className="inline-block text-3xl font-bold tracking-tighter bg-gradient-to-br from-white via-pink-200 to-pink-400 bg-clip-text text-transparent"
        >
          moomz
        </Link>
      </header>

      <div className="glass rounded-3xl p-8 space-y-5 shadow-2xl shadow-pink-500/10">
        <div className="text-8xl">👀</div>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">{tx("notFound.title")}</h1>
          <p className="text-white/60 text-base text-balance">{tx("notFound.body")}</p>
        </div>
      </div>

      <Link
        href="/"
        className="inline-block rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-4 px-8 hover:scale-[1.02] active:scale-[0.98] transition shadow-lg shadow-pink-500/30"
      >
        {tx("notFound.cta")}
      </Link>

      <SeoFooter locale={locale === "en" ? "en" : "fr"} />
    </div>
  );
}
