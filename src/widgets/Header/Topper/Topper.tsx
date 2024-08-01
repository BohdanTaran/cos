import ContentLayout from '../../../shared/layouts/ContentLayout';
import { AdSlider } from './components/AdSlider/AdSlider';
import { SwitchCurrency } from './components/SwitchCurrency/SwitchCurrency';
import { SwitchLanguage } from './components/SwitchLanguage/SwitchLanguage';

export const Topper = () => {
  return (
    <div className="bg-secondary-10 text-white font-roboto phone:h-[40px] laptop:h-[68px] ">
      <ContentLayout>
        <div className="h-full relative flex justify-center items-center">
          <AdSlider />
          <div className="hidden laptop:flex laptop:h-full items-center absolute right-0 space-x-8 text-base">
            <SwitchLanguage isBurger={false} />
            <SwitchCurrency isBurger={false} />
          </div>
        </div>
      </ContentLayout>
    </div>
  );
};
