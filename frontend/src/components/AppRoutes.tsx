import { Routes, Route } from "react-router-dom";
import { AnalyticsOverview } from "../Layout/sections/AnalyticsOverview/AnalyticsOverview";
import { Admin } from "./Adnin/Admin";

export const AppRoutes = (): JSX.Element => {
    return (
        <Routes>
            <Route path="/" element={<AnalyticsOverview />} />
            <Route path="/admin" element={<Admin />} />
        </Routes>
    );
};