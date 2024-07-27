import Contacts from './components/Contacts';
import CustomerCareList from './components/CustomerCareList';
import FollowUs from './components/FollowUs';
import OrderProcessing from './components/OrderProcessing';
import Policies from './components/Policies';
import Subscribe from './components/Subscribe';
import FooterComponent from './components/FooterComponent';
import QuickLinksList from './components/QuickLinksList';
import useIsDevice from '../../contexts/MediaQueryContext';

export const Footer = () => {
  const isLaptop = useIsDevice({
    query: `(max-width: 1024px)`,
  });
  return (
    <div className="flex flex-col bg-secondary-10">
      <div className={`pt-10 px-5 pb-4 ${!isLaptop ? 'pt-20 px-18 pb-8' : ''}`}>
        {isLaptop ? (
          <div className="flex flex-col">
            <FooterComponent
              text="CUSTOMER CARE"
              SomeList={<CustomerCareList />}
            />
            <FooterComponent text="QUICK LINKS" SomeList={<QuickLinksList />} />

            <Contacts />
            <OrderProcessing />
            <hr className="w-full h-[1px] bg-neutral-20 mt-12" />
            <FollowUs />
            <hr className="w-full h-[1px] bg-neutral-20 mt-12" />
            <Subscribe />
            <Policies />
          </div>
        ) : (
          <div className="flex flex-col">
            <div className="flex flex-row justify-between justify-items-start">
              <div className=" flex flex-col">
                <h3 className="text-lg text-azaret font-medium mb-10">LOGO</h3>
                <Contacts />
                <OrderProcessing />
              </div>
              <div className="flex flex-col">
                <h2 className="font-azeret text-lg font-medium text-neutral-50 text-lg font-medium">
                  CUSTOMER CARE
                </h2>
                <CustomerCareList />
              </div>
              <div className="flex flex-col">
                <h2 className="font-azeret text-lg font-medium text-neutral-50 text-lg font-medium">
                  QUICK LINKS
                </h2>
                <QuickLinksList />
              </div>
              <div className="flex flex-col items-start">
                <FollowUs />
                <Subscribe />
              </div>
            </div>
            <div className="mt-12 laptop:mt-15">
              <Policies />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
