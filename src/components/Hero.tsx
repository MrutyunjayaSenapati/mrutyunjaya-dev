export default function Hero() {
  return (
    <section id="hero" className="relative pt-28 pb-20 overflow-hidden">
      {/* gradient blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-28 w-[420px] h-[420px] rounded-full bg-indigo-500/30 blur-3xl" />
        <div className="absolute top-10 -right-20 w-[520px] h-[520px] rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-[520px] h-[520px] rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Available for freelance & full-time
            </p>

            <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight">
              Hi, I’m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300">
                Jay
              </span>
              .
              <br />
              I build clean & fast web products.
            </h1>

            <p className="mt-5 text-lg text-slate-300 leading-relaxed">
              MCA graduate focused on building{" "}
              <span className="text-white font-medium">modern, responsive</span>{" "}
              applications with strong UI/UX and solid backend logic.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="rounded-full px-6 py-3 font-semibold bg-gradient-to-r from-indigo-500 to-cyan-400 text-slate-950 hover:opacity-90 transition"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-full px-6 py-3 font-semibold border border-white/10 bg-white/5 hover:bg-white/10 transition"
              >
                Contact Me
              </a>
              <a
                href="/resume.pdf"
                className="rounded-full px-6 py-3 font-semibold text-slate-200 hover:text-white transition underline underline-offset-4"
              >
                Download Resume
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-2 text-sm text-slate-300">
              {["React", "TypeScript", "Node.js", "MongoDB", "Prisma"].map(
                (t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10"
                  >
                    {t}
                  </span>
                )
              )}
            </div>
          </div>

          {/* hero card */}
          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-6 shadow-2xl">
              <div className="flex items-center justify-between">
                <p className="text-sm text-slate-200">Developer Snapshot</p>
                <span className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10">
                  2026
                </span>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <Stat label="Projects" value="12+" />
                <Stat label="Tech Stack" value="MERN" />
                <Stat label="Focus" value="UI + API" />
                <Stat label="Location" value="India" />
              </div>

              <div className="mt-6 rounded-2xl bg-slate-950/50 border border-white/10 p-4">
                <p className="text-sm text-slate-300">Current Goal</p>
                <p className="mt-1 text-white font-semibold">
                  Build industry-level portfolio & land a solid developer role.
                </p>
              </div>

              <div className="mt-6 text-sm text-slate-300">
                <p className="font-medium text-white">What I’m best at:</p>
                <ul className="mt-2 space-y-2">
                  <li>• Clean UI components + responsive layouts</li>
                  <li>• REST APIs, JWT auth, role-based access</li>
                  <li>• Database design + Prisma/Mongoose</li>
                </ul>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-3xl bg-indigo-500/20 blur-xl" />
            <div className="absolute -top-6 -right-6 w-28 h-28 rounded-3xl bg-cyan-400/20 blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
      <p className="text-sm text-slate-300">{label}</p>
      <p className="mt-1 text-xl font-bold">{value}</p>
    </div>
  );
}
