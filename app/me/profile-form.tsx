"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { claimUsername, updateProfile } from "../actions";
import { useT, useLocale } from "../locale-context";
import type { PrivateProfile } from "@/lib/profile";
import {
  COSMETIC_PALETTES,
  isUnlocked,
  unlockLabel,
  type CosmeticPalette,
  type PaletteId,
} from "@/lib/cosmetics";

const AVATAR_EMOJIS = ["🌶️", "🔥", "💖", "✨", "👀", "🎉", "🤡", "💀", "🥶", "😎", "🦄", "🚀", "💎", "🍑", "🍕"];

type FormLocale = "fr" | "en" | "es" | "it" | "pt" | "de" | "ja" | "zh";
type FormCopy = {
  avatarTypeLabel: string;
  removePhoto: string;
  displayNamePlaceholder: string;
  bioPlaceholder: string;
  cosmeticsLabel: string;
  cosmeticsHint: string;
  socialsLabel: string;
  usernameHintIdle: string;
  usernameHintShort: string;
  usernameHintLong: string;
  usernameHintInvalid: string;
  usernameHintAvailable: string;
  photoFormatError: string;
  photoSizeError: string;
  photoNeedUsername: string;
  photoUploadFailed: string;
  emojiPhotoFallback: string;
  equipped: string;
  genericError: string;
};

