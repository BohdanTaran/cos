import { Outlet } from 'react-router-dom';
import { BurgerProvider } from './contexts/HeaderContext';
import { Footer } from './widgets/Footer/Footer';
import { Header } from './widgets/Header/Header';
import { BurgerProvider } from './contexts/HeaderContext';
import { MediaQueryProvider } from './contexts/MediaQueryContext';

export const App = () => {
  return (
    <BurgerProvider>
      <MediaQueryProvider>
        <Header />
        <Outlet />
        <Footer />
      </MediaQueryProvider>
    </BurgerProvider>
  );
};
