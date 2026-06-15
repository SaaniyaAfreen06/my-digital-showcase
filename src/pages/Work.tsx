import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects, caseStudies } from "@/data/projects";
import { useState } from "react";

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

    {/* Projects — 3-column grid */}
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
              <div className="aspect-[4/3] bg-muted overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300" />
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

    {/* Case Studies — 2-column grid with larger images */}
    <div>
      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-6">
        Case Studies
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        {caseStudies.map((cs, i) => (
          <motion.div
            key={cs.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <Link
              to={`/work/${cs.id}`}
              className="group block rounded-lg border border-border bg-card overflow-hidden hover:shadow-md transition-all"
            >
              <div className="aspect-[16/10] bg-muted overflow-hidden">
                <img src={cs.image} alt={cs.title} className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300" />
              </div>
              <div className="p-5">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-primary mb-2">
                  {cs.category}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {cs.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-[11px] font-medium rounded-full px-2.5 py-0.5">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors leading-snug mb-1.5">
                  {cs.title}
                  <ArrowRight size={14} className="inline ml-1.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  {cs.description}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const ProjectGallery = ({ project }: { project: NonNullable<(typeof projects[0] | typeof caseStudies[0]) | undefined> }) => {
  const imgs = (project as any).images ?? [project!.image];
  const [active, setActive] = useState(0);
  return (
    <div className="mb-12">
      <div className="aspect-video bg-muted rounded-lg overflow-hidden border border-border relative group">
        <img
          src={imgs[active]}
          alt={project!.title}
          className="w-full h-full object-cover object-top transition-opacity duration-300"
        />
        {imgs.length > 1 && (
          <>
            <button
              onClick={() => setActive((p) => (p - 1 + imgs.length) % imgs.length)}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => setActive((p) => (p + 1) % imgs.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight size={18} />
            </button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {imgs.map((_: string, i: number) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${i === active ? "bg-white" : "bg-white/40"}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      {imgs.length > 1 && (
        <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
          {imgs.map((src: string, i: number) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`flex-shrink-0 w-20 h-14 rounded overflow-hidden border-2 transition-colors ${i === active ? "border-primary" : "border-border"}`}
            >
              <img src={src} alt="" className="w-full h-full object-cover object-top" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const ProjectDetail = () => {
  const { id } = useParams();
  const allItems = [...projects, ...caseStudies];
  const project = allItems.find((p) => p.id === id);

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

  const hasFullCaseStudy = "sections" in project && project.sections;

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
            <Badge key={tag} variant="secondary" className="rounded-full">{tag}</Badge>
          ))}
        </div>
        <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          {project.title}
        </h1>
        <p className="text-muted-foreground leading-relaxed mb-8">
          {project.overview || project.description}
        </p>

        {/* Meta info */}
        {hasFullCaseStudy && (
          <div className="grid grid-cols-3 gap-4 mb-10 border border-border rounded-lg p-5">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">Role</p>
              <p className="text-sm font-medium text-foreground">{project.role}</p>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">Duration</p>
              <p className="text-sm font-medium text-foreground">{project.duration}</p>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">Tools</p>
              <p className="text-sm font-medium text-foreground">{project.tools?.join(", ")}</p>
            </div>
          </div>
        )}

        <ProjectGallery project={project} />

        {/* Case study sections */}
        {hasFullCaseStudy && (
          <>
            <div className="space-y-10">
              {project.sections!.map((section, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  <h2 className="text-xl font-display font-bold text-foreground mb-3">{section.heading}</h2>
                  <p className="text-muted-foreground leading-relaxed">{section.body}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 border border-border rounded-lg p-6 bg-muted/30">
              <h2 className="text-lg font-display font-bold text-foreground mb-4">Key Outcomes</h2>
              <ul className="space-y-3">
                {project.outcomes!.map((outcome, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 size={16} className="text-primary flex-shrink-0 mt-0.5" />
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}

        {!hasFullCaseStudy && (
          <div className="text-muted-foreground leading-relaxed text-base space-y-4">
            <p>{project.description}</p>
          </div>
        )}

        {/* Navigation */}
        <div className="mt-14 pt-10 border-t border-border">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">More work</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {allItems.filter((p) => p.id !== project.id).slice(0, 4).map((p) => (
              <Link key={p.id} to={`/work/${p.id}`} className="group border border-border rounded-lg p-4 hover:shadow-sm transition-all">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-primary mb-1">{p.category}</p>
                <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{p.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export { WorkIndex, ProjectDetail };
