import { ImageResponse } from "next/og";
import { getSupabase, type Poll } from "@/lib/supabase";
import { paletteFor } from "@/lib/palette";
import { REVEAL_COPY } from "@/lib/reveal-copy";
import type { Locale } from "@/lib/i18n";

export const runtime = "edge";

const SIZE = { width: 1200, height: 630 };
const EMOJIS = ["🔥", "💖", "✨", "👀", "🌶️", "😭"];
const LOCALES = ["fr", "en", "es", "it", "pt", "de", "ja", "zh"];

// Personal-verdict share card. A post-vote share links to /{slug}?v=<i>&l=<loc>;
// the poll page points its og:image here so the unfurled preview shows the
// sharer's own result ("🌶️ REBEL · you're in the 12%") — a much sharper hook
// than the neutral poll card when the link lands in a friend's feed.
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug") ?? "";
  const v = Number(searchParams.get("v") ?? "-1");
  const lParam = searchParams.get("l") ?? "en";
  const lang = (LOCALES.includes(lParam) ? lParam : "en") as Locale;

  const supabase = getSupabase();
  const { data: poll } = await supabase
    .from("polls")
    .select("id, question, options, slug")
    .eq("slug", slug)
    .maybeSingle<Pick<Poll, "id" | "question" | "options" | "slug">>();

  const question = poll?.question ?? "Vibe check";
  const options = poll?.options ?? ["", ""];
  const pal = paletteFor(poll?.slug ?? slug);

  // Live vote tally — capped, best-effort (same approach as the poll OG image).
  const counts = options.map(() => 0);
  let total = 0;
  if (poll?.id) {
    try {
      const { data: votes } = await supabase
        .from("votes")
        .select("option_index")
        .eq("poll_id", poll.id)
        .limit(5000);
      for (const row of votes ?? []) {
        const idx = (row as { option_index: number }).option_index;
        if (idx >= 0 && idx < counts.length) {
          counts[idx] += 1;
          total += 1;
        }
      }
    } catch {
      // tally is non-critical
    }
  }

  const safeV = v >= 0 && v < options.length ? v : 0;
  const userCount = counts[safeV] ?? 0;
  const userPct = total > 0 ? Math.round((userCount / total) * 100) : 0;
  const maxCount = counts.length ? Math.max(...counts) : 0;
  const isMajority = total > 0 && userCount === maxCount;
  const isRebel =
    !isMajority && total > 0 && userPct < 100 / Math.max(options.length, 1);
  const rc = REVEAL_COPY[lang] ?? REVEAL_COPY.en;
  const verdict = isRebel
    ? rc.rebel(userPct)
    : isMajority
      ? rc.majority(userPct)
      : rc.split(userPct);
  const accent = isRebel
    ? { bg: "rgba(249,115,22,0.32)", border: "rgba(253,186,116,0.6)", text: "#ffedd5" }
    : isMajority
      ? { bg: "rgba(16,185,129,0.32)", border: "rgba(110,231,183,0.6)", text: "#d1fae5" }
      : { bg: "rgba(255,255,255,0.16)", border: "rgba(255,255,255,0.34)", text: "#ffffff" };

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0b0613",
          display: "flex",
          flexDirection: "column",
          padding: "54px 70px",
          color: "white",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -160,
            left: -160,
            width: 520,
            height: 520,
            background: pal.c1,
            filter: "blur(100px)",
            borderRadius: 9999,
            opacity: 0.7,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -200,
            right: -120,
            width: 560,
            height: 560,
            background: pal.c2,
            filter: "blur(100px)",
            borderRadius: 9999,
            opacity: 0.7,
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            zIndex: 1,
          }}
        >
          <div
            style={{
              fontSize: 48,
              fontWeight: 800,
              letterSpacing: -2,
              background:
                "linear-gradient(135deg, #ffffff 0%, #ffb3d1 60%, #ff6ba8 100%)",
              backgroundClip: "text",
              color: "transparent",
              display: "flex",
            }}
          >
            moomz
          </div>
          <div style={{ fontSize: 24, color: "rgba(255,255,255,0.55)", display: "flex" }}>
            moomz.com/{poll?.slug ?? slug}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
            gap: 26,
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              background: accent.bg,
              border: `3px solid ${accent.border}`,
              color: accent.text,
              fontSize: 46,
              fontWeight: 800,
              padding: "14px 34px",
              borderRadius: 9999,
            }}
          >
            {verdict}
          </div>

          <div
            style={{
              fontSize: question.length > 70 ? 44 : 56,
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: -1,
              display: "flex",
              maxWidth: "100%",
              color: "rgba(255,255,255,0.94)",
            }}
          >
            {question}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {options.slice(0, 4).map((opt, i) => {
              const pct = total > 0 ? Math.round((counts[i] / total) * 100) : 0;
              const mine = i === safeV;
              return (
                <div
                  key={i}
                  style={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 18,
                    overflow: "hidden",
                    background: "rgba(255,255,255,0.07)",
                    border: `2px solid ${
                      mine ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.12)"
                    }`,
                    borderRadius: 20,
                    padding: "14px 26px",
                    fontSize: 30,
                    fontWeight: 500,
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      width: `${pct}%`,
                      display: "flex",
                      background: mine
                        ? "linear-gradient(90deg, rgba(255,107,168,0.6), rgba(168,85,247,0.45))"
                        : "rgba(255,255,255,0.10)",
                    }}
                  />
                  <div style={{ display: "flex", alignItems: "center", gap: 16, zIndex: 1 }}>
                    <span style={{ fontSize: 36, display: "flex" }}>{EMOJIS[i]}</span>
                    <span style={{ display: "flex" }}>{opt}</span>
                    {mine && (
                      <span
                        style={{
                          display: "flex",
                          fontSize: 18,
                          fontWeight: 800,
                          background: "rgba(255,255,255,0.22)",
                          padding: "4px 14px",
                          borderRadius: 9999,
                        }}
                      >
                        YOU
                      </span>
                    )}
                  </div>
                  <span style={{ display: "flex", zIndex: 1, fontWeight: 800, fontSize: 34 }}>
                    {pct}%
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 28,
            fontWeight: 600,
            color: "rgba(255,255,255,0.85)",
            zIndex: 1,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ display: "flex", fontSize: 32 }}>🔥</span>
            <span style={{ display: "flex" }}>
              {total.toLocaleString()} {total === 1 ? "vote" : "votes"}
            </span>
          </div>
          <div style={{ display: "flex" }}>👉 What&apos;s your take?</div>
        </div>
      </div>
    ),
    { ...SIZE },
  );
}
