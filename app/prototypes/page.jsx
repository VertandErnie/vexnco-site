import VEMaterialSection from "../components/VEMaterialSection";

export default function PrototypesPage() {
  return (
    <VEMaterialSection
      eyebrow="Early Prototypes"
      title="How the system starts to behave in practice."
    >
      <p>
        These are early explorations from before the full 50-section theory was
        written. They’re still valuable because they make the model visible:
        how VE sees an organization, how drift appears, and how NCO could
        intervene.
      </p>

      <div className="mt-10 grid gap-6">
        <div className="rounded-ve bg-ve-panel p-6">
          <h3 className="font-medium text-concrete">
            Org model / node map
          </h3>
          <p className="mt-2 text-sm text-frost/80">
            Early visualization of entities and relationships in VE.
          </p>
        </div>

        <div className="rounded-ve bg-ve-panel p-6">
          <h3 className="font-medium text-concrete">
            System views & flows
          </h3>
          <p className="mt-2 text-sm text-frost/80">
            Different slices of the system showing how drift might surface.
          </p>
        </div>
      </div>
    </VEMaterialSection>
  );
}
