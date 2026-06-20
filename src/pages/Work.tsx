import { Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";
import { projects, caseStudies } from "@/data/projects";

// Render a section body as prose, promoting inline "1) 2) 3)" pointers to an
// ordered list so they read like a real article instead of a run-on paragraph.
function SectionBody({ body }: { body: string }) {
  const hasList = /(^|\s)1\)\s/.test(body) && /(^|\s)2\)\s/.test(body);
  if (!hasList) {
    return <p className="text-muted-foreground leading-relaxed">{body}</p>;
  }
  const firstIdx = body.search(/(^|\s)1\)\s/);
  const intro = body.slice(0, firstIdx).trim();
  const items = body
    .slice(firstIdx)
    .split(/\s*\b\d+\)\s/)
    .map((s) => s.trim())
    .filter(Boolean);
  return (
    <div className="space-y-3">
      {intro && <p className="text-muted-foreground leading-relaxed">{intro}</p>}
      <ol className="space-y-2.5">
        {items.map((item, i) => (
          <li key={i} className="flex gap-3 text-muted-foreground leading-relaxed">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-semibold flex items-center justify-center mt-0.5">
              {i + 1}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

// A blog-style figure for lead / inline images, with optional caption.
function Figure({ src, alt, caption, className = "" }: { src: string; alt: string; caption?: string; className?: string }) {
  return (
    <figure className={className}>
      <div className="rounded-lg overflow-hidden border border-border bg-muted">
        <img src={src} alt={alt} className="w-full max-h-[540px] object-contain mx-auto" />
      </div>
      {caption && (
        <figcaption className="mt-2 text-xs text-muted-foreground text-center italic px-4">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

const WorkIndex = () => (
  <section className="max-w-6xl mx-auto px-6 py-20">
    <Seo
      title="Work"
      path="/work"
      description="Product projects and case studies by Saaniya Afreen — voice AI onboarding, banking FATCA/CRS compliance, lead-data cleanup, a 0→1 fundraising SaaS, and product teardowns."
    />
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
      <Seo
        title={project.title}
        path={`/work/${project.id}`}
        description={project.description}
        image={project.image}
      />
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

        {/* TL;DR — scannable summary */}
        {"tldr" in project && project.tldr && (
          <div className="mb-10 border border-border rounded-lg p-5 bg-muted/30">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-primary mb-3">TL;DR</p>
            <ul className="space-y-2">
              {project.tldr.map((point, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-foreground/90 leading-relaxed">
                  <span className="text-primary mt-1.5 flex-shrink-0 w-1 h-1 rounded-full bg-primary" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        )}

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

        {/* Lead image */}
        <Figure src={project.image} alt={project.title} className="mb-12" />

        {/* Case study sections — blog-style, images placed beside the text they relate to */}
        {hasFullCaseStudy && (
          <>
            <div className="space-y-10">
              {project.sections!.map((section, i) => (
                <Fragment key={i}>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-xl font-display font-bold text-foreground mb-3">{section.heading}</h2>
                    <SectionBody body={section.body} />
                  </motion.div>
                  {section.media?.map((m, mi) => (
                    <Figure
                      key={mi}
                      src={m.src}
                      alt={m.caption ?? `${project.title} — ${section.heading}`}
                      caption={m.caption}
                      className="mt-6"
                    />
                  ))}
                </Fragment>
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
