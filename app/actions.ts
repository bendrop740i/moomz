"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getSupabase } from "@/lib/supabase";

const ALPHABET = "abcdefghijkmnopqrstuvwxyz23456789";

function randomSlug(len = 5) {
  let s = "";
  for (let i = 0; i < len; i++) s += ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
  return s;
}

function voterId() {
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

const HISTORY_LIMIT = 50;

function pushSlugToHistory(cookieName: string, slug: string) {
  const jar = cookies();
  const raw = jar.get(cookieName)?.value ?? "";
  const list = raw ? raw.split(",").filter(Boolean) : [];
  const filtered = list.filter((s) => s !== slug);
  filtered.unshift(slug);
  const trimmed = filtered.slice(0, HISTORY_LIMIT);
  jar.set(cookieName, trimmed.join(","), {
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 365,
    path: "/",
  });
}

export async function createPoll(formData: FormData) {
  const question = String(formData.get("question") || "").trim();
  const optionsRaw = formData.getAll("option").map((o) => String(o).trim()).filter(Boolean);

  if (!question || optionsRaw.length < 2) {
    throw new Error("Pose une question et au moins 2 options.");
  }
  if (question.length > 200) throw new Error("Question trop longue (200 max).");
  if (optionsRaw.length > 6) throw new Error("6 options max.");
  if (optionsRaw.some((o) => o.length > 80)) throw new Error("Une option fait plus de 80 caractères.");

  const supabase = getSupabase();
  let slug = randomSlug();
  for (let i = 0; i < 5; i++) {
    const { data } = await supabase.from("polls").select("id").eq("slug", slug).maybeSingle();
    if (!data) break;
    slug = randomSlug();
  }

  const { error } = await supabase.from("polls").insert({
    slug,
    question,
    options: optionsRaw,
  });
  if (error) throw new Error(error.message);

  pushSlugToHistory("moomz_created_slugs", slug);

  redirect(`/${slug}`);
}

export async function skipPoll(slug: string) {
  pushSlugToHistory("moomz_skipped_slugs", slug);
}

export async function castVote(
  pollId: string,
  slug: string,
  optionIndex: number,
  optionCount: number,
): Promise<{ counts: number[]; total: number }> {
  const id = voterId();
  const supabase = getSupabase();
  const { error } = await supabase.from("votes").insert({
    poll_id: pollId,
    option_index: optionIndex,
    voter_id: id,
  });
  if (error && !error.message.toLowerCase().includes("duplicate")) {
    throw new Error(error.message);
  }
  cookies().set(`moomz_voted_${slug}`, String(optionIndex), {
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 365,
    path: "/",
  });
  pushSlugToHistory("moomz_voted_slugs", slug);

  const { data: votes } = await supabase
    .from("votes")
    .select("option_index")
    .eq("poll_id", pollId);

  const counts = Array.from({ length: optionCount }, (_, i) =>
    votes?.filter((v) => v.option_index === i).length ?? 0,
  );
  const total = counts.reduce((a, b) => a + b, 0);
  return { counts, total };
}

export async function refreshCounts(
  pollId: string,
  optionCount: number,
): Promise<{ counts: number[]; total: number }> {
  const supabase = getSupabase();
  const { data: votes } = await supabase
    .from("votes")
    .select("option_index")
    .eq("poll_id", pollId);
  const counts = Array.from({ length: optionCount }, (_, i) =>
    votes?.filter((v) => v.option_index === i).length ?? 0,
  );
  const total = counts.reduce((a, b) => a + b, 0);
  return { counts, total };
}
