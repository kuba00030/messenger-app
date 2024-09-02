import "../avatar.css";

export type TAvatar = {
  size: "sm" | "m";
  avatar: string | null | undefined;
  imgContainerBgClass: string;
};

export const Avatar = ({ avatar, size, imgContainerBgClass }: TAvatar) =>
  avatar ? (
    <img
      src={avatar}
      className={`rounded-circle ${
        size === "sm" ? "avatar-img-sm" : "avatar-img"
      }`}
    />
  ) : (
    <div
      className={`${
        size === "sm" ? "avatar-img-sm" : "avatar-img"
      } ${imgContainerBgClass} flex-shrink-0 rounded-circle fc-my-white d-flex justify-content-center align-items-center`}
    >
      #
    </div>
  );
