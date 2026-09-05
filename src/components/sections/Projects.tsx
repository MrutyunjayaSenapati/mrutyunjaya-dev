import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "../../data/portfolio";
import ProjectModal from "../ui/ProjectModal";
import ProjectSchematic from "../ui/ProjectSchematic";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [canPreview] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const reduced = useReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 200, damping: 26, mass: 0.55 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 26, mass: 0.55 });

  const hovered = projects.find((p) => p.id === hoveredId) ?? null;

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!canPreview || reduced) return;
    const pad = 12;
    const width = 320;
    const x = Math.min(Math.max(e.clientX + 32, pad), window.innerWidth - width - pad);
    const y = Math.min(Math.max(e.clientY - 110, pad), window.innerHeight - 260 - pad);
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section id="projects" aria-label="Selected work" className="relative scroll-mt-16 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Heading */}
        <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2">
          <motion.h2
            initial={reduced ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="font-display font-bold text-display"
          >
            Selected work<span className="text-accent">.</span>
          </motion.h2>
          <motion.p
            initial={reduced ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-mono text-xs tracking-wide text-text-muted"
          >
            {projects.length} builds — mobile, monorepo, real-time
          </motion.p>
        </div>

        {/* Editorial rows */}
        <div
          className="mt-10 sm:mt-14 border-t border-border"
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setHoveredId(null)}
        >
          {projects.map((project) => {
            const featured = project.featured;
            return (
              <motion.div
                key={project.id}
                role="button"
                tabIndex={0}
                onClick={() => setSelectedProject(project)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedProject(project);
                  }
                }}
                onMouseEnter={() => setHoveredId(project.id)}
                onFocus={() => setHoveredId(null)}
                initial={reduced ? false : { opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.65, ease: EASE }}
                aria-haspopup="dialog"
                className={`group block w-full cursor-pointer border-b border-border text-left transition-colors focus-visible:outline-none ${
                  featured ? "py-8 sm:py-12" : "py-6 sm:py-9"
                }`}
              >
                <div
                  className={`grid gap-6 ${
                    featured ? "lg:grid-cols-12 lg:gap-10" : "lg:grid-cols-12"
                  }`}
                >
                  {/* Text block */}
                  <div className={featured ? "lg:col-span-7" : "lg:col-span-12"}>
                    <div className="flex items-start justify-between gap-4">
                      <h3
                        className={`link-underline font-display font-semibold text-title decoration-1 underline-offset-8 group-hover:text-text ${
                          featured ? "" : "text-xl sm:text-2xl"
                        }`}
                      >
                        {project.title}
                      </h3>
                      <ArrowUpRight
                        className="mt-1 h-4 w-4 shrink-0 text-accent opacity-80 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
                        aria-hidden
                      />
                    </div>

                    <p
                      className={`mt-2.5 w-full leading-relaxed text-text-secondary ${
                        featured ? "text-base" : "text-sm"
                      }`}
                    >
                      {project.tagline}
                    </p>

                    {/* Actions & Tech Stack */}
                    <div className="mt-4 sm:mt-5 space-y-3 font-mono text-xs tracking-wide">
                      {/* Direct Links */}
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1 text-text-secondary hover:text-text hover:underline transition-colors py-0.5"
                          >
                            GitHub
                            <ArrowUpRight className="h-3 w-3 text-text-muted" />
                          </a>
                        )}

                        {project.demoLinks && project.demoLinks.length > 0 ? (
                          project.demoLinks.map((link) => (
                            <a
                              key={link.url}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-1 text-accent hover:underline transition-colors py-0.5"
                            >
                              {link.label}
                              <ArrowUpRight className="h-3 w-3 text-accent" />
                            </a>
                          ))
                        ) : project.demo ? (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1 text-accent hover:underline transition-colors py-0.5"
                          >
                            Demo
                            <ArrowUpRight className="h-3 w-3 text-accent" />
                          </a>
                        ) : null}
                      </div>

                      {/* Tech stack badges */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="inline-block rounded border border-border bg-surface px-2 py-0.5 text-[11px] text-text-secondary group-hover:border-border-strong group-hover:text-text transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Inline schematic for featured work on large screens */}
                  {featured && (
                    <div className="hidden self-center lg:col-span-5 lg:block">
                      <div className="transition-transform duration-500 ease-out will-change-transform group-hover:-translate-y-1">
                        <ProjectSchematic projectId={project.id} />
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Cursor-following preview */}
      <AnimatePresence>
        {hovered && canPreview && !reduced && (
          <motion.div
            key="cursor-preview"
            aria-hidden
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25, ease: EASE }}
            style={{ x: springX, y: springY }}
            className="pointer-events-none fixed left-0 top-0 z-30 hidden w-80 md:block"
          >
            <div className="overflow-hidden rounded-lg border border-border-strong bg-surface shadow-[0_24px_60px_-20px_rgba(0,0,0,0.7)]">
              <ProjectSchematic projectId={hovered.id} />
              <div className="flex items-center justify-between border-t border-border px-3 py-2 font-mono text-[11px] tracking-wide">
                <span className="text-text-secondary">{hovered.title}</span>
                <span className="inline-flex items-center gap-1.5 text-accent">
                  View case
                  <ArrowUpRight className="h-3 w-3" />
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
