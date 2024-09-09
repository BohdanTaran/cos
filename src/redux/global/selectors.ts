interface GlobalSliceState {
  productTypeListIsOpen: boolean;
}
export const selectProductTypeListIsOpen = (state: GlobalSliceState) =>
  state.productTypeListIsOpen;
