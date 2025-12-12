import VEMaterialSection from "../components/VEMaterialSection";

export default function ProblemPage() {
  return (
    <VEMaterialSection
      eyebrow="1 · The Problem"
      title="Every company is rebuilding the same broken operational engine."
    >
      <p>
        Here we’ll spell out the recurring patterns you and Chris have seen:
        drift, tribal knowledge, tool-fragmented processes, lack of universal
        standards, and the hidden cost of humans constantly compensating for
        system-level flaws.
      </p>

      <p className="mt-4">
        We’ll convert those patterns into a crisp, business-readable problem
        statement that makes the case for a physics-level solution.
      </p>
    </VEMaterialSection>
  );
}
