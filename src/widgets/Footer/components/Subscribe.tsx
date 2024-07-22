import svgSprite from '../../../shared/';

export const Subscribe = () => {
  return (
    <div className="text-text-secondary text-center px-5 pt-10 pb-4">
      <div className="font-azeret text-lg font-medium color-text-secondary text-center">
        SUBSCRIBE TO OUR NEWSLETTER
      </div>

      <input
        className="h-[40px] w-[200px] w-full text-sm border border-solid rounded-lg pl-10 outline-none"
        type="text"
        placeholder="Your Email"
      />
    </div>
  );
};
