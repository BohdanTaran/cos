import Icon from '../../../shared/components/Icon';

const Contacts = () => {
  return (
    <div className="flex flex-col justify-start text-xs">
      <div className="font-roboto text-xs font-normal text-text-tertiary">
        CONTACTS
      </div>
      <div className="flex flex-row items-center gap-1 mt-3 text-text-secondary">
        <Icon icon="phone" color="secondary" size={16} />
        (219) 555-0114
      </div>
      <div className="flex flex-row items-center gap-1 mt-2 text-text-secondary">
        <Icon icon="email" color="secondary" size={16} />
        info@gmail.com
      </div>
    </div>
  );
};
export default Contacts;
