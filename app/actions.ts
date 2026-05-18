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

function looksLikeNoise(text: string): boolean {
  const t = text.trim();
  if (t.length < 2) return true;
  // 5+ consecutive same characters (e.g. "aaaaa", "...........")
  if (/(.)\1{4,}/i.test(t)) return true;
  // No letter at all (pure digits/symbols)
  if (!/\p{L}/u.test(t)) return true;
  // Less than 3 unique characters in the stripped string (e.g. "lol lol lol" → "lo")
  const stripped = t.toLowerCase().replace(/[\s\W_]+/g, "");
  if (stripped.length === 0) return true;
  if (new Set(stripped).size < Math.min(3, stripped.length)) return true;
  // < 40% letters — too symbol/digit heavy
  const letters = (t.match(/\p{L}/gu) ?? []).length;
  if (letters / t.length < 0.4) return true;
  return false;
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
  if (looksLikeNoise(question)) {
    throw new Error("Question pas claire — utilise des vrais mots.");
  }
  for (const opt of optionsRaw) {
    if (looksLikeNoise(opt)) {
      throw new Error(`L'option "${opt.slice(0, 20)}" n'est pas claire.`);
    }
  }
  const dedup = new Set(optionsRaw.map((o) => o.toLowerCase().trim()));
  if (dedup.size !== optionsRaw.length) {
    throw new Error("Tes options doivent être différentes.");
  }

  const supabase = getSupabase();
  let slug = randomSlug();
  for (let i = 0; i < 5; i++) {
    const { data } = await supabase.from("polls").select("id").eq("slug", slug).maybeSingle();
    if (!data) break;
    slug = randomSlug();
  }

  let profileId: string | null = null;
  const token = cookies().get("moomz_profile_token")?.value;
  if (token) {
    const { data: prof } = await supabase
      .from("profiles")
      .select("id")
      .eq("claim_token", token)
      .maybeSingle();
    if (prof) profileId = prof.id;
  }

  const { error } = await supabase.from("polls").insert({
    slug,
    question,
    options: optionsRaw,
    profile_id: profileId,
  });
  if (error) throw new Error(error.message);

  pushSlugToHistory("moomz_created_slugs", slug);

  redirect(`/${slug}`);
}

export async function skipPoll(slug: string) {
  pushSlugToHistory("moomz_skipped_slugs", slug);
}

export async function markPollSeen(slug: string, voteCount: number) {
  cookies().set(`moomz_seen_${slug}`, String(voteCount), {
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 365,
    path: "/",
  });
}

export async function setLocale(locale: string) {
  const allowed = ["fr", "en", "es", "it", "pt", "de", "ja", "zh"];
  if (!allowed.includes(locale)) return;
  cookies().set("moomz_locale", locale, {
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 365,
    path: "/",
  });
}

const RESERVED_USERNAMES = new Set([
  "discover", "login", "signup", "me", "admin", "api", "settings", "auth",
  "mes-votes", "mes-sondages", "moomz", "app", "dashboard", "help", "about",
  "terms", "privacy", "contact", "support", "blog", "docs", "www", "mail",
]);

function randomToken() {
  return crypto.randomUUID() + crypto.randomUUID().replace(/-/g, "");
}

export async function claimUsername(formData: FormData) {
  const username = String(formData.get("username") ?? "").trim().toLowerCase();
  const displayName = String(formData.get("display_name") ?? "").trim() || null;

  if (!/^[a-z0-9_]{3,20}$/.test(username)) {
    throw new Error("3-20 caractères : a-z, 0-9, _");
  }
  if (RESERVED_USERNAMES.has(username)) {
    throw new Error("Nom réservé, choisis-en un autre.");
  }

  const supabase = getSupabase();
  const existingToken = cookies().get("moomz_profile_token")?.value;

  if (existingToken) {
    const { data: existing } = await supabase
      .from("profiles")
      .select("id, username")
      .eq("claim_token", existingToken)
      .maybeSingle();
    if (existing) {
      if (existing.username !== username) {
        const { error } = await supabase
          .from("profiles")
          .update({ username, display_name: displayName })
          .eq("id", existing.id);
        if (error) {
          if (error.message.toLowerCase().includes("duplicate") || error.message.toLowerCase().includes("unique")) {
            throw new Error("Username déjà pris.");
          }
          throw new Error(error.message);
        }
      } else if (displayName !== null) {
        await supabase.from("profiles").update({ display_name: displayName }).eq("id", existing.id);
      }
      return { username };
    }
  }

  const token = randomToken();
  const { data: inserted, error } = await supabase
    .from("profiles")
    .insert({ username, display_name: displayName, claim_token: token })
    .select("id")
    .single();
  if (error) {
    if (error.message.toLowerCase().includes("duplicate") || error.message.toLowerCase().includes("unique")) {
      throw new Error("Username déjà pris.");
    }
    throw new Error(error.message);
  }

  cookies().set("moomz_profile_token", token, {
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 365 * 5,
    path: "/",
    httpOnly: true,
  });

  const created = readSlugList("moomz_created_slugs");
  if (created.length > 0 && inserted) {
    await supabase
      .from("polls")
      .update({ profile_id: inserted.id })
      .in("slug", created)
      .is("profile_id", null);
  }

  return { username };
}

