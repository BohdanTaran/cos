import { IHeroData } from '../model/types';

export const HeroSlider = ({ hero }: IHeroData) => {
  console.log('hero from HeroSlider', hero);

  return (
    <div className="pt-14 pl-5 laptop:pt-[175px] laptop:pl-[179px] flex flex-col relative">
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
  );
};
