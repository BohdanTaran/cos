import Icon from '../../../shared/components/Icon';

const FollowUs = () => {
  return (
    <div className="flex flex-col mt-12">
      <p className="font-azeret text-center font-azaret font-medium text-text-secondary">
        FOLLOW US
      </p>
      <div className="flex flex-row justify-center items-center text-center gap-9 mt-12">
        <Icon icon="twitter" color="fill-neutral-50" size={'w-[18px]'} />
        <Icon icon="pinterest" color="fill-neutral-50" size={'w-[16px]'} />
        <Icon icon="inst" color="fill-neutral-50" size={'w-[18px]'} />
        <Icon icon="tictok" color="fill-neutral-50" size={'w-[16px]'} />
        <Icon icon="youtube" color="fill-neutral-50" size={'w-[18px]'} />
      </div>
    </div>
  );
};
export default FollowUs;
