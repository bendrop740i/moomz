"use client";

import { useEffect } from "react";

// Google AdSense display unit. Renders nothing until BOTH env vars are set —
// so this ships dark and the user flips ads on later by adding, in Vercel:
//   NEXT_PUBLIC_ADSENSE_CLIENT  → ca-pub-XXXXXXXXXXXXXXXX
//   NEXT_PUBLIC_ADSENSE_SLOT    → a display ad-unit id from the AdSense panel
// One reusable unit id is fine across every placement. Only mounted on SEO
// content pages (quote / keyword / idea / blog) — never the app surface.

const CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
const SLOT = process.env.NEXT_PUBLIC_ADSENSE_SLOT;

export default function AdSlot({ className }: { className?: string }) {
  useEffect(() => {
    if (!CLIENT || !SLOT) return;
    try {
      // adsbygoogle is injected by the loader script in app/layout.tsx.
      ((window as unknown as { adsbygoogle?: unknown[] }).adsbygoogle =
        (window as unknown as { adsbygoogle?: unknown[] }).adsbygoogle || []).push({});
    } catch {
      // AdSense not ready / blocked — harmless.
    }
  }, []);

  if (!CLIENT || !SLOT) return null;

  return (
    <aside className={`my-6 overflow-hidden ${className ?? ""}`} aria-label="Publicité">
      <div className="text-[10px] uppercase tracking-widest text-white/25 mb-1 text-center">
        pub
      </div>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={CLIENT}
        data-ad-slot={SLOT}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </aside>
  );
}
