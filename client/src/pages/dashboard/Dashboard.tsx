import { Outlet } from "react-router";
import { SideBar } from "./sections/SideBar";
import "../../styles/pages/dashboard/dashboard.css";

export const Dashboard = () => {
  return (
    <div className="dashboard-wrapper d-flex justify-content-center align-items-center bg-secondary">
      <div className="dashboard-container d-flex flex-row overflow-hidden bg-light">
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
};
