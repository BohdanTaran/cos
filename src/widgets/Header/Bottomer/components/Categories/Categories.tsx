// import { useDispatch, useSelector } from 'react-redux';
// import Icon from '../../../../../shared/components/Icon';
// import {productTypeListIsOpen} from '../../../../../redux/BurgerMenu/selectors';
// import { toggleProductTypeList } from '../../../../../redux/BurgerMenu/BurgerMenuSlices';

// export const Categories = () => {
//   const dispatch = useDispatch();
//   // const isOpen = useSelector(productTypeListIsOpen);
//   const handleProductTypeOpen() = () => {
//     return dispatch(toggleProductTypeList(useSelector(productTypeListIsOpen)));
//   };

//   }

//   return (
//     <div className="flex flex-col space-y-3 pt-[42px] pb-[58px] text-neutral-70 text-[17px] uppercase">
//       <nav className="px-5 font-azeret">
//         <ul className="flex flex-col space-y-11">
//           <button
//             type="button"
//             onClick={handleProductTypeOpen()}
//             className="flex justify-between items-center"
//           >
//             Prouct type
//             <Icon
//               icon="arrow-right"
//               color="fill-neutral-50"
//               styles="w-[20px] h-[14px]"
//             />
//           </button>
//           <a href="#" className="flex justify-between items-center">
//             GENRES
//             <Icon
//               icon="arrow-right"
//               color="fill-neutral-50"
//               styles="w-[20px] h-[14px]"
//             />
//           </a>
//           <a href="#" className="flex justify-between items-center">
//             BRANDS
//             <Icon
//               icon="arrow-right"
//               color="fill-neutral-50"
//               styles="w-[20px] h-[14px]"
//             />
//           </a>
//           <a href="#" className="flex justify-between items-center">
//             GIFT IDEAS
//             <Icon
//               icon="arrow-right"
//               color="fill-neutral-50"
//               styles="w-[20px] h-[14px]"
//             />
//           </a>
//         </ul>
//       </nav>
//     </div>
//   );
// };

import { useDispatch, useSelector } from 'react-redux';
import Icon from '../../../../../shared/components/Icon';
import { productTypeListIsOpen } from '../../../../../redux/BurgerMenu/selectors';
import { toggleProductTypeList } from '../../../../../redux/BurgerMenu/BurgerMenuSlices';
import { log } from 'console';

export const Categories = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(productTypeListIsOpen);
  console.log('!!!!!', isOpen);

  const handleProductTypeOpen = () => {
    dispatch(toggleProductTypeList(!isOpen));
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
            Product type
            <Icon
              icon="arrow-right"
              color="fill-neutral-50"
              styles="w-[20px] h-[14px]"
            />
          </button>
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
