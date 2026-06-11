import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import AnimatedSection from "../animations/AnimatedSection";
import { personal } from "../../data/portfolio";

export default function Contact() {
  return (
    <Container id="contact">
      <AnimatedSection>
        <SectionHeader
          label="Contact"
          title="Let's build something impactful"
          description="I'm always open to discussing new projects, opportunities, and technical challenges."
        />
      </AnimatedSection>

      <div className="mt-12 grid lg:grid-cols-5 gap-6">
        <AnimatedSection className="lg:col-span-2" delay={0.1}>
          <div className="rounded-2xl border border-border bg-surface p-6 md:p-8 h-full">
            <h3 className="font-semibold mb-6">Get in touch</h3>

            <div className="space-y-4">
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-surface-elevated border border-border transition-colors hover:bg-surface"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary-light">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <p className="text-xs text-text-secondary">{personal.email}</p>
                </div>
              </a>

              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-surface-elevated border border-border transition-colors hover:bg-surface"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary-light">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                </span>
                <div>
                  <p className="text-sm font-medium">GitHub</p>
                  <p className="text-xs text-text-secondary">@MrutyunjayaSenapati</p>
                </div>
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-surface-elevated border border-border transition-colors hover:bg-surface"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary-light">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </span>
                <div>
                  <p className="text-sm font-medium">LinkedIn</p>
                  <p className="text-xs text-text-secondary">/in/mrutyunjaya-senapati</p>
                </div>
              </a>

              <a
                href={personal.resume}
                className="flex items-center gap-3 p-3 rounded-xl bg-surface-elevated border border-border transition-colors hover:bg-surface"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary-light">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-medium">Resume</p>
                  <p className="text-xs text-text-secondary">Download PDF</p>
                </div>
              </a>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="lg:col-span-3" delay={0.2}>
          <div className="rounded-2xl border border-border bg-surface p-6 md:p-8 h-full">
            <h3 className="font-semibold mb-6">Send a message</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const data = new FormData(form);
                const name = data.get("name") as string;
                const email = data.get("email") as string;
                const message = data.get("message") as string;
                window.location.href = `mailto:${personal.email}?subject=Portfolio Contact from ${name}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
              }}
              className="space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  name="name"
                  placeholder="Your name"
                  required
                  className="w-full rounded-xl bg-surface-elevated border border-border px-4 py-3 text-sm text-text placeholder-text-muted outline-none focus:border-primary/50 transition-colors"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Your email"
                  required
                  className="w-full rounded-xl bg-surface-elevated border border-border px-4 py-3 text-sm text-text placeholder-text-muted outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <textarea
                name="message"
                placeholder="Your message"
                required
                rows={5}
                className="w-full rounded-xl bg-surface-elevated border border-border px-4 py-3 text-sm text-text placeholder-text-muted outline-none focus:border-primary/50 transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full rounded-xl bg-primary px-6 py-3 text-sm font-medium text-white hover:opacity-90 transition-all active:scale-[0.98]"
              >
                Send Message
              </button>
            </form>
          </div>
        </AnimatedSection>
      </div>
    </Container>
  );
}
