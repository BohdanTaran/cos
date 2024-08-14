import Contacts from './Contacts';
import CustomerCareList from './CustomerCareList';
import FollowUs from './FollowUs';
import OrderProcessing from './OrderProcessing';
import Policies from './Policies';
import QuickLinksList from './QuickLinksList';
import Subscribe from './Subscribe';

export const LaptopFooter = () => {
  return (
    <div className="pt-20 pb-8">
      <div className="flex flex-row justify-between justify-items-start">
        <div className=" flex flex-col">
          <h3 className="text-lg text-azaret font-medium mb-10 uppercase">
            Logo
          </h3>
          <Contacts />
          <OrderProcessing />
        </div>
        <div className="flex flex-col">
          <h2 className="font-azeret text-lg font-medium text-neutral-50 text-lg font-medium uppercase">
            Customer Care
          </h2>
          <CustomerCareList />
        </div>
        <div className="flex flex-col">
          <h2 className="font-azeret text-lg font-medium text-neutral-50 text-lg font-medium uppercase">
            Quick Links
          </h2>
          <QuickLinksList />
        </div>
        <div className="flex flex-col items-start">
          <FollowUs />
          <Subscribe />
        </div>
      </div>
      <div className="mt-15">
        <Policies />
      </div>
    </div>
  );
};
