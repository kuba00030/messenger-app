import "./default.css";
import { Outlet } from "react-router-dom";
import { TopNavbar } from "./home/sections/navbar/TopNavbar";

export const Default = () => {
  return (
    <div className="default-page d-flex flex-column m-0 p-0 overflow-hidden">
      <TopNavbar />
      <Outlet />
    </div>
  );
};
