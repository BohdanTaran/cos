import { AdSlider } from './components/AdSlider/AdSlider'
import { SwitchCurrency } from './components/SwitchCurrency/SwitchCurrency'
import { SwitchLanguage } from './components/SwitchLanguage/SwitchLanguage'

export const Topper = () => {
  return (
    <div className="bg-header-topper bg-[left_bottom_40rem] text-white font-roboto phone:h-[48px] laptop:h-[101px] ">
      <div className="h-full flex justify-center items-center">
        <div className="relative flex justify-center w-11/12">
          <AdSlider />
          <div className='hidden laptop:flex absolute right-0 space-x-8 text-base'>
            <SwitchLanguage isBurger={false} />
            <SwitchCurrency isBurger={false} />
          </div>
        </div>
      </div>
    </div>
  );
};
