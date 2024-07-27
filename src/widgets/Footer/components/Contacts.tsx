import Icon from '../../../shared/components/Icon';

const Contacts = () => {
  return (
    <div className="flex flex-col">
      <div className="font-roboto text-xs font-medium text-text-tertiary mt-8">
        CONTACTS
      </div>
      <div className="flex flex-row items-center gap-1 mt-3 font-normal text-base text-neutral-50">
        <Icon icon="phone" color="fill-neutral-50" size={'w-[16px] h-[16px]'} />
        (219) 555-0114
      </div>
      <div className="flex flex-row items-center gap-1 mt-2 font-normal text-base text-neutral-50">
        <Icon icon="email" color="fill-neutral-50" size={'w-[16px] h-[16px]'} />
        info@gmail.com
      </div>
    </div>
  );
};
export default Contacts;
