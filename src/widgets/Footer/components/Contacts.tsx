import Icon from '../../../shared/components/Icon';

const Contacts = () => {
  return (
    <div className="flex flex-col justify-start">
      <div className="font-roboto text-xs font-medium text-text-tertiary"> // Don't write labels in uppercase. Set uppercase in styles
                CONTACTS
      </div>
      <div className="flex flex-row items-center gap-1 mt-3 font-normal text-base text-text-secondary">
        <Icon icon="phone" color="secondary" size={'w-[16px]'} />
        (219) 555-0114
      </div>
      <div className="flex flex-row items-center gap-1 mt-2 font-normal text-base text-text-secondary">
        <Icon icon="email" color="secondary" size={'w-[16px]'} />
        info@gmail.com
      </div>
    </div>
  );
};
export default Contacts;
