import Icon from '../../../../../shared/components/Icon';

interface Props {
  isBurger: boolean; // use isMobile instead (from context)
}

export const SwitchCurrency = ({ isBurger }: Props) => {
  return (
    <>
     // same as fixes as in SwitchLanguage appliable here
      {!isBurger && (
        <button className="flex items-center text-neutral-90">
          USD
          <Icon
            icon="arrow-down"
            size={'laptop:w-[14px] laptop:h-[14px]'}
            color="fill-neutral-90"
            styles="mt-1 ml-1"
          />
        </button>
      )}

      {isBurger && (
        <a href="#" className="flex justify-between items-center">
          Change currency
          <Icon
            icon="arrow-right"
            color="fill-neutral-50"
            styles="w-[20px] h-[14px]"
          />
        </a>
      )}
    </>
  );
};
