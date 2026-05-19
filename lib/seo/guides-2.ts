import type { SeoPage } from "./types";

const today = "2026-05-19";

export const guides2: SeoPage[] = [
  {
    slug: "share-poll-whatsapp-discord-slack-en",
    locale: "en",
    category: "guides",
    emoji: "🔗",
    title: "How to Share a moomz Poll on WhatsApp, Discord, Slack",
    h1: "Share a moomz Poll on WhatsApp, Discord, Slack — Step by Step",
    description:
      "Step-by-step guide to share a moomz poll on WhatsApp, Discord, and Slack. With link previews, thread integration, and notification tips.",
    intro:
      "Once your moomz poll is created, the URL works in any chat app. But each platform has quirks. Here's the optimal way to share moomz polls on WhatsApp, Discord, and Slack — including link previews, pinning, and notification etiquette.",
    sections: [
      {
        h: "WhatsApp: paste the link, get a rich preview",
        body: "Paste the moomz URL into any WhatsApp chat. WhatsApp auto-fetches a preview card with the poll question, emoji, and option count. The preview makes the message tappable. For group chats, send the link plus a one-line intro: \"Vote pizza or sushi tonight\". Pin the message in the chat info for ongoing polls. WhatsApp doesn't have native polls beyond 12 options, so moomz fills the gap for larger choice sets.",
      },
      {
        h: "Discord: embed in channels with rich preview",
        body: "In Discord, paste the moomz link in any channel. The Discord embed unfolds with the poll preview. For voice channels, share the link in the chat sidebar — voters click and vote between game rounds. For Discord communities, set up a #polls channel and use moomz for community decisions. Discord's native poll is limited to one server; moomz polls travel across servers via URL.",
      },
      {
        h: "Slack: works in any channel or DM",
        body: "Slack auto-unfurls moomz URLs into a preview card showing the question and options. For team decisions, post in the relevant channel with a clear deadline (\"Vote by Friday 5pm\"). For company-wide polls, pin in #general. Slack's built-in polls require a workflow setup; moomz polls work instantly via URL. Bots like Polly compete here, but moomz wins for anonymous voting where identity tracking is undesired.",
      },
      {
        h: "Cross-platform best practices",
        body: "Same poll, multiple platforms: paste the moomz URL in WhatsApp, Discord, Slack, and Telegram simultaneously for max reach. The URL works everywhere because moomz is web-based. For creator audiences, link from Instagram bio + TikTok bio + Twitter pinned tweet to the same poll. Cross-platform funnels into one result page. Some creators report 5x vote count this way vs single-platform shares.",
      },
    ],
    polls: [
      { q: "Best platform to share polls?", options: ["WhatsApp", "Discord", "Slack", "Telegram"] },
      { q: "Auto-preview matters?", options: ["Yes", "No", "Mid", "Always"] },
      { q: "Pin poll in chat?", options: ["Always", "Sometimes", "Never", "Big polls only"] },
      { q: "Deadline message matters?", options: ["Yes", "No", "Mid", "Critical"] },
      { q: "Best moomz feature in chats?", options: ["Anonymous", "Live results", "Short URL", "No signup"] },
      { q: "Cross-platform share?", options: ["Yes", "No", "Sometimes", "Always"] },
      { q: "Native poll vs moomz?", options: ["moomz", "Native", "Mix", "Native + moomz"] },
    ],
    faq: [
      {
        q: "Does WhatsApp show poll results in the chat preview?",
        a: "It shows the question and option count. For live results, recipients click the link.",
      },
      {
        q: "Can I pin a moomz poll in Discord?",
        a: "Yes — pin any message including ones with poll URLs. The pinned message shows the embed.",
      },
      {
        q: "Slack workspace blocks external links?",
        a: "Some workspaces restrict link unfurling. moomz still works — the URL is clickable, just no preview.",
      },
      {
        q: "Can I share the same poll on multiple platforms?",
        a: "Yes — one moomz URL works across all platforms. All votes aggregate to one result page.",
      },
    ],
    related: ["share-poll-twitter-x-en", "how-to-share-poll-link", "discord-poll"],
    updatedAt: today,
  },
  {
    slug: "embed-poll-blog-notion-en",
    locale: "en",
    category: "guides",
    emoji: "📝",
    title: "How to Embed a moomz Poll on Your Blog or Notion Page",
    h1: "Embed a moomz Poll on a Blog Post or Notion Page",
    description:
      "Step by step: embed a moomz poll on WordPress, Notion, Ghost, or any blog. Iframe and link options.",
    intro:
      "Embedded polls boost article engagement by 60%. Here's how to embed a moomz poll on a blog post, Notion page, Ghost site, or any platform that supports HTML or iframes.",
    sections: [
      {
        h: "On Notion: paste the URL",
        body: "Notion auto-converts URLs into embed cards. Paste your moomz URL into a Notion page, click \"Create embed\" when prompted. The poll appears as an interactive card. Readers vote without leaving the Notion page. Works for Notion shared docs, public Notion sites, and Notion-published wikis. The poll updates live as votes come in.",
      },
      {
        h: "On WordPress: shortcode or iframe",
        body: "WordPress supports iframes via the HTML block. Paste the moomz iframe code (available from the poll page's share menu) into the HTML block. The poll renders inline. Alternative: WordPress users on self-hosted versions can install the moomz plugin (when available) for native shortcode embedding. For non-iframe-safe themes, use the link-with-preview block.",
      },
      {
        h: "On Ghost, Substack, Medium",
        body: "Ghost and Substack accept iframes via their HTML embed cards. Medium doesn't allow iframes — for Medium, paste the moomz URL as a regular link; Medium creates a rich preview. The reader clicks through to vote on moomz, then returns to your article. Less integrated than iframe, but works on locked-down platforms.",
      },
      {
        h: "Best practices for embedded polls",
        body: "Place embedded polls 60-70% through the article (after the main argument, before conclusion). This is the natural reflection moment. Use 2-3 option polls for max engagement. Always include a fallback link to the moomz poll in case the iframe fails for some readers. Track which articles drive most votes — that's your high-engagement content template.",
      },
    ],
    polls: [
      { q: "Best platform for embedded polls?", options: ["Notion", "WordPress", "Ghost", "Medium"] },
      { q: "Iframe or link?", options: ["Iframe", "Link", "Both", "Mix"] },
      { q: "Best placement in article?", options: ["Top", "Middle", "60-70%", "Bottom"] },
      { q: "Embedded polls boost engagement?", options: ["Yes", "No", "Mid", "A lot"] },
      { q: "Use 2 or 4 options?", options: ["2", "3", "4", "Mix"] },
      { q: "Track which articles drive votes?", options: ["Yes", "No", "Sometimes", "Critical"] },
      { q: "Embedded polls or shared link?", options: ["Embedded", "Link", "Both", "Depends"] },
    ],
    faq: [
      {
        q: "Does the iframe slow down my page?",
        a: "Lightly — moomz iframes lazy-load. Modern blogs handle them fine.",
      },
      {
        q: "Can I customize the iframe styling?",
        a: "Limited customization. Background color and rounded corners adjustable. Full theming on the premium tier.",
      },
      {
        q: "Are embedded polls anonymous?",
        a: "Yes — same anonymity as the standalone poll. Votes are anonymous to your blog readers.",
      },
      {
        q: "Can I track votes from my blog separately?",
        a: "Not yet — votes pool into one result. UTM-based tracking on premium tier upcoming.",
      },
    ],
    related: ["share-poll-whatsapp-discord-slack-en", "how-to-share-poll-link", "free-online-poll-maker"],
    updatedAt: today,
  },
  {
    slug: "read-poll-results-without-bias-en",
    locale: "en",
    category: "guides",
    emoji: "🔍",
    title: "How to Read Poll Results Without Bias",
    h1: "Read Poll Results Without Bias: A Practical Guide",
    description:
      "How to read poll results without bias. Sample size, selection bias, vote timing, and avoiding confirmation bias.",
    intro:
      "Poll results lie to you if you read them wrong. Sample size, selection bias, vote timing, and confirmation bias all distort. Here's how to read moomz poll results (or any poll) with calibrated skepticism.",
    sections: [
      {
        h: "Sample size: how many votes is enough",
        body: "Below 30 votes, results are noise. 30-100 votes give a directional signal. 100-500 votes are statistically meaningful for binary questions. 500+ votes are robust. moomz shows total votes prominently — check the number before drawing conclusions. A 70% majority on 20 votes means nothing; on 500 votes, it's real.",
      },
      {
        h: "Selection bias: who actually voted",
        body: "If your poll is in your friend chat of 10 people, results reflect your friends, not the world. If posted on Instagram, results reflect your followers, who are filtered through your existing aesthetic and politics. For honest reads, ask: who's in this audience, what do they already believe, who would skip voting? The answer adjusts the result. moomz polls posted on dating apps will lean toward dating-app-users' worldview.",
      },
      {
        h: "Vote timing: first 30 minutes lie",
        body: "The first 30 minutes of voting often show extreme skew because early voters are typically your most engaged followers (who agree with your framing). Wait 24 hours before drawing conclusions. moomz live results show the current state; let the curve flatten before reading the verdict. Final results 24-48 hours in are more representative.",
      },
      {
        h: "Confirmation bias: are you reading what you want?",
        body: "If you expected X to win and X won, scrutinize. Did you frame the question in X's favor? Did you share where X-supporters cluster? Read poll results as if you wanted Y to win. The bias check often surfaces problems with the poll setup. Best practice: have a friend who doesn't share your view read the same results — their interpretation reveals your blind spots.",
      },
    ],
    polls: [
      { q: "Minimum votes for valid result?", options: ["10", "30", "100", "500"] },
      { q: "Wait how long to read result?", options: ["1h", "24h", "48h", "1 week"] },
      { q: "Selection bias real?", options: ["Yes", "No", "Mid", "Critical"] },
      { q: "Confirmation bias real?", options: ["Yes", "No", "Mid", "Always"] },
      { q: "Best practice: friend re-read?", options: ["Yes", "No", "Sometimes", "Always"] },
      { q: "Trust polls in friend chats?", options: ["Yes", "No", "Limited", "Skeptical"] },
      { q: "Trust polls on social media?", options: ["Yes", "No", "Mid", "Less"] },
      { q: "Do you check vote count first?", options: ["Always", "Sometimes", "Never", "Should"] },
    ],
    faq: [
      {
        q: "Why are early poll results misleading?",
        a: "Early voters are your most engaged audience, biased toward your framing. Wait 24h for balance.",
      },
      {
        q: "Is a 60/40 split meaningful?",
        a: "Depends on sample size. On 30 votes, no. On 500, yes — it's a clear majority preference.",
      },
      {
        q: "How do I reduce selection bias?",
        a: "Share the poll outside your bubble. Cross-platform sharing helps. Friend-chat-only polls are biased.",
      },
      {
        q: "Are anonymous polls more honest?",
        a: "Generally yes. Identified voting suppresses minority opinions.",
      },
    ],
    related: ["polls-engagement-stats", "psychology-binary-choice", "polls-engagement-stats"],
    updatedAt: today,
  },
  {
    slug: "write-poll-question-people-answer-en",
    locale: "en",
    category: "guides",
    emoji: "✍️",
    title: "How to Write a Poll Question People Actually Answer",
    h1: "Write a Poll Question That Gets Votes: Word-Level Guide",
    description:
      "How to write a poll question people actually answer. Word count, framing, specificity, emotional hook patterns.",
    intro:
      "The difference between a 5% and 35% vote rate is the question itself. Short, specific, first-person, slightly emotional. Here's the word-level guide to writing poll questions that get voted on.",
    sections: [
      {
        h: "Length: keep it under 12 words",
        body: "Questions under 12 words get 60% more votes than longer ones. Voters scroll fast; they don't parse long sentences. \"Pizza or sushi tonight?\" beats \"Which dinner option would everyone prefer for our group tonight given the weather?\". Cut everything that isn't essential. Use specific nouns. Drop articles where possible (\"Pizza tonight?\" vs \"Would pizza be good tonight?\").",
      },
      {
        h: "Framing: first-person to the voter",
        body: "\"Would YOU send this text?\" outperforms \"Should this text be sent?\" by 3x. Address the voter directly. Use \"you\" or imperative voice. For drama dilemmas: \"What would you do?\" beats \"What would someone do?\". The direct address activates the voter's identity, which drives commitment to voting.",
      },
      {
        h: "Specificity: name the thing concretely",
        body: "\"Pizza or sushi?\" beats \"Dinner options?\". Concrete > abstract. Brand names, places, people add specificity that drives engagement (with respect to good taste). \"Should I send this Insta DM?\" needs the DM context — vague polls lose. moomz polls work best when the question is so specific the voter can tap without re-reading.",
      },
      {
        h: "Emotional hook: stakes raise vote rates",
        body: "Add light stakes. \"Pizza or sushi tonight (we're starving)\" beats \"Pizza or sushi tonight?\" by 30%. Stakes activate empathy. Drama, FOMO, decisional urgency all drive engagement. Don't overcook — emotional manipulation is detectable. Use stakes that match the actual scenario. \"Outfit A or B (date in 1h)\" works because the date is real.",
      },
    ],
    polls: [
      { q: "Best question length?", options: ["Under 8 words", "8-12 words", "12-20", "20+"] },
      { q: "First-person better?", options: ["Yes", "No", "Mid", "Always"] },
      { q: "Specific vs abstract?", options: ["Specific", "Abstract", "Mix", "Depends"] },
      { q: "Emotional hooks work?", options: ["Yes", "No", "Sometimes", "Risk overcook"] },
      { q: "Stakes in question?", options: ["Always", "Sometimes", "Never", "Only when real"] },
      { q: "Best emotion to hook?", options: ["Urgency", "Drama", "FOMO", "Empathy"] },
      { q: "Cut articles to shorten?", options: ["Yes", "No", "Sometimes", "Only short ones"] },
      { q: "Reword vague polls?", options: ["Always", "Sometimes", "Never", "If feedback"] },
    ],
    faq: [
      {
        q: "Should I include emoji in the question?",
        a: "Lightly — one emoji can boost engagement. More than 2 looks spammy.",
      },
      {
        q: "All caps in questions?",
        a: "Generally no. Caps for one word for emphasis is fine. Full-caps reads as yelling.",
      },
      {
        q: "Questions ending with 'right?' or 'no?'",
        a: "Avoid leading phrasing. \"Pizza tonight, right?\" biases the result. Stay neutral.",
      },
      {
        q: "Can I rephrase a low-engagement poll?",
        a: "Yes — re-run with the new question. The first poll fades; the new one captures fresh votes.",
      },
    ],
    related: ["viral-poll-formats", "two-vs-five-options", "instagram-story-poll-best-practices"],
    updatedAt: today,
  },
  {
    slug: "max-poll-options-2-4-6-en",
    locale: "en",
    category: "guides",
    emoji: "🔢",
    title: "Maximum Poll Options — 2 vs 4 vs 6 — When to Use Which",
    h1: "Poll Option Count Guide: When 2, 3, 4, or 6 Options Win",
    description:
      "Guide to maximum poll options. When to use 2, 3, 4, or 6 options. Engagement data, use cases, decision rules.",
    intro:
      "moomz polls support 2-6 options. Most people default to 4. The data says default is usually wrong. Here's the use-case-by-use-case guide to picking the right option count.",
    sections: [
      {
        h: "2 options: scroll-and-vote contexts",
        body: "Use 2 options for Instagram Stories, TikTok bio links, and any context where voters are scrolling fast. Binary minimizes cognitive load. Works for: this-or-that aesthetics, hot takes, drama dilemmas, simple decisions. Avoid 2 options for: genuine multi-alternative decisions, taste rankings, prediction polls with multiple plausible outcomes.",
      },
      {
        h: "3 options: nuanced opinions",
        body: "3 options work when there's a meaningful middle ground or \"depends\" answer. \"Yes / No / Mid\" patterns dominate Gen Z polls. \"Stay / Go / Wait\" for relationship polls. The third option absorbs voters who'd otherwise skip the poll because none of the binaries fit. 3 options is the sweet spot for opinion polls.",
      },
      {
        h: "4 options: structured choices",
        body: "4 options shine for: best-of-X polls (\"album of the year\"), tier-list votes (\"S/A/B/C tier?\"), time-slot voting (\"morning/afternoon/evening/night\"), genre selection. 4 options handle the \"four directions\" pattern (compass-like categorical choices). Engagement is good but not max — fewer options would lose information; more would lose voters.",
      },
      {
        h: "6 options: comprehensive votes",
        body: "6 options work for: album of the year with 6 nominees, full tier lists (S/A/B/C/D/F), comprehensive genre selection. Best for power-user polls in fandom contexts where voters are deeply engaged. Vote rate is lowest (relative to 2-option polls) but engagement quality is highest — voters who complete a 6-option poll are deeply invested. moomz tops out at 6.",
      },
    ],
    polls: [
      { q: "Default option count?", options: ["2", "3", "4", "6"] },
      { q: "Best for Insta Story?", options: ["2", "3", "4", "6"] },
      { q: "Best for predictions?", options: ["3", "4", "6", "Mix"] },
      { q: "Best for album of the year?", options: ["4", "6", "10+", "Mix"] },
      { q: "Best for relationship polls?", options: ["2", "3", "4", "Mix"] },
      { q: "Best for tier lists?", options: ["4", "6", "8+", "Mix"] },
      { q: "Skip polls over 6 options?", options: ["Yes", "No", "Sometimes", "Only bad ones"] },
      { q: "moomz allows 8+ options soon?", options: ["Yes please", "Stay at 6", "Mid", "Don't care"] },
    ],
    faq: [
      {
        q: "What if I have 7 options to vote on?",
        a: "Reduce by combining (\"X or Y\" as one option) or eliminate the weakest. 6 is moomz's max for cognitive reasons.",
      },
      {
        q: "Can I add options after the poll launches?",
        a: "Currently no — moomz polls have fixed options once created. Re-create the poll if you need to expand.",
      },
      {
        q: "Will more options ever be allowed?",
        a: "Possibly for premium tier in 2026. The data discourages it for engagement reasons.",
      },
      {
        q: "Are 4-option polls always tier-list-shaped?",
        a: "No — 4 options work for many use cases. Not all 4-option polls are tier lists.",
      },
    ],
    related: ["two-vs-five-options", "write-poll-question-people-answer-en", "viral-poll-formats"],
    updatedAt: today,
  },
  {
    slug: "anonymous-vs-identified-poll-en",
    locale: "en",
    category: "guides",
    emoji: "🎭",
    title: "Anonymous Polls vs Identified Polls — When Anonymous Wins",
    h1: "Anonymous vs Identified Polls: When to Use Each",
    description:
      "When to use anonymous polls vs identified polls. Use cases for each, accuracy data, social dynamics analysis.",
    intro:
      "Instagram polls are identified. moomz polls are anonymous. When does each format win? Here's the rule-set for picking the right format based on use case, sensitivity, and accuracy needs.",
    sections: [
      {
        h: "Anonymous polls: honest opinions",
        body: "Anonymous polls win when honesty matters more than identity. Sensitive topics (dating opinions, body image, drama dilemmas, work satisfaction) get 3x more honest answers when anonymous. moomz defaults to anonymous because social topics dominate its use cases. Use anonymous for: confessions, opinion polls, surveys of any feeling-loaded topic.",
      },
      {
        h: "Identified polls: social proof and accountability",
        body: "Identified polls (Instagram-style) win when you want voters' identities visible. Use for: fan-cam reactions, support polls (\"who's coming to the wedding?\"), accountability polls (\"who's joining tomorrow's gym session?\"). The identity drives action — voters publicly commit. Identified polls have lower vote rates but higher action rates.",
      },
      {
        h: "Hybrid: anonymous voting, public commitment",
        body: "Some use cases need both. \"Vote anonymously whether you'd attend, then RSVP publicly if you voted yes\". moomz polls handle the anonymous vote; native event tools handle the public RSVP. Combining the two preserves honest opinion while extracting public commitment from the willing.",
      },
      {
        h: "Decision matrix",
        body: "Stakes-driven decision needing honest input: anonymous (moomz). Social signal or peer pressure useful: identified (Instagram). Sensitive topics: anonymous. Public commitment needed: identified. Friend-chat polls: usually anonymous unless commitment is the goal. Work polls: anonymous for feedback, identified for logistics.",
      },
    ],
    polls: [
      { q: "Prefer anonymous or identified?", options: ["Anonymous", "Identified", "Mix", "Depends"] },
      { q: "Most sensitive topic?", options: ["Dating", "Body", "Work", "Politics"] },
      { q: "Public commitment via poll?", options: ["Yes", "No", "Mix", "Rarely"] },
      { q: "Drama polls anonymous?", options: ["Always", "Sometimes", "Never", "Default"] },
      { q: "Work polls anonymous?", options: ["Yes feedback", "Identified logistics", "Mix", "Never"] },
      { q: "Hybrid format useful?", options: ["Yes", "No", "Sometimes", "Complicated"] },
      { q: "Trust anonymous polls?", options: ["Yes", "No", "Mid", "More honest"] },
      { q: "Identified polls more accurate?", options: ["No", "Yes", "Mid", "Depends"] },
    ],
    faq: [
      {
        q: "Is moomz fully anonymous?",
        a: "Yes — votes are anonymous by default. Only aggregate totals visible.",
      },
      {
        q: "Can I see who voted on my poll?",
        a: "No — moomz doesn't expose voter identity, even to poll creators. Anonymity is enforced.",
      },
      {
        q: "Why is Instagram identified?",
        a: "Engagement model — Instagram benefits from social dynamics around vote identity. Different platform, different tradeoff.",
      },
      {
        q: "Is anonymous always more accurate?",
        a: "For sensitive topics, yes. For commitment polls (\"who's coming?\"), identified is better.",
      },
    ],
    related: ["read-poll-results-without-bias-en", "psychology-binary-choice", "polls-engagement-stats"],
    updatedAt: today,
  },
  {
    slug: "polls-in-slack-team-en",
    locale: "en",
    category: "guides",
    emoji: "💼",
    title: "How to Use Polls in a Slack Channel for Team Decisions",
    h1: "Slack Polls for Team Decisions: A Manager's Guide",
    description:
      "How to use polls in a Slack channel for team decisions. Best practices for managers, decision types, deadline setting.",
    intro:
      "Slack is where team decisions happen in 2026. moomz polls integrate cleanly — paste a URL, vote in 30 seconds, decision made. Here's the manager's guide to polling Slack channels effectively.",
    sections: [
      {
        h: "Best Slack channels to poll",
        body: "Use polls in: #team for team-level decisions, #engineering for technical votes, #social for off-site planning. Avoid polling in #general for sensitive topics — too many eyes. Avoid polling in DMs — defeats the collective nature. Best size: 8-50 person channels. Smaller and the result is one person; larger and the noise drowns the signal.",
      },
      {
        h: "Decision types polls handle well",
        body: "Polls work for: meeting time selection, lunch decisions, project priority votes (out of pre-curated options), tool selection (Slack vs Teams vs Discord), off-site location. Polls don't work for: strategic direction, hiring, salary, performance reviews. The rule: distributed decisions where 10 small inputs equal 1 collective choice.",
      },
      {
        h: "Setting deadlines and closing votes",
        body: "Always include a deadline in the Slack message: \"Vote by Friday 5pm PT\". moomz polls don't auto-close, so the deadline is social. Send a 4-hour-before reminder for important polls. Once the deadline passes, screenshot the final result and post it in the same thread as the decision. Reference the screenshot when anyone questions later.",
      },
      {
        h: "Avoiding poll fatigue",
        body: "Too many polls = fatigue. Limit yourself to 3-5 polls per week per channel. Reserve polls for genuine decisions; use threads for opinion discussions. If your team complains about poll volume, audit which polls actually mattered. Cut the rest. Best teams report polls feeling like \"one Slack message that replaced 30 emails\" — preserve that magic by being selective.",
      },
    ],
    polls: [
      { q: "Polls in Slack: yes or no?", options: ["Yes", "No", "Sometimes", "Daily"] },
      { q: "Best channel size to poll?", options: ["5-10", "10-50", "50+", "Whole company"] },
      { q: "Deadline message?", options: ["Always", "Sometimes", "Never", "Critical"] },
      { q: "Poll fatigue real?", options: ["Yes", "No", "Mid", "Sometimes"] },
      { q: "Best decision type for polls?", options: ["Meeting time", "Lunch", "Priority", "Off-site"] },
      { q: "Strategy by poll?", options: ["No", "Sometimes", "Yes", "Never"] },
      { q: "Polls reduce decision time?", options: ["Yes a lot", "Mid", "No", "Slower"] },
      { q: "Anonymous polls at work?", options: ["Yes", "No", "Mix", "Depends"] },
    ],
    faq: [
      {
        q: "Should I use Slack's native poll or moomz?",
        a: "Native for quick polls inside the workspace. moomz for anonymous polls or polls that need to cross channels/orgs.",
      },
      {
        q: "How do I get people to actually vote?",
        a: "Set deadlines, send reminders, make the vote one tap, and act on the result. Acted-on polls drive future participation.",
      },
      {
        q: "Can polls replace 1:1s?",
        a: "No — polls aren't a substitute for individual conversations. They replace meta-meetings.",
      },
      {
        q: "Best time of day to post a poll?",
        a: "10-11am or 2-3pm in your team's timezone. Avoid early morning (missed) and end of day (forgotten).",
      },
    ],
    related: ["polls-replace-emails-work", "team-building-en", "share-poll-whatsapp-discord-slack-en"],
    updatedAt: today,
  },
  {
    slug: "polls-tiktok-live-en",
    locale: "en",
    category: "guides",
    emoji: "🎥",
    title: "How to Use Polls in a TikTok Live",
    h1: "TikTok Live Polls: Drive Engagement During the Stream",
    description:
      "How to use polls in a TikTok live. Setup, link sharing, real-time voting strategies, viewer retention boost.",
    intro:
      "TikTok Live doesn't have native polls. Creators use moomz to fill the gap: announce the poll, share the link in chat, watch live results during the stream. Polls in live streams boost average watch time by 40%. Here's the playbook.",
    sections: [
      {
        h: "Set up the poll before going live",
        body: "Pre-create 3-5 polls before starting the live. Save the short URLs in a notes app. During the live, you can drop a fresh poll every 10-15 minutes by pasting the next URL. Pre-prep prevents awkward gaps. Best polls for live: viewer challenges (\"vote what I do next\"), opinion polls (\"hot or not?\"), prediction polls (\"will I beat this level?\").",
      },
      {
        h: "Share the link in live chat",
        body: "TikTok Live chat doesn't auto-unfurl URLs cleanly. Announce the link verbally (\"go to moomz.com/x7k2j\"), then paste it in chat. The 5-letter moomz URL is short enough to read out loud. Viewers tap, vote, return to the stream. Some streamers project the poll URL via screen overlay (StreamLabs or OBS-style) for visual recall.",
      },
      {
        h: "Vote results in the stream",
        body: "Once viewers vote, screenshot the live result and react on camera. \"73% said do the challenge — okay I'm doing it\". The reaction is the content. Streamers who react to poll results emote more, viewers stay longer. Don't just say \"X won\" — react like the result matters, which it does in terms of stream agency.",
      },
      {
        h: "Recap polls and follow-up content",
        body: "End the live with a recap poll: \"best moment of tonight's stream?\". Run a follow-up next stream: \"continuing what we voted last time?\". This builds continuity. Returning viewers feel the streamer remembers their input. Polls become the connective tissue between streams.",
      },
    ],
    polls: [
      { q: "Polls in TikTok Live: yes?", options: ["Yes", "No", "Sometimes", "Always"] },
      { q: "Best poll type for live?", options: ["Viewer challenge", "Opinion", "Prediction", "Recap"] },
      { q: "Pre-create polls?", options: ["Yes", "No", "Sometimes", "Always"] },
      { q: "Screenshot result reaction?", options: ["Always", "Sometimes", "Never", "Critical"] },
      { q: "Polls boost watch time?", options: ["Yes a lot", "Mid", "No", "Critical"] },
      { q: "Share link verbally?", options: ["Yes", "No", "Both verbal and chat", "Just chat"] },
      { q: "Recap poll at end?", options: ["Yes", "No", "Sometimes", "Always"] },
      { q: "Continuity across lives?", options: ["Yes", "No", "Sometimes", "Always"] },
    ],
    faq: [
      {
        q: "Can TikTok bots auto-post the poll link?",
        a: "Not natively. Some third-party tools can; usually a streamer pastes manually.",
      },
      {
        q: "Will TikTok ever add native live polls?",
        a: "Possibly. Until then, moomz fills the gap via shareable URLs.",
      },
      {
        q: "How many polls per live?",
        a: "3-5 polls per hour. More is fatiguing; fewer wastes the engagement opportunity.",
      },
      {
        q: "Are TikTok Live moomz polls anonymous?",
        a: "Yes — same anonymity. Viewers vote anonymously; only totals visible.",
      },
    ],
    related: ["poll-go-viral-tiktok", "twitch-streamer-en", "tiktok-poll"],
    updatedAt: today,
  },
  {
    slug: "poll-viral-twitter-x-en",
    locale: "en",
    category: "guides",
    emoji: "🐦",
    title: "How to Make a Poll Go Viral on Twitter / X",
    h1: "Viral Twitter Polls: Format, Topic, Quote-Tweet Loop",
    description:
      "How to make a poll go viral on Twitter / X. Topic choice, format, quote-tweet loop, time-of-day optimization.",
    intro:
      "Twitter has native polls but they're capped at 4 options and 7 days. moomz polls escape both limits and add anonymity. For viral polls, the moomz URL pasted in a tweet outperforms native polls 3x in engagement. Here's how to make a Twitter / X poll go viral.",
    sections: [
      {
        h: "Topic choice: controversy beats consensus",
        body: "Viral Twitter polls choose topics where the audience is split 60/40 — not 95/5. \"Pizza or sushi?\" is too easy; \"Pineapple on pizza?\" is the right split. Controversy drives quote-tweets, which drive virality. Avoid topics where one side is obviously right (\"is racism bad?\" — viral but wrong reason). Aim for genuine debate where both sides have respectable defenders.",
      },
      {
        h: "Quote-tweet loop",
        body: "Once the poll has 100+ votes, quote-tweet your own poll with a hot take. \"73% wrong\" or \"can't believe this is even close\". The quote tweet drives a new wave of voters. Repeat 2-3 times across 24 hours. Each quote-tweet brings the poll back to the top of the feed. This is the single biggest virality multiplier for Twitter polls.",
      },
      {
        h: "Time of day and day of week",
        body: "Best time to post: 8-10am ET on Tuesday-Thursday. Audience peak attention. Avoid weekends (lower engagement) and late-evening (votes don't compound overnight). Polls need momentum in the first 2 hours; post when active.",
      },
      {
        h: "Native poll vs moomz link",
        body: "Native Twitter polls cap at 4 options and 7 days. moomz polls handle 6 options and stay open indefinitely. For viral polls with broad option sets (\"AOTY out of these 6\"), moomz wins. For binary polls (\"yes or no?\"), native is fine — the embedded UI inside Twitter outperforms an external link click. Choose by use case.",
      },
    ],
    polls: [
      { q: "Native poll or moomz link?", options: ["Native", "moomz", "Mix", "Depends"] },
      { q: "Best topic for virality?", options: ["Controversial", "Funny", "Drama", "Mid"] },
      { q: "Quote-tweet your own poll?", options: ["Yes", "No", "Sometimes", "Always"] },
      { q: "Best time to post?", options: ["8-10am ET", "Lunch", "Evening", "Late night"] },
      { q: "Avoid weekends?", options: ["Yes", "No", "Mid", "Try anyway"] },
      { q: "How many quote tweets?", options: ["1", "2-3", "5+", "None"] },
      { q: "Poll for 7 days or longer?", options: ["7 days", "Longer", "24h", "1h"] },
      { q: "moomz polls for 6 options worth it?", options: ["Yes", "No", "Mid", "Always"] },
    ],
    faq: [
      {
        q: "Are Twitter polls anonymous?",
        a: "Native Twitter polls don't reveal voter identity but the platform tracks. moomz is fully anonymous.",
      },
      {
        q: "Can I delete a viral poll?",
        a: "Native: yes, anytime. moomz: yes, but the URL becomes dead and viewers see a 404.",
      },
      {
        q: "Will Twitter / X expand poll options?",
        a: "Currently capped at 4 options and 7 days. Unclear if expansion is planned. moomz fills the gap.",
      },
      {
        q: "Best caption format for moomz polls on Twitter?",
        a: "Question + provocative line + moomz link. \"Pineapple on pizza? Settle it: moomz.com/x7k2j\"",
      },
    ],
    related: ["poll-go-viral-tiktok", "instagram-story-poll-best-practices", "viral-poll-formats"],
    updatedAt: today,
  },
  {
    slug: "fr-partager-sondage-whatsapp-discord-slack",
    locale: "fr",
    category: "guides",
    emoji: "🔗",
    title: "Comment partager un sondage sur WhatsApp, Discord, Slack",
    h1: "Partager un sondage moomz sur WhatsApp, Discord, Slack",
    description:
      "Guide pas à pas pour partager un sondage moomz sur WhatsApp, Discord, Slack. Aperçu de lien, épinglage, notifications.",
    intro:
      "Une fois ton sondage moomz créé, l'URL marche dans toutes les apps de chat. Mais chaque plateforme a ses tics. Voici la manière optimale de partager un sondage moomz sur WhatsApp, Discord, et Slack — avec aperçus, épinglage, et étiquette des notifications.",
    sections: [
      {
        h: "WhatsApp : colle le lien, aperçu auto",
        body: "Colle l'URL moomz dans n'importe quel chat WhatsApp. WhatsApp récupère automatiquement une carte d'aperçu avec la question du sondage, l'emoji, et le nombre d'options. L'aperçu rend le message tappable. Pour les groupes, envoie le lien plus une intro d'une ligne : \"Vote pizza ou sushi ce soir\". Épingle le message dans les infos du chat pour les sondages en cours. WhatsApp n'a pas de sondage natif au-delà de 12 options, moomz comble le manque pour les choix plus larges.",
      },
      {
        h: "Discord : embed dans les canaux avec aperçu riche",
        body: "Dans Discord, colle le lien moomz dans n'importe quel canal. L'embed Discord se déplie avec l'aperçu du sondage. Pour les canaux vocaux, partage le lien dans le chat à côté — les voteurs cliquent et votent entre les manches. Pour les communautés Discord, mets un canal #sondages et utilise moomz pour les décisions communautaires. Le sondage natif Discord est limité à un serveur ; les sondages moomz voyagent entre serveurs via URL.",
      },
      {
        h: "Slack : marche dans n'importe quel canal ou DM",
        body: "Slack déplie automatiquement les URLs moomz en carte d'aperçu montrant la question et les options. Pour les décisions équipe, poste dans le canal pertinent avec une deadline claire (\"Vote avant vendredi 17h\"). Pour les sondages entreprise, épingle dans #general. Les sondages intégrés Slack demandent une configuration workflow ; les sondages moomz marchent instantanément via URL. Les bots type Polly concurrencent mais moomz gagne pour les votes anonymes où le tracking d'identité est indésirable.",
      },
      {
        h: "Bonnes pratiques cross-plateforme",
        body: "Même sondage, plusieurs plateformes : colle l'URL moomz dans WhatsApp, Discord, Slack, et Telegram simultanément pour la portée maximale. L'URL marche partout parce que moomz est web-based. Pour les audiences créateur, lie depuis Instagram bio + TikTok bio + tweet épinglé Twitter vers le même sondage. Le cross-platform fonnel vers une seule page de résultat. Certains créateurs rapportent 5x de votes en plus avec ça vs un partage mono-plateforme.",
      },
    ],
    polls: [
      { q: "Meilleure plateforme pour partager des sondages ?", options: ["WhatsApp", "Discord", "Slack", "Telegram"] },
      { q: "Aperçu auto important ?", options: ["Oui", "Non", "Mid", "Toujours"] },
      { q: "Épingler le sondage ?", options: ["Toujours", "Parfois", "Jamais", "Que les gros"] },
      { q: "Message deadline important ?", options: ["Oui", "Non", "Mid", "Critique"] },
      { q: "Meilleure feature moomz dans chats ?", options: ["Anonyme", "Live", "URL courte", "Pas de signup"] },
      { q: "Partage cross-plateforme ?", options: ["Oui", "Non", "Parfois", "Toujours"] },
      { q: "Sondage natif vs moomz ?", options: ["moomz", "Natif", "Mix", "Natif + moomz"] },
    ],
    faq: [
      {
        q: "WhatsApp montre les résultats du sondage dans l'aperçu ?",
        a: "Il montre la question et le nombre d'options. Pour les résultats live, les destinataires cliquent le lien.",
      },
      {
        q: "Je peux épingler un sondage moomz dans Discord ?",
        a: "Oui — épingle n'importe quel message y compris ceux avec URLs sondage. Le message épinglé montre l'embed.",
      },
      {
        q: "Workspace Slack bloque les liens externes ?",
        a: "Certains workspaces restreignent l'unfurling. moomz marche quand même — l'URL est cliquable, juste sans aperçu.",
      },
      {
        q: "Je peux partager le même sondage sur plusieurs plateformes ?",
        a: "Oui — une seule URL moomz marche partout. Tous les votes s'agrègent dans une seule page résultat.",
      },
    ],
    related: ["partager-sondage-whatsapp", "share-poll-whatsapp-discord-slack-en", "discord-poll"],
    updatedAt: today,
  },
  {
    slug: "fr-ecrire-question-sondage-fait-voter",
    locale: "fr",
    category: "guides",
    emoji: "✍️",
    title: "Comment écrire une question de sondage qui fait voter",
    h1: "Écrire une question de sondage qui fait voter : guide au mot près",
    description:
      "Comment écrire une question de sondage qui fait voter. Longueur, formulation, spécificité, accroche émotionnelle.",
    intro:
      "La différence entre un sondage à 5% et un sondage à 35% de taux de vote, c'est la question elle-même. Courte, spécifique, à la 2e personne, légèrement émotionnelle. Voici le guide au mot près pour écrire des questions qui font voter.",
    sections: [
      {
        h: "Longueur : reste sous 12 mots",
        body: "Les questions sous 12 mots font 60% de votes en plus que les plus longues. Les voteurs scrollent vite ; ils ne parsent pas les phrases longues. \"Pizza ou sushi ce soir ?\" bat \"Quelle option de dîner préféreriez-vous tous pour notre groupe ce soir vu la météo ?\". Coupe tout ce qui n'est pas essentiel. Utilise des noms concrets. Drop les articles quand tu peux.",
      },
      {
        h: "Formulation : 2e personne directe",
        body: "\"Tu enverrais ce message ?\" outperform \"Faut-il envoyer ce message ?\" par 3x. Adresse le voteur directement. Utilise \"tu\" ou l'impératif. Pour les drama dilemmes : \"Toi tu ferais quoi ?\" bat \"Quelqu'un ferait quoi ?\". L'adresse directe active l'identité du voteur, ce qui pousse à voter.",
      },
      {
        h: "Spécificité : nomme le truc concrètement",
        body: "\"Pizza ou sushi ?\" bat \"Options dîner ?\". Concret > abstrait. Noms de marque, lieux, personnes ajoutent de la spécificité qui drive l'engagement (avec respect du bon goût). \"Tu envoies ce DM Insta ?\" a besoin du contexte du DM — les sondages vagues perdent. Les sondages moomz marchent mieux quand la question est tellement spécifique que le voteur peut tapper sans relire.",
      },
      {
        h: "Accroche émotionnelle : les stakes augmentent le taux de vote",
        body: "Ajoute des stakes légers. \"Pizza ou sushi ce soir (on crève la dalle)\" bat \"Pizza ou sushi ce soir ?\" par 30%. Les stakes activent l'empathie. Drama, FOMO, urgence décisionnelle drivent tous l'engagement. N'en fais pas trop — la manipulation émotionnelle se voit. Utilise des stakes qui collent au scénario réel.",
      },
    ],
    polls: [
      { q: "Longueur idéale de question ?", options: ["Sous 8 mots", "8-12 mots", "12-20", "20+"] },
      { q: "2e personne mieux ?", options: ["Oui", "Non", "Mid", "Toujours"] },
      { q: "Spécifique ou abstrait ?", options: ["Spécifique", "Abstrait", "Mix", "Ça dépend"] },
      { q: "Accroches émotionnelles marchent ?", options: ["Oui", "Non", "Parfois", "Risque overcook"] },
      { q: "Stakes dans la question ?", options: ["Toujours", "Parfois", "Jamais", "Si réels"] },
      { q: "Meilleure émotion pour accrocher ?", options: ["Urgence", "Drama", "FOMO", "Empathie"] },
      { q: "Couper les articles ?", options: ["Oui", "Non", "Parfois", "Que les courts"] },
      { q: "Reformuler sondages vagues ?", options: ["Toujours", "Parfois", "Jamais", "Si feedback"] },
    ],
    faq: [
      {
        q: "Je dois mettre un emoji dans la question ?",
        a: "Légèrement — un emoji peut booster l'engagement. Plus de 2, ça fait spam.",
      },
      {
        q: "Question en majuscules ?",
        a: "Généralement non. Maj pour un mot en emphase, ok. Tout en maj, ça fait crier.",
      },
      {
        q: "Questions finissant par 'non ?' ou 'pas vrai ?'",
        a: "Évite le phrasing biaisé. \"Pizza ce soir, non ?\" biaise le résultat. Reste neutre.",
      },
      {
        q: "Je peux reformuler un sondage à faible engagement ?",
        a: "Oui — relance avec la nouvelle question. Le premier sondage s'efface ; le nouveau capture des votes frais.",
      },
    ],
    related: ["fr-erreurs-story-sondage", "fr-debat-2-options", "comment-faire-sondage-instagram"],
    updatedAt: today,
  },
  {
    slug: "fr-combien-options-sondage",
    locale: "fr",
    category: "guides",
    emoji: "🔢",
    title: "Combien d'options pour un sondage ? 2, 3, 4 ou 6 ?",
    h1: "Nombre d'options sondage : 2, 3, 4 ou 6 — guide complet",
    description:
      "Combien d'options pour un sondage ? Guide complet sur 2, 3, 4 ou 6 options selon le cas d'usage. Données engagement.",
    intro:
      "moomz supporte 2-6 options par sondage. La plupart des gens mettent 4 par défaut. Les données disent que le défaut est souvent faux. Voici le guide cas-par-cas pour choisir le bon nombre d'options.",
    sections: [
      {
        h: "2 options : contextes scroll-and-vote",
        body: "Utilise 2 options pour les stories Instagram, les liens en bio TikTok, et tout contexte où les voteurs scrollent vite. Le binaire minimise la charge cognitive. Marche pour : this-or-that esthétique, hot takes, drama dilemmes, décisions simples. Évite 2 options pour : décisions vraiment multi-alternatives, classements de goût, prédictions à plusieurs résultats plausibles.",
      },
      {
        h: "3 options : opinions nuancées",
        body: "3 options marchent quand il y a un vrai middle ground ou une réponse \"ça dépend\". Les patterns \"oui / non / mid\" dominent les sondages Gen Z. \"Reste / pars / attends\" pour les sondages couple. La 3e option absorbe les voteurs qui auraient skip parce qu'aucun binaire ne colle. 3 options est le sweet spot pour les sondages d'opinion.",
      },
      {
        h: "4 options : choix structurés",
        body: "4 options brillent pour : meilleur-de-X (\"album de l'année\"), votes tier list (\"S/A/B/C ?\"), créneaux horaires (\"matin/aprem/soirée/nuit\"), sélection de genre. 4 options gèrent le pattern \"4 directions\" (choix catégoriels type boussole). L'engagement est bon mais pas max — moins perdrait de l'info, plus perdrait des voteurs.",
      },
      {
        h: "6 options : votes complets",
        body: "6 options marchent pour : album de l'année avec 6 nominés, tier lists complètes (S/A/B/C/D/F), sélection de genre complète. Idéal pour les power-user polls dans les contextes fandom où les voteurs sont très engagés. Le taux de vote est plus bas (vs 2 options) mais la qualité d'engagement est la plus haute — les voteurs qui complètent un sondage à 6 options sont à fond. moomz plafonne à 6.",
      },
    ],
    polls: [
      { q: "Nombre d'options par défaut ?", options: ["2", "3", "4", "6"] },
      { q: "Meilleur pour Insta Story ?", options: ["2", "3", "4", "6"] },
      { q: "Meilleur pour prédictions ?", options: ["3", "4", "6", "Mix"] },
      { q: "Meilleur pour album de l'année ?", options: ["4", "6", "10+", "Mix"] },
      { q: "Meilleur pour sondage couple ?", options: ["2", "3", "4", "Mix"] },
      { q: "Meilleur pour tier list ?", options: ["4", "6", "8+", "Mix"] },
      { q: "Tu skip les sondages 6+ options ?", options: ["Oui", "Non", "Parfois", "Que les mauvais"] },
      { q: "moomz va permettre 8+ options ?", options: ["Oui please", "Reste à 6", "Mid", "M'en bats"] },
    ],
    faq: [
      {
        q: "J'ai 7 options à sonder, je fais quoi ?",
        a: "Réduis en combinant (\"X ou Y\" en une option) ou élimine la plus faible. 6 est le max moomz pour des raisons cognitives.",
      },
      {
        q: "Je peux ajouter des options après le lancement du sondage ?",
        a: "Actuellement non — les sondages moomz ont des options fixes une fois créés. Recrée le sondage si tu dois étendre.",
      },
      {
        q: "Plus d'options seront permises un jour ?",
        a: "Peut-être pour le tier premium en 2026. Les données découragent ça pour des raisons d'engagement.",
      },
      {
        q: "Les sondages à 4 options sont toujours des tier lists ?",
        a: "Non — 4 options marchent pour plein de cas d'usage. Tous les 4 options ne sont pas des tier lists.",
      },
    ],
    related: ["fr-debat-2-options", "fr-ecrire-question-sondage-fait-voter", "fr-sondage-format-gen-z"],
    updatedAt: today,
  },
  {
    slug: "fr-sondage-boulot-reunion",
    locale: "fr",
    category: "guides",
    emoji: "💼",
    title: "Comment utiliser un sondage au boulot pour les décisions d'équipe",
    h1: "Sondage au boulot : guide manager pour les décisions Slack/Teams",
    description:
      "Comment utiliser un sondage au boulot. Guide manager pour les décisions équipe sur Slack/Teams. Types, deadlines, fatigue.",
    intro:
      "Slack et Teams sont là où les décisions d'équipe se prennent en 2026. Les sondages moomz s'intègrent proprement — colle une URL, vote en 30 secondes, décision prise. Voici le guide manager pour utiliser des sondages au boulot efficacement.",
    sections: [
      {
        h: "Meilleurs canaux à sonder",
        body: "Utilise les sondages dans : #team pour les décisions équipe, #engineering pour les votes techniques, #social pour le planning off-site. Évite de sonder dans #general pour les sujets sensibles — trop de regards. Évite les sondages en DM — défait l'aspect collectif. Taille idéale : 8-50 personnes par canal. Moins, le résultat est une personne ; plus, le bruit noie le signal.",
      },
      {
        h: "Types de décisions qui marchent",
        body: "Les sondages marchent pour : sélection d'horaire de réunion, décisions déjeuner, votes priorité projet (parmi des options pré-curatées), choix d'outil (Slack vs Teams vs Discord), localisation off-site. Les sondages ne marchent pas pour : direction stratégique, recrutement, salaire, reviews de performance. La règle : décisions distribuées où 10 petits inputs égalent 1 choix collectif.",
      },
      {
        h: "Fixer les deadlines et clôturer les votes",
        body: "Inclus toujours une deadline dans le message Slack : \"Vote avant vendredi 17h\". Les sondages moomz ne se ferment pas auto, donc la deadline est sociale. Envoie un rappel 4h avant pour les sondages importants. Une fois la deadline passée, screenshot le résultat final et poste-le dans le même thread que la décision. Référence le screenshot quand quelqu'un questionne plus tard.",
      },
      {
        h: "Éviter la fatigue sondage",
        body: "Trop de sondages = fatigue. Limite-toi à 3-5 sondages par semaine par canal. Réserve les sondages aux vraies décisions ; utilise les threads pour les discussions d'opinion. Si ton équipe se plaint du volume de sondages, audite lesquels ont vraiment matter. Coupe le reste. Les meilleures équipes rapportent que les sondages se sentent comme \"un message Slack qui a remplacé 30 emails\" — préserve cette magie en étant sélectif.",
      },
    ],
    polls: [
      { q: "Sondages dans Slack : oui ou non ?", options: ["Oui", "Non", "Parfois", "Tous les jours"] },
      { q: "Taille canal idéale ?", options: ["5-10", "10-50", "50+", "Toute l'entreprise"] },
      { q: "Message deadline ?", options: ["Toujours", "Parfois", "Jamais", "Critique"] },
      { q: "Fatigue sondage réelle ?", options: ["Oui", "Non", "Mid", "Parfois"] },
      { q: "Meilleur type de décision ?", options: ["Horaire réunion", "Déjeuner", "Priorité", "Off-site"] },
      { q: "Stratégie par sondage ?", options: ["Non", "Parfois", "Oui", "Jamais"] },
      { q: "Sondages réduisent temps décision ?", options: ["Oui beaucoup", "Mid", "Non", "Plus lent"] },
      { q: "Sondages anonymes au boulot ?", options: ["Oui", "Non", "Mix", "Ça dépend"] },
    ],
    faq: [
      {
        q: "Sondage natif Slack ou moomz ?",
        a: "Natif pour les sondages rapides dans le workspace. moomz pour les sondages anonymes ou ceux qui traversent canaux/orgs.",
      },
      {
        q: "Comment faire que les gens votent vraiment ?",
        a: "Mets des deadlines, envoie des rappels, fais que le vote soit un tap, et agis sur le résultat. Les sondages auxquels on agit drivent la participation future.",
      },
      {
        q: "Les sondages peuvent remplacer les 1:1 ?",
        a: "Non — les sondages ne remplacent pas les conversations individuelles. Ils remplacent les méta-réunions.",
      },
      {
        q: "Meilleur moment de la journée pour poster un sondage ?",
        a: "10-11h ou 14-15h dans le fuseau horaire de ton équipe. Évite tôt le matin (raté) et fin de journée (oublié).",
      },
    ],
    related: ["fr-erreurs-story-sondage", "team-building-en", "coworkers-en"],
    updatedAt: today,
  },
  {
    slug: "fr-sondage-tiktok-live",
    locale: "fr",
    category: "guides",
    emoji: "🎥",
    title: "Sondage TikTok Live : comment ça marche",
    h1: "Sondage en TikTok Live : driver l'engagement pendant le stream",
    description:
      "Comment faire un sondage pendant un TikTok Live. Setup, partage du lien, voting temps réel, boost watch time.",
    intro:
      "TikTok Live n'a pas de sondage natif. Les créateurs utilisent moomz pour combler le manque : annoncer le sondage, partager le lien dans le chat, regarder les résultats live pendant le stream. Les sondages en live boostent la durée de visionnage moyenne de 40%. Voici le playbook.",
    sections: [
      {
        h: "Setup le sondage avant de passer en live",
        body: "Pré-crée 3-5 sondages avant de démarrer le live. Sauve les URLs courtes dans une app notes. Pendant le live, tu peux drop un nouveau sondage toutes les 10-15 minutes en collant l'URL suivante. La pré-prep évite les blancs. Meilleurs sondages pour live : challenges viewers (\"vote ce que je fais après\"), opinion (\"hot or not ?\"), prédiction (\"je passe ce niveau ?\").",
      },
      {
        h: "Partage le lien dans le chat live",
        body: "Le chat TikTok Live ne déplie pas les URLs proprement. Annonce le lien verbalement (\"va sur moomz.com/x7k2j\"), puis colle-le dans le chat. L'URL moomz à 5 lettres est assez courte pour être lue à voix haute. Les viewers tappent, votent, reviennent au stream. Certains streamers projettent l'URL du sondage via overlay écran (StreamLabs ou OBS-style) pour rappel visuel.",
      },
      {
        h: "Vote résultats dans le stream",
        body: "Une fois que les viewers ont voté, screenshot le résultat live et réagis caméra. \"73% ont dit fais le challenge — ok je le fais\". La réaction est le contenu. Les streamers qui réagissent aux résultats émotent plus, les viewers restent plus longtemps. Ne dis pas juste \"X a gagné\" — réagis comme si le résultat matter, parce que ça matter en termes d'agency stream.",
      },
      {
        h: "Sondage récap et contenu de relance",
        body: "Termine le live avec un sondage récap : \"meilleur moment du stream ce soir ?\". Lance une relance au prochain stream : \"on continue ce qu'on a voté la dernière fois ?\". Ça crée de la continuité. Les viewers récurrents ressentent que le streamer se souvient de leurs inputs. Les sondages deviennent le tissu conjonctif entre streams.",
      },
    ],
    polls: [
      { q: "Sondages dans TikTok Live : oui ?", options: ["Oui", "Non", "Parfois", "Toujours"] },
      { q: "Meilleur type de sondage live ?", options: ["Challenge viewer", "Opinion", "Prédiction", "Récap"] },
      { q: "Pré-créer les sondages ?", options: ["Oui", "Non", "Parfois", "Toujours"] },
      { q: "Screenshot réaction résultat ?", options: ["Toujours", "Parfois", "Jamais", "Critique"] },
      { q: "Sondages boostent watch time ?", options: ["Oui beaucoup", "Mid", "Non", "Critique"] },
      { q: "Partage lien verbalement ?", options: ["Oui", "Non", "Verbal + chat", "Juste chat"] },
      { q: "Sondage récap à la fin ?", options: ["Oui", "Non", "Parfois", "Toujours"] },
      { q: "Continuité entre lives ?", options: ["Oui", "Non", "Parfois", "Toujours"] },
    ],
    faq: [
      {
        q: "Les bots TikTok peuvent auto-poster le lien sondage ?",
        a: "Pas nativement. Quelques outils tiers peuvent ; généralement un streamer colle manuellement.",
      },
      {
        q: "TikTok va ajouter des sondages live natifs un jour ?",
        a: "Possible. En attendant, moomz comble le manque via URLs partageables.",
      },
      {
        q: "Combien de sondages par live ?",
        a: "3-5 sondages par heure. Plus c'est fatiguant ; moins c'est rater l'opportunité d'engagement.",
      },
      {
        q: "Les sondages moomz en TikTok Live sont anonymes ?",
        a: "Oui — même anonymat. Les viewers votent anonymement ; seuls les totaux visibles.",
      },
    ],
    related: ["fr-sondage-viral-tiktok", "tiktok-poll", "twitch-streamer-en"],
    updatedAt: today,
  },
  {
    slug: "fr-relancer-sondage-qui-ne-decolle-pas",
    locale: "fr",
    category: "guides",
    emoji: "🔄",
    title: "Comment relancer un sondage qui ne décolle pas",
    h1: "Relancer un sondage moomz : 5 techniques pour le réveiller",
    description:
      "Comment relancer un sondage qui ne décolle pas. Reformuler, repartager, changer le timing, ajouter une accroche.",
    intro:
      "Tu as créé un sondage, ça n'a pas pris. Pas grave — la plupart des sondages morts peuvent revivre. Voici 5 techniques pour relancer un sondage moomz qui n'a pas décollé au premier partage.",
    sections: [
      {
        h: "Technique 1 : reformule la question",
        body: "Souvent le sondage meurt parce que la question est mal formulée. Trop longue, trop vague, mauvaise 2e personne. Recrée le sondage avec une question reformulée et les mêmes options. Une nouvelle URL = un nouveau départ. La reformulation est la technique la plus efficace.",
      },
      {
        h: "Technique 2 : change le timing",
        body: "Un sondage posté à 9h du matin un lundi est mort-né. Reposte-le à 19h un mercredi. Le timing fait 2.5x de différence sur le taux de vote. Pour les sondages story Instagram, 19h-21h heure locale est le pic. Pour les sondages Slack au boulot, 10h-11h ou 14h-15h. Pour Twitter, 8h-10h ET. Ajuste.",
      },
      {
        h: "Technique 3 : ajoute une accroche émotionnelle",
        body: "Le sondage neutre fait moins que le sondage avec stakes. \"Pizza ou sushi ce soir\" devient \"Pizza ou sushi ce soir (on crève la dalle)\". Les stakes activent l'empathie. Drama, FOMO, urgence drivent l'engagement. Ne sur-cook pas — la manipulation émotionnelle se voit. Utilise des stakes réels.",
      },
      {
        h: "Technique 4 : quote-toi sur les RS",
        body: "Une fois le sondage relancé, quote-tweet ton propre lien avec un hot take : \"Honnêtement choqué que ça soit encore serré\". Le quote drive une nouvelle vague de voteurs. Sur Insta, fais une nouvelle story qui réfère au sondage. Sur TikTok, fais une vidéo \"vous votez encore ce sondage ?\". Le multiplicateur principal de viralité.",
      },
      {
        h: "Technique 5 : cross-platform push",
        body: "Le sondage qui meurt sur Instagram peut revivre sur Twitter. Le même lien moomz fonctionne partout — les votes s'agrègent dans une seule page résultat. Pousse sur 3-4 plateformes simultanément. Cross-platform funnel = 5x plus de votes que mono-plateforme. C'est le levier d'urgence ultime.",
      },
    ],
    polls: [
      { q: "Technique la plus utilisée ?", options: ["Reformuler", "Re-timer", "Accroche", "Cross-platform"] },
      { q: "Reformuler la question marche ?", options: ["Oui beaucoup", "Mid", "Non", "Toujours"] },
      { q: "Timing fait vraiment la différence ?", options: ["Oui", "Non", "Parfois", "Critique"] },
      { q: "Accroche émotionnelle helps ?", options: ["Oui", "Non", "Mid", "Risque overcook"] },
      { q: "Quote-toi-même fonctionne ?", options: ["Oui", "Non", "Mid", "Toujours"] },
      { q: "Cross-platform vraiment 5x ?", options: ["Oui", "Non", "Mid", "Sometimes"] },
      { q: "Quand abandonner un sondage mort ?", options: ["Après 24h", "Après 3 jours", "Après 1 sem", "Jamais"] },
      { q: "Relancer même avec 0 votes ?", options: ["Oui", "Non", "Mid", "Critique"] },
    ],
    faq: [
      {
        q: "Combien de fois relancer le même sondage ?",
        a: "2-3 fois max. Au-delà, l'audience capte que c'est désespéré.",
      },
      {
        q: "Je peux fusionner deux sondages morts en un ?",
        a: "Crée un nouveau sondage qui combine les options. Référence aux deux anciens dans la légende si besoin.",
      },
      {
        q: "Le sondage initial reste si je recrée ?",
        a: "Oui — l'URL ancienne marche encore. Mais l'attention va sur la nouvelle. Garde la vieille pour archive.",
      },
      {
        q: "Reposter même sondage = spam ?",
        a: "Si tu reformules vraiment et que tu changes le timing, non. Si tu reposes le même copier-coller, oui.",
      },
    ],
    related: ["fr-erreurs-story-sondage", "fr-ecrire-question-sondage-fait-voter", "fr-sondage-viral-tiktok"],
    updatedAt: today,
  },
];
