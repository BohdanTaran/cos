import Icon from '../../../shared/components/Icon';

const QuickLinks = () => {
  return (
    <div>
      <div className="flex flex-row justify-between items-center text-lg font-medium mt-6">
        <p className="font-azeret text-lg font-medium text-neutral-50">
          QUICK LINKS
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
export default QuickLinks;
