import { Button } from "react-bootstrap";
import { Avatar } from "../../avatar/Avatar";

const actionButtnons = [
  {
    icon: "bi-telephone-fill",
  },
  {
    icon: "bi-camera-video-fill",
  },
  {
    icon: "bi-info",
  },
];

export const ChatHeader = () => {
  return (
    <div className="d-flex flex-row gap-1 gap-sm-2 py-4 border-bottom border-gray">
      <Avatar className="avatar-img-sm flex-shrink-0 bg-dark rounded-circle ms-2 ms-sm-4" />
      <div className="d-flex flex-column fw-semibold overflow-hidden">
        <span className="fs-sm text-truncate">User Name</span>
        <span className="text-secondary fs-xs text-truncate">
          Last time<span className="ms-2">a</span>
        </span>
      </div>
      {actionButtnons.map((button, index) => (
        <Button
          className={`rounded-circle bg-transparent  ${
            index == 0 && "ms-auto"
          }  btn-fill-gray my-auto border-0 text-secondary fs-m shadow-none`}
        >
          <i className={`bi ${button.icon}`} />
        </Button>
      ))}
    </div>
  );
};
