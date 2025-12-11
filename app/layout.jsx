import "./globals.css";

export const metadata = {
  title: "VE x NCO – Private Prototype",
  description: "VE operational physics and NCO execution model – private concept portal."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        <div className="min-h-screen flex flex-col">
          <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-sm sticky top-0 z-20">
            <div className="max-w-6xl mx-auto flex items-center justify-between px-5 sm:px-6 py-3.5 sm:py-4">
              <div className="flex items-center gap-2.5">
                <div className="h-7 w-7 rounded-md bg-gradient-to-br from-cyan-400 via-sky-400 to-emerald-400 shadow-[0_0_25px_rgba(34,211,238,0.45)]" />
                <div className="flex flex-col leading-tight">
                  <span className="font-semibold tracking-tight text-slate-50">
                    VE × NCO
                  </span>
                  <span className="text-[0.7rem] uppercase tracking-[0.16em] text-slate-500">
                    Operational Physics
                  </span>
                </div>
              </div>
              <nav className="hidden md:flex items-center gap-6 text-[0.8rem] text-slate-300">
                <a href="/" className="hover:text-cyan-300">
                  Overview
                </a>
                <a href="/problem" className="hover:text-cyan-300">
                  Problem
                </a>
                <a href="/model" className="hover:text-cyan-300">
                  VE Model
                </a>
                <a href="/nco" className="hover:text-cyan-300">
                  NCO
                </a>
                <a href="/prototypes" className="hover:text-cyan-300">
                  Prototypes
                </a>
                <a href="/roadmap" className="hover:text-cyan-300">
                  Roadmap
                </a>
                <a href="/team" className="hover:text-cyan-300">
                  Team &amp; Ask
                </a>
              </nav>
            </div>
          </header>

          <main className="flex-1">
            {children}
          </main>

          <footer className="border-t border-slate-900 text-[0.7rem] text-slate-500 py-3">
            <div className="max-w-6xl mx-auto px-5 sm:px-6 flex flex-col sm:flex-row gap-1 sm:gap-0 justify-between">
              <span>Private VE × NCO concept portal</span>
              <span>Not for distribution</span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
