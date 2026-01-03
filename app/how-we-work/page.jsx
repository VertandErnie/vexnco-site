export default function HowWeWorkPage() {
  const tools = [
    {
      name: "ChatGPT",
      scope: "VE · Curate",
      description:
        "Primary thinking surface. Used to reason through systems, language, flows, edge cases, and architectural decisions before code exists.",
      href: "https://chat.openai.com",
    },
    {
      name: "GitHub",
      scope: "VE · Curate",
      description:
        "System of record. All deployable code, version history, and shared state live here.",
      href: "https://github.com",
    },
    {
      name: "Cursor",
      scope: "VE · Curate",
      description:
        "AI-assisted development environment. Used for fast iteration, refactors, and code exploration.",
      href: "https://cursor.sh",
    },
    {
      name: "Xcode",
      scope: "Curate",
      description:
        "Native iOS development environment for building, testing, and shipping Curate.",
      href: "https://developer.apple.com/xcode/",
    },
    {
      name: "Vercel",
      scope: "VE",
      description:
        "Deployment and hosting layer for VE demos and internal portals.",
      href: "https://vercel.com",
    },
    {
      name: "CodePen",
      scope: "VE",
      description:
        "Sandbox and demonstration layer. Used to explore behavior and visual logic before formalization.",
      href: "https://codepen.io",
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

      <div className="relative max-w-5xl mx-auto px-6 pt-28 pb-32 space-y-16">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="text-[0.7rem] uppercase tracking-widest text-frost/50 mb-3">
            Internal Operating Guide
          </div>
          <h1 className="text-3xl md:text-4xl font-semibold text-concrete">
            How We Work
          </h1>
          <p className="mt-4 text-frost/70 leading-relaxed">
            This page documents the tools, systems, and references we use to
            design, build, and operate VE and Curate.
          </p>
        </div>

        {/* Tools */}
        <div>
          <h2 className="text-xl font-semibold text-concrete mb-6">
            Core Tools
          </h2>

          <div className="grid gap-4">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="rounded-[20px] border border-white/5 bg-[#141414]/60 backdrop-blur-md p-5"
              >
                <div className="flex items-center justify-between">
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
                <p className="mt-3 text-sm text-frost/70">
                  {tool.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* How they relate */}
        <div className="max-w-3xl">
          <h2 className="text-xl font-semibold text-concrete mb-4">
            How These Tools Fit Together
          </h2>

          <p className="text-frost/70 leading-relaxed">
            We treat tools as layers in a workflow, not standalone utilities.
          </p>

          <ul className="mt-4 space-y-3 text-frost/70 text-sm">
            <li>
              <strong className="text-concrete">ChatGPT</strong> is where thinking
              starts — concepts, language, and system models.
            </li>
            <li>
              <strong className="text-concrete">Cursor and Xcode</strong> turn
              those ideas into executable systems.
            </li>
            <li>
              <strong className="text-concrete">GitHub</strong> is the system of
              record for everything that matters.
            </li>
            <li>
              <strong className="text-concrete">Vercel</strong> makes VE visible
              early and often.
            </li>
            <li>
              <strong className="text-concrete">CodePen</strong> remains a safe
              place to explore behavior before commitment.
            </li>
          </ul>
        </div>

        {/* CodePen index */}
        <div>
          <h2 className="text-xl font-semibold text-concrete mb-6">
            Shared CodePen Reference
          </h2>

          <div className="grid gap-4">
            {pens.map((pen) => (
              <div
                key={pen.name}
                className="rounded-[20px] border border-white/5 bg-[#141414]/60 backdrop-blur-md p-5"
              >
                <div className="flex items-center justify-between">
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
      </div>
    </section>
  );
}
