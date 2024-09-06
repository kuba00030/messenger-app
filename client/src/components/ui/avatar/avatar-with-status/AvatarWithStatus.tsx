import "../avatar.css";
import { Avatar, TAvatar } from "../regular-avatar/Avatar";

type AvatarWithStatus = TAvatar;

export const StatusDot = ({ className }: { className?: string }) => {
  return (
    <div
      className={
        className
          ? className
          : "status-bar status-dot rounded-circle bg-default"
      }
    ></div>
  );
};

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
      <StatusDot />
    </div>
  );
};
