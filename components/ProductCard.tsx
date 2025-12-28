
import React from 'react';
import { Plus } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onClick }) => {
  const isOutOfStock = product.stock <= 0;

  return (
    <div className={`group cursor-pointer bg-white border border-black/5 flex flex-col h-full ${isOutOfStock ? 'opacity-80' : ''}`} onClick={onClick}>
      <div className="relative overflow-hidden aspect-[1/1] bg-white">
        <img 
          src={product.image} 
          alt={product.name} 
          className={`w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 ${isOutOfStock ? 'grayscale' : ''}`}
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-white/90 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          {!isOutOfStock ? (
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onAddToCart(product);
              }}
              className="bg-black text-white px-4 md:px-8 py-3 md:py-4 text-[9px] md:text-[10px] font-bold uppercase tracking-widest hover:bg-[#D4A373] transition-all"
            >
              Quick Add
            </button>
          ) : (
            <span className="text-black font-black text-[9px] md:text-[10px] uppercase tracking-[0.4em]">View Details</span>
          )}
        </div>

        {/* Category Tag */}
        <div className="absolute top-0 right-0 p-2 md:p-4">
          <span className="bg-black text-white text-[7px] md:text-[8px] font-black uppercase tracking-[0.2em] px-1.5 py-0.5 md:px-2 md:py-1">
            {product.category}
          </span>
        </div>

        {/* Out of Stock Badge */}
        {isOutOfStock && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-2 text-center">
            <span className="bg-white/90 text-black border border-black px-3 py-1 md:px-6 md:py-2 text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] transform -rotate-12 shadow-xl whitespace-nowrap">
              Sold Out
            </span>
          </div>
        )}
      </div>

      <div className="px-3 md:px-4 py-4 md:py-8 text-center flex-grow flex flex-col justify-between">
        <div>
          <h3 className="serif text-base md:text-xl font-bold text-black mb-1 group-hover:text-[#D4A373] transition-colors line-clamp-2 md:line-clamp-none leading-tight">{product.name}</h3>
          <p className="text-[9px] md:text-[10px] text-black/40 uppercase tracking-widest mb-1 md:mb-2 font-bold">{product.volume}</p>
          
          {/* Stock Count */}
          {!isOutOfStock ? (
            <p className={`text-[8px] md:text-[9px] uppercase tracking-widest font-black mb-2 md:mb-4 ${product.stock < 5 ? 'text-red-500' : 'text-[#D4A373]'}`}>
              {product.stock} left
            </p>
          ) : (
            <p className="text-[8px] md:text-[9px] uppercase tracking-widest font-black mb-2 md:mb-4 text-black/30">
              Harvesting
            </p>
          )}
        </div>

        <span className="text-black font-bold border-t border-black/10 pt-3 md:pt-4 block max-w-[80px] mx-auto text-sm md:text-base">
          Rs. {product.price.toLocaleString()}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
