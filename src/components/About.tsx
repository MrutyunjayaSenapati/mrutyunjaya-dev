export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <Header
          title="About"
          subtitle="A quick story + how I work"
        />

        <div className="mt-10 grid lg:grid-cols-2 gap-8">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold">Who I am</h3>
            <p className="mt-3 text-slate-300 leading-relaxed">
              I’m Jay — an MCA graduate developer who loves building web apps with
              great UI, strong backend architecture, and performance-first code.
              I focus on clean components, API security, and scalable patterns.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <MiniCard title="Frontend" desc="React, Tailwind, UI systems" />
              <MiniCard title="Backend" desc="Node, Express, JWT, Prisma" />
              <MiniCard title="Database" desc="MongoDB, MariaDB, Schema design" />
              <MiniCard title="Tools" desc="Git, ESLint, Jest, Postman" />
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold">Timeline</h3>
            <div className="mt-5 space-y-4">
              <TimeItem year="2026" title="Building advanced projects" desc="Portfolio + real products." />
              <TimeItem year="2025" title="MERN + auth systems" desc="JWT, roles, middleware, security." />
              <TimeItem year="2024" title="UI engineering" desc="Responsive design + components." />
            </div>
          </div>
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

function MiniCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
      <p className="font-semibold">{title}</p>
      <p className="mt-1 text-sm text-slate-300">{desc}</p>
    </div>
  );
}

function TimeItem({
  year,
  title,
  desc,
}: {
  year: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="shrink-0">
        <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/5 border border-white/10 font-bold">
          {year}
        </span>
      </div>
      <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4 flex-1">
        <p className="font-semibold">{title}</p>
        <p className="mt-1 text-sm text-slate-300">{desc}</p>
      </div>
    </div>
  );
}