const FORM_COPY: Record<FormLocale, FormCopy> = {
  fr: {
    avatarTypeLabel: "Type d'avatar",
    removePhoto: "Retirer",
    displayNamePlaceholder: "Ton nom (facultatif)",
    bioPlaceholder: "Une phrase qui te décrit",
    cosmeticsLabel: "Tenues · Cosmetics",
    cosmeticsHint: "La tenue Auto laisse moomz choisir une palette par slug.",
    socialsLabel: "Tes réseaux (mini Linktree)",
    usernameHintIdle: "3-20 caractères · a-z, 0-9, _",
    usernameHintShort: "Trop court (min 3)",
    usernameHintLong: "Trop long (max 20)",
    usernameHintInvalid: "Lettres minuscules, chiffres, _ uniquement",
    usernameHintAvailable: "Disponible à la réservation",
    photoFormatError: "Format non supporté (jpeg, png, webp, gif)",
    photoSizeError: "Photo trop lourde (max 5 Mo)",
    photoNeedUsername: "Choisis d'abord un username pour réserver ton profil.",
    photoUploadFailed: "Upload échoué — réessaie",
    emojiPhotoFallback: "L'emoji reste utilisé en fallback si la photo échoue à charger.",
    equipped: "Équipé",
    genericError: "Erreur",
  },
  en: {
    avatarTypeLabel: "Avatar type",
    removePhoto: "Remove",
    displayNamePlaceholder: "Your name (optional)",
    bioPlaceholder: "One sentence about you",
    cosmeticsLabel: "Outfits · Cosmetics",
    cosmeticsHint: "Auto lets moomz pick a palette per slug.",
    socialsLabel: "Your socials (mini Linktree)",
    usernameHintIdle: "3-20 chars · a-z, 0-9, _",
    usernameHintShort: "Too short (min 3)",
    usernameHintLong: "Too long (max 20)",
    usernameHintInvalid: "Lowercase letters, digits, _ only",
    usernameHintAvailable: "Available to claim",
    photoFormatError: "Unsupported format (jpeg, png, webp, gif)",
    photoSizeError: "Photo too large (max 5 MB)",
    photoNeedUsername: "Pick a username first to reserve your profile.",
    photoUploadFailed: "Upload failed — try again",
    emojiPhotoFallback: "The emoji is used as a fallback if the photo fails to load.",
    equipped: "Equipped",
    genericError: "Error",
  },
  es: {
    avatarTypeLabel: "Tipo de avatar",
    removePhoto: "Quitar",
    displayNamePlaceholder: "Tu nombre (opcional)",
    bioPlaceholder: "Una frase que te describa",
    cosmeticsLabel: "Outfits · Cosméticos",
    cosmeticsHint: "Auto deja que moomz elija una paleta por slug.",
    socialsLabel: "Tus redes (mini Linktree)",
    usernameHintIdle: "3-20 caracteres · a-z, 0-9, _",
    usernameHintShort: "Demasiado corto (mín 3)",
    usernameHintLong: "Demasiado largo (máx 20)",
    usernameHintInvalid: "Solo letras minúsculas, números y _",
    usernameHintAvailable: "Disponible para reservar",
    photoFormatError: "Formato no soportado (jpeg, png, webp, gif)",
    photoSizeError: "Foto demasiado grande (máx 5 MB)",
    photoNeedUsername: "Elige primero un nombre de usuario para reservar tu perfil.",
    photoUploadFailed: "Upload fallido — inténtalo de nuevo",
    emojiPhotoFallback: "El emoji se usa como respaldo si la foto no carga.",
    equipped: "Equipado",
    genericError: "Error",
  },
  it: {
    avatarTypeLabel: "Tipo di avatar",
    removePhoto: "Rimuovi",
    displayNamePlaceholder: "Il tuo nome (facoltativo)",
    bioPlaceholder: "Una frase che ti descrive",
    cosmeticsLabel: "Outfit · Cosmetici",
    cosmeticsHint: "Auto lascia a moomz la scelta della palette per slug.",
    socialsLabel: "I tuoi social (mini Linktree)",
    usernameHintIdle: "3-20 caratteri · a-z, 0-9, _",
    usernameHintShort: "Troppo corto (min 3)",
    usernameHintLong: "Troppo lungo (max 20)",
    usernameHintInvalid: "Solo lettere minuscole, cifre e _",
    usernameHintAvailable: "Disponibile per la registrazione",
    photoFormatError: "Formato non supportato (jpeg, png, webp, gif)",
    photoSizeError: "Foto troppo grande (max 5 MB)",
    photoNeedUsername: "Scegli prima un username per riservare il profilo.",
    photoUploadFailed: "Upload fallito — riprova",
    emojiPhotoFallback: "L'emoji viene usata come fallback se la foto non si carica.",
    equipped: "Equipaggiato",
    genericError: "Errore",
  },
  pt: {
    avatarTypeLabel: "Tipo de avatar",
    removePhoto: "Remover",
    displayNamePlaceholder: "Seu nome (opcional)",
    bioPlaceholder: "Uma frase que te descreve",
    cosmeticsLabel: "Roupas · Cosméticos",
    cosmeticsHint: "Auto deixa o moomz escolher uma paleta por slug.",
    socialsLabel: "Suas redes (mini Linktree)",
    usernameHintIdle: "3-20 caracteres · a-z, 0-9, _",
    usernameHintShort: "Muito curto (mín 3)",
    usernameHintLong: "Muito longo (máx 20)",
    usernameHintInvalid: "Apenas letras minúsculas, números e _",
    usernameHintAvailable: "Disponível para reservar",
    photoFormatError: "Formato não suportado (jpeg, png, webp, gif)",
    photoSizeError: "Foto muito grande (máx 5 MB)",
    photoNeedUsername: "Escolhe primeiro um nome de utilizador para reservar o perfil.",
    photoUploadFailed: "Upload falhado — tente novamente",
    emojiPhotoFallback: "O emoji é usado como fallback se a foto não carregar.",
    equipped: "Equipado",
    genericError: "Erro",
  },
  de: {
    avatarTypeLabel: "Avatar-Typ",
    removePhoto: "Entfernen",
    displayNamePlaceholder: "Dein Name (optional)",
    bioPlaceholder: "Ein Satz über dich",
    cosmeticsLabel: "Outfits · Kosmetik",
    cosmeticsHint: "Auto lässt moomz pro Slug eine Palette wählen.",
    socialsLabel: "Deine Socials (Mini-Linktree)",
    usernameHintIdle: "3-20 Zeichen · a-z, 0-9, _",
    usernameHintShort: "Zu kurz (min 3)",
    usernameHintLong: "Zu lang (max 20)",
    usernameHintInvalid: "Nur Kleinbuchstaben, Ziffern und _",
    usernameHintAvailable: "Verfügbar zur Reservierung",
    photoFormatError: "Format nicht unterstützt (jpeg, png, webp, gif)",
    photoSizeError: "Foto zu groß (max 5 MB)",
    photoNeedUsername: "Wähle zuerst einen Benutzernamen, um dein Profil zu reservieren.",
    photoUploadFailed: "Upload fehlgeschlagen — erneut versuchen",
    emojiPhotoFallback: "Das Emoji wird als Fallback genutzt, falls das Foto nicht lädt.",
    equipped: "Ausgerüstet",
    genericError: "Fehler",
  },
  ja: {
    avatarTypeLabel: "アバタータイプ",
    removePhoto: "削除",
    displayNamePlaceholder: "あなたの名前（任意）",
    bioPlaceholder: "自己紹介の一文",
    cosmeticsLabel: "コスチューム・コスメ",
    cosmeticsHint: "「オート」はスラグごとにパレットを自動選択します。",
    socialsLabel: "あなたのSNS（ミニLinktree）",
    usernameHintIdle: "3〜20文字 · a-z、0-9、_",
    usernameHintShort: "短すぎます（最低3文字）",
    usernameHintLong: "長すぎます（最大20文字）",
    usernameHintInvalid: "半角英小文字・数字・_のみ使用可",
    usernameHintAvailable: "このユーザー名は利用可能です",
    photoFormatError: "非対応フォーマット（jpeg, png, webp, gif）",
    photoSizeError: "写真が大きすぎます（最大5MB）",
    photoNeedUsername: "まずユーザー名を選んでプロフィールを作成してください。",
    photoUploadFailed: "アップロード失敗 — 再試行してください",
    emojiPhotoFallback: "写真が読み込めない場合はEmojiがフォールバックとして使用されます。",
    equipped: "装備中",
    genericError: "エラー",
  },
  zh: {
    avatarTypeLabel: "头像类型",
    removePhoto: "移除",
    displayNamePlaceholder: "你的名字（可选）",
    bioPlaceholder: "一句描述你的话",
    cosmeticsLabel: "外观 · 装饰",
    cosmeticsHint: "「自动」让 moomz 按 slug 自动选择配色。",
    socialsLabel: "你的社交账号（迷你Linktree）",
    usernameHintIdle: "3-20个字符 · a-z、0-9、_",
    usernameHintShort: "太短了（最少3个字符）",
    usernameHintLong: "太长了（最多20个字符）",
    usernameHintInvalid: "仅限小写字母、数字和_",
    usernameHintAvailable: "可以注册",
    photoFormatError: "不支持的格式（jpeg, png, webp, gif）",
    photoSizeError: "图片太大（最大5MB）",
    photoNeedUsername: "请先选择用户名以创建你的个人资料。",
    photoUploadFailed: "上传失败 — 请重试",
    emojiPhotoFallback: "如果图片加载失败，Emoji 将作为备用。",
    equipped: "已装备",
    genericError: "错误",
  },
};

