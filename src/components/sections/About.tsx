import { motion } from "framer-motion";
import { Smartphone, Globe, Code2, Cloud, Download } from "lucide-react";
import { personal } from "../../data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 text-left">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Left Bio Highlights */}
          <motion.div
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary-light font-medium">
              Background & Principles
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] text-text">
              Engineering Mobile & Full-Stack Systems
            </h2>

            <div className="space-y-4 text-sm text-text-secondary leading-relaxed">
              <p>
                Software Engineer specializing in cross-platform <strong className="text-text">React Native & Expo</strong> mobile applications, <strong className="text-text">PostgreSQL & MERN</strong> full-stack portals, and high-performance <strong className="text-text">FastAPI Python</strong> microservices.
              </p>
            </div>

            {/* Engineering Pillars */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-surface border border-border space-y-1 glow-card">
                <div className="text-sm font-bold text-text flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-indigo-400" />
                  <span>Mobile Applications</span>
                </div>
                <p className="text-xs text-text-muted">
                  React Native & Expo with SQLite offline storage and push notifications.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-surface border border-border space-y-1 glow-card">
                <div className="text-sm font-bold text-text flex items-center gap-2">
                  <Globe className="w-4 h-4 text-purple-400" />
                  <span>Full-Stack Monorepos</span>
                </div>
                <p className="text-xs text-text-muted">
                  PostgreSQL, Express, Next.js, and Node.js multi-portal systems.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-surface border border-border space-y-1 glow-card">
                <div className="text-sm font-bold text-text flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-cyan-400" />
                  <span>Python & AI Services</span>
                </div>
                <p className="text-xs text-text-muted">
                  FastAPI microservices, PyTorch inference, and Gemini LLM RAG.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-surface border border-border space-y-1 glow-card">
                <div className="text-sm font-bold text-text flex items-center gap-2">
                  <Cloud className="w-4 h-4 text-amber-400" />
                  <span>Cloud Infrastructure</span>
                </div>
                <p className="text-xs text-text-muted">
                  AWS deployment, Docker containerization, and GitHub Actions CI/CD.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Profile Info Card */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="rounded-3xl border border-border glass-panel p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
              <div className="flex items-center gap-4 border-b border-border pb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/20 border border-primary/40 flex items-center justify-center font-mono font-bold text-primary text-xl">
                  MS
                </div>
                <div>
                  <h3 className="text-lg font-bold text-text">{personal.name}</h3>
                  <p className="text-xs font-mono text-primary-light">{personal.title}</p>
                </div>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-1 border-b border-border/60">
                  <span className="text-text-muted">Location</span>
                  <span className="font-semibold text-text">{personal.location}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-border/60">
                  <span className="text-text-muted">Primary Focus</span>
                  <span className="font-semibold text-primary-light">React Native & Expo</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-text-muted">Database</span>
                  <span className="font-semibold text-cyan-400">PostgreSQL</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={personal.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full text-center rounded-xl bg-primary hover:bg-primary-light py-3 text-xs font-semibold text-white transition-all shadow-md active:scale-95"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download Resume PDF
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
