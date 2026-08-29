import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { personal } from "../../data/portfolio";
import useActiveSection from "../../hooks/useActiveSection";

const navItems = [
  { label: "Work", href: "#projects", id: "projects" },
  { label: "Stack", href: "#skills", id: "skills" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "About", href: "#about", id: "about" },
  { label: "Contact", href: "#contact", id: "contact" },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const active = useActiveSection();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 24);
        ticking = false;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? "border-b border-border bg-bg/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-4 transition-all duration-300 sm:px-6 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        {/* Wordmark */}
        <a
          href="#hero"
          className="group flex items-center font-display text-sm font-semibold tracking-tight text-text"
          aria-label="Back to top"
        >
          ms<span className="text-accent transition-transform duration-300 group-hover:translate-y-[-1px]">.</span>
        </a>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                aria-current={isActive ? "true" : undefined}
                className={`relative py-1 font-mono text-xs uppercase tracking-[0.08em] transition-colors ${
                  isActive ? "text-text" : "text-text-muted hover:text-text-secondary"
                }`}
              >
                {item.label}
                <span
                  aria-hidden
                  className={`absolute -bottom-0.5 left-0 h-px bg-accent transition-all duration-300 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </a>
            );
          })}
          <a
            href={personal.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-border px-3.5 py-2 font-mono text-xs uppercase tracking-[0.08em] text-text-secondary transition-colors hover:border-border-strong hover:text-text"
          >
            Resume
            <ArrowUpRight className="h-3 w-3" />
          </a>
        </nav>

        {/* Mobile trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border border-border text-text-secondary transition-colors hover:text-text md:hidden"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            aria-label="Mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="overflow-hidden border-t border-border md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 pb-8 pt-4">
              {navItems.map((item, idx) => (
                <motion.a
                  key={item.id}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + idx * 0.04, duration: 0.3 }}
                  className="flex items-baseline justify-between border-b border-border/60 py-3.5 font-display text-2xl font-medium text-text"
                >
                  {item.label}
                  <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted">
                    0{idx + 1}
                  </span>
                </motion.a>
              ))}
              <a
                href={personal.resume}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-md bg-accent py-3 font-mono text-xs font-medium uppercase tracking-[0.08em] text-accent-ink"
              >
                Resume
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
