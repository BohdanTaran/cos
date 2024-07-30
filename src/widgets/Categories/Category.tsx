interface Props {
  name: string;
}

const Category = ({ name }: Props) => {
  return (
    <div className="flex flex-col">
      <div className="w-[164px] h-[160px] bg-[#D9D9D9] laptop:w-[196px] laptop:h-[160px]"></div>
      <span className="py-3">{name}</span>
    </div>
  );
};
export default Category;
