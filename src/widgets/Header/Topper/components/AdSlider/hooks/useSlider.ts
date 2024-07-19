import { useCallback, useEffect, useState } from 'react';

export const useSlider = (quantityOfElements: number, intervalTime = 5000) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const swipeToNextInfo = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % quantityOfElements);
  }, [quantityOfElements]);

  const swipeToPrevInfo = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + quantityOfElements) % quantityOfElements,
    );
  }, [quantityOfElements]);

  useEffect(() => {
    const interval = setInterval(swipeToNextInfo, intervalTime);
    return () => clearInterval(interval);
  }, [currentIndex, swipeToNextInfo, intervalTime]);

  return { swipeToPrevInfo, swipeToNextInfo, currentIndex };
};
