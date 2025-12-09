import { NavLink } from "react-router-dom";
import {
  DashboardIcon,
  LogoutIcon,
  ProfileIcon,
  SettingsIcon,
} from "../../assets";
import type { JSX } from "react";

interface NavigationLinksType {
  name: string;
  path: string;
  icon: JSX.Element;
}

const navigationLinks: NavigationLinksType[] = [
  { name: "Dashboard", path: "/dashboard", icon: <DashboardIcon size={22} /> },
  { name: "Profile", path: "/profile", icon: <ProfileIcon size={22} /> },
  { name: "Settings", path: "/settings", icon: <SettingsIcon size={22} /> },
];

const Sidebar = () => {
  return (
    <aside className="bg-sidebar w-2xs h-[calc(100vh-var(--header-height))] flex flex-col justify-between p-4">
      <div className="flex flex-col gap-2">
        {navigationLinks.map(({ name, path, icon }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `px-3 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2
              ${
                isActive
                  ? "bg-[image:var(--active-gradient)] text-lg hover:shadow-md font-semibold!"
                  : "text-black hover:bg-gray-300"
              }`
            }
          >
            {icon} {name}
          </NavLink>
        ))}
      </div>
      <NavLink
        to={"/"}
        className={`px-3 py-2 font-medium flex gap-2 items-center hover:text-white hover:bg-red-500 hover:rounded-lg hover:shadow-md transition-all duration-300` }
      >
        <LogoutIcon size={22} /> Logout
      </NavLink>
    </aside>
  );
};

export default Sidebar;
