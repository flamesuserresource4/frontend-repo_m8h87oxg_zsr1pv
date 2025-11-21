export default function Results() {
  const highlights = [
    { value: "$22M", label: "Defense verdict protected in class action" },
    { value: "98%", label: "Success rate in pre-trial motions" },
    { value: "Top 50", label: "Noted among regional litigators" },
  ];

  return (
    <section id="results" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black text-white">Proven Results</h2>
            <p className="mt-3 text-slate-300 max-w-xl">We prepare every matter as if it will go to trial. That rigor consistently delivers favorable outcomes—often before stepping into court.</p>
            <div className="mt-8 grid sm:grid-cols-3 gap-6">
              {highlights.map((h) => (
                <div key={h.label} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="text-3xl font-black text-white">{h.value}</div>
                  <div className="text-xs uppercase tracking-wider text-slate-400 mt-1">{h.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-tr from-amber-500/20 to-blue-500/20 blur-2xl rounded-3xl" />
            <div className="relative rounded-3xl overflow-hidden border border-white/10">
              <img src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1200&auto=format&fit=crop" alt="Case Files" className="w-full h-full object-cover opacity-90" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
