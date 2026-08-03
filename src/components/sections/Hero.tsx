import { motion } from "framer-motion";
import { ArrowRight, Terminal, FileText, ExternalLink } from "lucide-react";
import GradientText from "../ui/GradientText";
import TechConstellationCanvas from "../ui/TechConstellationCanvas";
import { techStack, personal } from "../../data/portfolio";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16"
    >
      <div className="mx-auto max-w-6xl px-4 w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Hero Content */}
          <motion.div
            className="lg:col-span-7 text-left space-y-6"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-border glass-panel px-4 py-1.5 text-xs font-mono text-text-secondary">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Mobile App Specialist • React Native & Full-Stack</span>
            </div>

            {/* Space Grotesk Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.04] text-text font-display">
              <GradientText>Mobile & Full-Stack</GradientText> <br />
              Software Engineer.
            </h1>

            {/* Editorial Subtitle */}
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-lg">
              Specializing in <strong className="text-text">React Native & Expo</strong> mobile apps, <strong className="text-text">PostgreSQL & MERN</strong> platforms, and <strong className="text-text">Python FastAPI</strong> services.
            </p>

            {/* Tech Stack Micro-Borders in Priority Order */}
            <div className="space-y-2">
              <div className="text-[11px] font-mono text-text-muted uppercase tracking-wider">
                Core Technologies:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg bg-surface-elevated border border-border text-xs font-mono text-text-secondary hover:text-text hover:border-primary/40 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-primary hover:bg-primary-light px-6 py-3 text-xs sm:text-sm font-semibold text-white transition-all shadow-lg active:scale-95 font-display"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#skills"
                className="inline-flex items-center gap-2 rounded-full border border-border glass-panel px-6 py-3 text-xs sm:text-sm font-medium text-text-secondary hover:text-text hover:bg-surface-elevated transition-colors font-display"
              >
                <Terminal className="w-4 h-4 text-emerald-400" />
                Interactive CLI Terminal
              </a>
              <a
                href={personal.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-text-muted hover:text-text transition-colors underline underline-offset-4 font-mono"
              >
                <FileText className="w-3.5 h-3.5" />
                Resume PDF
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </motion.div>

          {/* Right Cursor-Reactive Tech Constellation Particle Canvas */}
          <motion.div
            className="lg:col-span-5 flex justify-center w-full"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TechConstellationCanvas />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
