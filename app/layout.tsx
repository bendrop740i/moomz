import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Bagel_Fat_One } from "next/font/google";
import BottomNav from "./bottom-nav-v2";
import SiteHeader from "./site-header";
import SiteFooter from "./site-footer";
import StreakHUD from "./streak-hud";
import AchievementToast from "./achievement-toast";
import { LocaleProvider } from "./locale-context";
import LocaleSwitcher from "./locale-switcher";
import ServiceWorkerRegister from "./sw-register";
import AppPrompts from "./app-prompts";
import { MusicProvider } from "./music-provider";
import MusicMiniPlayer from "./music-mini-player";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import { getLocale } from "@/lib/i18n-server";
import { getDirection } from "@/lib/dir";
import { t } from "@/lib/i18n";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#ff3d8b",
};

const font = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sans",
  preload: true,
  adjustFontFallback: true,
  fallback: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
});

const fontDisplay = Bagel_Fat_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-display",
  preload: false,
  adjustFontFallback: true,
  fallback: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://moomz.com"),
  title: "moomz — quick vibe check",
  description: "Crée un sondage en 10 secondes. Partage le lien. Vois la vibe en live.",
  openGraph: {
    title: "moomz — quick vibe check",
    description: "Crée un sondage en 10 secondes. Partage le lien. Vois la vibe en live.",
    type: "website",
    siteName: "moomz",
  },
  twitter: {
    card: "summary_large_image",
    title: "moomz — quick vibe check",
    description: "Crée un sondage en 10 secondes. Partage le lien. Vois la vibe en live.",
  },
  verification: {
    google: "KGnDbYDNmHH_vLW6L8W4iwd9rxdxSNOvtRVsBygD2ts",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = getLocale();
  const dir = getDirection();
  const installStrings = {
    cta: t("install.cta", locale),
    iosTitle: t("install.ios.title", locale),
    iosBody: t("install.ios.body", locale),
    dismiss: t("install.dismiss", locale),
  };
  const pushStrings = {
    headline: t("push.headline", locale),
    body: t("push.body", locale),
    allow: t("push.allow", locale),
    dismiss: t("push.dismiss", locale),
  };
  return (
    <html lang={dir === "rtl" ? "ar" : locale} dir={dir} className={`${font.variable} ${fontDisplay.variable} font-sans`}>
      <body className="min-h-screen text-white antialiased overflow-x-hidden">
        <LocaleProvider value={locale}>
          <MusicProvider>
          <div className="fixed inset-0 -z-10 bg-[#0b0613]" />
          <div className="fixed inset-0 -z-10 opacity-70 overflow-hidden">
            <div className="blob blob-1" />
            <div className="blob blob-2" />
            <div className="blob blob-3" />
          </div>
          <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(11,6,19,0.6)_100%)]" />
          <SiteHeader />
          <main className="relative mx-auto w-full max-w-xl px-4 pt-5 sm:px-6 sm:pt-6 pb-[calc(7rem+env(safe-area-inset-bottom))]">
            <AppPrompts installStrings={installStrings} pushStrings={pushStrings} />
            {children}
            <SiteFooter />
            <div className="mt-6 flex justify-center border-t border-white/10 pt-6">
              <LocaleSwitcher placement="up" />
            </div>
          </main>
          <StreakHUD />
          <AchievementToast />
          <BottomNav />
          <MusicMiniPlayer />
          <ServiceWorkerRegister />
          </MusicProvider>
        </LocaleProvider>
        <Analytics />
        <SpeedInsights />
        {process.env.NEXT_PUBLIC_ADSENSE_CLIENT && (
          <Script
            id="adsbygoogle-loader"
            async
            strategy="afterInteractive"
            crossOrigin="anonymous"
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT}`}
          />
        )}
      </body>
    </html>
  );
}
