import { ArrowUp } from "lucide-react";
import { personal } from "../../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-8 sm:px-6">
        <p className="font-mono text-xs tracking-wide text-text-muted">
          © {new Date().getFullYear()} {personal.name}
        </p>
        <p className="font-mono text-xs tracking-wide text-text-muted">
          React Native · Full-stack · AWS
        </p>
        <a
          href="#hero"
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-text-muted transition-colors hover:border-border-strong hover:text-text"
          aria-label="Back to top"
        >
          <ArrowUp className="h-4 w-4" />
        </a>
      </div>
    </footer>
  );
}
