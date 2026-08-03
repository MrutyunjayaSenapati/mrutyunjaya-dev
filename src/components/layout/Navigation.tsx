import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ExternalLink, FileText } from "lucide-react";
import { personal } from "../../data/portfolio";
import ThemeToggle from "../ui/ThemeToggle";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-surface/85 backdrop-blur-md border-b border-border shadow-lg"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center font-mono font-bold text-primary text-sm group-hover:scale-105 transition-transform">
            MS
          </div>
          <span className="text-sm font-bold tracking-tight text-text group-hover:text-primary transition-colors">
            {personal.name}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1.5 bg-surface-elevated/70 border border-border p-1.5 rounded-full backdrop-blur-md">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-4 py-1.5 rounded-full text-xs font-medium text-text-secondary hover:text-text hover:bg-surface transition-all"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Action Controls */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a
            href={personal.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primary hover:bg-primary-light px-4 py-2 text-xs font-medium text-primary-contrast transition-all shadow-md active:scale-95 flex items-center gap-1.5"
          >
            <FileText className="w-3.5 h-3.5" />
            Resume
            <ExternalLink className="w-3 h-3 opacity-80" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl border border-border bg-surface text-text-secondary hover:text-text cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface border-b border-border overflow-hidden px-4 py-4 space-y-3"
          >
            <div className="flex flex-col space-y-2 text-left">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-xl text-sm font-medium text-text-secondary hover:text-text hover:bg-surface-elevated transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="pt-2 border-t border-border">
              <a
                href={personal.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-primary py-2.5 text-xs font-medium text-primary-contrast"
              >
                <FileText className="w-4 h-4" />
                Download Resume PDF
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
