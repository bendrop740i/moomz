"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { supabase } from "@/lib/supabase";

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

export async function createPoll(formData: FormData) {
  const question = String(formData.get("question") || "").trim();
  const optionsRaw = formData.getAll("option").map((o) => String(o).trim()).filter(Boolean);

  if (!question || optionsRaw.length < 2) {
    throw new Error("Pose une question et au moins 2 options.");
  }
  if (question.length > 200) throw new Error("Question trop longue (200 max).");
  if (optionsRaw.length > 6) throw new Error("6 options max.");
  if (optionsRaw.some((o) => o.length > 80)) throw new Error("Une option fait plus de 80 caractères.");

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

  redirect(`/${slug}`);
}

export async function castVote(pollId: string, slug: string, optionIndex: number) {
  const id = voterId();
  const { error } = await supabase.from("votes").insert({
    poll_id: pollId,
    option_index: optionIndex,
    voter_id: id,
  });
  // unique violation = déjà voté, on ignore
  if (error && !error.message.toLowerCase().includes("duplicate")) {
    throw new Error(error.message);
  }
  cookies().set(`moomz_voted_${slug}`, String(optionIndex), {
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 365,
    path: "/",
  });
}
