export function Contacts() {
  return (
    <div className="flex-1 flex items-center justify-center relative z-10 px-8 py-12">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left Column: Typography & Contact Info */}
        <div className="flex flex-col gap-10 max-w-lg">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-[-0.02em]">
              Costruiamo la<br />tua realtà.
            </h1>
            <p className="text-[#8A8D98] text-lg leading-relaxed">
              Che si tratti di un gala aziendale o di un incontro privato intimo, le nostre esperienze AR ridefiniscono l'intrattenimento. Contattaci per coordinare il tuo prossimo evento.
            </p>
          </div>
          <div className="space-y-6 pt-4">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.1em] text-[#8A8D98] mb-2">Richiesta Diretta</p>
              <a className="text-3xl font-semibold text-primary text-glow-primary hover:opacity-80 transition-opacity" href="mailto:hello@vision-ar.com">
                hello@vision-ar.com
              </a>
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.1em] text-[#8A8D98] mb-2">Chiamaci</p>
              <a className="text-3xl font-semibold text-primary text-glow-primary hover:opacity-80 transition-opacity" href="tel:+15550192834">
                +1 (555) 019-2834
              </a>
            </div>
          </div>
          <div className="flex gap-4 pt-8">
            <a className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-white hover:text-primary transition-colors border border-white/10" href="#">
              <span className="sr-only">Twitter</span>
              <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
            <a className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-white hover:text-primary transition-colors border border-white/10" href="#">
              <span className="sr-only">LinkedIn</span>
              <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path clipRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fillRule="evenodd"></path>
              </svg>
            </a>
          </div>
        </div>
        
        {/* Right Column: Floating Glass Form */}
        <div className="relative w-full max-w-xl mx-auto lg:ml-auto">
          {/* Abstract form shadow/glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#7000FF]/20 to-primary/20 blur-xl rounded-[24px]"></div>
          <div className="glass-panel rounded-[24px] p-8 md:p-12 relative z-10 w-full bg-[#050507]/40">
            <form action="#" className="w-full flex flex-col gap-6" method="POST">
              <div className="relative-input-group">
                <input className="form-input-line w-full block focus:ring-0 peer" id="name" name="name" placeholder="Nome Completo" required type="text" />
                <label className="floating-label" htmlFor="name">Nome Completo</label>
              </div>
              <div className="relative-input-group">
                <input className="form-input-line w-full block focus:ring-0 peer" id="email" name="email" placeholder="Indirizzo Email" required type="email" />
                <label className="floating-label" htmlFor="email">Indirizzo Email</label>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative-input-group">
                  <input className="form-input-line w-full block focus:ring-0 peer text-white/80 focus:text-white" id="date" name="date" required type="date" />
                  <label className="floating-label -top-4 text-xs text-primary" htmlFor="date">Data dell'Evento</label>
                </div>
                <div className="relative-input-group">
                  <select className="form-input-line w-full block focus:ring-0 peer text-white/80 focus:text-white appearance-none" id="type" name="type" required defaultValue="">
                    <option disabled hidden value=""></option>
                    <option value="corporate">Evento Aziendale</option>
                    <option value="private">Festa Privata</option>
                    <option value="public">Mostra Pubblica</option>
                  </select>
                  <label className="floating-label" htmlFor="type">Tipo di Evento</label>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-[#8A8D98]">
                    <span className="material-symbols-outlined text-sm">expand_more</span>
                  </div>
                </div>
              </div>
              <div className="relative-input-group mb-8">
                <textarea className="form-input-line w-full block focus:ring-0 peer resize-none" id="message" name="message" placeholder="Raccontaci la tua visione..." required rows={4}></textarea>
                <label className="floating-label" htmlFor="message">Raccontaci la tua visione...</label>
              </div>
              <button 
                className="w-full h-14 bg-primary text-[#050507] font-bold text-lg rounded-full hover:bg-white transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(19,214,236,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] flex items-center justify-center gap-2 group" 
                type="submit"
              >
                <span>Invia Richiesta</span>
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
