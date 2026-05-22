"use server";

import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { getSupabase } from "@/lib/supabase";
import { getServerSupabase } from "@/lib/supabase-server";
import { TOPIC_IDS, tagQuestion, type Topic } from "@/lib/topics";
import { buildPollSlug, randomSuffix } from "@/lib/slug";
import { t } from "@/lib/i18n";
import { getLocale } from "@/lib/i18n-server";
import { ALL_LOCALIZED_SEGMENTS } from "@/lib/seo/route-names";
import { translatePollSafe } from "@/lib/translate";
import { evaluateFromMetrics } from "@/lib/achievements/engine";

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

// A resolved profile lookup — just the profile id. The session user_id or the
// claim_token cookie is resolved to an id via the SECURITY DEFINER
// resolve_profile_id RPC, so the anon client never reads the secret
// profiles.claim_token column directly.
type ProfileLookup = { id: string };

async function getProfileLookup(): Promise<ProfileLookup | null> {
  const ssr = getServerSupabase();
  const { data } = await ssr.auth.getUser();
  const token = cookies().get("moomz_profile_token")?.value ?? null;
  if (!data.user && !token) return null;
  const { data: id } = await getSupabase().rpc("resolve_profile_id", {
    p_user_id: data.user?.id ?? null,
    p_claim_token: token,
  });
  return id ? { id: id as string } : null;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function applyLookup(q: any, lookup: ProfileLookup): any {
  return q.eq("id", lookup.id);
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
  // Keyboard mash / straight sequences: "qwerty", "asdfgh", "azerty", "abcdef",
  // "zxcvbn", "123456" — a string that's just a run along a keyboard row or the
  // alphabet. Real questions never strip down to a row substring.
  const ROWS = [
    "azertyuiop", "qsdfghjklm", "wxcvbn", // AZERTY
    "qwertyuiop", "asdfghjkl", "zxcvbnm", // QWERTY
    "abcdefghijklmnopqrstuvwxyz", "0123456789", // alphabet / digits
  ];
  const seqs = ROWS.flatMap((r) => [r, [...r].reverse().join("")]);
  const norm = t.toLowerCase().replace(/[^a-z0-9]/g, "");
  if (norm.length >= 5 && seqs.some((s) => s.includes(norm))) return true;
  for (const tok of t.toLowerCase().split(/\s+/)) {
    const w = tok.replace(/[^a-z0-9]/g, "");
    if (w.length >= 5 && seqs.some((s) => s.includes(w))) return true;
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

  const topics = tagQuestion(question, optionsRaw);

  let profileId: string | null = null;
  const lookup = await getProfileLookup();
  if (lookup) {
    const { data: prof } = await applyLookup(
      supabase.from("profiles").select("id, achievements, polls_created, topic_polls"),
      lookup,
    ).maybeSingle();
    if (prof) {
      profileId = prof.id;
      const owned = new Set<string>((prof.achievements ?? []) as string[]);
      const newPollsCreated = (prof.polls_created ?? 0) + 1;
      owned.add("creator");
      owned.add("claimed");
      // Per-topic creation counts → tcreate_* achievements.
      const topicPolls: Record<string, number> = {
        ...((prof.topic_polls as Record<string, number> | null) ?? {}),
      };
      for (const tp of topics) topicPolls[tp] = (topicPolls[tp] ?? 0) + 1;
      await supabase
        .from("profiles")
        .update({
          polls_created: newPollsCreated,
          achievements: Array.from(owned),
          topic_polls: topicPolls,
        })
        .eq("id", prof.id);
    }
  }

  const langCookie = cookies().get("moomz_locale")?.value;
  const lang = ["fr","en","es","it","pt","de","ja","zh"].includes(langCookie ?? "")
    ? langCookie!
    : "fr";

  // Auto-translate the poll into the other 7 locales (free machine
  // translation). Capped at a few seconds and best-effort — a failure just
  // means the poll shows in its original language.
  const translations = await translatePollSafe(question, optionsRaw, lang);

  const { error } = await supabase.from("polls").insert({
    slug,
    question,
    options: optionsRaw,
    profile_id: profileId,
    topics,
    lang,
    translations,
  });
  if (error) throw new Error(error.message);

  pushSlugToHistory("moomz_created_slugs", slug);

  // Parametric achievements + coins for the creator (polls / tcreate families).
  // Best-effort — never blocks poll creation.
  if (profileId) {
    try {
      const ssrC = getServerSupabase();
      const { data: authC } = await ssrC.auth.getUser();
      const claimTokenC = cookies().get("moomz_profile_token")?.value ?? null;
      const { data: statsC } = await supabase.rpc("get_achievement_stats", {
        p_user_id: authC.user?.id ?? null,
        p_claim_token: claimTokenC,
      });
      const stC = (statsC ?? {}) as {
        metrics?: Record<string, number>;
        owned?: string[];
        coin_balance?: number;
      };
      if (stC.metrics) {
        let bal = stC.coin_balance ?? 0;
        const { newlyUnlocked } = evaluateFromMetrics(stC.metrics, new Set(stC.owned ?? []));
        if (newlyUnlocked.length > 0) {
          const { data: claimC } = await supabase.rpc("claim_achievements", {
            p_user_id: authC.user?.id ?? null,
            p_claim_token: claimTokenC,
            p_ids: newlyUnlocked.map((a) => a.id),
          });
          bal = ((claimC ?? {}) as { balance?: number }).balance ?? bal;
        }
        cookies().set("moomz_coins", String(bal), cookieOpts());
      }
    } catch {
      // best-effort — achievements/coins never block poll creation.
    }
  }

  redirect(`/${slug}`);
}

export async function skipPoll(slug: string) {
  pushSlugToHistory("moomz_skipped_slugs", slug);
}

export type PlacePredictionResult =
  | { ok: true; balance: number }
  | { ok: false; error: string; balance?: number };

// M2 — stake coins on a poll outcome. All validation is server-side in the
// place_prediction RPC; this just resolves identity + relays the result.
export async function placePrediction(
  pollId: string,
  optionIndex: number,
  stake: number,
): Promise<PlacePredictionResult> {
  const ssr = getServerSupabase();
  const { data: auth } = await ssr.auth.getUser();
  const claimToken = cookies().get("moomz_profile_token")?.value ?? null;
  const supabase = getSupabase();
  const { data, error } = await supabase.rpc("place_prediction", {
    p_user_id: auth.user?.id ?? null,
    p_claim_token: claimToken,
    p_poll_id: pollId,
    p_option_index: optionIndex,
    p_stake: stake,
  });
  if (error) return { ok: false, error: "server" };
  const r = (data ?? {}) as { ok?: boolean; error?: string; balance?: number };
  if (r.ok) {
    if (typeof r.balance === "number") {
      cookies().set("moomz_coins", String(r.balance), cookieOpts());
    }
    return { ok: true, balance: r.balance ?? 0 };
  }
  return { ok: false, error: r.error ?? "unknown", balance: r.balance };
}

export type BoostResult =
  | { ok: true; balance: number; boostUntil: string }
  | { ok: false; error: string; balance?: number };

// M3 — spend coins to boost your own poll up Trending/Discover for 24h.
export async function boostPoll(pollId: string): Promise<BoostResult> {
  const ssr = getServerSupabase();
  const { data: auth } = await ssr.auth.getUser();
  const claimToken = cookies().get("moomz_profile_token")?.value ?? null;
  const supabase = getSupabase();
  const { data, error } = await supabase.rpc("boost_poll", {
    p_user_id: auth.user?.id ?? null,
    p_claim_token: claimToken,
    p_poll_id: pollId,
  });
  if (error) return { ok: false, error: "server" };
  const r = (data ?? {}) as {
    ok?: boolean;
    error?: string;
    balance?: number;
    boost_until?: string;
  };
  if (r.ok) {
    if (typeof r.balance === "number") {
      cookies().set("moomz_coins", String(r.balance), cookieOpts());
    }
    return { ok: true, balance: r.balance ?? 0, boostUntil: r.boost_until ?? "" };
  }
  return { ok: false, error: r.error ?? "unknown", balance: r.balance };
}

export type BuyCosmeticResult =
  | { ok: true; balance: number }
  | { ok: false; error: string; balance?: number };

// M3 coin shop — buy a cosmetic palette with coins.
export async function buyCosmetic(cosmeticId: string): Promise<BuyCosmeticResult> {
  const ssr = getServerSupabase();
  const { data: auth } = await ssr.auth.getUser();
  const claimToken = cookies().get("moomz_profile_token")?.value ?? null;
  const supabase = getSupabase();
  const { data, error } = await supabase.rpc("buy_cosmetic", {
    p_user_id: auth.user?.id ?? null,
    p_claim_token: claimToken,
    p_cosmetic_id: cosmeticId,
  });
  if (error) return { ok: false, error: "server" };
  const r = (data ?? {}) as { ok?: boolean; error?: string; balance?: number };
  if (r.ok) {
    if (typeof r.balance === "number") {
      cookies().set("moomz_coins", String(r.balance), cookieOpts());
    }
    return { ok: true, balance: r.balance ?? 0 };
  }
  return { ok: false, error: r.error ?? "unknown", balance: r.balance };
}

export async function markPollSeen(slug: string, voteCount: number) {
  cookies().set(`moomz_seen_${slug}`, String(voteCount), cookieOpts());
}

// Records a finished quiz once per quiz per browser (cookie-gated, so it can't
// be farmed) → bumps quizzes_completed for the `quizzer` achievement family.
export async function recordQuizDone(slug: string) {
  if (!slug || typeof slug !== "string") return;
  const jar = cookies();
  const key = `moomz_quizdone_${slug}`.slice(0, 90);
  if (jar.get(key)) return;
  jar.set(key, "1", cookieOpts({ maxAge: 60 * 60 * 24 * 365 }));
  try {
    const ssr = getServerSupabase();
    const { data: auth } = await ssr.auth.getUser();
    const claimToken = jar.get("moomz_profile_token")?.value ?? null;
    await getSupabase().rpc("increment_profile_counter", {
      p_user_id: auth.user?.id ?? null,
      p_claim_token: claimToken,
      p_column: "quizzes_completed",
      p_amount: 1,
    });
  } catch {
    // best-effort — never throws to the quiz UI.
  }
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
  "discover", "formation", "login", "signup", "me", "admin", "api", "settings", "auth",
  "mes-votes", "mes-sondages", "moomz", "app", "dashboard", "help", "about",
  "terms", "privacy", "contact", "support", "blog", "docs", "www", "mail",
  // SEO landing routes that would be shadowed by a /[slug] match
  "idees", "ideas", "guides", "mot", "word", "read", "music", "creators",
  "pricing", "alternatives", "compare", "template", "templates",
  "citations", "citation", "quotes", "quote",
  // Reserved for future / static assets
  "ask", "daily", "world", "register", "password", "sw", "manifest", "robots",
  "sitemap", "opengraph", "icon", "favicon", "apple-icon", "push", "notif",
  "search", "explore", "trending", "new", "home", "static", "public", "next",
  "create", "404", "500", "logout", "verify", "quiz", "outils", "tools",
  "haut-faits", "achievements", "coins", "wallet", "boutique", "shop",
  // Utility tools shipped 2026-05-20
  "convertisseur", "converter", "meteo", "weather", "heure", "time",
  "jours-feries", "holidays", "crypto", "definition", "define", "cosmos",
  "recettes", "recipes", "astro", "horoscope",
  // Locale codes — reserved by the URL-based i18n routing (/{locale}/...)
  "en", "fr", "es", "it", "pt", "de", "ja", "zh", "keywords",
  // Localized SEO route segments (courses, tools, converter, weather…)
  ...ALL_LOCALIZED_SEGMENTS,
]);

function randomToken() {
  return crypto.randomUUID() + crypto.randomUUID().replace(/-/g, "");
}

const USERNAME_ERR: Record<string, { format: string; reserved: string; taken: string }> = {
  fr: { format: "3-20 caractères : a-z, 0-9, _", reserved: "Nom réservé, choisis-en un autre.", taken: "Username déjà pris." },
  en: { format: "3-20 chars: a-z, 0-9, _", reserved: "Reserved name, pick another one.", taken: "Username already taken." },
  es: { format: "3-20 caracteres: a-z, 0-9, _", reserved: "Nombre reservado, elige otro.", taken: "Nombre de usuario ya tomado." },
  it: { format: "3-20 caratteri: a-z, 0-9, _", reserved: "Nome riservato, scegline un altro.", taken: "Username già in uso." },
  pt: { format: "3-20 caracteres: a-z, 0-9, _", reserved: "Nome reservado, escolhe outro.", taken: "Nome de utilizador já em uso." },
  de: { format: "3-20 Zeichen: a-z, 0-9, _", reserved: "Reservierter Name, wähle einen anderen.", taken: "Benutzername bereits vergeben." },
  ja: { format: "3〜20文字: a-z、0-9、_", reserved: "予約済みの名前です。別の名前を選んでください。", taken: "このユーザー名は既に使用されています。" },
  zh: { format: "3-20个字符: a-z、0-9、_", reserved: "该名称已被保留，请换一个。", taken: "用户名已被占用。" },
};

export async function claimUsername(formData: FormData) {
  const username = String(formData.get("username") ?? "").trim().toLowerCase();
  const displayName = String(formData.get("display_name") ?? "").trim() || null;

  const claimLocale = getLocale();
  const uErr = USERNAME_ERR[claimLocale] ?? USERNAME_ERR.en;

  if (!/^[a-z0-9_]{3,20}$/.test(username)) {
    throw new Error(uErr.format);
  }
  if (RESERVED_USERNAMES.has(username)) {
    throw new Error(uErr.reserved);
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
            throw new Error(uErr.taken);
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
      throw new Error(uErr.taken);
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

const UPDATE_PROFILE_ERR: Record<string, { noProfile: string; notFound: string }> = {
  fr: { noProfile: "Pas de profil à éditer.", notFound: "Profil introuvable." },
  en: { noProfile: "No profile to edit.", notFound: "Profile not found." },
  es: { noProfile: "No hay perfil para editar.", notFound: "Perfil no encontrado." },
  it: { noProfile: "Nessun profilo da modificare.", notFound: "Profilo non trovato." },
  pt: { noProfile: "Nenhum perfil para editar.", notFound: "Perfil não encontrado." },
  de: { noProfile: "Kein Profil zum Bearbeiten.", notFound: "Profil nicht gefunden." },
  ja: { noProfile: "編集するプロフィールがありません。", notFound: "プロフィールが見つかりません。" },
  zh: { noProfile: "没有可编辑的个人资料。", notFound: "找不到个人资料。" },
};

export async function updateProfile(formData: FormData) {
  const upLocale = getLocale();
  const upErr = UPDATE_PROFILE_ERR[upLocale] ?? UPDATE_PROFILE_ERR.en;
  const lookup = await getProfileLookup();
  if (!lookup) throw new Error(upErr.noProfile);

  const supabase = getSupabase();
  const { data: existing } = await applyLookup(
    supabase.from("profiles").select("id"),
    lookup,
  ).maybeSingle();
  if (!existing) throw new Error(upErr.notFound);

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
  // Parametric achievement engine (lib/achievements): ids just unlocked.
  newAchievements: string[];
  // Coin wallet after this vote. `gained` = coins from achievements unlocked.
  coins: { balance: number; gained: number };
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

  // Poll topics — fed to apply_vote_streak so the topic_votes counter and the
  // per-topic vote achievements progress.
  const { data: pollRow } = await supabase
    .from("polls")
    .select("topics")
    .eq("id", pollId)
    .maybeSingle<{ topics: string[] | null }>();
  const pollTopics = (pollRow?.topics ?? []).filter(
    (x): x is string => typeof x === "string" && x.length > 0,
  );

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
    p_topics: pollTopics,
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

  // Parametric achievements + coins. Non-critical: every failure is swallowed
  // so it can never block or fail the vote. apply_vote_streak already committed
  // the fresh counters, so the stats read below already reflects this vote.
  let coinBalance = 0;
  let coinsGained = 0;
  let newAchievements: string[] = [];
  try {
    const { data: statsData } = await supabase.rpc("get_achievement_stats", {
      p_user_id: auth.user?.id ?? null,
      p_claim_token: claimToken,
    });
    const st = (statsData ?? {}) as {
      has_profile?: boolean;
      metrics?: Record<string, number>;
      owned?: string[];
      coin_balance?: number;
    };
    if (st.has_profile && st.metrics) {
      coinBalance = st.coin_balance ?? 0;
      const owned = new Set(st.owned ?? []);
      const { newlyUnlocked } = evaluateFromMetrics(st.metrics, owned);
      if (newlyUnlocked.length > 0) {
        const { data: claimData } = await supabase.rpc("claim_achievements", {
          p_user_id: auth.user?.id ?? null,
          p_claim_token: claimToken,
          p_ids: newlyUnlocked.map((a) => a.id),
        });
        const cd = (claimData ?? {}) as { applied?: string[]; coins?: number; balance?: number };
        newAchievements = cd.applied ?? [];
        coinsGained = cd.coins ?? 0;
        coinBalance = cd.balance ?? coinBalance;
      }
    }
  } catch {
    // achievements / coins are best-effort — never break the vote.
  }

  // Sync the coin balance to a (JS-readable) cookie so the HUD shows it on
  // first paint without a round-trip — mirrors the moomz_streak pattern.
  cookies().set("moomz_coins", String(coinBalance), cookieOpts());

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
    newAchievements,
    coins: { balance: coinBalance, gained: coinsGained },
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
