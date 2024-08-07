export interface IProduct {
  title: string;
  reviews: number;
  rating: number;
  isInStock: boolean;
  inStock: number;
  label: string;
  price: number;
  oldPrice: number;
  discount: number;
  description: string;
  images: string[];
};

export interface IProductData {
	product: IProduct;
}