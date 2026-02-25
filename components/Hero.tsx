import React from 'react';

export default function Hero() {
  return (
    <div className="relative bg-[#0f0f0f] text-white overflow-hidden min-h-screen flex flex-col font-sans">
      
      {/* Background Image with Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2000&auto=format&fit=crop" 
          alt="Slow Bar Coffee Pour Over" 
          className="w-full h-full object-cover opacity-30" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f0f] via-transparent to-[#0f0f0f]"></div>
      </div>

      {/* Transparent Navbar */}
      <nav className="flex justify-between items-center p-6 md:px-12 z-10 animate-fade-up opacity-0">
        <div className="flex items-center">
            <img 
                src="/ampm-logo.png" 
                alt="AM/PM Slow Bar Logo" 
                className="w-auto h-16 md:h-20 object-contain hover:opacity-90 transition-opacity cursor-pointer active:scale-95 transition-transform duration-200"
            />
        </div>

        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300 tracking-wide">
          <a href="#menu" className="hover:text-amber-500 transition duration-300 active:scale-95">Menu</a>
          <a href="#location" className="hover:text-amber-500 transition duration-300 active:scale-95">Location</a>
        </div>
      </nav>

      {/* Main Hero Content (LALAGYAN NATIN NG ANIMATION DITO) */}
      <div className="flex-1 flex items-center justify-center p-6 z-10 mt-[-5vh]">
         {/* Dito natin dinagdag ang animate-fade-up at delay para swabe pag-load */}
         <div className="text-center max-w-4xl px-4 animate-fade-up opacity-0 delay-200">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
              Savor the <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600">Slow</span> Moments.
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              From your first morning brew to your late-night chill. Artisanal coffee crafted with intention, right here in Guiguinto.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
               {/* Nilagyan natin ng active:scale-95 ang mga buttons */}
               <a href="#menu" className="px-8 py-4 rounded-sm bg-amber-600 hover:bg-amber-700 text-white font-semibold tracking-wider uppercase text-sm transition-all duration-300 shadow-[0_0_15px_rgba(217,119,6,0.4)] active:scale-95">
                 View Digital Menu
               </a>
               <a href="#location" className="px-8 py-4 rounded-sm border border-gray-500 hover:border-amber-500 hover:text-amber-500 text-white font-semibold tracking-wider uppercase text-sm transition-all duration-300 backdrop-blur-sm bg-white/5 text-center active:scale-95">
                 Find Our Bar
               </a>
            </div>
         </div>
      </div>

    </div>
  );
}