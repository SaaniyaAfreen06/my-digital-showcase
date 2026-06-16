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
  role?: string;
  duration?: string;
  tools?: string[];
  sections?: CaseStudySection[];
  outcomes?: string[];
}

// Projects — shorter entries (3-column grid)
export const projects: Project[] = [
  {
    id: "oneinbox-voice-ai",
    title: "OneInbox Voice AI Platform",
    description:
      "As the sole PM at a Techstars '25 startup, I drove voice AI from zero — redesigning onboarding, shipping enterprise compliance use cases, and building the testing infrastructure that made client go-lives possible.",
    category: "Voice AI · Enterprise SaaS",
    tags: ["Voice AI", "Retell AI", "Enterprise", "Techstars '25"],
    image: "/screenshots/oneinbox-voice.png",
    overview:
      "OneInbox AI (Techstars '25) enables businesses to deploy human-like AI phone agents at scale. As the Associate PM, I own the full product surface — discovery, specs, client deployments, QA, and reliability. Every enterprise client who goes live has gone through a flow I designed.",
    role: "Associate Product Manager",
    duration: "Oct 2025 – Present",
    tools: ["Retell AI", "Twilio", "Supabase", "Figma", "Postman", "SQL"],
    sections: [
      {
        heading: "The Problem",
        body: "Enterprise clients were signing up but not going live. Onboarding required technical configuration — system prompts, phone number provisioning, agent tuning — that non-technical buyers couldn't complete alone. Our CS team was firefighting deployments instead of scaling them.",
      },
      {
        heading: "Voice-First Onboarding",
        body: "I replaced the form-based agent setup with a voice interview flow. Users talk to a configuration agent that asks the right questions, then auto-generates the system prompt and wires everything up. Time-to-first-call dropped from days to under an hour for new clients.",
      },
      {
        heading: "Enterprise Compliance Use Cases",
        body: "I led the product build for two regulated industries: a banking FATCA/CRS KYC refresh voice agent (multi-jurisdiction tax residency collection, US indicia detection, compliance officer escalation), and an insurance renewal agent. Both required designing for regulatory edge cases, not just happy paths.",
      },
      {
        heading: "QA & Reliability",
        body: "I built the internal testing framework — scripted call scenarios, edge case playbooks, and a bug tracking system — that we run before every client go-live. I also caught and resolved a phone number normalization bug (non-E.164 format) that was silently dropping calls with zero error messages.",
      },
    ],
    outcomes: [
      "Reduced enterprise onboarding from days to under 1 hour with voice-first setup",
      "Shipped FATCA/CRS compliance voice agent for live banking deployment",
      "Built pre-launch QA framework — 0 production call failures post-implementation",
      "Resolved silent E.164 normalization bug that was failing calls without error",
      "Sole PM driving product at a Techstars '25-backed company",
    ],
  },
  {
    id: "raj-ai-studio",
    title: "Raj AI Studio — Conversational B2B Outreach",
    description:
      "Built a full-stack B2B outreach platform where sales teams create AI voice agents by chatting with Raj — no config screens, no technical setup. Chat to deployed agent in minutes.",
    category: "AI Product · 0→1 Build",
    tags: ["Voice AI", "B2B Sales", "Retell AI", "Supabase"],
    image: "/screenshots/raj-ai-home.png",
    images: [
      "/screenshots/raj-ai-home.png",
      "/screenshots/raj-ai-agent.png",
      "/screenshots/raj-ai-crm.png",
    ],
    overview:
      "Raj is an AI-native B2B outreach platform built for sales teams who want to run outbound voice campaigns without touching a config screen. Users describe what they need in natural language — Raj creates the agent, sets up the campaign, manages leads, and tracks results. I designed the product and led its end-to-end build.",
    role: "Product Manager · Builder",
    duration: "2025",
    tools: ["Retell AI", "Supabase", "React", "TypeScript", "OpenAI GPT-4"],
    sections: [
      {
        heading: "The Core Insight",
        body: "Every B2B voice AI tool assumes the user understands what an LLM prompt is. Most sales reps don't — and they shouldn't have to. The winning UX wasn't a better config form, it was no config form at all. Raj uses a conversational interface: tell it who you're calling and why, and it handles the rest.",
      },
      {
        heading: "Chat → Agent → Campaign in One Flow",
        body: "Users type or speak their goal to Raj. It parses intent, creates a Retell LLM with the right prompt, selects an appropriate voice, tunes responsiveness settings, and streams the creation progress back in real time. The same conversation then transitions into campaign setup — upload leads, set cadence, launch. No context switching.",
      },
      {
        heading: "Full Outreach Stack",
        body: "Raj includes: agent builder with live voice testing, campaign manager with call tracking (connected, interested, declined, no answer), lead table with per-record status, call transcripts per session, and CRM record lookup mid-conversation. Everything is synced between Supabase and Retell AI in real time.",
      },
      {
        heading: "Silent Failure Prevention",
        body: "Retell agent creation could fail silently — API timeout with a 200 response, leaving a record in Supabase with no Retell ID. I designed a detection layer that flags broken agents on load and a self-service 'Reconnect' flow so users never hit a dead end without a path out.",
      },
    ],
    outcomes: [
      "0-to-deployed agent in under 5 minutes via conversational interface",
      "Full outreach stack: agent builder → campaign → leads → transcripts",
      "Designed silent failure detection — no orphaned agents reaching users",
      "Built CRM lookup mid-conversation, enabling contextual outreach decisions",
    ],
  },
  {
    id: "cs-fatca-crs-voice-ai",
    title: "Banking POC: AI Voice Agent for KYC Compliance",
    description:
      "Banks spend weeks chasing customers for KYC refresh over phone and email — low contact rates, manual follow-ups, compliance backlogs. We built a proof of concept replacing that process with an outbound AI voice agent. I owned everything: what the agent says, what data it captures, how compliance officers review edge cases.",
    category: "Fintech · Banking · Voice AI",
    tags: ["Voice AI", "Banking", "FATCA/CRS", "KYC", "POC"],
    image: "/screenshots/fatca-dashboard.png",
    images: [
      "/screenshots/fatca-dashboard.png",
      "/screenshots/fatca-customers.png",
      "/screenshots/fatca-kyc-refresh.png",
      "/screenshots/fatca-case-review.png",
    ],
    overview:
      "Banks are legally required to periodically refresh KYC data on their customers — tax residency, FATCA/CRS status, US person detection. The traditional process: relationship managers manually call customers, fill paper forms, and route exceptions to compliance. It's slow, inconsistent, and doesn't scale. We built a POC for a banking client showing that an AI voice agent can handle the entire routine outreach end-to-end — and only escalate genuine exceptions to human compliance officers.",
    role: "Associate Product Manager",
    duration: "2025",
    tools: ["Retell AI", "Supabase", "TypeScript", "React", "Figma", "Postman"],
    sections: [
      {
        heading: "The Problem: KYC Refresh Is Expensive and Broken",
        body: "Every bank must periodically re-verify customer tax information under FATCA (US law) and CRS (global standard). This means calling customers to ask: Are you a US person? Do you have tax residency in other countries? Do you have a TIN? Manual outreach teams have 20–30% contact rates, repeat follow-ups, paper-based escalations, and no audit trail. For a bank with thousands of customers due for refresh, the backlog compounds every quarter.",
      },
      {
        heading: "The Solution: A Voice Agent That Handles the Routine",
        body: "I designed the POC as a dashboard-first, voice-second system. The dashboard identifies customers due for refresh, risk-tiers them (1yr/3yr/5yr cycles), and triggers the outbound AI call at the right time. The Retell AI agent handles authentication, consent, tax residency questions, and US indicia screening — all in a natural phone conversation. Straight-through cases are auto-classified and completed. Only genuine edge cases (multi-jurisdiction, US persons, refused customers) go to a compliance officer.",
      },
      {
        heading: "12+ Conversation Branches, Zero Improvisation",
        body: "Banking conversations cannot go off-script. I mapped every path: single-jurisdiction declaration, multi-country CRS, US indicia detection, TIN collection, customer refusal with compliant fallback, no-answer retry caps, and language escalation. Each branch has specific regulatory phrasing. I wrote and tested the full system prompt until the agent handled 'I have accounts in UAE, UK, and Canada' without breaking — and without creating compliance risk.",
      },
      {
        heading: "The Bug That Would Have Killed Production",
        body: "During integration testing, I found a critical field mismatch: Retell was returning data under the key `tax_countries`, but our Supabase schema expected `tax_residencies`. Post-call records were writing to the database with empty arrays — no error, no warning, just silent data loss. If this had reached production, every call would have shown as 'completed' in the dashboard while compliance records contained nothing. I caught it in QA, fixed the field mapping, and added a validation check before any record is written.",
      },
      {
        heading: "Compliance Officer UI for the Hard Cases",
        body: "The cases the agent escalates are genuinely complex — a customer with tax residency in 4 countries, a possible US person with no TIN, a customer who refused consent. I designed the Case Review interface so officers see everything in one place: call transcript summary, collected tax data, escalation reason, pre-filled FATCA/CRS classification recommendation, and the exact documents required (W-9, W-8BEN, CRS Self-Cert). Assign, resolve, and maintain audit trail — all tracked.",
      },
    ],
    outcomes: [
      "POC demonstrated end-to-end automated KYC refresh: outbound call → data capture → compliance routing",
      "Designed 12+ branching conversation covering every FATCA/CRS regulatory scenario",
      "Caught silent data loss bug pre-production — empty compliance records would have looked valid",
      "Dashboard shows 25 customers, 11 overdue, risk tiers, and an actionable refresh queue",
      "Compliance officers only see escalated cases — no wading through routine completions",
    ],
  },
  {
    id: "cs-voice-interview-agent",
    title: "Voice Agent Builder for Non-Technical Clients",
    description:
      "Our clients — sales leads, CS managers, bank operations teams — needed to configure their own AI voice agents. None of them could write a system prompt. So I built a tool that lets them talk to an AI trainer instead, and turns that conversation into a working agent they can test immediately.",
    category: "Voice AI · Internal Tooling",
    tags: ["ElevenLabs", "OpenAI GPT-4", "Next.js", "Voice UX", "Prompt Engineering"],
    image: "/screenshots/retell-voice.png",
    overview:
      "At OneInbox, onboarding a new enterprise client meant a PM or engineer had to write the voice agent's system prompt for them. Clients knew exactly what they wanted — 'be friendly but not pushy', 'always offer to escalate to a human', 'never promise a refund' — but couldn't translate that into a prompt. This tool removes the middleman: clients conduct a voice interview with an AI trainer, GPT-4 synthesizes the prompt from the transcript, and they test the resulting agent immediately via another voice call.",
    role: "Product Manager · Builder",
    duration: "2025",
    tools: ["ElevenLabs WebRTC", "OpenAI GPT-4", "Next.js 14", "TypeScript", "Supabase"],
    sections: [
      {
        heading: "The Real Problem: Prompt Writing Is a Specialist Skill",
        body: "Building an AI voice agent requires a system prompt — instructions that define how the agent behaves, what it can and can't say, how it handles objections, when it escalates. Writing a good prompt is genuinely hard. It requires knowing how LLMs respond to different phrasing, how to handle edge cases, how to set boundaries without breaking conversation flow. Our enterprise clients — bank ops teams, sales managers, CS leads — had none of this. Every new client deployment required us to write their prompt for them. It didn't scale.",
      },
      {
        heading: "Phase 1: Clients Talk, Not Type",
        body: "The tool starts a live voice call between the client and a structured 'requirements trainer' agent built on ElevenLabs. The trainer asks the right questions: What does your agent do? Who does it talk to? What tone? What should it never say? How should it handle objections? What's the escalation trigger? The client answers naturally — just talking, not filling a form. The entire conversation is transcribed in real time.",
      },
      {
        heading: "Phase 2: GPT-4 Writes the Prompt",
        body: "When the client finishes, the transcript is sent to GPT-4 with a structured extraction schema. GPT-4 synthesizes a complete system prompt: persona, goals, tone, constraints, objection handling, escalation logic, and fallback behavior — all organized in sections the agent can parse cleanly. One click on 'Update Agent & Test' pushes the generated prompt to ElevenLabs and starts a live test call. If something sounds wrong, the client describes the change, regenerates, and tests again. The whole iteration loop takes minutes.",
      },
      {
        heading: "Why This Was the Right PM Call",
        body: "The alternative was to build a form-based configurator — dropdowns, text fields, tone sliders. We prototyped it. It still required clients to think in 'prompt terms' rather than 'business terms.' Voice interview solved the translation problem completely: clients say what they mean, the AI writes what the system needs. It also meant onboarding a new client went from a multi-day back-and-forth with our team to a self-serve session under 30 minutes.",
      },
    ],
    outcomes: [
      "Eliminated PM/engineer dependency for every new client agent — clients configure their own",
      "Voice-first input: clients describe agent behavior in plain language, no prompt knowledge required",
      "GPT-4 synthesizes transcript into structured system prompt with persona, constraints, and escalation logic",
      "Live test call immediately after generation — clients hear their agent before they commit",
      "Onboarding time for new agent configuration reduced from days to under 30 minutes",
    ],
  },
  {
    id: "cs-manus-ai-processor",
    title: "AI Lead Data Cleaner — Phone Numbers to E.164 for Campaigns",
    description:
      "Sales teams upload messy lead lists to run outbound call campaigns. Numbers come in every format: missing country codes, hyphens, spaces, local formats. An AI voice agent can't dial any of them. I built a tool that cleans the entire file automatically — detecting country codes, standardising to E.164, and flagging what's unfixable.",
    category: "AI Tooling · Sales Infrastructure",
    tags: ["Manus AI", "Supabase", "E.164", "Lead Data", "Campaign Ops"],
    image: "/screenshots/manus-ai.png",
    overview:
      "When a sales or ops team uploads a leads CSV to run an outbound campaign, the phone numbers are almost never in the right format. You get '971-50-658676', '91 9901108427', '+44 (0) 1872 40', or just '9901108427' with no country code at all. An AI voice platform like Retell or ElevenLabs requires E.164 format (+[country code][number]) to dial. Bad numbers mean failed calls, wasted campaign budget, and no way to know which records are the problem. I built a tool that processes the entire lead file, standardises every number it can, and surfaces the ones it can't — before a single call goes out.",
    role: "Product Manager · Builder",
    duration: "2025",
    tools: ["Manus AI API", "Supabase", "Node.js", "libphonenumber-js", "REST APIs"],
    sections: [
      {
        heading: "The Problem: Dirty Numbers Kill Campaigns",
        body: "Outbound voice campaigns fail silently when phone numbers are wrong. A number like '9901108427' looks valid but without knowing the country, the dialer can't format it. '971-50-658676' has the UAE country code embedded but with hyphens that break most parsers. '0' or a single digit looks like a number but is actually missing data. Our clients were uploading these files, kicking off campaigns, and watching calls fail with no clear error — just zero connect rates.",
      },
      {
        heading: "What the Tool Does",
        body: "Clients upload their leads CSV. The tool detects the phone number column automatically — checking for columns named Mobile, Phone, Tel, Contact, or any column with phone-like values. For each row, it decides: does this number already have a country code? Strip all formatting (hyphens, spaces, parentheses, slashes), check if the result starts with a recognised country code (1-digit through 3-digit codes for 200+ countries), and if yes, add the '+' prefix and mark as processed. If the number exists but has no detectable country code, flag it as needing country code. If the field is empty or just '0', mark it as no phone. Every other column in the row is preserved exactly.",
      },
      {
        heading: "Why a 200-Row Chunking Architecture",
        body: "Manus AI's task API has a hard execution time limit — any file with more than ~200 rows would either timeout silently or return a truncated response with no error. I designed around this instead of working against it: every uploaded file is split into 200-row chunks, each chunk becomes a parallel Manus AI task, and task IDs are written to Supabase before any results come back. A polling loop checks every 2 seconds, extracts the structured JSON from each completed chunk, and assembles the final result. If the server restarts mid-run, the poll resumes from Supabase state — no data is lost and no chunk is reprocessed unnecessarily.",
      },
      {
        heading: "What Clients See",
        body: "The output is the same CSV, cleaned — with the phone column now in E.164 format for every number that could be standardised. Rows with missing or invalid numbers are separated out so the client knows exactly what needs manual attention before the campaign runs. No guessing, no silent failures, no wasted calls.",
      },
    ],
    outcomes: [
      "Clients can upload any leads file and get E.164-formatted numbers before campaigns run",
      "Auto-detects phone column and country codes across 200+ countries — no manual mapping",
      "Chunking architecture handles files of any size — no timeouts, no silent truncation",
      "Three clean output buckets: processed (E.164 ready), needs country code, no phone",
      "Eliminates silent campaign failures caused by malformatted or missing phone data",
    ],
  },
  {
    id: "cs-predict-growth-mvp",
    title: "Predict Growth — 0→1 to 300+ Users",
    description:
      "Led product strategy, cross-functional execution, and go-to-market for an AI-powered growth analytics platform — from blank canvas to 300+ users at launch and growing.",
    category: "0→1 Product · Growth Analytics",
    tags: ["0→1 Build", "GTM", "AI Integration", "Growth Strategy"],
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
      "Predict Growth is an AI-powered analytics platform for founders and growth teams. I joined as Associate PM and owned the product end-to-end: market research, competitive positioning, MVP spec, cross-functional execution with a 6-person team, AI model integration, and go-to-market. We launched to 300+ users and validated product-market fit.",
    role: "Associate Product Manager",
    duration: "Jun 2023 – Oct 2025",
    tools: ["Figma", "Jira", "Mixpanel", "Google Analytics", "Notion", "Python/AI Models"],
    sections: [],
    outcomes: [
      "300+ users at MVP launch — validated product-market fit",
      "Led cross-functional team of 6 through full 0→1 product lifecycle",
      "Cut reporting dashboard from v1 to protect timeline — right call in retrospect",
      "AI integration went from 'interesting output' to 'actionable recommendations' over 8 weeks",
      "Owned GTM end-to-end: positioning, pricing, sequencing, and community launch",
    ],
  },
];

