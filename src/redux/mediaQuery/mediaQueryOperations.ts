import { AppDispatch } from '../store';
import { setIsMobile, setIsTablet, setIsLaptop } from './mediaQuerySlice';

const SIZES = {
  phone: `(min-width: 375px)`,
  tablet: `(min-width: 720px)`,
  laptop: `(min-width: 1440px)`,
};

export const checkMediaQueries = () => (dispatch: AppDispatch) => {
  const isMobile = window.matchMedia(SIZES.phone).matches;
  const isTablet = window.matchMedia(SIZES.tablet).matches;
  const isLaptop = window.matchMedia(SIZES.laptop).matches;

  dispatch(setIsMobile(isMobile));
  dispatch(setIsTablet(isTablet));
  dispatch(setIsLaptop(isLaptop));
};
