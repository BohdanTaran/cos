import Icon from '../../../../../shared/components/Icon';

export const Categories = () => {
  return (
    <div className="flex flex-col space-y-3 text-neutral-70">
      <nav className="p-5 font-azeret">
        <ul className="flex flex-col space-y-10">
          <a href="#" className="flex justify-between items-center">
            COLLECTIONS
            <Icon
              icon="arrow-right"
              color="fill-neutral-50"
              styles="w-[20px] h-[14px]"
            />
          </a>
          <a href="#" className="flex justify-between items-center">
            ROBOTS
            <Icon
              icon="arrow-right"
              color="fill-neutral-50"
              styles="w-[20px] h-[14px]"
            />
          </a>
          <a href="#" className="flex justify-between items-center">
            VEHICLES
            <Icon
              icon="arrow-right"
              color="fill-neutral-50"
              styles="w-[20px] h-[14px]"
            />
          </a>
          <a href="#" className="flex justify-between items-center">
            WEAPON
            <Icon
              icon="arrow-right"
              color="fill-neutral-50"
              styles="w-[20px] h-[14px]"
            />
          </a>
          <a href="#" className="flex justify-between items-center">
            COLLECTIONS
            <Icon
              icon="arrow-right"
              color="fill-neutral-50"
              styles="w-[20px] h-[14px]"
            />
          </a>
          <a href="#" className="flex justify-between items-center">
            PETS
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
