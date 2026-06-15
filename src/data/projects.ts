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
      "Drove end-to-end product delivery for a Techstars '25-backed voice AI platform — from onboarding redesign to live enterprise deployments in banking, insurance, and sales.",
    category: "AI Product · Voice",
    tags: ["Voice AI", "Onboarding", "Enterprise", "0→1"],
    image: "/screenshots/oneinbox-voice.png",
    overview:
      "OneInbox AI is a Techstars '25-backed voice AI platform enabling businesses to deploy human-like phone agents at scale. As the Associate Product Manager, I owned the full product lifecycle — from discovery to deployment — working directly with enterprise clients, engineering, and operations.",
    role: "Associate Product Manager",
    duration: "Oct 2025 – Present",
    tools: ["Retell AI", "Twilio", "Notion", "Figma", "Postman", "SQL"],
    sections: [
      {
        heading: "The Challenge",
        body: "Enterprise clients needed to go from sign-up to live voice AI deployment in days, not weeks. The existing onboarding was fragmented — customers got stuck configuring agents, and our team spent hours handholding each deployment. Meanwhile, conversation quality issues were causing agents to qualify leads incorrectly or ask redundant questions.",
      },
      {
        heading: "Onboarding Redesign",
        body: "I redesigned the end-to-end onboarding flow, cutting the friction between account creation and first successful call. I built a voice-based system prompt generation interface — letting users configure their AI agent through a natural conversation rather than filling in forms. This removed a major technical barrier for non-technical users.",
      },
      {
        heading: "Banking FATCA/CRS Use Case",
        body: "I led the build of a compliance voice flow for a financial institution — translating a complex regulatory customer journey (tax residency collection, indicia detection, escalation logic) into a scalable, human-like voice interaction. This required working closely with legal, ops, and engineering to get every edge case right.",
      },
      {
        heading: "Quality & Reliability",
        body: "I developed a product testing framework to evaluate AI voice agents across real-world scenarios before client go-live. I also identified and fixed a phone number normalization issue (non-E.164 formats causing call failures) that was silently degrading connection success rates.",
      },
    ],
    outcomes: [
      "Delivered enterprise voice AI go-lives across banking, insurance, and sales",
      "Designed onboarding flow that cut setup friction and improved time-to-value",
      "Built voice-based agent configuration interface — no forms, just conversation",
      "Developed product testing framework catching errors before client deployment",
      "Resolved phone number normalization issue, improving call connection rates",
    ],
  },
  {
    id: "raj-ai-studio",
    title: "Raj AI Studio — B2B Outreach Platform",
    description:
      "Designed and shipped a conversational AI platform where sales teams create and deploy voice agents through natural chat, with integrated campaign and lead management.",
    category: "AI Product · 0→1",
    tags: ["Voice AI", "B2B", "Campaigns", "Retell AI"],
    image: "/screenshots/raj-ai-studio.png",
    overview:
      "Raj is a conversational B2B outreach platform where users build AI voice agents simply by describing what they need in chat. It handles the entire workflow — agent creation, campaign setup, lead ingestion, and outbound calling — without requiring any technical setup from the user.",
    role: "Product Manager · Builder",
    duration: "2025",
    tools: ["Retell AI", "Supabase", "React", "TypeScript", "OpenAI"],
    sections: [
      {
        heading: "The Problem",
        body: "Sales teams wanted to run AI-powered outbound calling campaigns but the setup was complex: configure an LLM prompt, create an agent, connect a phone number, upload leads. Most non-technical users gave up before making a single call. The technical barrier was killing adoption.",
      },
      {
        heading: "Chat-First Agent Creation",
        body: "I designed a chat-first interface where users describe their agent in plain English. Raj interprets the intent, creates the Retell LLM, spins up the agent with optimal voice and responsiveness settings, and streams progress back to the user in real time. No configuration screens required.",
      },
      {
        heading: "Campaign & Lead Management",
        body: "The platform includes full campaign management (create, launch, pause, track), lead upload and status tracking, call history with transcripts, and a live voice call interface for testing agents before deploying. Everything syncs automatically between Supabase and Retell AI.",
      },
      {
        heading: "Reliability Design",
        body: "I identified a critical gap: Retell agent creation could fail silently, leaving users with an agent that appeared created but couldn't make calls. I designed a retry mechanism with a 'Reconnect to Retell' self-service flow so users could recover without contacting support.",
      },
    ],
    outcomes: [
      "Built end-to-end: chat → agent creation → campaign → outbound calls",
      "Zero-configuration agent setup via conversational interface",
      "Full campaign + lead management with call transcripts",
      "Designed retry and recovery flow for API failures — reduced support load",
    ],
  },
  {
    id: "granola-product-teardown",
    title: "Granola Product Teardown — The Invisible AI",
    description:
      "A deep product analysis of Granola, the $50M AI notes app — examining the core architectural insight that made it win, its gaps, and 4 PM-prioritized improvements.",
    category: "Product Thinking",
    tags: ["Product Analysis", "AI Tools", "Competitive Research", "Strategy"],
    image: "/screenshots/granola-teardown.png",
    overview:
      "Granola is an AI meeting notes app competing against Fireflies, Otter, and Fathom — yet it's winning with a fraction of their features. I did a full product teardown to understand why: the core insight, the UX decisions, the differentiation strategy, and where it still falls short.",
    role: "Independent Product Research",
    duration: "2025",
    tools: ["Product Thinking", "Competitive Analysis", "User Research Synthesis"],
    sections: [
      {
        heading: "The Core Insight: No Bot",
        body: "Every competitor sends a bot into your meeting. Granola doesn't. It captures audio locally — invisible to all other participants. This isn't a technical preference. It's a trust architecture decision. A bot changes the social dynamic of every meeting it joins. Granola bets that removing the bot is worth the additional engineering complexity, and that bet is paying off.",
      },
      {
        heading: "The Hybrid Notes Model",
        body: "Most AI note apps remove you from the process entirely. Granola keeps you in it. Users type rough notes during the meeting — these act as a signal layer telling Granola what mattered to you specifically, not just what was said. The output feels personal rather than generic. This is a genuinely different product philosophy.",
      },
      {
        heading: "Where It Falls Short",
        body: "No video or screen capture — decisions made on slides are invisible to the transcript. No speaker identification beyond basic diarization. Limited integrations — notes stay in Granola rather than auto-pushing to Notion, Slack, or CRM. No Android or web version creates adoption friction for mixed-device teams.",
      },
      {
        heading: "What I'd Prioritize as PM",
        body: "1) A 'capture screen' button — screenshot tied to transcript timestamp, closes the slides gap without rebuilding architecture. 2) Basic 'you/others' speaker split — improves group call readability significantly. 3) One-click note sharing — sending specific sections to someone who wasn't in the meeting is a frequent PM workflow. 4) Notion/Slack push on meeting end — low build effort, high retention impact.",
      },
    ],
    outcomes: [
      "Identified the trust architecture insight that differentiates Granola from all competitors",
      "Mapped 4 product gaps with prioritized improvement recommendations",
      "Analyzed tradeoff: social cost of bots vs. complexity of local audio capture",
      "Synthesized competitive positioning across Fireflies, Otter, Fathom, and Granola",
    ],
  },
];

