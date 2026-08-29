import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import type { ReactNode } from "react";
import { personal } from "../../data/portfolio";

const EASE = [0.16, 1, 0.3, 1] as const;

function useISTClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "Asia/Kolkata",
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);

  return time;
}

function RevealLine({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const reduced = useReducedMotion();

  return (
    <span className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
      <motion.span
        className="block will-change-transform"
        initial={reduced ? false : { y: "112%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, ease: EASE, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement | null>(null);
  const reduced = useReducedMotion();
  const clock = useISTClock();
  const [cueHidden, setCueHidden] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setCueHidden(window.scrollY > 80);
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -110]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.97]);
  const fade = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      aria-label="Introduction"
      className="relative flex min-h-svh flex-col justify-center overflow-hidden"
    >
      <motion.div
        style={reduced ? undefined : { y, scale, opacity: fade }}
        className="relative mx-auto w-full max-w-6xl px-4 pb-24 pt-32 sm:px-6"
      >
        {/* Telemetry line */}
        <motion.p
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs tracking-wide text-text-muted"
        >
          <span>India</span>
          <span aria-hidden className="text-border-strong">/</span>
          {clock && (
            <>
              <span>
                <time dateTime={clock}>{clock}</time> IST
              </span>
              <span aria-hidden className="text-border-strong">/</span>
            </>
          )}
          <span className="inline-flex items-center gap-2 text-text-secondary">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            {personal.status}
          </span>
        </motion.p>

        {/* Display statement */}
        <h1 className="mt-10 font-display font-bold text-hero">
          <span className="sr-only">{personal.name} — </span>
          <RevealLine delay={0.05}>Mobile &amp; full-stack</RevealLine>
          <RevealLine delay={0.16}>
            software engineer<span className="text-accent">.</span>
          </RevealLine>
        </h1>

        {/* One supporting sentence */}
        <motion.p
          initial={reduced ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.5 }}
          className="mt-9 max-w-[54ch] text-base leading-relaxed text-text-secondary sm:text-lg"
        >
          I&rsquo;m Mrutyunjaya Senapati. I build React Native apps and the systems behind
          them &mdash; PostgreSQL schemas, Node &amp; FastAPI services, shipped on AWS.
        </motion.p>

        {/* Actions */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.68 }}
          className="mt-11 flex flex-wrap items-center gap-x-6 gap-y-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2.5 rounded-md bg-accent px-5 py-3 font-mono text-xs font-medium uppercase tracking-[0.08em] text-accent-ink transition-colors hover:bg-accent/90 active:scale-[0.98]"
          >
            View work
            <ArrowDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
          </a>
          <a
            href={personal.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline px-0.5 py-3 font-mono text-xs uppercase tracking-[0.08em] text-text-secondary transition-colors hover:text-text"
          >
            Résumé ↗
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <div
        aria-hidden
        className={`absolute bottom-8 left-1/2 hidden -translate-x-1/2 transition-opacity duration-500 sm:block ${
          cueHidden ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="relative h-12 w-px overflow-hidden bg-border-strong">
          {!reduced && (
            <motion.span
              className="absolute left-0 top-0 h-4 w-px bg-accent"
              animate={{ y: [-16, 48] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          )}
        </div>
      </div>
    </section>
  );
}
