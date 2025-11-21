import { Menu, Phone } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="backdrop-blur-xl bg-slate-900/70 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 ring-1 ring-white/20 flex items-center justify-center shadow-lg shadow-amber-500/20">
              <span className="text-slate-900 font-black">A</span>
            </div>
            <div className="leading-tight">
              <div className="text-white font-semibold tracking-wide">A Nouh Law</div>
              <div className="text-xs text-slate-300/80">Advocates & Legal Consultants</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-slate-300">
            <a href="#practice" className="hover:text-white transition">Practice</a>
            <a href="#team" className="hover:text-white transition">Team</a>
            <a href="#results" className="hover:text-white transition">Results</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+10000000000" className="inline-flex items-center gap-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold px-4 py-2 transition shadow-lg shadow-amber-500/20">
              <Phone size={18} />
              Free Consultation
            </a>
          </div>

          <button className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-white" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
            <Menu />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-b border-white/10">
          <div className="px-6 py-4 space-y-3 text-slate-200">
            <a href="#practice" className="block">Practice</a>
            <a href="#team" className="block">Team</a>
            <a href="#results" className="block">Results</a>
            <a href="#contact" className="block">Contact</a>
            <a href="tel:+10000000000" className="inline-flex items-center gap-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold px-4 py-2 transition">
              <Phone size={18} />
              Free Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
