import { motion } from "framer-motion";
import GradientText from "../ui/GradientText";
import TechPill from "../ui/TechPill";
import { techPipeline, techStack, personal } from "../../data/portfolio";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-48 -left-48 w-[600px] h-[600px] rounded-full bg-indigo-500/20 blur-3xl animate-gradient-shift" />
        <div className="absolute top-20 -right-48 w-[500px] h-[500px] rounded-full bg-cyan-400/15 blur-3xl animate-gradient-shift" style={{ animationDelay: "-7s" }} />
        <div className="absolute -bottom-48 left-1/4 w-[500px] h-[500px] rounded-full bg-fuchsia-500/10 blur-3xl animate-gradient-shift" style={{ animationDelay: "-14s" }} />
      </div>

      <div className="mx-auto max-w-6xl px-4 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-text-secondary">
              <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse-glow" />
              Building the future, one commit at a time
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
              Building applications from <br />
              <GradientText>mobile client</GradientText>
              {" "}to <br />
              <GradientText>cloud infrastructure</GradientText>
              .
            </h1>

            <p className="mt-5 text-lg text-text-secondary leading-relaxed max-w-xl">
              Software Engineer specializing in{" "}
              <span className="text-text font-medium">React Native</span>,{" "}
              <span className="text-text font-medium">Full-Stack JavaScript</span>, and
              cloud-native architecture. I build products that span the entire stack.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <TechPill key={tech} label={tech} />
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-white hover:opacity-90 transition-all active:scale-[0.98]"
              >
                View Projects
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a
                href="#contact"
                className="rounded-full border border-border bg-surface px-6 py-3 text-sm font-medium text-text-secondary hover:text-text hover:bg-surface-elevated transition-colors"
              >
                Contact Me
              </a>
              <a
                href={personal.resume}
                className="rounded-full px-6 py-3 text-sm font-medium text-text-muted hover:text-text transition-colors underline underline-offset-4"
              >
                Download Resume
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="rounded-2xl border border-border bg-surface p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-sm font-semibold">Tech Pipeline</h3>
                <span className="text-xs text-text-muted">Full Stack → Cloud</span>
              </div>

              <div className="space-y-4">
                {techPipeline.map((item, i) => (
                  <motion.div
                    key={item.layer}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-surface-elevated border border-border shrink-0">
                        <span className="text-lg">{item.icon}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">{item.layer}</span>
                          <span className="text-xs font-mono text-primary-light">{item.tech}</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-surface-elevated overflow-hidden">
                          <motion.div
                            className="h-full rounded-full bg-gradient-to-r"
                            style={{ backgroundImage: `linear-gradient(to right, var(--color-primary), var(--color-accent))` }}
                            initial={{ width: 0 }}
                            animate={{ width: `${100 - i * 15}%` }}
                            transition={{ delay: 0.6 + i * 0.1, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                          />
                        </div>
                      </div>
                    </div>
                    {i < techPipeline.length - 1 && (
                      <div className="ml-5 w-px h-4 bg-border mt-1" />
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-border">
                <p className="text-xs text-text-muted text-center">
                  Building across every layer from mobile client to cloud infrastructure
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
