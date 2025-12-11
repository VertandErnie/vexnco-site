export default function ProblemPage() {
  return (
    <section className="section-narrow">
      <div className="chip">
        <span className="chip-dot-both" />
        <span>1 · The Problem</span>
      </div>
      <h1 style={{ marginTop: "1.25rem", fontSize: "2rem", fontWeight: 600 }}>
        Every company is rebuilding the same broken operational engine.
      </h1>
      <p
        style={{
          marginTop: "1rem",
          fontSize: "0.98rem",
          color: "rgb(148,163,184)"
        }}
      >
        Here we&apos;ll spell out the recurring patterns you and Chris have seen:
        drift, tribal knowledge, tool-fragmented processes, lack of universal
        standards, and the hidden cost of humans constantly compensating for
        system-level flaws.
      </p>
      <p
        style={{
          marginTop: "1rem",
          fontSize: "0.95rem",
          color: "rgb(148,163,184)"
        }}
      >
        We&apos;ll convert those patterns into a crisp, business-readable problem
        statement that makes the case for a physics-level solution.
      </p>
    </section>
  );
}
