import PageSection from "../components/PageSection";

export default function ModelPage() {
  return (
    <PageSection
      eyebrow="2 · VE Model"
      title="VE as the operational physics model."
      subtitle={
        <>
          VE formalizes the organization itself: entities, relationships,
          behaviors, and constraints. This is the model NCO runs on top of,
          and the foundation for drift detection and future autopilot.
        </>
      }
    >
      <div className="rounded-ve bg-ve-panel border border-white/5 p-6">
        <p className="text-frost/80 text-sm">
          Branding kit visuals and CodePen embeds will live here as
          visual shorthand for how VE “sees” the system.
        </p>
      </div>
    </PageSection>
  );
}
