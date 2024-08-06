import AccordionItem from './AccordionItem';
import Contacts from './Contacts';
import CustomerCareList from './CustomerCareList';
import FollowUs from './FollowUs';
import OrderProcessing from './OrderProcessing';
import Policies from './Policies';
import QuickLinksList from './QuickLinksList';
import Subscribe from './Subscribe';

export const MobileFooter = () => {
  return (
    <div className="pt-10 pb-4">
      <div className="flex flex-col">
        <AccordionItem text="Customer care" SomeList={<CustomerCareList />} />
        <AccordionItem text="Quick links" SomeList={<QuickLinksList />} />
        <Contacts />
        <OrderProcessing />
        <hr className="w-full h-[1px] bg-neutral-20 mt-12" />
        <FollowUs />
        <hr className="w-full h-[1px] bg-neutral-20 mt-12" />
        <Subscribe />
        <Policies />
      </div>
    </div>
  );
};
