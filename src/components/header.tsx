import LOGO from "/LOGO.png";

const Header = () => {
  return (
    <header className="bg-secondry flex items-center justify-between py-1 px-2 border-b border-primary z-50 sm:px-4 md:px-10 lg:px-14 absolute w-full">
      <div className="p-2">
        <a href="/">
          <img src={LOGO} className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 " />
        </a>
      </div>
      <nav className="lg:w-[40%]">
        <ul className="list-none flex items-center justify-evenly gap-3 capitalize text-sm font-semibold text-primary bg-shadow rounded-lg p-2 sm:text-base sm:gap-4 md:gap-6 md:px-4 lg:text-lg">
          <li>
            <a href="#about-section" className="hover:underline hover:underline-offset-2 active:scale-95 active:font-bold">about</a>
          </li>
          <li>
            <a href="#portfolio-section" className="hover:underline hover:underline-offset-2 active:scale-95 active:font-bold">projects</a>
          </li>
          <li>
            <a href="#contact-section" className="hover:underline hover:underline-offset-2 active:scale-95 active:font-bold">contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
