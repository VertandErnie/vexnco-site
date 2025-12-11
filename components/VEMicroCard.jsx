export default function VEMicroCard({ title, subtitle, href }) {
  return (
    <a
      href={href}
      className="
        block rounded-ve border border-graphite bg-carbon/80 
        hover:border-molten/60 hover:bg-carbon/90 transition
        shadow-ve-soft backdrop-blur-sm px-5 py-4 group
      "
    >
      <div className="text-concrete text-[1rem] font-medium group-hover:text-molten">
        {title}
      </div>

      <div className="mt-1 text-[0.7rem] uppercase tracking-[0.16em] text-frost/70 group-hover:text-ember">
        {subtitle} →
      </div>
    </a>
  );
}
