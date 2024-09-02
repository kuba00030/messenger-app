import { Offcanvas } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "../../../../components/ui/links/nav-bar/NavLink";
import { queryElementById } from "../../../../utils/get-element/queryElementById";
import { useGetHeightOnResize } from "../../../../hooks/styles/dimensions/get-height/useGetHeightOnResize";
import { useOpenOnScroll } from "../../../../hooks/scrollbar/useOpenOnScroll";
import { useNavbarContext } from "../../../../context/navbar/NavbarContext";

export const TopNavbar = () => {
  const { isOpened } = useOpenOnScroll(true);
  const { navLinks, activeLink, setCurrentLink } = useNavbarContext();
  const { elementHeight } = useGetHeightOnResize(queryElementById("nav-bar"));

  return (
    <Navbar
      id="nav-bar"
      expand="sm"
      className="d-flex flex-row justify-content-end bg-dark m-0 position-fixed tr-02 w-100"
      style={{
        top: `${isOpened ? "0px" : `-${elementHeight}px`}`,
      }}
    >
      <Navbar.Toggle
        className="border-0 shadow-none m-0 menu-icon"
        aria-controls="main-mobile-menu"
      />
      <Navbar.Offcanvas
        className="bg-dark text-center w-75 p-4 py-sm-0"
        id="main-mobile-menu"
        placement="end"
      >
        <Offcanvas.Header
          closeButton
          closeVariant="white"
          aria-controls="main-mobile-menu"
          className="me-auto ms-4 p-0 fc-my-white"
        ></Offcanvas.Header>

        <Nav className="d-flex justify-content-end mx-auto mx-sm-0">
          {navLinks.map((link, index) => {
            return index == navLinks.length - 1 ? (
              <NavLink
                key={`nav-link-${link.value}`}
                onClick={() => setCurrentLink(link.href)}
                activeHref={activeLink}
                href={link.href}
                value={link.value}
              />
            ) : (
              <NavLink
                key={`nav-link-${link.value}`}
                onClick={() => setCurrentLink(link.href)}
                activeHref={activeLink}
                className="fw-semibold fs-sm nav-link-h-fill fc-my-white p-3 p-md-4 tr-02"
                activeClass="fw-semibold fs-sm bg-default nav-link-h-empty fc-my-white p-3 p-md-4 tr-02"
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
