import Icon from '../../../../../shared/components/Icon';
import { useAdvertisements } from './hooks/useAdvertisements';
import { useSlider } from './hooks/useSlider';

export const AdSlider = () => {
  const { advertisements, isLoading } = useAdvertisements();
  const { swipeToPrevInfo, swipeToNextInfo, currentIndex } = useSlider(
    advertisements.length,
  );

  return (
    <div className="min-w-[295px] flex justify-between text-xs text-center space-x-4 tablet:space-x-6 laptop:text-base">
      <button onClick={swipeToPrevInfo}>
        <Icon icon="arrow-left" size="w-5 h-5" color="white" />
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
        <Icon icon="arrow-right" size="w-5 h-5" color="white" />
      </button>
    </div>
  );
};
