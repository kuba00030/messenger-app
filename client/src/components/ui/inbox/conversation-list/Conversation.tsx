import { Button } from "react-bootstrap";
import { Avatar } from "../../avatar/Avatar";
import { NotificationBadge } from "../../badges/NotificationBadge";

type ChatListItem = {
  avatar: any;
  user: {
    name: string;
    lastName: string;
  };
  message: {
    value: string;
    sent: string;
  };
  lastTimeOnline: string;
  notyfication: number;
};

export const Conversation = () => {
  return (
    <Button className="w-100 bg-transparent border-0 p-0 p-md-4 mt-4 rounded-2 inbox-chat-container tr-02">
      <div className="d-flex flex-row overflow-hidden">
        <Avatar className="avatar-img-sm bg-dark rounded-circle flex-shrink-0 ms-auto me-auto ms-md-0 me-md-2" />
        <div className="d-none d-md-flex flex-column overflow-hidden">
          <span className="fw-bold text-dark fs-sm text-truncate">
            User Name
          </span>
          <span className="fs-xs text-secondary fw-semibold me-auto text-truncate">
            status
          </span>
        </div>
        <span className="d-none d-lg-inline ms-auto text-secondary fs-sm fw-semibold text-truncate">
          3h ago
        </span>
      </div>
      <div className="d-none d-md-flex flex-row">
        <div className="text-truncate text-secondary fw-semibold">
          Some random text message that has been send some time ago
        </div>
        <NotificationBadge
          className="bg-danger rounded-circle inbox-message-badge fs-xs fw-semibold"
          notifications={5}
        />
      </div>
    </Button>
  );
};
