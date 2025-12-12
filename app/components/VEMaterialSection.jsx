export default function VEMaterialSection({
  eyebrow,
  title,
  children,
}) {
  return (
    <section className="relative overflow-hidden">
      {/* Ambient VE material glow */}
      <div className="pointer-events-none absolute -top-48 -left-48 h-[520px] w-[520px] rounded-full bg-molten/10 blur-[220px]" />
      <div className="pointer-events-none absolute -bottom-48 -right-48 h-[520px] w-[520px] rounded-full bg-ember/10 blur-[220px]" />

      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-32">
        {eyebrow && (
          <div className="flex items-center gap-3 mb-6">
            <div className="ve-dot" />
            <span className="ve-section-label">{eyebrow}</span>
          </div>
        )}

        {title && (
          <h1 className="max-w-3xl text-4xl md:text-5xl font-semibold tracking-tight text-concrete">
            {title}
          </h1>
        )}

        <div className="mt-8 max-w-3xl text-frost leading-relaxed">
          {children}
        </div>
      </div>
    </section>
  );
}
