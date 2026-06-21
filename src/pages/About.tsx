import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import Seo from "@/components/Seo";
import {
  GraduationCap,
  LayoutDashboard,
  Users,
  Lightbulb,
  Wrench,
  Heart,
  BarChart2,
  Award,
} from "lucide-react";

const experience = [
  {
    year: "Oct 2025 – Present",
    company: "OneInbox AI",
    role: "Associate Product Manager",
    highlights: [
      "Enterprise voice AI deployments across banking, insurance, and sales",
      "Redesigned onboarding flows, improving time-to-value for new clients",
      "Built banking FATCA/CRS compliance voice AI flow from scratch",
      "Developed product testing framework for real-world agent evaluation",
      "Techstars '25 portfolio company",
    ],
  },
  {
    year: "Jun 2023 – Oct 2025",
    company: "Predict Growth",
    role: "Associate Product Manager",
    highlights: [
      "Led UI/UX and engineering teams to ship product improvements via user feedback",
      "Defined product strategy, customer acquisition, and go-to-market plans",
      "Built MVP that attracted 300+ users at launch, validating product-market fit",
      "Integrated AI models to enhance automation and user experience",
      "Conducted competitive analysis informing roadmap and pricing strategy",
    ],
  },
  {
    year: "Oct 2022 – Nov 2022",
    company: "NullClass",
    role: "Full Stack Developer Intern",
    highlights: [
      "Built a developer Q&A platform using React, Redux, Node.js, and MongoDB",
    ],
  },
  {
    year: "Mar 2021 – May 2021",
    company: "Softora Technologies",
    role: "Web Developer Intern",
    highlights: [
      "Deployed a Razorpay payment gateway for an NGO processing charitable donations",
    ],
  },
];

const education = [
  {
    year: "2018 – 2022",
    institution: "Ramaiah Institute of Technology",
    degree: "Bachelor of Engineering",
    location: "Bangalore",
  },
];

const certifications = [
  { name: "Product Management Basics", issuer: "Credly", url: "https://www.credly.com/badges/527e80e5-e22d-41d4-a932-672a61ede047/public_url" },
  { name: "Product Analytics", issuer: "Credly", url: "https://www.credly.com/badges/39132f00-1ed3-46d8-bc94-8f6be4ad839e/public_url" },
  { name: "Product-Led Growth", issuer: "Credly", url: "https://www.credly.com/badges/8623a800-5c0a-4ec8-87ab-b93f60fd93ce/public_url" },
  { name: "Product Discovery", issuer: "Credly", url: "https://www.credly.com/badges/1e149cfb-7cdc-4f65-ad6f-f544edb2780d/public_url" },
  { name: "AI for Product Management", issuer: "Credly", url: "https://www.credly.com/badges/dfbb89f7-93ad-41ad-b50e-5e7c4b157e6b/public_url" },
];

const skills = [
  {
    icon: LayoutDashboard,
    title: "Product Management",
    desc: "Roadmapping, backlog prioritization, user stories, discovery sprints, stakeholder alignment, sprint planning",
  },
  {
    icon: BarChart2,
    title: "Data & Analytics",
    desc: "A/B testing, funnel analysis, KPI tracking, user behavior analysis, Mixpanel, Google Analytics, SQL",
  },
  {
    icon: Users,
    title: "User Research",
    desc: "User interviews, usability testing, affinity mapping, continuous discovery, insight synthesis",
  },
  {
    icon: Lightbulb,
    title: "Product Strategy",
    desc: "Market research, competitive analysis, positioning, go-to-market planning, Opportunity Solution Trees, ICE scoring",
  },
  {
    icon: Wrench,
    title: "Tools",
    desc: "Figma, Jira, Notion, Miro, Postman, Retell AI, Twilio, Supabase",
  },
  {
    icon: Heart,
    title: "Technical Depth",
    desc: "Engineering background (BE), vibe coding, API integration, prompt engineering, voice AI systems",
  },
];

