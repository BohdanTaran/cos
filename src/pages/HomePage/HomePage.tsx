import Carousel from '../../widgets/Carousel/Carousel';
import Hero from '../../widgets/HomePageWidgets/Hero/Hero';
import BrandSection from '../../widgets/HomePageWidgets/Sections/BrandSection';
import { ProductSection } from '../../widgets/HomePageWidgets/Sections/ProductSection';
import SaleSection from '../../widgets/HomePageWidgets/Sections/SaleSection';
import WhyShopSection from '../../widgets/HomePageWidgets/Sections/WhyShopSection';

const HomePage = () => {
  return (
    <>
      <Hero />
      <BrandSection />
      <Carousel title="Featured sets" />
      <SaleSection />
      <ProductSection />
      <WhyShopSection />
    </>
  );
};
export default HomePage;
