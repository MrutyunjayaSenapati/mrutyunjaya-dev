import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import reactIcon from "devicon/icons/react/react-original.svg";
import expoIcon from "devicon/icons/expo/expo-original.svg";
import postgresqlIcon from "devicon/icons/postgresql/postgresql-original.svg";
import pythonIcon from "devicon/icons/python/python-original.svg";
import fastapiIcon from "devicon/icons/fastapi/fastapi-original.svg";
import nodejsIcon from "devicon/icons/nodejs/nodejs-original.svg";
import expressIcon from "devicon/icons/express/express-original.svg";
import mongodbIcon from "devicon/icons/mongodb/mongodb-original.svg";
import awsIcon from "devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg";
import dockerIcon from "devicon/icons/docker/docker-original.svg";
import typescriptIcon from "devicon/icons/typescript/typescript-original.svg";
import gitIcon from "devicon/icons/git/git-original.svg";
import tailwindIcon from "devicon/icons/tailwindcss/tailwindcss-original.svg";
import javascriptIcon from "devicon/icons/javascript/javascript-original.svg";
import figmaIcon from "devicon/icons/figma/figma-original.svg";
import cssIcon from "devicon/icons/css3/css3-original.svg";
import htmlIcon from "devicon/icons/html5/html5-original.svg";

interface FloatingTech {
  id: string;
  name: string;
  category: string;
  icon: string;
  color: string;
  size: number;   // size in px
  top: string;    // % position
  left: string;   // % position
  duration: number; // floating speed in sec
  delay: number;
  opacity?: number;
}

const floatingTechList: FloatingTech[] = [
  // Upper Cluster
  { id: "react-native", name: "React Native", category: "Mobile", icon: reactIcon, color: "#38bdf8", size: 48, top: "18%", left: "42%", duration: 4.2, delay: 0, opacity: 0.95 },
  { id: "expo", name: "Expo", category: "Mobile", icon: expoIcon, color: "#ffffff", size: 42, top: "28%", left: "15%", duration: 4.8, delay: 0.3, opacity: 0.85 },
  { id: "typescript", name: "TypeScript", category: "Full-Stack", icon: typescriptIcon, color: "#3178c6", size: 44, top: "14%", left: "75%", duration: 3.8, delay: 0.7, opacity: 0.9 },
  { id: "javascript", name: "JavaScript", category: "Full-Stack", icon: javascriptIcon, color: "#f7df1e", size: 40, top: "34%", left: "88%", duration: 4.6, delay: 0.4, opacity: 0.85 },
  { id: "figma", name: "Figma", category: "Design", icon: figmaIcon, color: "#f24e1e", size: 38, top: "12%", left: "18%", duration: 5.1, delay: 1.0, opacity: 0.8 },

  // Mid Orbit
  { id: "python", name: "Python", category: "AI & Backend", icon: pythonIcon, color: "#38bdf8", size: 46, top: "45%", left: "22%", duration: 4.5, delay: 1.1, opacity: 0.9 },
  { id: "fastapi", name: "FastAPI", category: "AI & Backend", icon: fastapiIcon, color: "#059669", size: 42, top: "52%", left: "80%", duration: 4.1, delay: 0.5, opacity: 0.9 },
  { id: "nodejs", name: "Node.js", category: "Full-Stack", icon: nodejsIcon, color: "#22c55e", size: 44, top: "40%", left: "62%", duration: 5.0, delay: 0.2, opacity: 0.9 },
  { id: "css", name: "CSS3", category: "Frontend", icon: cssIcon, color: "#1572b6", size: 36, top: "32%", left: "36%", duration: 4.4, delay: 0.9, opacity: 0.75 },
  { id: "tailwind", name: "Tailwind CSS", category: "Frontend", icon: tailwindIcon, color: "#06b6d4", size: 44, top: "58%", left: "44%", duration: 4.3, delay: 0.6, opacity: 0.9 },

  // Lower Cluster
  { id: "postgresql", name: "PostgreSQL", category: "Database", icon: postgresqlIcon, color: "#336791", size: 46, top: "68%", left: "18%", duration: 4.6, delay: 0.4, opacity: 0.9 },
  { id: "express", name: "Express", category: "Backend", icon: expressIcon, color: "#cbd5e1", size: 40, top: "75%", left: "62%", duration: 4.4, delay: 0.9, opacity: 0.85 },
  { id: "mongodb", name: "MongoDB", category: "Database", icon: mongodbIcon, color: "#47a248", size: 42, top: "82%", left: "38%", duration: 3.9, delay: 1.3, opacity: 0.85 },
  { id: "aws", name: "AWS Cloud", category: "DevOps", icon: awsIcon, color: "#ff9900", size: 46, top: "72%", left: "84%", duration: 5.2, delay: 1.0, opacity: 0.9 },
  { id: "docker", name: "Docker", category: "DevOps", icon: dockerIcon, color: "#2496ed", size: 42, top: "88%", left: "70%", duration: 4.7, delay: 0.8, opacity: 0.85 },
  { id: "git", name: "Git", category: "DevOps", icon: gitIcon, color: "#f05032", size: 40, top: "85%", left: "12%", duration: 4.0, delay: 1.2, opacity: 0.8 },
  { id: "html", name: "HTML5", category: "Frontend", icon: htmlIcon, color: "#e34f26", size: 36, top: "64%", left: "8%", duration: 4.9, delay: 0.1, opacity: 0.75 },
];

