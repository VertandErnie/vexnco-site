import "./globals.css";

export const metadata = {
  title: "VE x NCO – Private Prototype",
  description: "VE operational physics and NCO execution model – private concept portal."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-slate-100 min-h-screen">
        <div className="min-h-screen flex flex-col">
          <header className="border-b border-slate-800 bg-black/80 backdrop-blur-sm sticky top-0 z-20">
            <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-sm bg-gradient-to-br from-cyan-500 to-emerald-400" />
                <span className="font-semibold tracking-tight text-slate-100">
                  VE × NCO
                </span>
              </div>
              <nav className="hidden md:flex gap-5 text-sm text-slate-300">
                <a href="/" className="hover:text-cyan-300">Overview</a>
                <a href="/problem" className="hover:text-cyan-300">Problem</a>
                <a href="/model" className="hover:text-cyan-300">VE Model</a>
                <a href="/nco" className="hover:text-cyan-300">NCO</a>
                <a href="/prototypes" className="hover:text-cyan-300">Prototypes</a>
                <a href="/roadmap" className="hover:text-cyan-300">Roadmap</a>
                <a href="/team" className="hover:text-cyan-300">Team & Ask</a>
              </nav>
            </div>
          </header>
          <main className="flex-1">
            {children}
          </main>
          <footer className="border-t border-slate-900 text-xs text-slate-500 py-4">
            <div className="max-w-6xl mx-auto px-4 flex justify-between">
              <span>Private VE × NCO concept portal</span>
              <span>Not for distribution</span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
