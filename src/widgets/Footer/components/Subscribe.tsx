import Icon from '../../../shared/components/Icon';

export const Subscribe = () => {
  return (
    <div className="text-center px-5 pt-10">
      <p className="font-azeret text-base font-medium text-text-secondary text-center">
        SUBSCRIBE TO OUR NEWSLETTER
      </p>
      <form>
        <div className="flex flex-row justify-items-start items-center gap-2 h-[40px] mt-6 w-full bg-white text-sm border border-solid rounded-lg pl-3 pr-2 outline-none">
          <input
            className="h-[40px] w-full text-sm outline-neutral-10 bg-transparent"
            type="text"
            placeholder="Your Email"
          />
          <Icon
            icon="rocket"
            color="fill-neutral-30"
            size={'w-[24px] h-[24px]'}
          />
        </div>
        <button
          type="submit"
          className="font-roboto text-sm font-normal text-neutral-20 focus:text-primary-20 border border-solid border-neutral-20 hover:border-transparent rounded-md mt-4 p-1 pl-4 pr-4"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};
