export default function DemoPage() {
  return (
    <section className="relative h-[calc(100vh-72px)] bg-[#0b0b0b] overflow-hidden">

      {/* Ambient VE material glow */}
      <div className="pointer-events-none absolute -top-64 -left-64 h-[700px] w-[700px] rounded-full bg-ember/10 blur-[240px]" />
      <div className="pointer-events-none absolute -bottom-64 -right-64 h-[700px] w-[700px] rounded-full bg-molten/10 blur-[240px]" />

      {/* Full-bleed iframe container */}
      <div className="relative h-full w-full overflow-hidden transition-opacity duration-300 opacity-[0.94] hover:opacity-100">

        <iframe
          src="https://codepen.io/team/vert/embed/pvymVNM?default-tab=result&editable=false&theme-id=dark"
          title="Operational Physics Shell Demo"
          className="absolute inset-0 w-full h-full border-0 bg-black"
          loading="lazy"
          allowFullScreen
        />

        {/* TOP UI MASK — hides CodePen header */}
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#0b0b0b] to-transparent z-10" />

        {/* BOTTOM UI MASK — hides CodePen footer */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-[#0b0b0b] to-transparent z-10" />
      </div>
    </section>
  );
}
