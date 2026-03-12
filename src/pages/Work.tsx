import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

const WorkIndex = () => (
  <section className="max-w-6xl mx-auto px-6 py-20">
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mb-14"
    >
      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-2">
        Portfolio
      </p>
      <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-3">
        Case Studies
      </h1>
      <p className="text-muted-foreground max-w-lg">
        Deep dives into product problems I've tackled — from discovery and
        research to strategy, execution, and measurable outcomes.
      </p>
    </motion.div>

    <div className="grid md:grid-cols-3 gap-6">
      {projects.map((project, i) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
        >
          <Link
            to={`/work/${project.id}`}
            className="group block rounded-lg border border-border bg-card overflow-hidden hover:shadow-md transition-all"
          >
            <div className="aspect-[4/3] bg-muted flex items-center justify-center">
              <span className="text-3xl text-primary/20 font-display font-bold">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="p-5">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-primary mb-2">
                {project.category}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="text-[11px] font-medium rounded-full px-2.5 py-0.5"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-snug mb-1.5">
                {project.title}
              </h3>
              <p className="text-xs text-muted-foreground line-clamp-2">
                {project.description}
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-primary mt-3">
                Read case study <ArrowRight size={12} />
              </span>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  </section>
);

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h1 className="text-3xl font-display font-bold mb-4">
          Project not found
        </h1>
        <Button asChild variant="outline" className="rounded-full">
          <Link to="/work">
            <ArrowLeft size={16} /> Back to Case Studies
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Button
          asChild
          variant="ghost"
          className="mb-8 -ml-3 text-muted-foreground"
        >
          <Link to="/work">
            <ArrowLeft size={16} /> Back to Case Studies
          </Link>
        </Button>

        {/* Header */}
        <p className="text-[11px] font-semibold uppercase tracking-wider text-primary mb-3">
          {project.category}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="rounded-full">
              {tag}
            </Badge>
          ))}
        </div>
        <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          {project.title}
        </h1>
        <p className="text-muted-foreground leading-relaxed mb-8">
          {project.overview}
        </p>

        {/* Meta info */}
        <div className="grid grid-cols-3 gap-4 mb-10 border border-border rounded-lg p-5">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">
              Role
            </p>
            <p className="text-sm font-medium text-foreground">
              {project.role}
            </p>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">
              Duration
            </p>
            <p className="text-sm font-medium text-foreground">
              {project.duration}
            </p>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">
              Tools
            </p>
            <p className="text-sm font-medium text-foreground">
              {project.tools.join(", ")}
            </p>
          </div>
        </div>

        {/* Cover image placeholder */}
        <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-12 border border-border">
          <span className="text-4xl text-primary/15 font-display font-bold">
            Cover Image
          </span>
        </div>

        {/* Case study sections */}
        <div className="space-y-10">
          {project.sections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <h2 className="text-xl font-display font-bold text-foreground mb-3">
                {section.heading}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {section.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Outcomes */}
        <div className="mt-12 border border-border rounded-lg p-6 bg-muted/30">
          <h2 className="text-lg font-display font-bold text-foreground mb-4">
            Key Outcomes
          </h2>
          <ul className="space-y-3">
            {project.outcomes.map((outcome, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm text-muted-foreground"
              >
                <CheckCircle2
                  size={16}
                  className="text-primary flex-shrink-0 mt-0.5"
                />
                {outcome}
              </li>
            ))}
          </ul>
        </div>

        {/* Navigation to other case studies */}
        <div className="mt-14 pt-10 border-t border-border">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
            More case studies
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {projects
              .filter((p) => p.id !== project.id)
              .map((p) => (
                <Link
                  key={p.id}
                  to={`/work/${p.id}`}
                  className="group border border-border rounded-lg p-4 hover:shadow-sm transition-all"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-primary mb-1">
                    {p.category}
                  </p>
                  <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                    {p.title}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export { WorkIndex, ProjectDetail };
