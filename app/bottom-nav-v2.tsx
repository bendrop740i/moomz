"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useT } from "./locale-context";

type TabItem = {
  href: string;
  labelKey: string;
  fallbackLabel: string;
  icon: (props: { active?: boolean }) => JSX.Element;
  badge?: boolean;
};

// Two flat tabs on each side of the elevated center Create button.
const LEFT: TabItem[] = [
  { href: "/", labelKey: "nav.home", fallbackLabel: "Home", icon: HomeIcon },
  { href: "/discover", labelKey: "nav.discover", fallbackLabel: "Discover", icon: DiscoverIcon },
];
const RIGHT: TabItem[] = [
  { href: "/explore", labelKey: "nav.explore", fallbackLabel: "Explore", icon: ExploreIcon },
  { href: "/me", labelKey: "nav.me", fallbackLabel: "Profil", icon: MeIcon, badge: true },
];

export default function BottomNavV2() {
  const pathname = usePathname();
  const t = useT();
  const [badge, setBadge] = useState<number | null>(null);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname?.startsWith(href + "/");

  // Scroll-hide: translate off-screen on scroll-down, reappear on scroll-up.
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

  // Skip network work when the tab is hidden or the device is offline.
  const canFetch = () => {
    if (typeof document === "undefined") return false;
    if (document.visibilityState !== "visible") return false;
    if (typeof navigator !== "undefined" && navigator.onLine === false) return false;
    return true;
  };

  // One combined badge on the Profil tab: pending ASK questions +
  // unseen votes on the user's own polls.
  useEffect(() => {
    let cancelled = false;

    const readCreatedSlugs = () => {
      const m = document.cookie.match(/(?:^|;\s*)moomz_created_slugs=([^;]+)/);
      if (!m) return [] as string[];
      return decodeURIComponent(m[1]).split(",").filter(Boolean).slice(0, 20);
    };

    const compute = async () => {
      if (!canFetch()) return;
      let total = 0;
      try {
        const res = await fetch("/api/ask-pending", { cache: "no-store" });
        if (res.ok) {
          const data: { count: number } = await res.json();
          if (data.count > 0) total += data.count;
        }
      } catch {}
      const slugs = readCreatedSlugs();
      if (slugs.length > 0) {
        try {
          const res = await fetch(
            `/api/polls-stats?slugs=${encodeURIComponent(slugs.join(","))}`,
            { cache: "no-store" },
          );
          if (res.ok) {
            const rows: { slug: string; vote_count: number }[] = await res.json();
            for (const row of rows) {
              const sm = document.cookie.match(
                new RegExp(`(?:^|;\\s*)moomz_seen_${row.slug}=([^;]+)`),
              );
              const seen = sm ? Number(sm[1]) : 0;
              total += Math.max(0, row.vote_count - seen);
            }
          }
        } catch {}
      }
      if (!cancelled) setBadge(total > 0 ? total : null);
    };

    compute();
    const id = setInterval(compute, 60_000);
    const onVisible = () => {
      if (document.visibilityState === "visible") compute();
    };
    document.addEventListener("visibilitychange", onVisible);
    window.addEventListener("focus", onVisible);
    window.addEventListener("online", compute);
    return () => {
      cancelled = true;
      clearInterval(id);
      document.removeEventListener("visibilitychange", onVisible);
      window.removeEventListener("focus", onVisible);
      window.removeEventListener("online", compute);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const labelFor = (item: TabItem) => {
    const tr = t(item.labelKey);
    return tr === item.labelKey ? item.fallbackLabel : tr;
  };

  const createActive = isActive("/create");
  const createTr = t("nav.create");
  const createLabel = createTr === "nav.create" ? "Create" : createTr;

  return (
    <nav
      aria-label="Navigation principale"
      className={`fixed bottom-0 inset-x-0 z-40 pb-[env(safe-area-inset-bottom)] transition-transform duration-300 will-change-transform ${
        hidden ? "translate-y-[140%]" : "translate-y-0"
      }`}
    >
      <div className="mx-auto max-w-xl px-4 pb-3">
        <div className="relative glass rounded-2xl px-2 py-2 flex items-end justify-around shadow-2xl shadow-black/40">
          {LEFT.map((item) => (
            <Tab
              key={item.href}
              item={item}
              active={isActive(item.href)}
              label={labelFor(item)}
              badge={null}
            />
          ))}

          {/* Elevated center Create button */}
          <Link
            href="/create"
            aria-label={createLabel}
            aria-current={createActive ? "page" : undefined}
            className="group relative flex flex-col items-center justify-center -mt-7"
          >
            <span
              className={`flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 shadow-lg shadow-pink-500/40 border-4 border-[#0b0613] transition-transform duration-200 ease-out group-hover:scale-105 group-active:scale-90 ${
                createActive ? "ring-2 ring-pink-300/70" : ""
              }`}
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2.6"
                strokeLinecap="round"
                aria-hidden
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </span>
            <span
              className={`text-[10px] font-semibold mt-0.5 ${
                createActive ? "text-white" : "text-white/55"
              }`}
            >
              {createLabel}
            </span>
          </Link>

          {RIGHT.map((item) => (
            <Tab
              key={item.href}
              item={item}
              active={isActive(item.href)}
              label={labelFor(item)}
              badge={item.badge ? badge : null}
            />
          ))}
        </div>
      </div>
    </nav>
  );
}

function Tab({
  item,
  active,
  label,
  badge,
}: {
  item: TabItem;
  active: boolean;
  label: string;
  badge: number | null;
}) {
  const Icon = item.icon;
  return (
    <Link
      href={item.href}
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
      {active && (
        <span
          aria-hidden
          className="absolute -bottom-0.5 h-[2px] w-5 rounded-full"
          style={{ backgroundColor: "#ff3d8b", boxShadow: "0 0 8px #ff3d8b80" }}
        />
      )}
    </Link>
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

function ExploreIcon({ active }: { active?: boolean }) {
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
      <rect x="3" y="3" width="7.5" height="7.5" rx="2.2" fillOpacity={active ? 0.9 : 0} />
      <rect x="13.5" y="3" width="7.5" height="7.5" rx="2.2" fillOpacity={active ? 0.9 : 0} />
      <rect x="3" y="13.5" width="7.5" height="7.5" rx="2.2" fillOpacity={active ? 0.9 : 0} />
      <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="2.2" fillOpacity={active ? 0.9 : 0} />
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
