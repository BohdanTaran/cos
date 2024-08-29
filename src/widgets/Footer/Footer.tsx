import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { AppDispatch } from '../../redux/store';
import { selectIsTablet } from '../../redux/mediaQuery/mediaQuerySelectors';
import { checkMediaQueries } from '../../redux/mediaQuery/mediaQueryOperations';
import ContentLayout from '../../shared/layouts/ContentLayout';
import { MobileFooter } from './components/MobileFooter';
import { LaptopFooter } from './components/LaptopFooter';

export const Footer: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const isTablet = useSelector(selectIsTablet);

  useEffect(() => {
    dispatch(checkMediaQueries());
  }, [dispatch]);

  return (
    <div className="bg-secondary-10">
      <ContentLayout>
        {isTablet ? <MobileFooter /> : <LaptopFooter />}
      </ContentLayout>
    </div>
  );
};
