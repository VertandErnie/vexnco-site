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
      body: JSON.stringify({ ok: true }),
    });

    window.location.href = "/";
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-48 -left-48 h-[520px] w-[520px] rounded-full bg-molten/10 blur-[200px]" />
      <div className="pointer-events-none absolute -bottom-48 -right-48 h-[520px] w-[520px] rounded-full bg-ember/10 blur-[200px]" />

      <div className="relative w-full max-w-sm rounded-ve bg-ve-panel border border-white/5 p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="ve-dot" />
          <span className="ve-section-label">Private Access</span>
        </div>

        <h1 className="text-xl font-semibold text-concrete">
          VE × NCO Prototype Portal
        </h1>

        <p className="mt-3 text-sm text-frost/80">
          This space contains early concepts, models, and demos.
          Enter the access key to continue.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <label className="text-xs uppercase tracking-widest text-frost/60">
            Access key
          </label>

          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="
              w-full rounded-lg
              bg-black/40
              border border-white/10
              px-3 py-2
              text-sm text-frost
              focus:outline-none
              focus:ring-2 focus:ring-molten/40
            "
          />

          {error && (
            <p className="text-sm text-ember">{error}</p>
          )}

          <button
            type="submit"
            className="
              w-full mt-2 rounded-lg
              bg-gradient-to-r from-[#E0AE52] via-[#D25A2C] to-[#7a2f18]
              px-3 py-2
              text-sm font-medium
              text-black
              hover:opacity-90 transition
            "
          >
            Enter
          </button>
        </form>
      </div>
    </div>
  );
}
