/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // --- VE Steel World Tokens ---
        steel: "#263038",
        carbon: "#181A1F",
        hudson: "#3A3F48",
        manhattan: "#1D1E22",
        frost: "#C3C7D1",
        concrete: "#D6D9DE",

        // --- VE Warm Material ---
        ember: "#D25A2C",
        molten: "#E6AE52",

        // --- VE Accent Grays ---
        fog: "#C7C9C3",
        graphite: "#2E3238",
      },

      // VE Signature Radius
      borderRadius: {
        ve: "22px",
      },

      // VE Material Shadows
      boxShadow: {
        "ve-panel": "0 24px 64px rgba(0,0,0,0.65)",
        "ve-soft": "0 8px 20px rgba(0,0,0,0.35)",
        "ve-inset": "inset 0 0 8px rgba(255,255,255,0.08)",
      },

      backgroundImage: {
        // VE steel hero environment
        "ve-hero":
          "linear-gradient(to bottom right, rgba(24,26,31,0.92), rgba(38,48,56,0.88))",

        // VE molten seam glow layered subtly onto panels
        "ve-warm":
          "radial-gradient(circle at 0% 100%, rgba(230,174,82,0.08), transparent 70%), radial-gradient(circle at 100% 0%, rgba(210,90,44,0.06), transparent 75%)",
        
        // VE deep steel card background
        "ve-panel":
          "linear-gradient(to bottom right, rgba(24,26,31,0.92), rgba(38,48,56,0.85))",
      },
    },
  },
  plugins: [],
};
