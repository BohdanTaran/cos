import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MediaQueryState {
  isMobile: boolean;
  isTablet: boolean;
  isLaptop: boolean;
}

const initialState: MediaQueryState = {
  isMobile: false,
  isTablet: false,
  isLaptop: false,
};

const mediaQuerySlice = createSlice({
  name: 'mediaQuery',
  initialState,
  reducers: {
    setIsMobile(state, action: PayloadAction<boolean>) {
      state.isMobile = action.payload;
    },
    setIsTablet(state, action: PayloadAction<boolean>) {
      state.isTablet = action.payload;
    },
    setIsLaptop(state, action: PayloadAction<boolean>) {
      state.isLaptop = action.payload;
    },
  },
});

export const { setIsMobile, setIsTablet, setIsLaptop } =
  mediaQuerySlice.actions;

export default mediaQuerySlice.reducer;
