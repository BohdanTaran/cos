interface BurgerMenuSliceState {
  categories: {
    productTypeListIsOpen: boolean;
  };
}
export const productTypeListIsOpen = (state: BurgerMenuSliceState) =>
  state.categories.productTypeListIsOpen;
