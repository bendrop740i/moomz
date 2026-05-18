"use client";

import { useEffect, useMemo, useState } from "react";
import { createPoll } from "./actions";
import { useT } from "./locale-context";
import { getBrowserSupabase } from "@/lib/supabase-browser";

const EMOJIS = ["🔥", "💖", "✨", "👀", "🌶️", "😭"];

const QUESTION_PLACEHOLDERS = [
  "Pizza ananas, oui ou non ?",
  "Mac ou Windows ?",
  "Plage ou montagne ?",
  "Café ou thé ?",
  "Soirée ou Netflix ?",
  "Iphone ou Android ?",
  "Foot ou tennis ?",
];

const OPTION_EXAMPLES: [string, string][] = [
  ["oui carrément", "non jamais"],
  ["team A", "team B"],
  ["matin", "soir"],
  ["chaud", "pas chaud"],
];

export default function CreatePollForm() {
  const t = useT();
  const [options, setOptions] = useState(["", ""]);
  const [pending, setPending] = useState(false);
  const [pIdx, setPIdx] = useState(0);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadErr, setUploadErr] = useState<string | null>(null);

  const onPickImage = async (file: File) => {
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      setUploadErr("Image trop lourde (max 5MB).");
      return;
    }
    setUploading(true);
    setUploadErr(null);
    try {
      const supabase = getBrowserSupabase();
      const ext = (file.name.split(".").pop() ?? "jpg").toLowerCase().slice(0, 4);
      const key = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
      const { error } = await supabase.storage.from("poll-images").upload(key, file, {
        cacheControl: "31536000",
        upsert: false,
        contentType: file.type,
      });
      if (error) throw new Error(error.message);
      const { data } = supabase.storage.from("poll-images").getPublicUrl(key);
      setImageUrl(data.publicUrl);
    } catch (e) {
      setUploadErr(e instanceof Error ? e.message : "Upload échoué");
    } finally {
      setUploading(false);
    }
  };

  useEffect(() => {
    const id = setInterval(() => {
      setPIdx((i) => (i + 1) % QUESTION_PLACEHOLDERS.length);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  const optionExample = useMemo(
    () => OPTION_EXAMPLES[Math.floor(Math.random() * OPTION_EXAMPLES.length)],
    [],
  );

  const updateOption = (i: number, v: string) => {
    const next = [...options];
    next[i] = v;
    setOptions(next);
  };
  const addOption = () => options.length < 6 && setOptions([...options, ""]);
  const removeOption = (i: number) =>
    options.length > 2 && setOptions(options.filter((_, idx) => idx !== i));

  return (
    <form
      action={async (fd) => {
        setPending(true);
        if (imageUrl) fd.set("image_url", imageUrl);
        try {
          await createPoll(fd);
        } catch (e) {
          alert(e instanceof Error ? e.message : "Erreur");
          setPending(false);
        }
      }}
      className="glass rounded-2xl p-4 sm:p-5 space-y-4 shadow-2xl shadow-pink-500/10"
    >
      <div>
        <label className="block text-xs font-medium mb-1.5 text-white/60 uppercase tracking-wider">
          {t("form.question.label")}
        </label>
        <input
          name="question"
          required
          maxLength={200}
          placeholder={QUESTION_PLACEHOLDERS[pIdx]}
          className="w-full rounded-xl bg-white/5 border border-white/10 px-3.5 py-3 text-base sm:text-lg font-medium outline-none focus:bg-white/10 focus:border-pink-400/50 transition placeholder:text-white/30"
        />
      </div>

      <div>
        {imageUrl ? (
          <div className="relative rounded-xl overflow-hidden border border-white/15">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imageUrl} alt="Aperçu" className="w-full max-h-48 object-cover" />
            <button
              type="button"
              onClick={() => setImageUrl(null)}
              className="absolute top-2 right-2 w-8 h-8 rounded-full bg-black/70 text-white text-base flex items-center justify-center hover:bg-black"
              aria-label="Retirer l'image"
            >
              ×
            </button>
          </div>
        ) : (
          <label className="flex items-center gap-2 cursor-pointer rounded-xl bg-white/5 border border-dashed border-white/15 px-3 py-2.5 text-xs text-white/50 hover:bg-white/10 hover:text-white/80 transition">
            <span className="text-lg">📸</span>
            <span>{uploading ? "Upload…" : "Ajouter une image (optionnel)"}</span>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => e.target.files?.[0] && onPickImage(e.target.files[0])}
              className="hidden"
              disabled={uploading}
            />
          </label>
        )}
        {uploadErr && <div className="text-xs text-red-300 mt-1">{uploadErr}</div>}
      </div>

      <div className="space-y-2">
        <label className="block text-xs font-medium text-white/60 uppercase tracking-wider">
          {t("form.options.label")}
        </label>
        {options.map((opt, i) => (
          <div key={i} className="flex gap-2 items-center group">
            <span className="text-xl select-none" aria-hidden>
              {EMOJIS[i]}
            </span>
            <input
              name="option"
              required
              maxLength={80}
              value={opt}
              onChange={(e) => updateOption(i, e.target.value)}
              placeholder={i < 2 ? optionExample[i] : `Option ${i + 1}`}
              className="flex-1 rounded-xl bg-white/5 border border-white/10 px-3.5 py-2.5 text-sm sm:text-base outline-none focus:bg-white/10 focus:border-pink-400/50 transition placeholder:text-white/30"
            />
            {options.length > 2 && (
              <button
                type="button"
                onClick={() => removeOption(i)}
                className="rounded-lg w-8 h-8 flex items-center justify-center text-white/40 hover:text-red-400 hover:bg-red-500/10 transition"
                aria-label="Supprimer"
              >
                ×
              </button>
            )}
          </div>
        ))}
        {options.length < 6 && (
          <button
            type="button"
            onClick={addOption}
            className="text-xs text-white/50 hover:text-white transition ml-8"
          >
            {t("form.add")}
          </button>
        )}
      </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-3 text-base sm:text-lg hover:scale-[1.02] active:scale-[0.98] transition disabled:opacity-50 disabled:scale-100 shadow-lg shadow-pink-500/30"
      >
        {pending ? t("form.creating") : t("form.create")}
      </button>
    </form>
  );
}
