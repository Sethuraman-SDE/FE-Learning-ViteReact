import { AppLogo, ProfileIcon } from "../../assets";

const Header = () => {
  return (
    <header className="bg-header py-3 px-5 w-full flex items-center justify-between h-(--header-height)">
      <img src={AppLogo} alt="app-logo" className="w-50" />
      <div className="flex items-center justify-center">
        <h3 className="text-lg text-white">Welcome to My Learning App !</h3>
        <ProfileIcon className="w-12 h-7 text-white" />
      </div>
    </header>
  );
};

export default Header;
