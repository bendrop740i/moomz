"use client";

import { useState } from "react";
import { useLocale } from "@/app/locale-context";
import type { Locale } from "@/lib/i18n";

type SLCopy = {
  shareText: (displayName: string, username: string) => string;
  ariaLabel: (username: string) => string;
  copied: string;
  share: string;
  promptLabel: string;
  copiedStatus: (username: string) => string;
};

const SL_COPY: Record<Locale, SLCopy> = {
  fr: {
    shareText: (dn, u) => `${dn} sur moomz — pose-moi une question anonyme ou check mes vibes 👀`,
    ariaLabel: (u) => `Partager le linker de @${u}`,
    copied: "Copié",
    share: "Partager",
    promptLabel: "Copie ton lien :",
    copiedStatus: (u) => `Lien du linker de @${u} copié dans le presse-papiers`,
  },
  en: {
    shareText: (dn, u) => `${dn} on moomz — ask me something anonymously or check my vibes 👀`,
    ariaLabel: (u) => `Share @${u}'s profile link`,
    copied: "Copied",
    share: "Share",
    promptLabel: "Copy your link:",
    copiedStatus: (u) => `@${u}'s link copied to clipboard`,
  },
  es: {
    shareText: (dn, u) => `${dn} en moomz — hazme una pregunta anónima o mira mis vibes 👀`,
    ariaLabel: (u) => `Compartir el perfil de @${u}`,
    copied: "Copiado",
    share: "Compartir",
    promptLabel: "Copia tu enlace:",
    copiedStatus: (u) => `Enlace de @${u} copiado al portapapeles`,
  },
  it: {
    shareText: (dn, u) => `${dn} su moomz — fam una domanda anonima o guarda i miei vibe 👀`,
    ariaLabel: (u) => `Condividi il profilo di @${u}`,
    copied: "Copiato",
    share: "Condividi",
    promptLabel: "Copia il tuo link:",
    copiedStatus: (u) => `Link di @${u} copiato negli appunti`,
  },
  pt: {
    shareText: (dn, u) => `${dn} no moomz — faz-me uma pergunta anónima ou vê os meus vibes 👀`,
    ariaLabel: (u) => `Partilhar o perfil de @${u}`,
    copied: "Copiado",
    share: "Partilhar",
    promptLabel: "Copia o teu link:",
    copiedStatus: (u) => `Link de @${u} copiado para a área de transferência`,
  },
  de: {
    shareText: (dn, u) => `${dn} auf moomz — stell mir anonym eine Frage oder check meine Vibes 👀`,
    ariaLabel: (u) => `Profil-Link von @${u} teilen`,
    copied: "Kopiert",
    share: "Teilen",
    promptLabel: "Kopiere deinen Link:",
    copiedStatus: (u) => `Link von @${u} in die Zwischenablage kopiert`,
  },
  ja: {
    shareText: (dn, u) => `${dn} は moomz にいるよ — 匿名で質問してね、またはバイブをチェック 👀`,
    ariaLabel: (u) => `@${u} のプロフィールリンクをシェア`,
    copied: "コピー済み",
    share: "シェア",
    promptLabel: "リンクをコピー：",
    copiedStatus: (u) => `@${u} のリンクをクリップボードにコピーしました`,
  },
  zh: {
    shareText: (dn, u) => `${dn} 在 moomz — 匿名问我问题或来看看我的 Vibe 👀`,
    ariaLabel: (u) => `分享 @${u} 的主页链接`,
    copied: "已复制",
    share: "分享",
    promptLabel: "复制你的链接：",
    copiedStatus: (u) => `@${u} 的链接已复制到剪贴板`,
  },
};

export default function ShareLinker({
  username,
  displayName,
}: {
  username: string;
  displayName: string | null;
}) {
  const locale = useLocale() as Locale;
  const c = SL_COPY[locale] ?? SL_COPY.en;
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = `https://moomz.com/${username}`;
    const dn = displayName ?? `@${username}`;
    const text = c.shareText(dn, username);

    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title: `${dn} — moomz`, text, url });
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
      window.prompt(c.promptLabel, url);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={handleShare}
        aria-label={c.ariaLabel(username)}
        data-action="share-linker"
        data-username={username}
        data-state={copied ? "copied" : "idle"}
        className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 backdrop-blur px-3 py-1.5 text-xs font-semibold flex items-center gap-1.5 transition active:scale-95 shadow-lg"
      >
        {copied ? (
          <>
            <span aria-hidden>✓</span>
            <span>{c.copied}</span>
          </>
        ) : (
          <>
            <span aria-hidden>↗</span>
            <span>{c.share}</span>
          </>
        )}
      </button>
      <span role="status" aria-live="polite" className="sr-only">
        {copied ? c.copiedStatus(username) : ""}
      </span>
    </>
  );
}
