import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

const WorkIndex = () => (
  <section className="container mx-auto px-6 py-24">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
        My Work
      </h1>
      <p className="text-muted-foreground max-w-lg mb-12">
        Projects that showcase my approach to product thinking, user research, and
        cross-functional collaboration.
      </p>
    </motion.div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, i) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
        >
          <Link
            to={`/work/${project.id}`}
            className="group block rounded-lg border border-border bg-card overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="aspect-video bg-secondary flex items-center justify-center">
              <span className="text-4xl text-primary/30 font-display font-bold">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              <h3 className="text-lg font-display font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {project.description}
              </p>
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
      <div className="container mx-auto px-6 py-24 text-center">
        <h1 className="text-3xl font-display font-bold mb-4">Project not found</h1>
        <Button asChild variant="outline">
          <Link to="/work">
            <ArrowLeft size={16} /> Back to Work
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <section className="container mx-auto px-6 py-24 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Button asChild variant="ghost" className="mb-8">
          <Link to="/work">
            <ArrowLeft size={16} /> Back to Work
          </Link>
        </Button>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>

        <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
          {project.title}
        </h1>

        <div className="aspect-video bg-secondary rounded-lg flex items-center justify-center mb-10 border border-border">
          <span className="text-5xl text-primary/20 font-display font-bold">Cover</span>
        </div>

        <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
          <p>{project.content}</p>
        </div>
      </motion.div>
    </section>
  );
};

export { WorkIndex, ProjectDetail };
