import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { HeroSlider } from './components/HeroSlider';
import Icon from '../../../shared/components/Icon';
import { useMediaQueryContext } from '../../Footer/useMediaQueryContext';

const heroBanner = [
  {
    bgImage: 'url(../../../../public/hero-desktop.webp)',
    topic: 'BARBIE',
    title: 'NEW DOLL ARE HERE',
    description:
      'Celebrate the power of friendship and working together! Barbi Dream Besties inspire kids to live out their best dreams.',
  },
  {
    bgImage: 'url(../../../../public/hero-desktop.webp)',
    topic: 'BARBIE',
    title: 'NEW DOLL ARE HERE',
    description:
      'Celebrate the power of friendship and working together! Barbi Dream Besties inspire kids to live out their best dreams.',
  },
];

export const Hero = () => {
  const { isMobile } = useMediaQueryContext();

  return (
    <div>
      <div className="relative">
        <div className="aspect-square w-full h-[783px] laptop:h-[683px]  mb-6 laptop:mb-20">
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
            className="w-full h-full"
          >
            {isMobile ? null : (
              <button className="button-prev-slide z-10 absolute laptop:left-[18px] laptop:top-[254px]">
                <Icon
                  icon="arrow-left"
                  color="fill-neutral-30"
                  styles="laptop:w-[74px] laptop:h-[74px]"
                />
              </button>
            )}
            {heroBanner.map((hero, index) => (
              <SwiperSlide
                key={index}
                className="flex justify-center items-center"
              >
                <div
                  className="bg-image bg-center bg-cover bg-no-repeat w-full h-[783px] laptop:h-[683px] mb-6 laptop:mb-20"
                  style={{ backgroundImage: `${hero.bgImage}` }}
                >
                  <HeroSlider hero={hero} />
                </div>
              </SwiperSlide>
            ))}

            {isMobile ? null : (
              <button className="button-next-slide z-10 absolute laptop:right-[18px] top-[350px] laptop:top-[254px]">
                <Icon
                  icon="arrow-right"
                  color="fill-neutral-30"
                  styles="laptop:w-[74px] laptop:h-[74px]"
                />
              </button>
            )}
            <div className="swiper-pagination static bottom-0"></div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};
