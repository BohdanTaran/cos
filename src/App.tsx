
import { Outlet } from 'react-router-dom';
import AppButton from './AppButton.tsx';
import { BurgerProvider } from './contexts/HeaderContext';
import { Footer } from './widgets/Footer';
import { Header } from './widgets/Header/Header';
import { MediaQueryProvider } from './contexts/MediaQueryContext';
import { Button } from 'antd';

export const App = () => {
  return (
    <BurgerProvider>
      <MediaQueryProvider>
        <AppButton type="default"/>
        <br/>
        <Button type="primary" size="middle">
          Button
        </Button>
        <br/>
        <Button type="primary" size="large">
          Button
        </Button>
        <br/>
        <Header />
        <Outlet />
        <Footer />
      </MediaQueryProvider>
    </BurgerProvider>
  );
};
