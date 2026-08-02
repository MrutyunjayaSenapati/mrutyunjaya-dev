import { useState } from "react";
import { motion } from "framer-motion";
import { Smartphone, Globe, Code2, Cloud } from "lucide-react";
import { cloudDevOpsSteps } from "../../data/portfolio";

const LayerIcon = ({ iconKey }: { iconKey: string }) => {
  switch (iconKey) {
    case "Smartphone":
      return <Smartphone className="w-5 h-5 text-indigo-400" />;
    case "Globe":
      return <Globe className="w-5 h-5 text-purple-400" />;
    case "Code2":
      return <Code2 className="w-5 h-5 text-cyan-400" />;
    case "Cloud":
      return <Cloud className="w-5 h-5 text-amber-400" />;
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
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-medium">
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
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                onClick={() => setActiveStep(idx)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer ${
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
              </motion.div>
            ))}
          </div>

          {/* Right Selected Layer Spec Box */}
          <div className="lg:col-span-6 sticky top-28">
            <div className="rounded-3xl border border-border bg-slate-950 p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center">
                    <LayerIcon iconKey={cloudDevOpsSteps[activeStep].iconKey} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">
                      {cloudDevOpsSteps[activeStep].title}
                    </h4>
                    <span className="text-xs font-mono text-cyan-400">
                      Layer Specifications & Stack
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400">
                  {cloudDevOpsSteps[activeStep].step}
                </span>
              </div>

              <div className="space-y-2 text-left">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Active Layer Responsibilities:
                </div>
                <p className="text-xs text-slate-300 leading-relaxed bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                  {cloudDevOpsSteps[activeStep].description}
                </p>
              </div>

              <div className="space-y-2 text-left">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Technologies Employed:
                </div>
                <div className="flex flex-wrap gap-2">
                  {cloudDevOpsSteps[activeStep].technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-indigo-950/60 border border-indigo-500/30 text-xs font-mono text-indigo-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Data Pipeline Node Connection Indicator */}
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
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
