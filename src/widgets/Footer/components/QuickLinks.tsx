import Icon from '../../../shared/components/Icon';

const QuickLinks = () => {
  return (
    <div>
      <div className="flex flex-row justify-between items-center text-lg font-medium mt-6">
        <h2 className="font-azeret text-lg font-medium text-neutral-50">
          QUICK LINKS
        </h2>
        <button type="button" className="cursor-pointer">
          <Icon
            icon="downOutlined"
            color="fill-neutral-50"
            size={'w-[20px] h-[14px]'}
          />
        </button>
      </div>
    </div>
  );
};
export default QuickLinks;
