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

  // Top tier: intentional + referenced artifacts.
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

  const workingCollection = {
    name: "Website (Collection)",
    href: "https://codepen.io/collection/pjrgrm",
  };

  /**
   * Second tier: working index of what's in the collection.
   * CodePen blocks embedding full collection pages via iframe.
   * This list is the "in-portal directory" that links out.
   *
   * Add to this list freely; titles/descriptions can be rough.
   */
  const workingPens = [
    // Seeded with known solid pens; expand as you paste more.
    {
      name: "Brand Kit Idea 2.1",
      note: "Working",
      href: "https://codepen.io/team/vert/details/___REPLACE___",
      description: "Working surface: visual system / brand primitives exploration.",
    },
    {
      name: "Operational Physics Shell v2",
      note: "Working",
      href: "https://codepen.io/team/vert/details/pvymVNM",
      description: "Behavioral visualization of VE as a moving operational system.",
    },
    {
      name: "VE × NCO Narrative Surface",
      note: "Working",
      href: "https://codepen.io/team/vert/details/qENWezZ",
      description: "Narrative surface and structure exploration for VE × NCO.",
    },
    {
      name: "Foundational Alignment Surface",
      note: "Working",
      href: "https://codepen.io/Chris-Graham-the-lessful/details/azNPKbg",
      description: "Alignment and intent framing before execution layers.",
    },
    {
      name: "Execution Flow Exploration",
      note: "Working",
      href: "https://codepen.io/Chris-Graham-the-lessful/details/qEZgpBo",
      description: "Explores how intent moves into execution across boundaries.",
    },
    {
      name: "Deep Dive System Module",
      note: "Working",
      href: "https://codepen.io/Chris-Graham-the-lessful/details/KwzJdOM",
      description: "Focused module exploration of a single system layer or rule set.",
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
          <h2 className="text-xl font-semibold text-concrete mb-6">Core Tools</h2>

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

                <p className="mt-2 text-sm text-frost/70">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How tools fit together */}
        <div className="max-w-5xl">
          <h2 className="text-xl font-semibold text-concrete mb-4">
            How These Tools Fit Together
          </h2>

          <p className="text-frost/70 leading-relaxed">
            Tools are treated as layers in a workflow, each with a distinct role
            in moving ideas from concept to deployed system.
          </p>

          <div className="mt-6 rounded-[16px] border border-white/5 bg-[#141414]/50 backdrop-blur-md p-6 text-sm text-frost/70 space-y-6">
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

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-frost/50">
                    <th className="text-left py-2 pr-4 font-medium">Stage</th>
                    <th className="text-left py-2 pr-4 font-medium">Tool</th>
                    <th className="text-left py-2 pr-4 font-medium">Purpose</th>
                    <th className="text-left py-2 font-medium">Hands Off To</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4 text-concrete">Think</td>
                    <td className="pr-4">ChatGPT</td>
                    <td className="pr-4">
                      Form system models, language, constraints, and reasoning
                      before any implementation exists.
                    </td>
                    <td>CodePen</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4 text-concrete">Explore</td>
                    <td className="pr-4">CodePen</td>
                    <td className="pr-4">
                      Test behaviors, flows, and visual logic in isolation without
                      committing to architecture.
                    </td>
                    <td>Cursor / Xcode</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4 text-concrete">Build</td>
                    <td className="pr-4">Cursor / Xcode</td>
                    <td className="pr-4">
                      Turn validated behavior into real, executable systems.
                    </td>
                    <td>GitHub</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4 text-concrete">Record</td>
                    <td className="pr-4">GitHub</td>
                    <td className="pr-4">
                      Serve as the canonical record for code, history, and shared
                      state.
                    </td>
                    <td>Vercel</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 text-concrete">Ship</td>
                    <td className="pr-4">Vercel</td>
                    <td className="pr-4">
                      Deploy and expose working systems for use, review, and
                      iteration.
                    </td>
                    <td>—</td>
                  </tr>
                </tbody>
              </table>
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

                <p className="mt-3 text-sm text-frost/70">{pen.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Working CodePen Collection (Directory) */}
        <div>
          <div className="flex items-start justify-between gap-6 flex-wrap">
            <div>
              <h2 className="text-xl font-semibold text-concrete mb-3">
                Working CodePen Collection
              </h2>
              <p className="max-w-3xl text-frost/70 text-sm">
                This is the working index of what currently exists in the CodePen
                collection. It’s meant for navigation and visibility, not endorsement.
              </p>
            </div>

            <a
              href={workingCollection.href}
              target="_blank"
              className="text-[0.75rem] text-molten hover:underline whitespace-nowrap mt-1"
            >
              Open collection →
            </a>
          </div>

          <div className="mt-6 rounded-[16px] border border-white/5 bg-[#141414]/50 backdrop-blur-md">
            <div className="px-5 py-4 border-b border-white/5 flex items-center justify-between">
              <div className="text-[0.7rem] uppercase tracking-widest text-frost/50">
                Collection Directory
              </div>
              <div className="text-xs text-frost/50">
                {workingPens.length} items (manual index)
              </div>
            </div>

            <div className="max-h-[520px] overflow-y-auto">
              {workingPens.map((p, idx) => (
                <div
                  key={`${p.href}-${idx}`}
                  className="px-5 py-4 border-b border-white/5 last:border-b-0"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <div className="text-sm font-medium text-concrete truncate">
                          {p.name}
                        </div>
                        {p.note ? (
                          <span className="text-[0.65rem] uppercase tracking-widest text-frost/40">
                            {p.note}
                          </span>
                        ) : null}
                      </div>

                      {p.description ? (
                        <div className="mt-1 text-sm text-frost/70">
                          {p.description}
                        </div>
                      ) : (
                        <div className="mt-1 text-sm text-frost/50">
                          No description yet.
                        </div>
                      )}
                    </div>

                    <a
                      href={p.href}
                      target="_blank"
                      className="text-[0.75rem] text-molten hover:underline whitespace-nowrap"
                    >
                      Open →
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="px-5 py-4 border-t border-white/5 text-xs text-frost/50">
              CodePen blocks embedding full collection pages inside iframes.
              This directory keeps navigation inside the portal while the full collection stays one click away.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
