import Carousel from '../../widgets/Carousel/Carousel';
import Categories from '../../widgets/HomePageWidgets/Categories/Categories';
import SaleSection from '../../widgets/HomePageWidgets/Sections/SaleSection';
import WhyShopSection from '../../widgets/HomePageWidgets/Sections/WhyShopSection';

const HomePage = () => {
  return (
    <>
      <Carousel title="Featured sets" />
      <Categories />
      <SaleSection />
      <WhyShopSection />
    </>
  );
};
export default HomePage;
