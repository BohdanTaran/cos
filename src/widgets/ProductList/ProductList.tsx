import { useRef } from 'react'
import ProductCard from '../../entities/ProductCard/components/ProductCard'
import { ArrowIcon } from '../../shared/Icons/ArrowIcon'
import styles from './ProductList.module.css'

const ProductList = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative mt-5">
      <div className="flex justify-center">
        <button
          className="hidden laptop:block absolute top-1/2 left-2 desktop-xl:left-5"
          onClick={scrollLeft}
        >
          <ArrowIcon 
          color={'#767680'} size={24} styles={'w-8'} />
        </button>
        <div
          ref={sliderRef}
          className={`${styles.productScrollBar} flex w-11/12 overflow-x-auto pb-6 product-list-scrollbar space-x-2 laptop:space-x-5 laptop:pb-10`}
        >
          <ProductCard label={'EXCLUSIVE'} />
          <ProductCard label={'EXCLUSIVE'} />
          <ProductCard label={'SALE'} />
          <ProductCard label={'NEW'} />
          <ProductCard label={'SALE'} />
          <ProductCard label={'LIMITED'} />
          <ProductCard label={'NEW'} />
        </div>
        <button
          className="hidden laptop:block absolute top-1/2 right-2 desktop-xl:right-5"
          onClick={scrollRight}
        >
          <ArrowIcon
            color={'#767680'}
            size={24}
            styles={'w-8'}
            isRight={true}
          />
        </button>
      </div>
    </div>
  );
};
export default ProductList;
