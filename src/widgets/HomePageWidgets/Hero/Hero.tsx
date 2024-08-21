import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { HeroSlider } from './components/HeroSlider';
import Icon from '../../../shared/components/Icon';
import { useMediaQueryContext } from '../../Footer/useMediaQueryContext';
import heroImg from '../../../../public/hero-desktop.webp';

const heroBanner = [
  {
    bgImage: `url(${heroImg})`,
    topic: 'BARBIE',
    title: 'NEW DOLL ARE HERE',
    description:
      'Celebrate the power of friendship and working together! Barbi Dream Besties inspire kids to live out their best dreams.',
    mainColor: '#1C0041',
    accentColor: '#9747FF',
    buttonColor: '#D5B5FF',
  },
  {
    bgImage: `url(${heroImg})`,
    topic: 'BARBIE',
    title: 'NEW DOLL ARE HERE',
    description:
      'Celebrate the power of friendship and working together! Barbi Dream Besties inspire kids to live out their best dreams.',
    mainColor: '#1C0041',
    accentColor: `#9747FF`,
    buttonColor: '#D5B5FF',
  },
  {
    bgImage: `url(${heroImg})`,
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
  const { isTablet } = useMediaQueryContext();

  return (
    <div>
      <div className="relative">
        <div className=" w-full h-full mb-6 laptop:mb-20">
          <Swiper
            cssMode={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            spaceBetween={1}
            slidesPerView={1}
            loop={true}
            pagination={{
              clickable: true,
              renderBullet: function (index: number, className: string) {
                return '<span class=".hero ' + className + '">' + '</span>';
              },
            }}
            navigation={{
              nextEl: '.button-next-slide',
              prevEl: '.button-prev-slide',
            }}
            className="myPagination"
          >
            {isTablet ? null : (
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

            {isTablet ? null : (
              <button className="button-next-slide z-10 absolute laptop:right-[18px] top-[350px] laptop:top-[254px]">
                <Icon
                  icon="arrow-right"
                  color="fill-neutral-30"
                  styles="laptop:w-[74px] laptop:h-[74px]"
                />
              </button>
            )}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
