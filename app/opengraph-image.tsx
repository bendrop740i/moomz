import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "moomz — quick vibe check";
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
          padding: "80px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -160,
            left: -120,
            width: 560,
            height: 560,
            background: "#ff3d8b",
            filter: "blur(110px)",
            borderRadius: 9999,
            opacity: 0.75,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -160,
            right: -120,
            width: 560,
            height: 560,
            background: "#7c3aed",
            filter: "blur(110px)",
            borderRadius: 9999,
            opacity: 0.75,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 220,
            left: 380,
            width: 380,
            height: 380,
            background: "#f59e0b",
            filter: "blur(120px)",
            borderRadius: 9999,
            opacity: 0.5,
            display: "flex",
          }}
        />

        <div
          style={{
            fontSize: 200,
            fontWeight: 800,
            letterSpacing: -8,
            background: "linear-gradient(135deg, #ffffff 0%, #ffb3d1 50%, #ff6ba8 100%)",
            backgroundClip: "text",
            color: "transparent",
            display: "flex",
            zIndex: 1,
          }}
        >
          moomz
        </div>
        <div
          style={{
            fontSize: 40,
            color: "rgba(255,255,255,0.75)",
            marginTop: 12,
            display: "flex",
            zIndex: 1,
            textAlign: "center",
          }}
        >
          quick vibe check · partage le lien
        </div>
        <div
          style={{
            display: "flex",
            gap: 28,
            marginTop: 40,
            fontSize: 48,
            zIndex: 1,
          }}
        >
          <span>🔥</span>
          <span>💖</span>
          <span>✨</span>
          <span>👀</span>
          <span>🌶️</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
