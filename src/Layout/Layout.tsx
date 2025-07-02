import { AnalyticsOverview } from "./sections/AnalyticsOverview/AnalyticsOverview";
import { Header } from "./sections/Header/Header";
import { Sidebar } from "./sections/Sidebar/Sidebar";

export const Layout = (): JSX.Element => {
  return (
    <div className="w-full bg-[#282828] min-h-screen">
      <Header />
      <Sidebar />
      <div className="ml-64 mt-16">
        <AnalyticsOverview />
      </div>
    </div>
  );
};