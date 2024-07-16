import { Category } from './Category/Category'

export const Categories = () => {
  return (
    <div className="flex flex-col space-y-3 text-[#56565E]">
      <nav className="p-5 font-azeret">
        <ul className="flex flex-col space-y-10">
          <li>
            <Category name={'COLLECTIONS'} />
          </li>
          <li>
            <Category name={'ROBOTS'} />
          </li>
          <li>
            <Category name={'VEHICLES'} />
          </li>
          <li>
            <Category name={'WEAPON'} />
          </li>
          <li>
            <Category name={'CONSTRUCTIONS'} />
          </li>
          <li>
            <Category name={'PETS'} />
          </li>
        </ul>
      </nav>
    </div>
  );
};
