const SKILLS = [
  { name: "React", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "Express", level: 80 },
  { name: "MongoDB", level: 78 },
  { name: "Prisma", level: 70 },
  { name: "UI/UX", level: 82 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <Header title="Skills" subtitle="Tools & technologies I use daily" />

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {SKILLS.map((s) => (
            <div
              key={s.name}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex items-center justify-between">
                <p className="font-semibold">{s.name}</p>
                <p className="text-sm text-slate-300">{s.level}%</p>
              </div>
              <div className="mt-3 h-3 w-full rounded-full bg-white/10 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400"
                  style={{ width: `${s.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Header({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
      <p className="mt-2 text-slate-300">{subtitle}</p>
    </div>
  );
}
