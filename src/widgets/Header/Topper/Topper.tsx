import { AdSlider } from './components/AdSlider/AdSlider'
import { SwitchCurrency } from './components/SwitchCurrency/SwitchCurrency'
import { SwitchLanguage } from './components/SwitchLanguage/SwitchLanguage'

export const Topper = () => {
  return (
    <div className="bg-secondary-10 text-white font-roboto phone:h-[40px] laptop:h-[68px] ">
      <div className="h-full flex justify-center items-center">
        <div className="relative flex justify-center w-11/12">
          <AdSlider />
          <div className='hidden laptop:flex laptop:h-full items-center absolute right-0 space-x-8 text-base'>
            <SwitchLanguage isBurger={false} /> // use isMobile instead (from context)
            <SwitchCurrency isBurger={false} /> // use isMobile instead (from context)
          </div>
        </div>
      </div>
    </div>
  );
};
