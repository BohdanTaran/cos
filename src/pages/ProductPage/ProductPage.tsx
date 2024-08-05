import { Swiper, SwiperSlide } from 'swiper/react';
import FunkyPop from '../../../public/FunkyPop.jpg';
import Image from '../../shared/components/Image';
import ContentLayout from '../../shared/layouts/ContentLayout';
import Carousel from '../../widgets/Carousel/Carousel';
import ProductNavigation from './components/ProductNavigation';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

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
              <SwiperSlide>
                <Image src={FunkyPop} styles="" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={FunkyPop} styles="" />
              </SwiperSlide>
            </Swiper>
            {/* Pagination of slider */}
            <div className="swiper-pagination static"></div>
          </div>
        </div>
      </ContentLayout>
      <Carousel title="Recently viewed items" />
    </>
  );
};
export default ProductPage;
