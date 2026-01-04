export default function CuratePage() {
  const lockedScope = [
    "Two-person pairing model only",
    "Asynchronous photo submission and approval",
    "Explicit state transitions (pending → approved / rejected)",
    "No public feeds, discovery, or virality mechanics",
    "No real-time sync requirements",
    "Approved photos are stored locally on the user’s device",
    "Curate does not function as a long-term cloud photo vault",
    "Backend services are transactional only (auth, pairing, metadata, event logging)",
  ];

  const costRows = [
    {
      label: "Apple Developer Program",
      value: "$99/year",
      note: "Required. Only mandatory cost to reach App Store assuming scope stays locked.",
    },
    {
      label: "Backend / infrastructure",
      value: "$0–$50/month",
      note: "Early usage. Transactional backend only. No media storage, no real-time services.",
    },
    {
      label: "Branding / logo polish",
      value: "$0–$500",
      note: "Optional. Not a launch blocker.",
    },
    {
      label: "Targeted external help",
      value: "$2k–$5k",
      note: "Optional later. Example: image pipeline hardening. Not required for launch.",
    },
  ];

  const revenueScenarios = [
    {
      tier: "Conservative adoption",
      couples: "2,000 paid couples",
      price: "$8.99 avg",
      gross: "≈ $18k gross",
      whyItMatters:
        "Covers costs, proves willingness to pay, de-risks further investment.",
    },
    {
      tier: "Moderate adoption",
      couples: "10,000 paid couples",
      price: "$8.99 avg",
      gross: "≈ $90k gross",
      whyItMatters:
        "Self-sustaining product. No outside funding required. Clear optionality.",
    },
    {
      tier: "High-confidence success",
      couples: "50,000 paid couples",
      price: "$8.99 avg",
      gross: "≈ $450k gross",
      whyItMatters:
        "Leverage without headcount explosion. Still low infra complexity.",
    },
  ];

  const roadmap = [
    {
      title: "Phase 0 - MVP (current)",
      meta: "Late MVP / pre-public alpha",
      summary:
        "Core pairing + submission + approval flows exist end-to-end. Remaining work is correctness, performance, polish.",
      expand: [
        "Status: ~90% built",
        "Architecture separated (UI vs business logic)",
        "Known issues: performance and rendering edge cases",
        "No known architectural blockers",
        "Ships as fully free",
      ],
    },
    {
      title: "Phase 1 - Private TestFlight alpha",
      meta: "Real couples, real devices",
      summary:
        "Validate trust, stability, and real-life behavior. Fix only trust-breaking or performance issues. No scope drift.",
      expand: [
        "Fix only trust-breaking issues",
        "Fix only performance issues",
        "No feature expansion",
        "No scope drift",
        "Use feedback to confirm clarity and retention",
      ],
    },
    {
      title: "Phase 2 - MVP release (free, time-limited)",
      meta: "Validate usage at low risk",
      summary:
        "Public-facing MVP remains small and calm. Paid tier stays dormant but ready.",
      expand: [
        "Free tier active",
        "Paid tier dormant but ready",
        "No refactor required to enable monetization later",
        "No infrastructure change required to enable monetization later",
      ],
    },
    {
      title: "Phase 3 - V1 paid / free model",
      meta: "Monetization-ready via feature flags",
      summary:
        "Enable paid tier once stability and value are proven. Early adopters keep full feature status for life.",
      expand: [
        "Paid tier activation (already architected)",
        "Expanded organization options (V1)",
        "No cloud sync promises",
        "No social features",
        "Pricing range: $7.99–$9.99 per couple (single purchase or subscription later)",
      ],
    },
    {
      title: "Phase 4 - Optional expansion",
      meta: "Only if metrics justify it",
      summary:
        "Add value without betraying core values. Still no feeds and no virality loops.",
      expand: [
        "Presentation mode",
        "Optional export / memory views",
        "Long-term approved history (still local-first unless explicitly changed)",
      ],
    },
  ];

  const faqs = [
    {
      q: "Are we underestimating technical risk?",
      a: "No. Risk was reduced early through scope discipline. Remaining risks are known, visible, and solvable within the current architecture.",
    },
    {
      q: "Why not hire a developer now just to be safe?",
      a: "Because there’s no evidence-based need yet. Hiring now would be speculative. Targeted help later, if usage justifies it, is more cost-effective.",
    },
    {
      q: "What about photo storage liability?",
      a: "Approved photos are stored locally on the device. Curate does not promise cloud permanence. This aligns with privacy, trust, and low operating cost.",
    },
    {
      q: "Can this be monetized without more infrastructure?",
      a: "Yes. Monetization is feature gating, not a backend rewrite. Paid/free can be enabled without architectural changes.",
    },
    {
      q: "What would force higher spend later?",
      a: "Only a conscious scope change (cloud history, real-time sync, groups) or sustained usage that justifies optimization. Neither is required for launch.",
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0c0d14]">
      {/* CURATE COLOR FIELD */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1100px_800px_at_15%_10%,rgba(236,72,153,0.6),transparent_45%),radial-gradient(900px_700px_at_85%_55%,rgba(59,130,246,0.6),transparent_45%),radial-gradient(700px_600px_at_45%_90%,rgba(168,85,247,0.55),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/5 to-black/20" />

      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-32 space-y-16">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="text-[0.7rem] uppercase tracking-widest text-white/70 mb-3">
            Other Products
          </div>

          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-[14px] bg-gradient-to-br from-fuchsia-400 via-violet-500 to-sky-400 shadow-[0_0_36px_rgba(236,72,153,0.65)]" />
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">
              Curate
            </h1>
          </div>

          <p className="mt-5 text-white/85 leading-relaxed text-[1.05rem]">
            A private, consent-based iOS app that formalizes how two people
            already share and approve personal photos. Intentionally small,
            non-performative, trust-first.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "iOS app",
              "Two-person pairing",
              "Approval ritual",
              "Local-first",
              "Monetization-ready",
            ].map((chip) => (
              <span
                key={chip}
                className="text-[0.7rem] uppercase tracking-widest text-white/75 border border-white/20 bg-white/20 rounded-full px-3 py-1"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        {/* Snapshot panels */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {[
            ["Status", "Late MVP / pre-public alpha. Core flows implemented end-to-end. Remaining work is stability, performance, and polish."],
            ["Cost floor", "The only mandatory cost to reach the App Store is the Apple Developer Program. Early operating costs remain low due to local-first photo storage and transactional backend design."],
            ["Why the ROI is real", "The behavior already exists. Couples are hacking a solution today. Curate makes that ritual private, affirming, and consistent without scaling infra costs linearly with users."]
          ].map(([title, body]) => (
            <div
              key={title}
              className="rounded-[18px] border border-white/20 bg-white/20 backdrop-blur-xl p-6"
            >
              <div className="text-white font-medium">{title}</div>
              <div className="mt-2 text-white/85 text-sm leading-relaxed">
                {body}
              </div>
            </div>
          ))}
        </div>

        {/* App surface placeholders */}
        <div className="space-y-4">
          <div>
            <div className="text-[0.75rem] uppercase tracking-widest text-white/70">
              App surface
            </div>
            <h2 className="mt-2 text-2xl font-semibold text-white">
              Simple UI, calm ritual
            </h2>
            <p className="mt-3 text-white/80 max-w-3xl leading-relaxed">
              This is intentionally small. The goal is trust and clarity, not
              features for their own sake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {["Settings", "Pairing", "Connected"].map((label) => (
              <div
                key={label}
                className="rounded-[22px] border border-white/20 bg-white/20 backdrop-blur-xl p-4"
              >
                <div className="text-[0.7rem] uppercase tracking-widest text-white/70 mb-3">
                  {label}
                </div>
                <div className="relative w-full aspect-[9/16] rounded-[18px] bg-gradient-to-br from-fuchsia-500/25 via-violet-500/25 to-sky-500/25 flex items-center justify-center text-white/60">
                  Screenshot placeholder
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* EVERYTHING BELOW: SAME CONTENT, BRIGHTER SURFACES */}
        {/* Locked scope */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-[22px] border border-white/20 bg-white/20 backdrop-blur-xl p-7">
            <div className="text-[0.75rem] uppercase tracking-widest text-white/70">
              Product scope
            </div>
            <h2 className="mt-3 text-2xl font-semibold text-white">
              Locked decisions (non-negotiable)
            </h2>
            <p className="mt-4 text-white/80 leading-relaxed">
              Curate is intentionally scoped to avoid the cost, risk, and
              complexity that typically force early hiring or infrastructure
              spend. This scope is what makes the cost model viable.
            </p>

            <ul className="mt-5 space-y-2 text-white/85 text-sm">
              {lockedScope.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-gradient-to-r from-fuchsia-400 to-sky-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[22px] border border-white/20 bg-white/20 backdrop-blur-xl p-7">
            <div className="text-[0.75rem] uppercase tracking-widest text-white/70">
              Technical status
            </div>
            <h2 className="mt-3 text-2xl font-semibold text-white">
              Reality check
            </h2>

            <div className="mt-5 space-y-4 text-sm text-white/85">
              {[
                "Architecture separated (UI vs business logic)",
                "Core user flows implemented end-to-end",
                "Known issues: performance and rendering edge cases",
                "No known architectural blockers",
                "Monetization is feature flags, not rewrites",
              ].map((t) => (
                <div
                  key={t}
                  className="rounded-[16px] border border-white/20 bg-white/15 p-4"
                >
                  {t}
                </div>
              ))}
            </div>

            <div className="mt-5 text-white/80 text-sm">
              This is no longer an idea-phase product. It is in execution and
              refinement.
            </div>
          </div>
        </div>

        {/* Cost + Investment */}
        <div className="rounded-[22px] border border-white/20 bg-white/20 backdrop-blur-xl p-7">
          <div className="flex items-start justify-between gap-6 flex-wrap">
            <div>
              <div className="text-[0.75rem] uppercase tracking-widest text-white/70">
                Cost and investment
              </div>
              <h2 className="mt-3 text-2xl font-semibold text-white">
                Grounded cost model, not hypothetical burn
              </h2>
              <p className="mt-3 text-white/80 max-w-3xl leading-relaxed">
                Curate’s cost model stays viable because it avoids media storage,
                real-time systems, and social infrastructure. Local-first storage
                reduces cost, risk, and liability.
              </p>
            </div>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="text-white/70 border-b border-white/20">
                  <th className="text-left py-3 pr-4 font-medium">Line item</th>
                  <th className="text-left py-3 pr-4 font-medium">Range</th>
                  <th className="text-left py-3 font-medium">Notes</th>
                </tr>
              </thead>
              <tbody>
                {costRows.map((r) => (
                  <tr key={r.label} className="border-b border-white/10">
                    <td className="py-3 pr-4 text-white">{r.label}</td>
                    <td className="py-3 pr-4 text-white/85 whitespace-nowrap">
                      {r.value}
                    </td>
                    <td className="py-3 text-white/80">{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Revenue and ROI */}
        <div className="rounded-[22px] border border-white/20 bg-white/20 backdrop-blur-xl p-7">
          <div>
            <div className="text-[0.75rem] uppercase tracking-widest text-white/70">
              Revenue and ROI
            </div>
            <h2 className="mt-3 text-2xl font-semibold text-white">
              Conservative scenarios, clear math
            </h2>
            <p className="mt-3 text-white/80 max-w-3xl leading-relaxed">
              These are not hype scenarios. They’re simple adoption math under
              a locked scope and a low operating cost model.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {revenueScenarios.map((s) => (
              <div
                key={s.tier}
                className="rounded-[18px] border border-white/20 bg-white/15 p-6"
              >
                <div className="text-white font-medium">{s.tier}</div>
                <div className="mt-3 text-sm text-white/85">{s.couples}</div>
                <div className="mt-1 text-sm text-white/75">{s.price}</div>
                <div className="mt-3 text-xl font-semibold text-white">
                  {s.gross}
                </div>
                <div className="mt-3 text-sm text-white/80 leading-relaxed">
                  {s.whyItMatters}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="space-y-4">
         
