import { Offcanvas } from "react-bootstrap";
import { NavLink } from "../../../components/ui/nav-links/NavLink";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const navLinks: NavLink[] = [
  {
    href: "/#home",
    value: "Home",
  },
  {
    href: "/#product",
    value: "Product",
  },
  {
    href: "/#about",
    value: "About us",
  },
  {
    href: "sign_in",
    value: "Sign in",
  },
  {
    className:
      "btn-fill fw-semibold navbar-link fs-sm rounded-2 text-light p-2 px-md-4 tr-02",
    href: "sign_up",
    value: "Get Started",
  },
];
export const TopNavbar = () => {
  return (
    <Navbar
      expand="sm"
      className="d-flex flex-row justify-content-end bg-dark m-0 py-4 py-md-0"
    >
      <Navbar.Toggle
        className="border-0 shadow-none m-0 menu-icon"
        aria-controls="main-mobile-menu"
      />
      <Navbar.Offcanvas
        className="bg-dark text-center py-4 w-75"
        id="main-mobile-menu"
        placement="end"
      >
        <Offcanvas.Header
          closeButton
          closeVariant="white"
          aria-controls="main-mobile-menu"
          className="me-auto ms-4 p-0 text-light"
        ></Offcanvas.Header>
        <Nav className="d-flex justify-content-end gap-4 mx-auto mx-sm-0">
          {navLinks.map((link) => {
            return (
              <NavLink
                key={`nav-link-${link.value}`}
                className={
                  link.className
                    ? link.className
                    : "fw-semibold navbar-link fs-sm rounded-2 btn-empty text-light p-2 px-md-4 tr-02"
                }
                href={link.href}
                value={link.value}
              />
            );
          })}
        </Nav>
      </Navbar.Offcanvas>
    </Navbar>
  );
};
