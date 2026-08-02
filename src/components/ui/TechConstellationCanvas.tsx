import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap } from "lucide-react";

export interface TechParticle {
  id: string;
  name: string;
  category: "Mobile" | "MERN & DB" | "Python & AI" | "DevOps";
  svgDataUrl: string;
  color: string;
  pctX: number; // percentage of container width (0 to 1)
  pctY: number; // percentage of container height (0 to 1)
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  img?: HTMLImageElement;
}

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

const rawTechData = [
  { id: "react-native", name: "React Native", category: "Mobile" as const, svgDataUrl: reactIcon, color: "#38bdf8", pctX: 0.5, pctY: 0.48 },
  { id: "expo", name: "Expo", category: "Mobile" as const, svgDataUrl: expoIcon, color: "#f8fafc", pctX: 0.28, pctY: 0.3 },
  { id: "postgresql", name: "PostgreSQL", category: "MERN & DB" as const, svgDataUrl: postgresqlIcon, color: "#60a5fa", pctX: 0.22, pctY: 0.6 },
  { id: "python", name: "Python", category: "Python & AI" as const, svgDataUrl: pythonIcon, color: "#38bdf8", pctX: 0.72, pctY: 0.32 },
  { id: "fastapi", name: "FastAPI", category: "Python & AI" as const, svgDataUrl: fastapiIcon, color: "#10b981", pctX: 0.78, pctY: 0.58 },
  { id: "nodejs", name: "Node.js", category: "MERN & DB" as const, svgDataUrl: nodejsIcon, color: "#22c55e", pctX: 0.5, pctY: 0.2 },
  { id: "express", name: "Express", category: "MERN & DB" as const, svgDataUrl: expressIcon, color: "#cbd5e1", pctX: 0.62, pctY: 0.75 },
  { id: "mongodb", name: "MongoDB", category: "MERN & DB" as const, svgDataUrl: mongodbIcon, color: "#4ade80", pctX: 0.38, pctY: 0.76 },
  { id: "aws", name: "AWS Cloud", category: "DevOps" as const, svgDataUrl: awsIcon, color: "#fbbf24", pctX: 0.82, pctY: 0.22 },
  { id: "docker", name: "Docker", category: "DevOps" as const, svgDataUrl: dockerIcon, color: "#38bdf8", pctX: 0.15, pctY: 0.42 },
  { id: "typescript", name: "TypeScript", category: "Mobile" as const, svgDataUrl: typescriptIcon, color: "#60a5fa", pctX: 0.65, pctY: 0.42 },
  { id: "git", name: "Git", category: "DevOps" as const, svgDataUrl: gitIcon, color: "#f97316", pctX: 0.85, pctY: 0.44 },
  { id: "tailwind", name: "Tailwind CSS", category: "MERN & DB" as const, svgDataUrl: tailwindIcon, color: "#38bdf8", pctX: 0.14, pctY: 0.22 },
];

