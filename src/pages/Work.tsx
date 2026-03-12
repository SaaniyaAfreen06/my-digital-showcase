import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
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
        My Work
      </h1>
      <p className="text-muted-foreground max-w-lg">
        A collection of projects and case studies showcasing strategy, product
        thinking, and user research.
      </p>
    </motion.div>

    {/* Projects */}
    <div className="mb-16">
      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-6">
        Projects
      </p>
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
                    <Badge key={tag} variant="secondary" className="text-[11px] font-medium rounded-full px-2.5 py-0.5">
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
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h1 className="text-3xl font-display font-bold mb-4">Project not found</h1>
        <Button asChild variant="outline" className="rounded-full">
          <Link to="/work">
            <ArrowLeft size={16} /> Back to Work
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
        <Button asChild variant="ghost" className="mb-8 -ml-3 text-muted-foreground">
          <Link to="/work">
            <ArrowLeft size={16} /> Back to Work
          </Link>
        </Button>

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

        <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
          {project.title}
        </h1>

        <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-10 border border-border">
          <span className="text-4xl text-primary/15 font-display font-bold">Cover Image</span>
        </div>

        <div className="text-muted-foreground leading-relaxed text-base space-y-4">
          <p>{project.content}</p>
        </div>
      </motion.div>
    </section>
  );
};

export { WorkIndex, ProjectDetail };
