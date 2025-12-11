export default function HomePage() {
  return (
    <section className="section">
      <div className="grid grid-2 items-start">
        <div>
          <div className="chip">
            <span className="chip-dot-both" />
            <span>Operational Physics Layer</span>
          </div>
          <h1
            style={{
              marginTop: "1.25rem",
              fontSize: "2.6rem",
              lineHeight: 1.1,
              fontWeight: 600
            }}
          >
            The physics of work, finally formalized.
          </h1>
          <p
            style={{
              marginTop: "1rem",
              fontSize: "0.98rem",
              color: "rgb(148,163,184)"
            }}
          >
            Organizations don&apos;t fail because people fail. They fail because the
            system they&apos;re inside has no consistent laws. VE defines those laws.
            NCO turns them into execution. Together, they create a stable
            operational layer that can eventually support true autopilot for how
            work runs.
          </p>

          <div
            style={{
              marginTop: "1.75rem",
              display: "grid",
              gap: "0.75rem",
              fontSize: "0.9rem"
            }}
          >
            <a
              href="/problem"
              className="rounded-lg px-3 py-2 bg-slate-900/70 border border-slate-700 hover:border-cyan-400 hover:bg-slate-900 transition flex items-center justify-between"
            >
              <span>1 · The problem VE is solving</span>
              <span className="text-xs text-slate-400">Start here →</span>
            </a>
            <a
              href="/model"
              className="rounded-lg px-3 py-2 bg-slate-900/50 border border-slate-800 hover:border-emerald-400 hover:bg-slate-900/70 transition flex items-center justify-between"
            >
              <span>2 · VE model at a glance</span>
              <span className="text-xs text-slate-400">Conceptual layer →</span>
            </a>
            <a
              href="/prototypes"
              className="rounded-lg px-3 py-2 bg-slate-900/40 border border-slate-800 hover:border-cyan-300 hover:bg-slate-900/70 transition flex items-center justify-between"
            >
              <span>3 · Early prototypes &amp; demos</span>
              <span className="text-xs text-slate-400">
                See how it behaves →
              </span>
            </a>
          </div>
        </div>

        <div className="card" style={{ padding: "1.5rem", marginTop: "1rem" }}>
          <p
            style={{
              fontSize: "0.8rem",
              color: "rgb(148,163,184)",
              textTransform: "uppercase",
              letterSpacing: "0.08em"
            }}
          >
            How to read this portal
          </p>
          <ul
            style={{
              marginTop: "0.75rem",
              fontSize: "0.9rem",
              color: "rgb(203,213,225)",
              paddingLeft: "1.1rem"
            }}
          >
            <li style={{ marginBottom: "0.55rem" }}>
              Start with the <strong>problem</strong> we&apos;re solving across
              organizations.
            </li>
            <li style={{ marginBottom: "0.55rem" }}>
              Double-click into the <strong>VE model</strong> and{" "}
              <strong>NCO execution patterns</strong> to see the physics.
            </li>
            <li style={{ marginBottom: "0.55rem" }}>
              Browse <strong>prototypes</strong> for how this turns into a
              working system.
            </li>
            <li>
              End at <strong>Team &amp; Ask</strong> for how we see this being
              built and where you fit.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
