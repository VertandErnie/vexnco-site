import VEPanel from "../components/VEPanel";
import VEMicroCard from "../components/VEMicroCard";

export default function HomePage() {
  return (
    <section className="section bg-ve-hero rounded-ve relative overflow-hidden">
      {/* molten + ember glow accents */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-molten/10 blur-[160px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-ember/10 blur-[160px]" />

      <div className="grid gap-16 lg:grid-cols-2 items-start">

        {/* LEFT */}
        <div>
          <div className="flex items-center gap-3">
            <div className="ve-dot" />
            <div className="ve-section-label">Operational Physics Layer</div>
          </div>

          <h1 className="mt-6 text-4xl font-semibold text-concrete">
            The physics of work, finally formalized.
          </h1>

          <p className="mt-5 text-frost max-w-xl text-[1.05rem] leading-relaxed">
            Organizations don’t fail because people fail — they fail because the 
            system itself has no governing physics. VE defines those laws. NCO 
            turns them into execution. Together, they create a stable operational 
            layer that eventually powers autopilot for work.
          </p>

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

        {/* RIGHT */}
        <VEPanel className="mt-10">
          <p className="ve-section-label">How to Read This Portal</p>

          <ul className="mt-4 space-y-3 text-concrete/90 text-[0.94rem] leading-relaxed">
            <li>
              Begin with <span className="text-molten font-medium">The Problem</span>{" "}
              to ground VE’s purpose.
            </li>
            <li>
              Skim{" "}
              <span className="text-ember font-medium">VE Model</span> and{" "}
              <span className="text-ember font-medium">NCO Execution</span>{" "}
              to see the physics and doctrine.
            </li>
            <li>
              Explore{" "}
              <span className="text-molten font-medium">Prototypes</span>{" "}
              if you want concrete behaviors.
            </li>
          </ul>

          <p className="mt-4 text-[0.8rem] text-frost/70">
            Clarity first. Depth only when useful.
          </p>
        </VEPanel>
      </div>
    </section>
  );
}
