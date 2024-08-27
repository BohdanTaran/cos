export interface IProduct {
  title: string;
  reviews: number;
  rating: number;
  inStock: number;
  label: string;
  price: number;
  oldPrice: number;
  discount: number;
  description: string;
  longDescription: string;
  images: string[];
}

export interface IProductData {
  product: IProduct;
}
