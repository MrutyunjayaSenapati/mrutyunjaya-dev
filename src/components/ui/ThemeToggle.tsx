import { motion } from "framer-motion";
import type { ThemeMode } from "../../hooks/useTheme";

interface ThemeToggleProps {
  mode: ThemeMode;
  onCycle: () => void;
}

const icons: Record<ThemeMode, { icon: string; label: string }> = {
  system: { icon: "⚙️", label: "System theme" },
  light: { icon: "☀️", label: "Light theme" },
  dark: { icon: "🌙", label: "Dark theme" },
};

export default function ThemeToggle({ mode, onCycle }: ThemeToggleProps) {
  const current = icons[mode];

  return (
    <button
      onClick={onCycle}
      className="relative flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-text-secondary hover:text-text hover:bg-surface-elevated transition-colors"
      title={current.label}
    >
      <motion.span
        key={mode}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="text-sm"
      >
        {current.icon}
      </motion.span>
      <span className="text-xs font-medium hidden sm:inline">
        {mode === "system" ? "Auto" : mode === "light" ? "Light" : "Dark"}
      </span>
    </button>
  );
}
