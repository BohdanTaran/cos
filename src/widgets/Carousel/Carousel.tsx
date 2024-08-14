import ProductList from '../../entities/ProductList/ProductList';
import ContentLayout from '../../shared/layouts/ContentLayout';

interface Props {
  title: string;
}

const Carousel = ({ title }: Props) => {
  return (
    <div className='relative'>
      <ContentLayout>
        <div className="py-6 laptop:py-20">
          <div className="flex justify-between pb-6 laptop:pb-14">
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
      </ContentLayout>
    </div>
  );
};
export default Carousel;
