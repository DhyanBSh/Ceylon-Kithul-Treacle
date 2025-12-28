
import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface AboutDetailProps {
  onBack: () => void;
}

const AboutDetail: React.FC<AboutDetailProps> = ({ onBack }) => {
  const steps = [
    {
      title: "The Tapping",
      desc: "Our tappers climb over 50 feet to reach the crown of the Kithul palm. They carefully 'beat' the flower to stimulate sap flow, a technique passed down through generations.",
      img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "The Collection",
      desc: "The unfermented sap is collected in clay pots. Timing is critical—the sap must be gathered at dawn before fermentation begins to ensure the highest quality purity.",
      img: "https://images.unsplash.com/photo-1541445942374-29597d2d48a6?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "The Reduction",
      desc: "In traditional open-fire pits, the sap is slow-boiled for hours. As water evaporates, the sugars caramelize into the thick, golden treacle of Ceylon Nectar.",
      img: "https://images.unsplash.com/photo-1589927986089-35812388d1f4?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="bg-white min-h-screen animate-in fade-in duration-1000 pb-32">
      <div className="relative h-[70vh] bg-black">
        <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover opacity-40 grayscale" alt="Rainforest" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <span className="text-[#D4A373] uppercase tracking-[0.5em] font-black text-[10px] mb-8">The Sinharaja Chronicles</span>
          <h1 className="serif text-7xl md:text-9xl text-white font-bold mb-4 uppercase tracking-tighter">Tree to Table</h1>
        </div>
        <button 
          onClick={onBack}
          className="absolute top-10 left-10 flex items-center gap-3 text-white border border-white/20 bg-black/40 backdrop-blur-md px-8 py-4 hover:bg-white hover:text-black transition-all group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em]">Return</span>
        </button>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-32">
        <div className="text-center mb-32 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full w-px h-24 bg-[#D4A373]/30 mb-12"></div>
          <p className="text-3xl serif text-black leading-relaxed italic font-light">
            "We do not own the forest; we are merely its caretakers. Every drop of Ceylon Nectar is a gift from the canopy."
          </p>
        </div>

        <div className="space-y-48">
          {steps.map((step, idx) => (
            <div key={idx} className={`flex flex-col md:flex-row gap-20 items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="flex-1">
                <span className="text-[#D4A373] font-black text-7xl opacity-10 block mb-6">0{idx + 1}</span>
                <h3 className="serif text-4xl font-bold text-black mb-8 uppercase tracking-tighter">{step.title}</h3>
                <p className="text-lg text-black/60 leading-relaxed font-light">{step.desc}</p>
                <div className="w-16 h-px bg-[#D4A373] mt-10"></div>
              </div>
              <div className="flex-1 w-full">
                <div className="aspect-square bg-black overflow-hidden shadow-2xl">
                  <img src={step.img} className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-1000" alt={step.title} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutDetail;
