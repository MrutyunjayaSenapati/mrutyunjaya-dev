import { useEffect, useMemo, useState } from "react";

const SECTION_IDS = ["hero", "projects", "skills", "experience", "about", "contact"];

export default function useActiveSection() {
  const [active, setActive] = useState("hero");

  const observers = useMemo(() => new Map<string, IntersectionObserver>(), []);

  useEffect(() => {
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) setActive(id);
          }
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );

      obs.observe(el);
      observers.set(id, obs);
    });

    return () => {
      observers.forEach((o) => o.disconnect());
      observers.clear();
    };
  }, [observers]);

  return active;
}
