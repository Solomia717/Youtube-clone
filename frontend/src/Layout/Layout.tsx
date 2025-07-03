import { useState } from "react";
import { AppRoutes } from "../components/AppRoutes";
import { Header } from "./sections/Header/Header";
import { Sidebar } from "./sections/Sidebar/Sidebar";
import { useLocation } from "react-router-dom";

export const Layout = (): JSX.Element => {
  const location = useLocation();
  const isAdminPage = location.pathname === "/admin";
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleMenuClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="w-full bg-[#282828] min-h-screen">
      <Header onMenuClick={handleMenuClick} />
      {!isAdminPage && (
        <Sidebar isOpen={isSidebarOpen} onClose={handleSidebarClose} />
      )}
      <div className={isAdminPage ? "mt-16" : "mt-16 lg:ml-64"}>
        <AppRoutes />
      </div>
    </div>
  );
};