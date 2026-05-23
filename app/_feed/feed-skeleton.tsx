// Full-bleed skeleton for the immersive home feed. Streamed instantly via
// <Suspense> in app/page.tsx so the visitor sees a card-shaped placeholder the
// moment HTML reaches the browser — instead of waiting for the Supabase RPC
// (get_feed_polls) to resolve before any chrome is painted. Killing that dead
// time is the fix for the "home seems to load 3-4 times before showing" feeling
// on cold Vercel / cold Supabase hits.
export default function FeedSkeleton() {
  return (
    <div className="-mx-4 sm:-mx-6 -mt-8 sm:-mt-12 -mb-28">
      <section className="relative h-[100dvh] overflow-hidden">
        {/* Same per-card vivid wash a real DiscoverCard paints — keeps the
            shell consistent so the swap to the real card doesn't reflow. */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700"
        />
        <div aria-hidden className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex h-full flex-col">
          {/* TOP — header strip placeholder */}
          <div className="px-5 pt-[calc(env(safe-area-inset-top)+3.25rem)]">
            <div className="skeleton-bar shimmer h-4 w-24 opacity-50" />
          </div>

          {/* CENTER — hero question placeholder */}
          <div className="relative flex flex-1 flex-col items-center justify-center gap-3 px-6">
            <div className="skeleton-bar shimmer h-7 w-4/5 max-w-[18rem] opacity-60" />
            <div className="skeleton-bar shimmer h-7 w-3/5 max-w-[14rem] opacity-60" />
          </div>

          {/* BOTTOM — option pills + meta */}
          <div className="space-y-2.5 px-4 pb-[calc(env(safe-area-inset-bottom)+5.25rem)]">
            <div className="space-y-2">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="skeleton-box shimmer min-h-[52px] rounded-2xl bg-black/30 backdrop-blur-md"
                  style={{ opacity: 0.6 - i * 0.1 }}
                />
              ))}
            </div>
            <div className="flex items-center justify-between pt-0.5 opacity-50">
              <div className="skeleton-bar shimmer h-3 w-16" />
              <div className="skeleton-bar shimmer h-7 w-24" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
