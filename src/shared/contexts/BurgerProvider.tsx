import { createContext, ReactNode, useContext, useState } from 'react';

interface BurgerContextType {
  burgerIsOpen: boolean;
  setBurgerIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const BurgerContext = createContext<BurgerContextType | undefined>(undefined);

interface BurgerProviderProps {
  children: ReactNode;
}

export const BurgerProvider: React.FC<BurgerProviderProps> = ({ children }) => {
  const [burgerIsOpen, setBurgerIsOpen] = useState(false);

  return (
    <BurgerContext.Provider value={{ burgerIsOpen, setBurgerIsOpen }}>
      {children}
    </BurgerContext.Provider>
  );
};

export const useBurger = (): BurgerContextType => {
  const context = useContext(BurgerContext);
  if (context === undefined) {
    throw new Error('useBurger must be used within a BurgerProvider');
  }
  return context;
};
