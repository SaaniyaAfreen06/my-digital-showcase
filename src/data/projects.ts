export interface CaseStudySection {
  heading: string;
  body: string;
}

export interface ProjectBase {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  image: string;
  images?: string[];
}

export interface Project extends ProjectBase {
  overview?: string;
  tldr?: string[];
  role?: string;
  duration?: string;
  tools?: string[];
  sections?: CaseStudySection[];
  outcomes?: string[];
}

// Projects — shorter entries (3-column grid)
export const projects: Project[] = [
  {
    id: "conversational-agent-onboarding",
    title: "Onboarding a Voice Agent by Just Talking",
    description:
      "New OneInbox clients hit a wall at the very first step: setting up their agent meant a screen full of configuration before they understood what any of it did. I built a chat-first take on that onboarding — describe the agent you want in plain conversation, and the system sets it up for you.",
    category: "Voice AI · OneInbox Onboarding",
    tags: ["Conversational UI", "Onboarding", "Agent Setup", "OneInbox"],
    image: "/screenshots/onboarding-chat.png",
    images: [
      "/screenshots/onboarding-chat.png",
      "/screenshots/onboarding-agent.png",
      "/screenshots/onboarding-review.png",
    ],
    overview:
      "On OneInbox, the very first thing a new client has to do is set up their voice agent — and that first step was also the hardest. The setup screen asked for configuration the client didn't yet understand, right at the activation moment that decides whether they stick. I built a chat-first approach to that onboarding: instead of filling out forms, the client describes what they want their agent to do in plain conversation, and the system turns that into a set-up, editable agent. (This flow handles getting the agent created; the prompt-training and roleplay-tuning live in a separate tool.)",
    role: "Product Manager · Builder",
    duration: "2025",
    tools: ["React", "TypeScript", "Conversational UI", "LLM Prompting"],
    sections: [
      {
        heading: "The workflow before",
        body: "To set up an agent on OneInbox, a new client faced configuration first: agent purpose, conversation flow, behavior rules, settings. They had to make technical decisions and learn the system's vocabulary before they'd seen what the product could even do. The interface expected the client to adapt to the system — at the exact moment they were least equipped to.",
      },
      {
        heading: "The friction that actually hurt",
        body: "This lands at the worst possible moment: activation, the first time a client tries to get value. A wall of config fields is intimidating, 'building an AI agent' sounds technical, and clients don't yet know what's even possible to configure. Onboarding is where you lose people — and we were putting the hardest step first.",
      },
      {
        heading: "The bet",
        body: "What if setting up an agent felt like describing it to a person? The flow asks conversational prompts — 'What should your agent help people with? Who will talk to it? What tone should it have?' — and turns the answers into a configured agent. No forms. The client expresses intent; the system handles the structure.",
      },
      {
        heading: "What I built",
        body: "A working chat-first onboarding flow: guided conversational setup, 'magic prompts' that suggest what to say when a client is stuck, an agent configured automatically from their answers, and full editability so nothing the system inferred is locked away. Where the standard flow front-loaded complexity, this let it surface only as needed.",
      },
      {
        heading: "The product thinking",
        body: "The guiding principle was progressive disclosure — reveal capability gradually instead of dumping it upfront, so complexity arrives only when the client is ready for it. Everything the system generates stays transparent and editable, so it assists without becoming a black box. And the scope was deliberate: this tool's job is to get a client from zero to a working agent. Tuning how that agent actually talks — prompt training and roleplay — is a different job, handled by a dedicated tool, so neither experience tries to do too much.",
      },
    ],
    outcomes: [
      "Reframed agent setup from 'fill out a configuration' to 'describe what you want'",
      "Targeted the hardest moment in onboarding — the first-time agent setup that decides activation",
      "Built a working chat-first flow: guided prompts, magic suggestions, auto-configured editable agent",
      "Applied progressive disclosure so complexity surfaces only as the client is ready for it",
      "Scoped cleanly against the prompt-training tool — this flow creates the agent; training tunes it",
    ],
  },
  {
    id: "cs-fatca-crs-voice-ai",
    title: "KYC on a Phone Call — A Banking Compliance POC",
    description:
      "Banks are legally required to re-verify customer tax data every few years. Today that means relationship managers chasing customers by phone for weeks. I led a POC that turned the whole refresh into one outbound AI call — and routed only the genuinely hard cases to a human.",
    category: "Fintech · Banking · Voice AI",
    tags: ["Banking", "FATCA/CRS", "KYC", "Voice AI", "Compliance"],
    image: "/screenshots/fatca-dashboard.png",
    images: [
      "/screenshots/fatca-dashboard.png",
      "/screenshots/fatca-customers.png",
      "/screenshots/fatca-kyc-refresh.png",
      "/screenshots/fatca-case-review.png",
    ],
    overview:
      "Under FATCA (US law) and CRS (global standard), banks must periodically re-confirm where each customer is a tax resident, whether they're a US person, and whether they hold a TIN. The process is unglamorous and enormous — and it has to happen on schedule, with an audit trail, for every customer. I led a proof of concept for a banking client that handled the routine refresh end-to-end with an outbound AI voice agent, and surfaced only the real exceptions to compliance officers.",
    role: "Associate Product Manager",
    duration: "2025",
    tools: ["OneInbox Outbound Agent", "Supabase", "TypeScript", "React", "Figma", "Postman"],
    sections: [
      {
        heading: "The workflow before",
        body: "When a customer is due for KYC refresh, a relationship manager has to call them, ask a fixed set of tax-residency questions, write the answers onto a form, and — if anything is unusual — hand the case to a compliance officer. Multiply that by every customer coming due each quarter. Contact rates are low, the same customers get called again and again, the paperwork is inconsistent, and there's no clean record of who said what, when.",
      },
      {
        heading: "The friction that actually hurt",
        body: "This isn't a back-office annoyance — it's regulatory exposure. Every customer not refreshed on time is a compliance gap, and the backlog compounds every quarter. Human callers are expensive and inconsistent: the exact wording of a FATCA question matters, and a relationship manager improvising on a call is a risk, not a feature. Meanwhile the genuinely complex cases — a customer with tax residency in four countries, a possible US person with no TIN — get buried in the same queue as the simple ones.",
      },
      {
        heading: "The redesign",
        body: "I designed the POC dashboard-first, voice-second. The dashboard owns the truth: it identifies who's due, risk-tiers them (1/3/5-year cycles), and triggers the call at the right moment. OneInbox's outbound voice agent handles the actual conversation — authentication, consent, tax-residency questions, and US-indicia screening — in natural speech, with the exact regulatory phrasing baked in across 12+ conversation branches so it never improvises. Straight-through cases are auto-classified and closed. Only true exceptions move forward.",
      },
      {
        heading: "The product call I'm proud of",
        body: "The naive version automates the call and dumps every result on a compliance officer to review. That just moves the bottleneck. The real design decision was making the system confident enough to *close* simple cases on its own and disciplined about what counts as an exception — multi-jurisdiction, US person, refused consent, missing TIN. Compliance officers only ever see cases that genuinely need a human judgment, with the tax data, escalation reason, a pre-filled FATCA/CRS classification, and the exact documents required (W-9, W-8BEN, CRS Self-Cert) already laid out. The scarce resource here is officer attention — the whole product is built to protect it.",
      },
      {
        heading: "What almost shipped broken",
        body: "In integration testing I caught a silent failure that would have been a disaster in a compliance system. The voice agent returned tax data under one field name; our database expected another. Records were saving with empty arrays — no error, no warning. Every call would have shown as 'completed' on the dashboard while the actual compliance data was blank. In most products that's a bug; in a regulated one it's a system that lies to auditors. I traced it, fixed the mapping, and added a validation gate so no record can be written without the data it claims to contain.",
      },
    ],
    outcomes: [
      "POC proved an end-to-end KYC refresh — due-list → outbound call → data capture → compliance routing — with no manual calling",
      "Designed 12+ regulatory conversation branches so the agent follows compliant phrasing instead of improvising",
      "Built the system to auto-close simple cases and escalate only genuine exceptions, protecting compliance-officer attention",
      "Caught a silent data-loss defect pre-launch — completed-looking calls were saving empty compliance records",
      "Designed the Case Review view: tax data, escalation reason, pre-filled classification, and required documents in one place",
    ],
  },
  {
    id: "cs-voice-interview-agent",
    title: "Train Your AI Agent Like a Call-Center Rep",
    description:
      "OneInbox clients kept getting stuck on the same thing: how should the agent's prompt be structured this time? So I borrowed the mental model every call center already knows — you don't hand a new rep a config file, you tell them how to handle calls and you roleplay. I built a tool that trains an AI agent the same way.",
    category: "Voice AI · Internal Tooling",
    tags: ["Voice AI", "OpenAI GPT-4", "Onboarding", "Prompt Engineering", "OneInbox"],
    image: "/screenshots/voice-trainer-interview.png",
    images: [
      "/screenshots/voice-trainer-interview.png",
      "/screenshots/voice-trainer-roleplay.png",
    ],
    overview:
      "At OneInbox, every new client agent started with the same blocker: clients knew exactly how they wanted their agent to behave, but not how to turn that into a structured system prompt — and the right structure changed for every use case. Instead of teaching clients to write prompts, I reframed the whole thing around a model they already understood: training a call-center employee. You explain how to handle the call, then you roleplay. This tool does exactly that — interview the client about how the agent should behave, generate the prompt for them, then roleplay-test the agent live before it ever talks to a real customer.",
    role: "Product Manager · Builder",
    duration: "2025",
    tools: ["Voice Agent (WebRTC)", "OpenAI GPT-4", "Next.js", "TypeScript", "Supabase"],
    sections: [
      {
        heading: "The workflow before",
        body: "Spinning up a voice agent meant writing a system prompt — the instructions that define how it behaves, what it can and can't say, how it handles objections, when it escalates. Our clients (bank ops teams, sales leads, CS managers) knew their business cold but had no idea how to express it as a prompt, and the 'right' structure was different for every use case. So every new agent ran through us: a PM or engineer wrote the prompt by hand. It didn't scale, and clients were dependent on us for the most important part of their own product.",
      },
      {
        heading: "The friction that actually hurt",
        body: "Prompt writing is a genuine specialist skill — it requires knowing how an LLM reacts to phrasing, how to set boundaries without breaking the conversation, how to cover edge cases. Asking a sales manager to do it is like asking them to write the call-center script in the model's native language. They'd give us vague instructions, we'd interpret, the agent would behave slightly wrong, and we'd loop again. Every new client deployment turned into a multi-day back-and-forth.",
      },
      {
        heading: "The mental model that unlocked it",
        body: "Call centers already solved this problem decades ago. You don't onboard a new agent by handing them a configuration document — you tell them what the job is, how to talk to customers, what never to say, and then you roleplay a few calls until they're ready. I built the tool around that exact loop. Clients aren't 'configuring an agent.' They're training one, in the language they already think in.",
      },
      {
        heading: "What I built",
        body: "Two phases. First, the client has a live voice conversation with a 'trainer' agent that interviews them — what does your agent do, who does it talk to, what tone, what should it never say, how does it handle objections, when does it escalate. They just talk. The transcript goes to GPT-4, which synthesizes a complete, well-structured system prompt (persona, goals, constraints, objection handling, escalation logic) — the part clients couldn't do. Second, one click pushes that prompt to a test agent and starts a roleplay call: the client plays the customer and hears their agent in action. Something off? Describe the change, regenerate, roleplay again. Minutes, not days.",
      },
      {
        heading: "The product call I'm proud of",
        body: "The obvious build was a form — dropdowns for tone, text fields for rules, a config screen. We considered it. But a form still forces clients to think in 'agent settings' instead of 'how I'd train a person,' and it can't capture the nuance of an actual conversation. Voice-in, roleplay-out matched the real job. The roleplay test was the non-negotiable: clients should hear their agent handle a call before it ever reaches a customer — the same reason no call center puts a new rep on live calls without a practice round first.",
      },
    ],
    outcomes: [
      "Reframed agent setup from 'write a prompt' to 'train a rep and roleplay' — a model clients already understood",
      "Removed the PM/engineer dependency: clients configure their own agents end-to-end",
      "Voice interview captures intent in plain language; GPT-4 synthesizes the structured prompt clients couldn't write",
      "Built-in roleplay test — clients hear and correct the agent before it talks to a real customer",
      "Collapsed new-agent setup from a multi-day back-and-forth into a self-serve session of minutes",
    ],
  },
  {
    id: "cs-manus-ai-processor",
    title: "Dial-Ready — Making Uploaded Leads Actually Callable",
    description:
      "OneInbox clients upload lead lists to run outbound voice campaigns — but the phone numbers come in every format imaginable, and a dialer can't call a number it can't parse. I introduced the feature that cleans every uploaded list into dial-ready numbers, so campaigns stop failing silently on data nobody checked.",
    category: "Voice AI · OneInbox Feature",
    tags: ["Voice Campaigns", "Lead Data", "E.164", "OneInbox", "Data Quality"],
    image: "/screenshots/dial-ready.png",
    overview:
      "On OneInbox, running an outbound voice campaign starts with one step: upload your leads. The problem is what nobody checks — whether the phone numbers in that file are actually callable. Numbers arrive with missing country codes, hyphens, brackets, local formats. The dialer needs clean E.164 to connect. I introduced Dial-Ready to sit in that gap: it takes the raw lead file a client uploads and returns one where every number the system can trust is formatted to dial — and every number it can't is flagged, not guessed.",
    role: "Product Manager · Builder",
    duration: "2025",
    tools: ["AI Workflow Engine", "Supabase", "Node.js", "libphonenumber-js", "REST APIs"],
    sections: [
      {
        heading: "The workflow before",
        body: "A client wants to run an outbound campaign, so they export their leads and upload the file to OneInbox. Before that list can actually dial, someone has to fix the phone column by hand — adding country codes, stripping hyphens and brackets, eyeballing which '9901108427' belongs to which country. On a real list that's hundreds or thousands of rows of tedious, error-prone work, repeated every single time a new list comes in.",
      },
      {
        heading: "The friction that actually hurt",
        body: "The real cost wasn't the time — it was that bad numbers fail invisibly. A voice dialer needs E.164 format (+[country code][number]). Feed it '971-50-658676' or a bare '9901108427' and the call just doesn't connect. No error, no flag — the campaign report simply shows a low connect rate, and nobody knows which leads were the problem or whether the script underperformed or the data did. You're burning campaign budget on numbers that were never callable to begin with.",
      },
      {
        heading: "The redesign",
        body: "Upload the raw file and an AI pass does the judgment work a human was doing manually: detect the phone column automatically (Mobile, Phone, Tel, Contact, or any column that looks like numbers), strip all formatting, and test each value against country codes for 200+ countries — 1-, 2-, and 3-digit prefixes. Numbers that resolve get the '+' prefix and land in 'dial-ready.' Numbers with no detectable country code go to 'needs country code.' Empty fields or junk like a lone '0' go to 'no phone.' Every other column in the row is preserved untouched.",
      },
      {
        heading: "The product call I'm proud of",
        body: "The tempting move was to make the AI guess the country when it wasn't sure — it would have made the 'dial-ready' bucket look bigger. I deliberately didn't. In an outbound campaign, a confidently-wrong number is worse than an honestly-flagged one: it wastes a dial, can hit the wrong person, and erodes trust in the whole list. So Dial-Ready only auto-formats what it's certain about and routes the rest to a human. The buckets aren't a limitation — they're the product telling the truth about the data.",
      },
      {
        heading: "Making it hold up at scale",
        body: "The underlying AI task API capped out on large files — past a few hundred rows it would silently truncate. Rather than push a row limit onto users, I split every file into chunks processed in parallel, with each chunk's state written to a database before results return. If anything restarts mid-run, it resumes instead of losing work. The user just sees: upload a file of any size, get a clean one back.",
      },
    ],
    outcomes: [
      "Turned a recurring hours-long manual spreadsheet cleanup into a single upload-and-go step",
      "Replaced silent, unattributable campaign failures with three honest buckets: dial-ready, needs country code, no phone",
      "Auto-resolves country codes across 200+ countries — no manual column mapping or per-region rules",
      "Chose to flag uncertain numbers rather than guess — protecting connect rates and list trust",
      "Handles lead files of any size without row limits, timeouts, or lost work",
    ],
  },
  {
    id: "cs-predict-growth-mvp",
    title: "Predict Growth — Building the Operating System for Early Founders",
    description:
      "Early-stage founders raise on a deck, a model, and a story — and today they cobble those together from scattered tools and expensive consultants. I led the 0→1 build of a single platform meant to replace all of it. The real work wasn't shipping V1; it was reading the market's signal honestly and rebuilding V2 around what founders actually wanted.",
    category: "0→1 Product · Fundraising SaaS",
    tags: ["0→1 Build", "Product Strategy", "Repositioning", "AI", "Fundraising"],
    image: "/screenshots/pg-1.png",
    images: [
      "/screenshots/pg-1.png",
      "/screenshots/pg-2.png",
      "/screenshots/pg-3.png",
      "/screenshots/pg-4.png",
      "/screenshots/pg-5.png",
      "/screenshots/pg-6.png",
      "/screenshots/pg-7.png",
      "/screenshots/pg-8.png",
      "/screenshots/pg-9.png",
      "/screenshots/pg-10.png",
      "/screenshots/pg-11.png",
      "/screenshots/pg-12.png",
      "/screenshots/pg-13.png",
    ],
    overview:
      "Predict Growth is a tech stack for early-stage founders — from idea stage through pre-Series A. The thesis: a founder shouldn't need to pay consultants and stitch together a dozen tools just to build a pitch deck, a business model, and a fundraising story. I led the product from a blank canvas through V1, into the market, and through a full repositioning into V2. The most valuable thing I produced wasn't a feature — it was a clear, evidence-backed answer to what should be a product and what should stay a service.",
    role: "Product Manager",
    duration: "Jun 2023 – 2025",
    tools: ["Figma", "OpenAI", "Notion", "Product Discovery", "Founder Research", "GTM"],
    sections: [
      {
        heading: "The workflow before",
        body: "A founder raising money needs four things: a pitch deck, a business model, financial projections, and a data room. Today each one lives in a different place — a Canva template here, a consultant there, an agency for the narrative, a spreadsheet for the model. It's expensive, fragmented, and the deck keeps changing as the story evolves. Worst of all, none of it helps a founder actually think — it just formats what they already (often wrongly) believe.",
      },
      {
        heading: "The bet behind V1",
        body: "We didn't want to be 'a tool that builds a deck' — anyone can do that in Canva. The bet was to embed thinking models into every step: when a founder enters their problem and solution, the product helps them assess validity and feasibility, surface how the industry actually solves it, build a bottoms-up market size, an ICP, a PMF scorecard, GTM funnels — across 20+ industry templates, powered by pre-engineered AI prompts. The deck and model would fall out as a byproduct of better thinking. We shipped this and put it in front of 250–300 founders.",
      },
      {
        heading: "The signal I had to be honest about",
        body: "V1 had everything — and still wasn't working. Founders weren't coming for thinking models; they were coming for an outcome. They typed in a problem and asked, 'how do I get my deck?' We had built the richest part of the journey and buried the thing people actually wanted. Positioning compounded the miss: marketed as a 'business planning tool,' founders expected financial projections we'd deliberately scoped out, and the word 'planning' set the wrong expectation entirely. The product wasn't the problem. The journey, the positioning, and the order of value were.",
      },
      {
        heading: "Learning what NOT to productize",
        body: "The sharpest output of that year was negative space. The extensive 5-year financial model failed because it needed founders to already have digitized books — a 'step zero' that doesn't exist for early founders; the real need was a simple Q&A that spits out a usable P&L. Custom pitch decks stayed a service, not a feature, because founders came for narrative and storytelling — judgment a template can't replace. The data room we built was never even pulled by a single user. Knowing what to kill, what to keep as a service, and what to never build is as valuable as knowing what to ship.",
      },
      {
        heading: "The redesign: V2, outcome-first",
        body: "V2 inverts the journey. A founder lands on 'what problem are you solving?', enters three problems and solutions, and a clean pre-seed deck (all 12 mandatory slides) forms as they go. The thinking models are still there — but optional, surfaced only when a founder chooses to go deeper, never forced. Financials moved into a lightweight Q&A agent that asks ~12–16 questions and returns a usable P&L, no spreadsheet literacy required. Same depth, radically simpler path to the outcome people actually came for.",
      },
    ],
    outcomes: [
      "Led a fundraising-SaaS product 0→1: V1 build, market launch to 250–300 founders, and a full V2 repositioning",
      "Diagnosed why V1 stalled — outcome buried behind process, and 'business planning' positioning set wrong expectations",
      "Produced a clear product/service boundary: killed the heavy financial model and data room, kept custom decks as a service",
      "Rebuilt V2 outcome-first — deck forms as you type, thinking models optional, financials via a simple Q&A agent",
      "Selected for IIM-Bangalore NSRCEL incubation; Pitch Perfect partner with Razorpay Rise (100–200 founder template downloads/month)",
      "Networked 100–200 early founders and ran on Microsoft for Startups, AWS, and MongoDB startup credits",
    ],
  },
];

