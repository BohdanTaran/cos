import { ArrowIcon } from '../../../../../shared/Icons/ArrowIcon'
import { useAdvertisements } from './hooks/useAdvertisements'
import { useSlider } from './hooks/useSlider'

export const AdSlider = () => {
  const { advertisements, isLoading } = useAdvertisements();
  const { swipeToPrevInfo, swipeToNextInfo, currentIndex } = useSlider(
    advertisements.length,
  );

  return (
    <div className="w-full flex justify-center text-xs text-center space-x-4 tablet:space-x-6 laptop:text-base">
      <button onClick={swipeToPrevInfo}>
        <ArrowIcon color={'white'} styles={'w-6'} />
      </button>
      <div className="space-x-3">
        {!isLoading ? (
          <>
            <span>
              {advertisements[currentIndex]?.text
                .split(' ')
                .slice(0, 9)
                .join(' ')}
            </span>
            <a
              href={advertisements[currentIndex]?.url}
              className="text-primary-20"
            >
              Learn more
            </a>
          </>
        ) : (
          <span>Loading...</span>
        )}
      </div>
      <button onClick={swipeToNextInfo}>
        <ArrowIcon color={'white'} styles={'w-6'} isRight={true} />
      </button>
    </div>
  );
};
