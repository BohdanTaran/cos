import svgSprite from '../../shared/Icons/icons.svg';
import CustomerCare from './CustomerCare';
import QuickLnks from './QuickLinks';
import { Subscribe } from './Subscribe';

export const Footer = () => {
  return (
    <div className="bg-white w-[375px] flex-col justify-center items-center ">
      <Subscribe />
      <div className="bg-secondary-10 px-5 pt-10 pb-4">
        <CustomerCare />
        <QuickLnks />

        <div className="">
          <div className="w-[335px] h-[1px] bg-[#9898A0] mt-13"></div>
          <div className="text-xs text-center font-normal text-[#9898A0] justify-center items-center mt-12">
            Product specifications, prices, ship dates, and <br />
            availability are subject to change without notice.
          </div>
          <div className="text-xs text-center font-normal text-[#9898A0] justify-center items-center mt-4">
            Privacy Policy | Terms & Conditions | Accessibility Statement
          </div>
          <div className="text-xs text-center font-normal text-[#9898A0] justify-center items-center mt-12">
            2024 - All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
};
