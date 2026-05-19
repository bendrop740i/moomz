import { redirect } from "next/navigation";
import { getLocale } from "@/lib/i18n-server";
import { t } from "@/lib/i18n";
import { getSessionUserId } from "@/lib/supabase-server";
import LoginForm from "./login-form";

export const dynamic = "force-dynamic";

export default async function LoginPage() {
  const userId = await getSessionUserId();
  if (userId) redirect("/me");

  const locale = getLocale();
  const tx = (k: string) => t(k, locale);

  return (
    <div className="space-y-6 fade-up max-w-md mx-auto">
      <header className="space-y-1 text-center">
        <h1 className="text-3xl font-display tracking-tight">
          {tx("auth.login.title")}
        </h1>
        <p className="text-white/50 text-sm">{tx("auth.login.body")}</p>
      </header>
      <LoginForm
        placeholder={tx("auth.login.placeholder")}
        cta={tx("auth.login.cta")}
        sending={tx("auth.login.sending")}
        sentTitle={tx("auth.login.sent.title")}
        sentBody={tx("auth.login.sent.body")}
        errorText={tx("auth.login.error")}
        google={tx("auth.login.google")}
        orSeparator={tx("auth.login.or")}
      />
    </div>
  );
}
