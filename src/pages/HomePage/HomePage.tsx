import Carousel from '../../widgets/Carousel/Carousel';
import Categories from '../../widgets/Categories/Categories';
import WhyShopSection from '../../widgets/Sections/WhyShopSection';

const HomePage = () => {
  return (
    <>
      <Carousel title="Featured sets" />
      <Categories />
      <WhyShopSection />
    </>
  );
};
export default HomePage;
