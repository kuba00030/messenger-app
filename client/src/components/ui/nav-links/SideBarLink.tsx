import { Nav } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";

export type SideBarLink = {
  href: string;
  className?: string;
  text?: string;
  textClass?: string;
  icon: React.ReactNode;
};

export const SideBarLink = ({
  href,
  className,
  text,
  textClass,
  icon,
}: SideBarLink) => {
  return (
    <Nav.Item>
      <HashLink
        smooth
        className={className}
        to={href}
        style={{ textDecoration: "none" }}
      >
        {icon}
        <span className={textClass}>{text}</span>
      </HashLink>
    </Nav.Item>
  );
};
