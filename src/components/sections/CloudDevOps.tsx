import { useState } from "react";
import { motion } from "framer-motion";
import { Smartphone, Globe, Code2, Cloud } from "lucide-react";
import { cloudDevOpsSteps } from "../../data/portfolio";

const LayerIcon = ({ iconKey }: { iconKey: string }) => {
  switch (iconKey) {
    case "Smartphone":
      return <Smartphone className="w-5 h-5 text-primary-light" />;
    case "Globe":
      return <Globe className="w-5 h-5 text-primary-light" />;
    case "Code2":
      return <Code2 className="w-5 h-5 text-primary-light" />;
    case "Cloud":
      return <Cloud className="w-5 h-5 text-primary-light" />;
    default:
      return <Code2 className="w-5 h-5 text-primary-light" />;
  }
};

export default function CloudDevOps() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="cloud-devops" className="py-20 relative bg-surface/30 border-y border-border">
      <div className="max-w-6xl mx-auto px-4 text-left">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary-light font-medium">
            System Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text">
            End-to-End Architecture Flow Visualizer
          </h2>
          <p className="text-sm text-text-secondary max-w-xl">
            Interactive breakdown showing data flow from mobile apps to PostgreSQL microservices and cloud infrastructure.
          </p>
        </div>

        {/* 4-Layer Interactive Step Flow */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Flow Selector Steps */}
          <div className="lg:col-span-6 space-y-3">
            {cloudDevOpsSteps.map((step, idx) => (
              <motion.button
                key={step.step}
                type="button"
                onClick={() => setActiveStep(idx)}
                aria-pressed={activeStep === idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className={`w-full text-left p-5 rounded-2xl border transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 ${
                  activeStep === idx
                    ? "border-primary bg-surface-elevated shadow-xl scale-[1.02]"
                    : "border-border bg-surface hover:bg-surface-elevated/50"
                }`}
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <LayerIcon iconKey={step.iconKey} />
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-semibold text-primary-light">
                        Layer 0{idx + 1}
                      </span>
                      <span className="text-[10px] font-mono text-text-muted">
                        {step.step}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-text">
                      {step.title}
                    </h3>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Right Selected Layer Spec Box */}
          <div className="lg:col-span-6 sticky top-28">
            <div className="rounded-3xl border border-border bg-terminal p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between border-b border-terminal-border pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-terminal-raised border border-terminal-border flex items-center justify-center">
                    <LayerIcon iconKey={cloudDevOpsSteps[activeStep].iconKey} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-terminal-text">
                      {cloudDevOpsSteps[activeStep].title}
                    </h4>
                    <span className="text-xs font-mono text-accent">
                      Layer Specifications & Stack
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-terminal-raised border border-terminal-border text-terminal-muted">
                  {cloudDevOpsSteps[activeStep].step}
                </span>
              </div>

              <div className="space-y-2 text-left">
                <div className="text-xs font-mono text-terminal-muted uppercase tracking-wider">
                  Active Layer Responsibilities:
                </div>
                <p className="text-xs text-terminal-text leading-relaxed bg-terminal-raised/80 p-3 rounded-xl border border-terminal-border">
                  {cloudDevOpsSteps[activeStep].description}
                </p>
              </div>

              <div className="space-y-2 text-left">
                <div className="text-xs font-mono text-terminal-muted uppercase tracking-wider">
                  Technologies Employed:
                </div>
                <div className="flex flex-wrap gap-2">
                  {cloudDevOpsSteps[activeStep].technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-primary/15 border border-primary/30 text-xs font-mono text-primary-light"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Data Pipeline Node Connection Indicator */}
              <div className="p-3 rounded-xl bg-terminal-raised border border-terminal-border flex items-center justify-between text-[11px] font-mono text-terminal-muted">
                <span>Pipeline Data Flow:</span>
                <span className="text-emerald-400 font-bold">
                  {activeStep === 0 && "Mobile App -> API Gateway"}
                  {activeStep === 1 && "API Gateway -> PostgreSQL Schema"}
                  {activeStep === 2 && "PostgreSQL -> FastAPI Inference"}
                  {activeStep === 3 && "Docker -> AWS EC2 Cloud Clusters"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
