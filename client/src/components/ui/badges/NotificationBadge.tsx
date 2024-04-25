type NotificationBadge = {
  iconClass: string;
  notifications?: number;
};

export const NotificationBadge = ({
  iconClass,
  notifications,
}: NotificationBadge) => {
  return (
    <i className={iconClass}>
      {notifications && (
        <div
          className={`bg-danger icon-badge d-flex align-items-center justify-content-center fs-xs`}
        >
          {notifications}
        </div>
      )}
    </i>
  );
};
