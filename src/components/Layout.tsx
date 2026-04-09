import { Outlet, Link, useLocation } from "react-router-dom";
import logoSrc from "../assets/logo.jpeg";

export function Layout() {
  const location = useLocation();
  
  return (
    <div className="font-body selection:bg-primary/30 selection:text-primary min-h-screen bg-[#050507] text-[#fcf8fc]">
      {/* Glowing Meshes */}
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] neon-glow-cyan pointer-events-none z-0"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] neon-glow-purple pointer-events-none z-0"></div>

      {/* Navbar */}
      <nav className="sticky top-0 w-full z-50 bg-gray-950/40 backdrop-blur-3xl shadow-[0_0_40px_-10px_rgba(0,229,255,0.05)]">
        <div className="flex justify-between items-center px-8 py-4 max-w-screen-2xl mx-auto">
          <Link to="/" className="flex items-center gap-3">
            <img 
              alt="Vision AR Logo" 
              className="h-12 w-auto object-contain mix-blend-screen" 
              src={logoSrc} 
            />
          </Link>
          <div className="hidden md:flex items-center gap-10 font-headline tracking-tight">
            <Link 
              className={`font-bold pb-1 transition-colors ${location.pathname === '/' ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-gray-400 hover:text-cyan-200 border-b-2 border-transparent'}`} 
              to="/"
            >
              Home
            </Link>
            <Link 
              className={`font-bold pb-1 transition-colors ${location.pathname === '/about' ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-gray-400 hover:text-cyan-200 border-b-2 border-transparent'}`} 
              to="/about"
            >
              Chi Siamo
            </Link>
            <Link 
              className={`font-bold pb-1 transition-colors ${location.pathname === '/contacts' ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-gray-400 hover:text-cyan-200 border-b-2 border-transparent'}`} 
              to="/contacts"
            >
              Contatti
            </Link>
          </div>
          <button className="bg-gradient-to-r from-primary to-primary-container text-on-primary-fixed px-6 py-2.5 rounded-full font-bold hover:shadow-[0_0_20px_rgba(0,229,255,0.5)] transition-all duration-300 scale-95 active:scale-90">
            Prenota la tua realtà
          </button>
        </div>
      </nav>

      <main className="relative z-10 min-h-[calc(100vh-200px)]">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="w-full py-12 bg-gray-950 border-t border-white/5 relative z-10">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center px-12 gap-8">
          <a className="text-gray-500 hover:text-cyan-300 transition-colors" href="#">Instagram</a>
          <a className="text-gray-500 hover:text-cyan-300 transition-colors" href="#">LinkedIn</a>
          <a className="text-gray-500 hover:text-cyan-300 transition-colors" href="#">Twitter</a>
          <Link className="text-gray-500 hover:text-cyan-300 transition-colors" to="/contacts">Contatti</Link>
        </div>
      </footer>

      {/* FAB */}
      <button className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-primary text-on-primary-fixed shadow-[0_0_30px_rgba(0,229,255,0.5)] flex items-center justify-center z-50 hover:scale-110 active:scale-95 transition-all">
        <span className="material-symbols-outlined text-3xl">chat_bubble</span>
      </button>
    </div>
  );
}
