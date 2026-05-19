import Link from "next/link";
import type { SeoPage, Locale } from "@/lib/seo/types";
import { pageUrl } from "@/lib/seo/types";

type Props = {
  title: string;
  description: string;
  pages: SeoPage[];
  locale?: Locale;
};

export default function SeoHubView({ title, description, pages }: Props) {
  return (
    <div className="space-y-6 fade-up">
      <header className="space-y-2 text-center">
        <h1 className="font-display text-5xl sm:text-6xl tracking-tight bg-gradient-to-br from-white via-pink-200 to-pink-400 bg-clip-text text-transparent">
          {title}
        </h1>
        <p className="text-white/60 text-balance">{description}</p>
      </header>

      <Link
        href="/"
        className="block rounded-2xl bg-gradient-to-r from-pink-500/20 to-purple-600/20 border border-pink-400/30 px-5 py-4 hover:from-pink-500/30 hover:to-purple-600/30 transition text-center"
      >
        <div className="font-display text-xl">moomz.com</div>
        <div className="text-xs text-white/50">Crée ton sondage en 10 secondes</div>
      </Link>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {pages.map((p) => (
          <li key={p.slug + p.category}>
            <Link
              href={pageUrl(p)}
              className="glass rounded-xl px-4 py-3 hover:bg-white/10 transition flex items-start gap-3 h-full"
            >
              {p.emoji && <span className="text-2xl shrink-0">{p.emoji}</span>}
              <div className="min-w-0">
                <div className="text-sm font-medium text-white">{p.h1}</div>
                <div className="text-xs text-white/40 line-clamp-2 mt-0.5">{p.description}</div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
