import { Badge } from "react-bootstrap";

export type Notification = number | null;

type NotificationBadge = {
  notifications: Notification;
  className?: string;
};

export const NotificationBadge = ({
  notifications,
  className,
}: NotificationBadge) => {
  return notifications ? (
    <Badge
      className={`d-flex justify-content-center align-items-center ${className}`}
    >
      <span>{notifications}</span>
    </Badge>
  ) : (
    <></>
  );
};
