import FunkoImg from '../../../../public/funko.png';
import MarvelImg from '../../../../public/marvel.png';
import SWImg from '../../../../public/starwars.png';
import Image from '../../../shared/components/Image';
import ContentLayout from '../../../shared/layouts/ContentLayout';

const BrandSection = () => {
  return (
    <ContentLayout>
      <div className="h-[51px] justify-between flex items-center space-x-4 overflow-x-auto">
        <Image src={MarvelImg} styles="w-24" />
        <Image src={FunkoImg} styles="w-24" />
        <Image src={SWImg} styles="w-24" />
        <Image src={MarvelImg} styles="w-24" />
        <Image src={FunkoImg} styles="w-24" />
        <Image src={SWImg} styles="w-24" />
        <Image src={MarvelImg} styles="w-24" />
        <Image src={FunkoImg} styles="w-24" />
        <Image src={SWImg} styles="w-24" />
        <Image src={MarvelImg} styles="w-24" />
        <Image src={FunkoImg} styles="w-24" />
        <Image src={SWImg} styles="w-24" />
      </div>
    </ContentLayout>
  );
};
export default BrandSection;