const USERNAME_RE = /^[a-z0-9_]{3,20}$/;

const AVATAR_SIZE = 256;
const AVATAR_JPEG_Q = 0.9;
const AVATAR_MAX_BYTES = 5 * 1024 * 1024;
const AVATAR_MIMES = ["image/jpeg", "image/png", "image/webp", "image/gif"];

// Cover-semantics resize to a square JPEG. Mirrors the helper in
// app/create-poll-form.tsx but targets a 256×256 square instead of 1200×630.
async function resizeAvatarToBlob(file: File): Promise<Blob> {
  const img = await loadImage(file);
  const srcW = img.naturalWidth;
  const srcH = img.naturalHeight;
  const side = Math.min(srcW, srcH);
  const cropX = Math.round((srcW - side) / 2);
  const cropY = Math.round((srcH - side) / 2);

  const canvas = document.createElement("canvas");
  canvas.width = AVATAR_SIZE;
  canvas.height = AVATAR_SIZE;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("canvas-context-unavailable");
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";
  ctx.drawImage(img, cropX, cropY, side, side, 0, 0, AVATAR_SIZE, AVATAR_SIZE);
  return await new Promise<Blob>((resolve, reject) => {
    canvas.toBlob(
      (b) => (b ? resolve(b) : reject(new Error("canvas-toblob-failed"))),
      "image/jpeg",
      AVATAR_JPEG_Q,
    );
  });
}

function loadImage(file: File): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("image-load-failed"));
    };
    img.src = url;
  });
}

