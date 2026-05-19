// moomz service worker — minimal: cache-first for static assets, network-first for HTML.
// Also receives Web Push events (Daily Moomz, ASK pings, streak warnings).
// Version bump invalidates old caches on next activate.

const VERSION = "moomz-v2-push";
const STATIC_CACHE = `${VERSION}-static`;

const STATIC_PATHS = ["/", "/icon-192.svg", "/icon-512.svg", "/manifest.webmanifest"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((c) => c.addAll(STATIC_PATHS)).catch(() => {}),
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => !k.startsWith(VERSION)).map((k) => caches.delete(k))),
    ),
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  // Never cache Supabase auth callbacks or API routes.
  if (url.pathname.startsWith("/auth/") || url.pathname.startsWith("/api/")) return;

  const isStatic =
    url.pathname.startsWith("/_next/static/") ||
    url.pathname.endsWith(".svg") ||
    url.pathname.endsWith(".png") ||
    url.pathname.endsWith(".ico") ||
    url.pathname.endsWith(".woff2");

  if (isStatic) {
    event.respondWith(
      caches.match(req).then(
        (hit) =>
          hit ||
          fetch(req).then((res) => {
            const copy = res.clone();
            caches.open(STATIC_CACHE).then((c) => c.put(req, copy)).catch(() => {});
            return res;
          }),
      ),
    );
    return;
  }

  // HTML / everything else: network first, fallback to cache (offline).
  event.respondWith(
    fetch(req)
      .then((res) => {
        const copy = res.clone();
        caches.open(STATIC_CACHE).then((c) => c.put(req, copy)).catch(() => {});
        return res;
      })
      .catch(() => caches.match(req).then((hit) => hit || caches.match("/"))),
  );
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
