import { useMediaQuery } from 'react-responsive';
import ProductActions from '../../pages/ProductPage/components/ProductActions';
import ProductDetails from '../../pages/ProductPage/components/ProductDetails';
import ProductPageImages from '../../pages/ProductPage/components/ProductPageImages';
import ProductPageSlider from '../../pages/ProductPage/components/ProductPageSlider';
import { IProductData } from '../../pages/ProductPage/model/types';

const ProductMain = ({ product }: IProductData) => {
  const isLaptop = useMediaQuery({
    query: `(min-width: 1024px)`,
  });

  return (
    <div className="w-full flex flex-col laptop:flex-row">
      {isLaptop ? (
        <ProductPageImages images={product.images} />
      ) : (
        <ProductPageSlider images={product.images} />
      )}
      <div className="flex flex-col w-full laptop:w-5/6">
        <ProductDetails product={product} />
        <ProductActions product={product} />
      </div>
    </div>
  );
};
export default ProductMain;
