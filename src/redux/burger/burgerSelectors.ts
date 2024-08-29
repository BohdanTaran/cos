import { RootState } from '../store';

export const selectBurgerIsOpen = (state: RootState) =>
  state.burger.burgerIsOpen;
