import { ArrowIcon } from '../../../../../shared/Icons/ArrowIcon';
import { DropdownArrowIcon } from '../../../../../shared/Icons/DropdownArrowIcon';

interface Props {
  isBurger: boolean;
}

export const SwitchCurrency = ({ isBurger }: Props) => {
  return (
    <>
      {!isBurger && (
        <button className="flex items-center">
          USD
          <DropdownArrowIcon styles={'mt-1 ml-2'} />
        </button>
      )}

      {isBurger && (
        <a href="#" className="flex justify-between items-center">
          Change currency
          <ArrowIcon color={'#56565E'} styles={'w-6'} isRight={true} />
        </a>
      )}
    </>
  );
};
