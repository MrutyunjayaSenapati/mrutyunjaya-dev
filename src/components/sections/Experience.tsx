import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import TechPill from "../ui/TechPill";
import { experience } from "../../data/portfolio";
import AnimatedSection from "../animations/AnimatedSection";
import StaggerContainer, { StaggerItem } from "../animations/StaggerContainer";

export default function Experience() {
  return (
    <Container id="experience">
      <AnimatedSection>
        <SectionHeader
          label="Experience"
          title="Timeline of building and shipping"
          description="From graduate to software engineer — every phase shaped my approach to building software."
        />
      </AnimatedSection>

      <div className="mt-12 relative">
        <div className="absolute left-[23px] top-0 bottom-0 w-px bg-border hidden md:block" />

        <StaggerContainer stagger={0.15}>
          {experience.map((exp) => (
            <StaggerItem key={`${exp.year}-${exp.company}`}>
              <div className="relative pl-0 md:pl-16 pb-12 last:pb-0">
                <div className="hidden md:flex absolute left-[15px] top-1 w-[17px] h-[17px] rounded-full bg-bg border-2 border-primary" />

                <div className="rounded-2xl border border-border bg-surface p-6 md:p-8 transition-colors hover:bg-surface-elevated">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold">{exp.role}</h3>
                      {exp.company && (
                        <p className="text-sm text-primary-light">{exp.company}</p>
                      )}
                    </div>
                    <span className="text-xs font-mono text-text-muted">{exp.year}</span>
                  </div>
                  <p className="text-text-secondary leading-relaxed text-sm">
                    {exp.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <TechPill key={tag} label={tag} variant="small" />
                    ))}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </Container>
  );
}
