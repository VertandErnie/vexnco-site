export default function NcoPage() {
  return (
    <section className="section-narrow">
      <div className="chip">
        <span className="chip-dot-nco" />
        <span>NCO · Execution Layer</span>
      </div>
      <h1 style={{ marginTop: "1.25rem", fontSize: "2rem", fontWeight: 600 }}>
        NCO as the disciplined way VE turns into behavior.
      </h1>
      <p
        style={{
          marginTop: "1rem",
          fontSize: "0.96rem",
          color: "rgb(148,163,184)"
        }}
      >
        This page will walk through how NCO defines how work is planned,
        sequenced, constrained, and corrected. It&apos;s the execution doctrine
        sitting on top of VE&apos;s physics.
      </p>
      {/* TODO: embed one of the NCO-related prototypes */}
    </section>
  );
}
