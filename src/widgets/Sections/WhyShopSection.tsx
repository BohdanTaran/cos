import Icon from '../../shared/components/Icon';

const WhyShopSection = () => {
  return (
    <div className="flex justify-center py-10">
      <div className="w-11/12 text-center">
        <div className="flex flex-col items-center gap-6">
          <span className="text-xl font-bold font-azeret text-neutral-90">
            WHY SHOP AT (SHOP NAME)?
          </span>
          <p className="font-roboto tablet:w-9/12 desktop:w-7/12 desktop-xl:w-1/2">
            Lorem ipsum dolor sit amet consectetur. Dignissim sem aliquet felis
            arcu accumsan nec erat. Cras dignissim sit risus vulputate auctor
            commodo quam vitae proin. Nulla nibh eget cras .
          </p>
        </div>
        <div className="w-full flex justify-center">
          <div className="w-full flex flex-col gap-14 pt-16 font-medium text-lg font-roboto tablet:flex-row justify-between desktop:w-9/12">
            <div className="flex flex-col gap-8">
              <div className="flex justify-center">
                <Icon
                  icon="gift"
                  size={'w-[47px] h-[47px]'}
                  color="fill-secondary-80"
                  outlineColor="stroke-secondary-80"
                  outlineWidth={0.5}
                />
              </div>
              <span>FREE GIFT WRAPPING</span>
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex justify-center">
                <Icon
                  icon="robot"
                  size={'w-[47px] h-[47px]'}
                  color="fill-transparent"
                  outlineColor="stroke-secondary-80"
                  outlineWidth={2}
                />
              </div>
              <span>EXCLUSIVE LIMITED EDITIONS</span>
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex justify-center">
                <Icon
                  icon="pocket-secure"
                  size={'w-[47px] h-[47px]'}
                  color="fill-transparent"
                  outlineColor="stroke-secondary-80"
                  outlineWidth={1.5}
                />
              </div>
              <span>ONLY SECURE PAYMENTS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WhyShopSection;
