import VEMaterialSection from "../components/VEMaterialSection";

export default function ModelPage() {
  return (
    <VEMaterialSection
      eyebrow="2 · VE Model"
      title="VE as the operational physics model."
    >
      <p>
        This section describes how VE formalizes the organization: entities,
        relationships, behaviors, and constraints. It is the model that NCO
        runs on top of, and the foundation for drift detection and eventual
        autopilot.
      </p>

      <div className="mt-10 rounded-ve bg-ve-panel p-6">
        <p className="ve-section-label mb-2">
          Branding Kit · VE × NCO Visual
        </p>
        <p className="text-frost/80 text-sm">
          We’ll embed the branding CodePen here to show VE, NCO, and combined
          aesthetics as a visual shorthand for how the model thinks about the
          system.
        </p>
      </div>
    </VEMaterialSection>
  );
}
