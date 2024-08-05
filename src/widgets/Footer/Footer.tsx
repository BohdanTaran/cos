import { useFooter } from './useFooter';

import ContentLayout from '../../shared/layouts/ContentLayout';
import { MobileFooter } from './components/MobileFooter';
import { LaptopFooter } from './components/LaptopFooter';

export const Footer = () => {
  const { isMobile } = useFooter();
  return (
    <div className="bg-secondary-10">
      <ContentLayout>
        {isMobile ? <MobileFooter /> : <LaptopFooter />}
      </ContentLayout>
    </div>
  );
};
