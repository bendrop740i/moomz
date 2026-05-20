export type AlternativePage = {
  slug: string;
  locale: "en";
  competitor: string;
  emoji: string;
  title: string;
  h1: string;
  description: string;
  intro: string;
  highlights: {
    winner: "moomz" | "competitor" | "tie";
    label: string;
    moomz: string;
    comp: string;
  }[];
  faq: { q: string; a: string }[];
  cta: string;
  updatedAt: string;
};

export const alternatives: AlternativePage[] = [
  {
    slug: "moomz-vs-strawpoll",
    locale: "en",
    competitor: "Strawpoll",
    emoji: "🥤",
    title: "moomz vs Strawpoll: which free poll maker wins in 2026?",
    h1: "moomz vs Strawpoll — the honest comparison",
    description:
      "moomz vs Strawpoll compared head-to-head: pricing, anonymity, design, realtime, sign-up friction and share flow. Pick the one that fits.",
    intro:
      "Strawpoll has been the default \"quick online poll\" since forever. moomz is the 2026 take — built mobile-first, anonymous by default, with live realtime bars and a Gen Z aesthetic. Both are free to start. Here is exactly where each one wins.",
    highlights: [
      {
        winner: "moomz",
        label: "Time to first vote",
        moomz: "~10 seconds, no account, mobile-ready",
        comp: "Fast too, but ads and upsells pad the flow",
      },
      {
        winner: "moomz",
        label: "Design & vibe",
        moomz: "Dark glassmorphism, animated blobs, emoji per option",
        comp: "Functional but utilitarian, 2010s feel",
      },
      {
        winner: "moomz",
        label: "Anonymity",
        moomz: "Anonymous by default, no email asked",
        comp: "Anonymous voting available but account upsell is constant",
      },
      {
        winner: "moomz",
        label: "Live realtime updates",
        moomz: "Built-in via Supabase Realtime, bars animate as votes land",
        comp: "Results refresh on reload; live mode is a paid add-on",
      },
      {
        winner: "competitor",
        label: "Question types",
        moomz: "Multiple choice (2-6 options) with images",
        comp: "Ranked, meeting scheduling, multi-question forms",
      },
      {
        winner: "competitor",
        label: "Brand presence",
        moomz: "Young app, still ramping",
        comp: "Recognized brand, instant trust signal",
      },
      {
        winner: "moomz",
        label: "Price",
        moomz: "100% free, unlimited polls and votes",
        comp: "Free tier with ads; paid plans from $19/mo for pro features",
      },
      {
        winner: "tie",
        label: "Share link",
        moomz: "moomz.com/abc12 — short, clean",
        comp: "strawpoll.com/xxxxxxx — also short, also clean",
      },
    ],
    faq: [
      {
        q: "Is moomz really free?",
        a: "Yes. Unlimited polls, unlimited votes, no credit card. No ads either — the trade-off is that moomz is younger and smaller than Strawpoll, so the brand recognition is not the same yet.",
      },
      {
        q: "Can I create a Strawpoll-style poll on moomz without signing up?",
        a: "Yes. Type your question, add 2 to 6 options, hit Create. You get a shareable link in seconds. No email, no profile required.",
      },
      {
        q: "Does Strawpoll have realtime live results like moomz?",
        a: "Strawpoll updates on page reload by default. Live realtime bars are part of their paid Strawpoll+ tier. On moomz, live realtime is included for free on every poll.",
      },
      {
        q: "Which one is better for a quick Instagram or WhatsApp poll?",
        a: "moomz, hands down. The link previews are designed for social shares, the UI is built for thumbs on a phone, and there are no ads to embarrass you.",
      },
      {
        q: "Which one is better for an enterprise or classroom survey?",
        a: "Strawpoll if you need ranked voting, scheduling, or multi-question forms. moomz if you want a quick vibe-check, opinion poll, or shareable single-question vote.",
      },
      {
        q: "Can I migrate my Strawpoll history into moomz?",
        a: "No direct import yet. You can recreate any past poll in moomz in 10 seconds though — copy the question, paste the options, share the new link.",
      },
    ],
    cta: "Create your free moomz poll",
    updatedAt: "2026-05-19",
  },
  {
    slug: "moomz-vs-mentimeter",
    locale: "en",
    competitor: "Mentimeter",
    emoji: "📊",
    title: "moomz vs Mentimeter: free poll for social vs paid for meetings",
    h1: "moomz vs Mentimeter — pick the right tool for the room",
    description:
      "Mentimeter rules enterprise meetings. moomz wins for social polls and quick vibe-checks. Pricing, features and friction compared.",
    intro:
      "Mentimeter is the boardroom and classroom standard for interactive presentations. moomz is the opposite: built for one question, one link, shared on Insta or WhatsApp. Different jobs, both legit. Here is the honest breakdown.",
    highlights: [
      {
        winner: "moomz",
        label: "Time to first vote",
        moomz: "10 seconds, anonymous, no account",
        comp: "Account required to create, audience needs a 6-digit code",
      },
      {
        winner: "moomz",
        label: "Price for unlimited polls",
        moomz: "Free forever, unlimited polls and votes",
        comp: "Free tier caps at 2 questions per presentation; Basic from $11.99/mo",
      },
      {
        winner: "moomz",
        label: "Audience friction",
        moomz: "Open the link, vote, done",
        comp: "Open menti.com, type the code, then vote",
      },
      {
        winner: "competitor",
        label: "Question types",
        moomz: "Multiple choice with optional image",
        comp: "Word clouds, quizzes, scales, rankings, Q&A, open text",
      },
      {
        winner: "competitor",
        label: "Live presentation mode",
        moomz: "Realtime bars on the same poll page",
        comp: "Fullscreen presenter view, slide-by-slide, integrated with PowerPoint",
      },
      {
        winner: "competitor",
        label: "Analytics & export",
        moomz: "Vote counts visible on the poll",
        comp: "PDF, Excel, CSV exports, segmented analytics",
      },
      {
        winner: "moomz",
        label: "Design for social sharing",
        moomz: "OG previews, dark glass UI, mobile-first",
        comp: "Optimized for projector screens, not phones",
      },
      {
        winner: "moomz",
        label: "Anonymity",
        moomz: "Anonymous by default, no tracking pixel",
        comp: "Audience anonymous but account holder is tracked",
      },
    ],
    faq: [
      {
        q: "Should I use moomz or Mentimeter for a classroom?",
        a: "Mentimeter if you are running a 30-minute interactive lesson with quizzes, word clouds, and Q&A. moomz if you want a single quick poll the class can answer on their phones without typing a code.",
      },
      {
        q: "Is Mentimeter free?",
        a: "There is a free tier, but it limits you to 2 questions per presentation and removes many features. Real use requires the Basic plan at around $11.99 per month. moomz stays free with no question cap.",
      },
      {
        q: "Can moomz replace Mentimeter for a company all-hands?",
        a: "Partially. moomz handles the live audience vote with realtime bars. It does not replace the full presentation flow, quiz scoring, or fancy export reports.",
      },
      {
        q: "Does moomz have word clouds like Mentimeter?",
        a: "Not yet. moomz focuses on multiple-choice polls (2-6 options). Word clouds, scales, and open-text answers are Mentimeter's territory.",
      },
      {
        q: "How does the audience join?",
        a: "On Mentimeter, the audience opens menti.com and types a code. On moomz, the audience just opens the share link (moomz.com/abc12). One step shorter.",
      },
      {
        q: "Which one is better for a quick poll on social media?",
        a: "moomz. Mentimeter is built for meeting rooms and presenters; the share flow on social feels clunky. moomz links are designed to be dropped into a story, a DM, or a tweet.",
      },
    ],
    cta: "Create your free moomz poll",
    updatedAt: "2026-05-19",
  },
  {
    slug: "moomz-vs-slido",
    locale: "en",
    competitor: "Slido",
    emoji: "🎤",
    title: "moomz vs Slido: which audience poll tool fits you?",
    h1: "moomz vs Slido — meeting rooms vs social shares",
    description:
      "Slido is the Cisco-owned audience engagement giant. moomz is the lightweight, anonymous, social-first alternative. Full comparison.",
    intro:
      "Slido (now part of Cisco Webex) is the polished tool conference organizers reach for. moomz is the casual 10-second poll your friend texts you on WhatsApp. Both let an audience vote in realtime — but the experience around it is night and day.",
    highlights: [
      {
        winner: "moomz",
        label: "Setup speed",
        moomz: "10 seconds, no account",
        comp: "Account creation, event setup, code generation",
      },
      {
        winner: "moomz",
        label: "Price",
        moomz: "Free, unlimited polls and votes",
        comp: "Free tier caps polls per event; paid plans from $12.50/mo",
      },
      {
        winner: "competitor",
        label: "Q&A and live moderation",
        moomz: "Polls only, no audience Q&A feature",
        comp: "Full Q&A with upvotes, moderation queue, anonymous questions",
      },
      {
        winner: "competitor",
        label: "Webex / Teams / Zoom integration",
        moomz: "Standalone link only",
        comp: "Native embeds in Webex, Teams, Zoom, Google Meet",
      },
      {
        winner: "moomz",
        label: "Mobile share flow",
        moomz: "Drop the link in any chat, instant vote",
        comp: "Audience joins via slido.com + event code",
      },
      {
        winner: "moomz",
        label: "Aesthetic for Gen Z / social",
        moomz: "Dark, glassy, emoji, animated counters",
        comp: "Clean enterprise look, designed for screens behind a speaker",
      },
      {
        winner: "competitor",
        label: "Analytics export",
        moomz: "On-page counts only",
        comp: "PDF, Excel reports, segmented per session",
      },
      {
        winner: "moomz",
        label: "Anonymity",
        moomz: "Anonymous by default, no email or login",
        comp: "Audience can be anonymous, account holders tracked",
      },
    ],
    faq: [
      {
        q: "Is moomz a true Slido alternative?",
        a: "For audience polling specifically, yes. For full event engagement (Q&A, live moderation, integrated with Webex), Slido still has the edge. moomz wins when you just need a quick anonymous vote without enterprise scaffolding.",
      },
      {
        q: "Does moomz work during a Zoom or Google Meet call?",
        a: "Yes — just paste the moomz link in the chat. Participants click and vote in their browser. No embed, no plugin needed.",
      },
      {
        q: "Is Slido free?",
        a: "Slido has a free tier limited to a few polls per event and basic features. Paid plans start around $12.50/mo. moomz stays free with no event or poll limits.",
      },
      {
        q: "Can I run live audience Q&A on moomz?",
        a: "Not yet — moomz is poll-first. We have an Ask feature for asynchronous anonymous Q&A on profiles, but no live event Q&A. Slido remains the better choice for that.",
      },
      {
        q: "Which one is better for a wedding, party, or casual poll?",
        a: "moomz. Slido is overkill for non-corporate use. moomz feels like an Instagram poll but with more options and a permanent share link.",
      },
      {
        q: "Do I need to install anything?",
        a: "Neither tool requires an install for voters. Slido sometimes prompts the audience to enter an event code; moomz works with the share link alone.",
      },
    ],
    cta: "Create your free moomz poll",
    updatedAt: "2026-05-19",
  },
  {
    slug: "moomz-vs-poll-everywhere",
    locale: "en",
    competitor: "Poll Everywhere",
    emoji: "🌍",
    title: "moomz vs Poll Everywhere: free vs classroom-grade polling",
    h1: "moomz vs Poll Everywhere — the honest 2026 comparison",
    description:
      "Poll Everywhere is the teacher and trainer favorite. moomz is the free anonymous alternative for quick polls. Full breakdown.",
    intro:
      "Poll Everywhere has been the go-to for educators and corporate trainers for over a decade. moomz is a different animal: a free, anonymous, social-first poll app built for sharing one question on a phone. Here is where each shines.",
    highlights: [
      {
        winner: "moomz",
        label: "Free plan generosity",
        moomz: "Unlimited polls, unlimited votes per poll",
        comp: "Free tier caps audience size at 25 responses",
      },
      {
        winner: "moomz",
        label: "Setup time",
        moomz: "10 seconds, no account",
        comp: "Account required, presenter setup, audience code or link",
      },
      {
        winner: "competitor",
        label: "Question variety",
        moomz: "Multiple choice with images (2-6 options)",
        comp: "Multiple choice, word cloud, Q&A, clickable image, ranking, open response",
      },
      {
        winner: "competitor",
        label: "PowerPoint & Keynote integration",
        moomz: "No slide deck integration",
        comp: "Native plugin embeds polls directly in slides",
      },
      {
        winner: "competitor",
        label: "Grading and LMS integration",
        moomz: "No grading or LMS hooks",
        comp: "Canvas, Blackboard, Schoology integration, gradebook export",
      },
      {
        winner: "moomz",
        label: "Mobile vote experience",
        moomz: "Thumb-friendly, dark UI, instant",
        comp: "Works on mobile but optimized for in-classroom voting",
      },
      {
        winner: "moomz",
        label: "Price",
        moomz: "Free forever, no audience cap",
        comp: "Paid plans start around $120/year for Present plan",
      },
      {
        winner: "moomz",
        label: "Social sharing",
        moomz: "Built for Insta, WhatsApp, X share with OG previews",
        comp: "Designed for live audiences in a room, not feed shares",
      },
    ],
    faq: [
      {
        q: "Is moomz a serious alternative to Poll Everywhere for teachers?",
        a: "For one-off polls in class, yes — and you avoid the 25-response cap of the free tier. For graded quizzes, LMS sync, and PowerPoint embedding, Poll Everywhere is still the better fit.",
      },
      {
        q: "Why does Poll Everywhere limit free plans to 25 responses?",
        a: "That is how their freemium funnel pushes you toward paid plans. moomz takes the opposite approach: unlimited polls and votes stay free, monetization will come from optional cosmetics and premium-only features later.",
      },
      {
        q: "Can moomz embed in PowerPoint or Google Slides?",
        a: "Not natively. You can share the moomz link in a slide and have the audience vote in their browser. Poll Everywhere has a dedicated PowerPoint add-in for in-slide voting.",
      },
      {
        q: "Does moomz support grading or quizzes?",
        a: "No. moomz is for opinion polls and vibe-checks, not graded assessments. Poll Everywhere is the right tool for graded classroom quizzes.",
      },
      {
        q: "How does the audience vote on each?",
        a: "On Poll Everywhere, audience texts a code, opens a link, or uses an app. On moomz, audience opens the share link and votes — one step shorter.",
      },
      {
        q: "Which is better for a webinar audience poll?",
        a: "If you just want a vibe-check or quick opinion, moomz is faster to spin up and the link is easier to drop in webinar chat. Poll Everywhere wins for structured Q&A and longer-form audience engagement.",
      },
    ],
    cta: "Create your free moomz poll",
    updatedAt: "2026-05-19",
  },
  {
    slug: "moomz-vs-google-forms",
    locale: "en",
    competitor: "Google Forms",
    emoji: "📝",
    title: "moomz vs Google Forms: quick poll vs full survey, honestly",
    h1: "moomz vs Google Forms — which one for your question?",
    description:
      "Google Forms is the survey workhorse. moomz is the 10-second poll for sharing on social. Pricing, design, anonymity, share flow compared.",
    intro:
      "Google Forms is incredible at multi-question surveys, registrations, and data collection into Sheets. moomz is the opposite — one question, one link, anonymous, live results. They look the same from the outside, but solve different problems.",
    highlights: [
      {
        winner: "moomz",
        label: "Time to share a single poll",
        moomz: "10 seconds, no Google account",
        comp: "1-2 minutes: title, question, settings, share dialog",
      },
      {
        winner: "moomz",
        label: "Anonymity",
        moomz: "Anonymous by default, no Google login needed",
        comp: "Voters often see a Google sign-in prompt on org accounts",
      },
      {
        winner: "moomz",
        label: "Live realtime results",
        moomz: "Bars update in realtime as people vote",
        comp: "Responses page refreshes manually; no live audience view",
      },
      {
        winner: "competitor",
        label: "Multi-question surveys",
        moomz: "One question per poll",
        comp: "Unlimited questions, branching logic, sections, file uploads",
      },
      {
        winner: "competitor",
        label: "Google Sheets export",
        moomz: "No spreadsheet export",
        comp: "Native Sheets sync, formula-ready, analytics in Looker Studio",
      },
      {
        winner: "moomz",
        label: "Design",
        moomz: "Dark glass, animated, emoji per option",
        comp: "Clean Material UI, professional, not made for vibes",
      },
      {
        winner: "moomz",
        label: "Social share preview",
        moomz: "Rich OG image per poll for Insta, WhatsApp, X",
        comp: "Generic Google Forms preview",
      },
      {
        winner: "tie",
        label: "Price",
        moomz: "Free forever",
        comp: "Free with a Google account",
      },
    ],
    faq: [
      {
        q: "Should I use moomz or Google Forms for a quick poll?",
        a: "moomz, every time. Google Forms is built for surveys and data collection — overkill for a single yes/no or pick-an-option question. moomz lets you spin one up in 10 seconds with no account.",
      },
      {
        q: "Should I use moomz for a registration form or feedback survey?",
        a: "No. Use Google Forms. moomz is one question, multiple choice. Forms handles names, emails, file uploads, conditional logic, and exports to Sheets — none of which moomz does.",
      },
      {
        q: "Is moomz really anonymous?",
        a: "Yes. No login, no email, no Google account. Vote tracking is cookie-based so users cannot double-vote, but no personal data is collected.",
      },
      {
        q: "Can I see live results on Google Forms?",
        a: "You see responses in the Responses tab and can share a summary, but it is not realtime. You refresh manually. moomz updates bars live as votes land.",
      },
      {
        q: "Can moomz collect emails or names?",
        a: "No. moomz is intentionally lightweight — one anonymous vote per poll. If you need email collection, Google Forms is the right tool.",
      },
      {
        q: "Which one is better for a meme poll on Twitter or Insta?",
        a: "moomz. The OG image previews look great in feeds, the UI is mobile-native, and there is no Google sign-in friction scaring people off.",
      },
    ],
    cta: "Create your free moomz poll",
    updatedAt: "2026-05-19",
  },
  {
    slug: "moomz-vs-doodle",
    locale: "en",
    competitor: "Doodle",
    emoji: "📅",
    title: "moomz vs Doodle: opinion polls vs meeting scheduling",
    h1: "moomz vs Doodle — different jobs, common confusion",
    description:
      "Doodle schedules meetings. moomz runs opinion polls and vibe-checks. Here is when to use each, with pricing and features compared.",
    intro:
      "Doodle and moomz both have the word \"poll\" in their pitch, but they solve completely different problems. Doodle helps groups pick a meeting time. moomz lets you ask a question and get instant opinions. Here is the side-by-side so you pick right.",
    highlights: [
      {
        winner: "competitor",
        label: "Meeting time scheduling",
        moomz: "Not a scheduling tool",
        comp: "Core feature: pick the best time across timezones",
      },
      {
        winner: "moomz",
        label: "Opinion polls and vibe-checks",
        moomz: "Built specifically for this",
        comp: "Possible via meeting poll workaround, but clunky",
      },
      {
        winner: "moomz",
        label: "Anonymous voting",
        moomz: "Anonymous by default, no email",
        comp: "Voters must enter a name; full anonymity is a paid feature",
      },
      {
        winner: "moomz",
        label: "Setup speed for a poll",
        moomz: "10 seconds, type question, share link",
        comp: "Minutes — built around date/time pickers, not free-text options",
      },
      {
        winner: "competitor",
        label: "Calendar integration",
        moomz: "No calendar features",
        comp: "Google Calendar, Outlook, iCal sync",
      },
      {
        winner: "moomz",
        label: "Live realtime results",
        moomz: "Bars update live, social-friendly",
        comp: "Responses visible, but not animated or live",
      },
      {
        winner: "moomz",
        label: "Price",
        moomz: "Free forever, unlimited polls",
        comp: "Free tier with ads; paid plans from $6.95/mo",
      },
      {
        winner: "tie",
        label: "Mobile-friendly",
        moomz: "Mobile-first design",
        comp: "Mobile-friendly, but built around grids of dates",
      },
    ],
    faq: [
      {
        q: "Can I use Doodle to run an opinion poll?",
        a: "Technically yes via their meeting poll feature, but it is awkward — Doodle is optimized for date and time grids, not free-text options. moomz is purpose-built for the \"pick your favorite\" question.",
      },
      {
        q: "Can moomz schedule a meeting?",
        a: "Not directly. You could create a poll with date options as text (e.g., \"Tue 7pm | Wed 8pm | Thu 6pm\") and let people vote, but you lose calendar sync and timezone handling. For real scheduling, use Doodle or Cal.com.",
      },
      {
        q: "Which is more anonymous?",
        a: "moomz. Doodle asks voters to enter a name by default (full anonymity requires a paid plan). moomz needs nothing — cookie-based vote dedup, zero identity collected.",
      },
      {
        q: "Is Doodle free?",
        a: "Doodle has a free tier with ads. Paid plans start around $6.95/mo for ad-free use and features like custom branding and full anonymity. moomz stays free with no ads.",
      },
      {
        q: "Which one for a casual group decision?",
        a: "If the decision is \"when should we meet,\" use Doodle. If the decision is \"which restaurant\" or \"which logo\" or any opinion-based question, use moomz.",
      },
      {
        q: "Can I embed a moomz poll in an email like Doodle?",
        a: "moomz links preview beautifully in email clients thanks to OG image cards, but there is no in-email widget like Doodle's calendar grid. The vote happens in the browser after one tap.",
      },
    ],
    cta: "Create your free moomz poll",
    updatedAt: "2026-05-19",
  },
];
