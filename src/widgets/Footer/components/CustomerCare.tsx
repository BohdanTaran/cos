import Icon from '../../../shared/components/Icon';

const CustomerCare = () => {
  return (
    <div className="flex flex-row justify-between items-center text-lg font-medium">
      <p className="font-azeret text-lg font-medium">CUSTOMER CARE</p>
      <Icon icon="downOutlined" color="neutral-50" size={20} />
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
export default CustomerCare;
