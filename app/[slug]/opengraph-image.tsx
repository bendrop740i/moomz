import { ImageResponse } from "next/og";
import { getSupabase, type Poll } from "@/lib/supabase";
import { paletteFor } from "@/lib/palette";

export const runtime = "edge";
export const alt = "moomz — vibe check";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const EMOJIS = ["🔥", "💖", "✨", "👀", "🌶️", "😭"];

export default async function OG({ params }: { params: { slug: string } }) {
  const supabase = getSupabase();
  const { data: poll } = await supabase
    .from("polls")
    .select("question, options, slug")
    .eq("slug", params.slug)
    .maybeSingle<Pick<Poll, "question" | "options" | "slug">>();

  const question = poll?.question ?? "Crée ton vibe check";
  const options = poll?.options ?? ["", ""];
  const slug = poll?.slug ?? params.slug;
  const pal = paletteFor(slug);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0b0613",
          display: "flex",
          flexDirection: "column",
          padding: "60px 70px",
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
            position: "absolute",
            top: 120,
            right: 200,
            width: 360,
            height: 360,
            background: pal.c3,
            filter: "blur(110px)",
            borderRadius: 9999,
            opacity: 0.45,
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
              fontSize: 52,
              fontWeight: 800,
              letterSpacing: -2,
              background: "linear-gradient(135deg, #ffffff 0%, #ffb3d1 60%, #ff6ba8 100%)",
              backgroundClip: "text",
              color: "transparent",
              display: "flex",
            }}
          >
            moomz
          </div>
          <div
            style={{
              fontSize: 26,
              color: "rgba(255,255,255,0.55)",
              display: "flex",
            }}
          >
            moomz.com/{slug}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
            gap: 36,
            zIndex: 1,
          }}
        >
          <div
            style={{
              fontSize: question.length > 60 ? 56 : 72,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -1,
              display: "flex",
              maxWidth: "100%",
            }}
          >
            {question}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {options.slice(0, 4).map((opt, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                  background: "rgba(255,255,255,0.07)",
                  border: "2px solid rgba(255,255,255,0.12)",
                  borderRadius: 22,
                  padding: "18px 28px",
                  fontSize: 34,
                  fontWeight: 500,
                }}
              >
                <span style={{ fontSize: 40, display: "flex" }}>{EMOJIS[i]}</span>
                <span style={{ display: "flex" }}>{opt}</span>
              </div>
            ))}
            {options.length > 4 && (
              <div
                style={{
                  color: "rgba(255,255,255,0.5)",
                  fontSize: 26,
                  paddingLeft: 28,
                  display: "flex",
                }}
              >
                + {options.length - 4} autres
              </div>
            )}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            fontSize: 30,
            fontWeight: 600,
            color: "rgba(255,255,255,0.85)",
            zIndex: 1,
          }}
        >
          👉 Vote en 1 clic
        </div>
      </div>
    ),
    { ...size },
  );
}
