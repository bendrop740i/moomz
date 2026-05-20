"use server";

import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { getSupabase } from "@/lib/supabase";
import { getServerSupabase } from "@/lib/supabase-server";
import { TOPIC_IDS, tagQuestion, type Topic } from "@/lib/topics";
import { buildPollSlug, randomSuffix } from "@/lib/slug";
import { t } from "@/lib/i18n";
import { getLocale } from "@/lib/i18n-server";

// Shared cookie defaults: secure in prod, sameSite=lax everywhere.
// Pass `httpOnly: true` for anything not read by client JS.
function cookieOpts(extra: {
  httpOnly?: boolean;
  maxAge?: number;
  path?: string;
} = {}) {
  return {
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
    path: extra.path ?? "/",
    maxAge: extra.maxAge ?? 60 * 60 * 24 * 365,
    httpOnly: extra.httpOnly ?? false,
  };
}

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
    // httpOnly: the cookie is only used server-side for vote attribution,
    // so locking it down closes the "rotate the cookie to bypass rate limit"
    // attack flagged in the security audit.
    jar.set("moomz_voter", id, cookieOpts({ httpOnly: true }));
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
  jar.set(cookieName, trimmed.join(","), cookieOpts());
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

  const locale = getLocale();
  const tr = (key: string) => t(key, locale);

  if (!question || optionsRaw.length < 2) {
    throw new Error(tr("errors.poll.shape"));
  }
  if (question.length > 200) throw new Error(tr("errors.poll.questionTooLong"));
  if (optionsRaw.length > 6) throw new Error(tr("errors.poll.tooManyOptions"));
  if (optionsRaw.some((o) => o.length > 80)) throw new Error(tr("errors.poll.optionTooLong"));
  if (looksLikeNoise(question)) {
    throw new Error(tr("errors.poll.unclear"));
  }
  for (const opt of optionsRaw) {
    if (looksLikeNoise(opt)) {
      throw new Error(tr("errors.poll.optionUnclear").replace("{opt}", opt.slice(0, 20)));
    }
  }
  const dedup = new Set(optionsRaw.map((o) => o.toLowerCase().trim()));
  if (dedup.size !== optionsRaw.length) {
    throw new Error(tr("errors.poll.duplicateOptions"));
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

  const rawImageUrl = String(formData.get("image_url") ?? "").trim();
  // Only accept https URLs to avoid javascript:/data: shenanigans.
  const imageUrl = /^https:\/\//i.test(rawImageUrl) ? rawImageUrl.slice(0, 1024) : null;

  const insertPayload: Record<string, unknown> = {
    slug,
    question,
    options: optionsRaw,
    profile_id: profileId,
    topics,
    lang,
  };
  if (imageUrl) insertPayload.image_url = imageUrl;

  const { error } = await supabase.from("polls").insert(insertPayload);
  if (error) throw new Error(error.message);

  pushSlugToHistory("moomz_created_slugs", slug);

  redirect(`/${slug}`);
}

export async function skipPoll(slug: string) {
  pushSlugToHistory("moomz_skipped_slugs", slug);
}

export async function markPollSeen(slug: string, voteCount: number) {
  cookies().set(`moomz_seen_${slug}`, String(voteCount), cookieOpts());
}

export async function setTopics(topics: string[]) {
  const valid = topics.filter((t) => (TOPIC_IDS as string[]).includes(t)).slice(0, 6);
  cookies().set("moomz_topics", valid.join(","), cookieOpts());
}

export async function setLocale(locale: string) {
  const allowed = ["fr", "en", "es", "it", "pt", "de", "ja", "zh"];
  if (!allowed.includes(locale)) return;
  cookies().set("moomz_locale", locale, cookieOpts());
}

