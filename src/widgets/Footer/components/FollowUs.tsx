import Icon from '../../../shared/components/Icon';

const FollowUs = () => {
  return (
    <div className="flex flex-col text-center justify-center mt-12 laptop:mt-0 laptop:text-start">
      <p className="font-azeret font-medium text-[17px] text-neutral-50 uppercase">
        Follow us
      </p>
      <div className="flex flex-row text-center justify-center gap-8 mt-8 laptop:text-start laptop:gap-6">
        <Icon
          icon="twitter"
          color="fill-neutral-50"
          size={'w-[20px] h-[20px]'}
        />
        <Icon
          icon="pinterest"
          color="fill-neutral-50"
          size={'w-[20px] h-[20px]'}
        />
        <Icon icon="inst" color="fill-neutral-50" size={'w-[20px] h-[20px]'} />
        <Icon
          icon="tictok"
          color="fill-neutral-50"
          size={'w-[20px] h-[20px]'}
        />
        <Icon
          icon="youtube"
          color="fill-neutral-50"
          size={'w-[20px] h-[20px]'}
        />
      </div>
    </div>
  );
};
export default FollowUs;
