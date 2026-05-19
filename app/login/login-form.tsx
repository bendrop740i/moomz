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
      <div className="glass rounded-2xl p-6 text-center space-y-2 card-in">
        <h2 className="text-xl font-display">{props.sentTitle}</h2>
        <p className="text-sm text-white/60">
          {props.sentBody.replace("{email}", sentTo)}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setError(null);
        const value = email.trim();
        if (!value) return;
        startTransition(async () => {
          try {
            const supabase = getBrowserSupabase();
            const origin =
              typeof window !== "undefined" ? window.location.origin : "";
            const { error } = await supabase.auth.signInWithOtp({
              email: value,
              options: {
                emailRedirectTo: `${origin}/auth/callback`,
              },
            });
            if (error) {
              setError(props.errorText);
              return;
            }
            setSentTo(value);
          } catch {
            setError(props.errorText);
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
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={props.placeholder}
        className="w-full glass rounded-xl px-4 py-3 text-base text-white placeholder:text-white/30 outline-none focus:border-pink-400/40"
      />
      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-3 hover:scale-[1.01] active:scale-[0.99] transition shadow-lg shadow-pink-500/30 disabled:opacity-60"
      >
        {pending ? props.sending : props.cta}
      </button>
      {error && (
        <p className="text-center text-sm text-red-300/90">{error}</p>
      )}
    </form>
  );
}
