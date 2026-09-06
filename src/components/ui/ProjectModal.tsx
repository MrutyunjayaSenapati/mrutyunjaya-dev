import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import githubIcon from "devicon/icons/github/github-original.svg";
import type { Project } from "../../data/portfolio";
import ProjectSchematic from "./ProjectSchematic";
import { PlantDoctorMobilePreview, FoodyGoMobilePreview, FoodyGoDriverMobilePreview } from "./MobileAppPreviews";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

const EASE = [0.16, 1, 0.3, 1] as const;

function MetaLabel({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-text-muted">
      {children}
    </h3>
  );
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [viewMode, setViewMode] = useState<"schematic" | "mobile" | "driver">("schematic");
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);
  const onCloseRef = useRef(onClose);

  const hasMobilePreview = project?.id === "plant-doctor" || project?.id === "foodygo";

  useEffect(() => {
    setViewMode("schematic");
  }, [project?.id]);

  useEffect(() => {
    if (project) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [project]);

  useEffect(() => {
    if (!project) return;

    previouslyFocusedRef.current = document.activeElement as HTMLElement | null;
    const dialog = dialogRef.current;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onCloseRef.current();
        return;
      }
      if (e.key !== "Tab" || !dialog) return;

      const focusables = Array.from(dialog.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR));
      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [project]);

  useEffect(() => {
    if (project && dialogRef.current) {
      dialogRef.current.focus();
    } else if (!project && previouslyFocusedRef.current) {
      previouslyFocusedRef.current.focus();
    }
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-md"
          />

          {/* Dialog */}
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            tabIndex={-1}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="relative z-10 max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-xl border border-border bg-surface text-left shadow-[0_32px_80px_-24px_rgba(0,0,0,0.8)] focus:outline-none"
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-20 flex h-8 w-8 cursor-pointer items-center justify-center rounded-md border border-border bg-surface text-text-muted transition-colors hover:border-border-strong hover:text-text"
              aria-label="Close project details"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Visual Header / Switcher */}
            <div className="border-b border-border p-5 pr-14 sm:p-7 sm:pr-16">
              {hasMobilePreview && (
                <div className="mb-4 flex flex-wrap items-center gap-1.5 rounded-lg border border-border bg-surface-elevated/70 p-1 w-fit max-w-full">
                  <button
                    type="button"
                    onClick={() => setViewMode("schematic")}
                    className={`rounded-md px-2.5 sm:px-3 py-1.5 font-mono text-[11px] sm:text-xs transition-all cursor-pointer ${
                      viewMode === "schematic"
                        ? "bg-accent text-accent-ink font-medium shadow-xs"
                        : "text-text-secondary hover:text-text"
                    }`}
                  >
                    System Architecture
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewMode("mobile")}
                    className={`rounded-md px-2.5 sm:px-3 py-1.5 font-mono text-[11px] sm:text-xs transition-all cursor-pointer ${
                      viewMode === "mobile"
                        ? "bg-accent text-accent-ink font-medium shadow-xs"
                        : "text-text-secondary hover:text-text"
                    }`}
                  >
                    {project.id === "foodygo" ? "Customer App" : "App Interface"}
                  </button>
                  {project.id === "foodygo" && (
                    <button
                      type="button"
                      onClick={() => setViewMode("driver")}
                      className={`rounded-md px-2.5 sm:px-3 py-1.5 font-mono text-[11px] sm:text-xs transition-all cursor-pointer ${
                        viewMode === "driver"
                          ? "bg-accent text-accent-ink font-medium shadow-xs"
                          : "text-text-secondary hover:text-text"
                      }`}
                    >
                      Driver App
                    </button>
                  )}
                </div>
              )}

              {viewMode === "schematic" || !hasMobilePreview ? (
                <ProjectSchematic projectId={project.id} />
              ) : project.id === "foodygo" ? (
                viewMode === "driver" ? (
                  <FoodyGoDriverMobilePreview />
                ) : (
                  <FoodyGoMobilePreview />
                )
              ) : (
                <PlantDoctorMobilePreview />
              )}
            </div>

            <div className="p-5 sm:p-7">
              {/* Identity */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-[0.12em]">
                <span className={project.status === "Live Project" ? "text-accent" : "text-text-secondary"}>
                  {project.status}
                </span>
                <span aria-hidden className="text-border-strong">/</span>
                <span className="text-text-muted">{project.category}</span>
                <span aria-hidden className="text-border-strong">/</span>
                <span className="text-text-muted">{project.database}</span>
              </div>

              <h2
                id="project-modal-title"
                className="mt-3 break-words font-display text-2xl font-semibold tracking-tight text-text sm:text-3xl"
              >
                {project.title}
              </h2>
              <p className="mt-1.5 text-sm text-text-secondary">{project.tagline}</p>

              {/* Brief */}
              <div className="mt-7 grid gap-6 border-t border-border pt-6 sm:grid-cols-2">
                <div>
                  <MetaLabel>Problem</MetaLabel>
                  <p className="mt-2 break-words text-sm leading-relaxed text-text-secondary">
                    {project.problem}
                  </p>
                </div>
                <div>
                  <MetaLabel>Solution</MetaLabel>
                  <p className="mt-2 break-words text-sm leading-relaxed text-text-secondary">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Architecture */}
              <div className="mt-6 border-t border-border pt-6">
                <MetaLabel>Architecture</MetaLabel>
                <p className="mt-2 overflow-x-auto whitespace-nowrap rounded-md border border-border bg-surface-elevated px-3 py-2.5 font-mono text-xs text-text-secondary">
                  {project.architecture}
                </p>
              </div>

              {/* Portals */}
              {project.portals && project.portals.length > 0 && (
                <div className="mt-6 border-t border-border pt-6">
                  <MetaLabel>{project.portals.length} portals</MetaLabel>
                  <ul className="mt-3 divide-y divide-border/70">
                    {project.portals.map((portal) => (
                      <li key={portal} className="py-2 text-sm text-text-secondary">
                        {portal}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Challenges */}
              <div className="mt-6 border-t border-border pt-6">
                <MetaLabel>Engineering challenges</MetaLabel>
                <ul className="mt-3 space-y-2">
                  {project.challenges.map((challenge) => (
                    <li key={challenge} className="flex items-start gap-2.5 text-sm leading-relaxed text-text-secondary">
                      <span aria-hidden className="mt-[0.45rem] h-px w-3 shrink-0 bg-accent" />
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stack */}
              <div className="mt-6 border-t border-border pt-6">
                <MetaLabel>Stack</MetaLabel>
                <p className="mt-2.5 font-mono text-xs leading-loose tracking-wide text-text-secondary">
                  {project.technologies.join(" · ")}
                </p>
              </div>

              {/* Actions */}
              <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-border pt-6">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 font-mono text-xs font-medium uppercase tracking-[0.08em] text-accent-ink transition-colors hover:bg-accent/90 active:scale-[0.98]"
                  >
                    <img src={githubIcon} alt="" className="h-4 w-4 shrink-0" />
                    Repository
                  </a>
                )}
                {project.demoLinks && project.demoLinks.length > 0 ? (
                  project.demoLinks.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 font-mono text-xs uppercase tracking-[0.08em] text-text-secondary transition-colors hover:border-border-strong hover:text-text"
                    >
                      <ExternalLink className="h-3.5 w-3.5 text-accent" />
                      {link.label}
                    </a>
                  ))
                ) : project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 font-mono text-xs uppercase tracking-[0.08em] text-text-secondary transition-colors hover:border-border-strong hover:text-text"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    Live demo
                  </a>
                ) : null}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
