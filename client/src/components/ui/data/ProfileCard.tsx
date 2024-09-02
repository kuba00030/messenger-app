import { AvatarWithStatus } from "../avatar/avatar-with-status/AvatarWithStatus";
import { Avatar } from "../avatar/regular-avatar/Avatar";

export const ProfileCard = ({
  avatar,
  displayName,
  status,
}: {
  avatar?: string;
  displayName: string;
  status?: boolean;
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
        <span className="fs-sm fc-my-white text-truncate">{displayName}</span>
      </div>
    </div>
  );
};
