export default function PageSection({
  eyebrow,
  title,
  subtitle,
  children,
}) {
  return (
    <section className="relative overflow-hidden">
      {/* Ambient VE material glow */}
      <div className="pointer-events-none absolute -top-64 -left-64 h-[620px] w-[620px] rounded-full bg-molten/10 blur-[220px]" />
      <div className="pointer-events-none absolute -bottom-64 -right-64 h-[620px] w-[620px] rounded-full bg-ember/10 blur-[220px]" />

      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-36">
        {eyebrow && (
          <div className="flex items-center gap-3 mb-6">
            <div className="ve-dot" />
            <span className="ve-section-label">{eyebrow}</span>
          </div>
        )}

        <h1 className="max-w-3xl text-4xl md:text-5xl font-semibold tracking-tight text-concrete">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-6 max-w-2xl text-frost text-[1.05rem] leading-relaxed">
            {subtitle}
          </p>
        )}

        <div className="mt-16 space-y-10">
          {children}
        </div>
      </div>
    </section>
  );
}
