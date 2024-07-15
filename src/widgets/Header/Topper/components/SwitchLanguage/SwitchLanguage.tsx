import { ArrowIcon } from '../../../../../shared/Icons/ArrowIcon'
import { DropdownArrowIcon } from '../../../../../shared/Icons/DropdownArrowIcon'

interface Props {
  isBurger: boolean;
}

export const SwitchLanguage = ({ isBurger }: Props) => {
  return (
    <>
      {!isBurger && (
        <button className="flex items-center">
          Eng
          <DropdownArrowIcon styles={'mt-1 ml-2'} />
        </button>
      )}

      {isBurger && (
        <a href="#" className="flex justify-between items-center">
          Change language
          <ArrowIcon color={'#56565E'} styles={'w-6'} isRight={true} />
        </a>
      )}
    </>
  );
};
