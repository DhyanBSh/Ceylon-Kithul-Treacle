
import React, { useState } from 'react';
import { ArrowLeft, Plus, Sparkles, ShieldCheck, Droplets, AlertCircle } from 'lucide-react';
import { Product } from '../types';
import { getKithulInfo } from '../services/geminiService';

interface ProductDetailProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onBack: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onAddToCart, onBack }) => {
  const [aiTip, setAiTip] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const isOutOfStock = product.stock <= 0;

  const fetchAiTip = async () => {
    setLoading(true);
    const query = `Provide a unique culinary tip or recipe idea specifically for ${product.name} Kithul Treacle. Make it sound elegant and professional.`;
    const result = await getKithulInfo(query);
    setAiTip(result);
    setLoading(false);
  };

  return (
    <div className="bg-white min-h-screen animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-3 text-black/40 hover:text-[#D4A373] transition-colors mb-16 group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em]">Back to Collection</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-6">
            <div className="relative aspect-square bg-black/5 overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className={`w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ${isOutOfStock ? 'opacity-50' : ''}`} 
              />
              {isOutOfStock && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-white text-black border border-black px-12 py-4 text-xs font-black uppercase tracking-[0.5em] shadow-2xl">
                    Sold Out
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex justify-between items-start mb-6">
              <span className="text-[#D4A373] font-black tracking-[0.4em] uppercase text-[10px]">
                {product.category} Reserve
              </span>
              {product.stock > 0 && (
                <span className={`text-[10px] font-black uppercase tracking-widest ${product.stock < 5 ? 'text-red-500' : 'text-green-600'}`}>
                  {product.stock} Units left
                </span>
              )}
            </div>
            
            <h1 className="serif text-5xl md:text-6xl font-bold text-black mb-6 uppercase tracking-tighter">{product.name}</h1>
            <p className="text-3xl text-black font-serif mb-10 italic">Rs. {product.price.toLocaleString()}</p>
            
            <p className="text-lg text-black/70 leading-relaxed mb-12 font-light">
              {product.description} This harvest is characterized by its deep mahogany hue and complex, woody undertones. Pure, unfiltered, and traditionally processed.
            </p>

            <div className="grid grid-cols-2 gap-10 mb-12 border-y border-black/5 py-10">
              <div className="flex items-start gap-4">
                <ShieldCheck className="text-[#D4A373]" size={20} />
                <div>
                  <h4 className="font-black text-[10px] uppercase tracking-widest text-black">Pure Grade</h4>
                  <p className="text-xs text-black/50 leading-relaxed mt-2">Zero sugar additives or stabilizers.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Droplets className="text-[#D4A373]" size={20} />
                <div>
                  <h4 className="font-black text-[10px] uppercase tracking-widest text-black">Traditional</h4>
                  <p className="text-xs text-black/50 leading-relaxed mt-2">Wood-fired for authentic depth.</p>
                </div>
              </div>
            </div>

            <button 
              onClick={() => onAddToCart(product)}
              disabled={isOutOfStock}
              className={`w-full py-6 font-black flex items-center justify-center gap-4 transition-all uppercase tracking-[0.4em] text-[10px] mb-8 ${
                isOutOfStock 
                ? 'bg-black/5 text-black/20 cursor-not-allowed border border-black/10' 
                : 'bg-black text-white hover:bg-[#D4A373]'
              }`}
            >
              {isOutOfStock ? 'Sold Out' : 'Add to Collection'}
              {!isOutOfStock && <Plus size={16} />}
            </button>

            {isOutOfStock && (
              <div className="flex items-center gap-3 text-red-500 bg-red-50 p-4 border border-red-100 mb-8 animate-pulse">
                <AlertCircle size={16} />
                <span className="text-[10px] font-black uppercase tracking-widest">Currently unavailable for this harvest</span>
              </div>
            )}

            <div className="bg-black/5 p-8 border border-black/5">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3 text-black font-black text-[10px] uppercase tracking-[0.2em]">
                  <Sparkles size={14} className="text-[#D4A373]" />
                  Sommelier Tip
                </div>
                {!aiTip && (
                  <button 
                    onClick={fetchAiTip}
                    disabled={loading}
                    className="text-[10px] font-black uppercase tracking-widest border-b border-black/20 hover:text-[#D4A373] hover:border-[#D4A373] transition-all"
                  >
                    {loading ? 'Consulting...' : 'Reveal Tip'}
                  </button>
                )}
              </div>
              <p className="text-black/70 italic text-sm leading-relaxed font-light">
                {aiTip || "Discover pairing secrets specifically curated for this harvest by our AI assistant."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
