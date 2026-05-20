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

export default function BottomNavV2() {
  const pathname = usePathname();
  const t = useT();
  const [pollsBadge, setPollsBadge] = useState<number | null>(null);
  const [askBadge, setAskBadge] = useState<number | null>(null);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  // Refs for measuring the active-tab gradient pill position
  const containerRef = useRef<HTMLDivElement | null>(null);
  const tabRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  const [pill, setPill] = useState<{ left: number; width: number; visible: boolean }>({
    left: 0,
    width: 0,
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

  // Position the gradient pill behind the active tab
  useLayoutEffect(() => {
    const measure = () => {
      const container = containerRef.current;
      const tab = activeIndex >= 0 ? tabRefs.current[activeIndex] : null;
      if (!container || !tab) {
        setPill((prev) => ({ ...prev, visible: false }));
        return;
      }
      const containerRect = container.getBoundingClientRect();
      const tabRect = tab.getBoundingClientRect();
      setPill({
        left: tabRect.left - containerRect.left,
        width: tabRect.width,
        visible: true,
      });
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [activeIndex, pathname]);

  return (
    <nav
      aria-label="Navigation principale"
      className={`fixed bottom-0 inset-x-0 z-40 pb-[env(safe-area-inset-bottom)] transition-transform duration-300 will-change-transform ${
        hidden ? "translate-y-[140%]" : "translate-y-0"
      }`}
    >
      <style>{`
        @keyframes moomz-nav-pop {
          0% { transform: scale(0.78); }
          55% { transform: scale(1.14); }
          100% { transform: scale(1); }
        }
        @keyframes moomz-badge-in {
          0% { transform: scale(0); }
          60% { transform: scale(1.25); }
          100% { transform: scale(1); }
        }
        .moomz-nav-pop { animation: moomz-nav-pop 0.4s cubic-bezier(0.34,1.56,0.64,1); }
        .moomz-badge-in { animation: moomz-badge-in 0.35s cubic-bezier(0.34,1.56,0.64,1); }
        @media (prefers-reduced-motion: reduce) {
          .moomz-nav-pop, .moomz-badge-in { animation: none; }
        }
      `}</style>
      {/* mr-16 leaves a clear lane for the music mini-player pinned at right-3 */}
      <div className="mx-auto max-w-xl px-3 pb-2.5 sm:mr-0 mr-14">
        <div
          ref={containerRef}
          className="relative glass rounded-[26px] px-1.5 py-1.5 flex items-stretch justify-around shadow-[0_8px_32px_-6px_rgba(0,0,0,0.6)] ring-1 ring-white/10"
        >
          {/* Sliding gradient pill behind the active tab */}
          <span
            aria-hidden
            className="pointer-events-none absolute top-1.5 bottom-1.5 rounded-[20px] transition-all duration-[350ms]"
            style={{
              left: pill.left,
              width: pill.width,
              opacity: pill.visible ? 1 : 0,
              transitionTimingFunction: "cubic-bezier(0.34,1.3,0.64,1)",
              background:
                "linear-gradient(135deg, rgba(255,61,139,0.30), rgba(168,85,247,0.28) 55%, rgba(255,138,61,0.26))",
              boxShadow:
                "0 0 18px -2px rgba(255,61,139,0.45), inset 0 1px 0 rgba(255,255,255,0.18)",
            }}
          />

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
                className={`group relative z-10 flex flex-1 min-w-[44px] min-h-[52px] flex-col items-center justify-center gap-[3px] rounded-[20px] px-1 py-1.5 transition-colors duration-200 ease-out active:scale-95 ${
                  active ? "text-white" : "text-white/45 hover:text-white/80"
                }`}
              >
                <span
                  key={active ? "on" : "off"}
                  className={`relative flex items-center justify-center transition-transform duration-200 ${
                    active ? "moomz-nav-pop -translate-y-[1px]" : "group-active:scale-90"
                  }`}
                  style={
                    active
                      ? { filter: "drop-shadow(0 2px 6px rgba(255,61,139,0.55))" }
                      : undefined
                  }
                >
                  <Icon active={active} />
                </span>
                <span
                  className={`text-[10px] leading-none tracking-wide transition-all duration-200 ease-out ${
                    active ? "font-bold text-white" : "font-medium text-white/45"
                  }`}
                >
                  {label}
                </span>
                {badge !== null && badge > 0 && (
                  <span
                    className="moomz-badge-in absolute top-0.5 right-[18%] inline-flex items-center justify-center min-w-[17px] h-[17px] px-1 text-[10px] font-extrabold rounded-full text-white border-2 border-[#0b0613]"
                    style={{
                      background: "linear-gradient(135deg, #ff3d8b, #ff8a3d)",
                      boxShadow: "0 0 8px rgba(255,61,139,0.7)",
                    }}
                  >
                    {badge > 9 ? "9+" : badge}
                  </span>
                )}
                {/* glowing dot under the active tab */}
                <span
                  aria-hidden
                  className={`absolute -bottom-[1px] h-1 w-1 rounded-full transition-all duration-300 ${
                    active ? "opacity-100 scale-100" : "opacity-0 scale-0"
                  }`}
                  style={{
                    background: "#ff5fa0",
                    boxShadow: "0 0 6px 1px rgba(255,95,160,0.9)",
                  }}
                />
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
    <svg
      width="23"
      height="23"
      viewBox="0 0 24 24"
      fill={active ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={active ? 1.8 : 2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="transition-all duration-200 ease-out"
    >
      <path d="M3 9.5l9-7 9 7V20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <path
        d="M9 22v-7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v7"
        fill={active ? "rgba(11,6,19,0.85)" : "none"}
        stroke="currentColor"
      />
    </svg>
  );
}

function DiscoverIcon({ active }: { active?: boolean }) {
  return (
    <svg
      width="23"
      height="23"
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
        r="9.5"
        fill={active ? "currentColor" : "none"}
        fillOpacity={active ? 0.16 : 0}
      />
      <path
        d="M15.5 8.5l-2.1 5L8.5 15.5l2.1-5z"
        fill={active ? "currentColor" : "none"}
        strokeLinejoin="round"
      />
      {active && <circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none" />}
    </svg>
  );
}

function BookOpenIcon({ active }: { active?: boolean }) {
  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="transition-all duration-200 ease-out"
    >
      <path
        d="M2 5.5C2 5.22 2.22 5 2.5 5H9a3 3 0 0 1 3 3v12a2 2 0 0 0-2-2H2.5a.5.5 0 0 1-.5-.5z"
        fill={active ? "currentColor" : "none"}
        fillOpacity={active ? 0.18 : 0}
      />
      <path
        d="M22 5.5a.5.5 0 0 0-.5-.5H15a3 3 0 0 0-3 3v12a2 2 0 0 1 2-2h7.5a.5.5 0 0 0 .5-.5z"
        fill={active ? "currentColor" : "none"}
        fillOpacity={active ? 0.18 : 0}
      />
    </svg>
  );
}

function VotesIcon({ active }: { active?: boolean }) {
  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="transition-all duration-200 ease-out"
    >
      <path
        d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c2.39 0 4.68.94 6.36 2.64"
        fill={active ? "currentColor" : "none"}
        fillOpacity={active ? 0.16 : 0}
      />
      <path
        d="M8.5 12l2.5 2.5L20 6"
        stroke="currentColor"
        strokeWidth={active ? 2.4 : 2}
      />
    </svg>
  );
}

function MeIcon({ active }: { active?: boolean }) {
  return (
    <svg
      width="23"
      height="23"
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
        cy="8.2"
        r="3.9"
        fill={active ? "currentColor" : "none"}
        fillOpacity={active ? 0.22 : 0}
      />
      <path
        d="M4 21c0-4.42 3.58-8 8-8s8 3.58 8 8"
        fill={active ? "currentColor" : "none"}
        fillOpacity={active ? 0.14 : 0}
      />
    </svg>
  );
}
