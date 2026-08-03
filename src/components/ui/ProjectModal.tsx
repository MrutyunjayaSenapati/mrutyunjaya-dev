import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, CheckCircle2 } from "lucide-react";
import githubIcon from "devicon/icons/github/github-original.svg";
import type { Project } from "../../data/portfolio";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

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
      const active = document.activeElement as HTMLElement | null;

      if (e.shiftKey && (active === first || !dialog.contains(active))) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && (active === last || !dialog.contains(active))) {
        e.preventDefault();
        first.focus();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog?.focus();
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocusedRef.current?.focus();
    };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            tabIndex={-1}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-2xl bg-surface border border-border rounded-3xl p-6 sm:p-8 shadow-2xl z-10 max-h-[85vh] overflow-y-auto text-left focus:outline-none"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-8 h-8 rounded-full border border-border bg-surface-elevated flex items-center justify-center text-text-muted hover:text-text hover:border-primary transition-colors cursor-pointer"
              aria-label="Close project modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header & Badges */}
            <div className="space-y-2 pr-8">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-primary/20 text-primary-light font-medium border border-primary/30">
                  {project.category}
                </span>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-medium border border-emerald-500/30 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  {project.status}
                </span>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-medium border border-cyan-500/30">
                  DB: {project.database}
                </span>
              </div>

              <h2 id="project-modal-title" className="text-2xl sm:text-3xl font-bold tracking-tight text-text break-words">
                {project.title}
              </h2>
              <p className="text-sm font-medium text-text-secondary">
                {project.tagline}
              </p>
            </div>

            {/* Portals Section (Special for FoodyGo) */}
            {project.portals && project.portals.length > 0 && (
              <div className="mt-6 p-4 rounded-2xl bg-surface-elevated border border-amber-500/30 space-y-2">
                <h3 className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                  Multi-Portal Architecture ({project.portals.length} Applications)
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-text-secondary">
                  {project.portals.map((portal, idx) => (
                    <div key={idx} className="p-2 rounded-xl bg-slate-900/60 border border-border/60">
                      {portal}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Problem & Solution */}
            <div className="mt-6 space-y-4">
              <div className="p-4 rounded-2xl bg-surface-elevated border border-border space-y-1">
                <h3 className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                  Problem Statement
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed break-words">
                  {project.problem}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-surface-elevated border border-border space-y-1">
                <h3 className="text-xs font-semibold text-primary-light uppercase tracking-wider">
                  Engineering Solution
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed break-words">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Architecture Diagram */}
            <div className="mt-6 p-4 rounded-2xl bg-slate-950 border border-border space-y-2">
              <h3 className="text-xs font-semibold text-cyan-400 uppercase tracking-wider font-mono">
                System Architecture Flow
              </h3>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-300 overflow-x-auto whitespace-nowrap">
                {project.architecture}
              </div>
            </div>

            {/* Key Engineering Challenges Solved */}
            <div className="mt-6 space-y-2">
              <h3 className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                Key Engineering Challenges Solved
              </h3>
              <ul className="space-y-1.5 text-xs text-text-secondary">
                {project.challenges.map((challenge, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary-light mt-0.5">•</span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies Stack */}
            <div className="mt-6 space-y-2">
              <h3 className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                Technologies & Libraries
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg bg-surface-elevated border border-border text-xs font-mono text-text-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Links */}
            <div className="mt-8 pt-4 border-t border-border flex flex-wrap items-center gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-xs font-medium text-white hover:opacity-90 transition-all active:scale-95"
                >
                  <img src={githubIcon} alt="" className="w-4 h-4 shrink-0 tech-icon-mono" />
                  View Repository
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface-elevated px-5 py-2.5 text-xs font-medium text-text hover:text-primary transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
