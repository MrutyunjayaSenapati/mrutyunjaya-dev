export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <Header title="Contact" subtitle="Let’s build something impactful together" />

        <div className="mt-10 grid lg:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold">Reach me directly</h3>

            <div className="mt-4 space-y-2 text-slate-300">
              <p>
                Email:{" "}
                <a className="text-white underline underline-offset-4" href="mailto:yourmail@gmail.com">
                  yourmail@gmail.com
                </a>
              </p>
              <p>LinkedIn: <span className="text-white">your-link</span></p>
              <p>GitHub: <span className="text-white">your-github</span></p>
            </div>

            <div className="mt-8 rounded-2xl bg-slate-950/40 border border-white/10 p-4">
              <p className="text-sm text-slate-300">Tip</p>
              <p className="mt-1 font-semibold">
                Replace links with your actual profiles to make it professional.
              </p>
            </div>
          </div>

          <form
            className="rounded-3xl border border-white/10 bg-white/5 p-6"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Form submitted (connect to EmailJS / backend API).");
            }}
          >
            <h3 className="text-xl font-bold">Send a message</h3>

            <div className="mt-4 space-y-4">
              <input
                className="w-full rounded-2xl bg-slate-950/40 border border-white/10 px-4 py-3 outline-none focus:border-cyan-300/50"
                placeholder="Your name"
                required
              />
              <input
                type="email"
                className="w-full rounded-2xl bg-slate-950/40 border border-white/10 px-4 py-3 outline-none focus:border-cyan-300/50"
                placeholder="Your email"
                required
              />
              <textarea
                className="w-full min-h-[130px] rounded-2xl bg-slate-950/40 border border-white/10 px-4 py-3 outline-none focus:border-cyan-300/50"
                placeholder="Message"
                required
              />
              <button
                className="w-full rounded-full px-6 py-3 font-semibold bg-gradient-to-r from-indigo-500 to-cyan-400 text-slate-950 hover:opacity-90 transition"
              >
                Send Message
              </button>
            </div>
          </form>
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
