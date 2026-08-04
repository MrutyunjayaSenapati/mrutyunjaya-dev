import { motion } from "framer-motion";
import { ArrowRight, Terminal, FileText, ExternalLink, MapPin } from "lucide-react";
import GradientText from "../ui/GradientText";
import CloudBackground from "../ui/CloudBackground";
import FloatingTechIcons from "../ui/FloatingTechIcons";
import { techStack, personal } from "../../data/portfolio";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-20"
    >
      {/* Cloud Silhouette & Particle Atmosphere Background */}
      <CloudBackground />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Hero Profile & Headline Content */}
          <motion.div
            className="lg:col-span-6 text-left space-y-6 order-1 pr-0 lg:pr-4"
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Location & Status Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-md px-4 py-1.5 text-xs font-mono text-indigo-300">
              <MapPin className="w-3.5 h-3.5 text-rose-400" />
              <span>India</span>
              <span className="text-slate-600">•</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-slate-200">Hi, I'm Mrutyunjaya 👋</span>
            </div>

            {/* Space Grotesk Bold Uppercase Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] text-text font-display uppercase tracking-tight">
              <GradientText>MOBILE & FULL-STACK</GradientText> <br />
              SOFTWARE ENGINEER.
            </h1>

            {/* Subtitle */}
            <p className="text-base text-text-secondary leading-relaxed max-w-lg">
              Specializing in <strong className="text-text font-semibold">React Native & Expo</strong> mobile apps, <strong className="text-text font-semibold">PostgreSQL & MERN</strong> platforms, and <strong className="text-text font-semibold">Python FastAPI</strong> microservices.
            </p>

            {/* Core Technologies Micro Badges */}
            <div className="space-y-2">
              <div className="text-[11px] font-mono text-text-muted uppercase tracking-wider">
                Featured Tech Stack:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg bg-surface-elevated/80 border border-border text-xs font-mono text-text-secondary hover:text-text hover:border-primary/50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
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
                Interactive CLI
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

          {/* Right Column: Organic Floating Tech Icon Constellation */}
          <motion.div
            className="lg:col-span-6 flex justify-center w-full order-2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <FloatingTechIcons />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
