import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import { personal } from "../../data/portfolio";
import useActiveSection from "../../hooks/useActiveSection";
import useTheme from "../../hooks/useTheme";
import ThemeToggle from "../ui/ThemeToggle";
import MobileNav from "./MobileNav";

const NAV_ITEMS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useActiveSection();
  const { mode, cycle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled && "backdrop-blur-xl bg-bg/80 border-b border-border"
        )}
      >
        <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
          <button
            onClick={() => scrollTo("hero")}
            className="flex items-center gap-2.5"
          >
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400 text-[10px] font-bold text-white">
              M
            </span>
            <span className="font-semibold tracking-tight hidden sm:inline">
              {personal.name}
            </span>
          </button>

          <div className="hidden md:flex items-center gap-1 p-1 rounded-full bg-surface border border-border">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={cn(
                  "relative px-4 py-2 rounded-full text-sm transition-colors",
                  active === item.id
                    ? "text-text"
                    : "text-text-secondary hover:text-text"
                )}
              >
                {active === item.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-surface-elevated border border-border"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle mode={mode} onCycle={cycle} />

            <a
              href={personal.resume}
              className="hidden md:inline-flex rounded-full border border-border px-4 py-2 text-sm font-medium text-text-secondary hover:text-text hover:bg-surface-elevated transition-colors"
            >
              Resume
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden relative w-6 h-6 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <span className="sr-only">Menu</span>
              <div className="flex flex-col gap-1.5">
                <motion.span
                  animate={mobileOpen ? { rotate: 45, y: 4.5 } : { rotate: 0, y: 0 }}
                  className="block w-5 h-[1.5px] rounded-full bg-text"
                />
                <motion.span
                  animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="block w-5 h-[1.5px] rounded-full bg-text"
                />
                <motion.span
                  animate={mobileOpen ? { rotate: -45, y: -4.5 } : { rotate: 0, y: 0 }}
                  className="block w-5 h-[1.5px] rounded-full bg-text"
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      <MobileNav
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        onNavigate={scrollTo}
        items={NAV_ITEMS}
      />
    </>
  );
}
