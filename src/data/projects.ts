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
];

// Case Studies — detailed entries (2-column grid, larger cards)
export const caseStudies: Project[] = [
  {
    id: "cs-fatca-crs-voice-ai",
    title: "FATCA/CRS KYC Refresh via Voice AI",
    description:
      "Led the product definition and build of a voice AI compliance system for a bank — handling tax residency collection, US indicia detection, and escalation routing across 25 customers, 11 overdue cases, and 8 pending compliance reviews.",
    category: "Fintech · Compliance · Voice AI",
    tags: ["Voice AI", "Banking", "FATCA/CRS", "KYC", "Retell AI"],
    image: "/screenshots/fatca-dashboard.png",
    images: [
      "/screenshots/fatca-dashboard.png",
      "/screenshots/fatca-customers.png",
      "/screenshots/fatca-kyc-refresh.png",
      "/screenshots/fatca-case-review.png",
    ],
    overview:
      "A financial institution needed to run FATCA/CRS KYC refresh across its customer base — collecting tax residency data, detecting US persons, and routing complex cases to compliance officers. I owned the full product: conversation design, data architecture, compliance officer UI, and the Retell AI integration. The system went from spec to live deployment.",
    role: "Associate Product Manager",
    duration: "2025",
    tools: ["Retell AI", "Supabase", "TypeScript", "React", "Figma", "Postman"],
    sections: [
      {
        heading: "The Compliance Problem",
        body: "FATCA/CRS refresh means calling thousands of customers to ask about tax residency across multiple jurisdictions, detecting US persons, collecting TINs where required, and escalating edge cases to compliance officers. Manual calls are expensive, inconsistent, and don't scale. A voice AI agent can handle the routine — but getting the conversation design wrong creates regulatory risk, not just bad UX.",
      },
      {
        heading: "Conversation Design (12+ Branches)",
        body: "I mapped every conversation path: standard single-jurisdiction, multi-jurisdiction CRS, US indicia detection, TIN collection, customer refusal, no-answer retry, and language escalation. Each branch has specific regulatory language requirements. I wrote the full system prompt, tested it against real edge cases, and iterated until the agent handled 'I have accounts in UAE, UK, and Canada' without breaking.",
      },
      {
        heading: "Data Architecture & The Bug That Would Have Broken Compliance",
        body: "I defined the full data model: tax residencies, FATCA/CRS flags, escalation reasons, TIN records, US indicia indicators, material change types. During testing, I found a critical field mismatch — Retell was sending `tax_countries` but our Supabase schema expected `tax_residencies`. Post-call records were storing empty arrays. If this hit production, we'd have had compliant-looking records with no actual data inside them.",
      },
      {
        heading: "Compliance Officer Dashboard",
        body: "For cases the agent couldn't resolve — cross-border CRS, confirmed US persons, refused customers — I built the Case Review interface. Officers see the call outcome, collected tax data, escalation reason, pre-filled FATCA/CRS classification recommendations, and the required document checklist (W-9, W-8BEN, CRS Self-Cert). Assignment, resolution, and audit trail are all tracked.",
      },
    ],
    outcomes: [
      "Designed 12+ branching compliance conversation covering all FATCA/CRS edge cases",
      "Caught critical field mapping bug that would have produced empty compliance records in production",
      "Built full KYC dashboard: 25 customers, 11 overdue, KYC refresh funnel, actionable queue",
      "Designed Case Review UI with pre-filled classifications and required document checklists",
      "End-to-end: conversation design → data model → compliance UI → Retell integration",
    ],
  },
  {
    id: "cs-voice-interview-agent",
    title: "Voice Interview Agent Builder",
    description:
      "Designed and built a two-phase platform: conduct a voice interview with an AI trainer to capture requirements, auto-generate a system prompt via GPT-4, then test the resulting agent immediately — no configuration files, no API wrangling.",
    category: "Voice AI · Developer Tools",
    tags: ["ElevenLabs", "OpenAI GPT-4", "Next.js", "Voice UX", "Prompt Engineering"],
    image: "/screenshots/retell-voice.png",
    overview:
      "Building AI voice agents requires writing system prompts — but the people who know best what an agent should do (sales managers, CS leads, domain experts) can't write prompts. I designed and built a platform that flips this: users conduct a voice interview with a training agent, GPT-4 synthesizes the prompt from the transcript, and they immediately test the result. No writing required.",
    role: "Product Manager · Builder",
    duration: "2025",
    tools: ["ElevenLabs WebRTC", "OpenAI GPT-4", "Next.js 14", "TypeScript", "Supabase"],
    sections: [
      {
        heading: "The Problem with Prompt Writing",
        body: "Every voice AI platform makes you write a system prompt before you can hear what your agent sounds like. That's backwards. The prompt is an implementation detail — what users know is the business context. A CS manager knows 'the agent should be friendly but not pushy, always offer to escalate to a human, and never promise a refund.' Getting that into a prompt requires a PM or engineer as a middleman.",
      },
      {
        heading: "Phase 1: Voice Requirements Interview",
        body: "Users start a voice call with a structured 'trainer agent' powered by ElevenLabs. The trainer asks about purpose, tone, edge cases, objection handling, and success criteria. Users just talk — explaining what they need like they'd explain it to a new colleague. The full conversation is captured as a live transcript.",
      },
      {
        heading: "Phase 2: Instant Prompt Generation + Test",
        body: "The transcript is sent to GPT-4 with a structured extraction prompt. GPT-4 returns a complete ToggleRoot system prompt — organized by behavior sections, with explicit handling for each scenario the user described. One click on 'Prepare & Test Agent' injects the prompt into a test agent and starts a voice call. Iteration cycle: describe a change, regenerate, call, repeat.",
      },
      {
        heading: "Key Architecture Decision: Local Prompt Injection",
        body: "Rather than pushing the generated prompt to ElevenLabs (which requires an API call, version management, and sync overhead), I stored it in React component state and injected it at call initialization. The test loop became near-instant. It also meant prompt changes never persisted accidentally — you always test explicitly. Simplicity beat elegance here.",
      },
    ],
    outcomes: [
      "Reduced agent iteration cycle from hours of prompt writing to minutes of voice conversation",
      "Voice-first requirements capture — domain experts configure agents without writing",
      "Instant test loop via local prompt injection — no API round-trip required",
      "Two-agent architecture: Trainer (requirements) → GPT-4 synthesis → Test agent (validation)",
    ],
  },
  {
    id: "cs-manus-ai-processor",
    title: "Manus AI Parallel Processing Pipeline",
    description:
      "Designed a chunking architecture that eliminated CSV processing timeouts — splitting files into 200-row parallel Manus AI tasks, assembling results in Supabase, and decoupling the UI completely from the processing pipeline.",
    category: "AI Infrastructure · Systems Design",
    tags: ["Manus AI", "Supabase", "Parallel Processing", "System Architecture"],
    image: "/screenshots/manus-ai.png",
    overview:
      "A single Manus AI task would timeout or truncate on CSVs over 200 rows — a hard API constraint. I designed a chunking architecture that works around this completely: split any file into parallel tasks, persist every step to Supabase for fault tolerance, assemble results when all chunks complete, and serve the UI from the final result table. Files of any size now process reliably.",
    role: "Product Manager · Builder",
    duration: "2025",
    tools: ["Manus AI API", "Supabase", "Node.js", "JavaScript", "REST APIs"],
    sections: [
      {
        heading: "The Constraint",
        body: "Manus AI's task execution has a time and output limit. Any CSV with more than ~200 rows would either timeout mid-processing or return a truncated JSON response — with no error, just incomplete data. The correct response wasn't to file a bug report. It was to design around the constraint.",
      },
      {
        heading: "Chunk, Parallelize, Persist",
        body: "Every uploaded CSV is split into 200-row chunks. Each chunk becomes an independent Manus AI task fired concurrently. Task IDs are written to `temp_file_chunks` in Supabase immediately — before any response comes back. A polling loop checks every 2 seconds, extracts structured JSON from each completed task, and updates the record. The system prompt explicitly enforces JSON-only output to make parsing deterministic.",
      },
      {
        heading: "Fault-Tolerant Assembly",
        body: "When all chunks complete, results are merged into a single JSON and written to `permanent_results`. Temp records are deleted. The frontend reads exclusively from permanent results — it's never aware of the processing pipeline's state. If the server restarts mid-run, the poll loop resumes from exactly where it left off. Failed chunks can be individually retried without reprocessing the whole file.",
      },
      {
        heading: "Why This Matters as a PM Decision",
        body: "The easy path was to cap file size and tell users to split their own CSVs. I chose to absorb the complexity into the system instead of pushing it to users. That's a product decision, not just a technical one — and it's the kind of call that determines whether a tool feels professional or like a prototype.",
      },
    ],
    outcomes: [
      "Eliminated timeout failures — files of any size now process to completion",
      "Parallel execution reduces wall-clock time proportional to chunk count",
      "Full fault tolerance: server restarts resume mid-run from Supabase state",
      "UI never blocked — reads from final result table, decoupled from processing",
      "Chose system complexity over user-facing limitations — deliberate product decision",
    ],
  },
  {
    id: "cs-predict-growth-mvp",
    title: "Predict Growth — 0→1 to 300+ Users",
    description:
      "Led product strategy, cross-functional execution, and go-to-market for an AI-powered growth analytics platform — from blank canvas to 300+ users at launch and growing.",
    category: "0→1 Product · Growth Analytics",
    tags: ["0→1 Build", "GTM", "AI Integration", "Growth Strategy"],
    image: "/screenshots/predict-growth.png",
    overview:
      "Predict Growth is an AI-powered analytics platform for founders and growth teams. I joined as Associate PM and owned the product end-to-end: market research, competitive positioning, MVP spec, cross-functional execution with a 6-person team, AI model integration, and go-to-market. We launched to 300+ users and validated product-market fit.",
    role: "Associate Product Manager",
    duration: "Jun 2023 – Oct 2025",
    tools: ["Figma", "Jira", "Mixpanel", "Google Analytics", "Notion", "Python/AI Models"],
    sections: [
      {
        heading: "Identifying the Gap",
        body: "The growth analytics market split into two camps: tools too technical for business users (require SQL, data pipeline knowledge) and tools too shallow for growth leads (vanity metrics, no predictive insight). I positioned Predict Growth between them — powerful enough to surface real signals, accessible enough for a non-analyst founder to act on in 10 minutes.",
      },
      {
        heading: "MVP Scoping Under Pressure",
        body: "I wrote specs, user stories, and acceptance criteria for the MVP while managing competing stakeholder priorities. The hardest call was cutting the reporting dashboard from v1 to ship the core prediction engine first — it was the differentiator, and everything else was table stakes we could add later. That call protected the launch timeline.",
      },
      {
        heading: "AI Integration",
        body: "I led the integration of AI models to automate growth signal detection and surface recommendations that previously required a dedicated analyst. I defined the output schema, wrote the edge case test matrix, and iterated the model behavior based on 8 weeks of early user feedback sessions. The AI output went from 'interesting' to 'actionable' through that iteration.",
      },
      {
        heading: "Go-to-Market",
        body: "I owned positioning, pricing, and launch sequencing. Ran outreach across communities (IndieHackers, Product Hunt, founder Slack groups), coordinated the marketing team on messaging, and staged the rollout to control feedback volume. 300+ users in the initial launch window gave us enough behavioral data to validate our core assumptions and prioritize v2.",
      },
    ],
    outcomes: [
      "300+ users at MVP launch — validated product-market fit",
      "Led cross-functional team of 6 through full 0→1 product lifecycle",
      "Cut reporting dashboard from v1 to protect timeline — right call in retrospect",
      "AI integration went from 'interesting output' to 'actionable recommendations' over 8 weeks",
      "Owned GTM end-to-end: positioning, pricing, sequencing, and community launch",
    ],
  },
];
