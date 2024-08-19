import { createContext, ReactNode } from 'react';
import { useMediaQuery } from 'react-responsive';

export interface MediaQueryContextType {
  isMobile: boolean;
  isLaptop: boolean;
  isTablet: boolean;
}
const SIZES = {
  phone: `(max-width: 640px)`,
  tablet: `(max-width: 1024px)`,
  laptop: `(max-width: 1280px)`,
};

export interface MediaQueryProviderProps {
  children: ReactNode;
}

export const MediaQueryContext = createContext<
  MediaQueryContextType | undefined
>(undefined);

export const MediaQueryProvider = ({ children }: MediaQueryProviderProps) => {
  const isMobile = useMediaQuery({ query: SIZES.phone });
  const isTablet = useMediaQuery({ query: SIZES.tablet });
  const isLaptop = useMediaQuery({ query: SIZES.laptop });

  return (
    <MediaQueryContext.Provider value={{ isMobile, isLaptop, isTablet }}>
      {children}
    </MediaQueryContext.Provider>
  );
};
