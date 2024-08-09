import { SideBarLink } from "../../../components/ui/links/side-bar/SideBarLink";
import { Navbar } from "react-bootstrap";
import { NotificationBadge } from "../../../components/ui/badges/NotificationBadge";
import { Avatar } from "../../../components/ui/avatar/Avatar";
import { useNavbarContext } from "../../../context/navbar/navbarContext";
import { IconButton } from "../../../components/ui/buttons/icon-button/IconButton";
import { useWindowWidth } from "../../../hooks/window/useWindowWidth";

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
  const { setCurrentLink, activeLink } = useNavbarContext();
  const { windowWidth } = useWindowWidth();
  return (
    <Navbar className="d-flex flex-row-reverse flex-md-column bg-dark p-0 m-0">
      <ul className="d-flex flex-row flex-md-column flex-fill align-items-center justify-content-evenly my-0 py-0 py-md-4">
        {windowWidth > 500 && (
          <Avatar className="avatar-img flex-shrink-0 rounded-circle bg-white" />
        )}
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
              className={link.value === "Color mode" ? "mt-md-auto" : ""}
              key={index}
            >
              {link.value === "Color mode" || link.value === "Sign out" ? (
                <IconButton
                  button={{
                    type: "button",
                    className:
                      "mx-md-0 p-0 mt-md-4 px-md-4 btn-link-style side-bar-link d-flex flex-column justify-content-center align-items-center rounded-2 bg-transparent border-0 shadow-none tr-02",
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
  );
};
