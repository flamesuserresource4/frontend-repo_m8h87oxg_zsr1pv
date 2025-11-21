import { Briefcase, Landmark, Building2, FileCheck2, Shield, Handshake } from "lucide-react";

const areas = [
  { icon: Briefcase, title: "Corporate Advisory", desc: "Entity structuring, governance, and strategic counsel for founders and boards." },
  { icon: Landmark, title: "Litigation", desc: "High-stakes civil and commercial disputes with meticulous preparation." },
  { icon: Building2, title: "Real Estate", desc: "Acquisitions, development, leasing, and property disputes across sectors." },
  { icon: FileCheck2, title: "Regulatory & Compliance", desc: "Licensing, risk assessments, and proactive compliance programs." },
  { icon: Shield, title: "Arbitration", desc: "Representation under ICC, UNCITRAL, and regional arbitration regimes." },
  { icon: Handshake, title: "M&A Transactions", desc: "Diligence, negotiation, and seamless execution of complex deals." },
];

export default function PracticeAreas() {
  return (
    <section id="practice" className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-white/2 to-transparent pointer-events-none" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-white">Practice Areas</h2>
          <p className="mt-3 text-slate-300">Depth across core disciplines with a boutique level of attention.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition p-6">
              <div className="w-12 h-12 rounded-xl bg-amber-500/15 ring-1 ring-amber-500/30 text-amber-400 flex items-center justify-center mb-4">
                <Icon />
              </div>
              <div className="text-white font-semibold text-lg">{title}</div>
              <div className="text-slate-300 mt-1 text-sm leading-relaxed">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
