import { useState } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Icon from '../../../shared/components/Icon';
import Image from '../../../shared/components/Image';

interface Props {
  images: string[];
}

const ProductPageSliderDesktop = ({ images }: Props) => {
  const [activeImg, setActiveImg] = useState(images[0]);

  const handleSlideChange = (swiper: any) => {
    const activeSlide = swiper.slides[swiper.activeIndex];
    const imgElement = activeSlide.querySelector('img') as HTMLImageElement;
    if (imgElement && imgElement.src !== activeImg) {
      setActiveImg(imgElement.src);
    }
  };

  return (
    <div className="flex items-center justify-center w-full max-h-[578px] min-w-[336px] max-w-[636px]">
      <div className="max-w-[136px] h-full flex flex-col space-y-4 justify-center items-center">
        <button className="button-prev-slide">
          <Icon
            icon="arrow"
            color="fill-neutral-30"
            size="w-6 h-6"
            rotate={90}
          />
        </button>
        <Swiper
          className={'product-page'}
          modules={[Navigation]}
          direction="vertical"
          style={{ maxHeight: '100%' }}
          slidesPerView={1}
          speed={700}
          effect="coverflow"
          navigation={{
            nextEl: '.button-next-slide',
            prevEl: '.button-prev-slide',
          }}
          onSlideChange={(swiper) => handleSlideChange(swiper)}
        >
          {images.map((img: string) => {
            return (
              <SwiperSlide key={img}>
                <Image
                  src={img}
                  styles="flex items-center rounded-2xl w-full h-full"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <button className="button-next-slide">
          <Icon
            icon="arrow"
            color="fill-neutral-30"
            size="w-6 h-6"
            rotate={270}
          />
        </button>
      </div>

      <div className="w-full min-w-[336px] max-w-[636px] aspect-w-1 aspect-h-1 px-4">
        <Image src={activeImg} styles="w-full max-h-[578px]" />
      </div>
    </div>
  );
};
export default ProductPageSliderDesktop;
