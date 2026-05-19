"use client";

import { useMemo, useState } from "react";
import { COUNTRY_PINS } from "@/lib/countries";

// Equirectangular projection cropped lat ∈ [-60, +75] (135°), lon ∈ [-180, +180]
// — drops the empty Antarctic + most empty Arctic so the map feels balanced
// inside a slim section. Aspect ratio 360:135 = 2.67:1.
const VIEW_W = 360;
const VIEW_H = 135;
const LAT_TOP = 75;
const LAT_BOTTOM = -60;
const LAT_RANGE = LAT_TOP - LAT_BOTTOM; // 135

function project(lat: number, lon: number): { x: number; y: number } {
  const x = lon + 180;
  const y = ((LAT_TOP - lat) / LAT_RANGE) * VIEW_H;
  return { x, y };
}

export type WorldVibesProps = {
  /** Votes aggregated by ISO-2 country in the last 24h. */
  data: Array<{ cc: string; votes: number }>;
  /** Section label, already translated by the caller. */
  title: string;
  /** Plural label used in the summary ("votes"). */
  votesLabel: string;
  /** Plural label used in the summary ("countries"). */
  countriesLabel: string;
  /** Empty state message. */
  emptyLabel: string;
};

export default function WorldVibes({
  data,
  title,
  votesLabel,
  countriesLabel,
  emptyLabel,
}: WorldVibesProps) {
  const [hover, setHover] = useState<{
    cc: string;
    name: string;
    votes: number;
    x: number;
    y: number;
  } | null>(null);

  const map = useMemo(() => {
    const m = new Map<string, number>();
    for (const row of data) m.set(row.cc, row.votes);
    return m;
  }, [data]);

  const totalVotes = useMemo(
    () => data.reduce((a, b) => a + b.votes, 0),
    [data],
  );
  const activeCount = data.length;
  const maxVotes = useMemo(
    () => data.reduce((a, b) => Math.max(a, b.votes), 0),
    [data],
  );

  // r = 0.9 (idle pin) → up to ~4.5 (hottest country). Square-root scale so
  // smaller countries still register on the map.
  const radiusFor = (v: number) => {
    if (v <= 0) return 0.9;
    if (maxVotes <= 1) return 2.2;
    const t = Math.sqrt(v) / Math.sqrt(maxVotes);
    return 1.4 + t * 3.1;
  };

  return (
    <section className="rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-md px-4 py-5 sm:px-5 sm:py-6 overflow-hidden">
      <div className="flex items-end justify-between gap-3 mb-3">
        <h2 className="text-sm uppercase tracking-widest text-white/40 font-semibold flex items-center gap-2">
          <span className="text-base">🌍</span>
          <span>{title}</span>
        </h2>
        <div className="text-[10px] sm:text-xs text-white/40 text-right leading-tight">
          {activeCount > 0 ? (
            <>
              <span className="text-white/80 font-semibold">{totalVotes.toLocaleString()}</span>{" "}
              {votesLabel}
              <br />
              <span className="text-white/60">
                {activeCount} {countriesLabel}
              </span>
            </>
          ) : (
            <span>{emptyLabel}</span>
          )}
        </div>
      </div>

      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a1233] via-[#0f0a24] to-[#1c0e2c]">
        {/* Soft glow vignette behind the dots */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 55%, rgba(255,61,139,0.10), transparent 70%), radial-gradient(ellipse 50% 50% at 30% 30%, rgba(167,139,250,0.12), transparent 70%)",
          }}
        />

        <svg
          viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
          className="block w-full h-auto select-none"
          role="img"
          aria-label={title}
        >
          {/* Faint latitude rings for "globe" feel — equator + tropics */}
          <g stroke="rgba(255,255,255,0.05)" strokeWidth="0.3" fill="none">
            <line x1="0" y1={project(0, 0).y} x2={VIEW_W} y2={project(0, 0).y} />
            <line
              x1="0"
              y1={project(23.5, 0).y}
              x2={VIEW_W}
              y2={project(23.5, 0).y}
              strokeDasharray="1 2"
            />
            <line
              x1="0"
              y1={project(-23.5, 0).y}
              x2={VIEW_W}
              y2={project(-23.5, 0).y}
              strokeDasharray="1 2"
            />
          </g>

          <defs>
            <radialGradient id="moomzPinGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ff3d8b" stopOpacity="0.95" />
              <stop offset="60%" stopColor="#a78bfa" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Pins */}
          {COUNTRY_PINS.map((p) => {
            const { x, y } = project(p.lat, p.lon);
            const v = map.get(p.cc) ?? 0;
            const active = v > 0;
            const r = radiusFor(v);
            return (
              <g
                key={p.cc}
                onMouseEnter={() =>
                  setHover({ cc: p.cc, name: p.name, votes: v, x, y })
                }
                onMouseLeave={() => setHover(null)}
                onTouchStart={() =>
                  setHover({ cc: p.cc, name: p.name, votes: v, x, y })
                }
                style={{ cursor: active ? "pointer" : "default" }}
              >
                {active && (
                  <>
                    {/* Soft glow halo (animated pulse) */}
                    <circle
                      cx={x}
                      cy={y}
                      r={r * 2.6}
                      fill="url(#moomzPinGlow)"
                      opacity="0.55"
                    >
                      <animate
                        attributeName="r"
                        values={`${r * 2.2};${r * 3.0};${r * 2.2}`}
                        dur="2.8s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        values="0.35;0.65;0.35"
                        dur="2.8s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <circle
                      cx={x}
                      cy={y}
                      r={r}
                      fill="#ff3d8b"
                      stroke="white"
                      strokeWidth="0.25"
                      strokeOpacity="0.6"
                    />
                  </>
                )}
                {!active && (
                  <circle
                    cx={x}
                    cy={y}
                    r={r}
                    fill="rgba(255,255,255,0.18)"
                  />
                )}
                {/* Large invisible hit area for hover/tap */}
                <circle
                  cx={x}
                  cy={y}
                  r={Math.max(3.2, r * 1.8)}
                  fill="transparent"
                />
              </g>
            );
          })}
        </svg>

        {hover && (
          <div
            className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-full rounded-lg bg-black/85 backdrop-blur-sm border border-white/15 px-2 py-1 text-[11px] leading-tight whitespace-nowrap shadow-lg"
            style={{
              left: `${(hover.x / VIEW_W) * 100}%`,
              top: `${(hover.y / VIEW_H) * 100}%`,
              marginTop: -8,
            }}
          >
            <div className="font-semibold text-white">{hover.name}</div>
            <div className="text-white/60">
              {hover.votes > 0 ? (
                <>
                  <span className="text-pink-300 font-semibold">
                    {hover.votes.toLocaleString()}
                  </span>{" "}
                  {votesLabel}
                </>
              ) : (
                <span className="opacity-60">—</span>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
