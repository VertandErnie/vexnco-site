export default function VEPanel({ children, className = "" }) {
  return (
    <div
      className={`rounded-ve border border-hudson bg-ve-panel shadow-ve-panel relative overflow-hidden ${className}`}
    >
      {/* Warm seam glow */}
      <div className="absolute inset-0 opacity-[0.18] bg-ve-warm pointer-events-none" />

      {/* Content */}
      <div className="relative p-6">{children}</div>
    </div>
  );
}
