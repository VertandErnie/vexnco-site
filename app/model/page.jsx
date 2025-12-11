export default function ModelPage() {
  return (
    <section className="section">
      <div className="chip">
        <span className="chip-dot-both" />
        <span>2 · VE Model</span>
      </div>
      <h1 style={{ marginTop: "1.25rem", fontSize: "2rem", fontWeight: 600 }}>
        VE as the operational physics model.
      </h1>
      <p
        style={{
          marginTop: "1rem",
          fontSize: "0.96rem",
          color: "rgb(148,163,184)",
          maxWidth: "42rem"
        }}
      >
        This section will describe how VE formalizes the organization: entities,
        relationships, behaviors, and constraints. It is the model that NCO
        runs on top of, and the foundation for drift detection and autopilot
        later.
      </p>

      <div className="card" style={{ marginTop: "1.75rem", padding: "1.5rem" }}>
        <p
          style={{
            fontSize: "0.8rem",
            color: "rgb(148,163,184)",
            textTransform: "uppercase",
            letterSpacing: "0.08em"
          }}
        >
          Branding kit / VE × NCO visual
        </p>
        <p
          style={{
            marginTop: "0.5rem",
            fontSize: "0.9rem",
            color: "rgb(203,213,225)"
          }}
        >
          We&apos;ll embed the branding CodePen here to show the VE, NCO, and
          combined aesthetics as a visual shorthand for how the model thinks
          about the system.
        </p>
        {/* TODO: embed CodePen iframe here */}
      </div>
    </section>
  );
}
