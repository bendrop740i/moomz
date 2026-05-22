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

// Two flat tabs on each side of the elevated center Create button. `/` is the
// immersive feed itself (Home + Discover merged); the second tab is Explore —
// the browse-everything surface.
const LEFT: TabItem[] = [
  { href: "/", labelKey: "nav.home", fallbackLabel: "Home", icon: HomeIcon },
  { href: "/explore", labelKey: "nav.explore", fallbackLabel: "Explore", icon: ExploreIcon },
];
const RIGHT: TabItem[] = [
  { href: "/play", labelKey: "nav.play", fallbackLabel: "Play", icon: PlayIcon },
  { href: "/me", labelKey: "nav.me", fallbackLabel: "Profile", icon: MeIcon, badge: true },
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
      : href === "/explore"
        ? // Explore is a SEO route — it lives at /{locale}/explore after the
          // middleware rewrite, so match the segment anywhere in the path.
          (pathname?.split("/").includes("explore") ?? false)
        : pathname === href || (pathname?.startsWith(href + "/") ?? false);

  // Scroll-hide: slide off-screen on scroll-down, reappear on scroll-up.
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

  // One combined badge on the Profile tab: pending ASK questions + unseen votes
  // on the user's own polls. The badge depends on cookies + visibility, never on
  // the route — so it's wired once on mount (not re-fired on every navigation).
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
  }, []);

  const labelFor = (item: TabItem) => {
    const tr = t(item.labelKey);
    return tr === item.labelKey ? item.fallbackLabel : tr;
  };

  const createActive = isActive("/create");
  const createTr = t("nav.create");
  const createLabel = createTr === "nav.create" ? "Create" : createTr;

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed inset-x-0 bottom-0 z-40 pb-[env(safe-area-inset-bottom)] transition-transform duration-300 ease-out will-change-transform ${
        hidden ? "translate-y-[150%]" : "translate-y-0"
      }`}
    >
      <div className="mx-auto max-w-md px-3 pb-2.5">
        <div className="relative flex items-end justify-around rounded-[26px] border border-white/10 bg-[#150b28]/90 px-1.5 pb-1.5 pt-1.5 shadow-[0_14px_44px_-10px_rgba(0,0,0,0.85)] backdrop-blur-2xl">
          {/* Top sheen — a hairline highlight so the bar reads as a lifted panel */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
          />
          {/* Faint pink ambient glow bleeding from under the bar */}
          <span
            aria-hidden
            className="pointer-events-none absolute -bottom-3 left-1/2 h-6 w-2/3 -translate-x-1/2 rounded-full bg-pink-500/20 blur-2xl"
          />

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
            className="group relative -mt-8 flex w-[20%] shrink-0 flex-col items-center"
          >
            <span className="relative">
              {/* Breathing glow halo behind the button */}
              <span
                aria-hidden
                className="nav-fab-glow absolute -inset-2.5 rounded-full bg-pink-500/45 blur-lg"
              />
              <span
                className={`relative flex h-[60px] w-[60px] items-center justify-center rounded-full border-4 border-[#0b0613] bg-gradient-to-br from-pink-500 via-pink-500 to-purple-600 shadow-[0_8px_22px_-4px_rgba(255,61,139,0.7)] transition-transform duration-200 ease-out group-hover:scale-105 group-active:scale-90 ${
                  createActive ? "ring-2 ring-pink-300/70 ring-offset-2 ring-offset-[#150b28]" : ""
                }`}
              >
                {/* Inner top sheen — gives the button a glossy cap */}
                <span
                  aria-hidden
                  className="absolute inset-x-1.5 top-1.5 h-1/3 rounded-full bg-gradient-to-b from-white/40 to-transparent"
                />
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="3"
                  strokeLinecap="round"
                  aria-hidden
                  className="relative drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]"
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </span>
            </span>
            <span
              className={`mt-1 text-[10px] font-bold tracking-wide transition-colors duration-200 ${
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
      className="group relative flex flex-1 flex-col items-center justify-end gap-1 pb-0.5 pt-1"
    >
      <span className="relative flex h-9 w-[3.25rem] items-center justify-center">
        {/* Active indicator — a soft gradient pill that fades in behind the icon */}
        <span
          aria-hidden
          className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-500/35 to-purple-600/20 shadow-[0_4px_16px_-5px_rgba(255,61,139,0.65)] transition-opacity duration-300 ${
            active ? "border border-white/10 opacity-100" : "opacity-0"
          }`}
        />
        <span
          className={`relative transition-all duration-200 ease-out ${
            active
              ? "scale-105 text-white drop-shadow-[0_0_7px_rgba(255,61,139,0.7)]"
              : "text-white/45 group-hover:text-white/70"
          }`}
        >
          <Icon active={active} />
        </span>
        {badge !== null && badge > 0 && (
          <span className="absolute -right-1.5 -top-1.5 inline-flex h-[19px] min-w-[19px] items-center justify-center rounded-full border-2 border-[#150b28] bg-gradient-to-br from-pink-500 to-rose-500 px-1 text-[10px] font-extrabold leading-none text-white shadow-sm">
            {badge > 9 ? "9+" : badge}
          </span>
        )}
      </span>
      <span
        className={`text-[10px] font-semibold transition-colors duration-200 ${
          active ? "text-white" : "text-white/45 group-hover:text-white/65"
        }`}
      >
        {label}
      </span>
    </Link>
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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9.2l9-6.6 9 6.6V20a1.8 1.8 0 0 1-1.8 1.8H4.8A1.8 1.8 0 0 1 3 20z" />
      <path d="M9.2 21.6v-7.2h5.6v7.2" fill={active ? "#150b28" : "none"} />
    </svg>
  );
}

function ExploreIcon({ active }: { active?: boolean }) {
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
    >
      <circle
        cx="12"
        cy="12"
        r="9.2"
        fill={active ? "currentColor" : "none"}
        fillOpacity={active ? 0.16 : 0}
      />
      <polygon
        points="15.8 8.2 13.6 13.6 8.2 15.8 10.4 10.4 15.8 8.2"
        fill={active ? "currentColor" : "none"}
      />
    </svg>
  );
}

function PlayIcon({ active }: { active?: boolean }) {
  // Game controller — the Play tab is the gamification + coin-economy hub.
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
    >
      <rect
        x="2"
        y="7"
        width="20"
        height="11"
        rx="5.5"
        fill={active ? "currentColor" : "none"}
        fillOpacity={active ? 0.16 : 0}
      />
      <line x1="7" y1="11" x2="7" y2="14.5" />
      <line x1="5.25" y1="12.75" x2="8.75" y2="12.75" />
      <circle cx="15.75" cy="11.75" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="18.4" cy="14.25" r="1.2" fill="currentColor" stroke="none" />
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
    >
      <circle
        cx="12"
        cy="8"
        r="4"
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
