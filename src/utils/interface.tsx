interface Products {
  limit: number;
  products: [];
  skip: number;
  total: number;
}

interface Product {
  title: string;
  id: number;
  images: [];
  description: string;
  thumbnail: string;
  price: number;
  amount: number;
}
interface initialState {
  products: [];
  price: number;
  amount: number;
}
interface newObj {
  amount: number;
}

export type { Product, Products, initialState, newObj };
