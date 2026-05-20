"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { getSupabase } from "@/lib/supabase";
import { getServerSupabase } from "@/lib/supabase-server";

// Max 3 questions per asker → same recipient per 24h, anti-spam.
const MAX_ASKS_PER_RECIPIENT_PER_DAY = 3;
const MAX_QUESTION_LEN = 280;
const MIN_QUESTION_LEN = 2;
const MAX_ANSWER_LEN = 500;

function getAskerId(): string {
  const jar = cookies();
  let id = jar.get("moomz_voter")?.value;
  if (!id) {
    id = crypto.randomUUID();
    jar.set("moomz_voter", id, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 365,
      path: "/",
    });
  }
  return id;
}

function looksLikeNoise(t: string): boolean {
  const s = t.trim();
  if (s.length < MIN_QUESTION_LEN) return true;
  if (/(.)\1{5,}/i.test(s)) return true;
  if (!/\p{L}/u.test(s)) return true;
  return false;
}

export type AskResult = { ok: true } | { ok: false; error: string };

export async function askQuestion(formData: FormData): Promise<AskResult> {
  const recipientId = String(formData.get("recipient_id") ?? "").trim();
  const text = String(formData.get("text") ?? "").trim();
  const locale = String(formData.get("locale") ?? "").trim().slice(0, 6) || null;
  // Honor the anonymous toggle. Truthy values: "1", "true", "on" (the default
  // when an unchecked checkbox is omitted falls through to false).
  const anonRaw = String(formData.get("is_anonymous") ?? "").trim().toLowerCase();
  const isAnonymous = anonRaw === "1" || anonRaw === "true" || anonRaw === "on" || anonRaw === "yes";

  if (!recipientId) return { ok: false, error: "bad_request" };
  if (text.length < MIN_QUESTION_LEN) return { ok: false, error: "too_short" };
  if (text.length > MAX_QUESTION_LEN) return { ok: false, error: "too_long" };
  if (looksLikeNoise(text)) return { ok: false, error: "noise" };

  const askerId = getAskerId();
  const supabase = getSupabase();

  // Cap: 3 per asker → recipient / 24h. We always pass the real asker id here
  // so the rate-limit window holds even on anonymous asks; only the persisted
  // `asker_id` is dropped to honor the toggle.
  const { data: recent } = await supabase.rpc("ask_recent_count", {
    p_recipient: recipientId,
    p_asker: askerId,
  });
  if (typeof recent === "number" && recent >= MAX_ASKS_PER_RECIPIENT_PER_DAY) {
    return { ok: false, error: "rate_limited" };
  }

  const insertPayload: Record<string, unknown> = {
    recipient_id: recipientId,
    text,
    status: "pending",
    locale,
  };
  // When the user opts into anonymity we skip writing asker_id entirely so the
  // recipient has no way to fingerprint the asker. Otherwise persist it like
  // before.
  if (!isAnonymous) {
    insertPayload.asker_id = askerId;
  }

  const { error } = await supabase.from("ask_questions").insert(insertPayload);
  if (error) return { ok: false, error: error.message };

  // Bump the asker's questions_asked counter (achievement family `asker`) —
  // identity-token RPC, so it only ever raises the asker's own row. The
  // recipient's questions_received is handled by the ask_questions trigger.
  try {
    const ssr = getServerSupabase();
    const { data: auth } = await ssr.auth.getUser();
    const claimToken = cookies().get("moomz_profile_token")?.value ?? null;
    await supabase.rpc("increment_profile_counter", {
      p_user_id: auth.user?.id ?? null,
      p_claim_token: claimToken,
      p_column: "questions_asked",
      p_amount: 1,
    });
  } catch {
    // best-effort — never blocks asking.
  }

  // Optimistic: ping the recipient's public route so SSR reflects the new ask.
  const { data: prof } = await supabase
    .from("profiles_public")
    .select("username")
    .eq("id", recipientId)
    .maybeSingle<{ username: string }>();
  if (prof) revalidatePath(`/${prof.username}`);

  return { ok: true };
}

async function getOwnedProfileId(): Promise<string | null> {
  const ssr = getServerSupabase();
  const { data: auth } = await ssr.auth.getUser();
  const supabase = getSupabase();
  if (auth.user) {
    const { data } = await supabase
      .from("profiles")
      .select("id")
      .eq("user_id", auth.user.id)
      .maybeSingle<{ id: string }>();
    if (data) return data.id;
  }
  const token = cookies().get("moomz_profile_token")?.value;
  if (!token) return null;
  const { data } = await supabase
    .from("profiles")
    .select("id")
    .eq("claim_token", token)
    .maybeSingle<{ id: string }>();
  return data?.id ?? null;
}

export async function answerQuestion(formData: FormData): Promise<AskResult> {
  const id = String(formData.get("id") ?? "").trim();
  const answer = String(formData.get("answer") ?? "").trim();
  if (!id) return { ok: false, error: "bad_request" };
  if (answer.length < 1) return { ok: false, error: "too_short" };
  if (answer.length > MAX_ANSWER_LEN) return { ok: false, error: "too_long" };

  const profileId = await getOwnedProfileId();
  if (!profileId) return { ok: false, error: "not_owner" };

  const supabase = getSupabase();
  const { data: q, error: qErr } = await supabase
    .from("ask_questions")
    .select("id, recipient_id")
    .eq("id", id)
    .maybeSingle<{ id: string; recipient_id: string }>();
  if (qErr || !q) return { ok: false, error: "not_found" };
  if (q.recipient_id !== profileId) return { ok: false, error: "not_owner" };

  const { error } = await supabase
    .from("ask_questions")
    .update({ answer, status: "answered", answered_at: new Date().toISOString() })
    .eq("id", id);
  if (error) return { ok: false, error: error.message };

  const { data: prof } = await supabase
    .from("profiles_public")
    .select("username")
    .eq("id", profileId)
    .maybeSingle<{ username: string }>();
  if (prof) revalidatePath(`/${prof.username}`);
  revalidatePath("/me");
  return { ok: true };
}

export async function skipAskQuestion(formData: FormData): Promise<AskResult> {
  const id = String(formData.get("id") ?? "").trim();
  if (!id) return { ok: false, error: "bad_request" };
  const profileId = await getOwnedProfileId();
  if (!profileId) return { ok: false, error: "not_owner" };
  const supabase = getSupabase();
  const { error } = await supabase
    .from("ask_questions")
    .update({ status: "skipped" })
    .eq("id", id)
    .eq("recipient_id", profileId);
  if (error) return { ok: false, error: error.message };
  revalidatePath("/me");
  return { ok: true };
}

export async function deleteAskQuestion(formData: FormData): Promise<AskResult> {
  const id = String(formData.get("id") ?? "").trim();
  if (!id) return { ok: false, error: "bad_request" };
  const profileId = await getOwnedProfileId();
  if (!profileId) return { ok: false, error: "not_owner" };
  const supabase = getSupabase();
  const { error } = await supabase
    .from("ask_questions")
    .delete()
    .eq("id", id)
    .eq("recipient_id", profileId);
  if (error) return { ok: false, error: error.message };
  revalidatePath("/me");
  return { ok: true };
}
