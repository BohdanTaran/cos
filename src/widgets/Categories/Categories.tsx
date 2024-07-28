const Categories = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-11/12">
        <div className="text-center flex flex-row flex-wrap gap-x-2 justify-center laptop:gap-6">
          {/* <img src="" alt="" />  will be used instead div with background*/}
          <div className="flex flex-col"> // u can use selectors to specify children's styles and not duplicate it in every child
            <div className="w-[164px] h-[160px] bg-[#D9D9D9] laptop:w-[196px] laptop:h-[160px]"></div>
            <span className="py-3">All collections</span>
          </div>

          <div className="flex flex-col">
            <div className="w-[164px] h-[160px] bg-[#D9D9D9] laptop:w-[196px] laptop:h-[160px]"></div>
            <span className="py-3">Robots</span>
          </div>

          <div className="flex flex-col">
            <div className="w-[164px] h-[160px] bg-[#D9D9D9] laptop:w-[196px] laptop:h-[160px]"></div>
            <span className="py-3">Vehicles</span>
          </div>

          <div className="flex flex-col">
            <div className="w-[164px] h-[160px] bg-[#D9D9D9] laptop:w-[196px] laptop:h-[160px]"></div>
            <span className="py-3">Weapon</span>
          </div>

          <div className="flex flex-col">
            <div className="w-[164px] h-[160px] bg-[#D9D9D9] laptop:w-[196px] laptop:h-[160px]"></div>
            <span className="py-3">Pets</span>
          </div>

          <div className="flex flex-col">
            <div className="w-[164px] h-[160px] bg-[#D9D9D9] laptop:w-[196px] laptop:h-[160px]"></div>
            <span className="py-3">Constructors</span>
          </div>

        </div>
      </div>
    </div>
  );
};
export default Categories;
