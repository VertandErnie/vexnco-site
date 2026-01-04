export default function HowWeWorkPage() {
  const tools = [
    {
      name: "ChatGPT",
      scope: "VE · Curate",
      role: "Thinking & modeling",
      description:
        "Primary thinking surface for reasoning through systems, language, flows, edge cases, and architectural decisions before code exists.",
      href: "https://chat.openai.com",
    },
    {
      name: "CodePen",
      scope: "VE",
      role: "Behavioral exploration",
      description:
        "Sandbox and demonstration layer used to explore behavior and visual logic before formalization or commitment.",
      href: "https://codepen.io",
    },
    {
      name: "Cursor",
      scope: "VE · Curate",
      role: "Rapid iteration",
      description:
        "AI-assisted development environment for fast iteration, refactors, and code exploration.",
      href: "https://cursor.sh",
    },
    {
      name: "Xcode",
      scope: "Curate",
      role: "Platform implementation",
      description:
        "Native iOS development environment for building, testing, and shipping Curate.",
      href: "https://developer.apple.com/xcode/",
    },
    {
      name: "GitHub",
      scope: "VE · Curate",
      role: "System of record",
      description:
        "Canonical source for all deployable code, version history, and shared state.",
      href: "https://github.com",
    },
    {
      name: "Vercel",
      scope: "VE",
      role: "Deployment & visibility",
      description:
        "Deployment and hosting layer for VE demos and internal portals.",
      href: "https://vercel.com",
    },
  ];

  const pens = [
    {
      name: "Operational Physics Shell v2",
      scope: "VE",
      owner: "Chris",
      description:
        "Primary behavioral visualization of VE as a moving system.",
      href: "https://codepen.io/team/vert/pen/pvymVNM",
    },
    {
      name: "VE / NCO Visual System",
      scope: "VE",
      owner: "Chris",
      description:
        "Color, material, and UI primitives for VE and NCO.",
      href: "#",
    },
    {
      name: "Early Flow Experiments",
      scope: "VE",
      owner: "Tyler",
      description:
        "Historical explorations of system dynamics and drift.",
      href: "#",
    },
  ];

  return (
    <section className="relative min-h-screen bg-[#0b0b0b] overflow-hidden">
      {/* Ambient material glow */}
      <div className="pointer-events-none absolute -top-64 -left-64 h-[700px] w-[700px] rounded-full bg-ember/10 blur-[240px]" />
      <div className="pointer-events-none absolute -bottom-64 -right-64 h-[700px] w-[700px] rounded-full bg-molten/10 blur-[240px]" />

      <div className="relative max-w-5xl mx-auto px-6 pt-28 pb-32 space-y-20">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="text-[0.7rem] uppercase tracking-widest text-frost/50 mb-3">
            Internal Operating Guide
          </div>
          <h1 className="text-3xl md:text-4xl font-semibold text-concrete">
            How We Work
          </h1>
          <p className="mt-4 text-frost/70 leading-relaxed">
            This page documents the tools and references we use to design, build,
            and operate VE and Curate, and how they fit together in practice.
          </p>
        </div>

        {/* Core Tools */}
        <div>
          <h2 className="text-xl font-semibold text-concrete mb-6">
            Core Tools
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="rounded-[20px] border border-white/5 bg-[#141414]/60 backdrop-blur-md p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm font-medium text-concrete">
                      {tool.name}
                    </div>
                    <div className="text-[0.7rem] uppercase tracking-widest text-frost/50">
                      {tool.scope}
                    </div>
                  </div>
                  <a
                    href={tool.href}
                    target="_blank"
                    className="text-[0.75rem] text-molten hover:underline whitespace-nowrap"
                  >
                    Open →
                  </a>
                </div>

                <div className="mt-3 text-[0.7rem] uppercase tracking-widest text-frost/40">
                  {tool.role}
                </div>

                <p className="mt-2 text-sm text-frost/70">
                  {tool.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* How they fit together */}
        <div className="max-w-3xl">
          <h2 className="text-xl font-semibold text-concrete mb-4">
            How These Tools Fit Together
          </h2>

          <p className="text-frost/70 leading-relaxed">
            Tools are treated as layers in a workflow, each with a distinct role
            in moving ideas from concept to deployed system.
          </p>

          <div className="mt-6 rounded-[16px] border border-white/5 bg-[#141414]/50 backdrop-blur-md p-5 text-sm text-frost/70">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
              <span className="text-concrete font-medium">Think</span>
              <span>→</span>
              <span className="text-concrete font-medium">Explore</span>
              <span>→</span>
              <span className="text-concrete font-medium">Build</span>
              <span>→</span>
              <span className="text-concrete font-medium">Record</span>
              <span>→</span>
              <span className="text-concrete font-medium">Ship</span>
            </div>

            <div className="mt-3 text-frost/60">
              ChatGPT → CodePen → Cursor / Xcode → GitHub → Vercel
            </div>
          </div>
        </div>

        {/* CodePen reference */}
        <div>
          <h2 className="text-xl font-semibold text-concrete mb-6">
            Shared CodePen Reference
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pens.map((pen) => (
              <div
                key={pen.name}
                className="rounded-[20px] border border-white/5 bg-[#141414]/60 backdrop-blur-md p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm font-medium text-concrete">
                      {pen.name}
                    </div>
                    <div className="text-[0.7rem] uppercase tracking-widest text-frost/50">
                      {pen.scope} · {pen.owner}
                    </div>
                  </div>
                  <a
                    href={pen.href}
                    target="_blank"
                    className="text-[0.75rem] text-molten hover:underline whitespace-nowrap"
                  >
                    Open →
                  </a>
                </div>

                <p className="mt-3 text-sm text-frost/70">
                  {pen.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
