import ProductCard from '../../entities/ProductCard/components/ProductCard'

const ProductList = () => {
	return (
    <div className="mt-5">
      <div className="flex justify-center">
        <div className="flex w-11/12 overflow-x-auto pb-6 product-list-scrollbar space-x-2 laptop:space-x-5 laptop:pb-10">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
}
export default ProductList