import { ArrowRight, Scale, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full blur-3xl opacity-20 bg-amber-500/40" />
        <div className="absolute -bottom-16 -right-16 w-[500px] h-[500px] rounded-full blur-3xl opacity-20 bg-blue-500/40" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(255,255,255,0.08),transparent)]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-40 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-200 mb-6">
              <ShieldCheck size={14} className="text-amber-400" />
              Trusted counsel for high‑stakes matters
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
              Strategic. Relentless. Results‑Driven Representation.
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              A Nouh Law is a boutique firm focused on complex litigation, corporate advisory, and dispute resolution. We pair courtroom experience with business insight to protect what matters most.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold px-6 py-3 transition shadow-lg shadow-amber-500/20">
                Book a Consultation
                <ArrowRight size={18} />
              </a>
              <a href="#practice" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold px-6 py-3 transition border border-white/15">
                Explore Practice Areas
                <Scale size={18} />
              </a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-black text-white">250+</div>
                <div className="text-xs uppercase tracking-wider text-slate-400">Cases Won</div>
              </div>
              <div>
                <div className="text-3xl font-black text-white">15yrs</div>
                <div className="text-xs uppercase tracking-wider text-slate-400">Experience</div>
              </div>
              <div>
                <div className="text-3xl font-black text-white">24/7</div>
                <div className="text-xs uppercase tracking-wider text-slate-400">Response</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-tr from-amber-500/20 to-blue-500/20 blur-2xl rounded-3xl" />
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-slate-900">
              <img src="https://images.unsplash.com/photo-1711003596872-aa68f08a4b8e?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDb3VydHJvb218ZW58MHwwfHx8MTc2MzcwNjc4Mnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Courtroom" className="w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent" />
              <div className="absolute bottom-0 p-6">
                <div className="text-white font-semibold">Litigation • Corporate • Arbitration</div>
                <div className="text-slate-300 text-sm">Proven advocacy across jurisdictions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
