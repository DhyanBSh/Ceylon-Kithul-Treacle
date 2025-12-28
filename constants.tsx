
import { Product } from './types';

export const STORE_PHONE = "94771234567"; // Replace with your actual WhatsApp number

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Pure Highland Kithul',
    description: '100% pure sap extracted from the highlands of Sinharaja. No added sugar or preservatives.',
    price: 1250,
    volume: '375ml',
    category: 'Pure',
    image: 'https://images.unsplash.com/photo-1589927986089-35812388d1f4?auto=format&fit=crop&q=80&w=800',
    stock: 12
  },
  {
    id: '2',
    name: 'Ginger Infused Kithul',
    description: 'Traditional Kithul treacle infused with organic ginger for a spicy, medicinal kick.',
    price: 1450,
    volume: '375ml',
    category: 'Infused',
    image: 'https://images.unsplash.com/photo-1615484477778-ca3b77940c25?auto=format&fit=crop&q=80&w=800',
    stock: 0
  },
  {
    id: '3',
    name: 'Golden Reserve Treacle',
    description: 'The finest distillation of sap, aged for a richer, deeper flavor profile.',
    price: 2100,
    volume: '500ml',
    category: 'Premium',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&q=80&w=800',
    stock: 5
  },
  {
    id: '4',
    name: 'Cinnamon Spiced Essence',
    description: 'Infused with Ceylon Cinnamon quills. Perfect for desserts and gourmet cooking.',
    price: 1550,
    volume: '375ml',
    category: 'Infused',
    image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&q=80&w=800',
    stock: 8
  }
];