function readSlugList(cookieName: string): string[] {
  const raw = cookies().get(cookieName)?.value;
  if (!raw) return [];
  return raw.split(",").filter(Boolean);
}

export async function updateProfile(formData: FormData) {
  const token = cookies().get("moomz_profile_token")?.value;
  if (!token) throw new Error("Pas de profil à éditer.");

  const supabase = getSupabase();
  const { data: existing } = await supabase
    .from("profiles")
    .select("id")
    .eq("claim_token", token)
    .maybeSingle();
  if (!existing) throw new Error("Profil introuvable.");

  const displayName = String(formData.get("display_name") ?? "").trim() || null;
  const bio = String(formData.get("bio") ?? "").trim().slice(0, 200) || null;
  const emoji = String(formData.get("avatar_emoji") ?? "").trim() || "🌶️";
  const insta = String(formData.get("instagram") ?? "").trim() || null;
  const tiktok = String(formData.get("tiktok") ?? "").trim() || null;
  const x = String(formData.get("x") ?? "").trim() || null;
  const website = String(formData.get("website") ?? "").trim() || null;

  const socials: Record<string, string> = {};
  if (insta) socials.instagram = insta.replace(/^@/, "");
  if (tiktok) socials.tiktok = tiktok.replace(/^@/, "");
  if (x) socials.x = x.replace(/^@/, "");
  if (website) socials.website = website.startsWith("http") ? website : `https://${website}`;

  const { error } = await supabase
    .from("profiles")
    .update({
      display_name: displayName,
      bio,
      avatar_emoji: emoji.slice(0, 4),
      socials,
    })
    .eq("id", existing.id);
  if (error) throw new Error(error.message);
}

const STREAK_WINDOW_MS = 3 * 60 * 1000;

function computeStreak(prev: { cur: number; top: number; pts: number; ts: number } | null) {
  const now = Date.now();
  const cur = prev && now - prev.ts < STREAK_WINDOW_MS ? prev.cur + 1 : 1;
  const top = Math.max(prev?.top ?? 0, cur);
  const multiplier = cur >= 18 ? 5 : cur >= 12 ? 4 : cur >= 7 ? 3 : cur >= 3 ? 2 : 1;
  const gained = multiplier;
  const pts = (prev?.pts ?? 0) + gained;
  return { cur, top, pts, ts: now, multiplier, gained };
}

type CastVoteResult = {
  counts: number[];
  total: number;
  points: { gained: number; total: number; current: number; top: number; multiplier: number };
};

export async function castVote(
  pollId: string,
  slug: string,
  optionIndex: number,
  optionCount: number,
): Promise<CastVoteResult> {
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

  const prevRaw = cookies().get("moomz_streak")?.value;
  let prev: { cur: number; top: number; pts: number; ts: number } | null = null;
  if (prevRaw) {
    try {
      prev = JSON.parse(prevRaw);
    } catch {}
  }
  const streak = computeStreak(prev);
  cookies().set(
    "moomz_streak",
    JSON.stringify({ cur: streak.cur, top: streak.top, pts: streak.pts, ts: streak.ts }),
    {
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 365,
      path: "/",
    },
  );

  const profileToken = cookies().get("moomz_profile_token")?.value;
  if (profileToken) {
    const { data: prof } = await supabase
      .from("profiles")
      .select("id,total_points,top_streak")
      .eq("claim_token", profileToken)
      .maybeSingle();
    if (prof) {
      await supabase
        .from("profiles")
        .update({
          total_points: (prof.total_points ?? 0) + streak.gained,
          top_streak: Math.max(prof.top_streak ?? 0, streak.cur),
        })
        .eq("id", prof.id);
    }
  }

  const { data: votes } = await supabase
    .from("votes")
    .select("option_index")
    .eq("poll_id", pollId);

  const counts = Array.from({ length: optionCount }, (_, i) =>
    votes?.filter((v) => v.option_index === i).length ?? 0,
  );
  const total = counts.reduce((a, b) => a + b, 0);
  return {
    counts,
    total,
    points: {
      gained: streak.gained,
      total: streak.pts,
      current: streak.cur,
      top: streak.top,
      multiplier: streak.multiplier,
    },
  };
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
