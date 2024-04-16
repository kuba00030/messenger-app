import { Outlet } from "react-router-dom";
import { TopNavbar } from "./home/sections/TopNavbar";
import "../styles/pages/default.css";

export const Default = () => {
  return (
    <div
      className="default-page d-flex flex-column m-0 p-0 overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      <TopNavbar />
      <Outlet />
    </div>
  );
};
