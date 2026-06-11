import { motion } from "framer-motion";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import Badge from "../ui/Badge";
import TechPill from "../ui/TechPill";
import { projects } from "../../data/portfolio";
import AnimatedSection from "../animations/AnimatedSection";
import StaggerContainer, { StaggerItem } from "../animations/StaggerContainer";
import { cn } from "../../lib/utils";

function ProjectCard({ project }: { project: typeof projects[number] }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={cn(
        "rounded-2xl border border-border bg-surface p-6 md:p-8 transition-colors hover:bg-surface-elevated",
        project.featured && "md:col-span-2"
      )}
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <Badge
              variant={project.status === "Live" ? "success" : project.status === "In Development" ? "warning" : "default"}
            >
              {project.status}
            </Badge>
          </div>
          <p className="text-text-secondary text-sm">{project.tagline}</p>
        </div>
      </div>

      <div className={cn("grid gap-6", project.featured ? "md:grid-cols-2" : "grid-cols-1")}>
        <div className="space-y-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-text-muted mb-1">Problem</p>
            <p className="text-sm text-text-secondary leading-relaxed">{project.problem}</p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-text-muted mb-1">Solution</p>
            <p className="text-sm text-text-secondary leading-relaxed">{project.solution}</p>
          </div>
        </div>

        <div className="space-y-4">
          {project.architecture && (
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-text-muted mb-1">Architecture</p>
              <p className="text-sm text-text-secondary leading-relaxed font-mono">{project.architecture}</p>
            </div>
          )}

          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-text-muted mb-2">Technologies</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <TechPill key={tech} label={tech} />
              ))}
            </div>
          </div>

          {project.challenges && (
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-text-muted mb-1">Challenges</p>
              <ul className="space-y-1">
                {project.challenges.map((c) => (
                  <li key={c} className="text-sm text-text-secondary flex items-start gap-2">
                    <span className="text-primary-light mt-1">•</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex items-center gap-3 pt-2">
            {project.github && project.github !== "#" && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-text-secondary hover:text-text hover:bg-surface-elevated transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                Source Code
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-white hover:opacity-90 transition-all"
              >
                Live Demo
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            )}
            {project.demo && project.status === "Live" && (
              <p className="text-xs text-text-muted">Hosted on Render (may cold-start ~30s)</p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [featured, ...rest] = projects;

  return (
    <Container id="projects">
      <AnimatedSection>
        <SectionHeader
          label="Projects"
          title="Featured work"
          description="Real applications I've built — from concept to deployment."
        />
      </AnimatedSection>

      <div className="mt-12 space-y-6">
        <AnimatedSection delay={0.1}>
          <ProjectCard project={featured} />
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-3 gap-4" stagger={0.1}>
          {rest.map((project) => (
            <StaggerItem key={project.title}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </Container>
  );
}
