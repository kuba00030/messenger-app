import { SideBarLink } from "../../../components/ui/links/side-bar/SideBarLink";
import { Button, Navbar, Offcanvas } from "react-bootstrap";
import { NotificationBadge } from "../../../components/ui/badges/NotificationBadge";
import { Avatar } from "../../../components/ui/avatar/Avatar";
import { useNavbarContext } from "../../../context/navbar/navbarContext";
import { Link } from "../../../hooks/nav-bar/nav-links/useNavLinks";
import { PrimaryButton } from "../../../components/ui/buttons/primary-button/PrimaryButton";

const navLinks: Link[] = [
  { href: "inbox", value: "Inbox" },
  { href: "add-friend", value: "Add friend" },
  { href: "notifications", value: "Notification" },
  { href: "settings", value: "Settings" },
];

const iconsArray: string[] = [
  "bi bi-inbox-fill",
  "bi bi-person-fill-add",
  "bi bi-bell-fill",
  "bi bi-gear-fill",
];

export const SideBar = () => {
  const { isOpened, setIsOpened, activeLink, setCurrentLink } =
    useNavbarContext();
  return (
    <Navbar
      expand="md"
      className="d-flex flex-column justify-content-between px-0 px-md-4 py-sm-0 gap-4 bg-dark"
    >
      <Navbar.Offcanvas
        className="bg-dark d-flex flex-column justify-content-between mt-0 w-75 overflow-auto py-4"
        id="main-mobile-menu"
        placement="start"
        show={isOpened}
      >
        <Offcanvas.Header
          closeButton
          onClick={() => setIsOpened(!isOpened)}
          closeVariant="white"
          aria-controls="main-mobile-menu"
          className="ms-auto me-4 text-light"
        ></Offcanvas.Header>
        <Avatar className="avatar-img-sm flex-shrink-0 mx-auto mb-auto mb-md-0 rounded-circle bg-light" />
        <Navbar className="d-flex flex-column gap-4">
          {navLinks.map((link, index) => {
            if (link.value === "Settings") {
              return (
                <SideBarLink
                  key={index}
                  activeHref={activeLink}
                  onClick={() => setCurrentLink(link.href)}
                  href={"/settings"}
                  value={link.value}
                  icon={<i className={`${iconsArray[index]} fs-3`} />}
                />
              );
            }

            return (
              <SideBarLink
                key={index}
                activeHref={activeLink}
                onClick={() => setCurrentLink(link.href)}
                href={link.href}
                value={link.value}
                icon={
                  <i className={`${iconsArray[index]} fs-3 position-relative`}>
                    <NotificationBadge
                      className="position-absolute bg-danger rounded-circle icon-badge fs-xs fw-semibold"
                      notifications={5}
                    />
                  </i>
                }
              />
            );
          })}
        </Navbar>
        <PrimaryButton
          className="fw-bold px-2 rounded-2 bg-default btn-h-primary border-0 tr-02 mx-auto mx-md-0 mt-auto mt-md-0"
          textValue="Sign out"
          type="button"
          onClick={() => {
            console.log("Button clicked");
          }}
        />
      </Navbar.Offcanvas>
    </Navbar>
  );
};
// icon-badge
