import Image from "next/image";

export default function CuratePage() {
  // Screenshots:
  // Put your app screenshots here:
  // /public/curate/screen-settings.png
  // /public/curate/screen-pair.png
  // /public/curate/screen-connected.png
  //
  // If you do not add the files yet, the page still works. The images will just 404.

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
    <section className="relative min-h-screen overflow-hidden bg-[#07080c]">
      {/* Curate ambient gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_900px_at_20%_10%,rgba(236,72,153,0.38),transparent_55%),radial-gradient(1000px_800px_at_80%_65%,rgba(59,130,246,0.38),transparent_55%),radial-gradient(700px_500px_at_40%_90%,rgba(168,85,247,0.32),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/25 to-black/45" />

      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-32 space-y-16">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="text-[0.7rem] uppercase tracking-widest text-white/55 mb-3">
            Other Products
          </div>

          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-[14px] bg-gradient-to-br from-fuchsia-400 via-violet-500 to-sky-400 shadow-[0_0_22px_rgba(168,85,247,0.25)]" />
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">
              Curate
            </h1>
          </div>

          <p className="mt-5 text-white/70 leading-relaxed text-[1.05rem]">
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
                className="text-[0.7rem] uppercase tracking-widest text-white/60 border border-white/10 bg-white/8 rounded-full px-3 py-1"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        {/* Snapshot panels */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="rounded-[18px] border border-white/10 bg-white/8 backdrop-blur-md p-6">
            <div className="text-white font-medium">Status</div>
            <div className="mt-2 text-white/75 text-sm leading-relaxed">
              Late MVP / pre-public alpha. Core flows implemented end-to-end.
              Remaining work is stability, performance, and polish.
            </div>
          </div>

          <div className="rounded-[18px] border border-white/10 bg-white/8 backdrop-blur-md p-6">
            <div className="text-white font-medium">Cost floor</div>
            <div className="mt-2 text-white/75 text-sm leading-relaxed">
              The only mandatory cost to reach the App Store is the Apple
              Developer Program. Early operating costs remain low due to
              local-first photo storage and transactional backend design.
            </div>
          </div>

          <div className="rounded-[18px] border border-white/10 bg-white/8 backdrop-blur-md p-6">
            <div className="text-white font-medium">Why the ROI is real</div>
            <div className="mt-2 text-white/75 text-sm leading-relaxed">
              The behavior already exists. Couples are hacking a solution today.
              Curate makes that ritual private, affirming, and consistent
              without scaling infra costs linearly with users.
            </div>
          </div>
        </div>

        {/* Problem + whitespace */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-[22px] border border-white/10 bg-white/8 backdrop-blur-md p-7">
            <div className="text-[0.75rem] uppercase tracking-widest text-white/55">
              The problem
            </div>
            <h2 className="mt-3 text-2xl font-semibold text-white">
              The friction everyone feels but nobody names
            </h2>
            <p className="mt-4 text-white/75 leading-relaxed">
              Couples constantly navigate which photos are okay to post, share,
              or keep. Approval happens via text threads, AirDrop, camera roll
              chaos, and “did you post that?” moments after the fact. It’s not
              catastrophic. It’s constant.
            </p>
            <p className="mt-4 text-white/75 leading-relaxed">
              Curate turns that manual effort into a lightweight ritual that is
              private, affirming, and intentional. No audience. No performance.
              Just two people aligned.
            </p>
          </div>

          <div className="rounded-[22px] border border-white/10 bg-white/8 backdrop-blur-md p-7">
            <div className="text-[0.75rem] uppercase tracking-widest text-white/55">
              The whitespace
            </div>
            <h3 className="mt-3 text-xl font-semibold text-white">
              Not a feature gap. A values gap.
            </h3>
            <p className="mt-4 text-white/75 leading-relaxed">
              Curate is not competing with Instagram, Apple Photos, Google
              Photos, shared albums, or messaging apps. Those tools optimize for
              broadcasting, storage, scale, performance, and audience reaction.
            </p>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="rounded-[16px] border border-white/10 bg-black/15 p-4">
                <div className="text-white font-medium">Most tools optimize for</div>
                <ul className="mt-2 space-y-1 text-white/70">
                  <li>Broadcasting</li>
                  <li>Storage</li>
                  <li>Scale</li>
                  <li>Performance</li>
                  <li>Audience reaction</li>
                </ul>
              </div>
              <div className="rounded-[16px] border border-white/10 bg-black/15 p-4">
                <div className="text-white font-medium">Curate optimizes for</div>
                <ul className="mt-2 space-y-1 text-white/70">
                  <li>Consent</li>
                  <li>Mutuality</li>
                  <li>Emotional safety</li>
                  <li>Relationship trust</li>
                  <li>Private alignment</li>
                </ul>
              </div>
            </div>

            <div className="mt-5 text-white/70 text-sm">
              No feeds. No algorithms. No virality loops. Growth happens outside
              the app through trust-based word of mouth.
            </div>
          </div>
        </div>

        {/* Showcase */}
        <div className="space-y-4">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <div className="text-[0.75rem] uppercase tracking-widest text-white/55">
                App surface
              </div>
              <h2 className="mt-2 text-2xl font-semibold text-white">
                Simple UI, calm ritual
              </h2>
              <p className="mt-3 text-white/70 max-w-3xl leading-relaxed">
                This is intentionally small. The goal is trust and clarity, not
                features for their own sake.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                src: "/curate/screen-settings.png",
                label: "Settings",
              },
              {
                src: "/curate/screen-pair.png",
                label: "Pairing",
              },
              {
                src: "/curate/screen-connected.png",
                label: "Connected",
              },
            ].map((s) => (
              <div
                key={s.src}
                className="rounded-[22px] border border-white/10 bg-white/8 backdrop-blur-md p-4"
              >
                <div className="text-[0.7rem] uppercase tracking-widest text-white/55 mb-3">
                  {s.label}
                </div>
                <div className="relative w-full aspect-[9/16] overflow-hidden rounded-[18px] border border-white/10 bg-black/25">
                  <Image
                    src={s.src}
                    alt={s.label}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                    priority={false}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="text-xs text-white/45">
            If screenshots are not present yet, add them under /public/curate/.
          </div>
        </div>

        {/* Locked scope + status */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-[22px] border border-white/10 bg-white/8 backdrop-blur-md p-7">
            <div className="text-[0.75rem] uppercase tracking-widest text-white/55">
              Product scope
            </div>
            <h2 className="mt-3 text-2xl font-semibold text-white">
              Locked decisions (non-negotiable)
            </h2>
            <p className="mt-4 text-white/70 leading-relaxed">
              Curate is intentionally scoped to avoid the cost, risk, and
              complexity that typically force early hiring or infrastructure
              spend. This scope is what makes the cost model viable.
            </p>

            <ul className="mt-5 space-y-2 text-white/75 text-sm">
              {lockedScope.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-gradient-to-r from-fuchsia-400 to-sky-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[22px] border border-white/10 bg-white/8 backdrop-blur-md p-7">
            <div className="text-[0.75rem] uppercase tracking-widest text-white/55">
              Technical status
            </div>
            <h2 className="mt-3 text-2xl font-semibold text-white">
              Reality check
            </h2>

            <div className="mt-5 space-y-4 text-sm text-white/75">
              <div className="rounded-[16px] border border-white/10 bg-black/15 p-4">
                Architecture separated (UI vs business logic)
              </div>
              <div className="rounded-[16px] border border-white/10 bg-black/15 p-4">
                Core user flows implemented end-to-end
              </div>
              <div className="rounded-[16px] border border-white/10 bg-black/15 p-4">
                Known issues: performance and rendering edge cases
              </div>
              <div className="rounded-[16px] border border-white/10 bg-black/15 p-4">
                No known architectural blockers
              </div>
              <div className="rounded-[16px] border border-white/10 bg-black/15 p-4">
                Monetization is feature flags, not rewrites
              </div>
            </div>

            <div className="mt-5 text-white/70 text-sm">
              This is no longer an idea-phase product. It is in execution and
              refinement.
            </div>
          </div>
        </div>

        {/* Cost + Investment */}
        <div className="rounded-[22px] border border-white/10 bg-white/8 backdrop-blur-md p-7">
          <div className="flex items-start justify-between gap-6 flex-wrap">
            <div>
              <div className="text-[0.75rem] uppercase tracking-widest text-white/55">
                Cost and investment
              </div>
              <h2 className="mt-3 text-2xl font-semibold text-white">
                Grounded cost model, not hypothetical burn
              </h2>
              <p className="mt-3 text-white/70 max-w-3xl leading-relaxed">
                Curate’s cost model stays viable because it avoids media storage,
                real-time systems, and social infrastructure. Local-first storage
                reduces cost, risk, and liability.
              </p>
            </div>

            <details className="w-full lg:w-auto">
              <summary className="cursor-pointer text-[0.8rem] text-white/70 hover:text-white transition">
                Expand: rationale and assumptions
              </summary>
              <div className="mt-3 rounded-[16px] border border-white/10 bg-black/15 p-4 text-sm text-white/75">
                <ul className="space-y-2">
                  <li>Transactional backend only: auth, pairing, metadata, events</li>
                  <li>No cloud photo vault promises</li>
                  <li>No public content hosting</li>
                  <li>No real-time sync requirements</li>
                  <li>Costs scale slowly and predictably under locked scope</li>
                </ul>
              </div>
            </details>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="text-white/55 border-b border-white/10">
                  <th className="text-left py-3 pr-4 font-medium">Line item</th>
                  <th className="text-left py-3 pr-4 font-medium">Range</th>
                  <th className="text-left py-3 font-medium">Notes</th>
                </tr>
              </thead>
              <tbody>
                {costRows.map((r) => (
                  <tr key={r.label} className="border-b border-white/5">
                    <td className="py-3 pr-4 text-white">{r.label}</td>
                    <td className="py-3 pr-4 text-white/80 whitespace-nowrap">
                      {r.value}
                    </td>
                    <td className="py-3 text-white/70">{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-5 text-white/70 text-sm">
            Bottom line: Curate can realistically reach the App Store as MVP/V1
            with only the Apple Developer Program cost, provided scope remains
            locked and launch focuses on correctness over invention.
          </div>
        </div>

        {/* Roadmap + timeline */}
        <div className="space-y-5">
          <div>
            <div className="text-[0.75rem] uppercase tracking-widest text-white/55">
              Phases and timeline
            </div>
            <h2 className="mt-2 text-2xl font-semibold text-white">
              Reality-based path from MVP to V1 monetization
            </h2>
            <p className="mt-3 text-white/70 max-w-3xl leading-relaxed">
              The plan is intentionally reversible and low-risk. We prove trust
              and stability first, then enable paid features without a rewrite.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {roadmap.map((step) => (
              <details
                key={step.title}
                className="rounded-[22px] border border-white/10 bg-white/8 backdrop-blur-md p-6"
              >
                <summary className="cursor-pointer list-none">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <div className="text-white font-medium">{step.title}</div>
                      <div className="mt-1 text-[0.75rem] uppercase tracking-widest text-white/55">
                        {step.meta}
                      </div>
                      <div className="mt-3 text-white/70 text-sm leading-relaxed">
                        {step.summary}
                      </div>
                    </div>
                    <div className="text-white/45 text-sm">Expand</div>
                  </div>
                </summary>

                <div className="mt-5 rounded-[16px] border border-white/10 bg-black/15 p-4 text-sm text-white/75">
                  <ul className="space-y-2">
                    {step.expand.map((x) => (
                      <li key={x} className="flex gap-3">
                        <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-gradient-to-r from-fuchsia-400 to-sky-400" />
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* Revenue and ROI */}
        <div className="rounded-[22px] border border-white/10 bg-white/8 backdrop-blur-md p-7">
          <div className="flex items-start justify-between gap-6 flex-wrap">
            <div>
              <div className="text-[0.75rem] uppercase tracking-widest text-white/55">
                Revenue and ROI
              </div>
              <h2 className="mt-3 text-2xl font-semibold text-white">
                Conservative scenarios, clear math
              </h2>
              <p className="mt-3 text-white/70 max-w-3xl leading-relaxed">
                These are not hype scenarios. They’re simple adoption math under
                a locked scope and a low operating cost model.
              </p>
            </div>

            <details className="w-full lg:w-auto">
              <summary className="cursor-pointer text-[0.8rem] text-white/70 hover:text-white transition">
                Expand: assumptions and why this is believable
              </summary>
              <div className="mt-3 rounded-[16px] border border-white/10 bg-black/15 p-4 text-sm text-white/75">
                <ul className="space-y-2">
                  <li>The problem already exists. People hack solutions today.</li>
                  <li>Couples don’t churn lightly once a ritual works.</li>
                  <li>Costs do not scale linearly with users under local-first design.</li>
                  <li>Growth does not require turning Curate into a social product.</li>
                </ul>
              </div>
            </details>
          </div>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {revenueScenarios.map((s) => (
              <div
                key={s.tier}
                className="rounded-[18px] border border-white/10 bg-black/15 p-6"
              >
                <div className="text-white font-medium">{s.tier}</div>
                <div className="mt-3 text-sm text-white/80">{s.couples}</div>
                <div className="mt-1 text-sm text-white/70">{s.price}</div>
                <div className="mt-3 text-xl font-semibold text-white">
                  {s.gross}
                </div>
                <div className="mt-3 text-sm text-white/70 leading-relaxed">
                  {s.whyItMatters}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-white/70 text-sm">
            Pricing range (locked): $7.99–$9.99 per couple. Single purchase or
            subscription can be toggled later.
          </div>
        </div>

        {/* FAQ */}
        <div className="space-y-4">
          <div>
            <div className="text-[0.75rem] uppercase tracking-widest text-white/55">
              Q and A
            </div>
            <h2 className="mt-2 text-2xl font-semibold text-white">
              Likely questions, clean answers
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="rounded-[22px] border border-white/10 bg-white/8 backdrop-blur-md p-6"
              >
                <summary className="cursor-pointer list-none">
                  <div className="text-white font-medium">{f.q}</div>
                  <div className="mt-2 text-sm text-white/60">
                    Expand
                  </div>
                </summary>
                <div className="mt-4 text-sm text-white/75 leading-relaxed">
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* Final bottom line */}
        <div className="rounded-[22px] border border-white/10 bg-gradient-to-r from-fuchsia-500/10 via-violet-500/10 to-sky-500/10 backdrop-blur-md p-7">
          <div className="text-white font-semibold text-xl">
            Bottom line
          </div>
          <div className="mt-3 text-white/75 leading-relaxed">
            Curate can realistically reach the App Store as MVP/V1 with only the
            Apple Developer Program cost, provided scope remains locked,
            development discipline holds, and launch focuses on correctness over
            invention.
          </div>
        </div>
      </div>
    </section>
  );
}
