import { useMediaQueryContext } from './useMediaQueryContext';

import ContentLayout from '../../shared/layouts/ContentLayout';
import { MobileFooter } from './components/MobileFooter';
import { LaptopFooter } from './components/LaptopFooter';

export const Footer = () => {
  const { isTablet } = useMediaQueryContext();

  return (
    <div className="bg-secondary-10">
      <ContentLayout>
        {isTablet ? <MobileFooter /> : <LaptopFooter />}
      </ContentLayout>
    </div>
  );
};
