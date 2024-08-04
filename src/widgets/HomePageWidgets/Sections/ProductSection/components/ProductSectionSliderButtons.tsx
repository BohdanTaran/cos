import Icon from '../../../../../shared/components/Icon'

const ProductSectionSliderButtons = () => {
  return (
    <>
      <button className="button-prev-slide z-10 absolute left-0.5 top-1/2">
        <Icon
          icon="arrow-left"
          color="fill-neutral-30"
          styles="w-5 h-5 laptop:w-7 h-7"
        />
      </button>
      <button className="button-next-slide z-10 absolute right-0.5 top-1/2">
        <Icon
          icon="arrow-right"
          color="fill-neutral-30"
          styles="w-5 h-5 laptop:w-7 h-7"
        />
      </button>
    </>
  );
};
export default ProductSectionSliderButtons;
