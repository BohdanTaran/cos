import ContentLayout from '../../shared/layouts/ContentLayout';
import Carousel from '../../widgets/Carousel/Carousel';
import ProductNavigation from './components/ProductNavigation';

import 'swiper/css';
import 'swiper/css/pagination';
import ProductActions from './components/ProductActions';
import ProductDetails from './components/ProductDetails';
import ProductPageSliderMobile from './components/ProductPageSliderMobile';

const data = {
  title: 'Funko Pop action figure Harry Potter with a wand',
  reviews: 3,
  rating: 3.5,
  isInStock: true,
  inStock: 5,
  label: 'SALE',
  price: 15,
  oldPrice: 25,
  discount: 40,
  description:
    'Introducing the classic plastic Harry Potter toy with his iconic wand! This detailed figure captures Harry in his Hogwarts uniform. Perfect for fans, this 6-inch collectible brings the Wizarding World magic to life.',
  images: ['../../../public/FunkyPop.jpg', '../../../public/FunkyPop2.jpg'],
};

const ProductPage = () => {
  return (
    <>
      <ContentLayout>
        <ProductNavigation />
        <ProductPageSliderMobile images={data.images} />
        <ProductDetails product={data} />
        <ProductActions product={data} />
      </ContentLayout>
      <Carousel title="Recently Viewed" />
    </>
  );
};
export default ProductPage;
