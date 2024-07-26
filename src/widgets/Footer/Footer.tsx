import Contacts from './components/Contacts';
import CustomerCare from './components/CustomerCare';
import FollowUs from './components/FollowUs';
import OrderProcessing from './components/OrderProcessing';
import Policies from './components/Policies';
import QuickLnks from './components/QuickLinks';
import { Subscribe } from './components/Subscribe';

export const Footer = () => {
  return (
    <div className="flex flex-col bg-secondary-10 px-5 pt-10 pb-4">
      <CustomerCare />
      <QuickLnks />
      <Contacts />
      <OrderProcessing />
      <hr className="w-full h-[1px] bg-neutral-20 mt-12" />
      <FollowUs />
      <hr className="w-full h-[1px] bg-neutral-20 mt-12" />
      <Subscribe />
      <Policies />
    </div>
  );
};
