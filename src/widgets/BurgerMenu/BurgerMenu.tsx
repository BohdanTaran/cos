import Icon from '../../shared/components/Icon';
import { ActionBar } from '../Header/Bottomer/components/ActionBar';
import { Categories } from '../Header/Bottomer/components/Categories/Categories';
import { SwitchCurrency } from '../Header/Topper/components/SwitchCurrency/SwitchCurrency';
import { SwitchLanguage } from '../Header/Topper/components/SwitchLanguage/SwitchLanguage';
import { useBurger } from './useBurger';

export const BurgerMenu = () => {
  const { setBurgerIsOpen } = useBurger();

  const closeBurgerMenu = () => {
    setBurgerIsOpen((prev) => !prev);
  };
  return (
    <div className="fixed font-medium z-50 bg-white w-full h-screen laptop:hidden">
      <div className="flex overflow-y-auto h-screen justify-center">
        <div className="w-full h-screen">
          <div className="flex p-5 justify-between items-center h-[72px] border-b-2 border-secondary-30 text-2xl">
            <h1 className="text-neutral-70">Menu</h1>
            <button onClick={closeBurgerMenu}>
              <Icon
                icon="burgerMenu-close"
                size={'w-[36px] h-[36px]'}
                color="fill-black"
              />
            </button>
          </div>
          <div className="laptop:space-y-4 h-screen">
            <Categories />
            <ActionBar>
              <nav className="bg-secondary-10 text-neutral-50 px-5 py-6">
                <ul className="mb-6  flex flex-col space-y-6 font-roboto text-lg">
                  <li className="flex flex-row gap-2">
                    <Icon
                      icon="user"
                      size={'w-[26px] h-[26px] laptop:w-[36px] laptop:h-[36px]'}
                      color="fill-transparent"
                      outlineColor="stroke-neutral-70"
                      outlineWidth={1.3}
                    />
                    My account
                  </li>
                  <li className="flex flex-row gap-2">
                    <Icon
                      icon="heart"
                      size={'w-[24px] h-[24px] laptop:w-[36px] laptop:h-[36px]'}
                      color="fill-transparent"
                      outlineColor="stroke-neutral-70"
                      outlineWidth={1.3}
                    />
                    Wish list
                  </li>
                  <li className="flex flex-row gap-2">
                    <Icon
                      icon="info-thin"
                      size={'w-[24px] h-[24px] laptop:w-[36px] laptop:h-[36px]'}
                      color="fill-transparent"
                      outlineColor="stroke-neutral-70"
                    />
                    About us
                  </li>
                  <li className="flex flex-row gap-2">
                    <Icon
                      icon="headset-help"
                      size={'w-[24px] h-[24px] laptop:w-[36px] laptop:h-[36px]'}
                      color="fill-transparent"
                      outlineColor="stroke-neutral-70"
                    />
                    Support center
                  </li>
                  <li>
                    <div className="border-t-4 border-secondary-20 pt-6">
                      <SwitchLanguage isBurger={true} />
                    </div>
                  </li>
                  <li>
                    <SwitchCurrency isBurger={true} />
                  </li>
                </ul>
              </nav>
            </ActionBar>
          </div>
        </div>
      </div>
    </div>
  );
};
