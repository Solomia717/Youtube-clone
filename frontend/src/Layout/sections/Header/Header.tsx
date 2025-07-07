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
    <div className="w-full h-16 bg-[#282828] shadow-[0_2px_4px_0_rgba(0,0,0,0.3)] z-50 fixed top-0 left-0">
      <header className="w-full h-16 flex items-center justify-between px-2 sm:pl-4 sm:pr-6">
        {/* Left section with menu and logo */}
        <div className="flex items-center ml-[-3px] mt-[-2px]">
          {/* Menu button */}
          <div
            className="w-11 h-11 rounded-[22px] flex items-center justify-center mr-2 sm:mr-4 cursor-pointer hover:bg-[#ffffff1a] transition-colors"
            onClick={onMenuClick}
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <img
                alt="Menu"
                src="./menu-button.svg"
              />
            </div>
          </div>

          {/* Logo */}
          <Link to="/">
            <div className="h-6 w-25 cursor-pointer mt-[-4px]" >
              <img
                alt="Logo"
                src="./logo.svg"
              />
            </div>
          </Link>
        </div>

        {/* Search bar - responsive */}
        <div className="flex-1 max-w-[608px] ml-12 hidden sm:block">
          <div className="relative w-full h-[42px] rounded-[20px]">
            <div className="absolute left-[15px] top-2 z-10 w-6 h-6 flex items-center justify-center">
              <img src="./icon-search.svg" className="w-[19px] h-[19px]" />
            </div>
            <Input
              className="w-full h-10 bg-[#161616] rounded-[20px] pl-14 text-[15px] text-[#aaaaaa] font-roboto font-extralight border-none placeholder-white placeholder-opacity-100 placeholder:tracking-wider"
              placeholder="Search across your channel"
            />
          </div>
        </div>

        {/* Mobile search button */}
        <div className="sm:hidden">
          <div className="w-10 h-10 rounded-[20px] flex items-center justify-center cursor-pointer hover:bg-[#ffffff1a] transition-colors">
            <div className="w-6 h-6 flex items-center justify-center">
              <img src="./icon-search.svg" className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Right section with actions and profile */}
        <div className="flex items-center">
          {/* Help - hidden on mobile */}
          <div className="hidden sm:flex w-10 h-10 rounded-[20px] items-center justify-center mt-[-2px]">
            <div className="w-6 h-6 flex items-center justify-center">
              <img
                className="w-[21px] h-[21px]"
                alt="Help"
                src="./icon-help.svg"
              />
            </div>
          </div>

          {/* Create button - responsive */}
          <Button
            variant="outline"
            className="h-9 rounded-[18px] border-[#ffffff33] bg-transparent flex items-center hover:bg-white group pl-2 ml-2"
          >
            <div className="w-7 h-7 flex items-center justify-center">
              <svg viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '21px' }}>
                <path d="M12.8101 8.5H9.81006V11.5H7.81006V8.5H4.81006V6.5H7.81006V3.5H9.81006V6.5H12.8101V8.5ZM15.8101 1.5H1.81006V13.5H15.8101V7.11L19.8101 8.94V4.06L15.8101 5.89V1.5ZM16.8101 0.5V4.33L20.8101 2.5V10.5L16.8101 8.67V14.5H0.810059V0.5H16.8101Z" fill="white" />
              </svg>
            </div>
            <span className="hidden sm:inline text-white group-hover:text-black text-sm font-roboto ml-[-4px]">
              Create
            </span>
          </Button>

          {/* User avatar */}
          <Avatar className="w-8 h-8 rounded-2xl ml-4">
            <img
              src="./profile-avatar.jpg"
              alt="User profile"
              className="w-full h-full object-cover"
            />
          </Avatar>
        </div>
      </header >
    </div >
  );
};