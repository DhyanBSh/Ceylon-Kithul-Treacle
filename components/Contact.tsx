
import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

const TikTokIcon = ({ size = 24 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="text-[#D4A373] font-black tracking-[0.4em] uppercase text-[10px] mb-6 block">Contact Us</span>
            <h2 className="text-5xl md:text-6xl font-bold mb-10 leading-tight uppercase tracking-tighter">Reach the <br /><span className="serif italic lowercase font-light text-[#D4A373]">source</span></h2>
            
            <div className="space-y-12">
              <div className="flex items-start gap-6">
                <div className="text-[#D4A373]"><Phone size={24} /></div>
                <div>
                  <p className="text-[10px] text-white/40 uppercase font-black tracking-[0.2em] mb-2">Voice</p>
                  <p className="text-xl">+94 77 123 4567</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="text-[#D4A373]"><Mail size={24} /></div>
                <div>
                  <p className="text-[10px] text-white/40 uppercase font-black tracking-[0.2em] mb-2">Digital</p>
                  <p className="text-xl">harvest@ceylonnectar.com</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="text-[#D4A373]"><MapPin size={24} /></div>
                <div>
                  <p className="text-[10px] text-white/40 uppercase font-black tracking-[0.2em] mb-2">Origin</p>
                  <p className="text-xl">Sinharaja, Sri Lanka</p>
                </div>
              </div>

              {/* Social Media Section */}
              <div className="pt-8 border-t border-white/10">
                <p className="text-[10px] text-white/40 uppercase font-black tracking-[0.2em] mb-6">Follow Our Journey</p>
                <div className="flex items-center gap-8">
                  <a href="#" className="text-white hover:text-[#D4A373] transition-all transform hover:scale-110" aria-label="Instagram">
                    <Instagram size={24} />
                  </a>
                  <a href="#" className="text-white hover:text-[#D4A373] transition-all transform hover:scale-110" aria-label="Facebook">
                    <Facebook size={24} />
                  </a>
                  <a href="#" className="text-white hover:text-[#D4A373] transition-all transform hover:scale-110" aria-label="TikTok">
                    <TikTokIcon size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 p-10 backdrop-blur-sm">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/40">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:border-[#D4A373] outline-none transition-all placeholder:text-white/10"
                  placeholder="e.g. Anura Perera"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/40">Inquiry</label>
                <textarea 
                  rows={4}
                  className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:border-[#D4A373] outline-none transition-all resize-none placeholder:text-white/10"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button className="w-full bg-[#D4A373] text-black py-5 font-black uppercase tracking-[0.4em] text-xs hover:bg-white transition-all">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
