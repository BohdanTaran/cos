import { useState } from 'react';
import { IProductData } from '../../pages/ProductPage/model/types';
import ProductInformationTabs from './components/ProductInformationTabs';

const ProductInformation = ({ product }: IProductData) => {
  const [openedTopic, setOpenedTopic] = useState('Description');

  return (
    <div className="w-full h-full py-10 font-roboto text-neutral-90">
      <div className="flex flex-col">
        <div className="w-full flex justify-center">
          <ProductInformationTabs
            openedTopic={openedTopic}
            setOpenedTopic={setOpenedTopic}
            reviews={product.reviews}
          />
        </div>
        <div className="w-full flex justify-center whitespace-pre-wrap laptop:text-[22px]">
          <div className="desktop:w-[1076px]">
            {
              openedTopic === 'Description' ? product.longDescription : '' // TODO: Set additional information component instead ''
            }
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductInformation;
