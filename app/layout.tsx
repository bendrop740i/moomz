import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import BottomNav from "./bottom-nav";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#ff3d8b",
};

const font = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={font.className}>
      <body className="min-h-screen text-white antialiased overflow-x-hidden">
        <div className="fixed inset-0 -z-10 bg-[#0b0613]" />
        <div className="fixed inset-0 -z-10 opacity-70">
          <div className="blob blob-1" />
          <div className="blob blob-2" />
          <div className="blob blob-3" />
        </div>
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(11,6,19,0.6)_100%)]" />
        <main className="relative mx-auto w-full max-w-xl px-5 pt-8 sm:pt-12 pb-28">{children}</main>
        <BottomNav />
      </body>
    </html>
  );
}
