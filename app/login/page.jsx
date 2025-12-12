"use client";

import { useState } from "react";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (password !== "ve-access") {
      setError("Incorrect access key.");
      return;
    }

    await fetch("/api/auth", {
      method: "POST",
      body: JSON.stringify({ ok: true })
    });

    window.location.href = "/";
  }

  return (
    <div
      className="
        min-h-screen flex items-center justify-center
        bg-gradient-to-br
        from-[#0b0b0b]
        via-[#121212]
        to-[#161616]
        relative overflow-hidden
      "
    >
      {/* Ambient material glow */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[420px] w-[420px] rounded-full bg-[#E0AE52]/10 blur-[180px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[420px] w-[420px] rounded-full bg-[#D25A2C]/10 blur-[180px]" />

      <div
        className="
          relative w-full max-w-sm
          rounded-[22px]
          border border-white/5
          bg-gradient-to-b
          from-[#161616]/90
          to-[#0e0e0e]/90
          shadow-[0_30px_80px_rgba(0,0,0,0.6)]
          backdrop-blur-xl
        "
      >
        <div className="px-8 py-7">

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-4">
            <span className="h-2 w-2 rounded-full bg-[#E0AE52] shadow-[0_0_10px_rgba(224,174,82,0.6)]" />
            <span className="text-[0.7rem] tracking-widest uppercase text-frost/60">
              Private Access
            </span>
          </div>

          {/* Title */}
          <h1 className="text-xl font-semibold tracking-tight text-concrete">
            VE × NCO Prototype Portal
          </h1>

          {/* Copy */}
          <p className="mt-3 text-[0.85rem] leading-relaxed text-frost/70">
            This space contains early concepts, models, and system behavior
            experiments. Enter the access key to continue.
          </p>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="mt-6 grid gap-3"
          >
            <label
              htmlFor="password"
              className="text-[0.7rem] uppercase tracking-widest text-frost/50"
            >
              Access key
            </label>

            <input
              id="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              autoComplete="off"
              className="
                rounded-[14px]
                bg-[#0f0f0f]
                border border-white/10
                px-4 py-2.5
                text-sm text-frost
                placeholder:text-frost/30
                focus:outline-none
                focus:border-[#E0AE52]
                focus:ring-1 focus:ring-[#E0AE52]/40
              "
            />

            {error && (
              <p className="text-[0.75rem] text-[#D25A2C]">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="
                mt-3
                rounded-[16px]
                px-4 py-2.5
                text-sm font-medium
                text-[#1a1208]
                bg-gradient-to-r
                from-[#E0AE52]
                via-[#E6B86A]
                to-[#D25A2C]
                hover:opacity-90
                transition
                shadow-[0_0_25px_rgba(224,174,82,0.35)]
              "
            >
              Enter
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
