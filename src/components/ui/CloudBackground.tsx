import { motion } from "framer-motion";

export default function CloudBackground() {
  // Generate random positions for twinkling background star dust
  const stars = Array.from({ length: 35 }).map((_, i) => ({
    id: i,
    x: Math.sin(i * 127) * 45 + 50, // % left (5% - 95%)
    y: Math.cos(i * 47) * 45 + 50,  // % top (5% - 95%)
    size: (i % 3) === 0 ? 3 : (i % 2) === 0 ? 2 : 1.5,
    duration: (i % 4) + 2.5,
    delay: (i % 6) * 0.3,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none bg-gradient-to-b from-[#090b14] via-[#0d1021] to-[#080912]">
      {/* Soft Blue Atmospheric Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-r from-blue-600/20 via-indigo-500/15 to-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Twinkling Star Particles */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white/90 shadow-[0_0_6px_rgba(255,255,255,0.9)]"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            opacity: [0.1, 0.9, 0.1],
            scale: [0.7, 1.3, 0.7],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: star.delay,
          }}
        />
      ))}

      {/* TOP DEEP PUFFY CLOUD SILHOUETTE FRAME (Scalloped Cloud Arches) */}
      <div className="absolute top-0 left-0 right-0 w-full z-20 text-[#090b14] dark:text-[#06070c]">
        <svg
          className="w-full h-24 sm:h-32 md:h-40"
          viewBox="0 0 1440 220"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Back Soft Cloud Layer */}
          <path
            fill="currentColor"
            fillOpacity="0.4"
            d="M0,0 L1440,0 L1440,110 C1380,160 1280,180 1180,140 C1080,100 980,170 860,130 C740,90 620,160 500,120 C380,80 260,150 140,110 C60,90 0,130 0,130 Z"
          />
          {/* Front Deep Puffy Scalloped Cloud Layer */}
          <path
            fill="currentColor"
            fillOpacity="0.95"
            d="M0,0 L1440,0 L1440,80 C1360,140 1240,120 1140,70 C1020,20 900,110 780,50 C660,-10 540,90 420,40 C300,-10 180,80 80,30 C30,10 0,40 0,40 Z"
          />
        </svg>
      </div>

      {/* BOTTOM DEEP PUFFY CLOUD SILHOUETTE FRAME */}
      <div className="absolute bottom-0 left-0 right-0 w-full z-20 text-[#090b14] dark:text-[#06070c]">
        <svg
          className="w-full h-24 sm:h-32 md:h-40"
          viewBox="0 0 1440 220"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Back Soft Cloud Layer */}
          <path
            fill="currentColor"
            fillOpacity="0.4"
            d="M0,220 L1440,220 L1440,110 C1360,60 1240,100 1120,50 C1000,0 880,90 760,40 C640,-10 520,80 400,30 C280,-20 160,60 60,20 C20,10 0,40 0,40 Z"
          />
          {/* Front Deep Puffy Scalloped Cloud Layer */}
          <path
            fill="currentColor"
            fillOpacity="0.95"
            d="M0,220 L1440,220 L1440,140 C1380,80 1260,110 1160,160 C1040,210 920,130 800,180 C680,230 560,140 440,190 C320,240 200,150 100,190 C40,210 0,180 0,180 Z"
          />
        </svg>
      </div>
    </div>
  );
}
