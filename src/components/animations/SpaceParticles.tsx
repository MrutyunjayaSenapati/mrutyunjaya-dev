import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

interface Particle {
  x: number;
  y: number;
  radius: number;
  speedY: number;
  speedX: number;
  opacity: number;
  baseOpacity: number;
  pulseSpeed: number;
  pulsePhase: number;
  color: string;
}

export default function SpaceParticles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);

    // Particle setup for full-screen viewport
    const particleCount = Math.min(Math.floor((width * height) / 10000), 90);
    const colors = [
      "rgba(255, 255, 255,",
      "rgba(52, 211, 153,", // emerald/accent
      "rgba(96, 165, 250,", // blue tint
      "rgba(244, 244, 245,", // white-zinc
    ];

    const particles: Particle[] = Array.from({ length: particleCount }, () => {
      const baseOpacity = Math.random() * 0.55 + 0.15;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.6 + 0.5,
        speedY: Math.random() * 0.35 + 0.1, // gentle downward/floating drift
        speedX: (Math.random() - 0.5) * 0.15,
        opacity: baseOpacity,
        baseOpacity,
        pulseSpeed: Math.random() * 0.02 + 0.005,
        pulsePhase: Math.random() * Math.PI * 2,
        color: colors[Math.floor(Math.random() * colors.length)],
      };
    });

    let time = 0;

    const render = () => {
      time += 1;
      ctx.clearRect(0, 0, width, height);

      // Draw subtle stars & particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Animate position
        p.y += p.speedY;
        p.x += p.speedX;

        // Wrap around boundaries
        if (p.y > height) {
          p.y = -5;
          p.x = Math.random() * width;
        }
        if (p.x > width) p.x = 0;
        if (p.x < 0) p.x = width;

        // Subtle twinkling
        const currentOpacity =
          p.baseOpacity + Math.sin(time * p.pulseSpeed + p.pulsePhase) * 0.2;
        const clampedOpacity = Math.max(0.05, Math.min(0.85, currentOpacity));

        // Draw star particle with soft glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color} ${clampedOpacity})`;
        ctx.fill();

        // Extra soft outer halo for slightly larger particles
        if (p.radius > 1.2) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color} ${clampedOpacity * 0.25})`;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [reducedMotion]);

  if (reducedMotion) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 h-full w-full opacity-65 z-0"
    />
  );
}
