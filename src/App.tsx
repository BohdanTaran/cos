import { Outlet } from 'react-router-dom';
import { BurgerProvider } from './contexts/HeaderContext';
import { Footer } from './widgets/Footer';
import { Header } from './widgets/Header/Header';
import { MediaQueryProvider } from './contexts/MediaQueryContext';
import { Button, ConfigProvider } from 'antd';
import { theme } from '../antDesign/theme.ts';

export const App = () => {
  return (
    <ConfigProvider theme={theme}>
      <BurgerProvider>
        <MediaQueryProvider>
          <Button type="primary" size="middle">
            Button
          </Button>
          <Button type="primary" size="large">
            Button
          </Button>
          <Header />
          <Outlet />
          <Footer />
        </MediaQueryProvider>
      </BurgerProvider>
    </ConfigProvider>
  );
};
