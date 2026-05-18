"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const items = [
  { href: "/", label: "Home", icon: HomeIcon, badgeKey: null },
  { href: "/discover", label: "Discover", icon: DiscoverIcon, badgeKey: null },
  { href: "/mes-votes", label: "Votes", icon: VotesIcon, badgeKey: null },
  { href: "/mes-sondages", label: "Polls", icon: PollsIcon, badgeKey: "polls" as const },
];

export default function BottomNav() {
  const pathname = usePathname();
  const [pollsBadge, setPollsBadge] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;
    const compute = async () => {
      const match = document.cookie.match(/(?:^|;\s*)moomz_created_slugs=([^;]+)/);
      if (!match) {
        if (!cancelled) setPollsBadge(null);
        return;
      }
      const slugs = decodeURIComponent(match[1]).split(",").filter(Boolean).slice(0, 20);
      if (slugs.length === 0) {
        if (!cancelled) setPollsBadge(null);
        return;
      }
      try {
        const res = await fetch(`/api/polls-stats?slugs=${encodeURIComponent(slugs.join(","))}`, {
          cache: "no-store",
        });
        if (!res.ok) return;
        const data: { slug: string; vote_count: number }[] = await res.json();
        let total = 0;
        for (const row of data) {
          const seenMatch = document.cookie.match(
            new RegExp(`(?:^|;\\s*)moomz_seen_${row.slug}=([^;]+)`),
          );
          const seen = seenMatch ? Number(seenMatch[1]) : 0;
          total += Math.max(0, row.vote_count - seen);
        }
        if (!cancelled) setPollsBadge(total > 0 ? total : null);
      } catch {}
    };
    compute();
    const id = setInterval(compute, 30_000);
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, [pathname]);

  return (
    <nav className="fixed bottom-0 inset-x-0 z-40 pb-[env(safe-area-inset-bottom)]">
      <div className="mx-auto max-w-xl px-4 pb-3">
        <div className="glass rounded-2xl px-2 py-2 flex items-center justify-around shadow-2xl shadow-black/40">
          {items.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname?.startsWith(item.href + "/");
            const Icon = item.icon;
            const badge = item.badgeKey === "polls" ? pollsBadge : null;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-label={item.label}
                className={`relative flex flex-col items-center justify-center gap-0.5 px-3 py-1.5 rounded-xl transition ${
                  active ? "text-white" : "text-white/40 hover:text-white/70"
                }`}
              >
                <Icon active={active} />
                <span className="text-[10px] font-medium">{item.label}</span>
                {badge !== null && badge > 0 && (
                  <span className="absolute -top-0.5 right-1 inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 text-[10px] font-bold rounded-full bg-pink-500 text-white border-2 border-[#0b0613]">
                    {badge > 9 ? "9+" : badge}
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

function HomeIcon({ active }: { active?: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function DiscoverIcon({ active }: { active?: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" fill={active ? "currentColor" : "none"} fillOpacity={active ? 0.15 : 0} />
      <polygon points="16 8 14 14 8 16 10 10 16 8" fill={active ? "currentColor" : "none"} />
    </svg>
  );
}

function VotesIcon({ active }: { active?: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 12l2 2 4-4" />
      <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c2.39 0 4.68.94 6.36 2.64" fill={active ? "currentColor" : "none"} fillOpacity={active ? 0.15 : 0} />
    </svg>
  );
}

function PollsIcon({ active }: { active?: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="3" fill={active ? "currentColor" : "none"} fillOpacity={active ? 0.15 : 0} />
      <line x1="7" y1="17" x2="7" y2="11" />
      <line x1="12" y1="17" x2="12" y2="7" />
      <line x1="17" y1="17" x2="17" y2="14" />
    </svg>
  );
}