export default function TechConstellationCanvas() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [hoveredParticle, setHoveredParticle] = useState<TechParticle | null>(null);

  // Mouse coordinates state relative to container
  const mouseRef = useRef({ x: -1000, y: -1000, isOver: false });

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrameId: number;

    // Retina High-DPI Canvas Setup
    const dpr = Math.max(window.devicePixelRatio || 1, 2);
    let cssW = container.clientWidth || 420;
    let cssH = container.clientHeight || 460;

    canvas.width = cssW * dpr;
    canvas.height = cssH * dpr;
    ctx.scale(dpr, dpr);

    // Preload SVG Image Objects
    const particles: TechParticle[] = rawTechData.map((d) => {
      const img = new Image();
      img.src = d.svgDataUrl;
      const initialX = cssW * d.pctX;
      const initialY = cssH * d.pctY;

      return {
        ...d,
        x: initialX,
        y: initialY,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        radius: 26,
        img,
      };
    });

    const handleResize = () => {
      if (!container || !canvas) return;
      cssW = container.clientWidth || 420;
      cssH = container.clientHeight || 460;
      canvas.width = cssW * dpr;
      canvas.height = cssH * dpr;
      ctx.scale(dpr, dpr);
    };

    const resizeObserver = new ResizeObserver(() => handleResize());
    resizeObserver.observe(container);
    window.addEventListener("resize", handleResize);

    // 60 FPS Render Loop with continuous ambient float & mouse gravity
    let time = 0;
    const render = () => {
      time += 0.025;
      ctx.clearRect(0, 0, cssW, cssH);
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";

      let closest: TechParticle | null = null;
      const minHoverDist = 65;

      const mouseX = mouseRef.current.x;
      const mouseY = mouseRef.current.y;
      const isOver = mouseRef.current.isOver;

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // 1. Continuous Floating Motion (Sinusoidal Drift)
        p1.vx += Math.cos(time * 0.9 + i * 0.7) * 0.22;
        p1.vy += Math.sin(time * 0.9 + i * 0.5) * 0.22;

        // Soft return spring towards layout percentage target
        const targetX = cssW * p1.pctX + Math.sin(time + i) * 22;
        const targetY = cssH * p1.pctY + Math.cos(time * 0.8 + i) * 22;
        p1.vx += (targetX - p1.x) * 0.012;
        p1.vy += (targetY - p1.y) * 0.012;

        // 2. Mouse Attraction / Repulsion Physics
        if (isOver && mouseX > 0 && mouseY > 0) {
          const dxMouse = mouseX - p1.x;
          const dyMouse = mouseY - p1.y;
          const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

          if (
            distMouse < minHoverDist &&
            distMouse <
              (closest
                ? Math.sqrt((mouseX - closest.x) ** 2 + (mouseY - closest.y) ** 2)
                : minHoverDist)
          ) {
            closest = p1;
          }

          const maxGravityDist = 180;
          if (distMouse < maxGravityDist && distMouse > 0) {
            const force = (1 - distMouse / maxGravityDist) * 2.5;
            if (distMouse < 55) {
              p1.vx -= (dxMouse / distMouse) * force * 1.8;
              p1.vy -= (dyMouse / distMouse) * force * 1.8;
            } else {
              p1.vx += (dxMouse / distMouse) * force * 0.7;
              p1.vy += (dyMouse / distMouse) * force * 0.7;
            }

            // Draw glowing laser connection line to mouse
            const lineAlpha = (1 - distMouse / maxGravityDist) * 0.55;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouseX, mouseY);
            ctx.strokeStyle = `rgba(99, 102, 241, ${lineAlpha})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }
        }

        // Apply friction decay
        p1.vx *= 0.93;
        p1.vy *= 0.93;
        p1.x += p1.vx;
        p1.y += p1.vy;

        // Boundary containment
        const margin = p1.radius + 6;
        if (p1.x < margin) { p1.x = margin; p1.vx *= -0.8; }
        if (p1.x > cssW - margin) { p1.x = cssW - margin; p1.vx *= -0.8; }
        if (p1.y < margin) { p1.y = margin; p1.vy *= -0.8; }
        if (p1.y > cssH - margin) { p1.y = cssH - margin; p1.vy *= -0.8; }

        // Draw Inter-Particle Constellation Links
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const pdx = p1.x - p2.x;
          const pdy = p1.y - p2.y;
          const pdist = Math.sqrt(pdx * pdx + pdy * pdy);
          const linkMax = 135;

          if (pdist < linkMax) {
            const linkAlpha = (1 - pdist / linkMax) * 0.28;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(148, 163, 184, ${linkAlpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // Draw Particle Circle & Glow Halo
        const isHovered = closest?.id === p1.id;
        ctx.save();
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = isHovered ? "rgba(15, 23, 42, 0.98)" : "rgba(10, 15, 28, 0.92)";
        ctx.shadowBlur = isHovered ? 22 : 8;
        ctx.shadowColor = p1.color;
        ctx.fill();

        ctx.strokeStyle = isHovered ? p1.color : "rgba(255, 255, 255, 0.25)";
        ctx.lineWidth = isHovered ? 2.5 : 1.5;
        ctx.stroke();

        // CRITICAL FIX: Reset canvas shadow before drawing image to eliminate shadow blur bleed on icons
        ctx.shadowBlur = 0;
        ctx.shadowColor = "transparent";

        // Inner high-contrast white backing disk to make brand icons pop with maximum clarity
        ctx.beginPath();
        ctx.arc(Math.round(p1.x), Math.round(p1.y), Math.round(p1.radius * 0.72), 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.95)";
        ctx.fill();

        // Render Official Vector SVG Brand Image cleanly with subpixel rounding
        let drawn = false;
        if (p1.img && p1.img.complete && (p1.img.naturalWidth > 0 || p1.img.width > 0)) {
          try {
            const iconSize = Math.round(p1.radius * 1.15);
            const drawX = Math.round(p1.x - iconSize / 2);
            const drawY = Math.round(p1.y - iconSize / 2);
            ctx.drawImage(p1.img, drawX, drawY, iconSize, iconSize);
            drawn = true;
          } catch {
            // Suppress image render errors to prevent animation loop crash
          }
        }

        if (!drawn) {
          ctx.font = "bold 11px sans-serif";
          ctx.fillStyle = p1.color;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(p1.name.slice(0, 3).toUpperCase(), Math.round(p1.x), Math.round(p1.y));
        }

        ctx.restore();
      }

      setHoveredParticle((prev) => (prev?.id !== closest?.id ? closest : prev));
      animFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animFrameId);
    };
  }, []);

  // React Synthetic Mouse & Touch Event Handlers
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      isOver: true,
    };
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current || e.touches.length === 0) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseRef.current = {
      x: e.touches[0].clientX - rect.left,
      y: e.touches[0].clientY - rect.top,
      isOver: true,
    };
  };

  const handleMouseLeave = () => {
    mouseRef.current = { x: -1000, y: -1000, isOver: false };
    setHoveredParticle(null);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseLeave={handleMouseLeave}
      className="w-full max-w-lg h-[460px] sm:h-[500px] relative mx-auto rounded-3xl border border-border glass-panel overflow-hidden shadow-2xl flex flex-col justify-between p-4 cursor-crosshair select-none"
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/20 via-transparent to-cyan-950/20 pointer-events-none" />

      {/* Top Header Badge */}
      <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/85 border border-border backdrop-blur-md pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-[11px] font-mono text-slate-200 font-bold">
          Continuous 60 FPS Floating Physics
        </span>
      </div>

      {/* HTML5 Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full absolute inset-0 z-10 pointer-events-none"
      />

      {/* Bottom Interactive Hover Badge */}
      <div className="mt-auto z-20 w-full pointer-events-none pt-4">
        <AnimatePresence mode="wait">
          {hoveredParticle ? (
            <motion.div
              key={hoveredParticle.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="p-3.5 rounded-2xl bg-slate-950/95 border border-indigo-500/50 backdrop-blur-md shadow-2xl flex items-center justify-between text-left"
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-xl border flex items-center justify-center p-2"
                  style={{ borderColor: hoveredParticle.color, backgroundColor: `${hoveredParticle.color}20` }}
                >
                  <img
                    src={hoveredParticle.svgDataUrl}
                    alt={hoveredParticle.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <div className="text-base font-bold text-white font-display">
                    {hoveredParticle.name}
                  </div>
                  <div className="text-[11px] font-mono text-cyan-400">
                    Category: {hoveredParticle.category}
                  </div>
                </div>
              </div>

              <div className="text-right">
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 font-medium">
                  Core Stack
                </span>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="default-tooltip"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="p-3 rounded-2xl bg-slate-950/80 border border-border backdrop-blur-md flex items-center justify-between text-xs font-mono text-slate-300 text-left"
            >
              <div className="flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 text-cyan-400" />
                <span>Hover or touch nodes to interact with tech constellation</span>
              </div>
              <span className="text-[10px] text-slate-500 hidden sm:inline font-mono">
                Interactive Graph
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
