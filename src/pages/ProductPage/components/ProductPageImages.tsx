import { useState } from 'react';
import Icon from '../../../shared/components/Icon';
import Image from '../../../shared/components/Image';

interface Props {
  images: string[];
}

const ProductPageImages = ({ images }: Props) => {
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  const handleNextImg = () => {
    setActiveImgIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImg = () => {
    setActiveImgIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  return (
    <div className="flex items-center justify-center w-full max-h-[578px] min-w-[336px] max-w-[636px]">
      <div className="max-w-[136px] max-h-[578px] h-full flex flex-col space-y-4 justify-center items-center">
        <button className="button-prev-slide" onClick={handlePrevImg}>
          <Icon
            icon="arrow"
            color="fill-neutral-30"
            size="w-6 h-6"
            rotate={90}
          />
        </button>
        {images.map((img: string, index: number) => {
          const isActive = index === activeImgIndex;
          return (
            <div
              key={img}
              className={`w-full min-w-[70px] max-w-[106px] cursor-pointer flex flex-col max-h-[150px] border-2 ${
                isActive ? 'border-primary-50' : 'border-neutral-10'
              } rounded-2xl aspect-w-1 aspect-h-1`}
              onClick={() => setActiveImgIndex(index)}
            >
              <Image
                src={img}
                styles="flex items-center rounded-2xl w-full h-full object-cover"
              />
            </div>
          );
        })}
        <button className="button-next-slide" onClick={handleNextImg}>
          <Icon
            icon="arrow"
            color="fill-neutral-30"
            size="w-6 h-6"
            rotate={270}
          />
        </button>
      </div>

      <div className="w-full min-w-[336px] max-w-[636px] aspect-w-1 aspect-h-1 px-4">
        <Image src={images[activeImgIndex]} styles="w-full max-h-[578px]" />
      </div>
    </div>
  );
};
export default ProductPageImages;
