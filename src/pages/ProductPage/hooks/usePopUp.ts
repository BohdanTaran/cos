import { useEffect, useState } from 'react';

export const usePopUp = () => {
  const [isShowPopUp, setIsShowPopUp] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const triggerPosition = 800;
      setIsShowPopUp(window.scrollY > triggerPosition);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return isShowPopUp; // TODO: always return object in hook
};
