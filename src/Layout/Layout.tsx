import { AppRoutes } from "../components/AppRoutes";
import { Header } from "./sections/Header/Header";
import { Sidebar } from "./sections/Sidebar/Sidebar";
import { useLocation } from "react-router-dom";

export const Layout = (): JSX.Element => {
  const location = useLocation();
  const isAdminPage = location.pathname === "/admin";

  return (
    <div className="w-full bg-[#282828] min-h-screen">
      <Header />
      {!isAdminPage && <Sidebar />}
      <div className={isAdminPage ? "mt-16" : "ml-64 mt-16"}>
        <AppRoutes />
      </div>
    </div>
  );
};