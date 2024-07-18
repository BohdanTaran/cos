import ProductCardImage from '../../../../public/ProductCardImg.jpg'
import Image from '../../../shared/components/Image'
import { HeaderHeartIcon } from '../../../shared/Icons/HeaderHeartIcon'
import { HeaderToteIcon } from '../../../shared/Icons/HeaderToteIcon'
import ProductLabel from './ProductLabel'

const ProductCard = () => {
	return (
    <div className="relative flex flex-col w-[164px] h-[290px] font-roboto laptop:w-[312px] laptop:h-[477px]">
      <div>
        <HeaderHeartIcon styles="w-5 absolute right-3 top-2 laptop:right-5 laptop:top-4 laptop:w-6" />
        <ProductLabel type={'EXCLUSIVE'} />
        <Image src={ProductCardImage} styles="w-full" />
      </div>
      <div className="p-2 laptop:px-4">
        <strong className="text-sm laptop:text-lg">
          Nebula Pulsse Blaster
        </strong>
        <p className="text-xs text-neutral-50 mt-1 laptop:text-base">
          iridescent finish with LED lights and sound effects
        </p>
        <div className="flex justify-between items-center mt-3">
          <div>
            <strong>$1,150</strong>
            {/* <span className="line-through text-neutral-40 text-xs ml-1">
              1,720
            </span> */}
          </div>
          <button className="bg-primary-10 w-14 h-8 flex justify-center rounded-md laptop:hidden">
            <HeaderToteIcon styles="w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
export default ProductCard