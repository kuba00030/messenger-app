import { useState } from "react";
import { useLocalStorage } from "../../local-storage/useLocalStorage";

export type Link = {
  href: string;
  value: string;
};

export const useNavLinks = (links: Link[], initActiveLink: string) => {
  const { setItem } = useLocalStorage("activeLink");
  const [navLinks] = useState<Link[]>(links);
  const [activeLink, setActiveLink] = useState<string>(initActiveLink);

  const setCurrentLink = (link: string) => {
    setActiveLink(link);
    setItem(link);
  };
  return { navLinks, activeLink, setCurrentLink };
};
