import VEPanel from "../components/VEPanel";
import VEMicroCard from "../components/VEMicroCard";

export default function HomePage() {
  return (
    <section className="section bg-ve-hero rounded-ve relative overflow-hidden">
      <div className="grid gap-16 lg:grid-cols-2 items-start">

        {/* LEFT COLUMN */}
        <div>
          <div className="flex items-center gap-2">
            <div className="ve-dot" />
            <span className="ve-section-label">Operational Physics Layer</span>
          </div>

          <h1 className="mt-6 text-4xl leading-tight font-semibold">
            The physics of work, finally formalized.
          </h1>

          <p className="mt-5 text-slate-300 max-w-xl text-[1.05rem] leading-relaxed">
            Organizations don’t fail because people fail — they fail because the system
            they’re inside has no consistent laws. VE defines those laws. NCO turns 
            them into execution. Together, they create a stable operational layer that 
            ultimately enables autopilot for how work runs.
          </p>

          <p className="mt-4 text-slate-400 max-w-xl text-[0.95rem]">
            Start with the high-level model, then explore the physics only when it’s helpful.
          </p>

          {/* CTA CARDS */}
          <div className="mt-10 grid gap-4 max-w-md">
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
        </div>

        {/* RIGHT COLUMN — VE PANEL */}
        <VEPanel className="mt-6">
          <p className="text-[0.7rem] uppercase tracking-[0.2em] text-slate-400">
            How to Read This Portal
          </p>

          <ul className="mt-4 space-y-3 text-frost/90 text-[0.94rem] leading-relaxed">
            <li>
              Start with <span className="text-molten font-medium">The Problem</span>{" "}
              to anchor why VE exists.
            </li>
            <li>
              Skim the <span className="text-ember font-medium">VE Model</span> and{" "}
              <span className="text-ember font-medium">NCO Execution</span>{" "}
              pages to see the physics and doctrine.
            </li>
            <li>
              Explore <span className="text-molten font-medium">Prototypes</span>{" "}
              only if you want concrete behaviors.
            </li>
          </ul>

          <p className="mt-4 text-[0.8rem] text-slate-500">
            Clarity first. Depth only when helpful.
          </p>
        </VEPanel>
      </div>
    </section>
  );
}
