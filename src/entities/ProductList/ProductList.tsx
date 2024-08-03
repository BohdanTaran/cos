import { useRef } from 'react';
import ProductCard from '../../entities/ProductCard/components/ProductCard';
import Icon from '../../shared/components/Icon';
import styles from './ProductList.module.css';

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
    <>
      <button
        className="hidden laptop:block absolute top-1/2 left-2 desktop-xl:left-5"
        onClick={scrollLeft}
      >
        <Icon icon="arrow-left" size="w-[24px] h-[24px]" color="fill-neutral-30" />
      </button>
      <div
        ref={sliderRef}
        className={`${styles.productScrollBar} flex overflow-x-auto pb-6 product-list-scrollbar space-x-2 laptop:space-x-5 laptop:pb-10`}
      >
        <ProductCard label={'EXCLUSIVE'} />
        <ProductCard label={'LIMITED'} />
        <ProductCard label={'SALE'} />
        <ProductCard />
        <ProductCard label={'SALE'} />
        <ProductCard />
        <ProductCard label={'NEW'} />
      </div>
      <button
        className="hidden laptop:block absolute top-1/2 right-2 desktop-xl:right-5"
        onClick={scrollRight}
      >
        <Icon icon="arrow-right" size="w-[24px] h-[24px]" color="fill-neutral-30" />
      </button>
    </>
  );
};
export default ProductList;
