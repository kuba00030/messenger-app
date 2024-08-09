import { Nav } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "../nav-bar/NavLink";
import "../nav-links.css";
import "./side-bar-link.css";
import "../../../../styles/global.css";
import { useNavbarContext } from "../../../../context/navbar/navbarContext";
export type SideBarLink = Omit<NavLink, "value" | "activeHref"> & {
  icon: React.ReactNode;
};

export const SideBarLink = ({
  href,
  className,
  activeClass,
  onClick,
  icon,
}: SideBarLink) => {
  const { activeLink } = useNavbarContext();
  return (
    <Nav.Item className="my-4">
      <HashLink
        smooth
        className={
          className
            ? `${activeLink.includes(href) ? activeClass : className}`
            : `${
                activeLink.includes(href)
                  ? "px-4 side-bar-link side-bar-link-active d-flex flex-column justify-content-center align-items-center rounded-2 tr-02"
                  : "px-4 side-bar-link d-flex flex-column justify-content-center align-items-center rounded-2 tr-02"
              }`
        }
        style={{
          textDecoration: "none",
          boxShadow: "none",
          outline: "none",
        }}
        to={href}
        onClick={onClick}
      >
        {icon}
      </HashLink>
    </Nav.Item>
  );
};
