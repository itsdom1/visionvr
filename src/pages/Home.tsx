export function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden px-6 pt-24 pb-12">
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <div className="w-[800px] h-[800px] rounded-full neon-glow-cyan opacity-20 pointer-events-none absolute blur-[100px]"></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1 rounded-full glass-card text-xs font-bold tracking-[0.2em] text-cyan-400 mb-6 uppercase">
            Simone coglione
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-syne font-extrabold leading-tight mb-8 tracking-tighter text-white">
            Realtà virtuali. <span className="bg-gradient-to-r from-cyan-300 to-primary-container bg-clip-text text-transparent italic">Emozioni reali.</span>
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto mb-10 leading-relaxed">
            Entra in una nuova dimensione dove l'informazione digitale si fonde perfettamente con il tuo mondo fisico. Sperimenta il futuro dello spatial computing.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary text-on-primary font-extrabold text-lg shadow-[0_0_30px_rgba(0,229,255,0.4)] hover:scale-105 active:scale-95 transition-all">
              Sperimenta la Visione
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-full glass-card font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">play_circle</span> Guarda il Lancio
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-syne font-bold mb-6 text-on-surface">
              L'Ecosistema.
            </h2>
            <p className="text-on-surface-variant text-lg">
              Non vendiamo solo hardware; forniamo l'intera infrastruttura per il tuo viaggio spaziale.
            </p>
          </div>
          <div className="hidden md:block h-[1px] flex-grow bg-white/10 mx-12 mb-4"></div>
          <span className="text-on-surface-variant font-headline text-sm tracking-widest uppercase">
            01 / SERVIZI
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-10 rounded-xl group hover:border-cyan-400/40 transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(0,229,255,0.2)]">
            <div className="mb-8 w-14 h-14 rounded-2xl bg-cyan-400/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-cyan-400 text-3xl" style={{ fontVariationSettings: '"FILL" 1' }}>headset</span>
            </div>
            <h3 className="text-2xl font-syne font-bold text-white mb-4">Visori Premium</h3>
            <p className="text-on-surface-variant leading-relaxed mb-8">
              Hardware di nuova generazione con display 8K e passthrough a bassa latenza per un'immersione totale.
            </p>
            <a className="inline-flex items-center gap-2 text-cyan-400 font-bold group-hover:translate-x-2 transition-transform" href="#">
              Esplora l'Hardware <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>
          <div className="glass-card p-10 rounded-xl group hover:border-cyan-400/40 transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(0,229,255,0.2)]">
            <div className="mb-8 w-14 h-14 rounded-2xl bg-cyan-400/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-cyan-400 text-3xl" style={{ fontVariationSettings: '"FILL" 1' }}>support_agent</span>
            </div>
            <h3 className="text-2xl font-syne font-bold text-white mb-4">Esperti in Sede</h3>
            <p className="text-on-surface-variant leading-relaxed mb-8">
              Concierge personali disponibili presso la tua sede per guidarti nei tuoi primi passi nella realtà mista.
            </p>
            <a className="inline-flex items-center gap-2 text-cyan-400 font-bold group-hover:translate-x-2 transition-transform" href="#">
              Incontra gli Specialisti <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>
          <div className="glass-card p-10 rounded-xl group hover:border-cyan-400/40 transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(0,229,255,0.2)]">
            <div className="mb-8 w-14 h-14 rounded-2xl bg-cyan-400/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-cyan-400 text-3xl" style={{ fontVariationSettings: '"FILL" 1' }}>bolt</span>
            </div>
            <h3 className="text-2xl font-syne font-bold text-white mb-4">Configurazione Immediata</h3>
            <p className="text-on-surface-variant leading-relaxed mb-8">
              Sincronizzazione cloud a zero configurazione. Apri, indossa ed entra direttamente nel tuo spazio di lavoro personalizzato.
            </p>
            <a className="inline-flex items-center gap-2 text-cyan-400 font-bold group-hover:translate-x-2 transition-transform" href="#">
              Visualizza il Processo <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="glass-card rounded-xl p-4 md:p-8 overflow-hidden relative group">
            <div className="aspect-video w-full rounded-lg overflow-hidden relative">
              <img
                alt="Demo Video Placeholder"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuByPekBo8o9c2SZGd3P9U4s-z9yMw8kw3MX9N2SSr3pqw9e2HM-tZYOZ-kCFUWNBkcLB9qsQjrXiCOPNVAdhw8m-NXpxDcGkSGZX9SpaHdQ6aZ6BziGrdBzecz2H23KYitUCuhEQ6UTIYZEhvC7g18CchJQBtI4g8Yku7n1eDszYinsFaS7SKl_wbSgs_m-1CzFtFGPvzC7nuK_49sqdttOLYYH6XqXN4ocX8eIfYmhH0MaGeereLXTnN-d3Ha2alZnpZ6QTAJhKnI"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-gray-950/40 group-hover:bg-gray-950/20 transition-all cursor-pointer">
                <div className="w-20 h-20 md:w-28 md:h-28 rounded-full border border-primary/40 flex items-center justify-center bg-primary/10 backdrop-blur-md group-hover:scale-110 transition-all">
                  <span className="material-symbols-outlined text-5xl md:text-7xl text-primary" style={{ fontVariationSettings: '"FILL" 1' }}>play_arrow</span>
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div className="glass-card px-6 py-4 rounded-lg">
                  <p className="text-white font-bold text-lg">Tour del Prodotto 2024</p>
                  <p className="text-cyan-400 text-sm">Durata: 2:45</p>
                </div>
                <div className="hidden md:flex gap-4">
                  <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-white">
                    <span className="material-symbols-outlined">hd</span>
                  </div>
                  <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-white">
                    <span className="material-symbols-outlined">volume_up</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] neon-glow-cyan opacity-40 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-syne font-black mb-8 leading-tight">
            Pronti a vedere le cose <span className="text-primary italic">diversamente?</span>
          </h2>
          <p className="text-xl text-on-surface-variant mb-12">
            Unisciti alla lista d'attesa per la prossima generazione dello spatial computing.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto px-10 py-5 rounded-full bg-white text-gray-950 font-black text-xl hover:scale-105 transition-all">
              Pre-ordina ora
            </button>
            <button className="w-full sm:w-auto px-10 py-5 rounded-full border border-white/20 backdrop-blur-md text-white font-bold text-xl hover:bg-white/5 transition-all">
              Parla con il team vendite
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
