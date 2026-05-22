// Loading skeleton for a poll / profile page ([slug]). The page is
// force-dynamic, so on a client-side navigation this glass-card silhouette
// shows instantly instead of a blank frame. Pure-CSS shimmer via the
// `.shimmer` + `.skeleton-*` utilities from globals.css.
export default function SlugLoading() {
  return (
    <div className="fade-up space-y-4" aria-busy="true" aria-live="polite">
      <div className="glass-card space-y-4 p-5 sm:p-6" aria-hidden>
        {/* question */}
        <div className="space-y-2">
          <div className="shimmer skeleton-bar h-7 w-full" />
          <div className="shimmer skeleton-bar h-7 w-3/4" />
        </div>
        {/* options */}
        <div className="space-y-2.5 pt-1">
          <div className="shimmer skeleton-box h-14 rounded-2xl" />
          <div className="shimmer skeleton-box h-14 rounded-2xl" />
          <div className="shimmer skeleton-box h-14 rounded-2xl" />
        </div>
        {/* meta strip */}
        <div className="shimmer skeleton-bar h-3 w-32" />
      </div>
      {/* a second, lighter block for the SEO / related section below */}
      <div className="glass-card space-y-3 p-5 sm:p-6" aria-hidden>
        <div className="shimmer skeleton-bar h-4 w-40" />
        <div className="shimmer skeleton-box h-20 rounded-2xl" />
      </div>
    </div>
  );
}
