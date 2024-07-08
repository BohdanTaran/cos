import { Footer } from '../shared/ui/Footer/Footer';
import { Header } from '../shared/ui/Header/Header';
import { Main } from '../shared/ui/Main/Main';

export const App = () => {
  return (
    <>
      <Header />
      <Main>
        <p>Main content</p>
      </Main>
      <Footer />
    </>
  );
};
