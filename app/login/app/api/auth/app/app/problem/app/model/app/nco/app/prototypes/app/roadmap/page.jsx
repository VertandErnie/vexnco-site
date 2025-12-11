export default function RoadmapPage() {
  return (
    <section className="section-narrow">
      <div className="chip">
        <span className="chip-dot-both" />
        <span>Roadmap</span>
      </div>
      <h1 style={{ marginTop: "1.25rem", fontSize: "2rem", fontWeight: 600 }}>
        From model to platform to autopilot.
      </h1>
      <p
        style={{
          marginTop: "1rem",
          fontSize: "0.96rem",
          color: "rgb(148,163,184)"
        }}
      >
        This page will outline the staged build plan: establishing VE and NCO as
        a coherent model, building the rules engine and drift detection, then
        layering on increasingly autonomous operations.
      </p>
    </section>
  );
}
