import { useContext } from 'react';
import { MediaQueryContext } from '../../contexts/MediaQueryContext';

import ContentLayout from '../../shared/layouts/ContentLayout';
import { MobileFooter } from './components/MobileFooter';
import { LaptopFooter } from './components/LaptopFooter';

export const Footer = () => {
  const { isLaptop } = useContext<MediaQueryContextType>(MediaQueryContext);
  return (
    <div className="bg-secondary-10">
      <ContentLayout>
        {isLaptop ? <MobileFooter /> : <LaptopFooter />}
      </ContentLayout>
    </div>
  );
};
