import svgSprite from '../../shared/Icons/icons.svg';

const QuickLnks = () => {
  return (
    <div className="flex flex-row justify-between items-center text-lg font-medium">
      <div className="flex font-azeret">QUICK LINKS</div>
      <>
        {
          <svg className="fill-neutral-50 w-[20px]">
            <use href={`${svgSprite}#icon-downOutlined`} />
          </svg>
        }
      </>
    </div>
  );
};

export default QuickLnks;
