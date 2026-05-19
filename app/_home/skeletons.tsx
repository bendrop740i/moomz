export function DailyCardSkeleton() {
  return (
    <div
      aria-hidden
      className="animate-pulse rounded-3xl bg-white/5 border border-white/5 h-[148px] sm:h-[160px]"
    />
  );
}

export function FeaturedAsksSkeleton() {
  return (
    <div className="space-y-2" aria-hidden>
      <div className="h-4 w-40 animate-pulse rounded bg-white/5" />
      <div className="flex gap-3 overflow-hidden">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="h-[150px] w-[220px] shrink-0 animate-pulse rounded-2xl bg-white/5"
          />
        ))}
      </div>
    </div>
  );
}

export function TrendingFeedSkeleton() {
  return (
    <div className="space-y-3" aria-hidden>
      <div className="flex items-center justify-between gap-3">
        <div className="h-4 w-32 animate-pulse rounded bg-white/5" />
        <div className="h-3 w-16 animate-pulse rounded bg-white/5" />
      </div>
      <div className="space-y-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="h-[220px] animate-pulse rounded-3xl bg-white/5 border border-white/5"
            style={{ animationDelay: `${i * 80}ms` }}
          />
        ))}
      </div>
    </div>
  );
}

export function WorldVibesSkeleton() {
  return (
    <div className="space-y-2" aria-hidden>
      <div className="h-4 w-36 animate-pulse rounded bg-white/5" />
      <div className="aspect-[360/135] w-full animate-pulse rounded-3xl bg-white/5 border border-white/5" />
    </div>
  );
}
