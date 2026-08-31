import { useState, useRef, useEffect } from "react";
import { Sun, Moon, Laptop, ChevronDown } from "lucide-react";
import { useTheme, type Theme } from "../../context/ThemeContext";

interface ThemeToggleProps {
  variant?: "dropdown" | "segmented";
  className?: string;
}

export default function ThemeToggle({ variant = "dropdown", className = "" }: ThemeToggleProps) {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const options: Array<{ value: Theme; label: string; icon: typeof Sun }> = [
    { value: "light", label: "Light", icon: Sun },
    { value: "dark", label: "Dark", icon: Moon },
    { value: "system", label: "System", icon: Laptop },
  ];

  // Mobile segmented toggle
  if (variant === "segmented") {
    return (
      <div className={`flex items-center gap-1 rounded-lg border border-border bg-surface p-1 ${className}`}>
        {options.map((opt) => {
          const Icon = opt.icon;
          const isActive = theme === opt.value;
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => setTheme(opt.value)}
              title={opt.label}
              aria-label={opt.label}
              className={`flex flex-1 items-center justify-center gap-1.5 rounded-md px-2.5 py-1.5 font-mono text-xs transition-colors cursor-pointer ${
                isActive
                  ? "bg-accent text-accent-ink font-semibold"
                  : "text-text-secondary hover:text-text"
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
            </button>
          );
        })}
      </div>
    );
  }

  // Desktop Navbar Trigger (Icon + Chevron only, no text label)
  const CurrentIcon = theme === "system" ? Laptop : resolvedTheme === "dark" ? Moon : Sun;

  return (
    <div className={`relative inline-block ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-2 font-mono text-xs text-text-secondary transition-colors hover:border-border-strong hover:text-text cursor-pointer"
        aria-label="Toggle theme mode"
        aria-expanded={isOpen}
      >
        <CurrentIcon className="h-3.5 w-3.5 text-accent" />
        <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 rounded-lg border border-border bg-surface p-1 shadow-xl z-50 animate-fade-in font-mono text-xs">
          {options.map((opt) => {
            const Icon = opt.icon;
            const isSelected = theme === opt.value;
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => {
                  setTheme(opt.value);
                  setIsOpen(false);
                }}
                className={`flex w-full items-center gap-2 rounded-md px-2.5 py-1.5 text-left transition-colors cursor-pointer ${
                  isSelected
                    ? "bg-accent/15 text-accent font-medium"
                    : "text-text-secondary hover:bg-surface-elevated hover:text-text"
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                <span>{opt.label}</span>
                {isSelected && <span className="ml-auto text-[10px] text-accent">✓</span>}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
