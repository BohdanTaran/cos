import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
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
    mainColor: '#1C0041',
    accentColor: '#9747FF',
    buttonColor: '#D5B5FF',
  },
  {
    bgImage: 'url(../../../../public/hero-desktop.webp)',
    topic: 'BARBIE',
    title: 'NEW DOLL ARE HERE',
    description:
      'Celebrate the power of friendship and working together! Barbi Dream Besties inspire kids to live out their best dreams.',
    mainColor: '#1C0041',
    accentColor: '#9747FF',
    buttonColor: '#D5B5FF',
  },
];

export const Hero = () => {
  const { isMobile } = useMediaQueryContext();

  return (
    <div>
      <div className="relative">
        <div className="aspect-square w-full h-[783px] laptop:h-[683px] mb-6 laptop:mb-20">
          <Swiper
            modules={[Navigation, Pagination]}
            className="w-full h-full"
            spaceBetween={1}
            slidesPerView={1}
            loop={true}
            pagination={{
              el: '.swiper-pagination',
              clickable: true,
              bulletClass: 'neutral-50',
              bulletActiveClass: 'primary-50',
            }}
            navigation={{
              nextEl: '.button-next-slide',
              prevEl: '.button-prev-slide',
            }}
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
          </Swiper>
          <div className="absolute z-20 bottom-[27px] left-0 w-full w-[23.5px] h-1">
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