// Case Studies — detailed entries (2-column grid, larger cards)
export const caseStudies: Project[] = [
  {
    id: "cs-fatca-crs-voice-ai",
    title: "Banking FATCA/CRS Compliance via Voice AI",
    description:
      "Translated a complex regulatory tax-compliance workflow into a conversational voice AI agent — deployed for a financial institution's KYC refresh program.",
    category: "Fintech · Voice AI",
    tags: ["Voice AI", "Fintech", "Compliance", "Conversation Design"],
    image: "/screenshots/fatca-dashboard.png",
    overview:
      "A financial institution needed to collect FATCA and CRS tax residency information from thousands of customers as part of a KYC refresh. Manual calls were expensive, inconsistent, and slow. I led the product definition and build of a voice AI agent that could handle the full compliance conversation — including multi-jurisdiction edge cases, US indicia detection, and automatic escalation to human review.",
    role: "Associate Product Manager",
    duration: "2025",
    tools: ["Retell AI", "Supabase", "TypeScript", "Figma", "Postman"],
    sections: [
      {
        heading: "The Regulatory Problem",
        body: "FATCA/CRS compliance requires banks to ask customers about their tax residency, identify potential US persons, and escalate complex cases. The conversation is nuanced — customers often don't understand what 'tax residency' means, and edge cases are frequent. A poorly designed agent risks collecting wrong data, triggering compliance violations, or driving customers off the call.",
      },
      {
        heading: "Conversation Design",
        body: "I designed the full conversation flow from scratch: greeting, tax residency collection, US indicia probing, material change detection, and escalation triggers. I mapped 12+ branching paths — including 'no answer', 'customer refuses', 'multi-jurisdiction', and 'US person detected' — and wrote prompts that kept the conversation natural despite regulatory constraints.",
      },
      {
        heading: "Data Architecture & Bug Fix",
        body: "I defined the data model for call outcomes: tax residencies, escalation reasons, material change types, US TIN collection, and FATCA/CRS classification flags. I identified and resolved a critical field mapping mismatch — Retell was sending `tax_countries` but our database expected `tax_residencies` — which caused empty tax residency records post-call and would have broken the compliance workflow.",
      },
      {
        heading: "Escalation & Human Handoff",
        body: "I designed the escalation logic covering 4 regulatory categories: cross-border CRS cases, US indicia detection, multi-jurisdiction complexity, and ambiguous account structures. I built the Case Review interface so compliance officers see all collected data alongside pre-filled FATCA/CRS classification recommendations and required document lists.",
      },
    ],
    outcomes: [
      "Designed end-to-end FATCA/CRS voice conversation with 12+ branching paths",
      "Fixed critical data mapping bug that would have broken compliance data collection",
      "Defined escalation logic covering 4 regulatory edge case categories",
      "Built Case Review interface for compliance officer handoff with pre-filled classifications",
    ],
  },
  {
    id: "cs-voice-interview-agent",
    title: "Voice Interview Agent Builder",
    description:
      "A two-phase platform: conduct a voice interview with an AI trainer to define agent requirements, auto-generate a system prompt, then immediately test the agent — all without writing a single line of configuration.",
    category: "Voice AI · Internal Tools",
    tags: ["Voice AI", "ElevenLabs", "Prompt Engineering", "Developer Tools"],
    image: "/screenshots/retell-voice.png",
    overview:
      "Teams building voice AI products need to rapidly prototype and test agent behavior. I designed and built a platform where users define requirements through a natural voice conversation, automatically generate a system prompt via OpenAI, and immediately test the resulting agent — all without touching any configuration files.",
    role: "Product Manager · Builder",
    duration: "2025",
    tools: ["ElevenLabs", "OpenAI", "Next.js", "TypeScript", "React"],
    sections: [
      {
        heading: "The Problem",
        body: "Defining voice agent behavior through written prompts is slow and disconnected from how domain experts actually think. The typical cycle — write prompt, deploy agent, call it, take notes, edit — takes hours per iteration. And the people who know best what the agent should sound like (sales leads, CS managers, domain experts) often can't write prompts at all.",
      },
      {
        heading: "Phase 1: Voice Requirements Interview",
        body: "Users start a voice call with a 'trainer agent' that asks structured questions about the agent's purpose, tone, handling of edge cases, and success criteria. The trainer captures everything as a live transcript. No writing required — domain experts just talk through what they need.",
      },
      {
        heading: "Phase 2: Auto-Generate & Test",
        body: "The transcript is sent to OpenAI, which generates a structured system prompt. Users click 'Prepare & Test Agent' — the prompt is applied to a test agent instantly, without any API configuration or deployment step. A voice call can start immediately to validate behavior.",
      },
      {
        heading: "Key Architecture Decision",
        body: "Rather than pushing the generated prompt to ElevenLabs (which would introduce API latency and version management overhead), I stored the prompt in local component state and injected it at call initialization. This made the test loop near-instant and eliminated an entire class of sync bugs. Simplicity over elegance.",
      },
    ],
    outcomes: [
      "Reduced agent iteration cycle from hours to minutes",
      "Voice-first requirements capture — accessible to non-technical domain experts",
      "Instant test loop via local prompt injection — no API round-trip required",
      "Two-agent architecture: Trainer (captures requirements) + Test (validates behavior)",
    ],
  },
  {
    id: "cs-manus-ai-processor",
    title: "Manus AI Parallel Data Processing Pipeline",
    description:
      "Designed a chunking architecture that splits large CSV files into parallel AI tasks, assembles results at scale, and persists everything in Supabase for fault tolerance — eliminating timeout failures entirely.",
    category: "AI Infrastructure",
    tags: ["Manus AI", "Supabase", "Data Engineering", "System Design"],
    image: "/screenshots/manus-ai.png",
    overview:
      "Large CSV files were timing out when processed by a single AI task. I designed and built a chunking architecture that splits any file into 200-row segments, fires parallel Manus AI tasks per chunk, polls for completion, and assembles a unified JSON result — with full persistence in Supabase for fault tolerance.",
    role: "Product Manager · Builder",
    duration: "2025",
    tools: ["Manus AI", "Supabase", "Node.js", "JavaScript", "REST APIs"],
    sections: [
      {
        heading: "The Scaling Failure",
        body: "A single Manus AI task would time out or produce truncated results on any CSV over 200 rows. This wasn't a bug to fix — it was a fundamental constraint of the API. The solution was architectural: never send a large file as a single task.",
      },
      {
        heading: "Chunking Architecture",
        body: "Every file is split into 200-row chunks on upload, regardless of size. Each chunk creates an independent Manus AI task. Task IDs are written to a `temp_file_chunks` table in Supabase immediately. A background polling process checks task status every 2 seconds, extracts structured JSON from responses, and updates the chunk record.",
      },
      {
        heading: "Result Assembly",
        body: "When all chunk tasks complete, the system combines results into a final unified JSON and writes it to a `permanent_results` table. Temp chunk records are deleted. The frontend queries permanent results — completely decoupled from the Manus task lifecycle. This separation means the UI is never blocked by in-progress processing.",
      },
      {
        heading: "Fault Tolerance",
        body: "Every processing step is persisted in Supabase before the next begins. If the server restarts mid-run, the poll loop resumes from exactly where it stopped. Failed chunks can be individually retried. System prompts explicitly enforce JSON-only output — no markdown, no explanatory text — making parsing deterministic.",
      },
    ],
    outcomes: [
      "Eliminated single-task timeouts — files of any size now process successfully",
      "Parallel execution: N chunks run concurrently, cutting processing time proportionally",
      "Full fault tolerance via Supabase persistence at every processing step",
      "Decoupled frontend reads from processing pipeline — no blocking UI states",
    ],
  },
  {
    id: "cs-predict-growth-mvp",
    title: "Predict Growth — 0→1 MVP to 300+ Users",
    description:
      "Led product strategy, go-to-market, and MVP build for an AI-powered growth analytics platform — attracting 300+ users at launch and validating product-market fit.",
    category: "0→1 Product · Growth",
    tags: ["0→1 Build", "GTM", "AI Integration", "Product Strategy"],
    image: "/screenshots/predict-growth.png",
    overview:
      "Predict Growth is an AI-powered analytics platform. As the Associate PM, I owned product strategy end-to-end — from market research and competitive analysis through MVP definition, cross-functional execution, and go-to-market planning. The launch attracted 300+ users and validated early product-market fit.",
    role: "Associate Product Manager",
    duration: "Jun 2023 – Oct 2025",
    tools: ["Figma", "Jira", "Google Analytics", "Mixpanel", "Notion", "AI/ML Models"],
    sections: [
      {
        heading: "Market Research & Positioning",
        body: "I conducted competitive analysis across the growth analytics market to identify positioning gaps — where tools were either too technical for business users or too shallow for data teams. We positioned Predict Growth at the intersection: powerful enough for growth leads, accessible enough for non-analysts.",
      },
      {
        heading: "MVP Definition",
        body: "I wrote product specs, user stories, and acceptance criteria for the MVP. I worked with engineering and design through multiple sprints, prioritizing ruthlessly — shipping the core prediction engine and reporting UI first, then layering secondary features based on user behavior data.",
      },
      {
        heading: "AI Integration",
        body: "I led the integration of AI models to automate growth analysis and surface recommendations that previously required dedicated analyst work. I defined the output format, stress-tested edge cases, and iterated on AI behavior based on early user feedback sessions.",
      },
      {
        heading: "Go-to-Market",
        body: "I defined the acquisition strategy, pricing model, and launch sequencing. I collaborated with the marketing team on positioning copy and channel strategy. The MVP launch attracted 300+ users in the initial window — enough real usage data to validate core assumptions and fund the next iteration.",
      },
    ],
    outcomes: [
      "300+ users at MVP launch — validated product-market fit",
      "Led cross-functional team of 6 through full product lifecycle",
      "Integrated AI models automating growth analysis recommendations",
      "Owned GTM strategy: positioning, pricing, acquisition, and launch sequencing",
    ],
  },
];
