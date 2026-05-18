"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { claimUsername, updateProfile } from "../actions";
import type { PrivateProfile } from "@/lib/profile";

const AVATAR_EMOJIS = ["🌶️", "🔥", "💖", "✨", "👀", "🎉", "🤡", "💀", "🥶", "😎", "🦄", "🚀", "💎", "🍑", "🍕"];

export default function ProfileForm({
  initialProfile,
}: {
  initialProfile: PrivateProfile | null;
}) {
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [emoji, setEmoji] = useState(initialProfile?.avatar_emoji ?? "🌶️");

  const isNew = !initialProfile;

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
      <div className="flex items-center gap-4">
        <div className="text-5xl shrink-0">{emoji}</div>
        <div className="flex-1">
          <label className="block text-xs font-medium mb-1.5 text-white/60 uppercase tracking-wider">
            Avatar
          </label>
          <div className="flex flex-wrap gap-1.5">
            {AVATAR_EMOJIS.map((e) => (
              <button
                key={e}
                type="button"
                onClick={() => setEmoji(e)}
                className={`text-xl w-9 h-9 rounded-lg flex items-center justify-center transition ${
                  emoji === e ? "bg-pink-500/30 border border-pink-400" : "bg-white/5 hover:bg-white/10"
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
          <div className="flex items-center gap-1">
            <span className="text-white/40 text-base">moomz.com/</span>
            <input
              name="username"
              required
              pattern="[a-z0-9_]{3,20}"
              maxLength={20}
              placeholder="florasun"
              autoFocus
              className="flex-1 rounded-xl bg-white/5 border border-white/10 px-3 py-2.5 outline-none focus:bg-white/10 focus:border-pink-400/50 transition placeholder:text-white/30"
            />
          </div>
        ) : (
          <div className="text-white/80 font-medium px-3 py-2.5 rounded-xl bg-white/5 border border-white/10">
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
          className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2.5 outline-none focus:bg-white/10 focus:border-pink-400/50 transition placeholder:text-white/30"
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
              className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2.5 outline-none focus:bg-white/10 focus:border-pink-400/50 transition placeholder:text-white/30 resize-none"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-xs font-medium text-white/60 uppercase tracking-wider">
              Tes réseaux (mini Linktree)
            </label>
            <div className="grid grid-cols-1 gap-2">
              <Input name="instagram" placeholder="@instagram" defaultValue={initialProfile?.socials?.instagram ?? ""} />
              <Input name="tiktok" placeholder="@tiktok" defaultValue={initialProfile?.socials?.tiktok ?? ""} />
              <Input name="x" placeholder="@x" defaultValue={initialProfile?.socials?.x ?? ""} />
              <Input name="website" placeholder="https://ton-site.com" defaultValue={initialProfile?.socials?.website ?? ""} />
            </div>
          </div>
        </>
      )}

      {error && (
        <div className="text-sm text-red-300 bg-red-500/10 border border-red-400/30 rounded-xl px-3 py-2">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-3 hover:scale-[1.02] active:scale-[0.98] transition disabled:opacity-50 disabled:scale-100 shadow-lg shadow-pink-500/30"
      >
        {pending ? "…" : isNew ? "Réserver →" : "Enregistrer"}
      </button>
    </form>
  );
}

function Input({ name, placeholder, defaultValue }: { name: string; placeholder: string; defaultValue: string }) {
  return (
    <input
      name={name}
      defaultValue={defaultValue}
      maxLength={100}
      placeholder={placeholder}
      className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-sm outline-none focus:bg-white/10 focus:border-pink-400/50 transition placeholder:text-white/30"
    />
  );
}
