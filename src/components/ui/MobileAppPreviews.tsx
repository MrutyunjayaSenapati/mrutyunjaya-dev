import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronLeft,
  ChevronRight,
  Pause,
  Play
} from "lucide-react";

export function PlantDoctorMobilePreview() {
  const screens = [
    { id: "home", label: "Home", src: "/plantdoctor/home.jpg", desc: "Camera & Gallery Scan Entrypoint" },
    { id: "result", label: "Diagnosis", src: "/plantdoctor/result.jpg", desc: "96% Confidence Pathology Detection" },
    { id: "profile", label: "Profile", src: "/plantdoctor/profile.jpg", desc: "User Stats & Dark Mode Settings" },
    { id: "login", label: "Auth", src: "/plantdoctor/login.jpg", desc: "OAuth Google Sign-in" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const current = screens[currentIndex];

  const nextScreen = () => setCurrentIndex((prev) => (prev + 1) % screens.length);
  const prevScreen = () => setCurrentIndex((prev) => (prev - 1 + screens.length) % screens.length);

  // Auto-advance every 3.5 seconds unless paused
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screens.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [isPaused, screens.length]);

  return (
    <div 
      className="h-full w-full bg-black flex flex-col justify-between select-none relative group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Top Stories-Style Progress Bar */}
      <div className="absolute inset-x-3 top-8 z-30 flex items-center gap-1">
        {screens.map((s, idx) => (
          <div
            key={s.id}
            className="h-1 flex-1 rounded-full bg-white/20 overflow-hidden backdrop-blur-xs"
          >
            <div
              className={`h-full bg-accent transition-all duration-300 ${
                idx < currentIndex
                  ? "w-full"
                  : idx === currentIndex
                  ? isPaused
                    ? "w-full opacity-80"
                    : "w-full animate-[progress_3.5s_linear]"
                  : "w-0"
              }`}
            />
          </div>
        ))}
      </div>

      {/* Screen image container with crossfade */}
      <div className="relative h-full w-full overflow-hidden bg-black">
        <AnimatePresence mode="wait">
          <motion.img
            key={current.id}
            src={current.src}
            alt={`PlantDoc AI ${current.label} Screen`}
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.2 }}
            transition={{ duration: 0.35 }}
            className="h-full w-full object-cover object-top"
          />
        </AnimatePresence>

        {/* Floating Quick Switcher Overlay at bottom */}
        <div className="absolute inset-x-2 bottom-3 z-30 flex items-center justify-between rounded-xl bg-black/85 p-1.5 backdrop-blur-md border border-white/10 shadow-lg">
          <button
            type="button"
            onClick={prevScreen}
            className="flex h-7 w-7 items-center justify-center rounded-lg text-white/80 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
            aria-label="Previous screen"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <div className="flex items-center gap-1">
            {screens.map((s, idx) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`px-2 py-1 rounded-md font-mono text-[10px] uppercase tracking-wider transition-colors cursor-pointer ${
                  currentIndex === idx
                    ? "bg-accent text-accent-ink font-semibold"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                {s.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => setIsPaused(!isPaused)}
              className="px-1.5 py-1 text-white/50 hover:text-white transition-colors cursor-pointer"
              aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
            >
              {isPaused ? <Play className="h-3 w-3" /> : <Pause className="h-3 w-3" />}
            </button>
          </div>

          <button
            type="button"
            onClick={nextScreen}
            className="flex h-7 w-7 items-center justify-center rounded-lg text-white/80 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
            aria-label="Next screen"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
