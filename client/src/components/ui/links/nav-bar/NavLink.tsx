import { Nav } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import "../nav-links.css";

export type NavLink = {
  href: string;
  activeHref: string;
  value: string;
  className?: string;
  activeClass?: string;
  onClick: () => void;
};

export const NavLink = ({
  value,
  className,
  activeClass,
  href,
  activeHref,
  onClick,
}: NavLink) => {
  return (
    <Nav.Item className="d-flex p-0">
      <HashLink
        smooth
        className={
          className
            ? `${activeHref.includes(href) ? activeClass : className}`
            : `${
                activeHref.includes(href)
                  ? "fw-semibold fs-sm bg-dark nav-link-h-fill text-light text-center p-3 p-md-4 m-auto tr-02"
                  : "fw-semibold fs-sm bg-default nav-link-h-empty text-light text-center p-3 p-md-4 m-auto tr-02"
              }`
        }
        onClick={onClick}
        to={href}
        style={{
          textDecoration: "none",
          boxShadow: "none",
          outline: "none",
        }}
      >
        {value}
      </HashLink>
    </Nav.Item>
  );
};