// Case Studies — detailed entries (2-column grid, larger cards)
export const caseStudies: Project[] = [
  {
    id: "granola-product-teardown",
    title: "Granola Teardown — Why the No-Bot App Won",
    description:
      "A teardown of Granola — the AI notes app that beat bigger rivals to a $1.5B valuation. Why one trust-architecture decision won, and 4 PM-prioritized fixes for its gaps.",
    category: "Product Thinking · Analysis",
    tags: ["Product Teardown", "AI Tools", "Competitive Analysis", "Strategy"],
    image: "/screenshots/granola-teardown.png",
    overview:
      "Granola competes with Fireflies, Otter, and Fathom — rivals with more features and bigger teams. It's winning anyway: 250% revenue growth in a quarter, ~10% weekly user growth, and a jump from a $250M valuation (May 2025) to $1.5B (Mar 2026). I tore it down to find why — the architecture call, the UX philosophy, the moat, and where it still falls short.",
    tldr: [
      "The win: Granola records locally — no bot joins your call. That's a trust decision, not a feature.",
      "The moat: hybrid notes — your rough notes steer the AI, so output feels authored, not extracted.",
      "The trajectory: $250M (May 2025) → $1.5B valuation (Mar 2026), ~10% weekly user growth.",
      "The gaps: no screen capture, weak speaker ID, thin integrations — 4 fixes ranked by effort vs. retention.",
    ],
    role: "Independent Product Research",
    duration: "2025",
    tools: ["Product Analysis", "Competitive Research", "User Behavior Synthesis"],
    sections: [
      {
        heading: "The winning insight: no bot",
        body: "Every rival sends a visible bot into your meeting. Granola records locally — invisible to everyone on the call. That's not a technical preference; it's a trust decision. A bot changes the room: people talk differently when a third party is obviously recording. Granola bet that removing that friction was worth the engineering cost, and the market agreed.",
      },
      {
        heading: "The moat: hybrid notes as personal signal",
        body: "Most AI note tools take you out of the loop. Granola keeps you in it — you jot rough notes during the meeting, and those act as a priority signal. The output reflects what mattered to you, not just what was said, so notes feel authored rather than extracted. That's a different product philosophy, and it's hard to copy without rebuilding the experience around it.",
      },
      {
        heading: "Where it falls short",
        body: "No screen capture, so decisions made on slides go missing. Speaker ID stops at basic diarization, making multi-person notes hard to parse. Integrations are thin — notes sit in Granola instead of flowing to Notion, Slack, or a CRM. And the lack of an Android or web build adds friction for mixed-device teams.",
      },
      {
        heading: "My 4 PM-prioritized fixes",
        body: "1) Timestamped screenshot capture — ties slide content to the transcript without rebuilding the architecture. 2) You/Others speaker split — light tagging that sharply improves readability. 3) Section-level sharing — PMs share specific action items, not whole notes. 4) Notion/Slack auto-push on meeting end — low effort, high retention, because it closes the 'where did I put that?' loop. Ranked by engineering effort against retention impact.",
      },
    ],
    outcomes: [
      "Pinpointed the trust-architecture insight (no-bot, local capture) behind Granola's edge",
      "Connected the thesis to results: $250M → $1.5B valuation, 250% quarterly revenue growth, ~10% weekly user growth",
      "Mapped 4 prioritized fixes by engineering effort vs. retention impact",
      "Benchmarked differentiation across Fireflies, Otter, and Fathom",
      "Showed the PM arc: insight → gap → prioritized roadmap",
    ],
  },
  {
    id: "cs-snacc-vs-zepto",
    title: "Snacc vs Zepto Café — Why Infrastructure Beats Product",
    description:
      "Swiggy built Snacc in under 16 days. Zepto Café had been refining its kitchens since 2022. Same craving, same customer — one shut down ~13 months after launch. A teardown of why the better product lost.",
    category: "Product Teardown · Quick Commerce",
    tags: ["Quick Commerce", "Unit Economics", "Competitive Analysis", "GTM"],
    image: "/screenshots/snacc-teardown.png",
    overview:
      "Snacc had the better product — curated menu, purpose-built UX, and PMF signals Swiggy's own shutdown note called 'emerging.' It still died ~13 months in. Zepto Café, slower and clunkier, crossed 100,000 orders a day. This teardown is about the gap between a product users love and a business that survives — and why, in quick commerce, infrastructure beats UX.",
    tldr: [
      "Snacc: built in <16 days, launched Jan 2025, shut Feb 2026 — ~13 months, ~2 cities.",
      "Zepto Café: piloted 2022, own app Dec 2024 — ~100K orders/day and ~50% gross margin by early 2025.",
      "Why the better product lost: Snacc paid full marginal cost per order; Zepto Café rode dark stores it had already paid for.",
      "PM lesson: in quick commerce, validate the cost structure before you polish the product.",
    ],
    role: "Independent Product Research",
    duration: "2026",
    tools: ["Competitive Analysis", "Unit Economics", "Product Strategy"],
    sections: [
      {
        heading: "The market",
        body: "Quick commerce cracked sub-10-minute groceries. The next frontier was food — not a restaurant meal, but the gap in between: the 3pm chai, the poha before a standup, the snack too small for a full Swiggy order but too much effort to make. Zepto started piloting this craving in 2022; Swiggy's Snacc entered in January 2025. Same customer, same occasion — opposite foundations.",
      },
      {
        heading: "Two different bets",
        body: "Zepto Café piloted inside the main grocery app in 2022 and shipped as a standalone app in December 2024 — but always on top of existing dark stores: same rooms, same riders, same last mile, with a kitchen bolted into space already paid for. Snacc launched in under 16 days, into a market where Zepto Café and Blinkit Bistro already existed, on standalone micro-kitchens, a separate app, and a separate rider fleet. One was a multi-year conviction. The other was a 16-day reaction.",
      },
      {
        heading: "Where it broke: unit economics",
        body: "A ₹100 poha order looks like revenue. Subtract dedicated kitchen rent, a separate rider fleet, standalone-app acquisition, and packaging, and there's nothing left. Zepto Café never carried that weight — grocery operations already absorbed the fixed costs, so each café order improved dark-store utilization at near-zero marginal cost. By early 2025 the unit was running ~100K orders/day at a ~$100M annualized GMV run-rate with ~50% gross margins. Snacc paid full freight on every order from day one. That's a structural gap, not something you iterate your way out of.",
      },
      {
        heading: "The irony: Snacc was the better product",
        body: "Snacc felt purpose-built — curated menu, sharp pricing, UX that wasn't a grocery app with a food tab stapled on. Zepto Café works, but it's clearly infrastructure-first. And yet Swiggy's own shutdown email conceded PMF 'was emerging': users came back, habits formed. It didn't matter. In quick commerce, a great product on a broken cost structure loses to a fine product on the right infrastructure — every time.",
      },
      {
        heading: "What I'd have done as PM",
        body: "Don't ship Snacc as a standalone app. Launch it as a food category inside Swiggy Instamart — existing dark stores as the kitchen backbone, Instamart riders for last mile, Bolt for speed — keeping the Snacc brand and curated menu but inverting the cost structure. Swiggy already had the moat; Snacc was built beside it instead of on top of it. The 16-day build wasn't the mistake. Building in isolation from Swiggy's own infrastructure was.",
      },
    ],
    outcomes: [
      "Diagnosed why the better product lost: infrastructure leverage beats UX in quick commerce",
      "Quantified the unit-economics gap — Snacc's full marginal cost per order vs Zepto Café's ~50% gross margin riding shared dark stores",
      "Traced the timeline that tells the story: ~16-day build and ~13-month life (Jan 2025–Feb 2026) vs Zepto's 2022 pilot scaling to ~100K orders/day",
      "Proposed a concrete fix: Snacc as a category inside Instamart, not a standalone app",
      "PM takeaway: pressure-test the cost structure before polishing the product",
    ],
  },
];
