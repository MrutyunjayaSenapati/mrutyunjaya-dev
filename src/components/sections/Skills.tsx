import { motion, useReducedMotion } from "framer-motion";
import { skills } from "../../data/portfolio";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Skills() {
  const reduced = useReducedMotion();

  return (
    <section id="skills" aria-label="Technology stack" className="relative scroll-mt-16 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-4">
          <motion.h2
            initial={reduced ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="font-display font-bold text-display"
          >
            The stack<span className="text-accent">.</span>
          </motion.h2>
          <motion.p
            initial={reduced ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
            className="font-mono text-xs text-text-muted"
          >
            Depth over breadth &mdash; mobile first, systems to scale.
          </motion.p>
        </div>

        <div className="mt-14">
          <dl className="divide-y divide-border/70 border-t border-border">
            {skills.map((group, idx) => (
              <motion.div
                key={group.category}
                initial={reduced ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, ease: EASE, delay: idx * 0.06 }}
                className="grid gap-3 py-6 sm:grid-cols-[14rem_1fr_auto] sm:gap-8 items-baseline"
              >
                <div>
                  <dt className="font-display text-base font-medium text-text">
                    {group.category}
                  </dt>
                  <p className="mt-0.5 font-mono text-[11px] text-text-muted">
                    {group.badge}
                  </p>
                </div>
                <dd className="font-mono text-xs leading-loose tracking-wide text-text-secondary break-words">
                  {group.items.map((item, i) => (
                    <span key={item}>
                      <span className="hover:text-text transition-colors">{item}</span>
                      {i < group.items.length - 1 && (
                        <span className="mx-2 text-border-strong">&middot;</span>
                      )}
                    </span>
                  ))}
                </dd>
                <dd className="hidden font-mono text-xs text-text-muted sm:block text-right">
                  {String(group.items.length).padStart(2, "0")}
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
