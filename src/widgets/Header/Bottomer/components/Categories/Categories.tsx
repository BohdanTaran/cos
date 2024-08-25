import Icon from '../../../../../shared/components/Icon';

export const Categories = () => {
  return (
    <div className="flex flex-col space-y-3 pt-[42px] pb-[58px] text-neutral-70 text-[17px] uppercase">
      <nav className="px-5 font-azeret">
        <ul className="flex flex-col space-y-11">
          <a href="#" className="flex justify-between items-center">
            Prouct type
            <Icon
              icon="arrow-right"
              color="fill-neutral-50"
              styles="w-[20px] h-[14px]"
            />
          </a>
          <a href="#" className="flex justify-between items-center">
            GENRES
            <Icon
              icon="arrow-right"
              color="fill-neutral-50"
              styles="w-[20px] h-[14px]"
            />
          </a>
          <a href="#" className="flex justify-between items-center">
            BRANDS
            <Icon
              icon="arrow-right"
              color="fill-neutral-50"
              styles="w-[20px] h-[14px]"
            />
          </a>
          <a href="#" className="flex justify-between items-center">
            GIFT IDEAS
            <Icon
              icon="arrow-right"
              color="fill-neutral-50"
              styles="w-[20px] h-[14px]"
            />
          </a>
        </ul>
      </nav>
    </div>
  );
};
