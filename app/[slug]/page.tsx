import type { Metadata } from "next";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { getSupabase, type Poll } from "@/lib/supabase";
import { getProfileByUsername, getMyProfile } from "@/lib/profile";
import VoteClient from "./vote-client";
import MarkSeenIfOwner from "../mark-seen-if-owner";
import ProfileView from "./profile-view";
import PollExplainer from "./poll-explainer";
import KeywordChips from "./keyword-chips";
import QuoteChips from "./quote-chips";
import PredictionWidget, { type ExistingPrediction } from "./prediction-widget";
import BoostButton from "./boost-button";
import BelowPollSeo from "./below-poll-seo";
import BelowProfileSeo from "./below-profile-seo";
import type { AskItem } from "./ask-section";
import { getServerSupabase } from "@/lib/supabase-server";
import { getLocale } from "@/lib/i18n-server";
import type { Locale } from "@/lib/i18n";
import { jsonLdHtml } from "@/lib/json-ld";

const META_DESC: Record<Locale, {
  pollFallback: (q: string) => string;
  noSlug: string;
  profileFallback: (username: string) => string;
}> = {
  fr: {
    pollFallback: (q) => `Vote sur "${q}" — découvre ce que les gens pensent vraiment, et compare ton choix.`,
    noSlug: "Crée ton sondage en 10 secondes.",
    profileFallback: (u) => `Découvre les sondages de @${u}`,
  },
  en: {
    pollFallback: (q) => `Vote on "${q}" — see what people really think and compare your choice.`,
    noSlug: "Create your poll in 10 seconds.",
    profileFallback: (u) => `Check out @${u}'s polls`,
  },
  es: {
    pollFallback: (q) => `Vota en "${q}" — descubre lo que la gente piensa y compara tu elección.`,
    noSlug: "Crea tu encuesta en 10 segundos.",
    profileFallback: (u) => `Descubre las encuestas de @${u}`,
  },
  it: {
    pollFallback: (q) => `Vota su "${q}" — scopri cosa pensa la gente e confronta la tua scelta.`,
    noSlug: "Crea il tuo sondaggio in 10 secondi.",
    profileFallback: (u) => `Scopri i sondaggi di @${u}`,
  },
  pt: {
    pollFallback: (q) => `Vote em "${q}" — veja o que as pessoas realmente pensam e compare a tua escolha.`,
    noSlug: "Cria a tua enquete em 10 segundos.",
    profileFallback: (u) => `Descobre as enquetes de @${u}`,
  },
  de: {
    pollFallback: (q) => `Stimme ab zu "${q}" — sieh, was andere wirklich denken, und vergleiche deine Wahl.`,
    noSlug: "Erstell deine Umfrage in 10 Sekunden.",
    profileFallback: (u) => `Entdecke die Umfragen von @${u}`,
  },
  ja: {
    pollFallback: (q) => `「${q}」に投票しよう — みんなが本当に思っていることを見て、自分と比べよう。`,
    noSlug: "10秒で投票を作ろう。",
    profileFallback: (u) => `@${u} の投票をチェック`,
  },
  zh: {
    pollFallback: (q) => `投票「${q}」— 看看大家真实的想法，和自己的选择对比一下。`,
    noSlug: "10 秒内创建你的投票。",
    profileFallback: (u) => `查看 @${u} 的投票`,
  },
};

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}): Promise<Metadata> {
  const supabase = getSupabase();
  const handle = params.slug;

  const metaLocale = (getLocale() as Locale) in META_DESC ? (getLocale() as Locale) : "en";
  const metaCopy = META_DESC[metaLocale] ?? META_DESC.en;

  if (/^[a-z0-9_]{3,20}$/.test(handle)) {
    const profile = await getProfileByUsername(handle);
    if (profile) {
      const title = `@${profile.username}${profile.display_name ? ` (${profile.display_name})` : ""} — moomz`;
      const description = profile.bio ?? metaCopy.profileFallback(profile.username);
      // Animation/character accounts are intentionally not indexed: they exist
      // to seed engagement, not to compete in search. `follow:true` so internal
      // links still pass authority.
      const robots = profile.is_bot ? { index: false, follow: true } : undefined;
      return {
        title,
        description,
        ...(robots ? { robots } : {}),
        openGraph: { title, description, type: "profile" },
        twitter: { card: "summary_large_image", title, description },
      };
    }
  }

  const { data: poll } = await supabase
    .from("polls")
    .select("question,explainer,lang,options,translations")
    .eq("slug", handle)
    .maybeSingle<{ question: string; explainer: Record<string, string> | null; lang: string | null; options: string[]; translations: Record<string, { question: string; options: string[] }> | null }>();

  // Show the question in the viewer's language if an auto-translation exists.
  const metaQuestion =
    (poll?.lang && poll.lang !== metaLocale
      ? poll.translations?.[metaLocale]?.question
      : null) || poll?.question;
  const title = poll ? `${metaQuestion} — moomz` : "moomz";

  // Use the first explainer paragraph as the description when available — much
  // richer + keyword-dense vs the generic fallback. Google / social previews
  // love unique meta descriptions.
  let description: string;
  if (poll) {
    const firstExplainer =
      poll.explainer && typeof poll.explainer === "object"
        ? Object.values(poll.explainer).filter(Boolean)[0]
        : null;
    if (firstExplainer) {
      description = String(firstExplainer).slice(0, 200);
    } else {
      description = metaCopy.pollFallback(poll.question).slice(0, 200);
    }
  } else {
    description = metaCopy.noSlug;
  }

  const canonical = `https://moomz.com/${handle}`;

  // Personal-verdict share card: a post-vote share carries ?v=<optionIndex>
  // (+ ?l=<locale>) so the unfurled link preview shows the sharer's own result
  // instead of the neutral poll card. See app/api/og/verdict.
  const vRaw = typeof searchParams?.v === "string" ? searchParams.v : undefined;
  const vIdx = vRaw && /^\d+$/.test(vRaw) ? Number(vRaw) : -1;
  const verdictImg =
    poll && vIdx >= 0 && vIdx < (poll.options?.length ?? 0)
      ? `https://moomz.com/api/og/verdict?slug=${encodeURIComponent(handle)}&v=${vIdx}&l=${
          typeof searchParams?.l === "string" ? searchParams.l : metaLocale
        }`
      : null;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      type: "website",
      url: canonical,
      ...(verdictImg ? { images: [{ url: verdictImg, width: 1200, height: 630 }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(verdictImg ? { images: [verdictImg] } : {}),
    },
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const supabase = getSupabase();
  const handle = params.slug;

  if (/^[a-z0-9_]{3,20}$/.test(handle)) {
    const profile = await getProfileByUsername(handle);
    if (profile) {
      const breadcrumbLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "moomz", item: "https://moomz.com/" },
          {
            "@type": "ListItem",
            position: 2,
            name: `@${profile.username}`,
            item: `https://moomz.com/${profile.username}`,
          },
        ],
      };
      const sameAs = profile.socials
        ? Object.values(profile.socials).filter((v): v is string => typeof v === "string" && /^https?:\/\//i.test(v))
        : [];
      const profileLd = {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        mainEntity: {
          "@type": "Person",
          name: profile.display_name || `@${profile.username}`,
          identifier: profile.username,
          alternateName: `@${profile.username}`,
          url: `https://moomz.com/${profile.username}`,
          ...(profile.bio ? { description: profile.bio } : {}),
          ...(sameAs.length ? { sameAs } : {}),
        },
        url: `https://moomz.com/${profile.username}`,
      };
      // Fetch all profile-page data in parallel. The pending-ask query is also
      // issued upfront (rather than waiting on viewerProfile to determine
      // ownership) — it's a single bounded query via the public view and saves
      // a round-trip for the (common) owner case.
      const [pollsRes, statsRes, askAnsweredRes, askPendingRes, viewerProfile] =
        await Promise.all([
          supabase
            .from("polls_with_stats")
            .select("slug,question,options,vote_count,created_at,last_vote_at")
            .eq("profile_id", profile.id)
            .order("created_at", { ascending: false })
            .limit(30),
          supabase
            .from("profiles_public")
            .select("total_points,top_streak,achievements")
            .eq("id", profile.id)
            .maybeSingle(),
          supabase
            .from("ask_questions_public")
            .select("id,text,answer,status,created_at,answered_at")
            .eq("recipient_id", profile.id)
            .eq("status", "answered")
            .order("answered_at", { ascending: false })
            .limit(50),
          supabase
            .from("ask_questions_public")
            .select("id,text,answer,status,created_at,answered_at")
            .eq("recipient_id", profile.id)
            .eq("status", "pending")
            .order("created_at", { ascending: false })
            .limit(50),
          getMyProfile(),
        ]);
      const isOwner = !!viewerProfile && viewerProfile.id === profile.id;
      const pending: AskItem[] = isOwner
        ? ((askPendingRes.data as AskItem[]) ?? [])
        : [];
      const stats = statsRes.data as
        | { total_points?: number; top_streak?: number; achievements?: string[] }
        | null;
      const profileWithStats = {
        ...profile,
        total_points: stats?.total_points ?? 0,
        top_streak: stats?.top_streak ?? 0,
        achievements: stats?.achievements ?? [],
      };
      return (
        <>
          <script
            type="application/ld+json"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: jsonLdHtml(breadcrumbLd) }}
          />
          <script
            type="application/ld+json"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: jsonLdHtml(profileLd) }}
          />
          <ProfileView
            profile={profileWithStats}
            polls={pollsRes.data ?? []}
            ask={{
              isOwner,
              answered: (askAnsweredRes.data as AskItem[]) ?? [],
              pending,
            }}
          />
          <BelowProfileSeo profileId={profile.id} />
        </>
      );
    }
  }

  // Project only the columns this view needs (was select("*")). `topics` is
  // pulled to drive the BelowPollSeo similar-polls query + topic pills.
  const { data: poll } = await supabase
    .from("polls")
    .select("id,slug,question,options,created_at,explainer,lang,topics,is_dead,profile_id,boost_until,translations")
    .eq("slug", handle)
    .maybeSingle<
      Poll & {
        topics: string[] | null;
        is_dead: boolean | null;
        profile_id: string | null;
        boost_until: string | null;
        translations: Record<string, { question: string; options: string[] }> | null;
      }
    >();

  if (!poll) notFound();

  // Auto-translation: show the poll in the viewer's language when a machine
  // translation exists. Votes still record by option index (order preserved).
  const viewerLocale = getLocale();
  const tr =
    poll.lang && poll.lang !== viewerLocale && poll.translations
      ? poll.translations[viewerLocale]
      : null;
  const displayQuestion = tr?.question?.trim() ? tr.question : poll.question;
  const displayOptions =
    tr?.options && tr.options.length === poll.options.length ? tr.options : poll.options;
  const AUTO_TR_LABEL: Record<string, string> = {
    fr: "Traduit automatiquement", en: "Auto-translated", es: "Traducido automáticamente",
    it: "Tradotto automaticamente", pt: "Traduzido automaticamente", de: "Automatisch übersetzt",
    ja: "自動翻訳", zh: "自动翻译",
  };

  // NOTE: poll + votes are sequential because the votes lookup needs poll.id.
  // Could be combined into one round-trip via a SQL view that JOINs polls and
  // aggregates votes per option_index — leaving as-is to avoid schema changes.
  const { data: votes } = await supabase
    .from("votes")
    .select("option_index")
    .eq("poll_id", poll.id);

  const counts = poll.options.map((_, i) => votes?.filter((v) => v.option_index === i).length ?? 0);
  const total = counts.reduce((a, b) => a + b, 0);

  const votedRaw = cookies().get(`moomz_voted_${poll.slug}`)?.value;
  const alreadyVoted = votedRaw !== undefined ? Number(votedRaw) : null;

  // M2 — prediction widget data: poll still open to bets (< 24h, not dead),
  // the viewer's coin balance, and their existing bet on this poll if any.
  const predictOpen =
    !((poll as { is_dead?: boolean | null }).is_dead) &&
    Date.now() - new Date(poll.created_at).getTime() < 24 * 60 * 60 * 1000;
  let predExisting: ExistingPrediction | null = null;
  let predBalance = 0;
  let predProfileId: string | null = null;
  try {
    const ssrP = getServerSupabase();
    const { data: authP } = await ssrP.auth.getUser();
    const ctok = cookies().get("moomz_profile_token")?.value ?? null;
    const { data: statsP } = await supabase.rpc("get_achievement_stats", {
      p_user_id: authP.user?.id ?? null,
      p_claim_token: ctok,
    });
    const sp = (statsP ?? {}) as { profile_id?: string | null; coin_balance?: number };
    predBalance = sp.coin_balance ?? 0;
    predProfileId = sp.profile_id ?? null;
    if (sp.profile_id) {
      const { data: pr } = await supabase
        .from("predictions")
        .select("option_index,stake,status,payout")
        .eq("poll_id", poll.id)
        .eq("profile_id", sp.profile_id)
        .maybeSingle<{ option_index: number; stake: number; status: string; payout: number }>();
      if (pr) {
        predExisting = {
          optionIndex: pr.option_index,
          stake: pr.stake,
          status: pr.status,
          payout: pr.payout,
        };
      }
    }
  } catch {
    // prediction widget is non-critical — render it closed on any failure.
  }

  // Breadcrumb trail: Home > Poll question.
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "moomz", item: "https://moomz.com/" },
      {
        "@type": "ListItem",
        position: 2,
        name: poll.question,
        item: `https://moomz.com/${poll.slug}`,
      },
    ],
  };

  // FAQPage JSON-LD built from per-option explainers when present.
  let faqLd: Record<string, unknown> | null = null;
  if (poll.explainer && typeof poll.explainer === "object") {
    const mainEntity = poll.options
      .map((opt, i) => {
        const answer = (poll.explainer as Record<string, string>)[String(i)];
        if (!answer) return null;
        return {
          "@type": "Question",
          name: opt,
          acceptedAnswer: {
            "@type": "Answer",
            text: String(answer),
          },
        };
      })
      .filter((q): q is { "@type": string; name: string; acceptedAnswer: { "@type": string; text: string } } => q !== null);
    if (mainEntity.length > 0) {
      faqLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity,
      };
    }
  }

  // Schema.org JSON-LD — helps Google parse poll as a Q&A page.
  // Author/datePublished/url are present on Question AND on each
  // suggestedAnswer to satisfy Search Console's QAPage requirements.
  const pollUrl = `https://moomz.com/${poll.slug}`;
  const authorEntity = {
    "@type": "Organization",
    name: "moomz",
    url: "https://moomz.com",
  };
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "QAPage",
    mainEntity: {
      "@type": "Question",
      name: poll.question,
      text: poll.question,
      dateCreated: poll.created_at,
      datePublished: poll.created_at,
      author: authorEntity,
      url: pollUrl,
      answerCount: poll.options.length,
      suggestedAnswer: poll.options.map((opt, i) => ({
        "@type": "Answer",
        text: opt,
        datePublished: poll.created_at,
        author: authorEntity,
        url: `${pollUrl}#opt-${i}`,
        ...(poll.explainer && typeof poll.explainer === "object" && poll.explainer[String(i)]
          ? { description: poll.explainer[String(i)] }
          : {}),
        upvoteCount: counts[i] ?? 0,
      })),
    },
    inLanguage: poll.lang ?? "fr",
    url: pollUrl,
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: jsonLdHtml(jsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: jsonLdHtml(breadcrumbLd) }}
      />
      {faqLd && (
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: jsonLdHtml(faqLd) }}
        />
      )}
      <MarkSeenIfOwner slug={poll.slug} voteCount={total} />
      {tr && (
        <p className="-mb-3 text-center text-[11px] text-white/35">
          🌐 {AUTO_TR_LABEL[viewerLocale] ?? AUTO_TR_LABEL.en}
        </p>
      )}
      <VoteClient
        pollId={poll.id}
        slug={poll.slug}
        question={displayQuestion}
        options={displayOptions}
        counts={counts}
        total={total}
        alreadyVoted={alreadyVoted}
      />
      <PredictionWidget
        pollId={poll.id}
        slug={poll.slug}
        options={poll.options}
        predictOpen={predictOpen}
        coinBalance={predBalance}
        existing={predExisting}
        lang={getLocale()}
      />
      {(poll as { profile_id?: string | null }).profile_id &&
        predProfileId &&
        (poll as { profile_id?: string | null }).profile_id === predProfileId &&
        !((poll as { is_dead?: boolean | null }).is_dead) && (
          <BoostButton
            pollId={poll.id}
            boostUntil={(poll as { boost_until?: string | null }).boost_until ?? null}
            lang={getLocale()}
          />
        )}
      <PollExplainer slug={poll.slug} options={poll.options} explainer={poll.explainer} />
      <KeywordChips question={poll.question} options={poll.options} lang={poll.lang} />
      <QuoteChips question={poll.question} options={poll.options} lang={poll.lang} />
      <BelowPollSeo
        pollId={poll.id}
        question={poll.question}
        options={poll.options}
        topics={(poll as { topics?: string[] | null }).topics ?? null}
        lang={poll.lang}
      />
    </>
  );
}
