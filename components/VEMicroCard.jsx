export default function VEMicroCard({ title, subtitle, href }) {
  return (
    <a
      href={href}
      className="block rounded-ve border border-carbon hover:border-ember/60 bg-carbon/80 hover:bg-carbon/90 transition shadow-ve-panel px-5 py-4 group"
    >
      <div className="text-[0.95rem] text-frost font-medium group-hover:text-molten">
        {title}
      </div>

      <div className="mt-1 text-[0.7rem] uppercase tracking-wide text-slate-400 group-hover:text-ember">
        {subtitle} →
      </div>
    </a>
  );
}
