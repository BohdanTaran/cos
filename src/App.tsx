import { BurgerProvider } from './contexts/HeaderContext'
import { Footer } from './widgets/Footer/Footer'
import { Header } from './widgets/Header/Header'
import { Main } from './widgets/Main/Main'

export const App = () => {
  return (
    <BurgerProvider>
      <Header />
      <Main/>
      <Footer />
    </BurgerProvider>
  );
};
