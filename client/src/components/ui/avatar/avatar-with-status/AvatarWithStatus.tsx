import "../avatar.css";
import { Avatar, TAvatar } from "../regular-avatar/Avatar";

type AvatarWithStatus = TAvatar;

export const AvatarWithStatus = ({
  size,
  avatar,
  imgContainerBgClass,
}: AvatarWithStatus) => {
  return (
    <div className="position-relative">
      <Avatar
        size={size}
        avatar={avatar}
        imgContainerBgClass={imgContainerBgClass}
      />
      <div className="status-bar rounded-circle bg-default "></div>
    </div>
  );
};
