import "./globals.css";

export const metadata = {
  title: "VE × NCO – Private Prototype",
  description:
    "VE operational physics and NCO execution model — private concept portal."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-slate-100 antialiased">
        <div className="min-h-screen flex flex-col">
          {/* HEADER */}
          <header className="sticky top-0 z-20 backdrop-blur-md bg-slate-950/70 border-b border-slate-800/60">
            <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
              {/* BRAND */}
              <div className="flex items-center gap-3">
                <div className="h-7 w-7 rounded-md bg-gradient-to-br from-cyan-400 via-sky-400 to-emerald-400 shadow-[0_0_24px_rgba(34,211,238,0.45)]" />
                <div className="leading-tight">
                  <span className="font-semibold tracking-tight text-slate-100">
                    VE × NCO
                  </span>
                  <div className="text-[0.7rem] uppercase tracking-[0.16em] text-slate-500">
                    Operational Physics
                  </div>
                </div>
              </div>

              {/* NAV */}
              <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
                <a href="/" className="hover:text-cyan-300 transition">
                  Overview
                </a>
                <a href="/problem" className="hover:text-cyan-300 transition">
                  Problem
                </a>
                <a href="/model" className="hover:text-cyan-300 transition">
                  VE Model
                </a>
                <a href="/nco" className="hover:text-cyan-300 transition">
                  NCO
                </a>
                <a href="/prototypes" className="hover:text-cyan-300 transition">
                  Prototypes
                </a>
                <a href="/roadmap" className="hover:text-cyan-300 transition">
                  Roadmap
                </a>
                <a href="/team" className="hover:text-cyan-300 transition">
                  Team & Ask
                </a>
              </nav>
            </div>
          </header>

          {/* CONTENT */}
          <main className="flex-1">{children}</main>

          {/* FOOTER */}
          <footer className="border-t border-slate-900 text-[0.75rem] text-slate-500 py-6">
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
