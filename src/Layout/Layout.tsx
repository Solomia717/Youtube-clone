import { AnalyticsOverview } from "./sections/AnalyticsOverview/AnalyticsOverview";
import { Header } from "./sections/Header/Header";
import { Sidebar } from "./sections/Sidebar/Sidebar";

export const Layout = (): JSX.Element => {
  return (
    <div className="w-full bg-[#282828]">
      <div className="flex flex-col h-full">
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <AnalyticsOverview />
        </div>
      </div>
    </div>
  );
};
