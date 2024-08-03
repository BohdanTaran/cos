import { createContext, ReactNode, useState } from 'react';

export interface HeaderContextType {
  burgerIsOpen: boolean;
  setBurgerIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BurgerContext = createContext<HeaderContextType | undefined>(
  undefined,
);

interface BurgerProviderProps {
  children: ReactNode;
}

export const BurgerProvider = ({ children }: BurgerProviderProps) => {
  const [burgerIsOpen, setBurgerIsOpen] = useState(false);

  return (
    <BurgerContext.Provider value={{ burgerIsOpen, setBurgerIsOpen }}>
      {children}
    </BurgerContext.Provider>
  );
};
