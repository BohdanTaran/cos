import { Swiper, SwiperSlide } from 'swiper/react';
import Image from '../../../shared/components/Image';
import ContentLayout from '../../../shared/layouts/ContentLayout';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import Icon from '../../../shared/components/Icon';

const ProductSliderSection = () => {
  return (
    <>
      <div className="bg-black h-[724px] w-full">
        <ContentLayout>
          <div className="px-5 py-2 text-white">
            <div className="flex flex-col laptop:flex-row-reverse">
              <div className="pb-6">
                <span className="text-xs text-neutral-70 font-roboto font-medium">
                  FUNKO FUSION FUNKO POP!
                </span>
                <h2 className="font-azeret text-xl text-neutral-20 font-bold uppercase">
                  All of Your Favorite Funko Fusion Characters
                </h2>
              </div>
              <div className="pb-6">
                <p className="pb-6 font-roboto text-neutral-20">
                  Discover our collection of Funko Pop! Collectibles featuring
                  your favorite characters from movies, TV shows, and games.
                  Shop for the latest exclusive releases and limited editions.
                </p>
                <div className="flex justify-center">
                  <button className="font-roboto text-neutral-90 text-sm px-4 py-2 bg-secondary-80 border border-primary-10 rounded-md">
                    Buy Now
                  </button>
                </div>
              </div>
              <div className="relative h-full flex justify-center">
                <div className="w-full max-w-[430px] bg-white/10 rounded-full">
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
                    className="relative w-full h-full p-2.5"
                  >
                    <button className="button-prev-slide z-10 absolute left-0.5 top-1/2">
                      <Icon
                        icon="arrow-left"
                        color="fill-neutral-30"
                        styles="w-5 h-5"
                      />
                    </button>
                    <SwiperSlide className="flex justify-center items-center">
                      <Image
                        src="../../../../public/ProductSection-Item.png"
                        styles="w-11/12 h-5/6 max-w-[356px] max-h-[320px]"
                      />
                    </SwiperSlide>
                    <SwiperSlide className="flex justify-center items-center">
                      <Image
                        src="../../../../public/ProductSection-Item.png"
                        styles="w-11/12 h-5/6 max-w-[356px] max-h-[320px]"
                      />
                    </SwiperSlide>
                    <button className="button-next-slide z-10 absolute right-0.5 top-1/2">
                      <Icon
                        icon="arrow-right"
                        color="fill-neutral-30"
                        styles="w-5 h-5"
                      />
                    </button>
                  </Swiper>
                </div>
                {/* Pagination of slider */}
                <div className="swiper-pagination absolute bottom-0"></div>
              </div>
            </div>
          </div>
        </ContentLayout>
      </div>
    </>
  );
};
export default ProductSliderSection;
