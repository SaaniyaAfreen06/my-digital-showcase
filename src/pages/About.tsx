import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  GraduationCap,
  LayoutDashboard,
  Users,
  Lightbulb,
  Wrench,
  Heart,
  MessageSquare,
} from "lucide-react";

const experience = [
  { year: "Present", company: "OneInbox.ai", role: "Associate Product Manager" },
];

const education = [
  { year: "Your Years", institution: "Your University", degree: "Your Degree" },
];

const skills = [
  {
    icon: LayoutDashboard,
    title: "Product Management",
    desc: "User stories, Discovery, Roadmapping, Backlog prioritization, Stakeholder management",
  },
  {
    icon: Users,
    title: "Project Management",
    desc: "Agile methodology, Sprint planning, Cross-functional team coordination",
  },
  {
    icon: Lightbulb,
    title: "UX & Prototyping",
    desc: "Wireframing, Prototyping, User flows, and working with design tools",
  },
  {
    icon: Wrench,
    title: "Technical Proficiency",
    desc: "Notion, Jira, Miro, Figma, SQL, Data analysis tools",
  },
  {
    icon: Heart,
    title: "User Obsession",
    desc: "Deep empathy, user interviews, and user-focused strategizing",
  },
  {
    icon: MessageSquare,
    title: "Communication",
    desc: "Facilitating workshops, presenting to stakeholders, clear documentation",
  },
];

const About = () => (
  <section className="max-w-6xl mx-auto px-6 py-20">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col md:flex-row gap-10 items-start mb-20"
    >
      <div className="w-40 h-40 rounded-2xl bg-muted flex-shrink-0 overflow-hidden flex items-center justify-center">
        <span className="text-4xl font-display font-bold text-primary/20">SA</span>
      </div>
      <div>
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-2">
          About Me
        </p>
        <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-5">
          Building products that actually work
        </h1>
        <div className="text-muted-foreground leading-relaxed space-y-4 max-w-2xl">
          <p>
            I'm a product manager who believes in deep user understanding and
            structured thinking. My work spans user research, product strategy,
            and cross-functional collaboration.
          </p>
          <p>
            Currently at OneInbox.ai, I focus on product discovery, talking to
            users, planning roadmaps, and running experiments to see what
            genuinely moves the needle.
          </p>
          <p>
            My strengths lie in user research, product discovery,
            cross-functional collaboration, 0→1 building, and improving core
            metrics like activation and retention.
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
      <h2 className="text-2xl font-display font-bold text-foreground mb-8">Experience</h2>
      <div className="space-y-0">
        {experience.map((e, i) => (
          <div key={i} className="flex gap-4 items-start pb-8 relative">
            <div className="flex flex-col items-center">
              <div className="w-3 h-3 rounded-full bg-primary flex-shrink-0 mt-1" />
              {i < experience.length - 1 && (
                <div className="w-px flex-1 bg-border mt-1" />
              )}
            </div>
            <div>
              <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">
                {e.year}
              </p>
              <p className="font-semibold text-foreground">{e.company}</p>
              <p className="text-sm text-muted-foreground">{e.role}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>

    {/* Education */}
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="mb-20"
    >
      <h2 className="text-2xl font-display font-bold text-foreground mb-8">
        Education & Certifications
      </h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {education.map((e, i) => (
          <div key={i} className="border border-border rounded-lg p-5 flex gap-4 items-start">
            <GraduationCap size={20} className="text-muted-foreground flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">
                {e.year}
              </p>
              <p className="font-semibold text-foreground text-sm">{e.institution}</p>
              <p className="text-xs text-muted-foreground">{e.degree}</p>
            </div>
          </div>
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
        Me in a Nutshell
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {skills.map((s) => (
          <div key={s.title} className="border border-border rounded-lg p-5">
            <s.icon size={22} className="text-muted-foreground mb-3" />
            <p className="font-semibold text-foreground text-sm mb-1">{s.title}</p>
            <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default About;
