"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getSupabase } from "@/lib/supabase";
import { getServerSupabase } from "@/lib/supabase-server";
import { TOPIC_IDS, tagQuestion, type Topic } from "@/lib/topics";
import { buildPollSlug, randomSuffix } from "@/lib/slug";

type ProfileLookup =
  | { kind: "user"; userId: string }
  | { kind: "token"; token: string };

async function getProfileLookup(): Promise<ProfileLookup | null> {
  const supabase = getServerSupabase();
  const { data } = await supabase.auth.getUser();
  if (data.user) return { kind: "user", userId: data.user.id };
  const token = cookies().get("moomz_profile_token")?.value;
  if (token) return { kind: "token", token };
  return null;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function applyLookup(q: any, lookup: ProfileLookup): any {
  return lookup.kind === "user"
    ? q.eq("user_id", lookup.userId)
    : q.eq("claim_token", lookup.token);
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

function looksLikeNoise(text: string, minLen = 2): boolean {
  const t = text.trim();
  if (t.length < 1) return true;
  // Short answers like "X", "OK", "AB" are intentional — accept anything under 4 chars.
  if (t.length < 4) return false;
  // 6+ consecutive same characters (e.g. "aaaaaa")
  if (/(.)\1{5,}/i.test(t)) return true;
  // Has at least one letter
  if (!/\p{L}/u.test(t)) return true;
  // Less than 3 unique characters across the whole string (excludes "lol lol lol")
  const stripped = t.toLowerCase().replace(/[\s\W_]+/g, "");
  if (stripped.length === 0) return true;
  if (stripped.length >= 5 && new Set(stripped).size < 3) return true;
  // < 30% letters only flagged for longer strings (don't punish "wtf 2 2 2" style)
  if (t.length >= 8) {
    const letters = (t.match(/\p{L}/gu) ?? []).length;
    if (letters / t.length < 0.3) return true;
  }
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
  let slug = buildPollSlug(question);
  for (let i = 0; i < 5; i++) {
    const { data } = await supabase.from("polls").select("id").eq("slug", slug).maybeSingle();
    if (!data) break;
    // Append a number on collision: "...-3xkr-2", "...-3xkr-3" → SEO + uniqueness
    slug = `${buildPollSlug(question).replace(/-[a-z0-9]{4}$/, "")}-${randomSuffix(4)}-${i + 2}`;
  }

  let profileId: string | null = null;
  const lookup = await getProfileLookup();
  if (lookup) {
    const { data: prof } = await applyLookup(
      supabase.from("profiles").select("id, achievements, polls_created"),
      lookup,
    ).maybeSingle();
    if (prof) {
      profileId = prof.id;
      const owned = new Set<string>((prof.achievements ?? []) as string[]);
      const newPollsCreated = (prof.polls_created ?? 0) + 1;
      owned.add("creator");
      owned.add("claimed");
      await supabase
        .from("profiles")
        .update({
          polls_created: newPollsCreated,
          achievements: Array.from(owned),
        })
        .eq("id", prof.id);
    }
  }

  const topics = tagQuestion(question, optionsRaw);
  const langCookie = cookies().get("moomz_locale")?.value;
  const lang = ["fr","en","es","it","pt","de","ja","zh"].includes(langCookie ?? "")
    ? langCookie!
    : "fr";

  const { error } = await supabase.from("polls").insert({
    slug,
    question,
    options: optionsRaw,
    profile_id: profileId,
    topics,
    lang,
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

export async function setTopics(topics: string[]) {
  const valid = topics.filter((t) => (TOPIC_IDS as string[]).includes(t)).slice(0, 6);
  cookies().set("moomz_topics", valid.join(","), {
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
  const lookup = await getProfileLookup();

  if (lookup) {
    const { data: existing } = await applyLookup(
      supabase.from("profiles").select("id, username"),
      lookup,
    ).maybeSingle();
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

  // New profile. If session, link to user_id (no claim_token). Otherwise anonymous flow.
  const ssr = getServerSupabase();
  const { data: auth } = await ssr.auth.getUser();
  const newToken = auth.user ? null : randomToken();

  const { data: inserted, error } = await supabase
    .from("profiles")
    .insert({
      username,
      display_name: displayName,
      claim_token: newToken,
      user_id: auth.user?.id ?? null,
      achievements: ["claimed"],
    })
    .select("id")
    .single();
  if (error) {
    if (error.message.toLowerCase().includes("duplicate") || error.message.toLowerCase().includes("unique")) {
      throw new Error("Username déjà pris.");
    }
    throw new Error(error.message);
  }

  if (newToken) {
    cookies().set("moomz_profile_token", newToken, {
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 365 * 5,
      path: "/",
      httpOnly: true,
    });
  }

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
  const lookup = await getProfileLookup();
  if (!lookup) throw new Error("Pas de profil à éditer.");

  const supabase = getSupabase();
  const { data: existing } = await applyLookup(
    supabase.from("profiles").select("id"),
    lookup,
  ).maybeSingle();
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
  reveal: { isMajority: boolean; isRebel: boolean; userPct: number; majorityPct: number };
  achievements: string[];
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

  const { data: votes } = await supabase
    .from("votes")
    .select("option_index")
    .eq("poll_id", pollId);

  const counts = Array.from({ length: optionCount }, (_, i) =>
    votes?.filter((v) => v.option_index === i).length ?? 0,
  );
  const total = counts.reduce((a, b) => a + b, 0);

  const userCount = counts[optionIndex] ?? 0;
  const maxCount = Math.max(...counts);
  const userPct = total > 0 ? Math.round((userCount / total) * 100) : 0;
  const majorityPct = total > 0 ? Math.round((maxCount / total) * 100) : 0;
  const isMajority = userCount === maxCount;
  const isRebel = !isMajority && userPct < 100 / optionCount;

  // Is this today's daily moomz?
  const { data: today } = await supabase
    .from("daily_moomz")
    .select("poll_id")
    .eq("date", new Date().toISOString().slice(0, 10))
    .maybeSingle();
  const isDaily = today?.poll_id === pollId;

  const newAchievements: string[] = [];
  const profileLookup = await getProfileLookup();
  if (profileLookup) {
    const { data: prof } = await applyLookup(
      supabase
        .from("profiles")
        .select("id,total_points,top_streak,achievements,votes_cast,rebel_count,majority_count,polls_created,daily_streak,last_daily_date"),
      profileLookup,
    ).maybeSingle();
    if (prof) {
      const owned = new Set<string>((prof.achievements ?? []) as string[]);
      const unlock = (id: string) => {
        if (!owned.has(id)) {
          owned.add(id);
          newAchievements.push(id);
        }
      };
      const newVotesCast = (prof.votes_cast ?? 0) + 1;
      const newRebelCount = (prof.rebel_count ?? 0) + (isRebel ? 1 : 0);
      const newMajorityCount = (prof.majority_count ?? 0) + (isMajority ? 1 : 0);

      if (newVotesCast === 1) unlock("first_vote");
      if (isRebel && newRebelCount === 1) unlock("first_rebel");
      if (newRebelCount >= 10) unlock("rebel_x10");
      if (newVotesCast >= 100) unlock("marathon");
      if (streak.cur >= 3) unlock("streak_3");
      if (streak.cur >= 7) unlock("streak_7");
      if (streak.cur >= 12) unlock("streak_12");
      if (streak.cur >= 18) unlock("streak_18");
      unlock("claimed");

      let newDailyStreak = prof.daily_streak ?? 0;
      let newLastDailyDate: string | null = prof.last_daily_date ?? null;
      if (isDaily) {
        const todayStr = new Date().toISOString().slice(0, 10);
        const last = prof.last_daily_date ? new Date(prof.last_daily_date) : null;
        if (last && prof.last_daily_date === todayStr) {
          // already counted today
        } else {
          const yesterday = new Date();
          yesterday.setUTCDate(yesterday.getUTCDate() - 1);
          const yStr = yesterday.toISOString().slice(0, 10);
          newDailyStreak = prof.last_daily_date === yStr ? (prof.daily_streak ?? 0) + 1 : 1;
          newLastDailyDate = todayStr;
        }
      }

      await supabase
        .from("profiles")
        .update({
          total_points: (prof.total_points ?? 0) + streak.gained,
          top_streak: Math.max(prof.top_streak ?? 0, streak.cur),
          votes_cast: newVotesCast,
          rebel_count: newRebelCount,
          majority_count: newMajorityCount,
          achievements: Array.from(owned),
          daily_streak: newDailyStreak,
          last_daily_date: newLastDailyDate,
        })
        .eq("id", prof.id);
    }
  }

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
    reveal: { isMajority, isRebel, userPct, majorityPct },
    achievements: newAchievements,
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

export async function signOut() {
  const supabase = getServerSupabase();
  await supabase.auth.signOut();
  redirect("/");
}
