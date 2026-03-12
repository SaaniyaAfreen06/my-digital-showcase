import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="container mx-auto px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
              Associate Product Manager · Product Thinking · User Empathy
            </p>
            <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight text-foreground mb-6">
              Hi, I'm{" "}
              <span className="text-primary">Saaniya Afreen</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mb-8">
              I craft user-centered product experiences at the intersection of
              empathy, data, and strategy. Currently shaping products at{" "}
              <span className="font-semibold text-foreground">OneInbox.ai</span>.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link to="/work">
                  View My Work <ArrowRight size={16} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-secondary flex items-center justify-center border-4 border-primary/20">
              <span className="text-6xl font-display font-bold text-primary/40">SA</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
              Featured Work
            </h2>
            <p className="text-muted-foreground mb-12">
              A selection of projects I've worked on.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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

          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link to="/work">
                View All Projects <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
