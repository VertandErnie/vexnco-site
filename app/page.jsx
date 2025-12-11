export default function HomePage() {
  return (
    <section className="section">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-start">
        {/* LEFT: Narrative */}
        <div>
          <div className="chip">
            <span className="chip-dot-both" />
            <span>Operational Physics Layer</span>
          </div>

          <h1 className="mt-6 text-3xl sm:text-4xl lg:text-[2.6rem] leading-tight font-semibold">
            The physics of work, finally formalized.
          </h1>

          <p className="mt-4 text-sm sm:text-[0.95rem] text-slate-300 max-w-xl">
            Organizations don&apos;t fail because people fail. They fail because the
            system they&apos;re inside has no consistent laws. VE defines those laws.
            NCO turns them into execution. Together, they create a stable
            operational layer that can eventually support true autopilot for how
            work runs.
          </p>

          <p className="mt-4 text-sm text-slate-400 max-w-xl">
            This portal is designed to onboard you gently: start with the problem,
            see how the model works, then dive into prototypes and the build plan
            only if you want the deeper layers.
          </p>

          {/* Guided paths */}
          <div className="mt-8 grid gap-3 text-sm">
            <a
              href="/problem"
              className="rounded-xl border border-slate-700/80 bg-slate-900/60 hover:border-cyan-400/80 hover:bg-slate-900 transition flex items-center justify-between px-3.5 py-2.5"
            >
              <span className="text-slate-100">1 · The problem VE is solving</span>
              <span className="text-[0.68rem] uppercase tracking-wide text-slate-400">
                Start here →
              </span>
            </a>
            <a
              href="/model"
              className="rounded-xl border border-slate-800 bg-slate-950/50 hover:border-emerald-400/80 hover:bg-slate-900/70 transition flex items-center justify-between px-3.5 py-2.5"
            >
              <span className="text-slate-100">2 · VE model at a glance</span>
              <span className="text-[0.68rem] uppercase tracking-wide text-slate-400">
                Concept layer →
              </span>
            </a>
            <a
              href="/prototypes"
              className="rounded-xl border border-slate-800 bg-slate-950/40 hover:border-cyan-300/80 hover:bg-slate-900/70 transition flex items-center justify-between px-3.5 py-2.5"
            >
              <span className="text-slate-100">3 · Early prototypes &amp; demos</span>
              <span className="text-[0.68rem] uppercase tracking-wide text-slate-400">
                Only if you want detail →
              </span>
            </a>
          </div>
        </div>

        {/* RIGHT: Hero gradient card */}
        <div className="mt-2">
          <div
            className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/85 shadow-[0_24px_60px_rgba(15,23,42,0.9)]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 0% 0%, rgba(34,211,238,0.18), transparent 55%), radial-gradient(circle at 100% 100%, rgba(34,197,94,0.2), transparent 55%)"
            }}
          >
            <div className="absolute inset-0 pointer-events-none opacity-60">
              <div className="absolute -left-20 -top-16 h-40 w-40 rounded-full blur-3xl bg-cyan-500/20" />
              <div className="absolute -right-24 -bottom-16 h-44 w-44 rounded-full blur-3xl bg-emerald-500/20" />
            </div>

            <div className="relative p-5 sm:p-6">
              <p className="text-[0.7rem] tracking-[0.18em] uppercase text-slate-400">
                How to read this portal
              </p>

              <h2 className="mt-3 text-sm font-semibold text-slate-100">
                High-level first. Detail only if you want it.
              </h2>

              <ul className="mt-3 space-y-2.5 text-[0.86rem] text-slate-200/90">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  <span>
                    Start with <span className="font-medium">The Problem</span> to
                    anchor what VE is solving in real organizations.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>
                    Then skim the <span className="font-medium">VE Model</span> and{" "}
                    <span className="font-medium">NCO Execution</span> pages to see
                    the physics and doctrine.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-sm bg-gradient-to-br from-cyan-400 to-emerald-400" />
                  <span>
                    Only if useful, dive into{" "}
                    <span className="font-medium">Prototypes</span> for concrete
                    examples of how this can behave as a system.
                  </span>
                </li>
              </ul>

              <p className="mt-4 text-[0.8rem] text-slate-400">
                The goal is clarity first, not detail. This is the front door, not
                the full doctrine.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
