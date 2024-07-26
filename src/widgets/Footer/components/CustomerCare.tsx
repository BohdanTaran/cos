import Icon from '../../../shared/components/Icon';

const CustomerCare = () => {
  return (
    <button className="flex flex-row justify-between items-center text-lg font-medium">
      <span className="font-azeret text-lg font-medium text-neutral-50">
        CUSTOMER CARE
      </span>
      <Icon icon="downOutlined" color="fill-neutral-50" size={'w-[20px]'} />
    </button>
  );
};
export default CustomerCare;
