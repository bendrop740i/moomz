import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getLocale } from "@/lib/i18n-server";
import { t } from "@/lib/i18n";
import { getSessionUserId } from "@/lib/supabase-server";
import LoginForm from "./login-form";

export const dynamic = "force-dynamic";

// Login pages have no SEO value (just a form, no content for crawlers),
// and indexing magic-link auth flows can leak the URL into search results.
// We keep the URL crawlable (robots.txt allows it) but mark it noindex.
const LOGIN_TITLE: Record<string, string> = {
  fr: "Se connecter — moomz",
  en: "Sign in — moomz",
  es: "Iniciar sesión — moomz",
  it: "Accedi — moomz",
  pt: "Entrar — moomz",
  de: "Anmelden — moomz",
  ja: "ログイン — moomz",
  zh: "登录 — moomz",
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = getLocale();
  return {
    title: LOGIN_TITLE[locale] ?? LOGIN_TITLE.en,
    description: t("misc.loginMetaDescription", locale),
    alternates: {
      canonical: "https://moomz.com/login",
    },
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default async function LoginPage() {
  const userId = await getSessionUserId();
  if (userId) redirect("/me");

  const locale = getLocale();
  const tx = (k: string) => t(k, locale);

  return (
    <div className="space-y-6 fade-up max-w-md mx-auto px-1">
      <header className="space-y-2 text-center">
        <h1 className="text-3xl sm:text-4xl font-display tracking-tight bg-gradient-to-br from-white via-pink-200 to-purple-300 bg-clip-text text-transparent">
          {tx("auth.login.title")}
        </h1>
        <p className="text-white/60 text-sm sm:text-base max-w-xs mx-auto">
          {tx("auth.login.body")}
        </p>
      </header>
      <LoginForm
        placeholder={tx("auth.login.placeholder")}
        cta={tx("auth.login.cta")}
        sending={tx("auth.login.sending")}
        sentTitle={tx("auth.login.sent.title")}
        sentBody={tx("auth.login.sent.body")}
        errorText={tx("auth.login.error")}
      />
    </div>
  );
}
