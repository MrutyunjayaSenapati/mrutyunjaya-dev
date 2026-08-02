import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Copy, Check, Send, ExternalLink, CheckCircle2 } from "lucide-react";
import { personal } from "../../data/portfolio";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.name && formState.email && formState.message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormState({ name: "", email: "", message: "" });
      }, 4000);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 text-left">
        {/* Section Header */}
        <div className="space-y-2 mb-12 text-center sm:text-left">
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary-light font-medium">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text">
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
                    className="text-xs font-mono px-2.5 py-1 rounded-lg bg-surface-elevated border border-border text-primary-light hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    {copied ? "Copied!" : "Copy Email"}
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
                      <i className="devicon-github-original text-sm" />
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
                      <i className="devicon-linkedin-plain colored text-sm" />
                      LinkedIn
                    </span>
                    <ExternalLink className="w-3 h-3 text-primary-light" />
                  </div>
                  <div className="text-xs font-bold text-text font-mono truncate">Mrutyunjaya Senapati</div>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Glass Contact Form */}
          <motion.div
            className="lg:col-span-7 flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="rounded-3xl border border-border glass-panel p-6 sm:p-8 space-y-6 shadow-2xl relative h-full flex flex-col justify-between">
              <h3 className="text-xl font-bold text-text">Send a Message</h3>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                  <div className="text-sm font-bold text-emerald-300">Message Sent Successfully!</div>
                  <p className="text-xs text-text-secondary">
                    Thank you for reaching out. I will respond to your message shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-mono text-text-muted">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 rounded-xl bg-surface-elevated border border-border text-sm text-text focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-mono text-text-muted">Your Email</label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-surface-elevated border border-border text-sm text-text focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono text-text-muted">Message</label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Hi Mrutyunjaya, I would like to discuss a Mobile App engineering opportunity..."
                      className="w-full px-4 py-2.5 rounded-xl bg-surface-elevated border border-border text-sm text-text focus:outline-none focus:border-primary transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-primary hover:bg-primary-light text-xs font-semibold text-white transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
