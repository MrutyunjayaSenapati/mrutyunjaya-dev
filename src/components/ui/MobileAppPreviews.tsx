import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronLeft,
  ChevronRight,
  Pause,
  Play
} from "lucide-react";
import IPhone15Pro from "./IPhone15Pro";

export interface MobileScreen {
  id: string;
  label: string;
  title: string;
  src: string;
  desc: string;
}

interface MobileAppShowcaseProps {
  screens: MobileScreen[];
  appName: string;
}

export function MobileAppShowcase({ screens, appName }: MobileAppShowcaseProps) {
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
    <div className="flex flex-col items-center py-2 select-none">
      {/* Phone Mockup Frame */}
      <div 
        className="w-[220px] sm:w-[260px] aspect-[433/882] relative group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <IPhone15Pro>
          <div className="h-full w-full bg-black flex flex-col justify-between relative overflow-hidden">
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

            {/* Screen Image with Crossfade */}
            <div className="relative h-full w-full overflow-hidden bg-black">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current.id}
                  src={current.src}
                  alt={`${appName} ${current.title} Screen`}
                  initial={{ opacity: 0.3 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0.2 }}
                  transition={{ duration: 0.3 }}
                  className="h-full w-full object-cover object-top pointer-events-none"
                />
              </AnimatePresence>

              {/* Tap Left / Right Overlay Touch Zones */}
              <button
                type="button"
                onClick={prevScreen}
                className="absolute inset-y-0 left-0 w-1/2 z-20 cursor-pointer focus:outline-none"
                aria-label="Previous screen"
              />
              <button
                type="button"
                onClick={nextScreen}
                className="absolute inset-y-0 right-0 w-1/2 z-20 cursor-pointer focus:outline-none"
                aria-label="Next screen"
              />
            </div>
          </div>
        </IPhone15Pro>
      </div>

      {/* External Screen Caption & Info Deck */}
      <div className="mt-4 w-full max-w-md text-center px-2">
        <div className="flex items-center justify-center gap-2">
          <span className="font-mono text-[10px] font-semibold text-accent px-1.5 py-0.5 rounded bg-accent/10 border border-accent/20">
            {String(currentIndex + 1).padStart(2, "0")} / {String(screens.length).padStart(2, "0")}
          </span>
          <span className="font-display font-medium text-sm text-text">
            {current.title}
          </span>
        </div>
        <p className="mt-1 text-xs text-text-muted leading-relaxed">
          {current.desc}
        </p>
      </div>

      {/* External Responsive Controller Deck */}
      <div className="mt-3 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
        <button
          type="button"
          onClick={prevScreen}
          className="flex h-7 w-7 items-center justify-center rounded-lg border border-border bg-surface text-text-muted hover:border-border-strong hover:text-text transition-colors cursor-pointer"
          aria-label="Previous screen"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        <div className="flex flex-wrap items-center justify-center gap-1">
          {screens.map((s, idx) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              className={`px-2 py-1 rounded-md font-mono text-[10px] uppercase tracking-wider transition-colors cursor-pointer ${
                currentIndex === idx
                  ? "bg-accent text-accent-ink font-semibold"
                  : "border border-border bg-surface text-text-secondary hover:border-border-strong hover:text-text"
              }`}
            >
              {s.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setIsPaused(!isPaused)}
            className="flex h-7 w-7 items-center justify-center rounded-md border border-border bg-surface text-text-muted hover:border-border-strong hover:text-text transition-colors cursor-pointer"
            aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
            title={isPaused ? "Play slideshow" : "Pause slideshow"}
          >
            {isPaused ? <Play className="h-3 w-3" /> : <Pause className="h-3 w-3" />}
          </button>
        </div>

        <button
          type="button"
          onClick={nextScreen}
          className="flex h-7 w-7 items-center justify-center rounded-lg border border-border bg-surface text-text-muted hover:border-border-strong hover:text-text transition-colors cursor-pointer"
          aria-label="Next screen"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

export function PlantDoctorMobilePreview() {
  const screens: MobileScreen[] = [
    { id: "home", label: "Home", title: "Scan & Camera Entrypoint", src: "/plantdoctor/home.jpg", desc: "Camera viewfinder and gallery image diagnosis selector." },
    { id: "result", label: "Diagnosis", title: "Pathology Results", src: "/plantdoctor/result.jpg", desc: "96% confidence AI diagnosis with treatment guidelines." },
    { id: "profile", label: "Profile", title: "User Analytics & Settings", src: "/plantdoctor/profile.jpg", desc: "Scan history, health logs, and application preferences." },
    { id: "login", label: "Auth", title: "Google OAuth Sign-In", src: "/plantdoctor/login.jpg", desc: "Secure authentication and cloud profile sync." },
  ];

  return <MobileAppShowcase screens={screens} appName="PlantDoctor AI" />;
}

export function FoodyGoMobilePreview() {
  const screens: MobileScreen[] = [
    { id: "home", label: "Home", title: "Explore & Curated Feeds", src: "/foodygo/home.jpg", desc: "Location selector, active promo codes, cuisine categories & top-rated food spots." },
    { id: "cart", label: "Cart", title: "Cart & Customization", src: "/foodygo/cart.jpg", desc: "Item quantity adjustments, special instructions, coupon validator & bill breakdown." },
    { id: "review", label: "Review", title: "3-Step Order Checkout", src: "/foodygo/review.jpg", desc: "Address verification, packaging fee, tax estimation & instant order placement." },
    { id: "account", label: "Account", title: "Profile & Order Tracking", src: "/foodygo/account.jpg", desc: "Verified member profile, live order tracking history, favorite restaurants & addresses." },
  ];

  return <MobileAppShowcase screens={screens} appName="FoodyGo Customer" />;
}

export function FoodyGoDriverMobilePreview() {
  const screens: MobileScreen[] = [
    { id: "login", label: "Auth", title: "Partner Login & Onboarding", src: "/foodygo-driver/login.jpg", desc: "Driver partner credentials and quick registration entrypoint." },
    { id: "vehicle", label: "Vehicle", title: "Vehicle Registration", src: "/foodygo-driver/vehicle.jpg", desc: "Transportation mode selection (Bike, Scooter, Car) and license plate onboarding." },
    { id: "active", label: "Active", title: "Live Active Dispatch", src: "/foodygo-driver/active.jpg", desc: "Real-time dispatch task with 2-step progress tracking & pickup confirmation." },
    { id: "history", label: "History", title: "Past Deliveries Log", src: "/foodygo-driver/history.jpg", desc: "Lifetime delivery track record and completed order timestamps." },
    { id: "profile", label: "Profile", title: "Driver Profile & Earnings", src: "/foodygo-driver/profile.jpg", desc: "4.9★ rating, active status, weekly trip metrics & registered vehicle telemetry." },
  ];

  return <MobileAppShowcase screens={screens} appName="FoodyGo Driver" />;
}
