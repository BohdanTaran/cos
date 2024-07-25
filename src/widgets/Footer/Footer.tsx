import Contacts from './components/Contacts';
import CustomerCare from './components/CustomerCare';
import FollowUs from './components/FollowUs';
import OrderProcessing from './components/OrderProcessing';
import QuickLnks from './components/QuickLinks';
import { Subscribe } from './components/Subscribe';

export const Footer = () => {
  return (
    <div className="flex flex-col bg-secondary-10 px-5 pt-10 pb-4 w-[375px]">
      <CustomerCare />
      <QuickLnks />
      <Contacts />
      <OrderProcessing />
      <div className="w-full h-[1px] bg-neutral-20 mt-12"></div>
      <FollowUs />
      <div className="w-full h-[1px] bg-neutral-20 mt-12"></div>
      <Subscribe />
      <div className="mt-13">
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
  );
};
