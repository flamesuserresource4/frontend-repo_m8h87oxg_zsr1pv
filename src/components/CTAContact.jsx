import { Mail, Phone, MapPin } from "lucide-react";

export default function CTAContact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950">
          <div className="grid lg:grid-cols-2">
            <div className="p-10">
              <h3 className="text-2xl sm:text-3xl font-black text-white">Speak with an attorney today</h3>
              <p className="mt-2 text-slate-300">No pressure. No obligation. Just clear guidance on your options.</p>
              <form className="mt-8 grid gap-4">
                <input className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400/50" placeholder="Full Name" />
                <input className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400/50" placeholder="Email" type="email" />
                <textarea className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400/50" placeholder="How can we help?" rows={4} />
                <button type="button" className="rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold px-6 py-3 transition w-max shadow-lg shadow-amber-500/20">Request Consultation</button>
              </form>
            </div>
            <div className="p-10 bg-[url('https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1400&auto=format&fit=crop')] bg-cover bg-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 to-slate-900/80" />
              <div className="relative space-y-4 text-slate-200">
                <div className="flex items-center gap-3">
                  <Phone className="text-amber-400" />
                  <a href="tel:+10000000000" className="hover:text-white">+1 (000) 000-0000</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-amber-400" />
                  <a href="mailto:contact@anouhlaw.com" className="hover:text-white">contact@anouhlaw.com</a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-amber-400" />
                  <span>Downtown Financial District, Suite 1200</span>
                </div>
                <div className="pt-6 text-sm text-slate-400">Serving clients statewide and internationally.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
