import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "moomz — crée ton vibe check en 10 sec";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0b0613",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          position: "relative",
          fontFamily: "sans-serif",
          padding: "70px 80px",
          overflow: "hidden",
        }}
      >
        {/* Glow blobs (brand palette) */}
        <div
          style={{
            position: "absolute",
            top: -180,
            left: -140,
            width: 620,
            height: 620,
            background: "#ff3d8b",
            filter: "blur(120px)",
            borderRadius: 9999,
            opacity: 0.75,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -180,
            right: -140,
            width: 620,
            height: 620,
            background: "#7c3aed",
            filter: "blur(120px)",
            borderRadius: 9999,
            opacity: 0.75,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 180,
            left: 420,
            width: 360,
            height: 360,
            background: "#f59e0b",
            filter: "blur(130px)",
            borderRadius: 9999,
            opacity: 0.45,
            display: "flex",
          }}
        />

        {/* Top: wordmark + tagline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            zIndex: 1,
          }}
        >
          <div
            style={{
              fontSize: 188,
              fontWeight: 800,
              letterSpacing: -8,
              lineHeight: 1,
              background:
                "linear-gradient(135deg, #ffffff 0%, #ffb3d1 45%, #ff3d8b 80%, #7c3aed 100%)",
              backgroundClip: "text",
              color: "transparent",
              display: "flex",
            }}
          >
            moomz
          </div>
          <div
            style={{
              fontSize: 38,
              fontWeight: 500,
              color: "rgba(255,255,255,0.85)",
              marginTop: 14,
              display: "flex",
              textAlign: "center",
            }}
          >
            Crée ton vibe check en 10 sec
          </div>
        </div>

        {/* Middle: example poll pills */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
            marginTop: 44,
            alignItems: "center",
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              padding: "18px 32px",
              background: "rgba(255,61,139,0.18)",
              border: "2px solid rgba(255,61,139,0.55)",
              borderRadius: 9999,
              fontSize: 32,
              fontWeight: 600,
              color: "#fff",
            }}
          >
            <span style={{ fontSize: 36, display: "flex" }}>🔥</span>
            <span style={{ display: "flex" }}>Team pizza ou team sushi ?</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              padding: "18px 32px",
              background: "rgba(124,58,237,0.20)",
              border: "2px solid rgba(124,58,237,0.60)",
              borderRadius: 9999,
              fontSize: 32,
              fontWeight: 600,
              color: "#fff",
            }}
          >
            <span style={{ fontSize: 36, display: "flex" }}>💖</span>
            <span style={{ display: "flex" }}>Tu craques pour qui dans le groupe ?</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              padding: "18px 32px",
              background: "rgba(245,158,11,0.18)",
              border: "2px solid rgba(245,158,11,0.55)",
              borderRadius: 9999,
              fontSize: 32,
              fontWeight: 600,
              color: "#fff",
            }}
          >
            <span style={{ fontSize: 36, display: "flex" }}>🌶️</span>
            <span style={{ display: "flex" }}>Plus drama : sa story ou son ex ?</span>
          </div>
        </div>

        {/* Bottom: CTA */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginTop: 44,
            padding: "16px 36px",
            background: "linear-gradient(90deg, #ff3d8b 0%, #7c3aed 100%)",
            borderRadius: 9999,
            fontSize: 36,
            fontWeight: 700,
            color: "#fff",
            letterSpacing: -0.5,
            zIndex: 1,
            boxShadow: "0 0 0 4px rgba(255,255,255,0.08)",
          }}
        >
          <span style={{ display: "flex" }}>✨</span>
          <span style={{ display: "flex" }}>moomz.com</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