// Case Studies — detailed entries (2-column grid, larger cards)
export const caseStudies: Project[] = [
  {
    id: "granola-product-teardown",
    title: "Granola Teardown — Why the No-Bot App Won",
    description:
      "A sharp product teardown of Granola's $50M AI notes app — unpacking the single trust architecture decision that beat every competitor, and 4 PM-prioritized improvements to close its gaps.",
    category: "Product Thinking · Analysis",
    tags: ["Product Teardown", "AI Tools", "Competitive Analysis", "Strategy"],
    image: "/screenshots/granola-teardown.png",
    overview:
      "Granola competes against Fireflies, Otter, and Fathom — tools with more features, larger teams, and better brand recognition. It's winning. I did a full product teardown to understand exactly why: the architecture decision, the UX philosophy, the moat, and where it still falls short.",
    role: "Independent Product Research",
    duration: "2025",
    tools: ["Product Analysis", "Competitive Research", "User Behavior Synthesis"],
    sections: [
      {
        heading: "The Winning Insight: No Bot",
        body: "Every competitor sends a visible bot into your meeting. Granola records locally — invisible to participants. This isn't a technical preference, it's a trust architecture. A bot changes social dynamics: people talk differently when they know they're being recorded by a third party. Granola bet that removing that friction is worth the engineering complexity, and the market validated it.",
      },
      {
        heading: "Hybrid Notes = Personal Signal",
        body: "Most AI note tools remove you from the process. Granola keeps you in it — you type rough notes during the meeting, which act as a priority signal. The AI output reflects what mattered to YOU, not just what was said. This makes notes feel authored, not extracted. That's a fundamentally different product philosophy.",
      },
      {
        heading: "Where It Falls Short",
        body: "No video/screen capture — decisions made on slides are invisible. No speaker identification beyond basic diarization, making multi-person meeting notes hard to parse. Weak integrations — notes stay in Granola instead of flowing to Notion, Slack, or CRM. No Android or web version creates adoption friction for mixed-device teams.",
      },
      {
        heading: "4 PM-Prioritized Improvements",
        body: "1) Timestamped screenshot capture — ties slide content to transcript without rebuilding architecture. 2) You/Others speaker split — basic tagging that dramatically improves readability. 3) Section-level sharing — PMs frequently need to share specific action items, not full notes. 4) Notion/Slack auto-push on meeting end — low engineering effort, high retention impact because it closes the 'where did I put that?' loop.",
      },
    ],
    outcomes: [
      "Identified the trust architecture insight (no-bot) that explains Granola's market position",
      "Mapped 4 prioritized improvements with engineering effort vs. retention impact framing",
      "Analyzed competitive differentiation across Fireflies, Otter, Fathom, and Granola",
      "Demonstrated PM thinking: insight → gap → prioritized roadmap",
    ],
  },
  {
    id: "cs-snacc-vs-zepto",
    title: "Snacc vs Zepto Cafe — Why Infrastructure Beats Product",
    description:
      "Swiggy built Snacc in 16 days. Zepto Cafe had been building since 2022. Same problem, same user. One shut down in 13 months. A breakdown of why the better product lost.",
    category: "Product Teardown · Quick Commerce",
    tags: ["Quick Commerce", "Unit Economics", "Competitive Analysis", "GTM"],
    image: "/screenshots/granola-teardown.png",
    overview:
      "Snacc had real PMF signals — users came back, habits formed, the product felt purpose-built for the snacking occasion. Zepto Cafe works but it feels bolted on. Snacc shut down in February 2026. This teardown unpacks the gap between a product that works for users and a business that can survive.",
    role: "Independent Product Research",
    duration: "2026",
    tools: ["Competitive Analysis", "Unit Economics", "Product Strategy"],
    sections: [
      {
        heading: "The Market",
        body: "Quick commerce cracked grocery delivery under 10 minutes. The next frontier was food — not restaurant food, but the gap in between. The 3pm chai, the poha before a standup, the snack too small to order on Swiggy but too lazy to make at home. Zepto spotted this in 2022. Snacc entered in 2025. Same user, same problem, completely different foundations.",
      },
      {
        heading: "Two Very Different Bets",
        body: "Zepto Cafe launched in April 2022 with zero competition. It built inside existing dark stores — same riders, same last mile, same fixed costs. Adding a cafe meant adding a kitchen to a space already paid for. Snacc launched in January 2025 into a market where Zepto Cafe and Blinkit Bistro already existed. It built standalone micro-kitchens, a separate app, a separate rider fleet — and shipped it in 16 days. One was a conviction. The other was a reaction.",
      },
      {
        heading: "Where It Broke: Unit Economics",
        body: "A ₹100 poha order looks like a real transaction. Factor in dedicated kitchen rent, separate rider fleet, standalone app acquisition costs, and packaging — and there's nothing left. Zepto Cafe didn't have this problem. Grocery ops absorbed the fixed costs. Every cafe order improved dark store utilization without adding proportional cost. Snacc had no existing operation to lean on. Every order carried its full cost from day one. That's not something you iterate your way out of.",
      },
      {
        heading: "The Irony: Snacc Was the Better Product",
        body: "Snacc felt purpose-built for the snacking occasion — curated menu, affordable pricing, UX that didn't feel like a grocery app with a food tab bolted on. Zepto Cafe works but it's clearly infrastructure-first, product-second. Snacc had genuine PMF signals. Users came back. Habits formed. Swiggy's own internal note said 'product-market fit was emerging.' But in quick commerce, a better product with a broken cost structure loses to a decent product with the right infrastructure every single time.",
      },
      {
        heading: "What I'd Have Done as PM",
        body: "Don't build Snacc as a standalone app. Launch it as a food category inside Swiggy Instamart — use existing dark stores as the kitchen backbone, Instamart riders for last mile, keep the Snacc brand and curated menu, change the architecture entirely. Swiggy Bolt was already delivering across hundreds of cities. Snacc should have been built on top of that moat, not beside it. The 16-day build wasn't the mistake. Building in isolation from Swiggy's own infrastructure was.",
      },
    ],
    outcomes: [
      "Identified why the better product lost — infrastructure advantage beats UX advantage in quick commerce",
      "Mapped the unit economics gap between Zepto Cafe (shared fixed costs) and Snacc (full marginal cost per order)",
      "Proposed an alternate architecture: Snacc as a category inside Instamart, not a standalone app",
      "Demonstrated PM thinking: understand the cost structure before you design the product",
    ],
  },
];
