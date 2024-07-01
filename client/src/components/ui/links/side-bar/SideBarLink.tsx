import { Nav } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "../nav-bar/NavLink";
import "../nav-links.css";
import "./side-bar-link.css";
import "../../../../styles/global.css";
export type SideBarLink = NavLink & {
  icon: React.ReactNode;
  valueClass?: string;
  value: string;
};

export const SideBarLink = ({
  href,
  activeHref,
  className,
  activeClass,
  onClick,
  icon,
  value,
  valueClass,
}: SideBarLink) => {
  return (
    <Nav.Item className="">
      <HashLink
        smooth
        className={
          className
            ? `${activeHref.includes(href) ? activeClass : className}`
            : `${
                activeHref.includes(href)
                  ? "side-bar-link bg-default d-flex flex-column justify-content-center align-items-center text-center text-light p-3 rounded-2 tr-02 b-1 b-default"
                  : "side-bar-link nav-link-h-fill d-flex flex-column justify-content-center align-items-center text-center text-light p-3 rounded-2 tr-02 b-1 b-gray side-bar-link-h-b-default"
              }`
        }
        to={href}
        onClick={onClick}
        style={{
          textDecoration: "none",
          boxShadow: "none",
          outline: "none",
        }}
      >
        {icon}
        <span className={valueClass ? valueClass : "d-none d-xl-inline fs-xs"}>
          {value}
        </span>
      </HashLink>
    </Nav.Item>
  );
};
