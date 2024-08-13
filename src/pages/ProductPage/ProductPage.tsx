import ContentLayout from '../../shared/layouts/ContentLayout';
import Carousel from '../../widgets/Carousel/Carousel';
import ProductNavigation from './components/ProductNavigation';

import 'swiper/css';
import 'swiper/css/pagination';
import WhyShopSection from '../../widgets/HomePageWidgets/Sections/WhyShopSection';
import ProductInformation from '../../widgets/ProductPageWidgets/ProductInformation';
import ProductMain from '../../widgets/ProductPageWidgets/ProductMain';

const product = {
  title: 'Funko Pop action figure Harry Potter with a wand',
  reviews: 3,
  rating: 3.5,
  inStock: 5,
  label: 'SALE',
  price: 15,
  oldPrice: 25,
  discount: 40,
  description:
    'Introducing the classic plastic Harry Potter toy with his iconic wand! This detailed figure captures Harry in his Hogwarts uniform. Perfect for fans, this 6-inch collectible brings the Wizarding World magic to life.',
  longDescription:
    'Funko is constantly releasing relevant and updated collections of accessories based on famous films, games and animated series. It is the dream of any fan to collect the entire series of their favourite characters on their shelf or worktable.\n\nThe vinyl action figure Funko Pop! - Harry Potter with Wand will be a great gift for fans of the Harry Potter film by Warner Bros.\n\nDesign in the Japanese anime style ‘tibi’ - characters with a small body and a large head\n\nHigh level of detail ensures maximum resemblance to the character and makes the gameplay more exciting\n\nThe collectible figure will appeal to both children and adults\n\nFunko Pop! action figure promotes imagination, play and emotional development\n\nFigure size: almost 9.6 cm (depending on accessories)',
  images: [
    '/FunkyPop.webp',
    '/FunkyPop2.webp',
    '/FunkyPop.webp',
    '/FunkyPop2.webp',
  ],
};

const ProductPage = () => {
  return (
    <>
      <ContentLayout>
        <ProductNavigation />
        <ProductMain product={product} />
        <ProductInformation product={product} />
      </ContentLayout>
      <Carousel title="Recently Viewed" />
      <WhyShopSection />
    </>
  );
};
export default ProductPage;
