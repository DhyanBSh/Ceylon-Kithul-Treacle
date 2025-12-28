
import React from 'react';

interface AboutProps {
  onLearnMore?: () => void;
}

const About: React.FC<AboutProps> = ({ onLearnMore }) => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] bg-black">
              <img 
                src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=800" 
                alt="Traditional Harvesting" 
                className="w-full h-full object-cover grayscale opacity-80"
              />
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 border-l border-t border-[#D4A373] hidden lg:block"></div>
          </div>
          
          <div className="space-y-10 order-1 lg:order-2">
            <div>
              <span className="text-[#D4A373] font-black tracking-[0.4em] uppercase text-[10px] mb-4 block">Our Origin</span>
              <h2 className="text-5xl md:text-6xl font-bold text-black leading-[1.1] uppercase tracking-tighter">
                Crafted by <br /><span className="serif italic lowercase font-light text-[#D4A373]">the sun & rain</span>
              </h2>
            </div>
            <p className="text-lg text-black leading-relaxed font-light">
              We extract nectar from the highland palms of Sri Lanka using ancient techniques. No chemicals, no additives—just the raw spirit of the Sinharaja rainforest slow-cooked to a golden finish.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-black/10 pt-10">
              <div className="space-y-2">
                <h4 className="font-bold text-xs uppercase tracking-widest text-[#D4A373]">Unfiltered</h4>
                <p className="text-sm text-black/60 leading-relaxed">Retaining all natural nutrients and enzymes.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-xs uppercase tracking-widest text-[#D4A373]">Ancestral</h4>
                <p className="text-sm text-black/60 leading-relaxed">Methods passed through seven generations of tappers.</p>
              </div>
            </div>

            <button 
              onClick={onLearnMore}
              className="group flex items-center gap-4 text-xs font-black uppercase tracking-[0.3em] text-black hover:text-[#D4A373] transition-colors"
            >
              Discover the Process
              <div className="w-12 h-px bg-black group-hover:bg-[#D4A373] transition-all group-hover:w-20"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
