import { useState, useRef, useEffect } from "react";
import { personal, skills, projects, experience } from "../../data/portfolio";

interface HistoryEntry {
  command: string;
  output: React.ReactNode;
}

export default function DevTerminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryEntry[]>([
    {
      command: "welcome",
      output: (
        <div className="text-slate-400 space-y-1">
          <p className="text-cyan-400 font-bold">Dev Terminal CLI v2.4.0 [Mrutyunjaya Senapati]</p>
          <p>Type <span className="text-amber-400">help</span> to view available terminal commands.</p>
        </div>
      ),
    },
  ]);

  const outputContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (outputContainerRef.current) {
      outputContainerRef.current.scrollTop = outputContainerRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let output: React.ReactNode;

    switch (cmd) {
      case "help":
        output = (
          <div className="space-y-1 text-slate-300">
            <p className="text-amber-400 font-semibold">Available Commands:</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-slate-400">
              <div><span className="text-cyan-400">skills</span> - Priority tech skills</div>
              <div><span className="text-cyan-400">projects</span> - Active projects list</div>
              <div><span className="text-cyan-400">experience</span> - Career timeline</div>
              <div><span className="text-cyan-400">contact</span> - Contact channels</div>
              <div><span className="text-cyan-400">about</span> - Software engineer bio</div>
              <div><span className="text-cyan-400">clear</span> - Clear terminal window</div>
            </div>
          </div>
        );
        break;

      case "skills":
        output = (
          <div className="space-y-2 text-slate-300">
            {skills.map((s) => (
              <div key={s.category} className="space-y-0.5">
                <div className="text-cyan-400 font-bold">{s.category} [{s.badge}]:</div>
                <div className="text-slate-400">{s.items.join(", ")}</div>
              </div>
            ))}
          </div>
        );
        break;

      case "projects":
        output = (
          <div className="space-y-2 text-slate-300">
            <p className="text-amber-400 font-semibold">Featured Projects:</p>
            {projects.map((p) => (
              <div key={p.id} className="p-2 rounded bg-slate-900 border border-slate-800 space-y-0.5">
                <div className="text-emerald-400 font-bold">{p.title} ({p.status})</div>
                <div className="text-slate-400">{p.tagline}</div>
                <div className="text-indigo-400 text-[10px]">Stack: {p.technologies.join(", ")}</div>
              </div>
            ))}
          </div>
        );
        break;

      case "experience":
        output = (
          <div className="space-y-2 text-slate-300">
            {experience.map((exp) => (
              <div key={exp.company} className="space-y-0.5">
                <div className="text-indigo-400 font-bold">{exp.role} @ {exp.company} ({exp.year})</div>
                <div className="text-slate-400">{exp.description}</div>
              </div>
            ))}
          </div>
        );
        break;

      case "contact":
        output = (
          <div className="space-y-1 text-slate-300">
            <div>Email: <span className="text-cyan-400">{personal.email}</span></div>
            <div>GitHub: <span className="text-cyan-400">{personal.github}</span></div>
            <div>LinkedIn: <span className="text-cyan-400">{personal.linkedin}</span></div>
          </div>
        );
        break;

      case "about":
        output = (
          <div className="text-slate-300 leading-relaxed">
            {personal.name} - {personal.title}. {personal.tagline}. Specializing in React Native mobile development, PostgreSQL & Node/Express full-stack platforms, and Python FastAPI microservices.
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      default:
        output = (
          <div className="text-rose-400">
            Command not recognized: &quot;{cmd}&quot;. Type <span className="text-amber-400">help</span> for command list.
          </div>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: input, output }]);
    setInput("");
  };

  return (
    <div className="w-full rounded-2xl bg-slate-950 border border-slate-800 p-4 font-mono text-xs shadow-2xl text-left space-y-3">
      {/* Terminal Bar Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-[11px] text-slate-400">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
          <span className="ml-2 font-semibold text-slate-300">mrutyunjaya@dev-terminal:~</span>
        </div>
        <span className="text-slate-500">zsh</span>
      </div>

      {/* Output Stream */}
      <div ref={outputContainerRef} className="space-y-3 max-h-60 overflow-y-auto pr-1">
        {history.map((entry, index) => (
          <div key={index} className="space-y-1">
            {entry.command !== "welcome" && (
              <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                <span>➜</span>
                <span>~</span>
                <span className="text-slate-200">{entry.command}</span>
              </div>
            )}
            <div>{entry.output}</div>
          </div>
        ))}
      </div>

      {/* Input Form */}
      <form onSubmit={handleCommand} className="flex items-center gap-2 pt-2 border-t border-slate-900">
        <span className="text-emerald-400 font-bold">➜</span>
        <span className="text-cyan-400">~</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type 'help' or 'skills'..."
          className="flex-1 bg-transparent text-slate-100 focus:outline-none placeholder-slate-600 font-mono text-xs"
        />
        <button type="submit" className="text-[10px] text-slate-500 hover:text-slate-300">
          [Press Enter]
        </button>
      </form>
    </div>
  );
}
