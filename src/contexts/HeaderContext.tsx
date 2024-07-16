import { createContext, ReactNode, useState } from 'react'

export interface BurgerContextType {
  burgerIsOpen: boolean;
  setBurgerIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BurgerContext = createContext<BurgerContextType | undefined>(undefined);

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
