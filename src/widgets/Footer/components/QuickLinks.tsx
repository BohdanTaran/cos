import Icon from '../../../shared/components/Icon';

const QuickLnks = () => {
  return (
    <div className="flex flex-row justify-between items-center text-lg font-medium">
      <p className="flex font-azeret text-lg font-medium">QUICK LINKS</p>
      <Icon icon="downOutlined" color="fffff" size={20} />
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
