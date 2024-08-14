import Icon from '../../../shared/components/Icon';
import Image from '../../../shared/components/Image';
import { IProductData } from '../model/types';

const PopUpProductDesktop = ({ product }: IProductData) => {
  return (
    <>
      <div className="flex space-x-6 items-center w-full">
        <div className="w-[64px]">
          <Image src={product.images[0]} />
        </div>
        <span className="text-lg w-full">{product.title}</span>
      </div>

      <div className="flex items-center">
        <h1 className="font-bold mr-8 text-[22px]">{product.price}$</h1>
        <Icon
          icon="heart"
          styles="w-7 h-7 cursor-pointer mr-4"
          color="fill-transparent"
          outlineColor="stroke-neutral-70"
          outlineWidth={2.5}
        />
        <button className="w-[88px] bg-primary-10 rounded-md h-[40px] font-medium text-sm">
          Buy Now
        </button>
      </div>
    </>
  );
};
export default PopUpProductDesktop;
