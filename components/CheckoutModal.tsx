
import React from 'react';
import { X, Send } from 'lucide-react';
import { CartItem } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onConfirm: (details: { name: string; phone: string; address: string }) => void;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose, items, onConfirm }) => {
  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    address: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address) {
      alert("Please fill in all details to proceed.");
      return;
    }
    onConfirm(formData);
  };

  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="fixed inset-0 z-[110] overflow-hidden flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose}></div>
      
      <div className="relative w-full max-w-xl bg-white shadow-2xl animate-in fade-in zoom-in duration-300">
        <div className="p-8 border-b border-black/10 flex justify-between items-center">
          <h2 className="serif text-3xl font-bold uppercase tracking-tighter">Finalize Order</h2>
          <button onClick={onClose} className="text-black/40 hover:text-black transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="p-8 overflow-y-auto max-h-[80vh]">
          <div className="mb-8 p-6 bg-black/[0.02] border border-black/5">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-black/40 mb-4">Order Summary</h3>
            <div className="space-y-3">
              {items.map(item => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className="text-black/70">{item.name} x {item.quantity}</span>
                  <span className="font-bold">Rs. {(item.price * item.quantity).toLocaleString()}</span>
                </div>
              ))}
              <div className="pt-4 border-t border-black/10 flex justify-between font-black text-lg">
                <span className="serif">Total</span>
                <span>Rs. {total.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-black/40">Full Name</label>
              <input 
                required
                type="text" 
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
                className="w-full bg-white border-b border-black/20 px-0 py-3 text-black focus:border-[#D4A373] outline-none transition-all placeholder:text-black/10"
                placeholder="Anura Perera"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-black/40">WhatsApp Number</label>
              <input 
                required
                type="tel" 
                value={formData.phone}
                onChange={e => setFormData({...formData, phone: e.target.value})}
                className="w-full bg-white border-b border-black/20 px-0 py-3 text-black focus:border-[#D4A373] outline-none transition-all placeholder:text-black/10"
                placeholder="+94 77 XXX XXXX"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-black/40">Delivery Address</label>
              <textarea 
                required
                rows={2}
                value={formData.address}
                onChange={e => setFormData({...formData, address: e.target.value})}
                className="w-full bg-white border-b border-black/20 px-0 py-3 text-black focus:border-[#D4A373] outline-none resize-none transition-all placeholder:text-black/10"
                placeholder="Street address, City"
              ></textarea>
            </div>

            <div className="pt-4">
              <button 
                type="submit"
                className="w-full bg-black text-white py-5 font-black uppercase tracking-[0.4em] text-[10px] hover:bg-[#D4A373] transition-all flex items-center justify-center gap-4"
              >
                Send via WhatsApp
                <Send size={16} />
              </button>
              <p className="mt-6 text-center text-[10px] text-black/30 font-bold uppercase tracking-widest">
                Safe & Secure Personal Checkout
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
