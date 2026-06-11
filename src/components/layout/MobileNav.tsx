import { motion, AnimatePresence } from "framer-motion";
import { personal } from "../../data/portfolio";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
  onNavigate: (id: string) => void;
  items: { id: string; label: string }[];
}

export default function MobileNav({ open, onClose, onNavigate, items }: MobileNavProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-40 bg-bg/95 backdrop-blur-xl md:hidden"
        >
          <nav className="flex flex-col items-center justify-center h-full gap-8">
            {items.map((item, i) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => {
                  onNavigate(item.id);
                  onClose();
                }}
                className="text-2xl font-medium text-text-secondary hover:text-text transition-colors"
              >
                {item.label}
              </motion.button>
            ))}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: items.length * 0.08 }}
              href={personal.resume}
              className="mt-4 rounded-full border border-border bg-surface px-6 py-3 text-sm font-medium text-text hover:bg-surface-elevated transition-colors"
            >
              Download Resume
            </motion.a>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
