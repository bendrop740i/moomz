// Generates public/email-logo.gif — the animated "m" used as the sender
// avatar / header in transactional emails. Re-run after tweaking style.
//
//   node scripts/gen-email-logo.mjs
//
// Output: public/email-logo.gif (~256x256, looped, ~24 frames, ~50ms each)

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { Resvg } from "@resvg/resvg-js";
import gifenc from "gifenc";
const { GIFEncoder, quantize, applyPalette } = gifenc;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.resolve(__dirname, "..", "public");
const outFile = path.join(outDir, "email-logo.gif");

const SIZE = 256;
const FRAMES = 30;
const FRAME_DELAY_MS = 50; // 20fps → ~1.5s loop

function svgFrame(t) {
  // Smooth seamless loop: angle and bounce both use sin(2πt)
  const angle = Math.sin(t * Math.PI * 2) * 7; // -7°…+7°
  const dy = -Math.abs(Math.sin(t * Math.PI * 2)) * 6; // little hop up
  const scale = 1 + Math.sin(t * Math.PI * 2) * 0.03; // breathe ±3%

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${SIZE} ${SIZE}" width="${SIZE}" height="${SIZE}">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#ff3d8b"/>
        <stop offset="65%" stop-color="#7c3aed"/>
        <stop offset="120%" stop-color="#f59e0b"/>
      </linearGradient>
      <radialGradient id="glow" cx="0.3" cy="0.25" r="0.8">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="0.35"/>
        <stop offset="60%" stop-color="#ffffff" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="${SIZE}" height="${SIZE}" rx="56" fill="url(#bg)"/>
    <rect width="${SIZE}" height="${SIZE}" rx="56" fill="url(#glow)"/>
    <g transform="translate(${SIZE / 2}, ${SIZE / 2 + dy}) rotate(${angle}) scale(${scale})">
      <text
        x="0" y="42"
        text-anchor="middle"
        font-family="'Arial Black', 'Helvetica Neue', Helvetica, Arial, sans-serif"
        font-size="190"
        font-weight="900"
        fill="white"
        letter-spacing="-8"
      >m</text>
    </g>
  </svg>`;
}

function buildGif() {
  fs.mkdirSync(outDir, { recursive: true });
  const enc = GIFEncoder();

  for (let i = 0; i < FRAMES; i++) {
    const t = i / FRAMES;
    const svg = svgFrame(t);
    const resvg = new Resvg(svg, {
      fitTo: { mode: "width", value: SIZE },
      font: { loadSystemFonts: true },
    });
    const rendered = resvg.render();
    const rgba = rendered.pixels; // Buffer of RGBA pixels
    const width = rendered.width;
    const height = rendered.height;

    const palette = quantize(rgba, 256, { format: "rgba4444" });
    const index = applyPalette(rgba, palette, "rgba4444");

    enc.writeFrame(index, width, height, {
      palette,
      delay: FRAME_DELAY_MS,
      transparent: false,
    });

    process.stdout.write(`\rframe ${i + 1}/${FRAMES}`);
  }

  enc.finish();
  const bytes = enc.bytes();
  fs.writeFileSync(outFile, Buffer.from(bytes));
  process.stdout.write("\n");
  console.log(`wrote ${outFile} — ${(bytes.length / 1024).toFixed(1)} KB, ${FRAMES} frames`);
}

buildGif();