const RESERVED_USERNAMES = new Set([
  // Existing app surfaces
  "discover", "login", "signup", "me", "admin", "api", "settings", "auth",
  "mes-votes", "mes-sondages", "moomz", "app", "dashboard", "help", "about",
  "terms", "privacy", "contact", "support", "blog", "docs", "www", "mail",
  // SEO landing routes that would be shadowed by a /[slug] match
  "idees", "ideas", "guides", "mot", "word", "read", "music", "creators",
  "pricing", "alternatives", "compare", "template", "templates",
  // Reserved for future / static assets
  "ask", "daily", "world", "register", "password", "sw", "manifest", "robots",
  "sitemap", "opengraph", "icon", "favicon", "apple-icon", "push", "notif",
  "search", "explore", "trending", "new", "home", "static", "public", "next",
  "404", "500", "logout", "verify", "quiz", "outils", "tools",
  // Utility tools shipped 2026-05-20
  "convertisseur", "converter", "meteo", "weather", "heure", "time",
  "jours-feries", "holidays", "crypto", "definition", "define", "cosmos",
  "recettes", "recipes", "astro", "horoscope",
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
    cookies().set(
      "moomz_profile_token",
      newToken,
      cookieOpts({ httpOnly: true, maxAge: 60 * 60 * 24 * 365 * 5 }),
    );
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
  const rawAvatarUrl = String(formData.get("avatar_url") ?? "").trim();
  const avatarUrl = /^https:\/\//i.test(rawAvatarUrl) ? rawAvatarUrl.slice(0, 1024) : null;
  const cosmeticIdRaw = String(formData.get("cosmetic_id") ?? "").trim();
  const cosmeticId = /^[a-z0-9_\-]{1,40}$/i.test(cosmeticIdRaw) ? cosmeticIdRaw : null;

  const socials: Record<string, string> = {};
  if (insta) socials.instagram = insta.replace(/^@/, "");
  if (tiktok) socials.tiktok = tiktok.replace(/^@/, "");
  if (x) socials.x = x.replace(/^@/, "");
  if (website) socials.website = website.startsWith("http") ? website : `https://${website}`;

  // Build patch additively — never overwrite avatar_url / cosmetic_id when the
  // caller didn't include them in the form (preserves prior values).
  const patch: Record<string, unknown> = {
    display_name: displayName,
    bio,
    avatar_emoji: emoji.slice(0, 4),
    socials,
  };
  if (formData.has("avatar_url")) patch.avatar_url = avatarUrl;
  if (formData.has("cosmetic_id")) patch.cosmetic_id = cosmeticId;

  const { error } = await supabase
    .from("profiles")
    .update(patch)
    .eq("id", existing.id);
  if (error) throw new Error(error.message);
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
  // Best-effort geo from Vercel edge headers. Falls back to null in dev / when
  // header is absent. We validate ISO-2 client-side because the DB has a CHECK.
  const rawCc = headers().get("x-vercel-ip-country");
  const country = rawCc && /^[A-Za-z]{2}$/.test(rawCc) ? rawCc.toUpperCase() : null;
  const { error } = await supabase.from("votes").insert({
    poll_id: pollId,
    option_index: optionIndex,
    voter_id: id,
    country,
  });
  if (error && !error.message.toLowerCase().includes("duplicate")) {
    throw new Error(error.message);
  }
  cookies().set(`moomz_voted_${slug}`, String(optionIndex), cookieOpts());
  pushSlugToHistory("moomz_voted_slugs", slug);

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

  // -----
  // Race-safe streak / points / achievements credit via SQL function.
  // The RPC takes an advisory lock keyed on hashtext(voter_id) so two parallel
  // calls from the same voter serialize cleanly. Profile lookup happens inside
  // the txn with FOR UPDATE so writes are consistent.
  // -----
  const ssr = getServerSupabase();
  const { data: auth } = await ssr.auth.getUser();
  const claimToken = cookies().get("moomz_profile_token")?.value ?? null;

  const { data: streakResult } = await supabase.rpc("apply_vote_streak", {
    p_voter_id: id,
    p_user_id: auth.user?.id ?? null,
    p_claim_token: claimToken,
    p_is_majority: isMajority,
    p_is_rebel: isRebel,
    p_is_daily: isDaily,
  });

  type RpcResult = {
    gained?: number;
    multiplier?: number;
    current?: number;
    top?: number;
    total?: number;
    achievements?: string[];
  };
  const sr: RpcResult = (streakResult ?? {}) as RpcResult;

  // Also keep the cookie up-to-date for anon-without-profile users so the
  // top-right HUD shows a sensible streak. For profile users the RPC is
  // authoritative but we still sync the cookie for instant UI.
  cookies().set(
    "moomz_streak",
    JSON.stringify({
      cur: sr.current ?? 1,
      top: sr.top ?? 1,
      pts: sr.total ?? sr.gained ?? 0,
      ts: Date.now(),
    }),
    cookieOpts(),
  );

  return {
    counts,
    total,
    points: {
      gained: sr.gained ?? 1,
      total: sr.total ?? sr.gained ?? 1,
      current: sr.current ?? 1,
      top: sr.top ?? 1,
      multiplier: sr.multiplier ?? 1,
    },
    reveal: { isMajority, isRebel, userPct, majorityPct },
    achievements: sr.achievements ?? [],
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
