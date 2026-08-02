import { motion } from "framer-motion";
import { experience } from "../../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 text-left">
        {/* Section Header */}
        <div className="space-y-2 mb-12 text-center sm:text-left">
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary-light font-medium">
            Career Timeline
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text">
            Professional Experience
          </h2>
          <p className="text-sm text-text-secondary max-w-xl">
            Software engineering roles in production-grade mobile app and full-stack development.
          </p>
        </div>

        {/* Glowing Vertical Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-border space-y-10">
          {experience.map((item, index) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Glowing Timeline Node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-surface border-2 border-primary group-hover:bg-primary group-hover:scale-125 transition-all shadow-md">
                <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover:bg-white m-auto absolute inset-0" />
              </div>

              {/* Experience Card */}
              <div className="rounded-2xl border border-border bg-surface p-6 glow-card space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h3 className="text-lg font-bold text-text group-hover:text-primary transition-colors">
                      {item.role} <span className="text-primary-light">@ {item.company}</span>
                    </h3>
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-surface-elevated border border-border text-text-muted font-medium w-fit">
                    {item.year}
                  </span>
                </div>

                <p className="text-sm text-text-secondary leading-relaxed">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-md bg-surface-elevated border border-border text-[11px] font-mono text-text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
