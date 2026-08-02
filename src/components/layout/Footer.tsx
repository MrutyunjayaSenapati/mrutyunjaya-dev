import { ArrowUp } from "lucide-react";
import { personal } from "../../data/portfolio";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-border bg-surface text-left">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Copy */}
        <div className="space-y-1 text-center md:text-left">
          <div className="text-sm font-bold text-text">
            {personal.name}
          </div>
          <p className="text-xs text-text-muted">
            Software Engineer • React Native, Full-Stack & AWS Architecture
          </p>
        </div>

        {/* Back to Top & Copyright */}
        <div className="flex items-center gap-4">
          <span className="text-xs font-mono text-text-muted">
            © {new Date().getFullYear()} All rights reserved.
          </span>
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full border border-border bg-surface-elevated text-text-muted hover:text-text hover:border-primary transition-colors flex items-center justify-center text-xs cursor-pointer"
            aria-label="Scroll back to top"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
