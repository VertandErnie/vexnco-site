export default function DemoPage() {
  return (
    <section className="relative h-[calc(100vh-72px)] bg-black">
      {/* Ambient material glow */}
      <div className="pointer-events-none absolute -top-64 -left-64 h-[700px] w-[700px] rounded-full bg-ember/10 blur-[240px]" />
      <div className="pointer-events-none absolute -bottom-64 -right-64 h-[700px] w-[700px] rounded-full bg-molten/10 blur-[240px]" />

      {/* Full-bleed iframe container */}
      <div className="relative h-full w-full">
        <iframe
          src="https://codepen.io/team/vert/live/pvymVNM"
          title="Operational Physics Shell Demo"
          className="absolute inset-0 w-full h-full border-0"
          loading="lazy"
          allow="fullscreen"
        />
      </div>
    </section>
  );
}
