import { motion } from "framer-motion";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import TechPill from "../ui/TechPill";
import { cloudDevOpsSteps } from "../../data/portfolio";
import AnimatedSection from "../animations/AnimatedSection";

export default function CloudDevOps() {
  return (
    <Container id="cloud-devops">
      <AnimatedSection>
        <SectionHeader
          label="Cloud & DevOps"
          title="From local development to production infrastructure"
          description="My journey in learning how to build, deploy, and operate software at scale."
        />
      </AnimatedSection>

      <div className="mt-12 relative">
        <div className="hidden lg:block absolute left-0 right-0 top-[52px] h-px bg-border" />

        <div className="grid lg:grid-cols-5 gap-4">
          {cloudDevOpsSteps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative"
            >
              <div className="hidden lg:flex absolute left-1/2 -top-[36px] -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-2 border-bg z-10" />

              <div className="rounded-2xl border border-border bg-surface p-5 transition-all hover:bg-surface-elevated hover:border-primary/20 group">
                <span className="text-2xl block mb-3">{step.icon}</span>
                <h3 className="font-semibold text-sm mb-2">{step.step}</h3>
                <p className="text-xs text-text-secondary leading-relaxed mb-3">
                  {step.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {step.technologies.map((tech) => (
                    <TechPill key={tech} label={tech} variant="small" />
                  ))}
                </div>
              </div>

              {i < cloudDevOpsSteps.length - 1 && (
                <div className="hidden lg:flex absolute -right-3 top-[43px] text-text-muted">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 8H14M14 8L10 4M14 8L10 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </Container>
  );
}
