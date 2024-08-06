import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from '../../../shared/components/Image';

interface Props {
  images: string[];
}

const ProductPageSliderMobile = ({ images }: Props) => {
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
              <Image src={img} styles="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* Pagination of slider */}
      <div className="swiper-pagination static"></div>
    </div>
  );
};
export default ProductPageSliderMobile;
