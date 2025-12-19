export default function DemoPage() {
  return (
    <section className="relative h-[calc(100vh-72px)] bg-[#0b0b0b] overflow-hidden">
      {/* Ambient VE material glow */}
      <div className="pointer-events-none absolute -top-64 -left-64 h-[700px] w-[700px] rounded-full bg-ember/10 blur-[240px]" />
      <div className="pointer-events-none absolute -bottom-64 -right-64 h-[700px] w-[700px] rounded-full bg-molten/10 blur-[240px]" />

      {/* Full-bleed iframe */}
      <iframe
        src="https://codepen.io/team/vert/embed/pvymVNM?default-tab=result&embed-version=2"
        title="Operational Physics Shell Demo"
        className="absolute inset-0 w-full h-full border-0"
        loading="lazy"
        allowFullScreen
      />
    </section>
  );
}
