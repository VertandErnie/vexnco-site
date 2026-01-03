"use client";


import { useState } from "react";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    const allowedPasswords = ["1012"];

    if (!validPasswords.includes(password)) {
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0b0b0b] via-[#121212] to-[#0b0b0b]">
      <div className="pointer-events-none absolute -top-40 -left-40 h-[420px] w-[420px] rounded-full bg-molten/10 blur-[180px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[420px] w-[420px] rounded-full bg-ember/10 blur-[180px]" />

      <form
        onSubmit={handleSubmit}
        className="relative z-10 w-full max-w-sm rounded-[24px] bg-[#141414]/80 backdrop-blur-xl border border-white/5 shadow-[0_0_40px_rgba(0,0,0,0.6)] p-8"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="h-7 w-7 rounded-[10px] bg-gradient-to-br from-[#E0AE52] via-[#D25A2C] to-[#7a2f18]" />
          <div>
            <div className="text-sm font-semibold text-frost">VE × NCO</div>
            <div className="text-[0.65rem] uppercase tracking-widest text-frost/50">
              Private Access
            </div>
          </div>
        </div>

        <h1 className="text-xl font-semibold text-concrete">
          Prototype Portal
        </h1>

        <p className="mt-2 text-sm text-frost/70">
          This space contains early concepts, models, and demos. Enter the access
          key to continue.
        </p>

        <div className="mt-6">
          <label className="block text-[0.7rem] uppercase tracking-widest text-frost/50 mb-1">
            Access key
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-[14px] bg-black/40 border border-white/10 px-4 py-2 text-sm text-frost focus:outline-none focus:ring-2 focus:ring-[#E0AE52]/40"
          />
        </div>

        {error && (
          <p className="mt-2 text-[0.75rem] text-red-400">{error}</p>
        )}

        <button
          type="submit"
          className="mt-6 w-full rounded-[16px] py-2 text-sm font-medium text-black bg-gradient-to-r from-[#E0AE52] to-[#D25A2C] hover:opacity-90 transition"
        >
          Enter
        </button>
      </form>
    </div>
  );
}
