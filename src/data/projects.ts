export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  image: string;
  content: string;
}

export const projects: Project[] = [
  {
    id: "product-discovery-oneinbox",
    title: "Product Discovery at OneInbox AI",
    description: "Led user research and discovery sprints to identify key pain points in email management workflows.",
    category: "AI Product",
    tags: ["User Research", "Discovery", "AI"],
    image: "/placeholder.svg",
    content:
      "At OneInbox AI, I conducted extensive user interviews, synthesized insights into actionable product requirements, and collaborated with engineering to shape the product roadmap. This project involved competitive analysis, journey mapping, and prioritization frameworks to drive data-informed decisions.",
  },
  {
    id: "user-onboarding-flows",
    title: "Building User Onboarding Flows",
    description: "Designed and iterated on onboarding experiences that improved activation rates by focusing on user empathy.",
    category: "Onboarding",
    tags: ["UX", "Experimentation", "Onboarding"],
    image: "/placeholder.svg",
    content:
      "This case study walks through the process of redesigning the onboarding experience — from identifying drop-off points through analytics, running user tests, wireframing new flows, and A/B testing improvements that led to measurable activation gains.",
  },
  {
    id: "ambiguity-to-clarity",
    title: "From Ambiguity to Clarity: A PM Case Study",
    description: "A deep dive into navigating ambiguous problem spaces and arriving at clear, actionable product strategies.",
    category: "Product Thinking",
    tags: ["Strategy", "Frameworks", "Collaboration"],
    image: "/placeholder.svg",
    content:
      "Facing a broad business challenge with no clear direction, I facilitated cross-functional workshops, mapped stakeholder needs, and used frameworks like Opportunity Solution Trees to break down complexity into testable hypotheses and a focused product strategy.",
  },
];
