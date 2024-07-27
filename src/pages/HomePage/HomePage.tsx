import Carousel from '../../widgets/Carousel/Carousel';
import Categories from '../../widgets/Categories/Categories';
import SaleSection from '../../widgets/Sections/SaleSection';
import WhyShopSection from '../../widgets/Sections/WhyShopSection';

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
