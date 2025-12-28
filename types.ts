
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  volume: string;
  category: 'Pure' | 'Infused' | 'Premium';
  stock: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface OrderDetails {
  customerName: string;
  phone: string;
  address: string;
  items: CartItem[];
  total: number;
}
