import Icon from '../../../shared/components/Icon';

// interface Props {
//     colors?: string;
// }

const FollowUs = () => {
  // const colorIcon = { 'colors.primary': '10' };
  return (
    <div className="flex flex-col mt-12">
      <p className="font-azeret text-center font-azaret font-medium text-text-secondary">
        FOLLOW US
      </p>
      <div className="flex flex-row justify-center items-center text-center gap-9 mt-12">
        {/* <Icon icon="twitter" color={`${colorIcon}`} size={'w-[18px]'} /> */}
        <Icon icon="twitter" color="text-secondary" size={'w-[18px]'} />
        <Icon icon="pinterest" color="black" size={'w-[16px]'} />
        <Icon icon="inst" color="black" size={'w-[18px]'} />
        <Icon icon="tictok" color="black" size={'w-[16px]'} />
        <Icon icon="youtube" color="black" size={'w-[18px]'} />
      </div>
    </div>
  );
};
export default FollowUs;
