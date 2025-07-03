import { SearchIcon, Settings } from "lucide-react";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import { Avatar } from "../../../components/ui/avatar";
import { Link, useLocation } from "react-router-dom";

interface HeaderProps {
  onMenuClick?: () => void;
}

export const Header = ({ onMenuClick }: HeaderProps): JSX.Element => {
  const location = useLocation();
  const isAdminPage = location.pathname === "/admin";

  return (
    <div className="w-full h-16 bg-[#282828] shadow-[0_2px_4px_0_rgba(0,0,0,0.3)] z-20 fixed top-0 left-0">
      <header className="w-full h-16 flex items-center justify-between px-2 sm:px-4">
        {/* Left section with menu and logo */}
        <div className="flex items-center">
          {/* Menu button */}
          <div
            className="w-11 h-11 rounded-[22px] flex items-center justify-center mr-2 sm:mr-4 cursor-pointer hover:bg-[#ffffff1a] transition-colors"
            onClick={onMenuClick}
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <img
                className="w-[18px] h-[13px]"
                alt="Menu"
                src="./menu-button.svg"
              />
            </div>
          </div>

          {/* Logo */}
          <Link to="/">
            <div className="h-6 w-[97px] cursor-pointer" >
              <img
                className="w-[97px] h-6"
                alt="Logo"
                src="./logo.svg"
              />
            </div>
          </Link>
        </div>

        {/* Search bar - responsive */}
        <div className="flex-1 max-w-[605px] mx-4 hidden sm:block">
          <div className="relative w-full h-10 rounded-[20px]">
            <div className="absolute left-4 top-2 z-10">
              <SearchIcon className="h-6 w-6 text-[#aaaaaa]" />
            </div>
            <Input
              className="w-full h-10 bg-[#161616] rounded-[20px] pl-12 text-[15px] text-[#aaaaaa] font-roboto border-none placeholder-white placeholder-opacity-100"
              placeholder="Search across your channel"
            />
          </div>
        </div>

        {/* Mobile search button */}
        <div className="sm:hidden">
          <div className="w-10 h-10 rounded-[20px] flex items-center justify-center cursor-pointer hover:bg-[#ffffff1a] transition-colors">
            <SearchIcon className="h-6 w-6 text-[#aaaaaa]" />
          </div>
        </div>

        {/* Right section with actions and profile */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Help - hidden on mobile */}
          <div className="hidden sm:flex w-10 h-10 rounded-[20px] items-center justify-center">
            <div className="w-6 h-6 flex items-center justify-center">
              <img
                className="w-5 h-5"
                alt="Notifications"
                src="./icon-help.svg"
              />
            </div>
          </div>

          {/* Create button - responsive */}
          <Button
            variant="outline"
            className="h-9 rounded-[18px] border-[#ffffff33] bg-transparent flex items-center hover:bg-white group"
          >
            <div className="w-6 h-6 mr-0 sm:mr-1 flex items-center justify-center">
              <svg
                width="21"
                height="15"
                viewBox="0 0 21 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-3.5 text-white group-hover:text-black"
              >
                <path
                  d="M12.8101 8.5H9.81006V11.5H7.81006V8.5H4.81006V6.5H7.81006V3.5H9.81006V6.5H12.8101V8.5ZM15.8101 1.5H1.81006V13.5H15.8101V7.11L19.8101 8.94V4.06L15.8101 5.89V1.5ZM16.8101 0.5V4.33L20.8101 2.5V10.5L16.8101 8.67V14.5H0.810059V0.5H16.8101Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <span className="hidden sm:inline text-white group-hover:text-black text-sm font-roboto">
              Create
            </span>
          </Button>

          {/* User avatar */}
          <Avatar className="w-8 h-8 rounded-2xl">
            <img
              src="./profile-avatar.jpg"
              alt="User profile"
              className="w-full h-full object-cover"
            />
          </Avatar>
        </div>
      </header>
    </div>
  );
};