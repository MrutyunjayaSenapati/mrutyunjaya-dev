import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function DeviceSimulator() {
  const [activeTab, setActiveTab] = useState<"mobile" | "cloud">("mobile");
  const [selectedApp, setSelectedApp] = useState<"plant" | "foodygo">("plant");

  return (
    <div className="w-full max-w-md mx-auto rounded-3xl border border-border glass-panel p-4 shadow-2xl relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-500/20 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-cyan-500/20 rounded-full blur-2xl pointer-events-none" />

      {/* Mode Selector Header */}
      <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-border">
        <div className="flex items-center gap-1.5 bg-surface-elevated p-1 rounded-xl border border-border">
          <button
            onClick={() => setActiveTab("mobile")}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
              activeTab === "mobile"
                ? "bg-primary text-white shadow-md"
                : "text-text-muted hover:text-text"
            }`}
          >
            <span>📱</span> Mobile Stage
          </button>
          <button
            onClick={() => setActiveTab("cloud")}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
              activeTab === "cloud"
                ? "bg-primary text-white shadow-md"
                : "text-text-muted hover:text-text"
            }`}
          >
            <span>☁️</span> Cloud Console
          </button>
        </div>

        <div className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
          <span className="text-[11px] font-mono text-text-muted">Live 60 FPS</span>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === "mobile" ? (
          <motion.div
            key="mobile-stage"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center"
          >
            {/* Mobile App Selector */}
            <div className="w-full flex items-center justify-center gap-2 mb-3">
              <button
                onClick={() => setSelectedApp("plant")}
                className={`text-xs px-2.5 py-1 rounded-md border transition-all ${
                  selectedApp === "plant"
                    ? "border-emerald-500/50 bg-emerald-500/10 text-emerald-400 font-medium"
                    : "border-border text-text-muted hover:text-text"
                }`}
              >
                🌿 PlantDoctor AI
              </button>
              <button
                onClick={() => setSelectedApp("foodygo")}
                className={`text-xs px-2.5 py-1 rounded-md border transition-all ${
                  selectedApp === "foodygo"
                    ? "border-amber-500/50 bg-amber-500/10 text-amber-400 font-medium"
                    : "border-border text-text-muted hover:text-text"
                }`}
              >
                🍕 FoodyGo (4 Portals)
              </button>
            </div>

            {/* Mobile Device Mockup Container */}
            <div className="w-[260px] h-[480px] bg-slate-950 rounded-[36px] border-[6px] border-slate-800 p-3 shadow-2xl relative flex flex-col justify-between overflow-hidden">
              {/* Notch / Dynamic Island */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-4 bg-slate-900 rounded-full z-20 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-950 ml-auto mr-2" />
              </div>

              {/* Status Bar */}
              <div className="flex justify-between items-center text-[10px] text-slate-400 pt-1.5 px-2 z-10 font-mono">
                <span>9:41</span>
                <div className="flex items-center gap-1">
                  <span>5G</span>
                  <span>100%</span>
                </div>
              </div>

              {/* App Screen Content */}
              <div className="flex-1 my-2 rounded-2xl bg-surface-elevated border border-border/50 p-3 flex flex-col justify-between overflow-hidden relative">
                {selectedApp === "plant" ? (
                  <div className="space-y-2.5 text-left">
                    <div className="flex items-center justify-between border-b border-border/60 pb-2">
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm">🌿</span>
                        <span className="text-xs font-bold text-text">PlantDoctor AI</span>
                      </div>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">
                        FastAPI + PyTorch
                      </span>
                    </div>

                    <div className="rounded-xl bg-slate-900/80 border border-emerald-500/30 p-2.5 space-y-1.5">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-text-secondary">Diagnosis Engine</span>
                        <span className="text-emerald-400 font-mono font-medium">98.4% Match</span>
                      </div>
                      <div className="text-[10px] text-text-muted">
                        Leaf Analysis: Early Blight Detected
                      </div>
                      <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full w-[94%]" />
                      </div>
                    </div>

                    <div className="rounded-xl bg-slate-900/60 border border-border p-2 space-y-1">
                      <div className="text-[10px] font-medium text-indigo-400">Gemini LLM Care Workflow</div>
                      <div className="text-[9px] text-text-muted leading-tight">
                        • Apply organic copper fungicide spray<br />
                        • Adjust drip irrigation frequency
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 justify-center py-1 bg-emerald-600/20 rounded-lg text-emerald-300 text-[10px] font-medium">
                      <span>📸</span> Camera Scanning Active
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2.5 text-left">
                    <div className="flex items-center justify-between border-b border-border/60 pb-2">
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm">🍕</span>
                        <span className="text-xs font-bold text-text">FoodyGo Ecosystem</span>
                      </div>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono">
                        PostgreSQL
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-1.5 text-[9px]">
                      <div className="p-1.5 rounded-lg bg-slate-900 border border-amber-500/30">
                        <div className="text-amber-400 font-medium">📱 Customer App</div>
                        <div className="text-text-muted">Live Tracking</div>
                      </div>
                      <div className="p-1.5 rounded-lg bg-slate-900 border border-indigo-500/30">
                        <div className="text-indigo-400 font-medium">🚚 Partner App</div>
                        <div className="text-text-muted">Driver Route</div>
                      </div>
                      <div className="p-1.5 rounded-lg bg-slate-900 border border-cyan-500/30">
                        <div className="text-cyan-400 font-medium">🛠️ Admin Web</div>
                        <div className="text-text-muted">Platform Analytics</div>
                      </div>
                      <div className="p-1.5 rounded-lg bg-slate-900 border border-purple-500/30">
                        <div className="text-purple-400 font-medium">🏪 Restaurant Web</div>
                        <div className="text-text-muted">Menu Control</div>
                      </div>
                    </div>

                    <div className="p-2 rounded-xl bg-slate-900 border border-border text-[9px] text-text-muted">
                      <span className="text-amber-300 font-medium">Turborepo Monorepo:</span> Shared UI & PostgreSQL relational schema.
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Home Indicator */}
              <div className="w-24 h-1 bg-slate-700 rounded-full mx-auto" />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="cloud-stage"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.3 }}
            className="w-full bg-slate-950 rounded-2xl border border-border p-4 font-mono text-xs text-left space-y-3"
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-[11px] text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                <span className="ml-2 font-semibold text-slate-200">AWS Infrastructure Health</span>
              </div>
              <span className="text-cyan-400">us-east-1</span>
            </div>

            <div className="space-y-1.5 text-[11px]">
              <div className="text-emerald-400">➜ postgresql_pool: CONNECTED (Pool Size: 20)</div>
              <div className="text-indigo-400">➜ fastapi_service: RUNNING (Uvicorn / Python 3.12)</div>
              <div className="text-cyan-400">➜ express_gateway: ONLINE (Node.js v22)</div>
              <div className="text-amber-400">➜ docker_containers: 4 Active Services</div>
            </div>

            <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1 text-[10px]">
              <div className="flex justify-between text-slate-300">
                <span>API Response Time</span>
                <span className="text-emerald-400 font-bold">38 ms</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Memory Allocation</span>
                <span className="text-cyan-400 font-bold">142 MB / 512 MB</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Type Safety Check</span>
                <span className="text-indigo-400 font-bold">100% Passed</span>
              </div>
            </div>

            <div className="text-[10px] text-slate-500 text-center pt-1 border-t border-slate-900">
              Monitored via CloudWatch & Docker Health Checks
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
