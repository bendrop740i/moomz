"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { claimUsername, updateProfile } from "../actions";
import { useT } from "../locale-context";
import type { PrivateProfile } from "@/lib/profile";
import {
  COSMETIC_PALETTES,
  isUnlocked,
  unlockLabel,
  type CosmeticPalette,
  type PaletteId,
} from "@/lib/cosmetics";

const AVATAR_EMOJIS = ["🌶️", "🔥", "💖", "✨", "👀", "🎉", "🤡", "💀", "🥶", "😎", "🦄", "🚀", "💎", "🍑", "🍕"];

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
    }),
    [initialProfile?.total_points, initialProfile?.top_streak],
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
    if (!v) return { kind: "idle", msg: "3-20 caractères · a-z, 0-9, _" };
    if (v.length < 3) return { kind: "err", msg: "Trop court (min 3)" };
    if (v.length > 20) return { kind: "err", msg: "Trop long (max 20)" };
    if (!USERNAME_RE.test(v)) return { kind: "err", msg: "Lettres minuscules, chiffres, _ uniquement" };
    return { kind: "ok", msg: "Disponible à la réservation" };
  }, [username]);

  const handlePhotoChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setPhotoError(null);
    if (!file) return;

    if (!AVATAR_MIMES.includes(file.type)) {
      setPhotoError("Format non supporté (jpeg, png, webp, gif)");
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }
    if (file.size > AVATAR_MAX_BYTES) {
      setPhotoError("Photo trop lourde (max 5 Mo)");
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }

    if (!profileId) {
      // Brand-new users have no profile_id yet — they must claim their
      // username first, then come back to upload a photo.
      setPhotoError("Choisis d'abord un username pour réserver ton profil.");
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
      setPhotoError("Upload échoué — réessaie");
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
          setError(e instanceof Error ? e.message : "Erreur");
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
            aria-label="Type d'avatar"
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
                      Retirer
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
              L'emoji reste utilisé en fallback si la photo échoue à charger.
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
          placeholder="Ton nom (facultatif)"
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
              placeholder="Une phrase qui te décrit"
              className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2.5 outline-none focus:bg-white/10 focus:border-pink-400/50 transition placeholder:text-white/30 resize-none text-base"
            />
          </div>

          {/* Cosmetics: equip a unlocked palette. Locked palettes show a 🔒
              and the unlock condition; clicking them is a no-op. */}
          <div>
            <label className="block text-xs font-medium mb-1.5 text-white/60 uppercase tracking-wider">
              Tenues · Cosmetics
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {COSMETIC_PALETTES.map((p) => (
                <CosmeticSwatch
                  key={p.id}
                  palette={p}
                  equipped={equippedPaletteId === p.id}
                  unlocked={isUnlocked(p, stats)}
                  onClick={() => {
                    if (!isUnlocked(p, stats)) return;
                    setEquippedPaletteId(p.id);
                  }}
                />
              ))}
            </div>
            <p className="mt-1.5 text-[11px] text-white/30">
              La tenue Auto laisse moomz choisir une palette par slug.
            </p>
          </div>

          <div className="space-y-2">
            <label className="block text-xs font-medium text-white/60 uppercase tracking-wider">
              Tes réseaux (mini Linktree)
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
  onClick,
}: {
  palette: CosmeticPalette;
  equipped: boolean;
  unlocked: boolean;
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
          <div className="text-[10px] text-pink-200/90 truncate">Équipé</div>
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
