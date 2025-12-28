
import React from 'react';
import { ShoppingBag, Menu, X, ArrowLeft } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
  onHomeClick: () => void;
  onNavClick: (id: string) => void;
  isSubPage: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, onCartClick, onHomeClick, onNavClick, isSubPage }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navLinks = [
    { name: 'Home', id: '#home' },
    { name: 'About', id: '#about' },
    { name: 'Products', id: '#products' },
    { name: 'Contact', id: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-4">
            {isSubPage && (
              <button onClick={onHomeClick} className="p-2 text-black hover:text-[#D4A373] transition-colors">
                <ArrowLeft size={20} />
              </button>
            )}
            <button onClick={onHomeClick} className="serif text-2xl font-bold tracking-tight text-black">
              CEYLON <span className="text-[#D4A373]">NECTAR</span>
            </button>
          </div>

          <div className="hidden md:block">
            <div className="flex items-baseline space-x-10">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => onNavClick(link.id)}
                  className="text-black/60 hover:text-[#D4A373] text-xs font-bold uppercase tracking-widest transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button 
              onClick={onCartClick}
              className="relative p-2 text-black hover:text-[#D4A373] transition-colors"
            >
              <ShoppingBag size={22} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-[#D4A373] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full ring-2 ring-white">
                  {cartCount}
                </span>
              )}
            </button>
            <button 
              className="md:hidden p-2 text-black"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-black/10 p-4 space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => { onNavClick(link.id); setIsMenuOpen(false); }}
              className="block w-full text-left text-black font-bold uppercase tracking-widest text-sm"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
