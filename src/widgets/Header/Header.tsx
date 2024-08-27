import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { useBurger } from '../BurgerMenu/useBurger';
import { Bottomer } from './Bottomer/Bottomer';
import { Topper } from './Topper/Topper';

export const Header = () => {
  const { burgerIsOpen } = useBurger();

  return (
    <>
      {burgerIsOpen && <BurgerMenu />}
      <Topper />
      <Bottomer />
    </>
  );
};
