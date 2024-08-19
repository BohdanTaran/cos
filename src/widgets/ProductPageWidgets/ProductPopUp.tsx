import { useMediaQuery } from 'react-responsive';
import PopUpProductDesktop from '../../pages/ProductPage/components/PopUpProductDesktop';
import PopUpProductMobile from '../../pages/ProductPage/components/PopUpProductMobile';
import { usePopUp } from '../../pages/ProductPage/hooks/usePopUp';
import { IProductData } from '../../pages/ProductPage/model/types';

const ProductPopUp = ({ product }: IProductData) => {
  const isLaptop = useMediaQuery({
    query: `(min-width: 1024px)`,
  });
  const isShowPopUp = usePopUp();

  return (
    <div
      className={`fixed text-neutral-90 bottom-0 left-0 w-full h-[60px]  px-5 py-2.5 bg-white shadow-product-card z-50 font-roboto flex items-center transition-transform duration-300 laptop:h-[80px] ${
        isShowPopUp ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      {isLaptop ? (
        <PopUpProductDesktop product={product} />
      ) : (
        <PopUpProductMobile product={product} />
      )}
    </div>
  );
};
export default ProductPopUp;
