import { BurgerProvider } from '../shared/contexts/BurgerProvider'
import { Footer } from '../widgets/Footer/Footer'
import { Header } from '../widgets/Header/Header'
import { Main } from '../widgets/Main/Main'

export const App = () => {
  return (
    <BurgerProvider>
      <Header />
      <Main>
        <p>Main content</p>
      </Main>
      <Footer />
    </BurgerProvider>
  );
};
