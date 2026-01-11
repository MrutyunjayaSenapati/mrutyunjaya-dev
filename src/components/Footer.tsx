export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-slate-400 text-sm">
          © {new Date().getFullYear()} Jay. Built with React + Tailwind.
        </p>
        <p className="text-slate-400 text-sm">
          Crafted for performance, clarity and clean UI.
        </p>
      </div>
    </footer>
  );
}
