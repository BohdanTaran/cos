import Icon from '../../../shared/components/Icon';
import { IProductData } from '../model/types';

const PopUpProductMobile = ({ product }: IProductData) => {
  return (
    <>
      <div className="flex justify-between w-full">
        <div className="flex items-center w-full space-x-4">
          <h1 className="font-bold text-[20px]">{product.price}$</h1>
          <span className="text-sm truncate max-w-32">{product.title}</span>
        </div>
        <div className="flex items-center space-x-6">
          <Icon
            icon="heart"
            styles="w-7 h-7 cursor-pointer"
            color="fill-transparent"
            outlineColor="stroke-neutral-70"
            outlineWidth={2.5}
          />
          <button className="w-[88px] bg-primary-10 rounded-md h-[40px] font-medium text-sm">
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
};

export default PopUpProductMobile;
