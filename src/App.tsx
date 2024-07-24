import { BurgerProvider } from './contexts/HeaderContext'
import HomePage from './pages/HomePage/HomePage'
import { Footer } from './widgets/Footer/Footer'
import { Header } from './widgets/Header/Header'

export const App = () => {
  return (
    <BurgerProvider>
      <Header />
      <HomePage />
      <Footer />
    </BurgerProvider>
  );
};
