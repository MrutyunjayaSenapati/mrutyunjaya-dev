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
        <div className="space-y-1 text-text-muted">
          <p className="font-medium text-accent">dev-terminal — {personal.name}</p>
          <p>
            Type <span className="text-text">help</span> to list commands.
          </p>
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
          <div className="space-y-1 text-text-secondary">
            {["skills", "projects", "experience", "contact", "about", "clear"].map((c, i) => (
              <div key={c} className="flex gap-3">
                <span className="w-24 shrink-0 text-accent">{c}</span>
                <span className="text-text-muted">
                  {["priority skills", "active builds", "career timeline", "channels", "short bio", "clear window"][i]}
                </span>
              </div>
            ))}
          </div>
        );
        break;

      case "skills":
        output = (
          <div className="space-y-2 text-text-secondary">
            {skills.map((s) => (
              <div key={s.category} className="space-y-0.5">
                <div className="font-medium text-text">{s.category}</div>
                <div className="text-text-muted">{s.items.join(", ")}</div>
              </div>
            ))}
          </div>
        );
        break;

      case "projects":
        output = (
          <div className="space-y-2 text-text-secondary">
            {projects.map((p) => (
              <div key={p.id} className="space-y-0.5 border-l border-border-strong pl-2.5">
                <div className="font-medium text-accent">
                  {p.title} <span className="text-text-muted">({p.status})</span>
                </div>
                <div>{p.tagline}</div>
                <div className="text-[10px] text-text-muted">stack: {p.technologies.join(", ")}</div>
              </div>
            ))}
          </div>
        );
        break;

      case "experience":
        output = (
          <div className="space-y-2 text-text-secondary">
            {experience.map((exp) => (
              <div key={exp.company} className="space-y-0.5">
                <div className="font-medium text-text">
                  {exp.role} @ {exp.company}
                </div>
                <div className="text-text-muted">
                  {exp.year} — {exp.description}
                </div>
              </div>
            ))}
          </div>
        );
        break;

      case "contact":
        output = (
          <div className="space-y-1 text-text-secondary">
            <div>email: <span className="text-accent">{personal.email}</span></div>
            <div>github: <span className="text-accent">{personal.github.replace("https://", "")}</span></div>
            <div>linkedin: <span className="text-accent">{personal.linkedin.replace("https://www.", "")}</span></div>
          </div>
        );
        break;

      case "about":
        output = (
          <div className="leading-relaxed text-text-secondary">
            {personal.name} — {personal.title}. Building React Native apps and the
            full-stack systems behind them.
          </div>
        );
        break;

      case "sudo":
        output = <div className="text-danger">nice try.</div>;
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      default:
        output = (
          <div className="text-danger">
            command not found: &quot;{cmd}&quot; — try{" "}
            <span className="text-text">help</span>
          </div>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: input, output }]);
    setInput("");
  };

  return (
    <div className="w-full space-y-3 rounded-lg border border-border-strong bg-[#080807] p-4 font-mono text-xs shadow-[0_20px_50px_-24px_rgba(0,0,0,0.8)]">
      {/* Window chrome */}
      <div className="flex items-center justify-between border-b border-border pb-2.5 text-[11px] text-text-muted">
        <div className="flex items-center gap-1.5" aria-hidden>
          <span className="inline-block h-2 w-2 rounded-full bg-[#3a3a36]" />
          <span className="inline-block h-2 w-2 rounded-full bg-[#3a3a36]" />
          <span className="inline-block h-2 w-2 rounded-full bg-accent/70" />
        </div>
        <span>mrutyunjaya@dev:~</span>
      </div>

      {/* Output stream */}
      <div
        ref={outputContainerRef}
        role="log"
        aria-label="Terminal output"
        aria-live="polite"
        className="max-h-64 space-y-3 overflow-y-auto pr-1 leading-relaxed"
      >
        {history.map((entry, index) => (
          <div key={index} className="space-y-1">
            {entry.command !== "welcome" && (
              <div className="flex items-center gap-2 text-accent">
                <span aria-hidden>❯</span>
                <span className="text-text">{entry.command}</span>
              </div>
            )}
            <div>{entry.output}</div>
          </div>
        ))}
      </div>

      {/* Input */}
      <form onSubmit={handleCommand} className="flex items-center gap-2 border-t border-border pt-2.5">
        <span aria-hidden className="font-medium text-accent">
          ❯
        </span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="help"
          autoComplete="off"
          autoCapitalize="off"
          spellCheck={false}
          aria-label="Terminal command input"
          className="flex-1 bg-transparent font-mono text-xs text-text placeholder-text-muted focus:outline-none"
        />
      </form>
    </div>
  );
}
