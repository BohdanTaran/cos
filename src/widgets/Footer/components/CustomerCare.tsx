import Icon from '../../../shared/components/Icon';

const CustomerCare = () => {
  return (
    <div>
      <div className="flex flex-row justify-between items-center text-lg font-medium">
        <p className="font-azeret text-lg font-medium text-neutral-50">
          CUSTOMER CARE
        </p>
        <Icon
          icon="downOutlined"
          color="fill-neutral-50"
          size={'w-[20px] h-[14px]'}
        />
      </div>
    </div>
  );
};
export default CustomerCare;
