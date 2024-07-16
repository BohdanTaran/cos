import { CloseBurgerIcon } from '../../shared/Icons/CloseBurgerIcon'
import { ActionBar } from '../Header/Bottomer/components/ActionBar'
import { Categories } from '../Header/Bottomer/components/Categories/Categories'
import { SwitchCurrency } from '../Header/Topper/components/SwitchCurrency/SwitchCurrency'
import { SwitchLanguage } from '../Header/Topper/components/SwitchLanguage/SwitchLanguage'
import { useBurger } from './useBurger'


export const BurgerMenu = () => {
  const { setBurgerIsOpen } = useBurger();

  const closeBurgerMenu = () => {
    setBurgerIsOpen((prev) => !prev);
  };
  return (
    <div className="fixed font-medium z-50 bg-white w-full h-screen laptop:hidden">
      <div className="flex overflow-y-auto h-screen justify-center">
        <div className="w-full h-screen">
          <div className="flex p-5 justify-between items-center h-[72px] border-b-2 border-[#C191FF] text-2xl">
            <h1>Menu</h1>
            <button onClick={closeBurgerMenu}>
              <CloseBurgerIcon />
            </button>
          </div>
          <div className="space-y-4 h-screen">
            <Categories />
            <ActionBar>
              <nav className="bg-primary-10 text-[#56565E]">
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
