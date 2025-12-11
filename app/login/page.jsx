"use client";

import { useState } from "react";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (password !== "ve-access") {
      setError("Incorrect password.");
      return;
    }

    // Set a simple auth cookie via client-side fetch
    await fetch("/api/auth", {
      method: "POST",
      body: JSON.stringify({ ok: true })
    });

    window.location.href = "/";
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-black">
      <div className="card section-narrow" style={{ maxWidth: "26rem" }}>
        <div style={{ padding: "1.75rem" }}>
          <div className="chip" style={{ marginBottom: "0.75rem" }}>
            <span className="chip-dot-both" />
            <span>Private Access</span>
          </div>
          <h1 className="text-2xl" style={{ margin: 0, color: "white" }}>
            VE × NCO Prototype Portal
          </h1>
          <p
            style={{
              marginTop: "0.75rem",
              fontSize: "0.9rem",
              color: "rgb(148,163,184)"
            }}
          >
            This space contains early concepts, models, and demos. Please enter
            the access key to continue.
          </p>

          <form
            onSubmit={handleSubmit}
            style={{ marginTop: "1.5rem", display: "grid", gap: "0.75rem" }}
          >
            <label
              htmlFor="password"
              style={{
                fontSize: "0.8rem",
                color: "rgb(148,163,184)",
                letterSpacing: "0.06em",
                textTransform: "uppercase"
              }}
            >
              Access key
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              autoComplete="off"
              className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400"
            />
            {error && (
              <p style={{ color: "#f97373", fontSize: "0.8rem" }}>{error}</p>
            )}
            <button
              type="submit"
              className="mt-2 rounded-lg px-3 py-2 text-sm font-medium bg-gradient-to-r from-cyan-500 to-emerald-400 text-slate-950 hover:opacity-90 transition"
            >
              Enter
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
