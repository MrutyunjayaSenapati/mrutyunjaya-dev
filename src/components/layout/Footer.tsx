import { personal } from "../../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-text-muted">
          © {new Date().getFullYear()} {personal.name}. Built with React + TypeScript.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${personal.email}`}
            className="text-sm text-text-muted hover:text-text transition-colors"
          >
            Email
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-text-muted hover:text-text transition-colors"
          >
            GitHub
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-text-muted hover:text-text transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
