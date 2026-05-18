import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0b0613",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -40,
            left: -40,
            width: 160,
            height: 160,
            background: "#ff3d8b",
            filter: "blur(30px)",
            borderRadius: 9999,
            opacity: 0.95,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -40,
            right: -40,
            width: 160,
            height: 160,
            background: "#7c3aed",
            filter: "blur(30px)",
            borderRadius: 9999,
            opacity: 0.85,
            display: "flex",
          }}
        />
        <div
          style={{
            fontSize: 130,
            fontWeight: 800,
            color: "white",
            letterSpacing: -6,
            display: "flex",
            zIndex: 1,
          }}
        >
          m
        </div>
      </div>
    ),
    { ...size },
  );
}
