import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap } from "lucide-react";

const skills = [
  "Product Management",
  "User Research",
  "Product Strategy",
  "Wireframing",
  "A/B Testing",
  "Data Analysis",
  "Stakeholder Management",
  "Agile / Scrum",
  "Cross-functional Collaboration",
  "Experimentation",
];

const About = () => (
  <section className="container mx-auto px-6 py-24">
    <div className="grid md:grid-cols-2 gap-16 items-start">
      {/* Left */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-48 h-48 rounded-full bg-secondary border-4 border-primary/20 flex items-center justify-center mb-8">
          <span className="text-4xl font-display font-bold text-primary/40">SA</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
          About Me
        </h1>
        <p className="text-muted-foreground leading-relaxed mb-4">
          I'm Saaniya Afreen — an Associate Product Manager at OneInbox.ai who
          thrives at the intersection of user empathy, product thinking, and
          business strategy.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          I believe that great products are born from deep understanding of user
          problems, rigorous experimentation, and close collaboration across
          design, engineering, and business teams.
        </p>
      </motion.div>

      {/* Right */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="space-y-12"
      >
        {/* Experience */}
        <div>
          <h2 className="text-2xl font-display font-semibold text-foreground mb-6 flex items-center gap-2">
            <Briefcase size={22} className="text-primary" /> Experience
          </h2>
          <div className="border-l-2 border-primary/30 pl-6 space-y-6">
            <div>
              <p className="text-sm text-primary font-medium">Present</p>
              <h3 className="text-lg font-semibold text-foreground">
                Associate Product Manager
              </h3>
              <p className="text-muted-foreground">OneInbox.ai</p>
              <p className="text-sm text-muted-foreground mt-1">
                Driving product discovery, user research, and feature
                prioritization for an AI-powered email platform.
              </p>
            </div>
          </div>
        </div>

        {/* Education */}
        <div>
          <h2 className="text-2xl font-display font-semibold text-foreground mb-6 flex items-center gap-2">
            <GraduationCap size={22} className="text-primary" /> Education
          </h2>
          <div className="border-l-2 border-primary/30 pl-6">
            <div>
              <p className="text-sm text-primary font-medium">Your Degree</p>
              <h3 className="text-lg font-semibold text-foreground">
                Your University
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Update this with your education details.
              </p>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <Badge key={s} variant="secondary">
                {s}
              </Badge>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default About;
