import { SideBarLink } from "../../../components/ui/links/side-bar/SideBarLink";
import { Navbar, Offcanvas } from "react-bootstrap";
import { NotificationBadge } from "../../../components/ui/badges/NotificationBadge";
import { Avatar } from "../../../components/ui/avatar/Avatar";
import { useNavbarContext } from "../../../context/navbar/navbarContext";
import { IconButton } from "../../../components/ui/buttons/icon-button/IconButton";

type SidebarLink = {
  href: string;
  value: string;
};

const navLinks: SidebarLink[] = [
  { href: "inbox", value: "Inbox" },
  { href: "contacts", value: "Contacts" },
  { href: "calls", value: "Calls" },
  { href: "settings", value: "Settings" },
  { href: "#", value: "Color mode" },
  { href: "#", value: "Sign out" },
];

const iconsArray: string[] = [
  "bi bi-wechat",
  "bi bi-person-lines-fill",
  "bi bi-telephone",
  "bi bi-gear",
  "bi bi-moon-stars-fill",
  "bi bi-box-arrow-right",
];

export const SideBar = () => {
  const { isOpened, setIsOpened, setCurrentLink, activeLink } =
    useNavbarContext();

  return (
    <Navbar
      expand="md"
      className="d-flex flex-column justify-content-between py-sm-0 gap-4 bg-dark"
    >
      <Navbar.Offcanvas
        className="bg-dark d-flex flex-column mt-0 w-75 overflow-auto py-4"
        id="main-mobile-menu"
        placement="start"
        show={isOpened}
      >
        <Offcanvas.Header
          closeButton
          onClick={() => setIsOpened(!isOpened)}
          closeVariant="white"
          aria-controls="main-mobile-menu"
          className="me-4 text-light"
        ></Offcanvas.Header>
        <Avatar className="avatar-img flex-shrink-0 mx-auto mb-auto mb-md-0 rounded-circle bg-light" />
        <Navbar className="d-flex flex-column flex-fill p-0">
          <ul className="d-flex flex-column flex-fill">
            {navLinks.map((link, index) => {
              const handleClick = () => {
                if (link.value === "Sign out") {
                  console.log("User signed out");
                } else if (link.value === "Color mode") {
                  console.log("Dark mode on");
                } else {
                  setCurrentLink(link.href);
                }
              };
              return (
                <li
                  className={link.value === "Color mode" ? "mt-auto" : ""}
                  key={index}
                >
                  {link.value === "Color mode" || link.value === "Sign out" ? (
                    <IconButton
                      button={{
                        type: "button",
                        className:
                          "m-0 p-0 mt-4 px-4 btn-link-style side-bar-link d-flex flex-column justify-content-center align-items-center rounded-2 bg-transparent border-0 shadow-none tr-02",
                      }}
                      icon={
                        <i
                          className={`${iconsArray[index]} ${
                            activeLink.includes(link.href)
                              ? "side-bar-link-active"
                              : "text-secondary"
                          } position-relative tr-02 fs-4`}
                        />
                      }
                    />
                  ) : (
                    <SideBarLink
                      onClick={handleClick}
                      href={link.href}
                      icon={
                        <i
                          className={`${iconsArray[index]} ${
                            activeLink.includes(link.href)
                              ? "side-bar-link-active"
                              : "text-secondary"
                          } position-relative tr-02 fs-4`}
                        >
                          {index < 3 && (
                            <NotificationBadge
                              className="position-absolute rounded-circle bg-danger icon-badge fs-xxs"
                              notifications={8}
                            />
                          )}
                        </i>
                      }
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </Navbar>
      </Navbar.Offcanvas>
    </Navbar>
  );
};
