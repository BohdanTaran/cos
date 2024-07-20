import svgSprite from '../../shared/Icons/icons.svg';

export const Footer = () => {
  return (
    <div className=" flex-col justify-center items-center bg-primary-10 w-[375px] px-5 pt-10 pb-4">
      Footer
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
      <div className="text-3">2024 - All Rights Reserved</div>
    </div>
  );
};
