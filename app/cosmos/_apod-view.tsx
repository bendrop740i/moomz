import Link from "next/link";
import type { Apod } from "@/lib/tools/cosmos";
import { formatDateForLocale, previewImageFor } from "@/lib/tools/cosmos";
import { bcp47, type CosmosStrings } from "./_strings";

type Props = {
  apod: Apod;
  S: CosmosStrings;
  locale: string;
  showLanguageNote: boolean;
};

export function ApodView({ apod, S, locale, showLanguageNote }: Props) {
  const niceDate = formatDateForLocale(apod.date, bcp47(locale));
  const isImage = apod.media_type === "image";
  const isVideo = apod.media_type === "video";
  const preview = previewImageFor(apod);
  const nasaSource = `https://apod.nasa.gov/apod/ap${apod.date.slice(2).replace(/-/g, "")}.html`;

  return (
    <section className="space-y-5">
      {/* Media */}
      <figure className="space-y-2">
        {isImage && preview ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={apod.hdurl ?? apod.url}
            alt={apod.title}
            loading="lazy"
            className="w-full rounded-2xl"
          />
        ) : isVideo ? (
          <iframe
            src={apod.url}
            title={apod.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full aspect-video rounded-2xl bg-black"
          />
        ) : preview ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={preview}
            alt={apod.title}
            loading="lazy"
            className="w-full rounded-2xl"
          />
        ) : (
          <div className="w-full aspect-video rounded-2xl bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center text-4xl">
            🌌
          </div>
        )}
        {isVideo ? (
          <figcaption className="text-xs text-white/50 text-center">
            {S.videoNote}
          </figcaption>
        ) : null}
      </figure>

      {/* Explanation */}
      <article className="glass rounded-3xl p-5 sm:p-6 space-y-3">
        <header className="flex items-center justify-between gap-2">
          <h2 className="text-lg sm:text-xl font-bold">{S.explanation}</h2>
          {showLanguageNote ? (
            <span className="text-[10px] uppercase tracking-widest text-white/40 rounded-full border border-white/15 px-2 py-1">
              {S.enBadge}
            </span>
          ) : null}
        </header>
        {showLanguageNote ? (
          <p className="text-xs text-white/50 italic">{S.englishOnlyNote}</p>
        ) : null}
        <p className="text-sm sm:text-base text-white/80 leading-relaxed whitespace-pre-line">
          {apod.explanation}
        </p>
      </article>

      {/* Details */}
      <aside className="glass rounded-3xl p-5 sm:p-6 space-y-2 text-sm">
        <h2 className="text-base font-bold tracking-tight mb-1">{S.details}</h2>
        <div className="flex justify-between gap-3">
          <span className="text-white/50">{S.date}</span>
          <span className="text-white/85 font-medium">{niceDate}</span>
        </div>
        {apod.copyright ? (
          <div className="flex justify-between gap-3">
            <span className="text-white/50">{S.copyright}</span>
            <span className="text-white/85 text-right">{apod.copyright}</span>
          </div>
        ) : null}
        <div className="flex flex-wrap gap-2 pt-2">
          <a
            href={nasaSource}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white/10 hover:bg-white/15 transition px-3 py-1.5 text-xs font-semibold"
          >
            {S.source}
          </a>
          {apod.hdurl ? (
            <a
              href={apod.hdurl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/10 hover:bg-white/15 transition px-3 py-1.5 text-xs font-semibold"
            >
              {S.openOriginal}
            </a>
          ) : null}
        </div>
      </aside>
    </section>
  );
}

export function StubView({ S }: { S: CosmosStrings }) {
  return (
    <section className="space-y-4">
      <div className="w-full aspect-video rounded-2xl bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center text-5xl">
        🌌
      </div>
      <article className="glass rounded-3xl p-5 sm:p-6 space-y-2">
        <h2 className="text-lg font-bold">{S.stubTitle}</h2>
        <p className="text-sm text-white/70">{S.stubBody}</p>
      </article>
    </section>
  );
}

export function PollCta({
  S,
  className = "",
}: {
  S: CosmosStrings;
  className?: string;
}) {
  const opts = S.pollOptions.map((o) => o.trim()).filter(Boolean).join("|");
  const href = `/?q=${encodeURIComponent(S.pollQuestion)}&o=${encodeURIComponent(opts)}`;
  return (
    <aside
      className={`glass rounded-3xl p-5 sm:p-6 text-center space-y-2 ${className}`}
    >
      <div className="text-xs uppercase tracking-[0.2em] text-white/40 font-semibold">
        ✨ moomz
      </div>
      <h2 className="text-xl sm:text-2xl font-bold">{S.pollCtaTitle}</h2>
      <p className="text-sm text-white/60 max-w-sm mx-auto">{S.pollCtaBody}</p>
      <Link
        href={href}
        className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-2 text-sm font-bold mt-1"
      >
        {S.pollCtaButton} <span aria-hidden>→</span>
      </Link>
    </aside>
  );
}

export function ArchivesGrid({
  dates,
  S,
  locale,
}: {
  dates: string[];
  S: CosmosStrings;
  locale: string;
}) {
  return (
    <section className="space-y-3">
      <header className="space-y-1">
        <h2 className="text-lg font-bold tracking-tight">{S.archives}</h2>
        <p className="text-sm text-white/55">{S.archivesIntro}</p>
      </header>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
        {dates.map((d) => (
          <Link
            key={d}
            href={`/cosmos/${d}`}
            className="glass rounded-xl px-3 py-2.5 text-sm hover:scale-[1.01] active:scale-[0.99] transition flex items-center justify-between"
          >
            <span className="font-semibold">
              {formatDateForLocale(d, bcp47(locale))}
            </span>
            <span aria-hidden className="text-white/30">
              →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
