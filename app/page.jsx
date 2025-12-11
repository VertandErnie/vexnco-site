export default function HomePage() {
  return (
    <section className="section">
      <div className="grid gap-14 lg:grid-cols-2 items-start">

        {/* LEFT — Narrative */}
        <div>
          <div className="chip">
            <span className="chip-dot-both" />
            <span>Operational Physics Layer</span>
          </div>

          <h1 className="mt-6 text-4xl leading-tight font-semibold tracking-tight">
            The physics of work, finally formalized.
          </h1>

          <p className="mt-5 text-slate-300 max-w-xl text-[1.02rem] leading-relaxed">
            Organizations don’t fail because people fail — they fail because the 
            system has no consistent laws. VE defines those laws. NCO turns them 
            into execution. Together, they create a stable operational layer that 
            ultimately enables autopilot for how work runs.
          </p>

          <p className="mt-4 text-slate-400 max-w-xl text-[0.95rem]">
            This portal introduces the system from high-level concept to practical 
            examples. Start broad, zoom in only if you want detail.
          </p>

          {/* CTA Blocks */}
          <div className="mt-10 grid gap-4 text-sm max-w-md">
            <a
              href="/problem"
              className="rounded-xl px-4 py-3 bg-slate-950/60 border border-slate-800 hover:border-cyan-400/60 hover:bg-slate-900/70 transition group"
            >
              <div className="text-slate-100 font-medium group-hover:text-cyan-300">
                1 · The Problem
              </div>
              <div className="text-[0.72rem] uppercase tracking-wide text-slate-400">
                Start here →
              </div>
            </a>

            <a
              href="/model"
              className="rounded-xl px-4 py-3 bg-slate-950/60 border border-slate-800 hover:border-emerald-400/60 hover:bg-slate-900/70 transition group"
            >
              <div className="text-slate-100 font-medium group-hover:text-emerald-300">
                2 · VE Model at a Glance
              </div>
              <div className="text-[0.72rem] uppercase tracking-wide text-slate-400">
                Concept layer →
              </div>
            </a>

            <a
              href="/prototypes"
              className="rounded-xl px-4 py-3 bg-slate-950/60 border border-slate-800 hover:border-cyan-300/60 hover:bg-slate-900/70 transition group"
            >
              <div className="text-slate-100 font-medium group-hover:text-cyan-300">
                3 · Early Prototypes & Demos
              </div>
              <div className="text-[0.72rem] uppercase tracking-wide text-slate-400">
                Only if you want detail →
              </div>
            </a>
          </div>
        </div>

        {/* RIGHT — Branded Gradient Card */}
        <div className="relative">
          <div
            className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/80 shadow-[0_0_44px_rgba(0,0,0,0.8)]"
          >
            {/* Gradient Glow */}
            <div className="absolute inset-0 opacity-[0.65] pointer-events-none">
              <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-cyan-500/20 blur-3xl" />
              <div className="absolute -bottom-24 -right-20 h-60 w-60 rounded-full bg-emerald-500/20 blur-3xl" />
            </div>

            {/* Content */}
            <div className="relative p-7 sm:p-8">
              <p className="text-[0.7rem] uppercase tracking-[0.2em] text-slate-400">
                How to Read This Portal
              </p>

              <ul className="mt-4 space-y-3 text-slate-200/90 text-[0.94rem] leading-relaxed">
                <li>
                  Start with <span className="font-medium text-cyan-300">The Problem</span>{" "}
                  to anchor why VE exists.
                </li>
                <li>
                  Skim the{" "}
                  <span className="font-medium text-emerald-300">VE Model</span> and{" "}
                  <span className="font-medium text-emerald-300">NCO Execution</span>{" "}
                  pages to see the physics and doctrine.
                </li>
                <li>
                  Explore <span className="font-medium text-cyan-300">Prototypes</span>{" "}
                  only if you want concrete behaviors.
                </li>
              </ul>

              <p className="mt-4 text-[0.8rem] text-slate-500">
                Clarity first. Depth only when helpful.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
