import PageSection from "../components/PageSection";

export default function ProblemPage() {
  return (
    <PageSection
      eyebrow="1 · The Problem"
      title="Every company is rebuilding the same broken operational engine."
      subtitle={
        <>
          Here we spell out the recurring patterns you and Chris have seen:
          drift, tribal knowledge, tool-fragmented processes, lack of universal
          standards, and the hidden cost of humans constantly compensating for
          system-level flaws.
          <br /><br />
          We convert those patterns into a crisp, business-readable problem
          statement that makes the case for a physics-level solution.
        </>
      }
    >
      {/* future sections go here */}
    </PageSection>
  );
}
