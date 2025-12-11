/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // VE Steel Palette
        steel: "#263038",
        carbon: "#181A1F",
        hudson: "#3A3F48",
        manhattan: "#1D1E22",
        frost: "#C3C7D1",

        // Warm Identity
        ember: "#D25A2C",
        molten: "#E6AE52",

        // NCO Moss Palette (subtle usage)
        moss: "#607764",
        forest: "#4F5A47",
        pacific: "#2F3E47",
        slateve: "#505153", // renaming to avoid Tailwind's "slate"
        fog: "#C7C9C3"
      },

      borderRadius: {
        ve: "22px" // the VE signature radius R2
      },

      boxShadow: {
        "ve-panel": "0 24px 48px rgba(0,0,0,0.6)",
        "ve-inset": "inset 0 0 8px rgba(255,255,255,0.08)"
      },

      backgroundImage: {
        "ve-hero":
          "radial-gradient(circle at 0% 0%, rgba(38,48,56,0.55), transparent 60%), radial-gradient(circle at 100% 100%, rgba(210,90,44,0.28), transparent 55%)",
        "ve-panel":
          "linear-gradient(to bottom right, rgba(24,26,31,0.9), rgba(38,48,56,0.85))",
        "ve-warm":
          "radial-gradient(circle at 0% 100%, rgba(230,174,82,0.05), transparent 70%)"
      }
    }
  },
  plugins: []
};
