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
      httpOnly: false,
      sameSite: "lax",
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

  if (!recipientId) return { ok: false, error: "bad_request" };
  if (text.length < MIN_QUESTION_LEN) return { ok: false, error: "too_short" };
  if (text.length > MAX_QUESTION_LEN) return { ok: false, error: "too_long" };
  if (looksLikeNoise(text)) return { ok: false, error: "noise" };

  const askerId = getAskerId();
  const supabase = getSupabase();

  // Cap: 3 per asker → recipient / 24h.
  const { data: recent } = await supabase.rpc("ask_recent_count", {
    p_recipient: recipientId,
    p_asker: askerId,
  });
  if (typeof recent === "number" && recent >= MAX_ASKS_PER_RECIPIENT_PER_DAY) {
    return { ok: false, error: "rate_limited" };
  }

  const { error } = await supabase.from("ask_questions").insert({
    recipient_id: recipientId,
    asker_id: askerId,
    text,
    status: "pending",
    locale,
  });
  if (error) return { ok: false, error: error.message };

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
