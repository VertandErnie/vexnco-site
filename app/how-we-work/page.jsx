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

  // Working collection index (exploratory, not canonical)
  const workingPens = [
    {
      name: "VE × NCO Narrative Surface",
      description:
        "Early narrative and execution framing for VE × NCO as a system.",
      href: "https://codepen.io/team/vert/details/qENWezZ",
    },
    {
      name: "Operational Physics Shell v2",
      description:
        "Behavioral visualization of operational physics concepts.",
      href: "https://codepen.io/team/vert/details/pvymVNM",
    },
    {
      name: "Foundational Alignment Surface",
      description:
        "Exploration of intent, alignment, and system constraints.",
      href: "https://codepen.io/Chris-Graham-the-lessful/details/azNPKbg",
    },
    {
      name: "Execution Flow Exploration",
      description:
        "Experiments mapping intent to execution mechanics.",
      href: "https://codepen.io/Chris-Graham-the-lessful/details/qEZgpBo",
    },
    {
      name: "Deep Dive System Module",
      description:
        "Focused investigation into a single rule set or layer.",
      href: "https://codepen.io/Chris-Graham-the-lessful/details/KwzJdOM",
    },
    // Add more freely — this list is intentionally loose
  ];

  return (
    <section className="relative min-h-screen bg-[#0b0b0b] overflow-hidden">
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
                    className="text-[0.75rem] text-molten hover:underline"
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

        {/* How tools fit together */}
        {/* (UNCHANGED — intentionally preserved) */}

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
                    className="text-[0.75rem] text-molten hover:underline"
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
          <div className="flex items-start justify-between gap-6 flex-wrap mb-4">
            <div>
              <h2 className="text-xl font-semibold text-concrete mb-2">
                Working CodePen Collection
              </h2>
              <p className="max-w-3xl text-frost/70 text-sm">
                This index reflects the active working surface in CodePen. Entries
                may be exploratory, incomplete, or superseded.
              </p>
            </div>

            <a
              href="https://codepen.io/collection/pjrgrm"
              target="_blank"
              className="text-[0.75rem] text-molten hover:underline mt-1"
            >
              Open full collection →
            </a>
          </div>

          <div className="rounded-[16px] border border-white/5 bg-[#141414]/50 backdrop-blur-md max-h-[520px] overflow-y-auto divide-y divide-white/5">
            {workingPens.map((pen) => (
              <div
                key={pen.name}
                className="flex items-start justify-between gap-6 px-5 py-4"
              >
                <div>
                  <div className="text-sm font-medium text-concrete">
                    {pen.name}
                  </div>
                  <div className="text-sm text-frost/60 mt-1">
                    {pen.description}
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
