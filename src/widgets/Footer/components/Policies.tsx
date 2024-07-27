const Policies = () => {
  return (
    <div className="flex flex-col font-normal text-text-tertiary justify-center text-center">
      <div className="flex flex-col items-center laptop:flex-row laptop:justify-between">
        <p className="text-sm  text-center laptop:mt-0 laptop:text:start">
          Product specifications, prices, ship dates, and availability are
          subject to change without notice.
        </p>
        <div className="">
          <ul className="flex flex-row gap-0.5 laptop:gap-8 text-xs mt-4 laptop:text-sm laptop:mt-0">
            <a href="#" className="underline cursor-pointer">
              Privacy&nbsp;Policy
            </a>
            <p>I</p>
            <a href="#" className="underline cursor-pointer">
              Terms&nbsp;&&nbsp;Conditions
            </a>
            <p>I</p>
            <a href="#" className="underline cursor-pointer">
              Accessibility&nbsp;Statement
            </a>
          </ul>
        </div>
      </div>
      <p className="text-xs mt-12 laptop:text-start laptop:text-sm laptop:mt-2">
        2024 - All Rights Reserved
      </p>
    </div>
  );
};
export default Policies;
