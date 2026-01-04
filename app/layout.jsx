import "./globals.css";

export const metadata = {
  title: "VE × NCO – Private Prototype",
  description:
    "VE operational physics and NCO execution model — private concept portal.",
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
              <nav className="hidden md:flex items-center gap-6 text-[0.8rem] tracking-wide text-frost/70">
                {[
                  ["Overview", "/"],
                  ["Problem", "/problem"],
                  ["VE Model", "/model"],
                  ["NCO", "/nco"],
                  ["How We Work", "/how-we-work"],
                ].map(([label, href]) => (
                  <a
                    key={href}
                    href={href}
                    className="transition-colors hover:text-[#E0AE52]"
                  >
                    {label}
                  </a>
                ))}

                {/* Other Products dropdown (FIXED hover persistence) */}
                <div className="relative group">
                  {/* Hover anchor */}
                  <div
                    className="
                      flex items-center gap-2
                      cursor-pointer
                      transition-colors
                      group-hover:text-[#E0AE52]
                      py-2
                    "
                  >
                    <span>Other Products</span>
                    <span className="text-frost/40 group-hover:text-[#E0AE52]">
                      ▾
                    </span>
                  </div>

                  {/* Dropdown */}
                  <div
                    className="
                      absolute right-0 top-full
                      mt-1 w-56
                      rounded-[14px] border border-white/10
                      bg-[#121212]/95 backdrop-blur-md
                      shadow-[0_18px_55px_rgba(0,0,0,0.55)]
                      opacity-0 translate-y-1 pointer-events-none
                      group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
                      transition
                    "
                  >
                    {/* Hover bridge */}
                    <div className="absolute -top-3 left-0 right-0 h-3" />

                    <div className="p-2">
                      <a
                        href="/curate"
                        className="
                          block rounded-[12px] px-3 py-2
                          text-sm text-frost/80
                          hover:bg-white/5 hover:text-[#E0AE52]
                          transition
                        "
                      >
                        Curate
                        <div className="text-[0.7rem] text-frost/45 mt-0.5">
                          Consent-based iOS app
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
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
