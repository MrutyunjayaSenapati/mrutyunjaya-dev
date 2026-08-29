import { motion, useReducedMotion } from "framer-motion";
import { personal } from "../../data/portfolio";

const EASE = [0.16, 1, 0.3, 1] as const;

const FACTS: Array<[string, string]> = [
  ["Based in", personal.location],
  ["Education", "MCA — CIME, Bhubaneswar (2022–24)"],
  ["Currently", "Software Engineer @ Strivesteam"],
];

export default function About() {
  const reduced = useReducedMotion();

  return (
    <section id="about" aria-label="About" className="relative scroll-mt-16 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.h2
          initial={reduced ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="font-display font-bold text-display"
        >
          Now<span className="text-accent">.</span>
        </motion.h2>

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-10">
          <motion.p
            initial={reduced ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="max-w-[54ch] text-lg leading-relaxed text-text-secondary lg:col-span-7"
          >
            Engineering production mobile apps and full-stack systems at Strivesteam. Off the
            clock I sharpen the craft on real builds &mdash; the three projects above are mine,
            end to end.
          </motion.p>

          <motion.dl
            initial={reduced ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
            className="divide-y divide-border/70 border-t border-border lg:col-span-5"
          >
            {FACTS.map(([label, value]) => (
              <div key={label} className="flex items-baseline justify-between gap-6 py-3.5">
                <dt className="font-mono text-xs uppercase tracking-[0.12em] text-text-muted">
                  {label}
                </dt>
                <dd className="text-right font-mono text-xs tracking-wide text-text-secondary">
                  {value}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  );
}
