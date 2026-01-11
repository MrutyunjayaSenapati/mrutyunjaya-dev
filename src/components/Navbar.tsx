import { useEffect, useMemo, useState } from "react";

const SECTIONS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  const observers = useMemo(() => new Map<string, IntersectionObserver>(), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);

    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (!el) return;

      const obs = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) setActive(s.id);
          }
        },
        { root: null, threshold: 0.5 }
      );

      obs.observe(el);
      observers.set(s.id, obs);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observers.forEach((o) => o.disconnect());
      observers.clear();
    };
  }, [observers]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50",
        "transition-all duration-300",
        scrolled ? "backdrop-blur bg-slate-950/60 border-b border-white/10" : "",
      ].join(" ")}
    >
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <button
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-2 font-semibold tracking-tight"
        >
          <span className="inline-block w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400" />
          <span>Jay.dev</span>
        </button>

        <div className="hidden md:flex items-center gap-1 p-1 rounded-full bg-white/5 border border-white/10">
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className={[
                "px-4 py-2 rounded-full text-sm transition",
                active === s.id
                  ? "bg-white/10 text-white"
                  : "text-slate-300 hover:text-white hover:bg-white/5",
              ].join(" ")}
            >
              {s.label}
            </button>
          ))}
        </div>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium
          bg-gradient-to-r from-indigo-500 to-cyan-400 text-slate-950 hover:opacity-90 transition"
        >
          Let’s Talk
        </a>
      </nav>
    </header>
  );
}