const About = () => (
  <section className="max-w-6xl mx-auto px-6 py-20">
    <Seo
      title="About"
      path="/about"
      description="Associate PM with an engineering background — voice AI at OneInbox (Techstars '25), a 0→1 MVP to 300+ users, and AI-powered workflows for regulatory and operational problems."
    />
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col md:flex-row gap-10 items-start mb-20"
    >
      <div className="w-40 h-48 rounded-2xl bg-muted flex-shrink-0 overflow-hidden shadow-sm">
        <img
          src="/screenshots/hero-photo-1.jpg"
          alt="Saaniya Afreen"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div>
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-2">
          About Me
        </p>
        <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-5">
          Associate PM with an engineering mindset
        </h1>
        <div className="text-muted-foreground leading-relaxed space-y-4 max-w-2xl">
          <p>
            I'm an Associate Product Manager with a background in engineering — which means I can
            write a user story and read the code implementing it. I've shipped products at a
            Techstars-backed voice AI startup, built a 0→1 MVP to 300+ users, and designed
            AI-powered workflows that solve real regulatory and operational problems.
          </p>
          <p>
            Currently at OneInbox AI, I work at the intersection of voice AI, product strategy, and
            enterprise deployment. I own the product from discovery to go-live — conducting user
            research, writing specs, running experiments, and debugging conversation flows when
            things break at 11pm before a client launch.
          </p>
          <p>
            I'm drawn to 0→1 problems, AI-native products, and the kind of user research that
            surfaces insights your analytics will never show. My edge is that I can talk to
            engineers, question technical decisions, and still keep the user's perspective front and
            center.
          </p>
        </div>
      </div>
    </motion.div>

    {/* Experience */}
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="mb-20"
    >
      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-2">
        Experience
      </p>
      <h2 className="text-2xl font-display font-bold text-foreground mb-8">Work History</h2>
      <div className="space-y-0">
        {experience.map((e, i) => (
          <div key={i} className="flex gap-4 items-start pb-10 relative">
            <div className="flex flex-col items-center">
              <div className="w-3 h-3 rounded-full bg-primary flex-shrink-0 mt-1" />
              {i < experience.length - 1 && (
                <div className="w-px flex-1 bg-border mt-1 min-h-[60px]" />
              )}
            </div>
            <div>
              <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">
                {e.year}
              </p>
              <p className="font-semibold text-foreground">{e.company}</p>
              <p className="text-sm text-muted-foreground mb-3">{e.role}</p>
              <ul className="space-y-1">
                {e.highlights.map((h, j) => (
                  <li key={j} className="text-sm text-muted-foreground flex gap-2">
                    <span className="text-primary mt-1.5 text-xs">▸</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </motion.div>

    {/* Education & Certifications */}
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="mb-20"
    >
      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-2">
        Credentials
      </p>
      <h2 className="text-2xl font-display font-bold text-foreground mb-8">
        Education & Certifications
      </h2>
      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        {education.map((e, i) => (
          <div key={i} className="border border-border rounded-lg p-5 flex gap-4 items-start">
            <GraduationCap size={20} className="text-muted-foreground flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">
                {e.year}
              </p>
              <p className="font-semibold text-foreground text-sm">{e.institution}</p>
              <p className="text-xs text-muted-foreground">{e.degree} · {e.location}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {certifications.map((c, i) => (
          <a
            key={i}
            href={c.url}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-border rounded-lg p-4 flex gap-3 items-start hover:border-primary/40 hover:shadow-sm transition-all group"
          >
            <Award size={16} className="text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors leading-snug">
                {c.name}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">{c.issuer} · Verified</p>
            </div>
          </a>
        ))}
      </div>
    </motion.div>

    {/* Skills */}
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-2">
        Expertise
      </p>
      <h2 className="text-2xl font-display font-bold text-foreground mb-8">
        What I Bring
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((s) => (
          <div key={s.title} className="border border-border rounded-lg p-5">
            <s.icon size={22} className="text-primary mb-3" />
            <p className="font-semibold text-foreground text-sm mb-1">{s.title}</p>
            <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default About;
