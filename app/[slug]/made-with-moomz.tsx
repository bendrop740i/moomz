import Link from "next/link";

export default function MadeWithMoomz() {
  return (
    <aside aria-label="Crée ton vibe check gratuit sur moomz">
      <Link
        href="/"
        title="Crée ton vibe check gratuit sur moomz"
        aria-label="Crée ton vibe check gratuit sur moomz — sondage anonyme et linker de profil"
        className="block glass rounded-3xl p-5 sm:p-6 mt-2 text-center hover:scale-[1.01] active:scale-[0.99] transition group relative overflow-hidden"
      >
        <div
          aria-hidden
          className="absolute -top-12 -left-12 w-40 h-40 rounded-full opacity-50 blur-3xl pointer-events-none"
          style={{ background: "#ff3d8b" }}
        />
        <div
          aria-hidden
          className="absolute -bottom-12 -right-12 w-44 h-44 rounded-full opacity-40 blur-3xl pointer-events-none"
          style={{ background: "#7c3aed" }}
        />

        <div className="relative space-y-2">
          <div className="text-[11px] uppercase tracking-[0.2em] text-white/40 font-semibold">
            ✨ Propulsé par moomz
          </div>
          <div className="text-xl sm:text-2xl font-bold tracking-tight">
            Crée ton vibe check gratuit
          </div>
          <div className="text-sm text-white/60 max-w-xs mx-auto text-balance">
            Profil + vibe checks + questions anonymes. En 10 secondes.
          </div>
          <div className="pt-2 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-2 text-sm font-bold shadow-lg shadow-pink-500/30 group-hover:scale-[1.04] transition">
            <span>Crée ton vibe check gratuit sur moomz</span>
            <span aria-hidden>→</span>
          </div>
          <span className="sr-only">
            moomz — vibe check viral, sondage gratuit anonyme et linker de profil tout-en-un pour partager ton lien en bio. Crée un vibe check gratuit en 10 secondes, sans inscription, et partage ton linker moomz comme alternative à Linktree.
          </span>
        </div>
      </Link>
    </aside>
  );
}
