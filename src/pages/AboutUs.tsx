export function AboutUs() {
  return (
    <div className="flex-1 w-full max-w-[1200px] mx-auto px-6 py-12 flex flex-col gap-16 relative z-10">
      {/* Background elements */}
      <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(19,214,236,0.15)_0%,rgba(112,0,255,0.1)_40%,transparent_70%)] blur-[60px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-[25%] right-[-200px] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(19,214,236,0.15)_0%,rgba(112,0,255,0.1)_40%,transparent_70%)] blur-[60px] -z-10 pointer-events-none"></div>

      {/* Hero Section */}
      <section className="flex flex-col items-center gap-10">
        <div className="w-full max-w-[1000px] glass-panel p-2 rounded-xl sm:rounded-[3rem] overflow-hidden relative group">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          <img 
            alt="Group of diverse professionals collaborating in a sleek modern office" 
            className="w-full h-[400px] sm:h-[600px] object-cover rounded-[1rem] sm:rounded-[2.5rem]" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuACops2_QjjZgxcT0W7u95iDp4S_pgZ1IxHiezwyLbc9_j5xVu6CDIyS9lWCaiKS2SVIOlAj3ZfxYvXzpFGG_gcDO95gnTMjy0x7pGl2rfjhwzVnvsOjkSdG0SVCdSCjT0IT0nZ8jBen1RElnU6v3hJ-PdnmT_5dlmwJx-_NqQ8J6l4nwg7dk0SsenTxvzdcqLKCV3fR0mkUGidQosjQGfpewglPb8cnvrlNWDWTxKjsU23aNtHEOacYvbuhtpABgg9xYEUpaHBygs"
          />
        </div>
        <div className="max-w-[800px] text-center space-y-6 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Eleviamo la realtà. Fondiamo la tecnologia AR all'avanguardia con la cura di eventi di alto livello per offrire esperienze indimenticabili.
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full shadow-[0_0_10px_rgba(19,214,236,0.5)]"></div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="w-full py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {[
            {
              name: "Domenico Formisano",
              role: "Capo Visionario",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxMeS8zIhA5GXhyxnWePd56tT_R-03x0miVhu3xVn14YCKNR3peVcLsPi-dCwEtSQ8y6uAmiLF7_rRNqWNld-KyF4r-hLt7F-M5huWhki0MfLQd4PL7qpjRhPYy5mdxaZnFkmnSj_VPD5TQPwvcj4JSnOOyhS_xUI1lvExxnl4kHEX9Jo9IrCGMn-W7ycKp5KmekJ1DBjCECbe2u1is5UeNtEtGWTiW9a3laTd74YgGKP3bAGE6ZRayxfcpz4gJdnJYu7BK0pXkeY"
            },
            {
              name: "Fabrizio Palumbo",
              role: "Architetto AR",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwCDVuQs4jrBRxxocEXDy7_3EQi0kr3qKm5g0ST11F47WGDy9mrAlRzrRO3FKmCi-SUqlyztGQ6GcNeqoAl6LKkVj51rU72May37wQVCQuXY3KrVV-86m2asHBrhYR728eOFAu9oFPctvg7zNw6TUXvcoc267QJCIJVCoNsaP_ar1doGoXXrUxygVeNsrqXdBBNbPGdtS-shpLeU0NAVnPPn3TBNP61jtRJpKv9fSoThRc200sy2YwQ4cUiE92jpgPULMyuK2Wf_E"
            },
            {
              name: "Salvatore Minervino",
              role: "Curatore di Eventi",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6XxyLpvkGcQUerynUPk_IE6hUIEp2lHEqMqxV9nKbNjGgEHFGhar1V4bSxozLkNlTrNBcWxFaYz0CSeVoMF0hph5xR6QHJF1c6TkpSFDy1Zl-6hMoYSzDvlLDRMf7EI5zl6l5oJOZ93CCq3bWElKcb_f230zdfolqaHbXJco2h1NfhuYsFO4kmHLyy6y2WNFew8E3QGhq4qmxvtfOsqYBddZiwbly91nigrXlHIy1dXli6WVH_2VQwPqBRo7lW5aqvLMz1jTx3wM"
            },
            {
              name: "Francesco Aiello",
              role: "Specialista Tecnologico",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBC6HQe71OUHgP9d4q62eGihpZFfKs7nr8KnvkpAjBXDwEXXjv9Zd7nEA7XB4e49D9V7mouhBTadcGApGkh4HFg8T4XMYp94G0ezqtO2HtHy2FW_GzLNMYJ2jq2j2y5DLq6MvjqFo2mZG0I4Hg_JTCrKPz_Z2jNVyqS-JAjy8wqC9GIgN1GQ0cIyVS-slQmIpMmMjk0dRy9v797PnQycyj038RPC1EcOUKgi_yc6b7WOZ1gy-7Ac6BHznVpircXYXnXaIxFpuXXhDE"
            },
            {
              name: "Giuseppe Ottaiano",
              role: "Direttore Creativo",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA4q0ruMK1TLz0OfZJKXKz5CoaOzb-2pftoLlSeaNORJXKE4t7uHOv-utsdCEts7FFS4sKjZf9zYU_JKyZSw9XFlaBHnWwzw7Kt5_j3X-GLT8V1d0qpaklik-p0giZPbU9_-OszyK3_RrN5DaxRv_YD62xs5T32e-nGLCWkBYiapmldWi-f8g-G-ak8-2_WSGKuMPWlnNwKxzxJzaG4C4oqKCbjNpktUdDlH6sV-atlRXe6tWiqVtyWRYd3QSWuxFQKqzpSYf1q5bo"
            },
            {
              name: "Simone Accadia",
              role: "Ingegnere dell'Esperienza",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOt7FIgYaOde7Rc9a2PuyYtz3xwOKexTGZYxuC3XuWh6etiZmAheoTUDkXrqgrXN0TFUwaxkLa4pMIaFkCiKlDJqsyAM02PRvVLuz6emAxS7ox7G4WGEyRaHRO8t0kaUZuLZLrujvPqP5rZwFg43z3RjYwJtOQKCcT8ZIiElG98ydUhC4mvt9q-WLCfuWZKiETGm1W1NUZU5wK7EkNW-cioQ7L0w_Bbez-MeofXgpD8h6WU-fLsP66eNlZVZPoprREvwTFGhyBHm0"
            }
          ].map((person, idx) => (
            <div key={idx} className="glass-panel w-full max-w-[350px] h-[450px] rounded-xl flex flex-col items-center p-6 gap-6 glass-card-hover transition-all duration-300 relative overflow-hidden group">
              <div className="w-full h-[300px] rounded-xl overflow-hidden shadow-lg relative">
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 rounded-xl z-10 transition-colors duration-300 pointer-events-none"></div>
                <img 
                  alt={person.name} 
                  className="w-full h-full object-cover grayscale-hover" 
                  src={person.img}
                />
              </div>
              <div className="text-center w-full z-20">
                <h3 className="text-xl font-bold text-white tracking-tight">{person.name}</h3>
                <p className="text-primary text-sm font-medium mt-1 uppercase tracking-widest">{person.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
