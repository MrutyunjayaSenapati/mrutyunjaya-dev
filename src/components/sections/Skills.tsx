import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import TechPill from "../ui/TechPill";
import { skills } from "../../data/portfolio";
import AnimatedSection from "../animations/AnimatedSection";
import StaggerContainer, { StaggerItem } from "../animations/StaggerContainer";

export default function Skills() {
  return (
    <Container id="skills">
      <AnimatedSection>
        <SectionHeader
          label="Skills"
          title="Expertise across the stack"
          description="Four pillars of my engineering capability — from mobile screens to cloud servers."
        />
      </AnimatedSection>

      <StaggerContainer
        className="mt-12 grid sm:grid-cols-2 gap-4"
        stagger={0.1}
      >
        {skills.map((skill) => (
          <StaggerItem key={skill.category}>
            <div className="rounded-2xl border border-border bg-surface p-6 transition-all hover:bg-surface-elevated hover:border-primary/20 group">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{skill.icon}</span>
                <div>
                  <h3 className="font-semibold">{skill.category}</h3>
                  <p className="text-xs text-text-secondary mt-0.5">
                    {skill.description}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <TechPill key={item} label={item} />
                ))}
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Container>
  );
}
