import Carousel from '../../widgets/Carousel/Carousel';
import BrandSection from '../../widgets/HomePageWidgets/Sections/BrandSection'
import SaleSection from '../../widgets/HomePageWidgets/Sections/SaleSection';
import WhyShopSection from '../../widgets/HomePageWidgets/Sections/WhyShopSection';

const HomePage = () => {
  return (
    <>
      <Carousel title="Featured sets" />
      <BrandSection />
      <SaleSection />
      <WhyShopSection />
    </>
  );
};
export default HomePage;
