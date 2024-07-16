import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

interface Props {
  styles?: string;
}

export const Search = ({ styles }: Props) => {
  return (
    <div className={styles}>
      <MagnifyingGlassIcon className="size-6 absolute left-0 ml-2 text-gray-300" />
      <input
        className="h-[40px] w-full text-sm border border-solid rounded-lg pl-10 outline-none"
        type="text"
        placeholder="Search..."
      />
    </div>
  );
};
