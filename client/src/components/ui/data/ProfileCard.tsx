import { AvatarWithStatus } from "../avatar/avatar-with-status/AvatarWithStatus";
import { Avatar } from "../avatar/regular-avatar/Avatar";

export const ProfileCard = ({
  avatar,
  displayName,
  status,
  textClass,
}: {
  avatar?: string;
  displayName: string;
  status?: boolean;
  textClass?: string;
}) => {
  return (
    <div className="d-flex flex-row align-items-center py-2">
      {status ? (
        <AvatarWithStatus
          size="sm"
          avatar={avatar}
          imgContainerBgClass="bg-my-gray"
        />
      ) : (
        <Avatar size="sm" avatar={avatar} imgContainerBgClass="bg-my-gray" />
      )}
      <div className="ms-2 overflow-hidden">
        <span
          className={`${
            textClass ? textClass : "fs-sm fc-my-white"
          } text-truncate fw-semibold`}
        >
          {displayName}
        </span>
      </div>
    </div>
  );
};
