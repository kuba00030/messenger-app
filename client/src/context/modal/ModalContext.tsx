import { createContext, useContext, useState } from "react";
import { ContextProviderProps } from "../user/UserContext";
import { useToggleCompoenent } from "../../hooks/toggle-component/useToggleComponent";

type TModalContent = {
  title: string;
  size: "sm" | "xl" | "lg";
  onClose?: () => void;
  component: React.ReactNode;
};

type TModalContext = {
  modalContent: TModalContent;
  setModalContent: (modalContent: TModalContent) => void;
  modalOpened: boolean;
  handleCloseModal: () => void;
  handleOpenModal: () => void;
};

const ModalContext = createContext<TModalContext | null>(null);

export const ModalContextProvider = ({ children }: ContextProviderProps) => {
  const [modalContent, setModalContent] = useState<TModalContent>({
    title: "",
    size: "sm",
    component: <></>,
  });

  const { isOpened: modalOpened, handleToggleComponent } =
    useToggleCompoenent(false);

  const handleCloseModal = () => {
    if (modalContent.onClose) {
      modalContent.onClose();
    }
    handleToggleComponent();
  };

  const handleOpenModal = () => {
    handleToggleComponent();
  };

  return (
    <ModalContext.Provider
      value={{
        modalContent,
        setModalContent,
        modalOpened,
        handleOpenModal,
        handleCloseModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error(
      "useModalContext should be used within ModalContextProvider"
    );
  }

  return context;
};
