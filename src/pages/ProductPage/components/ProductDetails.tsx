import ProductLabel from '../../../entities/ProductCard/components/ProductLabel';
import { IProductData } from '../model/types';
import StarsReview from './StarsReview';

const ProductDetails = ({ product }: IProductData) => {
  return (
    <div className="flex flex-col space-y-4 pt-10 pb-4 font-roboto">
      <h3 className="uppercase font-azeret font-bold text-xl laptop:text-3xl">
        {product.title}
      </h3>
      <div className="flex flex-col laptop:flex-row">
        <div className="flex pb-2">
          <StarsReview rating={product.rating} />
          <span className="ml-4 mr-2">{product.rating}/5</span>
          <span className="text-neutral-20 pr-6 border-r-2 border-neutral-10">
            ({product.reviews} {product.reviews > 1 ? 'reviews' : 'review'})
          </span>
        </div>
        <span
          className={`font-medium ${
            product.inStock > 0 ? 'text-success-40' : 'text-danger-60'
          } laptop:pl-6`}
        >
          {product.inStock > 0 ? 'In stock' : 'Out of stock'}
        </span>
      </div>

      <ProductLabel label={product.label} direction="row" />
      <div className="flex w-9/12 items-center">
        <div className="w-[173px] mr-4">
          <div className="font-bold text-xl laptop:text-3xl">
            <span className="mr-3 text-neutral-90">${product.price}</span>
            <span className="text-neutral-20 line-through">
              ${product.oldPrice}
            </span>
          </div>
        </div>
        <span className="flex items-center justify-center min-h-[36px] min-w-[69px] bg-danger-10 rounded-[62px] text-danger-50 font-medium">
          -{product.discount}%
        </span>
      </div>
      <p>{product.description}</p>
    </div>
  );
};
export default ProductDetails;
