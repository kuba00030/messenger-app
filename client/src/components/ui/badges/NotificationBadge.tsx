import { Badge } from "react-bootstrap";

type NotificationBadge = {
  notifications: number | string;
  className?: string;
};

export const NotificationBadge = ({
  notifications,
  className,
}: NotificationBadge) => {
  return (
    <Badge
      className={`d-flex justify-content-center align-items-center ${className}`}
    >
      {notifications}
    </Badge>
  );
};
