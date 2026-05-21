import { ImageResponse } from "next/og";
import { getSupabase, type Poll } from "@/lib/supabase";
import { getProfileByUsername } from "@/lib/profile";
import { paletteFor } from "@/lib/palette";

export const runtime = "edge";
export const alt = "moomz — vibe check";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const EMOJIS = ["🔥", "💖", "✨", "👀", "🌶️", "😭"];

export default async function OG({ params }: { params: { slug: string } }) {
  const supabase = getSupabase();
  const handle = params.slug;

  if (/^[a-z0-9_]{3,20}$/.test(handle)) {
    const profile = await getProfileByUsername(handle);
    if (profile) {
      const { count: pollCount } = await supabase
        .from("polls")
        .select("id", { count: "exact", head: true })
        .eq("profile_id", profile.id);
      const { data: stats } = await supabase
        .from("profiles_public")
        .select("total_points,top_streak")
        .eq("id", profile.id)
        .maybeSingle<{ total_points: number | null; top_streak: number | null }>();

      return renderProfileOG({
        username: profile.username,
        displayName: profile.display_name,
        bio: profile.bio,
        avatarEmoji: profile.avatar_emoji,
        pollCount: pollCount ?? 0,
        points: stats?.total_points ?? 0,
        topStreak: stats?.top_streak ?? 0,
        palette: paletteFor(profile.username),
      });
    }
  }

  const { data: poll } = await supabase
    .from("polls")
    .select("question, options, slug")
    .eq("slug", handle)
    .maybeSingle<Pick<Poll, "question" | "options" | "slug">>();

  const question = poll?.question ?? "Create your vibe check";
  const options = poll?.options ?? ["", ""];
  const slug = poll?.slug ?? handle;
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
                + {options.length - 4} more
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
          👉 Vote in 1 tap
        </div>
      </div>
    ),
    { ...size },
  );
}

function renderProfileOG(p: {
  username: string;
  displayName: string | null;
  bio: string | null;
  avatarEmoji: string;
  pollCount: number;
  points: number;
  topStreak: number;
  palette: { c1: string; c2: string; c3: string };
}) {
  const headline = p.displayName ?? `@${p.username}`;
  const sub = p.displayName ? `@${p.username}` : null;

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
            top: -180,
            left: -140,
            width: 540,
            height: 540,
            background: p.palette.c1,
            filter: "blur(110px)",
            borderRadius: 9999,
            opacity: 0.75,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -220,
            right: -120,
            width: 600,
            height: 600,
            background: p.palette.c2,
            filter: "blur(110px)",
            borderRadius: 9999,
            opacity: 0.7,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 100,
            right: 180,
            width: 380,
            height: 380,
            background: p.palette.c3,
            filter: "blur(120px)",
            borderRadius: 9999,
            opacity: 0.5,
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
            moomz.com/{p.username}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            gap: 24,
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 220,
              height: 220,
              borderRadius: 9999,
              background: `linear-gradient(135deg, ${p.palette.c1}, ${p.palette.c2})`,
              boxShadow: `0 30px 80px ${p.palette.c1}80`,
              fontSize: 130,
            }}
          >
            {p.avatarEmoji}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 6,
            }}
          >
            <div
              style={{
                fontSize: 80,
                fontWeight: 800,
                letterSpacing: -2,
                lineHeight: 1,
                display: "flex",
              }}
            >
              {headline}
            </div>
            {sub && (
              <div
                style={{
                  fontSize: 32,
                  color: "rgba(255,255,255,0.55)",
                  display: "flex",
                }}
              >
                {sub}
              </div>
            )}
          </div>

          {p.bio && (
            <div
              style={{
                fontSize: 28,
                color: "rgba(255,255,255,0.78)",
                maxWidth: 900,
                textAlign: "center",
                lineHeight: 1.3,
                display: "flex",
              }}
            >
              {p.bio.length > 110 ? p.bio.slice(0, 107) + "…" : p.bio}
            </div>
          )}

          <div
            style={{
              display: "flex",
              gap: 14,
              marginTop: 12,
            }}
          >
            <Stat label="moomz" value={p.pollCount} />
            <Stat label="pts" value={p.points} />
            <Stat label="streak" value={p.topStreak} icon="🔥" />
          </div>
        </div>

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
              fontSize: 26,
              color: "rgba(255,255,255,0.55)",
              display: "flex",
            }}
          >
            ✨ Profile linker + anonymous vibe check
          </div>
          <div
            style={{
              fontSize: 30,
              fontWeight: 700,
              color: "rgba(255,255,255,0.9)",
              display: "flex",
            }}
          >
            Create yours →
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}

function Stat({ label, value, icon }: { label: string; value: number; icon?: string }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "rgba(255,255,255,0.08)",
        border: "2px solid rgba(255,255,255,0.14)",
        borderRadius: 22,
        padding: "16px 28px",
        minWidth: 140,
      }}
    >
      <div
        style={{
          fontSize: 44,
          fontWeight: 800,
          color: "#ffb3d1",
          display: "flex",
          gap: 6,
        }}
      >
        {icon && <span>{icon}</span>}
        <span>{value.toLocaleString()}</span>
      </div>
      <div
        style={{
          fontSize: 18,
          textTransform: "uppercase",
          letterSpacing: 2,
          color: "rgba(255,255,255,0.5)",
          display: "flex",
        }}
      >
        {label}
      </div>
    </div>
  );
}
