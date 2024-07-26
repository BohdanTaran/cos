const Policies = () => {
  return (
    <div className="mt-13">
      <p className="text-sm text-center font-normal text-text-tertiary items-center mt-12">
        Product specifications, prices, ship dates, and <br />
        availability are subject to change without notice.
      </p>
      <ul className="text-xs text-center font-normal text-text-tertiary items-center mt-4">
        <a href="#" className="underline cursor-pointer">
          Privacy Policy{' '}
        </a>{' '}
        I{' '}
        <a href="#" className="underline cursor-pointer">
          Terms & Conditions
        </a>{' '}
        I{' '}
        <a href="#" className="underline cursor-pointer">
          Accessibility Statement
        </a>
      </ul>
      <p className="text-xs text-center font-normal text-text-tertiary items-center mt-12">
        2024 - All Rights Reserved
      </p>
    </div>
  );
};
export default Policies;
