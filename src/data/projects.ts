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
    id: "product-discovery-oneinbox",
    title: "Product Discovery at OneInbox AI",
    description:
      "Led user research and discovery sprints to identify key pain points in email management workflows for an AI-powered inbox tool.",
    category: "AI Product",
    tags: ["User Research", "Discovery", "AI"],
    image: "/placeholder.svg",
    overview:
      "OneInbox.ai is an AI-powered email management tool backed by Techstars '25. As the Associate Product Manager, I led the product discovery process — conducting user interviews, mapping pain points, and translating insights into a prioritized product roadmap.",
    role: "Associate Product Manager",
    duration: "Ongoing",
    tools: ["Notion", "Miro", "Figma", "SQL", "Google Analytics"],
    sections: [
      {
        heading: "The Problem",
        body: "Users were overwhelmed by email overload, spending hours each day triaging inboxes. Existing tools lacked intelligence — they filtered but didn't prioritize.",
      },
      {
        heading: "Research & Discovery",
        body: "I conducted 20+ user interviews with professionals across sales, recruiting, and customer support. Using affinity mapping on Miro, I synthesized qualitative data into clear themes: lack of prioritization, context-switching fatigue, and missed follow-ups.",
      },
      {
        heading: "Solution & Execution",
        body: "We designed an AI-driven priority inbox that automatically categorized emails by urgency and context. I wrote detailed user stories, defined acceptance criteria, and worked with engineering on sprint planning. We shipped an MVP in 4 weeks.",
      },
    ],
    outcomes: [
      "Conducted 20+ user interviews across 3 user segments",
      "Built and prioritized a product roadmap using Opportunity Solution Trees",
      "Shipped MVP in 4 weeks with cross-functional team of 5",
    ],
  },
  {
    id: "user-onboarding-flows",
    title: "Redesigning User Onboarding Flows",
    description:
      "Designed and iterated on onboarding experiences that improved activation rates by focusing on user empathy and experimentation.",
    category: "Onboarding",
    tags: ["UX", "Experimentation", "Onboarding"],
    image: "/placeholder.svg",
  },
  {
    id: "ambiguity-to-clarity",
    title: "From Ambiguity to Clarity",
    description:
      "Navigating ambiguous problem spaces and arriving at clear, actionable product strategies using structured frameworks.",
    category: "Product Thinking",
    tags: ["Strategy", "Frameworks", "Collaboration"],
    image: "/placeholder.svg",
  },
];

