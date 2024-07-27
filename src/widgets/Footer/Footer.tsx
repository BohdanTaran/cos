import React from 'react';

import Contacts from './components/Contacts';
import CustomerCareList from './components/CustomerCareList';
import FollowUs from './components/FollowUs';
import OrderProcessing from './components/OrderProcessing';
import Policies from './components/Policies';

import { Subscribe } from './components/Subscribe';

import FooterComponent from './components/FooterComponent';
import QuickLinksList from './components/QuickLinksList';

export const Footer = () => {
  return (
    <div className="flex flex-col bg-secondary-10 px-5 pt-10 pb-4">
      <h3 className="text-lg text-azaret font-medium mb-10 phone:hidden tablet:block">
        LOGO
      </h3>

      <FooterComponent text="CUSTOMER CARE" SomeList={<CustomerCareList />} />
      <FooterComponent text="QUICK LINKS" SomeList={<QuickLinksList />} />

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
