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
};

export default function LoginForm(props: Props) {
  const [email, setEmail] = useState("");
  const [sentTo, setSentTo] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

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
