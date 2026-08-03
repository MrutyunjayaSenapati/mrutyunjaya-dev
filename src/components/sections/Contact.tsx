import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Copy, Check, AlertCircle, ExternalLink, Send } from "lucide-react";
import githubIcon from "devicon/icons/github/github-original.svg";
import linkedinIcon from "devicon/icons/linkedin/linkedin-original.svg";
import { personal } from "../../data/portfolio";

type CopyState = "idle" | "copied" | "failed";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function copyToClipboard(text: string): Promise<boolean> {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // fall through to legacy fallback
    }
  }
  try {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(textarea);
    return ok;
  } catch {
    return false;
  }
}

export default function Contact() {
  const [copyState, setCopyState] = useState<CopyState>("idle");
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [openingMail, setOpeningMail] = useState(false);

  const handleCopyEmail = async () => {
    const ok = await copyToClipboard(personal.email);
    setCopyState(ok ? "copied" : "failed");
    window.setTimeout(() => setCopyState("idle"), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = formState.name.trim();
    const email = formState.email.trim();
    const message = formState.message.trim();

    const nextErrors: FormErrors = {};
    if (!name) nextErrors.name = "Please enter your name.";
    if (!email) {
      nextErrors.email = "Please enter your email.";
    } else if (!EMAIL_RE.test(email)) {
      nextErrors.email = "That email address doesn't look quite right.";
    }
    if (!message) {
      nextErrors.message = "Please write a short message.";
    } else if (message.length < 10) {
      nextErrors.message = "Your message is a little short — add a few more details.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const subject = `Portfolio inquiry from ${name}`;
    const body = `Hi Mrutyunjaya,\n\n${message}\n\n— ${name}\n${email}`;
    window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOpeningMail(true);
    window.setTimeout(() => {
      setOpeningMail(false);
      setFormState({ name: "", email: "", message: "" });
    }, 4000);
  };

  const inputClass = (hasError: boolean) =>
    `w-full px-4 py-2.5 rounded-xl bg-surface-elevated border text-sm text-text focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 transition-colors ${
      hasError ? "border-rose-500/60" : "border-border focus:border-primary"
    }`;

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 text-left">
        {/* Section Header */}
        <div className="space-y-2 mb-12 text-center sm:text-left">
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary-light font-medium">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] text-text">
            Let&apos;s Build Something Extraordinary
          </h2>
          <p className="text-sm text-text-secondary max-w-xl">
            Whether you have a mobile app engineering role, a full-stack project, or technical inquiry, feel free to reach out.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Direct Connect Cards */}
          <motion.div
            className="lg:col-span-5 flex flex-col justify-between space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Email Card with Copy-to-Clipboard */}
            <div className="p-6 sm:p-8 rounded-3xl border border-border bg-surface flex-1 flex flex-col justify-between glow-card space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-text-muted uppercase tracking-wider flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-primary-light" />
                    Direct Email
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="text-xs font-mono px-2.5 py-1 rounded-lg bg-surface-elevated border border-border text-primary-light hover:text-text transition-colors flex items-center gap-1 cursor-pointer"
                    aria-live="polite"
                  >
                    {copyState === "copied" ? (
                      <Check className="w-3 h-3 text-emerald-400" />
                    ) : copyState === "failed" ? (
                      <AlertCircle className="w-3 h-3 text-rose-400" />
                    ) : (
                      <Copy className="w-3 h-3" />
                    )}
                    {copyState === "copied"
                      ? "Copied!"
                      : copyState === "failed"
                        ? "Copy failed"
                        : "Copy Email"}
                  </button>
                </div>
                <a
                  href={`mailto:${personal.email}`}
                  className="text-base sm:text-lg font-bold text-text hover:text-primary transition-colors block break-all font-display"
                >
                  {personal.email}
                </a>
                <p className="text-xs text-text-secondary leading-relaxed">
                  Fastest channel for engineering roles or software development inquiries.
                </p>
              </div>

              {/* Social Links Grid */}
              <div className="grid sm:grid-cols-2 gap-3 pt-4 border-t border-border">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl border border-border bg-surface-elevated hover:border-primary/40 transition-colors space-y-1 block"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-text-muted flex items-center gap-1.5">
                      <img src={githubIcon} alt="" className="w-3.5 h-3.5 shrink-0 tech-icon-mono" />
                      GitHub
                    </span>
                    <ExternalLink className="w-3 h-3 text-primary-light" />
                  </div>
                  <div className="text-xs font-bold text-text font-mono truncate">@MrutyunjayaSenapati</div>
                </a>

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl border border-border bg-surface-elevated hover:border-primary/40 transition-colors space-y-1 block"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-text-muted flex items-center gap-1.5">
                      <img src={linkedinIcon} alt="" className="w-3.5 h-3.5 shrink-0" />
                      LinkedIn
                    </span>
                    <ExternalLink className="w-3 h-3 text-primary-light" />
                  </div>
                  <div className="text-xs font-bold text-text font-mono truncate">Mrutyunjaya Senapati</div>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Contact Form */}
          <motion.div
            className="lg:col-span-7 flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="rounded-3xl border border-border glass-panel p-6 sm:p-8 space-y-6 shadow-2xl relative h-full flex flex-col justify-between">
              <h3 className="text-xl font-bold text-text">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="contact-name" className="text-xs font-mono text-text-muted">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      autoComplete="name"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="John Doe"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "contact-name-error" : undefined}
                      className={inputClass(!!errors.name)}
                    />
                    {errors.name && (
                      <p id="contact-name-error" className="text-xs text-rose-400 flex items-center gap-1" role="alert">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="contact-email" className="text-xs font-mono text-text-muted">
                      Your Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      autoComplete="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="john@example.com"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "contact-email-error" : undefined}
                      className={inputClass(!!errors.email)}
                    />
                    {errors.email && (
                      <p id="contact-email-error" className="text-xs text-rose-400 flex items-center gap-1" role="alert">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="contact-message" className="text-xs font-mono text-text-muted">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Hi Mrutyunjaya, I would like to discuss a Mobile App engineering opportunity..."
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "contact-message-error" : undefined}
                    className={`${inputClass(!!errors.message)} resize-none`}
                  />
                  {errors.message && (
                    <p id="contact-message-error" className="text-xs text-rose-400 flex items-center gap-1" role="alert">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {openingMail ? (
                  <div className="w-full py-3 rounded-xl bg-primary/10 border border-primary/30 text-xs text-text-secondary flex flex-wrap items-center justify-center gap-2 px-4">
                    <Mail className="w-4 h-4 text-primary-light" />
                    <span>
                      Opening your email app… if it doesn&apos;t open, email{" "}
                      <a
                        href={`mailto:${personal.email}`}
                        className="text-primary-light underline underline-offset-2"
                      >
                        {personal.email}
                      </a>{" "}
                      directly.
                    </span>
                  </div>
                ) : (
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-primary hover:bg-primary-light text-xs font-semibold text-white transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
