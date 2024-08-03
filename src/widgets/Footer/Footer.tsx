import { useContext } from 'react';
import {
  MediaQueryContext,
  MediaQueryContextType,
} from '../../contexts/MediaQueryContext';

import ContentLayout from '../../shared/layouts/ContentLayout';
import { MobileFooter } from './components/MobileFooter';
import { LaptopFooter } from './components/LaptopFooter';

export const Footer = () => {
  const { isMobile } = useContext<MediaQueryContextType>(MediaQueryContext);

  return (
    <div className="bg-secondary-10">
      <ContentLayout>
        {isMobile ? <MobileFooter /> : <LaptopFooter />}
      </ContentLayout>
    </div>
  );
};