// Case Studies — detailed entries (2-column grid, larger cards)
export const caseStudies: Project[] = [
  {
    id: "cs-onboarding-activation",
    title: "Improving Activation Through Onboarding Redesign",
    description:
      "Deep-dove into onboarding drop-offs, ran usability tests, and A/B tested a progressive disclosure flow that improved activation completion.",
    category: "Onboarding & Growth",
    tags: ["User Research", "Experimentation", "Activation"],
    image: "/placeholder.svg",
    overview:
      "New users were dropping off during onboarding before experiencing the product's core value. I led a cross-functional effort to redesign the onboarding flow using data analysis, user testing, and rapid experimentation.",
    role: "Associate Product Manager",
    duration: "3 months",
    tools: ["Figma", "Mixpanel", "Notion", "Maze"],
    sections: [
      {
        heading: "The Problem",
        body: "Over 60% of new users weren't completing the setup flow, meaning they never reached the 'aha moment'. The existing onboarding was long, text-heavy, and didn't adapt to user context.",
      },
      {
        heading: "Research & Analysis",
        body: "I analyzed funnel data in Mixpanel to pinpoint exact drop-off screens. Then I conducted 12 moderated usability tests to understand the 'why' behind the numbers. Key findings: users felt overwhelmed by too many options and wanted to see the product in action before committing to setup.",
      },
      {
        heading: "Ideation & Prototyping",
        body: "I facilitated a design sprint with the product designer and 2 engineers. We explored progressive disclosure, interactive tutorial, and template-first approaches. I tested low-fidelity wireframes with 8 users before moving to high-fidelity designs.",
      },
      {
        heading: "Experimentation",
        body: "We A/B tested the new flow featuring: a single-question personalization step, a pre-populated demo workspace, and contextual tooltips instead of a separate tutorial. I defined success metrics and ran the test for 2 weeks.",
      },
      {
        heading: "Results",
        body: "The redesigned flow showed meaningful improvement in activation rates. Users who completed the new onboarding had higher 7-day retention. Key learning: reducing cognitive load and showing value immediately matters more than explaining features.",
      },
    ],
    outcomes: [
      "Identified 3 critical drop-off points through funnel analysis",
      "Ran 12 usability tests to validate design hypotheses",
      "A/B tested 2 onboarding variants with clear success metrics",
      "Improved activation completion rate through progressive disclosure",
    ],
  },
  {
    id: "cs-product-strategy",
    title: "Structuring Product Strategy from Ambiguity",
    description:
      "Analyzed a broad 'increase engagement' goal, aligned stakeholders on a North Star metric, and delivered a focused 6-week roadmap with clear success criteria.",
    category: "Product Strategy",
    tags: ["Strategy", "Product Thinking", "Stakeholder Management"],
    image: "/placeholder.svg",
    overview:
      "Faced with a broad business challenge — 'How do we grow engagement?' — I led the process of breaking down ambiguity into structured, testable hypotheses using frameworks, facilitation, and cross-functional collaboration.",
    role: "Associate Product Manager",
    duration: "6 weeks",
    tools: ["Miro", "Notion", "Jira", "Google Sheets"],
    sections: [
      {
        heading: "The Challenge",
        body: "Leadership wanted to 'increase engagement' but the goal was loosely defined. Different stakeholders had different interpretations — more DAUs? Longer sessions? Higher feature adoption? Without alignment, the team was pulled in multiple directions.",
      },
      {
        heading: "Stakeholder Alignment",
        body: "I facilitated a stakeholder mapping exercise and ran a structured workshop where we defined engagement in measurable terms, agreed on a North Star metric, and identified input metrics that would drive it.",
      },
      {
        heading: "Breaking Down the Problem",
        body: "Using the Opportunity Solution Tree, I mapped the desired outcome to specific user opportunities backed by evidence from interviews, support tickets, and behavioral data. I prioritized using the ICE scoring framework.",
      },
      {
        heading: "Strategy & Execution",
        body: "The analysis revealed 3 high-confidence bets: improving notifications, adding collaborative features, and reducing friction in the core workflow. I created a 6-week roadmap with clear milestones, success criteria, and kill criteria.",
      },
    ],
    outcomes: [
      "Aligned 4 stakeholder groups on a shared North Star metric",
      "Mapped 12 user opportunities from qualitative and quantitative data",
      "Prioritized 3 strategic bets using ICE scoring framework",
      "Delivered a 6-week roadmap with clear success and kill criteria",
    ],
  },
  {
    id: "cs-user-obsession",
    title: "User Obsession — Building Empathy-Driven Features",
    description:
      "How deep user interviews and continuous feedback loops shaped feature prioritization and drove retention improvements.",
    category: "User Research",
    tags: ["User Interviews", "Empathy", "Retention"],
    image: "/placeholder.svg",
    overview:
      "This case study explores how embedding user research into every sprint — through interviews, feedback analysis, and behavioral data — transformed how we prioritized features and measured success.",
    role: "Associate Product Manager",
    duration: "Ongoing",
    tools: ["Notion", "Miro", "Zoom", "Dovetail"],
    sections: [
      {
        heading: "The Approach",
        body: "I established a continuous discovery cadence: 3-4 user interviews per week, a shared insight repository in Notion, and a weekly synthesis session with the product team. Every sprint planning started with fresh user insights.",
      },
      {
        heading: "Insight to Action",
        body: "User interviews revealed that power users were churning due to missing collaboration features — something our quantitative data hadn't surfaced. I mapped these qualitative signals to retention cohort data to build a compelling case for prioritization.",
      },
      {
        heading: "Impact",
        body: "By grounding every product decision in user evidence, we reduced the time from insight to shipped feature. The team gained confidence in prioritization decisions because they were backed by both qualitative depth and quantitative validation.",
      },
    ],
    outcomes: [
      "Conducted 50+ user interviews over 3 months",
      "Built a shared insight repository used by 3 teams",
      "Identified a retention driver missed by quantitative data alone",
      "Established a continuous discovery cadence adopted company-wide",
    ],
  },
];
