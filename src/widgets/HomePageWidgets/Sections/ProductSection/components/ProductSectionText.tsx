export const ProductSectionText = () => {
  return (
    <div className="pb-6 flex flex-col laptop:w-[46%] desktop:w-[35%] desktop-xl:w-[45%]">
      <div className="flex flex-col space-y-2 pb-6">
        <span className="uppercase text-xs text-neutral-70 font-roboto font-medium laptop:text-lg desktop-xl:text-2xl">
          FUNKO FUSION FUNKO POP!
        </span>
        <h2 className="font-azeret text-xl text-neutral-20 font-bold uppercase laptop:text-xl desktop-xl:text-3xl">
          All of Your Favorite Funko Fusion Characters
        </h2>
      </div>
      <p className="pb-6 font-roboto text-neutral-20 laptop:text-lg desktop-xl:text-2xl">
        Discover our collection of Funko Pop! Collectibles featuring your
        favorite characters from movies, TV shows, and games. Shop for the
        latest exclusive releases and limited editions.
      </p>
      <div className="flex justify-center laptop:justify-end">
        <button className="font-roboto text-neutral-90 text-sm px-4 py-2 bg-secondary-80 border border-primary-10 rounded-md laptop:px-14 laptop:text-secondary-10 font-medium laptop:border-0 laptop:py-2.5">
          Buy Now
        </button>
      </div>
    </div>
  );
};
