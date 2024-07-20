import svgSprite from '../../shared/Icons/icons.svg';

export const Footer = () => {
  return (
    <div className="flex justify-center items-center bg-primary-10 ">
      Footer
      {
        <>
          <svg className="fill-primary-70 w-[25px]">
            <use href={`${svgSprite}#icon-rocket`} />
          </svg>
          <input
            className="h-[40px] w-[200px] w-full text-sm border border-solid rounded-lg pl-10 outline-none"
            type="text"
            placeholder="Your Email"
          />
        </>
      }
    </div>
  );
};
