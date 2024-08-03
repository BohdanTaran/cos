import React, { useState } from 'react';
import Icon from '../../../shared/components/Icon';

interface FooterProps {
  text: string;
  SomeList: React.ReactNode;
}
const FooterComponent: React.FC<FooterProps> = ({ text, SomeList }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex flex-col mb-6">
      <div className="flex flex-row justify-between items-center  ">
        <h2 className="font-azeret text-lg font-medium text-neutral-50 text-lg font-medium uppercase">
          {text}
        </h2>
        <div className="" onClick={handleClick}>
          {isOpen ? (
            <Icon
              icon="upOutlined"
              color="fill-neutral-50"
              size={'w-[20px] h-[14px]'}
            />
          ) : (
            <Icon
              icon="downOutlined"
              color="fill-neutral-50"
              size={'w-[20px] h-[14px]'}
            />
          )}
        </div>
      </div>
      <div
        className={`overflow-hidden transition-height duration-300 ${
          isOpen ? 'h-auto mb-6' : 'h-0'
        }`}
      >
        {SomeList}
      </div>
    </div>
  );
};
export default FooterComponent;
