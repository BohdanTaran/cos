import Icon from '../../../shared/components/Icon';

const Subscribe = () => {
  return (
    <div className="text-center pt-10 mb-12 laptop:mt-4">
      <p className="font-azeret text-base laptop:text-sm font-medium text-neutral-50 text-center uppercase">
        SUBSCRIBE&nbsp;TO&nbsp;OUR&nbsp;NEWSLETTER
      </p>
      <form>
        <div className="flex flex-row justify-items-start items-center gap-2 h-[40px] laptop:h-[32px] mt-6 w-full bg-white text-sm border border-solid rounded-lg pl-3 pr-2 outline-none">
          <input
            className="w-full text-sm text-neutral-40 outline-none"
            type="text"
            placeholder="Your Email"
          />
          <Icon
            icon="rocket"
            color="fill-neutral-30"
            size={'w-[24px] h-[24px]'}
          />
        </div>
        <div className="flex justify-center laptop:justify-end mt-6 laptop:mt-[10px]">
          <button
            type="submit"
            className=" p-2 laptop:p-1 font-roboto text-sm laptop:text-xs font-normal text-neutral-20 focus:text-primary-40 hover:border-transparent rounded-md"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};
export default Subscribe;