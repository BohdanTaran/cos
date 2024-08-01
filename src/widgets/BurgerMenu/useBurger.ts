import { useContext } from 'react';
import { BurgerContext, HeaderContextType } from '../../contexts/HeaderContext';

export const useBurger = (): HeaderContextType => {
  const context = useContext(BurgerContext);
  if (context === undefined) {
    throw new Error('useBurger must be used within a BurgerProvider');
  }
  return context;
};
