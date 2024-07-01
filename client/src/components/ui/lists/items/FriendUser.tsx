import { HTMLAttributes } from "react";
import { Avatar } from "../../avatar/Avatar";

type FriendUser = {
  container: HTMLAttributes<HTMLDivElement>;
  userData: {
    dataContainer: HTMLAttributes<HTMLDivElement>;
    avatar: Avatar;
    fullName: { value: string; className?: string };
    data: { value: string; className?: string };
  };
  children?: React.ReactNode;
};

export const FriendUser = ({ container, userData, children }: FriendUser) => (
  <div {...container}>
    <Avatar {...userData.avatar} />
    <div {...userData.dataContainer}>
      <span className={userData.fullName.className}>
        {userData.fullName.value}
      </span>
      <span className={userData.data.className}>{userData.data.value}</span>
    </div>
    {children}
  </div>
);
