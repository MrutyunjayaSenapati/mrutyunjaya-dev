import { motion, useReducedMotion } from "framer-motion";
import { skills } from "../../data/portfolio";
import DevTerminal from "../ui/DevTerminal";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Skills() {
  const reduced = useReducedMotion();

  return (
    <section id="skills" aria-label="Technology stack" className="relative scroll-mt-16 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.h2
          initial={reduced ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="font-display font-bold text-display"
        >
          The stack<span className="text-accent">.</span>
        </motion.h2>

        <div className="mt-14 grid gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Stack ledger */}
          <div className="lg:col-span-7">
            <dl className="divide-y divide-border/70 border-t border-border">
              {skills.map((group, idx) => (
                <motion.div
                  key={group.category}
                  initial={reduced ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, ease: EASE, delay: idx * 0.06 }}
                  className="grid gap-2 py-6 sm:grid-cols-[10rem_1fr_auto] sm:gap-6"
                >
                  <dt className="font-display text-base font-medium text-text">
                    {group.category}
                  </dt>
                  <dd className="font-mono text-xs leading-loose tracking-wide text-text-secondary">
                    {group.items.join(" · ")}
                  </dd>
                  <dd className="hidden font-mono text-xs text-text-muted sm:block">
                    {String(group.items.length).padStart(2, "0")}
                  </dd>
                </motion.div>
              ))}
            </dl>

            <p className="mt-6 font-mono text-xs tracking-wide text-text-muted">
              Depth over breadth — mobile first, everything else in service of shipping.
            </p>
          </div>

          {/* Live terminal */}
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: EASE, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="lg:sticky lg:top-28">
              <p className="mb-3 flex items-center justify-between px-1 font-mono text-xs tracking-wide text-text-muted">
                <span>Interactive</span>
                <span className="text-accent">try &lsquo;help&rsquo;</span>
              </p>
              <DevTerminal />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
