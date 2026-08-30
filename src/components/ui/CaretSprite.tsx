import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  useVelocity,
  type Variants,
} from "framer-motion";

/**
 * CaretSprite â€” the DevTerminal's block cursor, escaped onto the page.
 * Trails the pointer with an eager overshoot; hops with a grounded shadow
 * while moving, glances around and blinks at rest, dozes off if ignored,
 * and squints happily after clicks. Fine-pointer + motion-safe only.
 */

type Expression = "idle" | "move" | "sleep" | "happy" | "press";

const BODY_VARIANTS: Variants = {
  idle: { scaleX: 1, scaleY: 0.96, y: 0 },
  sleep: { scaleX: 1.02, scaleY: 0.93, y: 1 },
  press: { scaleX: 1.18, scaleY: 0.7, y: 2.5 },
  move: {
    y: [0, -5, 0],
    scaleY: [1, 1.06, 0.94],
    transition: { duration: 0.42, repeat: Infinity, ease: "easeOut" },
  },
  happy: {
    scaleX: [1.18, 0.95, 1],
    scaleY: [0.7, 1.1, 1],
    y: [2, -1, 0],
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const SHADOW_VARIANTS: Variants = {
  idle: { scaleX: 1, opacity: 0.5, y: 0 },
  sleep: { scaleX: 1.08, opacity: 0.38, y: 0 },
  press: { scaleX: 1.3, opacity: 0.7, y: 0 },
  move: {
    scaleX: [1, 0.55, 0.85],
    opacity: [0.5, 0.18, 0.38],
    y: [0, -0.6, 0],
    transition: { duration: 0.42, repeat: Infinity, ease: "easeOut" },
  },
  happy: { scaleX: 1, opacity: 0.5, y: 0 },
};

const EYE_VARIANTS: Variants = {
  idle: { scaleY: 1, y: 0 },
  move: { scaleY: 1.18, y: -0.3 },
  sleep: { scaleY: 0.45, y: 0.9 },
  happy: { scaleY: 0.28, y: 0.5 },
  press: { scaleY: 1, y: 0 },
};

export default function CaretSprite() {
  const reduced = useReducedMotion();
  const [enabled] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const [visible, setVisible] = useState(false);
  const [moving, setMoving] = useState(false);
  const [sleeping, setSleeping] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [happy, setHappy] = useState(false);
  const [fidgeting, setFidgeting] = useState(false);
  const [blinking, setBlinking] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 170, damping: 12, mass: 0.7 });
  const springY = useSpring(y, { stiffness: 170, damping: 12, mass: 0.7 });
  const velocityX = useVelocity(springX);
  const lean = useTransform(velocityX, [-600, 600], [-8, 8], { clamp: true });
  const eyeX = useTransform(velocityX, [-400, 400], [-1.2, 1.2], { clamp: true });

  const moveTimer = useRef(0);
  const sleepTimer = useRef(0);
  const happyTimer = useRef(0);
  const fidgetTimer = useRef(0);
  const fidgetEndTimer = useRef(0);
  const blinkTimer = useRef(0);
  const sleepingRef = useRef(false);
  const movingRef = useRef(false);

  const expression: Expression = pressed
    ? "press"
    : happy
      ? "happy"
      : moving
        ? "move"
        : sleeping
          ? "sleep"
          : "idle";

  // Pointer tracking
  useEffect(() => {
    if (!enabled || reduced) return;

    const armTimers = () => {
      window.clearTimeout(moveTimer.current);
      moveTimer.current = window.setTimeout(() => {
        movingRef.current = false;
        setMoving(false);
      }, 240);
      window.clearTimeout(sleepTimer.current);
      sleepTimer.current = window.setTimeout(() => {
        sleepingRef.current = true;
        setSleeping(true);
      }, 10_000);
    };

    const move = (e: MouseEvent) => {
      x.set(e.clientX + 14);
      y.set(e.clientY + 16);
      setVisible(true);
      if (!movingRef.current) {
        movingRef.current = true;
        setMoving(true);
      }
      if (sleepingRef.current) {
        sleepingRef.current = false;
        setSleeping(false);
      }
      armTimers();
    };
    const leave = () => setVisible(false);
    const down = () => setPressed(true);
    const up = () => {
      setPressed(false);
      window.clearTimeout(happyTimer.current);
      setHappy(true);
      happyTimer.current = window.setTimeout(() => setHappy(false), 600);
    };

    window.addEventListener("mousemove", move, { passive: true });
    document.documentElement.addEventListener("mouseleave", leave);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    armTimers();
    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.removeEventListener("mouseleave", leave);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      [moveTimer, sleepTimer, happyTimer].forEach((t) => window.clearTimeout(t.current));
    };
  }, [enabled, reduced, x, y]);

  // Blinking
  useEffect(() => {
    if (!enabled || reduced) return;
    let openTimer = 0;
    const blinkOnce = (duration: number) => {
      setBlinking(true);
      openTimer = window.setTimeout(() => setBlinking(false), duration);
    };
    const schedule = () => {
      const delay = (sleepingRef.current ? 3800 : 2600) + Math.random() * 2000;
      blinkTimer.current = window.setTimeout(() => {
        blinkOnce(140);
        if (Math.random() < 0.3) {
          blinkTimer.current = window.setTimeout(() => {
            blinkOnce(140);
            schedule();
          }, 300);
        } else {
          schedule();
        }
      }, delay);
    };
    schedule();
    return () => {
      window.clearTimeout(blinkTimer.current);
      window.clearTimeout(openTimer);
    };
  }, [enabled, reduced]);

  // Idle fidget
  useEffect(() => {
    if (!enabled || reduced) return;
    const schedule = () => {
      fidgetTimer.current = window.setTimeout(
        () => {
          if (movingRef.current || sleepingRef.current) {
            schedule();
            return;
          }
          setFidgeting(true);
          fidgetEndTimer.current = window.setTimeout(() => {
            setFidgeting(false);
            schedule();
          }, 1500);
        },
        6000 + Math.random() * 3000
      );
    };
    schedule();
    return () => {
      window.clearTimeout(fidgetTimer.current);
      window.clearTimeout(fidgetEndTimer.current);
    };
  }, [enabled, reduced]);

  if (!enabled || reduced) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[80]"
      initial={{ opacity: 0 }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.2 }}
      style={{ x: springX, y: springY }}
    >
      <div className="relative h-5 w-5">
        {/* Ground shadow */}
        <motion.div
          className="absolute -bottom-[3px] left-1/2 h-[3.5px] w-[15px] -translate-x-1/2 rounded-full blur-[0.8px]"
          style={{
            background:
              "radial-gradient(closest-side, rgba(236,234,228,0.4), transparent 72%)",
          }}
          animate={expression}
          variants={SHADOW_VARIANTS}
          transition={{ duration: 0.18 }}
        />

        <motion.div
          className="absolute inset-0"
          style={{ rotate: lean, transformOrigin: "50% 90%" }}
          animate={expression}
          variants={BODY_VARIANTS}
          transition={{ duration: 0.18 }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
            {/* Round circular body */}
            <circle cx="10" cy="10" r="9" fill="#4ade80" />
            {/* direction of travel */}
            <motion.g style={{ x: eyeX }}>
              {/* mood */}
              <motion.g
                style={{ transformBox: "fill-box", transformOrigin: "center" }}
                animate={expression}
                variants={EYE_VARIANTS}
                transition={{ duration: 0.25 }}
              >
                {/* fidget glance */}
                <motion.g
                  animate={{ x: fidgeting ? [0, -1.4, 0, 1.4, 0] : 0 }}
                  transition={{ duration: 1.4, ease: "easeInOut" }}
                >
                  {/* blink */}
                  <motion.g
                    style={{ transformBox: "fill-box", transformOrigin: "center" }}
                    animate={{ scaleY: blinking ? 0.08 : 1 }}
                    transition={{ duration: 0.09 }}
                  >
                    <rect x="5.8" y="7.5" width="2.3" height="4.6" rx="1.15" fill="#06220f" />
                    <rect x="11.9" y="7.5" width="2.3" height="4.6" rx="1.15" fill="#06220f" />
                  </motion.g>
                </motion.g>
              </motion.g>
            </motion.g>
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
}
