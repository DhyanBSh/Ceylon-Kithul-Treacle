
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProductCard from './components/ProductCard';
import Contact from './components/Contact';
import Cart from './components/Cart';
import CheckoutModal from './components/CheckoutModal';
import ProductDetail from './components/ProductDetail';
import AboutDetail from './components/AboutDetail';
import AllProducts from './components/AllProducts';
import { PRODUCTS, STORE_PHONE } from './constants';
import { Product, CartItem } from './types';

type ViewState = 
  | { type: 'home'; scrollTo?: string } 
  | { type: 'product'; id: string } 
  | { type: 'about-detail' }
  | { type: 'all-products' };

const App = () => {
  const [view, setView] = useState<ViewState>({ type: 'home' });
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  // Robust scrolling logic
  useEffect(() => {
    if (view.type === 'home' && view.scrollTo) {
      const timer = setTimeout(() => {
        const id = view.scrollTo?.replace('#', '');
        const element = document.getElementById(id || '');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [view]);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(0, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const handleConfirmOrder = (details: { name: string; phone: string; address: string }) => {
    const orderItems = cart.map(item => `• ${item.name} x ${item.quantity}`).join('\n');
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    const message = `*NEW ORDER - CEYLON NECTAR*\n\n` +
      `Customer: ${details.name}\n` +
      `Phone: ${details.phone}\n` +
      `Address: ${details.address}\n\n` +
      `Order:\n${orderItems}\n\n` +
      `Total: Rs. ${total.toLocaleString()}`;
      
    window.open(`https://wa.me/${STORE_PHONE}?text=${encodeURIComponent(message)}`, '_blank');
    setCart([]);
    setIsCheckoutOpen(false);
  };

  const renderContent = () => {
    if (view.type === 'product') {
      const product = PRODUCTS.find(p => p.id === view.id);
      if (!product) return null;
      return <ProductDetail product={product} onAddToCart={addToCart} onBack={() => setView({ type: 'home' })} />;
    }

    if (view.type === 'about-detail') {
      return <AboutDetail onBack={() => setView({ type: 'home' })} />;
    }

    if (view.type === 'all-products') {
      return (
        <AllProducts 
          products={PRODUCTS} 
          onAddToCart={addToCart} 
          onProductClick={(id) => setView({ type: 'product', id })}
          onBack={() => setView({ type: 'home' })}
        />
      );
    }

    return (
      <div className="animate-in fade-in duration-700">
        <Hero onShopClick={() => setView({ type: 'home', scrollTo: 'products' })} />
        <About onLearnMore={() => setView({ type: 'about-detail' })} />
        <section id="products" className="py-24 bg-white border-t border-black/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="serif text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tight text-black">The Harvest</h2>
              <div className="w-20 h-1 bg-[#D4A373] mx-auto mb-6"></div>
              <p className="text-black/60 max-w-2xl mx-auto italic">
                Sustainably harvested and cold-pressed to preserve the golden essence of the Sinharaja rainforest.
              </p>
            </div>
            {/* Grid updated to grid-cols-2 for mobile */}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-16">
              {PRODUCTS.slice(0, 4).map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onAddToCart={addToCart}
                  onClick={() => setView({ type: 'product', id: product.id })}
                />
              ))}
            </div>
            <div className="text-center">
              <button 
                onClick={() => setView({ type: 'all-products' })}
                className="inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-black hover:text-[#D4A373] transition-colors group"
              >
                See Full Collection
                <div className="w-12 h-px bg-black group-hover:bg-[#D4A373] transition-all group-hover:w-20"></div>
              </button>
            </div>
          </div>
        </section>
        <Contact />
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white text-black selection:bg-[#D4A373] selection:text-white">
      <Navbar 
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} 
        onCartClick={() => setIsCartOpen(true)}
        onHomeClick={() => setView({ type: 'home' })}
        onNavClick={(id) => setView({ type: 'home', scrollTo: id })}
        isSubPage={view.type !== 'home'}
      />
      
      <main className="pt-20">
        {renderContent()}
      </main>

      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="serif text-2xl font-bold mb-4 tracking-[0.2em] text-[#D4A373]">CEYLON NECTAR</p>
          <div className="w-12 h-px bg-white/20 mx-auto mb-8"></div>
          <p className="text-xs uppercase tracking-widest text-white/40">© {new Date().getFullYear()} Ceylon Nectar Premium Kithul.</p>
        </div>
      </footer>

      <Cart 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cart} 
        onUpdateQuantity={updateQuantity}
        onCheckout={() => { setIsCartOpen(false); setIsCheckoutOpen(true); }}
      />

      <CheckoutModal 
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cart}
        onConfirm={handleConfirmOrder}
      />
    </div>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(<App />);
}
