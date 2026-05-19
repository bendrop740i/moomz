"use client";

import { useState, useTransition } from "react";
import { getBrowserSupabase } from "@/lib/supabase-browser";

type Props = {
  placeholder: string;
  cta: string;
  sending: string;
  sentTitle: string;
  sentBody: string;
  errorText: string;
  google: string;
  orSeparator: string;
};

export default function LoginForm(props: Props) {
  const [email, setEmail] = useState("");
  const [sentTo, setSentTo] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();
  const [pendingGoogle, startGoogle] = useTransition();

  if (sentTo) {
    return (
      <div className="glass rounded-2xl p-6 sm:p-7 text-center space-y-3 card-in">
        <div className="text-4xl" aria-hidden="true">
          📬
        </div>
        <h2 className="text-xl sm:text-2xl font-display">{props.sentTitle}</h2>
        <p className="text-sm text-white/70 break-words">
          {props.sentBody.replace("{email}", sentTo)}
        </p>
      </div>
    );
  }

  const origin = (): string =>
    typeof window !== "undefined" ? window.location.origin : "";

  return (
    <div className="space-y-4">
      <button
        type="button"
        disabled={pendingGoogle}
        onClick={() => {
          setError(null);
          startGoogle(async () => {
            try {
              const supabase = getBrowserSupabase();
              const { error } = await supabase.auth.signInWithOAuth({
                provider: "google",
                options: { redirectTo: `${origin()}/auth/callback` },
              });
              if (error) setError(error.message || props.errorText);
            } catch (e) {
              const msg = e instanceof Error ? e.message : props.errorText;
              setError(msg);
            }
          });
        }}
        className="w-full min-h-[48px] rounded-xl bg-white text-black font-semibold py-3 px-4 flex items-center justify-center gap-2.5 hover:bg-white/95 active:scale-[0.99] transition shadow-lg shadow-black/20 ring-1 ring-white/20 disabled:opacity-60"
      >
        <svg width="20" height="20" viewBox="0 0 18 18" aria-hidden="true" className="shrink-0">
          <path
            fill="#4285F4"
            d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84c-.21 1.13-.85 2.08-1.8 2.72v2.26h2.91c1.7-1.57 2.69-3.88 2.69-6.62z"
          />
          <path
            fill="#34A853"
            d="M9 18c2.43 0 4.47-.81 5.96-2.18l-2.91-2.26c-.81.54-1.85.86-3.05.86-2.35 0-4.34-1.58-5.05-3.71H.96v2.34A8.99 8.99 0 0 0 9 18z"
          />
          <path
            fill="#FBBC05"
            d="M3.95 10.71A5.4 5.4 0 0 1 3.66 9c0-.59.1-1.17.29-1.71V4.95H.96A8.97 8.97 0 0 0 0 9c0 1.45.35 2.83.96 4.05l2.99-2.34z"
          />
          <path
            fill="#EA4335"
            d="M9 3.58c1.32 0 2.51.45 3.44 1.35l2.58-2.58C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.95l2.99 2.34C4.66 5.16 6.65 3.58 9 3.58z"
          />
        </svg>
        <span className="truncate">{props.google}</span>
      </button>

      <div className="flex items-center gap-3 text-[11px] uppercase tracking-widest text-white/40">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/15 to-white/15" />
        <span className="px-1">{props.orSeparator}</span>
        <div className="flex-1 h-px bg-gradient-to-l from-transparent via-white/15 to-white/15" />
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setError(null);
          const value = email.trim();
          if (!value) return;
          startTransition(async () => {
            try {
              const supabase = getBrowserSupabase();
              const { error } = await supabase.auth.signInWithOtp({
                email: value,
                options: { emailRedirectTo: `${origin()}/auth/callback` },
              });
              if (error) {
                setError(error.message || props.errorText);
                return;
              }
              setSentTo(value);
            } catch (e) {
              const msg = e instanceof Error ? e.message : props.errorText;
              setError(msg);
            }
          });
        }}
        className="space-y-3"
      >
        <input
          type="email"
          required
          autoComplete="email"
          inputMode="email"
          autoCapitalize="none"
          autoCorrect="off"
          spellCheck={false}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={props.placeholder}
          className="w-full glass rounded-xl px-4 py-3 min-h-[48px] text-base text-white placeholder:text-white/30 outline-none focus:border-pink-400/50 focus:bg-white/[0.08] transition"
        />
        <button
          type="submit"
          disabled={pending}
          className="w-full min-h-[48px] rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-3 hover:scale-[1.01] active:scale-[0.99] transition shadow-lg shadow-pink-500/30 disabled:opacity-60"
        >
          {pending ? props.sending : props.cta}
        </button>
      </form>

      {error && (
        <p
          role="alert"
          className="text-center text-sm text-red-300/90 bg-red-500/10 border border-red-400/30 rounded-xl px-3 py-2"
        >
          {error}
        </p>
      )}
    </div>
  );
}
