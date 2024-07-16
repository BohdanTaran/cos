export const Navigation = () => {
  return (
    <div className="laptop:flex space-x-12 desktop:space-x-36 desktop-xl:space-x-44">
      <h3 className="text-2xl">Logo</h3>
      <nav className="hidden laptop:block text-xl mt-1">
        <ul className="flex space-x-8">
          <li>
            <a href="#">ABOUT US</a>
          </li>
          <li>
            <a href="#">STORE</a>
          </li>
          <li>
            <a href="#">SUPPORT</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
