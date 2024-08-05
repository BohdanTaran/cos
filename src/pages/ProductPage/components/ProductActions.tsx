import Icon from '../../../shared/components/Icon'

const ProductActions = () => {
  return (
    <div className="flex space-x-6 items-center pb-10">
      <button className="px-10 w-full bg-primary-10 rounded-md min-h-[40px] max-h-[56px] text-sm">
        Add to Cart
      </button>
      <Icon
        icon="heart"
        styles="w-9 h-9 cursor-pointer"
        color="fill-transparent"
        outlineColor="stroke-neutral-70"
        outlineWidth={1.5}
      />
    </div>
  );
};
export default ProductActions;
