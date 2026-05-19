// Discover loading skeleton — matches the snap-card silhouette so the user
// never sees a blank frame between navigation and server fetch. Pure CSS
// shimmer via the `.shimmer` + `.skeleton-box` utilities from globals.css.
export default function DiscoverLoading() {
  return (
    <div
      className="fade-up -mx-5 -mt-8 sm:-mt-12 -mb-28"
      aria-busy="true"
      aria-live="polite"
    >
      {/* Floating glass header skeleton — mirrors the live header height so
          there's zero layout shift when the real feed swaps in. */}
      <header
        className="absolute left-0 right-0 top-0 z-20 px-5 pt-[calc(env(safe-area-inset-top)+0.5rem)] pb-3 flex items-center justify-between bg-gradient-to-b from-[#0b0613]/80 via-[#0b0613]/40 to-transparent backdrop-blur-sm pointer-events-none"
        aria-hidden
      >
        <div className="shimmer skeleton-bar h-7 w-32" />
        <div className="shimmer skeleton-bar h-3 w-16" />
      </header>

      <div
        className="snap-y snap-mandatory overflow-y-hidden h-[100dvh] scrollbar-hide"
        aria-hidden
      >
        <section className="snap-start h-[100dvh] flex items-center justify-center px-2 pt-[calc(env(safe-area-inset-top)+3.5rem)] pb-[calc(env(safe-area-inset-bottom)+5rem)]">
          <div className="w-full max-w-md mx-auto flex flex-col gap-3">
            {/* badges row */}
            <div className="flex gap-2">
              <div className="shimmer skeleton-bar h-5 w-14" />
              <div className="shimmer skeleton-bar h-5 w-10" />
            </div>
            {/* question */}
            <div className="shimmer skeleton-bar h-7 w-11/12" />
            <div className="shimmer skeleton-bar h-7 w-3/4 mb-2" />
            {/* options */}
            <div className="shimmer skeleton-box h-14 rounded-2xl" />
            <div className="shimmer skeleton-box h-14 rounded-2xl" />
            <div className="shimmer skeleton-box h-14 rounded-2xl" />
            <div className="shimmer skeleton-box h-14 rounded-2xl" />
            {/* footer micro-strip */}
            <div className="shimmer skeleton-bar h-3 w-40 mx-auto mt-3" />
          </div>
        </section>
      </div>

      {/* Side dots */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-1.5 sm:right-2 top-1/2 -translate-y-1/2 hidden min-[360px]:flex flex-col gap-1.5"
      >
        <span className="skeleton-dot block w-1 h-6 rounded-full bg-pink-400/40" />
        <span className="skeleton-dot block w-1 h-1.5 rounded-full bg-white/20" />
        <span className="skeleton-dot block w-1 h-1.5 rounded-full bg-white/20" />
        <span className="skeleton-dot block w-1 h-1.5 rounded-full bg-white/20" />
      </div>
    </div>
  );
}
