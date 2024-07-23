import Icon from '../../../shared/components/Icon';

const Contacts = () => {
  return (
    <div className="flex flex-col justify-start text-xs">
      <div className="font-roboto text-xs font-normal text-text-tertiary">
        CONTACTS
      </div>
      <div className="flex flex-row items-center gap-1 mt-3 text-text-secondary">
        <Icon styles="icon-phone color-secondary w-16" />
        (219) 555-0114
      </div>
      <div className="flex flex-row items-center gap-1 mt-2 text-text-secondary">
        {
          <svg className="fill-text-secondary w-[16px]">
            <use href={`${svgSprite}#icon-email`} />
          </svg>
        }
        info@gmail.com
      </div>
    </div>
  );
};
export default Contacts;
