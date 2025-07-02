import { SearchIcon } from "lucide-react";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import { Avatar } from "../../../components/ui/avatar";

export const Header = (): JSX.Element => {
  return (
    <div className="w-full h-16 bg-[#282828] shadow-[0_2px_4px_0_rgba(0,0,0,0.3)] z-20 fixed top-0 left-0">
      <header className="w-full h-16 flex items-center justify-between px-4">
        {/* Left section with menu and logo */}
        <div className="flex items-center">
          {/* Menu button */}
          <div className="w-11 h-11 rounded-[22px] flex items-center justify-center mr-4">
            <div className="w-6 h-6 flex items-center justify-center cursor-pointer">
              <img
                className="w-[18px] h-[13px]"
                alt="Menu"
                src="./menu-button.svg"
              />
            </div>
          </div>

          {/* Logo */}
          <div className="h-6 w-[97px] bg-[url(./logo.svg)] bg-[100%_100%]" />
        </div>

        {/* SearchIcon bar */}
        <div className="w-[605px] h-10">
          <div className="relative w-full h-10 rounded-[20px]">
            <div className="absolute left-4 top-2 z-10">
              <SearchIcon className="h-6 w-6 text-[#aaaaaa]" />
            </div>
            <Input
              className="w-full h-10 bg-[#161616] rounded-[20px] pl-12 text-[15px] text-[#aaaaaa] font-['Roboto',Helvetica] border-none"
              placeholder="SearchIcon across your channel"
            />
          </div>
        </div>

        {/* Right section with actions and profile */}
        <div className="flex items-center space-x-4">
          {/* Help */}
          <div className="w-10 h-10 rounded-[20px] flex items-center justify-center">
            <div className="w-6 h-6 flex items-center justify-center">
              <img
                className="w-5 h-5"
                alt="Notifications"
                src="./icon-help.svg"
              />
            </div>
          </div>

          {/* Create button */}
          <Button
            variant="outline"
            className="h-9 rounded-[18px] border-[#ffffff33] bg-transparent flex items-center hover:bg-white group"
          >
            <div className="w-6 h-6 mr-1 flex items-center justify-center">
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
            <span className="text-white group-hover:text-black text-sm font-medium font-['Roboto',Helvetica]">
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
