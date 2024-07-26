import Carousel from '../Carousel/Carousel';

const SaleSection = () => {
  return (
    <div className="py-10 space-y-10">
      <div className="flex justify-center items-center w-full h-[605px] bg-sale-section bg-cover">
        <div className="w-full flex flex-col gap-4 text-center text-white">
          <div className="flex flex-col gap-4 font-azeret">
            <span className='font-medium laptop:text-3xl'>UP TO 50% OFF</span>
            <span className='text-3xl text-[#FFDE9C] font-bold laptop:text-6xl'>SUMMER SALE</span>
          </div>
          <div className="flex flex-col items-center gap-4 font-roboto">
            <p className='w-5/6 laptop:text-2xl'>
              Get ready for your next adventure and save up to 50% off SPACE
              themed
            </p>
            <button className='bg-secondary-10 text-neutral-90 w-[95px] h-[40px] rounded-md text-sm laptop:w-[196px] laptop:font-medium'>Shop Sale</button>
          </div>
        </div>
      </div>
      <Carousel title="Hot Deals" />
    </div>
  );
};
export default SaleSection;
