import { IHeroData } from '../model/types';

export const HeroSlider = ({ hero }: IHeroData) => {
  const { topic, title, description } = hero;

  return (
    <>
      <div className="pt-14 pl-5 laptop:pt-[175px] laptop:pl-[179px] flex flex-col relative">
        <div
          className={`font-roboto font-medium text-[#9747FF] text-base laptop:text-[22px] mb-4`}
        >
          {topic}
        </div>
        <div
          className={`font-azeret font-bold text-[#1C0041} text-2xl laptop:text-[32px] text-[#1C0041] mb-4 laptop:mb-6 w-full uppercase`}
        >
          {title}
        </div>
        <div
          className={`font-roboto font-medium text-[#1C0041}] text-xl laptop:text-2xl mb-4 laptop:mb-10 w-[335px] laptop:w-[526px]`}
        >
          {description}
        </div>

        <button
          type="button"
          className={`bg-[#D5B5FF] text-[#1C0041}] w-[130px] h-[40px] rounded-md text-sm laptop:w-[240px] laptop:h-[45px] laptop:font-medium laptop:text-xl`}
        >
          Shop Collection
        </button>
      </div>
    </>
  );
};
