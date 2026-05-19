"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { claimUsername, updateProfile } from "../actions";
import type { PrivateProfile } from "@/lib/profile";

const AVATAR_EMOJIS = ["🌶️", "🔥", "💖", "✨", "👀", "🎉", "🤡", "💀", "🥶", "😎", "🦄", "🚀", "💎", "🍑", "🍕"];

const USERNAME_RE = /^[a-z0-9_]{3,20}$/;

export default function ProfileForm({
  initialProfile,
}: {
  initialProfile: PrivateProfile | null;
}) {
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [emoji, setEmoji] = useState(initialProfile?.avatar_emoji ?? "🌶️");
  const [username, setUsername] = useState("");

  const isNew = !initialProfile;

  const usernameHint = useMemo<{ kind: "idle" | "ok" | "err"; msg: string }>(() => {
    const v = username.trim();
    if (!v) return { kind: "idle", msg: "3-20 caractères · a-z, 0-9, _" };
    if (v.length < 3) return { kind: "err", msg: "Trop court (min 3)" };
    if (v.length > 20) return { kind: "err", msg: "Trop long (max 20)" };
    if (!USERNAME_RE.test(v)) return { kind: "err", msg: "Lettres minuscules, chiffres, _ uniquement" };
    return { kind: "ok", msg: "Disponible à la réservation" };
  }, [username]);

  return (
    <form
      action={async (fd) => {
        setPending(true);
        setError(null);
        try {
          fd.set("avatar_emoji", emoji);
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
      <div className="flex items-start gap-3 sm:gap-4">
        <div className="text-4xl sm:text-5xl shrink-0 leading-none mt-1">{emoji}</div>
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
        disabled={pending || (isNew && usernameHint.kind === "err")}
        className="w-full rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-3 min-h-[48px] hover:scale-[1.02] active:scale-[0.98] transition disabled:opacity-50 disabled:scale-100 shadow-lg shadow-pink-500/30"
      >
        {pending ? "…" : isNew ? "Réserver →" : "Enregistrer"}
      </button>
    </form>
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
