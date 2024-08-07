import ContentLayout from '../../shared/layouts/ContentLayout';
import Carousel from '../../widgets/Carousel/Carousel';
import ProductNavigation from './components/ProductNavigation';

import { useMediaQuery } from 'react-responsive';
import 'swiper/css';
import 'swiper/css/pagination';
import ProductActions from './components/ProductActions';
import ProductDetails from './components/ProductDetails';
import ProductPageImages from './components/ProductPageImages';
import ProductPageSlider from './components/ProductPageSlider';

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
  images: [
    '/FunkyPop.webp',
    '/FunkyPop2.webp',
    '/FunkyPop.webp',
    '/FunkyPop2.webp',
  ],
};

const ProductPage = () => {
  const isLaptop = useMediaQuery({
    query: `(min-width: 1024px)`,
  });

  return (
    <>
      <ContentLayout>
        <ProductNavigation />
        <div className="w-full flex flex-col laptop:flex-row">
          {isLaptop ? (
            <ProductPageImages images={data.images} />
          ) : (
            <ProductPageSlider images={data.images} />
          )}
          <div className="flex flex-col w-full laptop:w-5/6">
            <ProductDetails product={data} />
            <ProductActions product={data} />
          </div>
        </div>
      </ContentLayout>
      <Carousel title="Recently Viewed" />
    </>
  );
};
export default ProductPage;
