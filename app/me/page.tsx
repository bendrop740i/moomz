import { getMyProfile } from "@/lib/profile";
import ProfileForm from "./profile-form";

export const dynamic = "force-dynamic";

export default async function MePage() {
  const profile = await getMyProfile();
  return (
    <div className="space-y-6 fade-up">
      <header className="space-y-1">
        <h1 className="text-3xl font-bold tracking-tight">
          {profile ? "Mon profil" : "Réserve ton nom"}
        </h1>
        <p className="text-white/50 text-xs sm:text-sm">
          {profile
            ? `Ton URL publique : moomz.com/${profile.username}`
            : "Choisis un username pour avoir ta page publique moomz.com/toi"}
        </p>
      </header>
      <ProfileForm initialProfile={profile} />
    </div>
  );
}