export default function ProfileForm({
  initialProfile,
}: {
  initialProfile: PrivateProfile | null;
}) {
  const router = useRouter();
  const t = useT();
  const locale = useLocale();
  const fc = FORM_COPY[(locale as FormLocale) in FORM_COPY ? (locale as FormLocale) : "en"] ?? FORM_COPY.en;
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [emoji, setEmoji] = useState(initialProfile?.avatar_emoji ?? "🌶️");
  const [username, setUsername] = useState("");

  // Avatar photo state. `avatarMode` toggles between emoji (legacy) and photo
  // (new). `uploadedUrl` holds the public R2/Supabase URL once upload finishes;
  // `localPreview` is the object URL used between file selection and upload
  // completion so the user sees instant feedback.
  const initialUrl = initialProfile?.avatar_url ?? null;
  const [avatarMode, setAvatarMode] = useState<"emoji" | "photo">(
    initialUrl ? "photo" : "emoji",
  );
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(initialUrl);
  const [localPreview, setLocalPreview] = useState<string | null>(null);
  const [photoError, setPhotoError] = useState<string | null>(null);
  const [photoUploading, setPhotoUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Cosmetic equip state. Default to whatever the user has saved or "auto"
  // (per-slug hash, the historical default).
  const [equippedPaletteId, setEquippedPaletteId] = useState<PaletteId>(
    (initialProfile?.cosmetic_id as PaletteId | null) ?? "auto",
  );

  const stats = useMemo(
    () => ({
      points: initialProfile?.total_points ?? 0,
      topStreak: initialProfile?.top_streak ?? 0,
      owned: initialProfile?.cosmetics_owned ?? [],
    }),
    [initialProfile?.total_points, initialProfile?.top_streak, initialProfile?.cosmetics_owned],
  );

  const isNew = !initialProfile;
  const profileId = initialProfile?.id ?? null;

  // Clean up the local object URL when we no longer need it (after upload
  // resolves, on file replace, or on unmount).
  useEffect(() => {
    return () => {
      if (localPreview) URL.revokeObjectURL(localPreview);
    };
  }, [localPreview]);

  const usernameHint = useMemo<{ kind: "idle" | "ok" | "err"; msg: string }>(() => {
    const v = username.trim();
    if (!v) return { kind: "idle", msg: fc.usernameHintIdle };
    if (v.length < 3) return { kind: "err", msg: fc.usernameHintShort };
    if (v.length > 20) return { kind: "err", msg: fc.usernameHintLong };
    if (!USERNAME_RE.test(v)) return { kind: "err", msg: fc.usernameHintInvalid };
    return { kind: "ok", msg: fc.usernameHintAvailable };
  }, [username, fc]);

  const handlePhotoChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setPhotoError(null);
    if (!file) return;

    if (!AVATAR_MIMES.includes(file.type)) {
      setPhotoError(fc.photoFormatError);
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }
    if (file.size > AVATAR_MAX_BYTES) {
      setPhotoError(fc.photoSizeError);
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }

    if (!profileId) {
      // Brand-new users have no profile_id yet — they must claim their
      // username first, then come back to upload a photo.
      setPhotoError(fc.photoNeedUsername);
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }

    // Show local preview immediately, before the network round-trip.
    if (localPreview) URL.revokeObjectURL(localPreview);
    setLocalPreview(URL.createObjectURL(file));

    setPhotoUploading(true);
    try {
      const blob = await resizeAvatarToBlob(file);
      const { getBrowserSupabase } = await import("@/lib/supabase-browser");
      const supabase = getBrowserSupabase();
      const key = `${profileId}-${Date.now()}.jpg`;
      const { error: upErr } = await supabase.storage
        .from("avatars")
        .upload(key, blob, {
          contentType: "image/jpeg",
          upsert: false,
          cacheControl: "31536000",
        });
      if (upErr) throw upErr;
      const { data } = supabase.storage.from("avatars").getPublicUrl(key);
      if (!data?.publicUrl) throw new Error("no-public-url");
      setUploadedUrl(data.publicUrl);
    } catch (err) {
      console.error("[profile-form] avatar upload failed", err);
      setPhotoError(fc.photoUploadFailed);
      if (localPreview) URL.revokeObjectURL(localPreview);
      setLocalPreview(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } finally {
      setPhotoUploading(false);
    }
  };

  const clearPhoto = () => {
    if (localPreview) URL.revokeObjectURL(localPreview);
    setLocalPreview(null);
    setUploadedUrl(null);
    setPhotoError(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  // Computed: the visual preview source, prioritizing the in-flight local
  // object URL so the swap feels instant.
  const previewSrc = localPreview ?? uploadedUrl;

  return (
    <form
      action={async (fd) => {
        setPending(true);
        setError(null);
        try {
          fd.set("avatar_emoji", emoji);
          // Always include avatar_url so server can clear it when the user
          // toggled back to emoji mode. updateProfile() does an additive patch
          // based on `formData.has("avatar_url")`, so an empty string is a
          // valid "unset me" signal.
          fd.set("avatar_url", avatarMode === "photo" ? uploadedUrl ?? "" : "");
          fd.set("cosmetic_id", equippedPaletteId);
          if (isNew) {
            await claimUsername(fd);
          } else {
            await updateProfile(fd);
          }
          router.refresh();
        } catch (e) {
          setError(e instanceof Error ? e.message : fc.genericError);
        } finally {
          setPending(false);
        }
      }}
      className="glass rounded-2xl p-4 sm:p-5 space-y-4"
    >
      {/* Photo vs emoji toggle */}
      {!isNew && (
        <div>
          <label className="block text-xs font-medium mb-1.5 text-white/60 uppercase tracking-wider">
            Photo
          </label>
          <div
            role="radiogroup"
            aria-label={fc.avatarTypeLabel}
            className="inline-flex rounded-xl bg-white/5 border border-white/10 p-0.5 gap-0.5 text-xs"
          >
            <button
              type="button"
              role="radio"
              aria-checked={avatarMode === "emoji"}
              onClick={() => setAvatarMode("emoji")}
              className={`min-h-[36px] px-3 rounded-lg transition ${
                avatarMode === "emoji"
                  ? "bg-pink-500/30 text-white"
                  : "text-white/60 hover:text-white"
              }`}
            >
              Emoji
            </button>
            <button
              type="button"
              role="radio"
              aria-checked={avatarMode === "photo"}
              onClick={() => setAvatarMode("photo")}
              className={`min-h-[36px] px-3 rounded-lg transition ${
                avatarMode === "photo"
                  ? "bg-pink-500/30 text-white"
                  : "text-white/60 hover:text-white"
              }`}
            >
              Photo
            </button>
          </div>

          {avatarMode === "photo" && (
            <div className="mt-3 flex items-start gap-3">
              <div className="shrink-0">
                {previewSrc ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={previewSrc}
                    alt="Avatar preview"
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-full object-cover border border-white/20 bg-white/5"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-white/5 border border-dashed border-white/20 flex items-center justify-center text-2xl">
                    📷
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-0 space-y-1.5">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept={AVATAR_MIMES.join(",")}
                  onChange={handlePhotoChange}
                  disabled={photoUploading}
                  className="block w-full text-xs text-white/60 file:mr-3 file:py-2 file:px-3 file:rounded-lg file:border-0 file:bg-white/10 file:text-white file:text-xs file:font-medium hover:file:bg-white/15"
                />
                <div className="flex items-center gap-3 text-[11px]">
                  {photoUploading && <span className="text-white/50">Upload…</span>}
                  {previewSrc && !photoUploading && (
                    <button
                      type="button"
                      onClick={clearPhoto}
                      className="text-white/50 hover:text-white underline underline-offset-2"
                    >
                      {fc.removePhoto}
                    </button>
                  )}
                  <span className="text-white/30">256×256 · JPEG</span>
                </div>
                {photoError && (
                  <p className="text-[11px] text-red-300" aria-live="polite">
                    {photoError}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      <div className="flex items-start gap-3 sm:gap-4">
        <div className="text-4xl sm:text-5xl shrink-0 leading-none mt-1">
          {avatarMode === "photo" && previewSrc ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={previewSrc}
              alt=""
              width={48}
              height={48}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border border-white/10"
            />
          ) : (
            emoji
          )}
        </div>
        <div className="flex-1 min-w-0">
          <label className="block text-xs font-medium mb-1.5 text-white/60 uppercase tracking-wider">
            Avatar
          </label>
          <div className="grid grid-cols-6 sm:grid-cols-8 gap-1.5">
            {AVATAR_EMOJIS.map((e) => (
              <button
                key={e}
                type="button"
                onClick={() => setEmoji(e)}
                aria-label={`Avatar ${e}`}
                aria-pressed={emoji === e}
                className={`text-lg sm:text-xl aspect-square w-full rounded-lg flex items-center justify-center transition ${
                  emoji === e
                    ? "bg-pink-500/30 border border-pink-400"
                    : "bg-white/5 hover:bg-white/10 border border-transparent"
                }`}
              >
                {e}
              </button>
            ))}
          </div>
          {avatarMode === "photo" && (
            <p className="mt-1.5 text-[11px] text-white/30">
              {fc.emojiPhotoFallback}
            </p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium mb-1.5 text-white/60 uppercase tracking-wider">
          Username
        </label>
        {isNew ? (
          <>
            <div className="flex items-stretch rounded-xl bg-white/5 border border-white/10 focus-within:border-pink-400/50 focus-within:bg-white/10 transition overflow-hidden">
              <span className="text-white/40 text-sm sm:text-base flex items-center pl-3 pr-1 select-none shrink-0">
                moomz.com/
              </span>
              <input
                name="username"
                required
                pattern="[a-z0-9_]{3,20}"
                maxLength={20}
                placeholder="florasun"
                autoFocus
                value={username}
                onChange={(e) => setUsername(e.target.value.toLowerCase())}
                inputMode="text"
                autoCapitalize="none"
                autoCorrect="off"
                spellCheck={false}
                className="flex-1 min-w-0 bg-transparent px-1 py-2.5 outline-none placeholder:text-white/30 text-base"
              />
            </div>
            <p
              className={`mt-1.5 text-[11px] ${
                usernameHint.kind === "err"
                  ? "text-red-300"
                  : usernameHint.kind === "ok"
                  ? "text-emerald-300"
                  : "text-white/40"
              }`}
              aria-live="polite"
            >
              {usernameHint.msg}
            </p>
          </>
        ) : (
          <div className="text-white/80 font-medium px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 truncate">
            moomz.com/{initialProfile!.username}
          </div>
        )}
      </div>

      <div>
        <label className="block text-xs font-medium mb-1.5 text-white/60 uppercase tracking-wider">
          Display name
        </label>
        <input
          name="display_name"
          defaultValue={initialProfile?.display_name ?? ""}
          maxLength={40}
          placeholder={fc.displayNamePlaceholder}
          className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2.5 outline-none focus:bg-white/10 focus:border-pink-400/50 transition placeholder:text-white/30 text-base"
        />
      </div>

      {!isNew && (
        <>
          <div>
            <label className="block text-xs font-medium mb-1.5 text-white/60 uppercase tracking-wider">
              Bio
            </label>
            <textarea
              name="bio"
              defaultValue={initialProfile?.bio ?? ""}
              maxLength={200}
              rows={2}
              placeholder={fc.bioPlaceholder}
              className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2.5 outline-none focus:bg-white/10 focus:border-pink-400/50 transition placeholder:text-white/30 resize-none text-base"
            />
          </div>

          {/* Cosmetics: equip a unlocked palette. Locked palettes show a 🔒
              and the unlock condition; clicking them is a no-op. */}
          <div>
            <label className="block text-xs font-medium mb-1.5 text-white/60 uppercase tracking-wider">
              {fc.cosmeticsLabel}
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {COSMETIC_PALETTES.map((p) => (
                <CosmeticSwatch
                  key={p.id}
                  palette={p}
                  equipped={equippedPaletteId === p.id}
                  unlocked={isUnlocked(p, stats)}
                  equippedLabel={fc.equipped}
                  onClick={() => {
                    if (!isUnlocked(p, stats)) return;
                    setEquippedPaletteId(p.id);
                  }}
                />
              ))}
            </div>
            <p className="mt-1.5 text-[11px] text-white/30">
              {fc.cosmeticsHint}
            </p>
          </div>

          <div className="space-y-2">
            <label className="block text-xs font-medium text-white/60 uppercase tracking-wider">
              {fc.socialsLabel}
            </label>
            <div className="space-y-2">
              <SocialInput
                icon="📸"
                name="instagram"
                placeholder="instagram"
                defaultValue={initialProfile?.socials?.instagram ?? ""}
              />
              <SocialInput
                icon="🎵"
                name="tiktok"
                placeholder="tiktok"
                defaultValue={initialProfile?.socials?.tiktok ?? ""}
              />
              <SocialInput
                icon="𝕏"
                name="x"
                placeholder="x"
                defaultValue={initialProfile?.socials?.x ?? ""}
              />
              <SocialInput
                icon="🔗"
                name="website"
                placeholder="ton-site.com"
                defaultValue={initialProfile?.socials?.website ?? ""}
                inputMode="url"
              />
            </div>
          </div>
        </>
      )}

      {error && (
        <div
          role="alert"
          className="text-sm text-red-300 bg-red-500/10 border border-red-400/30 rounded-xl px-3 py-2"
        >
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={pending || photoUploading || (isNew && usernameHint.kind === "err")}
        className="w-full rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-3 min-h-[48px] hover:scale-[1.02] active:scale-[0.98] transition disabled:opacity-50 disabled:scale-100 shadow-lg shadow-pink-500/30"
      >
        {pending ? "…" : isNew ? t("misc.reserveClaim") : t("misc.reserveSave")}
      </button>
    </form>
  );
}

function CosmeticSwatch({
  palette,
  equipped,
  unlocked,
  equippedLabel,
  onClick,
}: {
  palette: CosmeticPalette;
  equipped: boolean;
  unlocked: boolean;
  equippedLabel: string;
  onClick: () => void;
}) {
  const tooltip = unlocked ? palette.name : `Unlock at ${unlockLabel(palette)}`;
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={!unlocked}
      title={tooltip}
      aria-pressed={equipped}
      aria-label={tooltip}
      className={`relative rounded-xl border px-3 py-2.5 flex items-center gap-2.5 transition text-left ${
        equipped
          ? "bg-pink-500/20 border-pink-400/70 shadow-[0_0_0_1px_rgba(244,114,182,0.35)]"
          : unlocked
          ? "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
          : "bg-white/[0.03] border-white/5 opacity-70 cursor-not-allowed"
      }`}
    >
      <div className="flex -space-x-1.5 shrink-0">
        <span
          className="w-5 h-5 rounded-full border border-black/30"
          style={{ background: palette.c1 }}
          aria-hidden
        />
        <span
          className="w-5 h-5 rounded-full border border-black/30"
          style={{ background: palette.c2 }}
          aria-hidden
        />
        <span
          className="w-5 h-5 rounded-full border border-black/30"
          style={{ background: palette.c3 }}
          aria-hidden
        />
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-sm font-semibold truncate">{palette.name}</div>
        {!unlocked && (
          <div className="text-[10px] text-white/50 truncate">🔒 {unlockLabel(palette)}</div>
        )}
        {unlocked && equipped && (
          <div className="text-[10px] text-pink-200/90 truncate">{equippedLabel}</div>
        )}
      </div>
    </button>
  );
}

function SocialInput({
  icon,
  name,
  placeholder,
  defaultValue,
  inputMode,
}: {
  icon: string;
  name: string;
  placeholder: string;
  defaultValue: string;
  inputMode?: "url" | "text";
}) {
  return (
    <div className="flex items-stretch rounded-xl bg-white/5 border border-white/10 focus-within:border-pink-400/50 focus-within:bg-white/10 transition overflow-hidden">
      <span
        className="w-10 shrink-0 flex items-center justify-center text-base bg-white/5 border-r border-white/10 select-none"
        aria-hidden="true"
      >
        {icon}
      </span>
      <input
        name={name}
        defaultValue={defaultValue}
        maxLength={100}
        placeholder={placeholder}
        inputMode={inputMode}
        autoCapitalize="none"
        autoCorrect="off"
        spellCheck={false}
        className="flex-1 min-w-0 bg-transparent px-3 py-2.5 text-sm outline-none placeholder:text-white/30"
      />
    </div>
  );
}
