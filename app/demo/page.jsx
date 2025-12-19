export default function DemoPage() {
  return (
    <section className="relative min-h-screen bg-[#0b0b0b] overflow-hidden">
      {/* Ambient material glow */}
      <div className="pointer-events-none absolute -top-64 -left-64 h-[700px] w-[700px] rounded-full bg-ember/10 blur-[240px]" />
      <div className="pointer-events-none absolute -bottom-64 -right-64 h-[700px] w-[700px] rounded-full bg-molten/10 blur-[240px]" />

      <div className="relative max-w-[1200px] mx-auto px-6 pt-28 pb-32">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="ve-dot" />
            <span className="ve-section-label">
              Operational Physics — Visual Shell
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-semibold text-concrete max-w-3xl">
            Live operational surface
          </h1>

          <p className="mt-3 max-w-2xl text-frost/70 leading-relaxed">
            This is a visual prototype of how VE thinks about work as a moving
            system. It is not a finished product — it is a behavioral surface.
          </p>
        </div>

        {/* Embedded CodePen */}
        <div className="mt-10 rounded-[24px] overflow-hidden border border-white/5 bg-black shadow-[0_40px_120px_rgba(0,0,0,0.8)]">
        <iframe
          src="https://codepen.io/team/vert/embed/pvymVNM?default-tab=result"
          title="Operational Physics Shell Demo"
          className="w-full h-[85vh] bg-black"
          loading="lazy"
          frameBorder="0"
          allowFullScreen
        />
      </div>
      </div>
    </section>
  );
}
