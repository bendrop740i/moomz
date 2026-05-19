// Server-side Web Push helper. Lazy-init the web-push module + VAPID, look up
// subscriptions in the DB (service-role to bypass RLS), send, and prune dead
// endpoints when the push service returns 410.

import webpush from "web-push";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let _ready = false;
function initWebpush() {
  if (_ready) return;
  const pub = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY;
  const priv = process.env.VAPID_PRIVATE_KEY;
  const sub = process.env.VAPID_SUBJECT || "mailto:hello@moomz.com";
  if (!pub || !priv) {
    throw new Error(
      "Missing VAPID keys. Set NEXT_PUBLIC_VAPID_PUBLIC_KEY + VAPID_PRIVATE_KEY env vars.",
    );
  }
  webpush.setVapidDetails(sub, pub, priv);
  _ready = true;
}

function getAdminClient(): SupabaseClient {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) throw new Error("Missing Supabase env vars");
  return createClient(url, key, { auth: { persistSession: false } });
}

export type PushPayload = {
  title: string;
  body: string;
  url?: string;
  tag?: string;
  icon?: string;
  badge?: string;
};

type SubscriptionRow = {
  id: string;
  endpoint: string;
  p256dh: string;
  auth: string;
  user_id: string | null;
  claim_token: string | null;
};

async function sendOne(sub: SubscriptionRow, payload: PushPayload, admin: SupabaseClient) {
  try {
    await webpush.sendNotification(
      { endpoint: sub.endpoint, keys: { p256dh: sub.p256dh, auth: sub.auth } },
      JSON.stringify(payload),
      { TTL: 60 * 60 * 12 }, // drop if undelivered after 12h
    );
    return { ok: true as const };
  } catch (e: unknown) {
    const status = (e as { statusCode?: number }).statusCode;
    if (status === 404 || status === 410) {
      // Subscription is gone — mark disabled so we stop trying.
      await admin
        .from("push_subscriptions")
        .update({ disabled: true })
        .eq("endpoint", sub.endpoint);
      return { ok: false as const, gone: true };
    }
    return { ok: false as const, status, error: e instanceof Error ? e.message : String(e) };
  }
}

export async function sendPushToUser(userId: string, payload: PushPayload) {
  initWebpush();
  const admin = getAdminClient();
  const { data: subs } = await admin
    .from("push_subscriptions")
    .select("id,endpoint,p256dh,auth,user_id,claim_token")
    .eq("user_id", userId)
    .eq("disabled", false);
  if (!subs || subs.length === 0) return { sent: 0, failed: 0 };
  let sent = 0;
  let failed = 0;
  await Promise.all(
    (subs as SubscriptionRow[]).map(async (s) => {
      const r = await sendOne(s, payload, admin);
      if (r.ok) sent++; else failed++;
    }),
  );
  return { sent, failed };
}

export async function sendPushToToken(claimToken: string, payload: PushPayload) {
  initWebpush();
  const admin = getAdminClient();
  const { data: subs } = await admin
    .from("push_subscriptions")
    .select("id,endpoint,p256dh,auth,user_id,claim_token")
    .eq("claim_token", claimToken)
    .eq("disabled", false);
  if (!subs || subs.length === 0) return { sent: 0, failed: 0 };
  let sent = 0;
  let failed = 0;
  await Promise.all(
    (subs as SubscriptionRow[]).map(async (s) => {
      const r = await sendOne(s, payload, admin);
      if (r.ok) sent++; else failed++;
    }),
  );
  return { sent, failed };
}

// Fan-out to everyone — used by Daily Moomz cron. Streams in batches so we
// don't hold thousands of rows in memory at once on Edge runtime.
export async function sendPushToAll(payload: PushPayload, opts: { batchSize?: number } = {}) {
  initWebpush();
  const admin = getAdminClient();
  const batch = opts.batchSize ?? 200;
  let from = 0;
  let sent = 0;
  let failed = 0;
  while (true) {
    const { data: subs, error } = await admin
      .from("push_subscriptions")
      .select("id,endpoint,p256dh,auth,user_id,claim_token")
      .eq("disabled", false)
      .range(from, from + batch - 1);
    if (error || !subs || subs.length === 0) break;
    await Promise.all(
      (subs as SubscriptionRow[]).map(async (s) => {
        const r = await sendOne(s, payload, admin);
        if (r.ok) sent++; else failed++;
      }),
    );
    if (subs.length < batch) break;
    from += batch;
  }
  return { sent, failed };
}
