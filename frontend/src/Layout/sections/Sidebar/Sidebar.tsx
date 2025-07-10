import { useState } from "react";
import { ScrollArea } from "../../../components/ui/scroll-area";
import { Separator } from "../../../components/ui/separator";

interface SidebarProps {
  isOpen: boolean;
  onClose?: () => void;
}

export const Sidebar = ({ isOpen, onClose }: SidebarProps): JSX.Element => {
  // Menu items data for the main navigation
  const menuItems = [
    { name: "Dashboard", icon: "./sidebar/dashboard.svg" },
    { name: "Content", icon: "./sidebar/content.svg" },
    { name: "Analytics", icon: "./sidebar/analytics.svg" },
    { name: "Community", icon: "./sidebar/community.svg" },
    { name: "Subtitles", icon: "./sidebar/subtitles.svg" },
    { name: "Copyright", icon: "./sidebar/copyright.svg" },
    { name: "Earn", icon: "./sidebar/earn.svg" },
    { name: "Customization", icon: "./sidebar/customization.svg" },
    { name: "Audio library", icon: "./sidebar/audiolibrary.svg" },
  ];

  // Footer menu items
  const footerItems = [
    {
      name: "Settings",
      icon: "./sidebar/setting.svg",
    },
    {
      name: "Send feedback",
      icon: "./sidebar/feedback.svg",
    },
  ];

  const [selectedMenu, setSelectedMenu] = useState(2);

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`
        w-64 h-[calc(100vh-64px)] bg-[#282828] border-r border-[#ffffff1a]
        fixed top-16 z-30 overflow-y-auto transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Profile section */}
        <div className="w-full h-52 flex flex-col items-center">
          <div className="w-28 h-28 mt-6 rounded-[56px]" >
            <img
              className="w-28 h-28 rounded-[56px] object-contain object-cover"
              alt="profile avatar"
              src="./profile-avatar.jpg"
            />
          </div>
          <div className="mt-[14px] ml-[-2px] text-center">
            <div className="font-roboto font-medium text-white text-[15px] tracking-[0] leading-6">
              Your channel
            </div>
            <div className="font-roboto font-normal text-[#AAAAAA] text-xs tracking-[0.13px] leading-4 mt-[2px]">
              1nterCartel
            </div>
          </div>
        </div>

        {/* Navigation menu */}
        <ScrollArea className="h-[calc(100vh-385px)]">
          <div className="pl-[14px] pr-3 py-0">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className={`w-[231px] h-12 rounded-lg flex items-center transition-colors duration-200 cursor-pointer
                ${index === selectedMenu ? "bg-[#1f1f1f]" : "hover:bg-[#2a2a2a]"}`}
                onClick={() => {
                  setSelectedMenu(index);
                  // Close mobile menu when item is selected
                  if (window.innerWidth < 1024 && onClose) {
                    onClose();
                  }
                }}
              >
                <div className="w-6 h-6 ml-[11px] relative flex items-center justify-center">
                  <img
                    alt={item.name}
                    src={item.icon}
                  />
                </div>
                <div className="ml-6 overflow-hidden">
                  <div
                    className={`font-roboto1 ${index === selectedMenu ? "font-medium" : "font-normal"} text-white text-[15px] tracking-[0] leading-6 whitespace-nowrap`}
                  >
                    {item.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Footer section */}
        <div className="w-full mt-auto">
          <Separator className="w-full bg-[#ffffff1a]" />
          <div className="pl-[14px] pr-3 py-2">
            {footerItems.map((item, index) => (
              <div
                key={index}
                className="w-[231px] h-12 rounded-lg flex items-center cursor-pointer hover:bg-[#2a2a2a] transition-colors duration-200"
              >
                <div className="w-6 h-6 ml-[11px] relative flex items-center justify-center">
                  <img
                    alt={item.name}
                    src={item.icon}
                  />
                </div>
                <div className="ml-6 overflow-hidden">
                  <div className="font-roboto1 font-normal text-white text-[15px] tracking-[0] leading-6 whitespace-nowrap">
                    {item.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};