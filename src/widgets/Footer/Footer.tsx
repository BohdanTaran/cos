import svgSprite from '../../shared/Icons/icons.svg';
import Contacts from './components/Contacts';
import CustomerCare from './components/CustomerCare';
import OrderProcessing from './components/OrderProcessing';
import QuickLnks from './components/QuickLinks';
import { Subscribe } from './components/Subscribe';

export const Footer = () => {
  return (
    <div className="bg-white w-[375px] flex-col  ">
      <Subscribe       <svg className="fill-primary-70 w-[25px]">
        <use href={`${svgSprite}#icon-rocket`} />
      </svg>/>
      <div className="bg-secondary-10 px-5 pt-10 pb-4">
        <CustomerCare />
        <QuickLnks />
        <Contacts />
        <OrderProcessing />

        <div className="mt-13">
          <div className="w-[335px] h-[1px] bg-text-secondary mt-13"></div>
          <div className="text-xs text-center font-normal text-text-tertiary justify-center items-center mt-12">
            Product specifications, prices, ship dates, and <br />
            availability are subject to change without notice.
          </div>
          <div className="text-xs text-center font-normal text-text-tertiary justify-center items-center mt-4">
            Privacy Policy | Terms & Conditions | Accessibility Statement
          </div>
          <div className="text-xs text-center font-normal text-text-tertiary justify-center items-center mt-12">
            2024 - All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
};
