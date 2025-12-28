
import React from 'react';
import { X, Minus, Plus, ShoppingBag, Send } from 'lucide-react';
import { CartItem } from '../types';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onCheckout: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose, items, onUpdateQuantity, onCheckout }) => {
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-md bg-white flex flex-col animate-in slide-in-from-right duration-500 shadow-[-20px_0_60px_rgba(0,0,0,0.1)]">
          <div className="flex-1 overflow-y-auto px-10 py-12">
            <div className="flex items-center justify-between mb-16">
              <h2 className="serif text-3xl font-bold flex items-center gap-4 text-black uppercase tracking-tighter">
                Cart
              </h2>
              <button onClick={onClose} className="text-black/20 hover:text-black transition-colors">
                <X size={28} />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="text-center py-24">
                <p className="serif italic text-black/40 text-lg">Your collection is empty.</p>
                <button onClick={onClose} className="mt-10 text-[10px] font-black uppercase tracking-[0.4em] text-[#D4A373] border-b border-[#D4A373]">
                  Discover Nectar
                </button>
              </div>
            ) : (
              <div className="space-y-12">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-8 border-b border-black/5 pb-12">
                    <div className="w-24 h-24 bg-black/5 overflow-hidden">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="serif text-xl font-bold text-black">{item.name}</h4>
                        <span className="text-sm font-bold">Rs. {item.price.toLocaleString()}</span>
                      </div>
                      <p className="text-[10px] text-black/40 uppercase tracking-widest font-black mb-6">{item.volume}</p>
                      <div className="flex items-center gap-6">
                        <button onClick={() => onUpdateQuantity(item.id, -1)} className="hover:text-[#D4A373]"><Minus size={16}/></button>
                        <span className="text-xs font-black">{item.quantity}</span>
                        <button onClick={() => onUpdateQuantity(item.id, 1)} className="hover:text-[#D4A373]"><Plus size={16}/></button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {items.length > 0 && (
            <div className="p-10 border-t border-black/5 bg-white space-y-8">
              <div className="flex justify-between items-end">
                <span className="text-[10px] uppercase font-black tracking-widest text-black/40">Subtotal</span>
                <span className="serif text-3xl font-bold">Rs. {subtotal.toLocaleString()}</span>
              </div>
              <button 
                onClick={onCheckout}
                className="w-full bg-black text-white py-6 font-black uppercase tracking-[0.5em] text-[10px] hover:bg-[#D4A373] transition-all flex items-center justify-center gap-4"
              >
                Checkout <Send size={14} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
