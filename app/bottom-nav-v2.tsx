"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useT } from "./locale-context";

type BadgeKey = "polls" | "ask" | null;

type NavItem = {
  href: string;
  labelKey: string;
  fallbackLabel: string;
  icon: (props: { active?: boolean }) => JSX.Element;
  badgeKey: BadgeKey;
};

const items: NavItem[] = [
  { href: "/", labelKey: "nav.home", fallbackLabel: "Home", icon: HomeIcon, badgeKey: null },
  {
    href: "/discover",
    labelKey: "nav.discover",
    fallbackLabel: "Discover",
    icon: DiscoverIcon,
    badgeKey: null,
  },
  { href: "/read", labelKey: "nav.read", fallbackLabel: "Read", icon: BookOpenIcon, badgeKey: null },
  {
    href: "/mes-votes",
    labelKey: "nav.votes",
    fallbackLabel: "Votes",
    icon: VotesIcon,
    badgeKey: "polls",
  },
  { href: "/me", labelKey: "nav.me", fallbackLabel: "Profil", icon: MeIcon, badgeKey: "ask" },
];

const PINK = "#ff3d8b";

export default function BottomNavV2() {
  const pathname = usePathname();
  const t = useT();
  const [pollsBadge, setPollsBadge] = useState<number | null>(null);
  const [askBadge, setAskBadge] = useState<number | null>(null);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  // Refs for measuring active-tab underline position
  const containerRef = useRef<HTMLDivElement | null>(null);
  const tabRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  const [indicator, setIndicator] = useState<{ left: number; visible: boolean }>({
    left: 0,
    visible: false,
  });

  const activeIndex = items.findIndex((item) =>
    item.href === "/"
      ? pathname === "/"
      : pathname === item.href || pathname?.startsWith(item.href + "/"),
  );

  // Scroll-hide behavior (translate off-screen on scroll-down, show on scroll-up)
  useEffect(() => {
    lastY.current = window.scrollY;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const delta = y - lastY.current;
        if (Math.abs(delta) > 6) {
          if (delta > 0 && y > 60) setHidden(true);
          else if (delta < 0) setHidden(false);
          lastY.current = y;
        }
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  // Ask badge (every 30s)
  useEffect(() => {
    let cancelled = false;
    const fetchAsk = async () => {
      try {
        const res = await fetch("/api/ask-pending", { cache: "no-store" });
        if (!res.ok) return;
        const data: { count: number } = await res.json();
        if (!cancelled) setAskBadge(data.count > 0 ? data.count : null);
      } catch {}
    };
    fetchAsk();
    const id = setInterval(fetchAsk, 30_000);
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, [pathname]);

  // Polls badge — diff vote_count vs per-slug "seen" cookie
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

  // Position the sliding underline accent under the active tab
  useLayoutEffect(() => {
    const measure = () => {
      const container = containerRef.current;
      const tab = activeIndex >= 0 ? tabRefs.current[activeIndex] : null;
      if (!container || !tab) {
        setIndicator((prev) => ({ ...prev, visible: false }));
        return;
      }
      const containerRect = container.getBoundingClientRect();
      const tabRect = tab.getBoundingClientRect();
      const left = tabRect.left - containerRect.left + tabRect.width / 2 - 8; // 8 = half of 16px width
      setIndicator({ left, visible: true });
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [activeIndex, pathname]);

  return (
    <nav
      aria-label="Navigation principale"
      className={`fixed bottom-0 inset-x-0 z-40 pb-[env(safe-area-inset-bottom)] transition-transform duration-300 will-change-transform ${
        hidden ? "translate-y-[120%]" : "translate-y-0"
      }`}
    >
      <div className="mx-auto max-w-xl px-4 pb-3">
        <div
          ref={containerRef}
          className="relative glass rounded-2xl px-2 py-2 flex items-center justify-around shadow-2xl shadow-black/40"
        >
          {items.map((item, i) => {
            const active = i === activeIndex;
            const Icon = item.icon;
            const badge =
              item.badgeKey === "polls"
                ? pollsBadge
                : item.badgeKey === "ask"
                  ? askBadge
                  : null;
            const translated = t(item.labelKey);
            // Fallback when the i18n key isn't defined (returns the key itself)
            const label = translated === item.labelKey ? item.fallbackLabel : translated;
            return (
              <Link
                key={item.href}
                href={item.href}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                aria-label={label}
                aria-current={active ? "page" : undefined}
                className={`relative flex flex-col items-center justify-center gap-0.5 px-3 py-1.5 rounded-xl transition-colors duration-200 ease-out ${
                  active ? "text-white" : "text-white/40 hover:text-white/70"
                }`}
              >
                <Icon active={active} />
                <span
                  className={`text-[10px] font-medium transition-colors duration-200 ease-out ${
                    active ? "text-white" : "text-white/40"
                  }`}
                >
                  {label}
                </span>
                {badge !== null && badge > 0 && (
                  <span className="absolute -top-0.5 right-1 inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 text-[10px] font-bold rounded-full bg-pink-500 text-white border-2 border-[#0b0613]">
                    {badge > 9 ? "9+" : badge}
                  </span>
                )}
              </Link>
            );
          })}

          {/* Sliding underline accent — translates between active tabs */}
          <span
            aria-hidden
            className="pointer-events-none absolute bottom-1 h-[1.5px] w-4 rounded-full transition-all duration-300 ease-out"
            style={{
              backgroundColor: PINK,
              transform: `translateX(${indicator.left}px)`,
              opacity: indicator.visible ? 1 : 0,
              boxShadow: `0 0 8px ${PINK}80`,
            }}
          />
        </div>
      </div>
    </nav>
  );
}

function HomeIcon({ active }: { active?: boolean }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill={active ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="transition-all duration-200 ease-out"
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function DiscoverIcon({ active }: { active?: boolean }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="transition-all duration-200 ease-out"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        fill={active ? "currentColor" : "none"}
        fillOpacity={active ? 0.15 : 0}
      />
      <polygon
        points="16 8 14 14 8 16 10 10 16 8"
        fill={active ? "currentColor" : "none"}
      />
    </svg>
  );
}

function BookOpenIcon({ active }: { active?: boolean }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="transition-all duration-200 ease-out"
    >
      {/* Two open pages */}
      <path
        d="M2 5.5C2 5.22 2.22 5 2.5 5H9a3 3 0 0 1 3 3v12a2 2 0 0 0-2-2H2.5a.5.5 0 0 1-.5-.5z"
        fill={active ? "currentColor" : "none"}
        fillOpacity={active ? 0.15 : 0}
      />
      <path
        d="M22 5.5a.5.5 0 0 0-.5-.5H15a3 3 0 0 0-3 3v12a2 2 0 0 1 2-2h7.5a.5.5 0 0 0 .5-.5z"
        fill={active ? "currentColor" : "none"}
        fillOpacity={active ? 0.15 : 0}
      />
    </svg>
  );
}

function VotesIcon({ active }: { active?: boolean }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="transition-all duration-200 ease-out"
    >
      <path d="M9 12l2 2 4-4" />
      <path
        d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c2.39 0 4.68.94 6.36 2.64"
        fill={active ? "currentColor" : "none"}
        fillOpacity={active ? 0.15 : 0}
      />
    </svg>
  );
}

function MeIcon({ active }: { active?: boolean }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="transition-all duration-200 ease-out"
    >
      <circle
        cx="12"
        cy="8"
        r="4"
        fill={active ? "currentColor" : "none"}
        fillOpacity={active ? 0.2 : 0}
      />
      <path
        d="M4 21c0-4.42 3.58-8 8-8s8 3.58 8 8"
        fill={active ? "currentColor" : "none"}
        fillOpacity={active ? 0.12 : 0}
      />
    </svg>
  );
}
