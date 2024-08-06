import Icon from '../../../shared/components/Icon';

const ProductActions = () => {
  return (
    <div className="flex flex-col pb-10">
      <div className="flex justify-center w-[154px] h-[48px] border border-neutral-10 rounded-md">
        <button className="px-2 w-full">
          <Icon icon="minus" color="fill-neutral-20" size="w-6 h-6" />
        </button>
        <input
          className="w-[74px] text-center border-x border-neutral-10"
          type="number"
          readOnly={true}
          value={1}
        />
        <button className="px-2 w-full">
          <Icon icon="plus" color="fill-neutral-90" size="w-6 h-6" />
        </button>
      </div>
      <div className="w-full flex space-x-6 pt-6">
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
    </div>
  );
};
export default ProductActions;
