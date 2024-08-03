import { BurgerProvider } from './contexts/HeaderContext';
import { MediaQueryProvider } from './contexts/MediaQueryContext';
import HomePage from './pages/HomePage/HomePage';
import { Footer } from './widgets/Footer/Footer';
import { Header } from './widgets/Header/Header';

export const App = () => {
  return (
    <BurgerProvider>
      <MediaQueryProvider>
        <Header />
        <HomePage />
        <Footer />
      </MediaQueryProvider>
    </BurgerProvider>
  );
};
