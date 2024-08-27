import { useMemo } from 'react';
import Image from '../../../shared/components/Image';
import ContentLayout from '../../../shared/layouts/ContentLayout';

const BrandSection = () => {
  const images = useMemo(() => {
    const urls = ['/marvel.png', '/starwars.png', '/funko.png'];
    return [...urls, ...urls, ...urls];
  }, []);

  return (
    <ContentLayout>
      <div className="h-[51px] justify-between flex items-center space-x-4 overflow-x-auto">
        {images.map((url) => (
          <Image src={url} styles="w-24 max-h-[51px]" />
        ))}
      </div>
    </ContentLayout>
  );
};
export default BrandSection;
