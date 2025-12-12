import "./globals.css";

export const metadata = {
  title: "VE × NCO – Private Prototype",
  description:
    "VE operational physics and NCO execution model — private concept portal."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased text-frost bg-[#0b0b0b]">
        <div className="min-h-screen flex flex-col">

          {/* HEADER */}
          <header
            className="
              sticky top-0 z-30
              border-b border-white/5
              bg-gradient-to-b
              from-[#141414]/90
              via-[#101010]/80
              to-[#0b0b0b]/70
              backdrop-blur-md
            "
          >
            <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

              {/* Brand */}
              <div className="flex items-center gap-3">
                <div
                  className="
                    h-7 w-7 rounded-[10px]
                    bg-gradient-to-br
                    from-[#E0AE52]
                    via-[#D25A2C]
                    to-[#7a2f18]
                    shadow-[0_0_20px_rgba(224,174,82,0.35)]
                  "
                />
                <div className="leading-tight">
                  <div className="text-sm font-semibold tracking-tight text-frost">
                    VE × NCO
                  </div>
                  <div className="text-[0.65rem] uppercase tracking-widest text-frost/50">
                    Operational Physics
                  </div>
                </div>
              </div>

              {/* Nav */}
              <nav className="hidden md:flex gap-6 text-[0.8rem] tracking-wide text-frost/70">
                {[
                  ["Overview", "/"],
                  ["Problem", "/problem"],
                  ["VE Model", "/model"],
                  ["NCO", "/nco"],
                  ["Prototypes", "/prototypes"],
                  ["Roadmap", "/roadmap"],
                  ["Team & Ask", "/team"],
                ].map(([label, href]) => (
                  <a
                    key={href}
                    href={href}
                    className="transition-colors hover:text-[#E0AE52]"
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </div>
          </header>

          {/* CONTENT */}
          <main className="flex-1">{children}</main>

          {/* FOOTER */}
          <footer className="border-t border-white/5 text-[0.75rem] text-frost/50 py-6">
            <div className="max-w-6xl mx-auto px-6 flex justify-between">
              <span>Private VE × NCO prototype</span>
              <span>Not for distribution</span>
            </div>
          </footer>

        </div>
      </body>
    </html>
  );
}
