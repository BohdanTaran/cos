import { ArrowIcon } from '../../../../../../shared/Icons/ArrowIcon'

interface Props {
  name: string;
}

export const Category = ({ name }: Props) => {
  return (
    <a href="#" className="flex justify-between items-center">
      {name}
      <ArrowIcon color={'#56565E'} styles={'w-6'} isRight={true} />
    </a>
  );
};