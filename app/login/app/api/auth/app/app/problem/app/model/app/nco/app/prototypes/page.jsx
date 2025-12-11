export default function PrototypesPage() {
  return (
    <section className="section">
      <div className="chip">
        <span className="chip-dot-both" />
        <span>Early Prototypes</span>
      </div>
      <h1 style={{ marginTop: "1.25rem", fontSize: "2rem", fontWeight: 600 }}>
        How the system starts to behave in practice.
      </h1>
      <p
        style={{
          marginTop: "1rem",
          fontSize: "0.95rem",
          color: "rgb(148,163,184)",
          maxWidth: "42rem"
        }}
      >
        These are early explorations from before the full 50-section theory was
        written. They&apos;re still valuable because they make the model visible:
        how VE sees an organization, how drift appears, and how NCO could
        intervene.
      </p>

      <div className="grid" style={{ marginTop: "1.75rem" }}>
        <div className="card" style={{ padding: "1.25rem" }}>
          <h2 style={{ fontSize: "1rem", margin: 0 }}>Org model / node map</h2>
          <p
            style={{
              marginTop: "0.5rem",
              fontSize: "0.86rem",
              color: "rgb(148,163,184)"
            }}
          >
            Early visualization of entities and relationships in VE.
          </p>
          {/* TODO: embed CodePen KwzJdOM here */}
        </div>

        <div className="card" style={{ padding: "1.25rem", marginTop: "1rem" }}>
          <h2 style={{ fontSize: "1rem", margin: 0 }}>System views & flows</h2>
          <p
            style={{
              marginTop: "0.5rem",
              fontSize: "0.86rem",
              color: "rgb(148,163,184)"
            }}
          >
            Additional views (emZQLEj, KwzrbJe, ogxQJpv, LENXZKa) that show
            different slices of the system and how drift might be surfaced.
          </p>
          {/* TODO: additional embeds */}
        </div>
      </div>
    </section>
  );
}