export default function FloatingTechIcons() {
  const [hoveredTech, setHoveredTech] = useState<FloatingTech | null>(null);

  return (
    <div className="relative w-full max-w-xl h-[500px] sm:h-[550px] mx-auto select-none overflow-visible flex items-center justify-center">
      {/* Scattered Organic Floating Icons (Free Floating Vector Icons without heavy boxes) */}
      <div className="relative w-full h-full">
        {floatingTechList.map((item) => {
          const isHovered = hoveredTech?.id === item.id;

          return (
            <motion.div
              key={item.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10"
              style={{
                top: item.top,
                left: item.left,
              }}
              animate={{
                y: [-10, 10, -10],
                rotate: [-4, 4, -4],
              }}
              transition={{
                duration: item.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: item.delay,
              }}
              whileHover={{
                scale: 1.35,
                zIndex: 50,
                transition: { duration: 0.2 },
              }}
              onMouseEnter={() => setHoveredTech(item)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              {/* Clean Vector SVG Icon with subtle hover glow (Matching Malay Patra aesthetic) */}
              <div className="relative flex items-center justify-center p-1.5 transition-all duration-300">
                {/* Background Glow Halo on Hover */}
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1.2 }}
                    className="absolute inset-0 rounded-full blur-md"
                    style={{ backgroundColor: item.color }}
                  />
                )}

                {/* SVG Brand Icon */}
                <img
                  src={item.icon}
                  alt={item.name}
                  className="relative z-10 object-contain drop-shadow-md transition-opacity duration-300"
                  style={{
                    width: `${item.size}px`,
                    height: `${item.size}px`,
                    opacity: isHovered ? 1 : item.opacity || 0.85,
                    filter: isHovered
                      ? `drop-shadow(0 0 12px ${item.color})`
                      : "drop-shadow(0 4px 6px rgba(0,0,0,0.4))",
                  }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Interactive Tooltip Card at Bottom */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-xs pointer-events-none">
        <AnimatePresence mode="wait">
          {hoveredTech ? (
            <motion.div
              key={hoveredTech.id}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="p-3 rounded-2xl bg-[#0e101d]/90 border border-indigo-500/40 backdrop-blur-md shadow-2xl flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center p-1.5 bg-slate-900 shadow-sm border border-slate-700"
                  style={{ borderColor: hoveredTech.color }}
                >
                  <img
                    src={hoveredTech.icon}
                    alt={hoveredTech.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <div className="text-sm font-bold text-white font-display">
                    {hoveredTech.name}
                  </div>
                  <div className="text-[11px] font-mono text-cyan-400">
                    {hoveredTech.category}
                  </div>
                </div>
              </div>

              <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 font-medium">
                Core Stack
              </span>
            </motion.div>
          ) : (
            <motion.div
              key="default-hint"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="px-4 py-2 rounded-full bg-[#0e101d]/75 border border-slate-800 backdrop-blur-md text-center text-xs font-mono text-slate-300 shadow-md"
            >
              <span className="text-cyan-400 animate-pulse mr-1">✦</span> Hover floating icons to inspect tech stack
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
