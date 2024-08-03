import Icon from '../../../shared/components/Icon';
import { useBurger } from '../../BurgerMenu/useBurger';
import { ActionBar } from './components/ActionBar';
import { Navigation } from './components/Navigation';
import { Search } from './components/Search';

export const Bottomer = () => {
  const { setBurgerIsOpen } = useBurger();

  const openBurgerMenu = () => {
    setBurgerIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className="px-3 py-2.5 flex justify-center sticky top-[0px] h-[60px] items-center z-40 bg-white laptop:h-[104px] laptop:px-[72px]">
        <div className="w-full flex justify-between">
          <div className="flex item space-x-4 laptop:space-x-0">
            <button onClick={openBurgerMenu}>
              <Icon
                icon="burgerMenu-open"
                size={'w-[28px] h-[28px]'}
                color="fill-black"
                styles=" laptop:hidden"
              />
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
                  <Icon
                    icon="user"
                    size={'w-[26px] h-[26px] laptop:w-[36px] laptop:h-[36px]'}
                    color="fill-transparent"
                    outlineColor="stroke-neutral-70"
                    outlineWidth={1}
                  />
                </button>
                <button className="relative">
                  <span className="absolute inline-flex items-center justify-center w-2 h-2 border border-solid border-white ms-1.5 text-[10px] font-light text-white bg-primary-50 rounded-full"></span>
                  <Icon
                    icon="heart"
                    size={'w-[26px] h-[26px] laptop:w-[36px] laptop:h-[36px]'}
                    color="fill-transparent"
                    outlineColor="stroke-neutral-70"
                    outlineWidth={1.2}
                  />
                </button>
                <button className="relative">
                  <span className="absolute inline-flex items-center justify-center w-4 h-4 border border-solid border-white ms-2 text-[10px] font-light text-white bg-primary-50 rounded-full">
                    99
                  </span>
                  <Icon
                    icon="shopping-cart"
                    size={'w-[26px] h-[26px] laptop:w-[36px] laptop:h-[36px]'}
                    color="fill-transparent"
                    outlineColor="stroke-neutral-70"
                    outlineWidth={1.2}
                  />
                </button>
              </div>
            </div>
          </ActionBar>
        </div>
      </div>
      <div className="flex justify-center">
        <Search
          styles={
            'relative w-full px-3 py-2.5 mb-3 flex items-center laptop:hidden'
          }
        />
      </div>
    </>
  );
};
