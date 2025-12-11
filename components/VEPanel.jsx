export default function VEPanel({ children, className = "" }) {
  return (
    <div
      className={`relative rounded-ve bg-ve-panel border border-hudson shadow-ve-panel overflow-hidden ${className}`}
    >
      {/* molten seam wash */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.22] bg-ve-warm"></div>

      {/* top edge highlight */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-molten/20 via-ember/10 to-transparent"></div>

      {/* content */}
      <div className="relative p-6">{children}</div>
    </div>
  );
}
