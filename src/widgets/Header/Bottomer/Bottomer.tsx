import { HeaderHeartIcon } from '../../../shared/Icons/HeaderHeartIcon'
import { HeaderToteIcon } from '../../../shared/Icons/HeaderToteIcon'
import { HeaderUserIcon } from '../../../shared/Icons/HeaderUserIcon'
import { OpenBurgerIcon } from '../../../shared/Icons/OpenBurgerIcon'
import { useBurger } from '../../BurgerMenu/useBurger'
import { ActionBar } from './components/ActionBar'
import { Navigation } from './components/Navigation'
import { Search } from './components/Search'

export const Bottomer = () => {
  const { setBurgerIsOpen } = useBurger();

  const openBurgerMenu = () => {
    setBurgerIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className="flex justify-center sticky top-[0px] h-[60px] items-center z-40 bg-white laptop:h-[104px]">
        <div className="flex w-11/12 justify-between">
          <div className="flex space-x-4 laptop:space-x-0">
            <button onClick={openBurgerMenu}>
              <OpenBurgerIcon styles="w-7 laptop:hidden" />
            </button>
            <Navigation />
          </div>
          <ActionBar>
            <div className="flex text-sm space-x-14 grow justify-end">
              <Search
                styles={'hidden laptop:flex relative items-center h-full w-2/5'}
              />
              <div className="flex items-center phone:space-x-5 laptop:space-x-4">
                <button>
                  <HeaderUserIcon styles="w-8 laptop:w-10" />
                </button>
                <button className="relative">
                  <span className="absolute inline-flex items-center justify-center w-2 h-2 border border-solid border-white ms-2 text-[10px] font-light text-white bg-primary-50 rounded-full"></span>
                  <HeaderHeartIcon styles="w-6 laptop:w-10" />
                </button>
                <button className="relative">
                  <span className="absolute inline-flex items-center justify-center w-4 h-4 border border-solid border-white ms-2 text-[10px] font-light text-white bg-primary-50 rounded-full">
                    99
                  </span>
                  <HeaderToteIcon styles="w-7 laptop:w-10" />
                </button>
              </div>
            </div>
          </ActionBar>
        </div>
      </div>
      <div className="flex justify-center">
        <Search
          styles={'relative w-11/12 mb-3 flex items-center laptop:hidden'}
        />
      </div>
    </>
  );
};
