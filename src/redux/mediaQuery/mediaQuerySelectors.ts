import { RootState } from '../store';

export const selectIsMobile = (state: RootState) => state.mediaQuery.isMobile;
export const selectIsTablet = (state: RootState) => state.mediaQuery.isTablet;
export const selectIsLaptop = (state: RootState) => state.mediaQuery.isLaptop;
