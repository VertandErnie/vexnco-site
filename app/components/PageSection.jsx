export default function PageSection({
  eyebrow,
  title,
  description,
  children,
}) {
  return (
    <section className="relative overflow-hidden">
      {/* Subtle VE material glow */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[480px] w-[480px] rounded-full bg-molten/10 blur-[180px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[480px] w-[480px] rounded-full bg-ember/10 blur-[180px]" />

      <div className="relative max-w-5xl mx-auto px-6 pt-28 pb-32">
        {eyebrow && (
          <div className="flex items-center gap-3 mb-4">
            <div className="ve-dot" />
            <span className="ve-section-label">{eyebrow}</span>
          </div>
        )}

        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-concrete max-w-3xl">
          {title}
        </h1>

        {description && (
          <p className="mt-4 max-w-2xl text-frost/80 leading-relaxed">
            {description}
          </p>
        )}

        {children && <div className="mt-14">{children}</div>}
      </div>
    </section>
  );
}
