import "./dashboard.css";
import { Outlet } from "react-router";
import { SideBar } from "./sections/side-bar/SideBar";
import { ChatWindow } from "./sections/chat-panel/chat-window/ChatWindow";
import { CustomModal } from "../../components/ui/modal/Modal";
import { useModalContext } from "../../context/modal/ModalContext";

export const Dashboard = () => {
  const { modalOpened, modalContent, handleCloseModal } = useModalContext();

  return (
    <div className="dashboard-wrapper position-relative d-flex flex-column-reverse flex-md-row p-0 m-0 overflow-hidden">
      <SideBar />
      {/* sections container */}
      <div className="d-flex flex-column pt-4 bg-my-dark overflow-hidden sections-container flex-shrink-0">
        <Outlet />
      </div>
      <ChatWindow />
      <CustomModal
        show={modalOpened}
        size={modalContent.size}
        title={modalContent.title}
        onClose={handleCloseModal}
      >
        {modalContent.component}
      </CustomModal>
    </div>
  );
};
