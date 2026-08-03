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
        <div className="text-terminal-muted space-y-1">
          <p className="text-accent font-bold">Dev Terminal CLI v2.4.0 [Mrutyunjaya Senapati]</p>
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
          <div className="space-y-1 text-terminal-text">
            <p className="text-amber-400 font-semibold">Available Commands:</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-terminal-muted">
              <div><span className="text-accent">skills</span> - Priority tech skills</div>
              <div><span className="text-accent">projects</span> - Active projects list</div>
              <div><span className="text-accent">experience</span> - Career timeline</div>
              <div><span className="text-accent">contact</span> - Contact channels</div>
              <div><span className="text-accent">about</span> - Software engineer bio</div>
              <div><span className="text-accent">clear</span> - Clear terminal window</div>
            </div>
          </div>
        );
        break;

      case "skills":
        output = (
          <div className="space-y-2 text-terminal-text">
            {skills.map((s) => (
              <div key={s.category} className="space-y-0.5">
                <div className="text-accent font-bold">{s.category} [{s.badge}]:</div>
                <div className="text-terminal-muted">{s.items.join(", ")}</div>
              </div>
            ))}
          </div>
        );
        break;

      case "projects":
        output = (
          <div className="space-y-2 text-terminal-text">
            <p className="text-amber-400 font-semibold">Featured Projects:</p>
            {projects.map((p) => (
              <div key={p.id} className="p-2 rounded bg-terminal-raised border border-terminal-border space-y-0.5">
                <div className="text-emerald-400 font-bold">{p.title} ({p.status})</div>
                <div className="text-terminal-muted">{p.tagline}</div>
                <div className="text-primary-light text-[10px]">Stack: {p.technologies.join(", ")}</div>
              </div>
            ))}
          </div>
        );
        break;

      case "experience":
        output = (
          <div className="space-y-2 text-terminal-text">
            {experience.map((exp) => (
              <div key={exp.company} className="space-y-0.5">
                <div className="text-primary-light font-bold">{exp.role} @ {exp.company} ({exp.year})</div>
                <div className="text-terminal-muted">{exp.description}</div>
              </div>
            ))}
          </div>
        );
        break;

      case "contact":
        output = (
          <div className="space-y-1 text-terminal-text">
            <div>Email: <span className="text-accent">{personal.email}</span></div>
            <div>GitHub: <span className="text-accent">{personal.github}</span></div>
            <div>LinkedIn: <span className="text-accent">{personal.linkedin}</span></div>
          </div>
        );
        break;

      case "about":
        output = (
          <div className="text-terminal-text leading-relaxed">
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
          <div className="text-error">
            Command not recognized: &quot;{cmd}&quot;. Type <span className="text-amber-400">help</span> for command list.
          </div>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: input, output }]);
    setInput("");
  };

  return (
    <div className="w-full rounded-2xl bg-terminal border border-terminal-border p-4 font-mono text-xs shadow-2xl text-left space-y-3">
      {/* Terminal Bar Header */}
      <div className="flex items-center justify-between border-b border-terminal-border pb-2 text-[11px] text-terminal-muted">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
          <span className="ml-2 font-semibold text-terminal-text">mrutyunjaya@dev-terminal:~</span>
        </div>
        <span className="text-terminal-muted">zsh</span>
      </div>

      {/* Output Stream */}
      <div
        ref={outputContainerRef}
        role="log"
        aria-label="Terminal output"
        className="space-y-3 max-h-60 overflow-y-auto pr-1"
      >
        {history.map((entry, index) => (
          <div key={index} className="space-y-1">
            {entry.command !== "welcome" && (
              <div className="flex items-center gap-2 text-accent font-semibold">
                <span>➜</span>
                <span>~</span>
                <span className="text-terminal-text">{entry.command}</span>
              </div>
            )}
            <div>{entry.output}</div>
          </div>
        ))}
      </div>

      {/* Input Form */}
      <form onSubmit={handleCommand} className="flex items-center gap-2 pt-2 border-t border-terminal-border">
        <span className="text-emerald-400 font-bold">➜</span>
        <span className="text-accent">~</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type 'help' or 'skills'..."
          aria-label="Terminal command input"
          className="flex-1 bg-transparent text-terminal-text focus:outline-none placeholder-terminal-muted/50 font-mono text-xs"
        />
        <button type="submit" className="text-[10px] text-terminal-muted hover:text-terminal-text">
          [Press Enter]
        </button>
      </form>
    </div>
  );
}
