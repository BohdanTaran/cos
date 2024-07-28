import { useMediaQuery } from 'react-responsive';

const SIZES = {
  mobile: `(max-width: 640px)`,
  tablet: `(max-width: 1024px)`,
  laptop: `(max-width: 1280px)`,
  desktop: `(min-width: 1280px)`,
};


export const MediaQueryContext = createContext<MediaQueryContextType | undefined>(undefined);

interface MediaQueryProviderProps {
  children: ReactNode;
}

export const MediaQueryProvider = ({ children }: MediaQueryProviderProps) => {
  const isMobile = useMediaQuery({ query: SIZES.mobile });
  const isTablet = useMediaQuery({ query: SIZES.tablet });
  const isLaptop = useMediaQuery({ query: SIZES.laptop })

  return (
    <MediaQueryContext.Provider value={{ isMobile, isLaptop, isTablet }}>
      {children}
    </MediaQueryContext.Provider>
  );
};

