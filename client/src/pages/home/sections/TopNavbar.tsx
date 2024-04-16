import { Offcanvas } from "react-bootstrap";
import { NavLink } from "../../../components/ui/nav-links/NavLink";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const TopNavbar = () => {
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
        "btn-fill fw-bold navbar-link fs-sm rounded-pill btn-empty text-light p-2 px-md-4",
      href: "sign_up",
      value: "Get Started",
    },
  ];
  return (
    <Navbar
      expand="sm"
      bg="dark"
      variant="dark"
      className="d-flex flex-row justify-content-end m-0 py-4"
    >
      <Navbar.Toggle
        className="border-0 shadow-none m-0"
        aria-controls="main-mobile-menu"
      />
      <Navbar.Offcanvas
        variant="dark"
        className="bg-dark text-center p-0 m-0 w-75"
        id="main-mobile-menu"
        placement="end"
      >
        <Offcanvas.Header
          closeButton
          closeVariant="white"
          aria-controls="main-mobile-menu"
          className="me-auto text-light"
        ></Offcanvas.Header>
        <Nav className="d-flex justify-content-end gap-2 gap-lg-4 mx-auto mx-sm-0">
          {navLinks.map((link) => {
            return (
              <NavLink
                key={`nav-link-${link.value}`}
                className={
                  link.className
                    ? link.className
                    : "fw-bold navbar-link fs-sm rounded-pill btn-empty text-light p-2 px-md-4"
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
