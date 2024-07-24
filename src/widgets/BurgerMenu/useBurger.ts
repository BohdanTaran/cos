import { useContext } from 'react'
import { BurgerContext, BurgerContextType } from '../../contexts/HeaderContext'

export const useBurger = (): BurgerContextType => {
  const context = useContext(BurgerContext);
  if (context === undefined) {
    throw new Error('useBurger must be used within a BurgerProvider');
  }
  return context;
};