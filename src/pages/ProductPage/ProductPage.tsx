import { Swiper, SwiperSlide } from 'swiper/react';
import FunkyPop from '../../../public/FunkyPop.jpg';
import Image from '../../shared/components/Image';
import ContentLayout from '../../shared/layouts/ContentLayout';
import Carousel from '../../widgets/Carousel/Carousel';
import ProductNavigation from './components/ProductNavigation';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const data = {
  title: 'Funko Pop action figure Harry Potter with a wand',
  reviewMark: 4.5,
  reviews: 3,
  isInStock: true,
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
        <div className="flex flex-col">
          <ProductNavigation />
          <div className="relative min-h-[388px]">
            <Swiper
              modules={[Pagination]}
              pagination={{
                clickable: true,
                el: '.swiper-pagination',
              }}
            >
              {data.images.map((img) => {
                return (
                  <SwiperSlide className="flex justify-center">
                    <Image src={img} styles="" />
                  </SwiperSlide>
                );
              })}
            </Swiper>
            {/* Pagination of slider */}
            <div className="swiper-pagination static"></div>
          </div>
          <div className="py-10">
            <h3 className="uppercase font-azeret font-bold text-xl">
              {data.title}
            </h3>
          </div>
        </div>
      </ContentLayout>
      <Carousel title="Recently viewed items" />
    </>
  );
};
export default ProductPage;
