import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from '../../../shared/components/Image';

interface Props {
  images: string[];
}

const ProductPageSlider = ({ images }: Props) => {
  return (
    <div className="relative min-h-[388px]">
      <Swiper
        modules={[Pagination]}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
        }}
      >
        {images.map((img: string) => {
          return (
            <SwiperSlide className="flex justify-center">
              <div className="w-full max-w-[400px]">
                <Image src={img} styles="w-full h-auto" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* Pagination of slider */}
      <div className="swiper-pagination swiper-ggg static"></div>
    </div>
  );
};
export default ProductPageSlider;
