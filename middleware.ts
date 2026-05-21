import { NextResponse, type NextRequest } from "next/server";

// --- URL-based locale routing for the SEO surface --------------------------
// moomz keeps the homepage + app + poll short-links (moomz.com/abc12) at the
// root with cookie-based locale. The SEO content surface gets a /{locale}/
// prefix so Google can index every language separately.
//
// How it works:
//  - /{locale}/{seo route}  → REWRITTEN (invisibly) to /{seo route}, with the
//    locale carried in an `x-moomz-locale` request header that getLocale()
//    reads. Google sees /en/quiz; Next renders the existing app/quiz route.
//  - /{locale}  (bare)      → REDIRECTED to / — the homepage always lives at
//    moomz.com; the chosen language is remembered in the cookie.
//  - /{old SEO route}       → 301-REDIRECTED to /{detected locale}/{route},
//    so old links and the existing Google index never 404.
//  - everything else (home, /[slug] polls, app surface) → untouched.
// ---------------------------------------------------------------------------

const LOCALES = ["fr", "en", "es", "it", "pt", "de", "ja", "zh"];

// Old un-prefixed SEO routes that 301 to their locale-prefixed URL.
// These all render via getLocale(), so /{locale}/<route> already works
// through the generic rewrite above — this just sends the bare URL there.
// The twin routes (word/mot, ideas/idees, define/definition,
// quotes/citations) are handled separately once unified.
const REDIRECT_ROUTES = new Set<string>([
  "quiz", "template", "compare", "vs", "outils", "blog", "guides", "read",
  "explore", "formation", "creators", "alternatives", "pricing", "q",
  "convertisseur", "meteo", "heure", "crypto", "cosmos", "astro",
  "recettes", "jours-feries",
]);

const COOKIE = "moomz_locale";
const YEAR = 60 * 60 * 24 * 365;

function detectLocale(req: NextRequest): string {
  const cookie = req.cookies.get(COOKIE)?.value;
  if (cookie && LOCALES.includes(cookie)) return cookie;
  const accept = req.headers.get("accept-language");
  if (accept) {
    for (const part of accept.split(",")) {
      const lang = part.split(";")[0].trim().slice(0, 2).toLowerCase();
      if (LOCALES.includes(lang)) return lang;
    }
  }
  return "en"; // international default for the SEO surface
}

export function middleware(req: NextRequest): NextResponse {
  const { pathname } = req.nextUrl;
  const segments = pathname.split("/").filter(Boolean);
  const first = segments[0];

  // 1) Locale-prefixed URL.
  if (first && LOCALES.includes(first)) {
    // Bare locale (/en, /fr): the homepage is moomz.com — redirect there and
    // remember the language.
    if (segments.length === 1) {
      const url = req.nextUrl.clone();
      url.pathname = "/";
      const res = NextResponse.redirect(url, 307);
      res.cookies.set(COOKIE, first, { path: "/", maxAge: YEAR, sameSite: "lax" });
      return res;
    }
    // /{locale}/{rest}: rewrite to the un-prefixed route, carry the locale in
    // a request header. Invisible to the user and to Google (no redirect).
    const url = req.nextUrl.clone();
    url.pathname = "/" + segments.slice(1).join("/");
    const headers = new Headers(req.headers);
    headers.set("x-moomz-locale", first);
    const res = NextResponse.rewrite(url, { request: { headers } });
    res.cookies.set(COOKIE, first, { path: "/", maxAge: YEAR, sameSite: "lax" });
    return res;
  }

  // 2) Old un-prefixed SEO route → 301 to its locale-prefixed URL.
  if (first && REDIRECT_ROUTES.has(first)) {
    const url = req.nextUrl.clone();
    url.pathname = `/${detectLocale(req)}${pathname}`;
    return NextResponse.redirect(url, 301);
  }

  // 3) Homepage, polls, app surface — untouched.
  return NextResponse.next();
}

export const config = {
  // Skip Next internals, API routes and anything with a file extension.
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
