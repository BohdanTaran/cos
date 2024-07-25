import Icon from '../../../../../shared/components/Icon';

interface Props {
  isBurger: boolean;
}

export const SwitchLanguage = ({ isBurger }: Props) => {
  return (
    <>
      {!isBurger && (
        <button className="flex items-center text-neutral-90">
          Eng
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
          Change language
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
