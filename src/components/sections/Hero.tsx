import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";
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
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      aria-label="Introduction"
      className="relative flex min-h-[92vh] flex-col justify-center overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28"
    >
      <motion.div
        style={reduced ? undefined : { y, opacity }}
        className="relative mx-auto w-full max-w-4xl px-5 sm:px-8"
      >
        {/* Top Section: Info + Prominent Sprite Avatar */}
        <div className="flex flex-col-reverse gap-8 sm:flex-row sm:items-start sm:justify-between sm:gap-10">
          {/* Left Column: Name & Callout */}
          <div className="flex-1">
            <motion.h1
              initial={reduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE }}
              className="font-mono text-2xl font-bold tracking-tight text-text sm:text-3xl lg:text-4xl"
            >
              {personal.name}
              <span className="text-accent">.</span>
            </motion.h1>

            {/* The Signature Accent Callout Block */}
            <motion.div
              initial={reduced ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.12 }}
              className="mt-8 border-l-2 border-accent/80 pl-5 sm:mt-10 sm:pl-6 space-y-3"
            >
              <div>
                <p className="font-mono text-sm font-semibold text-text sm:text-base">
                  Software Engineer <span className="text-accent">@ Strivesteam</span>
                </p>
              </div>

              <div className="pt-0.5 text-sm text-text-secondary leading-relaxed sm:text-[15px]">
                <p>
                  Engineering production React Native mobile apps &amp; high-performance backend systems.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Prominent Sprite Avatar */}
          <motion.div
            initial={reduced ? false : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
            className="flex flex-col items-start sm:items-end shrink-0"
          >
            <div className="group relative">
              <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-border-strong bg-surface p-1 shadow-md sm:h-40 sm:w-40 md:h-44 md:w-44 transition-all duration-300 group-hover:border-accent/60 group-hover:scale-[1.02]">
                <img
                  src="/avatar.png"
                  alt={personal.name}
                  className="h-full w-full rounded-full object-cover"
                  style={{ imageRendering: "pixelated" }}
                />
              </div>

              {/* Status pill under avatar */}
              <div className="mt-2.5 flex w-full items-center justify-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-text-muted">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
                <span>online &middot; building</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CURRENTLY Section */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.24 }}
          className="mt-12 sm:mt-14"
        >
          <h2 className="font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-text-muted">
            Currently
          </h2>
          <p className="mt-3 font-mono text-sm text-text-secondary sm:text-base leading-relaxed">
            Building high-performance mobile apps and systems from zero to production.
          </p>

          {/* Telemetry pill row */}
          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs text-text-muted">
            <span className="inline-flex items-center gap-2 text-text-secondary">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              India{clock ? `, ${clock} IST` : ""}
            </span>
            <span aria-hidden className="text-border-strong">&middot;</span>
            <span className="text-text-secondary">{personal.status}</span>
          </div>
        </motion.div>

        {/* Action Controls */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.36 }}
          className="mt-10 flex flex-wrap items-center gap-4 sm:mt-12"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-md bg-text px-4 py-2.5 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-bg transition-colors hover:bg-accent hover:text-accent-ink active:scale-[0.98]"
          >
            View work
            <ArrowDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
          </a>

          <a
            href={personal.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-border px-4 py-2.5 font-mono text-xs uppercase tracking-[0.08em] text-text-secondary transition-colors hover:border-border-strong hover:text-text active:scale-[0.98]"
          >
            Resume
            <ArrowUpRight className="h-3.5 w-3.5 text-text-muted" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-3 py-2.5 font-mono text-xs uppercase tracking-[0.08em] text-text-muted transition-colors hover:text-accent"
          >
            <Mail className="h-3.5 w-3.5" />
            Contact
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <div
        aria-hidden
        className={`absolute bottom-6 left-1/2 hidden -translate-x-1/2 transition-opacity duration-500 sm:block ${
          cueHidden ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="relative h-10 w-px overflow-hidden bg-border-strong">
          {!reduced && (
            <motion.span
              className="absolute left-0 top-0 h-3 w-px bg-accent"
              animate={{ y: [-12, 40] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          )}
        </div>
      </div>
    </section>
  );
}
