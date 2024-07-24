import Icon from '../../../shared/components/Icon';

const QuickLnks = () => {
  return (
    <div className="flex flex-row justify-between items-center">
      <p className="font-azeret text-lg font-medium">QUICK LINKS</p>
      <Icon icon="downOutlined" color="neutral-50" size={'w-[20px]'} />
      {/* <>
        {
          <svg className="fill-neutral-50 w-[20px]">
            <use href={`${svgSprite}#icon-downOutlined`} />
          </svg>
        }
      </> */}
    </div>
  );
};

export default QuickLnks;
