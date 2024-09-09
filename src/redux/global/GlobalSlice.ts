import { createSlice } from '@reduxjs/toolkit';
import { log } from 'console';

interface GlobalSliceState {
  productTypeListIsOpen: boolean;
}

const globalSlice = createSlice({
  name: 'global',
  initialState: {
    isLoading: false,
    error: null,
    productTypeListIsOpen: false,
    categories: {},
  } as GlobalSliceState, // Ensure the interface matches the initialState
  reducers: {
    toggleProductTypeList: (state, { payload }) => {
      state.productTypeListIsOpen = payload;
      console.log('productTypeListIsOpen', state.productTypeListIsOpen);
    },
  },
});

export const globalSliceReducer = globalSlice.reducer;

export const { toggleProductTypeList } = globalSlice.actions;
