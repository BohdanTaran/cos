import svgSprite from '../../../shared/Icons/icons.svg';

const CustomerCare = () => {
  return (
    <div className="flex flex-row justify-between items-center text-lg font-medium">
      <div className="font-azeret text-lg font-medium">CUSTOMER CARE</div>
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
export default CustomerCare;
