import { motion } from "framer-motion";
import { Smartphone, Globe, Code2, Cloud } from "lucide-react";
import { skills } from "../../data/portfolio";
import DevTerminal from "../ui/DevTerminal";

const CategoryIcon = ({ iconKey }: { iconKey: string }) => {
  switch (iconKey) {
    case "Smartphone":
      return <Smartphone className="w-5 h-5 text-indigo-400" />;
    case "Globe":
      return <Globe className="w-5 h-5 text-purple-400" />;
    case "Code2":
      return <Code2 className="w-5 h-5 text-cyan-400" />;
    case "Cloud":
      return <Cloud className="w-5 h-5 text-amber-400" />;
    default:
      return <Code2 className="w-5 h-5 text-primary-light" />;
  }
};

const getDeviconClass = (item: string): string | null => {
  const lower = item.toLowerCase();
  if (lower.includes("react native") || lower.includes("react.js")) return "devicon-react-original colored";
  if (lower.includes("expo")) return "devicon-expo-plain";
  if (lower.includes("postgresql")) return "devicon-postgresql-plain colored";
  if (lower.includes("mongodb")) return "devicon-mongodb-plain colored";
  if (lower.includes("express")) return "devicon-express-original";
  if (lower.includes("node")) return "devicon-nodejs-plain colored";
  if (lower.includes("next")) return "devicon-nextjs-plain";
  if (lower.includes("typescript")) return "devicon-typescript-plain colored";
  if (lower.includes("tailwind")) return "devicon-tailwindcss-plain colored";
  if (lower.includes("python")) return "devicon-python-plain colored";
  if (lower.includes("fastapi")) return "devicon-fastapi-plain colored";
  if (lower.includes("pytorch")) return "devicon-pytorch-original colored";
  if (lower.includes("aws")) return "devicon-amazonwebservices-plain-wordmark colored";
  if (lower.includes("docker")) return "devicon-docker-plain colored";
  if (lower.includes("github")) return "devicon-github-original";
  if (lower.includes("nginx")) return "devicon-nginx-original colored";
  if (lower.includes("supabase")) return "devicon-supabase-plain colored";
  if (lower.includes("firebase")) return "devicon-firebase-plain colored";
  if (lower.includes("git")) return "devicon-git-plain colored";
  if (lower.includes("android")) return "devicon-android-plain colored";
  if (lower.includes("sqlite")) return "devicon-sqlite-plain colored";
  return null;
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative bg-surface/40 border-y border-border">
      <div className="max-w-6xl mx-auto px-4 text-left">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary-light font-medium">
            Technical Competencies
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text">
            Skill Matrix & Interactive Terminal
          </h2>
          <p className="text-sm text-text-secondary max-w-xl">
            Core stack across Mobile Apps, Full-Stack MERN, Python microservices, and Cloud Infrastructure.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Skill Matrix Cards */}
          <div className="lg:col-span-7 space-y-4">
            {skills.map((skillGroup, idx) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="rounded-2xl border border-border bg-surface p-5 glow-card space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <CategoryIcon iconKey={skillGroup.iconKey} />
                    <h3 className="text-base font-bold text-text">
                      {skillGroup.category}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-primary/15 text-primary-light font-medium border border-primary/30">
                    {skillGroup.badge}
                  </span>
                </div>

                <p className="text-xs text-text-muted leading-relaxed">
                  {skillGroup.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {skillGroup.items.map((item) => {
                    const deviconClass = getDeviconClass(item);
                    return (
                      <span
                        key={item}
                        className="px-2.5 py-1 rounded-lg bg-surface-elevated border border-border text-xs font-mono text-text-secondary hover:text-text hover:border-primary/40 transition-colors flex items-center gap-1.5"
                      >
                        {deviconClass && <i className={`${deviconClass} text-sm`} />}
                        {item}
                      </span>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Interactive Dev Terminal */}
          <div className="lg:col-span-5 space-y-3 sticky top-28">
            <div className="flex items-center justify-between text-xs text-text-muted font-mono px-1">
              <span>Interactive CLI Console</span>
              <span className="text-emerald-400 font-semibold">Try &apos;skills&apos; or &apos;projects&apos;</span>
            </div>
            <DevTerminal />
          </div>
        </div>
      </div>
    </section>
  );
}
