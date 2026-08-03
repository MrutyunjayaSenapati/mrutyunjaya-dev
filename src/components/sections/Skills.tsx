import { motion } from "framer-motion";
import { Smartphone, Globe, Code2, Cloud } from "lucide-react";
import { skills } from "../../data/portfolio";
import DevTerminal from "../ui/DevTerminal";

import reactNativeIcon from "devicon/icons/reactnative/reactnative-original.svg";
import expoIcon from "devicon/icons/expo/expo-original.svg";
import androidStudioIcon from "devicon/icons/androidstudio/androidstudio-plain.svg";
import sqliteIcon from "devicon/icons/sqlite/sqlite-original.svg";
import zustandIcon from "devicon/icons/zustand/zustand-plain.svg";
import firebaseIcon from "devicon/icons/firebase/firebase-original.svg";
import postgresqlIcon from "devicon/icons/postgresql/postgresql-original.svg";
import mongodbIcon from "devicon/icons/mongodb/mongodb-original.svg";
import expressIcon from "devicon/icons/express/express-original.svg";
import reactIcon from "devicon/icons/react/react-original.svg";
import nodejsIcon from "devicon/icons/nodejs/nodejs-original.svg";
import nextjsIcon from "devicon/icons/nextjs/nextjs-plain.svg";
import typescriptIcon from "devicon/icons/typescript/typescript-original.svg";
import tailwindIcon from "devicon/icons/tailwindcss/tailwindcss-original.svg";
import turboIcon from "devicon/icons/turbo/turbo-original.svg";
import pythonIcon from "devicon/icons/python/python-original.svg";
import fastapiIcon from "devicon/icons/fastapi/fastapi-original.svg";
import pytorchIcon from "devicon/icons/pytorch/pytorch-original.svg";
import awsIcon from "devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg";
import dockerIcon from "devicon/icons/docker/docker-original.svg";
import githubActionsIcon from "devicon/icons/githubactions/githubactions-original.svg";
import linuxIcon from "devicon/icons/linux/linux-plain.svg";
import nginxIcon from "devicon/icons/nginx/nginx-original.svg";
import supabaseIcon from "devicon/icons/supabase/supabase-original.svg";
import gitIcon from "devicon/icons/git/git-original.svg";

interface SkillIcon {
  src: string;
  mono?: boolean;
}

const SKILL_ICONS: Record<string, SkillIcon | undefined> = {
  "react native": { src: reactNativeIcon },
  expo: { src: expoIcon },
  "android studio": { src: androidStudioIcon, mono: true },
  "sqlite (local db)": { src: sqliteIcon },
  "zustand state": { src: zustandIcon, mono: true },
  "firebase analytics": { src: firebaseIcon },
  postgresql: { src: postgresqlIcon },
  mongodb: { src: mongodbIcon },
  "express.js": { src: expressIcon },
  "react.js": { src: reactIcon },
  "node.js": { src: nodejsIcon },
  "next.js": { src: nextjsIcon, mono: true },
  typescript: { src: typescriptIcon },
  "tailwind css": { src: tailwindIcon },
  turborepo: { src: turboIcon },
  python: { src: pythonIcon },
  fastapi: { src: fastapiIcon },
  pytorch: { src: pytorchIcon },
  "aws (s3, ec2, lambda)": { src: awsIcon, mono: true },
  docker: { src: dockerIcon },
  "github actions ci/cd": { src: githubActionsIcon },
  "linux administration": { src: linuxIcon },
  "nginx proxy": { src: nginxIcon },
  supabase: { src: supabaseIcon },
  firebase: { src: firebaseIcon },
  "git & postman": { src: gitIcon },
};

const getSkillIcon = (item: string): SkillIcon | undefined => SKILL_ICONS[item.toLowerCase()];

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

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative bg-surface/40 border-y border-border">
      <div className="max-w-6xl mx-auto px-4 text-left">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary-light font-medium">
            Technical Competencies
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] text-text">
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
                    const skillIcon = getSkillIcon(item);
                    return (
                      <span
                        key={item}
                        className="px-2.5 py-1 rounded-lg bg-surface-elevated border border-border text-xs font-mono text-text-secondary hover:text-text hover:border-primary/40 transition-colors flex items-center gap-1.5"
                      >
                        {skillIcon && (
                          <img
                            src={skillIcon.src}
                            alt=""
                            loading="lazy"
                            className={`w-3.5 h-3.5 shrink-0${skillIcon.mono ? " tech-icon-mono" : ""}`}
                          />
                        )}
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
