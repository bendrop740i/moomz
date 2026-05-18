import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "moomz — vibe check en un lien",
  description: "Crée un sondage en 10s, partage le lien, vois les votes en live.",
  openGraph: {
    title: "moomz — vibe check en un lien",
    description: "Crée un sondage en 10s, partage le lien, vois les votes en live.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-screen text-neutral-900 antialiased">
        <main className="mx-auto max-w-xl px-5 py-10 sm:py-16">{children}</main>
      </body>
    </html>
  );
}
