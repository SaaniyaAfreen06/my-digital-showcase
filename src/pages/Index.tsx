import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Seo from "@/components/Seo";
import { projects } from "@/data/projects";

const stats = [
  { value: "300+", label: "Users at MVP Launch" },
  { value: "0→1", label: "Products Built" },
  { value: "Voice AI", label: "Current Focus" },
  { value: "3 yrs", label: "PM Experience" },
];

const Index = () => {
  return (
    <>
      <Seo
        path="/"
        description="Saaniya Afreen — Associate Product Manager building AI-native products. Voice AI, 0→1 builds, and product case studies in fintech, onboarding, and lead data."
      />
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-5">
              Associate Product Manager · Voice AI · 0→1 Builder
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-display font-bold leading-[1.15] text-foreground mb-5">
              Hi, I'm Saaniya{"\n"}Afreen
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed max-w-md mb-6">
              I build AI-native products that solve real problems — from enterprise voice deployments
              to 0→1 MVPs that hit 300+ users on launch day. Currently shaping voice AI at{" "}
              <span className="font-medium text-foreground">OneInbox AI</span> (Techstars '25).
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md mb-8">
              Engineering background. Deep user empathy. Technical enough to question the
              architecture, product-minded enough to know when not to.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="rounded-full px-6 gap-2">
                <Link to="/work">
                  View My Work <ArrowRight size={15} />
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-6">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex justify-center md:justify-end"
          >
            <div className="w-64 md:w-72 aspect-[4/5] rounded-2xl bg-muted overflow-hidden shadow-sm">
              <img
                src="/screenshots/hero-photo-1.jpg"
                alt="Saaniya Afreen"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border py-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl font-display font-bold text-foreground mb-1">{s.value}</p>
                <p className="text-xs tracking-wider uppercase text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-muted/50 border-b border-border py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-2">
                Selected Work
              </p>
              <h2 className="text-3xl font-display font-bold text-foreground">
                Projects & Case Studies
              </h2>
            </motion.div>
            <Link
              to="/work"
              className="hidden sm:flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              View all <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Link
                  to={`/work/${project.id}`}
                  className="group block rounded-lg border border-border bg-card overflow-hidden hover:shadow-md transition-all h-full"
                >
                  <div className="aspect-[4/3] bg-muted overflow-hidden">
                    <img src={project.thumbnail ?? project.image} alt={project.title} className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-300" />
                  </div>
                  <div className="p-5">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-primary mb-2">
                      {project.category}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-[11px] font-medium rounded-full px-2.5 py-0.5">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-snug mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-2">
              About
            </p>
            <h2 className="text-3xl font-display font-bold text-foreground mb-5">
              PM who can read the diff
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Engineering degree. Product instincts. I've shipped voice AI products, led 0→1 builds,
              and redesigned onboarding flows that cut setup friction for enterprise clients.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I run discovery the right way — user interviews, behavioral data, continuous
              synthesis — and I write specs that engineers actually want to build from.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Read more about me <ArrowRight size={14} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="space-y-4"
          >
            {[
              { label: "Current Role", value: "Associate PM · OneInbox AI (Techstars '25)" },
              { label: "Previous", value: "Associate PM · Predict Growth (2023–2025)" },
              { label: "Education", value: "BE · Ramaiah Institute of Technology" },
              { label: "Location", value: "Bangalore, India" },
            ].map((item) => (
              <div key={item.label} className="border border-border rounded-lg p-5">
                <p className="text-xs tracking-wider uppercase text-muted-foreground mb-1">{item.label}</p>
                <p className="text-sm font-medium text-foreground">{item.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/50 border-y border-border py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3">
              Open to Opportunities
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Let's build something great
            </h2>
            <p className="text-muted-foreground mb-8">
              I'm open to PM roles at ambitious teams — especially in AI, developer tools, and
              0→1 products. Happy to chat about what you're building.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="rounded-full px-6 gap-2">
                <a href="mailto:saaniyaafreen2000@gmail.com">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  saaniyaafreen2000@gmail.com
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-6 gap-2">
                <a href="https://www.linkedin.com/in/saaniya-afreen-527322197" target="_blank" rel="noopener noreferrer">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  LinkedIn
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Index;
