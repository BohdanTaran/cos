import { useEffect, useState } from 'react';
import { ArrowIcon } from '../../../../../shared/Icons/ArrowIcon';
import { sliceInfo } from '../../helpers/sliceInfo';

const ads = [
  {
    id: 0,
    text: '1 Lorem ipsum dolor sit consectetur dolor sit amet elit Quod beatae eveniet totam nisi sapiente laborum, ducimus nostrum repudiandae quia aspernatur.',
  },
  {
    id: 1,
    text: '2 Lorem ipsum dolor sit amet consectetur dolor sit amet',
  },
  {
    id: 2,
    text: '3 Lorem ipsum dolor sit consectetur dolor sit amet elit Sed ipsam sint totam dolorum quaerat in?',
  },
  {
    id: 3,
    text: '4 Lorem ipsum dolor sit amet consectetur dolor sit amet adipisicing elit. Soluta?',
  },
];

export const AdSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const swipeToNextInfo = () => {
    setCurrentIndex((prev) => (prev + 1) % ads.length);
  };

  const swipeToPrevInfo = () => {
    setCurrentIndex((prev) => (prev - 1 + ads.length) % ads.length);
  };

  useEffect(() => {
    const interval = setInterval(swipeToNextInfo, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="w-full flex justify-center text-xs text-center space-x-1 tablet:space-x-6 laptop:text-base">
      <button onClick={swipeToPrevInfo}>
        <ArrowIcon color={'white'} styles={'w-6'} />
      </button>
      <div className="space-x-3">
        <span>{sliceInfo(ads[currentIndex].text)}</span>
        <a href="#" className="text-primary20">
          Learn more
        </a>
      </div>
      <button onClick={swipeToNextInfo}>
        <ArrowIcon color={'white'} styles={'w-6'} isRight={true} />
      </button>
    </div>
  );
};
