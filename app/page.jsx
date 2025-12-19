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
        <div className="mt-12 max-w-md">
  <a
    href="/demo"
    className="
      group
      relative
      block
      rounded-[22px]
      border border-white/10
      bg-gradient-to-br from-white/[0.04] to-white/[0.02]
      px-6 py-5
      transition-all
      hover:border-[#E0AE52]/40
      hover:shadow-[0_0_40px_rgba(224,174,82,0.12)]
    "
  >
    <div className="flex items-center justify-between">
      <div>
        <div className="text-sm uppercase tracking-widest text-frost/50">
          Interactive Prototype
        </div>
        <div className="mt-1 text-lg font-medium text-concrete">
          Experience the Demo
        </div>
      </div>

      <div className="
        h-9 w-9 rounded-full
        bg-gradient-to-br from-[#E0AE52] to-[#D25A2C]
        text-black
        flex items-center justify-center
        text-sm font-semibold
        shadow-[0_0_20px_rgba(224,174,82,0.35)]
        group-hover:scale-105
        transition
      ">
        →
      </div>
    </div>
  </a>
</div>


        {/* Gentle guidance (not a panel) */}
        <p className="mt-10 max-w-xl text-[0.85rem] text-frost/60">
          Clarity before complexity.
        </p>
      </div>
    </section>
  );
}
