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

  const authoritativePens = [
    {
      name: "VE × NCO Website System (Project)",
      scope: "VE",
      description:
        "Project-level container for the VE × NCO website system, including layout, structure, and interaction experiments.",
      href: "https://codepen.io/team/vert/project/details/ZwjBnJ",
    },
    {
      name: "VE × NCO Narrative Surface",
      scope: "VE",
      description:
        "Narrative and structural exploration of VE × NCO concepts as a coherent system surface.",
      href: "https://codepen.io/team/vert/details/qENWezZ",
    },
    {
      name: "Operational Physics Shell v2",
      scope: "VE",
      description:
        "Primary behavioral visualization of VE as a moving operational system.",
      href: "https://codepen.io/team/vert/details/pvymVNM",
    },
    {
      name: "Foundational Alignment Surface",
      scope: "VE · NCO",
      description:
        "Explores alignment, constraints, and system intent before execution layers are applied.",
      href: "https://codepen.io/Chris-Graham-the-lessful/details/azNPKbg",
    },
    {
      name: "Execution Flow Exploration",
      scope: "VE · NCO",
      description:
        "Investigates how intent transitions into execution across system boundaries.",
      href: "https://codepen.io/Chris-Graham-the-lessful/details/qEZgpBo",
    },
    {
      name: "Deep Dive System Module",
      scope: "VE",
      description:
        "Focused exploration of a single system layer or rule set in isolation.",
      href: "https://codepen.io/Chris-Graham-the-lessful/details/KwzJdOM",
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
        <div className="max-w-5xl">
          <h2 className="text-xl font-semibold text-concrete mb-4">
            How These Tools Fit Together
          </h2>

          <p className="text-frost/70 leading-relaxed">
            Tools are treated as layers in a workflow, each with a distinct role
            in moving ideas from concept to deployed system.
          </p>

          <div className="mt-6 rounded-[16px] border border-white/5 bg-[#141414]/50 backdrop-blur-md p-6 space-y-6 text-sm text-frost/70">
            <div>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-2 text-concrete font-medium">
                <span>Think</span>
                <span className="text-frost/40">→</span>
                <span>Explore</span>
                <span className="text-frost/40">→</span>
                <span>Build</span>
                <span className="text-frost/40">→</span>
                <span>Record</span>
                <span className="text-frost/40">→</span>
                <span>Ship</span>
              </div>
              <div className="mt-2 text-frost/60">
                ChatGPT → CodePen → Cursor / Xcode → GitHub → Vercel
              </div>
            </div>
          </div>
        </div>

        {/* Authoritative CodePen References */}
        <div>
          <h2 className="text-xl font-semibold text-concrete mb-6">
            Authoritative CodePen References
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {authoritativePens.map((pen) => (
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
                      {pen.scope}
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

        {/* Working CodePen Collection */}
        <div>
          <h2 className="text-xl font-semibold text-concrete mb-3">
            Working CodePen Collection
          </h2>
          <p className="text-frost/60 text-sm max-w-3xl mb-6">
            This view reflects the active working surface. Not all pens below are
            canonical or complete, but they represent ongoing exploration and
            iteration.
          </p>

          <div className="rounded-[20px] border border-white/5 bg-[#0f0f0f]/60 backdrop-blur-md overflow-hidden">
            <iframe
              src="https://codepen.io/collection/pjrgrm"
              className="w-full h-[600px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
