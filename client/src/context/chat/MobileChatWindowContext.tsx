import { createContext, useContext, useEffect, useState } from "react";
import { useWindowWidth } from "../../hooks/window/useWindowWidth";
import { ContextProviderProps } from "../user/UserContext";

type TMobileChatWindowProvider = {
  isOpened: boolean;
  handleToggleChat: () => void;
};

export const MobileChatWindowContext =
  createContext<TMobileChatWindowProvider | null>(null);

export const MobileChatWindowContextProvider = ({
  children,
}: ContextProviderProps) => {
  const [isOpened, setIsOpened] = useState<boolean>(true);
  const { windowWidth } = useWindowWidth();

  const handleToggleChat = () => {
    if (windowWidth < 768) setIsOpened(!isOpened);
  };

  useEffect(() => {
    if (windowWidth > 767) setIsOpened(true);
  }, [windowWidth]);

  return (
    <MobileChatWindowContext.Provider value={{ isOpened, handleToggleChat }}>
      {children}
    </MobileChatWindowContext.Provider>
  );
};

export const useMobileChatWindowContext = () => {
  const context = useContext(MobileChatWindowContext);

  if (!context) {
    throw new Error(
      "useMobileChatWindowContext should be used within a MobileChatWindowContextProvider"
    );
  }
  return context;
};
