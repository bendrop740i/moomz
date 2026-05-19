// moomz service worker.
// - HTML: network-first with 1500ms timeout + stale-while-revalidate fallback
// - Static (/_next/static/*, fonts, images): cache-first, long TTL, versioned cache name
// - Cross-origin (Supabase, fonts.googleapis, image CDNs): stale-while-revalidate
// - Never cache: non-GET, /api/*, /auth/*, server actions (next-action header)
// Also receives Web Push events (Daily Moomz, ASK pings, streak warnings).
// Version bump invalidates old caches on next activate.

const VERSION = "moomz-v3-swr";
const HTML_CACHE = `${VERSION}-html`;
const STATIC_CACHE = `${VERSION}-static`;
const RUNTIME_CACHE = `${VERSION}-runtime`;

const HTML_NETWORK_TIMEOUT_MS = 1500;

const PRECACHE_PATHS = ["/", "/icon-192.svg", "/icon-512.svg", "/manifest.webmanifest"];

const CROSS_ORIGIN_ALLOW = [
  "supabase.co",
  "supabase.in",
  "fonts.googleapis.com",
  "fonts.gstatic.com",
  "images.unsplash.com",
  "res.cloudinary.com",
  "cdn.jsdelivr.net",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(HTML_CACHE).then((c) => c.addAll(PRECACHE_PATHS)).catch(() => {}),
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys.filter((k) => !k.startsWith(VERSION)).map((k) => caches.delete(k)),
      );
      await self.clients.claim();
    })(),
  );
});

function isHTMLRequest(req) {
  if (req.mode === "navigate") return true;
  const accept = req.headers.get("accept") || "";
  return accept.includes("text/html");
}

function isStaticPath(url) {
  return (
    url.pathname.startsWith("/_next/static/") ||
    url.pathname.endsWith(".svg") ||
    url.pathname.endsWith(".png") ||
    url.pathname.endsWith(".jpg") ||
    url.pathname.endsWith(".jpeg") ||
    url.pathname.endsWith(".webp") ||
    url.pathname.endsWith(".gif") ||
    url.pathname.endsWith(".ico") ||
    url.pathname.endsWith(".woff") ||
    url.pathname.endsWith(".woff2") ||
    url.pathname.endsWith(".ttf") ||
    url.pathname.endsWith(".css") ||
    url.pathname.endsWith(".js")
  );
}

function isAllowedCrossOrigin(url) {
  return CROSS_ORIGIN_ALLOW.some((host) => url.hostname.endsWith(host));
}

// HTML strategy: race network vs 1500ms timeout, fall back to cached HTML and
// revalidate in the background. Never serve cached HTML for non-2xx network
// responses (we still return the bad response so the user sees the real error).
async function htmlStrategy(req) {
  const cache = await caches.open(HTML_CACHE);
  const cached = await cache.match(req);

  const networkPromise = fetch(req)
    .then((res) => {
      if (res && res.ok && res.type !== "opaque") {
        cache.put(req, res.clone()).catch(() => {});
      }
      return res;
    })
    .catch(() => null);

  // Race network against a timeout. If network wins with a 2xx, use it.
  const timed = new Promise((resolve) => {
    setTimeout(() => resolve(null), HTML_NETWORK_TIMEOUT_MS);
  });

  const raced = await Promise.race([networkPromise, timed]);
  if (raced && raced.ok) return raced;

  // Either network was slow OR returned non-2xx. Prefer cache if we have it,
  // and keep the network promise running so the cache updates in background.
  if (cached) {
    // background revalidate (already running via networkPromise)
    return cached;
  }

  // No cache: wait for network to settle whatever it does.
  const finalRes = await networkPromise;
  if (finalRes) return finalRes;

  // Total offline: last-resort fallback to root shell.
  const shell = await cache.match("/");
  if (shell) return shell;
  return new Response("offline", { status: 503, statusText: "offline" });
}

// Cache-first for static assets. Versioned cache means old build assets vanish.
async function cacheFirst(req, cacheName) {
  const cache = await caches.open(cacheName);
  const hit = await cache.match(req);
  if (hit) return hit;
  try {
    const res = await fetch(req);
    if (res && res.ok && (res.type === "basic" || res.type === "cors")) {
      cache.put(req, res.clone()).catch(() => {});
    }
    return res;
  } catch {
    return hit || Response.error();
  }
}

// Stale-while-revalidate for cross-origin GETs (Supabase, fonts, images).
async function staleWhileRevalidate(req, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(req);
  const network = fetch(req)
    .then((res) => {
      if (res && res.ok) {
        cache.put(req, res.clone()).catch(() => {});
      }
      return res;
    })
    .catch(() => null);
  return cached || (await network) || Response.error();
}

self.addEventListener("fetch", (event) => {
  const req = event.request;

  // Skip non-GET entirely (POST/PUT/DELETE/PATCH, server actions, form submits).
  if (req.method !== "GET") return;

  // Next.js server actions are POSTs but be doubly safe: any next-action header.
  if (req.headers.get("next-action")) return;

  const url = new URL(req.url);

  // Skip auth callbacks and ALL API routes (could be auth-sensitive).
  if (url.pathname.startsWith("/auth/") || url.pathname.startsWith("/api/")) return;

  // Skip the SW file itself so updates always land.
  if (url.pathname === "/sw.js") return;

  // Cross-origin: only handle allow-listed hosts via SWR. Let the rest pass through.
  if (url.origin !== self.location.origin) {
    if (isAllowedCrossOrigin(url)) {
      event.respondWith(staleWhileRevalidate(req, RUNTIME_CACHE));
    }
    return;
  }

  // Same-origin static assets: cache-first with versioned cache.
  if (isStaticPath(url)) {
    event.respondWith(cacheFirst(req, STATIC_CACHE));
    return;
  }

  // Same-origin HTML / navigation: network-first w/ 1.5s timeout + SWR fallback.
  if (isHTMLRequest(req)) {
    event.respondWith(htmlStrategy(req));
    return;
  }

  // Anything else same-origin and GET: SWR is safe.
  event.respondWith(staleWhileRevalidate(req, RUNTIME_CACHE));
});

// --- Web Push ------------------------------------------------------------
// Server payload shape (see lib/push.ts):
//   { title, body, url, tag?, icon?, badge? }

self.addEventListener("push", (event) => {
  let payload = { title: "moomz", body: "Nouvelle activité 👀", url: "/" };
  try {
    if (event.data) payload = { ...payload, ...event.data.json() };
  } catch {
    // Some browsers send empty pushes to test the channel — fall through.
  }
  const { title, body, url, tag, icon, badge } = payload;

  event.waitUntil(
    self.registration.showNotification(title, {
      body,
      icon: icon || "/icon",
      badge: badge || "/icon",
      tag: tag || "moomz",
      // Same tag → notifications replace each other instead of stacking.
      renotify: true,
      data: { url: url || "/" },
    }),
  );
});

// Tapping the notification: focus an existing tab if open, else open new.
self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const target = event.notification.data?.url || "/";

  event.waitUntil(
    (async () => {
      const all = await self.clients.matchAll({
        type: "window",
        includeUncontrolled: true,
      });
      for (const client of all) {
        try {
          const url = new URL(client.url);
          if (url.origin === self.location.origin) {
            client.focus();
            client.navigate(target);
            return;
          }
        } catch {
          // ignore malformed client URLs
        }
      }
      await self.clients.openWindow(target);
    })(),
  );
});
