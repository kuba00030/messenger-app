import { Nav } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";

export type NavLink = {
  href: string;
  value: string;
  className?: string;
};

export const NavLink = ({ value, className, href }: NavLink) => {
  return (
    <Nav.Item>
      <HashLink
        smooth
        className={className}
        to={href}
        style={{ textDecoration: "none" }}
      >
        {value}
      </HashLink>
    </Nav.Item>
  );
};
