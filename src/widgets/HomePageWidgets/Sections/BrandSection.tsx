import Image from '../../../shared/components/Image';
import ContentLayout from '../../../shared/layouts/ContentLayout';

const BrandSection = () => {
  return (
    <ContentLayout>
      <div className="h-[51px] justify-between flex items-center space-x-4 overflow-x-auto">
        <Image src="../../../../public/marvel.png" styles="w-24" />
        <Image src="../../../../public/funko.png" styles="w-24" />
        <Image src="../../../../public/starwars.png" styles="w-24" />
        <Image src="../../../../public/marvel.png" styles="w-24" />
        <Image src="../../../../public/funko.png" styles="w-24" />
        <Image src="../../../../public/starwars.png" styles="w-24" />
        <Image src="../../../../public/marvel.png" styles="w-24" />
        <Image src="../../../../public/funko.png" styles="w-24" />
        <Image src="../../../../public/starwars.png" styles="w-24" />
      </div>
    </ContentLayout>
  );
};
export default BrandSection;
