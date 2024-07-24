import Icon from '../../shared/components/Icon'
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
            <h1 className='text-neutral-70'>Menu</h1>
            <button onClick={closeBurgerMenu}>
              <Icon
                icon="burgerMenu-close"
                size={'w-[36px] h-[36px]'}
                color="fill-black"
              />
            </button>
          </div>
          <div className="space-y-4 h-screen">
            <Categories />
            <ActionBar>
              <nav className="bg-secondary-10 text-neutral-50">
                <ul className="p-5 flex flex-col space-y-5 font-roboto">
                  <li>About us</li>
                  <li>Support center</li>
                  <li>
                    <SwitchLanguage isBurger={true} />
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
