
import React, { useState, useMemo } from 'react';
import { ArrowLeft, Search, Filter } from 'lucide-react';
import { Product } from '../types';
import ProductCard from './ProductCard';

interface AllProductsProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onProductClick: (id: string) => void;
  onBack: () => void;
}

const AllProducts: React.FC<AllProductsProps> = ({ products, onAddToCart, onProductClick, onBack }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = useMemo(() => {
    const cats = ['All', ...new Set(products.map(p => p.category))];
    return cats;
  }, [products]);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [products, searchTerm, selectedCategory]);

  return (
    <div className="bg-white min-h-screen animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-3 text-black/40 hover:text-[#D4A373] transition-colors mb-16 group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em]">Return Home</span>
        </button>

        <div className="mb-16">
          <h1 className="serif text-5xl md:text-6xl font-bold text-black mb-12 uppercase tracking-tighter">
            Our Full <span className="text-[#D4A373]">Collection</span>
          </h1>

          <div className="flex flex-col md:flex-row gap-8 items-end md:items-center justify-between border-b border-black/10 pb-12">
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-black/40" size={18} />
              <input 
                type="text" 
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-transparent border-b border-transparent focus:border-[#D4A373] py-4 pl-8 outline-none text-black placeholder:text-black/20 font-light text-lg transition-all"
              />
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <span className="text-[10px] font-black uppercase tracking-widest text-black/40 mr-2 flex items-center gap-2">
                <Filter size={12} /> Filter by
              </span>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-[10px] font-black uppercase tracking-widest transition-all border ${
                    selectedCategory === cat 
                    ? 'bg-black text-white border-black' 
                    : 'bg-transparent text-black/40 border-black/10 hover:border-black/30'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          /* Grid updated to grid-cols-2 for mobile */
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {filteredProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={onAddToCart}
                onClick={() => onProductClick(product.id)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-32 border-t border-black/5">
            <p className="serif italic text-2xl text-black/30">No products match your search.</p>
            <button 
              onClick={() => {setSearchTerm(''); setSelectedCategory('All');}}
              className="mt-8 text-[10px] font-black uppercase tracking-[0.4em] text-[#D4A373] border-b border-[#D4A373]"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
