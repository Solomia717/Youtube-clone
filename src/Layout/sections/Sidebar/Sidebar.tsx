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
      iconClass: "w-[19px] h-5 top-0.5 left-0.5",
    },
    {
      name: "Send feedback",
      icon: "./sidebar/feedback.svg",
      iconClass: "w-4 h-5 top-0.5 left-1",
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
          <div className="w-28 h-28 mt-6 rounded-[56px] bg-[url(./profile-avatar.jpg)] bg-cover bg-[50%_50%]" />
          <div className="mt-4 text-center">
            <div className="[font-family:'Roboto',Helvetica] font-medium text-white text-[15px] tracking-[0] leading-6">
              Your channel
            </div>
            <div className="[font-family:'Roboto',Helvetica] font-normal text-[#aaaaaa] text-xs tracking-[0.13px] leading-4">
              1nterCartel
            </div>
          </div>
        </div>

        {/* Navigation menu */}
        <ScrollArea className="h-[344px]">
          <div className="px-3 py-0 border-b">
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
                <div className="w-6 h-6 ml-3 relative">
                  <img
                    className="absolute w-[18px] h-[18px] top-[3px] left-[3px]"
                    alt={item.name}
                    src={item.icon}
                  />
                </div>
                <div className="ml-[36px] overflow-hidden">
                  <div
                    className={`[font-family:'Roboto',Helvetica] ${index === selectedMenu ? "font-medium" : "font-normal"} text-white text-[15px] tracking-[0] leading-6 whitespace-nowrap`}
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
          <div className="px-3 py-2">
            {footerItems.map((item, index) => (
              <div
                key={index}
                className="w-[231px] h-12 rounded-lg flex items-center cursor-pointer hover:bg-[#2a2a2a] transition-colors duration-200"
              >
                <div className="w-6 h-6 ml-3 relative">
                  <img
                    className={`absolute ${item.iconClass}`}
                    alt={item.name}
                    src={item.icon}
                  />
                </div>
                <div className="ml-[36px] overflow-hidden">
                  <div className="[font-family:'Roboto',Helvetica] font-normal text-white text-[15px] tracking-[0] leading-6 whitespace-nowrap">
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