"use client";

import { useEffect, useState } from "react";

type Props = {
  /** IANA timezone identifier. */
  tz: string;
  /** SSR fallback strings rendered on the server. */
  fallbackTime: string;
  fallbackDate: string;
  /** UI labels (already locale-aware). */
  labels: {
    localTime: string;
    today: string;
  };
};

/**
 * Ticking clock for a city detail page. The server prerenders a static
 * fallback so the page never shows blank; once mounted we update every
 * second using Intl.DateTimeFormat in the city's IANA timezone.
 */
export default function LiveClock({ tz, fallbackTime, fallbackDate, labels }: Props) {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const timeFmt = (d: Date) =>
    new Intl.DateTimeFormat("en-GB", {
      timeZone: tz,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    }).format(d);

  const dateFmt = (d: Date) =>
    new Intl.DateTimeFormat("fr-FR", {
      timeZone: tz,
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(d);

  const time = now ? timeFmt(now) : fallbackTime;
  const date = now ? dateFmt(now) : fallbackDate;

  return (
    <div
      className="glass rounded-3xl p-6 sm:p-10 text-center space-y-3"
      aria-live="polite"
      aria-atomic="true"
    >
      <div className="text-xs uppercase tracking-[0.2em] text-white/40 font-semibold">
        {labels.localTime}
      </div>
      <div
        className="font-display text-6xl sm:text-7xl tabular-nums bg-gradient-to-br from-white via-pink-200 to-pink-400 bg-clip-text text-transparent leading-none"
        suppressHydrationWarning
      >
        {time}
      </div>
      <div className="text-white/55 text-sm sm:text-base capitalize" suppressHydrationWarning>
        {date}
      </div>
    </div>
  );
}
