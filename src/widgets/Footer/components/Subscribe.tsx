import Icon from '../../../shared/components/Icon';

const Subscribe = () => {
  return (
    <div className="text-center pt-10 mb-12 laptop:mt-4 ">
      <p className="font-azeret text-base font-medium text-neutral-50 text-center">
        SUBSCRIBE&nbsp;TO&nbsp;OUR&nbsp;NEWSLETTER
      </p>
      <form>
        <div className="flex flex-row justify-items-start items-center gap-2 h-[40px] mt-6 w-full bg-white text-sm border border-solid rounded-lg pl-3 pr-2 outline-none">
          <input
            className="h-[40px] w-full text-sm outline-neutral-10 bg-white opacity-5"
            type="text"
            placeholder="Your Email"
          />
          <Icon
            icon="rocket"
            color="fill-neutral-30"
            size={'w-[24px] h-[24px]'}
          />
        </div>
        <div className="flex justify-center mt-6 laptop:justify-end laptop:mt-3">
          <button
            type="submit"
            className="font-roboto text-sm font-normal text-neutral-20 focus:text-primary-40 hover:border-transparent rounded-md p-1 pl-4 pr-4"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};
export default Subscribe;
