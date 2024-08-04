import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from '../../../../../shared/components/Image';
import ProductItem from '../../../../../../public/ProductSection-Item.png';
import ProductSectionSliderButtons from './ProductSectionSliderButtons';

const ProductSectionSlider = () => {
  return (
    <div>
      <div className="relative w-full h-full flex justify-center">
        <div className="w-full max-w-[420px] aspect-square bg-white/10 rounded-full laptop:max-w-[480px] desktop:max-w-[661px]">
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            loop={true}
            pagination={{
              clickable: true,
              el: '.swiper-pagination',
            }}
            navigation={{
              nextEl: '.button-next-slide',
              prevEl: '.button-prev-slide',
            }}
            className=" w-full h-full p-2.5"
          >
            <ProductSectionSliderButtons />
            <SwiperSlide className="flex justify-center items-center">
              <Image
                src={ProductItem}
                styles="w-11/12 h-5/6 max-w-[356px] max-h-[320px] laptop:max-w-[400px] max-h-[420px] desktop:max-w-[500px] max-h-[520px]"
              />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center items-center">
              <Image
                src={ProductItem}
                styles="w-11/12 h-5/6 max-w-[356px] max-h-[320px] laptop:max-w-[400px] max-h-[420px] desktop:max-w-[500px] max-h-[520px]"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {/* Pagination of slider */}
      <div className="swiper-pagination static bottom-0"></div>
    </div>
  );
};
export default ProductSectionSlider;
