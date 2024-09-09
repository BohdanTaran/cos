import { useDispatch, useSelector } from 'react-redux';
import Icon from '../../../../../shared/components/Icon';
import { selectProductTypeListIsOpen } from '../../../../../redux/global/selectors';
import { toggleProductTypeList } from '../../../../../redux/global/GlobalSlice';
import { ProductTypes } from '@/src/widgets/BurgerMenu/ProductTypes';

export const Categories = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectProductTypeListIsOpen);
  console.log(
    '!!!!!',
    selectProductTypeListIsOpen,
    isOpen,
    toggleProductTypeList(false),
  );

  const handleProductTypeOpen = () => {
    dispatch(toggleProductTypeList(true));
  };

  return (
    <div className="flex flex-col space-y-3 pt-[42px] pb-[58px] text-neutral-70 text-[17px] uppercase">
      <nav className="px-5 font-azeret">
        <ul className="flex flex-col space-y-11">
          <button
            type="button"
            onClick={handleProductTypeOpen}
            className="flex justify-between items-center"
          >
            PRODUCT TYPE
            <Icon
              icon="arrow-right"
              color="fill-neutral-50"
              styles="w-[20px] h-[14px]"
            />
          </button>
          {/* { if isOpen <ProductTypes/>} */}
          <a href="#" className="flex justify-between items-center">
            GENRES
            <Icon
              icon="arrow-right"
              color="fill-neutral-50"
              styles="w-[20px] h-[14px]"
            />
          </a>
          <a href="#" className="flex justify-between items-center">
            BRANDS
            <Icon
              icon="arrow-right"
              color="fill-neutral-50"
              styles="w-[20px] h-[14px]"
            />
          </a>
          <a href="#" className="flex justify-between items-center">
            GIFT IDEAS
            <Icon
              icon="arrow-right"
              color="fill-neutral-50"
              styles="w-[20px] h-[14px]"
            />
          </a>
        </ul>
      </nav>
    </div>
  );
};
