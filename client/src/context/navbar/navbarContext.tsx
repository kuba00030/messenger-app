import { createContext, useContext } from "react";
import { ContextProviderProps } from "../userContext/userContext";
import { Link, useNavLinks } from "../../hooks/nav-bar/nav-links/useNavLinks";
import { useLocalStorage } from "../../hooks/local-storage/useLocalStorage";
import { useOpenOnClick } from "../../hooks/open-element/open-on-click/useOpenOnClick";

type NavbarContext = {
  isOpened: boolean;
  setIsOpened: (isOpened: boolean) => void;
  navLinks: Link[];
  activeLink: string;
  setCurrentLink: (link: string) => void;
};

export const NavbarContext = createContext<NavbarContext | null>(null);

const links: Link[] = [
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
    href: "/sign-in",
    value: "Sign in",
  },
  {
    href: "/sign-up",
    value: "Get Started",
  },
];

export const NavbarContextProvider = ({ children }: ContextProviderProps) => {
  const { getItem } = useLocalStorage("activeLink");
  const { isOpened, setIsOpened } = useOpenOnClick(false);
  const { navLinks, activeLink, setCurrentLink } = useNavLinks(
    links,
    getItem() ? getItem() : "/#home"
  );

  return (
    <NavbarContext.Provider
      value={{ isOpened, setIsOpened, setCurrentLink, activeLink, navLinks }}
    >
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbarContext = () => {
  const context = useContext(NavbarContext);

  if (!context) {
    throw new Error(
      "useNvbarContext should be used within a NavbarContextProvider"
    );
  }
  return context;
};
