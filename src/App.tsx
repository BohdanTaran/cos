import { Outlet } from 'react-router-dom';
import { BurgerProvider } from './contexts/HeaderContext';
import { Footer } from './widgets/Footer/Footer';
import { Header } from './widgets/Header/Header';


export const App = () => {
  return (
    <BurgerProvider>
      <Header />
      <Outlet />
      <Footer />
    </BurgerProvider>
  );
};
