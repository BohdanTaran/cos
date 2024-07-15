import { BurgerMenu } from '../../shared/components/BurgerMenu/BurgerMenu';
import { useBurger } from '../../shared/contexts/BurgerProvider';
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
