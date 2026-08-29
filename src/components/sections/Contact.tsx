import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Check, Copy, AlertCircle } from "lucide-react";
import { personal } from "../../data/portfolio";

const EASE = [0.16, 1, 0.3, 1] as const;

type CopyState = "idle" | "copied" | "failed";

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
  const reduced = useReducedMotion();
  const [copyState, setCopyState] = useState<CopyState>("idle");

  const handleCopyEmail = async () => {
    const ok = await copyToClipboard(personal.email);
    setCopyState(ok ? "copied" : "failed");
    window.setTimeout(() => setCopyState("idle"), 2000);
  };

  return (
    <section id="contact" aria-label="Contact" className="relative scroll-mt-16 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.h2
          initial={reduced ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="font-display font-bold text-display"
        >
          Say hello<span className="text-accent">.</span>
        </motion.h2>

        <motion.p
          initial={reduced ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.08 }}
          className="mt-6 max-w-[48ch] leading-relaxed text-text-secondary"
        >
          Open to mobile &amp; full-stack engineering roles — or a hard problem worth shipping.
        </motion.p>

        {/* The email IS the CTA */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: EASE, delay: 0.14 }}
          className="mt-12 border-t border-border pt-10"
        >
          <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
            <a
              href={`mailto:${personal.email}`}
              className="link-underline break-all font-display text-2xl font-medium tracking-tight text-text decoration-2 underline-offset-[10px] sm:text-3xl md:text-4xl"
            >
              {personal.email}
            </a>
            <button
              onClick={handleCopyEmail}
              aria-live="polite"
              className="inline-flex cursor-pointer items-center gap-2 rounded-md border border-border px-3.5 py-2 font-mono text-xs uppercase tracking-[0.08em] text-text-secondary transition-colors hover:border-border-strong hover:text-text"
            >
              {copyState === "copied" ? (
                <Check className="h-3.5 w-3.5 text-accent" />
              ) : copyState === "failed" ? (
                <AlertCircle className="h-3.5 w-3.5 text-danger" />
              ) : (
                <Copy className="h-3.5 w-3.5" />
              )}
              {copyState === "copied" ? "Copied" : copyState === "failed" ? "Failed" : "Copy"}
            </button>
          </div>
        </motion.div>

        {/* Channels */}
        <motion.div
          initial={reduced ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-wrap gap-x-8 gap-y-3 pb-24 font-mono text-xs uppercase tracking-[0.08em]"
        >
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline py-1 text-text-secondary transition-colors hover:text-text"
          >
            GitHub ↗
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline py-1 text-text-secondary transition-colors hover:text-text"
          >
            LinkedIn ↗
          </a>
          <a
            href={personal.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline py-1 text-text-secondary transition-colors hover:text-text"
          >
            Resume ↗
          </a>
        </motion.div>
      </div>
    </section>
  );
}
