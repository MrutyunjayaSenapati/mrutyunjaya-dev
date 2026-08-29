import { motion, useReducedMotion } from "framer-motion";
import { experience, education } from "../../data/portfolio";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Experience() {
  const reduced = useReducedMotion();

  return (
    <section id="experience" aria-label="Experience" className="relative scroll-mt-16 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.h2
          initial={reduced ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="font-display font-bold text-display"
        >
          Experience<span className="text-accent">.</span>
        </motion.h2>

        <div className="mt-14 divide-y divide-border/70 border-t border-border">
          {experience.map((item, idx) => (
            <motion.div
              key={item.company}
              initial={reduced ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, ease: EASE, delay: idx * 0.06 }}
              className="grid gap-2 py-8 sm:grid-cols-[11rem_1fr] sm:gap-10"
            >
              <p className="pt-1 font-mono text-xs tracking-wide text-text-muted">{item.year}</p>

              <div>
                <h3 className="font-display text-lg font-medium text-text sm:text-xl">
                  {item.role}
                  <span className="text-text-muted"> · </span>
                  <span className="text-accent">{item.company}</span>
                </h3>
                <p className="mt-2 max-w-[60ch] text-sm leading-relaxed text-text-secondary">
                  {item.description}
                </p>
                <p className="mt-3 font-mono text-xs tracking-wide text-text-muted">
                  {item.tags.join(" · ")}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Education */}
          {education.map((item) => (
            <div key={item.degree} className="grid gap-2 py-8 sm:grid-cols-[11rem_1fr] sm:gap-10">
              <p className="pt-1 font-mono text-xs tracking-wide text-text-muted">{item.year}</p>
              <div>
                <h3 className="font-display text-lg font-medium text-text">{item.degree}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">{item.institution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
