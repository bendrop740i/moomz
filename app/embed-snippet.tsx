"use client";

import { useState } from "react";

type Props = {
  slug: string;
  label?: string;
  copiedLabel?: string;
};

export default function EmbedSnippet({ slug, label, copiedLabel }: Props) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const snippet = `<iframe src="https://moomz.com/embed/${slug}" width="100%" height="380" frameborder="0" loading="lazy" style="border-radius:16px;max-width:480px;"></iframe>`;

  const openLabel = label ?? "Embed on your site ↘";
  const copiedText = copiedLabel ?? "Copied ✓";

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(snippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  }

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="text-xs text-white/40 hover:text-white border border-white/10 px-2.5 py-1 rounded-full transition-colors"
      >
        {openLabel}
      </button>
    );
  }

  return (
    <div className="flex flex-col gap-2 w-full">
      <textarea
        readOnly
        value={snippet}
        onFocus={(e) => e.currentTarget.select()}
        className="font-mono text-xs text-white/80 w-full h-20 p-3 rounded-xl bg-black/40 border border-white/10 resize-none focus:outline-none focus:border-white/30"
      />
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={handleCopy}
          className="text-xs text-white border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-full transition-colors"
        >
          {copied ? copiedText : "Copy"}
        </button>
        <a
          href={`/embed/${slug}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-white/50 hover:text-white transition-colors"
        >
          Preview →
        </a>
      </div>
    </div>
  );
}
