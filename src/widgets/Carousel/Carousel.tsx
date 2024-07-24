import ProductList from '../../entities/ProductList/ProductList'

interface Props {
  title: string;
}

const Carousel = ({ title }: Props) => {
  return (
    <div className="flex justify-center relative pb-5 laptop:pb-16">
      <div className="w-11/12">
        <div className="flex justify-between py-5 laptop:py-16">
          <span className="font-azeret font-medium text-base laptop:text-3xl">
            {title}
          </span>
          <a
            href="#"
            className="text-primary-40 font-roboto text-sm font-normal laptop:text-base laptop:font-medium"
          >
            View All
          </a>
        </div>
        <ProductList />
      </div>
    </div>
  );
};
export default Carousel;
