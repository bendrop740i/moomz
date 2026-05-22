"use client";

import { usePathname } from "next/navigation";
import SiteFooter from "./site-footer";
import LocaleSwitcher from "./locale-switcher";

// `/` and `/discover` render the immersive full-screen feed — a 100dvh scroll
// container that IS the whole experience. The SEO footer + locale switcher
// (meant for the scrollable content pages) must not sit in a dead zone below
// it. Everywhere else they render normally at the foot of the page.
const FEED_ROUTES = new Set(["/", "/discover"]);

export default function FooterZone() {
  const pathname = usePathname();
  if (pathname && FEED_ROUTES.has(pathname)) return null;

  return (
    <>
      <SiteFooter />
      <div className="mt-6 flex justify-center border-t border-white/10 pt-6">
        <LocaleSwitcher placement="up" />
      </div>
    </>
  );
}
