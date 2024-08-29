import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BurgerState {
  burgerIsOpen: boolean;
}

const initialState: BurgerState = {
  burgerIsOpen: false,
};

const burgerSlice = createSlice({
  name: 'burger',
  initialState,
  reducers: {
    setBurgerIsOpen(state, action: PayloadAction<boolean>) {
      state.burgerIsOpen = action.payload;
    },
  },
});

export const { setBurgerIsOpen } = burgerSlice.actions;

export default burgerSlice.reducer;
