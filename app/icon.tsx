import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #ff3d8b 0%, #7c3aed 70%, #f59e0b 130%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 44,
          fontWeight: 800,
          color: "white",
          fontFamily: "sans-serif",
          letterSpacing: -2,
        }}
      >
        m
      </div>
    ),
    { ...size },
  );
}
