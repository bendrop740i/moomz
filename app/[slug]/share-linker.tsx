"use client";

import { useState } from "react";

export default function ShareLinker({
  username,
  displayName,
}: {
  username: string;
  displayName: string | null;
}) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = `https://moomz.com/${username}`;
    const text = `${displayName ?? `@${username}`} sur moomz — pose-moi une question anonyme ou check mes vibes 👀`;

    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title: `${displayName ?? `@${username}`} — moomz`, text, url });
        return;
      } catch {
        // user cancelled — fall through to copy
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      window.prompt("Copie ton lien :", url);
    }
  };

  return (
    <button
      type="button"
      onClick={handleShare}
      aria-label="Partager mon linker"
      className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 backdrop-blur px-3 py-1.5 text-xs font-semibold flex items-center gap-1.5 transition active:scale-95 shadow-lg"
    >
      {copied ? (
        <>
          <span>✓</span>
          <span>Copié</span>
        </>
      ) : (
        <>
          <span aria-hidden>↗</span>
          <span>Partager</span>
        </>
      )}
    </button>
  );
}
