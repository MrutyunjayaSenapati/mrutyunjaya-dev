const PROJECTS = [
  {
    title: "JWT Auth API",
    desc: "Secure API with JWT, roles, rate-limiting, Prisma and clean architecture.",
    tags: ["Node", "Express", "JWT", "Prisma"],
    github: "#",
    live: "#",
  },
  {
    title: "Car Service Admin Panel",
    desc: "Dashboard for bookings, services, partner/customer flow with clean tables.",
    tags: ["React", "MUI", "API", "Admin"],
    github: "#",
    live: "#",
  },
  {
    title: "Developer Portfolio",
    desc: "Unique animated portfolio with scroll spy, project tags and contact form.",
    tags: ["React", "Tailwind", "Vite"],
    github: "#",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <Header title="Projects" subtitle="Selected work I’m proud of" />

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <div
              key={p.title}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-bold">{p.title}</h3>
                <span className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10">
                  Featured
                </span>
              </div>

              <p className="mt-3 text-slate-300 leading-relaxed">{p.desc}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full bg-slate-950/40 border border-white/10 text-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-3">
                <a
                  href={p.live}
                  className="flex-1 text-center rounded-full px-4 py-2 font-semibold bg-gradient-to-r from-indigo-500 to-cyan-400 text-slate-950 hover:opacity-90 transition"
                >
                  Live
                </a>
                <a
                  href={p.github}
                  className="flex-1 text-center rounded-full px-4 py-2 font-semibold border border-white/10 bg-white/5 hover:bg-white/10 transition"
                >
                  GitHub
                </a>
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
