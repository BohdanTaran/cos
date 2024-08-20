import { IHeroData } from '../model/types';

export const HeroSlider = ({ hero }: IHeroData) => {
  const { mainColor, accentColor, buttonColor } = hero;

  return (
    <>
      <div className="pt-14 pl-5 laptop:pt-[175px] laptop:pl-[179px] flex flex-col relative">
        <div
          className={`font-roboto font-medium text-[${accentColor}] text-base laptop:text-[22px] mb-4`}
        >
          {hero.topic}
        </div>
        <div
          className={`font-azeret font-bold text-[${mainColor} text-2xl laptop:text-[32px] text-[#1C0041] mb-4 laptop:mb-6 w-full uppercase`}
        >
          {hero.title}
        </div>
        <div
          className={`font-roboto font-medium text-[${mainColor}] text-xl laptop:text-2xl mb-4 laptop:mb-10 w-[335px] laptop:w-[526px]`}
        >
          {hero.description}
        </div>

        <button
          type="button"
          className={`bg-[${buttonColor}] text-[${mainColor}] w-[130px] h-[40px] rounded-md text-sm laptop:w-[240px] laptop:h-[45px] laptop:font-medium laptop:text-xl`}
        >
          Shop Collection
        </button>
      </div>
    </>
  );
};
