import ContentLayout from '../../shared/layouts/ContentLayout';
import Category from './Category'

const Categories = () => {
  return (
    <ContentLayout>
      <div className="text-center uppercase flex flex-row flex-wrap gap-x-2 justify-center laptop:gap-6">
        {/* <img src="" alt="" />  will be used instead div with background*/}
        <Category name='All collections' />
        <Category name='robots' />
        <Category name='vehicles' />
        <Category name='weapon' />
        <Category name='pets' />
        <Category name='constructors' />
      </div>
    </ContentLayout>
  );
};
export default Categories;
