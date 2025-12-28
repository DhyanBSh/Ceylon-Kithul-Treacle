
import React from 'react';
import { ChevronRight } from 'lucide-react';

interface HeroProps {
  onShopClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onShopClick }) => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1584305658810-096d05be7832?auto=format&fit=crop&q=80&w=2000" 
          alt="Glistening Kithul Nectar" 
          className="w-full h-full object-cover opacity-40 grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <span className="inline-block px-4 py-1.5 mb-8 text-[10px] font-bold tracking-[0.4em] text-[#D4A373] uppercase border border-[#D4A373]/30 bg-[#D4A373]/5 backdrop-blur-sm">
          Rainforest Gold
        </span>
        <h1 className="text-6xl md:text-8xl text-white font-bold mb-10 leading-none uppercase tracking-tighter">
          The Purest <br /><span className="serif text-[#D4A373] italic lowercase font-light">Nectar</span>
        </h1>
        <p className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          Sustainably harvested from the Sinharaja wilderness. A low-GI, mineral-rich legacy captured in glistening liquid gold.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button 
            onClick={onShopClick}
            className="w-full sm:w-auto px-10 py-5 bg-[#D4A373] hover:bg-white hover:text-black text-white font-black uppercase tracking-[0.4em] text-[10px] transition-all flex items-center justify-center group"
          >
            Shop Collection
            <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <span className="text-[10px] text-white/30 uppercase tracking-[0.5em] mb-4">Scroll</span>
        <div className="w-px h-16 bg-[#D4A373] animate-pulse"></div>
      </div>
    </section>
  );
};

export default Hero;
