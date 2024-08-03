import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ProductSectionSlider from './components/ProductSectionSlider';
import ProductSectionText from './components/ProductSectionText';

const ProductSection = () => {
  return (
    <>
      <div className="bg-black min-h-[724px] w-full laptop:min-h-[820px]">
        <div className="w-full flex justify-center laptop:min-h-[820px] items-center">
          <div className="w-full px-5 py-6">
            <div className="px-5 py-2 text-white laptop:px-3">
              <div className="flex flex-col laptop:flex-row-reverse laptop:items-center justify-around">
                <ProductSectionText />
                <ProductSectionSlider />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductSection;
