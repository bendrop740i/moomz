"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { createPoll } from "./actions";
import { useT } from "./locale-context";

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

const ACCEPTED_MIME = ["image/jpeg", "image/png", "image/webp", "image/gif"];
const MAX_BYTES = 5 * 1024 * 1024; // 5 MB
const TARGET_W = 1200;
const TARGET_H = 630;
const JPEG_QUALITY = 0.85;

// Cover-semantics canvas resize → JPEG blob.
async function resizeImageToBlob(file: File): Promise<Blob> {
  // Skip resize if original is already small enough and already JPEG.
  if (file.type === "image/jpeg" && file.size <= MAX_BYTES) {
    const img = await loadImage(file);
    if (img.naturalWidth <= TARGET_W && img.naturalHeight <= TARGET_H) {
      return file;
    }
  }

  const img = await loadImage(file);
  const srcW = img.naturalWidth;
  const srcH = img.naturalHeight;
  const srcRatio = srcW / srcH;
  const targetRatio = TARGET_W / TARGET_H;

  // Cover: crop the larger axis to match target ratio.
  let cropW = srcW;
  let cropH = srcH;
  let cropX = 0;
  let cropY = 0;
  if (srcRatio > targetRatio) {
    // Source too wide → crop width.
    cropW = Math.round(srcH * targetRatio);
    cropX = Math.round((srcW - cropW) / 2);
  } else if (srcRatio < targetRatio) {
    // Source too tall → crop height.
    cropH = Math.round(srcW / targetRatio);
    cropY = Math.round((srcH - cropH) / 2);
  }

  // Output dimensions: scale down if source crop is larger than target.
  const outW = Math.min(TARGET_W, cropW);
  const outH = Math.min(TARGET_H, cropH);

  const canvas = document.createElement("canvas");
  canvas.width = outW;
  canvas.height = outH;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("canvas-context-unavailable");
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";
  ctx.drawImage(img, cropX, cropY, cropW, cropH, 0, 0, outW, outH);

  return await new Promise<Blob>((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (blob) resolve(blob);
        else reject(new Error("canvas-toblob-failed"));
      },
      "image/jpeg",
      JPEG_QUALITY,
    );
  });
}

function loadImage(file: File): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      // Defer revoke so the bitmap is available for drawing.
      resolve(img);
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("image-load-failed"));
    };
    img.src = url;
  });
}

