import "../../../styles/pages/dashboard/side-bar/sideBar.css";
import { NavLink } from "../../../components/ui/nav-links/NavLink";
import { SideBarLink } from "../../../components/ui/nav-links/SideBarLink";
import { Button, Navbar, Offcanvas } from "react-bootstrap";
import { NotificationBadge } from "../../../components/ui/badges/NotificationBadge";

const navLinks: NavLink[] = [
  { href: "inbox", value: "Inbox" },
  { href: "add_friend", value: "Add friend" },
  { href: "notification", value: "Notification" },
  { href: "settings", value: "Settings" },
];

const iconsArray: string[] = [
  "bi bi-inbox-fill",
  "bi bi-person-fill-add",
  "bi bi-bell-fill",
  "bi bi-gear-fill",
];
export const SideBar = () => {
  return (
    <Navbar
      expand="md"
      className="side-bar-container d-flex flex-column justify-content-between py-4 gap-4 "
    >
      <Navbar.Toggle
        className="border-0 shadow-none ms-auto menu-icon"
        aria-controls="main-mobile-menu"
      />
      <Navbar.Offcanvas
        className="bg-dark d-flex flex-column py-4 w-75"
        id="main-mobile-menu"
        placement="start"
      >
        <Offcanvas.Header
          closeButton
          closeVariant="white"
          aria-controls="main-mobile-menu"
          className="ms-auto me-4 p-0 text-light"
        ></Offcanvas.Header>
        <div className="avatar-img mx-auto rounded-circle mt-4 mb-auto bg-light"></div>
        <Navbar className="d-flex flex-column gap-4">
          {navLinks.map((link, index) => {
            if (link.value === "Settings") {
              return (
                <SideBarLink
                  href={"/dashboard"}
                  className="side-bar-link d-flex flex-column justify-content-center align-items-center text-light p-3 rounded-2 tr-02"
                  text={link.value}
                  textClass="side-bar-link-value fs-xs fw-semibold"
                  icon={
                    <NotificationBadge
                      iconClass={`${iconsArray[index]} position-relative m-auto fs-3`}
                    />
                  }
                />
              );
            }

            return (
              <SideBarLink
                href={"/dashboard"}
                className="side-bar-link d-flex flex-column justify-content-center align-items-center text-light rounded-2 tr-02"
                textClass="side-bar-link-value fs-xs fw-semibold"
                text={link.value}
                icon={
                  <NotificationBadge
                    iconClass={`${iconsArray[index]} position-relative fs-3`}
                    notifications={5}
                  />
                }
              />
            );
          })}
        </Navbar>
        <Button className="btn-fill mt-auto mb-4 mx-auto text-light fw-semibold rounded-2">
          Sign out
        </Button>
      </Navbar.Offcanvas>
    </Navbar>
  );
};
