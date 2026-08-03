import { cn } from "../../lib/utils";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  className?: string;
}

export default function SectionHeader({ label, title, description, className }: SectionHeaderProps) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <span className="text-xs font-medium uppercase tracking-widest text-primary-light">
        {label}
      </span>
      <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-lg text-text-secondary leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
