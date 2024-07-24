import { useAdvertisements } from './hooks/useAdvertisements';
import { useSlider } from './hooks/useSlider';

export const AdSlider = () => {
  const { advertisements, isLoading } = useAdvertisements();
  const { currentIndex } = useSlider(advertisements.length);

  return (
    <div className="min-w-[295px] flex justify-center text-xs text-center space-x-4 tablet:space-x-6 laptop:text-base">
      <div className="space-x-3">
        {!isLoading && (
          <>
            <span className="text-neutral-90">
              {advertisements[currentIndex]?.text
                .split(' ')
                .slice(0, 9)
                .join(' ')}
            </span>
            <a
              href={advertisements[currentIndex]?.url}
              className="text-primary-40"
            >
              Learn more
            </a>
          </>
        )}
      </div>
    </div>
  );
};
