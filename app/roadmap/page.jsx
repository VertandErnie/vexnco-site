import PageSection from "../components/PageSection";

export default function RoadmapPage() {
  return (
    <PageSection
      eyebrow="Roadmap"
      title="From model to platform to autopilot."
      subtitle={
        <>
          This outlines the staged build: establishing VE and NCO as a coherent
          model, building the rules engine and drift detection, then layering
          increasingly autonomous operations.
        </>
      }
    />
  );
}
