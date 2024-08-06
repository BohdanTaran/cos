import { useState } from 'react';
import Icon from '../../../shared/components/Icon';
import { IProductData } from '../model/types';

const ProductActions = ({ product }: IProductData) => {
  const [quantity, setQuantity] = useState(1);

  const addQuantity = () => {
    if (quantity < product.inStock) {
      setQuantity(quantity + 1);
    }
  };

  const substractQuantity = () => {
    if (quantity !== 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex flex-col pb-10">
      <div className="flex justify-center w-[154px] h-[48px] border border-neutral-10 rounded-lg">
        <button onClick={substractQuantity} className="px-2 w-full">
          <Icon
            icon="minus"
            color={`${quantity > 1 ? 'fill-neutral-90' : 'fill-neutral-20'}`}
            size="w-6 h-6"
          />
        </button>
        <input
          className="w-[74px] text-center border-x border-neutral-10"
          type="number"
          readOnly={true}
          value={quantity}
        />
        <button className="px-2 w-full" onClick={addQuantity}>
          <Icon
            icon="plus"
            color={`${
              quantity < product.inStock ? 'fill-neutral-90' : 'fill-neutral-20'
            }`}
            size="w-6 h-6"
          />
        </button>
      </div>
      <div className="w-full flex space-x-6 pt-6">
        <button className="px-10 w-full bg-primary-10 rounded-md min-h-[40px] max-h-[56px] font-medium text-sm">
          Add to Cart
        </button>
        <Icon
          icon="heart"
          styles="w-10 h-9 cursor-pointer"
          color="fill-transparent"
          outlineColor="stroke-neutral-70"
          outlineWidth={1.5}
        />
      </div>
    </div>
  );
};
export default ProductActions;
