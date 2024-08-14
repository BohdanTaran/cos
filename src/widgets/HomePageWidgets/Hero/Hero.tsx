import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import HeroSliderButtons from './HeroSliderButtons';

const Hero = () => {
  const hero = {
    bgImage: 'url(../../../../public/hero-desktop.webp)',
    topic: 'BARBIE',
    title: 'NEW DOLL ARE HERE',
    description:
      'Celebrate the power of friendship and working together! Barbi Dream Besties inspire kids to live out their best dreams.',
  };
  return (
    <>
      <div
        className="bg-image bg-center bg-cover bg-no-repeat w-full h-[783px] laptop:h-[683px] mb-6 laptop:mb-20"
        style={{ backgroundImage: `${hero.bgImage}` }}
      >
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
          className=" w-full h-full"
        >
          <HeroSliderButtons />
          <SwiperSlide>
            <div className="pt-14 pl-5 laptop:pt-[175px] laptop:pl-[179px] flex flex-col">
              <div className="font-roboto font-medium text-primary-50 text-base laptop:text-[22px] mb-4">
                {hero.topic}
              </div>
              <div className="font-azeret font-bold text-2xl laptop:text-[32px] text-primary-90 mb-4 laptop:mb-6 w-full uppercase">
                {hero.title}
              </div>
              <div className="font-roboto font-medium text-primary-90 text-xl laptop:text-2xl mb-4 laptop:mb-10 w-[335px] laptop:w-[526px]">
                {hero.description}
              </div>

              <button
                type="button"
                className="bg-primary-20 text-neutral-90 w-[130px] h-[40px] rounded-md text-sm laptop:w-[240px] laptop:h-[45px] laptop:font-medium laptop:text-xl"
              >
                Shop Collection
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Hero;

{
  /* <div className="flex justify-start object-cover">
      {isMobile ? (
        <Image src={heroMobileImg} styles="h-[783px] w-[375px]" />
      ) : (
        <Image
          src={heroDesktopImg}
          styles="h-[683px] {isTablet ? object-none : object-cover}"
        />
      )}
      <div className="">BARBIE</div>
    </div> */
}
