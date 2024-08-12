import { useMediaQueryContext } from '../../Footer/useMediaQueryContext';

const Hero = () => {
  const { isMobile } = useMediaQueryContext();
  const bgImage = isMobile
    ? '../../../../public/hero-mobile.webp'
    : '../../../../public/hero-desktop.webp';
  return (
    <div
      className="bg-image h-[783px] laptop:h-[683px] object-none bg-no-repeat w-100vw"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="pt-[56px] pl-[20px] laptop:pt-[175px] laptop:pl-[179px] flex flex-col">
        <div className="font-roboto font-medium text-primary-50 text-base laptop:text-[22px] laptop:mb-4">
          BARBIE
        </div>
        <div className="font-azeret font-bold text-[32px] text-primary-90 mb-4 laptop:mb-6 w-full uppercase">
          NEW DOLL ARE HERE{' '}
        </div>
        <div className="font-roboto font-medium text-primary-90 text-xl laptop:text-2xl mb-4 laptop:mb-10 w-[335px] laptop:w-[526px]">
          Celebrate the power of friendship and working together! Barbie Dream
          Besties inspire kids to live out their best dreams.
        </div>
      </div>
    </div>
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