function makeUuid(): string {
  try {
    if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
      return crypto.randomUUID();
    }
  } catch {
    // ignore
  }
  // Fallback: timestamp + random.
  return `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

export default function CreatePollForm() {
  const t = useT();
  const searchParams = useSearchParams();
  const prefillQ = searchParams.get("q") ?? "";
  const prefillOpts = (() => {
    const raw = searchParams.get("o");
    if (!raw) return null;
    const list = raw.split("|").map((s) => s.trim()).filter(Boolean).slice(0, 6);
    return list.length >= 2 ? list : null;
  })();
  const [question, setQuestion] = useState(prefillQ);
  const [options, setOptions] = useState<string[]>(prefillOpts ?? ["", ""]);
  const [pending, setPending] = useState(false);
  const [pIdx, setPIdx] = useState(0);

  // Image upload state.
  const [imageUrl, setImageUrl] = useState<string>("");
  const [uploading, setUploading] = useState(false);
  const [imageError, setImageError] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const reactId = useId();
  const formId = `create-poll-${reactId}`;
  const headingId = `${formId}-heading`;
  const questionId = `${formId}-question`;
  const questionHintId = `${formId}-question-hint`;
  const optionsLabelId = `${formId}-options-label`;
  const optionsHintId = `${formId}-options-hint`;
  const imageInputId = `${formId}-image`;
  const imageErrorId = `${formId}-image-error`;

  useEffect(() => {
    if (prefillQ || prefillOpts) return;
    const id = setInterval(() => {
      setPIdx((i) => (i + 1) % QUESTION_PLACEHOLDERS.length);
    }, 2800);
    return () => clearInterval(id);
  }, [prefillQ, prefillOpts]);

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

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setImageError("");
    if (!file) return;

    if (!ACCEPTED_MIME.includes(file.type)) {
      setImageError("Format non supporté (jpeg, png, webp, gif uniquement)");
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }
    if (file.size > MAX_BYTES) {
      setImageError("Image trop lourde (max 5 Mo)");
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }

    setUploading(true);
    try {
      const blob = await resizeImageToBlob(file);
      const { getBrowserSupabase } = await import("@/lib/supabase-browser");
      const supabase = getBrowserSupabase();
      const key = `${makeUuid()}.jpg`;
      const { error: upErr } = await supabase.storage
        .from("poll-images")
        .upload(key, blob, {
          contentType: "image/jpeg",
          upsert: false,
        });
      if (upErr) throw upErr;
      const { data } = supabase.storage.from("poll-images").getPublicUrl(key);
      if (!data?.publicUrl) throw new Error("no-public-url");
      setImageUrl(data.publicUrl);
    } catch (err) {
      console.error("[create-poll-form] image upload failed", err);
      setImageError(
        "Image n'a pas pu être uploadée — réessaie ou crée sans",
      );
      setImageUrl("");
      if (fileInputRef.current) fileInputRef.current.value = "";
    } finally {
      setUploading(false);
    }
  };

  const clearImage = () => {
    setImageUrl("");
    setImageError("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <form
      action={async (fd) => {
        setPending(true);
        try {
          await createPoll(fd);
        } catch (e) {
          alert(e instanceof Error ? e.message : "Erreur");
          setPending(false);
        }
      }}
      aria-labelledby={headingId}
      className="glass rounded-2xl p-4 sm:p-5 space-y-4 shadow-2xl shadow-pink-500/10"
    >
      <h2 id={headingId} className="sr-only">
        Crée ton sondage en 10 secondes
      </h2>

      <div>
        <label
          htmlFor={questionId}
          className="block text-xs font-medium mb-1.5 text-white/60 uppercase tracking-wider"
        >
          {t("form.question.label")}
        </label>
        <input
          id={questionId}
          name="question"
          required
          aria-required="true"
          aria-describedby={questionHintId}
          maxLength={200}
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder={QUESTION_PLACEHOLDERS[pIdx]}
          className="w-full rounded-xl bg-white/5 border border-white/10 px-3.5 py-3 text-base sm:text-lg font-medium outline-none focus:bg-white/10 focus:border-pink-400/50 transition placeholder:text-white/30"
        />
        <span id={questionHintId} className="sr-only">
          Pose une question courte, 200 caractères maximum.
        </span>
      </div>

      <div>
        <label
          htmlFor={imageInputId}
          className="block text-xs font-medium mb-1.5 text-white/60 uppercase tracking-wider"
        >
          Image (optionnel)
        </label>
        <div className="flex items-start gap-3">
          <div className="flex-1 min-w-0">
            <input
              ref={fileInputRef}
              id={imageInputId}
              type="file"
              accept="image/jpeg,image/png,image/webp,image/gif"
              onChange={handleFileChange}
              disabled={uploading || pending}
              aria-describedby={imageError ? imageErrorId : undefined}
              className="block w-full text-xs sm:text-sm text-white/70 file:mr-3 file:rounded-lg file:border-0 file:bg-white/10 file:px-3 file:py-2 file:text-xs file:font-medium file:text-white/90 hover:file:bg-white/15 file:cursor-pointer cursor-pointer rounded-xl bg-white/5 border border-white/10 px-3 py-2.5 outline-none focus:border-pink-400/50 transition disabled:opacity-50"
            />
            {uploading && (
              <div className="mt-2 flex items-center gap-2 text-xs text-white/60">
                <span
                  className="inline-block w-3.5 h-3.5 rounded-full border-2 border-white/30 border-t-pink-400 animate-spin"
                  aria-hidden="true"
                />
                <span>Upload en cours…</span>
              </div>
            )}
            {imageError && (
              <p
                id={imageErrorId}
                role="alert"
                className="mt-2 text-xs text-red-400"
              >
                {imageError}
              </p>
            )}
          </div>
          {imageUrl && !uploading && (
            <div className="relative shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imageUrl}
                alt="Aperçu de l'image téléchargée"
                className="w-[120px] h-[63px] object-cover rounded-lg border border-white/10"
              />
              <button
                type="button"
                onClick={clearImage}
                aria-label="Retirer l'image"
                className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-black/80 text-white text-xs leading-none flex items-center justify-center border border-white/20 hover:bg-red-500/90 transition"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
          )}
        </div>
        <input type="hidden" name="image_url" value={imageUrl} />
      </div>

      <div className="space-y-2" role="group" aria-labelledby={optionsLabelId} aria-describedby={optionsHintId}>
        <div
          id={optionsLabelId}
          className="block text-xs font-medium text-white/60 uppercase tracking-wider"
        >
          {t("form.options.label")}
        </div>
        <span id={optionsHintId} className="sr-only">
          Ajoute entre 2 et 6 options de réponse, 80 caractères maximum chacune.
        </span>
        {options.map((opt, i) => {
          const optionId = `${formId}-option-${i}`;
          const optionLabel = `${t("form.options.label")} ${i + 1}`;
          return (
            <div key={i} className="flex gap-2 items-center group">
              <span className="text-xl select-none w-6 text-center shrink-0" aria-hidden>
                {EMOJIS[i]}
              </span>
              <label htmlFor={optionId} className="sr-only">
                {optionLabel}
              </label>
              <input
                id={optionId}
                name="option"
                required
                aria-required="true"
                aria-label={optionLabel}
                maxLength={80}
                value={opt}
                onChange={(e) => updateOption(i, e.target.value)}
                placeholder={i < 2 ? optionExample[i] : `Option ${i + 1}`}
                className="flex-1 min-w-0 rounded-xl bg-white/5 border border-white/10 px-3.5 py-3 text-sm sm:text-base outline-none focus:bg-white/10 focus:border-pink-400/50 transition placeholder:text-white/30"
              />
              {options.length > 2 && (
                <button
                  type="button"
                  onClick={() => removeOption(i)}
                  className="rounded-lg w-11 h-11 shrink-0 flex items-center justify-center text-xl leading-none text-white/40 hover:text-red-400 hover:bg-red-500/10 transition"
                  aria-label={`Supprimer l'option ${i + 1}`}
                >
                  <span aria-hidden="true">×</span>
                </button>
              )}
            </div>
          );
        })}
        {options.length < 6 && (
          <div className="flex gap-2 items-center">
            <span className="w-6 shrink-0" aria-hidden />
            <button
              type="button"
              onClick={addOption}
              aria-label={`Ajouter une option de réponse (${t("form.add")})`}
              className="flex-1 min-h-[44px] rounded-xl border border-dashed border-white/15 bg-white/[0.02] text-white/40 hover:text-white hover:border-pink-400/40 hover:bg-white/5 transition text-sm font-medium flex items-center justify-center gap-1.5"
            >
              <span className="text-lg leading-none" aria-hidden="true">+</span>
              <span className="hidden sm:inline">{t("form.add").replace(/^[+\s]+/, "")}</span>
            </button>
          </div>
        )}
      </div>

      <button
        type="submit"
        disabled={pending || uploading}
        aria-label={
          pending
            ? `${t("form.creating")} — création de votre sondage en cours`
            : `${t("form.create")} — publier le sondage et obtenir un lien partageable`
        }
        className="w-full rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-3 text-base sm:text-lg hover:scale-[1.02] active:scale-[0.98] transition disabled:opacity-50 disabled:scale-100 shadow-lg shadow-pink-500/30"
      >
        {pending ? t("form.creating") : t("form.create")}
      </button>
    </form>
  );
}
