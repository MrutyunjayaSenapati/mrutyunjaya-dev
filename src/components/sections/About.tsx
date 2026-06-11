import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import AnimatedSection from "../animations/AnimatedSection";
import StaggerContainer, { StaggerItem } from "../animations/StaggerContainer";
import { education } from "../../data/portfolio";

const focusAreas = [
  { label: "Mobile Engineering", desc: "Building cross-platform React Native applications with native performance and delightful UX." },
  { label: "Full-Stack Development", desc: "Crafting end-to-end solutions from database schema to responsive UI." },
  { label: "System Thinking", desc: "Designing scalable architectures with clean separation of concerns." },
  { label: "Cloud Architecture", desc: "Deploying and managing infrastructure on AWS with DevOps best practices." },
];

export default function About() {
  return (
    <Container id="about">
      <AnimatedSection>
        <SectionHeader
          label="About"
          title="Engineering experiences that span the full stack"
          description="From my first React Native app to architecting cloud infrastructure — here's my journey."
        />
      </AnimatedSection>

      <div className="mt-12 grid lg:grid-cols-5 gap-8">
        <AnimatedSection className="lg:col-span-3" delay={0.1}>
          <div className="rounded-2xl border border-border bg-surface p-6 md:p-8">
            <p className="text-text-secondary leading-relaxed">
              My journey began with{" "}
              <span className="text-text font-medium">React Native</span> — I was drawn to the idea of building applications that work across platforms with a single codebase. What started as curiosity quickly became a deep focus on mobile engineering.
            </p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              As I built more apps, I realized great mobile experiences need equally great backends. This pushed me into{" "}
              <span className="text-text font-medium">full-stack development</span> — designing APIs, managing databases, and implementing authentication systems that scale.
            </p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Today, I focus on the entire spectrum: from pixel-perfect React Native interfaces to scalable cloud infrastructure on AWS. I believe in{" "}
              <span className="text-text font-medium">system thinking</span> — understanding how every piece connects from the mobile client all the way to the cloud.
            </p>
            <div className="mt-6 pt-4 border-t border-border">
              <p className="text-xs text-text-muted uppercase tracking-wider font-medium mb-2">Education</p>
              {education.map((edu) => (
                <p key={edu.degree} className="text-sm text-text-secondary">
                  <span className="text-text font-medium">{edu.degree}</span> — {edu.institution} ({edu.year})
                </p>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="lg:col-span-2" delay={0.2}>
          <div className="rounded-2xl border border-border bg-surface p-5">
            <p className="text-sm font-medium text-text mb-3">Focus Areas</p>
            <StaggerContainer stagger={0.08}>
              {focusAreas.map((area) => (
                <StaggerItem key={area.label}>
                  <div className="py-2 border-b border-border last:border-0">
                    <p className="text-sm font-medium text-text">{area.label}</p>
                    <p className="text-xs text-text-secondary mt-0.5">{area.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </AnimatedSection>
      </div>
    </Container>
  );
}
