import { createSlice } from '@reduxjs/toolkit';

interface BurgerMenuSliceState {
  categories: {
    productTypeListIsOpen: boolean;
  };
}

const burgerMenuSlice = createSlice({
  name: 'burgerMenu',
  initialState: {
    categories: {
      productTypeListIsOpen: false,
    },
  } as BurgerMenuSliceState,
  reducers: {
    toggleProductTypeList: (state, { payload }) => {
      state.categories.productTypeListIsOpen = payload;
    },
  },
});
export const burgerMenuReducer = burgerMenuSlice.reducer;
export const { toggleProductTypeList } = burgerMenuSlice.actions;
