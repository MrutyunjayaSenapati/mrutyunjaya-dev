import { useState } from "react";
import { motion } from "framer-motion";
import { projects, type Project } from "../../data/portfolio";
import ProjectModal from "../ui/ProjectModal";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ["All", "Mobile Apps & AI", "Full-Stack Monorepos", "MERN Stack"];

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 text-left">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div className="space-y-2">
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary-light font-medium">
              Featured Software Engineering Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text">
              Projects & Production Systems
            </h2>
            <p className="text-sm text-text-secondary max-w-xl">
              Showcasing mobile applications, multi-portal monorepos with PostgreSQL, and real-time backend microservices.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-2xl bg-surface-elevated border border-border">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-primary text-white shadow-md"
                    : "text-text-muted hover:text-text"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="rounded-3xl border border-border bg-surface p-6 flex flex-col justify-between glow-card relative overflow-hidden group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Card Header & Status */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-primary/15 text-primary-light border border-primary/20 font-medium">
                    {project.category}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 font-medium">
                    {project.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-text group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-medium text-text-secondary">
                  {project.tagline}
                </p>
                <p className="text-xs text-text-muted line-clamp-3 leading-relaxed">
                  {project.problem}
                </p>

                {/* Portals Preview Pill (FoodyGo Special) */}
                {project.portals && (
                  <div className="p-2.5 rounded-xl bg-slate-900/80 border border-amber-500/30 text-[10px] space-y-1">
                    <span className="font-bold text-amber-400">4 Portals (PostgreSQL):</span>
                    <div className="text-slate-400">Customer App • Partner App • Admin Web • Restaurant Web</div>
                  </div>
                )}
              </div>

              {/* Card Footer Tech Stack & Details CTA */}
              <div className="mt-6 pt-4 border-t border-border space-y-3">
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md bg-surface-elevated text-[10px] font-mono text-text-muted border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-0.5 rounded-md bg-surface-elevated text-[10px] font-mono text-text-muted">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between text-xs text-primary-light font-medium pt-1">
                  <span>Architecture Deep Dive ➔</span>
                  <span className="text-[10px] text-text-muted">Click for Specs</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Architectural Modal Overlay */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
