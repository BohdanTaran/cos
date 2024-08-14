import Icon from '../../../shared/components/Icon';

const HeroSliderButtons = () => {
  return (
    <>
      <button className="button-prev-slide z-10 absolute laptop:left-[18px] laptop:top-[254px]">
        <Icon
          icon="arrow-left"
          color="fill-neutral-30"
          styles="laptop:w-[74px] laptop:h-[74px]"
        />
      </button>
      <button className="button-next-slide z-10 absolute laptop:right-[18px] top-[350px] laptop:top-[254px]">
        <Icon
          icon="arrow-right"
          color="fill-neutral-30"
          styles="laptop:w-[74px] laptop:h-[74px]"
        />
      </button>
    </>
  );
};
export default HeroSliderButtons;
