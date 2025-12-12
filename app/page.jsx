import VEMicroCard from "../components/VEMicroCard";

export default function HomePage() {
  return (
    <section className="relative overflow-hidden">
      {/* Ambient material glow */}
      <div className="pointer-events-none absolute -top-48 -left-48 h-[520px] w-[520px] rounded-full bg-molten/10 blur-[200px]" />
      <div className="pointer-events-none absolute -bottom-48 -right-48 h-[520px] w-[520px] rounded-full bg-ember/10 blur-[200px]" />

      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-36">
        {/* Eyebrow */}
        <div className="flex items-center gap-3">
          <div className="ve-dot" />
          <span className="ve-section-label">
            Operational Physics Layer
          </span>
        </div>

        {/* Headline */}
        <h1 className="mt-6 max-w-3xl text-4xl md:text-5xl font-semibold tracking-tight text-concrete">
          The physics of work, finally formalized.
        </h1>

        {/* Supporting copy */}
        <p className="mt-6 max-w-2xl text-frost text-[1.05rem] leading-relaxed">
          Organizations don’t fail because people fail — they fail because the
          system itself has no governing physics. VE defines those laws. NCO
          turns them into execution. Together, they form a stable operational
          layer that ultimately powers autopilot for work.
        </p>

        {/* Entry points */}
        <div className="mt-14 grid gap-4 max-w-xl">
          <VEMicroCard
            title="1 · The Problem"
            subtitle="Start Here"
            href="/problem"
          />
          <VEMicroCard
            title="2 · VE Model at a Glance"
            subtitle="Concept Layer"
            href="/model"
          />
          <VEMicroCard
            title="3 · Early Prototypes & Demos"
            subtitle="Explore"
            href="/prototypes"
          />
        </div>

        {/* Gentle guidance (not a panel) */}
        <p className="mt-10 max-w-xl text-[0.85rem] text-frost/60">
          Start broad. Go deeper only if it’s useful.
        </p>
      </div>
    </section>
  );
}
