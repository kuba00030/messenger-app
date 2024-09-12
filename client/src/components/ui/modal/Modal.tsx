import "./modal.css";
import { CloseButton, Modal } from "react-bootstrap";

export const CustomModal = ({
  size,
  title,
  children,
  show,
  onClose,
}: {
  size: "sm" | "lg" | "xl";
  title: string;
  children: React.ReactNode;
  show: boolean;
  onClose: () => void;
}) => {
  return (
    <Modal show={show} centered size={size} fullscreen="sm-down">
      <Modal.Header className="d-flex justify-content-between align-items-center bg-default px-4 py-2 border-secondary border-0">
        <Modal.Title className="fc-my-white fs-m p-0 m-0 mx-auto">
          {title}
        </Modal.Title>
        <CloseButton
          variant="white"
          className="position-absolute fs-xs end-0 me-2"
          onClick={onClose}
        ></CloseButton>
      </Modal.Header>
      <Modal.Body className="bg-my-dark p-0 overflow-auto">
        {children}
      </Modal.Body>
    </Modal>
  );
};
