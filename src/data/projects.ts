export interface CaseStudySection {
  heading: string;
  body: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  image: string;
  overview: string;
  role: string;
  duration: string;
  tools: string[];
  sections: CaseStudySection[];
  outcomes: string[];
}

export const projects: Project[] = [
  {
    id: "product-discovery-oneinbox",
    title: "Product Discovery at OneInbox AI",
    description:
      "Led user research and discovery sprints to identify key pain points in email management workflows for an AI-powered inbox tool.",
    category: "AI Product",
    tags: ["User Research", "Discovery", "AI", "Roadmapping"],
    image: "/placeholder.svg",
    overview:
      "OneInbox.ai is an AI-powered email management tool backed by Techstars '25. As the Associate Product Manager, I led the product discovery process from scratch — conducting user interviews, mapping pain points, and translating insights into a prioritized product roadmap.",
    role: "Associate Product Manager",
    duration: "Ongoing",
    tools: ["Notion", "Miro", "Figma", "SQL", "Google Analytics"],
    sections: [
      {
        heading: "The Problem",
        body: "Users were overwhelmed by email overload, spending hours each day triaging inboxes. Existing tools lacked intelligence — they filtered but didn't prioritize. We needed to understand the core workflows and friction points before building any features.",
      },
      {
        heading: "Research & Discovery",
        body: "I conducted 20+ user interviews with professionals across sales, recruiting, and customer support roles. Using affinity mapping on Miro, I synthesized qualitative data into clear themes: lack of prioritization, context-switching fatigue, and missed follow-ups. I also ran competitive analysis across 8 email tools to identify whitespace opportunities.",
      },
      {
        heading: "Framing the Opportunity",
        body: "Using the Opportunity Solution Tree framework, I broke down the broad goal of 'reducing email overwhelm' into specific opportunities. Each opportunity was mapped to testable hypotheses. I facilitated cross-functional workshops with engineering and design to align on the highest-impact bets.",
      },
      {
        heading: "Solution & Execution",
        body: "We designed an AI-driven priority inbox that automatically categorized emails by urgency and context. I wrote detailed user stories, defined acceptance criteria, and worked with engineering on sprint planning. We shipped an MVP in 4 weeks and iterated based on real usage data.",
      },
      {
        heading: "Measuring Impact",
        body: "Post-launch, I set up analytics dashboards to track activation, retention, and core engagement metrics. I ran weekly data reviews and user feedback sessions to inform iteration priorities. The focus was on building a tight feedback loop between qualitative insights and quantitative signals.",
      },
    ],
    outcomes: [
      "Conducted 20+ user interviews across 3 user segments",
      "Built and prioritized a product roadmap using Opportunity Solution Trees",
      "Shipped MVP in 4 weeks with cross-functional team of 5",
      "Established a continuous discovery cadence with weekly user touchpoints",
    ],
  },
  {
    id: "user-onboarding-flows",
    title: "Redesigning User Onboarding Flows",
    description:
      "Designed and iterated on onboarding experiences that improved activation rates by focusing on user empathy and experimentation.",
    category: "Onboarding & Growth",
    tags: ["UX", "Experimentation", "Onboarding", "Activation"],
    image: "/placeholder.svg",
    overview:
      "New users were dropping off during onboarding before experiencing the product's core value. I led a cross-functional effort to redesign the onboarding flow, using data analysis, user testing, and rapid experimentation to drive measurable activation improvements.",
    role: "Associate Product Manager",
    duration: "3 months",
    tools: ["Figma", "Mixpanel", "Notion", "Maze"],
    sections: [
      {
        heading: "The Problem",
        body: "Analytics showed a significant drop-off between sign-up and first meaningful action. Over 60% of new users weren't completing the setup flow, meaning they never reached the 'aha moment'. The existing onboarding was long, text-heavy, and didn't adapt to user context.",
      },
      {
        heading: "Research & Analysis",
        body: "I analyzed funnel data in Mixpanel to pinpoint exact drop-off screens. Then I conducted 12 moderated usability tests using Maze and Zoom to understand the 'why' behind the numbers. Key findings: users felt overwhelmed by too many options, didn't understand the value proposition, and wanted to see the product in action before committing to setup.",
      },
      {
        heading: "Ideation & Prototyping",
        body: "I facilitated a design sprint with the product designer and 2 engineers. We explored 3 different onboarding paradigms: progressive disclosure, interactive tutorial, and template-first approach. I created low-fidelity wireframes in Figma and tested them with 8 users before committing to high-fidelity designs.",
      },
      {
        heading: "Experimentation & Iteration",
        body: "We A/B tested the new onboarding flow against the existing one. The new flow featured: a single-question personalization step, a pre-populated demo workspace, and contextual tooltips instead of a separate tutorial. I defined success metrics, set up experiment tracking, and ran the test for 2 weeks.",
      },
      {
        heading: "Results & Learnings",
        body: "The redesigned flow showed meaningful improvement in activation rates. More importantly, users who completed the new onboarding had higher 7-day retention. Key learning: reducing cognitive load and showing value immediately matters more than explaining features.",
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
    id: "ambiguity-to-clarity",
    title: "From Ambiguity to Clarity: Structuring Product Strategy",
    description:
      "A deep dive into navigating ambiguous problem spaces and arriving at clear, actionable product strategies using structured frameworks.",
    category: "Product Strategy",
    tags: ["Strategy", "Frameworks", "Collaboration", "Stakeholder Management"],
    image: "/placeholder.svg",
    overview:
      "Faced with a broad business challenge — 'How do we grow engagement for our core product?' — I led the process of breaking down ambiguity into structured, testable hypotheses. This case study walks through the frameworks, facilitation techniques, and cross-functional collaboration that turned a vague goal into a focused product strategy.",
    role: "Associate Product Manager",
    duration: "6 weeks",
    tools: ["Miro", "Notion", "Jira", "Google Sheets"],
    sections: [
      {
        heading: "The Challenge",
        body: "The leadership team wanted to 'increase engagement' but the goal was loosely defined. Different stakeholders had different interpretations — more daily active users? Longer session times? Higher feature adoption? Without alignment, the team was pulled in multiple directions with no clear prioritization.",
      },
      {
        heading: "Stakeholder Alignment",
        body: "I facilitated a stakeholder mapping exercise to understand each team's perspective and constraints. Then I ran a structured workshop where we defined engagement in measurable terms, agreed on a North Star metric, and identified the input metrics that would drive it. This created a shared language and reduced ambiguity.",
      },
      {
        heading: "Breaking Down the Problem",
        body: "Using the Opportunity Solution Tree, I mapped the desired outcome to specific user opportunities. Each opportunity was backed by evidence from user interviews, support tickets, and behavioral data. I prioritized using a weighted scoring model that balanced impact, confidence, and effort (ICE framework).",
      },
      {
        heading: "Strategy & Roadmap",
        body: "The analysis revealed 3 high-confidence bets: improving the notification system, adding collaborative features, and reducing friction in the core workflow. I created a 6-week roadmap with clear milestones, success criteria for each bet, and kill criteria if experiments didn't show signal within 2 weeks.",
      },
      {
        heading: "Execution & Outcomes",
        body: "We executed the first two bets in parallel. I coordinated with engineering, design, and data teams — running daily standups, maintaining a living spec in Notion, and presenting weekly progress updates to leadership. The structured approach gave the team confidence and clarity, reducing scope creep and enabling faster decision-making.",
      },
    ],
    outcomes: [
      "Aligned 4 stakeholder groups on a shared North Star metric",
      "Mapped 12 user opportunities from qualitative and quantitative data",
      "Prioritized 3 strategic bets using ICE scoring framework",
      "Delivered a 6-week roadmap with clear success and kill criteria",
    ],
  },
];
